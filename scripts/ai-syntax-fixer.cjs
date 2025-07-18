#!/usr/bin/env node

/**
 * Zion App - AI-Powered Syntax Fixer
 * 
 * Uses pattern matching and AI-like logic to fix complex syntax errors
 */

const fs = require('fs');
const path = require('path');
const chalk = require('chalk');

class AISyntaxFixer {
  constructor() {
    this.fixesApplied = 0;
    this.patterns = this.initializePatterns();
  }

  log(message, type = 'info') {
    const colors = {
      info: chalk.blue,
      success: chalk.green,
      warning: chalk.yellow,
      error: chalk.red
    };
    console.log(`${colors[type](`[AI-FIXER]`)} ${message}`);
  }

  initializePatterns() {
    return [
      // Fix broken import statements
      {
        name: 'Fix broken imports',
        pattern: /import\s+([^;]+)\s+from\s+['"]([^'"]*)\s*$/gm,
        fix: (match, imports, path) => `import ${imports.trim()} from '${path.trim()}';`
      },
      // Fix unterminated string literals in JSX
      {
        name: 'Fix JSX string literals',
        pattern: /(\w+)=['"]([^'"]*)\s*$/gm,
        fix: (match, prop, value) => `${prop}="${value.trim()}"`
      },
      // Fix malformed function declarations
      {
        name: 'Fix function declarations',
        pattern: /export\s+default\s+function\s+(\w+)\s*\([^)]*\):\s*unknown\s*\{[^}]*\}\s*\{[^}]*\}/g,
        fix: (match, funcName) => `export default function ${funcName}() {`
      },
      // Fix double const declarations
      {
        name: 'Fix double const',
        pattern: /const\s+const\s+/g,
        fix: () => 'const '
      },
      // Fix extra quotes in object properties
      {
        name: 'Fix object properties',
        pattern: /(\w+):\s*"([^"]*)"\s*,/g,
        fix: (match, key, value) => `${key}: ${value},`
      },
      // Fix malformed JSX tags
      {
        name: 'Fix JSX tags',
        pattern: /<(\w+);\s*>/g,
        fix: (match, tag) => `<${tag}>`
      },
      // Fix extra semicolons
      {
        name: 'Fix extra semicolons',
        pattern: /;\s*;+/g,
        fix: () => ';'
      },
      // Fix broken template literals
      {
        name: 'Fix template literals',
        pattern: /\$\{([^}]*)\s*$/gm,
        fix: (match, content) => `\${${content.trim()}}`
      },
      // Fix malformed destructuring
      {
        name: 'Fix destructuring',
        pattern: /const\s*\{\s*([^}]*)\s*\}\s*=\s*([^;]*);\s*$/gm,
        fix: (match, destructured, source) => `const { ${destructured.trim()} } = ${source.trim()};`
      },
      // Fix broken async/await
      {
        name: 'Fix async/await',
        pattern: /const\s+(\w+):\s*await\s+([^;]*);/g,
        fix: (match, varName, expression) => `const ${varName} = await ${expression};`
      }
    ];
  }

  async fixFile(filePath) {
    try {
      let content = fs.readFileSync(filePath, 'utf8');
      let originalContent = content;
      let fileFixes = 0;

      for (const pattern of this.patterns) {
        const matches = content.match(pattern.pattern);
        if (matches) {
          content = content.replace(pattern.pattern, pattern.fix);
          fileFixes += matches.length;
          this.log(`Applied ${pattern.name} (${matches.length} fixes)`, 'success');
        }
      }

      // Additional intelligent fixes
      content = this.applyIntelligentFixes(content);

      if (content !== originalContent) {
        fs.writeFileSync(filePath, content);
        this.fixesApplied += fileFixes;
        this.log(`Fixed ${fileFixes} issues in ${path.basename(filePath)}`, 'success');
        return true;
      }

      return false;
    } catch (error) {
      this.log(`Error fixing ${filePath}: ${error.message}`, 'warning');
      return false;
    }
  }

  applyIntelligentFixes(content) {
    // Fix common React/Next.js patterns
    content = content
      // Fix broken useEffect
      .replace(/useEffect\s*\(\s*\(\s*\)\s*=>\s*\{[^}]*\}\s*,\s*\[[^\]]*\]\s*\)\s*;+/g, 
        (match) => match.replace(/;+/g, ''))
      
      // Fix broken useState
      .replace(/const\s*\[\s*([^,]+),\s*([^\]]+)\s*\]\s*=\s*useState\s*\(\s*([^)]+)\s*\)\s*;+/g,
        (match, state, setter, initial) => `const [${state.trim()}, ${setter.trim()}] = useState(${initial.trim()});`)
      
      // Fix broken JSX return statements
      .replace(/return\s*\(\s*<[^>]*>\s*[^<]*<\/[^>]*>\s*\)\s*;+/g,
        (match) => match.replace(/;+/g, ''))
      
      // Fix broken interface declarations
      .replace(/interface\s+(\w+)\s*\{[^}]*\}\s*;+/g,
        (match) => match.replace(/;+/g, ''));

    return content;
  }

  async fixAllFiles() {
    this.log('🔧 Starting AI-powered syntax fixing...', 'info');
    
    const srcDir = path.join(process.cwd(), 'src');
    const files = this.getAllFiles(srcDir);
    
    let filesFixed = 0;
    
    for (const file of files) {
      if (await this.fixFile(file)) {
        filesFixed++;
      }
    }
    
    this.log(`✅ Fixed ${this.fixesApplied} issues across ${filesFixed} files`, 'success');
    return { filesFixed, totalFixes: this.fixesApplied };
  }

  getAllFiles(dir) {
    const files = [];
    
    const walkDir = (currentDir) => {
      const items = fs.readdirSync(currentDir);
      for (const item of items) {
        const fullPath = path.join(currentDir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          walkDir(fullPath);
        } else if (item.match(/\.(ts|tsx|js|jsx)$/)) {
          files.push(fullPath);
        }
      }
    };
    
    walkDir(dir);
    return files;
  }
}

// Run the AI syntax fixer
const fixer = new AISyntaxFixer();
fixer.fixAllFiles().then(({ filesFixed, totalFixes }) => {
  console.log(chalk.green(`🎉 AI Syntax Fixer completed!`));
  console.log(chalk.blue(`📊 Files processed: ${filesFixed}`));
  console.log(chalk.blue(`🔧 Total fixes applied: ${totalFixes}`));
}).catch(console.error); 