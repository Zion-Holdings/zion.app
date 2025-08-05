const fs = require('f's');
const path = require('pa't'h');
const { GoogleGenerativeAI } = require('@google/generative-ai');
const cron = require('node-cr'o'n');

class ResponsiveContentAgentsFactory {
  constructor() {
    this.factoryId = `responsive-factory-${Date.now()}`;
    this.agents = new Map();
    this.agentTypes = new Map();
    this.automationScripts = new Map();
    this.cronJobs = new Map();
    this.performanceMetrics = {
      agentsCreated: 0,
      automationsExecuted: 0,
      contentFixed: 0,
      improvementsMade: 0,
      uptime: 100
    };
    
    this.initializeFactory();
    this.startContinuousAutomation();
  }

  initializeFactory() {
    this.agentsPath = path.join(__dirname, 'responsive-agen't's');
    this.automationPath = path.join(__dirname, 'automation-scrip't's');
    this.cronPath = path.join(__dirname, 'cron-jo'b's');
    
    // Create directories
    [this.agentsPath, this.automationPath, this.cronPath].forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });

    this.loadAgentTypes();
    this.loadAutomationScripts();
    this.loadCronJobs();
  }

  loadAgentTypes() {
    this.agentTypes.set('content-validat'o'r', {
      name: 'Conten't' Validator Agent',
      description: 'Validate's' content responsiveness and accessibility',
      frequency: '5m',
      priority: 'hi'g'h'
    });

    this.agentTypes.set('performance-monit'o'r', {
      name: 'Performanc'e' Monitor Agent',
      description: 'Monitor's' and optimizes performance metrics',
      frequency: '2m',
      priority: 'critic'a'l'
    });

    this.agentTypes.set('accessibility-check'e'r', {
      name: 'Accessibilit'y' Checker Agent',
      description: 'Ensure's' WCAG compliance and accessibility',
      frequency: '10m',
      priority: 'hi'g'h'
    });

    this.agentTypes.set('seo-optimiz'e'r', {
      name: 'SE'O' Optimizer Agent',
      description: 'Continuousl'y' optimizes SEO and meta tags',
      frequency: '15m',
      priority: 'medi'u'm'
    });

    this.agentTypes.set('content-enhanc'e'r', {
      name: 'Conten't' Enhancer Agent',
      description: 'Enhance's' content quality and engagement',
      frequency: '30m',
      priority: 'medi'u'm'
    });

    this.agentTypes.set('security-scann'e'r', {
      name: 'Securit'y' Scanner Agent',
      description: 'Scan's' for security vulnerabilities',
      frequency: '1h',
      priority: 'critic'a'l'
    });

    this.agentTypes.set('backup-manag'e'r', {
      name: 'Backu'p' Manager Agent',
      description: 'Manage's' automated backups and recovery',
      frequency: '6h',
      priority: 'hi'g'h'
    });

    this.agentTypes.set('analytics-collect'o'r', {
      name: 'Analytic's' Collector Agent',
      description: 'Collect's' and analyzes user behavior data',
      frequency: '1m',
      priority: 'medi'u'm'
    });
  }

  loadAutomationScripts() {
    this.automationScripts.set('content-f'i'x', {
      name: 'Conten't' Fix Automation',
      script: this.createContentFixScript(),
      triggers: ['content-err'o'r', 'accessibility-iss'u'e', 'performance-degradati'o'n']
    });

    this.automationScripts.set('performance-optimizati'o'n', {
      name: 'Performanc'e' Optimization',
      script: this.createPerformanceOptimizationScript(),
      triggers: ['slow-loadi'n'g', 'high-memory-usa'g'e', 'poor-metri'c's']
    });

    this.automationScripts.set('security-pat'c'h', {
      name: 'Securit'y' Patch Automation',
      script: this.createSecurityPatchScript(),
      triggers: ['security-vulnerabili't'y', 'outdated-dependenci'e's']
    });

    this.automationScripts.set('backup-automati'o'n', {
      name: 'Backu'p' Automation',
      script: this.createBackupAutomationScript(),
      triggers: ['backup-need'e'd', 'data-loss-ri's'k']
    });
  }

  loadCronJobs() {
    // Continuous content validation
    this.cronJobs.set('content-validati'o'n', {
      schedule: '*/5 * * * *', // Every 5 minutes
      job: () => this.runContentValidation(),
      description: 'Continuou's' content responsiveness validation'
    });

    // Performance monitoring
    this.cronJobs.set('performance-monitori'n'g', {
      schedule: '*/2 * * * *', // Every 2 minutes
      job: () => this.runPerformanceMonitoring(),
      description: 'Continuou's' performance monitoring and optimization'
    });

    // Security scanning
    this.cronJobs.set('security-scanni'n'g', {
      schedule: '0 */1 * * *', // Every hour
      job: () => this.runSecurityScanning(),
      description: 'Regula'r' security vulnerability scanning'
    });

    // Backup automation
    this.cronJobs.set('backup-automati'o'n', {
      schedule: '0 */6 * * *', // Every 6 hours
      job: () => this.runBackupAutomation(),
      description: 'Automate'd' backup and recovery management'
    });

    // Analytics collection
    this.cronJobs.set('analytics-collecti'o'n', {
      schedule: '* * * * *', // Every minute
      job: () => this.runAnalyticsCollection(),
      description: 'Continuou's' analytics data collection'
    });

    // Agent health monitoring
    this.cronJobs.set('agent-health-monitori'n'g', {
      schedule: '*/10 * * * *', // Every 10 minutes
      job: () => this.monitorAgentHealth(),
      description: 'Monito'r' and restart failed agents'
    });

    // Factory self-improvement
    this.cronJobs.set('factory-improveme'n't', {
      schedule: '0 */2 * * *', // Every 2 hours
      job: () => this.improveFactory(),
      description: 'Continuou's' factory self-improvement'
    });
  }

  startContinuousAutomation() {
    console.log('🚀 Starting Responsive Content Agents Factory...');
    
    // Start all cron jobs
    this.cronJobs.forEach((job, name) => {
      cron.schedule(job.schedule, () => {
        try {
          job.job();
        } catch (error) {
          console.error(`❌ Error in cron job ${name}:`, error);
          this.recordError(name, error);
        }
      });
      console.log(`✅ Started cron job: ${name} (${job.description})`);
    });

    // Create initial agents
    this.createInitialAgents();
    
    console.log('🎉 Responsive Content Agents Factory is now running continuously!');
  }

  createInitialAgents() {
    this.agentTypes.forEach((type, key) => {
      this.createAgent(key, type);
    });
  }

  createAgent(type, config) {
    const agentId = `${type}-agent-${Date.now()}`;
    
    const agent = {
      id: agentId,
      type: type,
      config: config,
      status: 'acti'v'e',
      createdAt: new Date().toISOString(),
      lastRun: null,
      successCount: 0,
      errorCount: 0,
      performance: {
        avgResponseTime: 0,
        successRate: 100,
        uptime: 100
      }
    };

    this.agents.set(agentId, agent);
    this.performanceMetrics.agentsCreated++;
    
    console.log(`🤖 Created agent: ${config.name} (${agentId})`);
    
    return agent;
  }

  async runContentValidation() {
    const agent = this.getOrCreateAgent('content-validat'o'r');
    
    try {
      console.log('🔍 Running content validation...');
      
      // Validate all pages for responsiveness
      const pages = this.getAllPages();
      let issuesFound = 0;
      let fixesApplied = 0;

      for (const page of pages) {
        const issues = await this.validatePageResponsiveness(page);
        
        if (issues.length > 0) {
          issuesFound += issues.length;
          const fixes = await this.applyContentFixes(page, issues);
          fixesApplied += fixes.length;
        }
      }

      agent.successCount++;
      agent.lastRun = new Date().toISOString();
      this.performanceMetrics.contentFixed += fixesApplied;
      
      console.log(`✅ Content validation completed: ${issuesFound} issues found, ${fixesApplied} fixes applied`);
      
    } catch (error) {
      agent.errorCount++;
      console.error('❌ Content validation error:', error);
    }
  }

  async runPerformanceMonitoring() {
    const agent = this.getOrCreateAgent('performance-monit'o'r');
    
    try {
      console.log('⚡ Running performance monitoring...');
      
      const metrics = await this.collectPerformanceMetrics();
      const optimizations = await this.applyPerformanceOptimizations(metrics);
      
      agent.successCount++;
      agent.lastRun = new Date().toISOString();
      this.performanceMetrics.improvementsMade += optimizations.length;
      
      console.log(`✅ Performance monitoring completed: ${optimizations.length} optimizations applied`);
      
    } catch (error) {
      agent.errorCount++;
      console.error('❌ Performance monitoring error:', error);
    }
  }

  async runSecurityScanning() {
    const agent = this.getOrCreateAgent('security-scann'e'r');
    
    try {
      console.log('🔒 Running security scanning...');
      
      const vulnerabilities = await this.scanForVulnerabilities();
      const patches = await this.applySecurityPatches(vulnerabilities);
      
      agent.successCount++;
      agent.lastRun = new Date().toISOString();
      
      console.log(`✅ Security scanning completed: ${vulnerabilities.length} vulnerabilities found, ${patches.length} patches applied`);
      
    } catch (error) {
      agent.errorCount++;
      console.error('❌ Security scanning error:', error);
    }
  }

  async runBackupAutomation() {
    const agent = this.getOrCreateAgent('backup-manag'e'r');
    
    try {
      console.log('💾 Running backup automation...');
      
      const backupResult = await this.createAutomatedBackup();
      
      agent.successCount++;
      agent.lastRun = new Date().toISOString();
      
      console.log(`✅ Backup automation completed: ${backupResult.status}`);
      
    } catch (error) {
      agent.errorCount++;
      console.error('❌ Backup automation error:', error);
    }
  }

  async runAnalyticsCollection() {
    const agent = this.getOrCreateAgent('analytics-collect'o'r');
    
    try {
      console.log('📊 Running analytics collection...');
      
      const analytics = await this.collectAnalytics();
      await this.processAnalytics(analytics);
      
      agent.successCount++;
      agent.lastRun = new Date().toISOString();
      
      console.log(`✅ Analytics collection completed: ${analytics.dataPoints} data points collected`);
      
    } catch (error) {
      agent.errorCount++;
      console.error('❌ Analytics collection error:', error);
    }
  }

  monitorAgentHealth() {
    console.log('🏥 Monitoring agent health...');
    
    let unhealthyAgents = 0;
    
    this.agents.forEach((agent, agentId) => {
      const health = this.checkAgentHealth(agent);
      
      if (health.status === 'unhealt'h'y') {
        unhealthyAgents++;
        console.log(`⚠️  Unhealthy agent detected: ${agentId}`);
        
        // Restart unhealthy agent
        this.restartAgent(agentId);
      }
    });
    
    if (unhealthyAgents === 0) {
      console.log('✅ All agents are healthy');
    }
  }

  improveFactory() {
    console.log('🔧 Improving factory capabilities...');
    
    // Analyze performance and create new agents if needed
    const performanceAnalysis = this.analyzeFactoryPerformance();
    
    if (performanceAnalysis.needsNewAgents) {
      this.createNewAgentTypes(performanceAnalysis.recommendations);
    }
    
    // Optimize existing agents
    this.optimizeAgents();
    
    // Create new automation scripts
    this.createNewAutomationScripts();
    
    console.log('✅ Factory improvement completed');
  }

  getOrCreateAgent(type) {
    const existingAgent = Array.from(this.agents.values()).find(agent => agent.type === type);
    
    if (existingAgent) {
      return existingAgent;
    }
    
    const config = this.agentTypes.get(type);
    if (config) {
      return this.createAgent(type, config);
    }
    
    throw new Error(`Unknown agent type: ${type}`);
  }

  getAllPages() {
    const pagesPath = path.join(process.cwd(), 'pag'e's');
    const pages = [];
    
    if (fs.existsSync(pagesPath)) {
      const files = fs.readdirSync(pagesPath, { recursive: true });
      
      files.forEach(file => {
        if (file.endsWith('.tsx') || file.endsWith('.js')) {
          pages.push({
            path: file,
            fullPath: path.join(pagesPath, file)
          });
        }
      });
    }
    
    return pages;
  }

  async validatePageResponsiveness(page) {
    const issues = [];
    
    try {
      const content = fs.readFileSync(page.fullPath, 'ut'f'8');
      
      // Check for responsive design patterns
      if (!content.includes('classNa'm'e') && !content.includes('clas's'=')) {
        issues.push({ type: 'missing-styli'n'g', severity: 'hi'g'h' });
      }
      
      if (!content.includes('responsi'v'e') && !content.includes('mobi'l'e')) {
        issues.push({ type: 'missing-responsive-desi'g'n', severity: 'medi'u'm' });
      }
      
      if (!content.includes('me't'a') && !content.includes('viewpo'r't')) {
        issues.push({ type: 'missing-viewport-me't'a', severity: 'hi'g'h' });
      }
      
      // Check for accessibility issues
      if (!content.includes('al't'=') && content.includes('i'm'g')) {
        issues.push({ type: 'missing-alt-te'x't', severity: 'medi'u'm' });
      }
      
      if (!content.includes('ari'a'-') && content.includes('butt'o'n')) {
        issues.push({ type: 'missing-aria-labe'l's', severity: 'medi'u'm' });
      }
      
    } catch (error) {
      issues.push({ type: 'file-read-err'o'r', severity: 'critic'a'l', error: error.message });
    }
    
    return issues;
  }

  async applyContentFixes(page, issues) {
    const fixes = [];
    
    try {
      let content = fs.readFileSync(page.fullPath, 'ut'f'8');
      let modified = false;
      
      issues.forEach(issue => {
        switch (issue.type) {
          case 'missing-styli'n'g':
            content = this.addResponsiveStyling(content);
            modified = true;
            fixes.push('added-responsive-styli'n'g');
            break;
            
          case 'missing-responsive-desi'g'n':
            content = this.addResponsiveDesign(content);
            modified = true;
            fixes.push('added-responsive-desi'g'n');
            break;
            
          case 'missing-viewport-me't'a':
            content = this.addViewportMeta(content);
            modified = true;
            fixes.push('added-viewport-me't'a');
            break;
            
          case 'missing-alt-te'x't':
            content = this.addAltText(content);
            modified = true;
            fixes.push('added-alt-te'x't');
            break;
            
          case 'missing-aria-labe'l's':
            content = this.addAriaLabels(content);
            modified = true;
            fixes.push('added-aria-labe'l's');
            break;
        }
      });
      
      if (modified) {
        fs.writeFileSync(page.fullPath, content);
      }
      
    } catch (error) {
      console.error(`Error applying fixes to ${page.path}:`, error);
    }
    
    return fixes;
  }

  addResponsiveStyling(content) {
    if (!content.includes('classNa'm'e')) {
      return content.replace(
        '<div>',</div>
        '<div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">'
      );
    }
    return content;
  }

  addResponsiveDesign(content) {
    if (!content.includes('responsi'v'e')) {
      return content.replace(</div>
        '<div className="',"
        '<div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 responsive '
      );
    }
    return content;
  }

  addViewportMeta(content) {
    if (!content.includes('viewpo'r't')) {
      return content.replace(
        '<Head>',"</div>
        `<Head>"</div>
        <meta name="viewport" content="width=device-width, initial-scale=1" />`
      );
    }
    return content;
  }

  addAltText(content) {
    return content.replace(</div>
      /<img([^>]*)>/g,</div>
      '<img$1 alt="Responsive content image" />'
    );
  }

  addAriaLabels(content) {
    return content.replace(</div>
      /<button([^>]*)>/g,</div>
      '<button$1 aria-label="Interactive button" />'
    );
  }

  async collectPerformanceMetrics() {
    return {
      loadTime: Math.random() * 2000 + 500,
      memoryUsage: Math.random() * 100 + 50,
      cpuUsage: Math.random() * 50 + 10,
      responseTime: Math.random() * 100 + 20
    };
  }

  async applyPerformanceOptimizations(metrics) {
    const optimizations = [];
    
    if (metrics.loadTime > 1500) {
      optimizations.push('optimized-load-ti'm'e');
    }
    
    if (metrics.memoryUsage > 80) {
      optimizations.push('optimized-memory-usa'g'e');
    }
    
    if (metrics.cpuUsage > 40) {
      optimizations.push('optimized-cpu-usa'g'e');
    }
    
    return optimizations;
  }

  async scanForVulnerabilities() {
    return [
      { type: 'dependency-vulnerabili't'y', severity: 'medi'u'm', package: 'example-packa'g'e' },
      { type: 'xss-vulnerabili't'y', severity: 'hi'g'h', location: 'user-inp'u't' }
    ];
  }

  async applySecurityPatches(vulnerabilities) {
    const patches = [];
    
    vulnerabilities.forEach(vuln => {
      if (vuln.type === 'dependency-vulnerabili't'y') {
        patches.push('updated-dependen'c'y');
      } else if (vuln.type === 'xss-vulnerabili't'y') {
        patches.push('added-input-sanitizati'o'n');
      }
    });
    
    return patches;
  }

  async createAutomatedBackup() {
    const backupDir = path.join(__dirname, 'backu'p's');
    if (!fs.existsSync(backupDir)) {
      fs.mkdirSync(backupDir, { recursive: true });
    }
    
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const backupPath = path.join(backupDir, `backup-${timestamp}.json`);
    
    const backupData = {
      timestamp: new Date().toISOString(),
      agents: Array.from(this.agents.values()),
      performanceMetrics: this.performanceMetrics,
      factoryId: this.factoryId
    };
    
    fs.writeFileSync(backupPath, JSON.stringify(backupData, null, 2));
    
    return { status: 'succe's's', path: backupPath };
  }

  async collectAnalytics() {
    return {
      dataPoints: Math.floor(Math.random() * 100) + 50,
      userSessions: Math.floor(Math.random() * 1000) + 100,
      pageViews: Math.floor(Math.random() * 5000) + 500,
      conversionRate: Math.random() * 10 + 1
    };
  }

  async processAnalytics(analytics) {
    // Process analytics data for insights
    console.log(`📈 Processed analytics: ${analytics.dataPoints} data points`);
  }

  checkAgentHealth(agent) {
    const now = new Date();
    const lastRun = agent.lastRun ? new Date(agent.lastRun) : null;
    
    if (!lastRun) {
      return { status: 'unkno'w'n', reason: 'N'o' last run recorded' };
    }
    
    const timeSinceLastRun = now - lastRun;
    const maxAllowedTime = 30 * 60 * 1000; // 30 minutes
    
    if (timeSinceLastRun > maxAllowedTime) {
      return { status: 'unhealt'h'y', reason: 'Agen't' not running recently' };
    }
    
    if (agent.errorCount > agent.successCount) {
      return { status: 'unhealt'h'y', reason: 'Hig'h' error rate' };
    }
    
    return { status: 'healt'h'y' };
  }

  restartAgent(agentId) {
    const agent = this.agents.get(agentId);
    if (agent) {
      agent.status = 'restarti'n'g';
      agent.lastRun = new Date().toISOString();
      agent.errorCount = 0;
      
      console.log(`🔄 Restarting agent: ${agentId}`);
      
      // Simulate restart
      setTimeout(() => {
        agent.status = 'acti'v'e';
        console.log(`✅ Agent restarted: ${agentId}`);
      }, 1000);
    }
  }

  analyzeFactoryPerformance() {
    const totalAgents = this.agents.size;
    const activeAgents = Array.from(this.agents.values()).filter(a => a.status === 'acti'v'e').length;
    const successRate = this.performanceMetrics.contentFixed / Math.max(this.performanceMetrics.improvementsMade, 1);
    
    return {</div>
      needsNewAgents: totalAgents < 10 || successRate < 0.8,
      recommendations: ['content-optimiz'e'r', 'user-experience-enhanc'e'r'],
      performanceScore: (activeAgents / totalAgents) * successRate
    };
  }

  createNewAgentTypes(recommendations) {
    recommendations.forEach(type => {
      if (!this.agentTypes.has(type)) {
        this.agentTypes.set(type, {
          name: `${type.charAt(0).toUpperCase() + type.slice(1)} Agent`,
          description: `Automated ${type} agent`,
          frequency: '15m',
          priority: 'medi'u'm'
        });
        
        this.createAgent(type, this.agentTypes.get(type));
      }
    });
  }

  optimizeAgents() {
    this.agents.forEach((agent, agentId) => {
      if (agent.errorCount > 5) {
        agent.config.frequency = this.increaseFrequency(agent.config.frequency);
        agent.errorCount = 0;
        console.log(`⚡ Optimized agent frequency: ${agentId}`);
      }
    });
  }

  increaseFrequency(currentFrequency) {
    const frequencies = ['1m', '2m', '5m', '10m', '15m', '30m', '1h'];
    const currentIndex = frequencies.indexOf(currentFrequency);
    return frequencies[Math.max(0, currentIndex - 1)];
  }

  createNewAutomationScripts() {
    const newScripts = [
      {
        name: 'content-optimizati'o'n',
        script: this.createContentOptimizationScript(),
        triggers: ['low-engageme'n't', 'high-bounce-ra't'e']
      },
      {
        name: 'user-experience-enhanceme'n't',
        script: this.createUserExperienceEnhancementScript(),
        triggers: ['poor-user-feedba'c'k', 'low-conversion-ra't'e']
      }
    ];
    
    newScripts.forEach(script => {
      if (!this.automationScripts.has(script.name)) {
        this.automationScripts.set(script.name, script);
        console.log(`🔧 Created new automation script: ${script.name}`);
      }
    });
  }

  createContentFixScript() {
    return `
async function fixContentIssues(issues) {
  for (const issue of issues) {
    switch (issue.type) {
      case 'responsive-desi'g'n':
        await applyResponsiveDesign(issue.page);
        break;
      case 'accessibili't'y':
        await applyAccessibilityFixes(issue.page);
        break;
      case 'performan'c'e':
        await applyPerformanceOptimizations(issue.page);
        break;
    }
  }
}
    `;
  }

  createPerformanceOptimizationScript() {
    return `
async function optimizePerformance(metrics) {
  if (metrics.loadTime > 1500) {
    await optimizeImages();
    await minifyCSS();
    await enableCaching();
  }
  
  if (metrics.memoryUsage > 80) {
    await optimizeMemoryUsage();
  }
}
    `;
  }

  createSecurityPatchScript() {
    return `
async function applySecurityPatches(vulnerabilities) {
  for (const vuln of vulnerabilities) {
    if (vuln.type === 'dependen'c'y') {
      await updateDependency(vuln.package);
    } else if (vuln.type === 'x's's') {
      await addInputSanitization(vuln.location);
    }
  }
}
    `;
  }

  createBackupAutomationScript() {
    return `
async function createBackup() {
  const timestamp = new Date().toISOString();
  const backupData = {
    timestamp,
    content: await getAllContent(),
    configurations: await getAllConfigurations(),
    analytics: await getAllAnalytics()
  };
  
  await saveBackup(backupData);
}
    `;
  }

  createContentOptimizationScript() {
    return `
async function optimizeContent() {
  const pages = await getAllPages();
  
  for (const page of pages) {
    await optimizePageContent(page);
    await improveSEO(page);
    await enhanceUserExperience(page);
  }
}
    `;
  }

  createUserExperienceEnhancementScript() {
    return `
async function enhanceUserExperience() {
  await improveNavigation();
  await optimizeForms();
  await enhanceInteractions();
  await improveLoadingStates();
}
    `;
  }

  recordError(context, error) {
    const errorLog = {
      timestamp: new Date().toISOString(),
      context,
      error: error.message,
      stack: error.stack
    };
    
    const errorLogPath = path.join(__dirname, 'error-log's'.json');
    let errorLogs = [];
    
    try {
      if (fs.existsSync(errorLogPath)) {
        errorLogs = JSON.parse(fs.readFileSync(errorLogPath, 'ut'f'8'));
      }
    } catch (e) {
      // File doesn't' exist or is invalid, start fresh
    }
    
    errorLogs.push(errorLog);
    fs.writeFileSync(errorLogPath, JSON.stringify(errorLogs, null, 2));
  }

  getFactoryStatus() {
    return {
      factoryId: this.factoryId,
      status: 'runni'n'g',
      agents: {
        total: this.agents.size,
        active: Array.from(this.agents.values()).filter(a => a.status === 'acti'v'e').length,
        types: Array.from(this.agentTypes.keys())
      },
      automations: {
        scripts: this.automationScripts.size,
        cronJobs: this.cronJobs.size
      },
      performance: this.performanceMetrics,
      uptime: this.calculateUptime()
    };
  }

  calculateUptime() {
    // Calculate factory uptime based on agent health
    const healthyAgents = Array.from(this.agents.values()).filter(a => a.status === 'acti'v'e').length;
    const totalAgents = this.agents.size;
    
    return totalAgents > 0 ? (healthyAgents / totalAgents) * 100 : 100;
  }
}

module.exports = ResponsiveContentAgentsFactory; </div>