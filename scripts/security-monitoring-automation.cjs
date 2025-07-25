const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json(),
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}

/**
 * Security Monitoring Automation System
 *
 * Autonomous system that continuously monitors security vulnerabilities,
 * performs security audits, and implements security improvements.
 */

const fs = require('fs').promises;
const path = require('path');
const { execSync, spawn } = require('child_process');
const EventEmitter = require('events');
const https = require('https');
const http = require('http');

class SecurityMonitoringAutomation extends EventEmitter {
  constructor() {
    super();

    this.config = {
      // Security thresholds
      thresholds: {
        vulnerabilitySeverity: {
          critical: 9.0,
          high: 7.0,
          medium: 4.0,
          low: 0.0,
        },
        scanInterval: 5 * 60 * 1000, // 5 minutes
        maxVulnerabilities: 10,
        maxHighSeverity: 3,
      },

      // Security tools
      tools: {
        npmAudit: true,
        snyk: process.env.SNYK_TOKEN ? true : false,
        sonarqube: process.env.SONARQUBE_URL ? true : false,
        owaspZap: true,
        dependencyCheck: true,
      },

      // Monitoring settings
      monitoring: {
        continuous: true,
        realTimeAlerts: true,
        autoFix: false, // Set to true for automatic fixes
        backupBeforeFix: true,
        whitelist: [], // Whitelist known false positives
      },

      // Paths
      paths: {
        projectRoot: process.cwd(),
        logs: path.join(process.cwd(), 'logs'),
        reports: path.join(process.cwd(), 'reports'),
        backups: path.join(process.cwd(), 'backups'),
        security: path.join(process.cwd(), 'security'),
      },
    };

    this.isRunning = false;
    this.currentScan = null;
    this.scanHistory = [];
    this.vulnerabilities = new Map();
    this.securityMetrics = [];
    this.stats = {
      totalScans: 0,
      successfulScans: 0,
      failedScans: 0,
      vulnerabilitiesFound: 0,
      vulnerabilitiesFixed: 0,
      lastScan: null,
    };

    this.initializeDirectories();
  }

  async initializeDirectories() {
    const dirs = [
      this.config.paths.logs,
      this.config.paths.reports,
      this.config.paths.backups,
      this.config.paths.security,
    ];

    for (const dir of dirs) {
      try {
        await fs.mkdir(dir, { recursive: true });
      } catch (error) {
        this.log('warn', `Failed to create directory ${dir}: ${error.message}`);
      }
    }
  }

  async start() {
    if (this.isRunning) {
      this.log('warn', 'Security Monitoring Automation is already running');
      return;
    }

    this.log('info', '🚀 Starting Security Monitoring Automation...');
    this.isRunning = true;

    // Start continuous monitoring
    this.startContinuousMonitoring();

    // Start periodic deep scan
    this.startPeriodicScan();

    this.log('info', '✅ Security Monitoring Automation started successfully');
    this.emit('started');
  }

  async stop() {
    if (!this.isRunning) {
      this.log('warn', 'Security Monitoring Automation is not running');
      return;
    }

    this.log('info', '🛑 Stopping Security Monitoring Automation...');
    this.isRunning = false;

    if (this.monitoringTimer) {
      clearInterval(this.monitoringTimer);
    }

    if (this.scanTimer) {
      clearInterval(this.scanTimer);
    }

    this.log('info', '✅ Security Monitoring Automation stopped');
    this.emit('stopped');
  }

  startContinuousMonitoring() {
    this.monitoringTimer = setInterval(async () => {
      if (this.isRunning && !this.currentScan) {
        await this.performQuickScan();
      }
    }, this.config.thresholds.scanInterval);
  }

  startPeriodicScan() {
    // Perform deep scan every hour
    this.scanTimer = setInterval(
      async () => {
        if (this.isRunning && !this.currentScan) {
          await this.performDeepScan();
        }
      },
      60 * 60 * 1000,
    );
  }

