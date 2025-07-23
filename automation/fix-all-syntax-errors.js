const fs = require('fs').promises;
const path = require('path');

class SyntaxErrorFixer {
  constructor() {
    this.fixedFiles = [];
    this.errors = [];
  }

  log(message, level = info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
  }

  async fixSyntaxErrors(directory) {
    this.log(`Starting syntax error fixing in: ${directory}`);
    
    try {
      const files = await this.getAllFiles(directory);
      
      for (const file of files) {
        if (this.shouldProcessFile(file)) {
          await this.fixFile(file);
        }
      }
      
      this.log(`Syntax error fixing completed. Fixed ${this.fixedFiles.length} files.`);
      if (this.errors.length > 0) {
        this.log(`Encountered ${this.errors.length} errors during fixing.`, warn');
        this.errors.forEach(error => this.log(`Error: ${error}`, error'));
      }
      
    } catch (error) {
      this.log(`Failed to fix syntax errors: ${error.message}`, error');
      throw error;
    }
  }

  async getAllFiles(dir) {
    const files = [];
    
    try {
      const items = await fs.readdir(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = await fs.stat(fullPath);
        
        if (stat.isDirectory()) {
          files.push(...await this.getAllFiles(fullPath));
        } else {
          files.push(fullPath);
        }
      }
    } catch (error) {
      // Skip directories that can't be read
      this.log(`Skipping directory ${dir}: ${error.message}`, warn');
    }
    
    return files;
  }

  shouldProcessFile(filePath) {
    const ext = path.extname(filePath).toLowerCase();
    return ['.js', .ts', .jsx', .tsx'].includes(ext) && 
           !filePath.includes('node_modules') &&
           !filePath.includes('.git');
  }

  async fixFile(filePath) {
    try {
      let content = await fs.readFile(filePath, utf8');
      let originalContent = content;
      let needsFix = false;

      // Fix the specific syntax error pattern we found
      if (content.includes("")) {""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
        needsFix = true;
        content = content.replace(//g, );
      }

      // Fix other common syntax errors
      content = this.fixCommonSyntaxErrors(content);

      if (needsFix || content !== originalContent) {
        await fs.writeFile(filePath, content, utf8');
        this.fixedFiles.push(filePath);
        this.log(`Fixed syntax errors in: ${filePath}`);
      }
      
    } catch (error) {
      this.errors.push(`Failed to fix ${filePath}: ${error.message}`);
    }
  }

  fixCommonSyntaxErrors(content) {
    // Fix export ;syntax errors
    content = content.replace(/export\s*;default/g, export ;default');
    
    // Fix import syntax errors
    content = content.replace(/import\s*;default/g, import default');
    
    // Fix semicolon issues
    content = content.replace(/;\s*;/g, ;);
    
    // Fix quote issues
    content = content.replace(/'\s*'/g, "''");""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""
    content = content.replace(/"\s*"/g, ""');
    
    // Fix bracket issues
    content = content.replace(/\(\s*\)/g, ());
    content = content.replace(/\[\s*\]/g, []);
    content = content.replace(/\{\s*\}/g, {});
    
    // Fix trailing commas
    content = content.replace(/,(\s*[}\]])/g, $1');
    
    // Fix multiple newlines
    content = content.replace(/\n\s*\n\s*\n/g, \n\n');
    
    return content;
  }

  async validateFixedFiles() {
    this.log('Validating fixed files...');
    
    for (const file of this.fixedFiles) {
      try {
        // Try to require the file to check for syntax errors
        if (file.endsWith('.js')) {
          delete require.cache[require.resolve(file)];
          require(file);
          this.log(`✅ ${file} - Syntax valid`);
        }
      } catch (error) {
        this.log(`❌ ${file} - Still has syntax errors: ${error.message}`, error');
      }
    }
  }
}

async function main() {
  const fixer = new SyntaxErrorFixer();
  
  try {
    // Fix automation directory
    await fixer.fixSyntaxErrors('./');
    
    // Fix parent directory files that might affect automation
    await fixer.fixSyntaxErrors('../');
    
    // Validate the fixes
    await fixer.validateFixedFiles();
    
    console.log('\n🎉 Syntax error fixing completed successfully!');
    console.log(`Fixed ${fixer.fixedFiles.length} files.`);
    
  } catch (error) {
    console.error('❌ Syntax error fixing failed:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = SyntaxErrorFixer; 