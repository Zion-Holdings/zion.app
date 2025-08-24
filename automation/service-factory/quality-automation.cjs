#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const ROOT = process.cwd();
const GENERATED_SERVICES_DIR = path.join(ROOT, 'generated-services');
const QUALITY_REPORTS_DIR = path.join(ROOT, 'public', 'automation', 'quality-reports');

function ensureDir(p) { if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true }); }
function readJson(p, f) { try { return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : f; } catch { return f; } }

class QualityAutomation {
  constructor() {
    this.qualityMetrics = {};
    this.securityIssues = [];
    this.performanceMetrics = {};
    this.complianceResults = {};
    ensureDir(QUALITY_REPORTS_DIR);
  }

  async runFullQualityCheck(serviceName = null) {
    console.log('🔍 Starting comprehensive quality check...\n');
    
    try {
      if (serviceName) {
        await this.checkServiceQuality(serviceName);
      } else {
        await this.checkAllServices();
      }
      
      const report = await this.generateQualityReport();
      console.log('✅ Quality check complete!');
      return report;
      
    } catch (error) {
      console.error('❌ Quality check failed:', error);
      throw error;
    }
  }

  async checkAllServices() {
    if (!fs.existsSync(GENERATED_SERVICES_DIR)) {
      console.log('📁 No generated services directory found');
      return;
    }

    const services = fs.readdirSync(GENERATED_SERVICES_DIR, { withFileTypes: true })
      .filter(dirent => dirent.isDirectory())
      .map(dirent => dirent.name);

    console.log(`📋 Found ${services.length} services to check`);

    for (const service of services) {
      try {
        await this.checkServiceQuality(service);
      } catch (error) {
        console.error(`❌ Failed to check ${service}: ${error.message}`);
      }
    }
  }

  async checkServiceQuality(serviceName) {
    console.log(`🔍 Checking quality for: ${serviceName}`);
    
    const servicePath = path.join(GENERATED_SERVICES_DIR, serviceName);
    if (!fs.existsSync(servicePath)) {
      throw new Error(`Service ${serviceName} not found`);
    }

    const qualityReport = {
      serviceName,
      timestamp: new Date().toISOString(),
      codeQuality: {},
      security: {},
      performance: {},
      compliance: {},
      documentation: {},
      testing: {},
      overall: {}
    };

    // 1. Code Quality Analysis
    qualityReport.codeQuality = await this.analyzeCodeQuality(servicePath);
    
    // 2. Security Analysis
    qualityReport.security = await this.analyzeSecurity(servicePath);
    
    // 3. Performance Analysis
    qualityReport.performance = await this.analyzePerformance(servicePath);
    
    // 4. Compliance Check
    qualityReport.compliance = await this.checkCompliance(servicePath);
    
    // 5. Documentation Analysis
    qualityReport.documentation = await this.analyzeDocumentation(servicePath);
    
    // 6. Testing Analysis
    qualityReport.testing = await this.analyzeTesting(servicePath);
    
    // 7. Calculate Overall Score
    qualityReport.overall = this.calculateOverallScore(qualityReport);

    this.qualityMetrics[serviceName] = qualityReport;
    
    // Save individual service report
    const reportFile = path.join(QUALITY_REPORTS_DIR, `${serviceName}-quality-report.json`);
    fs.writeFileSync(reportFile, JSON.stringify(qualityReport, null, 2));
    
    console.log(`✅ Quality check complete for ${serviceName}`);
    return qualityReport;
  }

