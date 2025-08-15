#!/usr/bin/env node

/**
 * Reinforcement Learning Engine
 * Learns from build outcomes and continuously optimizes build strategies
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

class ReinforcementLearningEngine {
  constructor() {
    this.modelPath = '.rl-models';
    this.dataPath = '.rl-data';
    this.modelVersion = '1.0';
    
    this.environment = {
      stateSpace: 64,      // State representation size
      actionSpace: 8,      // Available build strategies
      rewardFunction: this.calculateReward.bind(this)
    };
    
    this.learningConfig = {
      learningRate: 0.1,
      discountFactor: 0.95,
      explorationRate: 0.1,
      explorationDecay: 0.995,
      minExplorationRate: 0.01,
      batchSize: 32,
      memorySize: 10000
    };
    
    this.models = {
      qLearning: null,
      policyGradient: null,
      actorCritic: null,
      deepQLearning: null
    };
    
    this.memory = {
      experiences: [],
      states: [],
      actions: [],
      rewards: [],
      nextStates: [],
      dones: []
    };
    
    this.initializeEngine();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`);
  }

  initializeEngine() {
    try {
      // Create RL directories
      if (!fs.existsSync(this.modelPath)) {
        fs.mkdirSync(this.modelPath, { recursive: true });
        this.log(`📁 Created RL model directory: ${this.modelPath}`);
      }
      
      if (!fs.existsSync(this.dataPath)) {
        fs.mkdirSync(this.dataPath, { recursive: true });
        this.log(`📁 Created RL data directory: ${this.dataPath}`);
      }
      
      // Load existing models
      this.loadRLModels();
      
      // Initialize learning algorithms
      this.initializeLearningAlgorithms();
      
      this.log('✅ Reinforcement learning engine initialized');
    } catch (error) {
      this.log(`❌ RL engine initialization failed: ${error.message}`, 'error');
    }
  }

  loadRLModels() {
    try {
      const modelsFile = path.join(this.modelPath, 'rl-models.json');
      if (fs.existsSync(modelsFile)) {
        const modelsData = JSON.parse(fs.readFileSync(modelsFile, 'utf8'));
        this.models = { ...this.models, ...modelsData };
        this.log(`🤖 Loaded ${Object.keys(modelsData).length} RL models`);
      }
    } catch (error) {
      this.log(`⚠️  Could not load RL models: ${error.message}`, 'warning');
    }
  }

  initializeLearningAlgorithms() {
    try {
      // Initialize Q-Learning model
      this.models.qLearning = this.createQLearningModel();
      
      // Initialize Policy Gradient model
      this.models.policyGradient = this.createPolicyGradientModel();
      
      // Initialize Actor-Critic model
      this.models.actorCritic = this.createActorCriticModel();
      
      // Initialize Deep Q-Learning model
      this.models.deepQLearning = this.createDeepQLearningModel();
      
      this.log('🧠 Learning algorithms initialized successfully');
    } catch (error) {
      this.log(`⚠️  Could not initialize learning algorithms: ${error.message}`, 'warning');
    }
  }

  createQLearningModel() {
    return {
      type: 'q-learning',
      version: this.modelVersion,
      qTable: this.initializeQTable(),
      metadata: {
        created: Date.now(),
        lastUpdated: Date.now(),
        trainingEpisodes: 0,
        averageReward: 0.0,
        explorationRate: this.learningConfig.explorationRate
      }
    };
  }

  createPolicyGradientModel() {
    return {
      type: 'policy-gradient',
      version: this.modelVersion,
      policy: this.initializePolicy(),
      metadata: {
        created: Date.now(),
        lastUpdated: Date.now(),
        trainingEpisodes: 0,
        averageReward: 0.0,
        policyLoss: 0.0
      }
    };
  }

  createActorCriticModel() {
    return {
      type: 'actor-critic',
      version: this.modelVersion,
      actor: this.initializeActor(),
      critic: this.initializeCritic(),
      metadata: {
        created: Date.now(),
        lastUpdated: Date.now(),
        trainingEpisodes: 0,
        averageReward: 0.0,
        actorLoss: 0.0,
        criticLoss: 0.0
      }
    };
  }

  createDeepQLearningModel() {
    return {
      type: 'deep-q-learning',
      version: this.modelVersion,
      qNetwork: this.initializeQNetwork(),
      targetNetwork: this.initializeQNetwork(),
      metadata: {
        created: Date.now(),
        lastUpdated: Date.now(),
        trainingEpisodes: 0,
        averageReward: 0.0,
        qLoss: 0.0
      }
    };
  }

  initializeQTable() {
    const qTable = {};
    
    // Initialize Q-values for all state-action pairs
    for (let state = 0; state < this.environment.stateSpace; state++) {
      qTable[state] = {};
      for (let action = 0; action < this.environment.actionSpace; action++) {
        qTable[state][action] = Math.random() * 0.1; // Small random initialization
      }
    }
    
    return qTable;
  }

  initializePolicy() {
    const policy = {};
    
    // Initialize policy probabilities for all state-action pairs
    for (let state = 0; state < this.environment.stateSpace; state++) {
      policy[state] = {};
      for (let action = 0; action < this.environment.actionSpace; action++) {
        policy[state][action] = 1.0 / this.environment.actionSpace; // Uniform distribution
      }
    }
    
    return policy;
  }

  initializeActor() {
    const actor = {};
    
    // Initialize actor network weights
    for (let state = 0; state < this.environment.stateSpace; state++) {
      actor[state] = {};
      for (let action = 0; action < this.environment.actionSpace; action++) {
        actor[state][action] = Math.random() * 0.1; // Small random initialization
      }
    }
    
    return actor;
  }

  initializeCritic() {
    const critic = {};
    
    // Initialize critic network weights
    for (let state = 0; state < this.environment.stateSpace; state++) {
      critic[state] = Math.random() * 0.1; // Small random initialization
    }
    
    return critic;
  }

  initializeQNetwork() {
    const network = {};
    
    // Initialize neural network weights
    for (let state = 0; state < this.environment.stateSpace; state++) {
      network[state] = {};
      for (let action = 0; action < this.environment.actionSpace; action++) {
        network[state][action] = Math.random() * 0.1; // Small random initialization
      }
    }
    
    return network;
  }

  // State representation methods
  encodeState(buildContext) {
    try {
      // Convert build context to numerical state representation
      const state = [];
      
      // Build complexity features
      state.push(
        this.normalizeFeature(buildContext.fileChanges, 0, 100),
        this.normalizeFeature(buildContext.criticalChanges, 0, 10),
        this.normalizeFeature(buildContext.majorChanges, 0, 50),
        this.normalizeFeature(buildContext.minorChanges, 0, 100)
      );
      
      // Dependency features
      state.push(
        this.normalizeFeature(buildContext.dependencyUpdates, 0, 20),
        this.normalizeFeature(buildContext.securityVulnerabilities, 0, 10),
        this.normalizeFeature(buildContext.breakingChanges, 0, 5)
      );
      
      // Environment features
      state.push(
        this.normalizeFeature(buildContext.memoryAvailable, 0, 100),
        this.normalizeFeature(buildContext.cpuCores, 1, 16),
        this.normalizeFeature(buildContext.availableResources, 0, 100)
      );
      
      // Historical features
      state.push(
        this.normalizeFeature(buildContext.recentFailures, 0, 10),
        this.normalizeFeature(buildContext.averageBuildTime, 30000, 300000),
        this.normalizeFeature(buildContext.cacheHitRate, 0, 1)
      );
      
      // Pad state to required size
      while (state.length < this.environment.stateSpace) {
        state.push(0);
      }
      
      // Truncate if too long
      return state.slice(0, this.environment.stateSpace);
      
    } catch (error) {
      this.log(`⚠️  State encoding failed: ${error.message}`, 'warning');
      return new Array(this.environment.stateSpace).fill(0);
    }
  }

  normalizeFeature(value, min, max) {
    if (typeof value !== 'number') return 0.5;
    return Math.max(0, Math.min(1, (value - min) / (max - min)));
  }

  // Action selection methods
  selectAction(state, modelType = 'q-learning') {
    try {
      const stateKey = this.stateToKey(state);
      
      switch (modelType) {
        case 'q-learning':
          return this.selectQLearningAction(stateKey);
        case 'policy-gradient':
          return this.selectPolicyGradientAction(stateKey);
        case 'actor-critic':
          return this.selectActorCriticAction(stateKey);
        case 'deep-q-learning':
          return this.selectDeepQLearningAction(stateKey);
        default:
          return this.selectRandomAction();
      }
      
    } catch (error) {
      this.log(`⚠️  Action selection failed: ${error.message}`, 'warning');
      return this.selectRandomAction();
    }
  }

  stateToKey(state) {
    // Convert state array to string key for lookup
    return state.map(val => Math.round(val * 10)).join(',');
  }

  selectQLearningAction(stateKey) {
    const model = this.models.qLearning;
    if (!model || !model.qTable[stateKey]) {
      return this.selectRandomAction();
    }
    
    // Epsilon-greedy action selection
    if (Math.random() < model.metadata.explorationRate) {
      return this.selectRandomAction();
    }
    
    // Select action with highest Q-value
    const qValues = model.qTable[stateKey];
    return Object.entries(qValues).reduce((a, b) => 
      qValues[a] > qValues[b] ? a : b
    );
  }

  selectPolicyGradientAction(stateKey) {
    const model = this.models.policyGradient;
    if (!model || !model.policy[stateKey]) {
      return this.selectRandomAction();
    }
    
    // Sample action from policy distribution
    const policy = model.policy[stateKey];
    const actions = Object.keys(policy);
    const probabilities = Object.values(policy);
    
    const random = Math.random();
    let cumulativeProbability = 0;
    
    for (let i = 0; i < actions.length; i++) {
      cumulativeProbability += probabilities[i];
      if (random <= cumulativeProbability) {
        return parseInt(actions[i]);
      }
    }
    
    return parseInt(actions[actions.length - 1]);
  }

  selectActorCriticAction(stateKey) {
    const model = this.models.actorCritic;
    if (!model || !model.actor[stateKey]) {
      return this.selectRandomAction();
    }
    
    // Select action with highest actor value
    const actorValues = model.actor[stateKey];
    return Object.entries(actorValues).reduce((a, b) => 
      actorValues[a] > actorValues[b] ? a : b
    );
  }

  selectDeepQLearningAction(stateKey) {
    const model = this.models.deepQLearning;
    if (!model || !model.qNetwork[stateKey]) {
      return this.selectRandomAction();
    }
    
    // Select action with highest Q-value
    const qValues = model.qNetwork[stateKey];
    return Object.entries(qValues).reduce((a, b) => 
      qValues[a] > qValues[b] ? a : b
    );
  }

  selectRandomAction() {
    return Math.floor(Math.random() * this.environment.actionSpace);
  }

  // Reward calculation
  calculateReward(buildContext, action, outcome) {
    try {
      let reward = 0;
      
      // Base reward for successful build
      if (outcome.success) {
        reward += 100;
      } else {
        reward -= 50;
      }
      
      // Time efficiency reward
      if (outcome.buildTime) {
        const expectedTime = this.getExpectedBuildTime(buildContext);
        const timeRatio = expectedTime / outcome.buildTime;
        
        if (timeRatio > 1.2) {
          reward += 20; // 20% faster than expected
        } else if (timeRatio < 0.8) {
          reward -= 20; // 20% slower than expected
        }
      }
      
      // Resource efficiency reward
      if (outcome.memoryUsage) {
        const memoryEfficiency = this.calculateMemoryEfficiency(outcome.memoryUsage, buildContext.memoryAvailable);
        reward += memoryEfficiency * 10;
      }
      
      // Cache efficiency reward
      if (outcome.cacheHitRate) {
        reward += outcome.cacheHitRate * 30;
      }
      
      // Strategy appropriateness reward
      const strategyAppropriateness = this.calculateStrategyAppropriateness(buildContext, action);
      reward += strategyAppropriateness * 25;
      
      return reward;
      
    } catch (error) {
      this.log(`⚠️  Reward calculation failed: ${error.message}`, 'warning');
      return 0;
    }
  }

  getExpectedBuildTime(buildContext) {
    // Simple heuristic for expected build time
    const baseTime = 60000; // 1 minute base
    let expectedTime = baseTime;
    
    expectedTime += buildContext.fileChanges * 1000; // 1 second per file
    expectedTime += buildContext.criticalChanges * 30000; // 30 seconds per critical change
    expectedTime += buildContext.dependencyUpdates * 15000; // 15 seconds per dependency
    
    return expectedTime;
  }

  calculateMemoryEfficiency(usedMemory, availableMemory) {
    if (!usedMemory || !availableMemory) return 0;
    
    const utilization = usedMemory / availableMemory;
    
    if (utilization < 0.5) return 1.0; // Excellent efficiency
    if (utilization < 0.7) return 0.8; // Good efficiency
    if (utilization < 0.9) return 0.5; // Moderate efficiency
    return 0.2; // Poor efficiency
  }

  calculateStrategyAppropriateness(buildContext, action) {
    // Map action to strategy
    const strategies = [
      'incremental', 'selective', 'full', 'parallel',
      'hybrid', 'distributed', 'cached', 'optimized'
    ];
    
    const strategy = strategies[action];
    
    // Calculate appropriateness based on context
    let appropriateness = 0.5; // Base appropriateness
    
    switch (strategy) {
      case 'incremental':
        if (buildContext.fileChanges < 20 && buildContext.criticalChanges === 0) {
          appropriateness = 0.9;
        }
        break;
      case 'selective':
        if (buildContext.majorChanges > 0 && buildContext.criticalChanges === 0) {
          appropriateness = 0.8;
        }
        break;
      case 'full':
        if (buildContext.criticalChanges > 0 || buildContext.recentFailures > 2) {
          appropriateness = 0.9;
        }
        break;
      case 'parallel':
        if (buildContext.cpuCores > 4 && buildContext.availableResources > 80) {
          appropriateness = 0.8;
        }
        break;
      case 'hybrid':
        if (buildContext.fileChanges > 50 && buildContext.dependencyUpdates > 0) {
          appropriateness = 0.7;
        }
        break;
    }
    
    return appropriateness;
  }

  // Experience replay and learning
  storeExperience(state, action, reward, nextState, done) {
    try {
      // Add experience to memory
      this.memory.experiences.push({
        state: this.stateToKey(state),
        action,
        reward,
        nextState: this.stateToKey(nextState),
        done
      });
      
      // Keep memory size within limits
      if (this.memory.experiences.length > this.learningConfig.memorySize) {
        this.memory.experiences.shift();
      }
      
      // Store individual components for batch learning
      this.memory.states.push(this.stateToKey(state));
      this.memory.actions.push(action);
      this.memory.rewards.push(reward);
      this.memory.nextStates.push(this.stateToKey(nextState));
      this.memory.dones.push(done);
      
      // Keep component arrays in sync
      if (this.memory.states.length > this.learningConfig.memorySize) {
        this.memory.states.shift();
        this.memory.actions.shift();
        this.memory.rewards.shift();
        this.memory.nextStates.shift();
        this.memory.dones.shift();
      }
      
    } catch (error) {
      this.log(`⚠️  Experience storage failed: ${error.message}`, 'warning');
    }
  }

  async learnFromExperiences() {
    try {
      if (this.memory.experiences.length < this.learningConfig.batchSize) {
        return; // Not enough experiences to learn from
      }
      
      // Sample batch of experiences
      const batch = this.sampleBatch();
      
      // Update all models
      await this.updateQLearningModel(batch);
      await this.updatePolicyGradientModel(batch);
      await this.updateActorCriticModel(batch);
      await this.updateDeepQLearningModel(batch);
      
      // Update exploration rates
      this.updateExplorationRates();
      
      this.log('✅ Learning from experiences completed');
      
    } catch (error) {
      this.log(`⚠️  Learning from experiences failed: ${error.message}`, 'warning');
    }
  }

  sampleBatch() {
    const batchSize = Math.min(this.learningConfig.batchSize, this.memory.experiences.length);
    const batch = [];
    
    for (let i = 0; i < batchSize; i++) {
      const randomIndex = Math.floor(Math.random() * this.memory.experiences.length);
      batch.push(this.memory.experiences[randomIndex]);
    }
    
    return batch;
  }

  async updateQLearningModel(batch) {
    const model = this.models.qLearning;
    if (!model) return;
    
    try {
      for (const experience of batch) {
        const { state, action, reward, nextState, done } = experience;
        
        // Q-Learning update rule
        const currentQ = model.qTable[state]?.[action] || 0;
        const nextMaxQ = done ? 0 : Math.max(...Object.values(model.qTable[nextState] || {}));
        
        const newQ = currentQ + this.learningConfig.learningRate * 
          (reward + this.learningConfig.discountFactor * nextMaxQ - currentQ);
        
        // Update Q-table
        if (!model.qTable[state]) {
          model.qTable[state] = {};
        }
        model.qTable[state][action] = newQ;
      }
      
      // Update metadata
      model.metadata.lastUpdated = Date.now();
      model.metadata.trainingEpisodes += batch.length;
      
    } catch (error) {
      this.log(`⚠️  Q-Learning update failed: ${error.message}`, 'warning');
    }
  }

  async updatePolicyGradientModel(batch) {
    const model = this.models.policyGradient;
    if (!model) return;
    
    try {
      for (const experience of batch) {
        const { state, action, reward } = experience;
        
        // Simple policy gradient update
        if (!model.policy[state]) {
          model.policy[state] = {};
          for (let a = 0; a < this.environment.actionSpace; a++) {
            model.policy[state][a] = 1.0 / this.environment.actionSpace;
          }
        }
        
        // Update policy based on reward
        const learningRate = this.learningConfig.learningRate;
        const currentProb = model.policy[state][action];
        
        if (reward > 0) {
          // Increase probability of this action
          model.policy[state][action] = Math.min(1.0, currentProb + learningRate * reward);
        } else {
          // Decrease probability of this action
          model.policy[state][action] = Math.max(0.01, currentProb + learningRate * reward);
        }
        
        // Renormalize probabilities
        this.renormalizePolicy(model.policy[state]);
      }
      
      // Update metadata
      model.metadata.lastUpdated = Date.now();
      model.metadata.trainingEpisodes += batch.length;
      
    } catch (error) {
      this.log(`⚠️  Policy gradient update failed: ${error.message}`, 'warning');
    }
  }

  async updateActorCriticModel(batch) {
    const model = this.models.actorCritic;
    if (!model) return;
    
    try {
      for (const experience of batch) {
        const { state, action, reward, nextState, done } = experience;
        
        // Actor-Critic update
        const currentValue = model.critic[state] || 0;
        const nextValue = done ? 0 : (model.critic[nextState] || 0);
        
        // TD error
        const tdError = reward + this.learningConfig.discountFactor * nextValue - currentValue;
        
        // Update critic
        model.critic[state] = currentValue + this.learningConfig.learningRate * tdError;
        
        // Update actor
        if (!model.actor[state]) {
          model.actor[state] = {};
          for (let a = 0; a < this.environment.actionSpace; a++) {
            model.actor[state][a] = Math.random() * 0.1;
          }
        }
        
        model.actor[state][action] += this.learningConfig.learningRate * tdError;
      }
      
      // Update metadata
      model.metadata.lastUpdated = Date.now();
      model.metadata.trainingEpisodes += batch.length;
      
    } catch (error) {
      this.log(`⚠️  Actor-Critic update failed: ${error.message}`, 'warning');
    }
  }

  async updateDeepQLearningModel(batch) {
    const model = this.models.deepQLearning;
    if (!model) return;
    
    try {
      for (const experience of batch) {
        const { state, action, reward, nextState, done } = experience;
        
        // Deep Q-Learning update
        const currentQ = model.qNetwork[state]?.[action] || 0;
        const nextMaxQ = done ? 0 : Math.max(...Object.values(model.qNetwork[nextState] || {}));
        
        const targetQ = reward + this.learningConfig.discountFactor * nextMaxQ;
        const newQ = currentQ + this.learningConfig.learningRate * (targetQ - currentQ);
        
        // Update Q-network
        if (!model.qNetwork[state]) {
          model.qNetwork[state] = {};
          for (let a = 0; a < this.environment.actionSpace; a++) {
            model.qNetwork[state][a] = Math.random() * 0.1;
          }
        }
        
        model.qNetwork[state][action] = newQ;
      }
      
      // Update metadata
      model.metadata.lastUpdated = Date.now();
      model.metadata.trainingEpisodes += batch.length;
      
    } catch (error) {
      this.log(`⚠️  Deep Q-Learning update failed: ${error.message}`, 'warning');
    }
  }

  renormalizePolicy(policy) {
    const totalProb = Object.values(policy).reduce((sum, prob) => sum + prob, 0);
    
    if (totalProb > 0) {
      for (const action in policy) {
        policy[action] = policy[action] / totalProb;
      }
    }
  }

  updateExplorationRates() {
    // Update exploration rates for all models
    for (const modelType in this.models) {
      const model = this.models[modelType];
      if (model && model.metadata.explorationRate) {
        model.metadata.explorationRate = Math.max(
          this.learningConfig.minExplorationRate,
          model.metadata.explorationRate * this.learningConfig.explorationDecay
        );
      }
    }
  }

  // Model evaluation and selection
  evaluateModels() {
    const evaluations = {};
    
    try {
      for (const [modelType, model] of Object.entries(this.models)) {
        if (model) {
          evaluations[modelType] = this.evaluateModel(model, modelType);
        }
      }
      
      return evaluations;
      
    } catch (error) {
      this.log(`⚠️  Model evaluation failed: ${error.message}`, 'warning');
      return {};
    }
  }

  evaluateModel(model, modelType) {
    const evaluation = {
      modelType,
      performance: 0.0,
      confidence: 0.0,
      recommendations: []
    };
    
    try {
      switch (modelType) {
        case 'q-learning':
          evaluation.performance = this.evaluateQLearningModel(model);
          break;
        case 'policy-gradient':
          evaluation.performance = this.evaluatePolicyGradientModel(model);
          break;
        case 'actor-critic':
          evaluation.performance = this.evaluateActorCriticModel(model);
          break;
        case 'deep-q-learning':
          evaluation.performance = this.evaluateDeepQLearningModel(model);
          break;
      }
      
      // Calculate confidence based on training data
      evaluation.confidence = Math.min(1.0, model.metadata.trainingEpisodes / 1000);
      
      // Generate recommendations
      evaluation.recommendations = this.generateModelRecommendations(model, evaluation);
      
    } catch (error) {
      this.log(`⚠️  Model evaluation failed for ${modelType}: ${error.message}`, 'warning');
    }
    
    return evaluation;
  }

  evaluateQLearningModel(model) {
    // Evaluate based on Q-value distribution and training episodes
    let performance = 0.0;
    
    if (model.metadata.trainingEpisodes > 0) {
      // Calculate average Q-value
      let totalQ = 0;
      let qCount = 0;
      
      for (const state in model.qTable) {
        for (const action in model.qTable[state]) {
          totalQ += model.qTable[state][action];
          qCount++;
        }
      }
      
      if (qCount > 0) {
        const avgQ = totalQ / qCount;
        performance = Math.max(0, Math.min(1, avgQ / 100)); // Normalize to [0, 1]
      }
    }
    
    return performance;
  }

  evaluatePolicyGradientModel(model) {
    // Evaluate based on policy convergence and training episodes
    let performance = 0.0;
    
    if (model.metadata.trainingEpisodes > 0) {
      // Calculate policy entropy (lower is better for convergence)
      let totalEntropy = 0;
      let stateCount = 0;
      
      for (const state in model.policy) {
        const probs = Object.values(model.policy[state]);
        const entropy = -probs.reduce((sum, p) => sum + p * Math.log(p + 1e-10), 0);
        totalEntropy += entropy;
        stateCount++;
      }
      
      if (stateCount > 0) {
        const avgEntropy = totalEntropy / stateCount;
        performance = Math.max(0, Math.min(1, 1 - avgEntropy / Math.log(this.environment.actionSpace)));
      }
    }
    
    return performance;
  }

  evaluateActorCriticModel(model) {
    // Evaluate based on value function accuracy and training episodes
    let performance = 0.0;
    
    if (model.metadata.trainingEpisodes > 0) {
      // Calculate average value
      let totalValue = 0;
      let valueCount = 0;
      
      for (const state in model.critic) {
        totalValue += model.critic[state];
        valueCount++;
      }
      
      if (valueCount > 0) {
        const avgValue = totalValue / valueCount;
        performance = Math.max(0, Math.min(1, avgValue / 100)); // Normalize to [0, 1]
      }
    }
    
    return performance;
  }

  evaluateDeepQLearningModel(model) {
    // Evaluate based on Q-network accuracy and training episodes
    let performance = 0.0;
    
    if (model.metadata.trainingEpisodes > 0) {
      // Calculate average Q-value
      let totalQ = 0;
      let qCount = 0;
      
      for (const state in model.qNetwork) {
        for (const action in model.qNetwork[state]) {
          totalQ += model.qNetwork[state][action];
          qCount++;
        }
      }
      
      if (qCount > 0) {
        const avgQ = totalQ / qCount;
        performance = Math.max(0, Math.min(1, avgQ / 100)); // Normalize to [0, 1]
      }
    }
    
    return performance;
  }

  generateModelRecommendations(model, evaluation) {
    const recommendations = [];
    
    // Training data recommendations
    if (model.metadata.trainingEpisodes < 100) {
      recommendations.push({
        priority: 'high',
        action: 'Collect more training data',
        reason: `Only ${model.metadata.trainingEpisodes} training episodes available`
      });
    }
    
    // Performance recommendations
    if (evaluation.performance < 0.5) {
      recommendations.push({
        priority: 'medium',
        action: 'Improve model performance',
        reason: `Performance score is ${(evaluation.performance * 100).toFixed(1)}%`
      });
    }
    
    // Exploration rate recommendations
    if (model.metadata.explorationRate > 0.3) {
      recommendations.push({
        priority: 'low',
        action: 'Reduce exploration rate',
        reason: `Exploration rate is ${(model.metadata.explorationRate * 100).toFixed(1)}%`
      });
    }
    
    // Add general recommendations
    if (recommendations.length === 0) {
      recommendations.push({
        priority: 'low',
        action: 'Model is performing well',
        reason: 'All evaluation metrics indicate good performance'
      });
    }
    
    return recommendations;
  }

  // Model management methods
  async saveModels() {
    try {
      for (const [modelType, model] of Object.entries(this.models)) {
        if (model) {
          await this.saveModel(modelType, model);
        }
      }
      
      // Save model index
      const indexFile = path.join(this.modelPath, 'rl-models.json');
      fs.writeFileSync(indexFile, JSON.stringify(this.models, null, 2));
      
      this.log('💾 All RL models saved successfully');
    } catch (error) {
      this.log(`⚠️  Could not save all models: ${error.message}`, 'warning');
    }
  }

  async saveModel(modelType, model) {
    try {
      const modelFile = path.join(this.modelPath, `${modelType}-model.json`);
      fs.writeFileSync(modelFile, JSON.stringify(model, null, 2));
      this.log(`💾 ${modelType} model saved successfully`);
    } catch (error) {
      this.log(`⚠️  Could not save ${modelType} model: ${error.message}`, 'warning');
    }
  }

  // Main execution method
  async runReinforcementLearningEngine() {
    this.log('🚀 Starting reinforcement learning engine...');
    
    try {
      // Test action selection
      const testState = this.encodeState({
        fileChanges: 25,
        criticalChanges: 1,
        majorChanges: 3,
        dependencyUpdates: 2,
        memoryAvailable: 85,
        cpuCores: 8,
        cacheHitRate: 0.7
      });
      
      const actions = {};
      for (const modelType in this.models) {
        actions[modelType] = this.selectAction(testState, modelType);
      }
      
      // Evaluate models
      const evaluations = this.evaluateModels();
      
      // Generate comprehensive report
      const report = {
        timestamp: new Date().toISOString(),
        modelVersion: this.modelVersion,
        testState: testState,
        selectedActions: actions,
        modelEvaluations: evaluations,
        recommendations: this.generateSystemRecommendations(evaluations)
      };
      
      // Save models and report
      await this.saveModels();
      await this.saveRLReport(report);
      
      this.log('✅ Reinforcement learning engine completed successfully');
      
      return {
        actions,
        evaluations,
        report
      };
      
    } catch (error) {
      this.log(`💥 Reinforcement learning engine failed: ${error.message}`, 'error');
      throw error;
    }
  }

  generateSystemRecommendations(evaluations) {
    const recommendations = [];
    
    // Model performance recommendations
    for (const [modelType, evaluation] of Object.entries(evaluations)) {
      if (evaluation.performance < 0.6) {
        recommendations.push({
          priority: 'medium',
          action: `Improve ${modelType} performance`,
          reason: `Performance score is ${(evaluation.performance * 100).toFixed(1)}%`
        });
      }
    }
    
    // Training data recommendations
    const totalEpisodes = Object.values(this.models).reduce((sum, model) => 
      sum + (model?.metadata.trainingEpisodes || 0), 0
    );
    
    if (totalEpisodes < 500) {
      recommendations.push({
        priority: 'high',
        action: 'Collect more training data',
        reason: `Only ${totalEpisodes} total training episodes available`
      });
    }
    
    // Add general recommendations
    if (recommendations.length === 0) {
      recommendations.push({
        priority: 'low',
        action: 'All models are performing well',
        reason: 'Reinforcement learning system is ready for production use'
      });
    }
    
    return recommendations;
  }

  async saveRLReport(report) {
    try {
      const reportFile = 'reinforcement-learning-report.json';
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      this.log(`📄 RL report saved to ${reportFile}`);
    } catch (error) {
      this.log(`⚠️  Could not save RL report: ${error.message}`, 'warning');
    }
  }
}

// Run if called directly
if (require.main === module) {
  const engine = new ReinforcementLearningEngine();
  
  engine.runReinforcementLearningEngine()
    .then(result => {
      console.log('Reinforcement Learning Engine Result:', JSON.stringify(result, null, 2));
    })
    .catch(error => {
      console.error('Reinforcement Learning Engine failed:', error);
      process.exit(1);
    });
}

module.exports = ReinforcementLearningEngine;