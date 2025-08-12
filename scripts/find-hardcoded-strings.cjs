#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Configuration
const SEARCH_PATTERNS = [
  '**/*.tsx',
  '**/*.ts',
  '**/*.jsx',
  '**/*.js'
];

const EXCLUDED_DIRS = [
  'node_modules',
  'dist',
  'build',
  '.next',
  'coverage',
  '__tests__',
  '*.test.*',
  '*.spec.*'
];

const OUTPUT_FILE = path.join(__dirname, '../hardcoded-strings-report.md');

// Patterns to identify hardcoded strings that should likely be translated
const HARDCODED_PATTERNS = [
  // Text in JSX elements
  />\s*([A-Z][^<>{}\n]+)\s*</g,
  // String literals in common UI patterns
  /(?:placeholder|title|alt|aria-label)\s*=\s*["']([^"']+)["']/g,
  // Common button/link text patterns
  /(?:button|link).*["']([A-Z][^"']*(?:\s+[A-Z][^"']*)*?)["']/gi,
  // Error messages
  /(?:error|message|alert).*["']([A-Z][^"']+)["']/gi,
  // Form labels
  /(?:label|placeholder).*["']([A-Z][^"']+)["']/gi
];

// Words/phrases that are likely to need translation
const TRANSLATION_INDICATORS = [
  'Sign up', 'Sign in', 'Login', 'Logout', 'Register',
  'Dashboard', 'Profile', 'Settings', 'Home', 'About',
  'Contact', 'Services', 'Products', 'Cart', 'Checkout',
  'Search', 'Filter', 'Sort', 'Save', 'Cancel', 'Submit',
  'Edit', 'Delete', 'Add', 'Remove', 'Update', 'Create',
  'Loading', 'Error', 'Success', 'Warning', 'Info',
  'Welcome', 'Hello', 'Thank you', 'Please', 'Sorry',
  'Continue', 'Back', 'Next', 'Previous', 'Finish',
  'Upload', 'Download', 'Export', 'Import', 'Print',
  'Share', 'Copy', 'Paste', 'Cut', 'Undo', 'Redo'
];

// Exceptions - strings that don't need translation
const EXCEPTIONS = [
  'UTF-8', 'HTTP', 'HTTPS', 'API', 'URL', 'JSON', 'XML',
  'CSS', 'HTML', 'JS', 'TS', 'JSX', 'TSX', 'SVG', 'PNG', 'JPG',
  'console.log', 'console.error', 'console.warn',
  'localStorage', 'sessionStorage', 'innerHTML', 'outerHTML',
  'className', 'onClick', 'onChange', 'onSubmit', 'onFocus',
  'data-', 'aria-', 'role=', 'type=', 'id=', 'class=',
  'px', 'rem', 'em', '%', 'vh', 'vw', 'fr',
  'rgb', 'rgba', 'hex', '#', 'var(',
  'import', 'export', 'from', 'default',
  'true', 'false', 'null', 'undefined',
  'document', 'window', 'navigator', 'location'
];

function isExcluded(text) {
  // Check if it's a technical term or code
  if (EXCEPTIONS.some(exc => text.toLowerCase().includes(exc.toLowerCase()))) {
    return true;
  }
  
  // Check if it's a variable name pattern
  if (/^[a-z_$][a-zA-Z0-9_$]*$/.test(text)) {
    return true;
  }
  
  // Check if it's a CSS property or value
  if (/^[\d\-\.]+(?:px|rem|em|%|vh|vw|fr|s|ms)$/.test(text)) {
    return true;
  }
  
  // Check if it's a hex color
  if (/^#[0-9a-fA-F]{3,6}$/.test(text)) {
    return true;
  }
  
  // Check if it's just whitespace or very short
  if (text.trim().length < 3) {
    return true;
  }
  
  // Check if it contains only numbers and symbols
  if (!/[a-zA-Z]/.test(text)) {
    return true;
  }
  
  return false;
}

function shouldBeTranslated(text) {
  // Check if it matches common UI text patterns
  return TRANSLATION_INDICATORS.some(indicator => 
    text.toLowerCase().includes(indicator.toLowerCase())
  ) || /^[A-Z][a-z].*[a-z]$/.test(text.trim());
}

function analyzeFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const hardcodedStrings = new Set();
    
    // Skip files that are already using translation hooks
    const hasTranslation = /useTranslation|import.*useTranslation/.test(content);
    
    // Find hardcoded strings
    HARDCODED_PATTERNS.forEach(pattern => {
      let match;
      while ((match = pattern.exec(content)) !== null) {
        const text = match[1]?.trim();
        if (text && !isExcluded(text) && shouldBeTranslated(text)) {
          hardcodedStrings.add(text);
        }
      }
    });
    
    // Additional check for string literals in common patterns
    const stringLiteralRegex = /["'`]([^"'`\n]{3,}?)["'`]/g;
    let match;
    while ((match = stringLiteralRegex.exec(content)) !== null) {
      const text = match[1].trim();
      if (text && !isExcluded(text) && shouldBeTranslated(text)) {
        // Check context to see if it's likely UI text
        const beforeMatch = content.substring(Math.max(0, match.index - 50), match.index);
        const afterMatch = content.substring(match.index + match[0].length, match.index + match[0].length + 50);
        const context = beforeMatch + match[0] + afterMatch;
        
        if (/(?:return|jsx|tsx|<|>|className|placeholder|title|alt|aria-label)/.test(context)) {
          hardcodedStrings.add(text);
        }
      }
    }
    
    return {
      filePath,
      hasTranslation,
      hardcodedStrings: Array.from(hardcodedStrings)
    };
  } catch (error) {
    console.error(`Error analyzing file ${filePath}:`, error.message);
    return null;
  }
}

function generateReport(results) {
  let report = `# Hardcoded Strings Report\n\n`;
  report += `Generated on: ${new Date().toISOString()}\n\n`;
  
  const filesWithHardcodedStrings = results.filter(r => r && r.hardcodedStrings.length > 0);
  const filesWithTranslation = results.filter(r => r && r.hasTranslation);
  
  report += `## Summary\n\n`;
  report += `- **Total Files Analyzed**: ${results.filter(r => r).length}\n`;
  report += `- **Files Using Translation**: ${filesWithTranslation.length}\n`;
  report += `- **Files with Hardcoded Strings**: ${filesWithHardcodedStrings.length}\n`;
  report += `- **Translation Coverage**: ${Math.round((filesWithTranslation.length / results.filter(r => r).length) * 100)}%\n\n`;
  
  if (filesWithHardcodedStrings.length === 0) {
    report += `🎉 **Excellent!** No hardcoded strings found that need translation.\n\n`;
    return report;
  }
  
  // Group by priority
  const highPriority = filesWithHardcodedStrings.filter(f => !f.hasTranslation);
  const mediumPriority = filesWithHardcodedStrings.filter(f => f.hasTranslation);
  
  if (highPriority.length > 0) {
    report += `## 🔴 High Priority - Files Without Translation Setup\n\n`;
    report += `These files contain hardcoded strings and don't use the translation system:\n\n`;
    
    highPriority.forEach(file => {
      report += `### ${file.filePath}\n\n`;
      report += `**Hardcoded strings found:**\n`;
      file.hardcodedStrings.forEach(str => {
        report += `- "${str}"\n`;
      });
      report += `\n**Action needed:**\n`;
      report += `1. Add \`import { useTranslation } from 'react-i18next';\`\n`;
      report += `2. Add \`const { t } = useTranslation();\` in the component\n`;
      report += `3. Replace hardcoded strings with \`t('key')\` calls\n\n`;
    });
  }
  
  if (mediumPriority.length > 0) {
    report += `## 🟡 Medium Priority - Files with Partial Translation\n\n`;
    report += `These files use translations but still have some hardcoded strings:\n\n`;
    
    mediumPriority.forEach(file => {
      report += `### ${file.filePath}\n\n`;
      report += `**Remaining hardcoded strings:**\n`;
      file.hardcodedStrings.forEach(str => {
        report += `- "${str}"\n`;
      });
      report += `\n`;
    });
  }
  
  // All unique hardcoded strings for easy translation
  const allStrings = [...new Set(filesWithHardcodedStrings.flatMap(f => f.hardcodedStrings))];
  
  report += `## All Hardcoded Strings (${allStrings.length})\n\n`;
  report += `Here are all unique hardcoded strings found that should be translated:\n\n`;
  
  allStrings.sort().forEach((str, index) => {
    const suggestedKey = str.toLowerCase()
      .replace(/[^a-z0-9\s]/g, '')
      .replace(/\s+/g, '_')
      .substring(0, 30);
    report += `${index + 1}. "${str}" → \`t('${suggestedKey}')\`\n`;
  });
  
  report += `\n## Next Steps\n\n`;
  report += `1. **Add translation keys** for the strings listed above to your translation files\n`;
  report += `2. **Update components** to use the translation system\n`;
  report += `3. **Test** all languages to ensure proper display\n`;
  report += `4. **Review** with native speakers for quality\n\n`;
  
  return report;
}

// Recursive file finder function
function findFiles(dir, extensions, excludedDirs = []) {
  const files = [];
  
  function searchDir(currentDir) {
    try {
      const items = fs.readdirSync(currentDir);
      
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip excluded directories
          if (!excludedDirs.some(excluded => fullPath.includes(excluded))) {
            searchDir(fullPath);
          }
        } else if (stat.isFile()) {
          // Check if file has the right extension
          const ext = path.extname(fullPath);
          if (extensions.includes(ext)) {
            files.push(fullPath);
          }
        }
      }
    } catch (error) {
      // Skip directories we can't read
    }
  }
  
  searchDir(dir);
  return files;
}

function main() {
  console.log('🔍 Scanning for hardcoded strings...');
  
  const extensions = ['.tsx', '.ts', '.jsx', '.js'];
  const files = findFiles('.', extensions, EXCLUDED_DIRS);
  
  console.log(`📁 Found ${files.length} files to analyze`);
  
  const results = files.map(analyzeFile).filter(Boolean);
  console.log(`✅ Analyzed ${results.length} files`);
  
  const report = generateReport(results);
  fs.writeFileSync(OUTPUT_FILE, report);
  
  console.log(`📝 Report saved to: ${OUTPUT_FILE}`);
  
  // Console summary
  const filesWithHardcoded = results.filter(r => r.hardcodedStrings.length > 0);
  const filesWithTranslation = results.filter(r => r.hasTranslation);
  
  console.log(`\n📊 Summary:`);
  console.log(`   Files with translation: ${filesWithTranslation.length}`);
  console.log(`   Files with hardcoded strings: ${filesWithHardcoded.length}`);
  console.log(`   Translation coverage: ${Math.round((filesWithTranslation.length / results.length) * 100)}%`);
  
  if (filesWithHardcoded.length > 0) {
    console.log(`\n⚠️  Found hardcoded strings in ${filesWithHardcoded.length} files`);
    console.log(`   Check ${OUTPUT_FILE} for details`);
  } else {
    console.log(`\n🎉 No hardcoded strings found!`);
  }
}

if (require.main === module) {
  main();
}

module.exports = { analyzeFile, generateReport, main }; 