  async analyzeCodeQuality(servicePath) {
    const analysis = {
      score: 0,
      issues: [],
      metrics: {},
      recommendations: []
    };

    try {
      // Check file structure
      const files = this.scanDirectory(servicePath);
      analysis.metrics.totalFiles = files.length;
      analysis.metrics.sourceFiles = files.filter(f => 
        f.endsWith('.py') || f.endsWith('.js') || f.endsWith('.go')
      ).length;

      // Check for common code quality issues
      const issues = [];
      
      // Check README presence
      if (!fs.existsSync(path.join(servicePath, 'README.md'))) {
        issues.push({ type: 'Documentation', severity: 'Medium', message: 'Missing README.md' });
      }

      // Check Dockerfile presence
      if (!fs.existsSync(path.join(servicePath, 'Dockerfile'))) {
        issues.push({ type: 'Deployment', severity: 'High', message: 'Missing Dockerfile' });
      }

      // Check for tests
      const testDirs = ['tests', 'test', '__tests__'];
      const hasTests = testDirs.some(dir => fs.existsSync(path.join(servicePath, dir)));
      if (!hasTests) {
        issues.push({ type: 'Testing', severity: 'High', message: 'No test directory found' });
      }

      // Check for CI/CD
      const hasCICD = fs.existsSync(path.join(servicePath, '.github', 'workflows'));
      if (!hasCICD) {
        issues.push({ type: 'CI/CD', severity: 'Medium', message: 'No CI/CD pipeline found' });
      }

      // Check for environment files
      const hasEnv = fs.existsSync(path.join(servicePath, '.env')) || 
                    fs.existsSync(path.join(servicePath, '.env.example'));
      if (!hasEnv) {
        issues.push({ type: 'Configuration', severity: 'Low', message: 'No environment configuration found' });
      }

      analysis.issues = issues;
      analysis.score = Math.max(0, 100 - (issues.length * 10));
      
      // Generate recommendations
      analysis.recommendations = this.generateCodeQualityRecommendations(issues);

    } catch (error) {
      analysis.error = error.message;
      analysis.score = 0;
    }

    return analysis;
  }

  async analyzeSecurity(servicePath) {
    const analysis = {
      score: 0,
      vulnerabilities: [],
      recommendations: []
    };

    try {
      const vulnerabilities = [];

      // Check for common security issues
      const files = this.scanDirectory(servicePath);
      
      for (const file of files) {
        if (file.endsWith('.py') || file.endsWith('.js') || file.endsWith('.go')) {
          const content = fs.readFileSync(path.join(servicePath, file), 'utf8');
          
          // Check for hardcoded secrets
          const secretPatterns = [
            /password\s*=\s*['"][^'"]+['"]/i,
            /api_key\s*=\s*['"][^'"]+['"]/i,
            /secret\s*=\s*['"][^'"]+['"]/i,
            /token\s*=\s*['"][^'"]+['"]/i
          ];
          
          secretPatterns.forEach(pattern => {
            if (pattern.test(content)) {
              vulnerabilities.push({
                type: 'Hardcoded Secret',
                severity: 'Critical',
                file: file,
                message: 'Potential hardcoded secret found'
              });
            }
          });

          // Check for SQL injection patterns
          if (content.includes('execute(') && content.includes('SELECT')) {
            vulnerabilities.push({
              type: 'SQL Injection Risk',
              severity: 'High',
              file: file,
              message: 'Potential SQL injection vulnerability'
            });
          }
        }
      }

      // Check for security headers in web services
      const hasSecurityHeaders = this.checkSecurityHeaders(servicePath);
      if (!hasSecurityHeaders) {
        vulnerabilities.push({
          type: 'Security Headers',
          severity: 'Medium',
          message: 'Security headers not configured'
        });
      }

      analysis.vulnerabilities = vulnerabilities;
      analysis.score = Math.max(0, 100 - (vulnerabilities.length * 15));
      
      // Generate security recommendations
      analysis.recommendations = this.generateSecurityRecommendations(vulnerabilities);

    } catch (error) {
      analysis.error = error.message;
      analysis.score = 0;
    }

    return analysis;
  }

