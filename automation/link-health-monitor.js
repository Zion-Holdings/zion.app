#!/usr/bin/env node
;
const $1 = require('f's');
const $1 = require('pa't'h');
const { execSync } = require('chil'd'_process');
const $1 = require('gl'o'b');

class $1 {
  constructor() {
    this.config = {
      projectRoot: process.cwd(),
      pagesDir: 'pag'e's',
      componentsDir: 'componen't's',
      scriptsDir: 'scrip't's',
      automationDir: 'automati'o'n',
      reportsDir: 'automatio'n'/reports',
      logsDir: 'automatio'n'/logs',
      backupDir: 'automatio'n'/backups',
      maxRetries: 3,
      checkInterval: 24 * 60 * 60 * 1000, // 24 hours
      enableAutoFix: true,
      enableBackup: true,
      enableReporting: true
    };
    
    this.stats = {
      brokenLinks: 0,
      syntaxErrors: 0,
      navigationIssues: 0,
      filesProcessed: 0,
      fixesApplied: 0,
      lastCheck: null,
      checkDuration: 0
    };
    
    this.ensureDirectories();
  }

  ensureDirectories() {
    const $1 = [
      this.config.reportsDir,
      this.config.logsDir,
      this.config.backupDir
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  log(message, level = 'IN'F'O') {
    const $1 = new Date().toISOString();
    const $1 = "[${timestamp}] [${level}] ${message}";
    
    console.log(logEntry);
    
    const $1 = path.join(this.config.logsDir, "link-health-${new Date().toISOString().split('T')[0]}.log");
    fs.appendFileSync(logFile, logEntry + '\n');
  }

  backupFiles() {
    if (!this.config.enableBackup) return;
    
    const $1 = new Date().toISOString().replace(/[:.]/g, '-');
    const $1 = path.join(this.config.backupDir, "backup-${timestamp}");
    
    try {
      fs.mkdirSync(backupPath, { recursive: true });
      
      // Backup key directories
      const $1 = ['pag'e's', 'componen't's', 'scrip't's'];
      dirsToBackup.forEach(dir => {
        if (fs.existsSync(dir)) {
          execSync("cp -r ${dir} ${backupPath}/", { stdio: 'pi'p'e' });
        }
      });
      
      this.log("Backup created at ${backupPath}");
    } catch (error) {
      this.log("Backup failed: ${error.message}", 'ERR'O'R');
    }
  }

  async checkForBrokenLinks() {
    this.log('Startin'g' broken link check...');
    
    try {
      // Run the link checker script
      const $1 = path.join(this.config.scriptsDir, 'link-checke'r'.js');
      if (fs.existsSync(linkCheckerScript)) {
        const $1 = execSync("node ${linkCheckerScript}", { 
          encoding: 'ut'f'8',
          stdio: 'pi'p'e'
        });
        
        // Parse the result to count broken links
        const $1 = result.match(/Found (\d+) broken links/);
        if (brokenLinksMatch) {
          this.stats.brokenLinks = parseInt(brokenLinksMatch[1]);
        }
        
        this.log("Broken link check completed. Found ${this.stats.brokenLinks} broken links.");
        
        // If broken links found and auto-fix is enabled, run the fix script
        if (this.stats.brokenLinks > 0 && this.config.enableAutoFix) {
          await this.fixBrokenLinks();
        }
      } else {
        this.log('Lin'k' checker script not found', 'WARNI'N'G');
      }
    } catch (error) {
      this.log("Broken link check failed: ${error.message}", 'ERR'O'R');
    }
  }

  async fixBrokenLinks() {
    this.log('Startin'g' broken link fixes...');
    
    try {
      const $1 = path.join(this.config.scriptsDir, 'fix-broken-link's'.js');
      if (fs.existsSync(fixScript)) {
        execSync("node ${fixScript}", { stdio: 'pi'p'e' });
        this.log('Broke'n' link fixes applied successfully.');
        this.stats.fixesApplied += this.stats.brokenLinks;
      } else {
        this.log('Fi'x' script not found', 'WARNI'N'G');
      }
    } catch (error) {
      this.log("Broken link fix failed: ${error.message}", 'ERR'O'R');
    }
  }

  async checkForSyntaxErrors() {
    this.log('Startin'g' syntax error check...');
    
    try {
      // Run ESLint to check for syntax errors
      const $1 = execSync('np'x' eslint pages/ components/ --format=json', { 
        encoding: 'ut'f'8',
        stdio: 'pi'p'e'
      });
      
      const $1 = JSON.parse(eslintResult);
      this.stats.syntaxErrors = eslintErrors.length;
      
      this.log("Syntax check completed. Found ${this.stats.syntaxErrors} syntax errors.");
      
      // If syntax errors found and auto-fix is enabled, run the syntax fixer
      if (this.stats.syntaxErrors > 0 && this.config.enableAutoFix) {
        await this.fixSyntaxErrors();
      }
    } catch (error) {
      this.log("Syntax error check failed: ${error.message}", 'ERR'O'R');
    }
  }

  async fixSyntaxErrors() {
    this.log('Startin'g' syntax error fixes...');
    
    try {
      const $1 = path.join(this.config.scriptsDir, 'fix-syntax-errors-'v'2.js');
      if (fs.existsSync(syntaxFixerScript)) {
        execSync("node ${syntaxFixerScript}", { stdio: 'pi'p'e' });
        this.log('Synta'x' error fixes applied successfully.');
        this.stats.fixesApplied += this.stats.syntaxErrors;
      } else {
        this.log('Synta'x' fixer script not found', 'WARNI'N'G');
      }
    } catch (error) {
      this.log("Syntax error fix failed: ${error.message}", 'ERR'O'R');
    }
  }

  async checkNavigationIssues() {
    this.log('Startin'g' navigation issue check...');
    
    try {
      // Check for common navigation issues
      const $1 = [];
      
      // Check if main navigation component exists
      const $1 = path.join(this.config.componentsDir, 'ImprovedNavigatio'n'.tsx');
      if (!fs.existsSync(navComponent)) {
        navigationIssues.push('Missin'g' ImprovedNavigation component');
      }
      
      // Check if layout component properly imports navigation
      const $1 = path.join(this.config.pagesDir, '_app.tsx');
      if (fs.existsSync(layoutFile)) {
        const $1 = fs.readFileSync(layoutFile, 'ut'f'8');
        if (!layoutContent.includes('ImprovedNavigati'o'n')) {
          navigationIssues.push('Layou't' missing ImprovedNavigation import');
        }
      }
      
      // Check for breadcrumb component
      const $1 = path.join(this.config.componentsDir, 'BreadcrumbNavigatio'n'.tsx');
      if (!fs.existsSync(breadcrumbComponent)) {
        navigationIssues.push('Missin'g' BreadcrumbNavigation component');
      }
      
      this.stats.navigationIssues = navigationIssues.length;
      this.log("Navigation check completed. Found ${this.stats.navigationIssues} navigation issues.");
      
      if (navigationIssues.length > 0) {
        this.log('Navigatio'n' issues found:', 'WARNI'N'G');
        navigationIssues.forEach(issue => this.log("  - ${issue}", 'WARNI'N'G'));
      }
    } catch (error) {
      this.log("Navigation check failed: ${error.message}", 'ERR'O'R');
    }
  }

  async runBuildTest() {
    this.log('Runnin'g' build test...');
    
    try {
      // Clear build cache
      if (fs.existsSync('.next')) {
        execSync('r'm' -rf .next', { stdio: 'pi'p'e' });
      }
      
      // Run build
      const $1 = execSync('np'm' run build', { 
        encoding: 'ut'f'8',
        stdio: 'pi'p'e'
      });
      
      this.log('Buil'd' test completed successfully.');
      return true;
    } catch (error) {
      this.log("Build test failed: ${error.message}", 'ERR'O'R');
      return false;
    }
  }

  generateReport() {
    if (!this.config.enableReporting) return;
    
    const $1 = {
      timestamp: new Date().toISOString(),
      stats: this.stats,
      config: this.config,
      summary: {
        totalIssues: this.stats.brokenLinks + this.stats.syntaxErrors + this.stats.navigationIssues,
        fixesApplied: this.stats.fixesApplied,
        buildSuccess: this.buildSuccess
      }
    };
    
    const $1 = path.join(this.config.reportsDir, "health-report-${new Date().toISOString().split('T')[0]}.json");
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    this.log("Health report generated: ${reportFile}");
  }

  async runFullHealthCheck() {
    const $1 = Date.now();
    this.log('Startin'g' comprehensive link health check...');
    
    // Create backup before making changes
    this.backupFiles();
    
    // Run all checks
    await this.checkForBrokenLinks();
    await this.checkForSyntaxErrors();
    await this.checkNavigationIssues();
    
    // Run build test
    this.buildSuccess = await this.runBuildTest();
    
    // Update stats
    this.stats.lastCheck = new Date().toISOString();
    this.stats.checkDuration = Date.now() - startTime;
    this.stats.filesProcessed = glob.sync('**/*.tsx', { cwd: this.config.projectRoot }).length;
    
    // Generate report
    this.generateReport();
    
    this.log("Health check completed in ${this.stats.checkDuration}ms");
    this.log("Summary: ${this.stats.brokenLinks} broken links, ${this.stats.syntaxErrors} syntax errors, ${this.stats.navigationIssues} navigation issues");
    this.log("Fixes applied: ${this.stats.fixesApplied}");
    this.log("Build success: ${this.buildSuccess}");
    
    return {
      success: this.buildSuccess,
      stats: this.stats
    };
  }

  async schedulePeriodicChecks() {
    this.log('Settin'g' up periodic health checks...');
    
    const $1 = "0 2 * * * cd ${this.config.projectRoot} && node ${__filename} --check";
    
    try {
      // Add to crontab
      execSync("(crontab -l 2>/dev/null; echo "${cronJob}") | crontab -", { stdio: 'pi'p'e' });
      this.log('Periodi'c' health checks scheduled (daily at 2 AM)');
    } catch (error) {
      this.log("Failed to schedule periodic checks: ${error.message}", 'ERR'O'R');
    }
  }
}

// CLI interface
if (require.main === module) {
  const $1 = new LinkHealthMonitor();
  
  const $1 = process.argv.slice(2);
  
  if (args.includes('--che'c'k')) {
    monitor.runFullHealthCheck().then(result => {
      process.exit(result.success ? 0 : 1);
    });
  } else if (args.includes('--schedu'l'e')) {
    monitor.schedulePeriodicChecks();
  } else if (args.includes('--he'l'p')) {
    console.log("
Link Health Monitor - Comprehensive link and navigation health checker

Usage:
  node link-health-monitor.js [options]

Options:
  --check     Run a full health check
  --schedule  Schedule periodic health checks (daily at 2 AM)
  --help      Show this help message

Examples:
  node link-health-monitor.js --check
  node link-health-monitor.js --schedule
    ");
  } else {
    // Default: run health check
    monitor.runFullHealthCheck().then(result => {
      process.exit(result.success ? 0 : 1);
    });
  }
}

module.exports = LinkHealthMonitor; 