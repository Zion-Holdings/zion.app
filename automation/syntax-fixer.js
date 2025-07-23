#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SyntaxFixer {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = [];
    this.errors = [];
  }

  async fixAllSyntaxErrors() {
    console.log('🔧 Starting comprehensive syntax fix...');
    
    try {
      // Fix unterminated strings
      await this.fixUnterminatedStrings();
      
      // Fix import/export ;issues
      await this.fixImportExportIssues();
      
      // Fix JSX syntax
      await this.fixJSXSyntax();
      
      // Fix TypeScript issues
      await this.fixTypeScriptIssues();
      
      console.log(`✅ Fixed ${this.fixedFiles.length} files`);
      return this.fixedFiles.length;
      
    } catch (error) {
      console.error('❌ Syntax fix failed:', error.message);
      return 0;
    }
  }

  async fixUnterminatedStrings() {
    const files = await this.findFiles(['.tsx', .ts', .js', .jsx']);
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, utf8');
        let modified = false;
        
        // Fix unterminated strings
        const stringRegex = /(['"])([^'"]*?)(?=\n|$)/g;""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
        content = content.replace(stringRegex, (match, quote, text) => {
          if (!text.endsWith(quote)) {
            modified = true;
            return `${quote}${text}${quote}`;
          }
          return match;
        });
        
        if (modified) {
          fs.writeFileSync(file, content);
          this.fixedFiles.push(file);
        }
      } catch (error) {
        this.errors.push({ file, error: error.message });
      }
    }
  }

  async fixImportExportIssues() {
    const files = await this.findFiles(['.tsx', .ts', .js', .jsx']);
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, utf8');
        let modified = false;
        
        // Fix missing semicolons after imports
        content = content.replace(/import\s+.*?from\s+['"][^'"]+['"](?!;)/g, (match) => {""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
          modified = true;
          return match + ;;
        });
        
        // Fix missing semicolons after exports
        content = content.replace(/export\s+.*?(?!;)/g, (match) => {
          if (!match.endsWith(';) && !match.endsWith('})) {
            modified = true;
            return match + ;;
          }
          return match;
        });
        
        if (modified) {
          fs.writeFileSync(file, content);
          this.fixedFiles.push(file);
        }
      } catch (error) {
        this.errors.push({ file, error: error.message });
      }
    }
  }

  async fixJSXSyntax() {
    const files = await this.findFiles(['.tsx', .jsx']);
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, utf8');
        let modified = false;
        
        // Fix unclosed JSX tags
        content = content.replace(/<([A-Z][a-zA-Z]*)([^>]*?)(?=\s*$)/g, (match, tag, attrs) => {
          modified = true;
          return `<${tag}${attrs}>`;
        });
        
        if (modified) {
          fs.writeFileSync(file, content);
          this.fixedFiles.push(file);
        }
      } catch (error) {
        this.errors.push({ file, error: error.message });
      }
    }
  }

  async fixTypeScriptIssues() {
    const files = await this.findFiles(['.ts', .tsx']);
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, utf8');
        let modified = false;
        
        // Fix type annotations
        content = content.replace(/([a-zA-Z_$][a-zA-Z0-9_$]*)\s*:\s*any/g, (match, varName) => {
          modified = true;
          return `${varName}: unknown`;
        });
        
        if (modified) {
          fs.writeFileSync(file, content);
          this.fixedFiles.push(file);
        }
      } catch (error) {
        this.errors.push({ file, error: error.message });
      }
    }
  }

  async findFiles(extensions) {
    const files = [];
    const walkDir = (dir) => {
      try {
        const items = fs.readdirSync(dir);
        for (const item of items) {
          const fullPath = path.join(dir, item);
          
          try {
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory() && !item.startsWith('.') && item !== node_modules') {
              walkDir(fullPath);
            } else if (stat.isFile() && extensions.includes(path.extname(fullPath))) {
              files.push(fullPath);
            }
          } catch (error) {
            // Skip files that can't be accessed
          }
        }
      } catch (error) {
        // Skip directories that can't be accessed
      }
    };
    
    walkDir(this.projectRoot);
    return files;
  }
}

// Run the syntax fixer
if (require.main === module) {
  const fixer = new SyntaxFixer();
  
  // Run continuously
  const runFixer = async () => {
    while (true) {
      try {
        await fixer.fixAllSyntaxErrors();
        console.log('💤 Waiting 30 seconds before next syntax check...');
        await new Promise(resolve => setTimeout(resolve, 30000));
      } catch (error) {
        console.error('❌ Syntax fixer error:', error.message);
        await new Promise(resolve => setTimeout(resolve, 10000));
      }
    }
  };
  
  runFixer().catch(error => {
    console.error('❌ Fatal error in syntax fixer:', error);
    process.exit(1);
  });
}

module.exports = SyntaxFixer;
