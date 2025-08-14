#!/usr/bin/env node

/**
 * Real-Time Build Monitor
 * Live monitoring dashboard for build processes with performance tracking
 */

const fs = require('fs');
const path = require('path');
const { EventEmitter } = require('events');
const { spawn } = require('child_process');

class RealTimeBuildMonitor extends EventEmitter {
  constructor() {
    super();
    
    this.monitoringData = {
      startTime: null,
      currentStage: null,
      stages: new Map(),
      performance: {
        memory: [],
        cpu: [],
        buildTime: 0
      },
      logs: [],
      errors: [],
      warnings: [],
      metrics: {
        totalFiles: 0,
        processedFiles: 0,
        cacheHits: 0,
        cacheMisses: 0
      }
    };
    
    this.isMonitoring = false;
    this.monitoringInterval = null;
    this.buildProcess = null;
    this.outputBuffer = '';
    
    // Bind event handlers
    this.on('stage:start', this.handleStageStart.bind(this));
    this.on('stage:end', this.handleStageEnd.bind(this));
    this.on('log', this.handleLog.bind(this));
    this.on('error', this.handleError.bind(this));
    this.on('warning', this.handleWarning.bind(this));
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${type.toUpperCase()}] ${message}`;
    
    this.monitoringData.logs.push({
      timestamp,
      type,
      message
    });
    
    console.log(logEntry);
    this.emit('log', { timestamp, type, message });
  }

  startMonitoring() {
    if (this.isMonitoring) {
      this.log('⚠️  Monitoring already active', 'warning');
      return;
    }
    
    this.log('🚀 Starting real-time build monitoring...');
    
    this.isMonitoring = true;
    this.monitoringData.startTime = Date.now();
    
    // Start performance monitoring
    this.startPerformanceMonitoring();
    
    // Start system resource monitoring
    this.startResourceMonitoring();
    
    this.log('✅ Real-time monitoring started');
    this.emit('monitoring:started');
  }

  stopMonitoring() {
    if (!this.isMonitoring) {
      this.log('⚠️  Monitoring not active', 'warning');
      return;
    }
    
    this.log('🛑 Stopping real-time build monitoring...');
    
    this.isMonitoring = false;
    
    // Stop performance monitoring
    if (this.monitoringInterval) {
      clearInterval(this.monitoringInterval);
      this.monitoringInterval = null;
    }
    
    // Calculate final metrics
    this.calculateFinalMetrics();
    
    this.log('✅ Real-time monitoring stopped');
    this.emit('monitoring:stopped');
    
    return this.monitoringData;
  }

  startPerformanceMonitoring() {
    this.monitoringInterval = setInterval(() => {
      if (!this.isMonitoring) return;
      
      const memoryUsage = process.memoryUsage();
      const cpuUsage = process.cpuUsage();
      
      this.monitoringData.performance.memory.push({
        timestamp: Date.now(),
        heapUsed: memoryUsage.heapUsed,
        heapTotal: memoryUsage.heapTotal,
        external: memoryUsage.external,
        rss: memoryUsage.rss
      });
      
      this.monitoringData.performance.cpu.push({
        timestamp: Date.now(),
        user: cpuUsage.user,
        system: cpuUsage.system
      });
      
      // Emit performance update
      this.emit('performance:update', {
        memory: memoryUsage,
        cpu: cpuUsage
      });
      
    }, 1000); // Update every second
  }

  startResourceMonitoring() {
    // Monitor file system changes
    this.monitorFileSystem();
    
    // Monitor build cache
    this.monitorBuildCache();
    
    // Monitor network activity
    this.monitorNetworkActivity();
  }

  monitorFileSystem() {
    const sourceDirs = ['pages', 'components', 'utils', 'scripts', 'styles'];
    
    for (const dir of sourceDirs) {
      if (fs.existsSync(dir)) {
        this.monitorDirectory(dir);
      }
    }
  }

  monitorDirectory(dirPath) {
    try {
      const files = this.walkDirectory(dirPath);
      this.monitoringData.metrics.totalFiles += files.length;
      
      // Monitor file changes
      for (const file of files) {
        this.monitorFile(file);
      }
    } catch (error) {
      this.log(`⚠️  Could not monitor directory ${dirPath}: ${error.message}`, 'warning');
    }
  }

  walkDirectory(dir) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      
      if (stat.isDirectory()) {
        files.push(...this.walkDirectory(fullPath));
      } else {
        files.push(fullPath);
      }
    }
    
    return files;
  }

  monitorFile(filePath) {
    try {
      const stats = fs.statSync(filePath);
      const lastModified = stats.mtime.getTime();
      
      // Check if file was modified during build
      if (lastModified > this.monitoringData.startTime) {
        this.monitoringData.metrics.processedFiles++;
        this.emit('file:processed', {
          path: filePath,
          size: stats.size,
          lastModified
        });
      }
    } catch (error) {
      // File monitoring failed
    }
  }

  monitorBuildCache() {
    const cacheDirs = ['.next', 'node_modules/.cache'];
    
    for (const cacheDir of cacheDirs) {
      if (fs.existsSync(cacheDir)) {
        this.monitorCacheDirectory(cacheDir);
      }
    }
  }

  monitorCacheDirectory(cachePath) {
    try {
      const stats = fs.statSync(cachePath);
      
      // Monitor cache size changes
      if (stats.isDirectory()) {
        const cacheSize = this.calculateDirectorySize(cachePath);
        
        this.emit('cache:update', {
          path: cachePath,
          size: cacheSize,
          lastModified: stats.mtime
        });
      }
    } catch (error) {
      // Cache monitoring failed
    }
  }

  calculateDirectorySize(dirPath) {
    let totalSize = 0;
    
    try {
      const items = fs.readdirSync(dirPath);
      
      for (const item of items) {
        const fullPath = path.join(dirPath, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          totalSize += this.calculateDirectorySize(fullPath);
        } else {
          totalSize += stat.size;
        }
      }
    } catch (error) {
      // Directory size calculation failed
    }
    
    return totalSize;
  }

  monitorNetworkActivity() {
    // Monitor network requests during build
    // This is a simplified implementation
    // In production, you'd integrate with actual network monitoring
    
    this.emit('network:monitoring:started');
  }

  startBuildProcess(command, args = [], options = {}) {
    this.log(`🔨 Starting build process: ${command} ${args.join(' ')}`);
    
    this.buildProcess = spawn(command, args, {
      stdio: ['pipe', 'pipe', 'pipe'],
      ...options
    });
    
    // Monitor build process output
    this.buildProcess.stdout.on('data', (data) => {
      this.handleBuildOutput(data, 'stdout');
    });
    
    this.buildProcess.stderr.on('data', (data) => {
      this.handleBuildOutput(data, 'stderr');
    });
    
    this.buildProcess.on('close', (code) => {
      this.handleBuildProcessClose(code);
    });
    
    this.buildProcess.on('error', (error) => {
      this.handleBuildProcessError(error);
    });
    
    this.emit('build:process:started', {
      command,
      args,
      pid: this.buildProcess.pid
    });
    
    return this.buildProcess;
  }

  handleBuildOutput(data, stream) {
    const output = data.toString();
    this.outputBuffer += output;
    
    // Parse build output for stage information
    this.parseBuildOutput(output);
    
    // Emit output event
    this.emit('build:output', {
      stream,
      data: output,
      timestamp: Date.now()
    });
    
    // Check for build completion indicators
    if (output.includes('✓ Compiled successfully') || output.includes('Build completed')) {
      this.emit('build:stage:complete', {
        stage: 'compilation',
        timestamp: Date.now()
      });
    }
  }

  parseBuildOutput(output) {
    // Parse Next.js build output for stage information
    const stagePatterns = [
      { pattern: /Creating an optimized production build/, stage: 'build:start' },
      { pattern: /Compiled successfully/, stage: 'build:compilation' },
      { pattern: /Collecting page data/, stage: 'build:data-collection' },
      { pattern: /Generating static pages/, stage: 'build:static-generation' },
      { pattern: /Finalizing page optimization/, stage: 'build:optimization' },
      { pattern: /Collecting build traces/, stage: 'build:traces' }
    ];
    
    for (const { pattern, stage } of stagePatterns) {
      if (pattern.test(output)) {
        this.emit('stage:start', { stage, timestamp: Date.now() });
        break;
      }
    }
    
    // Parse for errors and warnings
    if (output.includes('Error:') || output.includes('❌')) {
      this.emit('error', {
        message: output.trim(),
        timestamp: Date.now()
      });
    }
    
    if (output.includes('Warning:') || output.includes('⚠️')) {
      this.emit('warning', {
        message: output.trim(),
        timestamp: Date.now()
      });
    }
  }

  handleBuildProcessClose(code) {
    this.log(`🔨 Build process completed with exit code: ${code}`);
    
    this.emit('build:process:closed', {
      code,
      timestamp: Date.now()
    });
    
    if (code === 0) {
      this.emit('build:success');
    } else {
      this.emit('build:failure', { code });
    }
    
    // Stop monitoring after build completes
    this.stopMonitoring();
  }

  handleBuildProcessError(error) {
    this.log(`❌ Build process error: ${error.message}`, 'error');
    
    this.emit('build:process:error', {
      error: error.message,
      timestamp: Date.now()
    });
    
    // Stop monitoring on error
    this.stopMonitoring();
  }

  handleStageStart(stageData) {
    const { stage, timestamp } = stageData;
    
    this.monitoringData.currentStage = stage;
    this.monitoringData.stages.set(stage, {
      startTime: timestamp,
      endTime: null,
      duration: null,
      status: 'running'
    });
    
    this.log(`📋 Stage started: ${stage}`);
    this.emit('stage:started', stageData);
  }

  handleStageEnd(stageData) {
    const { stage, timestamp } = stageData;
    
    const stageInfo = this.monitoringData.stages.get(stage);
    if (stageInfo) {
      stageInfo.endTime = timestamp;
      stageInfo.duration = timestamp - stageInfo.startTime;
      stageInfo.status = 'completed';
    }
    
    this.log(`✅ Stage completed: ${stage} (${stageInfo?.duration || 0}ms)`);
    this.emit('stage:completed', stageData);
  }

  handleLog(logData) {
    // Log handling is already done in the log method
    // This is for additional processing if needed
  }

  handleError(errorData) {
    this.monitoringData.errors.push(errorData);
    this.emit('error:recorded', errorData);
  }

  handleWarning(warningData) {
    this.monitoringData.warnings.push(warningData);
    this.emit('warning:recorded', warningData);
  }

  calculateFinalMetrics() {
    if (this.monitoringData.startTime) {
      this.monitoringData.performance.buildTime = Date.now() - this.monitoringData.startTime;
    }
    
    // Calculate cache efficiency
    const totalCacheAccess = this.monitoringData.metrics.cacheHits + this.monitoringData.metrics.cacheMisses;
    if (totalCacheAccess > 0) {
      this.monitoringData.metrics.cacheEfficiency = (this.monitoringData.metrics.cacheHits / totalCacheAccess) * 100;
    }
    
    // Calculate build efficiency
    const totalStageTime = Array.from(this.monitoringData.stages.values())
      .reduce((sum, stage) => sum + (stage.duration || 0), 0);
    
    this.monitoringData.performance.buildEfficiency = totalStageTime > 0 ? 
      (totalStageTime / this.monitoringData.performance.buildTime) * 100 : 0;
  }

  getMonitoringData() {
    return {
      ...this.monitoringData,
      isMonitoring: this.isMonitoring,
      currentTime: Date.now()
    };
  }

  getPerformanceMetrics() {
    return {
      buildTime: this.monitoringData.performance.buildTime,
      memoryUsage: this.monitoringData.performance.memory.slice(-10), // Last 10 readings
      cpuUsage: this.monitoringData.performance.cpu.slice(-10), // Last 10 readings
      buildEfficiency: this.monitoringData.performance.buildEfficiency,
      cacheEfficiency: this.monitoringData.metrics.cacheEfficiency
    };
  }

  getStageProgress() {
    const stages = Array.from(this.monitoringData.stages.entries());
    const completedStages = stages.filter(([_, stage]) => stage.status === 'completed');
    const totalStages = stages.length;
    
    return {
      total: totalStages,
      completed: completedStages.length,
      progress: totalStages > 0 ? (completedStages.length / totalStages) * 100 : 0,
      currentStage: this.monitoringData.currentStage,
      stages: stages.map(([name, stage]) => ({
        name,
        status: stage.status,
        duration: stage.duration,
        startTime: stage.startTime,
        endTime: stage.endTime
      }))
    };
  }

  generateMonitoringReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalTime: this.monitoringData.performance.buildTime,
        stages: this.monitoringData.stages.size,
        errors: this.monitoringData.errors.length,
        warnings: this.monitoringData.warnings.length,
        filesProcessed: this.monitoringData.metrics.processedFiles,
        totalFiles: this.monitoringData.metrics.totalFiles
      },
      performance: this.getPerformanceMetrics(),
      stages: this.getStageProgress(),
      logs: this.monitoringData.logs.slice(-100), // Last 100 log entries
      errors: this.monitoringData.errors,
      warnings: this.monitoringData.warnings
    };
    
    return report;
  }

  saveMonitoringReport() {
    const report = this.generateMonitoringReport();
    const reportPath = 'real-time-monitoring-report.json';
    
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    this.log(`📄 Monitoring report saved to ${reportPath}`);
    
    return reportPath;
  }

  // Live dashboard methods
  startLiveDashboard() {
    this.log('📊 Starting live monitoring dashboard...');
    
    // Emit dashboard start event
    this.emit('dashboard:started');
    
    // Start periodic dashboard updates
    const dashboardInterval = setInterval(() => {
      if (!this.isMonitoring) {
        clearInterval(dashboardInterval);
        return;
      }
      
      this.updateLiveDashboard();
    }, 2000); // Update every 2 seconds
    
    this.log('✅ Live dashboard started');
  }

  updateLiveDashboard() {
    const dashboardData = {
      timestamp: Date.now(),
      isMonitoring: this.isMonitoring,
      currentStage: this.monitoringData.currentStage,
      stageProgress: this.getStageProgress(),
      performance: this.getPerformanceMetrics(),
      recentLogs: this.monitoringData.logs.slice(-5), // Last 5 log entries
      errorCount: this.monitoringData.errors.length,
      warningCount: this.monitoringData.warnings.length
    };
    
    this.emit('dashboard:update', dashboardData);
    
    // Print dashboard to console
    this.printLiveDashboard(dashboardData);
  }

  printLiveDashboard(data) {
    // Clear console (platform-specific)
    if (process.platform === 'win32') {
      require('child_process').execSync('cls', { stdio: 'inherit' });
    } else {
      require('child_process').execSync('clear', { stdio: 'inherit' });
    }
    
    console.log('='.repeat(80));
    console.log('📊 REAL-TIME BUILD MONITORING DASHBOARD');
    console.log('='.repeat(80));
    console.log(`⏰ Time: ${new Date().toLocaleTimeString()}`);
    console.log(`🔄 Status: ${data.isMonitoring ? 'MONITORING' : 'STOPPED'}`);
    console.log(`📋 Current Stage: ${data.currentStage || 'None'}`);
    console.log(`📊 Progress: ${data.stageProgress.progress.toFixed(1)}% (${data.stageProgress.completed}/${data.stageProgress.total})`);
    console.log(`⏱️  Build Time: ${(data.performance.buildTime / 1000).toFixed(1)}s`);
    console.log(`🧠 Memory: ${(data.performance.memoryUsage[data.performance.memoryUsage.length - 1]?.heapUsed / 1024 / 1024 || 0).toFixed(1)}MB`);
    console.log(`❌ Errors: ${data.errorCount}`);
    console.log(`⚠️  Warnings: ${data.warningCount}`);
    
    console.log('\n📋 STAGES:');
    data.stageProgress.stages.forEach(stage => {
      const status = stage.status === 'completed' ? '✅' : stage.status === 'running' ? '🔄' : '⏳';
      const duration = stage.duration ? `(${stage.duration}ms)` : '';
      console.log(`  ${status} ${stage.name} ${duration}`);
    });
    
    console.log('\n📝 RECENT LOGS:');
    data.recentLogs.forEach(log => {
      const icon = log.type === 'error' ? '❌' : log.type === 'warning' ? '⚠️' : 'ℹ️';
      console.log(`  ${icon} ${log.message}`);
    });
    
    console.log('\n' + '='.repeat(80));
  }

  // Main execution method
  async runBuildWithMonitoring(buildCommand = 'npm', buildArgs = ['run', 'build']) {
    try {
      // Start monitoring
      this.startMonitoring();
      
      // Start live dashboard
      this.startLiveDashboard();
      
      // Start build process
      const buildProcess = this.startBuildProcess(buildCommand, buildArgs);
      
      // Wait for build to complete
      return new Promise((resolve, reject) => {
        this.once('build:success', () => {
          const report = this.generateMonitoringReport();
          resolve({ success: true, report });
        });
        
        this.once('build:failure', (data) => {
          const report = this.generateMonitoringReport();
          reject({ success: false, report, exitCode: data.code });
        });
        
        this.once('build:process:error', (error) => {
          const report = this.generateMonitoringReport();
          reject({ success: false, report, error: error.error });
        });
      });
      
    } catch (error) {
      this.log(`💥 Build monitoring failed: ${error.message}`, 'error');
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const monitor = new RealTimeBuildMonitor();
  
  // Handle command line arguments
  const args = process.argv.slice(2);
  const buildCommand = args[0] || 'npm';
  const buildArgs = args.slice(1) || ['run', 'build'];
  
  monitor.runBuildWithMonitoring(buildCommand, buildArgs)
    .then(result => {
      console.log('✅ Build completed successfully');
      monitor.saveMonitoringReport();
      process.exit(0);
    })
    .catch(error => {
      console.error('❌ Build failed:', error);
      monitor.saveMonitoringReport();
      process.exit(1);
    });
}

module.exports = RealTimeBuildMonitor;