#!/usr/bin/env node

'use strict';

/*
  Content Gap Analyzer
  - Deep analysis of existing content structure
  - Identifies missing pages, content types, and quality gaps
  - Generates detailed gap reports for Cursor agents
  - Provides actionable insights for content completion

  Usage:
  - node automation/content-gap-analyzer.cjs analyze
  - node automation/content-gap-analyzer.cjs report
  - node automation/content-gap-analyzer.cjs gaps
*/

const fs = require('fs');
const path = require('path');

class ContentGapAnalyzer {
  constructor() {
    this.rootDir = process.cwd();
    this.logsDir = path.join(this.rootDir, 'automation', 'logs');
    this.reportsDir = path.join(this.rootDir, 'pages', 'reports');
    this.pagesDir = path.join(this.rootDir, 'pages');
    this.componentsDir = path.join(this.rootDir, 'components');
    this.ensureDirectories();
  }

  ensureDirectories() {
    [this.logsDir].forEach(dir => {
      fs.mkdirSync(dir, { recursive: true });
    });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    
    // Only log to file, not to console when running gaps command
    const logFile = path.join(this.logsDir, 'content-gap-analyzer.log');
    fs.appendFileSync(logFile, logEntry + '\n');
  }

  analyzeContentStructure() {
    this.log('Analyzing content structure...');
    
    const structure = {
      pages: this.analyzePages(),
      reports: this.analyzeReports(),
      components: this.analyzeComponents(),
      automation: this.analyzeAutomation()
    };
    
    return structure;
  }

  analyzePages() {
    const pages = {
      total: 0,
      categories: {},
      routes: [],
      missing: []
    };
    
    try {
      if (fs.existsSync(this.pagesDir)) {
        const files = fs.readdirSync(this.pagesDir);
        pages.total = files.filter(f => f.endsWith('.tsx')).length;
        
        // Analyze main pages
        const mainPages = ['index.tsx', '_app.tsx', '_document.tsx', '404.tsx'];
        mainPages.forEach(page => {
          if (fs.existsSync(path.join(this.pagesDir, page))) {
            pages.routes.push(`/${page.replace('.tsx', '')}`);
          } else {
            pages.missing.push(page);
          }
        });
        
        // Analyze other page categories
        const categories = ['automation', 'explore', 'front', 'main', 'services'];
        categories.forEach(category => {
          const categoryPath = path.join(this.pagesDir, category);
          if (fs.existsSync(categoryPath) && fs.statSync(categoryPath).isDirectory()) {
            const categoryFiles = fs.readdirSync(categoryPath).filter(f => f.endsWith('.tsx'));
            pages.categories[category] = categoryFiles.length;
            pages.total += categoryFiles.length;
          } else {
            pages.categories[category] = 0;
          }
        });
      }
    } catch (error) {
      this.log(`Error analyzing pages: ${error.message}`, 'ERROR');
    }
    
    return pages;
  }

  analyzeReports() {
    const reports = {
      total: 0,
      categories: {},
      missing: [],
      quality: {}
    };
    
    try {
      if (fs.existsSync(this.reportsDir)) {
        const categories = fs.readdirSync(this.reportsDir);
        
        categories.forEach(category => {
          const categoryPath = path.join(this.reportsDir, category);
          if (fs.statSync(categoryPath).isDirectory()) {
            const files = fs.readdirSync(categoryPath).filter(f => f.endsWith('.tsx'));
            reports.categories[category] = files.length;
            reports.total += files.length;
            
            // Analyze content quality
            reports.quality[category] = this.analyzeCategoryQuality(categoryPath, files);
          }
        });
        
        // Identify missing report categories
        const expectedCategories = [
          'updates', 'insights', 'patterns', 'guides', 'cases', 
          'blueprints', 'playbooks', 'dossiers', 'tutorials', 'whitepapers'
        ];
        
        expectedCategories.forEach(category => {
          if (!reports.categories[category] || reports.categories[category] === 0) {
            reports.missing.push(category);
          }
        });
      }
    } catch (error) {
      this.log(`Error analyzing reports: ${error.message}`, 'ERROR');
    }
    
    return reports;
  }

  analyzeCategoryQuality(categoryPath, files) {
    const quality = {
      totalFiles: files.length,
      averageLength: 0,
      shortContent: 0,
      missingMetadata: 0
    };
    
    try {
      let totalLength = 0;
      let shortCount = 0;
      let missingMetaCount = 0;
      
      files.forEach(file => {
        const filePath = path.join(categoryPath, file);
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check content length
        const textLength = content.replace(/<[^>]*>/g, '').length;
        totalLength += textLength;
        
        if (textLength < 500) {
          shortCount++;
        }
        
        // Check for metadata
        if (!content.includes('<title>') || !content.includes('meta name="description"')) {
          missingMetaCount++;
        }
      });
      
      quality.averageLength = Math.round(totalLength / files.length);
      quality.shortContent = shortCount;
      quality.missingMetadata = missingMetaCount;
      
    } catch (error) {
      this.log(`Error analyzing category quality: ${error.message}`, 'ERROR');
    }
    
    return quality;
  }

