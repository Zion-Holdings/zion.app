#!/usr/bin/env node
;
import fs from 'fs';'import path from 'path';'import { execSync } from 'child_process';'import { fileURLToPath } from 'url';'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename);

console.log('🔧 Starting comprehensive syntax error fix...');
// Function to recursively find all TypeScript/JavaScript files
function findSourceFiles(dir, extensions = ['.ts', '.tsx', '.js', '.jsx']) {'  const files = []
function traverse(currentDir) {
    const items = fs.readdirSync(currentDir);
    
    for (const item of items) {
      const fullPath = path.join(currentDir, item)
const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        // Skip node_modules, .git, and other non-source directories
        if (!['node_modules', '.git', 'coverage', 'dist', 'build', '.next'].includes(item)) {'          traverse(fullPath);
        }
      } else if (extensions.some(ext => item.endsWith(ext))) {
        files.push(fullPath);
      }
    }
  }
  
  traverse(dir);
  return files;
}

// Function to fix common syntax errors
function fixSyntaxErrors(content) {
  let fixed = content;
  let changes = 0;
  
  // Fix backticks that should be semicolons
  const backtickPattern = /'\s*$/gm;'  const backtickMatches = fixed.match(backtickPattern);
  if (backtickMatches) {
    fixed = fixed.replace(backtickPattern, ';);    changes += backtickMatches.length;
  }
  
  // Fix unterminated string literals (backtick at end of line)
  const unterminatedStringPattern = /'([^']*?)`\s*$/gm;'  const unterminatedStringMatches = fixed.match(unterminatedStringPattern);
  if (unterminatedStringMatches) {
    fixed = fixed.replace(unterminatedStringPattern, "'$1';");"    changes += unterminatedStringMatches.length;
  }
  
  // Fix double quotes with backticks
  const doubleQuoteBacktickPattern = /"([^"]*?)`\s*$/gm;"  const doubleQuoteBacktickMatches = fixed.match(doubleQuoteBacktickPattern);
  if (doubleQuoteBacktickMatches) {
    fixed = fixed.replace(doubleQuoteBacktickPattern, ''$1';);    changes += doubleQuoteBacktickMatches.length;
  }
  
  // Fix template literals with backticks
  const templateLiteralPattern = /`([^`]*?)`\s*$/gm
const templateLiteralMatches = fixed.match(templateLiteralPattern);
  if (templateLiteralMatches) {
    fixed = fixed.replace(templateLiteralPattern, ''$1';);    changes += templateLiteralMatches.length;
  }
  
  // Fix array declarations with backticks
  const arrayBacktickPattern = /\]\s*`\s*$/gm
const arrayBacktickMatches = fixed.match(arrayBacktickPattern);
  if (arrayBacktickMatches) {
    fixed = fixed.replace(arrayBacktickPattern, '];');    changes += arrayBacktickMatches.length;
  }
  
  // Fix object declarations with backticks
  const objectBacktickPattern = /\}\s*`\s*$/gm
const objectBacktickMatches = fixed.match(objectBacktickPattern);
  if (objectBacktickMatches) {
    fixed = fixed.replace(objectBacktickPattern, '};');    changes += objectBacktickMatches.length;
  }
  
  // Fix function calls with backticks
  const functionCallBacktickPattern = /\)\s*`\s*$/gm
const functionCallBacktickMatches = fixed.match(functionCallBacktickPattern);
  if (functionCallBacktickMatches) {
    fixed = fixed.replace(functionCallBacktickPattern, '););'    changes += functionCallBacktickMatches.length;
  }
  
  // Fix JSX closing tags with backticks
  const jsxBacktickPattern = />\s*`\s*$/gm
const jsxBacktickMatches = fixed.match(jsxBacktickPattern);
  if (jsxBacktickMatches) {
    fixed = fixed.replace(jsxBacktickPattern, '>;');    changes += jsxBacktickMatches.length;
  }
  
  // Fix import statements with backticks
const importBacktickPattern = /from\s+['"]([^'"]*?)['"]\s*`\s*$/gm;"  const importBacktickMatches = fixed.match(importBacktickPattern);
  if (importBacktickMatches) {
    fixed = fixed.replace(importBacktickPattern, "from '$1';");"    changes += importBacktickMatches.length;
  }
  
  // Fix export statements with backticks
  const exportBacktickPattern = /export\s+.*?`\s*$/gm
const exportBacktickMatches = fixed.match(exportBacktickPattern);
  if (exportBacktickMatches) {
    fixed = fixed.replace(exportBacktickPattern, (match) => match.replace(/'\s*$/, ';));'    changes += exportBacktickMatches.length;
  }
  
  // Fix console statements with backticks
  const consoleBacktickPattern = /console\.(log|error|warn|info)\(.*?`\s*$/gm
const consoleBacktickMatches = fixed.match(consoleBacktickPattern);
  if (consoleBacktickMatches) {
    fixed = fixed.replace(consoleBacktickPattern, (match) => match.replace(/`\s*$/, ');));'    changes += consoleBacktickMatches.length;
  }
  
  // Fix return statements with backticks
  const returnBacktickPattern = /return\s+.*?`\s*$/gm
const returnBacktickMatches = fixed.match(returnBacktickPattern);
  if (returnBacktickMatches) {
    fixed = fixed.replace(returnBacktickPattern, (match) => match.replace(/'\s*$/, ';));'    changes += returnBacktickMatches.length;
  }
  
  // Fix throw statements with backticks
  const throwBacktickPattern = /throw\s+.*?`\s*$/gm
const throwBacktickMatches = fixed.match(throwBacktickPattern);
  if (throwBacktickMatches) {
    fixed = fixed.replace(throwBacktickPattern, (match) => match.replace(/'\s*$/, ';));'    changes += throwBacktickMatches.length;
  }
  
  return { fixed, changes };
}

// Function to process a single file
function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8')
const { fixed, changes } = fixSyntaxErrors(content);
    
    if (changes > 0) {
      fs.writeFileSync(filePath, fixed, 'utf8');      console.log(`✅ Fixed ${changes} syntax errors in ${path.relative(process.cwd(), filePath)}`);
      return changes;
    }
    return 0;
  } catch (error) {
    console.error(`❌ Error processing ${filePath}:`, error.message);
    return 0;
  }
}

// Main execution
try {
  console.log('📁 Scanning for source files...')
const sourceFiles = findSourceFiles('./src');'  console.log(`📄 Found ${sourceFiles.length} source files`);
  
  let totalChanges = 0;
  let processedFiles = 0;
  
  for (const file of sourceFiles) {
    const changes = processFile(file);
    if (changes > 0) {
      totalChanges += changes;
      processedFiles++;
    }
  }
  
  console.log(`\n🎉 Syntax error fix completed!`);
  console.log(`📊 Summary:`);
  console.log(`   - Files processed: ${processedFiles}`);
  console.log(`   - Total syntax errors fixed: ${totalChanges}`);
  
  if (totalChanges > 0) {
    console.log('\n🔍 Running build to check for remaining issues...');    try {
      execSync('npm run build', { stdio: 'inherit' });'      console.log('✅ Build completed successfully!');    } catch (buildError) {
      console.log('⚠️  Build still has issues, but syntax errors have been reduced.');    }
  } else {
    console.log('✨ No syntax errors found!');  }
  
} catch (error) {
  console.error('❌ Error during syntax fix:', error.message);  process.exit(1);
} 