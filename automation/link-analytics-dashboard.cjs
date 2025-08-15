#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

class LinkAnalyticsDashboard {
  constructor() {
    this.ROOT = process.cwd();
    this.REPORTS_DIR = path.join(this.ROOT, 'data', 'reports');
    this.DASHBOARD_DIR = path.join(this.ROOT, 'data', 'reports', 'dashboard');
    this.ensureDir(this.DASHBOARD_DIR);
  }

  ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  }

  async generateAnalytics() {
    console.log('📊 Generating Link Analytics Dashboard...');
    
    const analytics = {
      generatedAt: new Date().toISOString(),
      summary: await this.generateSummary(),
      trends: await this.generateTrends(),
      performance: await this.generatePerformanceMetrics(),
      recommendations: await this.generateRecommendations(),
      topIssues: await this.identifyTopIssues(),
      healthScore: await this.calculateHealthScore()
    };

    // Save analytics
    const filename = `link-analytics-${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
    const filepath = path.join(this.DASHBOARD_DIR, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(analytics, null, 2));
    fs.writeFileSync(path.join(this.DASHBOARD_DIR, 'latest.json'), JSON.stringify(analytics, null, 2));
    
    // Generate HTML dashboard
    await this.generateHTMLDashboard(analytics);
    
    console.log(`✅ Analytics dashboard generated: ${filepath}`);
    return analytics;
  }

  async generateSummary() {
    const summary = {
      totalReports: 0,
      averageHealthScore: 0,
      totalLinksChecked: 0,
      totalIssuesFound: 0,
      improvementTrend: 'stable'
    };

    try {
      // Get link health summary
      const healthPath = path.join(this.REPORTS_DIR, 'link-health', 'latest.json');
      if (fs.existsSync(healthPath)) {
        const healthData = JSON.parse(fs.readFileSync(healthPath, 'utf8'));
        summary.totalLinksChecked = healthData.summary.totalLinks;
        summary.averageHealthScore = (healthData.summary.healthyLinks / healthData.summary.totalLinks) * 100;
      }

      // Get route validation summary
      const routePath = path.join(this.REPORTS_DIR, 'route-validation', 'latest.json');
      if (fs.existsSync(routePath)) {
        const routeData = JSON.parse(fs.readFileSync(routePath, 'utf8'));
        summary.totalIssuesFound = routeData.summary.issuesFound;
      }

      // Count total reports
      const dirs = ['link-health', 'route-validation', 'github-links', 'link-fixes'];
      for (const dir of dirs) {
        const fullDir = path.join(this.REPORTS_DIR, dir);
        if (fs.existsSync(fullDir)) {
          const files = fs.readdirSync(fullDir).filter(f => f.endsWith('.json'));
          summary.totalReports += files.length;
        }
      }

    } catch (error) {
      console.warn('Warning: Could not generate summary:', error.message);
    }

    return summary;
  }

  async generateTrends() {
    const trends = {
      linkHealth: [],
      issueCount: [],
      fixSuccess: []
    };

    try {
      // Analyze link health trends over time
      const healthDir = path.join(this.REPORTS_DIR, 'link-health');
      if (fs.existsSync(healthDir)) {
        const files = fs.readdirSync(healthDir)
          .filter(f => f.startsWith('link-health-report-'))
          .sort()
          .slice(-10); // Last 10 reports

        for (const file of files) {
          const data = JSON.parse(fs.readFileSync(path.join(healthDir, file), 'utf8'));
          const healthScore = (data.summary.healthyLinks / data.summary.totalLinks) * 100;
          
          trends.linkHealth.push({
            date: data.generatedAt,
            score: healthScore,
            brokenLinks: data.summary.brokenLinks
          });
        }
      }

      // Analyze issue count trends
      const routeDir = path.join(this.REPORTS_DIR, 'route-validation');
      if (fs.existsSync(routeDir)) {
        const files = fs.readdirSync(routeDir)
          .filter(f => f.startsWith('route-validation-'))
          .sort()
          .slice(-10);

        for (const file of files) {
          const data = JSON.parse(fs.readFileSync(path.join(routeDir, file), 'utf8'));
          
          trends.issueCount.push({
            date: data.generatedAt,
            totalIssues: data.summary.issuesFound,
            criticalIssues: data.summary.criticalIssues
          });
        }
      }

    } catch (error) {
      console.warn('Warning: Could not generate trends:', error.message);
    }

    return trends;
  }

  async generatePerformanceMetrics() {
    const metrics = {
      responseTime: {},
      successRate: {},
      errorDistribution: {},
      linkTypes: {}
    };

    try {
      const healthPath = path.join(this.REPORTS_DIR, 'link-health', 'latest.json');
      if (fs.existsSync(healthPath)) {
        const healthData = JSON.parse(fs.readFileSync(healthPath, 'utf8'));
        
        // Calculate success rate
        metrics.successRate = {
          overall: (healthData.summary.healthyLinks / healthData.summary.totalLinks) * 100,
          broken: (healthData.summary.brokenLinks / healthData.summary.totalLinks) * 100
        };

        // Analyze error distribution
        const errorTypes = {};
        for (const [url, data] of healthData.brokenLinks) {
          const errorType = data.statusCode ? `HTTP ${data.statusCode}` : (data.error || 'Unknown');
          errorTypes[errorType] = (errorTypes[errorType] || 0) + 1;
        }
        metrics.errorDistribution = errorTypes;

        // Analyze link types
        const linkTypes = {};
        for (const [url, data] of healthData.allLinks) {
          const domain = new URL(url).hostname;
          linkTypes[domain] = (linkTypes[domain] || 0) + 1;
        }
        metrics.linkTypes = linkTypes;
      }

    } catch (error) {
      console.warn('Warning: Could not generate performance metrics:', error.message);
    }

    return metrics;
  }

  async generateRecommendations() {
    const recommendations = [];

    try {
      // Get current health status
      const healthPath = path.join(this.REPORTS_DIR, 'link-health', 'latest.json');
      const routePath = path.join(this.REPORTS_DIR, 'route-validation', 'latest.json');

      if (fs.existsSync(healthPath)) {
        const healthData = JSON.parse(fs.readFileSync(healthPath, 'utf8'));
        
        if (healthData.summary.brokenLinks > 0) {
          recommendations.push({
            type: 'immediate',
            action: 'Run auto-fix process',
            description: `Found ${healthData.summary.brokenLinks} broken links that can be automatically fixed`,
            priority: 'high'
          });
        }

        if (healthData.summary.brokenLinks > 5) {
          recommendations.push({
            type: 'monitoring',
            action: 'Increase monitoring frequency',
            description: 'High number of broken links suggests need for more frequent monitoring',
            priority: 'medium'
          });
        }
      }

      if (fs.existsSync(routePath)) {
        const routeData = JSON.parse(fs.readFileSync(routePath, 'utf8'));
        
        if (routeData.summary.issuesFound > 20) {
          recommendations.push({
            type: 'maintenance',
            action: 'Review internal routing structure',
            description: `Found ${routeData.summary.issuesFound} internal routing issues that need attention`,
            priority: 'medium'
          });
        }
      }

      // Add general recommendations
      recommendations.push({
        type: 'prevention',
        action: 'Set up scheduled monitoring',
        description: 'Implement automated link health monitoring to prevent future issues',
        priority: 'low'
      });

    } catch (error) {
      console.warn('Warning: Could not generate recommendations:', error.message);
    }

    return recommendations;
  }

  async identifyTopIssues() {
    const topIssues = [];

    try {
      const healthPath = path.join(this.REPORTS_DIR, 'link-health', 'latest.json');
      if (fs.existsSync(healthPath)) {
        const healthData = JSON.parse(fs.readFileSync(healthPath, 'utf8'));
        
        // Group issues by type
        const issueGroups = {};
        for (const [url, data] of healthData.brokenLinks) {
          const issueType = data.statusCode ? `HTTP ${data.statusCode}` : (data.error || 'Unknown');
          if (!issueGroups[issueType]) {
            issueGroups[issueType] = [];
          }
          issueGroups[issueType].push({ url, data });
        }

        // Sort by frequency
        const sortedIssues = Object.entries(issueGroups)
          .sort(([,a], [,b]) => b.length - a.length)
          .slice(0, 5);

        for (const [issueType, issues] of sortedIssues) {
          topIssues.push({
            type: issueType,
            count: issues.length,
            examples: issues.slice(0, 3).map(i => i.url),
            percentage: (issues.length / healthData.summary.brokenLinks) * 100
          });
        }
      }

    } catch (error) {
      console.warn('Warning: Could not identify top issues:', error.message);
    }

    return topIssues;
  }

  async calculateHealthScore() {
    let score = 100;

    try {
      const healthPath = path.join(this.REPORTS_DIR, 'link-health', 'latest.json');
      const routePath = path.join(this.REPORTS_DIR, 'route-validation', 'latest.json');

      if (fs.existsSync(healthPath)) {
        const healthData = JSON.parse(fs.readFileSync(healthPath, 'utf8'));
        const linkHealthScore = (healthData.summary.healthyLinks / healthData.summary.totalLinks) * 100;
        score = score * 0.7 + linkHealthScore * 0.3; // 70% weight for link health
      }

      if (fs.existsSync(routePath)) {
        const routeData = JSON.parse(fs.readFileSync(routePath, 'utf8'));
        const routeHealthScore = Math.max(0, 100 - (routeData.summary.issuesFound * 2)); // Deduct 2 points per issue
        score = score * 0.8 + routeHealthScore * 0.2; // 20% weight for route health
      }

    } catch (error) {
      console.warn('Warning: Could not calculate health score:', error.message);
    }

    return Math.round(Math.max(0, Math.min(100, score)));
  }

  async generateHTMLDashboard(analytics) {
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Link Health Analytics Dashboard</title>
    <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .metrics-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px; margin-bottom: 20px; }
        .metric-card { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .metric-value { font-size: 2em; font-weight: bold; color: #2563eb; }
        .metric-label { color: #6b7280; margin-top: 5px; }
        .chart-container { background: white; padding: 20px; border-radius: 8px; margin-bottom: 20px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .health-score { text-align: center; font-size: 4em; font-weight: bold; color: #059669; }
        .recommendations { background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1); }
        .recommendation { padding: 10px; margin: 10px 0; border-left: 4px solid #2563eb; background: #f8fafc; }
        .priority-high { border-left-color: #dc2626; }
        .priority-medium { border-left-color: #d97706; }
        .priority-low { border-left-color: #059669; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🔗 Link Health Analytics Dashboard</h1>
            <p>Generated: ${new Date(analytics.generatedAt).toLocaleString()}</p>
        </div>

        <div class="metrics-grid">
            <div class="metric-card">
                <div class="metric-value">${analytics.healthScore}</div>
                <div class="metric-label">Overall Health Score</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${analytics.summary.totalLinksChecked}</div>
                <div class="metric-label">Total Links Checked</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${analytics.summary.totalIssuesFound}</div>
                <div class="metric-label">Issues Found</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${analytics.summary.averageHealthScore.toFixed(1)}%</div>
                <div class="metric-label">Link Health Rate</div>
            </div>
        </div>

        <div class="chart-container">
            <h3>Link Health Trends</h3>
            <canvas id="healthChart" width="400" height="200"></canvas>
        </div>

        <div class="chart-container">
            <h3>Error Distribution</h3>
            <canvas id="errorChart" width="400" height="200"></canvas>
        </div>

        <div class="recommendations">
            <h3>📋 Recommendations</h3>
            ${analytics.recommendations.map(rec => `
                <div class="recommendation priority-${rec.priority}">
                    <strong>${rec.action}</strong><br>
                    ${rec.description}<br>
                    <small>Priority: ${rec.priority}</small>
                </div>
            `).join('')}
        </div>
    </div>

    <script>
        // Health Trends Chart
        const healthCtx = document.getElementById('healthChart').getContext('2d');
        new Chart(healthCtx, {
            type: 'line',
            data: {
                labels: ${JSON.stringify(analytics.trends.linkHealth.map(t => new Date(t.date).toLocaleDateString()))},
                datasets: [{
                    label: 'Health Score (%)',
                    data: ${JSON.stringify(analytics.trends.linkHealth.map(t => t.score))},
                    borderColor: '#2563eb',
                    backgroundColor: 'rgba(37, 99, 235, 0.1)',
                    tension: 0.1
                }]
            },
            options: {
                responsive: true,
                scales: {
                    y: { beginAtZero: true, max: 100 }
                }
            }
        });

        // Error Distribution Chart
        const errorCtx = document.getElementById('errorChart').getContext('2d');
        new Chart(errorCtx, {
            type: 'doughnut',
            data: {
                labels: ${JSON.stringify(Object.keys(analytics.performance.errorDistribution))},
                datasets: [{
                    data: ${JSON.stringify(Object.values(analytics.performance.errorDistribution))},
                    backgroundColor: ['#dc2626', '#d97706', '#059669', '#2563eb', '#7c3aed']
                }]
            },
            options: {
                responsive: true,
                plugins: {
                    legend: { position: 'bottom' }
                }
            }
        });
    </script>
</body>
</html>`;

    const htmlPath = path.join(this.DASHBOARD_DIR, 'dashboard.html');
    fs.writeFileSync(htmlPath, html);
    
    console.log(`📊 HTML dashboard generated: ${htmlPath}`);
  }

  async run() {
    try {
      await this.generateAnalytics();
    } catch (error) {
      console.error('❌ Error generating analytics:', error.message);
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const dashboard = new LinkAnalyticsDashboard();
  dashboard.run().catch(console.error);
}

module.exports = LinkAnalyticsDashboard;