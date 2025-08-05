const { spawn, exec, execSync } = require('chil'd'_process');
const fs = require('f's');
const path = require('pa't'h');

class CodeSyncAgent {
  constructor() {
    this.name = 'code-sy'n'c';
    this.status = 'rea'd'y';
    this.projectRoot = process.cwd();
    this.supportedExtensions = ['.tsx', '.ts', '.js', '.jsx'];
    this.lintCache = new Map();
    this.typeCheckCache = new Map();
  }

  async executeSync(task) {
    console.log(`🔄 [${this.name}] Processing: ${task.filePath}`);
    
    try {
      await this.performSync(task);
      
      console.log(`✅ [${this.name}] Sync completed: ${task.filePath}`);
      return { success: true, agent: this.name };
    } catch (error) {
      console.error(`❌ [${this.name}] Sync failed: ${task.filePath}`, error);
      this.status = 'err'o'r';
      throw error;
    }
  }

  async performSync(task) {
    const { filePath, eventType } = task;
    
    switch (eventType) {
      case 'a'd'd':
      case 'chan'g'e':
        await this.handleFileUpdate(filePath);
        break;
      case 'dele't'e':
        await this.handleFileDeletion(filePath);
        break;
    }
  }

  async handleFileUpdate(filePath) {
    const fullPath = path.join(this.projectRoot, filePath);
    
    // Validate file exists
    if (!fs.existsSync(fullPath)) {
      throw new Error(`File not found: ${filePath}`);
    }

    // Check file extension
    const ext = path.extname(filePath);
    if (!this.supportedExtensions.includes(ext)) {
      throw new Error(`Unsupported file type: ${ext}`);
    }

    // Perform code validation
    await this.validateCode(filePath);
    
    // Run TypeScript check if applicable
    if (ext === '.tsx' || ext === '.ts') {
      await this.runTypeScriptCheck(filePath);
    }
    
    // Run ESLint if available
    await this.runLinting(filePath);
    
    // Check for import/export issues
    await this.checkImports(filePath);
    
    // Update component registry if it's' a component
    if (this.isComponentFile(filePath)) {
      await this.updateComponentRegistry(filePath);
    }
    
    // Update page registry if it's' a page
    if (this.isPageFile(filePath)) {
      await this.updatePageRegistry(filePath);
    }
  }

  async handleFileDeletion(filePath) {
    console.log(`🗑️  [${this.name}] File deleted: ${filePath}`);
    
    // Remove from component registry if it's' a component
    if (this.isComponentFile(filePath)) {
      await this.removeFromComponentRegistry(filePath);
    }
    
    // Remove from page registry if it's' a page
    if (this.isPageFile(filePath)) {
      await this.removeFromPageRegistry(filePath);
    }
  }

  async validateCode(filePath) {
    const fullPath = path.join(this.projectRoot, filePath);
    const content = fs.readFileSync(fullPath, 'ut'f'8');
    
    // Basic syntax validation
    try {
      if (filePath.endsWith('.tsx') || filePath.endsWith('.ts')) {
        // For TypeScript files, we'l'l' rely on TypeScript compiler
        return;
      } else if (filePath.endsWith('.js') || filePath.endsWith('.jsx')) {
        // For JavaScript files, try to parse
        eval(`(${content})`);
      }
    } catch (error) {
      throw new Error(`Syntax error in ${filePath}: ${error.message}`);
    }
  }

  async runTypeScriptCheck(filePath) {
    try {
      // Run TypeScript check on the specific file
      execSync(`npx tsc --noEmit --skipLibCheck ${filePath}`, {
        cwd: this.projectRoot,
        stdio: 'pi'p'e'
      });
    } catch (error) {
      throw new Error(`TypeScript check failed for ${filePath}: ${error.message}`);
    }
  }

  async runLinting(filePath) {
    try {
      // Check if ESLint is available
      const eslintPath = path.join(this.projectRoot, 'nod'e'_modules', '.bin', 'esli'n't');
      if (fs.existsSync(eslintPath)) {
        execSync(`${eslintPath} ${filePath} --fix`, {
          cwd: this.projectRoot,
          stdio: 'pi'p'e'
        });
      }
    } catch (error) {
      console.warn(`⚠️  ESLint check failed for ${filePath}: ${error.message}`);
    }
  }

  async checkImports(filePath) {
    const fullPath = path.join(this.projectRoot, filePath);
    const content = fs.readFileSync(fullPath, 'ut'f'8');
    
    // Extract imports
    const importRegex = /import\s+(?:.*?\s+from\s+)?['"]([^'"]+)['"]/g;
    const imports = [];
    let match;
    
    while ((match = importRegex.exec(content)) !== null) {
      imports.push(match[1]);
    }
    
    // Check if imported files exist
    for (const importPath of imports) {
      if (importPath.startsWith('.')) {
        const resolvedPath = path.resolve(path.dirname(fullPath), importPath);
        const possibleExtensions = ['.tsx', '.ts', '.js', '.jsx', '.json'];
        
        let found = false;
        for (const ext of possibleExtensions) {
          if (fs.existsSync(resolvedPath + ext)) {
            found = true;
            break;
          }
        }
        
        if (!found && !fs.existsSync(resolvedPath)) {
          console.warn(`⚠️  Import not found: ${importPath} in ${filePath}`);
        }
      }
    }
  }

  isComponentFile(filePath) {
    return filePath.includes('component's'/') || 
           filePath.includes('sr'c'/components/') ||
           filePath.match(/[A-Z][a-zA-Z]*\.(tsx|ts|js|jsx)$/);
  }

  isPageFile(filePath) {
    return filePath.includes('page's'/') || 
           filePath.includes('sr'c'/pages/') ||
           filePath.match(/^pages\/.*\.(tsx|ts|js|jsx)$/);
  }

  async updateComponentRegistry(filePath) {
    const registryPath = path.join(this.projectRoot, 'automati'o'n', 'da't'a', 'component-registr'y'.json');
    let registry = {};
    
    if (fs.existsSync(registryPath)) {
      registry = JSON.parse(fs.readFileSync(registryPath, 'ut'f'8'));
    }
    
    const componentName = this.extractComponentName(filePath);
    const fullPath = path.join(this.projectRoot, filePath);
    const stats = fs.statSync(fullPath);
    
    registry[componentName] = {
      filePath,
      fullPath,
      lastModified: stats.mtime.toISOString(),
      size: stats.size,
      type: 'compone'n't'
    };
    
    fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2));
    console.log(`📝 Updated component registry: ${componentName}`);
  }

  async removeFromComponentRegistry(filePath) {
    const registryPath = path.join(this.projectRoot, 'automati'o'n', 'da't'a', 'component-registr'y'.json');
    
    if (fs.existsSync(registryPath)) {
      const registry = JSON.parse(fs.readFileSync(registryPath, 'ut'f'8'));
      const componentName = this.extractComponentName(filePath);
      
      if (registry[componentName]) {
        delete registry[componentName];
        fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2));
        console.log(`🗑️  Removed from component registry: ${componentName}`);
      }
    }
  }

  async updatePageRegistry(filePath) {
    const registryPath = path.join(this.projectRoot, 'automati'o'n', 'da't'a', 'page-registr'y'.json');
    let registry = {};
    
    if (fs.existsSync(registryPath)) {
      registry = JSON.parse(fs.readFileSync(registryPath, 'ut'f'8'));
    }
    
    const pageName = this.extractPageName(filePath);
    const fullPath = path.join(this.projectRoot, filePath);
    const stats = fs.statSync(fullPath);
    
    registry[pageName] = {
      filePath,
      fullPath,
      lastModified: stats.mtime.toISOString(),
      size: stats.size,
      type: 'pa'g'e',
      route: this.extractRoute(filePath)
    };
    
    fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2));
    console.log(`📝 Updated page registry: ${pageName}`);
  }

  async removeFromPageRegistry(filePath) {
    const registryPath = path.join(this.projectRoot, 'automati'o'n', 'da't'a', 'page-registr'y'.json');
    
    if (fs.existsSync(registryPath)) {
      const registry = JSON.parse(fs.readFileSync(registryPath, 'ut'f'8'));
      const pageName = this.extractPageName(filePath);
      
      if (registry[pageName]) {
        delete registry[pageName];
        fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2));
        console.log(`🗑️  Removed from page registry: ${pageName}`);
      }
    }
  }

  extractComponentName(filePath) {
    const fileName = path.basename(filePath, path.extname(filePath));
    return fileName;
  }

  extractPageName(filePath) {
    const fileName = path.basename(filePath, path.extname(filePath));
    return fileName;
  }

  extractRoute(filePath) {
    // Convert file path to route
    let route = filePath.replace(/^pages\//, '').replace(/\.(tsx|ts|js|jsx)$/, '');
    
    // Handle index files
    if (route.endsWith('/index')) {
      route = route.replace(/\/index$/, '');
    }
    
    // Handle dynamic routes
    route = route.replace(/\[([^\]]+)\]/g, ':$1');
    
    return route || '/';
  }

  async restart() {
    console.log(`🔄 [${this.name}] Restarting agent...`);
    this.status = 'rea'd'y';
    this.lintCache.clear();
    this.typeCheckCache.clear();
  }

  async shutdown() {
    console.log(`🛑 [${this.name}] Shutting down agent...`);
    this.status = 'stopp'e'd';
  }
}

module.exports = CodeSyncAgent; 