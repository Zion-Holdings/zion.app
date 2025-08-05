const fs = require('fs');
const path = require('path');

class LayoutValidationAgent {
  constructor() {
    this.issues = [];
    this.fixes = [];
    this.pagesDir = path.join(process.cwd(), 'pages');
    this.componentsDir = path.join(process.cwd(), 'components');
    this.layoutsDir = path.join(process.cwd(), 'components/layout');
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
      const content = fs.readFileSync(page, 'utf8');
      
      // Check if page uses ModernLayout
      if (!content.includes('ModernLayout') && !content.includes('PageLayout')) {
        this.issues.push({
          type: 'missing_layout',
          file: page,
          severity: 'high',
          description: 'Page not using proper layout component'
        });
        
        this.fixes.push({
          type: 'add_layout',
          file: page,
          fix: this.generateLayoutFix(content)
        });
      }
    }
  }

  async checkMobileResponsiveness() {
    const pages = this.getPages();
    
    for (const page of pages) {
      const content = fs.readFileSync(page, 'utf8');
      
      // Check for mobile-specific classes
      const mobileClasses = [
        'sm:', 'md:', 'lg:', 'xl:', '2xl:',
        'mobile-', 'responsive-', 'container-responsive'
      ];
      
      const hasMobileClasses = mobileClasses.some(cls => content.includes(cls));
      
      if (!hasMobileClasses) {
        this.issues.push({
          type: 'mobile_responsiveness',
          file: page,
          severity: 'medium',
          description: 'Page lacks mobile responsiveness classes'
        });
        
        this.fixes.push({
          type: 'add_mobile_classes',
          file: page,
          fix: this.generateMobileResponsivenessFix(content)
        });
      }
    }
  }

  async checkSidebarIntegration() {
    const pages = this.getPages();
    
    for (const page of pages) {
      const content = fs.readFileSync(page, 'utf8');
      
      // Check if page has proper sidebar integration
      if (content.includes('container-responsive') && !content.includes('ModernLayout')) {
        this.issues.push({
          type: 'sidebar_integration',
          file: page,
          severity: 'high',
          description: 'Page uses responsive container but no sidebar layout'
        });
        
        this.fixes.push({
          type: 'fix_sidebar_integration',
          file: page,
          fix: this.generateSidebarIntegrationFix(content)
        });
      }
    }
  }

  async checkComponentConsistency() {
    const pages = this.getPages();
    
    for (const page of pages) {
      const content = fs.readFileSync(page, 'utf8');
      
      // Check for consistent component usage
      const components = [
        'FuturisticCard', 'FuturisticDataTable', 'ModernLayout'
      ];
      
      components.forEach(component => {
        if (content.includes(component) && !content.includes(`import ${component}`)) {
          this.issues.push({
            type: 'missing_import',
            file: page,
            severity: 'medium',
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
      'container-responsive',
      'text-responsive-lg',
      'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      'flex flex-col sm:flex-row',
      'px-4 sm:px-6 lg:px-8'
    ];
    
    return {
      classes: mobileClasses,
      description: 'Add responsive classes for mobile compatibility'
    };
  }

  generateSidebarIntegrationFix(content) {
    return {
      layout: 'ModernLayout',
      description: 'Wrap content with ModernLayout for proper sidebar integration'
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
    let content = fs.readFileSync(filePath, 'utf8');
    
    switch (fix.type) {
      case 'add_layout':
        content = this.applyLayoutFix(content, fix.fix);
        break;
      case 'add_mobile_classes':
        content = this.applyMobileResponsivenessFix(content, fix.fix);
        break;
      case 'fix_sidebar_integration':
        content = this.applySidebarIntegrationFix(content, fix.fix);
        break;
    }
    
    fs.writeFileSync(filePath, content);
  }

  applyLayoutFix(content, fix) {
    // Add import if not present
    if (!content.includes('import ModernLayout')) {
      const importIndex = content.indexOf('import');
      const nextImportIndex = content.indexOf('\n', importIndex);
      const newImport = `import ModernLayout from '../components/layout/ModernLayout'\n`;
      
      content = content.slice(0, nextImportIndex) + newImport + content.slice(nextImportIndex);
    }
    
    // Wrap content with ModernLayout
    const returnIndex = content.indexOf('return (');
    const closingIndex = content.lastIndexOf(')');
    
    if (returnIndex !== -1 && closingIndex !== -1) {
      const beforeReturn = content.slice(0, returnIndex);
      const afterReturn = content.slice(returnIndex);
      const beforeClosing = afterReturn.slice(0, afterReturn.lastIndexOf(')'));
      const afterClosing = content.slice(closingIndex + 1);
      
      content = beforeReturn + 'return (\n  <ModernLayout>\n    ' + beforeClosing + '\n  </ModernLayout>\n)' + afterClosing;
    }
    
    return content;
  }

  applyMobileResponsivenessFix(content, fix) {
    // Add responsive classes to key elements
    content = content.replace(
      /className="([^"]*container[^"]*)"/g,
      'className="$1 container-responsive"'
    );
    
    content = content.replace(
      /className="([^"]*text-[^"]*)"/g,
      'className="$1 text-responsive-lg"'
    );
    
    return content;
  }

  applySidebarIntegrationFix(content, fix) {
    return this.applyLayoutFix(content, { layout: 'ModernLayout' });
  }
}

module.exports = LayoutValidationAgent; 