  analyzeComponents() {
    const components = {
      total: 0,
      types: {},
      missing: []
    };
    
    try {
      if (fs.existsSync(this.componentsDir)) {
        const files = fs.readdirSync(this.componentsDir).filter(f => f.endsWith('.tsx'));
        components.total = files.length;
        
        // Categorize components
        files.forEach(file => {
          const type = this.categorizeComponent(file);
          components.types[type] = (components.types[type] || 0) + 1;
        });
      }
      
      // Identify missing essential components
      const essentialComponents = [
        'Header.tsx', 'Navigation.tsx', 'Search.tsx', 'Pagination.tsx',
        'Card.tsx', 'Button.tsx', 'Form.tsx', 'Modal.tsx'
      ];
      
      essentialComponents.forEach(component => {
        if (!fs.existsSync(path.join(this.componentsDir, component))) {
          components.missing.push(component);
        }
      });
      
    } catch (error) {
      this.log(`Error analyzing components: ${error.message}`, 'ERROR');
    }
    
    return components;
  }

  categorizeComponent(filename) {
    if (filename.includes('Layout') || filename.includes('Page')) return 'layout';
    if (filename.includes('Form') || filename.includes('Input')) return 'form';
    if (filename.includes('Card') || filename.includes('List')) return 'display';
    if (filename.includes('Button') || filename.includes('Link')) return 'interaction';
    if (filename.includes('Modal') || filename.includes('Dialog')) return 'overlay';
    return 'other';
  }

  analyzeAutomation() {
    const automation = {
      total: 0,
      categories: {},
      health: {}
    };
    
    try {
      const automationDir = path.join(this.rootDir, 'automation');
      if (fs.existsSync(automationDir)) {
        const files = fs.readdirSync(automationDir).filter(f => f.endsWith('.cjs') || f.endsWith('.js'));
        automation.total = files.length;
        
        // Categorize automation scripts
        files.forEach(file => {
          const category = this.categorizeAutomation(file);
          automation.categories[category] = (automation.categories[category] || 0) + 1;
        });
        
        // Check automation health
        automation.health = this.checkAutomationHealth(automationDir, files);
      }
    } catch (error) {
      this.log(`Error analyzing automation: ${error.message}`, 'ERROR');
    }
    
    return automation;
  }

  categorizeAutomation(filename) {
    if (filename.includes('crawler') || filename.includes('scanner')) return 'crawling';
    if (filename.includes('factory') || filename.includes('generator')) return 'content-generation';
    if (filename.includes('orchestrator') || filename.includes('runner')) return 'orchestration';
    if (filename.includes('analyzer') || filename.includes('auditor')) return 'analysis';
    if (filename.includes('sync') || filename.includes('git')) return 'synchronization';
    if (filename.includes('marketing') || filename.includes('advertiser')) return 'marketing';
    return 'other';
  }

  checkAutomationHealth(automationDir, files) {
    const health = {
      total: files.length,
      working: 0,
      broken: 0,
      outdated: 0
    };
    
    try {
      files.forEach(file => {
        const filePath = path.join(automationDir, file);
        const stats = fs.statSync(filePath);
        const content = fs.readFileSync(filePath, 'utf8');
        
        // Check if script is executable
        if (content.includes('#!/usr/bin/env node')) {
          health.working++;
        } else {
          health.broken++;
        }
        
        // Check if script is outdated (older than 30 days)
        const daysSinceModified = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60 * 24);
        if (daysSinceModified > 30) {
          health.outdated++;
        }
      });
    } catch (error) {
      this.log(`Error checking automation health: ${error.message}`, 'ERROR');
    }
    
