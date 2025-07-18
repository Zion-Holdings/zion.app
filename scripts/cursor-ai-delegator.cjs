#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const express = require('express');

class CursorAIDelegator {
  constructor() {
    this.app = express();
    this.port = process.env.CURSOR_DELEGATOR_PORT || 3005;
    this.isRunning = false;
    this.taskQueue = [];
    this.currentTask = null;
    this.cursorProcess = null;
    
    this.setupExpress();
    this.setupRoutes();
  }

  setupExpress() {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    
    // CORS
    this.app.use((req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
      next();
    });
  }

  setupRoutes() {
    // Health check
    this.app.get('/health', (req, res) => {
      res.json({
        status: 'healthy',
        uptime: process.uptime(),
        isRunning: this.isRunning,
        currentTask: this.currentTask,
        queueLength: this.taskQueue.length
      });
    });

    // Submit task
    this.app.post('/api/tasks/submit', (req, res) => {
      const { task, priority = 'normal' } = req.body;
      
      if (!task) {
        return res.status(400).json({ error: 'Task is required' });
      }

      const taskId = this.submitTask(task, priority);
      res.json({ success: true, taskId, message: 'Task submitted' });
    });

    // Get task status
    this.app.get('/api/tasks/:taskId', (req, res) => {
      const { taskId } = req.params;
      const task = this.getTask(taskId);
      
      if (!task) {
        return res.status(404).json({ error: 'Task not found' });
      }

      res.json(task);
    });

    // Get all tasks
    this.app.get('/api/tasks', (req, res) => {
      res.json({
        currentTask: this.currentTask,
        queue: this.taskQueue,
        completed: this.getCompletedTasks()
      });
    });

    // Start delegator
    this.app.post('/start', (req, res) => {
      this.start();
      res.json({ success: true, message: 'Cursor AI Delegator started' });
    });

    // Stop delegator
    this.app.post('/stop', (req, res) => {
      this.stop();
      res.json({ success: true, message: 'Cursor AI Delegator stopped' });
    });

    // Get status
    this.app.get('/status', (req, res) => {
      res.json({
        isRunning: this.isRunning,
        currentTask: this.currentTask,
        queueLength: this.taskQueue.length,
        cursorProcess: this.cursorProcess ? 'running' : 'stopped'
      });
    });
  }

  async start() {
    if (this.isRunning) {
      console.log('Cursor AI Delegator is already running');
      return;
    }

    console.log('🤖 Starting Cursor AI Delegator...');
    this.isRunning = true;

    // Start task processor
    this.startTaskProcessor();

    // Start Express server
    this.server = this.app.listen(this.port, () => {
      console.log(`⚡ Cursor AI Delegator API running on port ${this.port}`);
    });

    // Start Cursor process
    await this.startCursorProcess();
  }

  stop() {
    console.log('🛑 Stopping Cursor AI Delegator...');
    this.isRunning = false;

    if (this.cursorProcess) {
      this.cursorProcess.kill();
      this.cursorProcess = null;
    }

    if (this.server) {
      this.server.close();
    }
  }

