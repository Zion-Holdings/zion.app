const fs = require('fs');
const path = require('path');

class MobileOptimizationAgent {
  constructor() {
    this.issues = [];
    this.fixes = [];
    this.pagesDir = path.join(process.cwd(), 'pages');
    this.componentsDir = path.join(process.cwd(), 'components');
    this.stylesDir = path.join(process.cwd(), 'styles');
  }

  async analyzeMobileIssues() {
    console.log('📱 Analyzing mobile optimization issues...');
    
    // Check for mobile viewport issues
    await this.checkViewportIssues();
    
    // Check for touch target issues
    await this.checkTouchTargetIssues();
    
    // Check for mobile navigation issues
    await this.checkMobileNavigation();
    
    // Check for responsive design issues
    await this.checkResponsiveDesign();
    
    // Check for mobile performance issues
    await this.checkMobilePerformance();
    
    return {
      issues: this.issues,
      fixes: this.fixes,
      summary: this.generateSummary()
    };
  }

  async checkViewportIssues() {
    const pages = this.getPages();
    
    for (const page of pages) {
      const content = fs.readFileSync(page, 'utf8');
      
      // Check for proper viewport meta tag
      if (!content.includes('viewport') && !content.includes('width=device-width')) {
        this.issues.push({
          type: 'viewport_missing',
          file: page,
          severity: 'high',
          description: 'Missing viewport meta tag for mobile optimization'
        });
        
        this.fixes.push({
          type: 'add_viewport',
          file: page,
          fix: this.generateViewportFix()
        });
      }
    }
  }

  async checkTouchTargetIssues() {
    const pages = this.getPages();
    
    for (const page of pages) {
      const content = fs.readFileSync(page, 'utf8');
      
      // Check for small touch targets
      const smallTouchTargets = [
        'px-1', 'px-2', 'py-1', 'py-2',
        'w-6', 'w-8', 'h-6', 'h-8'
      ];
      
      const hasSmallTargets = smallTouchTargets.some(target => content.includes(target));
      
      if (hasSmallTargets) {
        this.issues.push({
          type: 'small_touch_targets',
          file: page,
          severity: 'medium',
          description: 'Small touch targets detected - may be difficult on mobile'
        });
        
        this.fixes.push({
          type: 'fix_touch_targets',
          file: page,
          fix: this.generateTouchTargetFix(content)
        });
      }
    }
  }

  async checkMobileNavigation() {
    const pages = this.getPages();
    
    for (const page of pages) {
      const content = fs.readFileSync(page, 'utf8');
      
      // Check for mobile navigation patterns
      const mobileNavPatterns = [
        'lg:hidden', 'md:hidden', 'mobile-toggle',
        'sidebar-container', 'mobile-menu'
      ];
      
      const hasMobileNav = mobileNavPatterns.some(pattern => content.includes(pattern));
      
      if (!hasMobileNav && content.includes('navigation')) {
        this.issues.push({
          type: 'mobile_navigation_missing',
          file: page,
          severity: 'high',
          description: 'Missing mobile navigation implementation'
        });
        
        this.fixes.push({
          type: 'add_mobile_navigation',
          file: page,
          fix: this.generateMobileNavigationFix()
        });
      }
    }
  }

  async checkResponsiveDesign() {
    const pages = this.getPages();
    
    for (const page of pages) {
      const content = fs.readFileSync(page, 'utf8');
      
      // Check for responsive breakpoints
      const responsiveClasses = [
        'sm:', 'md:', 'lg:', 'xl:', '2xl:',
        'grid-cols-1', 'flex-col', 'text-sm'
      ];
      
      const hasResponsiveClasses = responsiveClasses.some(cls => content.includes(cls));
      
      if (!hasResponsiveClasses) {
        this.issues.push({
          type: 'responsive_design_missing',
          file: page,
          severity: 'medium',
          description: 'Missing responsive design classes'
        });
        
        this.fixes.push({
          type: 'add_responsive_design',
          file: page,
          fix: this.generateResponsiveDesignFix(content)
        });
      }
    }
  }

  async checkMobilePerformance() {
    const pages = this.getPages();
    
    for (const page of pages) {
      const content = fs.readFileSync(page, 'utf8');
      
      // Check for performance issues
      const performanceIssues = [
        'animate-pulse', 'animate-spin', 'blur-3xl',
        'backdrop-blur', 'filter'
      ];
      
      const hasPerformanceIssues = performanceIssues.some(issue => content.includes(issue));
      
      if (hasPerformanceIssues) {
        this.issues.push({
          type: 'mobile_performance_issue',
          file: page,
          severity: 'low',
          description: 'Heavy animations detected - may impact mobile performance'
        });
        
        this.fixes.push({
          type: 'optimize_performance',
          file: page,
          fix: this.generatePerformanceFix(content)
        });
      }
    }
  }

