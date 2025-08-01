const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class DeploymentAutomationAgent {
  constructor() {
    this.agentId = process.env.AGENT_ID;
    this.agentType = process.env.AGENT_TYPE;
    this.config = JSON.parse(process.env.AGENT_CONFIG || '{}');
    this.projectRoot = path.resolve(__dirname, '../..');
    this.reportsDir = path.join(__dirname, '../reports/deployment-automation');
    this.deploymentsDir = path.join(this.reportsDir, 'deployments');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      this.reportsDir,
      this.deploymentsDir,
      path.join(this.reportsDir, 'build-logs'),
      path.join(this.reportsDir, 'deployment-logs'),
      path.join(this.reportsDir, 'health-checks'),
      path.join(this.reportsDir, 'rollbacks')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async start() {
    console.log(`Deployment Automation Agent ${this.agentId} started`);
    
    // Initial deployment check
    await this.checkDeploymentStatus();
    
    // Start periodic deployment monitoring
    setInterval(() => {
      this.monitorDeployments();
    }, 300000); // Every 5 minutes
    
    // Start periodic health checks
    setInterval(() => {
      this.performHealthChecks();
    }, 600000); // Every 10 minutes
    
    // Start build optimization monitoring
    setInterval(() => {
      this.optimizeBuilds();
    }, 1800000); // Every 30 minutes
  }

  async checkDeploymentStatus() {
    try {
      console.log('Checking deployment status...');
      
      const status = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        environment: process.env.NODE_ENV || 'development',
        deployments: [],
        health: 'unknown'
      };
      
      // Check current deployment status
      const deploymentInfo = await this.getCurrentDeploymentInfo();
      status.deployments.push(deploymentInfo);
      
      // Check build status
      const buildStatus = await this.checkBuildStatus();
      status.build = buildStatus;
      
      // Check deployment health
      const health = await this.checkDeploymentHealth();
      status.health = health;
      
      // Save status report
      await this.saveDeploymentStatus(status);
      
      console.log(`Deployment status: ${status.health}`);
      
    } catch (error) {
      console.error('Failed to check deployment status:', error);
    }
  }

  async getCurrentDeploymentInfo() {
    try {
      // Check if we're on Netlify
      if (fs.existsSync(path.join(this.projectRoot, 'netlify.toml'))) {
        return await this.getNetlifyDeploymentInfo();
      }
      
      // Check if we're on Vercel
      if (fs.existsSync(path.join(this.projectRoot, 'vercel.json'))) {
        return await this.getVercelDeploymentInfo();
      }
      
      // Default local deployment info
      return {
        platform: 'local',
        status: 'unknown',
        url: 'http://localhost:3000',
        lastDeployed: null
      };
      
    } catch (error) {
      console.error('Failed to get deployment info:', error);
      return {
        platform: 'unknown',
        status: 'error',
        error: error.message
      };
    }
  }

  async getNetlifyDeploymentInfo() {
    try {
      const { stdout } = await execAsync('netlify status --json', {
        cwd: this.projectRoot,
        timeout: 30000
      });
      
      const status = JSON.parse(stdout);
      return {
        platform: 'netlify',
        status: status.status,
        url: status.url,
        lastDeployed: status.lastDeployed,
        siteId: status.siteId
      };
      
    } catch (error) {
      return {
        platform: 'netlify',
        status: 'error',
        error: error.message
      };
    }
  }

  async getVercelDeploymentInfo() {
    try {
      const { stdout } = await execAsync('vercel ls --json', {
        cwd: this.projectRoot,
        timeout: 30000
      });
      
      const deployments = JSON.parse(stdout);
      const latest = deployments[0];
      
      return {
        platform: 'vercel',
        status: latest.state,
        url: latest.url,
        lastDeployed: latest.created,
        deploymentId: latest.uid
      };
      
    } catch (error) {
      return {
        platform: 'vercel',
        status: 'error',
        error: error.message
      };
    }
  }

  async checkBuildStatus() {
    try {
      const buildStatus = {
        status: 'unknown',
        lastBuild: null,
        buildTime: 0,
        buildSize: 0,
        errors: []
      };
      
      // Check if build directory exists
      const buildDir = path.join(this.projectRoot, '.next');
      if (fs.existsSync(buildDir)) {
        buildStatus.status = 'built';
        buildStatus.lastBuild = fs.statSync(buildDir).mtime;
        
        // Calculate build size
        buildStatus.buildSize = this.calculateDirectorySize(buildDir);
      }
      
      // Check for build errors in logs
      const buildLogs = await this.checkBuildLogs();
      buildStatus.errors = buildLogs.errors;
      
      return buildStatus;
      
    } catch (error) {
      console.error('Failed to check build status:', error);
      return {
        status: 'error',
        error: error.message
      };
    }
  }

  calculateDirectorySize(dirPath) {
    let totalSize = 0;
    
    const calculateSize = (path) => {
      const stats = fs.statSync(path);
      if (stats.isDirectory()) {
        const files = fs.readdirSync(path);
        files.forEach(file => {
          calculateSize(path.join(path, file));
        });
      } else {
        totalSize += stats.size;
      }
    };
    
    try {
      calculateSize(dirPath);
    } catch (error) {
      console.error('Error calculating directory size:', error);
    }
    
    return totalSize;
  }

  async checkBuildLogs() {
    const logs = {
      errors: [],
      warnings: []
    };
    
    try {
      // Check for common build error patterns
      const logFiles = [
        path.join(this.projectRoot, 'npm-debug.log'),
        path.join(this.projectRoot, 'yarn-error.log')
      ];
      
      for (const logFile of logFiles) {
        if (fs.existsSync(logFile)) {
          const content = fs.readFileSync(logFile, 'utf8');
          const errorLines = content.split('\n').filter(line => 
            line.includes('ERROR') || line.includes('error') || line.includes('Error')
          );
          
          logs.errors.push(...errorLines.slice(-10)); // Last 10 errors
        }
      }
      
    } catch (error) {
      console.error('Failed to check build logs:', error);
    }
    
    return logs;
  }

  async checkDeploymentHealth() {
    try {
      const healthChecks = [
        { name: 'build', url: 'http://localhost:3000', timeout: 5000 },
        { name: 'api', url: 'http://localhost:3000/api/health', timeout: 5000 }
      ];
      
      const results = [];
      
      for (const check of healthChecks) {
        try {
          const { stdout } = await execAsync(`curl -s -o /dev/null -w "%{http_code}" ${check.url}`, {
            timeout: check.timeout
          });
          
          results.push({
            name: check.name,
            status: stdout === '200' ? 'healthy' : 'unhealthy',
            responseCode: stdout
          });
        } catch (error) {
          results.push({
            name: check.name,
            status: 'error',
            error: error.message
          });
        }
      }
      
      // Determine overall health
      const healthyChecks = results.filter(r => r.status === 'healthy').length;
      const totalChecks = results.length;
      
      if (healthyChecks === totalChecks) return 'healthy';
      if (healthyChecks > 0) return 'degraded';
      return 'unhealthy';
      
    } catch (error) {
      console.error('Failed to check deployment health:', error);
      return 'error';
    }
  }

  async monitorDeployments() {
    try {
      console.log('Monitoring deployments...');
      
      const monitoring = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        deployments: [],
        alerts: []
      };
      
      // Check for new deployments
      const deploymentInfo = await this.getCurrentDeploymentInfo();
      monitoring.deployments.push(deploymentInfo);
      
      // Check for deployment alerts
      const alerts = await this.checkDeploymentAlerts();
      monitoring.alerts = alerts;
      
      // Save monitoring report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'deployment-logs', `monitoring-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(monitoring, null, 2));
      
      // Handle alerts
      if (alerts.length > 0) {
        await this.handleDeploymentAlerts(alerts);
      }
      
    } catch (error) {
      console.error('Failed to monitor deployments:', error);
    }
  }

  async checkDeploymentAlerts() {
    const alerts = [];
    
    try {
      // Check for failed deployments
      const deploymentInfo = await this.getCurrentDeploymentInfo();
      if (deploymentInfo.status === 'error' || deploymentInfo.status === 'failed') {
        alerts.push({
          type: 'deployment_failed',
          severity: 'high',
          message: `Deployment failed: ${deploymentInfo.error || 'Unknown error'}`,
          timestamp: new Date().toISOString()
        });
      }
      
      // Check for build errors
      const buildStatus = await this.checkBuildStatus();
      if (buildStatus.errors.length > 0) {
        alerts.push({
          type: 'build_errors',
          severity: 'medium',
          message: `Build has ${buildStatus.errors.length} errors`,
          errors: buildStatus.errors.slice(-5), // Last 5 errors
          timestamp: new Date().toISOString()
        });
      }
      
      // Check for performance issues
      const health = await this.checkDeploymentHealth();
      if (health === 'unhealthy') {
        alerts.push({
          type: 'health_check_failed',
          severity: 'high',
          message: 'Deployment health check failed',
          timestamp: new Date().toISOString()
        });
      }
      
    } catch (error) {
      console.error('Failed to check deployment alerts:', error);
    }
    
    return alerts;
  }

  async handleDeploymentAlerts(alerts) {
    for (const alert of alerts) {
      console.log(`Deployment Alert [${alert.severity.toUpperCase()}]: ${alert.message}`);
      
      // Handle high severity alerts
      if (alert.severity === 'high') {
        await this.handleHighSeverityAlert(alert);
      }
      
      // Handle medium severity alerts
      if (alert.severity === 'medium') {
        await this.handleMediumSeverityAlert(alert);
      }
    }
  }

  async handleHighSeverityAlert(alert) {
    try {
      if (alert.type === 'deployment_failed') {
        // Attempt automatic rollback
        await this.performRollback();
      } else if (alert.type === 'health_check_failed') {
        // Restart deployment
        await this.restartDeployment();
      }
    } catch (error) {
      console.error('Failed to handle high severity alert:', error);
    }
  }

  async handleMediumSeverityAlert(alert) {
    try {
      if (alert.type === 'build_errors') {
        // Attempt to fix build errors
        await this.fixBuildErrors(alert.errors);
      }
    } catch (error) {
      console.error('Failed to handle medium severity alert:', error);
    }
  }

  async performRollback() {
    try {
      console.log('Performing deployment rollback...');
      
      const rollback = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        action: 'rollback',
        status: 'in_progress'
      };
      
      // Save rollback record
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const rollbackPath = path.join(this.reportsDir, 'rollbacks', `rollback-${timestamp}.json`);
      fs.writeFileSync(rollbackPath, JSON.stringify(rollback, null, 2));
      
      // Perform rollback based on platform
      const deploymentInfo = await this.getCurrentDeploymentInfo();
      
      if (deploymentInfo.platform === 'netlify') {
        await this.performNetlifyRollback();
      } else if (deploymentInfo.platform === 'vercel') {
        await this.performVercelRollback();
      } else {
        // Local rollback - restart the application
        await this.restartLocalDeployment();
      }
      
      rollback.status = 'completed';
      fs.writeFileSync(rollbackPath, JSON.stringify(rollback, null, 2));
      
      console.log('Rollback completed');
      
    } catch (error) {
      console.error('Failed to perform rollback:', error);
    }
  }

  async performNetlifyRollback() {
    try {
      await execAsync('netlify rollback', {
        cwd: this.projectRoot,
        timeout: 60000
      });
    } catch (error) {
      console.error('Netlify rollback failed:', error);
      throw error;
    }
  }

  async performVercelRollback() {
    try {
      await execAsync('vercel rollback', {
        cwd: this.projectRoot,
        timeout: 60000
      });
    } catch (error) {
      console.error('Vercel rollback failed:', error);
      throw error;
    }
  }

  async restartLocalDeployment() {
    try {
      // Kill existing process and restart
      await execAsync('pkill -f "next start"', { timeout: 10000 });
      await new Promise(resolve => setTimeout(resolve, 2000));
      await execAsync('npm start', {
        cwd: this.projectRoot,
        timeout: 30000
      });
    } catch (error) {
      console.error('Local deployment restart failed:', error);
      throw error;
    }
  }

  async restartDeployment() {
    try {
      console.log('Restarting deployment...');
      
      const deploymentInfo = await this.getCurrentDeploymentInfo();
      
      if (deploymentInfo.platform === 'netlify') {
        await execAsync('netlify deploy --prod', {
          cwd: this.projectRoot,
          timeout: 300000
        });
      } else if (deploymentInfo.platform === 'vercel') {
        await execAsync('vercel --prod', {
          cwd: this.projectRoot,
          timeout: 300000
        });
      } else {
        await this.restartLocalDeployment();
      }
      
      console.log('Deployment restarted');
      
    } catch (error) {
      console.error('Failed to restart deployment:', error);
    }
  }

  async fixBuildErrors(errors) {
    try {
      console.log('Attempting to fix build errors...');
      
      // Common build error fixes
      for (const error of errors) {
        if (error.includes('dependency')) {
          await this.fixDependencyIssues();
        } else if (error.includes('syntax')) {
          await this.fixSyntaxErrors();
        } else if (error.includes('memory')) {
          await this.optimizeBuildMemory();
        }
      }
      
    } catch (error) {
      console.error('Failed to fix build errors:', error);
    }
  }

  async fixDependencyIssues() {
    try {
      await execAsync('npm install', {
        cwd: this.projectRoot,
        timeout: 120000
      });
    } catch (error) {
      console.error('Failed to fix dependency issues:', error);
    }
  }

  async fixSyntaxErrors() {
    try {
      await execAsync('npm run lint -- --fix', {
        cwd: this.projectRoot,
        timeout: 60000
      });
    } catch (error) {
      console.error('Failed to fix syntax errors:', error);
    }
  }

  async optimizeBuildMemory() {
    try {
      // Increase Node.js memory limit for builds
      process.env.NODE_OPTIONS = '--max-old-space-size=4096';
      await execAsync('npm run build', {
        cwd: this.projectRoot,
        timeout: 300000,
        env: { ...process.env, NODE_OPTIONS: '--max-old-space-size=4096' }
      });
    } catch (error) {
      console.error('Failed to optimize build memory:', error);
    }
  }

  async performHealthChecks() {
    try {
      console.log('Performing health checks...');
      
      const healthReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        checks: []
      };
      
      // Perform various health checks
      const checks = [
        { name: 'build', check: () => this.checkBuildHealth() },
        { name: 'deployment', check: () => this.checkDeploymentHealth() },
        { name: 'performance', check: () => this.checkPerformanceHealth() },
        { name: 'security', check: () => this.checkSecurityHealth() }
      ];
      
      for (const check of checks) {
        try {
          const result = await check.check();
          healthReport.checks.push({
            name: check.name,
            status: result.status,
            details: result.details
          });
        } catch (error) {
          healthReport.checks.push({
            name: check.name,
            status: 'error',
            error: error.message
          });
        }
      }
      
      // Save health report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'health-checks', `health-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(healthReport, null, 2));
      
      console.log('Health checks completed');
      
    } catch (error) {
      console.error('Failed to perform health checks:', error);
    }
  }

  async checkBuildHealth() {
    const buildDir = path.join(this.projectRoot, '.next');
    const exists = fs.existsSync(buildDir);
    
    return {
      status: exists ? 'healthy' : 'unhealthy',
      details: {
        buildExists: exists,
        buildSize: exists ? this.calculateDirectorySize(buildDir) : 0
      }
    };
  }

  async checkPerformanceHealth() {
    try {
      const { stdout } = await execAsync('curl -s -w "%{time_total}" http://localhost:3000', {
        timeout: 10000
      });
      
      const responseTime = parseFloat(stdout);
      
      return {
        status: responseTime < 2 ? 'healthy' : 'degraded',
        details: {
          responseTime,
          threshold: 2
        }
      };
    } catch (error) {
      return {
        status: 'unhealthy',
        details: {
          error: error.message
        }
      };
    }
  }

  async checkSecurityHealth() {
    try {
      // Check for security vulnerabilities
      const { stdout } = await execAsync('npm audit --json', {
        cwd: this.projectRoot,
        timeout: 60000
      });
      
      const audit = JSON.parse(stdout);
      const vulnerabilities = audit.metadata.vulnerabilities;
      
      return {
        status: vulnerabilities.high === 0 && vulnerabilities.critical === 0 ? 'healthy' : 'unhealthy',
        details: {
          vulnerabilities,
          total: vulnerabilities.low + vulnerabilities.moderate + vulnerabilities.high + vulnerabilities.critical
        }
      };
    } catch (error) {
      return {
        status: 'error',
        details: {
          error: error.message
        }
      };
    }
  }

  async optimizeBuilds() {
    try {
      console.log('Optimizing builds...');
      
      const optimization = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        optimizations: []
      };
      
      // Check for build optimizations
      const optimizations = await this.findBuildOptimizations();
      optimization.optimizations = optimizations;
      
      // Apply optimizations
      for (const opt of optimizations) {
        if (opt.priority === 'high') {
          await this.applyBuildOptimization(opt);
        }
      }
      
      // Save optimization report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'build-logs', `optimization-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(optimization, null, 2));
      
    } catch (error) {
      console.error('Failed to optimize builds:', error);
    }
  }

  async findBuildOptimizations() {
    const optimizations = [];
    
    try {
      // Check bundle size
      const bundleSize = await this.checkBundleSize();
      if (bundleSize > 5000000) { // 5MB
        optimizations.push({
          type: 'bundle_size',
          priority: 'high',
          message: 'Bundle size is large, consider code splitting',
          currentSize: bundleSize,
          targetSize: 5000000
        });
      }
      
      // Check for unused dependencies
      const unusedDeps = await this.findUnusedDependencies();
      if (unusedDeps.length > 0) {
        optimizations.push({
          type: 'unused_dependencies',
          priority: 'medium',
          message: `Found ${unusedDeps.length} unused dependencies`,
          dependencies: unusedDeps
        });
      }
      
    } catch (error) {
      console.error('Failed to find build optimizations:', error);
    }
    
    return optimizations;
  }

  async checkBundleSize() {
    try {
      const buildDir = path.join(this.projectRoot, '.next');
      if (fs.existsSync(buildDir)) {
        return this.calculateDirectorySize(buildDir);
      }
      return 0;
    } catch (error) {
      console.error('Failed to check bundle size:', error);
      return 0;
    }
  }

  async findUnusedDependencies() {
    try {
      const { stdout } = await execAsync('npx depcheck --json', {
        cwd: this.projectRoot,
        timeout: 60000
      });
      
      const depcheck = JSON.parse(stdout);
      return depcheck.dependencies || [];
    } catch (error) {
      console.error('Failed to find unused dependencies:', error);
      return [];
    }
  }

  async applyBuildOptimization(optimization) {
    try {
      if (optimization.type === 'bundle_size') {
        await this.optimizeBundleSize();
      } else if (optimization.type === 'unused_dependencies') {
        await this.removeUnusedDependencies(optimization.dependencies);
      }
    } catch (error) {
      console.error('Failed to apply build optimization:', error);
    }
  }

  async optimizeBundleSize() {
    try {
      // Enable Next.js bundle analyzer
      await execAsync('npm run build -- --analyze', {
        cwd: this.projectRoot,
        timeout: 300000
      });
    } catch (error) {
      console.error('Failed to optimize bundle size:', error);
    }
  }

  async removeUnusedDependencies(dependencies) {
    try {
      for (const dep of dependencies) {
        await execAsync(`npm uninstall ${dep}`, {
          cwd: this.projectRoot,
          timeout: 60000
        });
      }
    } catch (error) {
      console.error('Failed to remove unused dependencies:', error);
    }
  }

  async saveDeploymentStatus(status) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.deploymentsDir, `status-${timestamp}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(status, null, 2));
  }

  async stop() {
    console.log(`Deployment Automation Agent ${this.agentId} stopping...`);
    process.exit(0);
  }
}

// Start the agent
const agent = new DeploymentAutomationAgent();

process.on('SIGTERM', () => {
  agent.stop();
});

process.on('SIGINT', () => {
  agent.stop();
});

agent.start().catch(error => {
  console.error('Deployment Automation Agent failed to start:', error);
  process.exit(1);
}); 