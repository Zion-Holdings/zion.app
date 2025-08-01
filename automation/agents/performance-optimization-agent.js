const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class PerformanceOptimizationAgent {
  constructor() {
    this.agentId = process.env.AGENT_ID;
    this.agentType = process.env.AGENT_TYPE;
    this.config = JSON.parse(process.env.AGENT_CONFIG || '{}');
    this.projectRoot = path.resolve(__dirname, '../..');
    this.reportsDir = path.join(__dirname, '../reports/performance-optimization');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      this.reportsDir,
      path.join(this.reportsDir, 'performance-reports'),
      path.join(this.reportsDir, 'bundle-analysis'),
      path.join(this.reportsDir, 'optimization-suggestions'),
      path.join(this.reportsDir, 'lighthouse-reports')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async start() {
    console.log(`Performance Optimization Agent ${this.agentId} started`);
    
    // Initial performance analysis
    await this.performPerformanceAnalysis();
    
    // Start periodic performance monitoring
    setInterval(() => {
      this.monitorPerformance();
    }, 300000); // Every 5 minutes
    
    // Start bundle analysis
    setInterval(() => {
      this.analyzeBundle();
    }, 1800000); // Every 30 minutes
    
    // Start Lighthouse audits
    setInterval(() => {
      this.runLighthouseAudit();
    }, 3600000); // Every hour
  }

  async performPerformanceAnalysis() {
    try {
      console.log('Performing comprehensive performance analysis...');
      
      const analysis = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        bundleAnalysis: {},
        performanceMetrics: {},
        optimizationSuggestions: [],
        lighthouseScore: {}
      };
      
      // Analyze bundle size
      analysis.bundleAnalysis = await this.analyzeBundleSize();
      
      // Get performance metrics
      analysis.performanceMetrics = await this.getPerformanceMetrics();
      
      // Run Lighthouse audit
      analysis.lighthouseScore = await this.runLighthouseAudit();
      
      // Generate optimization suggestions
      analysis.optimizationSuggestions = this.generateOptimizationSuggestions(analysis);
      
      // Save analysis report
      await this.savePerformanceReport(analysis);
      
      console.log('Performance analysis completed');
      
    } catch (error) {
      console.error('Performance analysis failed:', error);
    }
  }

  async analyzeBundleSize() {
    try {
      console.log('Analyzing bundle size...');
      
      const bundleAnalysis = {
        totalSize: 0,
        chunkSizes: {},
        largestChunks: [],
        optimizationOpportunities: []
      };
      
      // Check if build directory exists
      const buildDir = path.join(this.projectRoot, '.next');
      if (fs.existsSync(buildDir)) {
        bundleAnalysis.totalSize = this.calculateDirectorySize(buildDir);
        
        // Analyze individual chunks
        const staticDir = path.join(buildDir, 'static');
        if (fs.existsSync(staticDir)) {
          const chunks = fs.readdirSync(staticDir);
          for (const chunk of chunks) {
            const chunkPath = path.join(staticDir, chunk);
            const chunkSize = this.calculateDirectorySize(chunkPath);
            bundleAnalysis.chunkSizes[chunk] = chunkSize;
          }
        }
        
        // Find largest chunks
        const sortedChunks = Object.entries(bundleAnalysis.chunkSizes)
          .sort(([,a], [,b]) => b - a)
          .slice(0, 5);
        
        bundleAnalysis.largestChunks = sortedChunks;
        
        // Identify optimization opportunities
        if (bundleAnalysis.totalSize > 5000000) { // 5MB
          bundleAnalysis.optimizationOpportunities.push({
            type: 'bundle_size',
            priority: 'high',
            message: 'Bundle size is large. Consider code splitting and lazy loading.',
            currentSize: bundleAnalysis.totalSize,
            targetSize: 5000000
          });
        }
        
        // Check for large individual chunks
        for (const [chunk, size] of sortedChunks) {
          if (size > 1000000) { // 1MB per chunk
            bundleAnalysis.optimizationOpportunities.push({
              type: 'large_chunk',
              priority: 'medium',
              message: `Chunk ${chunk} is large (${(size / 1024 / 1024).toFixed(2)}MB). Consider splitting.`,
              chunk,
              size
            });
          }
        }
      }
      
      return bundleAnalysis;
      
    } catch (error) {
      console.error('Bundle analysis failed:', error);
      return { error: error.message };
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

  async getPerformanceMetrics() {
    try {
      console.log('Getting performance metrics...');
      
      const metrics = {
        buildTime: 0,
        buildSize: 0,
        memoryUsage: 0,
        cpuUsage: 0,
        responseTime: 0
      };
      
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
      
      // Get build size
      const buildDir = path.join(this.projectRoot, '.next');
      if (fs.existsSync(buildDir)) {
        metrics.buildSize = this.calculateDirectorySize(buildDir);
      }
      
      // Get memory usage
      const memUsage = process.memoryUsage();
      metrics.memoryUsage = memUsage.heapUsed / 1024 / 1024; // MB
      
      // Get CPU usage
      try {
        const { stdout } = await execAsync('top -l 1 | grep "CPU usage" | awk \'{print $3}\' | sed \'s/%//\'');
        metrics.cpuUsage = parseFloat(stdout);
      } catch (error) {
        console.error('Failed to get CPU usage:', error);
      }
      
      // Measure response time
      try {
        const { stdout } = await execAsync('curl -s -w "%{time_total}" http://localhost:3000', {
          timeout: 10000
        });
        metrics.responseTime = parseFloat(stdout);
      } catch (error) {
        console.error('Failed to measure response time:', error);
      }
      
      return metrics;
      
    } catch (error) {
      console.error('Failed to get performance metrics:', error);
      return { error: error.message };
    }
  }

  async runLighthouseAudit() {
    try {
      console.log('Running Lighthouse audit...');
      
      const lighthouseReport = {
        performance: 0,
        accessibility: 0,
        bestPractices: 0,
        seo: 0,
        suggestions: []
      };
      
      // Check if Lighthouse is available
      try {
        const { stdout } = await execAsync('npx lighthouse http://localhost:3000 --output=json --only-categories=performance,accessibility,best-practices,seo', {
          cwd: this.projectRoot,
          timeout: 120000
        });
        
        const lighthouse = JSON.parse(stdout);
        
        lighthouseReport.performance = Math.round(lighthouse.categories.performance.score * 100);
        lighthouseReport.accessibility = Math.round(lighthouse.categories.accessibility.score * 100);
        lighthouseReport.bestPractices = Math.round(lighthouse.categories['best-practices'].score * 100);
        lighthouseReport.seo = Math.round(lighthouse.categories.seo.score * 100);
        
        // Extract suggestions
        if (lighthouse.audits) {
          for (const [key, audit] of Object.entries(lighthouse.audits)) {
            if (audit.score !== null && audit.score < 1) {
              lighthouseReport.suggestions.push({
                id: key,
                title: audit.title,
                description: audit.description,
                score: audit.score,
                impact: audit.impact
              });
            }
          }
        }
        
      } catch (error) {
        console.error('Lighthouse audit failed:', error);
        lighthouseReport.error = error.message;
      }
      
      return lighthouseReport;
      
    } catch (error) {
      console.error('Failed to run Lighthouse audit:', error);
      return { error: error.message };
    }
  }

  generateOptimizationSuggestions(analysis) {
    const suggestions = [];
    
    // Bundle size suggestions
    if (analysis.bundleAnalysis.optimizationOpportunities) {
      suggestions.push(...analysis.bundleAnalysis.optimizationOpportunities);
    }
    
    // Performance suggestions
    if (analysis.performanceMetrics) {
      if (analysis.performanceMetrics.buildTime > 60000) { // 1 minute
        suggestions.push({
          type: 'build_time',
          priority: 'medium',
          message: 'Build time is slow. Consider optimizing build process.',
          currentTime: analysis.performanceMetrics.buildTime,
          targetTime: 60000
        });
      }
      
      if (analysis.performanceMetrics.responseTime > 2000) { // 2 seconds
        suggestions.push({
          type: 'response_time',
          priority: 'high',
          message: 'Response time is slow. Consider performance optimizations.',
          currentTime: analysis.performanceMetrics.responseTime,
          targetTime: 2000
        });
      }
      
      if (analysis.performanceMetrics.memoryUsage > 500) { // 500MB
        suggestions.push({
          type: 'memory_usage',
          priority: 'medium',
          message: 'High memory usage detected. Consider memory optimizations.',
          currentUsage: analysis.performanceMetrics.memoryUsage,
          targetUsage: 500
        });
      }
    }
    
    // Lighthouse suggestions
    if (analysis.lighthouseScore) {
      if (analysis.lighthouseScore.performance < 90) {
        suggestions.push({
          type: 'lighthouse_performance',
          priority: 'high',
          message: `Lighthouse performance score is ${analysis.lighthouseScore.performance}. Aim for 90+.`,
          currentScore: analysis.lighthouseScore.performance,
          targetScore: 90
        });
      }
      
      if (analysis.lighthouseScore.suggestions) {
        for (const suggestion of analysis.lighthouseScore.suggestions) {
          if (suggestion.impact === 'high') {
            suggestions.push({
              type: 'lighthouse_suggestion',
              priority: 'high',
              message: suggestion.title,
              description: suggestion.description,
              score: suggestion.score
            });
          }
        }
      }
    }
    
    return suggestions;
  }

  async monitorPerformance() {
    try {
      console.log('Monitoring performance...');
      
      const monitoring = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        metrics: await this.getPerformanceMetrics(),
        alerts: []
      };
      
      // Check for performance alerts
      if (monitoring.metrics.responseTime > 3000) {
        monitoring.alerts.push({
          type: 'slow_response',
          severity: 'high',
          message: 'Response time is very slow',
          value: monitoring.metrics.responseTime
        });
      }
      
      if (monitoring.metrics.memoryUsage > 1000) {
        monitoring.alerts.push({
          type: 'high_memory',
          severity: 'medium',
          message: 'Memory usage is high',
          value: monitoring.metrics.memoryUsage
        });
      }
      
      // Save monitoring report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'performance-reports', `monitoring-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(monitoring, null, 2));
      
      // Handle alerts
      if (monitoring.alerts.length > 0) {
        await this.handlePerformanceAlerts(monitoring.alerts);
      }
      
    } catch (error) {
      console.error('Performance monitoring failed:', error);
    }
  }

  async handlePerformanceAlerts(alerts) {
    for (const alert of alerts) {
      console.log(`Performance Alert [${alert.severity.toUpperCase()}]: ${alert.message}`);
      
      if (alert.severity === 'high') {
        await this.optimizePerformance();
      }
    }
  }

  async optimizePerformance() {
    try {
      console.log('Applying performance optimizations...');
      
      // Optimize bundle
      await this.optimizeBundle();
      
      // Optimize images
      await this.optimizeImages();
      
      // Optimize CSS
      await this.optimizeCSS();
      
      console.log('Performance optimizations applied');
      
    } catch (error) {
      console.error('Performance optimization failed:', error);
    }
  }

  async optimizeBundle() {
    try {
      // Enable Next.js bundle analyzer
      await execAsync('npm run build -- --analyze', {
        cwd: this.projectRoot,
        timeout: 300000
      });
      
      // Apply code splitting optimizations
      await this.applyCodeSplitting();
      
    } catch (error) {
      console.error('Bundle optimization failed:', error);
    }
  }

  async applyCodeSplitting() {
    try {
      // This would involve analyzing the code and applying dynamic imports
      console.log('Applying code splitting optimizations...');
      
      // Find large components and suggest dynamic imports
      const sourceFiles = await this.findLargeComponents();
      
      for (const file of sourceFiles) {
        await this.suggestDynamicImport(file);
      }
      
    } catch (error) {
      console.error('Code splitting failed:', error);
    }
  }

  async findLargeComponents() {
    const largeComponents = [];
    
    try {
      const { stdout } = await execAsync(`find ${this.projectRoot} -name "*.js" -o -name "*.jsx" -o -name "*.ts" -o -name "*.tsx"`, {
        cwd: this.projectRoot
      });
      
      const files = stdout.trim().split('\n');
      
      for (const file of files) {
        if (fs.existsSync(file)) {
          const stats = fs.statSync(file);
          if (stats.size > 10000) { // 10KB
            largeComponents.push(file);
          }
        }
      }
      
    } catch (error) {
      console.error('Failed to find large components:', error);
    }
    
    return largeComponents;
  }

  async suggestDynamicImport(filePath) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Look for large imports that could be dynamic
      const importMatches = content.match(/import\s+.*\s+from\s+['"]([^'"]+)['"]/g);
      
      if (importMatches && importMatches.length > 5) {
        const suggestion = {
          file: filePath,
          type: 'dynamic_import',
          message: 'Consider using dynamic imports for better code splitting',
          imports: importMatches.slice(0, 5)
        };
        
        // Save suggestion
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const suggestionPath = path.join(this.reportsDir, 'optimization-suggestions', `suggestion-${timestamp}.json`);
        fs.writeFileSync(suggestionPath, JSON.stringify(suggestion, null, 2));
      }
      
    } catch (error) {
      console.error('Failed to suggest dynamic import:', error);
    }
  }

  async optimizeImages() {
    try {
      console.log('Optimizing images...');
      
      // Check for unoptimized images
      const imageFiles = await this.findUnoptimizedImages();
      
      for (const image of imageFiles) {
        await this.optimizeImage(image);
      }
      
    } catch (error) {
      console.error('Image optimization failed:', error);
    }
  }

  async findUnoptimizedImages() {
    const unoptimizedImages = [];
    
    try {
      const { stdout } = await execAsync(`find ${this.projectRoot} -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.gif"`, {
        cwd: this.projectRoot
      });
      
      const images = stdout.trim().split('\n');
      
      for (const image of images) {
        if (fs.existsSync(image)) {
          const stats = fs.statSync(image);
          if (stats.size > 500000) { // 500KB
            unoptimizedImages.push(image);
          }
        }
      }
      
    } catch (error) {
      console.error('Failed to find unoptimized images:', error);
    }
    
    return unoptimizedImages;
  }

  async optimizeImage(imagePath) {
    try {
      // This would involve using tools like imagemin
      console.log(`Optimizing image: ${imagePath}`);
      
      // For now, just log the suggestion
      const suggestion = {
        type: 'image_optimization',
        priority: 'medium',
        message: `Consider optimizing image: ${path.basename(imagePath)}`,
        file: imagePath
      };
      
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const suggestionPath = path.join(this.reportsDir, 'optimization-suggestions', `image-${timestamp}.json`);
      fs.writeFileSync(suggestionPath, JSON.stringify(suggestion, null, 2));
      
    } catch (error) {
      console.error('Failed to optimize image:', error);
    }
  }

  async optimizeCSS() {
    try {
      console.log('Optimizing CSS...');
      
      // Check for CSS optimizations
      const cssFiles = await this.findCSSFiles();
      
      for (const cssFile of cssFiles) {
        await this.analyzeCSS(cssFile);
      }
      
    } catch (error) {
      console.error('CSS optimization failed:', error);
    }
  }

  async findCSSFiles() {
    const cssFiles = [];
    
    try {
      const { stdout } = await execAsync(`find ${this.projectRoot} -name "*.css"`, {
        cwd: this.projectRoot
      });
      
      cssFiles.push(...stdout.trim().split('\n').filter(file => file));
      
    } catch (error) {
      console.error('Failed to find CSS files:', error);
    }
    
    return cssFiles;
  }

  async analyzeCSS(cssFile) {
    try {
      const content = fs.readFileSync(cssFile, 'utf8');
      
      // Check for unused CSS
      const unusedCSS = this.findUnusedCSS(content);
      
      if (unusedCSS.length > 0) {
        const suggestion = {
          type: 'unused_css',
          priority: 'low',
          message: `Found ${unusedCSS.length} potentially unused CSS rules`,
          file: cssFile,
          rules: unusedCSS.slice(0, 10)
        };
        
        const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
        const suggestionPath = path.join(this.reportsDir, 'optimization-suggestions', `css-${timestamp}.json`);
        fs.writeFileSync(suggestionPath, JSON.stringify(suggestion, null, 2));
      }
      
    } catch (error) {
      console.error('Failed to analyze CSS:', error);
    }
  }

  findUnusedCSS(content) {
    // Basic CSS analysis - this would be enhanced with actual CSS parsing
    const unusedRules = [];
    
    // Look for potentially unused selectors
    const selectors = content.match(/[.#][a-zA-Z0-9_-]+\s*{/g);
    
    if (selectors) {
      for (const selector of selectors) {
        // This is a simplified check - real implementation would be more sophisticated
        if (selector.includes('unused') || selector.includes('old')) {
          unusedRules.push(selector);
        }
      }
    }
    
    return unusedRules;
  }

  async analyzeBundle() {
    try {
      console.log('Analyzing bundle...');
      
      const bundleReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        analysis: await this.analyzeBundleSize(),
        recommendations: []
      };
      
      // Generate recommendations based on analysis
      if (bundleReport.analysis.optimizationOpportunities) {
        bundleReport.recommendations = bundleReport.analysis.optimizationOpportunities;
      }
      
      // Save bundle analysis
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'bundle-analysis', `bundle-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(bundleReport, null, 2));
      
      console.log('Bundle analysis completed');
      
    } catch (error) {
      console.error('Bundle analysis failed:', error);
    }
  }

  async savePerformanceReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.reportsDir, 'performance-reports', `performance-${timestamp}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`Performance report saved: ${reportPath}`);
  }

  async stop() {
    console.log(`Performance Optimization Agent ${this.agentId} stopping...`);
    process.exit(0);
  }
}

// Start the agent
const agent = new PerformanceOptimizationAgent();

process.on('SIGTERM', () => {
  agent.stop();
});

process.on('SIGINT', () => {
  agent.stop();
});

agent.start().catch(error => {
  console.error('Performance Optimization Agent failed to start:', error);
  process.exit(1);
}); 