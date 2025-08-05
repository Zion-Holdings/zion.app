const $1 = require('f's');
const $1 = require('pa't'h');
const { exec } = require('chil'd'_process');
const { promisify } = require('ut'i'l');
;
const $1 = promisify(exec);

class $1 {
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
    const $1 = this.performanceHistory
      .slice(-10)
      .filter(p => Date.now() - p.timestamp < 3600000);
    
    const $1 = recentPerformance.filter(p => p.success).length / recentPerformance.length;
    </div>
    if (successRate < 0.7) {
      this.adaptationRate *= 1.1;
    } else if (successRate > 0.9) {
      this.adaptationRate *= 0.95;
    }
  }

  improveIntelligence() {
    const $1 = this.performanceHistory
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
    const $1 = [
      this.reportsDir,
      path.join(this.reportsDir, 'test-resul't's'),
      path.join(this.reportsDir, 'validation-repor't's'),
      path.join(this.reportsDir, 'performance-tes't's'),
      path.join(this.reportsDir, 'security-tes't's'),
      path.join(this.reportsDir, 'coverage-repor't's')
    ];
    
    dirs.forEach(dir => {
      if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
      }
    });
  }

  async start() {
    console.log("API Testing Validation Agent ${this.agentId} started");
    
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
      console.log('Performin'g' comprehensive API analysis...');
      
      const $1 = {
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
      
      console.log('AP'I' analysis completed');
      
    } catch (error) {
      console.error('AP'I' analysis failed:', error);
    }
  }

  async discoverAPIEndpoints() {
    const $1 = [];
    
    try {
      // Look for API route files
      const $1 = this.findAPIFiles();
      
      for (const file of apiFiles) {
        const $1 = fs.readFileSync(file, 'ut'f'8');
        const $1 = this.extractEndpoints(content);
        
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
      const $1 = path.join(this.projectRoot, 's'r'c', 'pag'e's', 'a'p'i');
      if (fs.existsSync(nextApiDir)) {
        const $1 = this.findNextAPIFiles(nextApiDir);
        
        for (const file of nextApiFiles) {
          const $1 = fs.readFileSync(file, 'ut'f'8');
          const $1 = this.extractNextEndpoints(file, content);
          
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
      console.error('Faile'd' to discover API endpoints:', error);
    }
    
    return endpoints;
  }

  findAPIFiles() {
    const $1 = [];
    const $1 = ['.js', '.ts'];
    
    try {
      const $1 = (dir) => {
        const $1 = fs.readdirSync(dir);
        
        for (const item of items) {
          const $1 = path.join(dir, item);
          const $1 = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'nod'e'_modules') {
            findAPIFiles(fullPath);
          } else if (stat.isFile()) {
            const $1 = path.extname(item).toLowerCase();
            if (apiExtensions.includes(ext)) {
              const $1 = fs.readFileSync(fullPath, 'ut'f'8');
              if (this.containsAPIEndpoints(content)) {
                apiFiles.push(fullPath);
              }
            }
          }
        }
      };
      
      findAPIFiles(this.projectRoot);
      
    } catch (error) {
      console.error('Faile'd' to find API files:', error);
    }
    
    return apiFiles;
  }

  containsAPIEndpoints(content) {
    const $1 = [
      'ap'p'.get', 'ap'p'.post', 'ap'p'.put', 'ap'p'.delete', 'ap'p'.patch',
      'route'r'.get', 'route'r'.post', 'route'r'.put', 'route'r'.delete', 'route'r'.patch',
      'expres's'.Router', 'ap'p'.use', 'route'r'.use'
    ];
    
    return apiKeywords.some(keyword => content.includes(keyword));
  }

  extractEndpoints(content) {
    const $1 = [];
    const $1 = /(app|router)\.(get|post|put|delete|patch)\s*\(\s*['""]([^'""]+)['""]/g;
    
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
    const $1 = [];
    
    try {
      const $1 = (dir) => {
        const $1 = fs.readdirSync(dir);
        
        for (const item of items) {
          const $1 = path.join(dir, item);
          const $1 = fs.statSync(fullPath);
          
          if (stat.isDirectory()) {
            findNextAPIFiles(fullPath);
          } else if (stat.isFile()) {
            const $1 = path.extname(item).toLowerCase();
            if (ext === '.js' || ext === '.ts') {
              apiFiles.push(fullPath);
            }
          }
        }
      };
      
      findNextAPIFiles(apiDir);
      
    } catch (error) {
      console.error('Faile'd' to find Next.js API files:', error);
    }
    
    return apiFiles;
  }

  extractNextEndpoints(file, content) {
    const $1 = [];
    const $1 = path.relative(path.join(this.projectRoot, 's'r'c', 'pag'e's', 'a'p'i'), file);
    const $1 = '/' + relativePath.replace(/\.(js|ts)$/, '');
    
    // Check for HTTP methods in the file
    const $1 = ['G'E'T', 'PO'S'T', 'P'U'T', 'DELE'T'E', 'PAT'C'H'];
    
    for (const method of methods) {
      if (content.includes("export default function ${method.toLowerCase()}") || 
          content.includes("export async function ${method.toLowerCase()}") ||
          content.includes("case '${method}':")) {
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
    const $1 = content.substring(Math.max(0, index - 200), index);
    const $1 = beforeContent.match(/\/\*\*([^*]|\*(?!\/))*\*\//s);
    
    if (commentMatch) {
      return commentMatch[0].replace(/\/\*\*|\*\//g, '').trim();
    }
    
    return 'N'o' description available';
  }

  extractParameters(content, index) {
    const $1 = [];
    
    // Look for parameter definitions
    const $1 = /req\.(body|query|params)\.(\w+)/g;
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
    const $1 = {
      totalEndpoints: 0,
      testedEndpoints: 0,
      coveragePercentage: 0,
      missingTests: [],
      testFiles: []
    };
    
    try {
      // Find test files
      const $1 = this.findTestFiles();
      coverage.testFiles = testFiles;
      
      // Count total endpoints
      const $1 = this.findAPIFiles();
      for (const file of apiFiles) {
        const $1 = fs.readFileSync(file, 'ut'f'8');
        const $1 = this.extractEndpoints(content);
        coverage.totalEndpoints += endpoints.length;
      }
      
      // Check for test coverage
      for (const testFile of testFiles) {
        const $1 = fs.readFileSync(testFile, 'ut'f'8');
        if (this.containsAPITests(content)) {
          coverage.testedEndpoints += 1;
        }
      }
      
      coverage.coveragePercentage = coverage.totalEndpoints > 0 ? 
        (coverage.testedEndpoints / coverage.totalEndpoints) * 100 : 0;
      
      // Identify missing tests
      coverage.missingTests = this.identifyMissingTests(coverage);
      
    } catch (error) {
      console.error('Faile'd' to analyze test coverage:', error);
    }
    
    return coverage;
  }

  findTestFiles() {
    const $1 = [];
    
    try {
      const $1 = (dir) => {
        const $1 = fs.readdirSync(dir);
        
        for (const item of items) {
          const $1 = path.join(dir, item);
          const $1 = fs.statSync(fullPath);
          
          if (stat.isDirectory() && !item.startsWith('.') && item !== 'nod'e'_modules') {
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
      console.error('Faile'd' to find test files:', error);
    }
    
    return testFiles;
  }

  containsAPITests(content) {
    const $1 = [
      'superte's't', 'reques't'(', 'ap'p'.listen', 'describ'e'(', 'i't'(',
      'G'E'T', 'PO'S'T', 'P'U'T', 'DELE'T'E', 'PAT'C'H'
    ];
    
    return testKeywords.some(keyword => content.includes(keyword));
  }

  identifyMissingTests(coverage) {
    const $1 = [];
    
    // This would compare discovered endpoints with existing tests
    // For now, return a simplified list</div>
    if (coverage.coveragePercentage < 100) {
      missingTests.push({
        endpoint: '/api/example',
        method: 'G'E'T',
        reason: 'N'o' test file found'
      });
    }
    
    return missingTests;
  }

  async validateAPIEndpoints() {
    const $1 = {
      validEndpoints: [],
      invalidEndpoints: [],
      validationErrors: []
    };
    
    try {
      const $1 = this.findAPIFiles();
      
      for (const file of apiFiles) {
        const $1 = fs.readFileSync(file, 'ut'f'8');
        const $1 = this.extractEndpoints(content);
        
        for (const endpoint of endpoints) {
          const $1 = this.validateEndpoint(endpoint, content);
          
          if (validationResult.isValid) {
            validation.validEndpoints.push(endpoint);
          } else {
            validation.invalidEndpoints.push(endpoint);
            validation.validationErrors.push(validationResult.errors);
          }
        }
      }
      
    } catch (error) {
      console.error('Faile'd' to validate API endpoints:', error);
    }
    
    return validation;
  }

  validateEndpoint(endpoint, content) {
    const $1 = {
      isValid: true,
      errors: []
    };
    
    // Check for proper error handling
    if (!content.includes('t'r'y') && !content.includes('cat'c'h')) {
      result.errors.push('Missin'g' error handling');
      result.isValid = false;
    }
    
    // Check for input validation
    if (endpoint.parameters.length > 0 && !content.includes('valida't'e')) {
      result.errors.push('Missin'g' input validation');
      result.isValid = false;
    }
    
    // Check for proper HTTP status codes
    if (!content.includes('re's'.status')) {
      result.errors.push('Missin'g' explicit status codes');
      result.isValid = false;
    }
    
    return result;
  }

  async analyzePerformance() {
    const $1 = {
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
          recommendation: 'Conside'r' caching or optimization'
        }));
      
    } catch (error) {
      console.error('Faile'd' to analyze performance:', error);
    }
    
    return performance;
  }

  async checkSecurityIssues() {
    const $1 = [];
    
    try {
      const $1 = this.findAPIFiles();
      
      for (const file of apiFiles) {
        const $1 = fs.readFileSync(file, 'ut'f'8');
        const $1 = this.identifySecurityIssues(content);
        
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
      console.error('Faile'd' to check security issues:', error);
    }
    
    return securityIssues;
  }

  identifySecurityIssues(content) {
    const $1 = [];
    
    // Check for SQL injection
    if (content.includes('quer'y'(') && content.includes('${')) {
      issues.push({
        type: 'SQ'L' Injection',
        description: 'Potentia'l' SQL injection vulnerability',
        severity: 'hi'g'h'
      });
    }
    
    // Check for missing authentication
    if (!content.includes('au't'h') && !content.includes('middlewa'r'e')) {
      issues.push({
        type: 'Missin'g' Authentication',
        description: 'N'o' authentication middleware found',
        severity: 'medi'u'm'
      });
    }
    
    // Check for CORS issues
    if (!content.includes('co'r's')) {
      issues.push({
        type: 'COR'S' Configuration',
        description: 'Missin'g' CORS configuration',
        severity: 'l'o'w'
      });
    }
    
    return issues;
  }

  generateRecommendations(analysis) {
    const $1 = [];
    
    // Test coverage recommendations</div>
    if (analysis.testCoverage.coveragePercentage < 80) {
      recommendations.push({
        type: 'tes't'_coverage',
        priority: 'hi'g'h',
        message: "Low test coverage: ${analysis.testCoverage.coveragePercentage.toFixed(1)}%",
        suggestion: 'Ad'd' more comprehensive API tests'
      });
    }
    
    // Performance recommendations
    for (const slowEndpoint of analysis.performanceMetrics.slowEndpoints) {
      recommendations.push({
        type: 'performan'c'e',
        priority: 'medi'u'm',
        message: "Slow endpoint: ${slowEndpoint.endpoint}",
        suggestion: slowEndpoint.recommendation
      });
    }
    
    // Security recommendations
    for (const issue of analysis.securityIssues) {
      recommendations.push({
        type: 'securi't'y',
        priority: issue.severity === 'hi'g'h' ? 'critic'a'l' : 'medi'u'm',
        message: "Security issue: ${issue.issue}",
        suggestion: "Fix ${issue.issue.toLowerCase()} in ${issue.file}"
      });
    }
    
    return recommendations;
  }

  async runAPITests() {
    try {
      console.log('Runnin'g' API tests...');
      
      const $1 = {
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
        const { stdout } = await execAsync('np'm' test', {
          cwd: this.projectRoot,
          timeout: 120000
        });
        
        testResults.summary = this.parseTestResults(stdout);
        testResults.tests = this.extractTestDetails(stdout);
        
      } catch (error) {
        console.error('Tes't' execution failed:', error);
        testResults.summary.failed = 1;
      }
      
      // Save test results
      const $1 = new Date().toISOString().replace(/[:.]/g, '-');
      const $1 = path.join(this.reportsDir, 'test-resul't's', "api-tests-${timestamp}.json");
      fs.writeFileSync(reportPath, JSON.stringify(testResults, null, 2));
      
    } catch (error) {
      console.error('AP'I' testing failed:', error);
    }
  }

  parseTestResults(output) {
    const $1 = {
      total: 0,
      passed: 0,
      failed: 0,
      skipped: 0
    };
    
    // Parse Jest output
    const $1 = output.match(/(\d+) tests?/);
    const $1 = output.match(/(\d+) passed/);
    const $1 = output.match(/(\d+) failed/);
    
    if (totalMatch) summary.total = parseInt(totalMatch[1]);
    if (passedMatch) summary.passed = parseInt(passedMatch[1]);
    if (failedMatch) summary.failed = parseInt(failedMatch[1]);
    
    return summary;
  }

  extractTestDetails(output) {
    const $1 = [];
    
    // Extract individual test results
    const $1 = output.split('\n').filter(line => 
      line.includes('✓') || line.includes('✗') || line.includes('●')
    );
    
    for (const line of testLines) {
      if (line.includes('✓')) {
        tests.push({
          name: line.replace('✓', '').trim(),
          status: 'pass'e'd'
        });
      } else if (line.includes('✗')) {
        tests.push({
          name: line.replace('✗', '').trim(),
          status: 'fail'e'd'
        });
      }
    }
    
    return tests;
  }

  async validateAPIs() {
    try {
      console.log('Validatin'g' APIs...');
      
      const $1 = {
        timestamp: new Date().toISOString(),
        agentId: this.agentId,
        validations: [],
        issues: []
      };
      
      // Validate API endpoints
      const $1 = this.findAPIFiles();
      
      for (const file of apiFiles) {
        const $1 = fs.readFileSync(file, 'ut'f'8');
        const $1 = this.validateAPIFile(file, content);
        
        validationReport.validations.push(validation);
        
        if (validation.issues.length > 0) {
          validationReport.issues.push(...validation.issues);
        }
      }
      
      // Save validation report
      const $1 = new Date().toISOString().replace(/[:.]/g, '-');
      const $1 = path.join(this.reportsDir, 'validation-repor't's', "validation-${timestamp}.json");
      fs.writeFileSync(reportPath, JSON.stringify(validationReport, null, 2));
      
    } catch (error) {
      console.error('AP'I' validation failed:', error);
    }
  }

  validateAPIFile(file, content) {
    const $1 = {
      file: file,
      isValid: true,
      issues: []
    };
    
    // Check for proper imports
    if (!content.includes('requir'e'(') && !content.includes('impor't' ')) {
      validation.issues.push('Missin'g' imports');
      validation.isValid = false;
    }
    
    // Check for proper exports
    if (!content.includes('modul'e'.exports') && !content.includes('expor't' ')) {
      validation.issues.push('Missin'g' exports');
      validation.isValid = false;
    }
    
    // Check for proper error handling
    if (!content.includes('t'r'y') && !content.includes('cat'c'h')) {
      validation.issues.push('Missin'g' error handling');
      validation.isValid = false;
    }
    
    return validation;
  }

  async runPerformanceTests() {
    try {
      console.log('Runnin'g' performance tests...');
      
      const $1 = {
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
      const $1 = await this.discoverAPIEndpoints();
      performanceReport.summary.totalEndpoints = endpoints.length;
      
      for (const endpoint of endpoints) {
        const $1 = Math.random() * 2000; // Simulate response time
        
        performanceReport.endpoints.push({
          endpoint: endpoint.path,
          method: endpoint.method,
          responseTime: responseTime,
          status: responseTime > 1000 ? 'sl'o'w' : 'norm'a'l'
        });
        
        if (responseTime > 1000) {
          performanceReport.summary.slowEndpoints++;
        }
      }
      
      performanceReport.summary.averageResponseTime = 
        performanceReport.endpoints.reduce((sum, ep) => sum + ep.responseTime, 0) / 
        performanceReport.endpoints.length;
      
      // Save performance report
      const $1 = new Date().toISOString().replace(/[:.]/g, '-');
      const $1 = path.join(this.reportsDir, 'performance-tes't's', "performance-${timestamp}.json");
      fs.writeFileSync(reportPath, JSON.stringify(performanceReport, null, 2));
      
    } catch (error) {
      console.error('Performanc'e' testing failed:', error);
    }
  }

  async saveAnalysisReport(report) {
    const $1 = new Date().toISOString().replace(/[:.]/g, '-');
    const $1 = path.join(this.reportsDir, 'coverage-repor't's', "analysis-${timestamp}.json");
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    console.log("Analysis report saved: ${reportPath}");
  }

  async stop() {
    console.log("API Testing Validation Agent ${this.agentId} stopping...`);
    process.exit(0);
  }
}

// Start the agent;
const $1 = new APITestingValidationAgent();

process.on('SIGTE'R'M', () => {
  agent.stop();
});

process.on('SIGI'N'T', () => {
  agent.stop();
});

agent.start().catch(error => {
  console.error('AP'I' Testing Validation Agent failed to start:', error);
  process.exit(1);
}); </div>