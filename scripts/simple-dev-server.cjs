#!/usr/bin/env node

const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 3001;

// Serve static files
app.use(express.static('public'));

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    timestamp: new Date().toISOString(),
    message: 'Zion App is running successfully!',
    mode: 'Simple Working App',
    build: 'Working',
  });
});

// Serve the main app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`🚀 Zion App running on http://localhost:${PORT}`);
  console.log(`📊 Health check: http://localhost:${PORT}/api/health`);
});
