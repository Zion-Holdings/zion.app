#!/usr/bin/env node

/**
 * UI Components Optimizer
 * Optimizes UI components for better performance and maintainability
 */

const fs = require('fs');
const path = require('path');

class UIComponentsOptimizer {
    constructor() {
        this.baseDir = process.cwd();
        this.componentsDir = path.join(this.baseDir, 'components');
    }

    analyzeComponents() {
        console.log('Analyzing UI components...');
        
        const components = [];
        const issues = [];
        
        if (fs.existsSync(this.componentsDir)) {
            this.scanComponents(this.componentsDir, components, issues);
        }
        
        console.log(`Found ${components.length} component files`);
        console.log(`Found ${issues.length} optimization issues`);
        
        return { components, issues };
    }

    scanComponents(dir, components, issues) {
        const items = fs.readdirSync(dir);
        
        items.forEach(item => {
            const itemPath = path.join(dir, item);
            const stat = fs.statSync(itemPath);
            
            if (stat.isDirectory()) {
                this.scanComponents(itemPath, components, issues);
            } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
                const content = fs.readFileSync(itemPath, 'utf8');
                
                components.push({
                    file: item,
                    path: itemPath,
                    size: content.length,
                    lines: content.split('\n').length
                });
                
                // Check for optimization issues
                this.checkComponentOptimization(content, item, issues);
            }
        });
    }

    checkComponentOptimization(content, filename, issues) {
        // Check for inline styles
        const inlineStyles = content.match(/style\s*=\s*\{[^}]*\}/g);
        if (inlineStyles && inlineStyles.length > 3) {
            issues.push({
                file: filename,
                type: 'inline_styles',
                count: inlineStyles.length,
                message: 'Too many inline styles, consider using CSS classes'
            });
        }
        
        // Check for large components
        const lines = content.split('\n').length;
        if (lines > 200) {
            issues.push({
                file: filename,
                type: 'large_component',
                lines,
                message: 'Component is too large, consider breaking it down'
            });
        }
        
        // Check for missing memoization
        const hasState = content.includes('useState') || content.includes('useEffect');
        const hasProps = content.includes('props') || content.includes('{');
        if (hasState && hasProps && !content.includes('React.memo') && !content.includes('memo(')) {
            issues.push({
                file: filename,
                type: 'missing_memoization',
                message: 'Component with props and state should use React.memo'
            });
        }
        
        // Check for proper prop types
        if (content.includes('props') && !content.includes('interface') && !content.includes('type Props')) {
            issues.push({
                file: filename,
                type: 'missing_prop_types',
                message: 'Component should have proper TypeScript prop types'
            });
        }
        
        // Check for accessibility
        const interactiveElements = content.match(/<(button|input|select|textarea)[^>]*>/g);
        if (interactiveElements) {
            const withoutAria = interactiveElements.filter(el => 
                !el.includes('aria-label') && !el.includes('aria-labelledby')
            );
            if (withoutAria.length > 0) {
                issues.push({
                    file: filename,
                    type: 'accessibility_issues',
                    count: withoutAria.length,
                    message: 'Interactive elements missing accessibility attributes'
                });
            }
        }
    }

    checkComponentReusability() {
        console.log('Checking component reusability...');
        
        const reusableComponents = [];
        const nonReusableComponents = [];
        
        if (fs.existsSync(this.componentsDir)) {
            this.scanForReusability(this.componentsDir, reusableComponents, nonReusableComponents);
        }
        
        console.log(`Found ${reusableComponents.length} reusable components`);
        console.log(`Found ${nonReusableComponents.length} non-reusable components`);
        
        return { reusableComponents, nonReusableComponents };
    }

    scanForReusability(dir, reusable, nonReusable) {
        const items = fs.readdirSync(dir);
        
        items.forEach(item => {
            const itemPath = path.join(dir, item);
            const stat = fs.statSync(itemPath);
            
            if (stat.isDirectory()) {
                this.scanForReusability(itemPath, reusable, nonReusable);
            } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
                const content = fs.readFileSync(itemPath, 'utf8');
                
                // Check if component is reusable
                const hasProps = content.includes('props') || content.includes('{');
                const hasDefaultProps = content.includes('defaultProps') || content.includes('= {}');
                const hasVariants = content.includes('variant') || content.includes('size');
                
                if (hasProps || hasDefaultProps || hasVariants) {
                    reusable.push({
                        file: item,
                        path: itemPath,
                        reusabilityScore: this.calculateReusabilityScore(content)
                    });
                } else {
                    nonReusable.push({
                        file: item,
                        path: itemPath
                    });
                }
            }
        });
    }

    calculateReusabilityScore(content) {
        let score = 0;
        
        if (content.includes('props')) score += 2;
        if (content.includes('defaultProps')) score += 1;
        if (content.includes('variant')) score += 2;
        if (content.includes('size')) score += 1;
        if (content.includes('className')) score += 1;
        if (content.includes('children')) score += 2;
        
        return Math.min(score, 10);
    }

    generateOptimizationRecommendations(componentAnalysis, reusabilityAnalysis) {
        const recommendations = [];
        
        if (componentAnalysis.issues.length > 0) {
            recommendations.push({
                type: 'component_optimization',
                priority: 'high',
                message: `Fix ${componentAnalysis.issues.length} component optimization issues`,
                issues: componentAnalysis.issues
            });
        }
        
        const reusableRatio = reusabilityAnalysis.reusableComponents.length / 
                             Math.max(reusabilityAnalysis.reusableComponents.length + 
                                     reusabilityAnalysis.nonReusableComponents.length, 1);
        
        if (reusableRatio < 0.5) {
            recommendations.push({
                type: 'component_reusability',
                priority: 'medium',
                message: 'Increase component reusability by adding props and variants'
            });
        }
        
        return recommendations;
    }

    generateReport(componentAnalysis, reusabilityAnalysis, recommendations) {
        const report = {
            timestamp: new Date().toISOString(),
            componentAnalysis,
            reusabilityAnalysis,
            recommendations,
            summary: {
                totalComponents: componentAnalysis.components.length,
                optimizationIssues: componentAnalysis.issues.length,
                reusableComponents: reusabilityAnalysis.reusableComponents.length,
                nonReusableComponents: reusabilityAnalysis.nonReusableComponents.length,
                reusabilityRatio: reusabilityAnalysis.reusableComponents.length / 
                                 Math.max(reusabilityAnalysis.reusableComponents.length + 
                                         reusabilityAnalysis.nonReusableComponents.length, 1),
                recommendationsCount: recommendations.length
            }
        };
        
        const reportFile = path.join(this.baseDir, 'automation', 'ui-components-report.json');
        fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
        
        console.log(`UI components report generated: ${reportFile}`);
        return report;
    }

    run() {
        console.log('Starting UI components optimization analysis...');
        
        const componentAnalysis = this.analyzeComponents();
        const reusabilityAnalysis = this.checkComponentReusability();
        const recommendations = this.generateOptimizationRecommendations(componentAnalysis, reusabilityAnalysis);
        const report = this.generateReport(componentAnalysis, reusabilityAnalysis, recommendations);
        
        console.log('UI components optimization analysis completed');
        return report;
    }
}

if (require.main === module) {
    const optimizer = new UIComponentsOptimizer();
    optimizer.run();
}

module.exports = UIComponentsOptimizer;
