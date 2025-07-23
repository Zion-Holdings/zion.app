#!/usr/bin/env node

const http = require('http')'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
const fs = require('fs')'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
const path = require('path')'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
const PORT = 3007
const server = http.createServer((req, res) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

  if (req.method === 'OPTIONS') {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    res.writeHead(200);
    res.end();
    return;
  }

  if (req.url === '/' || req.url === '/index.html') {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    const filePath = path.join(__dirname, 'ai-communication-interface.html');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

    fs.readFile(filePath, (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading interface');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
      res.end(data);
    });
  } else {
    res.writeHead(404);
    res.end('Not Found');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  }
});

server.listen(PORT, () => {
  console.log(`🌐 Web interface available at: http://localhost:${PORT}`);
  console.log(`📱 Open your browser and navigate to the URL above`);
  console.log(`🔗 AI Communication API: http://localhost:3007`);
});

server.on('error', (error) => {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  if (error.code === 'EADDRINUSE') {'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
    console.error(`❌ Port ${PORT} is already in use`);
    console.log(`💡 Try using a different port or stop the existing service`);
  } else {
    console.error(`❌ Server error: ${error.message}`);
  }
});
