
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

#!/usr/bin/env node

/**
 * Enhanced Cursor AI Integration for Zion App
 * 
 * This module provides advanced integration with Cursor AI for:
 * - Real-time code analysis
 * - Automated code improvements
 * - Performance optimization suggestions
 * - Security vulnerability detection
 * - Code quality enhancement
 */

const fs = require('fs')
const path = require('path')
const { execSync, spawn } = require('child_process')
const https = require('https')
class CursorIntegration {
  constructor() {
    this.config = {
      apiEndpoint: process.env.CURSOR_API_ENDPOINT || https://api.cursor.sh',
      apiKey: process.env.CURSOR_API_KEY,
      workspaceId: process.env.CURSOR_WORKSPACE_ID,
      projectPath: process.cwd(),
      maxRetries: 3,
      timeout: 30000
    };
    
    this.isConnected = false;
    this.lastAnalysis = null;
    this.analysisHistory = [];
  }

  /**
   * Initialize Cursor integration
   */
  async initialize() {
    logger.info('🔗 Initializing Cursor AI Integration...');    
    if (!this.config.apiKey) {
      throw new Error('CURSOR_API_KEY environment variable is required');    }
    
    if (!this.config.workspaceId) {
      throw new Error('CURSOR_WORKSPACE_ID environment variable is required');    }
    
    // Test connection
    await this.testConnection();
    
    this.isConnected = true;
    logger.info('✅ Cursor AI Integration initialized successfully');  }

  /**
   * Test connection to Cursor API
   */
  async testConnection() {
    try {
      const response = await this.callCursorAPI({
        action: ping',        workspaceId: this.config.workspaceId
      });
      
      logger.info('🔗 Cursor API connection successful');      return true;
    } catch (error) {
      throw new Error(`Failed to connect to Cursor API: ${error.message}`);
    }
  }

  /**
   * Analyze code quality
   */
  async analyzeCodeQuality(files = null) {
    logger.info('🔍 Analyzing code quality with Cursor AI...');
const targetFiles = files || await this.getTargetFiles()
const analysisData = await this.collectCodeQualityData(targetFiles)
const prompt = this.buildCodeQualityPrompt(analysisData)
const response = await this.callCursorAPI(prompt)
const analysis = this.parseCodeQualityResponse(response);
    
    this.lastAnalysis = {
      type: codeQuality',
      data: analysis,
      timestamp: new Date().toISOString()
    };
    
    this.analysisHistory.push(this.lastAnalysis);
    
    return analysis;
  }

  /**
   * Analyze performance
   */
  async analyzePerformance() {
    logger.info('⚡ Analyzing performance with Cursor AI...');
const performanceData = await this.collectPerformanceData();
const prompt = this.buildPerformancePrompt(performanceData);
const response = await this.callCursorAPI(prompt);
const analysis = this.parsePerformanceResponse(response);
    
    this.lastAnalysis = {
      type: performance',
      data: analysis,
      timestamp: new Date().toISOString()
    };
    
    this.analysisHistory.push(this.lastAnalysis);
    
    return analysis;
  }

  /**
   * Analyze security
   */
  async analyzeSecurity() {
    logger.info('🔒 Analyzing security with Cursor AI...');
const securityData = await this.collectSecurityData();
const prompt = this.buildSecurityPrompt(securityData);
const response = await this.callCursorAPI(prompt);
const analysis = this.parseSecurityResponse(response);
    
    this.lastAnalysis = {
      type: security',
      data: analysis,
      timestamp: new Date().toISOString()
    };
    
    this.analysisHistory.push(this.lastAnalysis);
    
    return analysis;
  }

  /**
   * Get improvement suggestions
   */
  async getImprovementSuggestions(analysis) {
    logger.info('💡 Getting improvement suggestions from Cursor AI...');
    const prompt = this.buildImprovementPrompt(analysis);
    const response = await this.callCursorAPI(prompt);
    
    return this.parseImprovementResponse(response);
  }

