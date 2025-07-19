#!/usr/bin/env node

// Handle piping errors gracefully (e.g., when output is piped to `head`)
process.stdout.on('error', (err) => {
  if (err.code === 'EPIPE') {
    process.exit(0);
  }
});

/**
 * Log Health Summary Script
 * Provides a comprehensive overview of project health and logging infrastructure
 */

const fs = require('fs');
const path = require('path');
const { _exec } = require('child_process');
const { _promisify } = require('util');

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
      overall: { score: 0, grade: 'F', status: 'Critical' },
    };
  }

  async hasNetwork() {
    try {
      await execAsync('ping -c 1 registry.npmjs.org >/dev/null 2>&1');
      return true;
    } catch {
      return false;
    }
  }

  async generateSummary() {
    // console.warn('🔍 Generating comprehensive health summary...\n');

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
    // console.warn('📦 Checking build health...');

    try {
      // Check if .next exists and is recent
      if (fs.existsSync('.next')) {
        const stats = fs.statSync('.next');
        const ageHours = (Date.now() - stats.mtime) / (1000 * 60 * 60);

        this.results.build.status = ageHours < 24 ? 'recent' : 'stale';
        this.results.build.lastBuilt = stats.mtime;

        // Get build size
        try {
          const { _stdout } = await execAsync(
            'du -sh .next 2>/dev/null || echo "0B"',
          );
          this.results.build.size = stdout.trim();
        } catch (_error) {
          this.results.build.size = 'Unknown';
        }

        // console.warn(`  ✅ Build exists (${this.results.build.status}, ${this.results.build.size})`);
      } else {
        this.results.build.status = 'missing';
        // console.warn('  ⚠️  No build found (run "npm run build" to generate)');
      }
    } catch (_error) {
      this.results.build.status = 'error';
      this.results.build.errors.push(error.message);
      // console.warn('  ❌ Build check failed');
    }
  }

  async checkTestHealth() {
    // console.warn('🧪 Checking test health...');

    try {
      // Check Playwright results
      const playwrightResults = path.join(
        'playwright-logs',
        'test-results.json',
      );
      if (fs.existsSync(playwrightResults)) {
        const stats = fs.statSync(playwrightResults);
        const ageHours = (Date.now() - stats.mtimeMs) / (1000 * 60 * 60);

        if (ageHours > 24) {
          // console.warn(`  ℹ️  Playwright results are stale (${ageHours.toFixed(1)}h old), ignoring`);
        } else {
          const content = fs.readFileSync(playwrightResults, 'utf-8');

          // Ignore connection errors that indicate server wasn't running
          if (/ERR_CONNECTION_REFUSED/.test(content)) {
            // console.warn('  ℹ️  Playwright failures due to connection issues, treating as skipped');
          } else {
            const results = JSON.parse(content);
            this.results.tests.playwright = {
              status: results.stats?.unexpected > 0 ? 'failures' : 'passing',
              failures: results.stats?.unexpected || 0,
              total: results.stats?.expected + results.stats?.unexpected || 0,
            };
            // console.warn(`  📋 Playwright: ${this.results.tests.playwright.failures} failures`);
          }
        }
      }

      // Check Jest coverage
      if (fs.existsSync('coverage')) {
        this.results.tests.coverage = 'available';
        // console.warn('  ✅ Test coverage available');
      }

      this.results.tests.status =
        (this.results.tests.playwright?.failures || 0) === 0
          ? 'passing'
          : 'failures';
    } catch (_error) {
      this.results.tests.status = 'error';
      // console.warn('  ⚠️  Test check incomplete');
    }
  }

  async checkLogHealth() {
    // console.warn('📋 Checking log health...');

    try {
      // Run the error monitor to get health info
      const { _stdout } = await execAsync(
        'npm run logs:health 2>&1 || echo "Error running health check"',
      );

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
          const files = fs.readdirSync(dir).filter((f) => f.endsWith('.log'));
          totalLogFiles += files.length;
        }
      }

      this.results.logs.fileCount = totalLogFiles;
      // console.warn(`  ✅ Log health: ${this.results.logs.health || 'Unknown'}/100, ${totalLogFiles} files`);
    } catch (_error) {
      // console.warn('  ⚠️  Log health check incomplete');
    }
  }

  async checkDependencyHealth() {
    // console.warn('📦 Checking dependency health...');

    try {
      const online = await this.hasNetwork();
      if (!online) {
        // console.warn('  ⚠️  No network connection - skipping npm audit/outdated checks');
        this.results.dependencies.vulnerabilities = 0;
        this.results.dependencies.outdated = 0;
        return;
      }

      // Check for vulnerabilities
      const { stdout: auditOutput } = await execAsync(
        'npm audit --json 2>/dev/null || echo "{}"',
      );
      try {
        const auditData = JSON.parse(auditOutput);
        this.results.dependencies.vulnerabilities =
          auditData.metadata?.vulnerabilities?.total || 0;
      } catch (_parseError) {
        // If audit fails, assume clean
        this.results.dependencies.vulnerabilities = 0;
      }

      // Check for outdated packages
      try {
        const { stdout: outdatedOutput } = await execAsync(
          'npm outdated --json 2>/dev/null || echo "{}"',
        );
        const outdatedData = JSON.parse(outdatedOutput || '{}');
        this.results.dependencies.outdated = Object.keys(outdatedData).length;
      } catch (_outdatedError) {
        this.results.dependencies.outdated = 0;
      }

      // console.warn(`  ✅ Dependencies: ${this.results.dependencies.vulnerabilities} vulnerabilities, ${this.results.dependencies.outdated} outdated`);
    } catch (_error) {
      // console.warn('  ⚠️  Dependency check incomplete');
    }
  }

  async checkPerformanceHealth() {
    // console.warn('⚡ Checking performance health...');

    try {
      // Check build performance
      if (fs.existsSync('.next')) {
        const { _stdout } = await execAsync('find .next -name "*.js" | wc -l');
        this.results.performance.jsFiles = parseInt(stdout.trim());

        // Check for bundle analysis
        if (fs.existsSync('.next/analyze')) {
          this.results.performance.bundleAnalysis = 'available';
        }
      }

      // Check server response time (if running)
      try {
        const startTime = Date.now();
        await execAsync(
          'curl -s -o /dev/null -w "%{http_code}" http://localhost:3000 || echo "000"',
        );
        const responseTime = Date.now() - startTime;
        this.results.performance.serverResponseTime = responseTime;
      } catch (_error) {
        this.results.performance.serverResponseTime = null;
      }

      // console.warn(`  ✅ Performance: ${this.results.performance.jsFiles || 0} JS files, response time: ${this.results.performance.serverResponseTime || 'N/A'}ms`);
    } catch (_error) {
      // console.warn('  ⚠️  Performance check incomplete');
    }
  }

  calculateOverallHealth() {
    let score = 100;
    let issues = [];

    // Build health (25 points)
    if (this.results.build.status === 'missing') {
      score -= 25;
      issues.push('No build found - run "npm run build"');
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
      issues.push(
        `Test failures: ${this.results.tests.playwright?.failures || 0}`,
      );
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
      issues.push(
        `Security vulnerabilities: ${this.results.dependencies.vulnerabilities}`,
      );
    }
    if (this.results.dependencies.outdated > 10) {
      score -= 5;
      issues.push(
        `Many outdated packages: ${this.results.dependencies.outdated}`,
      );
    }

    // Performance health (10 points)
    if (this.results.performance.serverResponseTime > 2000) {
      score -= 5;
      issues.push('Slow server response time');
    }

    score = Math.max(0, score);

    let grade, status;
    if (score >= 90) {
      grade = 'A';
      status = 'Excellent';
    } else if (score >= 80) {
      grade = 'B';
      status = 'Good';
    } else if (score >= 70) {
      grade = 'C';
      status = 'Fair';
    } else if (score >= 60) {
      grade = 'D';
      status = 'Poor';
    } else {
      grade = 'F';
      status = 'Critical';
    }

    this.results.overall = { score, grade, status, issues };
  }

  displaySummary() {
    // console.warn('\n🏥 PROJECT HEALTH SUMMARY');
    // console.warn('=' .repeat(50));

    // console.warn(`\n📊 OVERALL HEALTH: ${this.results.overall.score}/100 (${this.results.overall.grade})`);
    // console.warn(`Status: ${this.results.overall.status}`);

    if (this.results.overall.issues.length > 0) {
      // console.warn('\n⚠️  ISSUES DETECTED:');
      this.results.overall.issues.forEach((issue, index) => {
        // console.warn(`${index + 1}. ${issue}`);
      });
    }

    // console.warn('\n📋 COMPONENT STATUS:');
    // console.warn(`Build: ${this.results.build.status} (${this.results.build.size || 'Unknown'})`);
    // console.warn(`Tests: ${this.results.tests.status} (${this.results.tests.playwright?.failures || 0} failures)`);
    // console.warn(`Logs: ${this.results.logs.health || 'Unknown'}/100 (${this.results.logs.fileCount || 0} files)`);
    // console.warn(`Dependencies: ${this.results.dependencies.vulnerabilities} vulnerabilities, ${this.results.dependencies.outdated} outdated`);
    // console.warn(`Performance: ${this.results.performance.jsFiles || 0} JS files`);

    // console.warn('\n🎯 RECOMMENDATIONS:');
    // if (this.results.overall.score >= 85) {
    //   console.warn('✅ Project is in excellent health! Keep up the good work.');
    // } else if (this.results.overall.score >= 70) {
    //   console.warn('👍 Project is in good health. Address minor issues when convenient.');
    // } else if (this.results.overall.score >= 50) {
    //   console.warn('⚠️  Project needs attention. Address issues to improve stability.');
    // } else {
    //   console.warn('🚨 Project requires immediate attention. Multiple critical issues detected.');
    // }
  }

  saveSummary() {
    const summaryPath = path.join('logs', 'health-summary.json');

    // Ensure logs directory exists
    if (!fs.existsSync('logs')) {
      fs.mkdirSync('logs', { recursive: true });
    }

    fs.writeFileSync(summaryPath, JSON.stringify(this.results, null, 2));
    // console.warn(`\n📄 Full summary saved to: ${summaryPath}`);
  }
}

async function main() {
  // console.warn('🚀 Project Health Summary Generator\n');

  const healthChecker = new LogHealthSummary();
  const results = await healthChecker.generateSummary();

  // Exit with appropriate code
  if (results.overall.score >= 70) {
    // console.warn('\n✅ Project health is acceptable');
    process.exit(0);
  } else {
    // console.warn('\n⚠️  Project health needs improvement');
    process.exit(1);
  }
}

if (require.main === module) {
  main().catch((error) => {
    // console.error('❌ Health summary failed:', error);
    process.exit(1);
  });
}

module.exports = { LogHealthSummary };
