#!/usr/bin/env node

/**
 * ChunkLoadError Monitoring Script
 * Monitors and reports chunk loading errors from various sources
 */

const fs = require('fs');
const path = require('path');

class ChunkErrorMonitor {
  constructor() {
    this.errors = [];
    this.startTime = Date.now();
    this.reportPath = path.join(process.cwd(), 'chunk-error-report.json');
  }

  // Analyze build output for potential chunk issues
  analyzeBuildOutput() {
    const buildReportPath = path.join(process.cwd(), '.next', 'build-manifest.json');
    const staticPath = path.join(process.cwd(), '.next', 'static');
    
    const issues = [];
    
    try {
      // Check if build manifest exists
      if (fs.existsSync(buildReportPath)) {
        const buildManifest = JSON.parse(fs.readFileSync(buildReportPath, 'utf8'));
        
        // Analyze chunk sizes
        const pages = buildManifest.pages || {};
        Object.entries(pages).forEach(([page, chunks]) => {
          if (Array.isArray(chunks)) {
            chunks.forEach(chunk => {
              const chunkPath = path.join(staticPath, 'chunks', chunk);
              if (fs.existsSync(chunkPath)) {
                const stats = fs.statSync(chunkPath);
                const sizeKB = Math.round(stats.size / 1024);
                
                if (sizeKB > 250) {
                  issues.push({
                    type: 'large-chunk',
                    page,
                    chunk,
                    sizeKB,
                    severity: sizeKB > 500 ? 'high' : 'medium',
                    recommendation: 'Consider code splitting or lazy loading'
                  });
                }
              }
            });
          }
        });
      }
      
      // Check for vendor chunks
      const chunksDir = path.join(staticPath, 'chunks');
      if (fs.existsSync(chunksDir)) {
        const chunkFiles = fs.readdirSync(chunksDir);
        const vendorChunks = chunkFiles.filter(file => file.includes('vendors-'));
        
        vendorChunks.forEach(vendorChunk => {
          const chunkPath = path.join(chunksDir, vendorChunk);
          const stats = fs.statSync(chunkPath);
          const sizeKB = Math.round(stats.size / 1024);
          
          if (sizeKB > 200) {
            issues.push({
              type: 'large-vendor-chunk',
              chunk: vendorChunk,
              sizeKB,
              severity: sizeKB > 400 ? 'high' : 'medium',
              recommendation: 'Consider optimizing vendor bundle splitting'
            });
          }
        });
      }
      
    } catch (error) {
      issues.push({
        type: 'analysis-error',
        error: error.message,
        severity: 'low'
      });
    }
    
    return issues;
  }

  // Check Next.js configuration for chunk-related settings
  analyzeNextConfig() {
    const configPath = path.join(process.cwd(), 'next.config.js');
    const issues = [];
    
    try {
      if (fs.existsSync(configPath)) {
        const configContent = fs.readFileSync(configPath, 'utf8');
        
        // Check for problematic configurations
        const checks = [
          {
            pattern: /maxAsyncRequests:\s*(\d+)/,
            check: (match) => {
              const value = parseInt(match[1]);
              return value > 30 ? {
                type: 'config-warning',
                setting: 'maxAsyncRequests',
                value,
                severity: 'medium',
                recommendation: 'Consider reducing maxAsyncRequests to prevent too many concurrent chunk requests'
              } : null;
            }
          },
          {
            pattern: /maxSize:\s*(\d+)/g,
            check: (match) => {
              const value = parseInt(match[1]);
              return value > 250000 ? {
                type: 'config-warning',
                setting: 'maxSize',
                value,
                severity: 'low',
                recommendation: 'Large chunks may cause loading issues on slow connections'
              } : null;
            }
          }
        ];
        
        checks.forEach(({ pattern, check }) => {
          let match;
          while ((match = pattern.exec(configContent)) !== null) {
            const issue = check(match);
            if (issue) {
              issues.push(issue);
            }
          }
        });
      }
    } catch (error) {
      issues.push({
        type: 'config-analysis-error',
        error: error.message,
        severity: 'low'
      });
    }
    
    return issues;
  }