  generateViewportFix() {
    return {
      metaTag: '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />',
      description: 'Add viewport meta tag for proper mobile scaling'
    };
  }

  generateTouchTargetFix(content) {
    const touchTargetReplacements = {
      'px-1': 'px-3',
      'px-2': 'px-4',
      'py-1': 'py-3',
      'py-2': 'py-4',
      'w-6': 'w-12',
      'w-8': 'w-12',
      'h-6': 'h-12',
      'h-8': 'h-12'
    };
    
    return {
      replacements: touchTargetReplacements,
      description: 'Increase touch target sizes for better mobile usability'
    };
  }

  generateMobileNavigationFix() {
    return {
      navigation: `
        {/* Mobile Navigation */}
        <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-gray-900 border-t border-gray-700 z-50">
          <div className="flex justify-around items-center py-2">
            <button className="flex flex-col items-center p-2 text-gray-400 hover:text-white">
              <Home className="w-5 h-5" />
              <span className="text-xs">Home</span>
            </button>
            <button className="flex flex-col items-center p-2 text-gray-400 hover:text-white">
              <Search className="w-5 h-5" />
              <span className="text-xs">Search</span>
            </button>
            <button className="flex flex-col items-center p-2 text-gray-400 hover:text-white">
              <User className="w-5 h-5" />
              <span className="text-xs">Profile</span>
            </button>
          </div>
        </div>
      `,
      description: 'Add mobile bottom navigation'
    };
  }

  generateResponsiveDesignFix(content) {
    const responsiveClasses = [
      'container-responsive',
      'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
      'flex flex-col sm:flex-row',
      'text-sm sm:text-base lg:text-lg',
      'px-4 sm:px-6 lg:px-8',
      'py-4 sm:py-6 lg:py-8'
    ];
    
    return {
      classes: responsiveClasses,
      description: 'Add responsive design classes for mobile compatibility'
    };
  }

  generatePerformanceFix(content) {
    return {
      optimizations: [
        'reduce-animations',
        'lazy-load-images',
        'optimize-css',
        'minimize-javascript'
      ],
      description: 'Optimize for mobile performance'
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
    console.log('🔧 Applying mobile optimization fixes...');
    
    for (const fix of this.fixes) {
      try {
        await this.applyFix(fix);
        console.log(`✅ Applied mobile fix to ${fix.file}`);
      } catch (error) {
        console.error(`❌ Failed to apply mobile fix to ${fix.file}:`, error.message);
      }
    }
  }

  async applyFix(fix) {
    const filePath = fix.file;
    let content = fs.readFileSync(filePath, 'utf8');
    
    switch (fix.type) {
      case 'add_viewport':
        content = this.applyViewportFix(content, fix.fix);
        break;
      case 'fix_touch_targets':
        content = this.applyTouchTargetFix(content, fix.fix);
        break;
      case 'add_mobile_navigation':
        content = this.applyMobileNavigationFix(content, fix.fix);
        break;
      case 'add_responsive_design':
        content = this.applyResponsiveDesignFix(content, fix.fix);
        break;
      case 'optimize_performance':
        content = this.applyPerformanceFix(content, fix.fix);
        break;
    }
    
    fs.writeFileSync(filePath, content);
  }

  applyViewportFix(content, fix) {
    if (!content.includes('viewport')) {
      const headIndex = content.indexOf('<Head>');
      if (headIndex !== -1) {
        const headEndIndex = content.indexOf('</Head>');
        const headContent = content.slice(headIndex, headEndIndex);
        const newHeadContent = headContent + '\n        ' + fix.metaTag;
        content = content.replace(headContent, newHeadContent);
      }
    }
    return content;
  }

  applyTouchTargetFix(content, fix) {
    Object.entries(fix.replacements).forEach(([oldClass, newClass]) => {
      content = content.replace(new RegExp(oldClass, 'g'), newClass);
    });
    return content;
  }

  applyMobileNavigationFix(content, fix) {
    const bodyEndIndex = content.lastIndexOf('</div>');
    if (bodyEndIndex !== -1) {
      content = content.slice(0, bodyEndIndex) + fix.navigation + content.slice(bodyEndIndex);
    }
    return content;
  }

  applyResponsiveDesignFix(content, fix) {
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

  applyPerformanceFix(content, fix) {
    // Reduce animations on mobile
    content = content.replace(
      /animate-pulse/g,
      'animate-pulse md:animate-pulse'
    );
    
    content = content.replace(
      /blur-3xl/g,
      'blur-xl md:blur-3xl'
    );
    
    return content;
  }
}

module.exports = MobileOptimizationAgent; 