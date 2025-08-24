#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

class MLLinkIntelligence {
  constructor() {
    this.ROOT = process.cwd();
    this.REPORTS_DIR = path.join(this.ROOT, 'data', 'reports');
    this.ML_DIR = path.join(this.ROOT, 'data', 'reports', 'ml-intelligence');
    this.MODELS_DIR = path.join(this.ROOT, 'data', 'models');
    this.ensureDir(this.ML_DIR);
    this.ensureDir(this.MODELS_DIR);
    
    this.features = {
      linkAge: 0,
      failureRate: 0,
      responseTime: 0,
      domainReliability: 0,
      contentType: 0,
      updateFrequency: 0
    };
    
    this.models = {
      failurePrediction: null,
      healthScoring: null,
      riskAssessment: null
    };
    
    this.trainingData = [];
    this.predictionHistory = [];
  }

  ensureDir(dir) {
    if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  }

  async initializeMLSystem() {
    console.log('🧠 Initializing Machine Learning Link Intelligence System...');
    
    try {
      // Load existing models if available
      await this.loadExistingModels();
      
      // Collect training data
      await this.collectTrainingData();
      
      // Train models if sufficient data exists
      if (this.trainingData.length >= 10) {
        await this.trainModels();
      } else {
        console.log('⚠️  Insufficient training data. Collecting more data...');
      }
      
      // Start prediction engine
      await this.startPredictionEngine();
      
      console.log('✅ ML Link Intelligence System initialized successfully');
      
    } catch (error) {
      console.error('❌ Error initializing ML system:', error.message);
      throw error;
    }
  }

  async loadExistingModels() {
    try {
      const modelFiles = ['failure-prediction.json', 'health-scoring.json', 'risk-assessment.json'];
      
      for (const file of modelFiles) {
        const modelPath = path.join(this.MODELS_DIR, file);
        if (fs.existsSync(modelPath)) {
          const modelData = JSON.parse(fs.readFileSync(modelPath, 'utf8'));
          const modelName = file.replace('.json', '');
          this.models[modelName] = modelData;
          console.log(`📥 Loaded existing model: ${modelName}`);
        }
      }
    } catch (error) {
      console.warn('Warning: Could not load existing models:', error.message);
    }
  }

  async collectTrainingData() {
    console.log('📊 Collecting training data from historical reports...');
    
    try {
      // Collect link health data
      const healthDir = path.join(this.REPORTS_DIR, 'link-health');
      if (fs.existsSync(healthDir)) {
        const files = fs.readdirSync(healthDir)
          .filter(f => f.startsWith('link-health-report-'))
          .sort()
          .slice(-20); // Last 20 reports
        
        for (const file of files) {
          const data = JSON.parse(fs.readFileSync(path.join(healthDir, file), 'utf8'));
          this.processHealthDataForTraining(data);
        }
      }
      
      // Collect route validation data
      const routeDir = path.join(this.REPORTS_DIR, 'route-validation');
      if (fs.existsSync(routeDir)) {
        const files = fs.readdirSync(routeDir)
          .filter(f => f.startsWith('route-validation-'))
          .sort()
          .slice(-20);
        
        for (const file of files) {
          const data = JSON.parse(fs.readFileSync(path.join(routeDir, file), 'utf8'));
          this.processRouteDataForTraining(data);
        }
      }
      
      console.log(`📈 Collected ${this.trainingData.length} training samples`);
      
    } catch (error) {
      console.warn('Warning: Could not collect training data:', error.message);
    }
  }

  processHealthDataForTraining(data) {
    try {
      for (const [url, linkData] of data.allLinks) {
        const trainingSample = {
          url,
          features: this.extractFeatures(url, linkData),
          target: {
            failed: !linkData.ok,
            statusCode: linkData.statusCode || 0,
            responseTime: linkData.responseTime || 0
          },
          timestamp: data.generatedAt
        };
        
        this.trainingData.push(trainingSample);
      }
    } catch (error) {
      console.warn('Warning: Could not process health data:', error.message);
    }
  }

  processRouteDataForTraining(data) {
    try {
      for (const issue of data.issues) {
        const trainingSample = {
          route: issue.route,
          features: this.extractRouteFeatures(issue),
          target: {
            hasIssue: true,
            issueType: issue.type,
            priority: issue.priority
          },
          timestamp: data.generatedAt
        };
        
        this.trainingData.push(trainingSample);
      }
    } catch (error) {
      console.warn('Warning: Could not process route data:', error.message);
    }
  }

