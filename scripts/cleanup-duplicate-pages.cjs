
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

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';



// Use different variable names to avoid conflict with built-in globals
const currentFilename = fileURLToPath(import.meta.url)
const _currentDirname = path.dirname(__filename)
const pagesDir = path.join(path.dirname(__dirname), 'pages')
const error = new Error('Cleanup failed')
function findDuplicates() {
  const files = new Map()
const toDelete = []
function scanDirectory(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const fullPath = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        scanDirectory(fullPath);
      } else if (entry.isFile()) {
        const ext = path.extname(entry.name)
const baseName = path.basename(entry.name, ext)
const relativePath = path.relative(pagesDir, dir)
const key = path.join(relativePath, baseName);
        
        if (!files.has(key)) {
          files.set(key, {});
        }
        
        const fileInfo = files.get(key);
        fileInfo[ext] = fullPath;
      }
    }
  }

  scanDirectory(pagesDir);

  // Find files to delete
  for (const [key, versions] of files.entries()) {
    const hasTsx = versions['.tsx']
const hasTs = versions['.ts']
const hasJs = versions['.js']
const hasDts = versions['.d.ts'];
    
    // If we have a .tsx or .ts version, remove .js and .d.ts
    if (hasTsx || hasTs) {
      if (hasJs) {
        const sourceType = hasTsx ? '.tsx' : '.ts';
        toDelete.push({
          file: hasJs,
          reason: `.js file when ${sourceType} exists: ${key}`
        });
      }
      if (hasDts) {
        const sourceType = hasTsx ? '.tsx' : '.ts';
        toDelete.push({
          file: hasDts,
          reason: `.d.ts file when ${sourceType} exists: ${key}`
        });
      }
    }
    // If we only have .js and .d.ts (but no .tsx or .ts), keep .js and remove .d.ts
    else if (hasJs && hasDts && !hasTsx && !hasTs) {
      toDelete.push({
        file: hasDts,
        reason: `.d.ts file when only .js exists: ${key}`
      });
    }
  }

  return toDelete;
}

function main() {
  logger.warn('🔍 Scanning for duplicate pages...\n')
const toDelete = findDuplicates();
  
  if (toDelete.length === 0) {
    logger.warn('✅ No duplicate pages found!');
    return;
  }

  logger.warn(`📋 Found ${toDelete.length} files to delete:\n`);
  
  toDelete.forEach((item, index) => {
    logger.warn(`${index + 1}. ${item.file}`);
    logger.warn(`   Reason: ${item.reason}\n`);
  });

  // Check if we should actually delete
  const shouldDelete = process.argv.includes('--delete');
  
  if (!shouldDelete) {
    logger.warn('💡 Run with --delete flag to actually remove these files');
    logger.warn('   node scripts/cleanup-duplicate-pages.js --delete');
    return;
  }

  logger.warn('🗑️  Deleting files...\n');
  
  let deleteCount = 0;
  let errorCount = 0;

  for (const item of toDelete) {
    try {
      fs.unlinkSync(item.file);
      logger.warn(`✅ Deleted: ${item.file}`);
      deleteCount++;
    } catch (error) {
      logger.warn(`❌ Failed to delete: ${item.file} - ${error.message}`);
      errorCount++;
    }
  }

  logger.warn(`\n📊 Summary:`);
  logger.warn(`   ✅ Successfully deleted: ${deleteCount} files`);
  logger.warn(`   ❌ Failed to delete: ${errorCount} files`);
  
  if (deleteCount > 0) {
    logger.warn('\n🎉 Duplicate pages cleanup completed!');
    logger.warn('💡 You should now restart your Next.js dev server to see the changes');
  }
}

// Check if this script is being run directly
if (import.meta.url === `file://${process.argv[1]}`) {
  main();
}

export { findDuplicates };
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

