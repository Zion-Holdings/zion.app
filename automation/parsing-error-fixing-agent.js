#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

class ParsingErrorFixingAgent {
  constructor() {
    this.projectRoot = process.cwd();
    this.fixedFiles = new Set();
  }

  async fixParsingErrors() {
    console.log('🔧 Starting parsing error fixing agent...');
    
    try {
      // Fix specific parsing errors found in the project
      await this.fixMissingSemicolons();
      await this.fixUnterminatedStrings();
      await this.fixMissingParentheses();
      await this.fixJSXStructureErrors();
      await this.fixIndentationErrors();
      await this.fixUnusedVariables();
      
      console.log('✅ Parsing error fixing completed');
    } catch (error) {
      console.error('❌ Error in parsing fixing agent:', error);
    }
  }

  async fixMissingSemicolons() {
    const files = this.findTypeScriptFiles();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Fix missing semicolons after import statements
        content = content.replace(/import\s+([^;]+?)\s+from\s+['"]([^'"]+)['"]/g, (match, imports, source) => {
          if (!match.endsWith(';')) {
            modified = true;
            return `import ${imports} from '${source}';`;
          }
          return match;
        });
        
        // Fix missing semicolons after export statements
        content = content.replace(/export\s+([^;]+?)(?=\n|$)/g, (match) => {
          if (!match.endsWith(';')) {
            modified = true;
            return match + ';';
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

  async fixUnterminatedStrings() {
    const files = this.findTypeScriptFiles();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Fix unterminated string literals
        content = content.replace(/(['"])([^'"]*?)(?=\n|$)/g, (match, quote, text) => {
          if (!text.includes(quote)) {
            modified = true;
            return match + quote;
          }
          return match;
        });
        
        if (modified) {
          fs.writeFileSync(file, content);
          this.fixedFiles.add(file);
          console.log(`✅ Fixed unterminated strings in ${file}`);
        }
      } catch (error) {
        console.error(`❌ Error fixing unterminated strings in ${file}:`, error);
      }
    }
  }

  async fixMissingParentheses() {
    const files = this.findTypeScriptFiles();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Fix missing closing parentheses
        content = content.replace(/(\([^)]*?)(?=\n|$)/g, (match, openParen) => {
          if (!openParen.includes(')')) {
            modified = true;
            return match + ')';
          }
          return match;
        });
        
        if (modified) {
          fs.writeFileSync(file, content);
          this.fixedFiles.add(file);
          console.log(`✅ Fixed missing parentheses in ${file}`);
        }
      } catch (error) {
        console.error(`❌ Error fixing parentheses in ${file}:`, error);
      }
    }
  }

  async fixJSXStructureErrors() {
    const files = this.findTypeScriptFiles();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Fix unclosed JSX tags
        content = content.replace(/<([a-zA-Z][a-zA-Z0-9]*)([^>]*?)(?=\n|$)/g, (match, tagName, attributes) => {
          if (!attributes.includes('/>') && !attributes.includes('>')) {
            modified = true;
            return `<${tagName}${attributes}>`;
          }
          return match;
        });
        
        // Fix missing closing tags
        content = content.replace(/<([a-zA-Z][a-zA-Z0-9]*)([^>]*?)>(?!.*<\/\1>)/gs, (match, tagName, attributes) => {
          if (!attributes.includes('/>')) {
            modified = true;
            return match + `</${tagName}>`;
          }
          return match;
        });
        
        if (modified) {
          fs.writeFileSync(file, content);
          this.fixedFiles.add(file);
          console.log(`✅ Fixed JSX structure in ${file}`);
        }
      } catch (error) {
        console.error(`❌ Error fixing JSX structure in ${file}:`, error);
      }
    }
  }

  async fixIndentationErrors() {
    const files = this.findTypeScriptFiles();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        const lines = content.split('\n');
        const fixedLines = lines.map(line => {
          if (line.match(/^\s+[a-zA-Z]/)) {
            const indent = line.match(/^(\s+)/)[1];
            if (indent.length % 2 !== 0) {
              modified = true;
              return line.replace(/^(\s+)/, '  ');
            }
          }
          return line;
        });
        
        if (modified) {
          content = fixedLines.join('\n');
          fs.writeFileSync(file, content);
          this.fixedFiles.add(file);
          console.log(`✅ Fixed indentation in ${file}`);
        }
      } catch (error) {
        console.error(`❌ Error fixing indentation in ${file}:`, error);
      }
    }
  }

  async fixUnusedVariables() {
    const files = this.findTypeScriptFiles();
    
    for (const file of files) {
      try {
        let content = fs.readFileSync(file, 'utf8');
        let modified = false;
        
        // Remove unused imports
        const lines = content.split('\n');
        const filteredLines = lines.filter(line => {
          if (line.includes('import') && line.includes('from')) {
            const importMatch = line.match(/import\s+\{([^}]+)\}\s+from/);
            if (importMatch) {
              const imports = importMatch[1].split(',').map(i => i.trim());
              // Check if any of these imports are actually used
              const isUsed = imports.some(imp => {
                const importName = imp.split(' as ')[0].trim();
                return content.includes(importName) && !line.includes(importName);
              });
              return isUsed;
            }
          }
          return true;
        });
        
        if (filteredLines.length !== lines.length) {
          modified = true;
          content = filteredLines.join('\n');
        }
        
        if (modified) {
          fs.writeFileSync(file, content);
          this.fixedFiles.add(file);
          console.log(`✅ Fixed unused variables in ${file}`);
        }
      } catch (error) {
        console.error(`❌ Error fixing unused variables in ${file}:`, error);
      }
    }
  }

  findTypeScriptFiles() {
    const files = [];
    const extensions = ['.ts', '.tsx', '.js', '.jsx'];
    
    const walkDir = (dir) => {
      const items = fs.readdirSync(dir);
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
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
const agent = new ParsingErrorFixingAgent();
agent.fixParsingErrors().catch(console.error);
