#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Find all JavaScript and TypeScript files
const findFiles = () => {
  try {
    const output = execSync('find . -name "*.js" -o -name "*.ts" -o -name "*.jsx" -o -name "*.tsx" | grep -v node_modules', { encoding: 'utf8' });
    return output.trim().split('\n').filter(Boolean);
  } catch (error) {
    console.error('Error finding files:', error.message);
    return [];
  }
};

// Fix unused _error variables in catch blocks
const fixUnusedError = (filePath) => {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Pattern 1: catch (_error) { ... console.error(..., error) ... }
    const pattern1 = /catch\s*\(\s*_error\s*\)\s*\{([^}]*?console\.error[^}]*?error[^}]*?)\}/gs;
    if (pattern1.test(content)) {
      content = content.replace(pattern1, (match, catchBody) => {
        const fixedBody = catchBody.replace(/error/g, '');
        return `catch {${fixedBody}}`;
      });
      modified = true;
    }

    // Pattern 2: catch (_error) { ... res.json({ error: error.message }) ... }
    const pattern2 = /catch\s*\(\s*_error\s*\)\s*\{([^}]*?error\.message[^}]*?)\}/gs;
    if (pattern2.test(content)) {
      content = content.replace(pattern2, (match, catchBody) => {
        const fixedBody = catchBody.replace(/error\.message/g, "'Error occurred'");
        return `catch {${fixedBody}}`;
      });
      modified = true;
    }

    // Pattern 3: catch (_error) { ... res.json({ error: error }) ... }
    const pattern3 = /catch\s*\(\s*_error\s*\)\s*\{([^}]*?error[^}]*?)\}/gs;
    if (pattern3.test(content)) {
      content = content.replace(pattern3, (match, catchBody) => {
        const fixedBody = catchBody.replace(/error/g, "'Error occurred'");
        return `catch {${fixedBody}}`;
      });
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
};

// Main execution
const main = () => {
  console.log('🔧 Fixing unused _error variables...');
  
  const files = findFiles();
  let fixedCount = 0;

  files.forEach(file => {
    if (fixUnusedError(file)) {
      fixedCount++;
    }
  });

  console.log(`✅ Fixed ${fixedCount} files`);
};

if (require.main === module) {
  main();
}

module.exports = { fixUnusedError }; 