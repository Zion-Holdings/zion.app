#!/usr/bin/env node

const fs = require('fs'
const path = require('path'
      'continuous-working-automation.js'
      'deep-analysis-agent.js'
      'project-development-autonomous-factory.js'
      'automation-monitor-and-maintainer.js'
      'variation-content-agents-factory.js'
      'ultimate-automation-launcher.js'
      'ultimate-automation-fixer.js'
      'ultimate-automation-factory.js'
    console.log('🚀 Starting Simple Automation Controller...'
    console.log('✅ Only working systems will be started'
    console.log('🔴 Problematic systems are blocked'
    const { spawn } = require('child_process'
    const child = spawn('node', ['continuous-working-automation.js'
      stdio: 'inherit'
    console.log('🟢 Continuous working automation started'
    console.log('🛑 Stopping all automation processes...'
    const { exec } = require('child_process'
    exec('pkill -f "continuous-working-automation"
    exec('ps aux | grep "continuous-working-automation"