  async performQuickScan() {
    try {
      this.currentScan = {
        id: `scan_${Date.now()}`,
        type: 'quick',
        startTime: Date.now(),
        status: 'running',
      };

      this.log('info', '🔍 Starting quick security scan...');

      // Run npm audit
      const npmVulnerabilities = await this.runNpmAudit();

      // Run dependency check
      const dependencyVulnerabilities = await this.runDependencyCheck();

      // Combine vulnerabilities
      const allVulnerabilities = [
        ...npmVulnerabilities,
        ...dependencyVulnerabilities,
      ];

      // Analyze and prioritize
      const prioritizedVulnerabilities =
        this.prioritizeVulnerabilities(allVulnerabilities);

      // Check thresholds
      const criticalIssues = this.checkSecurityThresholds(
        prioritizedVulnerabilities,
      );

      // Auto-fix if enabled
      if (this.config.monitoring.autoFix && criticalIssues.length > 0) {
        await this.autoFixVulnerabilities(criticalIssues);
      }

      this.currentScan.status = 'completed';
      this.currentScan.endTime = Date.now();
      this.currentScan.results = {
        vulnerabilitiesFound: allVulnerabilities.length,
        criticalIssues: criticalIssues.length,
        fixedIssues: 0,
      };

      this.scanHistory.push(this.currentScan);
      this.stats.totalScans++;
      this.stats.successfulScans++;
      this.stats.vulnerabilitiesFound += allVulnerabilities.length;
      this.stats.lastScan = Date.now();

      this.log(
        'info',
        `✅ Quick scan completed: ${allVulnerabilities.length} vulnerabilities, ${criticalIssues.length} critical`,
      );
      this.emit('scanCompleted', this.currentScan);
    } catch (error) {
      this.log('error', `Quick scan failed: ${error.message}`);
      this.stats.failedScans++;
      this.emit('scanFailed', error);
    } finally {
      this.currentScan = null;
    }
  }

  async performDeepScan() {
    try {
      this.currentScan = {
        id: `scan_${Date.now()}`,
        type: 'deep',
        startTime: Date.now(),
        status: 'running',
      };

      this.log('info', '🔍 Starting deep security scan...');

      // Run all security tools
      const results = await Promise.allSettled([
        this.runNpmAudit(),
        this.runDependencyCheck(),
        this.runSnykScan(),
        this.runSonarQubeScan(),
        this.runOwaspZapScan(),
      ]);

      // Combine all results
      const allVulnerabilities = results
        .filter((result) => result.status === 'fulfilled')
        .flatMap((result) => result.value);

      // Remove duplicates and whitelist
      const uniqueVulnerabilities =
        this.deduplicateVulnerabilities(allVulnerabilities);
      const filteredVulnerabilities = this.filterWhitelisted(
        uniqueVulnerabilities,
      );

      // Prioritize vulnerabilities
      const prioritizedVulnerabilities = this.prioritizeVulnerabilities(
        filteredVulnerabilities,
      );

      // Check thresholds
      const criticalIssues = this.checkSecurityThresholds(
        prioritizedVulnerabilities,
      );

      // Generate detailed report
      await this.generateSecurityReport(prioritizedVulnerabilities);

      this.currentScan.status = 'completed';
      this.currentScan.endTime = Date.now();
      this.currentScan.results = {
        vulnerabilitiesFound: filteredVulnerabilities.length,
        criticalIssues: criticalIssues.length,
        toolsUsed: results.filter((r) => r.status === 'fulfilled').length,
      };

      this.scanHistory.push(this.currentScan);
      this.stats.totalScans++;
      this.stats.successfulScans++;
      this.stats.vulnerabilitiesFound += filteredVulnerabilities.length;
      this.stats.lastScan = Date.now();

      this.log(
        'info',
        `✅ Deep scan completed: ${filteredVulnerabilities.length} vulnerabilities, ${criticalIssues.length} critical`,
      );
      this.emit('scanCompleted', this.currentScan);
    } catch (error) {
      this.log('error', `Deep scan failed: ${error.message}`);
      this.stats.failedScans++;
      this.emit('scanFailed', error);
    } finally {
      this.currentScan = null;
    }
  }

  async runNpmAudit() {
    if (!this.config.tools.npmAudit) {
      return [];
    }

    try {
      const auditResult = execSync('npm audit --json', { encoding: 'utf8' });
      const audit = JSON.parse(auditResult);

      const vulnerabilities = [];

      for (const [packageName, vulns] of Object.entries(
        audit.vulnerabilities || {},
      )) {
        for (const vuln of vulns) {
          vulnerabilities.push({
            id: vuln.id,
            package: packageName,
            severity: vuln.severity,
            title: vuln.title,
            description: vuln.description,
            cwe: vuln.cwe,
            cvss: vuln.cvss,
            source: 'npm-audit',
            timestamp: Date.now(),
          });
        }
      }

      return vulnerabilities;
    } catch (error) {
      this.log('warn', `NPM audit failed: ${error.message}`);
      return [];
    }
  }

