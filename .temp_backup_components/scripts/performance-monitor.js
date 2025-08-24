const https = require('https');
const fs = require('fs');
const path = require('path');

const SITE_URL = 'https://ziontechgroup.com';
const PAGES_TO_TEST = [
  '/',
  '/services',
  '/pricing',
  '/contact',
  '/about',
  '/ai-services',
  '/quantum-services',
  '/enhanced-services-showcase',
  '/revolutionary-2025-services-showcase'
];

async function performanceAudit() {
  console.log('🚀 Starting performance audit for ziontechgroup.com...');
  
  const results = {
    timestamp: new Date().toISOString(),
    summary: {},
    pages: [],
    recommendations: [],
    availability: {},
    buildInfo: await getBuildInfo()
  };

  // Test site availability and response times
  for (const page of PAGES_TO_TEST) {
    console.log(`📊 Testing page: ${page}`);
    
    const url = `${SITE_URL}${page}`;
    const pageResult = await testPagePerformance(url, page);
    results.pages.push(pageResult);
  }

  // Calculate summary statistics
  results.summary = calculateSummary(results.pages);
  
  // Test overall site availability
  results.availability = await testSiteAvailability();
  
  // Generate recommendations
  results.recommendations = generateRecommendations(results);

  // Save results
  const outputDir = path.join(__dirname, '../public/reports/performance');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const filename = `performance-audit-${new Date().toISOString().split('T')[0]}.json`;
  fs.writeFileSync(path.join(outputDir, filename), JSON.stringify(results, null, 2));
  fs.writeFileSync(path.join(outputDir, 'latest.json'), JSON.stringify(results, null, 2));

  // Generate HTML report
  generateHTMLReport(results, outputDir);

  console.log('✅ Performance audit completed!');
  console.log(`🌐 Site Availability: ${results.availability.status}`);
  console.log(`⚡ Average Response Time: ${results.summary.averageResponseTime}ms`);
  console.log(`📊 Pages Tested: ${results.summary.totalPagesAudited}`);
  console.log(`📈 Success Rate: ${results.summary.successRate}%`);
  console.log(`📊 Report saved to: ${outputDir}/${filename}`);

  return results;
}

async function testPagePerformance(url, pagePath) {
  const startTime = Date.now();
  
  return new Promise((resolve) => {
    const urlObj = new URL(url);
    
    const options = {
      hostname: urlObj.hostname,
      port: 443,
      path: urlObj.pathname + urlObj.search,
      method: 'GET',
      headers: {
        'User-Agent': 'ZionTechGroup-PerformanceMonitor/1.0'
      },
      timeout: 10000
    };

    const req = https.request(options, (res) => {
      let data = '';
      
      res.on('data', (chunk) => {
        data += chunk;
      });
      
      res.on('end', () => {
        const endTime = Date.now();
        const responseTime = endTime - startTime;
        
        const result = {
          url: pagePath,
          fullUrl: url,
          statusCode: res.statusCode,
          responseTime: responseTime,
          contentLength: data.length,
          headers: res.headers,
          metrics: analyzePageContent(data),
          timestamp: new Date().toISOString(),
          success: res.statusCode >= 200 && res.statusCode < 400
        };
        
        resolve(result);
      });
    });

    req.on('error', (error) => {
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      
      resolve({
        url: pagePath,
        fullUrl: url,
        statusCode: 0,
        responseTime: responseTime,
        contentLength: 0,
        headers: {},
        metrics: {},
        timestamp: new Date().toISOString(),
        success: false,
        error: error.message
      });
    });

    req.on('timeout', () => {
      req.destroy();
      const endTime = Date.now();
      const responseTime = endTime - startTime;
      
      resolve({
        url: pagePath,
        fullUrl: url,
        statusCode: 0,
        responseTime: responseTime,
        contentLength: 0,
        headers: {},
        metrics: {},
        timestamp: new Date().toISOString(),
        success: false,
        error: 'Request timeout'
      });
    });

    req.end();
  });
}

