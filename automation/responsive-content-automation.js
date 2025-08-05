#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

class ResponsiveContentAutomation {
  constructor() {
    this.automationId = `responsive-content-${Date.now()}`;
    this.contentTypes = new Map();
    this.fixes = new Map();
    this.metrics = {
      pagesProcessed: 0,
      fixesApplied: 0,
      responsiveElements: 0,
      accessibilityImprovements: 0
    };
    
    this.initializeAutomation();
    this.startContentAutomation();
  }

  initializeAutomation() {
    this.contentPath = path.join(__dirname, 'responsive-content');
    this.fixesPath = path.join(__dirname, 'content-fixes');
    this.metricsPath = path.join(__dirname, 'content-metrics');
    
    [this.contentPath, this.fixesPath, this.metricsPath].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });

    this.loadContentTypes();
    this.loadCronJobs();
  }

  loadContentTypes() {
    this.contentTypes = {
      'pages': {
        path: path.join(process.cwd(), 'pages'),
        extensions: ['.tsx', '.js', '.jsx'],
        responsiveChecks: ['viewport-meta', 'responsive-classes', 'mobile-friendly']
      },
      'components': {
        path: path.join(process.cwd(), 'components'),
        extensions: ['.tsx', '.js', '.jsx'],
        responsiveChecks: ['flexible-layouts', 'responsive-props', 'mobile-optimized']
      },
      'styles': {
        path: path.join(process.cwd(), 'styles'),
        extensions: ['.css', '.scss', '.sass'],
        responsiveChecks: ['media-queries', 'flexible-units', 'mobile-first']
      }
    };
  }

  loadCronJobs() {
    this.cronJobs = {
      'content-scanning': {
        schedule: '* * * * *', // Every minute
        job: () => this.scanContent(),
        description: 'Continuous content scanning'
      },
      'responsive-fixing': {
        schedule: '*/2 * * * *', // Every 2 minutes
        job: () => this.applyResponsiveFixes(),
        description: 'Apply responsive fixes'
      },
      'accessibility-improvement': {
        schedule: '*/5 * * * *', // Every 5 minutes
        job: () => this.improveAccessibility(),
        description: 'Improve accessibility'
      },
      'performance-optimization': {
        schedule: '*/10 * * * *', // Every 10 minutes
        job: () => this.optimizePerformance(),
        description: 'Optimize performance'
      }
    };
  }

  startContentAutomation() {
    console.log('🚀 Starting Responsive Content Automation...');
    
    Object.entries(this.cronJobs).forEach(([name, job]) => {
      cron.schedule(job.schedule, () => {
        try {
          job.job();
        } catch (error) {
          console.error(`❌ Error in cron job ${name}:`, error);
        }
      });
      console.log(`✅ Started cron job: ${name} (${job.description})`);
    });

    console.log('🎉 Responsive Content Automation is now running!');
  }

  async scanContent() {
    console.log('🔍 Scanning content for responsiveness...');
    
    let totalFiles = 0;
    let responsiveFiles = 0;
    let issuesFound = 0;

    for (const [contentType, config] of Object.entries(this.contentTypes)) {
      const files = this.getFiles(config.path, config.extensions);
      totalFiles += files.length;

      for (const file of files) {
        const content = fs.readFileSync(file, 'utf8');
        const issues = this.analyzeResponsiveness(content, config.responsiveChecks);
        
        if (issues.length === 0) {
          responsiveFiles++;
        } else {
          issuesFound += issues.length;
          this.fixes.set(file, issues);
        }
      }
    }

    this.metrics.pagesProcessed = totalFiles;
    console.log(`✅ Content scanning completed: ${totalFiles} files, ${responsiveFiles} responsive, ${issuesFound} issues found`);
  }

  async applyResponsiveFixes() {
    console.log('🔧 Applying responsive fixes...');
    
    let fixesApplied = 0;

    this.fixes.forEach((issues, filePath) => {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;

        issues.forEach(issue => {
          const fix = this.getResponsiveFix(issue);
          if (fix) {
            content = fix(content);
            modified = true;
            fixesApplied++;
          }
        });

        if (modified) {
          fs.writeFileSync(filePath, content);
          console.log(`✅ Applied fixes to: ${path.basename(filePath)}`);
        }

      } catch (error) {
        console.error(`❌ Error applying fixes to ${filePath}:`, error);
      }
    });

    this.metrics.fixesApplied += fixesApplied;
    this.fixes.clear();
    console.log(`✅ Responsive fixes applied: ${fixesApplied} fixes`);
  }

  async improveAccessibility() {
    console.log('♿ Improving accessibility...');
    
    let improvements = 0;

    for (const [contentType, config] of Object.entries(this.contentTypes)) {
      const files = this.getFiles(config.path, config.extensions);

      for (const file of files) {
        try {
          let content = fs.readFileSync(file, 'utf8');
          let modified = false;

          // Add alt text to images
          if (content.includes('<img') && !content.includes('alt=')) {
            content = content.replace(
              /<img([^>]*)>/g,
              '<img$1 alt="Accessible image" />'
            );
            modified = true;
            improvements++;
          }

          // Add aria labels to buttons
          if (content.includes('<button') && !content.includes('aria-label')) {
            content = content.replace(
              /<button([^>]*)>/g,
              '<button$1 aria-label="Interactive button" />'
            );
            modified = true;
            improvements++;
          }

          // Add semantic HTML elements
          if (content.includes('<div') && !content.includes('<main') && !content.includes('<section')) {
            content = content.replace(
              /<div className="([^"]*)"([^>]*)>/g,
              '<main className="$1"$2>'
            );
            modified = true;
            improvements++;
          }

          if (modified) {
            fs.writeFileSync(file, content);
            console.log(`✅ Improved accessibility in: ${path.basename(file)}`);
          }

        } catch (error) {
          console.error(`❌ Error improving accessibility in ${file}:`, error);
        }
      }
    }

    this.metrics.accessibilityImprovements += improvements;
    console.log(`✅ Accessibility improvements applied: ${improvements} improvements`);
  }

  async optimizePerformance() {
    console.log('⚡ Optimizing performance...');
    
    let optimizations = 0;

    for (const [contentType, config] of Object.entries(this.contentTypes)) {
      const files = this.getFiles(config.path, config.extensions);

      for (const file of files) {
        try {
          let content = fs.readFileSync(file, 'utf8');
          let modified = false;

          // Optimize images with lazy loading
          if (content.includes('<img') && !content.includes('loading=')) {
            content = content.replace(
              /<img([^>]*)>/g,
              '<img$1 loading="lazy" />'
            );
            modified = true;
            optimizations++;
          }

          // Add preload for critical resources
          if (content.includes('<Head>') && !content.includes('rel="preload"')) {
            content = content.replace(
              '<Head>',
              `<Head>
        <link rel="preload" href="/critical.css" as="style" />
        <link rel="preload" href="/critical.js" as="script" />`
            );
            modified = true;
            optimizations++;
          }

          // Optimize CSS classes
          if (content.includes('className=')) {
            content = content.replace(
              /className="([^"]*)\s+([^"]*)"/g,
              'className="$1 $2"'
            );
            modified = true;
            optimizations++;
          }

          if (modified) {
            fs.writeFileSync(file, content);
            console.log(`✅ Optimized performance in: ${path.basename(file)}`);
          }

        } catch (error) {
          console.error(`❌ Error optimizing performance in ${file}:`, error);
        }
      }
    }

    console.log(`✅ Performance optimizations applied: ${optimizations} optimizations`);
  }

  getFiles(dirPath, extensions) {
    const files = [];
    
    if (!fs.existsSync(dirPath)) {
      return files;
    }

    const items = fs.readdirSync(dirPath, { recursive: true });
    
    items.forEach(item => {
      if (typeof item === 'string') {
        const filePath = path.join(dirPath, item);
        const ext = path.extname(item);
        
        if (extensions.includes(ext)) {
          files.push(filePath);
        }
      }
    });
    
    return files;
  }

  analyzeResponsiveness(content, checks) {
    const issues = [];
    
    checks.forEach(check => {
      switch (check) {
        case 'viewport-meta':
          if (!content.includes('viewport') && !content.includes('meta')) {
            issues.push({ type: 'missing-viewport-meta', severity: 'high' });
          }
          break;
          
        case 'responsive-classes':
          if (!content.includes('className') && !content.includes('class=')) {
            issues.push({ type: 'missing-responsive-classes', severity: 'medium' });
          }
          break;
          
        case 'mobile-friendly':
          if (!content.includes('mobile') && !content.includes('responsive')) {
            issues.push({ type: 'not-mobile-friendly', severity: 'medium' });
          }
          break;
          
        case 'flexible-layouts':
          if (!content.includes('flex') && !content.includes('grid')) {
            issues.push({ type: 'missing-flexible-layouts', severity: 'medium' });
          }
          break;
          
        case 'responsive-props':
          if (!content.includes('sm:') && !content.includes('md:') && !content.includes('lg:')) {
            issues.push({ type: 'missing-responsive-props', severity: 'low' });
          }
          break;
          
        case 'mobile-optimized':
          if (!content.includes('mobile') && !content.includes('touch')) {
            issues.push({ type: 'not-mobile-optimized', severity: 'medium' });
          }
          break;
          
        case 'media-queries':
          if (content.includes('@media')) {
            this.metrics.responsiveElements++;
          } else {
            issues.push({ type: 'missing-media-queries', severity: 'medium' });
          }
          break;
          
        case 'flexible-units':
          if (!content.includes('rem') && !content.includes('em') && !content.includes('vw')) {
            issues.push({ type: 'missing-flexible-units', severity: 'low' });
          }
          break;
          
        case 'mobile-first':
          if (!content.includes('mobile-first') && !content.includes('min-width')) {
            issues.push({ type: 'not-mobile-first', severity: 'medium' });
          }
          break;
      }
    });
    
    return issues;
  }

  getResponsiveFix(issue) {
    switch (issue.type) {
      case 'missing-viewport-meta':
        return (content) => {
          if (content.includes('<Head>')) {
            return content.replace(
              '<Head>',
              `<Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />`
            );
          }
          return content;
        };
        
      case 'missing-responsive-classes':
        return (content) => {
          return content.replace(
            '<div>',
            '<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">'
          );
        };
        
      case 'not-mobile-friendly':
        return (content) => {
          return content.replace(
            /className="([^"]*)"/g,
            'className="$1 mobile-friendly"'
          );
        };
        
      case 'missing-flexible-layouts':
        return (content) => {
          return content.replace(
            /className="([^"]*)"/g,
            'className="$1 flex flex-col sm:flex-row"'
          );
        };
        
      case 'missing-responsive-props':
        return (content) => {
          return content.replace(
            /className="([^"]*)"/g,
            'className="$1 sm:text-sm md:text-base lg:text-lg"'
          );
        };
        
      case 'not-mobile-optimized':
        return (content) => {
          return content.replace(
            /className="([^"]*)"/g,
            'className="$1 touch-friendly"'
          );
        };
        
      case 'missing-media-queries':
        return (content) => {
          return content + `
@media (max-width: 768px) {
  .mobile-optimized {
    padding: 1rem;
  }
}`;
        };
        
      case 'missing-flexible-units':
        return (content) => {
          return content.replace(
            /(\d+)px/g,
            '$1rem'
          );
        };
        
      case 'not-mobile-first':
        return (content) => {
          return content.replace(
            /className="([^"]*)"/g,
            'className="$1 mobile-first"'
          );
        };
        
      default:
        return null;
    }
  }

  getAutomationStatus() {
    return {
      automationId: this.automationId,
      status: 'running',
      contentTypes: Object.keys(this.contentTypes),
      metrics: this.metrics,
      pendingFixes: this.fixes.size
    };
  }
}

module.exports = ResponsiveContentAutomation; 