  async runDependencyCheck() {
    if (!this.config.tools.dependencyCheck) {
      return [];
    }

    try {
      // Run OWASP Dependency Check
      execSync('npx dependency-check --scan . --format JSON --out .', {
        stdio: 'pipe',
      });

      const reportPath = path.join(
        this.config.paths.projectRoot,
        'dependency-check-report.json',
      );
      const report = JSON.parse(await fs.readFile(reportPath, 'utf8'));

      const vulnerabilities = [];

      for (const vuln of report.dependencies || []) {
        for (const vulnerability of vuln.vulnerabilities || []) {
          vulnerabilities.push({
            id: vulnerability.name,
            package: vuln.fileName,
            severity: this.mapCvssToSeverity(vulnerability.cvssScore),
            title: vulnerability.name,
            description: vulnerability.description,
            cwe: vulnerability.cwe,
            cvss: vulnerability.cvssScore,
            source: 'dependency-check',
            timestamp: Date.now(),
          });
        }
      }

      return vulnerabilities;
    } catch (error) {
      this.log('warn', `Dependency check failed: ${error.message}`);
      return [];
    }
  }

  async runSnykScan() {
    if (!this.config.tools.snyk) {
      return [];
    }

    try {
      const snykResult = execSync('npx snyk test --json', { encoding: 'utf8' });
      const snyk = JSON.parse(snykResult);

      const vulnerabilities = [];

      for (const vuln of snyk.vulnerabilities || []) {
        vulnerabilities.push({
          id: vuln.id,
          package: vuln.packageName,
          severity: vuln.severity,
          title: vuln.title,
          description: vuln.description,
          cwe: vuln.identifiers?.CWE,
          cvss: vuln.cvssScore,
          source: 'snyk',
          timestamp: Date.now(),
        });
      }

      return vulnerabilities;
    } catch (error) {
      this.log('warn', `Snyk scan failed: ${error.message}`);
      return [];
    }
  }

  async runSonarQubeScan() {
    if (!this.config.tools.sonarqube) {
      return [];
    }

    try {
      // Run SonarQube scanner
      execSync('npx sonarqube-scanner', { stdio: 'pipe' });

      // Parse SonarQube results (simplified)
      return [];
    } catch (error) {
      this.log('warn', `SonarQube scan failed: ${error.message}`);
      return [];
    }
  }

  async runOwaspZapScan() {
    if (!this.config.tools.owaspZap) {
      return [];
    }

    try {
      // Run OWASP ZAP scan (simplified)
      return [];
    } catch (error) {
      this.log('warn', `OWASP ZAP scan failed: ${error.message}`);
      return [];
    }
  }

  prioritizeVulnerabilities(vulnerabilities) {
    return vulnerabilities
      .map((vuln) => ({
        ...vuln,
        priority: this.calculatePriority(vuln),
      }))
      .sort((a, b) => b.priority - a.priority);
  }

  calculatePriority(vulnerability) {
    let priority = 0;

    // Base priority from CVSS score
    if (vulnerability.cvss) {
      priority += vulnerability.cvss;
    }

    // Severity multiplier
    const severityMultipliers = {
      critical: 2.0,
      high: 1.5,
      medium: 1.0,
      low: 0.5,
    };

    priority *= severityMultipliers[vulnerability.severity] || 1.0;

    // Source reliability
    const sourceReliability = {
      'npm-audit': 1.0,
      snyk: 1.2,
      'dependency-check': 1.0,
      sonarqube: 0.8,
      'owasp-zap': 1.1,
    };

    priority *= sourceReliability[vulnerability.source] || 1.0;

    return priority;
  }

