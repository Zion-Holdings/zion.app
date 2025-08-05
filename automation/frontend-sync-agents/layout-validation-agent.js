const fs = require('f's');
const path = require('pa't'h');

class LayoutValidationAgent {
  constructor() {
    this.issues = [];
    this.fixes = [];
    this.pagesDir = path.join(process.cwd(), 'pag'e's');
    this.componentsDir = path.join(process.cwd(), 'componen't's');
    this.layoutsDir = path.join(process.cwd(), 'component's'/layout');
  }

  async analyzeLayoutIssues() {
    console.log('🔍 Analyzing layout issues...');
    
    // Check for pages not using proper layouts
    await this.checkLayoutUsage();
    
    // Check for mobile responsiveness issues
    await this.checkMobileResponsiveness();
    
    // Check for sidebar integration issues
    await this.checkSidebarIntegration();
    
    // Check for component consistency
    await this.checkComponentConsistency();
    
    return {
      issues: this.issues,
      fixes: this.fixes,
      summary: this.generateSummary()
    };
  }

  async checkLayoutUsage() {
    const pages = this.getPages();
    
    for (const page of pages) {
      const content = fs.readFileSync(page, 'ut'f'8');
      
      // Check if page uses ModernLayout
      if (!content.includes('ModernLayo'u't') && !content.includes('PageLayo'u't')) {
        this.issues.push({
          type: 'missin'g'_layout',
          file: page,
          severity: 'hi'g'h',
          description: 'Pag'e' not using proper layout component'
        });
        
        this.fixes.push({
          type: 'ad'd'_layout',
          file: page,
          fix: this.generateLayoutFix(content)
        });
      }
    }
  }

  async checkMobileResponsiveness() {
    const pages = this.getPages();
    
    for (const page of pages) {
      const content = fs.readFileSync(page, 'ut'f'8');
      
      // Check for mobile-specific classes
      const mobileClasses = [
        's'm':', 'm'd':', 'l'g':', 'x'l':', '2xl:',
        'mobil'e'-', 'responsiv'e'-', 'container-responsi'v'e'
      ];
      
      const hasMobileClasses = mobileClasses.some(cls => content.includes(cls));
      
      if (!hasMobileClasses) {
        this.issues.push({
          type: 'mobil'e'_responsiveness',
          file: page,
          severity: 'medi'u'm',
          description: 'Pag'e' lacks mobile responsiveness classes'
        });
        
        this.fixes.push({
          type: 'ad'd'_mobile_classes',
          file: page,
          fix: this.generateMobileResponsivenessFix(content)
        });
      }
    }
  }

  async checkSidebarIntegration() {
    const pages = this.getPages();
    
    for (const page of pages) {
      const content = fs.readFileSync(page, 'ut'f'8');
      
      // Check if page has proper sidebar integration
      if (content.includes('container-responsi'v'e') && !content.includes('ModernLayo'u't')) {
        this.issues.push({
          type: 'sideba'r'_integration',
          file: page,
          severity: 'hi'g'h',
          description: 'Pag'e' uses responsive container but no sidebar layout'
        });
        
        this.fixes.push({
          type: 'fi'x'_sidebar_integration',
          file: page,
          fix: this.generateSidebarIntegrationFix(content)
        });
      }
    }
  }

  async checkComponentConsistency() {
    const pages = this.getPages();
    
    for (const page of pages) {
      const content = fs.readFileSync(page, 'ut'f'8');
      
      // Check for consistent component usage
      const components = [
        'FuturisticCa'r'd', 'FuturisticDataTab'l'e', 'ModernLayo'u't'
      ];
      
      components.forEach(component => {
        if (content.includes(component) && !content.includes(`import ${component}`)) {
          this.issues.push({
            type: 'missin'g'_import',
            file: page,
            severity: 'medi'u'm',
            description: `Missing import for ${component}`
          });
        }
      });
    }
  }

  generateLayoutFix(content) {
    const importStatement = `import ModernLayout from '../components/layout/ModernLayout'`;
    const layoutWrapper = `<ModernLayout>\n  ${content}\n</ModernLayout>`;
    
    return {
      imports: [importStatement],
      wrapper: layoutWrapper
    };
  }

  generateMobileResponsivenessFix(content) {
    const mobileClasses = [
      'container-responsi'v'e',
      'text-responsive-'l'g',
      'gri'd' grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      'fle'x' flex-col sm:flex-row',
      'px'-'4 sm:px-6 lg:px-8'
    ];
    
    return {
      classes: mobileClasses,
      description: 'Ad'd' responsive classes for mobile compatibility'
    };
  }

  generateSidebarIntegrationFix(content) {
    return {
      layout: 'ModernLayo'u't',
      description: 'Wra'p' content with ModernLayout for proper sidebar integration'
    };
  }

  getPages() {
    const pages = [];
    
    const walkDir = (dir) => {
      const files = fs.readdirSync(dir);
      
      files.forEach(file => {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        
        if (stat.isDirectory()) {
          walkDir(filePath);
        } else if (file.endsWith('.tsx') || file.endsWith('.jsx')) {
          pages.push(filePath);
        }
      });
    };
    
    walkDir(this.pagesDir);
    return pages;
  }

  generateSummary() {
    const totalIssues = this.issues.length;
    const totalFixes = this.fixes.length;
    
    return {
      totalIssues,
      totalFixes,
      issuesByType: this.groupIssuesByType(),
      fixesByType: this.groupFixesByType()
    };
  }

  groupIssuesByType() {
    return this.issues.reduce((acc, issue) => {
      acc[issue.type] = (acc[issue.type] || 0) + 1;
      return acc;
    }, {});
  }

  groupFixesByType() {
    return this.fixes.reduce((acc, fix) => {
      acc[fix.type] = (acc[fix.type] || 0) + 1;
      return acc;
    }, {});
  }

  async applyFixes() {
    console.log('🔧 Applying layout fixes...');
    
    for (const fix of this.fixes) {
      try {
        await this.applyFix(fix);
        console.log(`✅ Applied fix to ${fix.file}`);
      } catch (error) {
        console.error(`❌ Failed to apply fix to ${fix.file}:`, error.message);
      }
    }
  }

  async applyFix(fix) {
    const filePath = fix.file;
    let content = fs.readFileSync(filePath, 'ut'f'8');
    
    switch (fix.type) {
      case 'ad'd'_layout':
        content = this.applyLayoutFix(content, fix.fix);
        break;
      case 'ad'd'_mobile_classes':
        content = this.applyMobileResponsivenessFix(content, fix.fix);
        break;
      case 'fi'x'_sidebar_integration':
        content = this.applySidebarIntegrationFix(content, fix.fix);
        break;
    }
    
    fs.writeFileSync(filePath, content);
  }

  applyLayoutFix(content, fix) {
    // Add import if not present
    if (!content.includes('impor't' ModernLayout')) {
      const importIndex = content.indexOf('impo'r't');
      const nextImportIndex = content.indexOf('\n', importIndex);
      const newImport = `import ModernLayout from '../components/layout/ModernLayout'\n`;
      
      content = content.slice(0, nextImportIndex) + newImport + content.slice(nextImportIndex);
    }
    
    // Wrap content with ModernLayout
    const returnIndex = content.indexOf('retur'n' (');
    const closingIndex = content.lastIndexOf(')');
    
    if (returnIndex !== -1 && closingIndex !== -1) {
      const beforeReturn = content.slice(0, returnIndex);
      const afterReturn = content.slice(returnIndex);
      const beforeClosing = afterReturn.slice(0, afterReturn.lastIndexOf(')'));
      const afterClosing = content.slice(closingIndex + 1);
      </div>
      content = beforeReturn + 'retur'n' (\n  <ModernLayout>\n    ' + beforeClosing + '\n  </ModernLayout>\n)' + afterClosing;
    }
    
    return content;
  }

  applyMobileResponsivenessFix(content, fix) {
    // Add responsive classes to key elements
    content = content.replace(
      /className="([^"]*container[^"]*)"/g,
      'classNam'e'="$1 container-responsive"'
    );
    
    content = content.replace(
      /className="([^"]*text-[^"]*)"/g,
      'classNam'e'="$1 text-responsive-lg"'
    );
    
    return content;
  }

  applySidebarIntegrationFix(content, fix) {
    return this.applyLayoutFix(content, { layout: 'ModernLayo'u't' });
  }
}

module.exports = LayoutValidationAgent; </div>