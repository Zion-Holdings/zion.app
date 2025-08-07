const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SyntaxFixOrchestrator {
  constructor() {
    this.isRunning = false;
    this.fixers = {
      doubleSemicolon: { pattern: /;;/g, fix: ';', name: 'double semicolon' },
      missingSemicolon: { pattern: /([^;])\s*$/, fix: '$1;', name: 'missing semicolon' },
      emptyParentheses: { pattern: /\(\s*\)/g, fix: '()', name: 'empty parentheses' },
      emptyBrackets: { pattern: /\[\s*\]/g, fix: '[]', name: 'empty brackets' },
      emptyBraces: { pattern: /\{\s*\}/g, fix: '{}', name: 'empty braces' },
      quoteIssues: { pattern: /['"]\s*['"]/g, fix: '""', name: 'quote issues' },
      trailingComma: { pattern: /,\s*([}\]])/g, fix: '$1', name: 'trailing comma' },
      extraSpaces: { pattern: /\s+/g, fix: ' ', name: 'extra spaces' }
    };
  }

  start() {
    console.log('🎼 Starting syntax fix orchestrator...');
    this.isRunning = true;
    
    // Initial comprehensive fix
    this.runComprehensiveFix();
    
    // Set up interval for continuous fixing
    this.startIntervalMode();
    
    console.log('✅ Syntax fix orchestrator started');
  }

  runComprehensiveFix() {
    console.log('🔧 Running comprehensive syntax fix...');
    
    try {
      // Get all JavaScript/TypeScript files
      const files = this.getAllCodeFiles();
      console.log(`📁 Found ${files.length} code files to process`);
      
      let totalFixes = 0;
      
      for (const file of files) {
        const fixes = this.fixFile(file);
        totalFixes += fixes;
      }
      
      console.log(`✅ Comprehensive fix completed: ${totalFixes} fixes applied`);
      return totalFixes;
      
    } catch (error) {
      console.error('❌ Error during comprehensive fix:', error.message);
      return 0;
    }
  }

  getAllCodeFiles() {
    const extensions = ['.js', '.jsx', '.ts', '.tsx'];
    const files = [];
    
    const scanDirectory = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            // Skip node_modules and other common directories
            if (!['node_modules', '.git', 'dist', 'build', '.next'].includes(item)) {
              scanDirectory(fullPath);
            }
          } else if (stat.isFile()) {
            const ext = path.extname(item);
            if (extensions.includes(ext)) {
              files.push(fullPath);
            }
          }
        }
      } catch (error) {
        console.error(`Error scanning directory ${dir}:`, error.message);
      }
    };
    
    scanDirectory('.');
    return files;
  }

  fixFile(filePath) {
    try {
      if (!fs.existsSync(filePath)) return 0;
      
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      let totalFixes = 0;
      
      for (let i = 0; i < lines.length; i++) {
        const originalLine = lines[i];
        let fixedLine = originalLine;
        
        // Apply all fixers
        Object.entries(this.fixers).forEach(([key, fixer]) => {
          if (fixer.pattern.test(fixedLine)) {
            fixedLine = fixedLine.replace(fixer.pattern, fixer.fix);
            totalFixes++;
          }
        });
        
        if (fixedLine !== originalLine) {
          lines[i] = fixedLine;
        }
      }
      
      if (totalFixes > 0) {
        fs.writeFileSync(filePath, lines.join('\n'));
        console.log(`✅ Fixed ${totalFixes} issues in ${filePath}`);
      }
      
      return totalFixes;
      
    } catch (error) {
      console.error(`Error fixing file ${filePath}:`, error.message);
      return 0;
    }
  }

  fixSpecificFile(filePath) {
    console.log(`🔧 Fixing specific file: ${filePath}`);
    return this.fixFile(filePath);
  }

  fixSemicolons() {
    console.log('🔧 Fixing semicolon issues...');
    const files = this.getAllCodeFiles();
    let totalFixes = 0;
    
    for (const file of files) {
      const fixes = this.applySemicolonFixes(file);
      totalFixes += fixes;
    }
    
    console.log(`✅ Semicolon fixes completed: ${totalFixes} fixes applied`);
    return totalFixes;
  }

  applySemicolonFixes(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      let totalFixes = 0;
      
      for (let i = 0; i < lines.length; i++) {
        const originalLine = lines[i];
        let fixedLine = originalLine;
        
        // Fix double semicolons
        if (/;;/.test(fixedLine)) {
          fixedLine = fixedLine.replace(/;;/g, ';');
          totalFixes++;
        }
        
        // Fix missing semicolons (basic cases)
        if (!fixedLine.trim().endsWith(';') && 
            !fixedLine.trim().endsWith('{') && 
            !fixedLine.trim().endsWith('}') &&
            !fixedLine.trim().endsWith('(') &&
            !fixedLine.trim().endsWith(')') &&
            fixedLine.trim().length > 0) {
          fixedLine = fixedLine.replace(/([^;])\s*$/, '$1;');
          totalFixes++;
        }
        
        if (fixedLine !== originalLine) {
          lines[i] = fixedLine;
        }
      }
      
      if (totalFixes > 0) {
        fs.writeFileSync(filePath, lines.join('\n'));
      }
      
      return totalFixes;
      
    } catch (error) {
      console.error(`Error applying semicolon fixes to ${filePath}:`, error.message);
      return 0;
    }
  }

  fixBrackets() {
    console.log('🔧 Fixing bracket issues...');
    const files = this.getAllCodeFiles();
    let totalFixes = 0;
    
    for (const file of files) {
      const fixes = this.applyBracketFixes(file);
      totalFixes += fixes;
    }
    
    console.log(`✅ Bracket fixes completed: ${totalFixes} fixes applied`);
    return totalFixes;
  }

  applyBracketFixes(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      let totalFixes = 0;
      
      for (let i = 0; i < lines.length; i++) {
        const originalLine = lines[i];
        let fixedLine = originalLine;
        
        // Fix empty parentheses
        if (/\(\s*\)/.test(fixedLine)) {
          fixedLine = fixedLine.replace(/\(\s*\)/g, '()');
          totalFixes++;
        }
        
        // Fix empty brackets
        if (/\[\s*\]/.test(fixedLine)) {
          fixedLine = fixedLine.replace(/\[\s*\]/g, '[]');
          totalFixes++;
        }
        
        // Fix empty braces
        if (/\{\s*\}/.test(fixedLine)) {
          fixedLine = fixedLine.replace(/\{\s*\}/g, '{}');
          totalFixes++;
        }
        
        if (fixedLine !== originalLine) {
          lines[i] = fixedLine;
        }
      }
      
      if (totalFixes > 0) {
        fs.writeFileSync(filePath, lines.join('\n'));
      }
      
      return totalFixes;
      
    } catch (error) {
      console.error(`Error applying bracket fixes to ${filePath}:`, error.message);
      return 0;
    }
  }

  fixQuotes() {
    console.log('🔧 Fixing quote issues...');
    const files = this.getAllCodeFiles();
    let totalFixes = 0;
    
    for (const file of files) {
      const fixes = this.applyQuoteFixes(file);
      totalFixes += fixes;
    }
    
    console.log(`✅ Quote fixes completed: ${totalFixes} fixes applied`);
    return totalFixes;
  }

  applyQuoteFixes(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      let totalFixes = 0;
      
      for (let i = 0; i < lines.length; i++) {
        const originalLine = lines[i];
        let fixedLine = originalLine;
        
        // Fix empty quotes
        if (/['"]\s*['"]/.test(fixedLine)) {
          fixedLine = fixedLine.replace(/['"]\s*['"]/g, '""');
          totalFixes++;
        }
        
        if (fixedLine !== originalLine) {
          lines[i] = fixedLine;
        }
      }
      
      if (totalFixes > 0) {
        fs.writeFileSync(filePath, lines.join('\n'));
      }
      
      return totalFixes;
      
    } catch (error) {
      console.error(`Error applying quote fixes to ${filePath}:`, error.message);
      return 0;
    }
  }

  fixImports() {
    console.log('🔧 Fixing import issues...');
    const files = this.getAllCodeFiles();
    let totalFixes = 0;
    
    for (const file of files) {
      const fixes = this.applyImportFixes(file);
      totalFixes += fixes;
    }
    
    console.log(`✅ Import fixes completed: ${totalFixes} fixes applied`);
    return totalFixes;
  }

  applyImportFixes(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      let totalFixes = 0;
      
      for (let i = 0; i < lines.length; i++) {
        const originalLine = lines[i];
        let fixedLine = originalLine;
        
        // Fix missing semicolons in import statements
        if (fixedLine.trim().startsWith('import') && !fixedLine.trim().endsWith(';')) {
          fixedLine = fixedLine.replace(/([^;])\s*$/, '$1;');
          totalFixes++;
        }
        
        if (fixedLine !== originalLine) {
          lines[i] = fixedLine;
        }
      }
      
      if (totalFixes > 0) {
        fs.writeFileSync(filePath, lines.join('\n'));
      }
      
      return totalFixes;
      
    } catch (error) {
      console.error(`Error applying import fixes to ${filePath}:`, error.message);
      return 0;
    }
  }

  fixJSX() {
    console.log('🔧 Fixing JSX issues...');
    const files = this.getAllCodeFiles().filter(file => file.includes('.jsx') || file.includes('.tsx'));
    let totalFixes = 0;
    
    for (const file of files) {
      const fixes = this.applyJSXFixes(file);
      totalFixes += fixes;
    }
    
    console.log(`✅ JSX fixes completed: ${totalFixes} fixes applied`);
    return totalFixes;
  }

  applyJSXFixes(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      let totalFixes = 0;
      
      for (let i = 0; i < lines.length; i++) {
        const originalLine = lines[i];
        let fixedLine = originalLine;
        
        // Fix common JSX issues
        if (fixedLine.includes('<>') && !fixedLine.includes('</>')) {
          // Handle self-closing tags
          if (!fixedLine.includes('/>')) {
            fixedLine = fixedLine.replace(/(<[^>]+>)(?!.*<\/)/, '$1</>');
            totalFixes++;
          }
        }
        
        if (fixedLine !== originalLine) {
          lines[i] = fixedLine;
        }
      }
      
      if (totalFixes > 0) {
        fs.writeFileSync(filePath, lines.join('\n'));
      }
      
      return totalFixes;
      
    } catch (error) {
      console.error(`Error applying JSX fixes to ${filePath}:`, error.message);
      return 0;
    }
  }

  startIntervalMode() {
    const interval = 30000; // 30 seconds
    setInterval(() => {
      if (this.isRunning) {
        this.runComprehensiveFix();
      }
    }, interval);
  }

  stop() {
    console.log('🛑 Stopping syntax fix orchestrator...');
    this.isRunning = false;
    console.log('✅ Syntax fix orchestrator stopped');
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      fixers: Object.keys(this.fixers),
      lastFix: new Date().toISOString()
    };
  }
}

// Main execution
if (require.main === module) {
  const orchestrator = new SyntaxFixOrchestrator();
  
  // Handle command line arguments
  const command = process.argv[2];
  const target = process.argv[3];
  
  switch (command) {
    case 'start':
      orchestrator.start();
      break;
    case 'stop':
      orchestrator.stop();
      break;
    case 'comprehensive':
      orchestrator.runComprehensiveFix();
      break;
    case 'semicolons':
      orchestrator.fixSemicolons();
      break;
    case 'brackets':
      orchestrator.fixBrackets();
      break;
    case 'quotes':
      orchestrator.fixQuotes();
      break;
    case 'imports':
      orchestrator.fixImports();
      break;
    case 'jsx':
      orchestrator.fixJSX();
      break;
    case 'file':
      if (target) {
        orchestrator.fixSpecificFile(target);
      } else {
        console.log('Please specify a file path');
      }
      break;
    case 'status':
      console.log('Status:', orchestrator.getStatus());
      break;
    default:
      console.log('Usage: node syntax-fix-orchestrator.js [start|stop|comprehensive|semicolons|brackets|quotes|imports|jsx|file <path>|status]');
  }
}

module.exports = SyntaxFixOrchestrator;
