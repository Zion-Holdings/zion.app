
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

logger.info('🔧 Starting mass parsing error fixer...');

// Function to recursively find all TypeScript/JavaScript files
function findSourceFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {
  const files = []
function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item)
const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .git, and other common directories
        if (!['node_modules', '.git', 'dist', 'build', 'coverage', '.next'].includes(item)) {
          traverse(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Function to fix common parsing errors in a file
function fixParsingErrors(content, filePath) {
  let fixed = content;
  let changes = 0;
  
  // Fix 1: Remove merge conflict markers
  const conflictPattern = /^[<>]{7}|^={7}|^-{7}/gm;
  if (conflictPattern.test(fixed)) {
    fixed = fixed.replace(conflictPattern, '');
    changes++;
  }
  
  // Fix 2: Fix unterminated string literals with semicolons
  const unterminatedStringPattern = /(["'`])([^"'`]*?);\s*$/gm;
  if (unterminatedStringPattern.test(fixed)) {
    fixed = fixed.replace(unterminatedStringPattern, '$1$2$1');
    changes++;
  }
  
  // Fix 3: Fix malformed import statements
  const malformedImportPattern = /import\s*\{[^}]*;\s*$/gm;
  if (malformedImportPattern.test(fixed)) {
    fixed = fixed.replace(malformedImportPattern, (match) => {
      return match.replace(/;\s*$/, '');
    });
    changes++;
  }
  
  // Fix 4: Fix duplicate semicolons
  const duplicateSemicolons = /;{2,}/g;
  if (duplicateSemicolons.test(fixed)) {
    fixed = fixed.replace(duplicateSemicolons, ';');
    changes++;
  }
  
  // Fix 5: Fix malformed object properties
  const malformedPropertyPattern = /(\w+):\s*"([^"]*);\s*$/gm;
  if (malformedPropertyPattern.test(fixed)) {
    fixed = fixed.replace(malformedPropertyPattern, '$1: "$2"');
    changes++;
  }
  
  // Fix 6: Fix malformed function parameters
  const malformedParamPattern = /\(\s*([^)]*);\s*\)/gm;
  if (malformedParamPattern.test(fixed)) {
    fixed = fixed.replace(malformedParamPattern, (match, params) => {
      return `(${params.replace(/;\s*$/, '')})`;
    });
    changes++;
  }
  
  // Fix 7: Fix malformed type annotations
  const malformedTypePattern = /:\s*([^;]*);\s*$/gm;
  if (malformedTypePattern.test(fixed)) {
    fixed = fixed.replace(malformedTypePattern, (match, type) => {
      if (type.includes('"') && !type.includes('"', type.indexOf('"') + 1)) {
        return `: ${type.replace(/;\s*$/, '')}`;
      }
      return match;
    });
    changes++;
  }
  
  // Fix 8: Remove trailing semicolons in string literals
  const trailingSemicolonInString = /"([^"]*);\s*"/g;
  if (trailingSemicolonInString.test(fixed)) {
    fixed = fixed.replace(trailingSemicolonInString, '"$1"');
    changes++;
  }
  
  // Fix 9: Fix malformed JSX attributes
  const malformedJSXAttr = /(\w+)=["']([^"']*);\s*["']/g;
  if (malformedJSXAttr.test(fixed)) {
    fixed = fixed.replace(malformedJSXAttr, '$1="$2"');
    changes++;
  }
  
  // Fix 10: Fix malformed template literals
  const malformedTemplate = /`([^`]*);\s*`/g;
  if (malformedTemplate.test(fixed)) {
    fixed = fixed.replace(malformedTemplate, '`$1`');
    changes++;
  }
  
  // Fix 11: Remove duplicate unknown keywords
  const duplicateUnknown = /unknown\s+unknown\s+unknown/g;
  if (duplicateUnknown.test(fixed)) {
    fixed = fixed.replace(duplicateUnknown, 'unknown');
    changes++;
  }
  
  // Fix 12: Fix malformed catch blocks
  const malformedCatch = /catch\s*\(\s*error\s*\)\s*\{\s*catch\s*\(\s*error\s*\)\s*\{\s*catch\s*\(\s*error\s*\)\s*\{\s*catch\s*\(\s*error\s*\)\s*\{\s*catch\s*\(\s*error\s*\)\s*\{\s*catch/g;
  if (malformedCatch.test(fixed)) {
    fixed = fixed.replace(malformedCatch, 'catch (error) {');
    changes++;
  }
  
  // Fix 13: Fix malformed try blocks
  const malformedTry = /try\s*\{\s*try\s*\{\s*try\s*\{\s*try\s*\{\s*try/g;
  if (malformedTry.test(fixed)) {
    fixed = fixed.replace(malformedTry, 'try {);
    changes++;
  }
  
  // Fix 14: Remove malformed semicolon sequences
  const malformedSemicolons = /;{3,}/g;
  if (malformedSemicolons.test(fixed)) {
    fixed = fixed.replace(malformedSemicolons, ';');
    changes++;
  }
  
  // Fix 15: Fix malformed quotes in strings
  const malformedQuotes = /"([^"]*)"([^"]*)"([^"]*)"/g;
  if (malformedQuotes.test(fixed)) {
    fixed = fixed.replace(malformedQuotes, '"$1$2$3"');
    changes++;
  }
  
  // Fix 16: Remove empty lines with just semicolons
  const emptySemicolonLines = /^\s*;\s*$/gm;
  if (emptySemicolonLines.test(fixed)) {
    fixed = fixed.replace(emptySemicolonLines, '');
    changes++;
  }
  
  // Fix 17: Fix malformed interface declarations
  const malformedInterface = /interface\s+\w+\s*\{\s*;\s*\{/g;
  if (malformedInterface.test(fixed)) {
    fixed = fixed.replace(malformedInterface, 'interface $1 {');
    changes++;
  }
  
  // Fix 18: Fix malformed type declarations
  const malformedType = /type\s+\w+\s*=\s*([^;]*);\s*$/gm;
  if (malformedType.test(fixed)) {
    fixed = fixed.replace(malformedType, (match, type) => {
      if (type.includes('"') && !type.includes('"', type.indexOf('"') + 1)) {
        return `type ${match.split('=')[0].split('type')[1].trim()} = ${type.replace(/;\s*$/, '')}`;
      }
      return match;
    });
    changes++;
  }
  
  // Fix 19: Remove malformed comment sequences
  const malformedComments = /\/\*\s*\*\//g;
  if (malformedComments.test(fixed)) {
    fixed = fixed.replace(malformedComments, '');
    changes++;
  }
  
  // Fix 20: Fix malformed export statements
  const malformedExport = /export\s+([^;]*);\s*$/gm;
  if (malformedExport.test(fixed)) {
    fixed = fixed.replace(malformedExport, (match, exportContent) => {
      if (exportContent.includes('"') && !exportContent.includes('"', exportContent.indexOf('"') + 1)) {
        return `export ${exportContent.replace(/;\s*$/, '')}`;
      }
      return match;
    });
    changes++;
  }
  
  return { content: fixed, changes };
}

// Function to check if a file has parsing errors
function hasParsingErrors(filePath) {
  try {
    // Try to parse the file with TypeScript compiler
    const result = execSync(`npx tsc --noEmit --skipLibCheck "${filePath}" 2>&1`, { 
      encoding: 'utf8',
      stdio: 'pipe'
    });
    return result.includes('Parsing error') || result.includes('Unterminated string literal');
  } catch (error) {
    return error.stdout?.includes('Parsing error') || error.stderr?.includes('Parsing error');
  }
}

// Main execution
try {
  const sourceDir = path.join(process.cwd(), 'src')
const files = findSourceFiles(sourceDir);
  
  logger.info(`📁 Found ${files.length} source files to check`);
  
  let totalFixed = 0;
  let filesWithErrors = 0;
  
  for (const filePath of files) {
    try {
      const content = fs.readFileSync(filePath, 'utf8')
const { content: fixedContent, changes } = fixParsingErrors(content, filePath);
      
      if (changes > 0) {
        fs.writeFileSync(filePath, fixedContent, 'utf8');
        logger.info(`✅ Fixed ${changes} issues in ${path.relative(process.cwd(), filePath)}`);
        totalFixed += changes;
      }
      
      // Check if file still has parsing errors
      if (hasParsingErrors(filePath)) {
        filesWithErrors++;
        logger.info(`⚠️  File still has parsing errors: ${path.relative(process.cwd(), filePath)}`);
      }
      
    } catch (error) {
      logger.error(`❌ Error processing ${filePath}:`, error.message);
    }
  }
  
  logger.info(`\n📊 Summary:`);
  logger.info(`   - Total fixes applied: ${totalFixed}`);
  logger.info(`   - Files with remaining errors: ${filesWithErrors}`);
  logger.info(`   - Files processed: ${files.length}`);
  
  if (filesWithErrors > 0) {
    logger.info(`\n⚠️  ${filesWithErrors} files still have parsing errors. Manual review may be needed.`);
  } else {
    logger.info(`\n🎉 All parsing errors have been fixed!`);
  }
  
} catch (error) {
  logger.error('❌ Error during mass parsing fix:', error);
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
