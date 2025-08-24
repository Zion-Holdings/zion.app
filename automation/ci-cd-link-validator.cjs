#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

class CICDLinkValidator {
  constructor() {
    this.ROOT = process.cwd();
    this.REPORTS_DIR = path.join(this.ROOT, 'data', 'reports');
    this.CI_DIR = path.join(this.ROOT, 'data', 'reports', 'ci-cd');
    this.ensureDir(this.CI_DIR);
    
    this.thresholds = {
      maxBrokenLinks: 5,
      maxInternalIssues: 20,
      minHealthScore: 90,
      maxRiskScore: 70
    };
    
    this.exitCode = 0;
  }

  ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logEntry = `[${timestamp}] [${level}] ${message}`;
    
    console.log(logEntry);
    
    // Save to CI log file
    const logFile = path.join(this.CI_DIR, `ci-validation-${new Date().toISOString().split('T')[0]}.log`);
    fs.appendFileSync(logFile, logEntry + '\n');
  }

  async runPreDeploymentValidation() {
    this.log('🚀 Starting pre-deployment link validation...');
    
    const validation = {
      timestamp: new Date().toISOString(),
      stage: 'pre-deployment',
      checks: {},
      results: {},
      passed: true,
      recommendations: []
    };

    try {
      // Run link health check
      validation.checks.linkHealth = await this.runLinkHealthCheck();
      
      // Run route validation
      validation.checks.routeValidation = await this.runRouteValidation();
      
      // Run smart prediction analysis
      validation.checks.smartPrediction = await this.runSmartPrediction();
      
      // Evaluate results
      validation.results = this.evaluateValidationResults(validation.checks);
      
      // Generate recommendations
      validation.recommendations = this.generateDeploymentRecommendations(validation.results);
      
      // Determine if validation passed
      validation.passed = this.determineValidationPass(validation.results);
      
      // Save validation report
      await this.saveValidationReport(validation);
      
      // Log results
      this.logValidationResults(validation);
      
      // Exit with appropriate code
      if (!validation.passed) {
        this.log('❌ Pre-deployment validation FAILED', 'ERROR');
        this.exitCode = 1;
      } else {
        this.log('✅ Pre-deployment validation PASSED', 'INFO');
        this.exitCode = 0;
      }
      
      return validation;
      
    } catch (error) {
      this.log(`❌ Pre-deployment validation error: ${error.message}`, 'ERROR');
      this.exitCode = 1;
      throw error;
    }
  }

  async runLinkHealthCheck() {
    this.log('🔍 Running link health check...');
    
    try {
      const { execSync } = require('child_process');
      const result = execSync('npm run links:monitor', { 
        cwd: this.ROOT, 
        encoding: 'utf8',
        timeout: 300000 // 5 minutes
      });
      
      // Read the generated report
      const reportPath = path.join(this.REPORTS_DIR, 'link-health', 'latest.json');
      if (!fs.existsSync(reportPath)) {
        throw new Error('Link health report not found');
      }
      
      const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
      
      return {
        success: true,
        data: report,
        metrics: {
          totalLinks: report.summary.totalLinks,
          healthyLinks: report.summary.healthyLinks,
          brokenLinks: report.summary.brokenLinks,
          healthScore: (report.summary.healthyLinks / report.summary.totalLinks) * 100
        }
      };
      
    } catch (error) {
      this.log(`Link health check failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message
      };
    }
  }

  async runRouteValidation() {
    this.log('📍 Running route validation...');
    
    try {
      const { execSync } = require('child_process');
      const result = execSync('npm run routes:validate', { 
        cwd: this.ROOT, 
        encoding: 'utf8',
        timeout: 120000 // 2 minutes
      });
      
      // Read the generated report
      const reportPath = path.join(this.REPORTS_DIR, 'route-validation', 'latest.json');
      if (!fs.existsSync(reportPath)) {
        throw new Error('Route validation report not found');
      }
      
      const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
      
      return {
        success: true,
        data: report,
        metrics: {
          totalRoutes: report.summary.totalRoutes,
          issuesFound: report.summary.issuesFound,
          criticalIssues: report.summary.criticalIssues,
          highPriorityIssues: report.summary.highPriorityIssues
        }
      };
      
    } catch (error) {
      this.log(`Route validation failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message
      };
    }
  }

  async runSmartPrediction() {
    this.log('🔮 Running smart prediction analysis...');
    
    try {
      const { execSync } = require('child_process');
      const result = execSync('node automation/smart-link-predictor.cjs', { 
        cwd: this.ROOT, 
        encoding: 'utf8',
        timeout: 180000 // 3 minutes
      });
      
      // Read the generated report
      const reportPath = path.join(this.REPORTS_DIR, 'predictions', 'latest.json');
      if (!fs.existsSync(reportPath)) {
        throw new Error('Smart prediction report not found');
      }
      
      const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
      
      return {
        success: true,
        data: report,
        metrics: {
          totalRisk: report.riskAssessment.totalRisk,
          riskLevel: report.riskAssessment.riskLevel,
          predictionsCount: report.predictions.length
        }
      };
      
    } catch (error) {
      this.log(`Smart prediction failed: ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message
      };
    }
  }

  evaluateValidationResults(checks) {
    const results = {
      linkHealth: { passed: false, score: 0, issues: [] },
      routeValidation: { passed: false, score: 0, issues: [] },
      smartPrediction: { passed: false, score: 0, issues: [] },
      overall: { passed: false, score: 0 }
    };

    // Evaluate link health
    if (checks.linkHealth.success) {
      const metrics = checks.linkHealth.metrics;
      results.linkHealth.score = metrics.healthScore;
      results.linkHealth.passed = metrics.healthScore >= this.thresholds.minHealthScore && 
                                 metrics.brokenLinks <= this.thresholds.maxBrokenLinks;
      
      if (!results.linkHealth.passed) {
        results.linkHealth.issues.push(`Health score ${metrics.healthScore}% below threshold ${this.thresholds.minHealthScore}%`);
        results.linkHealth.issues.push(`Broken links ${metrics.brokenLinks} above threshold ${this.thresholds.maxBrokenLinks}`);
      }
    } else {
      results.linkHealth.issues.push(`Link health check failed: ${checks.linkHealth.error}`);
    }

    // Evaluate route validation
    if (checks.routeValidation.success) {
      const metrics = checks.routeValidation.metrics;
      results.routeValidation.score = Math.max(0, 100 - (metrics.issuesFound * 2));
      results.routeValidation.passed = metrics.issuesFound <= this.thresholds.maxInternalIssues;
      
      if (!results.routeValidation.passed) {
        results.routeValidation.issues.push(`Internal issues ${metrics.issuesFound} above threshold ${this.thresholds.maxInternalIssues}`);
      }
    } else {
      results.routeValidation.issues.push(`Route validation failed: ${checks.routeValidation.error}`);
    }

    // Evaluate smart prediction
    if (checks.smartPrediction.success) {
      const metrics = checks.smartPrediction.metrics;
      results.smartPrediction.score = Math.max(0, 100 - metrics.totalRisk);
      results.smartPrediction.passed = metrics.totalRisk <= this.thresholds.maxRiskScore;
      
      if (!results.smartPrediction.passed) {
        results.smartPrediction.issues.push(`Risk score ${metrics.totalRisk} above threshold ${this.thresholds.maxRiskScore}`);
      }
    } else {
      results.smartPrediction.issues.push(`Smart prediction failed: ${checks.smartPrediction.error}`);
    }

    // Calculate overall score
    const scores = [results.linkHealth.score, results.routeValidation.score, results.smartPrediction.score];
    results.overall.score = Math.round(scores.reduce((sum, score) => sum + score, 0) / scores.length);
    results.overall.passed = results.linkHealth.passed && results.routeValidation.passed && results.smartPrediction.passed;

    return results;
  }

  generateDeploymentRecommendations(results) {
    const recommendations = [];

    if (!results.linkHealth.passed) {
      recommendations.push({
        priority: 'critical',
        action: 'Fix broken links before deployment',
        description: 'External link health is below acceptable threshold',
        effort: 'high'
      });
    }

    if (!results.routeValidation.passed) {
      recommendations.push({
        priority: 'high',
        action: 'Resolve internal routing issues',
        description: 'Too many internal routing issues detected',
        effort: 'medium'
      });
    }

    if (!results.smartPrediction.passed) {
      recommendations.push({
        priority: 'medium',
        action: 'Address high-risk link patterns',
        description: 'Risk assessment indicates potential future issues',
        effort: 'medium'
      });
    }

    if (results.overall.passed) {
      recommendations.push({
        priority: 'low',
        action: 'Proceed with deployment',
        description: 'All validation checks passed successfully',
        effort: 'none'
      });
    }

    return recommendations;
  }

  determineValidationPass(results) {
    return results.overall.passed;
  }

  async saveValidationReport(validation) {
    const filename = `ci-validation-${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
    const filepath = path.join(this.CI_DIR, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(validation, null, 2));
    fs.writeFileSync(path.join(this.CI_DIR, 'latest.json'), JSON.stringify(validation, null, 2));
    
    this.log(`📄 Validation report saved: ${filepath}`);
  }

  logValidationResults(validation) {
    this.log('📊 Validation Results Summary:');
    this.log(`  Link Health: ${validation.results.linkHealth.passed ? '✅ PASS' : '❌ FAIL'} (${validation.results.linkHealth.score.toFixed(1)}%)`);
    this.log(`  Route Validation: ${validation.results.routeValidation.passed ? '✅ PASS' : '❌ FAIL'} (${validation.results.routeValidation.score.toFixed(1)}%)`);
    this.log(`  Smart Prediction: ${validation.results.smartPrediction.passed ? '✅ PASS' : '❌ FAIL'} (${validation.results.smartPrediction.score.toFixed(1)}%)`);
    this.log(`  Overall: ${validation.results.overall.passed ? '✅ PASS' : '❌ FAIL'} (${validation.results.overall.score.toFixed(1)}%)`);
    
    if (validation.recommendations.length > 0) {
      this.log('📋 Recommendations:');
      validation.recommendations.forEach(rec => {
        this.log(`  [${rec.priority.toUpperCase()}] ${rec.action}: ${rec.description}`);
      });
    }
  }

  async runPostDeploymentValidation() {
    this.log('🚀 Starting post-deployment link validation...');
    
    // Wait a bit for deployment to settle
    await new Promise(resolve => setTimeout(resolve, 30000)); // 30 seconds
    
    const validation = await this.runPreDeploymentValidation();
    validation.stage = 'post-deployment';
    
    // Save post-deployment report
    await this.saveValidationReport(validation);
    
    return validation;
  }

  async run() {
    const command = process.argv[2];
    
    try {
      switch (command) {
        case 'pre-deploy':
          await this.runPreDeploymentValidation();
          break;
          
        case 'post-deploy':
          await this.runPostDeploymentValidation();
          break;
          
        case 'validate':
          await this.runPreDeploymentValidation();
          break;
          
        default:
          console.log('CI/CD Link Validator');
          console.log('Usage:');
          console.log('  node ci-cd-link-validator.cjs pre-deploy  - Run pre-deployment validation');
          console.log('  node ci-cd-link-validator.cjs post-deploy - Run post-deployment validation');
          console.log('  node ci-cd-link-validator.cjs validate   - Run general validation');
          break;
      }
    } catch (error) {
      this.log(`Validation failed: ${error.message}`, 'ERROR');
      this.exitCode = 1;
    }
    
    // Exit with appropriate code
    process.exit(this.exitCode);
  }
}

// Run if called directly
if (require.main === module) {
  const validator = new CICDLinkValidator();
  validator.run().catch(console.error);
}

module.exports = CICDLinkValidator;