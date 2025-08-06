#!/usr/bin/env node

/**
 * Responsive Design Checker
 * Validates responsive design implementation
 */

const fs = require('fs');
const path = require('path');

class ResponsiveDesignChecker {
    constructor() {
        this.baseDir = process.cwd();
        this.componentsDir = path.join(this.baseDir, 'components');
        this.pagesDir = path.join(this.baseDir, 'pages');
        this.stylesDir = path.join(this.baseDir, 'styles');
    }

    checkTailwindConfig() {
        console.log('Checking Tailwind configuration...');
        
        const tailwindConfigPath = path.join(this.baseDir, 'tailwind.config.js');
        
        if (!fs.existsSync(tailwindConfigPath)) {
            console.log('✗ tailwind.config.js not found');
            return { exists: false, responsive: false };
        }
        
        const configContent = fs.readFileSync(tailwindConfigPath, 'utf8');
        const hasResponsiveConfig = configContent.includes('screens') || 
                                   configContent.includes('breakpoints') ||
                                   configContent.includes('sm:') ||
                                   configContent.includes('md:') ||
                                   configContent.includes('lg:') ||
                                   configContent.includes('xl:');
        
        if (hasResponsiveConfig) {
            console.log('✓ Tailwind responsive configuration found');
        } else {
            console.log('⚠ No responsive configuration found in Tailwind');
        }
        
        return { exists: true, responsive: hasResponsiveConfig };
    }

    checkCSSFiles() {
        console.log('Checking CSS files for responsive design...');
        
        const cssFiles = [];
        const responsiveClasses = [];
        
        if (fs.existsSync(this.stylesDir)) {
            const files = fs.readdirSync(this.stylesDir);
            files.forEach(file => {
                if (file.endsWith('.css')) {
                    const filePath = path.join(this.stylesDir, file);
                    const content = fs.readFileSync(filePath, 'utf8');
                    
                    cssFiles.push({
                        file,
                        path: filePath,
                        size: content.length
                    });
                    
                    // Check for responsive classes
                    const responsivePatterns = [
                        /@media\s+\(/g,
                        /min-width:/g,
                        /max-width:/g,
                        /sm:/g,
                        /md:/g,
                        /lg:/g,
                        /xl:/g
                    ];
                    
                    responsivePatterns.forEach(pattern => {
                        const matches = content.match(pattern);
                        if (matches) {
                            responsiveClasses.push({
                                file,
                                pattern: pattern.toString(),
                                count: matches.length
                            });
                        }
                    });
                }
            });
        }
        
        console.log(`Found ${cssFiles.length} CSS files`);
        console.log(`Found ${responsiveClasses.length} responsive patterns`);
        
        return { cssFiles, responsiveClasses };
    }

    checkComponentFiles() {
        console.log('Checking component files for responsive classes...');
        
        const components = [];
        const responsiveComponents = [];
        
        if (fs.existsSync(this.componentsDir)) {
            this.scanComponents(this.componentsDir, components, responsiveComponents);
        }
        
        console.log(`Found ${components.length} component files`);
        console.log(`Found ${responsiveComponents.length} components with responsive classes`);
        
        return { components, responsiveComponents };
    }

    scanComponents(dir, components, responsiveComponents) {
        const items = fs.readdirSync(dir);
        
        items.forEach(item => {
            const itemPath = path.join(dir, item);
            const stat = fs.statSync(itemPath);
            
            if (stat.isDirectory()) {
                this.scanComponents(itemPath, components, responsiveComponents);
            } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
                const content = fs.readFileSync(itemPath, 'utf8');
                
                components.push({
                    file: item,
                    path: itemPath,
                    size: content.length
                });
                
                // Check for responsive classes
                const responsivePatterns = [
                    /className.*sm:/g,
                    /className.*md:/g,
                    /className.*lg:/g,
                    /className.*xl:/g,
                    /className.*2xl:/g
                ];
                
                const hasResponsive = responsivePatterns.some(pattern => 
                    content.match(pattern)
                );
                
                if (hasResponsive) {
                    responsiveComponents.push({
                        file: item,
                        path: itemPath,
                        responsiveClasses: responsivePatterns.filter(pattern => 
                            content.match(pattern)
                        ).length
                    });
                }
            }
        });
    }

    generateRecommendations(tailwindConfig, cssAnalysis, componentAnalysis) {
        const recommendations = [];
        
        if (!tailwindConfig.responsive) {
            recommendations.push({
                type: 'tailwind_config',
                priority: 'high',
                message: 'Add responsive breakpoints to Tailwind configuration'
            });
        }
        
        if (cssAnalysis.responsiveClasses.length === 0) {
            recommendations.push({
                type: 'css_responsive',
                priority: 'medium',
                message: 'Add responsive CSS media queries'
            });
        }
        
        const responsiveComponentRatio = componentAnalysis.responsiveComponents.length / 
                                      Math.max(componentAnalysis.components.length, 1);
        
        if (responsiveComponentRatio < 0.5) {
            recommendations.push({
                type: 'component_responsive',
                priority: 'medium',
                message: 'Add responsive classes to more components'
            });
        }
        
        return recommendations;
    }

    generateReport(tailwindConfig, cssAnalysis, componentAnalysis, recommendations) {
        const report = {
            timestamp: new Date().toISOString(),
            tailwindConfig,
            cssAnalysis,
            componentAnalysis,
            recommendations,
            summary: {
                tailwindConfigured: tailwindConfig.responsive,
                cssFiles: cssAnalysis.cssFiles.length,
                responsiveCSS: cssAnalysis.responsiveClasses.length,
                components: componentAnalysis.components.length,
                responsiveComponents: componentAnalysis.responsiveComponents.length,
                responsiveRatio: componentAnalysis.components.length > 0 ? 
                    (componentAnalysis.responsiveComponents.length / componentAnalysis.components.length).toFixed(2) : 0
            }
        };
        
        const reportFile = path.join(this.baseDir, 'automation', 'responsive-design-report.json');
        fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
        
        console.log(`Responsive design report generated: ${reportFile}`);
        return report;
    }

    run() {
        console.log('Starting responsive design analysis...');
        
        const tailwindConfig = this.checkTailwindConfig();
        const cssAnalysis = this.checkCSSFiles();
        const componentAnalysis = this.checkComponentFiles();
        const recommendations = this.generateRecommendations(tailwindConfig, cssAnalysis, componentAnalysis);
        const report = this.generateReport(tailwindConfig, cssAnalysis, componentAnalysis, recommendations);
        
        console.log('Responsive design analysis completed');
        return report;
    }
}

if (require.main === module) {
    const checker = new ResponsiveDesignChecker();
    checker.run();
}

module.exports = ResponsiveDesignChecker;
