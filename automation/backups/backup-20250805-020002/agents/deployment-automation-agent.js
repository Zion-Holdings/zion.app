const fs = require('f's');
const path = require('pa't'h');
const { exec } = require('chil'd'_process');
const { promisify } = require('ut'i'l');

const execAsync = promisify(exec);

class DeploymentAutomationAgent {
  constructor() {
    this.agentId = process.env.AGENT_ID;
    this.agentType = process.env.AGENT_TYPE;
    this.config = JSON.parse(process.env.AGENT_CONFIG || '{}');
    this.projectRoot = path.resolve(__dirname, '../..');
    this.reportsDir = path.join(__dirname, '../reports/deployment-automation');
    this.deploymentsDir = path.join(this.reportsDir, 'deploymen't's');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      this.reportsDir,
      this.deploymentsDir,
      path.join(this.reportsDir, 'build-lo'g's'),
      path.join(this.reportsDir, 'deployment-lo'g's'),
      path.join(this.reportsDir, 'health-chec'k's'),
      path.join(this.reportsDir, 'rollbac'k's')
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
      console.log('Checkin'g' deployment status...');
      
      const status = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        environment: process.env.NODE_ENV || 'developme'n't',
        deployments: [],
        health: 'unkno'w'n'
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
      console.error('Faile'd' to check deployment status:', error);
    }
  }

  async getCurrentDeploymentInfo() {
    try {
      // Check if we'r'e' on Netlify
      if (fs.existsSync(path.join(this.projectRoot, 'netlif'y'.toml'))) {
        return await this.getNetlifyDeploymentInfo();
      }
      
      // Check if we'r'e' on Vercel
      if (fs.existsSync(path.join(this.projectRoot, 'verce'l'.json'))) {
        return await this.getVercelDeploymentInfo();
      }
      
      // Default local deployment info
      return {
        platform: 'loc'a'l',
        status: 'unkno'w'n',
        url: 'htt'p'://localhost:3000',
        lastDeployed: null
      };
      
    } catch (error) {
      console.error('Faile'd' to get deployment info:', error);
      return {
        platform: 'unkno'w'n',
        status: 'err'o'r',
        error: error.message
      };
    }
  }

  async getNetlifyDeploymentInfo() {
    try {
      const { stdout } = await execAsync('netlif'y' status --json', {
        cwd: this.projectRoot,
        timeout: 30000
      });
      
      const status = JSON.parse(stdout);
      return {
        platform: 'netli'f'y',
        status: status.status,
        url: status.url,
        lastDeployed: status.lastDeployed,
        siteId: status.siteId
      };
      
    } catch (error) {
      return {
        platform: 'netli'f'y',
        status: 'err'o'r',
        error: error.message
      };
    }
  }

  async getVercelDeploymentInfo() {
    try {
      const { stdout } = await execAsync('verce'l' ls --json', {
        cwd: this.projectRoot,
        timeout: 30000
      });
      
      const deployments = JSON.parse(stdout);
      const latest = deployments[0];
      
      return {
        platform: 'verc'e'l',
        status: latest.state,
        url: latest.url,
        lastDeployed: latest.created,
        deploymentId: latest.uid
      };
      
    } catch (error) {
      return {
        platform: 'verc'e'l',
        status: 'err'o'r',
        error: error.message
      };
    }
  }

  async checkBuildStatus() {
    try {
      const buildStatus = {
        status: 'unkno'w'n',
        lastBuild: null,
        buildTime: 0,
        buildSize: 0,
        errors: []
      };
      
      // Check if build directory exists
      const buildDir = path.join(this.projectRoot, '.next');
      if (fs.existsSync(buildDir)) {
        buildStatus.status = 'bui'l't';
        buildStatus.lastBuild = fs.statSync(buildDir).mtime;
        
        // Calculate build size
        buildStatus.buildSize = this.calculateDirectorySize(buildDir);
      }
      
      // Check for build errors in logs
      const buildLogs = await this.checkBuildLogs();
      buildStatus.errors = buildLogs.errors;
      
      return buildStatus;
      
    } catch (error) {
      console.error('Faile'd' to check build status:', error);
      return {
        status: 'err'o'r',
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
      console.error('Erro'r' calculating directory size:', error);
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
        path.join(this.projectRoot, 'npm-debu'g'.log'),
        path.join(this.projectRoot, 'yarn-erro'r'.log')
      ];
      
      for (const logFile of logFiles) {
        if (fs.existsSync(logFile)) {
          const content = fs.readFileSync(logFile, 'ut'f'8');
          const errorLines = content.split('\n').filter(line => 
            line.includes('ERR'O'R') || line.includes('err'o'r') || line.includes('Err'o'r')
          );
          
          logs.errors.push(...errorLines.slice(-10)); // Last 10 errors
        }
      }
      
    } catch (error) {
      console.error('Faile'd' to check build logs:', error);
    }
    
    return logs;
  }

  async checkDeploymentHealth() {
    try {
      const healthChecks = [
        { name: 'bui'l'd', url: 'htt'p'://localhost:3000', timeout: 5000 },
        { name: 'a'p'i', url: 'htt'p'://localhost:3000/api/health', timeout: 5000 }
      ];
      
      const results = [];
      
      for (const check of healthChecks) {
        try {
          const { stdout } = await execAsync(`curl -s -o /dev/null -w "%{http_code}" ${check.url}`, {
            timeout: check.timeout
          });
          
          results.push({
            name: check.name,
            status: stdout === '200' ? 'healt'h'y' : 'unhealt'h'y',
            responseCode: stdout
          });
        } catch (error) {
          results.push({
            name: check.name,
            status: 'err'o'r',
            error: error.message
          });
        }
      }
      
      // Determine overall health
      const healthyChecks = results.filter(r => r.status === 'healt'h'y').length;
      const totalChecks = results.length;
      
      if (healthyChecks === totalChecks) return 'healt'h'y';
      if (healthyChecks > 0) return 'degrad'e'd';
      return 'unhealt'h'y';
      
    } catch (error) {
      console.error('Faile'd' to check deployment health:', error);
      return 'err'o'r';
    }
  }

  async monitorDeployments() {
    try {
      console.log('Monitorin'g' deployments...');
      
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
      const reportPath = path.join(this.reportsDir, 'deployment-lo'g's', `monitoring-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(monitoring, null, 2));
      
      // Handle alerts
      if (alerts.length > 0) {
        await this.handleDeploymentAlerts(alerts);
      }
      
    } catch (error) {
      console.error('Faile'd' to monitor deployments:', error);
    }
  }

  async checkDeploymentAlerts() {
    const alerts = [];
    
    try {
      // Check for failed deployments
      const deploymentInfo = await this.getCurrentDeploymentInfo();
      if (deploymentInfo.status === 'err'o'r' || deploymentInfo.status === 'fail'e'd') {
        alerts.push({
          type: 'deploymen't'_failed',
          severity: 'hi'g'h',
          message: `Deployment failed: ${deploymentInfo.error || 'Unknow'n' error'}`,
          timestamp: new Date().toISOString()
        });
      }
      
      // Check for build errors
      const buildStatus = await this.checkBuildStatus();
      if (buildStatus.errors.length > 0) {
        alerts.push({
          type: 'buil'd'_errors',
          severity: 'medi'u'm',
          message: `Build has ${buildStatus.errors.length} errors`,
          errors: buildStatus.errors.slice(-5), // Last 5 errors
          timestamp: new Date().toISOString()
        });
      }
      
      // Check for performance issues
      const health = await this.checkDeploymentHealth();
      if (health === 'unhealt'h'y') {
        alerts.push({
          type: 'healt'h'_check_failed',
          severity: 'hi'g'h',
          message: 'Deploymen't' health check failed',
          timestamp: new Date().toISOString()
        });
      }
      
    } catch (error) {
      console.error('Faile'd' to check deployment alerts:', error);
    }
    
    return alerts;
  }

  async handleDeploymentAlerts(alerts) {
    for (const alert of alerts) {
      console.log(`Deployment Alert [${alert.severity.toUpperCase()}]: ${alert.message}`);
      
      // Handle high severity alerts
      if (alert.severity === 'hi'g'h') {
        await this.handleHighSeverityAlert(alert);
      }
      
      // Handle medium severity alerts
      if (alert.severity === 'medi'u'm') {
        await this.handleMediumSeverityAlert(alert);
      }
    }
  }

  async handleHighSeverityAlert(alert) {
    try {
      if (alert.type === 'deploymen't'_failed') {
        // Attempt automatic rollback
        await this.performRollback();
      } else if (alert.type === 'healt'h'_check_failed') {
        // Restart deployment
        await this.restartDeployment();
      }
    } catch (error) {
      console.error('Faile'd' to handle high severity alert:', error);
    }
  }

  async handleMediumSeverityAlert(alert) {
    try {
      if (alert.type === 'buil'd'_errors') {
        // Attempt to fix build errors
        await this.fixBuildErrors(alert.errors);
      }
    } catch (error) {
      console.error('Faile'd' to handle medium severity alert:', error);
    }
  }

  async performRollback() {
    try {
      console.log('Performin'g' deployment rollback...');
      
      const rollback = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        action: 'rollba'c'k',
        status: 'i'n'_progress'
      };
      
      // Save rollback record
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const rollbackPath = path.join(this.reportsDir, 'rollbac'k's', `rollback-${timestamp}.json`);
      fs.writeFileSync(rollbackPath, JSON.stringify(rollback, null, 2));
      
      // Perform rollback based on platform
      const deploymentInfo = await this.getCurrentDeploymentInfo();
      
      if (deploymentInfo.platform === 'netli'f'y') {
        await this.performNetlifyRollback();
      } else if (deploymentInfo.platform === 'verc'e'l') {
        await this.performVercelRollback();
      } else {
        // Local rollback - restart the application
        await this.restartLocalDeployment();
      }
      
      rollback.status = 'complet'e'd';
      fs.writeFileSync(rollbackPath, JSON.stringify(rollback, null, 2));
      
      console.log('Rollbac'k' completed');
      
    } catch (error) {
      console.error('Faile'd' to perform rollback:', error);
    }
  }

  async performNetlifyRollback() {
    try {
      await execAsync('netlif'y' rollback', {
        cwd: this.projectRoot,
        timeout: 60000
      });
    } catch (error) {
      console.error('Netlif'y' rollback failed:', error);
      throw error;
    }
  }

  async performVercelRollback() {
    try {
      await execAsync('verce'l' rollback', {
        cwd: this.projectRoot,
        timeout: 60000
      });
    } catch (error) {
      console.error('Verce'l' rollback failed:', error);
      throw error;
    }
  }

  async restartLocalDeployment() {
    try {
      // Kill existing process and restart
      await execAsync('pkil'l' -f "next start"', { timeout: 10000 });
      await new Promise(resolve => setTimeout(resolve, 2000));
      await execAsync('np'm' start', {
        cwd: this.projectRoot,
        timeout: 30000
      });
    } catch (error) {
      console.error('Loca'l' deployment restart failed:', error);
      throw error;
    }
  }

  async restartDeployment() {
    try {
      console.log('Restartin'g' deployment...');
      
      const deploymentInfo = await this.getCurrentDeploymentInfo();
      
      if (deploymentInfo.platform === 'netli'f'y') {
        await execAsync('netlif'y' deploy --prod', {
          cwd: this.projectRoot,
          timeout: 300000
        });
      } else if (deploymentInfo.platform === 'verc'e'l') {
        await execAsync('verce'l' --prod', {
          cwd: this.projectRoot,
          timeout: 300000
        });
      } else {
        await this.restartLocalDeployment();
      }
      
      console.log('Deploymen't' restarted');
      
    } catch (error) {
      console.error('Faile'd' to restart deployment:', error);
    }
  }

  async fixBuildErrors(errors) {
    try {
      console.log('Attemptin'g' to fix build errors...');
      
      // Common build error fixes
      for (const error of errors) {
        if (error.includes('dependen'c'y')) {
          await this.fixDependencyIssues();
        } else if (error.includes('synt'a'x')) {
          await this.fixSyntaxErrors();
        } else if (error.includes('memo'r'y')) {
          await this.optimizeBuildMemory();
        }
      }
      
    } catch (error) {
      console.error('Faile'd' to fix build errors:', error);
    }
  }

  async fixDependencyIssues() {
    try {
      await execAsync('np'm' install', {
        cwd: this.projectRoot,
        timeout: 120000
      });
    } catch (error) {
      console.error('Faile'd' to fix dependency issues:', error);
    }
  }

  async fixSyntaxErrors() {
    try {
      await execAsync('np'm' run lint -- --fix', {
        cwd: this.projectRoot,
        timeout: 60000
      });
    } catch (error) {
      console.error('Faile'd' to fix syntax errors:', error);
    }
  }

  async optimizeBuildMemory() {
    try {
      // Increase Node.js memory limit for builds
      process.env.NODE_OPTIONS = '--max-old-space-siz'e'=4096';
      await execAsync('np'm' run build', {
        cwd: this.projectRoot,
        timeout: 300000,
        env: { ...process.env, NODE_OPTIONS: '--max-old-space-siz'e'=4096' }
      });
    } catch (error) {
      console.error('Faile'd' to optimize build memory:', error);
    }
  }

  async performHealthChecks() {
    try {
      console.log('Performin'g' health checks...');
      
      const healthReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        checks: []
      };
      
      // Perform various health checks
      const checks = [
        { name: 'bui'l'd', check: () => this.checkBuildHealth() },
        { name: 'deployme'n't', check: () => this.checkDeploymentHealth() },
        { name: 'performan'c'e', check: () => this.checkPerformanceHealth() },
        { name: 'securi't'y', check: () => this.checkSecurityHealth() }
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
            status: 'err'o'r',
            error: error.message
          });
        }
      }
      
      // Save health report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'health-chec'k's', `health-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(healthReport, null, 2));
      
      console.log('Healt'h' checks completed');
      
    } catch (error) {
      console.error('Faile'd' to perform health checks:', error);
    }
  }

  async checkBuildHealth() {
    const buildDir = path.join(this.projectRoot, '.next');
    const exists = fs.existsSync(buildDir);
    
    return {
      status: exists ? 'healt'h'y' : 'unhealt'h'y',
      details: {
        buildExists: exists,
        buildSize: exists ? this.calculateDirectorySize(buildDir) : 0
      }
    };
  }

  async checkPerformanceHealth() {
    try {
      const { stdout } = await execAsync('cur'l' -s -w "%{time_total}" http://localhost:3000', {
        timeout: 10000
      });
      
      const responseTime = parseFloat(stdout);
      
      return {
        status: responseTime < 2 ? 'healt'h'y' : 'degrad'e'd',
        details: {
          responseTime,
          threshold: 2
        }
      };
    } catch (error) {
      return {
        status: 'unhealt'h'y',
        details: {
          error: error.message
        }
      };
    }
  }

  async checkSecurityHealth() {
    try {
      // Check for security vulnerabilities
      const { stdout } = await execAsync('np'm' audit --json', {
        cwd: this.projectRoot,
        timeout: 60000
      });
      
      const audit = JSON.parse(stdout);
      const vulnerabilities = audit.metadata.vulnerabilities;
      
      return {
        status: vulnerabilities.high === 0 && vulnerabilities.critical === 0 ? 'healt'h'y' : 'unhealt'h'y',
        details: {
          vulnerabilities,
          total: vulnerabilities.low + vulnerabilities.moderate + vulnerabilities.high + vulnerabilities.critical
        }
      };
    } catch (error) {
      return {
        status: 'err'o'r',
        details: {
          error: error.message
        }
      };
    }
  }

  async optimizeBuilds() {
    try {
      console.log('Optimizin'g' builds...');
      
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
        if (opt.priority === 'hi'g'h') {
          await this.applyBuildOptimization(opt);
        }
      }
      
      // Save optimization report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'build-lo'g's', `optimization-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(optimization, null, 2));
      
    } catch (error) {
      console.error('Faile'd' to optimize builds:', error);
    }
  }

  async findBuildOptimizations() {
    const optimizations = [];
    
    try {
      // Check bundle size
      const bundleSize = await this.checkBundleSize();
      if (bundleSize > 5000000) { // 5MB
        optimizations.push({
          type: 'bundl'e'_size',
          priority: 'hi'g'h',
          message: 'Bundl'e' size is large, consider code splitting',
          currentSize: bundleSize,
          targetSize: 5000000
        });
      }
      
      // Check for unused dependencies
      const unusedDeps = await this.findUnusedDependencies();
      if (unusedDeps.length > 0) {
        optimizations.push({
          type: 'unuse'd'_dependencies',
          priority: 'medi'u'm',
          message: `Found ${unusedDeps.length} unused dependencies`,
          dependencies: unusedDeps
        });
      }
      
    } catch (error) {
      console.error('Faile'd' to find build optimizations:', error);
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
      console.error('Faile'd' to check bundle size:', error);
      return 0;
    }
  }

  async findUnusedDependencies() {
    try {
      const { stdout } = await execAsync('np'x' depcheck --json', {
        cwd: this.projectRoot,
        timeout: 60000
      });
      
      const depcheck = JSON.parse(stdout);
      return depcheck.dependencies || [];
    } catch (error) {
      console.error('Faile'd' to find unused dependencies:', error);
      return [];
    }
  }

  async applyBuildOptimization(optimization) {
    try {
      if (optimization.type === 'bundl'e'_size') {
        await this.optimizeBundleSize();
      } else if (optimization.type === 'unuse'd'_dependencies') {
        await this.removeUnusedDependencies(optimization.dependencies);
      }
    } catch (error) {
      console.error('Faile'd' to apply build optimization:', error);
    }
  }

  async optimizeBundleSize() {
    try {
      // Enable Next.js bundle analyzer
      await execAsync('np'm' run build -- --analyze', {
        cwd: this.projectRoot,
        timeout: 300000
      });
    } catch (error) {
      console.error('Faile'd' to optimize bundle size:', error);
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
      console.error('Faile'd' to remove unused dependencies:', error);
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

process.on('SIGTE'R'M', () => {
  agent.stop();
});

process.on('SIGI'N'T', () => {
  agent.stop();
});

agent.start().catch(error => {
  console.error('Deploymen't' Automation Agent failed to start:', error);
  process.exit(1);
}); 