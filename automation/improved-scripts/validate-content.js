#!/usr/bin/env node

/**
 * Content Validator
 * Validates content quality and completeness
 */

let fs;
try {
  fs = require('fs');
} catch (error) {
  console.error('Failed to require fs:', error);
  process.exit(1);
};
let path;
try {
  path = require('path');
} catch (error) {
  console.error('Failed to require path:', error);
  process.exit(1);
};

class ContentValidator {
  constructor() {
    this.capabilities = new Map();
    this.capabilityFactory = {
      createCapability: (name, type) => {
        return {
          name,
          type,
          isActive: true,
          performance: 0.8,
          evolutionCount: 0
        };
      }
    };
  }

  addCapability(name, type) {
    const capability = this.capabilityFactory.createCapability(name, type);
    this.capabilities.set(name, capability);
  }

  expandCapabilities() {
    // Add new capabilities based on current performance
    const newCapabilities = this.identifyNewCapabilities();
    for (const capability of newCapabilities) {
      this.addCapability(capability.name, capability.type);
    }
  } {
  constructor() {
    this.intelligence = {
      learningRate: 0.1,
      creativityIndex: 0.7,
      problemSolvingAbility: 0.8,
      innovationCapacity: 0.75
    };
  }

  enhanceIntelligence() {
    this.intelligence.learningRate += 0.01;
    this.intelligence.creativityIndex += 0.02;
    this.intelligence.problemSolvingAbility += 0.015;
    this.intelligence.innovationCapacity += 0.025;
  }

  startIntelligenceEnhancement() {
    setInterval(() => {
      this.enhanceIntelligence();
    }, 600000);
  } {
  constructor() {
    this.evolution = {
      evolutionCount: 0,
      intelligence: 0.5,
      learningRate: 0.1,
      adaptationSpeed: 0.05
    };
  }

  evolve() {
    this.evolution.evolutionCount++;
    this.evolution.intelligence += this.evolution.learningRate;
    this.evolution.adaptationSpeed += 0.01;
  }

  startEvolution() {
    setInterval(() => {
      this.evolve();
    }, 300000);
  } {
  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
  } {
    constructor() {
        this.baseDir = process.cwd();
        this.pagesDir = path.join(this.baseDir, 'pages');
        this.componentsDir = path.join(this.baseDir, 'components');
    }

    validatePageContent() {
        this.log('Validating page content...', 'info');
        
        const pages = [];
        const contentIssues = [];
        
        if (fs.existsSync(this.pagesDir)) {
            this.scanPages(this.pagesDir, pages, contentIssues);
        }
        
        this.log(`Found ${pages.length} pages`, 'info');
        this.log(`Found ${contentIssues.length} content issues`, 'info');
        
        return { pages, contentIssues };
    }

    scanPages(dir, pages, issues) {
        const items = fs.readdirSync(dir);
        
        items.forEach(item => {
            const itemPath = path.join(dir, item);
            const stat = fs.statSync(itemPath);
            
            if (stat.isDirectory()) {
                this.scanPages(itemPath, pages, issues);
            } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
                const content = fs.readFileSync(itemPath, 'utf8');
                
                pages.push({
                    file: item,
                    path: itemPath,
                    size: content.length,
                    lines: content.split('\n').length
                });
                
                this.checkPageContent(content, item, issues);
            }
        });
    }

    checkPageContent(content, filename, issues) {
        // Check for missing meta tags
        if (!content.includes('title') && !content.includes('meta')) {
            issues.push({
                file: filename,
                type: 'missing_meta',
                message: 'Page missing title or meta tags'
            });
        }
        
        // Check for missing headings
        const headings = content.match(/<h[1-6][^>]*>/g);
        if (!headings || headings.length === 0) {
            issues.push({
                file: filename,
                type: 'missing_headings',
                message: 'Page missing heading structure'
            });
        }
        
        // Check for content length
        const textContent = content.replace(/<[^>]*>/g, '').trim();
        if (textContent.length < 100) {
            issues.push({
                file: filename,
                type: 'minimal_content',
                message: 'Page has minimal text content'
            });
        }
        
        // Check for broken links
        const links = content.match(/href\s*=\s*["'][^"']*["']/g);
        if (links) {
            links.forEach(link => {
                const url = link.match(/href\s*=\s*["']([^"']*)["']/)[1];
                if (url.startsWith('/') && !this.isValidInternalLink(url)) {
                    issues.push({
                        file: filename,
                        type: 'broken_link',
                        link: url,
                        message: 'Potential broken internal link'
                    });
                }
            });
        }
        
        // Check for images without alt text
        const images = content.match(/<img[^>]*>/g);
        if (images) {
            images.forEach(img => {
                if (!img.includes('alt=')) {
                    issues.push({
                        file: filename,
                        type: 'missing_alt',
                        message: 'Image missing alt attribute'
                    });
                }
            });
        }
    }

    isValidInternalLink(url) {
        const validRoutes = [
            '/',
            '/about',
            '/services',
            '/blog',
            '/contact',
            '/auth/login',
            '/auth/register'
        ];
        
        return validRoutes.some(route => url.startsWith(route));
    }

    checkContentCompleteness() {
        this.log('Checking content completeness...', 'info');
        
        const requiredPages = [
            'index.tsx',
            'about.tsx',
            'services/index.tsx',
            'blog/index.tsx',
            'contact.tsx'
        ];
        
        const missingPages = [];
        const existingPages = [];
        
        requiredPages.forEach(page => {
            const pagePath = path.join(this.pagesDir, page);
            if (fs.existsSync(pagePath)) {
                existingPages.push(page);
                this.log(`✓ ${page} exists`, 'info');
            } else {
                missingPages.push(page);
                this.log(`✗ ${page} missing`, 'info');
            }
        });
        
        return { missingPages, existingPages };
    }

    checkContentQuality() {
        this.log('Checking content quality...', 'info');
        
        const qualityIssues = [];
        
        if (fs.existsSync(this.pagesDir)) {
            this.scanForQualityIssues(this.pagesDir, qualityIssues);
        }
        
        this.log(`Found ${qualityIssues.length} quality issues`, 'info');
        
        return qualityIssues;
    }

    scanForQualityIssues(dir, issues) {
        const items = fs.readdirSync(dir);
        
        items.forEach(item => {
            const itemPath = path.join(dir, item);
            const stat = fs.statSync(itemPath);
            
            if (stat.isDirectory()) {
                this.scanForQualityIssues(itemPath, issues);
            } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
                const content = fs.readFileSync(itemPath, 'utf8');
                this.checkQualityIssues(content, item, issues);
            }
        });
    }

    checkQualityIssues(content, filename, issues) {
        // Check for placeholder text
        const placeholderPatterns = [
            /lorem ipsum/gi,
            /placeholder text/gi,
            /sample text/gi,
            /TODO:/gi,
            /FIXME:/gi
        ];
        
        placeholderPatterns.forEach(pattern => {
            const matches = content.match(pattern);
            if (matches) {
                issues.push({
                    file: filename,
                    type: 'placeholder_text',
                    pattern: pattern.toString(),
                    count: matches.length,
                    message: 'Found placeholder or TODO text'
                });
            }
        });
        
        // Check for spelling issues (basic)
        const spellingIssues = [
            /teh\b/gi,
            /recieve/gi,
            /seperate/gi,
            /occured/gi
        ];
        
        spellingIssues.forEach(pattern => {
            const matches = content.match(pattern);
            if (matches) {
                issues.push({
                    file: filename,
                    type: 'spelling_issue',
                    pattern: pattern.toString(),
                    count: matches.length,
                    message: 'Potential spelling issue'
                });
            }
        });
    }

    generateRecommendations(pageAnalysis, completenessAnalysis, qualityIssues) {
        const recommendations = [];
        
        if (pageAnalysis.contentIssues.length > 0) {
            recommendations.push({
                type: 'content_issues',
                priority: 'high',
                message: `Fix ${pageAnalysis.contentIssues.length} content issues`,
                issues: pageAnalysis.contentIssues
            });
        }
        
        if (completenessAnalysis.missingPages.length > 0) {
            recommendations.push({
                type: 'missing_pages',
                priority: 'medium',
                message: `Create ${completenessAnalysis.missingPages.length} missing pages`,
                pages: completenessAnalysis.missingPages
            });
        }
        
        if (qualityIssues.length > 0) {
            recommendations.push({
                type: 'quality_issues',
                priority: 'medium',
                message: `Fix ${qualityIssues.length} content quality issues`,
                issues: qualityIssues
            });
        }
        
        return recommendations;
    }

    generateReport(pageAnalysis, completenessAnalysis, qualityIssues, recommendations) {
        const report = {
            timestamp: new Date().toISOString(),
            pageAnalysis,
            completenessAnalysis,
            qualityIssues,
            recommendations,
            summary: {
                totalPages: pageAnalysis.pages.length,
                contentIssues: pageAnalysis.contentIssues.length,
                missingPages: completenessAnalysis.missingPages.length,
                qualityIssues: qualityIssues.length,
                recommendationsCount: recommendations.length
            }
        };
        
        const reportFile = path.join(this.baseDir, 'automation', 'content-validation-report.json');
        fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
        
        this.log(`Content validation report generated: ${reportFile}`, 'info');
        return report;
    }

    run() {
        this.log('Starting content validation...', 'info');
        
        const pageAnalysis = this.validatePageContent();
        const completenessAnalysis = this.checkContentCompleteness();
        const qualityIssues = this.checkContentQuality();
        const recommendations = this.generateRecommendations(pageAnalysis, completenessAnalysis, qualityIssues);
        const report = this.generateReport(pageAnalysis, completenessAnalysis, qualityIssues, recommendations);
        
        this.log('Content validation completed', 'info');
        return report;
    }
}

if (require.main === module) {
    const validator = new ContentValidator();
    validator.run();
}

module.exports = ContentValidator;
