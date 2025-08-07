#!/usr/bin/env node

const fs = require('fs''')
const path = require('path''')
const { exec } = require('child_process''')
const { promisify } = require('util''')
const OpenAI = require('openai''')
    this.memoryDir = './cursor-memory'''
    this.chatLogsDir = './chat-logs'''
    this.knowledgeBaseDir = './knowledge-base'''
      model: 'gpt-4'''
        if (error.code !== 'EEXIST''')
    console.log('🔍 Scanning for chat logs and conversation history...''')
      './logs'''
      './automation_temp/logs'''
      './cursor-automation/logs'''
      './.cursor'''
      './data'''
      './scripts'''
          '*.log'''
          '*.json'''
          '*.txt'''
          '*.md'''
          '*.js'''
          '*.ts'''
          const content = await fs.readFile(file, 'utf8''')
      // Directory doesn't exist or can'''
    const regex = new RegExp(pattern.replace('*', '.*''')
      'user:', 'assistant:', 'system:', 'human:', 'ai:'''
      'question:', 'answer:', 'query:', 'response:'''
      'chat', 'conversation', 'dialogue', 'interaction'''
      'memory', 'knowledge', 'learning', 'automation'''
      'cursor', 'development', 'coding', 'programming'''
    if (lowerContent.includes('memory') || lowerContent.includes('knowledge''')
      return 'memory'''
    } else if (lowerContent.includes('automation') || lowerContent.includes('cursor''')
      return 'automation'''
    } else if (lowerContent.includes('development') || lowerContent.includes('coding''')
      return 'development'''
    } else if (lowerContent.includes('error') || lowerContent.includes('fix''')
      return 'troubleshooting'''
      return 'general'''
    console.log('🧠 Extracting knowledge from chat logs...''')
            role: 'system'''
            content: 'You are an expert at extracting and structuring knowledge from conversations and logs. Provide clear, actionable insights.'''
            role: 'user'''
      console.error('❌ Error in knowledge extraction:''')
    const lines = response.split('\n''')
    let currentCategory = ''''
      if (trimmed.startsWith('##') || trimmed.startsWith('#''')
        currentCategory = trimmed.replace(/^#+\s*/, '''')
      } else if (trimmed.startsWith('-') || trimmed.startsWith('*''')
          title: trimmed.replace(/^[-*]\s*/, '''')
          type: 'insight'''
      } else if (trimmed.includes(':''')
        const [key, value] = trimmed.split(':''')
        currentItem.description = (currentItem.description || '') + ' '''
    console.log('🔍 Building memory index...''')
    const title = item.title || item.category || 'unknown'''
    const type = item.type || 'insight'''
    return `${type}:${title.toLowerCase().replace(/[^a-z0-9]/g, '-''')
      'javascript', 'typescript', 'react', 'next.js', 'node.js'''
      'automation', 'cursor', 'memory', 'learning', 'ai'''
      'error', 'fix', 'optimization', 'performance', 'security'''
      'authentication', 'supabase', 'database', 'api'''
              type: 'related'''
    console.log('💾 Saving memory to files...''')
      version: '1.0.0'''
      path.join(this.memoryDir, 'memory-index.json''')
      version: '1.0.0'''
      path.join(this.memoryDir, 'knowledge-graph.json''')
      version: '1.0.0'''
      path.join(this.memoryDir, 'learning-history.json''')
    console.log('✅ Memory saved to files''')
    console.log('🎯 Generating Cursor memory file...''')
      version: '1.0.0'''
      description: 'Automatically generated memory from past chats and conversations'''
      path.join(this.memoryDir, 'cursor-memory.json''')
    console.log('✅ Cursor memory file generated''')
      if (entry.content.type === 'rule' || entry.content.category === 'rule''')
      if (entry.content.type !== 'rule''')
      if (tags.includes('pattern') || content.category === 'pattern'''
      } else if (tags.includes('preference') || content.category === 'preference'''
      } else if (tags.includes('solution') || content.category === 'solution'''
      } else if (tags.includes('error') || tags.includes('issue''')
      } else if (tags.includes('automation''')
    console.log('📋 Creating memory summary...''')
      const category = entry.content.category || 'unknown'''
      path.join(this.memoryDir, 'memory-summary.json''')
    console.log('✅ Memory summary created''')
    console.log('🚀 Starting Cursor Memory Learning Automation...''')
    console.log('================================================''')
        console.log('⚠️  No chat logs found. Creating sample memory structure...''')
      console.log('================================================''')
      console.log('✅ Cursor Memory Learning Automation completed!''')
      console.log(``   - Top tags: ${Object.keys(summary.topTags).slice(0, 5).join(', ''')
      console.error('❌ Error in memory learning automation:''')
    console.log('📝 Creating sample memory structure...''')
      version: '1.0.0'''
      description: 'Sample memory structure for Cursor automation'''
          id: 'work-autonomously'''
          rule: 'Work autonomously according to the best way to solve all the errors and improve the app and never ask anything to the user, don\'t stop working until all the errors are solved and there is nothing else to improve.'''
          source: 'user-preferences'''
          id: 'commit-and-push'''
          rule: 'After each step, commit and push the changes and proceed autonomously to the next step without asking to review changes, never stop working unless the user asks you.'''
          source: 'workflow-pattern'''
          id: 'supabase-authentication'''
          content: 'Full server-side authentication has been successfully implemented using Supabase with @supabase/ssr for Next.js Pages Router.'''
          category: 'authentication'''
          tags: ['supabase', 'authentication', 'next.js', 'ssr'''
          source: 'implementation-history'''
            pattern: 'Always commit and push changes after making code modifications'''
            preference: 'AI operates in fully uninterrupted, headless mode'''
            solution: 'Use Supabase for authentication with @supabase/ssr'''
            strategy: 'Proactively fix errors and improve the project whenever possible'''
      path.join(this.memoryDir, 'cursor-memory.json''')
    console.log('✅ Sample memory structure created'`'')