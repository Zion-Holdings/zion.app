#!/usr/bin/env node

/**
 * PM2 Schedulers Report
 * Generates a comprehensive report of PM2 processes and their scheduling
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class PM2SchedulersReport {
  constructor() {
    this.reportDir = path.join(__dirname, '..', 'public', 'reports', 'pm2');
    this.ensureReportDirectory();
  }

  ensureReportDirectory() {
    if (!fs.existsSync(this.reportDir)) {
      fs.mkdirSync(this.reportDir, { recursive: true });
    }
  }

  async getPM2Status() {
    try {
      const output = execSync('pm2 jlist', { encoding: 'utf8' });
      return JSON.parse(output);
    } catch (error) {
      console.error('❌ Failed to get PM2 status:', error.message);
      return [];
    }
  }

  async getPM2Logs(processName, lines = 50) {
    try {
      const output = execSync(`pm2 logs ${processName} --lines ${lines} --nostream`, { encoding: 'utf8' });
      return output;
    } catch (error) {
      return `No logs available for ${processName}`;
    }
  }

  async getPM2Info(processName) {
    try {
      const output = execSync(`pm2 show ${processName}`, { encoding: 'utf8' });
      return output;
    } catch (error) {
      return `No information available for ${processName}`;
    }
  }

  async generateReport() {
    console.log('📊 Generating PM2 Schedulers Report...');
    
    const processes = await this.getPM2Status();
    const report = {
      generated: new Date().toISOString(),
      summary: {
        total: processes.length,
        running: 0,
        stopped: 0,
        errored: 0,
        restarts: 0
      },
      processes: [],
      recommendations: []
    };

    for (const process of processes) {
      const processInfo = {
        name: process.name,
        id: process.pm_id,
        status: process.pm2_env.status,
        uptime: process.pm2_env.pm_uptime,
        restarts: process.pm2_env.restart_time,
        memory: process.monit.memory,
        cpu: process.monit.cpu,
        pid: process.pid,
        pm2_env: {
          instances: process.pm2_env.instances,
          exec_mode: process.pm2_env.exec_mode,
          node_version: process.pm2_env.node_version,
          pm_cwd: process.pm2_env.pm_cwd
        }
      };

      // Update summary
      if (process.pm2_env.status === 'online') {
        report.summary.running++;
      } else if (process.pm2_env.status === 'stopped') {
        report.summary.stopped++;
      } else {
        report.summary.errored++;
      }
      
      report.summary.restarts += process.pm2_env.restart_time;

      // Add process info
      report.processes.push(processInfo);

      // Generate recommendations
      if (process.pm2_env.restart_time > 10) {
        report.recommendations.push({
          process: process.name,
          issue: 'High restart count',
          recommendation: 'Investigate why this process keeps restarting'
        });
      }

      if (process.monit.memory > 500 * 1024 * 1024) { // 500MB
        report.recommendations.push({
          process: process.name,
          issue: 'High memory usage',
          recommendation: 'Consider memory optimization or increase memory limit'
        });
      }

      if (process.monit.cpu > 80) {
        report.recommendations.push({
          process: process.name,
          issue: 'High CPU usage',
          recommendation: 'Investigate CPU-intensive operations'
        });
      }
    }

    // Add general recommendations
    if (report.summary.errored > 0) {
      report.recommendations.push({
        process: 'System',
        issue: 'Processes in error state',
        recommendation: 'Check PM2 logs and restart failed processes'
      });
    }

    if (report.summary.restarts > 50) {
      report.recommendations.push({
        process: 'System',
        issue: 'High restart frequency',
        recommendation: 'Review process stability and error handling'
      });
    }

    return report;
  }

  async saveReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportFile = path.join(this.reportDir, `pm2-report-${timestamp}.json`);
    const latestFile = path.join(this.reportDir, 'latest.json');
    
    // Save timestamped report
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
    
    // Save as latest
    fs.writeFileSync(latestFile, JSON.stringify(report, null, 2));
    
    // Generate HTML report
    const htmlReport = this.generateHTMLReport(report);
    const htmlFile = path.join(this.reportDir, `pm2-report-${timestamp}.html`);
    const latestHtmlFile = path.join(this.reportDir, 'latest.html');
    
    fs.writeFileSync(htmlFile, htmlReport);
    fs.writeFileSync(latestHtmlFile, htmlReport);
    
    console.log(`✅ PM2 report saved to: ${reportFile}`);
    console.log(`✅ HTML report saved to: ${htmlFile}`);
    
    return { json: reportFile, html: htmlFile };
  }

  generateHTMLReport(report) {
    return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PM2 Schedulers Report</title>
    <style>
        body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; margin: 0; padding: 20px; background: #f5f5f5; }
        .container { max-width: 1200px; margin: 0 auto; background: white; border-radius: 8px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); overflow: hidden; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 30px; text-align: center; }
        .header h1 { margin: 0; font-size: 2.5em; }
        .header p { margin: 10px 0 0 0; opacity: 0.9; }
        .summary { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; padding: 30px; background: #f8f9fa; }
        .summary-card { background: white; padding: 20px; border-radius: 8px; text-align: center; box-shadow: 0 2px 5px rgba(0,0,0,0.1); }
        .summary-card h3 { margin: 0 0 10px 0; color: #333; }
        .summary-card .number { font-size: 2em; font-weight: bold; color: #667eea; }
        .processes { padding: 30px; }
        .process-card { background: white; border: 1px solid #e9ecef; border-radius: 8px; padding: 20px; margin-bottom: 20px; box-shadow: 0 2px 5px rgba(0,0,0,0.05); }
        .process-header { display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px; }
        .process-name { font-size: 1.2em; font-weight: bold; color: #333; }
        .process-status { padding: 4px 12px; border-radius: 20px; font-size: 0.9em; font-weight: bold; }
        .status-online { background: #d4edda; color: #155724; }
        .status-stopped { background: #f8d7da; color: #721c24; }
        .status-errored { background: #fff3cd; color: #856404; }
        .process-details { display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; }
        .detail-item { text-align: center; }
        .detail-label { font-size: 0.9em; color: #666; margin-bottom: 5px; }
        .detail-value { font-weight: bold; color: #333; }
        .recommendations { padding: 30px; background: #f8f9fa; }
        .recommendation { background: white; border-left: 4px solid #ffc107; padding: 15px; margin-bottom: 15px; border-radius: 0 8px 8px 0; }
        .recommendation h4 { margin: 0 0 10px 0; color: #333; }
        .recommendation p { margin: 0; color: #666; }
        .timestamp { text-align: center; padding: 20px; color: #666; font-size: 0.9em; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>PM2 Schedulers Report</h1>
            <p>Comprehensive overview of PM2 processes and system health</p>
        </div>
        
        <div class="summary">
            <div class="summary-card">
                <h3>Total Processes</h3>
                <div class="number">${report.summary.total}</div>
            </div>
            <div class="summary-card">
                <h3>Running</h3>
                <div class="number">${report.summary.running}</div>
            </div>
            <div class="summary-card">
                <h3>Stopped</h3>
                <div class="number">${report.summary.stopped}</div>
            </div>
            <div class="summary-card">
                <h3>Total Restarts</h3>
                <div class="number">${report.summary.restarts}</div>
            </div>
        </div>
        
        <div class="processes">
            <h2>Process Details</h2>
            ${report.processes.map(process => `
                <div class="process-card">
                    <div class="process-header">
                        <div class="process-name">${process.name}</div>
                        <div class="process-status status-${process.status}">${process.status}</div>
                    </div>
                    <div class="process-details">
                        <div class="detail-item">
                            <div class="detail-label">ID</div>
                            <div class="detail-value">${process.id}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Memory</div>
                            <div class="detail-value">${Math.round(process.memory / 1024 / 1024)}MB</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">CPU</div>
                            <div class="detail-value">${process.cpu}%</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Restarts</div>
                            <div class="detail-value">${process.restarts}</div>
                        </div>
                        <div class="detail-item">
                            <div class="detail-label">Uptime</div>
                            <div class="detail-value">${Math.round(process.uptime / 1000 / 60)}m</div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
        
        ${report.recommendations.length > 0 ? `
        <div class="recommendations">
            <h2>Recommendations</h2>
            ${report.recommendations.map(rec => `
                <div class="recommendation">
                    <h4>${rec.process} - ${rec.issue}</h4>
                    <p>${rec.recommendation}</p>
                </div>
            `).join('')}
        </div>
        ` : ''}
        
        <div class="timestamp">
            Report generated on ${new Date(report.generated).toLocaleString()}
        </div>
    </div>
</body>
</html>`;
  }
}

// CLI execution
async function main() {
  const reporter = new PM2SchedulersReport();
  
  try {
    const report = await reporter.generateReport();
    await reporter.saveReport(report);
    
    console.log('\n📊 Report Summary:');
    console.log(`  Total processes: ${report.summary.total}`);
    console.log(`  Running: ${report.summary.running}`);
    console.log(`  Stopped: ${report.summary.stopped}`);
    console.log(`  Total restarts: ${report.summary.restarts}`);
    console.log(`  Recommendations: ${report.recommendations.length}`);
    
  } catch (error) {
    console.error('❌ Failed to generate report:', error.message);
    process.exit(1);
  }
}

if (require.main === module) {
  main();
}

module.exports = PM2SchedulersReport;