  /**
   * Apply code improvements
   */
  async applyCodeImprovements(suggestions) {
    logger.info('🔧 Applying code improvements with Cursor AI...');
    const results = [];
    
    for (const suggestion of suggestions) {
      try {
        const result = await this.applySuggestion(suggestion);
        results.push(result);
      } catch (error) {
        results.push({
          suggestion,
          status: failed',
          error: error.message
        });
      }
    }
    
    return results;
  }

  /**
   * Get target files for analysis
   */
  async getTargetFiles() {
    const extensions = ['.ts', .tsx', .js', .jsx'];
    const excludeDirs = ['node_modules', .next', dist', build', coverage'];
    const files = [];
const walkDir = (dir) => {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
          if (!excludeDirs.includes(item)) {
            walkDir(fullPath);
          }
        } else if (extensions.includes(path.extname(item))) {
          files.push(fullPath);
        }
      }
    };
    
    walkDir(this.config.projectPath);
    return files.slice(0, 100); // Limit to first 100 files
  }

  /**
   * Collect code quality data
   */
  async collectCodeQualityData(files) {
    const data = {
      files: [],
      lintResults: null,
      testResults: null,
      bundleAnalysis: null,
      complexityMetrics: {}
    };
    
    // Collect file information
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, utf8')
const stats = fs.statSync(file);
        
        data.files.push({
          path: file,
          size: stats.size,
          lines: content.split('\n').length,
          lastModified: stats.mtime.toISOString()
        });
      } catch (error) {
        logger.warn(`Warning: Could not read file ${file}: ${error.message}`);
      }
    }
    
    // Run linting
    try {
      const lintOutput = execSync('npm run lint -- --format json', {
        stdio: pipe',
        cwd: this.config.projectPath
      }).toString();
      data.lintResults = JSON.parse(lintOutput);
    } catch (error) {
      data.lintResults = { errors: [], warnings: [] };
    }
    
    // Run tests
    try {
      const testOutput = execSync('npm run test -- --json --outputFile=test-results.json', {
        stdio: pipe',
        cwd: this.config.projectPath
      }).toString();
      data.testResults = JSON.parse(fs.readFileSync('test-results.json', utf8'));
    } catch (error) {
      data.testResults = { success: false, error: error.message };
    }
    
    // Analyze bundle
    try {
      const bundleOutput = execSync('npm run bundle:analyze', {
        stdio: pipe',
        cwd: this.config.projectPath
      }).toString();
      data.bundleAnalysis = this.parseBundleAnalysis(bundleOutput);
    } catch (error) {
      data.bundleAnalysis = { error: error.message };
    }
    
    return data;
  }

  /**
   * Collect performance data
   */
  async collectPerformanceData() {
    const data = {
      buildTime: null,
      bundleSize: null,
      lighthouseScores: null,
      apiPerformance: null,
      memoryUsage: null
    };
    
    // Measure build time
    try {
      const startTime = Date.now();
      execSync('npm run build', { stdio: pipe', cwd: this.config.projectPath });
      data.buildTime = Date.now() - startTime;
    } catch (error) {
      data.buildTime = { error: error.message };
    }
    
    // Get bundle size
    try {
      const bundleOutput = execSync('npm run bundle:report', {
        stdio: pipe',
        cwd: this.config.projectPath
      }).toString();
      data.bundleSize = this.parseBundleSize(bundleOutput);
    } catch (error) {
      data.bundleSize = { error: error.message };
    }
    
    // Get memory usage
    data.memoryUsage = process.memoryUsage();
    
    return data;
  }

  /**
   * Collect security data
   */
  async collectSecurityData() {
    const data = {
      vulnerabilities: null,
      dependencies: null,
      securityAudit: null,
      codeSecurity: null
    };
    
    // Check for vulnerabilities
    try {
      const auditOutput = execSync('npm audit --json', {
        stdio: pipe',
        cwd: this.config.projectPath
      }).toString();
      data.vulnerabilities = JSON.parse(auditOutput);
    } catch (error) {
      data.vulnerabilities = { error: error.message };
    }
    
    // Get dependency information
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', utf8'));
      data.dependencies = {
        total: Object.keys(packageJson.dependencies || {}).length,
        devDependencies: Object.keys(packageJson.devDependencies || {}).length,
        outdated: JSON.parse(execSync('npm outdated --json', { stdio: pipe' }).toString() || {})
      };
    } catch (error) {
      data.dependencies = { error: error.message };
    }
    
    return data;
  }

  /**
   * Build code quality prompt
   */
  buildCodeQualityPrompt(data) {
    return {
      workspaceId: this.config.workspaceId,
      prompt: `Analyze the code quality of this Next.js application and provide detailed recommendations:

Project Structure:
- Total files: ${data.files.length}
- Total lines: ${data.files.reduce((sum, file) => sum + file.lines, 0)}

Linting Results:
${JSON.stringify(data.lintResults, null, 2)}

Test Results:
${JSON.stringify(data.testResults, null, 2)}

Bundle Analysis:
${JSON.stringify(data.bundleAnalysis, null, 2)}

Please provide:
1. Critical code quality issues that need immediate attention
2. Performance optimization opportunities
3. Code maintainability improvements
4. Testing coverage recommendations
5. Bundle size optimization suggestions
6. Specific code examples for improvements

Focus on practical, implementable improvements that will have the most impact on code quality and maintainability.`,
      context: code-quality-analysis',
      maxTokens: 3000
    };
  }

  /**
   * Build performance prompt
   */
  buildPerformancePrompt(data) {
    return {
      workspaceId: this.config.workspaceId,
      prompt: `Analyze the performance of this Next.js application and provide optimization recommendations:

Build Performance:
- Build time: ${data.buildTime}ms

Bundle Analysis:
${JSON.stringify(data.bundleSize, null, 2)}

Memory Usage:
${JSON.stringify(data.memoryUsage, null, 2)}

Please provide:
1. Build time optimization strategies
2. Bundle size reduction techniques
3. Memory usage optimization
4. Runtime performance improvements
5. Caching strategies
6. Code splitting recommendations
7. Specific implementation suggestions

Focus on measurable performance improvements that will enhance user experience.`,
      context: performance-analysis',
      maxTokens: 3000
    };
  }

  /**
   * Build security prompt
   */
  buildSecurityPrompt(data) {
    return {
      workspaceId: this.config.workspaceId,
      prompt: `Analyze the security of this Next.js application and provide security recommendations:

Vulnerability Scan:
${JSON.stringify(data.vulnerabilities, null, 2)}

Dependencies:
${JSON.stringify(data.dependencies, null, 2)}

Please provide:
1. Critical security vulnerabilities that need immediate patching
2. Dependency security recommendations
3. Code security best practices
4. Authentication and authorization improvements
5. Data protection strategies
6. Input validation enhancements
7. Specific security fixes with code examples

Focus on security improvements that will protect user data and prevent security breaches.`,
      context: security-analysis',
      maxTokens: 3000
    };
  }

  /**
   * Build improvement prompt
   */
  buildImprovementPrompt(analysis) {
    return {
      workspaceId: this.config.workspaceId,
      prompt: `Based on this analysis, provide specific, actionable improvement suggestions:

Analysis Results:
${JSON.stringify(analysis, null, 2)}

Please provide:
1. Prioritized list of improvements
2. Specific code changes needed
3. Implementation steps
4. Expected impact of each improvement
5. Risk assessment for each change
6. Testing recommendations

For each suggestion, include:
- File path and line numbers
- Before and after code examples
- Explanation of the improvement
- Priority level (critical, high, medium, low)

Focus on improvements that can be implemented immediately and will have the most positive impact.`,
      context: improvement-suggestions',
      maxTokens: 4000
    };
  }

  /**
   * Call Cursor API
   */
  async callCursorAPI(prompt) {
    return new Promise((resolve, reject) => {
      const postData = JSON.stringify(prompt)
const options = {
        hostname: new URL(this.config.apiEndpoint).hostname,
        port: 443,
        path: /api/analyze',
        method: POST',
        headers: {
          Content-Type': application/json',
          Authorization': `Bearer ${this.config.apiKey}`,
          Content-Length': Buffer.byteLength(postData)
        },
        timeout: this.config.timeout
      }
const req = https.request(options, (res) => {
        let data = ;
        res.on('data', (chunk) => data += chunk);
        res.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (error) {
            reject(new Error('Invalid JSON response from Cursor API'));
          }
        });
      });

      req.on('error', reject);
      req.on('timeout', () => {
        req.destroy();
        reject(new Error('Request timeout'));
      });

      req.write(postData);
      req.end();
    });
  }

  /**
   * Parse code quality response
   */
  parseCodeQualityResponse(response) {
    try {
      return {
        issues: response.issues || [],
        recommendations: response.recommendations || [],
        metrics: response.metrics || {},
        priority: response.priority || medium',
        confidence: response.confidence || 0.8
      };
    } catch (error) {
      return {
        issues: [],
        recommendations: [],
        metrics: {},
        priority: medium',
        confidence: 0.5,
        error: Failed to parse response
      };
    }
  }

  /**
   * Parse performance response
   */
  parsePerformanceResponse(response) {
    try {
      return {
        optimizations: response.optimizations || [],
        bottlenecks: response.bottlenecks || [],
        metrics: response.metrics || {},
        priority: response.priority || medium',
        confidence: response.confidence || 0.8
      };
    } catch (error) {
      return {
        optimizations: [],
        bottlenecks: [],
        metrics: {},
        priority: medium',
        confidence: 0.5,
        error: Failed to parse response
      };
    }
  }

  /**
   * Parse security response
   */
  parseSecurityResponse(response) {
    try {
      return {
        vulnerabilities: response.vulnerabilities || [],
        recommendations: response.recommendations || [],
        riskLevel: response.riskLevel || medium',
        priority: response.priority || high',
        confidence: response.confidence || 0.9
      };
    } catch (error) {
      return {
        vulnerabilities: [],
        recommendations: [],
        riskLevel: medium',
        priority: high',
        confidence: 0.5,
        error: Failed to parse response
      };
    }
  }

  /**
   * Parse improvement response
   */
  parseImprovementResponse(response) {
    try {
      return {
        suggestions: response.suggestions || [],
        priority: response.priority || medium',
        implementation: response.implementation || {},
        testing: response.testing || [],
        risks: response.risks || []
      };
    } catch (error) {
      return {
        suggestions: [],
        priority: medium',
        implementation: {},
        testing: [],
        risks: [],
        error: Failed to parse response'      };
    }
  }

  /**
   * Apply suggestion
   */
  async applySuggestion(suggestion) {
    try {
      const prompt = {
        workspaceId: this.config.workspaceId,
        prompt: `Apply this code improvement suggestion:

${JSON.stringify(suggestion, null, 2)}

Please provide the exact code changes needed, including:
1. File paths to modify
2. Specific line changes
3. New code to add
4. Code to remove
5. Any additional files to create

Make sure the changes are safe and maintain the existing functionality.`,
        context: code-application',
        maxTokens: 2000
      };
      const response = await this.callCursorAPI(prompt);
const changes = this.parseCodeChanges(response);
      
      // Apply the changes
      const results = await this.applyCodeChanges(changes);
      
      return {
        suggestion,
        status: completed',
        changes: results,
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      return {
        suggestion,
        status: failed',
        error: error.message
      };
    }
  }

  /**
   * Parse code changes from response
   */
  parseCodeChanges(response) {
    try {
      return response.changes || [];
    } catch (error) {
      return [];
    }
  }

  /**
   * Apply code changes
   */
  async applyCodeChanges(changes) {
    const results = [];
    
    for (const change of changes) {
      try {
        if (change.type === modify') {
          const result = await this.modifyFile(change.file, change.changes);
          results.push(result);
        } else if (change.type === create') {
          const result = await this.createFile(change.file, change.content);
          results.push(result);
        } else if (change.type === delete') {
          const result = await this.deleteFile(change.file);
          results.push(result);
        }
      } catch (error) {
        results.push({
          change,
          status: failed',
          error: error.message
        });
      }
    }
    
    return results;
  }

  /**
   * Modify file
   */
  async modifyFile(filePath, changes) {
    try {
      const fullPath = path.resolve(filePath);
      let content = fs.readFileSync(fullPath, utf8');      
      // Apply changes
      for (const change of changes) {
        if (change.find && change.replace) {
          content = content.replace(change.find, change.replace);
        } else if (change.line && change.newContent) {
          const lines = content.split('\n');          lines[change.line - 1] = change.newContent;
          content = lines.join('\n');        }
      }
      
      fs.writeFileSync(fullPath, content);
      
      return {
        file: filePath,
        status: modified',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to modify file ${filePath}: ${error.message}`);
    }
  }

  /**
   * Create file
   */
  async createFile(filePath, content) {
    try {
      const fullPath = path.resolve(filePath);
      const dir = path.dirname(fullPath);
      
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
      
      fs.writeFileSync(fullPath, content);
      
      return {
        file: filePath,
        status: created',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to create file ${filePath}: ${error.message}`);
    }
  }

  /**
   * Delete file
   */
  async deleteFile(filePath) {
    try {
      const fullPath = path.resolve(filePath);
      fs.unlinkSync(fullPath);
      
      return {
        file: filePath,
        status: deleted',
        timestamp: new Date().toISOString()
      };
    } catch (error) {
      throw new Error(`Failed to delete file ${filePath}: ${error.message}`);
    }
  }

  /**
   * Parse bundle analysis
   */
  parseBundleAnalysis(output) {
    try {
      // Extract bundle size information from output
      const lines = output.split('\n')
const bundleInfo = {};
      
      for (const line of lines) {
        if (line.includes('Bundle size:')) {
          bundleInfo.size = line.split(':')[1].trim();
        } else if (line.includes('Chunks:')) {
          bundleInfo.chunks = parseInt(line.split(':')[1].trim());
        }
      }
      
      return bundleInfo;
    } catch (error) {
      return { error: error.message };
    }
  }

  /**
   * Parse bundle size
   */
  parseBundleSize(output) {
    try {
      // Extract size information from bundle analysis output
      const lines = output.split('\n')
const sizeInfo = {};
      
      for (const line of lines) {
        if (line.includes('Total size:')) {
          sizeInfo.total = line.split(':')[1].trim();
        } else if (line.includes('JavaScript:')) {
          sizeInfo.javascript = line.split(':')[1].trim();
        } else if (line.includes('CSS:')) {
          sizeInfo.css = line.split(':')[1].trim();
        }
      }
      
      return sizeInfo;
    } catch (error) {
      return { error: error.message };
    }
  }

  /**
   * Get analysis history
   */
  getAnalysisHistory() {
    return this.analysisHistory;
  }

  /**
   * Get last analysis
   */
  getLastAnalysis() {
    return this.lastAnalysis;
  }

  /**
   * Get connection status
   */
  getStatus() {
    return {
      isConnected: this.isConnected,
      lastAnalysis: this.lastAnalysis?.type || null,
      historyLength: this.analysisHistory.length,
      timestamp: new Date().toISOString()
    };
  }
}

module.exports = CursorIntegration; 