  async analyzePerformance(servicePath) {
    const analysis = {
      score: 0,
      metrics: {},
      recommendations: []
    };

    try {
      // Check for performance-related configurations
      const hasDocker = fs.existsSync(path.join(servicePath, 'Dockerfile'));
      const hasCompose = fs.existsSync(path.join(servicePath, 'docker-compose.yml'));
      
      analysis.metrics.hasDocker = hasDocker;
      analysis.metrics.hasCompose = hasCompose;

      // Check for monitoring and logging
      const hasMonitoring = this.checkMonitoringSetup(servicePath);
      analysis.metrics.hasMonitoring = hasMonitoring;

      // Check for caching configuration
      const hasCaching = this.checkCachingSetup(servicePath);
      analysis.metrics.hasCaching = hasCaching;

      // Check for load balancing
      const hasLoadBalancing = this.checkLoadBalancingSetup(servicePath);
      analysis.metrics.hasLoadBalancing = hasLoadBalancing;

      // Calculate performance score
      let score = 0;
      if (hasDocker) score += 25;
      if (hasCompose) score += 25;
      if (hasMonitoring) score += 25;
      if (hasCaching) score += 25;

      analysis.score = score;
      analysis.recommendations = this.generatePerformanceRecommendations(analysis.metrics);

    } catch (error) {
      analysis.error = error.message;
      analysis.score = 0;
    }

    return analysis;
  }

  async checkCompliance(servicePath) {
    const analysis = {
      score: 0,
      compliance: {},
      recommendations: []
    };

    try {
      const compliance = {};

      // Check for license file
      const licenseFiles = ['LICENSE', 'LICENSE.txt', 'license.txt'];
      const hasLicense = licenseFiles.some(file => 
        fs.existsSync(path.join(servicePath, file))
      );
      compliance.license = hasLicense;

      // Check for privacy policy
      const hasPrivacyPolicy = fs.existsSync(path.join(servicePath, 'PRIVACY.md')) ||
                              fs.existsSync(path.join(servicePath, 'privacy.md'));
      compliance.privacyPolicy = hasPrivacyPolicy;

      // Check for terms of service
      const hasTerms = fs.existsSync(path.join(servicePath, 'TERMS.md')) ||
                      fs.existsSync(path.join(servicePath, 'terms.md'));
      compliance.termsOfService = hasTerms;

      // Check for accessibility
      const hasAccessibility = this.checkAccessibilityCompliance(servicePath);
      compliance.accessibility = hasAccessibility;

      // Check for GDPR compliance indicators
      const hasGDPR = this.checkGDPRCompliance(servicePath);
      compliance.gdpr = hasGDPR;

      analysis.compliance = compliance;
      
      // Calculate compliance score
      const complianceItems = Object.values(compliance);
      const compliantItems = complianceItems.filter(Boolean).length;
      analysis.score = Math.round((compliantItems / complianceItems.length) * 100);

      analysis.recommendations = this.generateComplianceRecommendations(compliance);

    } catch (error) {
      analysis.error = error.message;
      analysis.score = 0;
    }

    return analysis;
  }

  async analyzeDocumentation(servicePath) {
    const analysis = {
      score: 0,
      coverage: {},
      recommendations: []
    };

    try {
      const coverage = {};

      // Check for various documentation types
      coverage.readme = fs.existsSync(path.join(servicePath, 'README.md'));
      coverage.apiDocs = this.checkAPIDocumentation(servicePath);
      coverage.architecture = this.checkArchitectureDocs(servicePath);
      coverage.deployment = this.checkDeploymentDocs(servicePath);
      coverage.contributing = fs.existsSync(path.join(servicePath, 'CONTRIBUTING.md'));

      analysis.coverage = coverage;
      
      // Calculate documentation score
      const coverageItems = Object.values(coverage);
      const coveredItems = coverageItems.filter(Boolean).length;
      analysis.score = Math.round((coveredItems / coverageItems.length) * 100);

      analysis.recommendations = this.generateDocumentationRecommendations(coverage);

    } catch (error) {
      analysis.error = error.message;
      analysis.score = 0;
    }

    return analysis;
  }

