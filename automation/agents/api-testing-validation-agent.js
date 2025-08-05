const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');

const execAsync = promisify(exec);

class APITestingValidationAgent {
  constructor() {
    
  // Enhanced Learning Capabilities
  constructor() {
    super();
    this.learningData = new Map();
    this.performanceHistory = [];
    this.adaptationRate = 0.1;
    this.intelligenceLevel = 0.8;
  }

  async learnFromExperience(data, outcome) {
    this.learningData.set(Date.now(), { data, outcome });
    this.updatePerformanceHistory(outcome);
    this.adaptBehavior();
    this.improveIntelligence();
  }

  updatePerformanceHistory(outcome) {
    this.performanceHistory.push({
      timestamp: Date.now(),
      outcome: outcome,
      success: outcome.success || false
    });
  }

  adaptBehavior() {
    const recentPerformance = this.performanceHistory
      .slice(-10)
      .filter(p => Date.now() - p.timestamp < 3600000);
    
    const successRate = recentPerformance.filter(p => p.success).length / recentPerformance.length;
    
    if (successRate < 0.7) {
      this.adaptationRate *= 1.1;
    } else if (successRate > 0.9) {
      this.adaptationRate *= 0.95;
    }
  }

  improveIntelligence() {
    const recentSuccess = this.performanceHistory
      .slice(-20)
      .filter(p => p.success).length / 20;
    
    if (recentSuccess > 0.8) {
      this.intelligenceLevel = Math.min(this.intelligenceLevel + 0.01, 1.0);
    }
  }

    this.agentId = process.env.AGENT_ID;
    this.agentType = process.env.AGENT_TYPE;
    this.config = JSON.parse(process.env.AGENT_CONFIG || '{}');
    this.projectRoot = path.resolve(__dirname, '../..');
    this.reportsDir = path.join(__dirname, '../reports/api-testing-validation');
    this.ensureDirectories();
  }

  ensureDirectories() {
    const dirs = [
      this.reportsDir,
      path.join(this.reportsDir, 'test-results'),
      path.join(this.reportsDir, 'validation-reports'),
      path.join(this.reportsDir, 'performance-tests'),
      path.join(this.reportsDir, 'security-tests'),
      path.join(this.reportsDir, 'coverage-reports')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async start() {
    console.log(`API Testing Validation Agent ${this.agentId} started`);
    
    // Initial API analysis
    await this.analyzeAPIs();
    
    // Start continuous testing
    setInterval(() => {
      this.runAPITests();
    }, 300000); // Every 5 minutes
    
    // Start validation checks
    setInterval(() => {
      this.validateAPIs();
    }, 900000); // Every 15 minutes
    
    // Start performance testing
    setInterval(() => {
      this.runPerformanceTests();
    }, 1800000); // Every 30 minutes
  }

  async analyzeAPIs() {
    try {
      console.log('Performing comprehensive API analysis...');
      
      const analysis = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        apiEndpoints: [],
        testCoverage: {},
        validationResults: {},
        performanceMetrics: {},
        securityIssues: [],
        recommendations: []
      };
      
      // Discover API endpoints
      analysis.apiEndpoints = await this.discoverAPIEndpoints();
      
      // Analyze test coverage
      analysis.testCoverage = await this.analyzeTestCoverage();
      
      // Validate APIs
      analysis.validationResults = await this.validateAPIEndpoints();
      
      // Analyze performance
      analysis.performanceMetrics = await this.analyzePerformance();
      
      // Check security issues
      analysis.securityIssues = await this.checkSecurityIssues();
      
      // Generate recommendations
      analysis.recommendations = this.generateRecommendations(analysis);
      
      // Save analysis report
      await this.saveAnalysisReport(analysis);
      
      console.log('API analysis completed');
      
    } catch (error) {
      console.error('API analysis failed:', error);
    }
  }

  async discoverAPIEndpoints() {
    const endpoints = [];
    
    try {
      // Look for API route files
      const apiFiles = this.findAPIFiles();
      
      for (const file of apiFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const discoveredEndpoints = this.extractEndpoints(content);
        
        for (const endpoint of discoveredEndpoints) {
          endpoints.push({
            file: file,
            method: endpoint.method,
            path: endpoint.path,
            description: endpoint.description,
            parameters: endpoint.parameters
          });
        }
      }
      
      // Also check for Next.js API routes
      const nextApiDir = path.join(this.projectRoot, 'src', 'pages', 'api');
      if (fs.existsSync(nextApiDir)) {
        const nextApiFiles = this.findNextAPIFiles(nextApiDir);
        
        for (const file of nextApiFiles) {
          const content = fs.readFileSync(file, 'utf8');
          const nextEndpoints = this.extractNextEndpoints(file, content);
          
          for (const endpoint of nextEndpoints) {
            endpoints.push({
              file: file,
              method: endpoint.method,
              path: endpoint.path,
              description: endpoint.description,
              parameters: endpoint.parameters
            });
          }
        }
      }
      
    } catch (error) {
      console.error('Failed to discover API endpoints:', error);
    }
    
    return endpoints;
  }

  findAPIFiles() {
    const apiFiles = [];
    const apiExtensions = ['.js', '.ts'];
    
    try {
      const findAPIFiles = (dir) => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            findAPIFiles(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item).toLowerCase();
            if (apiExtensions.includes(ext)) {
              const content = fs.readFileSync(fullPath, 'utf8');
              if (this.containsAPIEndpoints(content)) {
                apiFiles.push(fullPath);
              }
            }
          }
        }
      };
      
