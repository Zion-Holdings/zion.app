#!/usr/bin/env node

/**
 * Navigation Health Monitor
 * Continuously monitors navigation patterns and reports issues
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const DATA_DIR = path.join(ROOT, 'data', 'navigation');
const PAGES_DIR = path.join(ROOT, 'pages');
const COMPONENTS_DIR = path.join(ROOT, 'components');

class NavigationHealthMonitor {
  constructor() {
    this.healthData = {
      timestamp: new Date().toISOString(),
      overallHealth: 'unknown',
      issues: [],
      warnings: [],
      recommendations: [],
      metrics: {}
    };
    this.ensureDirectories();
  }

  ensureDirectories() {
    if (!fs.existsSync(DATA_DIR)) {
      fs.mkdirSync(DATA_DIR, { recursive: true });
    }
  }

  async run() {
    console.log('💚 Navigation Health Monitor: Starting health check...');
    
    try {
      await this.scanNavigationStructure();
      await this.checkNavigationHealth();
      await this.analyzeNavigationPatterns();
      await this.generateHealthReport();
      await this.saveHealthData();
      
      console.log('✅ Navigation Health Monitor: Completed successfully');
    } catch (error) {
      console.error('❌ Navigation Health Monitor Error:', error);
    }
  }

  async scanNavigationStructure() {
    console.log('🔍 Scanning navigation structure...');
    
    const pages = this.scanPages();
    const navigationGraph = this.buildNavigationGraph(pages);
    
    this.healthData.metrics = {
      totalPages: pages.length,
      navigationDepth: this.calculateNavigationDepth(navigationGraph),
      crossLinks: this.countCrossLinks(navigationGraph),
      orphanPages: this.findOrphanPages(navigationGraph),
      hubPages: this.findHubPages(navigationGraph),
      brokenLinks: this.findBrokenLinks(navigationGraph, pages),
      navigationComplexity: this.calculateNavigationComplexity(navigationGraph)
    };
    
    console.log(`📊 Scanned ${pages.length} pages for navigation health`);
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
    if (route.startsWith('/main')) return 'main';
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

  findBrokenLinks(graph, pages) {
    const brokenLinks = [];
    const validRoutes = new Set(pages.map(p => p.route));
    
    for (const [route, node] of Object.entries(graph)) {
      for (const link of node.links) {
        if (!validRoutes.has(link)) {
          brokenLinks.push({
            source: route,
            brokenLink: link,
            issue: 'Link points to non-existent page'
          });
        }
      }
    }
    
    return brokenLinks;
  }

  calculateNavigationComplexity(graph) {
    const totalLinks = Object.values(graph).reduce((sum, node) => sum + node.outgoing, 0);
    const totalPages = Object.keys(graph).length;
    
    return {
      averageLinksPerPage: totalLinks / totalPages,
      linkDensity: totalLinks / (totalPages * (totalPages - 1)),
      complexity: totalLinks > totalPages * 3 ? 'high' : totalLinks > totalPages * 2 ? 'medium' : 'low'
    };
  }

  async checkNavigationHealth() {
    console.log('💚 Checking navigation health...');
    
    const metrics = this.healthData.metrics;
    
    // Check for critical issues
    if (metrics.brokenLinks.length > 0) {
      this.healthData.issues.push({
        type: 'critical',
        message: `${metrics.brokenLinks.length} broken internal links detected`,
        impact: 'Users will encounter 404 errors',
        recommendation: 'Fix broken links or remove them'
      });
    }
    
    if (metrics.orphanPages.length > 5) {
      this.healthData.issues.push({
        type: 'critical',
        message: `${metrics.orphanPages.length} orphan pages detected`,
        impact: 'Pages are not discoverable through navigation',
        recommendation: 'Add incoming links or include in navigation menus'
      });
    }
    
    // Check for warnings
    if (metrics.navigationDepth > 4) {
      this.healthData.warnings.push({
        type: 'warning',
        message: `Navigation depth is ${metrics.navigationDepth} levels`,
        impact: 'Users may get lost in deep navigation',
        recommendation: 'Consider flattening navigation structure'
      });
    }
    
    if (metrics.hubPages.length > 0) {
      const overwhelmingPages = metrics.hubPages.filter(hub => hub.outgoingLinks > 10);
      if (overwhelmingPages.length > 0) {
        this.healthData.warnings.push({
          type: 'warning',
          message: `${overwhelmingPages.length} pages have too many outgoing links`,
          impact: 'Users may feel overwhelmed by navigation options',
          recommendation: 'Group links into categories or create navigation hubs'
        });
      }
    }
    
    // Check navigation complexity
    if (metrics.navigationComplexity.complexity === 'high') {
      this.healthData.warnings.push({
        type: 'warning',
        message: 'Navigation complexity is high',
        impact: 'Users may struggle to find what they need',
        recommendation: 'Simplify navigation structure and reduce cross-linking'
      });
    }
    
    console.log(`💚 Health check completed: ${this.healthData.issues.length} issues, ${this.healthData.warnings.length} warnings`);
  }

  async analyzeNavigationPatterns() {
    console.log('🔍 Analyzing navigation patterns...');
    
    const metrics = this.healthData.metrics;
    
    // Generate recommendations based on analysis
    if (metrics.crossLinks < 10) {
      this.healthData.recommendations.push({
        type: 'improvement',
        message: 'Limited cross-category linking',
        benefit: 'Users can discover related content more easily',
        action: 'Add more cross-references between related pages'
      });
    }
    
    if (metrics.navigationDepth <= 3) {
      this.healthData.recommendations.push({
        type: 'positive',
        message: 'Navigation depth is optimal',
        benefit: 'Good user experience and easy navigation',
        action: 'Maintain current navigation structure'
      });
    }
    
    if (metrics.totalPages > 50 && metrics.orphanPages.length < 3) {
      this.healthData.recommendations.push({
        type: 'positive',
        message: 'Good navigation coverage for large site',
        benefit: 'Most pages are discoverable',
        action: 'Continue maintaining navigation structure'
      });
    }
    
    console.log(`🔍 Pattern analysis completed: ${this.healthData.recommendations.length} recommendations`);
  }

  async generateHealthReport() {
    console.log('📊 Generating health report...');
    
    // Calculate overall health score
    const issues = this.healthData.issues.length;
    const warnings = this.healthData.warnings.length;
    
    if (issues === 0 && warnings === 0) {
      this.healthData.overallHealth = 'excellent';
    } else if (issues === 0 && warnings <= 2) {
      this.healthData.overallHealth = 'good';
    } else if (issues <= 1 && warnings <= 5) {
      this.healthData.overallHealth = 'fair';
    } else if (issues <= 3 && warnings <= 10) {
      this.healthData.overallHealth = 'poor';
    } else {
      this.healthData.overallHealth = 'critical';
    }
    
    // Generate summary
    this.healthData.summary = {
      overallHealth: this.healthData.overallHealth,
      totalIssues: issues,
      totalWarnings: warnings,
      totalRecommendations: this.healthData.recommendations.length,
      healthScore: this.calculateHealthScore()
    };
    
    console.log(`📊 Health report generated: ${this.healthData.overallHealth} health status`);
  }

  calculateHealthScore() {
    const metrics = this.healthData.metrics;
    let score = 100;
    
    // Deduct points for issues
    score -= this.healthData.issues.length * 20;
    score -= this.healthData.warnings.length * 5;
    
    // Deduct points for poor metrics
    if (metrics.navigationDepth > 4) score -= 10;
    if (metrics.brokenLinks.length > 0) score -= 15;
    if (metrics.orphanPages.length > 5) score -= 10;
    
    // Add points for good metrics
    if (metrics.crossLinks > 20) score += 5;
    if (metrics.navigationDepth <= 3) score += 10;
    
    return Math.max(0, Math.min(100, score));
  }

  async saveHealthData() {
    console.log('💾 Saving health data...');
    
    // Save detailed health report
    const healthPath = path.join(DATA_DIR, 'navigation-health.json');
    fs.writeFileSync(healthPath, JSON.stringify(this.healthData, null, 2));
    
    // Save summary report
    const summary = {
      timestamp: this.healthData.timestamp,
      overallHealth: this.healthData.overallHealth,
      healthScore: this.healthData.summary.healthScore,
      issues: this.healthData.issues.length,
      warnings: this.healthData.warnings.length,
      recommendations: this.healthData.recommendations.length,
      metrics: this.healthData.metrics
    };
    
    const summaryPath = path.join(DATA_DIR, 'navigation-health-summary.json');
    fs.writeFileSync(summaryPath, JSON.stringify(summary, null, 2));
    
    // Generate human-readable report
    await this.generateHumanReadableReport();
    
    console.log('✅ Health data saved');
  }

  async generateHumanReadableReport() {
    console.log('📝 Generating human-readable report...');
    
    const report = `# Navigation Health Report

Generated: ${this.healthData.timestamp}

## Overall Health: ${this.healthData.overallHealth.toUpperCase()}
Health Score: ${this.healthData.summary.healthScore}/100

## Summary
- Total Issues: ${this.healthData.issues.length}
- Total Warnings: ${this.healthData.warnings.length}
- Total Recommendations: ${this.healthData.recommendations.length}

## Critical Issues
${this.healthData.issues.map(issue => `- **${issue.type.toUpperCase()}**: ${issue.message}\n  - Impact: ${issue.impact}\n  - Recommendation: ${issue.recommendation}`).join('\n\n')}

## Warnings
${this.healthData.warnings.map(warning => `- **${warning.type.toUpperCase()}**: ${warning.message}\n  - Impact: ${warning.impact}\n  - Recommendation: ${warning.recommendation}`).join('\n\n')}

## Recommendations
${this.healthData.recommendations.map(rec => `- **${rec.type.toUpperCase()}**: ${rec.message}\n  - Benefit: ${rec.benefit}\n  - Action: ${rec.action}`).join('\n\n')}

## Metrics
- Total Pages: ${this.healthData.metrics.totalPages}
- Navigation Depth: ${this.healthData.metrics.navigationDepth}
- Cross Links: ${this.healthData.metrics.crossLinks}
- Orphan Pages: ${this.healthData.metrics.orphanPages.length}
- Broken Links: ${this.healthData.metrics.brokenLinks.length}
- Navigation Complexity: ${this.healthData.metrics.navigationComplexity.complexity}

## Next Steps
1. Address critical issues first
2. Review and fix warnings
3. Implement recommendations for improvements
4. Monitor navigation health regularly
`;

    const reportPath = path.join(DATA_DIR, 'navigation-health-report.md');
    fs.writeFileSync(reportPath, report);
    
    console.log('✅ Human-readable report generated');
  }
}

// Run the monitor
if (require.main === module) {
  const monitor = new NavigationHealthMonitor();
  monitor.run();
}

module.exports = NavigationHealthMonitor;