  async analyzeTesting(servicePath) {
    const analysis = {
      score: 0,
      coverage: {},
      recommendations: []
    };

    try {
      const coverage = {};

      // Check for test directories
      const testDirs = ['tests', 'test', '__tests__'];
      coverage.testDirectory = testDirs.some(dir => 
        fs.existsSync(path.join(servicePath, dir))
      );

      // Check for test files
      if (coverage.testDirectory) {
        const testFiles = this.scanDirectory(path.join(servicePath, 'tests'));
        coverage.testFiles = testFiles.length;
        coverage.hasTests = testFiles.length > 0;
      } else {
        coverage.testFiles = 0;
        coverage.hasTests = false;
      }

      // Check for test configuration
      coverage.testConfig = this.checkTestConfiguration(servicePath);

      // Check for CI/CD testing
      coverage.cicdTesting = this.checkCICDTesting(servicePath);

      analysis.coverage = coverage;
      
      // Calculate testing score
      let score = 0;
      if (coverage.testDirectory) score += 25;
      if (coverage.hasTests) score += 25;
      if (coverage.testConfig) score += 25;
      if (coverage.cicdTesting) score += 25;

      analysis.score = score;
      analysis.recommendations = this.generateTestingRecommendations(coverage);

    } catch (error) {
      analysis.error = error.message;
      analysis.score = 0;
    }

    return analysis;
  }

  calculateOverallScore(qualityReport) {
    const scores = [
      qualityReport.codeQuality.score,
      qualityReport.security.score,
      qualityReport.performance.score,
      qualityReport.compliance.score,
      qualityReport.documentation.score,
      qualityReport.testing.score
    ];

    const validScores = scores.filter(score => score !== undefined && score !== null);
    const averageScore = validScores.reduce((sum, score) => sum + score, 0) / validScores.length;

    return {
      score: Math.round(averageScore),
      grade: this.getGrade(averageScore),
      status: this.getStatus(averageScore)
    };
  }

  getGrade(score) {
    if (score >= 90) return 'A';
    if (score >= 80) return 'B';
    if (score >= 70) return 'C';
    if (score >= 60) return 'D';
    return 'F';
  }

  getStatus(score) {
    if (score >= 80) return 'Excellent';
    if (score >= 60) return 'Good';
    if (score >= 40) return 'Fair';
    return 'Needs Improvement';
  }

