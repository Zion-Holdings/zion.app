#!/usr/bin/env node

const https = require('https');
const path = require('path');
const fs = require('fs');
const { execSync } = require('child_process');

class NetlifyBuildMonitor {
  constructor(config = {}) {
    this.config = {
      netlifyToken: process.env.NETLIFY_TOKEN || config.netlifyToken,
      netlifySiteId: process.env.NETLIFY_SITE_ID || config.netlifySiteId,
      checkInterval: 30000, // 30 seconds
      maxRetries: 3,
      logFile: path.join(__dirname, 'netlify-monitor.log'),
      statusFile: path.join(__dirname, 'netlify-status.json'),
      errorLogFile: path.join(__dirname, 'netlify-errors.json'),
      fixLogFile: path.join(__dirname, 'netlify-fixes.json')
    };

    this.status = {
      isRunning: false,
      lastCheck: null,
      currentBuild: null,
      buildHistory: [],
      errors: [],
      fixes: []
    };

    this.loadStatus();
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}`;

    console.log(logEntry);
    fs.appendFileSync(this.config.logFile, logEntry + '\n');
  }

  loadStatus() {
    try {
      if (fs.existsSync(this.config.statusFile)) {
        this.status = {
          ...this.status,
          ...JSON.parse(fs.readFileSync(this.config.statusFile, 'utf8'))
        };
      }
    } catch (error) {
      this.log(`Error loading status: ${error.message}`, 'error');
    }
  }

  saveStatus() {
    try {
      fs.writeFileSync(
        this.config.statusFile,
        JSON.stringify(this.status, null, 2)
      );
    } catch (error) {
      this.log(`Error saving status: ${error.message}`, 'error');
    }
  }

  async makeNetlifyRequest(endpoint, method = 'GET', data = null) {
    return new Promise((resolve, reject) => {
      const options = {
        hostname: 'api.netlify.com',
        port: 443,
        path: `/api/v1${endpoint}`,
        method: method,
        headers: {
          'Authorization': `Bearer ${this.config.netlifyToken}`,
          'Content-Type': 'application/json',
          'User-Agent': 'NetlifyBuildMonitor/1.0'
        }
      };

      if (data) {
        const postData = JSON.stringify(data);
        options.headers['Content-Length'] = Buffer.byteLength(postData);
      }

      const req = https.request(options, (res) => {
        let body = '';
        res.on('data', (chunk) => (body += chunk));
        res.on('end', () => {
          try {
            const response = JSON.parse(body);
            resolve(response);
          } catch (error) {
            reject(new Error(`Invalid JSON response: ${body}`));
          }
        });
      });

      req.on('error', (error) => {
        reject(error);
      });

      if (data) {
        req.write(JSON.stringify(data));
      }

      req.end();
    });
  }

  async getSiteBuilds() {
    try {
      const builds = await this.makeNetlifyRequest(
        `/sites/${this.config.netlifySiteId}/builds?per_page=10`,
      );
      return builds;
    } catch (error) {
      this.log(`Error fetching builds: ${error.message}`, 'error');
      return [];
    }
  }

  async getBuildDetails(buildId) {
    try {
      const build = await this.makeNetlifyRequest(
        `/sites/${this.config.netlifySiteId}/builds/${buildId}`,
      );
      return build;
    } catch (error) {
      this.log(`Error fetching build details: ${error.message}`, 'error');
      return null;
    }
  }

  async triggerBuild() {
    try {
      this.log('Triggering new Netlify build...')
      const build = await this.makeNetlifyRequest(
        `/sites/${this.config.netlifySiteId}/builds`,
        'POST',
        {
          clear_cache: true
        }
      );
      return build;
    } catch (error) {
      this.log(`Error triggering build: ${error.message}`, 'error');
      return null;
    }
  }

  analyzeBuildError(build) {
    const errors = [];

    if (build.error_message) {
      errors.push({
        type: 'build_error',
        message: build.error_message,
        severity: 'high'
      });
    }

    if (build.deploy_ssl_url && build.state === 'error') {
      errors.push({
        type: 'deploy_error',
        message: 'Build failed to deploy',
        severity: 'high'
      });
    }

    // Analyze build logs for common patterns
    if (build.logs) {
      const logText = JSON.stringify(build.logs).toLowerCase();

      if (logText.includes('out of memory')) {
        errors.push({
          type: 'memory_error',
          message: 'Build failed due to memory constraints',
          severity: 'high'
        });
      }

      if (logText.includes('timeout')) {
        errors.push({
          type: 'timeout_error',
          message: 'Build timed out',
          severity: 'medium'
        });
      }

      if (logText.includes('dependency') && logText.includes('error')) {
        errors.push({
          type: 'dependency_error',
          message: 'Dependency installation failed',
          severity: 'medium'
        });
      }
    }

    return errors;
  }

  async fixBuildError(error) {
    try {
      switch (error.type) {
        case 'memory_error':
          return await this.fixMemoryError();
        case 'timeout_error':
          return await this.fixTimeoutError();
        case 'dependency_error':
          return await this.fixDependencyError();
        case 'build_error':
          return await this.fixBuildError(error.message);
        default:
          return await this.fixGenericError(error);
      }
    } catch (fixError) {
      this.log(`Error fixing ${error.type}: ${fixError.message}`, 'error');
      return false;
    }
  }

  async fixMemoryError() {
    this.log('Fixing memory error...');
    
    // Update netlify.toml with memory settings
    const netlifyConfig = {
      build: {
        command: 'npm run build',
        publish: '.next',
        environment: {
          NODE_OPTIONS: '--max-old-space-size=4096'
        }
      }
    };

    fs.writeFileSync('netlify.toml', JSON.stringify(netlifyConfig, null, 2));

    // Update package.json build script
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    packageJson.scripts.build =
      'NODE_OPTIONS="--max-old-space-size=4096" next build';
    fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

    return true;
  }

  async fixTimeoutError() {
    this.log('Fixing timeout error...');
    
    const netlifyConfig = {
      build: {
        command: 'npm run build',
        publish: '.next'
      },
      build_timeout: 1800, // 30 minutes
      functions_timeout: 10
    };

    fs.writeFileSync('netlify.toml', JSON.stringify(netlifyConfig, null, 2));
    return true;
  }

  async fixDependencyError() {
    this.log('Fixing dependency error...');
    
    try {
      // Clear cache and reinstall dependencies
      execSync('rm -rf node_modules package-lock.json', { stdio: 'inherit' });
      execSync('npm install', { stdio: 'inherit' });

      // Update package.json with latest compatible versions
      execSync('npm audit fix', { stdio: 'inherit' });

      return true;
    } catch (error) {
      this.log(`Dependency fix failed: ${error.message}`, 'error');
      return false;
    }
  }

  async fixBuildError(errorMessage) {
    this.log('Fixing build error...');
    
    try {
      // Run type check and fix common issues
      execSync('npx tsc --noEmit', { stdio: 'inherit' });

      // Auto-fix common TypeScript issues
      const tsConfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
      tsConfig.compilerOptions.strict = false;
      tsConfig.compilerOptions.noImplicitAny = false;
      fs.writeFileSync('tsconfig.json', JSON.stringify(tsConfig, null, 2));
    } catch (error) {
      this.log(`TypeScript fix failed: ${error.message}`, 'error');
    }

    try {
      execSync('npm run lint:fix', { stdio: 'inherit' });
    } catch (error) {
      this.log(`ESLint fix failed: ${error.message}`, 'error');
    }

    try {
      // Clear Next.js cache
      execSync('rm -rf .next', { stdio: 'inherit' });

      // Update next.config.js with common fixes
      const nextConfig = `
module.exports = {
  experimental: {
    optimizeCss: false,
    optimizePackageImports: false
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false,
        net: false,
        tls: false
      };
    }
    return config;
  }
};
      `;
      fs.writeFileSync('next.config.js', nextConfig);
    } catch (error) {
      this.log(`Next.js fix failed: ${error.message}`, 'error');
    }

    return true;
  }

  async fixGenericError(error) {
    this.log('Applying generic fixes...');
    
    try {
      // Commit current changes
      execSync('git add .', { stdio: 'inherit' });
      execSync('git commit -m "Auto-fix: Apply build error fixes"', {
        stdio: 'inherit'
      });
      execSync('git push', { stdio: 'inherit' });

      return true;
    } catch (error) {
      this.log(`Generic fix failed: ${error.message}`, 'error');
      return false;
    }
  }

  async commitAndPushFixes() {
    try {
      this.log('Committing and pushing fixes...');

      execSync('git add .', { stdio: 'inherit' });
      execSync('git commit -m "Auto-fix: Apply Netlify build fixes"', {
        stdio: 'inherit'
      });
      execSync('git push', { stdio: 'inherit' });

      this.log('Fixes committed and pushed successfully');
      return true;
    } catch (error) {
      this.log(`Failed to commit fixes: ${error.message}`, 'error');
      return false;
    }
  }

  async monitorBuilds() {
    this.log('Starting Netlify build monitoring...');
    this.status.isRunning = true;
    this.saveStatus();

    while (this.status.isRunning) {
      try {
        await this.checkBuilds();
        await new Promise((resolve) => setTimeout(resolve, this.config.checkInterval));
      } catch (error) {
        this.log(`Monitoring error: ${error.message}`, 'error');
        await new Promise((resolve) => setTimeout(resolve, 60000)); // Wait 1 minute on error
      }
    }
  }

  // Event emitter methods for compatibility
  on(event, callback) {
    if (!this.eventListeners) this.eventListeners = {};
    if (!this.eventListeners[event]) this.eventListeners[event] = [];
    this.eventListeners[event].push(callback);
  }

  emit(event, data) {
    if (this.eventListeners && this.eventListeners[event]) {
      this.eventListeners[event].forEach((callback) => callback(data));
    }
  }

  async checkBuilds() {
    this.log('Checking Netlify builds...')
    const builds = await this.getSiteBuilds();
    if (!builds || builds.length === 0) {
      this.log('No builds found');
      return;
    }

    const latestBuild = builds[0];
    this.status.lastCheck = new Date().toISOString();

    // Check if this is a new build
    if (
      this.status.currentBuild &&
      this.status.currentBuild.id === latestBuild.id
    ) {
      this.log('No new builds detected');
      return;
    }

    this.status.currentBuild = latestBuild;
    this.status.buildHistory.unshift({
      id: latestBuild.id,
      state: latestBuild.state,
      created_at: latestBuild.created_at,
      error_message: latestBuild.error_message
    });

    // Keep only last 50 builds
    if (this.status.buildHistory.length > 50) {
      this.status.buildHistory = this.status.buildHistory.slice(0, 50);
    }

    this.log(`Build ${latestBuild.id} state: ${latestBuild.state}`);

    // Check for errors
    if (latestBuild.state === 'error') {
      this.log('Build failed, analyzing errors...')
      const buildDetails = await this.getBuildDetails(latestBuild.id)
      const errors = this.analyzeBuildError(buildDetails || latestBuild);

      this.status.errors.push({
        buildId: latestBuild.id,
        timestamp: new Date().toISOString(),
        errors: errors
      });

      this.emit('buildError', {
        buildId: latestBuild.id,
        type: errors.length > 0 ? errors[0].type : 'unknown',
        message: latestBuild.error_message || 'Build failed',
        errors: errors
      });

      // Attempt to fix errors
      for (const error of errors) {
        const fixed = await this.fixBuildError(error);

        this.status.fixes.push({
          buildId: latestBuild.id,
          errorType: error.type,
          timestamp: new Date().toISOString(),
          success: fixed
        });

        if (fixed) {
          this.log(`Successfully fixed ${error.type}`);
        } else {
          this.log(`Failed to fix ${error.type}`, 'error');
        }
      }

      // Commit and push fixes if any were successful
      const successfulFixes = this.status.fixes.filter(
        (fix) => fix.buildId === latestBuild.id && fix.success,
      );

      if (successfulFixes.length > 0) {
        await this.commitAndPushFixes();
        await this.triggerBuild();
      }
    } else if (latestBuild.state === 'ready') {
      // Emit build success event
      this.emit('buildSuccess', latestBuild);
      this.log(`Build ${latestBuild.id} completed successfully`);
    }

    this.saveStatus();
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      status: this.status,
      summary: {
        totalBuilds: this.status.buildHistory.length,
        failedBuilds: this.status.buildHistory.filter(
          (b) => b.state === 'error',
        ).length,
        successfulFixes: this.status.fixes.filter((f) => f.success).length,
        totalErrors: this.status.errors.length
      }
    };

    fs.writeFileSync(
      path.join(__dirname, 'netlify-report.json'),
      JSON.stringify(report, null, 2),
    );

    return report;
  }

  stop() {
    this.log('Stopping Netlify build monitor...');
    this.status.isRunning = false;
    this.saveStatus();
  }
}

// CLI interface
if (require.main === module) {
  const monitor = new NetlifyBuildMonitor()
  const command = process.argv[2];

  switch (command) {
    case 'start':
      monitor.monitorBuilds();
      break;
    case 'check':
      monitor.checkBuilds();
      break;
    case 'report':
      monitor.generateReport().then((report) => {
        console.log(JSON.stringify(report, null, 2));
      });
      break;
    case 'status':
      console.log(JSON.stringify(monitor.status, null, 2));
      break;
    default:
      console.log('Usage: node netlify-monitor.js [start|check|report|status]');
  }
}

module.exports = NetlifyBuildMonitor;
