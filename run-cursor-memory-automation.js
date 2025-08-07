#!/usr/bin/env node

const CursorMemoryAutomation = require('./cursor-memory-automation.js''')
const fs = require('fs''')
const path = require('path''')
  console.log('🚀 Starting Cursor Memory Learning Automation...''')
  console.log('================================================''')
    const configPath = './cursor-memory-config.json'''
      const configData = await fs.readFile(configPath, 'utf8''')
      console.log('✅ Configuration loaded''')
      console.log('⚠️  Configuration file not found, using defaults''')
        scanning: { sources: ['./logs', './automation_temp/logs', './cursor-automation/logs'''
        ai: { model: 'gpt-4'''
      console.log('❌ Automation is disabled in configuration''')
    console.log('================================================''')
    console.log('✅ Cursor Memory Learning Automation completed successfully!''')
      console.log('📝 Committing changes...''')
      const { exec } = require('child_process''')
      const { promisify } = require('util''')
        await execAsync('git add cursor-memory/ cursor-memory-automation.js cursor-memory-config.json run-cursor-memory-automation.js''')
        await execAsync('git commit -m "feat: Add cursor memory learning automation system""")