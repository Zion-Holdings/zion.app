#!/usr/bin/env node

/**
 * Zion App - AI Delegation Cleanup Script
 *
 * Cleans up the AI-driven continuous improvement system
 */

const fs = require('fs')
const path = require('path')
const { execSync, spawn } = require('child_process');

// Configuration
const CONFIG = {
  // Processes to stop
  PROCESSES: [
    'ai-continuous-improvement.cjs',
    'cursor-ai-delegator.cjs',
    'multi-computer-coordinator.cjs',
  ],

  // Directories to clean
  DIRECTORIES: [
    'ai-improvement-data',
    'cursor-ai-data',
    'logs/ai-improvement',
    'logs/cursor-delegator',
    'logs/multi-coordinator',
  ],

  // Files to clean
  FILES: [
    '.env.ai-delegation',
    'ai-delegation-config.json',
    'logs/setup-report.json',
    'logs/test-report.json',
    'logs/ai-delegation-log-config.json',
  ],

  // Ports to check
  PORTS: [3001, 3002, 3003, 3004, 3005],
}
class AIDelegationCleanup {
  constructor() {
    this.cleanupLog = [];
    this.startTime = Date.now();
  }

  /**
   * Run the complete cleanup
   */
  async run() {
    console.log('🧹 Starting AI Delegation System Cleanup...\n');

    try {
      // Stop running processes
      await this.stopProcesses();

      // Clean up directories
      await this.cleanupDirectories();

      // Clean up files
      await this.cleanupFiles();

      // Check for remaining processes
      await this.checkRemainingProcesses();

      // Check for remaining ports
      await this.checkRemainingPorts();

      // Generate cleanup report
      await this.generateCleanupReport();

      console.log('\n✅ AI Delegation System cleanup completed successfully!');
    } catch (error) {
      console.error('\n❌ Cleanup failed:', error.message);
      await this.generateCleanupReport();
      process.exit(1);
    }
  }

  /**
   * Stop running processes
   */
  async stopProcesses() {
    console.log('🛑 Stopping running processes...');

    for (const processName of CONFIG.PROCESSES) {
      try {
        // Try to stop process gracefully
        execSync(`pkill -f "${processName}"`, { stdio: 'ignore' });
        this.logCleanup('INFO', `Sent stop signal to ${processName}`);

        // Wait a moment for graceful shutdown
        await this.sleep(2000);

        // Check if process is still running
        try {
          execSync(`pgrep -f "${processName}"`, { stdio: 'ignore' });
          this.logCleanup(
            'WARN',
            `${processName} is still running, force killing...`,
          );

          // Force kill if still running
          execSync(`pkill -9 -f "${processName}"`, { stdio: 'ignore' });
          this.logCleanup('INFO', `Force killed ${processName}`);
        } catch (error) {
          this.logCleanup('PASS', `${processName} stopped successfully`);
        }
      } catch (error) {
        this.logCleanup('INFO', `No running instances of ${processName} found`);
      }
    }

    console.log('✅ Process cleanup completed\n');
  }

  /**
   * Clean up directories
   */
  async cleanupDirectories() {
    console.log('📁 Cleaning up directories...');

    for (const dir of CONFIG.DIRECTORIES) {
      const dirPath = path.join(process.cwd(), dir);

      if (fs.existsSync(dirPath)) {
        try {
          // Check if directory is empty
          const files = fs.readdirSync(dirPath);

          if (files.length === 0) {
            fs.rmdirSync(dirPath);
            this.logCleanup('PASS', `Removed empty directory: ${dir}`);
          } else {
            // Remove all files in directory
            for (const file of files) {
              const filePath = path.join(dirPath, file)
const stat = fs.statSync(filePath);

              if (stat.isDirectory()) {
                fs.rmSync(filePath, { recursive: true, force: true });
              } else {
                fs.unlinkSync(filePath);
              }
            }

            // Remove directory
            fs.rmdirSync(dirPath);
            this.logCleanup('PASS', `Removed directory with contents: ${dir}`);
          }
        } catch (error) {
          this.logCleanup(
            'FAIL',
            `Failed to remove directory ${dir}: ${error.message}`,
          );
        }
      } else {
        this.logCleanup('INFO', `Directory does not exist: ${dir}`);
      }
    }

    console.log('✅ Directory cleanup completed\n');
  }

  /**
   * Clean up files
   */
  async cleanupFiles() {
    console.log('📄 Cleaning up files...');

    for (const file of CONFIG.FILES) {
      const filePath = path.join(process.cwd(), file);

      if (fs.existsSync(filePath)) {
        try {
          fs.unlinkSync(filePath);
          this.logCleanup('PASS', `Removed file: ${file}`);
        } catch (error) {
          this.logCleanup(
            'FAIL',
            `Failed to remove file ${file}: ${error.message}`,
          );
        }
      } else {
        this.logCleanup('INFO', `File does not exist: ${file}`);
      }
    }

    // Clean up temporary files
    await this.cleanupTempFiles();

    console.log('✅ File cleanup completed\n');
  }

