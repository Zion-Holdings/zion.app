#!/usr/bin/env node

/**
 * Natural Language Processing Engine
 * Analyzes commit messages, documentation, and code comments for intelligent insights
 */

const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

class NLPEngine {
  constructor() {
    this.modelPath = '.nlp-models';
    this.dataPath = '.nlp-data';
    this.modelVersion = '1.0';
    
    this.nlpModels = {
      commitAnalysis: null,
      documentationAnalysis: null,
      codeCommentAnalysis: null,
      sentimentAnalysis: null,
      topicModeling: null
    };
    
    this.textProcessors = {
      tokenizer: this.tokenizeText.bind(this),
      normalizer: this.normalizeText.bind(this),
      stemmer: this.stemText.bind(this),
      lemmatizer: this.lemmatizeText.bind(this)
    };
    
    this.analysisTypes = {
      commit: 'commit',
      documentation: 'documentation',
      codeComment: 'codeComment',
      sentiment: 'sentiment',
      topic: 'topic'
    };
    
    this.initializeEngine();
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${type.toUpperCase()}] ${message}`);
  }

  initializeEngine() {
    try {
      // Create NLP directories
      if (!fs.existsSync(this.modelPath)) {
        fs.mkdirSync(this.modelPath, { recursive: true });
        this.log(`📁 Created NLP model directory: ${this.modelPath}`);
      }
      
      if (!fs.existsSync(this.dataPath)) {
        fs.mkdirSync(this.dataPath, { recursive: true });
        this.log(`📁 Created NLP data directory: ${this.dataPath}`);
      }
      
      // Load existing models
      this.loadNLPModels();
      
      // Initialize text processing models
      this.initializeTextModels();
      
      this.log('✅ NLP engine initialized');
    } catch (error) {
      this.log(`❌ NLP engine initialization failed: ${error.message}`, 'error');
    }
  }

  loadNLPModels() {
    try {
      const modelsFile = path.join(this.modelPath, 'nlp-models.json');
      if (fs.existsSync(modelsFile)) {
        const modelsData = JSON.parse(fs.readFileSync(modelsFile, 'utf8'));
        this.nlpModels = { ...this.nlpModels, ...modelsData };
        this.log(`📚 Loaded ${Object.keys(modelsData).length} NLP models`);
      }
    } catch (error) {
      this.log(`⚠️  Could not load NLP models: ${error.message}`, 'warning');
    }
  }

  initializeTextModels() {
    try {
      // Initialize commit analysis model
      this.nlpModels.commitAnalysis = this.createCommitAnalysisModel();
      
      // Initialize documentation analysis model
      this.nlpModels.documentationAnalysis = this.createDocumentationAnalysisModel();
      
      // Initialize code comment analysis model
      this.nlpModels.codeCommentAnalysis = this.createCodeCommentAnalysisModel();
      
      // Initialize sentiment analysis model
      this.nlpModels.sentimentAnalysis = this.createSentimentAnalysisModel();
      
      // Initialize topic modeling model
      this.nlpModels.topicModeling = this.createTopicModelingModel();
      
      this.log('📝 Text processing models initialized successfully');
    } catch (error) {
      this.log(`⚠️  Could not initialize text models: ${error.message}`, 'warning');
    }
  }

  createCommitAnalysisModel() {
    return {
      type: 'commit-analysis',
      version: this.modelVersion,
      patterns: {
        feature: ['feat', 'feature', 'add', 'new', 'implement'],
        bugfix: ['fix', 'bug', 'issue', 'problem', 'error'],
        refactor: ['refactor', 'refactor', 'clean', 'improve', 'optimize'],
        documentation: ['docs', 'documentation', 'readme', 'comment'],
        test: ['test', 'spec', 'testing', 'coverage'],
        chore: ['chore', 'maintenance', 'update', 'upgrade'],
        breaking: ['breaking', 'major', 'incompatible', 'change'],
        security: ['security', 'vulnerability', 'secure', 'auth']
      },
      metadata: {
        created: Date.now(),
        lastUpdated: Date.now(),
        trainingExamples: 0
      }
    };
  }

  createDocumentationAnalysisModel() {
    return {
      type: 'documentation-analysis',
      version: this.modelVersion,
      patterns: {
        completeness: ['complete', 'comprehensive', 'detailed', 'thorough'],
        clarity: ['clear', 'understandable', 'simple', 'concise'],
        accuracy: ['accurate', 'correct', 'precise', 'exact'],
        relevance: ['relevant', 'applicable', 'pertinent', 'related'],
        structure: ['organized', 'structured', 'logical', 'systematic']
      },
      metadata: {
        created: Date.now(),
        lastUpdated: Date.now(),
        trainingExamples: 0
      }
    };
  }

  createCodeCommentAnalysisModel() {
    return {
      type: 'code-comment-analysis',
      version: this.modelVersion,
      patterns: {
        explanation: ['explains', 'describes', 'clarifies', 'details'],
        warning: ['warning', 'caution', 'note', 'important'],
        todo: ['todo', 'fixme', 'hack', 'temporary'],
        reference: ['reference', 'link', 'see', 'related'],
        example: ['example', 'sample', 'usage', 'demo']
      },
      metadata: {
        created: Date.now(),
        lastUpdated: Date.now(),
        trainingExamples: 0
      }
    };
  }

  createSentimentAnalysisModel() {
    return {
      type: 'sentiment-analysis',
      version: this.modelVersion,
      patterns: {
        positive: ['good', 'great', 'excellent', 'amazing', 'wonderful', 'perfect'],
        negative: ['bad', 'terrible', 'awful', 'horrible', 'worst', 'broken'],
        neutral: ['okay', 'fine', 'normal', 'standard', 'regular', 'usual'],
        urgent: ['critical', 'urgent', 'important', 'priority', 'emergency'],
        confident: ['certain', 'sure', 'definite', 'guaranteed', 'confirmed']
      },
      metadata: {
        created: Date.now(),
        lastUpdated: Date.now(),
        trainingExamples: 0
      }
    };
  }

  createTopicModelingModel() {
    return {
      type: 'topic-modeling',
      version: this.modelVersion,
      topics: {
        frontend: ['ui', 'component', 'react', 'vue', 'angular', 'css', 'html'],
        backend: ['api', 'server', 'database', 'auth', 'middleware', 'controller'],
        testing: ['test', 'spec', 'coverage', 'unit', 'integration', 'e2e'],
        deployment: ['deploy', 'ci', 'cd', 'docker', 'kubernetes', 'aws'],
        performance: ['optimize', 'performance', 'speed', 'efficiency', 'cache'],
        security: ['security', 'vulnerability', 'auth', 'encryption', 'permission']
      },
      metadata: {
        created: Date.now(),
        lastUpdated: Date.now(),
        trainingExamples: 0
      }
    };
  }

  // Text processing methods
  tokenizeText(text) {
    if (!text || typeof text !== 'string') {
      return [];
    }
    
    // Simple tokenization: split by whitespace and punctuation
    return text
      .toLowerCase()
      .replace(/[^\w\s]/g, ' ')
      .split(/\s+/)
      .filter(token => token.length > 0);
  }

  normalizeText(text) {
    if (!text || typeof text !== 'string') {
      return '';
    }
    
    return text
      .toLowerCase()
      .replace(/\s+/g, ' ')
      .trim();
  }

  stemText(text) {
    if (!text || typeof text !== 'string') {
      return '';
    }
    
    // Simple stemming: remove common suffixes
    const suffixes = ['ing', 'ed', 'er', 'est', 'ly', 'tion', 'sion', 'ness'];
    let stemmed = text.toLowerCase();
    
    for (const suffix of suffixes) {
      if (stemmed.endsWith(suffix) && stemmed.length > suffix.length + 2) {
        stemmed = stemmed.slice(0, -suffix.length);
        break;
      }
    }
    
    return stemmed;
  }

  lemmatizeText(text) {
    if (!text || typeof text !== 'string') {
      return '';
    }
    
    // Simple lemmatization: basic word form reduction
    const lemmas = {
      'is': 'be',
      'are': 'be',
      'was': 'be',
      'were': 'be',
      'am': 'be',
      'being': 'be',
      'been': 'be',
      'has': 'have',
      'have': 'have',
      'had': 'have',
      'having': 'have',
      'does': 'do',
      'do': 'do',
      'did': 'do',
      'doing': 'do',
      'goes': 'go',
      'go': 'go',
      'went': 'go',
      'going': 'go',
      'gone': 'go'
    };
    
    const normalized = this.normalizeText(text);
    return lemmas[normalized] || normalized;
  }

  // Analysis methods
  async analyzeCommitMessage(commitMessage) {
    this.log('📝 Analyzing commit message...');
    
    try {
      const analysis = {
        timestamp: new Date().toISOString(),
        commitMessage: commitMessage,
        tokens: this.textProcessors.tokenizer(commitMessage),
        normalized: this.textProcessors.normalizer(commitMessage),
        analysis: {},
        recommendations: []
      };
      
      // Analyze commit type
      analysis.analysis.commitType = this.analyzeCommitType(commitMessage);
      
      // Analyze sentiment
      analysis.analysis.sentiment = this.analyzeSentiment(commitMessage);
      
      // Analyze topics
      analysis.analysis.topics = this.analyzeTopics(commitMessage);
      
      // Analyze complexity
      analysis.analysis.complexity = this.analyzeCommitComplexity(commitMessage);
      
      // Generate recommendations
      analysis.recommendations = this.generateCommitRecommendations(analysis);
      
      // Save analysis
      await this.saveCommitAnalysis(analysis);
      
      this.log('✅ Commit message analysis completed');
      
      return analysis;
      
    } catch (error) {
      this.log(`❌ Commit message analysis failed: ${error.message}`, 'error');
      throw error;
    }
  }

  analyzeCommitType(commitMessage) {
    const normalized = this.textProcessors.normalizer(commitMessage);
    const tokens = this.textProcessors.tokenizer(normalized);
    
    const scores = {
      feature: 0,
      bugfix: 0,
      refactor: 0,
      documentation: 0,
      test: 0,
      chore: 0,
      breaking: 0,
      security: 0
    };
    
    // Score based on pattern matching
    for (const [type, patterns] of Object.entries(this.nlpModels.commitAnalysis.patterns)) {
      for (const pattern of patterns) {
        if (normalized.includes(pattern)) {
          scores[type] += 1;
        }
      }
    }
    
    // Find dominant type
    const dominantType = Object.entries(scores).reduce((a, b) => 
      scores[a] > scores[b] ? a : b
    );
    
    return {
      type: dominantType,
      confidence: scores[dominantType] / Math.max(...Object.values(scores)),
      scores: scores
    };
  }

  analyzeSentiment(text) {
    const normalized = this.textProcessors.normalizer(text);
    const tokens = this.textProcessors.tokenizer(normalized);
    
    const scores = {
      positive: 0,
      negative: 0,
      neutral: 0,
      urgent: 0,
      confident: 0
    };
    
    // Score based on sentiment patterns
    for (const [sentiment, patterns] of Object.entries(this.nlpModels.sentimentAnalysis.patterns)) {
      for (const pattern of patterns) {
        if (normalized.includes(pattern)) {
          scores[sentiment] += 1;
        }
      }
    }
    
    // Determine overall sentiment
    const totalScore = Object.values(scores).reduce((sum, score) => sum + score, 0);
    const dominantSentiment = Object.entries(scores).reduce((a, b) => 
      scores[a] > scores[b] ? a : b
    );
    
    return {
      overall: dominantSentiment,
      confidence: totalScore > 0 ? scores[dominantSentiment] / totalScore : 0.5,
      scores: scores,
      intensity: this.calculateSentimentIntensity(scores)
    };
  }

  calculateSentimentIntensity(scores) {
    const maxScore = Math.max(...Object.values(scores));
    if (maxScore === 0) return 'neutral';
    
    if (maxScore >= 3) return 'very_strong';
    if (maxScore >= 2) return 'strong';
    if (maxScore >= 1) return 'moderate';
    return 'weak';
  }

  analyzeTopics(text) {
    const normalized = this.textProcessors.normalizer(text);
    const tokens = this.textProcessors.tokenizer(normalized);
    
    const topicScores = {};
    
    // Score topics based on keyword matching
    for (const [topic, keywords] of Object.entries(this.nlpModels.topicModeling.topics)) {
      let score = 0;
      
      for (const keyword of keywords) {
        if (normalized.includes(keyword)) {
          score += 1;
        }
      }
      
      if (score > 0) {
        topicScores[topic] = score;
      }
    }
    
    // Sort topics by score
    const sortedTopics = Object.entries(topicScores)
      .sort(([,a], [,b]) => b - a)
      .map(([topic, score]) => ({
        topic,
        score,
        relevance: score / Math.max(...Object.values(topicScores))
      }));
    
    return {
      primaryTopic: sortedTopics[0] || null,
      allTopics: sortedTopics,
      topicCount: sortedTopics.length
    };
  }

  analyzeCommitComplexity(commitMessage) {
    const tokens = this.textProcessors.tokenizer(commitMessage);
    const words = commitMessage.split(/\s+/);
    
    const complexity = {
      wordCount: words.length,
      tokenCount: tokens.length,
      averageWordLength: words.reduce((sum, word) => sum + word.length, 0) / words.length,
      uniqueTokens: new Set(tokens).size,
      complexity: 'low'
    };
    
    // Determine complexity level
    if (complexity.wordCount > 50 || complexity.tokenCount > 30) {
      complexity.complexity = 'very_high';
    } else if (complexity.wordCount > 30 || complexity.tokenCount > 20) {
      complexity.complexity = 'high';
    } else if (complexity.wordCount > 15 || complexity.tokenCount > 10) {
      complexity.complexity = 'medium';
    } else if (complexity.wordCount > 5 || complexity.tokenCount > 5) {
      complexity.complexity = 'low';
    } else {
      complexity.complexity = 'very_low';
    }
    
    return complexity;
  }

  generateCommitRecommendations(analysis) {
    const recommendations = [];
    
    // Commit type recommendations
    if (analysis.analysis.commitType.confidence < 0.5) {
      recommendations.push({
        priority: 'medium',
        action: 'Use conventional commit format',
        reason: 'Commit type is unclear, consider using standard prefixes like feat:, fix:, docs:, etc.'
      });
    }
    
    // Sentiment recommendations
    if (analysis.analysis.sentiment.scores.negative > 0) {
      recommendations.push({
        priority: 'low',
        action: 'Consider more neutral language',
        reason: 'Commit message contains negative sentiment, which may affect team morale'
      });
    }
    
    // Complexity recommendations
    if (analysis.analysis.complexity.complexity === 'very_high') {
      recommendations.push({
        priority: 'medium',
        action: 'Simplify commit message',
        reason: 'Commit message is very complex, consider breaking it into smaller commits'
      });
    } else if (analysis.analysis.complexity.complexity === 'very_low') {
      recommendations.push({
        priority: 'low',
        action: 'Add more context',
        reason: 'Commit message is very brief, consider adding more context'
      });
    }
    
    // Topic recommendations
    if (analysis.analysis.topics.topicCount === 0) {
      recommendations.push({
        priority: 'low',
        action: 'Add relevant keywords',
        reason: 'No clear topics identified, consider adding relevant technical keywords'
      });
    }
    
    // Add general recommendations
    if (recommendations.length === 0) {
      recommendations.push({
        priority: 'low',
        action: 'Commit message is well-structured',
        reason: 'All analysis metrics indicate good commit message quality'
      });
    }
    
    return recommendations;
  }

  async analyzeDocumentation(documentation) {
    this.log('📚 Analyzing documentation...');
    
    try {
      const analysis = {
        timestamp: new Date().toISOString(),
        documentation: documentation,
        tokens: this.textProcessors.tokenizer(documentation),
        normalized: this.textProcessors.normalizer(documentation),
        analysis: {},
        recommendations: []
      };
      
      // Analyze completeness
      analysis.analysis.completeness = this.analyzeDocumentationCompleteness(documentation);
      
      // Analyze clarity
      analysis.analysis.clarity = this.analyzeDocumentationClarity(documentation);
      
      // Analyze structure
      analysis.analysis.structure = this.analyzeDocumentationStructure(documentation);
      
      // Analyze relevance
      analysis.analysis.relevance = this.analyzeDocumentationRelevance(documentation);
      
      // Generate recommendations
      analysis.recommendations = this.generateDocumentationRecommendations(analysis);
      
      // Save analysis
      await this.saveDocumentationAnalysis(analysis);
      
      this.log('✅ Documentation analysis completed');
      
      return analysis;
      
    } catch (error) {
      this.log(`❌ Documentation analysis failed: ${error.message}`, 'error');
      throw error;
    }
  }

  analyzeDocumentationCompleteness(documentation) {
    const words = documentation.split(/\s+/);
    const sentences = documentation.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const paragraphs = documentation.split(/\n\s*\n/).filter(p => p.trim().length > 0);
    
    const completeness = {
      wordCount: words.length,
      sentenceCount: sentences.length,
      paragraphCount: paragraphs.length,
      averageWordsPerSentence: words.length / sentences.length,
      averageSentencesPerParagraph: sentences.length / paragraphs.length,
      score: 0.5
    };
    
    // Calculate completeness score
    let score = 0;
    
    // Word count scoring
    if (completeness.wordCount >= 1000) score += 0.3;
    else if (completeness.wordCount >= 500) score += 0.2;
    else if (completeness.wordCount >= 100) score += 0.1;
    
    // Sentence structure scoring
    if (completeness.averageWordsPerSentence >= 10 && completeness.averageWordsPerSentence <= 25) score += 0.2;
    else if (completeness.averageWordsPerSentence >= 5 && completeness.averageWordsPerSentence <= 30) score += 0.1;
    
    // Paragraph structure scoring
    if (completeness.averageSentencesPerParagraph >= 3 && completeness.averageSentencesPerParagraph <= 8) score += 0.2;
    else if (completeness.averageSentencesPerParagraph >= 2 && completeness.averageSentencesPerParagraph <= 10) score += 0.1;
    
    // Content scoring
    if (documentation.includes('example') || documentation.includes('sample')) score += 0.1;
    if (documentation.includes('note') || documentation.includes('important')) score += 0.1;
    
    completeness.score = Math.min(1.0, score);
    
    return completeness;
  }

  analyzeDocumentationClarity(documentation) {
    const clarity = {
      readabilityScore: 0,
      technicalTerms: 0,
      simpleWords: 0,
      complexSentences: 0,
      score: 0.5
    };
    
    // Simple readability analysis
    const sentences = documentation.split(/[.!?]+/).filter(s => s.trim().length > 0);
    const words = documentation.split(/\s+/);
    
    // Count technical terms (words with 8+ characters)
    clarity.technicalTerms = words.filter(word => word.length >= 8).length;
    
    // Count simple words (words with 3-6 characters)
    clarity.simpleWords = words.filter(word => word.length >= 3 && word.length <= 6).length;
    
    // Count complex sentences (sentences with 20+ words)
    clarity.complexSentences = sentences.filter(sentence => 
      sentence.split(/\s+/).length >= 20
    ).length;
    
    // Calculate clarity score
    let score = 0.5;
    
    // Adjust based on technical terms
    if (clarity.technicalTerms > 0 && clarity.technicalTerms <= words.length * 0.1) score += 0.2;
    else if (clarity.technicalTerms > words.length * 0.2) score -= 0.2;
    
    // Adjust based on simple words
    if (clarity.simpleWords >= words.length * 0.4) score += 0.2;
    
    // Adjust based on complex sentences
    if (clarity.complexSentences === 0) score += 0.1;
    else if (clarity.complexSentences > sentences.length * 0.3) score -= 0.2;
    
    clarity.score = Math.max(0, Math.min(1, score));
    
    return clarity;
  }

  analyzeDocumentationStructure(documentation) {
    const structure = {
      hasHeadings: false,
      hasLists: false,
      hasCodeBlocks: false,
      hasLinks: false,
      hasImages: false,
      score: 0.5
    };
    
    // Check for structural elements
    structure.hasHeadings = /^#{1,6}\s/.test(documentation) || /^[A-Z][^.!?]*\n=+$/.test(documentation);
    structure.hasLists = /^\s*[-*+]\s/.test(documentation) || /^\s*\d+\.\s/.test(documentation);
    structure.hasCodeBlocks = /```[\s\S]*```/.test(documentation) || /`[^`]+`/.test(documentation);
    structure.hasLinks = /\[([^\]]+)\]\(([^)]+)\)/.test(documentation) || /https?:\/\/[^\s]+/.test(documentation);
    structure.hasImages = /!\[([^\]]*)\]\(([^)]+)\)/.test(documentation);
    
    // Calculate structure score
    let score = 0.5;
    
    if (structure.hasHeadings) score += 0.2;
    if (structure.hasLists) score += 0.15;
    if (structure.hasCodeBlocks) score += 0.15;
    if (structure.hasLinks) score += 0.1;
    if (structure.hasImages) score += 0.1;
    
    structure.score = Math.min(1.0, score);
    
    return structure;
  }

  analyzeDocumentationRelevance(documentation) {
    const relevance = {
      technicalTerms: 0,
      domainSpecific: 0,
      currentTrends: 0,
      score: 0.5
    };
    
    // Check for technical relevance
    const technicalKeywords = [
      'api', 'database', 'server', 'client', 'frontend', 'backend',
      'deployment', 'testing', 'security', 'performance', 'scalability',
      'architecture', 'framework', 'library', 'dependency', 'configuration'
    ];
    
    relevance.technicalTerms = technicalKeywords.filter(keyword => 
      documentation.toLowerCase().includes(keyword)
    ).length;
    
    // Check for domain-specific terms
    const domainKeywords = [
      'react', 'vue', 'angular', 'node', 'python', 'java', 'docker',
      'kubernetes', 'aws', 'azure', 'gcp', 'git', 'ci', 'cd'
    ];
    
    relevance.domainSpecific = domainKeywords.filter(keyword => 
      documentation.toLowerCase().includes(keyword)
    ).length;
    
    // Check for current trends
    const trendKeywords = [
      'ai', 'machine learning', 'blockchain', 'microservices', 'serverless',
      'cloud native', 'devops', 'agile', 'scrum', 'kanban'
    ];
    
    relevance.currentTrends = trendKeywords.filter(keyword => 
      documentation.toLowerCase().includes(keyword)
    ).length;
    
    // Calculate relevance score
    let score = 0.5;
    
    if (relevance.technicalTerms >= 3) score += 0.2;
    else if (relevance.technicalTerms >= 1) score += 0.1;
    
    if (relevance.domainSpecific >= 2) score += 0.2;
    else if (relevance.domainSpecific >= 1) score += 0.1;
    
    if (relevance.currentTrends >= 1) score += 0.1;
    
    relevance.score = Math.min(1.0, score);
    
    return relevance;
  }

  generateDocumentationRecommendations(analysis) {
    const recommendations = [];
    
    // Completeness recommendations
    if (analysis.analysis.completeness.score < 0.6) {
      recommendations.push({
        priority: 'medium',
        action: 'Expand documentation content',
        reason: `Completeness score is ${(analysis.analysis.completeness.score * 100).toFixed(1)}%, consider adding more details`
      });
    }
    
    // Clarity recommendations
    if (analysis.analysis.clarity.score < 0.6) {
      recommendations.push({
        priority: 'medium',
        action: 'Improve readability',
        reason: `Clarity score is ${(analysis.analysis.clarity.score * 100).toFixed(1)}%, consider simplifying language`
      });
    }
    
    // Structure recommendations
    if (analysis.analysis.structure.score < 0.6) {
      recommendations.push({
        priority: 'low',
        action: 'Improve document structure',
        reason: `Structure score is ${(analysis.analysis.structure.score * 100).toFixed(1)}%, consider adding headings and lists`
      });
    }
    
    // Relevance recommendations
    if (analysis.analysis.relevance.score < 0.6) {
      recommendations.push({
        priority: 'medium',
        action: 'Add technical context',
        reason: `Relevance score is ${(analysis.analysis.relevance.score * 100).toFixed(1)}%, consider adding more technical details`
      });
    }
    
    // Add general recommendations
    if (recommendations.length === 0) {
      recommendations.push({
        priority: 'low',
        action: 'Documentation is well-structured',
        reason: 'All analysis metrics indicate good documentation quality'
      });
    }
    
    return recommendations;
  }

  async analyzeCodeComments(codeComments) {
    this.log('💬 Analyzing code comments...');
    
    try {
      const analysis = {
        timestamp: new Date().toISOString(),
        codeComments: codeComments,
        tokens: this.textProcessors.tokenizer(codeComments),
        normalized: this.textProcessors.normalizer(codeComments),
        analysis: {},
        recommendations: []
      };
      
      // Analyze comment types
      analysis.analysis.commentTypes = this.analyzeCommentTypes(codeComments);
      
      // Analyze comment quality
      analysis.analysis.commentQuality = this.analyzeCommentQuality(codeComments);
      
      // Analyze comment relevance
      analysis.analysis.commentRelevance = this.analyzeCommentRelevance(codeComments);
      
      // Generate recommendations
      analysis.recommendations = this.generateCommentRecommendations(analysis);
      
      // Save analysis
      await this.saveCommentAnalysis(analysis);
      
      this.log('✅ Code comment analysis completed');
      
      return analysis;
      
    } catch (error) {
      this.log(`❌ Code comment analysis failed: ${error.message}`, 'error');
      throw error;
    }
  }

  analyzeCommentTypes(codeComments) {
    const types = {
      explanation: 0,
      warning: 0,
      todo: 0,
      reference: 0,
      example: 0
    };
    
    // Count comment types
    for (const [type, patterns] of Object.entries(this.nlpModels.codeCommentAnalysis.patterns)) {
      for (const pattern of patterns) {
        const regex = new RegExp(pattern, 'gi');
        const matches = codeComments.match(regex);
        if (matches) {
          types[type] += matches.length;
        }
      }
    }
    
    // Find dominant type
    const dominantType = Object.entries(types).reduce((a, b) => 
      types[a] > types[b] ? a : b
    );
    
    return {
      types: types,
      dominantType: dominantType,
      distribution: Object.entries(types).map(([type, count]) => ({
        type,
        count,
        percentage: count / Math.max(...Object.values(types)) * 100
      }))
    };
  }

  analyzeCommentQuality(codeComments) {
    const quality = {
      averageLength: 0,
      technicalAccuracy: 0,
      clarity: 0,
      completeness: 0,
      score: 0.5
    };
    
    // Split into individual comments
    const comments = codeComments.split(/\n\s*\/\/|\n\s*\*|\n\s*\/\*|\n\s*#/).filter(c => c.trim().length > 0);
    
    if (comments.length === 0) {
      return quality;
    }
    
    // Calculate average length
    quality.averageLength = comments.reduce((sum, comment) => sum + comment.trim().length, 0) / comments.length;
    
    // Assess technical accuracy (simplified)
    const technicalKeywords = ['function', 'class', 'method', 'variable', 'parameter', 'return', 'async', 'await'];
    let technicalMatches = 0;
    
    for (const comment of comments) {
      for (const keyword of technicalKeywords) {
        if (comment.toLowerCase().includes(keyword)) {
          technicalMatches++;
        }
      }
    }
    
    quality.technicalAccuracy = technicalMatches / comments.length;
    
    // Assess clarity (based on sentence structure)
    const clearComments = comments.filter(comment => {
      const words = comment.trim().split(/\s+/);
      return words.length >= 3 && words.length <= 20;
    });
    
    quality.clarity = clearComments.length / comments.length;
    
    // Assess completeness (based on comment length)
    const completeComments = comments.filter(comment => comment.trim().length >= 10);
    quality.completeness = completeComments.length / comments.length;
    
    // Calculate overall quality score
    quality.score = (
      quality.technicalAccuracy * 0.3 +
      quality.clarity * 0.3 +
      quality.completeness * 0.4
    );
    
    return quality;
  }

  analyzeCommentRelevance(codeComments) {
    const relevance = {
      codeRelated: 0,
      businessLogic: 0,
      technicalDetails: 0,
      score: 0.5
    };
    
    // Check for code-related terms
    const codeTerms = ['code', 'function', 'class', 'method', 'variable', 'loop', 'condition'];
    let codeMatches = 0;
    
    for (const term of codeTerms) {
      if (codeComments.toLowerCase().includes(term)) {
        codeMatches++;
      }
    }
    
    relevance.codeRelated = codeMatches / codeTerms.length;
    
    // Check for business logic terms
    const businessTerms = ['business', 'user', 'customer', 'order', 'payment', 'validation', 'rule'];
    let businessMatches = 0;
    
    for (const term of businessTerms) {
      if (codeComments.toLowerCase().includes(term)) {
        businessMatches++;
      }
    }
    
    relevance.businessLogic = businessMatches / businessTerms.length;
    
    // Check for technical details
    const technicalTerms = ['algorithm', 'complexity', 'performance', 'memory', 'cache', 'optimization'];
    let technicalMatches = 0;
    
    for (const term of technicalTerms) {
      if (codeComments.toLowerCase().includes(term)) {
        technicalMatches++;
      }
    }
    
    relevance.technicalDetails = technicalMatches / technicalTerms.length;
    
    // Calculate relevance score
    relevance.score = (
      relevance.codeRelated * 0.4 +
      relevance.businessLogic * 0.3 +
      relevance.technicalDetails * 0.3
    );
    
    return relevance;
  }

  generateCommentRecommendations(analysis) {
    const recommendations = [];
    
    // Comment type recommendations
    if (analysis.analysis.commentTypes.types.todo > 0) {
      recommendations.push({
        priority: 'high',
        action: 'Address TODO comments',
        reason: `${analysis.analysis.commentTypes.types.todo} TODO comments found, consider implementing or removing them`
      });
    }
    
    // Comment quality recommendations
    if (analysis.analysis.commentQuality.score < 0.6) {
      recommendations.push({
        priority: 'medium',
        action: 'Improve comment quality',
        reason: `Comment quality score is ${(analysis.analysis.commentQuality.score * 100).toFixed(1)}%, consider adding more technical details`
      });
    }
    
    // Comment relevance recommendations
    if (analysis.analysis.commentRelevance.score < 0.6) {
      recommendations.push({
        priority: 'medium',
        action: 'Make comments more relevant',
        reason: `Comment relevance score is ${(analysis.analysis.commentRelevance.score * 100).toFixed(1)}%, consider focusing on code-specific details`
      });
    }
    
    // Add general recommendations
    if (recommendations.length === 0) {
      recommendations.push({
        priority: 'low',
        action: 'Code comments are well-structured',
        reason: 'All analysis metrics indicate good comment quality'
      });
    }
    
    return recommendations;
  }

  // Data persistence methods
  async saveCommitAnalysis(analysis) {
    try {
      const analysisFile = path.join(this.dataPath, 'commit-analysis.json');
      fs.writeFileSync(analysisFile, JSON.stringify(analysis, null, 2));
      this.log(`💾 Commit analysis saved`);
    } catch (error) {
      this.log(`⚠️  Could not save commit analysis: ${error.message}`, 'warning');
    }
  }

  async saveDocumentationAnalysis(analysis) {
    try {
      const analysisFile = path.join(this.dataPath, 'documentation-analysis.json');
      fs.writeFileSync(analysisFile, JSON.stringify(analysis, null, 2));
      this.log(`💾 Documentation analysis saved`);
    } catch (error) {
      this.log(`⚠️  Could not save documentation analysis: ${error.message}`, 'warning');
    }
  }

  async saveCommentAnalysis(analysis) {
    try {
      const analysisFile = path.join(this.dataPath, 'comment-analysis.json');
      fs.writeFileSync(analysisFile, JSON.stringify(analysis, null, 2));
      this.log(`💾 Comment analysis saved`);
    } catch (error) {
      this.log(`⚠️  Could not save comment analysis: ${error.message}`, 'warning');
    }
  }

  // Main execution method
  async runNLPEngine() {
    this.log('🚀 Starting NLP engine...');
    
    try {
      // Test commit message analysis
      const testCommit = 'feat: add new user authentication system with JWT tokens and refresh token support';
      const commitAnalysis = await this.analyzeCommitMessage(testCommit);
      
      // Test documentation analysis
      const testDoc = 'This API provides user authentication endpoints. It supports JWT tokens and includes refresh token functionality.';
      const docAnalysis = await this.analyzeDocumentation(testDoc);
      
      // Test code comment analysis
      const testComment = '// This function validates user input and returns a boolean indicating success or failure';
      const commentAnalysis = await this.analyzeCodeComments(testComment);
      
      // Generate comprehensive report
      const report = {
        timestamp: new Date().toISOString(),
        modelVersion: this.modelVersion,
        analyses: {
          commit: commitAnalysis,
          documentation: docAnalysis,
          codeComment: commentAnalysis
        },
        modelStatus: this.getModelStatus(),
        recommendations: this.generateSystemRecommendations()
      };
      
      // Save report
      await this.saveNLPReport(report);
      
      this.log('✅ NLP engine completed successfully');
      
      return {
        analyses: {
          commit: commitAnalysis,
          documentation: docAnalysis,
          codeComment: commentAnalysis
        },
        report
      };
      
    } catch (error) {
      this.log(`💥 NLP engine failed: ${error.message}`, 'error');
      throw error;
    }
  }

  getModelStatus() {
    const status = {};
    
    for (const [modelType, model] of Object.entries(this.nlpModels)) {
      if (model) {
        status[modelType] = {
          type: model.type,
          version: model.version,
          created: model.metadata.created,
          lastUpdated: model.metadata.lastUpdated,
          trainingExamples: model.metadata.trainingExamples,
          status: 'ready'
        };
      }
    }
    
    return status;
  }

  generateSystemRecommendations() {
    const recommendations = [];
    
    // Check model readiness
    for (const [modelType, model] of Object.entries(this.nlpModels)) {
      if (model && model.metadata.trainingExamples < 50) {
        recommendations.push({
          priority: 'medium',
          action: `Collect more training data for ${modelType}`,
          reason: `Only ${model.metadata.trainingExamples} training examples available`
        });
      }
    }
    
    // Add general recommendations
    if (recommendations.length === 0) {
      recommendations.push({
        priority: 'low',
        action: 'All NLP models are performing well',
        reason: 'Natural language processing system is ready for production use'
      });
    }
    
    return recommendations;
  }

  async saveNLPReport(report) {
    try {
      const reportFile = 'nlp-engine-report.json';
      fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
      this.log(`📄 NLP report saved to ${reportFile}`);
    } catch (error) {
      this.log(`⚠️  Could not save NLP report: ${error.message}`, 'warning');
    }
  }
}

// Run if called directly
if (require.main === module) {
  const engine = new NLPEngine();
  
  engine.runNLPEngine()
    .then(result => {
      console.log('NLP Engine Result:', JSON.stringify(result, null, 2));
    })
    .catch(error => {
      console.error('NLP Engine failed:', error);
      process.exit(1);
    });
}

module.exports = NLPEngine;