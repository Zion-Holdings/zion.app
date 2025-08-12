#!/usr/bin/env node

/**
 * Enhanced Log Collector for Zion.App
 * Collects, processes, and analyzes logs from multiple sources
 * Provides structured output and automated error detection
 */

const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class EnhancedLogCollector {
  constructor() {
    this.config = {
      outputDir: path.join(__dirname, '..', 'logs'),
      sources: {
        nextjs: {
          buildLogs: '.next/build.log',
          devLogs: 'logs/dev.log'
        },
        application: {
          errorLogs: 'logs/errors.log',
          performanceLogs: 'logs/performance.log'
        },
        system: {
          npmLogs: '~/.npm/_logs/',
          gitLogs: '.git/logs/'
        },
        tests: {
          jestLogs: 'coverage/logs/',
          playwrightLogs: 'playwright-logs/',
          cypressLogs: 'cypress/logs/'
        }
      },
      retention: {
        days: 30,
        maxSizeMB: 100
      }
    };
  }

  /**
   * Initialize the log collector
   */
  async init() {
    try {
      // Ensure output directory exists
      if (!fs.existsSync(this.config.outputDir)) {
        fs.mkdirSync(this.config.outputDir, { recursive: true });
      }

      // Create subdirectories for different log types
      const subdirs = ['errors', 'performance', 'builds', 'tests', 'system'];
      for (const subdir of subdirs) {
        const dirPath = path.join(this.config.outputDir, subdir);
        if (!fs.existsSync(dirPath)) {
          fs.mkdirSync(dirPath, { recursive: true });
        }
      }

      return true;
    } catch (error) {
      console.error('❌ Failed to initialize log collector:', error.message);
      return false;
    }
  }

  /**
   * Collect logs from all configured sources
   */
  async collectAllLogs() {
    const timestamp = new Date().toISOString();
    const report = {
      timestamp,
      sources: {},
      summary: {
        totalFiles: 0,
        totalSize: 0,
        errorCount: 0,
        warningCount: 0
      }
    };

    console.log('🔍 Collecting logs from all sources...\n');

    // Collect build logs
    await this.collectBuildLogs(report);
    
    // Collect application logs
    await this.collectApplicationLogs(report);
    
    // Collect test logs
    await this.collectTestLogs(report);
    
    // Collect system logs
    await this.collectSystemLogs(report);
    
    // Collect git logs
    await this.collectGitLogs(report);
    
    // Generate consolidated report
    await this.generateConsolidatedReport(report);

    return report;
  }

  /**
   * Collect Next.js build logs
   */
  async collectBuildLogs(report) {
    console.log('📦 Collecting build logs...');
    
    try {
      // Check for .next directory
      if (fs.existsSync('.next')) {
        const buildInfo = {
          timestamp: new Date().toISOString(),
          buildExists: true,
          size: 0,
          files: []
        };

        // Get build info
        try {
          const { stdout } = await execAsync('du -sh .next 2>/dev/null || echo "0B"');
          buildInfo.size = stdout.trim();
        } catch (error) {
          buildInfo.size = 'Unknown';
        }

        // Check for build errors in Next.js logs
        try {
          const { stdout: buildOutput } = await execAsync('npm run build --silent 2>&1 | tail -20');
          const buildLog = {
            timestamp: new Date().toISOString(),
            output: buildOutput,
            hasErrors: buildOutput.toLowerCase().includes('error'),
            hasWarnings: buildOutput.toLowerCase().includes('warning')
          };
          
          const logPath = path.join(this.config.outputDir, 'builds', `build-${Date.now()}.log`);
          fs.writeFileSync(logPath, JSON.stringify(buildLog, null, 2));
          buildInfo.files.push(logPath);
          
          if (buildLog.hasErrors) {
            report.summary.errorCount++;
          }
          if (buildLog.hasWarnings) {
            report.summary.warningCount++;
          }
        } catch (error) {
          console.warn('  ⚠️  Could not capture build output');
        }

        report.sources.build = buildInfo;
        report.summary.totalFiles += buildInfo.files.length;
        console.log(`  ✅ Build logs collected (${buildInfo.files.length} files)`);
      } else {
        console.log('  ℹ️  No .next directory found');
      }
    } catch (error) {
      console.warn('  ⚠️  Error collecting build logs:', error.message);
    }
  }

  /**
   * Collect application runtime logs
   */
  async collectApplicationLogs(report) {
    console.log('🏃 Collecting application logs...');
    
    const appInfo = {
      timestamp: new Date().toISOString(),
      files: [],
      errors: [],
      warnings: []
    };

    try {
      // Collect from existing log files
      const logDirs = [
        'logs',
        'logs/errors',
        'logs/performance',
        'logs/perf',
        'logs/security',
      ];
      
      for (const logDir of logDirs) {
        if (fs.existsSync(logDir)) {
          const files = fs.readdirSync(logDir).filter(f => f.endsWith('.log'));
          
          for (const file of files) {
            const filePath = path.join(logDir, file);
            const stats = fs.statSync(filePath);
            
            appInfo.files.push({
              path: filePath,
              size: stats.size,
              modified: stats.mtime
            });
            
            // Analyze log content for errors/warnings
            try {
              const content = fs.readFileSync(filePath, 'utf-8');
              const lines = content.split('\n');
              
              lines.forEach((line, index) => {
                const lower = line.toLowerCase();

                const errorFalsePositives = [
                  'no error',
                  'no errors',
                  'no compilation errors',
                  'fixed',
                  'result:',
                  'error monitoring',
                  'error-monitor',
                  'error count',
                  'errors:'
                ];

                const isError =
                  lower.includes('error') &&
                  !errorFalsePositives.some(p => lower.includes(p)) &&
                  !lower.includes('errors: 0') &&
                  !line.includes('✅') &&
                  !lower.startsWith('- ');

                const isWarning =
                  lower.includes('warn') &&
                  !lower.includes('no warnings') &&
                  !lower.includes('warnings: 0');

                if (isError) {
                  appInfo.errors.push({
                    file: filePath,
                    line: index + 1,
                    content: line.trim()
                  });
                }
                if (isWarning) {
                  appInfo.warnings.push({
                    file: filePath,
                    line: index + 1,
                    content: line.trim()
                  });
                }
              });
            } catch (readError) {
              console.warn(`    ⚠️  Could not read ${filePath}`);
            }
          }
        }
      }

      report.sources.application = appInfo;
      report.summary.totalFiles += appInfo.files.length;
      report.summary.errorCount += appInfo.errors.length;
      report.summary.warningCount += appInfo.warnings.length;
      
      console.log(`  ✅ Application logs collected (${appInfo.files.length} files, ${appInfo.errors.length} errors, ${appInfo.warnings.length} warnings)`);
    } catch (error) {
      console.warn('  ⚠️  Error collecting application logs:', error.message);
    }
  }

  /**
   * Collect test logs
   */
  async collectTestLogs(report) {
    console.log('🧪 Collecting test logs...');
    
    const testInfo = {
      timestamp: new Date().toISOString(),
      jest: { files: [], lastRun: null },
      playwright: { files: [], lastRun: null },
      cypress: { files: [], lastRun: null }
    };

    try {
      // Jest logs
      if (fs.existsSync('coverage')) {
        const coverageFiles = fs.readdirSync('coverage').filter(f => f.endsWith('.json'));
        testInfo.jest.files = coverageFiles.map(f => path.join('coverage', f));
      }

      // Playwright logs
      if (fs.existsSync('playwright-logs')) {
        const playwrightFiles = fs.readdirSync('playwright-logs');
        testInfo.playwright.files = playwrightFiles.map(f => path.join('playwright-logs', f));
        
        // Check for test results
        const resultsFile = path.join('playwright-logs', 'test-results.json');
        if (fs.existsSync(resultsFile)) {
          try {
            const results = JSON.parse(fs.readFileSync(resultsFile, 'utf-8'));
            testInfo.playwright.lastRun = {
              timestamp: new Date().toISOString(),
              stats: results.stats || {},
              failures: results.suites?.reduce((acc, suite) => {
                const failures = suite.specs?.filter(spec => spec.tests.some(test => test.status === 'failed')) || [];
                return acc.concat(failures);
              }, []) || []
            };
          } catch (parseError) {
            console.warn('    ⚠️  Could not parse Playwright results');
          }
        }
      }

      // Cypress logs
      if (fs.existsSync('cypress/logs')) {
        const cypressFiles = fs.readdirSync('cypress/logs');
        testInfo.cypress.files = cypressFiles.map(f => path.join('cypress/logs', f));
      }

      report.sources.tests = testInfo;
      const totalTestFiles = testInfo.jest.files.length + testInfo.playwright.files.length + testInfo.cypress.files.length;
      report.summary.totalFiles += totalTestFiles;
      
      console.log(`  ✅ Test logs collected (${totalTestFiles} files)`);
    } catch (error) {
      console.warn('  ⚠️  Error collecting test logs:', error.message);
    }
  }

  /**
   * Collect system logs
   */
  async collectSystemLogs(report) {
    console.log('🖥️  Collecting system logs...');
    
    const systemInfo = {
      timestamp: new Date().toISOString(),
      nodejs: {},
      npm: {},
      system: {}
    };

    try {
      // Node.js version and info
      systemInfo.nodejs.version = process.version;
      systemInfo.nodejs.platform = process.platform;
      systemInfo.nodejs.arch = process.arch;
      systemInfo.nodejs.memory = process.memoryUsage();

      // NPM info
      try {
        const { stdout: npmVersion } = await execAsync('npm --version');
        systemInfo.npm.version = npmVersion.trim();
        
        const { stdout: npmConfig } = await execAsync('npm config list --json 2>/dev/null || echo "{}"');
        systemInfo.npm.config = JSON.parse(npmConfig || '{}');
      } catch (npmError) {
        console.warn('    ⚠️  Could not get NPM info');
      }

      // System resources
      try {
        if (process.platform === 'darwin') {
          const { stdout: memInfo } = await execAsync('vm_stat | head -5');
          systemInfo.system.memory = memInfo;
        } else if (process.platform === 'linux') {
          const { stdout: memInfo } = await execAsync('free -h');
          systemInfo.system.memory = memInfo;
        }
      } catch (sysError) {
        console.warn('    ⚠️  Could not get system info');
      }

      report.sources.system = systemInfo;
      console.log('  ✅ System logs collected');
    } catch (error) {
      console.warn('  ⚠️  Error collecting system logs:', error.message);
    }
  }

  /**
   * Collect Git logs
   */
  async collectGitLogs(report) {
    console.log('🔀 Collecting Git logs...');
    
    const gitInfo = {
      timestamp: new Date().toISOString(),
      commits: [],
      branches: [],
      status: {}
    };

    try {
      // Recent commits
      const { stdout: commits } = await execAsync('git log --oneline -10 2>/dev/null || echo "No git history"');
      gitInfo.commits = commits.trim().split('\n').filter(line => line.length > 0);

      // Branches
      const { stdout: branches } = await execAsync('git branch -a 2>/dev/null || echo "No branches"');
      gitInfo.branches = branches.trim().split('\n').filter(line => line.length > 0);

      // Git status
      const { stdout: status } = await execAsync('git status --porcelain 2>/dev/null || echo "Not a git repository"');
      gitInfo.status = {
        clean: status.trim().length === 0,
        changes: status.trim().split('\n').filter(line => line.length > 0)
      };

      report.sources.git = gitInfo;
      console.log(`  ✅ Git logs collected (${gitInfo.commits.length} recent commits)`);
    } catch (error) {
      console.warn('  ⚠️  Error collecting Git logs:', error.message);
    }
  }

  /**
   * Generate consolidated report
   */
  async generateConsolidatedReport(report) {
    console.log('\n📊 Generating consolidated report...');
    
    const reportPath = path.join(this.config.outputDir, `consolidated-report-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    
    // Generate summary
    const summaryPath = path.join(this.config.outputDir, 'latest-summary.txt');
    const summary = this.generateTextSummary(report);
    fs.writeFileSync(summaryPath, summary);
    
    console.log(`  ✅ Report saved to: ${reportPath}`);
    console.log(`  ✅ Summary saved to: ${summaryPath}`);
    
    // Display key metrics
    console.log('\n📈 Key Metrics:');
    console.log(`  Total files analyzed: ${report.summary.totalFiles}`);
    console.log(`  Errors found: ${report.summary.errorCount}`);
    console.log(`  Warnings found: ${report.summary.warningCount}`);
    
    if (report.sources.tests?.playwright?.lastRun?.stats) {
      const stats = report.sources.tests.playwright.lastRun.stats;
      console.log(`  Test failures: ${stats.unexpected || 0}`);
    }
  }

  /**
   * Generate text summary
   */
  generateTextSummary(report) {
    const lines = [
      'ZION.APP LOG COLLECTION SUMMARY',
      '=' .repeat(40),
      `Generated: ${report.timestamp}`,
      '',
      'OVERVIEW:',
      `- Total files: ${report.summary.totalFiles}`,
      `- Errors: ${report.summary.errorCount}`,
      `- Warnings: ${report.summary.warningCount}`,
      ''
    ];

    // Build status
    if (report.sources.build) {
      lines.push('BUILD STATUS:');
      lines.push(`- Build directory exists: ${report.sources.build.buildExists}`);
      lines.push(`- Build size: ${report.sources.build.size}`);
      lines.push('');
    }

    // Test status
    if (report.sources.tests) {
      lines.push('TEST STATUS:');
      lines.push(`- Jest files: ${report.sources.tests.jest.files.length}`);
      lines.push(`- Playwright files: ${report.sources.tests.playwright.files.length}`);
      lines.push(`- Cypress files: ${report.sources.tests.cypress.files.length}`);
      
      if (report.sources.tests.playwright.lastRun?.stats) {
        const stats = report.sources.tests.playwright.lastRun.stats;
        lines.push(`- Test failures: ${stats.unexpected || 0}`);
      }
      lines.push('');
    }

    // System info
    if (report.sources.system) {
      lines.push('SYSTEM INFO:');
      lines.push(`- Node.js: ${report.sources.system.nodejs.version}`);
      lines.push(`- Platform: ${report.sources.system.nodejs.platform}`);
      lines.push(`- NPM: ${report.sources.system.npm.version || 'Unknown'}`);
      lines.push('');
    }

    // Git status
    if (report.sources.git) {
      lines.push('GIT STATUS:');
      lines.push(`- Recent commits: ${report.sources.git.commits.length}`);
      lines.push(`- Working directory clean: ${report.sources.git.status.clean}`);
      lines.push('');
    }

    // Top errors
    if (report.sources.application?.errors?.length > 0) {
      lines.push('TOP ERRORS:');
      report.sources.application.errors.slice(0, 5).forEach((error, index) => {
        lines.push(`${index + 1}. ${error.content.substring(0, 80)}...`);
      });
      lines.push('');
    }

    return lines.join('\n');
  }

  /**
   * Clean old logs based on retention policy
   */
  async cleanOldLogs() {
    console.log('🧹 Cleaning old logs...');
    
    const cutoffDate = new Date();
    cutoffDate.setDate(cutoffDate.getDate() - this.config.retention.days);
    
    let deletedCount = 0;
    
    try {
      const walkDir = (dir) => {
        if (!fs.existsSync(dir)) return;
        
        const files = fs.readdirSync(dir);
        for (const file of files) {
          const filePath = path.join(dir, file);
          const stats = fs.statSync(filePath);
          
          if (stats.isDirectory()) {
            walkDir(filePath);
          } else if (stats.mtime < cutoffDate) {
            fs.unlinkSync(filePath);
            deletedCount++;
          }
        }
      };
      
      walkDir(this.config.outputDir);
      console.log(`  ✅ Cleaned ${deletedCount} old log files`);
    } catch (error) {
      console.warn('  ⚠️  Error cleaning logs:', error.message);
    }
  }
}

// Main execution
async function main() {
  console.log('🚀 Enhanced Log Collector\n');
  
  const collector = new EnhancedLogCollector();
  
  if (!(await collector.init())) {
    process.exit(1);
  }
  
  // Collect logs
  const report = await collector.collectAllLogs();

  // Clean old logs if requested
  if (process.argv.includes('--clean')) {
    await collector.cleanOldLogs();
  }

  // Run error monitoring if requested
  if (process.argv.includes('--analyze')) {
    const { ErrorMonitor } = require('./error-monitor.cjs');
    const monitor = new ErrorMonitor();
    if (monitor.init()) {
      await monitor.readLogs();
      monitor.generateReport();
      if (process.argv.includes('--export')) {
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        monitor.exportReport(`error-report-${timestamp}.json`);
      }
    }
  }
  
  console.log('\n✅ Log collection completed!');
  
  // Exit with error code if significant issues found
  if (report.summary.errorCount > 5) {
    console.log('⚠️  High error count detected');
    process.exit(1);
  }
}

// Run if called directly
if (require.main === module) {
  main().catch(error => {
    console.error('❌ Log collector failed:', error);
    process.exit(1);
  });
}

module.exports = { EnhancedLogCollector }; 
