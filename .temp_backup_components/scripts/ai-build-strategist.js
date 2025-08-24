#!/usr/bin/env node

/**
 * AI-Powered Build Strategy Selector
 * Machine learning-based build strategy selection and optimization
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

class AIBuildStrategist {
  constructor() {
    this.modelPath = '.ai-models';
    this.trainingDataPath = '.training-data';
    this.modelVersion = '1.0';
    
    this.features = {
      buildHistory: [],
      performanceMetrics: [],
      dependencyChanges: [],
      environmentFactors: [],
      failurePatterns: []
    };
    
    this.strategies = {
      incremental: 'incremental',
      selective: 'selective',
      full: 'full',
      parallel: 'parallel',
      distributed: 'distributed',
      hybrid: 'hybrid'
    };
    
    this.initializeAI();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`);
  }

  initializeAI() {
    try {
      // Create AI model directories
      if (!fs.existsSync(this.modelPath)) {
        fs.mkdirSync(this.modelPath, { recursive: true });
        this.log(`📁 Created AI model directory: ${this.modelPath}`);
      }
      
      if (!fs.existsSync(this.trainingDataPath)) {
        fs.mkdirSync(this.trainingDataPath, { recursive: true });
        this.log(`📁 Created training data directory: ${this.trainingDataPath}`);
      }
      
      // Load existing models and training data
      this.loadModels();
      this.loadTrainingData();
      
      this.log('✅ AI system initialized');
    } catch (error) {
      this.log(`❌ AI initialization failed: ${error.message}`, 'error');
    }
  }

  loadModels() {
    try {
      const modelFile = path.join(this.modelPath, 'build-strategy-model.json');
      if (fs.existsSync(modelFile)) {
        const modelData = JSON.parse(fs.readFileSync(modelFile, 'utf8'));
        this.model = modelData;
        this.log(`🤖 Loaded AI model version ${modelData.version}`);
      } else {
        this.log('ℹ️  No existing model found, will create new one');
        this.model = null;
      }
    } catch (error) {
      this.log(`⚠️  Could not load model: ${error.message}`, 'warning');
      this.model = null;
    }
  }

  loadTrainingData() {
    try {
      const trainingFile = path.join(this.trainingDataPath, 'build-history.json');
      if (fs.existsSync(trainingFile)) {
        const trainingData = JSON.parse(fs.readFileSync(trainingFile, 'utf8'));
        this.features.buildHistory = trainingData.buildHistory || [];
        this.features.performanceMetrics = trainingData.performanceMetrics || [];
        this.features.dependencyChanges = trainingData.dependencyChanges || [];
        this.features.environmentFactors = trainingData.environmentFactors || [];
        this.features.failurePatterns = trainingData.failurePatterns || [];
        
        this.log(`📊 Loaded ${this.features.buildHistory.length} training examples`);
      }
    } catch (error) {
      this.log(`⚠️  Could not load training data: ${error.message}`, 'warning');
    }
  }

  async selectOptimalStrategy(buildContext) {
    this.log('🧠 AI analyzing build context for optimal strategy...');
    
    try {
      // Extract features from build context
      const features = this.extractFeatures(buildContext);
      
      // Use AI model to predict optimal strategy
      const prediction = await this.predictStrategy(features);
      
      // Generate confidence score and reasoning
      const confidence = this.calculateConfidence(prediction, features);
      const reasoning = this.generateReasoning(prediction, features);
      
      // Log prediction details
      this.log(`🎯 AI Strategy Prediction: ${prediction.strategy} (${confidence.toFixed(1)}% confidence)`);
      
      return {
        strategy: prediction.strategy,
        confidence: confidence,
        reasoning: reasoning,
        alternatives: prediction.alternatives,
        features: features,
        modelVersion: this.modelVersion
      };
      
    } catch (error) {
      this.log(`❌ AI strategy selection failed: ${error.message}`, 'error');
      
      // Fallback to rule-based strategy selection
      return this.fallbackStrategySelection(buildContext);
    }
  }

  extractFeatures(buildContext) {
    const features = {
      // Build complexity features
      fileChanges: buildContext.fileChanges || 0,
      criticalChanges: buildContext.criticalChanges || 0,
      majorChanges: buildContext.majorChanges || 0,
      minorChanges: buildContext.minorChanges || 0,
      
      // Dependency features
      dependencyUpdates: buildContext.dependencyUpdates || 0,
      securityVulnerabilities: buildContext.securityVulnerabilities || 0,
      breakingChanges: buildContext.breakingChanges || 0,
      
      // Environment features
      nodeVersion: buildContext.nodeVersion || 'unknown',
      memoryAvailable: buildContext.memoryAvailable || 0,
      cpuCores: buildContext.cpuCores || 1,
      networkLatency: buildContext.networkLatency || 0,
      
      // Historical features
      recentFailures: this.getRecentFailureCount(),
      averageBuildTime: this.getAverageBuildTime(),
      cacheHitRate: this.getCacheHitRate(),
      
      // Time-based features
      timeOfDay: new Date().getHours(),
      dayOfWeek: new Date().getDay(),
      isBusinessHours: this.isBusinessHours(),
      
      // Resource features
      concurrentBuilds: buildContext.concurrentBuilds || 1,
      buildQueueLength: buildContext.buildQueueLength || 0,
      availableResources: buildContext.availableResources || 100
    };
    
    return features;
  }

  async predictStrategy(features) {
    if (!this.model || this.model.version !== this.modelVersion) {
      // Use rule-based prediction if no model available
      return this.ruleBasedPrediction(features);
    }
    
    try {
      // Apply machine learning model
      const prediction = this.applyMLModel(features);
      return prediction;
    } catch (error) {
      this.log(`⚠️  ML model failed, falling back to rules: ${error.message}`, 'warning');
      return this.ruleBasedPrediction(features);
    }
  }

  ruleBasedPrediction(features) {
    let strategy = this.strategies.incremental;
    let confidence = 0.7;
    let alternatives = [];
    
    // Rule 1: Critical changes require full build
    if (features.criticalChanges > 0) {
      strategy = this.strategies.full;
      confidence = 0.95;
      alternatives = [this.strategies.selective, this.strategies.hybrid];
    }
    // Rule 2: Many major changes suggest selective build
    else if (features.majorChanges > 5) {
      strategy = this.strategies.selective;
      confidence = 0.85;
      alternatives = [this.strategies.full, this.strategies.hybrid];
    }
    // Rule 3: High resource availability enables parallel builds
    else if (features.availableResources > 80 && features.cpuCores > 4) {
      strategy = this.strategies.parallel;
      confidence = 0.8;
      alternatives = [this.strategies.selective, this.strategies.incremental];
    }
    // Rule 4: Recent failures suggest more conservative approach
    else if (features.recentFailures > 2) {
      strategy = this.strategies.full;
      confidence = 0.75;
      alternatives = [this.strategies.selective, this.strategies.incremental];
    }
    // Rule 5: High cache hit rate enables incremental builds
    else if (features.cacheHitRate > 0.8) {
      strategy = this.strategies.incremental;
      confidence = 0.9;
      alternatives = [this.strategies.selective, this.strategies.hybrid];
    }
    
    return {
      strategy,
      confidence,
      alternatives,
      method: 'rule-based'
    };
  }

  applyMLModel(features) {
    // This is a simplified ML model implementation
    // In production, you'd use a proper ML library like TensorFlow.js or ONNX
    
    // Convert features to numerical values
    const featureVector = this.featuresToVector(features);
    
    // Apply simple linear model (placeholder for real ML)
    const scores = this.calculateStrategyScores(featureVector);
    
    // Select strategy with highest score
    const bestStrategy = Object.keys(scores).reduce((a, b) => 
      scores[a] > scores[b] ? a : b
    );
    
    const confidence = Math.min(0.95, scores[bestStrategy] / 100);
    
    // Get alternatives (strategies with scores > 70% of best)
    const threshold = scores[bestStrategy] * 0.7;
    const alternatives = Object.entries(scores)
      .filter(([_, score]) => score > threshold)
      .map(([strategy, _]) => strategy)
      .filter(strategy => strategy !== bestStrategy);
    
    return {
      strategy: bestStrategy,
      confidence,
      alternatives,
      method: 'ml-model'
    };
  }

  featuresToVector(features) {
    // Normalize features to 0-1 range
    return {
      fileChanges: Math.min(features.fileChanges / 100, 1),
      criticalChanges: Math.min(features.criticalChanges / 10, 1),
      majorChanges: Math.min(features.majorChanges / 50, 1),
      dependencyUpdates: Math.min(features.dependencyUpdates / 20, 1),
      securityVulnerabilities: Math.min(features.securityVulnerabilities / 5, 1),
      memoryAvailable: features.memoryAvailable / 100,
      cpuCores: Math.min(features.cpuCores / 16, 1),
      cacheHitRate: features.cacheHitRate,
      recentFailures: Math.min(features.recentFailures / 5, 1),
      availableResources: features.availableResources / 100
    };
  }

  calculateStrategyScores(featureVector) {
    // Simplified scoring algorithm
    // In production, this would be a trained neural network
    
    const scores = {};
    
    // Incremental strategy scoring
    scores[this.strategies.incremental] = 
      (1 - featureVector.criticalChanges) * 80 +
      featureVector.cacheHitRate * 20 +
      (1 - featureVector.recentFailures) * 30;
    
    // Selective strategy scoring
    scores[this.strategies.selective] = 
      featureVector.majorChanges * 60 +
      (1 - featureVector.criticalChanges) * 40 +
      featureVector.cacheHitRate * 30;
    
    // Full strategy scoring
    scores[this.strategies.full] = 
      featureVector.criticalChanges * 90 +
      featureVector.recentFailures * 50 +
      (1 - featureVector.cacheHitRate) * 40;
    
    // Parallel strategy scoring
    scores[this.strategies.parallel] = 
      featureVector.cpuCores * 70 +
      featureVector.availableResources * 60 +
      (1 - featureVector.recentFailures) * 30;
    
    // Hybrid strategy scoring
    scores[this.strategies.hybrid] = 
      (featureVector.majorChanges + featureVector.dependencyUpdates) * 40 +
      featureVector.cacheHitRate * 50 +
      featureVector.availableResources * 30;
    
    return scores;
  }

  calculateConfidence(prediction, features) {
    let confidence = prediction.confidence;
    
    // Adjust confidence based on feature quality
    if (features.fileChanges > 0) confidence += 0.1;
    if (features.cacheHitRate > 0.5) confidence += 0.05;
    if (features.recentFailures === 0) confidence += 0.05;
    if (features.availableResources > 80) confidence += 0.05;
    
    // Reduce confidence for edge cases
    if (features.criticalChanges > 5) confidence -= 0.1;
    if (features.recentFailures > 5) confidence -= 0.1;
    if (features.availableResources < 20) confidence -= 0.1;
    
    return Math.max(0.1, Math.min(0.99, confidence));
  }

  generateReasoning(prediction, features) {
    const reasons = [];
    
    switch (prediction.strategy) {
      case this.strategies.incremental:
        if (features.cacheHitRate > 0.8) {
          reasons.push('High cache hit rate enables efficient incremental builds');
        }
        if (features.minorChanges > features.majorChanges) {
          reasons.push('Minor changes dominate, incremental approach optimal');
        }
        if (features.recentFailures === 0) {
          reasons.push('No recent failures, incremental build safe');
        }
        break;
        
      case this.strategies.selective:
        if (features.majorChanges > 0) {
          reasons.push('Major changes detected, selective rebuild recommended');
        }
        if (features.dependencyUpdates > 0) {
          reasons.push('Dependency updates require selective validation');
        }
        break;
        
      case this.strategies.full:
        if (features.criticalChanges > 0) {
          reasons.push('Critical changes detected, full rebuild required');
        }
        if (features.recentFailures > 2) {
          reasons.push('Recent failures suggest full rebuild for stability');
        }
        if (features.cacheHitRate < 0.3) {
          reasons.push('Low cache hit rate, full rebuild more efficient');
        }
        break;
        
      case this.strategies.parallel:
        if (features.cpuCores > 4) {
          reasons.push('High CPU core count enables parallel processing');
        }
        if (features.availableResources > 80) {
          reasons.push('Abundant resources available for parallel builds');
        }
        break;
        
      case this.strategies.hybrid:
        reasons.push('Mixed change types suggest hybrid approach');
        if (features.majorChanges > 0 && features.minorChanges > 0) {
          reasons.push('Combination of major and minor changes');
        }
        break;
    }
    
    // Add confidence-based reasoning
    if (prediction.confidence > 0.9) {
      reasons.push('High confidence prediction based on clear patterns');
    } else if (prediction.confidence < 0.7) {
      reasons.push('Lower confidence due to complex or conflicting factors');
    }
    
    return reasons;
  }

  fallbackStrategySelection(buildContext) {
    this.log('🔄 Using fallback rule-based strategy selection');
    
    const features = this.extractFeatures(buildContext);
    const prediction = this.ruleBasedPrediction(features);
    
    return {
      strategy: prediction.strategy,
      confidence: prediction.confidence * 0.8, // Reduce confidence for fallback
      reasoning: ['Fallback strategy selection due to AI system unavailability'],
      alternatives: prediction.alternatives,
      features: features,
      modelVersion: 'fallback'
    };
  }

  // Training and learning methods
  async recordBuildResult(buildContext, strategy, result) {
    this.log('📚 Recording build result for AI learning...');
    
    try {
      const buildRecord = {
        timestamp: new Date().toISOString(),
        strategy: strategy,
        context: buildContext,
        result: {
          success: result.success,
          buildTime: result.buildTime,
          memoryUsage: result.memoryUsage,
          errors: result.errors || [],
          warnings: result.warnings || []
        },
        performance: {
          cacheHitRate: result.cacheHitRate || 0,
          buildEfficiency: result.buildEfficiency || 0,
          resourceUtilization: result.resourceUtilization || 0
        }
      };
      
      // Add to build history
      this.features.buildHistory.push(buildRecord);
      
      // Keep only last 1000 builds for memory management
      if (this.features.buildHistory.length > 1000) {
        this.features.buildHistory = this.features.buildHistory.slice(-1000);
      }
      
      // Update performance metrics
      this.updatePerformanceMetrics(buildRecord);
      
      // Save training data
      await this.saveTrainingData();
      
      // Retrain model if enough new data
      if (this.shouldRetrainModel()) {
        await this.retrainModel();
      }
      
      this.log('✅ Build result recorded successfully');
      
    } catch (error) {
      this.log(`⚠️  Could not record build result: ${error.message}`, 'warning');
    }
  }

  updatePerformanceMetrics(buildRecord) {
    // Update average build time
    const buildTimes = this.features.buildHistory
      .filter(record => record.result.success)
      .map(record => record.result.buildTime);
    
    if (buildTimes.length > 0) {
      this.features.performanceMetrics.push({
        timestamp: new Date().toISOString(),
        averageBuildTime: buildTimes.reduce((a, b) => a + b, 0) / buildTimes.length,
        totalBuilds: buildTimes.length
      });
    }
    
    // Update failure patterns
    if (!buildRecord.result.success) {
      this.features.failurePatterns.push({
        timestamp: new Date().toISOString(),
        strategy: buildRecord.strategy,
        context: buildRecord.context,
        errors: buildRecord.result.errors
      });
    }
  }

  shouldRetrainModel() {
    // Retrain if we have at least 100 new builds since last training
    const lastTraining = this.model?.lastTraining || 0;
    const newBuilds = this.features.buildHistory.filter(
      record => new Date(record.timestamp).getTime() > lastTraining
    ).length;
    
    return newBuilds >= 100;
  }

  async retrainModel() {
    this.log('🔄 Retraining AI model with new data...');
    
    try {
      // This is a simplified retraining implementation
      // In production, you'd use proper ML training libraries
      
      const newModel = {
        version: this.modelVersion,
        lastTraining: Date.now(),
        trainingExamples: this.features.buildHistory.length,
        accuracy: this.calculateModelAccuracy(),
        parameters: this.extractModelParameters()
      };
      
      // Save new model
      this.model = newModel;
      await this.saveModel();
      
      this.log(`✅ Model retrained successfully. Accuracy: ${newModel.accuracy.toFixed(2)}%`);
      
    } catch (error) {
      this.log(`❌ Model retraining failed: ${error.message}`, 'error');
    }
  }

  calculateModelAccuracy() {
    // Calculate accuracy based on successful predictions
    // This is a simplified implementation
    
    if (this.features.buildHistory.length < 10) {
      return 0.75; // Default accuracy for small datasets
    }
    
    const recentBuilds = this.features.buildHistory.slice(-100);
    const successfulPredictions = recentBuilds.filter(record => 
      record.result.success && record.strategy !== 'full'
    ).length;
    
    return (successfulPredictions / recentBuilds.length) * 100;
  }

  extractModelParameters() {
    // Extract key parameters from training data
    // This is a simplified implementation
    
    const parameters = {
      averageBuildTime: 0,
      successRate: 0,
      cacheEfficiency: 0,
      failureRate: 0
    };
    
    if (this.features.buildHistory.length > 0) {
      const successfulBuilds = this.features.buildHistory.filter(record => record.result.success);
      const failedBuilds = this.features.buildHistory.filter(record => !record.result.success);
      
      parameters.successRate = (successfulBuilds.length / this.features.buildHistory.length) * 100;
      parameters.failureRate = (failedBuilds.length / this.features.buildHistory.length) * 100;
      
      if (successfulBuilds.length > 0) {
        parameters.averageBuildTime = successfulBuilds.reduce((sum, record) => 
          sum + record.result.buildTime, 0
        ) / successfulBuilds.length;
      }
      
      parameters.cacheEfficiency = this.features.buildHistory.reduce((sum, record) => 
        sum + (record.performance?.cacheHitRate || 0), 0
      ) / this.features.buildHistory.length;
    }
    
    return parameters;
  }

  // Utility methods
  getRecentFailureCount() {
    const oneDayAgo = Date.now() - (24 * 60 * 60 * 1000);
    return this.features.failurePatterns.filter(pattern => 
      new Date(pattern.timestamp).getTime() > oneDayAgo
    ).length;
  }

  getAverageBuildTime() {
    if (this.features.performanceMetrics.length === 0) return 0;
    
    const recentMetrics = this.features.performanceMetrics.slice(-10);
    return recentMetrics.reduce((sum, metric) => sum + metric.averageBuildTime, 0) / recentMetrics.length;
  }

  getCacheHitRate() {
    if (this.features.buildHistory.length === 0) return 0.5;
    
    const recentBuilds = this.features.buildHistory.slice(-20);
    return recentBuilds.reduce((sum, record) => 
      sum + (record.performance?.cacheHitRate || 0), 0
    ) / recentBuilds.length;
  }

  isBusinessHours() {
    const hour = new Date().getHours();
    const day = new Date().getDay();
    return day >= 1 && day <= 5 && hour >= 9 && hour <= 17;
  }

  // Data persistence methods
  async saveTrainingData() {
    try {
      const trainingFile = path.join(this.trainingDataPath, 'build-history.json');
      const trainingData = {
        timestamp: new Date().toISOString(),
        buildHistory: this.features.buildHistory,
        performanceMetrics: this.features.performanceMetrics,
        dependencyChanges: this.features.dependencyChanges,
        environmentFactors: this.features.environmentFactors,
        failurePatterns: this.features.failurePatterns
      };
      
      fs.writeFileSync(trainingFile, JSON.stringify(trainingData, null, 2));
      this.log('💾 Training data saved');
    } catch (error) {
      this.log(`⚠️  Could not save training data: ${error.message}`, 'warning');
    }
  }

  async saveModel() {
    try {
      const modelFile = path.join(this.modelPath, 'build-strategy-model.json');
      fs.writeFileSync(modelFile, JSON.stringify(this.model, null, 2));
      this.log('💾 AI model saved');
    } catch (error) {
      this.log(`⚠️  Could not save model: ${error.message}`, 'warning');
    }
  }

  // Analysis and reporting methods
  generateAIAnalysis() {
    const analysis = {
      timestamp: new Date().toISOString(),
      modelVersion: this.modelVersion,
      trainingData: {
        totalBuilds: this.features.buildHistory.length,
        recentBuilds: this.features.buildHistory.slice(-10).length,
        successRate: this.calculateSuccessRate(),
        averageBuildTime: this.getAverageBuildTime()
      },
      modelPerformance: {
        accuracy: this.model?.accuracy || 0,
        lastTraining: this.model?.lastTraining || 0,
        trainingExamples: this.model?.trainingExamples || 0
      },
      recommendations: this.generateRecommendations()
    };
    
    return analysis;
  }

  calculateSuccessRate() {
    if (this.features.buildHistory.length === 0) return 0;
    
    const successfulBuilds = this.features.buildHistory.filter(record => record.result.success);
    return (successfulBuilds.length / this.features.buildHistory.length) * 100;
  }

  generateRecommendations() {
    const recommendations = [];
    
    if (this.features.buildHistory.length < 50) {
      recommendations.push('Collect more build data to improve AI predictions');
    }
    
    if (this.model?.accuracy < 80) {
      recommendations.push('Model accuracy below 80%, consider retraining');
    }
    
    if (this.getRecentFailureCount() > 3) {
      recommendations.push('High recent failure rate, review build strategies');
    }
    
    if (this.getCacheHitRate() < 0.5) {
      recommendations.push('Low cache hit rate, optimize caching strategy');
    }
    
    return recommendations;
  }

  // Main execution method
  async runAIStrategySelection(buildContext) {
    this.log('🚀 Starting AI-powered build strategy selection...');
    
    try {
      // Select optimal strategy
      const strategy = await this.selectOptimalStrategy(buildContext);
      
      // Generate AI analysis
      const analysis = this.generateAIAnalysis();
      
      // Save analysis report
      await this.saveAnalysisReport(analysis);
      
      this.log('✅ AI strategy selection completed successfully');
      
      return {
        strategy,
        analysis,
        timestamp: new Date().toISOString()
      };
      
    } catch (error) {
      this.log(`💥 AI strategy selection failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async saveAnalysisReport(analysis) {
    try {
      const reportPath = 'ai-build-strategy-analysis.json';
      fs.writeFileSync(reportPath, JSON.stringify(analysis, null, 2));
      this.log(`📄 AI analysis report saved to ${reportPath}`);
    } catch (error) {
      this.log(`⚠️  Could not save analysis report: ${error.message}`, 'warning');
    }
  }
}

// Run if called directly
if (require.main === module) {
  const aiStrategist = new AIBuildStrategist();
  
  // Example build context
  const buildContext = {
    fileChanges: 15,
    criticalChanges: 0,
    majorChanges: 3,
    minorChanges: 12,
    dependencyUpdates: 2,
    securityVulnerabilities: 0,
    breakingChanges: 0,
    nodeVersion: '20.0.0',
    memoryAvailable: 85,
    cpuCores: 8,
    networkLatency: 50,
    concurrentBuilds: 1,
    buildQueueLength: 0,
    availableResources: 90
  };
  
  aiStrategist.runAIStrategySelection(buildContext)
    .then(result => {
      console.log('AI Strategy Selection Result:', JSON.stringify(result, null, 2));
    })
    .catch(error => {
      console.error('AI Strategy Selection failed:', error);
      process.exit(1);
    });
}

module.exports = AIBuildStrategist;