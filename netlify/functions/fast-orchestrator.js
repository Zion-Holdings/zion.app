const { execSync } = require('child_process');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('🚀 fast-orchestrator function triggered');
    
    // Run quick automation tasks
    const tasks = [];
    
    // Task 1: Check git status
    try {
      const gitStatus = execSync('git status --porcelain', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        timeout: 10000
      });
      tasks.push({
        name: 'Git Status Check',
        success: true,
        result: gitStatus.trim() || 'No changes'
      });
    } catch (error) {
      tasks.push({
        name: 'Git Status Check',
        success: false,
        error: error.message
      });
    }
    
    // Task 2: Check disk usage
    try {
      const diskUsage = execSync('df -h .', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        timeout: 10000
      });
      tasks.push({
        name: 'Disk Usage Check',
        success: true,
        result: diskUsage.trim()
      });
    } catch (error) {
      tasks.push({
        name: 'Disk Usage Check',
        success: false,
        error: error.message
      });
    }
    
    // Task 3: Check process count
    try {
      const processCount = execSync('ps aux | wc -l', { 
        encoding: 'utf8',
        cwd: process.cwd(),
        timeout: 10000
      });
      tasks.push({
        name: 'Process Count Check',
        success: true,
        result: processCount.trim()
      });
    } catch (error) {
      tasks.push({
        name: 'Process Count Check',
        success: false,
        error: error.message
      });
    }
    
    console.log('✅ fast-orchestrator completed successfully');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        success: true,
        message: 'Fast orchestrator completed successfully',
        tasks: tasks,
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('❌ fast-orchestrator failed:', error.message);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        success: false,
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};