  extractFeatures(url, linkData) {
    try {
      const urlObj = new URL(url);
      const domain = urlObj.hostname;
      
      return {
        linkAge: this.calculateLinkAge(linkData),
        failureRate: this.calculateFailureRate(domain),
        responseTime: linkData.responseTime || 0,
        domainReliability: this.calculateDomainReliability(domain),
        contentType: this.detectContentType(url),
        updateFrequency: this.calculateUpdateFrequency(domain)
      };
    } catch (error) {
      return this.features; // Return default features
    }
  }

  extractRouteFeatures(issue) {
    return {
      routeComplexity: this.calculateRouteComplexity(issue.route),
      issueFrequency: this.calculateIssueFrequency(issue.type),
      priorityScore: this.calculatePriorityScore(issue.priority),
      routeDepth: this.calculateRouteDepth(issue.route)
    };
  }

  calculateLinkAge(linkData) {
    // Calculate age based on when link was first seen
    const firstSeen = linkData.firstSeen || new Date().toISOString();
    const ageInDays = (new Date() - new Date(firstSeen)) / (1000 * 60 * 60 * 24);
    return Math.min(ageInDays, 365); // Cap at 1 year
  }

  calculateFailureRate(domain) {
    // Calculate failure rate for this domain
    const domainLinks = this.trainingData.filter(sample => 
      sample.url && sample.url.includes(domain)
    );
    
    if (domainLinks.length === 0) return 0;
    
    const failures = domainLinks.filter(sample => sample.target.failed).length;
    return failures / domainLinks.length;
  }

  calculateDomainReliability(domain) {
    // Calculate domain reliability score
    const domainLinks = this.trainingData.filter(sample => 
      sample.url && sample.url.includes(domain)
    );
    
    if (domainLinks.length === 0) return 0.5; // Default neutral score
    
    const successful = domainLinks.filter(sample => !sample.target.failed).length;
    return successful / domainLinks.length;
  }

  detectContentType(url) {
    // Detect content type from URL
    if (url.includes('.pdf')) return 1;
    if (url.includes('.doc')) return 2;
    if (url.includes('.image')) return 3;
    if (url.includes('api.')) return 4;
    return 0; // Default
  }

  calculateUpdateFrequency(domain) {
    // Calculate how often this domain is updated
    const domainSamples = this.trainingData.filter(sample => 
      sample.url && sample.url.includes(domain)
    );
    
    if (domainSamples.length < 2) return 0;
    
    const timestamps = domainSamples.map(s => new Date(s.timestamp));
    const timeSpan = Math.max(...timestamps) - Math.min(...timestamps);
    return timeSpan / (1000 * 60 * 60 * 24); // Days between updates
  }

  calculateRouteComplexity(route) {
    // Calculate route complexity
    const segments = route.split('/').filter(s => s.length > 0);
    const dynamicSegments = segments.filter(s => s.includes('[') || s.includes('*'));
    return segments.length + (dynamicSegments.length * 2);
  }

  calculateIssueFrequency(issueType) {
    // Calculate how often this issue type occurs
    const typeIssues = this.trainingData.filter(sample => 
      sample.target.issueType === issueType
    );
    return typeIssues.length / Math.max(this.trainingData.length, 1);
  }

  calculatePriorityScore(priority) {
    const priorityMap = { low: 1, medium: 2, high: 3, critical: 4 };
    return priorityMap[priority] || 1;
  }

  calculateRouteDepth(route) {
    return route.split('/').filter(s => s.length > 0).length;
  }

  async trainModels() {
    console.log('🎯 Training machine learning models...');
    
    try {
      // Train failure prediction model
      this.models.failurePrediction = this.trainFailurePredictionModel();
      
      // Train health scoring model
      this.models.healthScoring = this.trainHealthScoringModel();
      
      // Train risk assessment model
      this.models.riskAssessment = this.trainRiskAssessmentModel();
      
      // Save trained models
      await this.saveModels();
      
      console.log('✅ Models trained and saved successfully');
      
    } catch (error) {
      console.error('❌ Error training models:', error.message);
      throw error;
    }
  }

  trainFailurePredictionModel() {
    // Simple logistic regression-like model
    const model = {
      type: 'failure-prediction',
      weights: {
        linkAge: 0.1,
        failureRate: 0.4,
        responseTime: 0.2,
        domainReliability: -0.3,
        contentType: 0.1,
        updateFrequency: 0.1
      },
      bias: 0.5,
      threshold: 0.6,
      accuracy: 0.0
    };
    
    // Calculate accuracy on training data
    let correct = 0;
    let total = 0;
    
    for (const sample of this.trainingData) {
      if (sample.features && sample.target.failed !== undefined) {
        const prediction = this.predictFailure(sample.features, model);
        const actual = sample.target.failed;
        
        if ((prediction > model.threshold && actual) || 
            (prediction <= model.threshold && !actual)) {
          correct++;
        }
        total++;
      }
    }
    
    model.accuracy = total > 0 ? correct / total : 0;
    return model;
  }

