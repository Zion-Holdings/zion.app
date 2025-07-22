#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');

class AppImprovementOrchestrator {
  constructor() {
    this.isRunning = false;
    this.improvementCycle = 0;
    this.lastImprovementTime = null;
    this.errorCount = 0;
    this.successCount = 0;
    this.currentTask = null;
    this.continuousMode = process.argv.includes('--continuous');

    this.automationSystems = [
      {
        name: 'comprehensive',
        port: 3001,
        script: 'comprehensive-app-automation.cjs',
      },
      { name: 'ai', port: 3002, script: 'ai-continuous-improvement.cjs' },
      { name: 'cursor', port: 3005, script: 'cursor-ai-delegator.cjs' },
      {
        name: 'coordinator',
        port: 3003,
        script: 'multi-computer-coordinator.cjs',
      },
    ];
  }

  async start() {
    if (this.isRunning) {
      console.log('Orchestrator is already running');
      return;
    }

    console.log('🎼 Starting App Improvement Orchestrator...');
    this.isRunning = true;

    // Start all automation systems
    await this.startAutomationSystems();

    // Start improvement loop
    this.startImprovementLoop();

    // Start monitoring
    this.startMonitoring();

    console.log('✅ App Improvement Orchestrator started successfully!');
    console.log(
      `📊 Continuous mode: ${this.continuousMode ? 'Enabled' : 'Disabled'}`,
    );
  }

  stop() {
    console.log('🛑 Stopping App Improvement Orchestrator...');
    this.isRunning = false;
  }

  async startAutomationSystems() {
    console.log('🚀 Starting automation systems...');

    for (const system of this.automationSystems) {
      try {
        await this.startSystem(system);
        console.log(`✅ ${system.name} automation started`);
      } catch (error) {
        console.error(`❌ Failed to start ${system.name} automation:`, error);
      }
    }
  }

  async startSystem(system) {
    return new Promise((resolve, reject) => {
      const process = spawn(
        'node',
        [path.join(__dirname, system.script), 'start'],
        {
          stdio: 'pipe',
          detached: false,
        },
      );

      process.stdout.on('data', (data) => {
        console.log(`[${system.name}] ${data.toString().trim()}`);
      });

      process.stderr.on('data', (data) => {
        console.error(`[${system.name} Error] ${data.toString().trim()}`);
      });

      process.on('close', (code) => {
        console.log(`[${system.name}] Process exited with code ${code}`);
      });

      // Wait for system to start
      setTimeout(() => {
        resolve();
      }, 3000);
    });
  }

  startImprovementLoop() {
    if (!this.continuousMode) {
      // Run once
      this.runImprovementCycle();
      return;
    }

    // Run every 15 minutes in continuous mode
    setInterval(
      async () => {
        if (!this.isRunning) return;

        try {
          await this.runImprovementCycle();
        } catch (error) {
          console.error('Improvement cycle failed:', error);
          this.errorCount++;
        }
      },
      15 * 60 * 1000,
    );
  }

  async runImprovementCycle() {
    this.improvementCycle++;
    this.currentTask = `Improvement Cycle ${this.improvementCycle}`;
    this.lastImprovementTime = new Date();

    console.log(`🔄 Starting Improvement Cycle ${this.improvementCycle}...`);

    try {
      // 1. Check system health
      await this.checkSystemHealth();

      // 2. Run comprehensive improvements
      await this.runComprehensiveImprovements();

      // 3. Run AI improvements
      await this.runAIImprovements();

      // 4. Run Cursor delegations
      await this.runCursorDelegations();

      // 5. Distribute workload
      await this.distributeWorkload();

      // 6. Commit and push changes
      await this.commitAndPushChanges();

      this.successCount++;
      console.log(
        `✅ Improvement Cycle ${this.improvementCycle} completed successfully`,
      );
    } catch (error) {
      console.error(
        `❌ Improvement Cycle ${this.improvementCycle} failed:`,
        error,
      );
      this.errorCount++;
    } finally {
      this.currentTask = null;
    }
  }

  async checkSystemHealth() {
    console.log('🏥 Checking system health...');

    for (const system of this.automationSystems) {
      try {
        const response = await fetch(`http://localhost:${system.port}/health`);
        const health = await response.json();

        if (health.status === 'healthy') {
          console.log(`✅ ${system.name} is healthy`);
        } else {
          console.log(`⚠️ ${system.name} health check failed`);
        }
      } catch (error) {
        console.log(`❌ ${system.name} is not responding`);
      }
    }
  }

