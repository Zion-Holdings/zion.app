#!/usr/bin/env node

/**
 * Sitemap Generator
 * Generates sitemap for the application
 */

const fs = require('fs');
const path = require('path');

class SitemapGenerator {
    constructor() {
        this.baseDir = process.cwd();
        this.pagesDir = path.join(this.baseDir, 'pages');
        this.publicDir = path.join(this.baseDir, 'public');
        this.siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://bolt.new.zion.app';
    }

    scanPages() {
        console.log('Scanning pages for sitemap...');
        
        const pages = [];
        
        if (fs.existsSync(this.pagesDir)) {
            this.scanDirectory(this.pagesDir, pages);
        }
        
        console.log(`Found ${pages.length} pages`);
        return pages;
    }

    scanDirectory(dir, pages, basePath = '') {
        const items = fs.readdirSync(dir);
        
        items.forEach(item => {
            const itemPath = path.join(dir, item);
            const stat = fs.statSync(itemPath);
            
            if (stat.isDirectory()) {
                const newBasePath = basePath ? `${basePath}/${item}` : item;
                this.scanDirectory(itemPath, pages, newBasePath);
            } else if (item.endsWith('.tsx') || item.endsWith('.jsx')) {
                const fileName = item.replace(/\.(tsx|jsx)$/, '');
                const route = this.generateRoute(basePath, fileName);
                
                if (route && !this.isExcludedRoute(route)) {
                    pages.push({
                        file: item,
                        route,
                        path: itemPath,
                        priority: this.calculatePriority(route),
                        changefreq: this.calculateChangeFreq(route)
                    });
                }
            }
        });
    }

    generateRoute(basePath, fileName) {
        if (fileName === 'index') {
            return basePath || '/';
        }
        
        if (fileName.startsWith('[') && fileName.endsWith(']')) {
            return null; // Dynamic routes
        }
        
        return basePath ? `/${basePath}/${fileName}` : `/${fileName}`;
    }

    isExcludedRoute(route) {
        const excludedRoutes = [
            '/_app',
            '/_document',
            '/_error',
            '/404',
            '/api',
            '/auth/login',
            '/auth/register',
            '/auth/confirm',
            '/auth/error'
        ];
        
        return excludedRoutes.some(excluded => route.startsWith(excluded));
    }

    calculatePriority(route) {
        if (route === '/') return '1.0';
        if (route.startsWith('/services')) return '0.9';
        if (route.startsWith('/blog')) return '0.8';
        if (route.startsWith('/about')) return '0.7';
        return '0.6';
    }

    calculateChangeFreq(route) {
        if (route === '/') return 'weekly';
        if (route.startsWith('/blog')) return 'daily';
        if (route.startsWith('/services')) return 'monthly';
        return 'monthly';
    }

    generateSitemapXML(pages) {
        console.log('Generating sitemap XML...');
        
        let xml = '<?xml version="1.0" encoding="UTF-8"?>\n';
        xml += '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n';
        
        pages.forEach(page => {
            xml += '  <url>\n';
            xml += `    <loc>${this.siteUrl}${page.route}</loc>\n`;
            xml += `    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>\n`;
            xml += `    <changefreq>${page.changefreq}</changefreq>\n`;
            xml += `    <priority>${page.priority}</priority>\n`;
            xml += '  </url>\n';
        });
        
        xml += '</urlset>';
        
        return xml;
    }

    generateSitemapJSON(pages) {
        console.log('Generating sitemap JSON...');
        
        const sitemap = {
            siteUrl: this.siteUrl,
            generatedAt: new Date().toISOString(),
            pages: pages.map(page => ({
                route: page.route,
                priority: page.priority,
                changefreq: page.changefreq,
                lastmod: new Date().toISOString().split('T')[0]
            }))
        };
        
        return JSON.stringify(sitemap, null, 2);
    }

    saveSitemap(xml, json) {
        console.log('Saving sitemap files...');
        
        const sitemapXMLPath = path.join(this.publicDir, 'sitemap.xml');
        const sitemapJSONPath = path.join(this.baseDir, 'automation', 'sitemap.json');
        
        fs.writeFileSync(sitemapXMLPath, xml);
        fs.writeFileSync(sitemapJSONPath, json);
        
        console.log(`Sitemap XML saved: ${sitemapXMLPath}`);
        console.log(`Sitemap JSON saved: ${sitemapJSONPath}`);
    }

    generateReport(pages) {
        const report = {
            timestamp: new Date().toISOString(),
            siteUrl: this.siteUrl,
            pages: pages.map(page => ({
                route: page.route,
                priority: page.priority,
                changefreq: page.changefreq,
                file: page.file
            })),
            summary: {
                totalPages: pages.length,
                highPriorityPages: pages.filter(p => p.priority >= '0.9').length,
                mediumPriorityPages: pages.filter(p => p.priority >= '0.7' && p.priority < '0.9').length,
                lowPriorityPages: pages.filter(p => p.priority < '0.7').length
            }
        };
        
        const reportFile = path.join(this.baseDir, 'automation', 'sitemap-report.json');
        fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
        
        console.log(`Sitemap report generated: ${reportFile}`);
        return report;
    }

    run() {
        console.log('Starting sitemap generation...');
        
        const pages = this.scanPages();
        const xml = this.generateSitemapXML(pages);
        const json = this.generateSitemapJSON(pages);
        
        this.saveSitemap(xml, json);
        const report = this.generateReport(pages);
        
        console.log('Sitemap generation completed');
        return report;
    }
}

if (require.main === module) {
    const generator = new SitemapGenerator();
    generator.run();
}

module.exports = SitemapGenerator;