  checkSecurityThresholds(vulnerabilities) {
    const criticalIssues = [];

    // Check total vulnerabilities
    if (vulnerabilities.length > this.config.thresholds.maxVulnerabilities) {
      criticalIssues.push({
        type: 'too-many-vulnerabilities',
        count: vulnerabilities.length,
        threshold: this.config.thresholds.maxVulnerabilities,
        message: `Too many vulnerabilities found: ${vulnerabilities.length}`,
      });
    }

    // Check high severity vulnerabilities
    const highSeverity = vulnerabilities.filter(
      (v) => v.severity === 'high' || v.severity === 'critical',
    );

    if (highSeverity.length > this.config.thresholds.maxHighSeverity) {
      criticalIssues.push({
        type: 'too-many-high-severity',
        count: highSeverity.length,
        threshold: this.config.thresholds.maxHighSeverity,
        message: `Too many high severity vulnerabilities: ${highSeverity.length}`,
      });
    }

    // Check critical vulnerabilities
    const criticalVulns = vulnerabilities.filter(
      (v) => v.severity === 'critical',
    );
    if (criticalVulns.length > 0) {
      criticalIssues.push({
        type: 'critical-vulnerabilities',
        count: criticalVulns.length,
        vulnerabilities: criticalVulns,
        message: `Critical vulnerabilities found: ${criticalVulns.length}`,
      });
    }

    return criticalIssues;
  }

  async autoFixVulnerabilities(criticalIssues) {
    this.log(
      'info',
      `🔧 Auto-fixing ${criticalIssues.length} critical security issues...`,
    );

    let fixedCount = 0;

    for (const issue of criticalIssues) {
      try {
        if (issue.type === 'critical-vulnerabilities') {
          for (const vuln of issue.vulnerabilities) {
            const fixed = await this.fixVulnerability(vuln);
            if (fixed) {
              fixedCount++;
            }
          }
        }
      } catch (error) {
        this.log(
          'error',
          `Failed to fix issue ${issue.type}: ${error.message}`,
        );
      }
    }

    this.stats.vulnerabilitiesFixed += fixedCount;
    this.log('info', `✅ Auto-fixed ${fixedCount} vulnerabilities`);
  }

  async fixVulnerability(vulnerability) {
    try {
      // Create backup if enabled
      if (this.config.monitoring.backupBeforeFix) {
        await this.createBackup();
      }

      switch (vulnerability.source) {
        case 'npm-audit':
          return await this.fixNpmVulnerability(vulnerability);
        case 'snyk':
          return await this.fixSnykVulnerability(vulnerability);
        default:
          this.log(
            'warn',
            `No fix available for ${vulnerability.source} vulnerability`,
          );
          return false;
      }
    } catch (error) {
      this.log(
        'error',
        `Failed to fix vulnerability ${vulnerability.id}: ${error.message}`,
      );
      return false;
    }
  }

  async fixNpmVulnerability(vulnerability) {
    try {
      // Run npm audit fix
      execSync('npm audit fix', { stdio: 'pipe' });

      // For high severity, try force fix
      if (
        vulnerability.severity === 'high' ||
        vulnerability.severity === 'critical'
      ) {
        execSync('npm audit fix --force', { stdio: 'pipe' });
      }

      return true;
    } catch (error) {
      this.log('warn', `Failed to fix NPM vulnerability: ${error.message}`);
      return false;
    }
  }

  async fixSnykVulnerability(vulnerability) {
    try {
      // Run Snyk fix
      execSync(`npx snyk fix --package-manager=npm`, { stdio: 'pipe' });
      return true;
    } catch (error) {
      this.log('warn', `Failed to fix Snyk vulnerability: ${error.message}`);
      return false;
    }
  }

  deduplicateVulnerabilities(vulnerabilities) {
    const seen = new Set();
    return vulnerabilities.filter((vuln) => {
      const key = `${vuln.id}-${vuln.package}-${vuln.source}`;
      if (seen.has(key)) {
        return false;
      }
      seen.add(key);
      return true;
    });
  }

  filterWhitelisted(vulnerabilities) {
    return vulnerabilities.filter(
      (vuln) =>
        !this.config.monitoring.whitelist.some(
          (whitelisted) =>
            whitelisted.id === vuln.id || whitelisted.package === vuln.package,
        ),
    );
  }

  mapCvssToSeverity(cvssScore) {
    if (cvssScore >= 9.0) return 'critical';
    if (cvssScore >= 7.0) return 'high';
    if (cvssScore >= 4.0) return 'medium';
    return 'low';
  }

