import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Log all requests
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

const clientPath = path.join(__dirname, '../client');
console.log('Client path:', clientPath);

// Serve static assets
app.use('/assets', express.static(path.join(clientPath, 'assets'), {
  maxAge: '1y',
  immutable: true
}));

// Serve other static files
app.use(express.static(clientPath, { maxAge: '1d' }));

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Handle API routes - use app.use instead of app.get
app.use('/api', (req, res) => {
  res.status(404).json({ error: 'API not found' });
});

// ✅ FIXED: Use app.use for catch-all instead of app.get('*')
app.use((req, res) => {
  const indexPath = path.join(clientPath, 'index.html');
  console.log('Serving index.html from:', indexPath);
  
  if (fs.existsSync(indexPath)) {
    res.sendFile(indexPath);
  } else {
    console.error('index.html not found at:', indexPath);
    res.status(404).send('index.html not found');
  }
});

// Error handler
app.use((err: any, req: any, res: any, next: any) => {
  console.error('Server error:', err);
  res.status(500).send('Internal Server Error');
});

export default app;