function analyzePageContent(html) {
  const metrics = {
    htmlSize: html.length,
    hasTitle: /<title[^>]*>([^<]+)<\/title>/i.test(html),
    hasMetaDescription: /<meta[^>]*name=["']description["'][^>]*>/i.test(html),
    hasMetaViewport: /<meta[^>]*name=["']viewport["'][^>]*>/i.test(html),
    imageCount: (html.match(/<img[^>]*>/gi) || []).length,
    scriptCount: (html.match(/<script[^>]*>/gi) || []).length,
    stylesheetCount: (html.match(/<link[^>]*rel=["']stylesheet["'][^>]*>/gi) || []).length,
    hasStructuredData: /application\/ld\+json/i.test(html),
    hasOpenGraph: /<meta[^>]*property=["']og:/i.test(html),
    hasCanonical: /<link[^>]*rel=["']canonical["'][^>]*>/i.test(html)
  };

  // Extract title
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
  if (titleMatch) {
    metrics.title = titleMatch[1];
    metrics.titleLength = titleMatch[1].length;
  }

  // Extract meta description
  const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["'][^>]*>/i);
  if (descMatch) {
    metrics.metaDescription = descMatch[1];
    metrics.metaDescriptionLength = descMatch[1].length;
  }

  return metrics;
}

async function testSiteAvailability() {
  const tests = [
    { name: 'Main Site', url: SITE_URL },
    { name: 'Services Page', url: `${SITE_URL}/services` },
    { name: 'Contact Page', url: `${SITE_URL}/contact` }
  ];

  const results = [];
  let totalResponseTime = 0;
  let successCount = 0;

  for (const test of tests) {
    const result = await testPagePerformance(test.url, test.name);
    results.push(result);
    totalResponseTime += result.responseTime;
    if (result.success) successCount++;
  }

  return {
    status: successCount === tests.length ? 'All Systems Operational' : 
            successCount > 0 ? 'Partial Service Available' : 'Service Unavailable',
    tests: results,
    averageResponseTime: Math.round(totalResponseTime / tests.length),
    uptime: Math.round((successCount / tests.length) * 100)
  };
}

function calculateSummary(pages) {
  const successful = pages.filter(p => p.success);
  const totalResponseTime = pages.reduce((sum, p) => sum + p.responseTime, 0);
  
  return {
    totalPagesAudited: pages.length,
    successfulPages: successful.length,
    failedPages: pages.length - successful.length,
    successRate: Math.round((successful.length / pages.length) * 100),
    averageResponseTime: Math.round(totalResponseTime / pages.length),
    fastestPage: pages.reduce((min, p) => p.responseTime < min.responseTime ? p : min),
    slowestPage: pages.reduce((max, p) => p.responseTime > max.responseTime ? p : max)
  };
}

async function getBuildInfo() {
  try {
    const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json'), 'utf8'));
    return {
      version: packageJson.version,
      name: packageJson.name,
      buildTimestamp: new Date().toISOString(),
      nodeVersion: process.version
    };
  } catch (error) {
    return {
      error: 'Could not read build info',
      buildTimestamp: new Date().toISOString(),
      nodeVersion: process.version
    };
  }
}

function generateRecommendations(results) {
  const recommendations = [];
  
  if (results.summary.successRate < 100) {
    recommendations.push({
      category: 'Availability',
      priority: 'High',
      issue: `${results.summary.failedPages} pages are not accessible`,
      solution: 'Check server status, DNS configuration, and ensure all pages are properly deployed'
    });
  }

  if (results.summary.averageResponseTime > 2000) {
    recommendations.push({
      category: 'Performance',
      priority: 'High',
      issue: `Average response time is ${results.summary.averageResponseTime}ms (>2s)`,
      solution: 'Optimize server response time, implement caching, consider CDN usage'
    });
  } else if (results.summary.averageResponseTime > 1000) {
    recommendations.push({
      category: 'Performance',
      priority: 'Medium',
      issue: `Average response time is ${results.summary.averageResponseTime}ms (>1s)`,
      solution: 'Consider optimizing server response time and implementing caching'
    });
  }

  // Check for SEO issues
  const pagesWithoutTitle = results.pages.filter(p => p.metrics && !p.metrics.hasTitle);
  if (pagesWithoutTitle.length > 0) {
    recommendations.push({
      category: 'SEO',
      priority: 'High',
      issue: `${pagesWithoutTitle.length} pages missing title tags`,
      solution: 'Add descriptive title tags to all pages'
    });
  }

  const pagesWithoutMetaDesc = results.pages.filter(p => p.metrics && !p.metrics.hasMetaDescription);
  if (pagesWithoutMetaDesc.length > 0) {
    recommendations.push({
      category: 'SEO',
      priority: 'Medium',
      issue: `${pagesWithoutMetaDesc.length} pages missing meta descriptions`,
      solution: 'Add unique meta descriptions to improve search engine visibility'
    });
  }

  return recommendations;
}

function generateHTMLReport(results, outputDir) {
  const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Performance Monitoring Report - Zion Tech Group</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background: #0a0a0a; color: #fff; }
        .container { max-width: 1200px; margin: 0 auto; }
        .header { text-align: center; margin-bottom: 40px; }
        .header h1 { color: #00bcd4; font-size: 2.5rem; margin-bottom: 10px; }
        .status-indicator { padding: 8px 16px; border-radius: 20px; font-weight: bold; margin: 10px 0; }
        .status-operational { background: #4caf50; color: white; }
        .status-partial { background: #ff9800; color: white; }
        .status-down { background: #f44336; color: white; }
        .summary { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 40px; }
        .metric-card { background: linear-gradient(135deg, #1a1a1a, #2a2a2a); padding: 20px; border-radius: 12px; text-align: center; border: 1px solid #333; }
        .metric-value { font-size: 2.5rem; font-weight: bold; margin-bottom: 10px; color: #00bcd4; }
        .metric-label { color: #ccc; font-size: 0.9rem; }
        .pages-grid { display: grid; gap: 20px; margin-bottom: 40px; }
        .page-card { background: linear-gradient(135deg, #1a1a1a, #2a2a2a); padding: 20px; border-radius: 12px; border: 1px solid #333; position: relative; }
        .page-title { color: #00bcd4; font-size: 1.2rem; margin-bottom: 15px; }
        .page-status { position: absolute; top: 20px; right: 20px; padding: 4px 12px; border-radius: 12px; font-size: 0.8rem; font-weight: bold; }
        .status-success { background: #4caf50; color: white; }
        .status-error { background: #f44336; color: white; }
        .page-metrics { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; margin-top: 15px; }
        .metric-item { background: #333; padding: 10px; border-radius: 6px; text-align: center; }
        .recommendations { background: linear-gradient(135deg, #1a1a1a, #2a2a2a); padding: 20px; border-radius: 12px; border: 1px solid #333; margin-bottom: 40px; }
        .recommendations h2 { color: #00bcd4; margin-bottom: 20px; }
        .recommendation { background: #333; padding: 15px; border-radius: 8px; margin-bottom: 15px; border-left: 4px solid #00bcd4; }
        .priority-high { border-left-color: #f44336; }
        .priority-medium { border-left-color: #ff9800; }
        .timestamp { text-align: center; color: #666; margin-top: 40px; }
        .build-info { background: linear-gradient(135deg, #1a1a1a, #2a2a2a); padding: 20px; border-radius: 12px; border: 1px solid #333; margin-bottom: 40px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>📊 Performance Monitoring Report</h1>
            <p>Zion Tech Group - ${new Date(results.timestamp).toLocaleDateString()}</p>
            <div class="status-indicator ${getStatusClass(results.availability.status)}">
                ${results.availability.status}
            </div>
        </div>

        <div class="build-info">
            <h2 style="color: #00bcd4; margin-bottom: 20px;">🔧 Build Information</h2>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
                <div><strong>Application:</strong> ${results.buildInfo.name || 'N/A'}</div>
                <div><strong>Version:</strong> ${results.buildInfo.version || 'N/A'}</div>
                <div><strong>Node Version:</strong> ${results.buildInfo.nodeVersion || 'N/A'}</div>
                <div><strong>Build Time:</strong> ${new Date(results.buildInfo.buildTimestamp).toLocaleString()}</div>
            </div>
        </div>

        <div class="summary">
            <div class="metric-card">
                <div class="metric-value">${results.summary.successRate}%</div>
                <div class="metric-label">Success Rate</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${results.summary.averageResponseTime}ms</div>
                <div class="metric-label">Avg Response Time</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${results.summary.totalPagesAudited}</div>
                <div class="metric-label">Pages Tested</div>
            </div>
            <div class="metric-card">
                <div class="metric-value">${results.availability.uptime}%</div>
                <div class="metric-label">Uptime</div>
            </div>
        </div>

        <h2 style="color: #00bcd4; margin-bottom: 20px;">📄 Page Details</h2>
        <div class="pages-grid">
            ${results.pages.map(page => `
                <div class="page-card">
                    <div class="page-status ${page.success ? 'status-success' : 'status-error'}">
                        ${page.success ? 'OK' : 'ERROR'}
                    </div>
                    <div class="page-title">${page.url}</div>
                    <div style="color: #ccc; margin-bottom: 15px;">
                        <strong>Status:</strong> ${page.statusCode || 'N/A'} | 
                        <strong>Response Time:</strong> ${page.responseTime}ms | 
                        <strong>Size:</strong> ${formatBytes(page.contentLength)}
                    </div>
                    ${page.metrics && page.metrics.title ? `<div style="color: #ccc; margin-bottom: 10px;"><strong>Title:</strong> ${page.metrics.title}</div>` : ''}
                    ${page.error ? `<div style="color: #f44336; margin-bottom: 10px;"><strong>Error:</strong> ${page.error}</div>` : ''}
                    ${page.metrics ? `
                        <div class="page-metrics">
                            <div class="metric-item">
                                <div style="color: ${page.metrics.hasTitle ? '#4caf50' : '#f44336'};">${page.metrics.hasTitle ? '✓' : '✗'}</div>
                                <div style="font-size: 0.8rem; color: #ccc;">Title Tag</div>
                            </div>
                            <div class="metric-item">
                                <div style="color: ${page.metrics.hasMetaDescription ? '#4caf50' : '#f44336'};">${page.metrics.hasMetaDescription ? '✓' : '✗'}</div>
                                <div style="font-size: 0.8rem; color: #ccc;">Meta Description</div>
                            </div>
                            <div class="metric-item">
                                <div style="color: #00bcd4;">${page.metrics.imageCount || 0}</div>
                                <div style="font-size: 0.8rem; color: #ccc;">Images</div>
                            </div>
                            <div class="metric-item">
                                <div style="color: ${page.metrics.hasOpenGraph ? '#4caf50' : '#f44336'};">${page.metrics.hasOpenGraph ? '✓' : '✗'}</div>
                                <div style="font-size: 0.8rem; color: #ccc;">Open Graph</div>
                            </div>
                        </div>
                    ` : ''}
                </div>
            `).join('')}
        </div>

        ${results.recommendations.length > 0 ? `
            <div class="recommendations">
                <h2>💡 Recommendations</h2>
                ${results.recommendations.map(rec => `
                    <div class="recommendation priority-${rec.priority.toLowerCase()}">
                        <h3 style="margin: 0 0 10px 0; color: #00bcd4;">${rec.category} - ${rec.priority} Priority</h3>
                        <p style="margin: 0 0 10px 0; font-weight: bold;">${rec.issue}</p>
                        <p style="margin: 0; color: #ccc;">${rec.solution}</p>
                    </div>
                `).join('')}
            </div>
        ` : ''}

        <div class="timestamp">
            Report generated on ${new Date(results.timestamp).toLocaleString()}<br>
            Next update: ${new Date(Date.now() + 3600000).toLocaleString()} (hourly monitoring)
        </div>
    </div>
</body>
</html>
  `;

  fs.writeFileSync(path.join(outputDir, 'index.html'), html);
}

function getStatusClass(status) {
  if (status.includes('Operational')) return 'status-operational';
  if (status.includes('Partial')) return 'status-partial';
  return 'status-down';
}

function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
}

// Run the audit
if (require.main === module) {
  performanceAudit().catch(console.error);
}

module.exports = { performanceAudit };