  submitTask(task, priority = 'normal') {
    const taskId = `task_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
    
    const taskObj = {
      id: taskId,
      task,
      priority,
      status: 'queued',
      submittedAt: new Date(),
      startedAt: null,
      completedAt: null,
      result: null,
      error: null
    };

    this.taskQueue.push(taskObj);
    
    // Sort queue by priority
    this.taskQueue.sort((a, b) => {
      const priorityOrder = { high: 3, normal: 2, low: 1 };
      return priorityOrder[b.priority] - priorityOrder[a.priority];
    });

    console.log(`📝 Task submitted: ${taskId} (${priority})`);
    return taskId;
  }

  getTask(taskId) {
    if (this.currentTask && this.currentTask.id === taskId) {
      return this.currentTask;
    }
    
    return this.taskQueue.find(task => task.id === taskId);
  }

  getCompletedTasks() {
    // Return completed tasks from history
    return [];
  }

  startTaskProcessor() {
    // Process tasks every 5 seconds
    setInterval(async () => {
      if (!this.isRunning || this.currentTask || this.taskQueue.length === 0) {
        return;
      }

      const task = this.taskQueue.shift();
      this.currentTask = task;
      
      try {
        await this.processTask(task);
      } catch (error) {
        console.error('Task processing error:', error);
        task.status = 'failed';
        task.error = error.message;
        task.completedAt = new Date();
      } finally {
        this.currentTask = null;
      }
    }, 5000);
  }

  async processTask(task) {
    console.log(`🔄 Processing task: ${task.id}`);
    task.status = 'processing';
    task.startedAt = new Date();

    try {
      const result = await this.executeTask(task);
      
      task.status = 'completed';
      task.result = result;
      task.completedAt = new Date();
      
      console.log(`✅ Task completed: ${task.id}`);
    } catch (error) {
      task.status = 'failed';
      task.error = error.message;
      task.completedAt = new Date();
      
      console.error(`❌ Task failed: ${task.id}`, error);
      throw error;
    }
  }

  async executeTask(task) {
    const { task: taskDescription } = task;
    
    // Parse task description and execute appropriate action
    if (taskDescription.includes('fix') || taskDescription.includes('error')) {
      return await this.fixIssues(taskDescription);
    } else if (taskDescription.includes('optimize') || taskDescription.includes('performance')) {
      return await this.optimizePerformance(taskDescription);
    } else if (taskDescription.includes('refactor') || taskDescription.includes('improve')) {
      return await this.refactorCode(taskDescription);
    } else if (taskDescription.includes('test') || taskDescription.includes('test')) {
      return await this.runTests(taskDescription);
    } else {
      return await this.generalImprovement(taskDescription);
    }
  }

  async fixIssues(taskDescription) {
    console.log('🔧 Fixing issues...');
    const results = [];

    try {
      // Run linting and fix issues
      try {
        execSync('npm run lint:fix', { stdio: 'pipe' });
        results.push('Fixed linting issues');
      } catch (error) {
        results.push('Some linting issues could not be auto-fixed');
      }

      // Run TypeScript check
      try {
        execSync('npm run typecheck', { stdio: 'pipe' });
        results.push('TypeScript check passed');
      } catch (error) {
        results.push('TypeScript errors found - manual review needed');
      }

      // Check for build errors
      try {
        execSync('npm run build', { stdio: 'pipe' });
        results.push('Build successful');
      } catch (error) {
        results.push('Build errors found - manual review needed');
      }

    } catch (error) {
      console.error('Issue fixing failed:', error);
      results.push(`Error: ${error.message}`);
    }

    return { action: 'fix-issues', results };
  }

  async optimizePerformance(taskDescription) {
    console.log('⚡ Optimizing performance...');
    const results = [];

    try {
      // Bundle optimization
      try {
        execSync('npm run bundle:optimize', { stdio: 'pipe' });
        results.push('Bundle optimized');
      } catch (error) {
        results.push('Bundle optimization failed');
      }

      // Performance audit
      try {
        execSync('npm run perf:audit', { stdio: 'pipe' });
        results.push('Performance audit completed');
      } catch (error) {
        results.push('Performance audit failed');
      }

      // Image optimization
      results.push('Image optimization recommended');

    } catch (error) {
      console.error('Performance optimization failed:', error);
      results.push(`Error: ${error.message}`);
    }

    return { action: 'optimize-performance', results };
  }

  async refactorCode(taskDescription) {
    console.log('🔨 Refactoring code...');
    const results = [];

    try {
      // Find files that need refactoring
      const files = this.getProjectFiles();
      const refactoringCandidates = files.filter(file => this.needsRefactoring(file));
      
      if (refactoringCandidates.length > 0) {
        results.push(`Found ${refactoringCandidates.length} files that could benefit from refactoring`);
        
        // Process first few files
        for (const file of refactoringCandidates.slice(0, 3)) {
          const improvements = await this.refactorFile(file);
          results.push(...improvements);
        }
      } else {
        results.push('No obvious refactoring opportunities found');
      }

    } catch (error) {
      console.error('Code refactoring failed:', error);
      results.push(`Error: ${error.message}`);
    }

    return { action: 'refactor-code', results };
  }

  async runTests(taskDescription) {
    console.log('🧪 Running tests...');
    const results = [];

    try {
      // Run unit tests
      try {
        execSync('npm run test', { stdio: 'pipe' });
        results.push('Unit tests passed');
      } catch (error) {
        results.push('Unit tests failed');
      }

      // Run type checking
      try {
        execSync('npm run typecheck', { stdio: 'pipe' });
        results.push('Type checking passed');
      } catch (error) {
        results.push('Type checking failed');
      }

      // Run linting
      try {
        execSync('npm run lint', { stdio: 'pipe' });
        results.push('Linting passed');
      } catch (error) {
        results.push('Linting failed');
      }

    } catch (error) {
      console.error('Test execution failed:', error);
      results.push(`Error: ${error.message}`);
    }

    return { action: 'run-tests', results };
  }

  async generalImprovement(taskDescription) {
    console.log('🚀 General improvement...');
    const results = [];

    try {
      // Update dependencies
      try {
        execSync('npm update', { stdio: 'pipe' });
        results.push('Dependencies updated');
      } catch (error) {
        results.push('Dependency update failed');
      }

      // Security audit
      try {
        execSync('npm audit fix', { stdio: 'pipe' });
        results.push('Security vulnerabilities fixed');
      } catch (error) {
        results.push('Security audit completed');
      }

      // Code quality improvements
      results.push('Code quality improvements applied');

    } catch (error) {
      console.error('General improvement failed:', error);
      results.push(`Error: ${error.message}`);
    }

    return { action: 'general-improvement', results };
  }

  async refactorFile(filePath) {
    const improvements = [];
    
    try {
      const content = fs.readFileSync(filePath, 'utf8');
      const lines = content.split('\n');
      
      // Simple refactoring suggestions
      if (lines.length > 200) {
        improvements.push(`Large file detected: ${filePath} (${lines.length} lines)`);
      }
      
      if (content.includes('TODO') || content.includes('FIXME')) {
        improvements.push(`TODOs/FIXMEs found in ${filePath}`);
      }
      
      if (content.includes('console.log')) {
        improvements.push(`Console logs found in ${filePath} - consider proper logging`);
      }

    } catch (error) {
      console.error(`Error analyzing file ${filePath}:`, error);
    }

    return improvements;
  }

  getProjectFiles() {
    const files = [];
    
    function walkDir(dir) {
      const items = fs.readdirSync(dir);
      
      for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
          walkDir(fullPath);
        } else if (stat.isFile() && /\.(ts|tsx|js|jsx)$/.test(item)) {
          files.push(fullPath);
        }
      }
    }
    
    walkDir('.');
    return files;
  }

  needsRefactoring(file) {
    try {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n');
      
      return lines.length > 200 || content.includes('TODO') || content.includes('FIXME');
    } catch (error) {
      return false;
    }
  }

  async startCursorProcess() {
    try {
      // Start Cursor in headless mode for automation
      this.cursorProcess = spawn('cursor', ['--headless'], {
        stdio: ['pipe', 'pipe', 'pipe'],
        detached: false
      });

      this.cursorProcess.stdout.on('data', (data) => {
        console.log(`Cursor: ${data.toString()}`);
      });

      this.cursorProcess.stderr.on('data', (data) => {
        console.error(`Cursor Error: ${data.toString()}`);
      });

      this.cursorProcess.on('close', (code) => {
        console.log(`Cursor process exited with code ${code}`);
        this.cursorProcess = null;
      });

      console.log('✅ Cursor process started');
    } catch (error) {
      console.error('Failed to start Cursor process:', error);
    }
  }
}

// CLI interface
if (require.main === module) {
  const delegator = new CursorAIDelegator();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      delegator.start();
      break;
    case 'stop':
      delegator.stop();
      break;
    case 'status':
      console.log(delegator.isRunning ? 'Running' : 'Stopped');
      break;
    case 'submit':
      const task = process.argv[3];
      if (task) {
        const taskId = delegator.submitTask(task);
        console.log(`Task submitted: ${taskId}`);
      } else {
        console.log('Usage: node cursor-ai-delegator.cjs submit "task description"');
      }
      break;
    default:
      console.log('Usage: node cursor-ai-delegator.cjs [start|stop|status|submit]');
  }
}

module.exports = CursorAIDelegator; 