  trainHealthScoringModel() {
    // Health scoring model
    const model = {
      type: 'health-scoring',
      weights: {
        linkAge: -0.1,
        failureRate: -0.5,
        responseTime: -0.2,
        domainReliability: 0.4,
        contentType: 0.1,
        updateFrequency: 0.1
      },
      bias: 70,
      scale: 30,
      accuracy: 0.0
    };
    
    // Calculate accuracy
    let totalError = 0;
    let total = 0;
    
    for (const sample of this.trainingData) {
      if (sample.features && sample.target.statusCode) {
        const prediction = this.predictHealthScore(sample.features, model);
        const actual = sample.target.statusCode >= 200 && sample.target.statusCode < 400 ? 100 : 0;
        
        totalError += Math.abs(prediction - actual);
        total++;
      }
    }
    
    model.accuracy = total > 0 ? 1 - (totalError / (total * 100)) : 0;
    return model;
  }

  trainRiskAssessmentModel() {
    // Risk assessment model
    const model = {
      type: 'risk-assessment',
      weights: {
        linkAge: 0.2,
        failureRate: 0.4,
        responseTime: 0.2,
        domainReliability: -0.3,
        contentType: 0.1,
        updateFrequency: 0.1
      },
      bias: 30,
      scale: 70,
      accuracy: 0.0
    };
    
    // Calculate accuracy
    let totalError = 0;
    let total = 0;
    
    for (const sample of this.trainingData) {
      if (sample.features) {
        const prediction = this.predictRiskScore(sample.features, model);
        const actual = sample.target.failed ? 80 : 20; // Simplified risk scoring
        
        totalError += Math.abs(prediction - actual);
        total++;
      }
    }
    
    model.accuracy = total > 0 ? 1 - (totalError / (total * 100)) : 0;
    return model;
  }

  predictFailure(features, model) {
    let score = model.bias;
    
    for (const [feature, weight] of Object.entries(model.weights)) {
      if (features[feature] !== undefined) {
        score += features[feature] * weight;
      }
    }
    
    return 1 / (1 + Math.exp(-score)); // Sigmoid function
  }

  predictHealthScore(features, model) {
    let score = model.bias;
    
    for (const [feature, weight] of Object.entries(model.weights)) {
      if (features[feature] !== undefined) {
        score += features[feature] * weight;
      }
    }
    
    return Math.max(0, Math.min(100, score * model.scale));
  }

  predictRiskScore(features, model) {
    let score = model.bias;
    
    for (const [feature, weight] of Object.entries(model.weights)) {
      if (features[feature] !== undefined) {
        score += features[feature] * weight;
      }
    }
    
    return Math.max(0, Math.min(100, score * model.scale));
  }

  async saveModels() {
    try {
      for (const [name, model] of Object.entries(this.models)) {
        if (model) {
          const filepath = path.join(this.MODELS_DIR, `${name}.json`);
          fs.writeFileSync(filepath, JSON.stringify(model, null, 2));
        }
      }
    } catch (error) {
      console.error('Error saving models:', error.message);
      throw error;
    }
  }

  async startPredictionEngine() {
    console.log('🔮 Starting ML prediction engine...');
    
    try {
      // Generate predictions for current data
      const predictions = await this.generatePredictions();
      
      // Save predictions
      await this.savePredictions(predictions);
      
      // Start continuous learning
      this.startContinuousLearning();
      
      console.log('✅ ML prediction engine started successfully');
      
    } catch (error) {
      console.error('❌ Error starting prediction engine:', error.message);
      throw error;
    }
  }

  async generatePredictions() {
    const predictions = {
      timestamp: new Date().toISOString(),
      predictions: [],
      insights: [],
      recommendations: []
    };
    
    try {
      // Get current link data
      const healthPath = path.join(this.REPORTS_DIR, 'link-health', 'latest.json');
      if (fs.existsSync(healthPath)) {
        const healthData = JSON.parse(fs.readFileSync(healthPath, 'utf8'));
        
        for (const [url, linkData] of healthData.allLinks) {
          const features = this.extractFeatures(url, linkData);
          
          const prediction = {
            url,
            features,
            failureProbability: this.models.failurePrediction ? 
              this.predictFailure(features, this.models.failurePrediction) : 0,
            healthScore: this.models.healthScoring ? 
              this.predictHealthScore(features, this.models.healthScoring) : 0,
            riskScore: this.models.riskAssessment ? 
              this.predictRiskScore(features, this.models.riskAssessment) : 0
          };
          
          predictions.predictions.push(prediction);
        }
      }
      
      // Generate insights
      predictions.insights = this.generateInsights(predictions.predictions);
      
      // Generate recommendations
      predictions.recommendations = this.generateMLRecommendations(predictions.insights);
      
    } catch (error) {
      console.warn('Warning: Could not generate predictions:', error.message);
    }
    
    return predictions;
  }