      findAPIFiles(this.projectRoot);
      
    } catch (error) {
      console.error('Failed to find API files:', error);
    }
    
    return apiFiles;
  }

  containsAPIEndpoints(content) {
    const apiKeywords = [
      'app.get', 'app.post', 'app.put', 'app.delete', 'app.patch',
      'router.get', 'router.post', 'router.put', 'router.delete', 'router.patch',
      'express.Router', 'app.use', 'router.use'
    ];
    
    return apiKeywords.some(keyword => content.includes(keyword));
  }

  extractEndpoints(content) {
    const endpoints = [];
    const endpointRegex = /(app|router)\.(get|post|put|delete|patch)\s*\(\s*['"`]([^'"`]+)['"`]/g;
    
    let match;
    while ((match = endpointRegex.exec(content)) !== null) {
      endpoints.push({
        method: match[2].toUpperCase(),
        path: match[3],
        description: this.extractEndpointDescription(content, match.index),
        parameters: this.extractParameters(content, match.index)
      });
    }
    
    return endpoints;
  }

  findNextAPIFiles(apiDir) {
    const apiFiles = [];
    
    try {
      const findNextAPIFiles = (dir) => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            findNextAPIFiles(fullPath);
          } else if (stat.isFile()) {
            const ext = path.extname(item).toLowerCase();
            if (ext === '.js' || ext === '.ts') {
              apiFiles.push(fullPath);
            }
          }
        }
      };
      
      findNextAPIFiles(apiDir);
      
    } catch (error) {
      console.error('Failed to find Next.js API files:', error);
    }
    
    return apiFiles;
  }

  extractNextEndpoints(file, content) {
    const endpoints = [];
    const relativePath = path.relative(path.join(this.projectRoot, 'src', 'pages', 'api'), file);
    const routePath = '/' + relativePath.replace(/\.(js|ts)$/, '');
    
    // Check for HTTP methods in the file
    const methods = ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'];
    
    for (const method of methods) {
      if (content.includes(`export default function ${method.toLowerCase()}`) || 
          content.includes(`export async function ${method.toLowerCase()}`) ||
          content.includes(`case '${method}':`)) {
        endpoints.push({
          method: method,
          path: routePath,
          description: this.extractEndpointDescription(content, 0),
          parameters: this.extractParameters(content, 0)
        });
      }
    }
    
    return endpoints;
  }

  extractEndpointDescription(content, index) {
    // Look for comments above the endpoint
    const beforeContent = content.substring(Math.max(0, index - 200), index);
    const commentMatch = beforeContent.match(/\/\*\*([^*]|\*(?!\/))*\*\//s);
    
    if (commentMatch) {
      return commentMatch[0].replace(/\/\*\*|\*\//g, '').trim();
    }
    
    return 'No description available';
  }

  extractParameters(content, index) {
    const parameters = [];
    
    // Look for parameter definitions
    const paramRegex = /req\.(body|query|params)\.(\w+)/g;
    let match;
    
    while ((match = paramRegex.exec(content)) !== null) {
      parameters.push({
        type: match[1],
        name: match[2]
      });
    }
    
    return parameters;
  }

  async analyzeTestCoverage() {
    const coverage = {
      totalEndpoints: 0,
      testedEndpoints: 0,
      coveragePercentage: 0,
      missingTests: [],
      testFiles: []
    };
    
    try {
      // Find test files
      const testFiles = this.findTestFiles();
      coverage.testFiles = testFiles;
      
      // Count total endpoints
      const apiFiles = this.findAPIFiles();
      for (const file of apiFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const endpoints = this.extractEndpoints(content);
        coverage.totalEndpoints += endpoints.length;
      }
      
      // Check for test coverage
      for (const testFile of testFiles) {
        const content = fs.readFileSync(testFile, 'utf8');
        if (this.containsAPITests(content)) {
          coverage.testedEndpoints += 1;
        }
      }
      
      coverage.coveragePercentage = coverage.totalEndpoints > 0 ? 
        (coverage.testedEndpoints / coverage.totalEndpoints) * 100 : 0;
      
      // Identify missing tests
      coverage.missingTests = this.identifyMissingTests(coverage);
      
    } catch (error) {
      console.error('Failed to analyze test coverage:', error);
    }
    
    return coverage;
  }

  findTestFiles() {
    const testFiles = [];
    
    try {
      const findTestFiles = (dir) => {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
          const fullPath = path.join(dir, item);
          const stat = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
            findTestFiles(fullPath);
          } else if (stat.isFile()) {
            if (item.includes('.test.') || item.includes('.spec.')) {
              testFiles.push(fullPath);
            }
          }
        }
      };
      
      findTestFiles(this.projectRoot);
      
    } catch (error) {
      console.error('Failed to find test files:', error);
    }
    
    return testFiles;
  }

  containsAPITests(content) {
    const testKeywords = [
      'supertest', 'request(', 'app.listen', 'describe(', 'it(',
      'GET', 'POST', 'PUT', 'DELETE', 'PATCH'
    ];
    
    return testKeywords.some(keyword => content.includes(keyword));
  }

  identifyMissingTests(coverage) {
    const missingTests = [];
    
    // This would compare discovered endpoints with existing tests
    // For now, return a simplified list
    if (coverage.coveragePercentage < 100) {
      missingTests.push({
        endpoint: '/api/example',
        method: 'GET',
        reason: 'No test file found'
      });
    }
    
    return missingTests;
  }

  async validateAPIEndpoints() {
    const validation = {
      validEndpoints: [],
      invalidEndpoints: [],
      validationErrors: []
    };
    
    try {
      const apiFiles = this.findAPIFiles();
      
      for (const file of apiFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const endpoints = this.extractEndpoints(content);
        
        for (const endpoint of endpoints) {
          const validationResult = this.validateEndpoint(endpoint, content);
          
          if (validationResult.isValid) {
            validation.validEndpoints.push(endpoint);
          } else {
            validation.invalidEndpoints.push(endpoint);
            validation.validationErrors.push(validationResult.errors);
          }
        }
      }
      
    } catch (error) {
      console.error('Failed to validate API endpoints:', error);
    }
    
    return validation;
  }

  validateEndpoint(endpoint, content) {
    const result = {
      isValid: true,
      errors: []
    };
    
    // Check for proper error handling
    if (!content.includes('try') && !content.includes('catch')) {
      result.errors.push('Missing error handling');
      result.isValid = false;
    }
    
    // Check for input validation
    if (endpoint.parameters.length > 0 && !content.includes('validate')) {
      result.errors.push('Missing input validation');
      result.isValid = false;
    }
    
    // Check for proper HTTP status codes
    if (!content.includes('res.status')) {
      result.errors.push('Missing explicit status codes');
      result.isValid = false;
    }
    
    return result;
  }

  async analyzePerformance() {
    const performance = {
      responseTimes: [],
      throughput: 0,
      errorRates: [],
      slowEndpoints: []
    };
    
    try {
      // Simulate performance metrics
      performance.responseTimes = [
        { endpoint: '/api/users', avgTime: Math.random() * 1000 },
        { endpoint: '/api/posts', avgTime: Math.random() * 1000 },
        { endpoint: '/api/comments', avgTime: Math.random() * 1000 }
      ];
      
      performance.throughput = Math.random() * 1000;
      
      // Identify slow endpoints
      performance.slowEndpoints = performance.responseTimes
        .filter(endpoint => endpoint.avgTime > 500)
        .map(endpoint => ({
          endpoint: endpoint.endpoint,
          avgTime: endpoint.avgTime,
          recommendation: 'Consider caching or optimization'
        }));
      
    } catch (error) {
      console.error('Failed to analyze performance:', error);
    }
    
    return performance;
  }

  async checkSecurityIssues() {
    const securityIssues = [];
    
    try {
      const apiFiles = this.findAPIFiles();
      
      for (const file of apiFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const issues = this.identifySecurityIssues(content);
        
        for (const issue of issues) {
          securityIssues.push({
            file: file,
            issue: issue.type,
            description: issue.description,
            severity: issue.severity
          });
        }
      }
      
    } catch (error) {
      console.error('Failed to check security issues:', error);
    }
    
    return securityIssues;
  }

  identifySecurityIssues(content) {
    const issues = [];
    
    // Check for SQL injection
    if (content.includes('query(') && content.includes('${')) {
      issues.push({
        type: 'SQL Injection',
        description: 'Potential SQL injection vulnerability',
        severity: 'high'
      });
    }
    
    // Check for missing authentication
    if (!content.includes('auth') && !content.includes('middleware')) {
      issues.push({
        type: 'Missing Authentication',
        description: 'No authentication middleware found',
        severity: 'medium'
      });
    }
    
    // Check for CORS issues
    if (!content.includes('cors')) {
      issues.push({
        type: 'CORS Configuration',
        description: 'Missing CORS configuration',
        severity: 'low'
      });
    }
    
    return issues;
  }

  generateRecommendations(analysis) {
    const recommendations = [];
    
    // Test coverage recommendations
    if (analysis.testCoverage.coveragePercentage < 80) {
      recommendations.push({
        type: 'test_coverage',
        priority: 'high',
        message: `Low test coverage: ${analysis.testCoverage.coveragePercentage.toFixed(1)}%`,
        suggestion: 'Add more comprehensive API tests'
      });
    }
    
    // Performance recommendations
    for (const slowEndpoint of analysis.performanceMetrics.slowEndpoints) {
      recommendations.push({
        type: 'performance',
        priority: 'medium',
        message: `Slow endpoint: ${slowEndpoint.endpoint}`,
        suggestion: slowEndpoint.recommendation
      });
    }
    
    // Security recommendations
    for (const issue of analysis.securityIssues) {
      recommendations.push({
        type: 'security',
        priority: issue.severity === 'high' ? 'critical' : 'medium',
        message: `Security issue: ${issue.issue}`,
        suggestion: `Fix ${issue.issue.toLowerCase()} in ${issue.file}`
      });
    }
    
    return recommendations;
  }

  async runAPITests() {
    try {
      console.log('Running API tests...');
      
      const testResults = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        tests: [],
        summary: {
          total: 0,
          passed: 0,
          failed: 0,
          skipped: 0
        }
      };
      
      // Run tests using npm test
      try {
        const { stdout } = await execAsync('npm test', {
          cwd: this.projectRoot,
          timeout: 120000
        });
        
        testResults.summary = this.parseTestResults(stdout);
        testResults.tests = this.extractTestDetails(stdout);
        
      } catch (error) {
        console.error('Test execution failed:', error);
        testResults.summary.failed = 1;
      }
      
      // Save test results
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'test-results', `api-tests-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(testResults, null, 2));
      
    } catch (error) {
      console.error('API testing failed:', error);
    }
  }

  parseTestResults(output) {
    const summary = {
      total: 0,
      passed: 0,
      failed: 0,
      skipped: 0
    };
    
    // Parse Jest output
    const totalMatch = output.match(/(\d+) tests?/);
    const passedMatch = output.match(/(\d+) passed/);
    const failedMatch = output.match(/(\d+) failed/);
    
    if (totalMatch) summary.total = parseInt(totalMatch[1]);
    if (passedMatch) summary.passed = parseInt(passedMatch[1]);
    if (failedMatch) summary.failed = parseInt(failedMatch[1]);
    
    return summary;
  }

  extractTestDetails(output) {
    const tests = [];
    
    // Extract individual test results
    const testLines = output.split('\n').filter(line => 
      line.includes('✓') || line.includes('✗') || line.includes('●')
    );
    
    for (const line of testLines) {
      if (line.includes('✓')) {
        tests.push({
          name: line.replace('✓', '').trim(),
          status: 'passed'
        });
      } else if (line.includes('✗')) {
        tests.push({
          name: line.replace('✗', '').trim(),
          status: 'failed'
        });
      }
    }
    
    return tests;
  }

  async validateAPIs() {
    try {
      console.log('Validating APIs...');
      
      const validationReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        validations: [],
        issues: []
      };
      
      // Validate API endpoints
      const apiFiles = this.findAPIFiles();
      
      for (const file of apiFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const validation = this.validateAPIFile(file, content);
        
        validationReport.validations.push(validation);
        
        if (validation.issues.length > 0) {
          validationReport.issues.push(...validation.issues);
        }
      }
      
      // Save validation report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'validation-reports', `validation-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(validationReport, null, 2));
      
    } catch (error) {
      console.error('API validation failed:', error);
    }
  }

  validateAPIFile(file, content) {
    const validation = {
      file: file,
      isValid: true,
      issues: []
    };
    
    // Check for proper imports
    if (!content.includes('require(') && !content.includes('import ')) {
      validation.issues.push('Missing imports');
      validation.isValid = false;
    }
    
    // Check for proper exports
    if (!content.includes('module.exports') && !content.includes('export ')) {
      validation.issues.push('Missing exports');
      validation.isValid = false;
    }
    
    // Check for proper error handling
    if (!content.includes('try') && !content.includes('catch')) {
      validation.issues.push('Missing error handling');
      validation.isValid = false;
    }
    
    return validation;
  }

  async runPerformanceTests() {
    try {
      console.log('Running performance tests...');
      
      const performanceReport = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        endpoints: [],
        summary: {
          totalEndpoints: 0,
          slowEndpoints: 0,
          averageResponseTime: 0
        }
      };
      
      // Simulate performance testing
      const endpoints = await this.discoverAPIEndpoints();
      performanceReport.summary.totalEndpoints = endpoints.length;
      
      for (const endpoint of endpoints) {
        const responseTime = Math.random() * 2000; // Simulate response time
        
        performanceReport.endpoints.push({
          endpoint: endpoint.path,
          method: endpoint.method,
          responseTime: responseTime,
          status: responseTime > 1000 ? 'slow' : 'normal'
        });
        
        if (responseTime > 1000) {
          performanceReport.summary.slowEndpoints++;
        }
      }
      
      performanceReport.summary.averageResponseTime = 
        performanceReport.endpoints.reduce((sum, ep) => sum + ep.responseTime, 0) / 
        performanceReport.endpoints.length;
      
      // Save performance report
      const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
      const reportPath = path.join(this.reportsDir, 'performance-tests', `performance-${timestamp}.json`);
      fs.writeFileSync(reportPath, JSON.stringify(performanceReport, null, 2));
      
    } catch (error) {
      console.error('Performance testing failed:', error);
    }
  }

  async saveAnalysisReport(report) {
    const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
    const reportPath = path.join(this.reportsDir, 'coverage-reports', `analysis-${timestamp}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log(`Analysis report saved: ${reportPath}`);
  }

  async stop() {
    console.log(`API Testing Validation Agent ${this.agentId} stopping...`);
    process.exit(0);
  }
}

// Start the agent
const agent = new APITestingValidationAgent();

process.on('SIGTERM', () => {
  agent.stop();
});

process.on('SIGINT', () => {
  agent.stop();
});

agent.start().catch(error => {
  console.error('API Testing Validation Agent failed to start:', error);
  process.exit(1);
}); 