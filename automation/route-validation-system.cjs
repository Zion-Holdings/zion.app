#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

class RouteValidationSystem {
  constructor() {
    this.ROOT = process.cwd();
    this.PAGES_DIR = path.join(this.ROOT, 'pages');
    this.REPORT_DIR = path.join(this.ROOT, 'data', 'reports', 'route-validation');
    this.ensureDir(this.REPORT_DIR);
  }

  ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  }

  collectAllRoutes() {
    const routes = new Set();
    
    function walk(dir, routePrefix = '') {
      if (!fs.existsSync(dir)) return;
      
      const entries = fs.readdirSync(dir, { withFileTypes: true });
      
      // Check for index files
      const hasIndex = entries.some(e => 
        e.isFile() && /^(index)\.(tsx|jsx|ts|js)$/i.test(e.name)
      );
      
      if (hasIndex && routePrefix) {
        routes.add(routePrefix);
      }
      
      for (const entry of entries) {
        const full = path.join(dir, entry.name);
        
        if (entry.isDirectory()) {
          if (entry.name.startsWith('_') || entry.name.startsWith('[')) continue;
          
          const nextPrefix = path.posix.join(routePrefix || '/', entry.name)
            .replace(/\\/g, '/');
          walk(full, nextPrefix);
        } else if (entry.isFile()) {
          if (!/\.(tsx|jsx|ts|js)$/i.test(entry.name)) continue;
          
          const base = entry.name.replace(/\.(tsx|jsx|ts|js)$/i, '');
          if (base.startsWith('_') || base.startsWith('[')) continue;
          if (base === 'index') continue; // handled above
          
          const route = path.posix.join(routePrefix || '/', base)
            .replace(/\\/g, '/');
          routes.add(route);
        }
      }
    }
    
    walk(this.PAGES_DIR, '');
    routes.add('/'); // root index
    
    return Array.from(routes).sort();
  }

  validateRouteStructure() {
    const routes = this.collectAllRoutes();
    const issues = [];
    
    for (const route of routes) {
      const routePath = route === '/' ? 'index' : route.slice(1);
      const filePath = path.join(this.PAGES_DIR, routePath);
      
      if (route === '/') {
        // Root route should have index.tsx
        const indexFile = path.join(this.PAGES_DIR, 'index.tsx');
        if (!fs.existsSync(indexFile)) {
          issues.push({
            type: 'missing-root-index',
            route: '/',
            expected: 'pages/index.tsx',
            severity: 'critical'
          });
        }
      } else {
        // Check if route has corresponding file or directory
        const hasFile = fs.existsSync(filePath + '.tsx') || 
                       fs.existsSync(filePath + '.jsx') ||
                       fs.existsSync(filePath + '.ts') ||
                       fs.existsSync(filePath + '.js');
        
        const hasDir = fs.existsSync(filePath) && 
                      fs.statSync(filePath).isDirectory();
        
        if (!hasFile && !hasDir) {
          issues.push({
            type: 'orphaned-route',
            route,
            expected: `pages/${routePath}`,
            severity: 'warning'
          });
        }
      }
    }
    
    return { routes, issues };
  }

  generateRouteMap() {
    const routes = this.collectAllRoutes();
    const routeMap = {};
    
    for (const route of routes) {
      const routePath = route === '/' ? 'index' : route.slice(1);
      const filePath = path.join(this.PAGES_DIR, routePath);
      
      routeMap[route] = {
        filePath: path.relative(this.ROOT, filePath),
        exists: fs.existsSync(filePath),
        isDirectory: fs.existsSync(filePath) && fs.statSync(filePath).isDirectory(),
        hasIndex: fs.existsSync(path.join(filePath, 'index.tsx')) ||
                  fs.existsSync(path.join(filePath, 'index.jsx')) ||
                  fs.existsSync(path.join(filePath, 'index.ts')) ||
                  fs.existsSync(path.join(filePath, 'index.js'))
      };
    }
    
    return routeMap;
  }

  validateLinkReferences() {
    const routes = this.collectAllRoutes();
    const routeSet = new Set(routes);
    const issues = [];
    
    // Scan all source files for broken internal links
    const sourceDirs = ['pages', 'components', 'automation'];
    
    for (const dir of sourceDirs) {
      const fullDir = path.join(this.ROOT, dir);
      if (fs.existsSync(fullDir)) {
        this.walkDirForBrokenLinks(fullDir, routeSet, issues);
      }
    }
    
    return issues;
  }

  walkDirForBrokenLinks(dir, validRoutes, issues) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
        this.walkDirForBrokenLinks(full, validRoutes, issues);
      } else if (entry.isFile()) {
        if (/\.(tsx|ts|js|jsx|mdx|md)$/i.test(entry.name)) {
          this.checkFileForBrokenLinks(full, validRoutes, issues);
        }
      }
    }
  }

  checkFileForBrokenLinks(filePath, validRoutes, issues) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Extract internal links (starting with /)
      const internalLinkRegex = /href\s*=\s*(?:"([^"]+)"|'([^']+)'|\{\s*`([^`]+)`\s*\}|\{\s*"([^"]+)"\s*\}|\{\s*'([^']+)'\s*\})/g;
      let match;
      
      while ((match = internalLinkRegex.exec(content)) !== null) {
        const link = match[1] || match[2] || match[3] || match[4] || match[5];
        
        if (link && link.startsWith('/')) {
          const normalizedLink = link.replace(/\/$/, '');
          
          if (!validRoutes.has(normalizedLink)) {
            issues.push({
              type: 'broken-internal-link',
              file: path.relative(this.ROOT, filePath),
              brokenLink: normalizedLink,
              severity: 'high',
              suggestion: this.suggestRouteFix(normalizedLink, validRoutes)
            });
          }
        }
      }
    } catch (error) {
      console.warn(`Warning: Could not read file ${filePath}:`, error.message);
    }
  }

  suggestRouteFix(brokenLink, validRoutes) {
    // Try common variations
    const variations = [
      brokenLink.replace(/\/$/, ''),
      brokenLink + '/index',
      brokenLink.replace(/\/index$/, ''),
      brokenLink.replace(/\/$/, '') + '/index'
    ];
    
    for (const variation of variations) {
      if (validRoutes.has(variation)) {
        return variation;
      }
    }
    
    return null;
  }

  async run() {
    console.log('🔍 Starting Route Validation System...');
    
    const { routes, issues } = this.validateRouteStructure();
    const routeMap = this.generateRouteMap();
    const linkIssues = this.validateLinkReferences();
    
    const allIssues = [...issues, ...linkIssues];
    
    const report = {
      generatedAt: new Date().toISOString(),
      summary: {
        totalRoutes: routes.length,
        issuesFound: allIssues.length,
        criticalIssues: allIssues.filter(i => i.severity === 'critical').length,
        warnings: allIssues.filter(i => i.severity === 'warning').length,
        highPriorityIssues: allIssues.filter(i => i.severity === 'high').length
      },
      routes: routeMap,
      issues: allIssues,
      recommendations: this.generateRecommendations(allIssues, routeMap)
    };
    
    // Save report
    const filename = `route-validation-${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
    const filepath = path.join(this.REPORT_DIR, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(report, null, 2));
    fs.writeFileSync(path.join(this.REPORT_DIR, 'latest.json'), JSON.stringify(report, null, 2));
    
    // Print summary
    console.log(`📊 Route validation complete!`);
    console.log(`📍 Total routes: ${routes.length}`);
    console.log(`🚨 Issues found: ${allIssues.length}`);
    console.log(`🔴 Critical: ${report.summary.criticalIssues}`);
    console.log(`🟡 High: ${report.summary.highPriorityIssues}`);
    console.log(`🟠 Warnings: ${report.summary.warnings}`);
    console.log(`📄 Report saved to: ${filepath}`);
    
    if (allIssues.length > 0) {
      console.log('\n🚨 Issues found:');
      allIssues.forEach(issue => {
        const icon = issue.severity === 'critical' ? '🔴' : 
                    issue.severity === 'high' ? '🟡' : '🟠';
        console.log(`  ${icon} ${issue.type}: ${issue.brokenLink || issue.route}`);
        if (issue.suggestion) {
          console.log(`     💡 Suggestion: ${issue.suggestion}`);
        }
      });
    }
    
    return report;
  }

  generateRecommendations(issues, routeMap) {
    const recommendations = [];
    
    for (const issue of issues) {
      switch (issue.type) {
        case 'missing-root-index':
          recommendations.push({
            action: 'create-file',
            file: 'pages/index.tsx',
            description: 'Create root index page for homepage',
            priority: 'critical'
          });
          break;
          
        case 'orphaned-route':
          recommendations.push({
            action: 'create-page',
            route: issue.route,
            description: `Create page component for route ${issue.route}`,
            priority: 'medium'
          });
          break;
          
        case 'broken-internal-link':
          if (issue.suggestion) {
            recommendations.push({
              action: 'update-link',
              file: issue.file,
              oldLink: issue.brokenLink,
              newLink: issue.suggestion,
              description: `Fix broken internal link in ${issue.file}`,
              priority: 'high'
            });
          } else {
            recommendations.push({
              action: 'create-page',
              route: issue.brokenLink,
              description: `Create missing page for broken link ${issue.brokenLink}`,
              priority: 'high'
            });
          }
          break;
      }
    }
    
    return recommendations;
  }
}

// Run if called directly
if (require.main === module) {
  const validator = new RouteValidationSystem();
  validator.run().catch(console.error);
}

module.exports = RouteValidationSystem;