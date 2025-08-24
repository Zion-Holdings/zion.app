#!/usr/bin/env node

/**
 * Smart Navigation Analyzer
 * Continuously analyzes navigation patterns to identify improvements
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, 'data', 'navigation');
const PAGES_DIR = path.join(ROOT, 'pages');

class SmartNavigationAnalyzer {
  constructor() {
    this.analysis = {
      navigationMetrics: {},
      bottlenecks: [],
      optimizations: [],
      insights: []
    };
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  }

  async run() {
    console.log('🧠 Smart Navigation Analyzer: Starting analysis...');
    
    try {
      await this.analyzeNavigationStructure();
      await this.identifyBottlenecks();
      await this.generateOptimizations();
      await this.generateInsights();
      await this.saveAnalysis();
      
      console.log('✅ Smart Navigation Analyzer: Completed successfully');
    } catch (error) {
      console.error('❌ Smart Navigation Analyzer Error:', error);
    }
  }

  async analyzeNavigationStructure() {
    console.log('🏗️ Analyzing navigation structure...');
    
    const pages = this.scanPages();
    const navigationGraph = this.buildNavigationGraph(pages);
    
    this.analysis.navigationMetrics = {
      totalPages: pages.length,
      navigationDepth: this.calculateNavigationDepth(navigationGraph),
      crossLinks: this.countCrossLinks(navigationGraph),
      orphanPages: this.findOrphanPages(navigationGraph),
      hubPages: this.findHubPages(navigationGraph)
    };
    
    console.log(`📊 Navigation structure analyzed: ${pages.length} pages`);
  }

  scanPages() {
    const pages = [];
    
    function walk(dir, baseRoute = '') {
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      
      for (const entry of entries) {
        if (entry.name.startsWith('_') || entry.name.startsWith('[')) continue;
        
        const fullPath = path.join(dir, entry.name);
        if (entry.isDirectory()) {
          const nextRoute = baseRoute ? `${baseRoute}/${entry.name}` : entry.name;
          walk(fullPath, nextRoute);
        } else if (/\.(tsx|jsx|ts|js)$/.test(entry.name)) {
          const route = baseRoute ? `/${baseRoute}` : '/';
          const content = fs.readFileSync(fullPath, 'utf8');
          
          pages.push({
            path: fullPath,
            route,
            content,
            links: this.extractLinks(content)
          });
        }
      }
    }
    
    walk(PAGES_DIR);
    return pages;
  }

  extractLinks(content) {
    const links = [];
    const linkRegex = /href\s*=\s*(?:"([^"]+)"|'([^']+)'|\{\s*`([^`]+)`\s*\}|\{\s*"([^"]+)"\s*\}|\{\s*'([^']+)'\s*\})/g;
    let match;
    
    while ((match = linkRegex.exec(content))) {
      const href = match[1] || match[2] || match[3] || match[4] || match[5];
      if (href && href.startsWith('/')) {
        links.push(href);
      }
    }
    
    return links;
  }

  buildNavigationGraph(pages) {
    const graph = {};
    
    for (const page of pages) {
      graph[page.route] = {
        route: page.route,
        links: page.links,
        incoming: [],
        outgoing: page.links.length
      };
    }
    
    for (const page of pages) {
      for (const link of page.links) {
        if (graph[link]) {
          graph[link].incoming.push(page.route);
        }
      }
    }
    
    return graph;
  }

  calculateNavigationDepth(graph) {
    const depths = {};
    const visited = new Set();
    
    function calculateDepth(route, currentDepth = 0) {
      if (visited.has(route)) return depths[route] || 0;
      visited.add(route);
      
      const node = graph[route];
      if (!node) return currentDepth;
      
      let maxDepth = currentDepth;
      for (const incoming of node.incoming) {
        maxDepth = Math.max(maxDepth, calculateDepth(incoming, currentDepth + 1));
      }
      
      depths[route] = maxDepth;
      return maxDepth;
    }
    
    for (const route of Object.keys(graph)) {
      calculateDepth(route);
    }
    
    return Math.max(...Object.values(depths));
  }

  countCrossLinks(graph) {
    let crossLinks = 0;
    
    for (const [route, node] of Object.entries(graph)) {
      for (const link of node.links) {
        const sourceCategory = this.getCategory(route);
        const targetCategory = this.getCategory(link);
        
        if (sourceCategory && targetCategory && sourceCategory !== targetCategory) {
          crossLinks++;
        }
      }
    }
    
    return crossLinks;
  }

  getCategory(route) {
    if (route.startsWith('/services')) return 'services';
    if (route.startsWith('/reports')) return 'reports';
    if (route.startsWith('/automation')) return 'automation';
    if (route.startsWith('/explore')) return 'explore';
    return null;
  }

  findOrphanPages(graph) {
    return Object.entries(graph)
      .filter(([route, node]) => node.incoming.length === 0 && route !== '/')
      .map(([route, node]) => ({
        route,
        issue: 'No incoming links'
      }));
  }

  findHubPages(graph) {
    return Object.entries(graph)
      .filter(([route, node]) => node.outgoing > 5)
      .map(([route, node]) => ({
        route,
        outgoingLinks: node.outgoing
      }))
      .sort((a, b) => b.outgoingLinks - a.outgoingLinks)
      .slice(0, 10);
  }

  async identifyBottlenecks() {
    console.log('🚧 Identifying navigation bottlenecks...');
    
    const bottlenecks = [];
    
    const hubPages = this.analysis.navigationMetrics.hubPages;
    for (const hub of hubPages) {
      if (hub.outgoingLinks > 10) {
        bottlenecks.push({
          type: 'overwhelming-navigation',
          page: hub.route,
          issue: `Page has ${hub.outgoingLinks} outgoing links`,
          suggestion: 'Group links into categories or create navigation hub'
        });
      }
    }
    
    const orphanPages = this.analysis.navigationMetrics.orphanPages;
    for (const orphan of orphanPages) {
      bottlenecks.push({
        type: 'orphan-page',
        page: orphan.route,
        issue: 'Page has no incoming links',
        suggestion: 'Add links from related pages'
      });
    }
    
    this.analysis.bottlenecks = bottlenecks;
    console.log(`🚧 Identified ${bottlenecks.length} navigation bottlenecks`);
  }

  async generateOptimizations() {
    console.log('⚡ Generating navigation optimizations...');
    
    const optimizations = [];
    
    if (this.analysis.navigationMetrics.navigationDepth > 4) {
      optimizations.push({
        type: 'breadcrumb-generation',
        suggestion: 'Add breadcrumbs for deep navigation',
        implementation: 'Use DynamicBreadcrumbs component'
      });
    }
    
    const orphanPages = this.analysis.navigationMetrics.orphanPages;
    for (const page of orphanPages) {
      optimizations.push({
        type: 'related-pages',
        page: page.route,
        suggestion: `Add related pages section to ${page.route}`,
        implementation: 'Use DynamicSidebar with related pages'
      });
    }
    
    this.analysis.optimizations = optimizations;
    console.log(`⚡ Generated ${optimizations.length} optimization suggestions`);
  }

  async generateInsights() {
    console.log('💡 Generating navigation insights...');
    
    const insights = [];
    
    if (this.analysis.navigationMetrics.navigationDepth <= 3) {
      insights.push({
        type: 'positive',
        message: 'Navigation depth is optimal (≤3 levels)',
        impact: 'Good user experience, easy navigation'
      });
    }
    
    if (this.analysis.navigationMetrics.crossLinks > 20) {
      insights.push({
        type: 'positive',
        message: 'Good cross-category linking',
        impact: 'Users can easily discover related content'
      });
    }
    
    this.analysis.insights = insights;
    console.log(`💡 Generated ${insights.length} navigation insights`);
  }

  async saveAnalysis() {
    console.log('💾 Saving navigation analysis...');
    
    const analysisPath = path.join(DATA_DIR, 'navigation-analysis.json');
    fs.writeFileSync(analysisPath, JSON.stringify(this.analysis, null, 2));
    
    const summary = {
      timestamp: new Date().toISOString(),
      metrics: this.analysis.navigationMetrics,
      bottlenecks: this.analysis.bottlenecks.length,
      optimizations: this.analysis.optimizations.length,
      insights: this.analysis.insights.length
    };
    
    const summaryPath = path.join(DATA_DIR, 'navigation-summary.json');
    fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
    
    console.log('✅ Navigation analysis saved');
  }
}

if (require.main === module) {
  const analyzer = new SmartNavigationAnalyzer();
  analyzer.run();
}

module.exports = SmartNavigationAnalyzer;