  // Generate recommendations based on analysis
  generateRecommendations(buildIssues, configIssues) {
    const recommendations = [];
    
    // High priority recommendations
    const highSeverityIssues = [...buildIssues, ...configIssues]
      .filter(issue => issue.severity === 'high');
    
    if (highSeverityIssues.length > 0) {
      recommendations.push({
        priority: 'high',
        title: 'Critical Chunk Size Issues',
        description: `Found ${highSeverityIssues.length} high-severity chunk issues that may cause ChunkLoadErrors`,
        actions: [
          'Implement dynamic imports for large components',
          'Split vendor bundles more granularly',
          'Consider lazy loading for non-critical features'
        ]
      });
    }
    
    // Medium priority recommendations
    const mediumSeverityIssues = [...buildIssues, ...configIssues]
      .filter(issue => issue.severity === 'medium');
    
    if (mediumSeverityIssues.length > 0) {
      recommendations.push({
        priority: 'medium',
        title: 'Chunk Optimization Opportunities',
        description: `Found ${mediumSeverityIssues.length} optimization opportunities`,
        actions: [
          'Review webpack splitChunks configuration',
          'Optimize bundle splitting strategy',
          'Consider preloading critical chunks'
        ]
      });
    }
    
    // General recommendations
    recommendations.push({
      priority: 'low',
      title: 'Preventive Measures',
      description: 'General recommendations to prevent ChunkLoadErrors',
      actions: [
        'Implement proper error boundaries',
        'Add retry logic for failed chunk loads',
        'Monitor chunk loading performance',
        'Test on slow network connections',
        'Implement service worker for caching'
      ]
    });
    
    return recommendations;
  }

  // Generate comprehensive report
  generateReport() {
    console.log('🔍 Analyzing chunk configuration and build output...');
    
    const buildIssues = this.analyzeBuildOutput();
    const configIssues = this.analyzeNextConfig();
    const recommendations = this.generateRecommendations(buildIssues, configIssues);
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalIssues: buildIssues.length + configIssues.length,
        buildIssues: buildIssues.length,
        configIssues: configIssues.length,
        highSeverity: [...buildIssues, ...configIssues].filter(i => i.severity === 'high').length,
        mediumSeverity: [...buildIssues, ...configIssues].filter(i => i.severity === 'medium').length,
        lowSeverity: [...buildIssues, ...configIssues].filter(i => i.severity === 'low').length
      },
      buildAnalysis: {
        issues: buildIssues,
        summary: `Analyzed build output and found ${buildIssues.length} potential chunk-related issues`
      },
      configAnalysis: {
        issues: configIssues,
        summary: `Analyzed Next.js config and found ${configIssues.length} potential configuration issues`
      },
      recommendations,
      nextSteps: [
        'Review high-severity issues first',
        'Implement the ChunkErrorHandler utility',
        'Monitor chunk loading errors in production',
        'Test on various network conditions',
        'Consider implementing progressive loading'
      ]
    };
    
    // Save report to file
    fs.writeFileSync(this.reportPath, JSON.stringify(report, null, 2));
    
    return report;
  }

  // Display report in console
  displayReport(report) {
    console.log('\n📊 Chunk Error Analysis Report');
    console.log('=====================================');
    
    // Summary
    console.log(`\n📈 Summary:`);
    console.log(`   Total Issues: ${report.summary.totalIssues}`);
    console.log(`   High Severity: ${report.summary.highSeverity}`);
    console.log(`   Medium Severity: ${report.summary.mediumSeverity}`);
    console.log(`   Low Severity: ${report.summary.lowSeverity}`);
    
    // High severity issues
    if (report.summary.highSeverity > 0) {
      console.log('\n🚨 High Severity Issues:');
      [...report.buildAnalysis.issues, ...report.configAnalysis.issues]
        .filter(issue => issue.severity === 'high')
        .forEach(issue => {
          console.log(`   - ${issue.type}: ${issue.chunk || issue.setting || 'N/A'}`);
          if (issue.sizeKB) console.log(`     Size: ${issue.sizeKB}KB`);
          if (issue.recommendation) console.log(`     Recommendation: ${issue.recommendation}`);
        });
    }
    
    // Recommendations
    console.log('\n💡 Recommendations:');
    report.recommendations.forEach(rec => {
      console.log(`\n   ${rec.priority.toUpperCase()} PRIORITY: ${rec.title}`);
      console.log(`   ${rec.description}`);
      rec.actions.forEach(action => {
        console.log(`   - ${action}`);
      });
    });
    
    console.log(`\n📄 Full report saved to: ${this.reportPath}`);
    console.log('\n🔧 To fix ChunkLoadErrors:');
    console.log('   1. Import the ChunkErrorHandler in your _app.tsx');
    console.log('   2. Review and optimize large chunks');
    console.log('   3. Test on slow network connections');
    console.log('   4. Monitor error rates in production');
  }
}

// Run the monitor
if (require.main === module) {
  const monitor = new ChunkErrorMonitor();
  const report = monitor.generateReport();
  monitor.displayReport(report);
}

module.exports = ChunkErrorMonitor;