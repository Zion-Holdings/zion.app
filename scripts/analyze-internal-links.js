#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Internal Link Analysis Script
 * Analyzes the internal linking structure of the Next.js application
 */

class InternalLinkAnalyzer {
  constructor() {
    this.baseUrl = 'https://ziontechgroup.com';
    this.internalLinks = new Map();
    this.pageStats = new Map();
    this.brokenLinks = [];
    this.missingPages = new Set();
    this.recommendations = [];
  }

  async analyze() {
    console.log('🔍 Analyzing internal linking structure...\n');
    
    // Get all page files manually
    const pageFiles = this.getPageFiles('pages');
    
    for (const file of pageFiles) {
      await this.analyzePage(file);
    }
    
    this.generateReport();
    this.generateRecommendations();
    this.saveReport();
  }

  getPageFiles(dir) {
    const files = [];
    
    try {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          // Skip special Next.js directories
          if (!item.startsWith('_') && !item.startsWith('.')) {
            files.push(...this.getPageFiles(fullPath));
          }
        } else if (stat.isFile()) {
          // Only include page files
          if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.jsx') || item.endsWith('.js')) {
            // Skip special Next.js files
            if (!item.startsWith('_')) {
              files.push(fullPath);
            }
          }
        }
      }
    } catch (error) {
      console.warn(`Warning: Could not read directory ${dir}:`, error.message);
    }
    
    return files;
  }

  async analyzePage(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const relativePath = path.relative('pages', filePath);
      const route = this.getRouteFromPath(relativePath);
      
      if (!this.pageStats.has(route)) {
        this.pageStats.set(route, {
          filePath,
          internalLinks: [],
          externalLinks: [],
          linkCount: 0,
          hasBreadcrumbs: false,
          hasRelatedContent: false,
          hasQuickNavigation: false
        });
      }
      
      const stats = this.pageStats.get(route);
      
      // Extract internal links
      const internalLinkRegex = /href=["'](\/[^"']+)["']/g;
      let match;
      const links = new Set();
      
      while ((match = internalLinkRegex.exec(content)) !== null) {
        const link = match[1];
        if (link.startsWith('/') && !link.startsWith('/api') && !link.startsWith('/_next')) {
          links.add(link);
          stats.internalLinks.push(link);
          stats.linkCount++;
        }
      }
      
      // Check for components usage
      stats.hasBreadcrumbs = content.includes('Breadcrumbs');
      stats.hasRelatedContent = content.includes('RelatedContent');
      stats.hasQuickNavigation = content.includes('QuickNavigation');
      
      // Check for external links
      const externalLinkRegex = /href=["'](https?:\/\/[^"']+)["']/g;
      while ((match = externalLinkRegex.exec(content)) !== null) {
        const link = match[1];
        if (!link.includes(this.baseUrl)) {
          stats.externalLinks.push(link);
        }
      }
    } catch (error) {
      console.warn(`Warning: Could not analyze ${filePath}:`, error.message);
    }
  }

  getRouteFromPath(filePath) {
    let route = filePath.replace(/\.(tsx|ts|jsx|js)$/, '');
    
    if (route === 'index') {
      route = '/';
    } else if (route.endsWith('/index')) {
      route = '/' + route.replace('/index', '');
    } else {
      route = '/' + route;
    }
    
    return route;
  }

  generateReport() {
    console.log('📊 INTERNAL LINKING ANALYSIS REPORT\n');
    console.log('=' .repeat(60));
    
    // Overall statistics
    let totalPages = 0;
    let totalInternalLinks = 0;
    let pagesWithBreadcrumbs = 0;
    let pagesWithRelatedContent = 0;
    let pagesWithQuickNavigation = 0;
    
    for (const [route, stats] of this.pageStats) {
      totalPages++;
      totalInternalLinks += stats.linkCount;
      if (stats.hasBreadcrumbs) pagesWithBreadcrumbs++;
      if (stats.hasRelatedContent) pagesWithRelatedContent++;
      if (stats.hasQuickNavigation) pagesWithQuickNavigation++;
    }
    
    console.log(`📈 OVERALL STATISTICS:`);
    console.log(`   Total Pages: ${totalPages}`);
    console.log(`   Total Internal Links: ${totalInternalLinks}`);
    console.log(`   Average Links per Page: ${(totalInternalLinks / totalPages).toFixed(2)}`);
    console.log(`   Pages with Breadcrumbs: ${pagesWithBreadcrumbs}/${totalPages} (${((pagesWithBreadcrumbs/totalPages)*100).toFixed(1)}%)`);
    console.log(`   Pages with Related Content: ${pagesWithRelatedContent}/${totalPages} (${((pagesWithRelatedContent/totalPages)*100).toFixed(1)}%)`);
    console.log(`   Pages with Quick Navigation: ${pagesWithQuickNavigation}/${totalPages} (${((pagesWithQuickNavigation/totalPages)*100).toFixed(1)}%)`);
    
    console.log('\n📄 PAGE-BY-PAGE ANALYSIS:');
    console.log('=' .repeat(60));
    
    for (const [route, stats] of this.pageStats) {
      console.log(`\n${route}:`);
      console.log(`  📁 File: ${stats.filePath}`);
      console.log(`  🔗 Internal Links: ${stats.linkCount}`);
      console.log(`  🧭 Breadcrumbs: ${stats.hasBreadcrumbs ? '✅' : '❌'}`);
      console.log(`  🔗 Related Content: ${stats.hasRelatedContent ? '✅' : '❌'}`);
      console.log(`  🚀 Quick Navigation: ${stats.hasQuickNavigation ? '✅' : '❌'}`);
      
      if (stats.internalLinks.length > 0) {
        console.log(`  📋 Links: ${stats.internalLinks.join(', ')}`);
      }
    }
  }

  generateRecommendations() {
    console.log('\n💡 RECOMMENDATIONS:');
    console.log('=' .repeat(60));
    
    // Check for pages without navigation components
    for (const [route, stats] of this.pageStats) {
      if (!stats.hasBreadcrumbs) {
        this.recommendations.push(`Add breadcrumbs to ${route} for better navigation`);
      }
      if (!stats.hasRelatedContent) {
        this.recommendations.push(`Add related content section to ${route} for better internal linking`);
      }
      if (!stats.hasQuickNavigation) {
        this.recommendations.push(`Add quick navigation to ${route} for better user experience`);
      }
      if (stats.linkCount < 3) {
        this.recommendations.push(`Increase internal linking on ${route} (currently only ${stats.linkCount} links)`);
      }
    }
    
    // Check for orphaned pages
    const allLinks = new Set();
    for (const [route, stats] of this.pageStats) {
      stats.internalLinks.forEach(link => allLinks.add(link));
    }
    
    for (const [route] of this.pageStats) {
      if (route !== '/' && !allLinks.has(route)) {
        this.recommendations.push(`Page ${route} has no incoming internal links - consider adding links to it from other pages`);
      }
    }
    
    // Display recommendations
    this.recommendations.forEach((rec, index) => {
      console.log(`${index + 1}. ${rec}`);
    });
    
    // Priority improvements
    console.log('\n🚀 PRIORITY IMPROVEMENTS:');
    console.log('=' .repeat(60));
    console.log('1. Ensure all pages have breadcrumbs for consistent navigation');
    console.log('2. Add related content sections to improve cross-page linking');
    console.log('3. Implement quick navigation on key landing pages');
    console.log('4. Increase internal linking density on content-heavy pages');
    console.log('5. Create a comprehensive internal linking strategy document');
  }

  saveReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalPages: this.pageStats.size,
        totalInternalLinks: Array.from(this.pageStats.values()).reduce((sum, stats) => sum + stats.linkCount, 0),
        pagesWithBreadcrumbs: Array.from(this.pageStats.values()).filter(stats => stats.hasBreadcrumbs).length,
        pagesWithRelatedContent: Array.from(this.pageStats.values()).filter(stats => stats.hasRelatedContent).length,
        pagesWithQuickNavigation: Array.from(this.pageStats.values()).filter(stats => stats.hasQuickNavigation).length
      },
      pageStats: Object.fromEntries(this.pageStats),
      recommendations: this.recommendations
    };
    
    fs.writeFileSync('internal-linking-report.json', JSON.stringify(report, null, 2));
    console.log('\n📄 Report saved to internal-linking-report.json');
  }
}

// Run the analysis
async function main() {
  try {
    const analyzer = new InternalLinkAnalyzer();
    await analyzer.analyze();
  } catch (error) {
    console.error('❌ Error during analysis:', error);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = InternalLinkAnalyzer;