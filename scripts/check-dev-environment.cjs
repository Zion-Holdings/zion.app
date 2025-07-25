
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


class  {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    logger.info('Starting ...');
    
    try {
      #!/usr/bin/env node



const fs = require('fs')
const _path = require('path')
const _error = 'error'
function checkEnvironment() {
  logger.warn('🔍 Checking Development Environment');
  logger.warn('==================================\n');

  let allGood = true
const warnings = []
const errors = [];

  // Check Node.js version
  const nodeVersion = process.version;
  logger.warn(`📦 Node.js Version: ${nodeVersion}`)
const majorVersion = parseInt(nodeVersion.slice(1).split('.')[0]);
  if (majorVersion < 18) {
    errors.push('Node.js version should be 18 or higher');
  } else {
    logger.warn('   ✅ Node.js version is compatible\n');
  }

  // Check for package.json
  if (fs.existsSync('package.json')) {
    logger.warn('📋 Package.json: ✅ Found');

    // Check if node_modules exists
    if (fs.existsSync('node_modules')) {
      logger.warn('📁 Node modules: ✅ Installed');
    } else {
      errors.push(
        'node_modules not found - run `./setup.sh npm` to install dependencies',
      );
      warnings.push(
        'For limited functionality without internet, run `./offline-dev.sh`',
      );
    }
  } else {
    errors.push('package.json not found');
  }

  // Check for environment files
  logger.warn('\n🌍 Environment Configuration:');
  logger.warn('=============================')
const envFiles = ['.env.local', '.env', '.env.development'];
  let hasEnvFile = false;

  envFiles.forEach((file) => {
    if (fs.existsSync(file)) {
      logger.warn(`   ✅ ${file} found`);
      hasEnvFile = true;
    }
  });

  if (!hasEnvFile) {
    warnings.push(
      'No environment file found - create .env.local for development',
    );
  }

  // Check Next.js config
  logger.warn('\n⚙️  Configuration Files:');
  logger.warn('=======================');

  // Check package.json type field to determine correct config file
  let packageType = 'commonjs'; // default
  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
    packageType = packageJson.type || 'commonjs';
  } catch (_error) {
    // Will be caught later
  }

  if (fs.existsSync('next.config.cjs')) {
    logger.warn('   ✅ next.config.cjs found');
  } else if (fs.existsSync('next.config.js')) {
    if (packageType === 'module') {
      logger.warn('   ✅ next.config.js found (ES module)');
    } else {
      logger.warn('   ✅ next.config.js found');
    }
  } else {
    warnings.push('No Next.js config file found');
  }

  // Check TypeScript
  if (fs.existsSync('tsconfig.json')) {
    logger.warn('   ✅ tsconfig.json found');
  } else {
    warnings.push('tsconfig.json not found - TypeScript configuration missing');
  }

  // Check Tailwind
  if (
    fs.existsSync('tailwind.config.js') ||
    fs.existsSync('tailwind.config.ts')
  ) {
    logger.warn('   ✅ Tailwind config found');
  } else {
    warnings.push('Tailwind config not found');
  }

  // Check for common development scripts
  logger.warn('\n🔧 Development Scripts:');
  logger.warn('======================');

  try {
    const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'))
const scripts = packageJson.scripts || {}
const requiredScripts = ['dev', 'build', 'start'];
    requiredScripts.forEach((script) => {
      if (scripts[script]) {
        logger.warn(`   ✅ ${script} script available`);
      } else {
        warnings.push(`${script} script missing in package.json`);
      }
    });
  } catch {
    errors.push('Error reading package.json');
  }

  // Summary
  logger.warn('\n📊 Environment Status:');
  logger.warn('=====================');

  if (errors.length === 0 && warnings.length === 0) {
    logger.warn(
      '🎉 Perfect! Your development environment is fully configured.',
    );
    logger.warn('\nYou can now run:');
    logger.warn('• npm run dev - Start development server');
    logger.warn('• npm run build - Build for production');
    logger.warn('• npm run start - Start production server');
  } else {
    if (errors.length > 0) {
      logger.warn('\n❌ Critical Issues:');
      errors.forEach((error) => logger.warn(`   • ${error}`));
      allGood = false;
    }

    if (warnings.length > 0) {
      logger.warn('\n⚠️  Warnings:');
      warnings.forEach((warning) => logger.warn(`   • ${warning}`));
    }

    if (!allGood) {
      logger.warn('\n🔧 Please fix the critical issues before continuing.');
    } else {
      logger.warn('\n✅ Environment is functional but could be improved.');
    }
  }

  logger.warn('\n💡 Quick Setup Commands:');
  logger.warn('========================');
  logger.warn('npm install          # Install dependencies');
  logger.warn('npm run build        # Test production build');
  logger.warn('npm run dev          # Start development server');

  return allGood;
}

if (require.main === module) {
  checkEnvironment();
}

module.exports = { checkEnvironment };
    } catch (error) {
      logger.error('Error in :', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    logger.info('Stopping ...');
  }
}

// Start the script
if (require.main === module) {
  const script = new ();
  script.start().catch(error => {
    logger.error('Failed to start :', error);
    process.exit(1);
  });
}

module.exports = ;


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