  async runComprehensiveImprovements() {
    console.log('🔧 Running comprehensive improvements...');

    try {
      // Trigger comprehensive automation
      const response = await fetch('http://localhost:3006/improve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ target: 'general', priority: 'high' }),
      });

      if (response.ok) {
        console.log('✅ Comprehensive improvements triggered');
      } else {
        console.log('⚠️ Comprehensive improvements failed');
      }
    } catch (error) {
      console.error('❌ Comprehensive improvements error:', error);
    }
  }

  async runAIImprovements() {
    console.log('🤖 Running AI improvements...');

    try {
      // Trigger AI improvements
      const response = await fetch('http://localhost:3007/improve', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ target: 'code-quality', priority: 'high' }),
      });

      if (response.ok) {
        console.log('✅ AI improvements triggered');
      } else {
        console.log('⚠️ AI improvements failed');
      }
    } catch (error) {
      console.error('❌ AI improvements error:', error);
    }
  }

  async runCursorDelegations() {
    console.log('📝 Running Cursor delegations...');

    try {
      // Submit tasks to Cursor delegator
      const tasks = [
        'Fix all TypeScript errors',
        'Optimize bundle size',
        'Improve code quality',
        'Update dependencies',
      ];

      for (const task of tasks) {
        const response = await fetch('http://localhost:3007/api/tasks/submit', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ task, priority: 'normal' }),
        });

        if (response.ok) {
          console.log(`✅ Task submitted: ${task}`);
        } else {
          console.log(`⚠️ Task submission failed: ${task}`);
        }
      }
    } catch (error) {
      console.error('❌ Cursor delegations error:', error);
    }
  }

  async distributeWorkload() {
    console.log('🌐 Distributing workload...');

    try {
      // Distribute tasks across multiple computers
      const response = await fetch('http://localhost:3007/api/tasks/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          task: 'Comprehensive app improvement',
          priority: 'high',
        }),
      });

      if (response.ok) {
        console.log('✅ Workload distributed');
      } else {
        console.log('⚠️ Workload distribution failed');
      }
    } catch (error) {
      console.error('❌ Workload distribution error:', error);
    }
  }

  async commitAndPushChanges() {
    console.log('💾 Committing and pushing changes...');

    try {
      // Check if there are changes to commit
      const status = execSync('git status --porcelain', { encoding: 'utf8' });

      if (status.trim()) {
        execSync('git add .', { stdio: 'inherit' });
        execSync('git commit -m "🤖 Automated improvements and fixes"', {
          stdio: 'inherit',
        });
        execSync('git push', { stdio: 'inherit' });
        console.log('✅ Changes committed and pushed');
      } else {
        console.log('📝 No changes to commit');
      }
    } catch (error) {
      console.error('❌ Failed to commit and push changes:', error);
    }
  }

  startMonitoring() {
    // Monitor every 5 minutes
    setInterval(
      () => {
        if (!this.isRunning) return;

        console.log(`📊 Orchestrator Status:`);
        console.log(`   - Improvement Cycles: ${this.improvementCycle}`);
        console.log(`   - Success Count: ${this.successCount}`);
        console.log(`   - Error Count: ${this.errorCount}`);
        console.log(
          `   - Last Improvement: ${this.lastImprovementTime ? this.lastImprovementTime.toISOString() : 'Never'}`,
        );
        console.log(`   - Current Task: ${this.currentTask || 'None'}`);
        console.log(
          `   - Continuous Mode: ${this.continuousMode ? 'Enabled' : 'Disabled'}`,
        );
      },
      5 * 60 * 1000,
    );
  }

  getStatus() {
    return {
      isRunning: this.isRunning,
      improvementCycle: this.improvementCycle,
      successCount: this.successCount,
      errorCount: this.errorCount,
      lastImprovementTime: this.lastImprovementTime,
      currentTask: this.currentTask,
      continuousMode: this.continuousMode,
    };
  }

  async runQuickImprovement() {
    console.log('⚡ Running quick improvement...');

    try {
      // Run linting fixes
      execSync('npm run lint:fix', { stdio: 'inherit' });

      // Run TypeScript check
      execSync('npm run typecheck', { stdio: 'inherit' });

      // Run build check
      execSync('npm run build', { stdio: 'inherit' });

      console.log('✅ Quick improvement completed');
    } catch (error) {
      console.error('❌ Quick improvement failed:', error);
    }
  }
}

// CLI interface
if (require.main === module) {
  const orchestrator = new AppImprovementOrchestrator();

  const command = process.argv[2];

  switch (command) {
    case 'start':
      orchestrator.start();

      // Handle graceful shutdown
      process.on('SIGINT', async () => {
        console.log('\n🛑 Received SIGINT, shutting down gracefully...');
        orchestrator.stop();
        process.exit(0);
      });

      process.on('SIGTERM', async () => {
        console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
        orchestrator.stop();
        process.exit(0);
      });
      break;

    case 'stop':
      orchestrator.stop();
      break;

    case 'status':
      const status = orchestrator.getStatus();
      console.log('Orchestrator Status:');
      console.log(JSON.stringify(status, null, 2));
      break;

    case 'quick':
      orchestrator.runQuickImprovement();
      break;

    default:
      console.log(
        'Usage: node app-improvement-orchestrator.cjs [start|stop|status|quick] [--continuous]',
      );
  }
}

module.exports = AppImprovementOrchestrator;
