#!/usr/bin/env node

const { execSync } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('🤖 Starting anchor-links-auto-fixer function...');
    
    // Run anchor links auto-fixing tasks
    const tasks = [
      'anchor-links-auto-fixer',
      'anchor-links-fixer',
      'links-fixer'
    ];
    
    for (const task of tasks) {
      try {
        const scriptPath = path.join(process.cwd(), 'automation', `${task}.cjs`);
        if (require('fs').existsSync(scriptPath)) {
          console.log(`Running ${task}...`);
          execSync(`node ${scriptPath}`, { stdio: 'inherit' });
        }
      } catch (taskError) {
        console.warn(`Warning: ${task} failed:`, taskError.message);
      }
    }
    
    console.log('✅ anchor-links-auto-fixer completed successfully');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'anchor-links-auto-fixer completed successfully',
        tasks: tasks,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('❌ anchor-links-auto-fixer failed:', error.message);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};