import "./lib/error-capture";
import { consumeLastCapturedError } from "./lib/error-capture";
import { renderErrorPage } from "./lib/error-page";
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { promises as fs } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

type ServerEntry = {
  fetch: (request: Request, env: unknown, ctx: unknown) => Promise<Response> | Response;
};

let serverEntryPromise: Promise<ServerEntry> | undefined;

async function getServerEntry(): Promise<ServerEntry> {
  if (!serverEntryPromise) {
    serverEntryPromise = import("@tanstack/react-start/server-entry").then(
      (m) => (m.default ?? m) as ServerEntry,
    );
  }
  return serverEntryPromise;
}

// h3 swallows in-handler throws into a normal 500 Response with body
// {"unhandled":true,"message":"HTTPError"} — try/catch alone never fires for those.
async function normalizeCatastrophicSsrResponse(response: Response): Promise<Response> {
  if (response.status < 500) return response;
  const contentType = response.headers.get("content-type") ?? "";
  if (!contentType.includes("application/json")) return response;

  const body = await response.clone().text();
  if (!body.includes('"unhandled":true') || !body.includes('"message":"HTTPError"')) {
    return response;
  }

  console.error(consumeLastCapturedError() ?? new Error(`h3 swallowed SSR error: ${body}`));
  return new Response(renderErrorPage(), {
    status: 500,
    headers: { "content-type": "text/html; charset=utf-8" },
  });
}

// Helper to serve static files
async function serveStaticFile(url: string): Promise<Response | null> {
  try {
    // Remove leading slash and query params
    const pathname = new URL(url).pathname;

    // Only handle asset requests
    if (!pathname.startsWith('/assets/')) {
      return null;
    }

    // Try to serve from client output
    const filePath = join(__dirname, '../client', pathname);
    let content: ArrayBuffer;

    try {
      const fileBuffer = await fs.readFile(filePath);
      content = fileBuffer.buffer.slice(fileBuffer.byteOffset, fileBuffer.byteOffset + fileBuffer.byteLength);
    } catch (error) {
      if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
        return null;
      }
      throw error;
    }

    const ext = pathname.split('.').pop()?.toLowerCase() || '';
    const contentType = {
      'jpg': 'image/jpeg',
      'jpeg': 'image/jpeg',
      'png': 'image/png',
      'gif': 'image/gif',
      'svg': 'image/svg+xml',
      'webp': 'image/webp',
      'css': 'text/css',
      'js': 'application/javascript',
      'json': 'application/json',
    }[ext] || 'application/octet-stream';

    return new Response(content, {
      headers: {
        'Content-Type': contentType,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('Error serving static file:', error);
  }
  return null;
}

export default {
  async fetch(request: Request, env: unknown, ctx: unknown) {
    const url = new URL(request.url);
    
    // 1. Try to serve static files first (images, etc.)
    const staticFile = await serveStaticFile(url.toString());
    if (staticFile) {
      return staticFile;
    }

    // 2. Try SSR through TanStack Start
    try {
      const handler = await getServerEntry();
      const response = await handler.fetch(request, env, ctx);
      
        // If SSR returns 404, fallback to SPA mode
      if (response.status === 404) {
        console.log(`SSR returned 404 for ${url.pathname}, falling back to SPA`);
        return await serveSPA();
      }
      
      return await normalizeCatastrophicSsrResponse(response);
    } catch (error) {
      console.error('SSR Error:', error);
      // Fallback to SPA mode on any SSR error
      return await serveSPA();
    }
  },
};

// SPA fallback - serve index.html for client-side routing
async function serveSPA(): Promise<Response> {
  try {
    const indexPath = join(__dirname, '../client/index.html');
    const fileBuffer = await fs.readFile(indexPath);
    const content = fileBuffer.buffer.slice(fileBuffer.byteOffset, fileBuffer.byteOffset + fileBuffer.byteLength);

    return new Response(content, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'no-cache',
      },
    });
  } catch (error) {
    if ((error as NodeJS.ErrnoException).code === 'ENOENT') {
      return new Response('Index file not found', { status: 404 });
    }
    console.error('Error serving SPA:', error);
    return new Response('Server error', { status: 500 });
  }
}