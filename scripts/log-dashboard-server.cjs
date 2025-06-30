#!/usr/bin/env node

/**
 * Log Dashboard Server
 * Serves log files with a minimal HTTP interface so no extra
 * dependencies are required.
 */

const http = require('http');
const fs = require('fs');
const path = require('path');

const logsDir = path.join(__dirname, '..', 'logs');
const port = process.env.PORT || 9000;

function listLogs() {
  if (!fs.existsSync(logsDir)) return [];
  return fs.readdirSync(logsDir).filter(f => f.endsWith('.log'));
}

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    const links = listLogs()
      .map(f => `<li><a href="/logs/${f}">${f}</a></li>`) 
      .join('');
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.end(`<h1>Zion App Log Dashboard</h1><ul>${links}</ul>`);
    return;
  }

  if (req.url.startsWith('/logs/')) {
    const filePath = path.join(logsDir, path.basename(req.url));
    if (fs.existsSync(filePath)) {
      res.writeHead(200, { 'Content-Type': 'text/plain' });
      fs.createReadStream(filePath).pipe(res);
    } else {
      res.writeHead(404);
      res.end('Not found');
    }
    return;
  }

  res.writeHead(404);
  res.end('Not found');
});

server.listen(port, () => {
  console.log(`📊 Log dashboard available at http://localhost:${port}`);
});

