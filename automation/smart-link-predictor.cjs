#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

class SmartLinkPredictor {
  constructor() {
    this.ROOT = process.cwd();
    this.REPORTS_DIR = path.join(this.ROOT, 'data', 'reports');
    this.PREDICTIONS_DIR = path.join(this.ROOT, 'data', 'reports', 'predictions');
    this.ensureDir(this.PREDICTIONS_DIR);
    
    this.patterns = {
      githubRepoChanges: /github\.com\/[^\/]+\/[^\/]+/g,
      externalServiceEndpoints: /(formspree\.io|api\.github\.com|fonts\.googleapis\.com)/g,
      internalRoutes: /href\s*=\s*["']\/([^"']+)["']/g,
      dynamicRoutes: /\$\{[^}]+\}/g
    };
    
    this.riskFactors = {
      externalService: 0.3,
      dynamicRoute: 0.4,
      githubLink: 0.2,
      internalRoute: 0.1
    };
  }

  ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  }

  async analyzeLinkPatterns() {
    console.log('🔮 Analyzing link patterns for predictions...');
    
    const analysis = {
      timestamp: new Date().toISOString(),
      patterns: {},
      predictions: [],
      riskAssessment: {},
      recommendations: []
    };

    // Analyze GitHub repository patterns
    analysis.patterns.github = await this.analyzeGitHubPatterns();
    
    // Analyze external service patterns
    analysis.patterns.externalServices = await this.analyzeExternalServicePatterns();
    
    // Analyze internal routing patterns
    analysis.patterns.internalRoutes = await this.analyzeInternalRoutePatterns();
    
    // Generate predictions
    analysis.predictions = await this.generatePredictions(analysis.patterns);
    
    // Calculate risk assessment
    analysis.riskAssessment = this.calculateRiskAssessment(analysis.patterns);
    
    // Generate recommendations
    analysis.recommendations = this.generateSmartRecommendations(analysis);
    
    // Save analysis
    const filename = `link-predictions-${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
    const filepath = path.join(this.PREDICTIONS_DIR, filename);
    
    fs.writeFileSync(filepath, JSON.stringify(analysis, null, 2));
    fs.writeFileSync(path.join(this.PREDICTIONS_DIR, 'latest.json'), JSON.stringify(analysis, null, 2));
    
    console.log(`✅ Link pattern analysis complete: ${filepath}`);
    return analysis;
  }

  async analyzeGitHubPatterns() {
    const patterns = {
      repositories: new Set(),
      workflowLinks: new Set(),
      documentationLinks: new Set(),
      issueLinks: new Set()
    };

    try {
      const dirs = ['pages', 'components', 'automation', 'scripts'];
      
      for (const dir of dirs) {
        const fullDir = path.join(this.ROOT, dir);
        if (fs.existsSync(fullDir)) {
          this.walkDirForGitHubPatterns(fullDir, patterns);
        }
      }

      return {
        totalRepositories: patterns.repositories.size,
        repositories: Array.from(patterns.repositories),
        workflowLinks: Array.from(patterns.workflowLinks),
        documentationLinks: Array.from(patterns.documentationLinks),
        issueLinks: Array.from(patterns.issueLinks)
      };

    } catch (error) {
      console.warn('Warning: Could not analyze GitHub patterns:', error.message);
      return {};
    }
  }

  walkDirForGitHubPatterns(dir, patterns) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
        this.walkDirForGitHubPatterns(full, patterns);
      } else if (entry.isFile()) {
        if (/\.(tsx|ts|js|jsx|mdx|md)$/i.test(entry.name)) {
          this.extractGitHubPatterns(full, patterns);
        }
      }
    }
  }

  extractGitHubPatterns(filePath, patterns) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Extract repository URLs
      const repoMatches = content.match(/https:\/\/github\.com\/([^\/]+\/[^\/]+)/g);
      if (repoMatches) {
        repoMatches.forEach(match => patterns.repositories.add(match));
      }
      
      // Extract workflow links
      const workflowMatches = content.match(/https:\/\/github\.com\/[^\/]+\/[^\/]+\/actions/g);
      if (workflowMatches) {
        workflowMatches.forEach(match => patterns.workflowLinks.add(match));
      }
      
      // Extract documentation links
      const docMatches = content.match(/https:\/\/github\.com\/[^\/]+\/[^\/]+\/tree\/[^\/]+\/docs/g);
      if (docMatches) {
        docMatches.forEach(match => patterns.documentationLinks.add(match));
      }
      
      // Extract issue links
      const issueMatches = content.match(/https:\/\/github\.com\/[^\/]+\/[^\/]+\/issues/g);
      if (issueMatches) {
        issueMatches.forEach(match => patterns.issueLinks.add(match));
      }
      
    } catch (error) {
      console.warn(`Warning: Could not read file ${filePath}:`, error.message);
    }
  }

  async analyzeExternalServicePatterns() {
    const patterns = {
      services: new Map(),
      endpoints: new Set(),
      riskLevel: 'medium'
    };

    try {
      const dirs = ['pages', 'components', 'automation'];
      
      for (const dir of dirs) {
        const fullDir = path.join(this.ROOT, dir);
        if (fs.existsSync(fullDir)) {
          this.walkDirForExternalServicePatterns(fullDir, patterns);
        }
      }

      return {
        totalServices: patterns.services.size,
        services: Object.fromEntries(patterns.services),
        endpoints: Array.from(patterns.endpoints),
        riskLevel: patterns.riskLevel
      };

    } catch (error) {
      console.warn('Warning: Could not analyze external service patterns:', error.message);
      return {};
    }
  }

  walkDirForExternalServicePatterns(dir, patterns) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
        this.walkDirForExternalServicePatterns(full, patterns);
      } else if (entry.isFile()) {
        if (/\.(tsx|ts|js|jsx|mdx|md)$/i.test(entry.name)) {
          this.extractExternalServicePatterns(full, patterns);
        }
      }
    }
  }

  extractExternalServicePatterns(filePath, patterns) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Extract external service URLs
      const serviceMatches = content.match(/https:\/\/([^\/\s]+)/g);
      if (serviceMatches) {
        serviceMatches.forEach(match => {
          const domain = match.replace('https://', '');
          if (!domain.includes('ziontechgroup.com') && !domain.includes('localhost')) {
            patterns.endpoints.add(match);
            
            const serviceName = domain.split('.')[0];
            if (!patterns.services.has(serviceName)) {
              patterns.services.set(serviceName, []);
            }
            patterns.services.get(serviceName).push(match);
          }
        });
      }
      
    } catch (error) {
      console.warn(`Warning: Could not read file ${filePath}:`, error.message);
    }
  }

  async analyzeInternalRoutePatterns() {
    const patterns = {
      staticRoutes: new Set(),
      dynamicRoutes: new Set(),
      potentialIssues: []
    };

    try {
      const dirs = ['pages', 'components'];
      
      for (const dir of dirs) {
        const fullDir = path.join(this.ROOT, dir);
        if (fs.existsSync(fullDir)) {
          this.walkDirForInternalRoutePatterns(fullDir, patterns);
        }
      }

      return {
        totalStaticRoutes: patterns.staticRoutes.size,
        totalDynamicRoutes: patterns.dynamicRoutes.size,
        staticRoutes: Array.from(patterns.staticRoutes),
        dynamicRoutes: Array.from(patterns.dynamicRoutes),
        potentialIssues: patterns.potentialIssues
      };

    } catch (error) {
      console.warn('Warning: Could not analyze internal route patterns:', error.message);
      return {};
    }
  }

  walkDirForInternalRoutePatterns(dir, patterns) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });
    
    for (const entry of entries) {
      const full = path.join(dir, entry.name);
      
      if (entry.isDirectory()) {
        if (entry.name.startsWith('.') || entry.name === 'node_modules') continue;
        this.walkDirForInternalRoutePatterns(full, patterns);
      } else if (entry.isFile()) {
        if (/\.(tsx|ts|js|jsx|mdx|md)$/i.test(entry.name)) {
          this.extractInternalRoutePatterns(full, patterns);
        }
      }
    }
  }

  extractInternalRoutePatterns(filePath, patterns) {
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      
      // Extract internal route references
      const routeMatches = content.match(/href\s*=\s*["']\/([^"']+)["']/g);
      if (routeMatches) {
        routeMatches.forEach(match => {
          const route = match.match(/href\s*=\s*["']\/([^"']+)["']/)[1];
          
          if (route.includes('${') || route.includes('[') || route.includes('*')) {
            patterns.dynamicRoutes.add(route);
          } else {
            patterns.staticRoutes.add(route);
          }
        });
      }
      
      // Check for potential routing issues
      const dynamicMatches = content.match(/\$\{[^}]+\}/g);
      if (dynamicMatches) {
        patterns.potentialIssues.push({
          file: path.relative(this.ROOT, filePath),
          type: 'dynamic-route',
          patterns: dynamicMatches
        });
      }
      
    } catch (error) {
      console.warn(`Warning: Could not read file ${filePath}:`, error.message);
    }
  }

  async generatePredictions(patterns) {
    const predictions = [];
    
    // Predict GitHub repository changes
    if (patterns.github && patterns.github.repositories.length > 0) {
      predictions.push({
        type: 'github-repository-change',
        probability: 0.7,
        description: 'GitHub repository URLs may change, causing 404 errors',
        affectedLinks: patterns.github.repositories.length,
        recommendation: 'Implement repository URL validation and fallback mechanisms'
      });
    }
    
    // Predict external service failures
    if (patterns.externalServices && patterns.externalServices.services) {
      const highRiskServices = Object.entries(patterns.externalServices.services)
        .filter(([service, urls]) => urls.length > 2);
      
      if (highRiskServices.length > 0) {
        predictions.push({
          type: 'external-service-failure',
          probability: 0.6,
          description: 'High dependency on external services may cause link failures',
          affectedLinks: highRiskServices.reduce((sum, [, urls]) => sum + urls.length, 0),
          recommendation: 'Implement service health monitoring and fallback URLs'
        });
      }
    }
    
    // Predict internal routing issues
    if (patterns.internalRoutes && patterns.internalRoutes.dynamicRoutes.size > 0) {
      predictions.push({
        type: 'internal-routing-issue',
        probability: 0.8,
        description: 'Dynamic routes may cause 404 errors if parameters are invalid',
        affectedLinks: patterns.internalRoutes.dynamicRoutes.size,
        recommendation: 'Implement route parameter validation and error handling'
      });
    }
    
    // Predict link decay over time
    predictions.push({
      type: 'link-decay',
      probability: 0.9,
      description: 'External links naturally decay over time, leading to 404 errors',
      affectedLinks: 'all external links',
      recommendation: 'Implement regular link health monitoring and automated fixing'
    });
    
    return predictions;
  }

  calculateRiskAssessment(patterns) {
    let totalRisk = 0;
    const riskFactors = {};
    
    // Calculate GitHub risk
    if (patterns.github && patterns.github.repositories.length > 0) {
      const githubRisk = patterns.github.repositories.length * this.riskFactors.githubLink;
      riskFactors.github = githubRisk;
      totalRisk += githubRisk;
    }
    
    // Calculate external service risk
    if (patterns.externalServices && patterns.externalServices.services) {
      const serviceRisk = Object.keys(patterns.externalServices.services).length * this.riskFactors.externalService;
      riskFactors.externalServices = serviceRisk;
      totalRisk += serviceRisk;
    }
    
    // Calculate dynamic route risk
    if (patterns.internalRoutes && patterns.internalRoutes.dynamicRoutes.size > 0) {
      const dynamicRisk = patterns.internalRoutes.dynamicRoutes.size * this.riskFactors.dynamicRoute;
      riskFactors.dynamicRoutes = dynamicRisk;
      totalRisk += dynamicRisk;
    }
    
    // Normalize risk score (0-100)
    const normalizedRisk = Math.min(100, Math.round(totalRisk * 10));
    
    return {
      totalRisk: normalizedRisk,
      riskLevel: this.getRiskLevel(normalizedRisk),
      riskFactors,
      recommendations: this.getRiskBasedRecommendations(normalizedRisk)
    };
  }

  getRiskLevel(riskScore) {
    if (riskScore < 30) return 'low';
    if (riskScore < 60) return 'medium';
    if (riskScore < 80) return 'high';
    return 'critical';
  }

  getRiskBasedRecommendations(riskScore) {
    const recommendations = [];
    
    if (riskScore > 70) {
      recommendations.push({
        priority: 'critical',
        action: 'Implement immediate monitoring',
        description: 'High risk requires immediate attention and continuous monitoring'
      });
    }
    
    if (riskScore > 50) {
      recommendations.push({
        priority: 'high',
        action: 'Set up automated health checks',
        description: 'Medium-high risk requires automated monitoring and alerting'
      });
    }
    
    if (riskScore > 30) {
      recommendations.push({
        priority: 'medium',
        action: 'Regular health assessments',
        description: 'Moderate risk requires regular health checks and maintenance'
      });
    }
    
    recommendations.push({
      priority: 'low',
      action: 'Preventive monitoring',
      description: 'Implement preventive measures to avoid future issues'
    });
    
    return recommendations;
  }

  generateSmartRecommendations(analysis) {
    const recommendations = [];
    
    // GitHub-specific recommendations
    if (analysis.patterns.github && analysis.patterns.github.repositories.length > 0) {
      recommendations.push({
        category: 'GitHub',
        action: 'Implement repository URL validation',
        description: 'Add validation to ensure GitHub repository URLs are accessible',
        priority: 'high',
        effort: 'medium'
      });
    }
    
    // External service recommendations
    if (analysis.patterns.externalServices && analysis.patterns.externalServices.services) {
      recommendations.push({
        category: 'External Services',
        action: 'Add service health monitoring',
        description: 'Monitor external service health and implement fallbacks',
        priority: 'medium',
        effort: 'high'
      });
    }
    
    // Internal routing recommendations
    if (analysis.patterns.internalRoutes && analysis.patterns.internalRoutes.dynamicRoutes.size > 0) {
      recommendations.push({
        category: 'Internal Routing',
        action: 'Implement route validation',
        description: 'Add validation for dynamic route parameters',
        priority: 'medium',
        effort: 'medium'
      });
    }
    
    // General recommendations
    recommendations.push({
      category: 'Monitoring',
      action: 'Set up predictive monitoring',
      description: 'Use pattern analysis to predict and prevent link issues',
      priority: 'low',
      effort: 'low'
    });
    
    return recommendations;
  }

  async run() {
    try {
      await this.analyzeLinkPatterns();
    } catch (error) {
      console.error('❌ Error in smart link prediction:', error.message);
      throw error;
    }
  }
}

// Run if called directly
if (require.main === module) {
  const predictor = new SmartLinkPredictor();
  predictor.run().catch(console.error);
}

module.exports = SmartLinkPredictor;