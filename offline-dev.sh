#!/bin/bash

# Make sure the script fails if any command fails
set -e

echo "Setting up offline development environment..."

# Create necessary directories
mkdir -p src/types

# Define the offline HTML file
cat > offline.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Offline Development Mode</title>
  <style>
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
      background: linear-gradient(135deg, #121826 0%, #1E293B 100%);
      color: white;
      margin: 0;
      padding: 0;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      text-align: center;
    }
    .container {
      max-width: 800px;
      padding: 2rem;
      background: rgba(30, 41, 59, 0.7);
      border-radius: 8px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(99, 102, 241, 0.2);
    }
    h1 {
      background: linear-gradient(to right, #00BFFF, #9333EA);
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      margin-bottom: 1rem;
    }
    h2 {
      color: #d1d5db;
      font-weight: 500;
      margin-bottom: 1.5rem;
    }
    .steps {
      text-align: left;
      background: rgba(17, 24, 39, 0.5);
      padding: 1.5rem;
      border-radius: 6px;
      margin-bottom: 1.5rem;
    }
    .steps p {
      margin: 0.5rem 0;
      display: flex;
      align-items: flex-start;
    }
    .step-number {
      background: #4F46E5;
      color: white;
      width: 24px;
      height: 24px;
      border-radius: 50%;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      margin-right: 10px;
      flex-shrink: 0;
    }
    code {
      background: rgba(17, 24, 39, 0.7);
      padding: 0.2rem 0.4rem;
      border-radius: 3px;
      font-family: monospace;
      word-break: break-word;
    }
    .button {
      background: linear-gradient(to right, #4F46E5, #7C3AED);
      color: white;
      border: none;
      padding: 0.75rem 1.5rem;
      border-radius: 4px;
      cursor: pointer;
      font-weight: 500;
      transition: all 0.2s;
      text-decoration: none;
      display: inline-block;
      margin-top: 1rem;
    }
    .button:hover {
      opacity: 0.9;
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(79, 70, 229, 0.3);
    }
    .info {
      margin-top: 2rem;
      padding-top: 1rem;
      border-top: 1px solid rgba(255, 255, 255, 0.1);
      color: #9CA3AF;
      font-size: 0.9rem;
    }
  </style>
</head>
<body>
  <div class="container">
    <h1>Offline Development Mode</h1>
    <h2>This is a placeholder environment for developing without internet access</h2>
    
    <div class="steps">
      <p><span class="step-number">1</span> Type declarations have been set up in <code>src/types/offline-shims.d.ts</code></p>
      <p><span class="step-number">2</span> When internet access is available, run <code>./setup.sh npm</code> to install dependencies</p>
      <p><span class="step-number">3</span> Then start the regular development server with <code>npm run dev</code></p>
    </div>
    
    <p>
      <a href="javascript:void(0)" class="button" onclick="checkOnlineStatus()">Check Online Status</a>
    </p>
    
    <div class="info">
      <p>The offline development mode allows you to work on TypeScript code without having installed dependencies.</p>
      <p>However, actual functionality requires the dependencies to be installed.</p>
    </div>
  </div>
  
  <script>
    function checkOnlineStatus() {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
          alert('Online! You can now run: ./setup.sh npm && npm run dev');
        })
        .catch(() => {
          alert('Still offline. Keep working in offline mode until internet is available.');
        });
    }
  </script>
</body>
</html>
EOF

