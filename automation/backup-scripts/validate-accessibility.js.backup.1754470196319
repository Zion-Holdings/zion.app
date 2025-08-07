#!/usr/bin/env node

/**
 * Accessibility Validator
 * Validates accessibility implementation
 */

const fs = require('fs');
const path = require('path');

class AccessibilityValidator {
    constructor() {
        this.baseDir = process.cwd();
        this.componentsDir = path.join(this.baseDir, 'components');
        this.pagesDir = path.join(this.baseDir, 'pages');
    }

    checkAccessibilityAttributes() {
        console.log('Checking accessibility attributes...');
        
        const components = [];
        const accessibilityIssues = [];
        
        if (fs.existsSync(this.componentsDir)) {
            this.scanForAccessibility(this.componentsDir, components, accessibilityIssues);
        }
        
        if (fs.existsSync(this.pagesDir)) {
            this.scanForAccessibility(this.pagesDir, components, accessibilityIssues);
        }
        
        console.log(`Found ${components.length} component/page files`);
        console.log(`Found ${accessibilityIssues.length} accessibility issues`);
        
        return { components, accessibilityIssues };
    }

    scanForAccessibility(dir, components, issues) {
        const items = fs.readdirSync(dir);
        
        items.forEach(item => {
            const itemPath = path.join(dir, item);
            const stat = fs.statSync(itemPath);
            
            if (stat.isDirectory()) {
                this.scanForAccessibility(itemPath, components, issues);
            } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
                const content = fs.readFileSync(itemPath, 'utf8');
                
                components.push({
                    file: item,
                    path: itemPath,
                    size: content.length
                });
                
                // Check for accessibility issues
                this.checkFileAccessibility(content, item, issues);
            }
        });
    }

    checkFileAccessibility(content, filename, issues) {
        // Check for missing alt attributes on images
        const imgWithoutAlt = content.match(/<img[^>]*>/g);
        if (imgWithoutAlt) {
            imgWithoutAlt.forEach(img => {
                if (!img.includes('alt=')) {
                    issues.push({
                        file: filename,
                        type: 'missing_alt',
                        element: 'img',
                        message: 'Image missing alt attribute'
                    });
                }
            });
        }
        
        // Check for missing aria-labels
        const interactiveElements = content.match(/<(button|input|select|textarea)[^>]*>/g);
        if (interactiveElements) {
            interactiveElements.forEach(element => {
                if (!element.includes('aria-label=') && !element.includes('aria-labelledby=')) {
                    issues.push({
                        file: filename,
                        type: 'missing_aria_label',
                        element: element.match(/<(\w+)/)[1],
                        message: 'Interactive element missing aria-label or aria-labelledby'
                    });
                }
            });
        }
        
        // Check for proper heading structure
        const headings = content.match(/<h[1-6][^>]*>/g);
        if (headings) {
            const headingLevels = headings.map(h => parseInt(h.match(/<h(\d)/)[1]));
            if (headingLevels.length > 0 && headingLevels[0] !== 1) {
                issues.push({
                    file: filename,
                    type: 'heading_structure',
                    message: 'Page should start with h1 heading'
                });
            }
        }
        
        // Check for color contrast issues (basic check)
        const colorClasses = content.match(/className.*text-\[#[0-9a-fA-F]{3,6}\]/g);
        if (colorClasses) {
            issues.push({
                file: filename,
                type: 'color_contrast',
                message: 'Check color contrast for custom text colors'
            });
        }
    }

    checkSemanticHTML() {
        console.log('Checking semantic HTML usage...');
        
        const semanticElements = ['header', 'nav', 'main', 'section', 'article', 'aside', 'footer'];
        const semanticUsage = [];
        
        if (fs.existsSync(this.componentsDir)) {
            this.scanForSemanticElements(this.componentsDir, semanticElements, semanticUsage);
        }
        
        console.log(`Found ${semanticUsage.length} semantic HTML elements`);
        
        return semanticUsage;
    }

    scanForSemanticElements(dir, semanticElements, usage) {
        const items = fs.readdirSync(dir);
        
        items.forEach(item => {
            const itemPath = path.join(dir, item);
            const stat = fs.statSync(itemPath);
            
            if (stat.isDirectory()) {
                this.scanForSemanticElements(itemPath, semanticElements, usage);
            } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
                const content = fs.readFileSync(itemPath, 'utf8');
                
                semanticElements.forEach(element => {
                    const pattern = new RegExp(`<${element}[^>]*>`, 'g');
                    const matches = content.match(pattern);
                    if (matches) {
                        usage.push({
                            file: item,
                            element,
                            count: matches.length
                        });
                    }
                });
            }
        });
    }

    generateRecommendations(accessibilityAnalysis, semanticAnalysis) {
        const recommendations = [];
        
        if (accessibilityAnalysis.accessibilityIssues.length > 0) {
            recommendations.push({
                type: 'accessibility_issues',
                priority: 'high',
                message: `Fix ${accessibilityAnalysis.accessibilityIssues.length} accessibility issues`,
                issues: accessibilityAnalysis.accessibilityIssues
            });
        }
        
        if (semanticAnalysis.length === 0) {
            recommendations.push({
                type: 'semantic_html',
                priority: 'medium',
                message: 'Use semantic HTML elements for better accessibility'
            });
        }
        
        return recommendations;
    }

    generateReport(accessibilityAnalysis, semanticAnalysis, recommendations) {
        const report = {
            timestamp: new Date().toISOString(),
            accessibilityAnalysis,
            semanticAnalysis,
            recommendations,
            summary: {
                totalFiles: accessibilityAnalysis.components.length,
                accessibilityIssues: accessibilityAnalysis.accessibilityIssues.length,
                semanticElements: semanticAnalysis.length,
                recommendationsCount: recommendations.length
            }
        };
        
        const reportFile = path.join(this.baseDir, 'automation', 'accessibility-report.json');
        fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
        
        console.log(`Accessibility report generated: ${reportFile}`);
        return report;
    }

    run() {
        console.log('Starting accessibility validation...');
        
        const accessibilityAnalysis = this.checkAccessibilityAttributes();
        const semanticAnalysis = this.checkSemanticHTML();
        const recommendations = this.generateRecommendations(accessibilityAnalysis, semanticAnalysis);
        const report = this.generateReport(accessibilityAnalysis, semanticAnalysis, recommendations);
        
        console.log('Accessibility validation completed');
        return report;
    }
}

if (require.main === module) {
    const validator = new AccessibilityValidator();
    validator.run();
}

module.exports = AccessibilityValidator;