  /**
   * Clean up temporary files
   */
  async cleanupTempFiles() {
    const tempPatterns = ['*.tmp', '*.log.tmp', '*.pid', '*.lock']
const tempDirs = ['logs', 'ai-improvement-data', 'cursor-ai-data'];

    for (const dir of tempDirs) {
      const dirPath = path.join(process.cwd(), dir);

      if (fs.existsSync(dirPath)) {
        try {
          const files = fs.readdirSync(dirPath);

          for (const file of files) {
            const filePath = path.join(dirPath, file);

            // Check if file matches temp patterns
            const isTempFile = tempPatterns.some((pattern) => {
              const regex = pattern.replace(/\*/g, '.*');
              return new RegExp(regex).test(file);
            });

            if (isTempFile) {
              try {
                fs.unlinkSync(filePath);
                this.logCleanup('PASS', `Removed temp file: ${dir}/${file}`);
              } catch (error) {
                this.logCleanup(
                  'WARN',
                  `Failed to remove temp file ${dir}/${file}: ${error.message}`,
                );
              }
            }
          }
        } catch (error) {
          this.logCleanup(
            'WARN',
            `Failed to scan directory ${dir}: ${error.message}`,
          );
        }
      }
    }
  }

  /**
   * Check for remaining processes
   */
  async checkRemainingProcesses() {
    console.log('🔍 Checking for remaining processes...');

    for (const processName of CONFIG.PROCESSES) {
      try {
        execSync(`pgrep -f "${processName}"`, { stdio: 'ignore' });
        this.logCleanup('FAIL', `${processName} is still running`);
      } catch (error) {
        this.logCleanup('PASS', `${processName} is not running`);
      }
    }

    console.log('✅ Process check completed\n');
  }

  /**
   * Check for remaining ports
   */
  async checkRemainingPorts() {
    console.log('🔌 Checking for remaining ports...');

    for (const port of CONFIG.PORTS) {
      try {
        execSync(`lsof -i :${port}`, { stdio: 'ignore' });
        this.logCleanup('WARN', `Port ${port} is still in use`);
      } catch (error) {
        this.logCleanup('PASS', `Port ${port} is free`);
      }
    }

    console.log('✅ Port check completed\n');
  }

  /**
   * Generate cleanup report
   */
  async generateCleanupReport() {
    console.log('📊 Generating cleanup report...')
const endTime = Date.now()
const duration = endTime - this.startTime
const report = {
      timestamp: new Date().toISOString(),
      duration: duration,
      summary: {
        total: this.cleanupLog.length,
        passed: this.cleanupLog.filter((r) => r.status === 'PASS').length,
        failed: this.cleanupLog.filter((r) => r.status === 'FAIL').length,
        warnings: this.cleanupLog.filter((r) => r.status === 'WARN').length,
        info: this.cleanupLog.filter((r) => r.status === 'INFO').length,
      },
      actions: {
        processes: CONFIG.PROCESSES.map((process) => ({
          name: process,
          stopped: this.cleanupLog.some(
            (r) => r.message.includes(process) && r.status === 'PASS',
          ),
        })),
        directories: CONFIG.DIRECTORIES.map((dir) => ({
          name: dir,
          cleaned: this.cleanupLog.some(
            (r) => r.message.includes(dir) && r.status === 'PASS',
          ),
        })),
        files: CONFIG.FILES.map((file) => ({
          name: file,
          cleaned: this.cleanupLog.some(
            (r) => r.message.includes(file) && r.status === 'PASS',
          ),
        })),
      },
      logs: this.cleanupLog,
      system: {
        nodeVersion: process.version,
        platform: process.platform,
        arch: process.arch,
        memory: Math.round(require('os').totalmem() / (1024 * 1024 * 1024)),
      },
    }
const reportPath = path.join(process.cwd(), 'logs', 'cleanup-report.json');

    // Ensure logs directory exists
    const logsDir = path.dirname(reportPath);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    // Print summary
    console.log('\n📋 Cleanup Summary:');
    console.log(`Total Actions: ${report.summary.total}`);
    console.log(`Successful: ${report.summary.passed}`);
    console.log(`Failed: ${report.summary.failed}`);
    console.log(`Warnings: ${report.summary.warnings}`);
    console.log(`Info: ${report.summary.info}`);
    console.log(`Duration: ${duration}ms`);

    if (report.summary.failed > 0) {
      console.log('\n❌ Failed Actions:');
      this.cleanupLog
        .filter((r) => r.status === 'FAIL')
        .forEach((r) => console.log(`  - ${r.message}`));
    }

    if (report.summary.warnings > 0) {
      console.log('\n⚠️  Warnings:');
      this.cleanupLog
        .filter((r) => r.status === 'WARN')
        .forEach((r) => console.log(`  - ${r.message}`));
    }

    this.logCleanup(
      'INFO',
      `Cleanup report saved to: logs/cleanup-report.json`,
    );
    console.log('✅ Cleanup report completed\n');
  }

  /**
   * Sleep utility
   */
  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  /**
   * Log cleanup action
   */
  logCleanup(status, message) {
    const result = {
      status,
      message,
      timestamp: new Date().toISOString(),
    };

    this.cleanupLog.push(result)
const statusIcon = {
      PASS: '✅',
      FAIL: '❌',
      WARN: '⚠️',
      INFO: 'ℹ️',
    };

    console.log(`${statusIcon[status] || '❓'} ${message}`);
  }
}

// CLI handling
if (require.main === module) {
  const cleanup = new AIDelegationCleanup();
  cleanup.run().catch((error) => {
    console.error('❌ Cleanup execution failed:', error);
    process.exit(1);
  });
}

module.exports = AIDelegationCleanup;
