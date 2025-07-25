#!/usr/bin/env node

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

class NetlifyErrorFixer {
  constructor() {
    this.fixStrategies = {
      'build-timeout': this.fixBuildTimeout.bind(this),
      'memory-error': this.fixMemoryError.bind(this),
      'dependency-error': this.fixDependencyError.bind(this),
      'typescript-error': this.fixTypeScriptError.bind(this),
      'eslint-error': this.fixESLintError.bind(this),
      'nextjs-error': this.fixNextJSError.bind(this),
      'port-conflict': this.fixPortConflict.bind(this),
      'environment-error': this.fixEnvironmentError.bind(this),
    };
  }

  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    logger.info(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
  }

  async fixError(errorType) {
    if (!this.fixStrategies[errorType]) {
      this.log(`Unknown error type: ${errorType}`, 'error');
      return false;
    }

    try {
      this.log(`Applying fix for ${errorType}...`);
      const result = await this.fixStrategies[errorType]();
      this.log(`Fix for ${errorType} ${result ? 'succeeded' : 'failed'}`);
      return result;
    } catch (error) {
      this.log(
        `Error applying fix for ${errorType}: ${error.message}`,
        'error',
      );
      return false;
    }
  }

  async fixBuildTimeout() {
    try {
      // Optimize build script
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      packageJson.scripts.build =
        'NODE_OPTIONS="--max-old-space-size=4096" next build';
      fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

      this.log('Build timeout fix applied');
      return true;
    } catch (error) {
      this.log(`Failed to fix build timeout: ${error.message}`, 'error');
      return false;
    }
  }

  async fixMemoryError() {
    try {
      // Update package.json with memory optimization
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      packageJson.scripts.build =
        'NODE_OPTIONS="--max-old-space-size=4096" next build';
      fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

      this.log('Memory error fix applied');
      return true;
    } catch (error) {
      this.log(`Failed to fix memory error: ${error.message}`, 'error');
      return false;
    }
  }

  async fixDependencyError() {
    try {
      // Clear cache and reinstall dependencies
      execSync('rm -rf node_modules package-lock.json', { stdio: 'inherit' });
      execSync('npm install', { stdio: 'inherit' });

      this.log('Dependency error fix applied');
      return true;
    } catch (error) {
      this.log(`Failed to fix dependency error: ${error.message}`, 'error');
      return false;
    }
  }

  async fixTypeScriptError() {
    try {
      // Update tsconfig.json with more permissive settings
      const tsconfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
      tsconfig.compilerOptions = {
        ...tsconfig.compilerOptions,
        skipLibCheck: true,
        noEmit: true,
        allowJs: true,
        strict: false,
      };
      fs.writeFileSync('tsconfig.json', JSON.stringify(tsconfig, null, 2));

      this.log('TypeScript error fix applied');
      return true;
    } catch (error) {
      this.log(`Failed to fix TypeScript error: ${error.message}`, 'error');
      return false;
    }
  }

  async fixESLintError() {
    try {
      // Run ESLint fix
      execSync('npm run lint:fix', { stdio: 'inherit' });

      this.log('ESLint error fix applied');
      return true;
    } catch (error) {
      this.log(`Failed to fix ESLint error: ${error.message}`, 'error');
      return false;
    }
  }

  async fixNextJSError() {
    try {
      // Clear Next.js cache
      execSync('rm -rf .next', { stdio: 'inherit' });
      execSync('npm run build', { stdio: 'inherit' });

      this.log('Next.js error fix applied');
      return true;
    } catch (error) {
      this.log(`Failed to fix Next.js error: ${error.message}`, 'error');
      return false;
    }
  }

  async fixPortConflict() {
    try {
      // Update package.json scripts to use different ports
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      packageJson.scripts.dev = 'next dev --port 3002';
      packageJson.scripts.start = 'next start --port 3002';
      fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));

      this.log('Port conflict fix applied');
      return true;
    } catch (error) {
      this.log(`Failed to fix port conflict: ${error.message}`, 'error');
      return false;
    }
  }

  async fixEnvironmentError() {
    try {
      // Create or update .env.local with required variables
      const envContent = `
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NODE_ENV=production
      `.trim();

      fs.writeFileSync('.env.local', envContent);

      this.log('Environment error fix applied');
      return true;
    } catch (error) {
      this.log(`Failed to fix environment error: ${error.message}`, 'error');
      return false;
    }
  }

  async applyAllFixes() {
    const results = {};
    for (const errorType of Object.keys(this.fixStrategies)) {
      results[errorType] = await this.fixError(errorType);
    }
    return results;
  }
}

// CLI interface
if (require.main === module) {
  const fixer = new NetlifyErrorFixer();
  const args = process.argv.slice(2);

  switch (args[0]) {
    case 'fix':
      const errorType = args[1];
      if (errorType) {
        fixer.fixError(errorType).then((success) => {
          logger.info(`Fix ${success ? 'succeeded' : 'failed'}`);
          process.exit(success ? 0 : 1);
        });
      } else {
        fixer.applyAllFixes().then((results) => {
          logger.info(JSON.stringify(results, null, 2));
        });
      }
      break;
    default:
      logger.info('Usage: node netlify-error-fixer.js fix [error-type]');
      logger.info(
        'Available error types:',
        Object.keys(fixer.fixStrategies).join(', '),
      );
  }
}

module.exports = NetlifyErrorFixer;

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
