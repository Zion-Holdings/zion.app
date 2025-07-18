#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class WatchpackFixer {
  constructor() {
    this.issues = [];
    this.fixes = [];
  }

  log(message) {
    console.log(`[${new Date().toISOString()}] ${message}`);
  }

  async fixWatchpackIssue() {
    this.log('🔧 Fixing watchpack issue...');
    
    try {
      // Check if .next directory exists and clean it
      if (fs.existsSync('.next')) {
        this.log('🧹 Cleaning .next directory...');
        execSync('rm -rf .next', { stdio: 'inherit' });
        this.fixes.push('Cleaned .next directory');
      }

      // Check if node_modules/.cache exists and clean it
      if (fs.existsSync('node_modules/.cache')) {
        this.log('🧹 Cleaning node_modules cache...');
        execSync('rm -rf node_modules/.cache', { stdio: 'inherit' });
        this.fixes.push('Cleaned node_modules cache');
      }

      // Fix Next.js configuration
      await this.fixNextConfig();
      
      // Update package.json dev script
      await this.fixDevScript();
      
      // Install missing dependencies
      await this.installMissingDeps();
      
      this.log('✅ Watchpack issue fixes applied');
      return true;
    } catch (error) {
      this.log(`❌ Error fixing watchpack issue: ${error.message}`);
      this.issues.push(error.message);
      return false;
    }
  }

  async fixNextConfig() {
    this.log('🔧 Fixing Next.js configuration...');
    
    const nextConfigPath = 'next.config.js';
    if (fs.existsSync(nextConfigPath)) {
      let content = fs.readFileSync(nextConfigPath, 'utf8');
      
      // Add webpack configuration to fix watchpack
      const webpackFix = `
const nextConfig = {
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      // Fix watchpack issue
      config.watchOptions = {
        ...config.watchOptions,
        poll: 1000,
        aggregateTimeout: 300,
        ignored: ['**/node_modules', '**/.next', '**/logs']
      };
    }
    return config;
  },
  experimental: {
    // Disable features that might cause watchpack issues
    optimizePackageImports: false,
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
    },
  },
  // Disable SWC minification in development
  swcMinify: false,
  // Add proper file watching
  onDemandEntries: {
    maxInactiveAge: 25 * 1000,
    pagesBufferLength: 2,
  },
};
      `;
      
      // Replace or add the configuration
      if (content.includes('module.exports')) {
        content = content.replace(
          /module\.exports\s*=\s*{[\s\S]*?};?/,
          webpackFix + '\n\nmodule.exports = nextConfig;'
        );
      } else {
        content = webpackFix + '\n\nmodule.exports = nextConfig;';
      }
      
      fs.writeFileSync(nextConfigPath, content);
      this.fixes.push('Fixed Next.js configuration');
    }
  }

  async fixDevScript() {
    this.log('🔧 Fixing dev script...');
    
    try {
      const packagePath = 'package.json';
      const package = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
      
      // Update dev script with better options
      package.scripts.dev = "NODE_OPTIONS='--no-deprecation --max-old-space-size=4096 --experimental-loader=@next/swc-darwin-x64' next dev";
      package.scripts['dev:stable'] = "NODE_OPTIONS='--no-deprecation --max-old-space-size=4096' next dev --turbo";
      package.scripts['dev:legacy'] = "NODE_OPTIONS='--no-deprecation --max-old-space-size=4096' next dev --no-turbo";
      
      fs.writeFileSync(packagePath, JSON.stringify(package, null, 2));
      this.fixes.push('Fixed dev script');
    } catch (error) {
      this.log(`❌ Error fixing dev script: ${error.message}`);
      this.issues.push(error.message);
    }
  }

  async installMissingDeps() {
    this.log('📦 Installing missing dependencies...');
    
    try {
      // Install chokidar for better file watching
      execSync('npm install chokidar --save-dev', { stdio: 'inherit' });
      this.fixes.push('Installed chokidar');
      
      // Install glob for file pattern matching
      execSync('npm install glob --save-dev', { stdio: 'inherit' });
      this.fixes.push('Installed glob');
      
    } catch (error) {
      this.log(`❌ Error installing dependencies: ${error.message}`);
      this.issues.push(error.message);
    }
  }

  async testDevServer() {
    this.log('🧪 Testing development server...');
    
    return new Promise((resolve) => {
      const devProcess = require('child_process').spawn('npm', ['run', 'dev:stable', '--', '--port', '3001'], {
        stdio: 'pipe',
        shell: true
      });
      
      let output = '';
      let timeout;
      
      const cleanup = () => {
        clearTimeout(timeout);
        devProcess.kill();
      };
      
      devProcess.stdout.on('data', (data) => {
        output += data.toString();
        if (output.includes('Ready') || output.includes('Local:')) {
          this.log('✅ Development server started successfully');
          cleanup();
          resolve(true);
        }
      });
      
      devProcess.stderr.on('data', (data) => {
        output += data.toString();
        if (output.includes('Error') || output.includes('Failed')) {
          this.log(`❌ Development server error: ${data.toString()}`);
          cleanup();
          resolve(false);
        }
      });
      
      // Timeout after 30 seconds
      timeout = setTimeout(() => {
        this.log('⏰ Timeout testing dev server');
        cleanup();
        resolve(false);
      }, 30000);
    });
  }

  async runFullFix() {
    this.log('🚀 Starting watchpack fix process...');
    
    const steps = [
      { name: 'Fix watchpack issue', fn: () => this.fixWatchpackIssue() },
      { name: 'Test dev server', fn: () => this.testDevServer() }
    ];
    
    for (const step of steps) {
      this.log(`\n📋 Step: ${step.name}`);
      const result = await step.fn();
      
      if (!result) {
        this.log(`❌ Step failed: ${step.name}`);
        this.issues.push(step.name);
      }
    }
    
    this.log('\n📊 Fix Summary:');
    this.log(`✅ Applied: ${this.fixes.length} fixes`);
    this.log(`❌ Issues: ${this.issues.length} remaining`);
    
    return this.issues.length === 0;
  }
}

// CLI interface
if (require.main === module) {
  const fixer = new WatchpackFixer();
  fixer.runFullFix().then(success => {
    process.exit(success ? 0 : 1);
  });
}

module.exports = { WatchpackFixer }; 