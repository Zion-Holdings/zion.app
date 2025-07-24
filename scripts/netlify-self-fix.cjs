
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


class Script {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    logger.info('Starting Script...');
    
    try {
      #!/usr/bin/env node

// Netlify Self Fix - Patches vendors.js to fix "self is not defined" in serverless environment
// This script runs after Next.js build to patch the generated vendor bundle

const fs = require('fs')
const path = require('path');

// Fallback glob implementation if glob package not available
function globSync(pattern) {
  try {
    const glob = require('glob');
    return glob.sync(pattern);
  } catch {
    // Simple fallback implementation
    const dir = path.dirname(pattern)
const filename = path.basename(pattern);

    if (!fs.existsSync(dir)) return []
const files = fs.readdirSync(dir);
    return files
      .filter((file) =>
        filename.includes('*')
          ? file.includes(filename.replace('*', ''))
          : file === filename,
      )
      .map((file) => path.join(dir, file));
  }
}

// logger.warn('🔧 Fixing Netlify "self is not defined" issue...')
function patchVendorsFile() {
  try {
    // Find all vendors files in .next/server directory
    const serverDir = path.join(process.cwd(), '.next', 'server')
const vendorsPattern = path.join(serverDir, 'vendors*.js')
const vendorFiles = globSync(vendorsPattern);

    if (vendorFiles.length === 0) {
      // logger.warn('📁 No vendors.js file found to patch');
      return;
    }

    vendorFiles.forEach((vendorFile) => {
      // logger.warn(`🔧 Patching ${path.basename(vendorFile)}...`);

      let content = fs.readFileSync(vendorFile, 'utf8');

      // Check if file starts with problematic self reference
      if (
        content.startsWith('(self["webpackChunk_N_E"]') ||
        content.includes('self["webpackChunk_N_E"]')
      ) {
        // logger.warn('🎯 Found problematic self reference, applying fix...');

        // Create comprehensive polyfill
        const polyfill = `// Netlify Serverless Self Polyfill
if (typeof self === 'undefined') {
  if (typeof global !== 'undefined') {
    global.self = global;
    if (typeof globalThis !== 'undefined') {
      globalThis.self = global;
    }
  } else if (typeof globalThis !== 'undefined') {
    globalThis.self = globalThis;
  } else {
    // Fallback for edge cases
    var self = this || {};
  }
}

// Ensure webpackChunk_N_E array exists
if (typeof self !== 'undefined' && !self.webpackChunk_N_E) {
  self.webpackChunk_N_E = [];
}

`;

        // Add polyfill at the beginning
        content = polyfill + content;

        // Write the patched content back
        fs.writeFileSync(vendorFile, content, 'utf8');
        // logger.warn(`✅ Successfully patched ${path.basename(vendorFile)}`);
      } else {
        // logger.warn(`ℹ️ ${path.basename(vendorFile)} doesn't need patching`);
      }
    });
  } catch (_error) {
    logger.error('❌ Error patching vendors file:', error.message);
    throw error;
  }
}

function patchChunkFiles() {
  try {
    // Also patch any other chunks that might have self references
    const staticDir = path.join(process.cwd(), '.next', 'static', 'chunks');

    if (!fs.existsSync(staticDir)) {
      // logger.warn('📁 Static chunks directory not found');
      return;
    }

    const chunkFiles = globSync(path.join(staticDir, '*.js'));

    chunkFiles.forEach((chunkFile) => {
      let content = fs.readFileSync(chunkFile, 'utf8');

      if (
        content.includes('self["webpackChunk_N_E"]') ||
        content.includes('self.webpackChunk_N_E')
      ) {
        // logger.warn(`🔧 Patching chunk ${path.basename(chunkFile)}...`);

        // Replace self references with safe access
        content = content.replace(
          /self\["webpackChunk_N_E"\]/g,
          '(typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : globalThis)["webpackChunk_N_E"]',
        );

        content = content.replace(
          /self\.webpackChunk_N_E/g,
          '(typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : globalThis).webpackChunk_N_E',
        );

        fs.writeFileSync(chunkFile, content, 'utf8');
        // logger.warn(`✅ Patched chunk ${path.basename(chunkFile)}`);
      }
    });
  } catch (_error) {
    logger.warn('⚠️ Error patching chunk files:', error.message);
    // Don't throw here as chunk patching is optional
  }
}

function createGlobalPolyfill() {
  try {
    // Create a global polyfill file that can be required early
    const polyfillPath = path.join(
      process.cwd(),
      '.next',
      'server',
      'self-polyfill.js',
    )
const polyfillContent = `// Global self polyfill for Netlify serverless
if (typeof global !== 'undefined' && typeof global.self === 'undefined') {
  global.self = global;
}

if (typeof globalThis !== 'undefined' && typeof globalThis.self === 'undefined') {
  globalThis.self = globalThis;
}

// Ensure webpackChunk arrays exist
if (typeof global !== 'undefined' && !global.webpackChunk_N_E) {
  global.webpackChunk_N_E = [];
}

module.exports = {
  ensureSelf: function() {
    if (typeof global !== 'undefined' && typeof global.self === 'undefined') {
      global.self = global;
    }
  }
};
`;

    fs.writeFileSync(polyfillPath, polyfillContent, 'utf8');
    // logger.warn('✅ Created global self polyfill');
  } catch (_error) {
    logger.warn('⚠️ Could not create global polyfill:', error.message);
  }
}

function main() {
  // logger.warn('🚀 Starting Netlify self reference fix...');

  try {
    // Step 1: Patch vendors.js file
    patchVendorsFile();

    // Step 2: Patch chunk files
    patchChunkFiles();

    // Step 3: Create global polyfill
    createGlobalPolyfill();

    // logger.warn('✅ Netlify self fix completed successfully!');
  } catch (_error) {
    logger.error('❌ Netlify self fix failed:', error.message);
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main();
}

module.exports = {
  main,
  patchVendorsFile,
  patchChunkFiles,
  createGlobalPolyfill,
};


// Graceful shutdown handling
process.on('SIGINT', () => {
  logger.info('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  logger.info('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});
    } catch (error) {
      logger.error('Error in Script:', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    logger.info('Stopping Script...');
  }
}

// Start the script
if (require.main === module) {
  const script = new Script();
  script.start().catch(error => {
    logger.error('Failed to start Script:', error);
    process.exit(1);
  });
}

module.exports = Script;