  async createBackup() {
    const backupPath = path.join(
      this.config.paths.backups,
      `security-backup-${Date.now()}`,
    );
    await fs.mkdir(backupPath, { recursive: true });

    // Backup package files
    const filesToBackup = ['package.json', 'package-lock.json', 'yarn.lock'];

    for (const file of filesToBackup) {
      try {
        const sourcePath = path.join(this.config.paths.projectRoot, file);
        const destPath = path.join(backupPath, file);

        if (await this.fileExists(sourcePath)) {
          await this.copyFile(sourcePath, destPath);
        }
      } catch (error) {
        this.log('warn', `Failed to backup ${file}: ${error.message}`);
      }
    }
  }

  async generateSecurityReport(vulnerabilities) {
    const report = {
      timestamp: Date.now(),
      stats: this.stats,
      recentScans: this.scanHistory.slice(-10),
      vulnerabilities: vulnerabilities,
      summary: {
        totalVulnerabilities: vulnerabilities.length,
        bySeverity: this.groupBySeverity(vulnerabilities),
        bySource: this.groupBySource(vulnerabilities),
        topVulnerabilities: vulnerabilities.slice(0, 10),
        recommendations: this.generateRecommendations(vulnerabilities),
      },
    };

    const reportPath = path.join(
      this.config.paths.reports,
      `security-report-${Date.now()}.json`,
    );
    await fs.writeFile(reportPath, JSON.stringify(report, null, 2));

    this.log('info', `Generated security report: ${reportPath}`);
    return report;
  }

  groupBySeverity(vulnerabilities) {
    const groups = { critical: 0, high: 0, medium: 0, low: 0 };

    for (const vuln of vulnerabilities) {
      groups[vuln.severity] = (groups[vuln.severity] || 0) + 1;
    }

    return groups;
  }

  groupBySource(vulnerabilities) {
    const groups = {};

    for (const vuln of vulnerabilities) {
      groups[vuln.source] = (groups[vuln.source] || 0) + 1;
    }

    return groups;
  }

  generateRecommendations(vulnerabilities) {
    const recommendations = [];

    // High severity recommendations
    const highSeverity = vulnerabilities.filter(
      (v) => v.severity === 'high' || v.severity === 'critical',
    );
    if (highSeverity.length > 0) {
      recommendations.push({
        priority: 'critical',
        action: 'Fix high severity vulnerabilities immediately',
        count: highSeverity.length,
        vulnerabilities: highSeverity.slice(0, 5),
      });
    }

    // Update recommendations
    const outdated = vulnerabilities.filter((v) => v.source === 'npm-audit');
    if (outdated.length > 0) {
      recommendations.push({
        priority: 'high',
        action: 'Update outdated dependencies',
        count: outdated.length,
      });
    }

    // Security best practices
    recommendations.push({
      priority: 'medium',
      action: 'Implement security headers and CSP',
      description: 'Add security headers to prevent common attacks',
    });

    return recommendations;
  }

  async fileExists(filePath) {
    try {
      await fs.access(filePath);
      return true;
    } catch {
      return false;
    }
  }

  async copyFile(source, dest) {
    const content = await fs.readFile(source);
    await fs.writeFile(dest, content);
  }

  log(level, message) {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level.toUpperCase()}] [SECURITY] ${message}`;

    logger.info(logMessage);

    // Save to log file
    const logPath = path.join(
      this.config.paths.logs,
      'security-monitoring.log',
    );
    fs.appendFile(logPath, logMessage + '\n').catch(() => {});
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      currentScan: this.currentScan,
      stats: this.stats,
      recentVulnerabilities: Array.from(this.vulnerabilities.values()).slice(
        -10,
      ),
      lastScan: this.stats.lastScan,
    };
  }
}

// CLI Interface
async function main() {
  const automation = new SecurityMonitoringAutomation();
  const command = process.argv[2];

  switch (command) {
    case 'start':
      await automation.start();
      break;
    case 'stop':
      await automation.stop();
      break;
    case 'status':
      logger.info(JSON.stringify(automation.getStatus(), null, 2));
      break;
    case 'scan':
      await automation.performQuickScan();
      break;
    case 'deep':
      await automation.performDeepScan();
      break;
    default:
      logger.info(
        'Usage: node security-monitoring-automation.cjs [start|stop|status|scan|deep]',
      );
      break;
  }
}

if (require.main === module) {
  main().catch((error) => {
    logger.error('Security Monitoring Automation failed:', error.message);
    process.exit(1);
  });
}

module.exports = SecurityMonitoringAutomation;

// Graceful shutdown handling
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});
