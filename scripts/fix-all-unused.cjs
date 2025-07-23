
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


const fs = require('fs')
const path = require('path')
const { execSync } = require('child_process');

// Find all JavaScript and TypeScript files
const findFiles = () => {
  try {
    const output = execSync(
      'find . -name "*.js" -o -name "*.ts" -o -name "*.jsx" -o -name "*.tsx" | grep -v node_modules',
      { encoding: 'utf8' },
    );
    return output.trim().split('\n').filter(Boolean);
  } catch (error) {
    logger.error('Error finding files:', error.message);
    return [];
  }
};

// Fix all unused variables with underscore prefixes
const fixUnusedVariables = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Pattern 1: catch (_err) { ... }
    const pattern1 = /catch\s*\(\s*_err\s*\)\s*\{/g;
    if (pattern1.test(content)) {
      content = content.replace(pattern1, 'catch {');
      modified = true;
    }

    // Pattern 2: catch (_error) { ... }
    const pattern2 = /catch\s*\(\s*_error\s*\)\s*\{/g;
    if (pattern2.test(content)) {
      content = content.replace(pattern2, 'catch {');
      modified = true;
    }

    // Pattern 3: catch (_restartError) { ... }
    const pattern3 = /catch\s*\(\s*_restartError\s*\)\s*\{/g;
    if (pattern3.test(content)) {
      content = content.replace(pattern3, 'catch {');
      modified = true;
    }

    // Pattern 4: const _variable = ... (unused variables)
    const pattern4 = /const\s+(_[a-zA-Z][a-zA-Z0-9]*)\s*=/g;
    if (pattern4.test(content)) {
      content = content.replace(pattern4, (match, varName) => {
        // Check if the variable is actually used in the file
        const usagePattern = new RegExp(`\\b${varName}\\b`, 'g')
const matches = content.match(usagePattern);
        if (matches && matches.length <= 1) {
          // Only the declaration
          return `const ${varName} = undefined; // Unused`;
        }
        return match;
      });
      modified = true;
    }

    // Pattern 5: let _variable = ... (unused variables)
    const pattern5 = /let\s+(_[a-zA-Z][a-zA-Z0-9]*)\s*=/g;
    if (pattern5.test(content)) {
      content = content.replace(pattern5, (match, varName) => {
        const usagePattern = new RegExp(`\\b${varName}\\b`, 'g')
const matches = content.match(usagePattern);
        if (matches && matches.length <= 1) {
          return `let ${varName} = undefined; // Unused`;
        }
        return match;
      });
      modified = true;
    }

    // Pattern 6: function parameters with underscore prefix
    const pattern6 = /function\s*\([^)]*_([a-zA-Z][a-zA-Z0-9]*)[^)]*\)/g;
    if (pattern6.test(content)) {
      content = content.replace(pattern6, (match, paramName) => {
        return match.replace(`_${paramName}`, paramName);
      });
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      logger.info(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    logger.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const main = () => {
  logger.info('🔧 Fixing all unused variables...')
const files = findFiles();
  let fixedCount = 0;

  files.forEach((file) => {
    if (fixUnusedVariables(file)) {
      fixedCount++;
    }
  });

  logger.info(`✅ Fixed ${fixedCount} files`);
};

if (require.main === module) {
  main();
}

module.exports = { fixUnusedVariables };
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
