// src/server.ts (Express fallback)
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Try to find the client files
const clientPaths = [
  path.join(__dirname, '../.output/public'),
  path.join(__dirname, '../dist/client'),
  path.join(__dirname, '../public'),
];

let clientPath = '';
for (const p of clientPaths) {
  if (fs.existsSync(p)) {
    clientPath = p;
    console.log(`✅ Found client files at: ${p}`);
    break;
  }
}

if (!clientPath) {
  console.error('❌ No client files found!');
  clientPath = path.join(__dirname, '../public');
}

// Serve static files
app.use('/assets', express.static(path.join(clientPath, 'assets'), {
  maxAge: '1y',
  immutable: true
}));

app.use(express.static(clientPath, { maxAge: '1d' }));

// Health check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'ok', 
    clientPath,
    files: fs.existsSync(clientPath) ? fs.readdirSync(clientPath) : []
  });
});

// API routes
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'API not found' });
});

// Catch-all route
app.use((req, res) => {
  const indexPath = path.join(clientPath, 'index.html');
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    res.status(404).send(`index.html not found at: ${indexPath}`);
  }
});

// Export for Vercel
export default app;