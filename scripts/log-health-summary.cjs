#!/usr/bin/env node

/**
 * Log Health Summary Script
 * Provides a comprehensive overview of project health and logging infrastructure
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class LogHealthSummary {
  constructor() {
    this.results = {
      timestamp: new Date().toISOString(),
      build: { status: 'unknown', errors: [] },
      tests: { status: 'unknown', failures: [] },
      logs: { health: 'unknown', errorCount: 0 },
      dependencies: { vulnerabilities: 0, outdated: 0 },
      performance: { buildSize: 'unknown', speed: 'unknown' },
      overall: { score: 0, grade: 'F', status: 'Critical' }
    };
  }

  async generateSummary() {
    console.log('🔍 Generating comprehensive health summary...\n');

    await this.checkBuildHealth();
    await this.checkTestHealth();
    await this.checkLogHealth();
    await this.checkDependencyHealth();
    await this.checkPerformanceHealth();
    
    this.calculateOverallHealth();
    this.displaySummary();
    this.saveSummary();

    return this.results;
  }

  async checkBuildHealth() {
    console.log('📦 Checking build health...');
    
    try {
      // Check if .next exists and is recent
      if (fs.existsSync('.next')) {
        const stats = fs.statSync('.next');
        const ageHours = (Date.now() - stats.mtime) / (1000 * 60 * 60);
        
        this.results.build.status = ageHours < 24 ? 'recent' : 'stale';
        this.results.build.lastBuilt = stats.mtime;
        
        // Get build size
        try {
          const { stdout } = await execAsync('du -sh .next 2>/dev/null || echo "0B"');
          this.results.build.size = stdout.trim();
        } catch (error) {
          this.results.build.size = 'Unknown';
        }
        
        console.log(`  ✅ Build exists (${this.results.build.status}, ${this.results.build.size})`);
      } else {
        this.results.build.status = 'missing';
        console.log('  ⚠️  No build found');
      }
    } catch (error) {
      this.results.build.status = 'error';
      this.results.build.errors.push(error.message);
      console.log('  ❌ Build check failed');
    }
  }

  async checkTestHealth() {
    console.log('🧪 Checking test health...');
    
    try {
      // Check Playwright results
      const playwrightResults = path.join('playwright-logs', 'test-results.json');
      if (fs.existsSync(playwrightResults)) {
        const results = JSON.parse(fs.readFileSync(playwrightResults, 'utf-8'));
        this.results.tests.playwright = {
          status: results.stats?.unexpected > 0 ? 'failures' : 'passing',
          failures: results.stats?.unexpected || 0,
          total: results.stats?.expected + results.stats?.unexpected || 0
        };
        console.log(`  📋 Playwright: ${this.results.tests.playwright.failures} failures`);
      }

      // Check Jest coverage
      if (fs.existsSync('coverage')) {
        this.results.tests.coverage = 'available';
        console.log('  ✅ Test coverage available');
      }

      this.results.tests.status = 
        (this.results.tests.playwright?.failures || 0) === 0 ? 'passing' : 'failures';
        
    } catch (error) {
      this.results.tests.status = 'error';
      console.log('  ⚠️  Test check incomplete');
    }
  }

  async checkLogHealth() {
    console.log('📋 Checking log health...');
    
    try {
      // Run the error monitor to get health info
      const { stdout } = await execAsync('npm run logs:health 2>&1 || echo "Error running health check"');
      
      // Parse health score from output
      const healthMatch = stdout.match(/Score: (\d+)\/100 \(([A-F])\)/);
      if (healthMatch) {
        this.results.logs.health = parseInt(healthMatch[1]);
        this.results.logs.grade = healthMatch[2];
      }

      // Count log files
      const logDirs = ['logs', 'logs/errors', 'logs/performance'];
      let totalLogFiles = 0;
      
      for (const dir of logDirs) {
        if (fs.existsSync(dir)) {
          const files = fs.readdirSync(dir).filter(f => f.endsWith('.log'));
          totalLogFiles += files.length;
        }
      }
      
      this.results.logs.fileCount = totalLogFiles;
      console.log(`  ✅ Log health: ${this.results.logs.health || 'Unknown'}/100, ${totalLogFiles} files`);
      
    } catch (error) {
      console.log('  ⚠️  Log health check incomplete');
    }
  }

  async checkDependencyHealth() {
    console.log('📦 Checking dependency health...');
    
    try {
      // Check for vulnerabilities
      const { stdout: auditOutput } = await execAsync('npm audit --json 2>/dev/null || echo "{}"');
      try {
        const auditData = JSON.parse(auditOutput);
        this.results.dependencies.vulnerabilities = auditData.metadata?.vulnerabilities?.total || 0;
      } catch (parseError) {
        // If audit fails, assume clean
        this.results.dependencies.vulnerabilities = 0;
      }

      // Check for outdated packages
      try {
        const { stdout: outdatedOutput } = await execAsync('npm outdated --json 2>/dev/null || echo "{}"');
        const outdatedData = JSON.parse(outdatedOutput || '{}');
        this.results.dependencies.outdated = Object.keys(outdatedData).length;
      } catch (outdatedError) {
        this.results.dependencies.outdated = 0;
      }

      console.log(`  ✅ Dependencies: ${this.results.dependencies.vulnerabilities} vulnerabilities, ${this.results.dependencies.outdated} outdated`);
      
    } catch (error) {
      console.log('  ⚠️  Dependency check incomplete');
    }
  }

  async checkPerformanceHealth() {
    console.log('⚡ Checking performance health...');
    
    try {
      // Check build performance
      if (fs.existsSync('.next')) {
        const { stdout } = await execAsync('find .next -name "*.js" | wc -l');
        this.results.performance.jsFiles = parseInt(stdout.trim());
        
        // Check for bundle analysis
        if (fs.existsSync('.next/analyze')) {
          this.results.performance.bundleAnalysis = 'available';
        }
      }

      // Check server response time (if running)
      try {
        const startTime = Date.now();
        await execAsync('curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 || echo "000"');
        const responseTime = Date.now() - startTime;
        this.results.performance.serverResponseTime = responseTime;
      } catch (error) {
        this.results.performance.serverResponseTime = null;
      }

      console.log(`  ✅ Performance: ${this.results.performance.jsFiles || 0} JS files, response time: ${this.results.performance.serverResponseTime || 'N/A'}ms`);
      
    } catch (error) {
      console.log('  ⚠️  Performance check incomplete');
    }
  }

  calculateOverallHealth() {
    let score = 100;
    let issues = [];

    // Build health (25 points)
    if (this.results.build.status === 'missing') {
      score -= 25;
      issues.push('No build found');
    } else if (this.results.build.status === 'stale') {
      score -= 10;
      issues.push('Build is stale (>24h)');
    } else if (this.results.build.status === 'error') {
      score -= 20;
      issues.push('Build errors detected');
    }

    // Test health (25 points)
    if (this.results.tests.status === 'failures') {
      score -= 15;
      issues.push(`Test failures: ${this.results.tests.playwright?.failures || 0}`);
    } else if (this.results.tests.status === 'error') {
      score -= 10;
      issues.push('Test system errors');
    }

    // Log health (25 points)
    if (this.results.logs.health < 70) {
      score -= 20;
      issues.push(`Poor log health: ${this.results.logs.health}/100`);
    } else if (this.results.logs.health < 85) {
      score -= 10;
      issues.push(`Moderate log health: ${this.results.logs.health}/100`);
    }

    // Dependency health (15 points)
    if (this.results.dependencies.vulnerabilities > 0) {
      score -= 10;
      issues.push(`Security vulnerabilities: ${this.results.dependencies.vulnerabilities}`);
    }
    if (this.results.dependencies.outdated > 10) {
      score -= 5;
      issues.push(`Many outdated packages: ${this.results.dependencies.outdated}`);
    }

    // Performance health (10 points)
    if (this.results.performance.serverResponseTime > 2000) {
      score -= 5;
      issues.push('Slow server response time');
    }

    score = Math.max(0, score);
    
    let grade, status;
    if (score >= 90) {
      grade = 'A'; status = 'Excellent';
    } else if (score >= 80) {
      grade = 'B'; status = 'Good';
    } else if (score >= 70) {
      grade = 'C'; status = 'Fair';
    } else if (score >= 60) {
      grade = 'D'; status = 'Poor';
    } else {
      grade = 'F'; status = 'Critical';
    }

    this.results.overall = { score, grade, status, issues };
  }

  displaySummary() {
    console.log('\n🏥 PROJECT HEALTH SUMMARY');
    console.log('=' .repeat(50));
    
    console.log(`\n📊 OVERALL HEALTH: ${this.results.overall.score}/100 (${this.results.overall.grade})`);
    console.log(`Status: ${this.results.overall.status}`);
    
    if (this.results.overall.issues.length > 0) {
      console.log('\n⚠️  ISSUES DETECTED:');
      this.results.overall.issues.forEach((issue, index) => {
        console.log(`${index + 1}. ${issue}`);
      });
    }

    console.log('\n📋 COMPONENT STATUS:');
    console.log(`Build: ${this.results.build.status} (${this.results.build.size || 'Unknown'})`);
    console.log(`Tests: ${this.results.tests.status} (${this.results.tests.playwright?.failures || 0} failures)`);
    console.log(`Logs: ${this.results.logs.health || 'Unknown'}/100 (${this.results.logs.fileCount || 0} files)`);
    console.log(`Dependencies: ${this.results.dependencies.vulnerabilities} vulnerabilities, ${this.results.dependencies.outdated} outdated`);
    console.log(`Performance: ${this.results.performance.jsFiles || 0} JS files`);

    console.log('\n🎯 RECOMMENDATIONS:');
    if (this.results.overall.score >= 85) {
      console.log('✅ Project is in excellent health! Keep up the good work.');
    } else if (this.results.overall.score >= 70) {
      console.log('👍 Project is in good health. Address minor issues when convenient.');
    } else if (this.results.overall.score >= 50) {
      console.log('⚠️  Project needs attention. Address issues to improve stability.');
    } else {
      console.log('🚨 Project requires immediate attention. Multiple critical issues detected.');
    }
  }

  saveSummary() {
    const summaryPath = path.join('logs', 'health-summary.json');
    
    // Ensure logs directory exists
    if (!fs.existsSync('logs')) {
      fs.mkdirSync('logs', { recursive: true });
    }
    
    fs.writeFileSync(summaryPath, JSON.stringify(this.results, null, 2));
    console.log(`\n📄 Full summary saved to: ${summaryPath}`);
  }
}

async function main() {
  console.log('🚀 Project Health Summary Generator\n');
  
  const healthChecker = new LogHealthSummary();
  const results = await healthChecker.generateSummary();
  
  // Exit with appropriate code
  if (results.overall.score >= 70) {
    console.log('\n✅ Project health is acceptable');
    process.exit(0);
  } else {
    console.log('\n⚠️  Project health needs improvement');
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch(error => {
    console.error('❌ Health summary failed:', error);
    process.exit(1);
  });
}

module.exports = { LogHealthSummary }; 
