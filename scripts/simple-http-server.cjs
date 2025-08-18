#!/usr/bin/env node

const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 8888;
const FUNCTIONS_DIR = path.join(process.cwd(), 'netlify', 'functions');

// Simple function handler
async function handleFunction(functionName) {
  try {
    const functionPath = path.join(FUNCTIONS_DIR, `${functionName}.js`);
    
    if (!fs.existsSync(functionPath)) {
      return {
        statusCode: 404,
        body: JSON.stringify({ error: 'Function not found', function: functionName })
      };
    }
    
    // Clear require cache
    delete require.cache[require.resolve(functionPath)];
    
    const mod = require(functionPath);
    const handler = mod && (mod.handler || mod.default || mod);
    
    if (typeof handler !== 'function') {
      return {
        statusCode: 500,
        body: JSON.stringify({ error: 'Invalid function handler', function: functionName })
      };
    }
    
    // Call the function
    const result = await handler({}, {});
    return result || { statusCode: 200, body: 'Function executed successfully' };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ 
        error: 'Function execution failed', 
        function: functionName,
        message: error.message 
      })
    };
  }
}

// Create HTTP server
const server = http.createServer(async (req, res) => {
  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;
  
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  
  if (req.method === 'OPTIONS') {
    res.writeHead(200);
    res.end();
    return;
  }
  
  // Handle Netlify Functions path
  if (pathname.startsWith('/.netlify/functions/')) {
    const functionName = pathname.replace('/.netlify/functions/', '');
    
    if (!functionName) {
      res.writeHead(400);
      res.end(JSON.stringify({ error: 'No function name provided' }));
      return;
    }
    
    try {
      const result = await handleFunction(functionName);
      
      res.writeHead(result.statusCode || 200, {
        'Content-Type': 'application/json'
      });
      
      res.end(result.body);
    } catch (error) {
      res.writeHead(500);
      res.end(JSON.stringify({ 
        error: 'Server error', 
        message: error.message 
      }));
    }
    return;
  }
  
  // Health check endpoint
  if (pathname === '/health') {
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
      status: 'healthy', 
      timestamp: new Date().toISOString(),
      functions: fs.readdirSync(FUNCTIONS_DIR).filter(f => f.endsWith('.js')).length
    }));
    return;
  }
  
  // List functions endpoint
  if (pathname === '/functions') {
    const functions = fs.readdirSync(FUNCTIONS_DIR)
      .filter(f => f.endsWith('.js'))
      .map(f => f.replace('.js', ''));
    
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ 
      functions,
      count: functions.length,
      timestamp: new Date().toISOString()
    }));
    return;
  }
  
  // Default response
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({
    message: 'Simple Netlify Functions HTTP Server',
    endpoints: {
      '/health': 'Health check',
      '/functions': 'List all functions',
      '/.netlify/functions/{name}': 'Execute function'
    },
    timestamp: new Date().toISOString()
  }));
});

server.listen(PORT, () => {
  console.log(`🚀 Simple HTTP server running on port ${PORT}`);
  console.log(`📋 Functions directory: ${FUNCTIONS_DIR}`);
  console.log(`🔗 Health check: http://localhost:${PORT}/health`);
  console.log(`🔗 List functions: http://localhost:${PORT}/functions`);
  console.log(`🔗 Execute function: http://localhost:${PORT}/.netlify/functions/{functionName}`);
  console.log(`\nPress Ctrl+C to stop the server`);
});

// Graceful shutdown
process.on('SIGINT', () => {
  console.log('\n🛑 Shutting down server...');
  server.close(() => {
    console.log('✅ Server stopped');
    process.exit(0);
  });
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Shutting down server...');
  server.close(() => {
    console.log('✅ Server stopped');
    process.exit(0);
  });
});