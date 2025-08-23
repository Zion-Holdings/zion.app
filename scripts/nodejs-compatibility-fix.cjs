const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json(),
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');
class NodeJSCompatibilityFix {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'nodejs-fix.log');
    this.ensureLogsDirectory();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    logger.info(logMessage);
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  ensureLogsDirectory() {
    const logsDir = path.join(this.projectRoot, 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  async runCommand(command, options = {}) {
    try {
      this.log(`Running command: ${command}`);
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe',
        ...options,
      });
      this.log(`Command completed successfully: ${command}`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`Command failed: ${command} - ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr,
      };
    }
  }

  checkNodeVersion() {
    const nodeVersion = process.version;
    this.log(`Current Node.js version: ${nodeVersion}`);
    const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
    return majorVersion;
  }

  async installNodeVersionManager() {
    this.log('Installing Node Version Manager (nvm)...');

    // Check if nvm is already installed
    try {
      execSync('nvm --version', { stdio: 'pipe' });
      this.log('nvm is already installed');
      return true;
    } catch (error) {
      this.log('nvm not found, attempting to install...');

      // Try to install nvm
      const installScript = `
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
        export NVM_DIR="$HOME/.nvm"
        [ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh"
        [ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"
      `;

      try {
        execSync(installScript, { shell: '/bin/bash', stdio: 'pipe' });
        this.log('nvm installed successfully');
        return true;
      } catch (error) {
        this.log('Failed to install nvm automatically', 'ERROR');
        this.log(
          'Please install nvm manually: https://github.com/nvm-sh/nvm',
          'WARN',
        );
        return false;
      }
    }
  }

  async installCompatibleNodeVersion() {
    this.log('Installing compatible Node.js version...');
    const compatibleVersions = ['18.19.0', '20.11.0', '18.20.0', '20.12.0'];

    for (const version of compatibleVersions) {
      try {
        this.log(`Trying to install Node.js ${version}...`);
        execSync(`nvm install ${version}`, { stdio: 'pipe' });
        execSync(`nvm use ${version}`, { stdio: 'pipe' });
        this.log(`Successfully installed and switched to Node.js ${version}`);
        return version;
      } catch (error) {
        this.log(
          `Failed to install Node.js ${version}: ${error.message}`,
          'WARN',
        );
      }
    }

    this.log('Failed to install any compatible Node.js version', 'ERROR');
    return null;
  }

  async fixNextConfig() {
    this.log('Fixing Next.js configuration for Node.js compatibility...');
    const nextConfigPath = path.join(this.projectRoot, 'next.config.js');
    if (!fs.existsSync(nextConfigPath)) {
      this.log('next.config.js not found', 'ERROR');
      return false;
    }

    try {
      let content = fs.readFileSync(nextConfigPath, 'utf8');
      const originalContent = content;

      // Add Node.js 22 compatibility workarounds
      const compatibilityCode = `
// Node.js 22 compatibility workarounds
process.env.NODE_OPTIONS = process.env.NODE_OPTIONS || '';
if (!process.env.NODE_OPTIONS.includes('--no-deprecation')) {
  process.env.NODE_OPTIONS += ' --no-deprecation';
}
if (!process.env.NODE_OPTIONS.includes('--max-old-space-size=4096')) {
  process.env.NODE_OPTIONS += ' --max-old-space-size=4096';
}

`;

      // Insert compatibility code at the beginning
      if (!content.includes('NODE_OPTIONS')) {
        content = compatibilityCode + content;
      }

      // Remove problematic experimental features
      content = content.replace(/experimental:\s*{[^}]*}/g, 'experimental: {}');

      if (content !== originalContent) {
        fs.writeFileSync(nextConfigPath, content);
        this.log('Fixed Next.js configuration');
        return true;
      }

      return false;
    } catch (error) {
      this.log(`Error fixing Next.js config: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async updatePackageScripts() {
    this.log('Updating package.json scripts for Node.js compatibility...');
    const packageJsonPath = path.join(this.projectRoot, 'package.json');
    if (!fs.existsSync(packageJsonPath)) {
      this.log('package.json not found', 'ERROR');
      return false;
    }

    try {
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      const originalScripts = JSON.stringify(packageJson.scripts);

      // Add Node.js compatibility scripts
      packageJson.scripts = {
        ...packageJson.scripts,
        'dev:node18':
          'NODE_OPTIONS="--no-deprecation --max-old-space-size=4096" next dev',
        'dev:compatible':
          'NODE_OPTIONS="--no-deprecation --max-old-space-size=4096" next dev',
        'build:compatible':
          'NODE_OPTIONS="--no-deprecation --max-old-space-size=4096" next build',
        'start:compatible':
          'NODE_OPTIONS="--no-deprecation --max-old-space-size=4096" next start',
      };
      const newScripts = JSON.stringify(packageJson.scripts);

      if (newScripts !== originalScripts) {
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
        this.log('Updated package.json scripts');
        return true;
      }

      return false;
    } catch (error) {
      this.log(`Error updating package.json: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async createCompatibilityScript() {
    this.log('Creating Node.js compatibility script...');
    const scriptContent = `#!/bin/bash

# Node.js Compatibility Script
# This script ensures the app runs with compatible Node.js settings

export NODE_OPTIONS="--no-deprecation --max-old-space-size=4096"

# Check Node.js version
NODE_VERSION=$(node --version)
echo "Using Node.js version: $NODE_VERSION"

# Start the development server
echo "Starting development server with compatibility settings..."
npm run dev -- --port 3001
`;
    const scriptPath = path.join(this.projectRoot, 'start-compatible.sh');
    fs.writeFileSync(scriptPath, scriptContent);
    execSync(`chmod +x ${scriptPath}`);

    this.log(`Created compatibility script: ${scriptPath}`);
    return scriptPath;
  }

  async testCompatibility() {
    this.log('Testing Node.js compatibility...');

    // Try to build the project
    const buildResult = await this.runCommand('npm run build:compatible');
    if (buildResult.success) {
      this.log('Build test passed');
      return true;
    }

    // Try to start dev server
    const devResult = await this.runCommand(
      'npm run dev:compatible -- --port 3002',
    );
    if (devResult.success) {
      this.log('Dev server test passed');
      return true;
    }

    this.log('Compatibility tests failed', 'ERROR');
    return false;
  }

  async runFullFix() {
    this.log('Starting Node.js compatibility fix...');
    const nodeVersion = this.checkNodeVersion();

    if (nodeVersion >= 22) {
      this.log('Node.js 22+ detected, applying compatibility fixes...');

      // Fix Next.js configuration
      await this.fixNextConfig();

      // Update package scripts
      await this.updatePackageScripts();

      // Create compatibility script
      await this.createCompatibilityScript();

      // Test compatibility
      const testResult = await this.testCompatibility();

      if (testResult) {
        this.log('Node.js compatibility fix completed successfully');
        this.log('Use "npm run dev:compatible" to start the server');
        this.log('Or run "./start-compatible.sh" for automatic compatibility');
        return true;
      } else {
        this.log('Compatibility fix completed but tests failed', 'WARN');
        this.log('Consider downgrading to Node.js 18 or 20', 'WARN');
        return false;
      }
    } else {
      this.log('Node.js version is compatible, no fixes needed');
      return true;
    }
  }
}

// Run if this script is executed directly
if (require.main === module) {
  const fixer = new NodeJSCompatibilityFix();
  fixer
    .runFullFix()
    .then((success) => {
      process.exit(success ? 0 : 1);
    })
    .catch((error) => {
      logger.error('Fix failed:', error);
      process.exit(1);
    });
}

module.exports = NodeJSCompatibilityFix;

// Graceful shutdown handling
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});
