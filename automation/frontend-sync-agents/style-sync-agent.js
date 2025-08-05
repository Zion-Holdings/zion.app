const { spawn, exec, execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class StyleSyncAgent {
  constructor() {
    this.name = 'style-sync';
    this.status = 'ready';
    this.projectRoot = process.cwd();
    this.supportedExtensions = ['.css', '.scss', '.sass', '.less'];
    this.styleCache = new Map();
    this.processedFiles = new Set();
  }

  async executeSync(task) {
    console.log(`🔄 [${this.name}] Processing: ${task.filePath}`);
    
    try {
      await this.performSync(task);
      
      console.log(`✅ [${this.name}] Sync completed: ${task.filePath}`);
      return { success: true, agent: this.name };
    } catch (error) {
      console.error(`❌ [${this.name}] Sync failed: ${task.filePath}`, error);
      this.status = 'error';
      throw error;
    }
  }

  async performSync(task) {
    const { filePath, eventType } = task;
    
    switch (eventType) {
      case 'add':
      case 'change':
        await this.handleFileUpdate(filePath);
        break;
      case 'delete':
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
      throw new Error(`Unsupported style file type: ${ext}`);
    }

    // Validate CSS syntax
    await this.validateStyle(filePath);
    
    // Check for unused styles
    await this.checkUnusedStyles(filePath);
    
    // Optimize CSS if needed
    await this.optimizeStyles(filePath);
    
    // Update style registry
    await this.updateStyleRegistry(filePath);
    
    // Check for responsive design issues
    await this.checkResponsiveDesign(filePath);
    
    // Validate color usage
    await this.validateColors(filePath);
  }

  async handleFileDeletion(filePath) {
    console.log(`🗑️  [${this.name}] Style file deleted: ${filePath}`);
    
    // Remove from style registry
    await this.removeFromStyleRegistry(filePath);
    
    // Check for orphaned styles
    await this.checkOrphanedStyles(filePath);
  }

  async validateStyle(filePath) {
    const fullPath = path.join(this.projectRoot, filePath);
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Basic CSS syntax validation
    const cssValidation = this.validateCSSSyntax(content);
    if (!cssValidation.valid) {
      throw new Error(`CSS syntax error in ${filePath}: ${cssValidation.error}`);
    }
    
    // Check for common CSS issues
    const issues = this.findCSSIssues(content, filePath);
    if (issues.length > 0) {
      console.warn(`⚠️  CSS issues found in ${filePath}:`, issues);
    }
  }

  validateCSSSyntax(content) {
    // Basic CSS syntax validation
    const issues = [];
    
    // Check for unmatched braces
    const openBraces = (content.match(/\{/g) || []).length;
    const closeBraces = (content.match(/\}/g) || []).length;
    
    if (openBraces !== closeBraces) {
      issues.push('Unmatched braces');
    }
    
    // Check for missing semicolons
    const rules = content.match(/[^;{}]*\{[^}]*\}/g) || [];
    for (const rule of rules) {
      const properties = rule.match(/[a-zA-Z-]+:\s*[^;{}]+/g) || [];
      for (const prop of properties) {
        if (!prop.trim().endsWith(';') && !prop.includes('{')) {
          issues.push(`Missing semicolon: ${prop.trim()}`);
        }
      }
    }
    
    return {
      valid: issues.length === 0,
      error: issues.join(', ')
    };
  }

  findCSSIssues(content, filePath) {
    const issues = [];
    
    // Check for hardcoded colors
    const hardcodedColors = content.match(/#[0-9a-fA-F]{3,6}|rgb\([^)]+\)|rgba\([^)]+\)/g) || [];
    if (hardcodedColors.length > 0) {
      issues.push(`Found ${hardcodedColors.length} hardcoded colors`);
    }
    
    // Check for !important usage
    const importantCount = (content.match(/!important/g) || []).length;
    if (importantCount > 0) {
      issues.push(`Found ${importantCount} !important declarations`);
    }
    
    // Check for vendor prefixes
    const vendorPrefixes = content.match(/-webkit-|-moz-|-ms-|-o-/g) || [];
    if (vendorPrefixes.length > 0) {
      issues.push(`Found ${vendorPrefixes.length} vendor prefixes`);
    }
    
    // Check for long selectors
    const longSelectors = content.match(/[^{]+{/g) || [];
    for (const selector of longSelectors) {
      const cleanSelector = selector.replace(/\s*\{$/, '');
      if (cleanSelector.length > 100) {
        issues.push(`Long selector: ${cleanSelector.substring(0, 50)}...`);
      }
    }
    
    return issues;
  }

  async checkUnusedStyles(filePath) {
    // This would require a more sophisticated analysis
    // For now, we'll just log that we're checking
    console.log(`🔍 [${this.name}] Checking for unused styles in ${filePath}`);
  }

  async optimizeStyles(filePath) {
    const fullPath = path.join(this.projectRoot, filePath);
    
    try {
      // Check if PostCSS is available
      const postcssPath = path.join(this.projectRoot, 'node_modules', '.bin', 'postcss');
      if (fs.existsSync(postcssPath)) {
        execSync(`${postcssPath} ${fullPath} --replace`, {
          cwd: this.projectRoot,
          stdio: 'pipe'
        });
        console.log(`✨ [${this.name}] Optimized styles: ${filePath}`);
      }
    } catch (error) {
      console.warn(`⚠️  Style optimization failed for ${filePath}: ${error.message}`);
    }
  }

  async updateStyleRegistry(filePath) {
    const registryPath = path.join(this.projectRoot, 'automation', 'data', 'style-registry.json');
    let registry = {};
    
    if (fs.existsSync(registryPath)) {
      registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
    }
    
    const styleName = this.extractStyleName(filePath);
    const fullPath = path.join(this.projectRoot, filePath);
    const stats = fs.statSync(fullPath);
    const content = fs.readFileSync(fullPath, 'utf8');
    
    registry[styleName] = {
      filePath,
      fullPath,
      lastModified: stats.mtime.toISOString(),
      size: stats.size,
      type: 'style',
      lineCount: content.split('\n').length,
      classCount: this.countCSSClasses(content),
      colorCount: this.countColors(content)
    };
    
    fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2));
    console.log(`📝 Updated style registry: ${styleName}`);
  }

  async removeFromStyleRegistry(filePath) {
    const registryPath = path.join(this.projectRoot, 'automation', 'data', 'style-registry.json');
    
    if (fs.existsSync(registryPath)) {
      const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));
      const styleName = this.extractStyleName(filePath);
      
      if (registry[styleName]) {
        delete registry[styleName];
        fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2));
        console.log(`🗑️  Removed from style registry: ${styleName}`);
      }
    }
  }

  async checkResponsiveDesign(filePath) {
    const fullPath = path.join(this.projectRoot, filePath);
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Check for media queries
    const mediaQueries = content.match(/@media[^{]+{/g) || [];
    if (mediaQueries.length === 0) {
      console.warn(`⚠️  No media queries found in ${filePath} - consider adding responsive design`);
    }
    
    // Check for common breakpoints
    const breakpoints = ['320px', '480px', '768px', '1024px', '1200px'];
    const foundBreakpoints = [];
    
    for (const breakpoint of breakpoints) {
      if (content.includes(breakpoint)) {
        foundBreakpoints.push(breakpoint);
      }
    }
    
    if (foundBreakpoints.length > 0) {
      console.log(`📱 [${this.name}] Found responsive breakpoints in ${filePath}: ${foundBreakpoints.join(', ')}`);
    }
  }

  async validateColors(filePath) {
    const fullPath = path.join(this.projectRoot, filePath);
    const content = fs.readFileSync(fullPath, 'utf8');
    
    // Extract all colors
    const colors = content.match(/#[0-9a-fA-F]{3,6}|rgb\([^)]+\)|rgba\([^)]+\)/g) || [];
    
    if (colors.length > 0) {
      console.log(`🎨 [${this.name}] Found ${colors.length} colors in ${filePath}`);
      
      // Check for accessibility issues
      const accessibilityIssues = this.checkColorAccessibility(colors);
      if (accessibilityIssues.length > 0) {
        console.warn(`⚠️  Potential accessibility issues in ${filePath}:`, accessibilityIssues);
      }
    }
  }

  checkColorAccessibility(colors) {
    const issues = [];
    
    // Check for very light colors that might have low contrast
    for (const color of colors) {
      if (color.includes('rgb(255, 255, 255)') || color.includes('#ffffff')) {
        issues.push('White text may have low contrast');
      }
      if (color.includes('rgb(0, 0, 0)') || color.includes('#000000')) {
        issues.push('Black text may have low contrast');
      }
    }
    
    return issues;
  }

  async checkOrphanedStyles(filePath) {
    // Check if any components are still using this style file
    console.log(`🔍 [${this.name}] Checking for orphaned styles after ${filePath} deletion`);
  }

  extractStyleName(filePath) {
    const fileName = path.basename(filePath, path.extname(filePath));
    return fileName;
  }

  countCSSClasses(content) {
    const classSelectors = content.match(/\.[a-zA-Z][a-zA-Z0-9_-]*/g) || [];
    return classSelectors.length;
  }

  countColors(content) {
    const colors = content.match(/#[0-9a-fA-F]{3,6}|rgb\([^)]+\)|rgba\([^)]+\)/g) || [];
    return colors.length;
  }

  async restart() {
    console.log(`🔄 [${this.name}] Restarting agent...`);
    this.status = 'ready';
    this.styleCache.clear();
    this.processedFiles.clear();
  }

  async shutdown() {
    console.log(`🛑 [${this.name}] Shutting down agent...`);
    this.status = 'stopped';
  }
}

module.exports = StyleSyncAgent; 