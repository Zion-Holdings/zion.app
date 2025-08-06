#!/usr/bin/env node

const fs = require('fs').promises;
const path = require('path');
const { exec } = require('child_process');
const { promisify } = require('util');
const OpenAI = require('openai');

const execAsync = promisify(exec);

class CursorMemoryAutomation {
  constructor() {
    this.openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });
    
    this.memoryDir = './cursor-memory';
    this.chatLogsDir = './chat-logs';
    this.knowledgeBaseDir = './knowledge-base';
    
    this.memoryIndex = new Map();
    this.knowledgeGraph = new Map();
    this.learningHistory = [];
    
    this.setupDirectories();
  }

  async setupDirectories() {
    const dirs = [this.memoryDir, this.chatLogsDir, this.knowledgeBaseDir];
    
    for (const dir of dirs) {
      try {
        await fs.mkdir(dir, { recursive: true });
        console.log(`✅ Created directory: ${dir}`);
      } catch (error) {
        if (error.code !== 'EEXIST') {
          console.error(`❌ Error creating directory ${dir}:`, error.message);
        }
      }
    }
  }

  async scanForChatLogs() {
    console.log('🔍 Scanning for chat logs and conversation history...');
    
    const chatSources = [
      './logs',
      './automation_temp/logs',
      './cursor-automation/logs',
      './.cursor',
      './data',
      './scripts'
    ];

    const foundLogs = [];
    
    for (const source of chatSources) {
      try {
        const files = await this.recursiveFileSearch(source, [
          '*.log',
          '*.json',
          '*.txt',
          '*.md',
          '*.js',
          '*.ts'
        ]);
        
        for (const file of files) {
          const content = await fs.readFile(file, 'utf8');
          if (this.isChatContent(content)) {
            foundLogs.push({
              path: file,
              content: content,
              type: this.classifyChatContent(content)
            });
          }
        }
      } catch (error) {
        console.log(`⚠️  Could not scan ${source}: ${error.message}`);
      }
    }

    console.log(`📊 Found ${foundLogs.length} potential chat log files`);
    return foundLogs;
  }

  async recursiveFileSearch(dir, patterns) {
    const files = [];
    
    try {
      const items = await fs.readdir(dir, { withFileTypes: true });
      
      for (const item of items) {
        const fullPath = path.join(dir, item.name);
        
        if (item.isDirectory()) {
          files.push(...await this.recursiveFileSearch(fullPath, patterns));
        } else if (item.isFile()) {
          for (const pattern of patterns) {
            if (this.matchesPattern(item.name, pattern)) {
              files.push(fullPath);
              break;
            }
          }
        }
      }
    } catch (error) {
      // Directory doesn't exist or can't be read
    }
    
    return files;
  }

  matchesPattern(filename, pattern) {
    const regex = new RegExp(pattern.replace('*', '.*'));
    return regex.test(filename);
  }

  isChatContent(content) {
    const chatIndicators = [
      'user:', 'assistant:', 'system:', 'human:', 'ai:',
      'question:', 'answer:', 'query:', 'response:',
      'chat', 'conversation', 'dialogue', 'interaction',
      'memory', 'knowledge', 'learning', 'automation',
      'cursor', 'development', 'coding', 'programming'
    ];
    
    const lowerContent = content.toLowerCase();
    return chatIndicators.some(indicator => lowerContent.includes(indicator));
  }

  classifyChatContent(content) {
    const lowerContent = content.toLowerCase();
    
    if (lowerContent.includes('memory') || lowerContent.includes('knowledge')) {
      return 'memory';
    } else if (lowerContent.includes('automation') || lowerContent.includes('cursor')) {
      return 'automation';
    } else if (lowerContent.includes('development') || lowerContent.includes('coding')) {
      return 'development';
    } else if (lowerContent.includes('error') || lowerContent.includes('fix')) {
      return 'troubleshooting';
    } else {
      return 'general';
    }
  }

  async extractKnowledgeFromChats(chatLogs) {
    console.log('🧠 Extracting knowledge from chat logs...');
    
    const extractedKnowledge = [];
    
    for (const log of chatLogs) {
      try {
        const knowledge = await this.extractKnowledgeFromContent(log.content, log.type);
        if (knowledge && knowledge.length > 0) {
          extractedKnowledge.push({
            source: log.path,
            type: log.type,
            knowledge: knowledge,
            timestamp: new Date().toISOString()
          });
        }
      } catch (error) {
        console.error(`❌ Error extracting knowledge from ${log.path}:`, error.message);
      }
    }
    
    console.log(`📚 Extracted knowledge from ${extractedKnowledge.length} chat logs`);
    return extractedKnowledge;
  }

  async extractKnowledgeFromContent(content, type) {
    const prompt = `Extract key knowledge, insights, and learnable information from the following ${type} content. Focus on:

1. Technical solutions and patterns
2. Best practices and conventions
3. Common problems and their solutions
4. User preferences and workflow patterns
5. Project-specific knowledge
6. Automation strategies
7. Error handling approaches
8. Performance optimizations
9. Security considerations
10. Development workflow insights

Format the output as structured knowledge points with categories and confidence scores.

Content:
${content.substring(0, 3000)}`;

    try {
      const completion = await this.openai.chat.completions.create({
        model: 'gpt-4',
        messages: [
          {
            role: 'system',
            content: 'You are an expert at extracting and structuring knowledge from conversations and logs. Provide clear, actionable insights.'
          },
          {
            role: 'user',
            content: prompt
          }
        ],
        temperature: 0.3,
        max_tokens: 4000
      });

      const response = completion.choices[0].message.content;
      return this.parseKnowledgeResponse(response);
    } catch (error) {
      console.error('❌ Error in knowledge extraction:', error.message);
      return [];
    }
  }

  parseKnowledgeResponse(response) {
    const knowledge = [];
    
    try {
      // Try to parse as JSON first
      const parsed = JSON.parse(response);
      if (Array.isArray(parsed)) {
        return parsed;
      }
    } catch (error) {
      // Not JSON, parse as structured text
    }
    
    // Parse structured text format
    const lines = response.split('\n');
    let currentCategory = '';
    let currentItem = {};
    
    for (const line of lines) {
      const trimmed = line.trim();
      
      if (trimmed.startsWith('##') || trimmed.startsWith('#')) {
        if (currentItem.title) {
          knowledge.push(currentItem);
        }
        currentCategory = trimmed.replace(/^#+\s*/, '');
        currentItem = { category: currentCategory };
      } else if (trimmed.startsWith('-') || trimmed.startsWith('*')) {
        if (currentItem.title) {
          knowledge.push(currentItem);
        }
        currentItem = {
          category: currentCategory,
          title: trimmed.replace(/^[-*]\s*/, ''),
          type: 'insight'
        };
      } else if (trimmed.includes(':') && !currentItem.title) {
        const [key, value] = trimmed.split(':', 2);
        currentItem[key.trim()] = value.trim();
      } else if (trimmed && currentItem.title) {
        currentItem.description = (currentItem.description || '') + ' ' + trimmed;
      }
    }
    
    if (currentItem.title) {
      knowledge.push(currentItem);
    }
    
    return knowledge;
  }

  async buildMemoryIndex(extractedKnowledge) {
    console.log('🔍 Building memory index...');
    
    for (const knowledge of extractedKnowledge) {
      for (const item of knowledge.knowledge) {
        const key = this.generateMemoryKey(item);
        const memoryEntry = {
          key: key,
          content: item,
          source: knowledge.source,
          type: knowledge.type,
          timestamp: knowledge.timestamp,
          confidence: item.confidence || 0.8,
          tags: this.extractTags(item),
          relationships: this.findRelationships(item, extractedKnowledge)
        };
        
        this.memoryIndex.set(key, memoryEntry);
        this.addToKnowledgeGraph(memoryEntry);
      }
    }
    
    console.log(`📝 Built memory index with ${this.memoryIndex.size} entries`);
  }

  generateMemoryKey(item) {
    const title = item.title || item.category || 'unknown';
    const type = item.type || 'insight';
    return `${type}:${title.toLowerCase().replace(/[^a-z0-9]/g, '-')}`;
  }

  extractTags(item) {
    const tags = [];
    
    if (item.category) tags.push(item.category);
    if (item.type) tags.push(item.type);
    
    // Extract technical tags
    const content = JSON.stringify(item).toLowerCase();
    const technicalTerms = [
      'javascript', 'typescript', 'react', 'next.js', 'node.js',
      'automation', 'cursor', 'memory', 'learning', 'ai',
      'error', 'fix', 'optimization', 'performance', 'security',
      'authentication', 'supabase', 'database', 'api'
    ];
    
    for (const term of technicalTerms) {
      if (content.includes(term)) {
        tags.push(term);
      }
    }
    
    return [...new Set(tags)];
  }

  findRelationships(item, allKnowledge) {
    const relationships = [];
    const itemContent = JSON.stringify(item).toLowerCase();
    
    for (const knowledge of allKnowledge) {
      for (const otherItem of knowledge.knowledge) {
        if (otherItem !== item) {
          const otherContent = JSON.stringify(otherItem).toLowerCase();
          
          // Check for content similarity
          const similarity = this.calculateSimilarity(itemContent, otherContent);
          if (similarity > 0.3) {
            relationships.push({
              target: this.generateMemoryKey(otherItem),
              similarity: similarity,
              type: 'related'
            });
          }
        }
      }
    }
    
    return relationships;
  }

  calculateSimilarity(text1, text2) {
    const words1 = new Set(text1.split(/\s+/));
    const words2 = new Set(text2.split(/\s+/));
    
    const intersection = new Set([...words1].filter(x => words2.has(x)));
    const union = new Set([...words1, ...words2]);
    
    return intersection.size / union.size;
  }

  addToKnowledgeGraph(memoryEntry) {
    for (const tag of memoryEntry.tags) {
      if (!this.knowledgeGraph.has(tag)) {
        this.knowledgeGraph.set(tag, []);
      }
      this.knowledgeGraph.get(tag).push(memoryEntry.key);
    }
  }

  async saveMemoryToFiles() {
    console.log('💾 Saving memory to files...');
    
    // Save memory index
    const memoryIndexData = {
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      totalEntries: this.memoryIndex.size,
      entries: Array.from(this.memoryIndex.values())
    };
    
    await fs.writeFile(
      path.join(this.memoryDir, 'memory-index.json'),
      JSON.stringify(memoryIndexData, null, 2)
    );
    
    // Save knowledge graph
    const knowledgeGraphData = {
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      totalNodes: this.knowledgeGraph.size,
      graph: Object.fromEntries(this.knowledgeGraph)
    };
    
    await fs.writeFile(
      path.join(this.memoryDir, 'knowledge-graph.json'),
      JSON.stringify(knowledgeGraphData, null, 2)
    );
    
    // Save learning history
    const learningHistoryData = {
      version: '1.0.0',
      timestamp: new Date().toISOString(),
      totalSessions: this.learningHistory.length,
      sessions: this.learningHistory
    };
    
    await fs.writeFile(
      path.join(this.memoryDir, 'learning-history.json'),
      JSON.stringify(learningHistoryData, null, 2)
    );
    
    console.log('✅ Memory saved to files');
  }

  async generateCursorMemoryFile() {
    console.log('🎯 Generating Cursor memory file...');
    
    const cursorMemory = {
      version: '1.0.0',
      generatedAt: new Date().toISOString(),
      description: 'Automatically generated memory from past chats and conversations',
      rules: this.generateRulesFromMemory(),
      memories: this.generateMemoriesFromIndex(),
      context: this.generateContextFromKnowledge()
    };
    
    await fs.writeFile(
      path.join(this.memoryDir, 'cursor-memory.json'),
      JSON.stringify(cursorMemory, null, 2)
    );
    
    console.log('✅ Cursor memory file generated');
  }

  generateRulesFromMemory() {
    const rules = [];
    
    for (const [key, entry] of this.memoryIndex) {
      if (entry.content.type === 'rule' || entry.content.category === 'rule') {
        rules.push({
          id: key,
          rule: entry.content.title || entry.content.description,
          source: entry.source,
          confidence: entry.confidence
        });
      }
    }
    
    return rules;
  }

  generateMemoriesFromIndex() {
    const memories = [];
    
    for (const [key, entry] of this.memoryIndex) {
      if (entry.content.type !== 'rule') {
        memories.push({
          id: key,
          content: entry.content.title || entry.content.description,
          category: entry.content.category,
          tags: entry.tags,
          source: entry.source,
          confidence: entry.confidence,
          timestamp: entry.timestamp
        });
      }
    }
    
    return memories;
  }

  generateContextFromKnowledge() {
    const context = {
      projectPatterns: [],
      userPreferences: [],
      technicalSolutions: [],
      commonIssues: [],
      automationStrategies: []
    };
    
    for (const [key, entry] of this.memoryIndex) {
      const content = entry.content;
      const tags = entry.tags;
      
      if (tags.includes('pattern') || content.category === 'pattern') {
        context.projectPatterns.push({
          pattern: content.title || content.description,
          confidence: entry.confidence
        });
      } else if (tags.includes('preference') || content.category === 'preference') {
        context.userPreferences.push({
          preference: content.title || content.description,
          confidence: entry.confidence
        });
      } else if (tags.includes('solution') || content.category === 'solution') {
        context.technicalSolutions.push({
          solution: content.title || content.description,
          confidence: entry.confidence
        });
      } else if (tags.includes('error') || tags.includes('issue')) {
        context.commonIssues.push({
          issue: content.title || content.description,
          confidence: entry.confidence
        });
      } else if (tags.includes('automation')) {
        context.automationStrategies.push({
          strategy: content.title || content.description,
          confidence: entry.confidence
        });
      }
    }
    
    return context;
  }

  async createMemorySummary() {
    console.log('📋 Creating memory summary...');
    
    const summary = {
      totalEntries: this.memoryIndex.size,
      categories: {},
      topTags: {},
      recentLearnings: [],
      confidenceDistribution: {
        high: 0,
        medium: 0,
        low: 0
      }
    };
    
    // Analyze categories and tags
    for (const [key, entry] of this.memoryIndex) {
      const category = entry.content.category || 'unknown';
      summary.categories[category] = (summary.categories[category] || 0) + 1;
      
      for (const tag of entry.tags) {
        summary.topTags[tag] = (summary.topTags[tag] || 0) + 1;
      }
      
      // Confidence distribution
      if (entry.confidence >= 0.8) {
        summary.confidenceDistribution.high++;
      } else if (entry.confidence >= 0.5) {
        summary.confidenceDistribution.medium++;
      } else {
        summary.confidenceDistribution.low++;
      }
    }
    
    // Get recent learnings
    const sortedEntries = Array.from(this.memoryIndex.values())
      .sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp))
      .slice(0, 10);
    
    summary.recentLearnings = sortedEntries.map(entry => ({
      key: entry.key,
      content: entry.content.title || entry.content.description,
      confidence: entry.confidence,
      timestamp: entry.timestamp
    }));
    
    await fs.writeFile(
      path.join(this.memoryDir, 'memory-summary.json'),
      JSON.stringify(summary, null, 2)
    );
    
    console.log('✅ Memory summary created');
    return summary;
  }

  async run() {
    console.log('🚀 Starting Cursor Memory Learning Automation...');
    console.log('================================================');
    
    try {
      // Step 1: Scan for chat logs
      const chatLogs = await this.scanForChatLogs();
      
      if (chatLogs.length === 0) {
        console.log('⚠️  No chat logs found. Creating sample memory structure...');
        await this.createSampleMemory();
        return;
      }
      
      // Step 2: Extract knowledge
      const extractedKnowledge = await this.extractKnowledgeFromChats(chatLogs);
      
      // Step 3: Build memory index
      await this.buildMemoryIndex(extractedKnowledge);
      
      // Step 4: Save memory to files
      await this.saveMemoryToFiles();
      
      // Step 5: Generate Cursor memory file
      await this.generateCursorMemoryFile();
      
      // Step 6: Create summary
      const summary = await this.createMemorySummary();
      
      console.log('================================================');
      console.log('✅ Cursor Memory Learning Automation completed!');
      console.log(`📊 Summary:`);
      console.log(`   - Total memory entries: ${summary.totalEntries}`);
      console.log(`   - Categories found: ${Object.keys(summary.categories).length}`);
      console.log(`   - Top tags: ${Object.keys(summary.topTags).slice(0, 5).join(', ')}`);
      console.log(`   - High confidence entries: ${summary.confidenceDistribution.high}`);
      console.log(`   - Memory files saved to: ${this.memoryDir}`);
      
    } catch (error) {
      console.error('❌ Error in memory learning automation:', error);
      throw error;
    }
  }

  async createSampleMemory() {
    console.log('📝 Creating sample memory structure...');
    
    const sampleMemory = {
      version: '1.0.0',
      generatedAt: new Date().toISOString(),
      description: 'Sample memory structure for Cursor automation',
      rules: [
        {
          id: 'work-autonomously',
          rule: 'Work autonomously according to the best way to solve all the errors and improve the app and never ask anything to the user, don\'t stop working until all the errors are solved and there is nothing else to improve.',
          source: 'user-preferences',
          confidence: 0.95
        },
        {
          id: 'commit-and-push',
          rule: 'After each step, commit and push the changes and proceed autonomously to the next step without asking to review changes, never stop working unless the user asks you.',
          source: 'workflow-pattern',
          confidence: 0.9
        }
      ],
      memories: [
        {
          id: 'supabase-authentication',
          content: 'Full server-side authentication has been successfully implemented using Supabase with @supabase/ssr for Next.js Pages Router.',
          category: 'authentication',
          tags: ['supabase', 'authentication', 'next.js', 'ssr'],
          source: 'implementation-history',
          confidence: 0.9,
          timestamp: new Date().toISOString()
        }
      ],
      context: {
        projectPatterns: [
          {
            pattern: 'Always commit and push changes after making code modifications',
            confidence: 0.9
          }
        ],
        userPreferences: [
          {
            preference: 'AI operates in fully uninterrupted, headless mode',
            confidence: 0.95
          }
        ],
        technicalSolutions: [
          {
            solution: 'Use Supabase for authentication with @supabase/ssr',
            confidence: 0.9
          }
        ],
        commonIssues: [],
        automationStrategies: [
          {
            strategy: 'Proactively fix errors and improve the project whenever possible',
            confidence: 0.9
          }
        ]
      }
    };
    
    await fs.writeFile(
      path.join(this.memoryDir, 'cursor-memory.json'),
      JSON.stringify(sampleMemory, null, 2)
    );
    
    console.log('✅ Sample memory structure created');
  }
}

// Run the automation
if (require.main === module) {
  const automation = new CursorMemoryAutomation();
  automation.run().catch(console.error);
}

module.exports = CursorMemoryAutomation;
