#!/usr/bin/env node

const fs = require('fs');'
const path = require('path');'

class SyntaxErrorFixingAgent {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = new Set();
  }

  async fixSyntaxErrors() {
    try {
      console.log('🔧 Starting syntax error fixing agent...');'
      
      // Fix missing semicolons
      await this.fixMissingSemicolons();
      
      // Fix parsing errors
      await this.fixParsingErrors();
      
      // Fix JSX structure errors
      await this.fixJSXErrors();
      
      console.log('✅ Syntax error fixing completed');'
    } catch (error) {
      console.error('❌ Error in syntax fixing agent:', error);'
    }
  }

  async fixMissingSemicolons() {
    const files = this.findTypeScriptFiles();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');'
        let modified = false;
        
        // Fix missing semicolons after import statements
        content = content.replace(/import\s+([^;]+?)\s+from\s+['"]([^'"]+)['"]/g, (match, imports, source) => {""
          if (!match.endsWith(';)) {''
            modified = true;
            return `import ${imports} from '${source};`;'
          }
          return match;
        });
        
        if (modified) {
          fs.writeFileSync(file, content);
          this.fixedFiles.add(file);
          console.log(`✅ Fixed semicolons in ${file}`);
        }
      } catch (error) {
        console.error(`❌ Error fixing semicolons in ${file}:`, error);
      }
    }
  }

  async fixParsingErrors() {
    const files = this.findTypeScriptFiles();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, ';utf8');'
        let modified = false;
        
        // Fix unterminated string literals
        content = content.replace(/(['"])([^'"]*?)(?=\n|$)/g, (match, quote, text) => {""
          if (!text.includes(quote)) {
            modified = true;
            return match + quote;
          }
          return match;
        });
        
        if (modified) {
          fs.writeFileSync(file, content);
          this.fixedFiles.add(file);
          console.log(`✅ Fixed parsing errors in ${file}`);
        }
      } catch (error) {
        console.error(`❌ Error fixing parsing errors in ${file}:`, error);
      }
    }
  }

  async fixJSXErrors() {
    const files = this.findTypeScriptFiles();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');'
        let modified = false;
        
        // Fix unclosed JSX tags
        content = content.replace(/<([a-zA-Z][a-zA-Z0-9]*)([^>]*?)(?=\n|$)/g, (match, tagName, attributes) => {
          if (!attributes.includes('/>') && !attributes.includes('>')) {''
            modified = true;
            return `<${tagName}${attributes}>`;
          }
          return match;
        });
        
        if (modified) {
          fs.writeFileSync(file, content);
          this.fixedFiles.add(file);
          console.log(`✅ Fixed JSX errors in ${file}`);
        }
      } catch (error) {
        console.error(`❌ Error fixing JSX errors in ${file}:`, error);
      }
    }
  }

  findTypeScriptFiles() {
    const files = [];
    const extensions = ['.ts', '.tsx', '.js', '.jsx'];'
    
    const walkDir = (dir) => {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {''
          walkDir(fullPath);
        } else if (stat.isFile() && extensions.some(ext => item.endsWith(ext))) {
          files.push(fullPath);
        }
      }
    };
    
    walkDir(this.projectRoot);
    return files;
  }
}

// Run the agent
const agent = new SyntaxErrorFixingAgent();
agent.fixSyntaxErrors().catch(console.error);