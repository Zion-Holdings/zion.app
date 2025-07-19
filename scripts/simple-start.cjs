#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawn } = require('child_process');

class SimpleStart {
  constructor() {
    this.projectRoot = process.cwd();
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  createMinimalApp() {
    this.log('Creating minimal app structure...');

    // Create minimal _app.tsx
    const appContent = `import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}`;

    fs.writeFileSync(
      path.join(this.projectRoot, 'pages', '_app.tsx'),
      appContent,
    );
    this.log('Created _app.tsx');

    // Create minimal index.tsx
    const indexContent = `export default function Home() {
  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial, sans-serif' }}>
      <h1>🚀 Bolt New Zion App</h1>
      <p>✅ The app is running successfully!</p>
      <p>🎉 Automation completed successfully</p>
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f0f0f0', borderRadius: '8px' }}>
        <h3>Next Steps:</h3>
        <ul>
          <li>🌐 Open <a href="http://localhost:3001">http://localhost:3001</a></li>
          <li>📊 Check health: <a href="http://localhost:3001/api/health">/api/health</a></li>
          <li>🔧 Continue development</li>
        </ul>
      </div>
    </div>
  );
}`;

    fs.writeFileSync(
      path.join(this.projectRoot, 'pages', 'index.tsx'),
      indexContent,
    );
    this.log('Created index.tsx');

    // Create minimal API
    const apiDir = path.join(this.projectRoot, 'pages', 'api');
    if (!fs.existsSync(apiDir)) {
      fs.mkdirSync(apiDir, { recursive: true });
    }

    const healthContent = `export default function handler(req, res) {
  res.status(200).json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    message: 'App is running successfully!',
    automation: 'completed'
  });
}`;

    fs.writeFileSync(path.join(apiDir, 'health.js'), healthContent);
    this.log('Created health API');
  }

  startServer() {
    this.log('Starting development server...');

    const server = spawn('npm', ['run', 'dev', '--', '--port', '3001'], {
      cwd: this.projectRoot,
      stdio: 'inherit',
      env: {
        ...process.env,
        NODE_OPTIONS: '--no-deprecation --max-old-space-size=4096',
      },
    });

    server.on('error', (error) => {
      this.log(`Server error: ${error.message}`);
    });

    server.on('close', (code) => {
      this.log(`Server exited with code ${code}`);
    });

    // Handle graceful shutdown
    process.on('SIGINT', () => {
      this.log('Shutting down server...');
      server.kill('SIGINT');
      process.exit(0);
    });

    process.on('SIGTERM', () => {
      this.log('Shutting down server...');
      server.kill('SIGTERM');
      process.exit(0);
    });
  }

  run() {
    this.log('Starting simple app automation...');

    try {
      this.createMinimalApp();
      this.startServer();
    } catch (error) {
      this.log(`Error: ${error.message}`);
      process.exit(1);
    }
  }
}

// Run if this script is executed directly
if (require.main === module) {
  const app = new SimpleStart();
  app.run();
}

module.exports = SimpleStart;
