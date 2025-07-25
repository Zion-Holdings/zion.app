const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

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
    logger.log(level, message);
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
        res.on('data', (chunk) => {
          body += chunk;
        });
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
      const builds = await this.makeNetlifyRequest(`/sites/${this.config.netlifySiteId}/builds`);
      return builds;
    } catch (error) {
      this.log(`Error getting site builds: ${error.message}`, 'error');
      return [];
    }
  }

  async getBuildDetails(buildId) {
    try {
      const build = await this.makeNetlifyRequest(`/builds/${buildId}`);
      return build;
    } catch (error) {
      this.log(`Error getting build details: ${error.message}`, 'error');
      return null;
    }
  }

  async triggerBuild() {
    try {
      const result = await this.makeNetlifyRequest(
        `/sites/${this.config.netlifySiteId}/builds`,
        'POST',
        { clear_cache: 'true' }
      );
      this.log(`Build triggered: ${result.id}`, 'info');
      return result;
    } catch (error) {
      this.log(`Error triggering build: ${error.message}`, 'error');
      return null;
    }
  }

  analyzeBuildError(build) {
    if (!build.error_message) return null;

    const error = build.error_message.toLowerCase();
    
    if (error.includes('memory') || error.includes('heap')) {
      return { type: 'memory', message: build.error_message };
    }
    
    if (error.includes('timeout') || error.includes('timed out')) {
      return { type: 'timeout', message: build.error_message };
    }
    
    if (error.includes('dependency') || error.includes('module not found')) {
      return { type: 'dependency', message: build.error_message };
    }
    
    return { type: 'generic', message: build.error_message };
  }

  async fixBuildError(error) {
    this.log(`Attempting to fix build error: ${error.type}`, 'info');
    
    switch (error.type) {
      case 'memory':
        return await this.fixMemoryError();
      case 'timeout':
        return await this.fixTimeoutError();
      case 'dependency':
        return await this.fixDependencyError();
      default:
        return await this.fixGenericError(error);
    }
  }

  async fixMemoryError() {
    this.log('Fixing memory error...', 'info');
    
    try {
      // Increase Node.js memory limit
      const packageJsonPath = path.join(process.cwd(), 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      if (!packageJson.scripts) packageJson.scripts = {};
      
      // Update build script with increased memory
      if (packageJson.scripts.build) {
        packageJson.scripts.build = packageJson.scripts.build.replace(
          /next build/,
          'NODE_OPTIONS="--max-old-space-size=4096" next build'
        );
      }
      
      fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
      
      this.status.fixes.push({
        type: 'memory',
        timestamp: new Date().toISOString(),
        action: 'Increased Node.js memory limit'
      });
      
      return true;
    } catch (error) {
      this.log(`Error fixing memory issue: ${error.message}`, 'error');
      return false;
    }
  }

  async fixTimeoutError() {
    this.log('Fixing timeout error...', 'info');
    
    try {
      // Add timeout configuration to next.config.js
      const nextConfigPath = path.join(process.cwd(), 'next.config.js');
      let nextConfig = '';
      
      if (fs.existsSync(nextConfigPath)) {
        nextConfig = fs.readFileSync(nextConfigPath, 'utf8');
      }
      
      if (!nextConfig.includes('experimental')) {
        nextConfig += `
module.exports = {
  experimental: {
    workerThreads: false,
    cpus: 1
  }
};`;
      }
      
      fs.writeFileSync(nextConfigPath, nextConfig);
      
      this.status.fixes.push({
        type: 'timeout',
        timestamp: new Date().toISOString(),
        action: 'Added timeout configuration'
      });
      
      return true;
    } catch (error) {
      this.log(`Error fixing timeout issue: ${error.message}`, 'error');
      return false;
    }
  }

  async fixDependencyError() {
    this.log('Fixing dependency error...', 'info');
    
    try {
      // Clean and reinstall dependencies
      execSync('rm -rf node_modules package-lock.json', { stdio: 'inherit' });
      execSync('npm install', { stdio: 'inherit' });
      
      this.status.fixes.push({
        type: 'dependency',
        timestamp: new Date().toISOString(),
        action: 'Reinstalled dependencies'
      });
      
      return true;
    } catch (error) {
      this.log(`Error fixing dependency issue: ${error.message}`, 'error');
      return false;
    }
  }

  async fixGenericError(error) {
    this.log('Fixing generic error...', 'info');
    
    try {
      // Log the error for analysis
      this.status.errors.push({
        message: error.message,
        timestamp: new Date().toISOString(),
        buildId: error.buildId
      });
      
      // Try to trigger a new build
      await this.triggerBuild();
      
      this.status.fixes.push({
        type: 'generic',
        timestamp: new Date().toISOString(),
        action: 'Triggered new build'
      });
      
      return true;
    } catch (err) {
      this.log(`Error fixing generic issue: ${err.message}`, 'error');
      return false;
    }
  }

  async commitAndPushFixes() {
    try {
      execSync('git add .', { stdio: 'inherit' });
      execSync('git commit -m "fix: Automated build fixes"', { stdio: 'inherit' });
      execSync('git push', { stdio: 'inherit' });
      
      this.log('Fixes committed and pushed', 'info');
      return true;
    } catch (error) {
      this.log(`Error committing fixes: ${error.message}`, 'error');
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
        await new Promise((resolve) => {
          const timeoutId = setTimeout(resolve, this.config.checkInterval);
          // Store timeoutId for cleanup if needed
        });
      } catch (error) {
        this.log(`Error in monitoring loop: ${error.message}`, 'error');
        await new Promise((resolve) => setTimeout(resolve, 5000));
      }
    }
  }

  async checkBuilds() {
    try {
      const builds = await this.getSiteBuilds();
      this.status.lastCheck = new Date().toISOString();

      for (const build of builds.slice(0, 5)) { // Check last 5 builds
        if (build.error_message && build.state === 'error') {
          this.log(`Build ${build.id} failed: ${build.error_message}`, 'error');
          
          const error = this.analyzeBuildError(build);
          if (error) {
            const fixed = await this.fixBuildError(error);
            if (fixed) {
              await this.commitAndPushFixes();
            }
          }
        }
      }

      this.saveStatus();
    } catch (error) {
      this.log(`Error checking builds: ${error.message}`, 'error');
    }
  }

  generateReport() {
    const report = {
      timestamp: new Date().toISOString(),
      status: this.status,
      config: {
        siteId: this.config.netlifySiteId,
        checkInterval: this.config.checkInterval
      }
    };

    try {
      fs.writeFileSync(this.config.logFile, JSON.stringify(report, null, 2));
      this.log(`Report generated: ${this.config.logFile}`, 'info');
    } catch (error) {
      this.log(`Error generating report: ${error.message}`, 'error');
    }
  }

  stop() {
    this.log('Stopping Netlify build monitoring...');
    this.status.isRunning = false;
    this.saveStatus();
  }
}

module.exports = NetlifyBuildMonitor; 