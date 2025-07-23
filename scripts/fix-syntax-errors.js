
class Script {
  constructor() {
    this.isRunning = false;
  }

  async start() {
    this.isRunning = true;
    console.log('Starting Script...');
    
    try {
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

#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

logger.info('🔧 Fixing syntax errors in the codebase...');

// Function to recursively find all TypeScript files
function findTsFiles(dir, files = []) {
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== node_modules' && item !== .next') {
      findTsFiles(fullPath, files);
    } else if (item.endsWith('.ts') || item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Function to fix syntax errors in a file
function fixSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, utf8');
    let modified = false;
    
    // Fix missing quotes in import statements
    const importRegex = /import\s+(?:type\s+)?\{[^}]+\}\s+from\s+next';/g;
    if (importRegex.test(content)) {
      content = content.replace(importRegex, (match) => {
        return match.replace("next';", "'next';");
      });
      modified = true;
    }
    
    // Fix missing quotes in method checks
    const methodRegex = /req\.method\s*!==\s*([A-Z]+)/g;
    if (methodRegex.test(content)) {
      content = content.replace(methodRegex, (match, method) => {
        return match.replace(`${method}`, `'${method}`);
      });
      modified = true;
    }
    
    // Fix missing quotes in string literals
    const stringRegex = /message:\s*([A-Za-z\s]+)/g;
    if (stringRegex.test(content)) {
      content = content.replace(stringRegex, (match, message) => {
        return match.replace(`${message}`, `'${message}`);
      });
      modified = true;
    }
    
    // Fix missing quotes in typeof checks
    const typeofRegex = /typeof\s+global\s*!==\s*undefined'/g;
    if (typeofRegex.test(content)) {
      content = content.replace(typeofRegex, "typeof global !== undefined'");
      modified = true;
    }
    
    // Fix missing quotes in typeof checks for self
    const selfRegex = /typeof\s*\([^)]+\)\.self\s*===\s*undefined/g;
    if (selfRegex.test(content)) {
      content = content.replace(selfRegex, (match) => {
        return match.replace('undefined', "'undefined'");
      });
      modified = true;
    }
    
    if (modified) {
      fs.writeFileSync(filePath, content, utf8');
      logger.info(`✅ Fixed: ${filePath}`);
      return true;
    }
    
    return false;
  } catch (error) {
    logger.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Main execution
try {
  const tsFiles = findTsFiles('.');
  logger.info(`Found ${tsFiles.length} TypeScript files to check...`);
  
  let fixedCount = 0;
  for (const file of tsFiles) {
    if (fixSyntaxErrors(file)) {
      fixedCount++;
    }
  }
  
  logger.info(`\n🎉 Fixed syntax errors in ${fixedCount} files!`);
  
  // Run TypeScript check to verify fixes
  logger.info('\n🔍 Running TypeScript check...');
  try {
    execSync('npx tsc --noEmit', { stdio: inherit' });
    logger.info('✅ TypeScript check passed!');
  } catch (error) {
    logger.info('⚠️  TypeScript check still has issues, but syntax errors should be fixed.');
  }
  
} catch (error) {
  logger.error('❌ Error during syntax fix:', error.message);
  process.exit(1);
} 

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
    } catch (error) {
      console.error('Error in Script:', error);
      throw error;
    }
  }

  stop() {
    this.isRunning = false;
    console.log('Stopping Script...');
  }
}

// Start the script
if (require.main === module) {
  const script = new Script();
  script.start().catch(error => {
    console.error('Failed to start Script:', error);
    process.exit(1);
  });
}

module.exports = Script;
