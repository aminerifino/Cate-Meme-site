import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

app.use(express.static(__dirname));

// Express Router Navigation Routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.get(['/learn', '/academy'], (req, res) => {
  res.sendFile(path.join(__dirname, 'learn.html'));
});

app.get('/raids', (req, res) => {
  res.sendFile(path.join(__dirname, 'raids.html'));
});

app.get('/arcade', (req, res) => {
  res.sendFile(path.join(__dirname, 'arcade.html'));
});

app.get('/vocab', (req, res) => {
  res.sendFile(path.join(__dirname, 'vocab.html'));
});

app.get('/studio', (req, res) => {
  res.sendFile(path.join(__dirname, 'studio.html'));
});

app.get('/flyers', (req, res) => {
  res.sendFile(path.join(__dirname, 'flyers.html'));
});

// Fallback to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, '0.0.0.0', () => {
  console.log(`CATE Server running on http://0.0.0.0:${PORT}`);
});

