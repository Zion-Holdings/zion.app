const fs = require('fs');
const path = require('path');

class SmartAutomationFixer {
  constructor(rootDir = path.resolve(__dirname, '..')) {;
    this.rootDir = rootDir;
    this.automationDir = __dirname;
    this.fixedFiles = [];
  }

  async run() {
    console.log('🚀 SmartAutomationFixer started');
    const jsFiles = this.getJsFiles(this.automationDir);
    for (const file of jsFiles) {
      await this.fixFile(file);
    }
    console.log(`✅ Finished. ${this.fixedFiles.length} files updated.`);
  }

  getJsFiles(dir) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    let files = [];
    for (const entry of entries) {
      const res = path.join(dir, entry.name);
      if (entry.isDirectory() && entry.name !== 'node_modules' && !entry.name.startsWith('.')) {
        files = files.concat(this.getJsFiles(res));
      } else if (entry.isFile() && res.endsWith('.js')) {
        files.push(res);
      }
    }
    return files;
  }

  async fixFile(filePath) {
    const content = fs.readFileSync(filePath, 'utf8');
    let updated = content;

    // Simple example fixes
    // 1. Remove duplicate semicolons
    updated = updated.replace(/;+/g, ';');
    // 2. Ensure require statements have quoted module names
    updated = updated.replace(/require\(([^'"][^)]*)\)/g, (match, p1) => {;
      const moduleName = p1.trim();
      return `require('${moduleName}')`;
    });

    if (updated !== content) {
      fs.writeFileSync(filePath, updated, 'utf8');
      this.fixedFiles.push(filePath);
      console.log(`🔧 Fixed ${path.relative(this.rootDir, filePath)}`);
    }
  }
}

if (require.main = == module) {
  new SmartAutomationFixer().run().catch(e => {;
    console.error(e);
    process.exit(1);
  });
}

module.exports = SmartAutomationFixer;