  // Helper methods
  scanDirectory(dirPath) {
    const files = [];
    const scan = (path) => {
      const items = fs.readdirSync(path);
      items.forEach(item => {
        const fullPath = path + '/' + item;
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          scan(fullPath);
        } else if (stat.isFile()) {
          files.push(fullPath.replace(dirPath + '/', ''));
        }
      });
    };
    scan(dirPath);
    return files;
  }

  checkSecurityHeaders(servicePath) {
    // Check for security middleware or headers configuration
    const files = this.scanDirectory(servicePath);
    return files.some(file => 
      file.includes('security') || 
      file.includes('helmet') || 
      file.includes('cors')
    );
  }

  checkMonitoringSetup(servicePath) {
    const files = this.scanDirectory(servicePath);
    return files.some(file => 
      file.includes('monitoring') || 
      file.includes('prometheus') || 
      file.includes('grafana') ||
      file.includes('health')
    );
  }

  checkCachingSetup(servicePath) {
    const files = this.scanDirectory(servicePath);
    return files.some(file => 
      file.includes('redis') || 
      file.includes('cache') || 
      file.includes('memcached')
    );
  }

  checkLoadBalancingSetup(servicePath) {
    const files = this.scanDirectory(servicePath);
    return files.some(file => 
      file.includes('nginx') || 
      file.includes('loadbalancer') || 
      file.includes('haproxy')
    );
  }

  checkAccessibilityCompliance(servicePath) {
    // Check for accessibility-related configurations
    const files = this.scanDirectory(servicePath);
    return files.some(file => 
      file.includes('a11y') || 
      file.includes('accessibility') || 
      file.includes('aria')
    );
  }

  checkGDPRCompliance(servicePath) {
    // Check for GDPR-related configurations
    const files = this.scanDirectory(servicePath);
    return files.some(file => 
      file.includes('gdpr') || 
      file.includes('privacy') || 
      file.includes('consent')
    );
  }

  checkAPIDocumentation(servicePath) {
    const files = this.scanDirectory(servicePath);
    return files.some(file => 
      file.includes('api') || 
      file.includes('swagger') || 
      file.includes('openapi')
    );
  }

  checkArchitectureDocs(servicePath) {
    const files = this.scanDirectory(servicePath);
    return files.some(file => 
      file.includes('architecture') || 
      file.includes('design') || 
      file.includes('diagram')
    );
  }

  checkDeploymentDocs(servicePath) {
    const files = this.scanDirectory(servicePath);
    return files.some(file => 
      file.includes('deploy') || 
      file.includes('deployment') || 
      file.includes('install')
    );
  }

  checkTestConfiguration(servicePath) {
    const files = this.scanDirectory(servicePath);
    return files.some(file => 
      file.includes('pytest') || 
      file.includes('jest') || 
      file.includes('test')
    );
  }

  checkCICDTesting(servicePath) {
    return fs.existsSync(path.join(servicePath, '.github', 'workflows'));
  }

  // Recommendation generators
  generateCodeQualityRecommendations(issues) {
    const recommendations = [];
    
    if (issues.some(i => i.type === 'Documentation')) {
      recommendations.push('Create comprehensive README.md with setup and usage instructions');
    }
    
    if (issues.some(i => i.type === 'Deployment')) {
      recommendations.push('Add Dockerfile for containerized deployment');
    }
    
    if (issues.some(i => i.type === 'Testing')) {
      recommendations.push('Implement unit tests and integration tests');
    }
    
    if (issues.some(i => i.type === 'CI/CD')) {
      recommendations.push('Set up GitHub Actions or similar CI/CD pipeline');
    }
    
    return recommendations;
  }

  generateSecurityRecommendations(vulnerabilities) {
    const recommendations = [];
    
    if (vulnerabilities.some(v => v.type === 'Hardcoded Secret')) {
      recommendations.push('Move secrets to environment variables or secure secret management');
    }
    
    if (vulnerabilities.some(v => v.type === 'SQL Injection Risk')) {
      recommendations.push('Use parameterized queries or ORM to prevent SQL injection');
    }
    
    if (vulnerabilities.some(v => v.type === 'Security Headers')) {
      recommendations.push('Implement security headers (CORS, CSP, etc.)');
    }
    
    return recommendations;
  }

  generatePerformanceRecommendations(metrics) {
    const recommendations = [];
    
    if (!metrics.hasDocker) {
      recommendations.push('Containerize the service for consistent deployment');
    }
    
    if (!metrics.hasMonitoring) {
      recommendations.push('Add monitoring and observability tools');
    }
    
    if (!metrics.hasCaching) {
      recommendations.push('Implement caching strategy for improved performance');
    }
    
    return recommendations;
  }

  generateComplianceRecommendations(compliance) {
    const recommendations = [];
    
    if (!compliance.license) {
      recommendations.push('Add appropriate license file (MIT, Apache, etc.)');
    }
    
    if (!compliance.privacyPolicy) {
      recommendations.push('Create privacy policy for data handling');
    }
    
    if (!compliance.gdpr) {
      recommendations.push('Implement GDPR compliance measures');
    }
    
    return recommendations;
  }

  generateDocumentationRecommendations(coverage) {
    const recommendations = [];
    
    if (!coverage.apiDocs) {
      recommendations.push('Add API documentation using OpenAPI/Swagger');
    }
    
    if (!coverage.architecture) {
      recommendations.push('Document system architecture and design decisions');
    }
    
    if (!coverage.deployment) {
      recommendations.push('Create deployment and installation guides');
    }
    
    return recommendations;
  }

  generateTestingRecommendations(coverage) {
    const recommendations = [];
    
    if (!coverage.hasTests) {
      recommendations.push('Write comprehensive unit and integration tests');
    }
    
    if (!coverage.testConfig) {
      recommendations.push('Configure testing framework and test runners');
    }
    
    if (!coverage.cicdTesting) {
      recommendations.push('Integrate testing into CI/CD pipeline');
    }
    
    return recommendations;
  }

  async generateQualityReport() {
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        totalServices: Object.keys(this.qualityMetrics).length,
        averageScore: 0,
        gradeDistribution: {},
        statusDistribution: {}
      },
      services: this.qualityMetrics,
      recommendations: this.generateOverallRecommendations()
    };

    // Calculate summary statistics
    if (Object.keys(this.qualityMetrics).length > 0) {
      const scores = Object.values(this.qualityMetrics)
        .map(service => service.overall.score)
        .filter(score => score !== undefined);
      
      report.summary.averageScore = Math.round(
        scores.reduce((sum, score) => sum + score, 0) / scores.length
      );

      // Grade distribution
      const grades = Object.values(this.qualityMetrics)
        .map(service => service.overall.grade);
      
      report.summary.gradeDistribution = grades.reduce((acc, grade) => {
        acc[grade] = (acc[grade] || 0) + 1;
        return acc;
      }, {});

      // Status distribution
      const statuses = Object.values(this.qualityMetrics)
        .map(service => service.overall.status);
      
      report.summary.statusDistribution = statuses.reduce((acc, status) => {
        acc[status] = (acc[status] || 0) + 1;
        return acc;
      }, {});
    }

    // Save comprehensive report
    const reportFile = path.join(QUALITY_REPORTS_DIR, `quality-report-${Date.now()}.json`);
    fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

    console.log(`📊 Quality report generated: ${reportFile}`);
    return report;
  }

  generateOverallRecommendations() {
    const recommendations = [];
    
    if (Object.keys(this.qualityMetrics).length === 0) {
      recommendations.push('No services found for quality analysis');
      return recommendations;
    }

    const avgScore = Object.values(this.qualityMetrics)
      .map(service => service.overall.score)
      .reduce((sum, score) => sum + score, 0) / Object.keys(this.qualityMetrics).length;

    if (avgScore < 60) {
      recommendations.push('Overall quality needs significant improvement - focus on basic requirements first');
    } else if (avgScore < 80) {
      recommendations.push('Quality is good but can be improved - focus on testing and documentation');
    } else {
      recommendations.push('Quality is excellent - focus on advanced features and optimization');
    }

    // Add specific recommendations based on common issues
    const allIssues = Object.values(this.qualityMetrics)
      .flatMap(service => [
        ...service.codeQuality.issues || [],
        ...service.security.vulnerabilities || []
      ]);

    if (allIssues.some(issue => issue.severity === 'Critical')) {
      recommendations.push('Address critical security vulnerabilities immediately');
    }

    if (allIssues.some(issue => issue.type === 'Testing')) {
      recommendations.push('Improve test coverage across all services');
    }

    return recommendations;
  }
}

// CLI interface
if (require.main === module) {
  const quality = new QualityAutomation();
  
  const command = process.argv[2] || 'help';
  const serviceName = process.argv[3];
  
  switch (command) {
    case 'check':
      if (serviceName) {
        quality.checkServiceQuality(serviceName);
      } else {
        quality.checkAllServices();
      }
      break;
      
    case 'report':
      quality.generateQualityReport();
      break;
      
    case 'full':
      quality.runFullQualityCheck(serviceName);
      break;
      
    case 'help':
    default:
      console.log('Quality Automation - Available Commands:');
      console.log('  check <service-name>  - Check quality for specific service');
      console.log('  check                 - Check quality for all services');
      console.log('  report                - Generate quality report');
      console.log('  full <service-name>   - Run full quality check');
      console.log('  help                  - Show this help');
      break;
  }
}

module.exports = QualityAutomation;