    return health;
  }

  generateGapReport() {
    this.log('Generating comprehensive gap report...');
    
    const structure = this.analyzeContentStructure();
    const gaps = this.identifyContentGaps(structure);
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalPages: structure.pages.total,
        totalReports: structure.reports.total,
        totalComponents: structure.components.total,
        totalAutomation: structure.automation.total,
        identifiedGaps: gaps.length
      },
      gaps: gaps,
      recommendations: this.generateRecommendations(gaps, structure),
      structure: structure
    };
    
    // Save report
    const reportPath = path.join(this.logsDir, `content-gap-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    this.log(`Gap report saved to: ${reportPath}`);
    
    return report;
  }

  identifyContentGaps(structure) {
    const gaps = [];
    
    // Page gaps
    if (structure.pages.missing.length > 0) {
      gaps.push({
        type: 'missing_pages',
        priority: 'high',
        description: `Missing essential pages: ${structure.pages.missing.join(', ')}`,
        impact: 'User experience and navigation',
        solution: 'Create missing page components with proper routing'
      });
    }
    
    // Report gaps
    if (structure.reports.missing.length > 0) {
      gaps.push({
        type: 'missing_reports',
        priority: 'medium',
        description: `Missing report categories: ${structure.reports.missing.join(', ')}`,
        impact: 'Content depth and SEO',
        solution: 'Generate content for missing report categories'
      });
    }
    
    // Component gaps
    if (structure.components.missing.length > 0) {
      gaps.push({
        type: 'missing_components',
        priority: 'medium',
        description: `Missing essential components: ${structure.components.missing.join(', ')}`,
        impact: 'UI consistency and reusability',
        solution: 'Create missing UI components'
      });
    }
    
    // Quality gaps
    Object.entries(structure.reports.quality).forEach(([category, quality]) => {
      if (quality.shortContent > 0) {
        gaps.push({
          type: 'content_quality',
          priority: 'medium',
          description: `${category}: ${quality.shortContent} pages have insufficient content (<500 chars)`,
          impact: 'SEO and user engagement',
          solution: 'Expand short content with more detailed information'
        });
      }
      
      if (quality.missingMetadata > 0) {
        gaps.push({
          type: 'metadata_quality',
          priority: 'high',
          description: `${category}: ${quality.missingMetadata} pages missing essential metadata`,
          impact: 'SEO and social sharing',
          solution: 'Add missing title and description meta tags'
        });
      }
    });
    
    return gaps;
  }

  generateRecommendations(gaps, structure) {
    const recommendations = [];
    
    gaps.forEach(gap => {
      recommendations.push({
        gap: gap.type,
        priority: gap.priority,
        action: gap.solution,
        estimatedEffort: this.estimateEffort(gap.type),
        dependencies: this.identifyDependencies(gap.type)
      });
    });
    
    // Add strategic recommendations
    if (structure.reports.total < 100) {
      recommendations.push({
        gap: 'content_volume',
        priority: 'medium',
        action: 'Increase content volume to improve SEO and user engagement',
        estimatedEffort: '2-3 weeks',
        dependencies: 'Content generation pipeline, SEO optimization'
      });
    }
    
    if (structure.automation.health.outdated > 5) {
      recommendations.push({
        gap: 'automation_maintenance',
        priority: 'low',
        action: 'Update outdated automation scripts for better reliability',
        estimatedEffort: '1 week',
        dependencies: 'Code review, testing'
      });
    }
    
    return recommendations;
  }

  estimateEffort(gapType) {
    const effortMap = {
      'missing_pages': '1-2 days',
      'missing_reports': '1-3 weeks',
      'missing_components': '3-5 days',
      'missing_automation': '1-2 weeks',
      'content_quality': '2-4 weeks',
      'metadata_quality': '3-5 days'
    };
    
    return effortMap[gapType] || '1-2 weeks';
  }

  identifyDependencies(gapType) {
    const dependencyMap = {
      'missing_pages': ['Routing setup', 'Component creation', 'Content writing'],
      'missing_reports': ['Content research', 'Writing pipeline', 'SEO optimization'],
      'missing_components': ['Design system', 'Component library', 'Testing'],
      'missing_automation': ['Script development', 'Testing', 'Deployment'],
      'content_quality': ['Content audit', 'Writing guidelines', 'Review process'],
      'metadata_quality': ['SEO audit', 'Meta tag templates', 'Validation']
    };
    
    return dependencyMap[gapType] || ['Analysis', 'Implementation', 'Testing'];
  }

  async runAnalysis() {
    this.log('Starting comprehensive content gap analysis...');
    
    try {
      const report = this.generateGapReport();
      
      this.log('Analysis completed successfully');
      this.log(`Identified ${report.gaps.length} content gaps`);
      this.log(`Generated ${report.recommendations.length} recommendations`);
      
      return report;
      
    } catch (error) {
      this.log(`Error during analysis: ${error.message}`, 'ERROR');
      throw error;
    }
  }
}

async function main() {
  const analyzer = new ContentGapAnalyzer();
  const command = process.argv[2] || 'analyze';
  
  try {
    switch (command) {
      case 'analyze':
        await analyzer.runAnalysis();
        break;
      case 'report':
        analyzer.generateGapReport();
        break;
      case 'gaps':
        const structure = analyzer.analyzeContentStructure();
        const gaps = analyzer.identifyContentGaps(structure);
        console.log(JSON.stringify(gaps, null, 2));
        process.exit(0);
        break;
      default:
        console.log('Usage: node automation/content-gap-analyzer.cjs [analyze|report|gaps]');
        process.exit(1);
    }
  } catch (error) {
    console.error('Fatal error:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = { ContentGapAnalyzer };