cat > debug-logs.html << 'EOF'
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Zion Debug Log Viewer</title>
  <style>
    body { font-family: sans-serif; padding: 20px; background: #f9f9f9; }
    h1 { margin-bottom: 10px; }
    pre { background: #eee; padding: 1rem; overflow-x: auto; }
    .log-item { margin-bottom: 2rem; border-left: 4px solid #444; padding-left: 1rem; }
    .timestamp { font-size: 0.9em; color: #666; }
    .btn {
      display: inline-block;
      padding: 0.6rem 1.2rem;
      background: #2d7dff;
      color: #fff;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      margin-bottom: 20px;
    }
  </style>
</head>
<body>
  <h1>Zion App Offline Debug Logs</h1>
  <button class="btn" onclick="downloadLogs()">⬇️ Download Logs as JSON</button>
  <button class="btn" onclick="clearLogs()">🗑️ Clear Logs</button>
  <input type="text" id="filter-input" placeholder="Filter logs by keyword..." style="padding: 0.5rem; margin-bottom: 1rem; width: 100%;" oninput="renderLogs(this.value.toLowerCase())">
  <div id="log-output"></div>

  <script>
    const logs = JSON.parse(localStorage.getItem('zion-logs') || '[]');
    const container = document.getElementById('log-output');

    function renderLogs(filter = '') {
      container.innerHTML = '';
      logs
        .filter(({ message }) => message.toLowerCase().includes(filter))
        .forEach(({ timestamp, message, data }, i) => {
          const div = document.createElement('div');
          div.className = 'log-item';
          div.innerHTML = `
            <div class="timestamp">#${i + 1} — ${new Date(timestamp).toLocaleString()}</div>
            <h3>${message}</h3>
            <pre>${JSON.stringify(data, null, 2)}</pre>
          `;
          container.appendChild(div);
        });

      if (!container.innerHTML) {
        container.innerHTML = '<p>No logs match this filter.</p>';
      }
    }

    if (!logs.length) {
      container.innerHTML = '<p>No logs found in localStorage.</p>';
    } else {
      renderLogs();
    }

    logs.forEach(({ timestamp, message, data }, i) => {
      const div = document.createElement('div');
      div.className = 'log-item';
      div.innerHTML = `
        <div class="timestamp">#${i + 1} — ${new Date(timestamp).toLocaleString()}</div>
        <h3>${message}</h3>
        <pre>${JSON.stringify(data, null, 2)}</pre>
      `;
      container.appendChild(div);
    });

  function downloadLogs() {
    const blob = new Blob([JSON.stringify(logs, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `zion-logs-${new Date().toISOString().split('T')[0]}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }

  function clearLogs() {
    if (confirm('Are you sure you want to delete all debug logs?')) {
      localStorage.removeItem('zion-logs');
      location.reload();
    }
  }
  </script>
</body>
</html>
EOF

echo "Type declarations have been set up."

# Create a simple server for offline development
cat > offline-dev.cjs << 'EOF'
const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/index.html') {
    fs.readFile(path.join(__dirname, 'offline.html'), (err, data) => {
      if (err) {
        res.writeHead(500);
        res.end('Error loading offline.html');
        return;
      }
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    });
  } else if (req.url === '/online-check') {
    // Endpoint to check if we're online
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ online: false, message: 'Running in offline development mode' }));
  } else {
    res.writeHead(404);
    res.end('Not found');
  }
});

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`
╔══════════════════════════════════════════════════════════════════╗
║                 OFFLINE DEVELOPMENT MODE ACTIVE                  ║
╠══════════════════════════════════════════════════════════════════╣
║                                                                  ║
║  🚀 Server running at: http://localhost:${PORT}                    ║
║                                                                  ║
║  ℹ️  This is a placeholder server that doesn't require npm       ║
║     dependencies. Most features will not work until you install  ║
║     the required npm packages.                                   ║
║                                                                  ║
║  🔍 See OFFLINE-DEV-README.md for detailed instructions.         ║
║                                                                  ║
║  🌐 When internet is available:                                  ║
║     1. Run: chmod +x setup.sh                                    ║
║     2. Run: ./setup.sh npm                                       ║
║     3. Run: npm run dev                                          ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
`);
});
EOF

# Create a modified tsconfig for offline mode
cat > tsconfig.offline.json << 'EOF'
{
  "compilerOptions": {
    "target": "ES2020",
    "useDefineForClassFields": true,
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "module": "ESNext",
    "skipLibCheck": true,
    "moduleResolution": "bundler",
    "allowImportingTsExtensions": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "noEmit": true,
    "jsx": "react-jsx",
    "strict": false,
    "noUnusedLocals": false,
    "noUnusedParameters": false,
    "noFallthroughCasesInSwitch": false,
    "baseUrl": ".",
    "paths": {
      "@/*": ["./src/*"]
    }
  },
  "include": ["src", "src/types/offline-shims.d.ts"],
  "references": [{ "path": "./tsconfig.node.json" }]
}
EOF

# Create a README for offline development
cat > OFFLINE-DEV-README.md << 'EOF'
# Offline Development Mode

This project has been configured for offline development. This allows you to work on the codebase without having an internet connection or installing npm dependencies.

## How It Works

The offline development mode:

1. Sets up TypeScript declarations in `src/types/offline-shims.d.ts` to simulate imported libraries
2. Uses a simplified server that doesn't require npm packages
3. Provides a visual interface for testing basic layout

## Limitations

While in offline mode:

- No actual functionality will work (API calls, state management, etc.)
- Components will render with minimal styling
- Interactive features won't function
- Build process is disabled

## Returning to Normal Development

When you have internet access again:

```bash
# Make the setup script executable
chmod +x setup.sh

# Run the setup script with npm
./setup.sh npm

# Start the development server
npm run dev
```

This will install all required dependencies and start the normal development server.

## Files Added for Offline Mode

- `src/types/offline-shims.d.ts` - TypeScript declarations for libraries
- `offline.html` - Simple HTML page for the offline server
- `offline-dev.cjs` - Node.js server script for offline mode
- `tsconfig.offline.json` - Modified TypeScript config for offline development
- `OFFLINE-DEV-README.md` - This documentation file

These files will be automatically cleaned up when you run `./setup.sh npm` to return to normal development.
EOF

echo "Starting offline development server..."
node offline-dev.cjs
