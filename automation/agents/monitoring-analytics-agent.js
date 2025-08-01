const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class MonitoringAnalyticsAgent {
  constructor() {
    this.agentId = process.env.AGENT_ID;
    this.agentType = process.env.AGENT_TYPE;
    this.config = JSON.parse(process.env.AGENT_CONFIG || '{}');
    this.projectRoot = path.resolve(__dirname, '../..');
    this.reportsDir = path.join(__dirname, '../reports/monitoring-analytics');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      this.reportsDir,
      path.join(this.reportsDir, 'system-metrics'),
      path.join(this.reportsDir, 'performance-analytics'),
      path.join(this.reportsDir, 'trend-analysis'),
      path.join(this.reportsDir, 'alert-reports'),
      path.join(this.reportsDir, 'dashboard-data')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async start() {
    console.log(`Monitoring Analytics Agent ${this.agentId} started`);
    
    // Initial system analysis
    await this.analyzeSystem();
    
    // Start continuous monitoring
    setInterval(() => {
      this.monitorSystem();
    }, 300000); // Every 5 minutes
    
    // Start performance analytics
    setInterval(() => {
      this.analyzePerformance();
    }, 900000); // Every 15 minutes
    
    // Start trend analysis
    setInterval(() => {
      this.analyzeTrends();
    }, 3600000); // Every hour
  }

  async analyzeSystem() {
    try {
      console.log('Performing comprehensive system analysis...');
      
      const analysis = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        systemMetrics: {},
        performanceMetrics: {},
        resourceUsage: {},
        agentStatus: {},
        alerts: []
      };
      
      // Analyze system metrics
      analysis.systemMetrics = await this.getSystemMetrics();
      
      // Analyze performance metrics
      analysis.performanceMetrics = await this.getPerformanceMetrics();
      
      // Analyze resource usage
      analysis.resourceUsage = await this.getResourceUsage();
      
      // Check agent status
      analysis.agentStatus = await this.getAgentStatus();
      
      // Generate alerts
      analysis.alerts = this.generateAlerts(analysis);
      
      // Save analysis report
      await this.saveAnalysisReport(analysis);
      
      console.log('System analysis completed');
      
    } catch (error) {
      console.error('System analysis failed:', error);
    }
  }

  async getSystemMetrics() {
    const metrics = {
      uptime: 0,
      loadAverage: [],
      cpuUsage: 0,
      memoryUsage: 0,
      diskUsage: 0,
      networkUsage: 0
    };
    
    try {
      // Get system uptime
      const { stdout: uptimeOutput } = await execAsync('uptime');
      const uptimeMatch = uptimeOutput.match(/up\s+([^,]+)/);
      if (uptimeMatch) {
        metrics.uptime = uptimeMatch[1];
      }
      
      // Get load average
      const loadMatch = uptimeOutput.match(/load average:\s+([^,]+),\s+([^,]+),\s+([^,]+)/);
      if (loadMatch) {
        metrics.loadAverage = [
          parseFloat(loadMatch[1]),
          parseFloat(loadMatch[2]),
          parseFloat(loadMatch[3])
        ];
      }
      
      // Get CPU usage
      const { stdout: cpuOutput } = await execAsync('top -l 1 | grep "CPU usage" | awk \'{print $3}\' | sed \'s/%//\'');
      metrics.cpuUsage = parseFloat(cpuOutput) || 0;
      
      // Get memory usage
      const { stdout: memOutput } = await execAsync('vm_stat');
      const memLines = memOutput.split('\n');
      let totalMemory = 0;
      let usedMemory = 0;
      
      for (const line of memLines) {
        if (line.includes('Pages free:')) {
          const free = parseInt(line.match(/\d+/)[0]);
          totalMemory += free;
        } else if (line.includes('Pages active:')) {
          const active = parseInt(line.match(/\d+/)[0]);
          usedMemory += active;
        }
      }
      
      metrics.memoryUsage = totalMemory > 0 ? (usedMemory / totalMemory) * 100 : 0;
      
      // Get disk usage
      const { stdout: diskOutput } = await execAsync('df -h . | tail -1 | awk \'{print $5}\' | sed \'s/%//\'');
      metrics.diskUsage = parseFloat(diskOutput) || 0;
      
      // Get network usage (simplified)
      metrics.networkUsage = await this.getNetworkUsage();
      
    } catch (error) {
      console.error('Failed to get system metrics:', error);
    }
    
    return metrics;
  }

  async getNetworkUsage() {
    try {
      const { stdout } = await execAsync('netstat -i | grep -E "en0|en1" | awk \'{print $3 + $7}\'');
      return parseFloat(stdout) || 0;
    } catch (error) {
      return 0;
    }
  }

  async getPerformanceMetrics() {
    const metrics = {
      buildTime: 0,
      testTime: 0,
      deploymentTime: 0,
      responseTime: 0,
      throughput: 0
    };
    
    try {
      // Measure build time
      const buildStart = Date.now();
      try {
        await execAsync('npm run build', {
          cwd: this.projectRoot,
          timeout: 300000
        });
        metrics.buildTime = Date.now() - buildStart;
      } catch (error) {
        console.error('Build failed:', error);
      }
      
      // Measure test time
      const testStart = Date.now();
      try {
        await execAsync('npm test', {
          cwd: this.projectRoot,
          timeout: 120000
        });
        metrics.testTime = Date.now() - testStart;
      } catch (error) {
        console.error('Tests failed:', error);
      }
      
      // Measure response time
      try {
        const { stdout } = await execAsync('curl -s -w "%{time_total}" http://localhost:3000', {
          timeout: 10000
        });
        metrics.responseTime = parseFloat(stdout) * 1000; // Convert to milliseconds
      } catch (error) {
        console.error('Response time measurement failed:', error);
      }
      
      // Calculate throughput (requests per second)
      metrics.throughput = metrics.responseTime > 0 ? 1000 / metrics.responseTime : 0;
      
    } catch (error) {
      console.error('Failed to get performance metrics:', error);
    }
    
    return metrics;
  }

  async getResourceUsage() {
    const usage = {
      cpu: {},
      memory: {},
      disk: {},
      network: {}
    };
    
    try {
      // Get CPU usage by process
      const { stdout: cpuOutput } = await execAsync('ps aux | grep -E "(node|npm)" | grep -v grep');
      const cpuLines = cpuOutput.split('\n').filter(line => line);
      
      for (const line of cpuLines) {
        const parts = line.split(/\s+/);
        if (parts.length > 2) {
          const process = parts[10] || parts[0];
          const cpu = parseFloat(parts[2]) || 0;
          usage.cpu[process] = cpu;
        }
      }
      
      // Get memory usage by process
      const { stdout: memOutput } = await execAsync('ps aux | grep -E "(node|npm)" | grep -v grep');
      const memLines = memOutput.split('\n').filter(line => line);
      
      for (const line of memLines) {
        const parts = line.split(/\s+/);
        if (parts.length > 2) {
          const process = parts[10] || parts[0];
          const memory = parseFloat(parts[5]) || 0;
          usage.memory[process] = memory;
        }
      }
      
      // Get disk usage
      const { stdout: diskOutput } = await execAsync('du -sh .');
      usage.disk.current = diskOutput.trim();
      
      // Get available disk space
      const { stdout: spaceOutput } = await execAsync('df -h . | tail -1');
      const spaceParts = spaceOutput.split(/\s+/);
      usage.disk.available = spaceParts[3];
      usage.disk.total = spaceParts[1];
      
    } catch (error) {
      console.error('Failed to get resource usage:', error);
    }
    
    return usage;
  }

  async getAgentStatus() {
    const status = {
      runningAgents: [],
      stoppedAgents: [],
      failedAgents: [],
      agentMetrics: {}
    };
    
    try {
      // Check for running Node.js processes (agents)
      const { stdout } = await execAsync('ps aux | grep "node.*agent" | grep -v grep');
      const processes = stdout.split('\n').filter(line => line);
      
      for (const process of processes) {
        const parts = process.split(/\s+/);
        if (parts.length > 2) {
          const agentName = parts[10] || parts[0];
          const cpu = parseFloat(parts[2]) || 0;
          const memory = parseFloat(parts[5]) || 0;
          
          status.runningAgents.push({
            name: agentName,
            pid: parts[1],
            cpu: cpu,
            memory: memory
          });
          
          status.agentMetrics[agentName] = {
            cpu: cpu,
            memory: memory,
            status: 'running'
          };
        }
      }
      
      // Check for stopped agents by looking at log files
      const logDir = path.join(__dirname, '../logs');
      if (fs.existsSync(logDir)) {
        const logFiles = fs.readdirSync(logDir);
        for (const logFile of logFiles) {
          if (logFile.includes('error') || logFile.includes('failed')) {
            status.failedAgents.push(logFile);
          }
        }
      }
      
    } catch (error) {
      console.error('Failed to get agent status:', error);
    }
    
    return status;
  }

  generateAlerts(analysis) {
    const alerts = [];
    
    // CPU usage alerts
    if (analysis.systemMetrics.cpuUsage > 80) {
      alerts.push({
        type: 'high_cpu_usage',
        severity: 'warning',
        message: `High CPU usage: ${analysis.systemMetrics.cpuUsage.toFixed(1)}%`,
        value: analysis.systemMetrics.cpuUsage,
        threshold: 80
      });
    }
    
    if (analysis.systemMetrics.cpuUsage > 95) {
      alerts.push({
        type: 'critical_cpu_usage',
        severity: 'critical',
        message: `Critical CPU usage: ${analysis.systemMetrics.cpuUsage.toFixed(1)}%`,
        value: analysis.systemMetrics.cpuUsage,
        threshold: 95
      });
    }
    
    // Memory usage alerts
    if (analysis.systemMetrics.memoryUsage > 80) {
      alerts.push({
        type: 'high_memory_usage',
        severity: 'warning',
        message: `High memory usage: ${analysis.systemMetrics.memoryUsage.toFixed(1)}%`,
        value: analysis.systemMetrics.memoryUsage,
        threshold: 80
      });
    }
    
    // Disk usage alerts
    if (analysis.systemMetrics.diskUsage > 90) {
      alerts.push({
        type: 'high_disk_usage',
        severity: 'critical',
        message: `High disk usage: ${analysis.systemMetrics.diskUsage.toFixed(1)}%`,
        value: analysis.systemMetrics.diskUsage,
        threshold: 90
      });
    }
    
    // Performance alerts
    if (analysis.performanceMetrics.buildTime > 120000) { // 2 minutes
      alerts.push({
        type: 'slow_build',
        severity: 'warning',
        message: `Slow build time: ${(analysis.performanceMetrics.buildTime / 1000).toFixed(1)}s`,
        value: analysis.performanceMetrics.buildTime,
        threshold: 120000
      });
    }
    
    if (analysis.performanceMetrics.responseTime > 3000) { // 3 seconds
      alerts.push({
        type: 'slow_response',
        severity: 'warning',
        message: `Slow response time: ${analysis.performanceMetrics.responseTime.toFixed(0)}ms`,
        value: analysis.performanceMetrics.responseTime,
        threshold: 3000
      });
    }
    
    // Agent failure alerts
    if (analysis.agentStatus.failedAgents.length > 0) {
      alerts.push({
        type: 'agent_failures',
        severity: 'critical',
        message: `${analysis.agentStatus.failedAgents.length} agent(s) failed`,
        value: analysis.agentStatus.failedAgents.length,
        agents: analysis.agentStatus.failedAgents
      });
    }
    
    return alerts;
  }

  async monitorSystem() {
    try {
      console.log('Monitoring system...');
      
      const monitoring = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        metrics: await this.getSystemMetrics(),
        alerts: []
      };
      
      // Generate alerts
      monitoring.alerts = this.generateAlerts(monitoring);
      
      // Save monitoring report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'system-metrics', `monitoring-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(monitoring, null, 2));
      
      // Handle critical alerts
      const criticalAlerts = monitoring.alerts.filter(alert => alert.severity === 'critical');
      if (criticalAlerts.length > 0) {
        await this.handleCriticalAlerts(criticalAlerts);
      }
      
    } catch (error) {
      console.error('System monitoring failed:', error);
    }
  }

  async handleCriticalAlerts(alerts) {
    for (const alert of alerts) {
      console.log(`Critical Alert [${alert.severity.toUpperCase()}]: ${alert.message}`);
      
      switch (alert.type) {
        case 'critical_cpu_usage':
          await this.handleHighCPUUsage();
          break;
        case 'high_disk_usage':
          await this.handleHighDiskUsage();
          break;
        case 'agent_failures':
          await this.handleAgentFailures(alert.agents);
          break;
        default:
          console.log(`No specific handler for alert type: ${alert.type}`);
      }
    }
  }

  async handleHighCPUUsage() {
    try {
      console.log('Handling high CPU usage...');
      
      // Kill non-essential processes
      const { stdout } = await execAsync('ps aux | grep -E "(node|npm)" | grep -v grep | awk \'{print $2}\'');
      const pids = stdout.trim().split('\n').filter(pid => pid);
      
      for (const pid of pids.slice(0, 2)) { // Kill first 2 processes
        try {
          await execAsync(`kill ${pid}`);
          console.log(`Killed process ${pid}`);
        } catch (error) {
          console.error(`Failed to kill process ${pid}:`, error);
        }
      }
      
    } catch (error) {
      console.error('Failed to handle high CPU usage:', error);
    }
  }

  async handleHighDiskUsage() {
    try {
      console.log('Handling high disk usage...');
      
      // Clean up old log files
      const logDir = path.join(__dirname, '../logs');
      if (fs.existsSync(logDir)) {
        const logFiles = fs.readdirSync(logDir);
        const oldLogs = logFiles.filter(file => {
          const filePath = path.join(logDir, file);
          const stats = fs.statSync(filePath);
          const daysOld = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60 * 24);
          return daysOld > 7; // Delete logs older than 7 days
        });
        
        for (const logFile of oldLogs) {
          fs.unlinkSync(path.join(logDir, logFile));
          console.log(`Deleted old log file: ${logFile}`);
        }
      }
      
      // Clean up old reports
      const reportsDir = path.join(__dirname, '../reports');
      if (fs.existsSync(reportsDir)) {
        const reportDirs = fs.readdirSync(reportsDir);
        for (const reportDir of reportDirs) {
          const reportPath = path.join(reportsDir, reportDir);
          const stats = fs.statSync(reportPath);
          const daysOld = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60 * 24);
          
          if (daysOld > 30) { // Delete reports older than 30 days
            fs.rmSync(reportPath, { recursive: true, force: true });
            console.log(`Deleted old report directory: ${reportDir}`);
          }
        }
      }
      
    } catch (error) {
      console.error('Failed to handle high disk usage:', error);
    }
  }

  async handleAgentFailures(failedAgents) {
    try {
      console.log('Handling agent failures...');
      
      for (const agent of failedAgents) {
        console.log(`Attempting to restart failed agent: ${agent}`);
        
        // This would involve restarting the specific agent
        // For now, we'll just log the attempt
        console.log(`Restart attempt logged for agent: ${agent}`);
      }
      
    } catch (error) {
      console.error('Failed to handle agent failures:', error);
    }
  }

  async analyzePerformance() {
    try {
      console.log('Analyzing performance...');
      
      const performanceReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        metrics: await this.getPerformanceMetrics(),
        trends: {},
        recommendations: []
      };
      
      // Analyze trends
      performanceReport.trends = await this.analyzePerformanceTrends();
      
      // Generate recommendations
      performanceReport.recommendations = this.generatePerformanceRecommendations(performanceReport);
      
      // Save performance report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'performance-analytics', `performance-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(performanceReport, null, 2));
      
    } catch (error) {
      console.error('Performance analysis failed:', error);
    }
  }

  async analyzePerformanceTrends() {
    const trends = {
      buildTime: [],
      testTime: [],
      responseTime: [],
      throughput: []
    };
    
    try {
      // Read historical performance data
      const performanceDir = path.join(this.reportsDir, 'performance-analytics');
      if (fs.existsSync(performanceDir)) {
        const files = fs.readdirSync(performanceDir).filter(file => file.endsWith('.json'));
        
        for (const file of files.slice(-10)) { // Last 10 reports
          const data = JSON.parse(fs.readFileSync(path.join(performanceDir, file), 'utf8'));
          if (data.metrics) {
            trends.buildTime.push(data.metrics.buildTime);
            trends.testTime.push(data.metrics.testTime);
            trends.responseTime.push(data.metrics.responseTime);
            trends.throughput.push(data.metrics.throughput);
          }
        }
      }
      
      // Calculate trend indicators
      for (const metric in trends) {
        if (trends[metric].length > 1) {
          const values = trends[metric];
          const firstHalf = values.slice(0, Math.floor(values.length / 2));
          const secondHalf = values.slice(Math.floor(values.length / 2));
          
          const firstAvg = firstHalf.reduce((a, b) => a + b, 0) / firstHalf.length;
          const secondAvg = secondHalf.reduce((a, b) => a + b, 0) / secondHalf.length;
          
          trends[metric] = {
            values: values,
            trend: secondAvg > firstAvg ? 'increasing' : 'decreasing',
            change: ((secondAvg - firstAvg) / firstAvg) * 100
          };
        }
      }
      
    } catch (error) {
      console.error('Failed to analyze performance trends:', error);
    }
    
    return trends;
  }

  generatePerformanceRecommendations(performanceReport) {
    const recommendations = [];
    
    // Build time recommendations
    if (performanceReport.metrics.buildTime > 120000) {
      recommendations.push({
        type: 'build_optimization',
        priority: 'high',
        message: 'Build time is slow. Consider optimizing build process.',
        suggestion: 'Review webpack configuration and optimize bundle size'
      });
    }
    
    // Test time recommendations
    if (performanceReport.metrics.testTime > 60000) {
      recommendations.push({
        type: 'test_optimization',
        priority: 'medium',
        message: 'Test execution is slow. Consider parallel execution.',
        suggestion: 'Enable parallel test execution and optimize test setup'
      });
    }
    
    // Response time recommendations
    if (performanceReport.metrics.responseTime > 2000) {
      recommendations.push({
        type: 'response_optimization',
        priority: 'high',
        message: 'Response time is slow. Consider performance optimizations.',
        suggestion: 'Implement caching and optimize database queries'
      });
    }
    
    // Trend-based recommendations
    for (const [metric, trend] of Object.entries(performanceReport.trends)) {
      if (trend.trend === 'increasing' && trend.change > 20) {
        recommendations.push({
          type: `${metric}_trend`,
          priority: 'medium',
          message: `${metric} is trending upward. Monitor for degradation.`,
          suggestion: 'Investigate recent changes that may have caused performance regression'
        });
      }
    }
    
    return recommendations;
  }

  async analyzeTrends() {
    try {
      console.log('Analyzing trends...');
      
      const trendReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        systemTrends: {},
        performanceTrends: {},
        usageTrends: {},
        predictions: {}
      };
      
      // Analyze system trends
      trendReport.systemTrends = await this.analyzeSystemTrends();
      
      // Analyze performance trends
      trendReport.performanceTrends = await this.analyzePerformanceTrends();
      
      // Analyze usage trends
      trendReport.usageTrends = await this.analyzeUsageTrends();
      
      // Generate predictions
      trendReport.predictions = this.generatePredictions(trendReport);
      
      // Save trend report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'trend-analysis', `trends-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(trendReport, null, 2));
      
    } catch (error) {
      console.error('Trend analysis failed:', error);
    }
  }

  async analyzeSystemTrends() {
    const trends = {
      cpu: [],
      memory: [],
      disk: [],
      uptime: []
    };
    
    try {
      // Read historical system data
      const systemDir = path.join(this.reportsDir, 'system-metrics');
      if (fs.existsSync(systemDir)) {
        const files = fs.readdirSync(systemDir).filter(file => file.endsWith('.json'));
        
        for (const file of files.slice(-24)) { // Last 24 reports (2 hours)
          const data = JSON.parse(fs.readFileSync(path.join(systemDir, file), 'utf8'));
          if (data.metrics) {
            trends.cpu.push(data.metrics.cpuUsage);
            trends.memory.push(data.metrics.memoryUsage);
            trends.disk.push(data.metrics.diskUsage);
          }
        }
      }
      
      // Calculate trend indicators
      for (const metric in trends) {
        if (trends[metric].length > 1) {
          const values = trends[metric];
          const avg = values.reduce((a, b) => a + b, 0) / values.length;
          const max = Math.max(...values);
          const min = Math.min(...values);
          
          trends[metric] = {
            values: values,
            average: avg,
            max: max,
            min: min,
            range: max - min,
            trend: values[values.length - 1] > values[0] ? 'increasing' : 'decreasing'
          };
        }
      }
      
    } catch (error) {
      console.error('Failed to analyze system trends:', error);
    }
    
    return trends;
  }

  async analyzeUsageTrends() {
    const trends = {
      agentUsage: {},
      resourceUsage: {},
      errorRates: {}
    };
    
    try {
      // Analyze agent usage patterns
      const agentDir = path.join(__dirname, '../reports');
      if (fs.existsSync(agentDir)) {
        const agentDirs = fs.readdirSync(agentDir);
        
        for (const agentDir of agentDirs) {
          const agentPath = path.join(agentDir, agentDir);
          if (fs.statSync(agentPath).isDirectory()) {
            const files = fs.readdirSync(agentPath).filter(file => file.endsWith('.json'));
            trends.agentUsage[agentDir] = {
              reportCount: files.length,
              lastActivity: files.length > 0 ? fs.statSync(path.join(agentPath, files[files.length - 1])).mtime : null
            };
          }
        }
      }
      
      // Analyze error rates
      const logDir = path.join(__dirname, '../logs');
      if (fs.existsSync(logDir)) {
        const logFiles = fs.readdirSync(logDir).filter(file => file.includes('error'));
        trends.errorRates = {
          errorFiles: logFiles.length,
          recentErrors: logFiles.filter(file => {
            const stats = fs.statSync(path.join(logDir, file));
            const hoursOld = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60);
            return hoursOld < 24;
          }).length
        };
      }
      
    } catch (error) {
      console.error('Failed to analyze usage trends:', error);
    }
    
    return trends;
  }

  generatePredictions(trendReport) {
    const predictions = {
      systemHealth: 'good',
      performanceOutlook: 'stable',
      resourceNeeds: 'adequate',
      recommendations: []
    };
    
    try {
      // Predict system health
      const cpuTrend = trendReport.systemTrends.cpu;
      const memoryTrend = trendReport.systemTrends.memory;
      
      if (cpuTrend && cpuTrend.average > 70) {
        predictions.systemHealth = 'concerning';
        predictions.recommendations.push('Consider scaling up CPU resources');
      }
      
      if (memoryTrend && memoryTrend.average > 80) {
        predictions.systemHealth = 'critical';
        predictions.recommendations.push('Immediate memory upgrade recommended');
      }
      
      // Predict performance outlook
      const buildTrend = trendReport.performanceTrends.buildTime;
      const responseTrend = trendReport.performanceTrends.responseTime;
      
      if (buildTrend && buildTrend.trend === 'increasing') {
        predictions.performanceOutlook = 'degrading';
        predictions.recommendations.push('Build performance is degrading, investigate recent changes');
      }
      
      if (responseTrend && responseTrend.trend === 'increasing') {
        predictions.performanceOutlook = 'degrading';
        predictions.recommendations.push('Response times are increasing, optimize application performance');
      }
      
      // Predict resource needs
      const diskTrend = trendReport.systemTrends.disk;
      if (diskTrend && diskTrend.average > 85) {
        predictions.resourceNeeds = 'critical';
        predictions.recommendations.push('Disk space is critical, implement cleanup procedures');
      }
      
    } catch (error) {
      console.error('Failed to generate predictions:', error);
    }
    
    return predictions;
  }

  async generateDashboardData() {
    try {
      console.log('Generating dashboard data...');
      
      const dashboard = {
        timestamp: new Date().toISOString(),
        system: await this.getSystemMetrics(),
        performance: await this.getPerformanceMetrics(),
        agents: await this.getAgentStatus(),
        alerts: this.generateAlerts({
          systemMetrics: await this.getSystemMetrics(),
          performanceMetrics: await this.getPerformanceMetrics(),
          agentStatus: await this.getAgentStatus()
        }),
        trends: await this.analyzeSystemTrends()
      };
      
      // Save dashboard data
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const dashboardPath = path.join(this.reportsDir, 'dashboard-data', `dashboard-${timestamp}.json`);
      fs.writeFileSync(dashboardPath, JSON.stringify(dashboard, null, 2));
      
      console.log('Dashboard data generated');
      
    } catch (error) {
      console.error('Dashboard generation failed:', error);
    }
  }

  async saveAnalysisReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.reportsDir, 'system-metrics', `analysis-${timestamp}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`Analysis report saved: ${reportPath}`);
  }

  async stop() {
    console.log(`Monitoring Analytics Agent ${this.agentId} stopping...`);
    process.exit(0);
  }
}

// Start the agent
const agent = new MonitoringAnalyticsAgent();

process.on('SIGTERM', () => {
  agent.stop();
});

process.on('SIGINT', () => {
  agent.stop();
});

agent.start().catch(error => {
  console.error('Monitoring Analytics Agent failed to start:', error);
  process.exit(1);
}); 