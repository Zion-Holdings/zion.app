#!/usr/bin/env node

/**
 * Performance Prediction Engine
 * Estimates build times and resource usage based on historical data
 */

const fs = require('fs');
const path = require('path');

class PerformancePredictionEngine {
  constructor() {
    this.historicalData = [];
    this.predictionModels = {
      buildTime: null,
      memoryUsage: null,
      cpuUsage: null,
      cacheEfficiency: null
    };
    
    this.featureWeights = {
      fileChanges: 0.3,
      dependencyUpdates: 0.2,
      criticalChanges: 0.25,
      cacheHitRate: 0.15,
      systemResources: 0.1
    };
    
    this.initializeEngine();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`);
  }

  initializeEngine() {
    try {
      // Load historical data
      this.loadHistoricalData();
      
      // Initialize prediction models
      this.initializePredictionModels();
      
      this.log('✅ Performance prediction engine initialized');
    } catch (error) {
      this.log(`❌ Engine initialization failed: ${error.message}`, 'error');
    }
  }

  loadHistoricalData() {
    try {
      const historyFile = '.build-history.json';
      if (fs.existsSync(historyFile)) {
        const historyData = JSON.parse(fs.readFileSync(historyFile, 'utf8'));
        this.historicalData = historyData.builds || [];
        this.log(`📊 Loaded ${this.historicalData.length} historical build records`);
      }
    } catch (error) {
      this.log(`⚠️  Could not load historical data: ${error.message}`, 'warning');
    }
  }

  initializePredictionModels() {
    try {
      if (this.historicalData.length < 10) {
        this.log('ℹ️  Insufficient historical data for advanced models, using basic prediction');
        return;
      }
      
      // Initialize build time prediction model
      this.predictionModels.buildTime = this.createBuildTimeModel();
      
      // Initialize memory usage prediction model
      this.predictionModels.memoryUsage = this.createMemoryUsageModel();
      
      // Initialize CPU usage prediction model
      this.predictionModels.cpuUsage = this.createCPUUsageModel();
      
      // Initialize cache efficiency prediction model
      this.predictionModels.cacheEfficiency = this.createCacheEfficiencyModel();
      
      this.log('🤖 Prediction models initialized successfully');
      
    } catch (error) {
      this.log(`⚠️  Could not initialize prediction models: ${error.message}`, 'warning');
    }
  }

  createBuildTimeModel() {
    try {
      const buildTimes = this.historicalData
        .filter(record => record.buildTime && record.buildTime > 0)
        .map(record => ({
          buildTime: record.buildTime,
          features: this.extractFeatures(record)
        }));
      
      if (buildTimes.length < 5) {
        return null;
      }
      
      // Calculate baseline metrics
      const times = buildTimes.map(record => record.buildTime);
      const baseline = {
        min: Math.min(...times),
        max: Math.max(...times),
        average: times.reduce((a, b) => a + b, 0) / times.length,
        median: this.calculateMedian(times),
        standardDeviation: this.calculateStandardDeviation(times)
      };
      
      return {
        type: 'statistical',
        baseline,
        confidence: this.calculateModelConfidence(buildTimes),
        lastUpdated: Date.now()
      };
      
    } catch (error) {
      this.log(`⚠️  Could not create build time model: ${error.message}`, 'warning');
      return null;
    }
  }

  createMemoryUsageModel() {
    try {
      const memoryData = this.historicalData
        .filter(record => record.memoryUsage && record.memoryUsage.peak)
        .map(record => ({
          peakMemory: record.memoryUsage.peak,
          features: this.extractFeatures(record)
        }));
      
      if (memoryData.length < 5) {
        return null;
      }
      
      const peakMemory = memoryData.map(record => record.peakMemory);
      const baseline = {
        min: Math.min(...peakMemory),
        max: Math.max(...peakMemory),
        average: peakMemory.reduce((a, b) => a + b, 0) / peakMemory.length,
        median: this.calculateMedian(peakMemory)
      };
      
      return {
        type: 'statistical',
        baseline,
        confidence: this.calculateModelConfidence(memoryData),
        lastUpdated: Date.now()
      };
      
    } catch (error) {
      this.log(`⚠️  Could not create memory usage model: ${error.message}`, 'warning');
      return null;
    }
  }

  createCPUUsageModel() {
    try {
      const cpuData = this.historicalData
        .filter(record => record.cpuUsage && record.cpuUsage.average)
        .map(record => ({
          averageCPU: record.cpuUsage.average,
          features: this.extractFeatures(record)
        }));
      
      if (cpuData.length < 5) {
        return null;
      }
      
      const cpuUsage = cpuData.map(record => record.averageCPU);
      const baseline = {
        min: Math.min(...cpuUsage),
        max: Math.max(...cpuUsage),
        average: cpuUsage.reduce((a, b) => a + b, 0) / cpuUsage.length,
        median: this.calculateMedian(cpuUsage)
      };
      
      return {
        type: 'statistical',
        baseline,
        confidence: this.calculateModelConfidence(cpuData),
        lastUpdated: Date.now()
      };
      
    } catch (error) {
      this.log(`⚠️  Could not create CPU usage model: ${error.message}`, 'warning');
      return null;
    }
  }

  createCacheEfficiencyModel() {
    try {
      const cacheData = this.historicalData
        .filter(record => record.cacheEfficiency !== undefined)
        .map(record => ({
          cacheEfficiency: record.cacheEfficiency,
          features: this.extractFeatures(record)
        }));
      
      if (cacheData.length < 5) {
        return null;
      }
      
      const efficiency = cacheData.map(record => record.cacheEfficiency);
      const baseline = {
        min: Math.min(...efficiency),
        max: Math.max(...efficiency),
        average: efficiency.reduce((a, b) => a + b, 0) / efficiency.length,
        median: this.calculateMedian(efficiency)
      };
      
      return {
        type: 'statistical',
        baseline,
        confidence: this.calculateModelConfidence(cacheData),
        lastUpdated: Date.now()
      };
      
    } catch (error) {
      this.log(`⚠️  Could not create cache efficiency model: ${error.message}`, 'warning');
      return null;
    }
  }

  extractFeatures(record) {
    return {
      fileChanges: record.context?.fileChanges || 0,
      dependencyUpdates: record.context?.dependencyUpdates || 0,
      criticalChanges: record.context?.criticalChanges || 0,
      cacheHitRate: record.cacheHitRate || 0.5,
      systemResources: record.systemResources || 0.5
    };
  }

  calculateMedian(values) {
    const sorted = values.sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 === 0 ? 
      (sorted[mid - 1] + sorted[mid]) / 2 : sorted[mid];
  }

  calculateStandardDeviation(values) {
    const mean = values.reduce((a, b) => a + b, 0) / values.length;
    const squaredDiffs = values.map(value => Math.pow(value - mean, 2));
    const avgSquaredDiff = squaredDiffs.reduce((a, b) => a + b, 0) / values.length;
    return Math.sqrt(avgSquaredDiff);
  }

  calculateModelConfidence(data) {
    if (data.length < 10) {
      return 0.6; // Low confidence for small datasets
    } else if (data.length < 50) {
      return 0.8; // Medium confidence for moderate datasets
    } else {
      return 0.9; // High confidence for large datasets
    }
  }

  async predictBuildPerformance(buildContext) {
    this.log('🔮 Predicting build performance...');
    
    try {
      const predictions = {
        timestamp: new Date().toISOString(),
        context: buildContext,
        predictions: {},
        confidence: {},
        recommendations: []
      };
      
      // Predict build time
      predictions.predictions.buildTime = await this.predictBuildTime(buildContext);
      predictions.confidence.buildTime = this.getPredictionConfidence('buildTime');
      
      // Predict memory usage
      predictions.predictions.memoryUsage = await this.predictMemoryUsage(buildContext);
      predictions.confidence.memoryUsage = this.getPredictionConfidence('memoryUsage');
      
      // Predict CPU usage
      predictions.predictions.cpuUsage = await this.predictCPUUsage(buildContext);
      predictions.confidence.cpuUsage = this.getPredictionConfidence('cpuUsage');
      
      // Predict cache efficiency
      predictions.predictions.cacheEfficiency = await this.predictCacheEfficiency(buildContext);
      predictions.confidence.cacheEfficiency = this.getPredictionConfidence('cacheEfficiency');
      
      // Generate recommendations
      predictions.recommendations = this.generatePerformanceRecommendations(predictions);
      
      // Save predictions
      await this.savePredictions(predictions);
      
      this.log('✅ Performance predictions completed');
      
      return predictions;
      
    } catch (error) {
      this.log(`❌ Performance prediction failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async predictBuildTime(buildContext) {
    try {
      if (!this.predictionModels.buildTime) {
        return this.basicBuildTimePrediction(buildContext);
      }
      
      const model = this.predictionModels.buildTime;
      const features = this.extractFeaturesFromContext(buildContext);
      
      // Calculate predicted build time based on features
      let predictedTime = model.baseline.average;
      
      // Adjust based on file changes
      if (features.fileChanges > 50) {
        predictedTime *= 1.5; // 50% increase for large changes
      } else if (features.fileChanges > 20) {
        predictedTime *= 1.2; // 20% increase for moderate changes
      }
      
      // Adjust based on critical changes
      if (features.criticalChanges > 0) {
        predictedTime *= (1 + features.criticalChanges * 0.3); // 30% per critical change
      }
      
      // Adjust based on dependency updates
      if (features.dependencyUpdates > 5) {
        predictedTime *= 1.3; // 30% increase for many dependency updates
      }
      
      // Adjust based on cache efficiency
      if (features.cacheHitRate < 0.3) {
        predictedTime *= 1.4; // 40% increase for low cache hit rate
      }
      
      // Add confidence interval
      const confidenceInterval = model.baseline.standardDeviation * 2;
      
      return {
        predicted: Math.round(predictedTime),
        range: {
          min: Math.round(Math.max(0, predictedTime - confidenceInterval)),
          max: Math.round(predictedTime + confidenceInterval)
        },
        baseline: model.baseline,
        method: 'ml-model'
      };
      
    } catch (error) {
      this.log(`⚠️  ML build time prediction failed: ${error.message}`, 'warning');
      return this.basicBuildTimePrediction(buildContext);
    }
  }

  async predictMemoryUsage(buildContext) {
    try {
      if (!this.predictionModels.memoryUsage) {
        return this.basicMemoryUsagePrediction(buildContext);
      }
      
      const model = this.predictionModels.memoryUsage;
      const features = this.extractFeaturesFromContext(buildContext);
      
      // Calculate predicted memory usage
      let predictedMemory = model.baseline.average;
      
      // Adjust based on file changes
      if (features.fileChanges > 100) {
        predictedMemory *= 1.3; // 30% increase for very large changes
      } else if (features.fileChanges > 50) {
        predictedMemory *= 1.2; // 20% increase for large changes
      }
      
      // Adjust based on critical changes
      if (features.criticalChanges > 2) {
        predictedMemory *= 1.25; // 25% increase for multiple critical changes
      }
      
      return {
        predicted: Math.round(predictedMemory),
        range: {
          min: Math.round(model.baseline.min),
          max: Math.round(model.baseline.max)
        },
        baseline: model.baseline,
        method: 'ml-model'
      };
      
    } catch (error) {
      this.log(`⚠️  ML memory usage prediction failed: ${error.message}`, 'warning');
      return this.basicMemoryUsagePrediction(buildContext);
    }
  }

  async predictCPUUsage(buildContext) {
    try {
      if (!this.predictionModels.cpuUsage) {
        return this.basicCPUUsagePrediction(buildContext);
      }
      
      const model = this.predictionModels.cpuUsage;
      const features = this.extractFeaturesFromContext(buildContext);
      
      // Calculate predicted CPU usage
      let predictedCPU = model.baseline.average;
      
      // Adjust based on system resources
      if (features.systemResources < 0.3) {
        predictedCPU *= 1.2; // 20% increase for low resources
      }
      
      // Adjust based on file changes
      if (features.fileChanges > 50) {
        predictedCPU *= 1.1; // 10% increase for large changes
      }
      
      return {
        predicted: Math.round(predictedCPU * 100) / 100,
        range: {
          min: Math.round(model.baseline.min * 100) / 100,
          max: Math.round(model.baseline.max * 100) / 100
        },
        baseline: model.baseline,
        method: 'ml-model'
      };
      
    } catch (error) {
      this.log(`⚠️  ML CPU usage prediction failed: ${error.message}`, 'warning');
      return this.basicCPUUsagePrediction(buildContext);
    }
  }

  async predictCacheEfficiency(buildContext) {
    try {
      if (!this.predictionModels.cacheEfficiency) {
        return this.basicCacheEfficiencyPrediction(buildContext);
      }
      
      const model = this.predictionModels.cacheEfficiency;
      const features = this.extractFeaturesFromContext(buildContext);
      
      // Calculate predicted cache efficiency
      let predictedEfficiency = model.baseline.average;
      
      // Adjust based on file changes
      if (features.fileChanges > 50) {
        predictedEfficiency *= 0.8; // 20% decrease for large changes
      } else if (features.fileChanges < 10) {
        predictedEfficiency *= 1.1; // 10% increase for small changes
      }
      
      // Adjust based on dependency updates
      if (features.dependencyUpdates > 3) {
        predictedEfficiency *= 0.9; // 10% decrease for many dependency updates
      }
      
      return {
        predicted: Math.round(predictedEfficiency * 100) / 100,
        range: {
          min: Math.round(model.baseline.min * 100) / 100,
          max: Math.round(model.baseline.max * 100) / 100
        },
        baseline: model.baseline,
        method: 'ml-model'
      };
      
    } catch (error) {
      this.log(`⚠️  ML cache efficiency prediction failed: ${error.message}`, 'warning');
      return this.basicCacheEfficiencyPrediction(buildContext);
    }
  }

  // Basic prediction methods (fallback)
  basicBuildTimePrediction(buildContext) {
    const baseTime = 60000; // 1 minute base time
    let predictedTime = baseTime;
    
    // Adjust based on file changes
    predictedTime += buildContext.fileChanges * 1000; // 1 second per file
    
    // Adjust based on critical changes
    predictedTime += buildContext.criticalChanges * 30000; // 30 seconds per critical change
    
    // Adjust based on dependency updates
    predictedTime += buildContext.dependencyUpdates * 15000; // 15 seconds per dependency
    
    return {
      predicted: Math.round(predictedTime),
      range: {
        min: Math.round(predictedTime * 0.7),
        max: Math.round(predictedTime * 1.5)
      },
      method: 'basic-estimation'
    };
  }

  basicMemoryUsagePrediction(buildContext) {
    const baseMemory = 512; // 512MB base memory
    let predictedMemory = baseMemory;
    
    // Adjust based on file changes
    predictedMemory += buildContext.fileChanges * 2; // 2MB per file
    
    // Adjust based on critical changes
    predictedMemory += buildContext.criticalChanges * 100; // 100MB per critical change
    
    return {
      predicted: Math.round(predictedMemory),
      range: {
        min: Math.round(predictedMemory * 0.8),
        max: Math.round(predictedMemory * 1.3)
      },
      method: 'basic-estimation'
    };
  }

  basicCPUUsagePrediction(buildContext) {
    const baseCPU = 0.3; // 30% base CPU usage
    let predictedCPU = baseCPU;
    
    // Adjust based on file changes
    predictedCPU += buildContext.fileChanges * 0.01; // 1% per file
    
    // Adjust based on critical changes
    predictedCPU += buildContext.criticalChanges * 0.1; // 10% per critical change
    
    return {
      predicted: Math.round(predictedCPU * 100) / 100,
      range: {
        min: Math.round(Math.max(0.1, predictedCPU * 0.7) * 100) / 100,
        max: Math.round(Math.min(1.0, predictedCPU * 1.3) * 100) / 100
      },
      method: 'basic-estimation'
    };
  }

  basicCacheEfficiencyPrediction(buildContext) {
    let predictedEfficiency = 0.7; // 70% base efficiency
    
    // Adjust based on file changes
    if (buildContext.fileChanges > 50) {
      predictedEfficiency *= 0.8; // 20% decrease for large changes
    } else if (buildContext.fileChanges < 10) {
      predictedEfficiency *= 1.1; // 10% increase for small changes
    }
    
    // Adjust based on dependency updates
    if (buildContext.dependencyUpdates > 3) {
      predictedEfficiency *= 0.9; // 10% decrease for many updates
    }
    
    return {
      predicted: Math.round(predictedEfficiency * 100) / 100,
      range: {
        min: Math.round(Math.max(0.1, predictedEfficiency * 0.8) * 100) / 100,
        max: Math.round(Math.min(1.0, predictedEfficiency * 1.2) * 100) / 100
      },
      method: 'basic-estimation'
    };
  }

  extractFeaturesFromContext(buildContext) {
    return {
      fileChanges: buildContext.fileChanges || 0,
      dependencyUpdates: buildContext.dependencyUpdates || 0,
      criticalChanges: buildContext.criticalChanges || 0,
      cacheHitRate: buildContext.cacheHitRate || 0.5,
      systemResources: buildContext.availableResources ? buildContext.availableResources / 100 : 0.5
    };
  }

  getPredictionConfidence(modelType) {
    if (!this.predictionModels[modelType]) {
      return 0.5; // Low confidence for basic predictions
    }
    
    const model = this.predictionModels[modelType];
    return model.confidence || 0.8;
  }

  generatePerformanceRecommendations(predictions) {
    const recommendations = [];
    
    try {
      // Build time recommendations
      if (predictions.predictions.buildTime.predicted > 300000) { // 5 minutes
        recommendations.push({
          priority: 'medium',
          action: 'Consider breaking down changes into smaller commits',
          reason: 'Predicted build time is over 5 minutes'
        });
      }
      
      // Memory usage recommendations
      if (predictions.predictions.memoryUsage.predicted > 2048) { // 2GB
        recommendations.push({
          priority: 'high',
          action: 'Monitor memory usage closely during build',
          reason: 'Predicted memory usage is over 2GB'
        });
      }
      
      // Cache efficiency recommendations
      if (predictions.predictions.cacheEfficiency.predicted < 0.5) {
        recommendations.push({
          priority: 'medium',
          action: 'Optimize build caching strategy',
          reason: 'Predicted cache efficiency is below 50%'
        });
      }
      
      // CPU usage recommendations
      if (predictions.predictions.cpuUsage.predicted > 0.8) {
        recommendations.push({
          priority: 'low',
          action: 'Consider running build during off-peak hours',
          reason: 'Predicted CPU usage is over 80%'
        });
      }
      
      // Add general recommendations
      if (recommendations.length === 0) {
        recommendations.push({
          priority: 'low',
          action: 'Proceed with build as planned',
          reason: 'All performance predictions are within acceptable ranges'
        });
      }
      
    } catch (error) {
      this.log(`⚠️  Could not generate recommendations: ${error.message}`, 'warning');
    }
    
    return recommendations;
  }

  async savePredictions(predictions) {
    try {
      const predictionsFile = 'performance-predictions.json';
      fs.writeFileSync(predictionsFile, JSON.stringify(predictions, null, 2));
      this.log(`📄 Performance predictions saved to ${predictionsFile}`);
    } catch (error) {
      this.log(`⚠️  Could not save predictions: ${error.message}`, 'warning');
    }
  }

  // Model training and updates
  async updatePredictionModels(buildResult) {
    this.log('🔄 Updating prediction models with new data...');
    
    try {
      // Add new build result to historical data
      this.historicalData.push(buildResult);
      
      // Keep only last 1000 builds for memory management
      if (this.historicalData.length > 1000) {
        this.historicalData = this.historicalData.slice(-1000);
      }
      
      // Retrain models if enough new data
      if (this.shouldRetrainModels()) {
        this.initializePredictionModels();
        this.log('✅ Prediction models updated successfully');
      }
      
      // Save updated historical data
      await this.saveHistoricalData();
      
    } catch (error) {
      this.log(`⚠️  Could not update prediction models: ${error.message}`, 'warning');
    }
  }

  shouldRetrainModels() {
    // Retrain if we have at least 20 new builds since last training
    const lastTraining = Math.max(
      ...Object.values(this.predictionModels)
        .filter(model => model)
        .map(model => model.lastUpdated || 0)
    );
    
    const newBuilds = this.historicalData.filter(
      record => new Date(record.timestamp).getTime() > lastTraining
    ).length;
    
    return newBuilds >= 20;
  }

  async saveHistoricalData() {
    try {
      const historyFile = '.build-history.json';
      const historyData = {
        timestamp: new Date().toISOString(),
        builds: this.historicalData
      };
      
      fs.writeFileSync(historyFile, JSON.stringify(historyData, null, 2));
      this.log('💾 Historical data saved');
    } catch (error) {
      this.log(`⚠️  Could not save historical data: ${error.message}`, 'warning');
    }
  }

  // Analysis and reporting methods
  generatePerformanceReport() {
    const report = {
      timestamp: new Date().toISOString(),
      models: {},
      historicalData: {
        totalBuilds: this.historicalData.length,
        recentBuilds: this.historicalData.slice(-10).length,
        averageBuildTime: this.calculateAverageBuildTime(),
        averageMemoryUsage: this.calculateAverageMemoryUsage(),
        averageCPUUsage: this.calculateAverageCPUUsage(),
        averageCacheEfficiency: this.calculateAverageCacheEfficiency()
      },
      recommendations: []
    };
    
    // Add model information
    for (const [modelType, model] of Object.entries(this.predictionModels)) {
      if (model) {
        report.models[modelType] = {
          type: model.type,
          confidence: model.confidence,
          lastUpdated: model.lastUpdated,
          baseline: model.baseline
        };
      }
    }
    
    // Generate recommendations
    report.recommendations = this.generateSystemRecommendations();
    
    return report;
  }

  calculateAverageBuildTime() {
    const buildTimes = this.historicalData
      .filter(record => record.buildTime && record.buildTime > 0)
      .map(record => record.buildTime);
    
    return buildTimes.length > 0 ? 
      buildTimes.reduce((a, b) => a + b, 0) / buildTimes.length : 0;
  }

  calculateAverageMemoryUsage() {
    const memoryUsage = this.historicalData
      .filter(record => record.memoryUsage && record.memoryUsage.peak)
      .map(record => record.memoryUsage.peak);
    
    return memoryUsage.length > 0 ? 
      memoryUsage.reduce((a, b) => a + b, 0) / memoryUsage.length : 0;
  }

  calculateAverageCPUUsage() {
    const cpuUsage = this.historicalData
      .filter(record => record.cpuUsage && record.cpuUsage.average)
      .map(record => record.cpuUsage.average);
    
    return cpuUsage.length > 0 ? 
      cpuUsage.reduce((a, b) => a + b, 0) / cpuUsage.length : 0;
  }

  calculateAverageCacheEfficiency() {
    const cacheEfficiency = this.historicalData
      .filter(record => record.cacheEfficiency !== undefined)
      .map(record => record.cacheEfficiency);
    
    return cacheEfficiency.length > 0 ? 
      cacheEfficiency.reduce((a, b) => a + b, 0) / cacheEfficiency.length : 0;
  }

  generateSystemRecommendations() {
    const recommendations = [];
    
    try {
      // Model confidence recommendations
      for (const [modelType, model] of Object.entries(this.predictionModels)) {
        if (model && model.confidence < 0.7) {
          recommendations.push({
            priority: 'medium',
            action: `Collect more data for ${modelType} predictions`,
            reason: `Model confidence is below 70% (${(model.confidence * 100).toFixed(1)}%)`
          });
        }
      }
      
      // Historical data recommendations
      if (this.historicalData.length < 50) {
        recommendations.push({
          priority: 'medium',
          action: 'Continue collecting build data for better predictions',
          reason: 'Limited historical data available for analysis'
        });
      }
      
      // Performance trend recommendations
      const recentBuilds = this.historicalData.slice(-20);
      if (recentBuilds.length >= 10) {
        const recentAvgTime = this.calculateAverageBuildTime();
        const overallAvgTime = this.calculateAverageBuildTime();
        
        if (recentAvgTime > overallAvgTime * 1.2) {
          recommendations.push({
            priority: 'high',
            action: 'Investigate recent build time increases',
            reason: 'Recent builds are 20% slower than historical average'
          });
        }
      }
      
      // Add general recommendations
      if (recommendations.length === 0) {
        recommendations.push({
          priority: 'low',
          action: 'Continue monitoring build performance',
          reason: 'All systems performing within expected ranges'
        });
      }
      
    } catch (error) {
      this.log(`⚠️  Could not generate system recommendations: ${error.message}`, 'warning');
    }
    
    return recommendations;
  }

  // Main execution method
  async runPerformancePrediction(buildContext) {
    this.log('🚀 Starting performance prediction engine...');
    
    try {
      // Generate performance predictions
      const predictions = await this.predictBuildPerformance(buildContext);
      
      // Generate performance report
      const report = this.generatePerformanceReport();
      
      // Save report
      await this.savePerformanceReport(report);
      
      // Print summary
      this.printPredictionSummary(predictions);
      
      this.log('✅ Performance prediction engine completed successfully');
      
      return {
        predictions,
        report
      };
      
    } catch (error) {
      this.log(`💥 Performance prediction failed: ${error.message}`, 'error');
      throw error;
    }
  }

  async savePerformanceReport(report) {
    try {
      const reportFile = 'performance-prediction-report.json';
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      this.log(`📄 Performance report saved to ${reportFile}`);
    } catch (error) {
      this.log(`⚠️  Could not save performance report: ${error.message}`, 'warning');
    }
  }

  printPredictionSummary(predictions) {
    console.log('\n' + '='.repeat(70));
    console.log('🔮 PERFORMANCE PREDICTION SUMMARY');
    console.log('='.repeat(70));
    
    console.log('\n⏱️  BUILD TIME:');
    const buildTime = predictions.predictions.buildTime;
    console.log(`  Predicted: ${(buildTime.predicted / 1000).toFixed(1)}s`);
    console.log(`  Range: ${(buildTime.range.min / 1000).toFixed(1)}s - ${(buildTime.range.max / 1000).toFixed(1)}s`);
    console.log(`  Confidence: ${(predictions.confidence.buildTime * 100).toFixed(1)}%`);
    console.log(`  Method: ${buildTime.method}`);
    
    console.log('\n🧠 MEMORY USAGE:');
    const memory = predictions.predictions.memoryUsage;
    console.log(`  Predicted: ${memory.predicted}MB`);
    console.log(`  Range: ${memory.range.min}MB - ${memory.range.max}MB`);
    console.log(`  Confidence: ${(predictions.confidence.memoryUsage * 100).toFixed(1)}%`);
    console.log(`  Method: ${memory.method}`);
    
    console.log('\n💻 CPU USAGE:');
    const cpu = predictions.predictions.cpuUsage;
    console.log(`  Predicted: ${(cpu.predicted * 100).toFixed(1)}%`);
    console.log(`  Range: ${(cpu.range.min * 100).toFixed(1)}% - ${(cpu.range.max * 100).toFixed(1)}%`);
    console.log(`  Confidence: ${(predictions.confidence.cpuUsage * 100).toFixed(1)}%`);
    console.log(`  Method: ${cpu.method}`);
    
    console.log('\n💾 CACHE EFFICIENCY:');
    const cache = predictions.predictions.cacheEfficiency;
    console.log(`  Predicted: ${(cache.predicted * 100).toFixed(1)}%`);
    console.log(`  Range: ${(cache.range.min * 100).toFixed(1)}% - ${(cache.range.max * 100).toFixed(1)}%`);
    console.log(`  Confidence: ${(predictions.confidence.cacheEfficiency * 100).toFixed(1)}%`);
    console.log(`  Method: ${cache.method}`);
    
    if (predictions.recommendations.length > 0) {
      console.log('\n💡 RECOMMENDATIONS:');
      predictions.recommendations.forEach((rec, index) => {
        console.log(`  ${index + 1}. [${rec.priority.toUpperCase()}] ${rec.action}`);
        console.log(`     Reason: ${rec.reason}`);
      });
    }
    
    console.log('\n' + '='.repeat(70));
  }
}

// Run if called directly
if (require.main === module) {
  const engine = new PerformancePredictionEngine();
  
  // Example build context
  const buildContext = {
    fileChanges: 30,
    dependencyUpdates: 2,
    criticalChanges: 1,
    cacheHitRate: 0.6,
    availableResources: 85
  };
  
  engine.runPerformancePrediction(buildContext)
    .then(result => {
      console.log('Performance Prediction Result:', JSON.stringify(result, null, 2));
    })
    .catch(error => {
      console.error('Performance Prediction failed:', error);
      process.exit(1);
    });
}

module.exports = PerformancePredictionEngine;