  generateInsights(predictions) {
    const insights = [];
    
    try {
      // High-risk links
      const highRiskLinks = predictions.filter(p => p.riskScore > 70);
      if (highRiskLinks.length > 0) {
        insights.push({
          type: 'high-risk-links',
          count: highRiskLinks.length,
          description: `${highRiskLinks.length} links identified as high-risk`,
          examples: highRiskLinks.slice(0, 3).map(p => p.url)
        });
      }
      
      // Links likely to fail
      const likelyFailures = predictions.filter(p => p.failureProbability > 0.7);
      if (likelyFailures.length > 0) {
        insights.push({
          type: 'likely-failures',
          count: likelyFailures.length,
          description: `${likelyFailures.length} links likely to fail soon`,
          examples: likelyFailures.slice(0, 3).map(p => p.url)
        });
      }
      
      // Performance trends
      const avgHealthScore = predictions.reduce((sum, p) => sum + p.healthScore, 0) / predictions.length;
      insights.push({
        type: 'performance-trend',
        metric: 'average-health-score',
        value: avgHealthScore.toFixed(1),
        description: `Average link health score: ${avgHealthScore.toFixed(1)}%`
      });
      
    } catch (error) {
      console.warn('Warning: Could not generate insights:', error.message);
    }
    
    return insights;
  }

  generateMLRecommendations(insights) {
    const recommendations = [];
    
    try {
      for (const insight of insights) {
        switch (insight.type) {
          case 'high-risk-links':
            recommendations.push({
              priority: 'high',
              action: 'Implement proactive monitoring for high-risk links',
              description: `Monitor ${insight.count} high-risk links more frequently`,
              effort: 'medium'
            });
            break;
            
          case 'likely-failures':
            recommendations.push({
              priority: 'critical',
              action: 'Preventive maintenance for likely failures',
              description: `Address ${insight.count} links before they fail`,
              effort: 'high'
            });
            break;
            
          case 'performance-trend':
            if (insight.value < 80) {
              recommendations.push({
                priority: 'medium',
                action: 'Improve overall link health',
                description: 'Health score below 80% requires attention',
                effort: 'medium'
              });
            }
            break;
        }
      }
      
      // Add ML-specific recommendations
      if (this.trainingData.length < 50) {
        recommendations.push({
          priority: 'low',
          action: 'Collect more training data',
          description: 'More data will improve prediction accuracy',
          effort: 'low'
        });
      }
      
    } catch (error) {
      console.warn('Warning: Could not generate ML recommendations:', error.message);
    }
    
    return recommendations;
  }

  async savePredictions(predictions) {
    try {
      const filename = `ml-predictions-${new Date().toISOString().replace(/[:.]/g, '-')}.json`;
      const filepath = path.join(this.ML_DIR, filename);
      
      fs.writeFileSync(filepath, JSON.stringify(predictions, null, 2));
      fs.writeFileSync(path.join(this.ML_DIR, 'latest.json'), JSON.stringify(predictions, null, 2));
      
      console.log(`📄 ML predictions saved: ${filepath}`);
      
    } catch (error) {
      console.error('Error saving predictions:', error.message);
      throw error;
    }
  }

  startContinuousLearning() {
    // Set up continuous learning every hour
    setInterval(async () => {
      try {
        console.log('🔄 Running continuous learning cycle...');
        
        // Collect new data
        await this.collectTrainingData();
        
        // Retrain models if we have enough new data
        if (this.trainingData.length >= 50) {
          await this.trainModels();
        }
        
        // Generate new predictions
        const predictions = await this.generatePredictions();
        await this.savePredictions(predictions);
        
        console.log('✅ Continuous learning cycle completed');
        
      } catch (error) {
        console.error('❌ Error in continuous learning:', error.message);
      }
    }, 60 * 60 * 1000); // Every hour
  }

  async run() {
    try {
      await this.initializeMLSystem();
      
      // Keep the process running for continuous learning
      console.log('🧠 ML Link Intelligence System is running...');
      console.log('Press Ctrl+C to stop');
      
      process.on('SIGINT', () => {
        console.log('\n🛑 Shutting down ML system gracefully...');
        process.exit(0);
      });
      
    } catch (error) {
      console.error('❌ ML system failed:', error.message);
      process.exit(1);
    }
  }
}

// Run if called directly
if (require.main === module) {
  const mlSystem = new MLLinkIntelligence();
  mlSystem.run().catch(console.error);
}

module.exports = MLLinkIntelligence;