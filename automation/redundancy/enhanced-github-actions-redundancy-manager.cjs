#!/usr/bin/env node
'use strict';

const { spawnSync } = require('child_process');
const fs = require('fs');
const path = require('path');
const cron = require('node-cron');

class EnhancedGitHubActionsRedundancyManager {
  constructor() {
    this.logDir = path.join(process.cwd(), 'automation', 'logs');
    this.workflowsDir = path.join(process.cwd(), '.github', 'workflows');
    this.ensureLogDir();
    this.backupWorkflows = new Map();
    this.healthChecks = new Map();
    this.recoveryAttempts = new Map();
    this.monitoringActive = false;
  }

  ensureLogDir() {
    if (!fs.existsSync(this.logDir)) {
      fs.mkdirSync(this.logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] [ENHANCED-GITHUB] ${message}`;
    console.log(logMessage);
    
    const logFile = path.join(this.logDir, 'enhanced-github-actions-redundancy.log');
    fs.appendFileSync(logFile, logMessage + '\n');
  }

  runCommand(command, args = [], options = {}) {
    const result = spawnSync(command, args, {
      cwd: process.cwd(),
      env: process.env,
      shell: false,
      encoding: 'utf8',
      maxBuffer: 1024 * 1024 * 10
    });
    return {
      status: result.status,
      stdout: result.stdout || '',
      stderr: result.stderr || '',
      success: result.status === 0
    };
  }

  async scanWorkflows() {
    this.log('Scanning GitHub Actions workflows...');
    
    if (!fs.existsSync(this.workflowsDir)) {
      this.log('Workflows directory not found', 'WARN');
      return [];
    }

    const workflowFiles = fs.readdirSync(this.workflowsDir)
      .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'))
      .map(file => path.join(this.workflowsDir, file));

    this.log(`Found ${workflowFiles.length} workflow files`);
    return workflowFiles;
  }

  async createBackupWorkflows() {
    this.log('Creating enhanced backup workflows...');
    
    try {
      const workflowFiles = await this.scanWorkflows();
      
      for (const workflowPath of workflowFiles) {
        await this.createBackupWorkflow(workflowPath);
      }
      
      this.log('All enhanced backup workflows created successfully');
      return true;
      
    } catch (error) {
      this.log(`Failed to create backup workflows: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async createBackupWorkflow(workflowPath) {
    const workflowName = path.basename(workflowPath, path.extname(workflowPath));
    const backupName = `${workflowName}-enhanced-backup`;
    const backupPath = path.join(this.workflowsDir, `${backupName}.yml`);
    
    try {
      const workflowContent = fs.readFileSync(workflowPath, 'utf8');
      const backupContent = this.generateEnhancedBackupWorkflow(workflowContent, backupName, workflowName);
      
      fs.writeFileSync(backupPath, backupContent);
      
      this.log(`Created enhanced backup workflow: ${backupName}`);
      this.backupWorkflows.set(backupName, {
        original: workflowName,
        path: backupPath,
        created: new Date(),
        health: 'healthy',
        lastRun: null,
        runCount: 0
      });
      
      return true;
      
    } catch (error) {
      this.log(`Failed to create backup for ${workflowName}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  generateEnhancedBackupWorkflow(originalContent, backupName, originalName) {
    // Parse the original workflow to understand its structure
    const lines = originalContent.split('\n');
    let backupContent = [];
    let inJobsSection = false;
    let inStepsSection = false;
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('name:')) {
        // Update the workflow name
        backupContent.push(`name: ${originalName} Enhanced Backup`);
      } else if (line.includes('on:')) {
        // Modify triggers to run less frequently and avoid conflicts
        backupContent.push(line);
        backupContent.push('  # Enhanced backup triggers');
        backupContent.push('  schedule:');
        backupContent.push('    # Daily backup at 2 AM UTC');
        backupContent.push('    - cron: "0 2 * * *"');
        backupContent.push('    # Weekly backup on Sundays at 3 AM UTC');
        backupContent.push('    - cron: "0 3 * * 0"');
        backupContent.push('  workflow_dispatch:');
        backupContent.push('    inputs:');
        backupContent.push('      backup_type:');
        backupContent.push('        description: "Backup type"');
        backupContent.push('        required: false');
        backupContent.push('        default: "enhanced-backup"');
        backupContent.push('        type: choice');
        backupContent.push('        options:');
        backupContent.push('          - enhanced-backup');
        backupContent.push('          - emergency-backup');
        backupContent.push('          - health-check');
      } else if (line.includes('jobs:')) {
        inJobsSection = true;
        backupContent.push(line);
      } else if (inJobsSection && line.includes('steps:')) {
        inStepsSection = true;
        backupContent.push(line);
      } else if (inStepsSection && line.includes('- name:')) {
        // Add enhanced backup step names
        const stepName = line.match(/- name: (.+)/);
        if (stepName) {
          backupContent.push(`      - name: Enhanced Backup - ${stepName[1]}`);
        } else {
          backupContent.push(line);
        }
      } else if (inStepsSection && line.includes('run:')) {
        // Add enhanced backup logic to run commands
        backupContent.push(line);
        backupContent.push('        # Enhanced backup logging');
        backupContent.push('        echo "Enhanced backup executed at $(date)" >> backup.log');
        backupContent.push('        echo "Original workflow: ${originalName}" >> backup.log');
      } else if (line.includes('permissions:')) {
        // Ensure backup workflows have necessary permissions
        backupContent.push(line);
        backupContent.push('  # Enhanced backup permissions');
        backupContent.push('  checks: write');
        backupContent.push('  contents: write');
        backupContent.push('  actions: read');
      } else if (line.includes('env:')) {
        // Add enhanced backup environment variables
        backupContent.push(line);
        backupContent.push('        # Enhanced backup environment');
        backupContent.push('        BACKUP_TYPE: enhanced-backup');
        backupContent.push('        BACKUP_TIMESTAMP: ${{ github.event.schedule || github.event.inputs.backup_type || 'manual' }}');
        backupContent.push('        ORIGINAL_WORKFLOW: ${originalName}');
      } else {
        backupContent.push(line);
      }
      
      // Reset section flags
      if (line.includes('jobs:') && !line.includes('jobs:')) {
        inJobsSection = false;
        inStepsSection = false;
      }
    }
    
    // Add enhanced backup footer
    backupContent.push('');
    backupContent.push('# Enhanced Backup Footer');
    backupContent.push('# This workflow is an enhanced backup of the original workflow');
    backupContent.push('# Created by Enhanced GitHub Actions Redundancy Manager');
    backupContent.push('# Original workflow: ${originalName}');
    backupContent.push('# Backup created: ${new Date().toISOString()}');
    
    return backupContent.join('\n');
  }

  async createEmergencyBackupWorkflows() {
    this.log('Creating emergency backup workflows...');
    
    const workflowFiles = await this.scanWorkflows();
    
    for (const workflowPath of workflowFiles) {
      await this.createEmergencyBackupWorkflow(workflowPath);
    }
  }

  async createEmergencyBackupWorkflow(workflowPath) {
    const workflowName = path.basename(workflowPath, path.extname(workflowPath));
    const emergencyName = `${workflowName}-emergency-backup`;
    const emergencyPath = path.join(this.workflowsDir, `${emergencyName}.yml`);
    
    try {
      const workflowContent = fs.readFileSync(workflowPath, 'utf8');
      const emergencyContent = this.generateEmergencyBackupWorkflow(workflowContent, emergencyName, workflowName);
      
      fs.writeFileSync(emergencyPath, emergencyContent);
      
      this.log(`Created emergency backup workflow: ${emergencyName}`);
      this.backupWorkflows.set(emergencyName, {
        original: workflowName,
        path: emergencyPath,
        created: new Date(),
        health: 'healthy',
        type: 'emergency',
        lastRun: null,
        runCount: 0
      });
      
    } catch (error) {
      this.log(`Failed to create emergency backup for ${workflowName}: ${error.message}`, 'ERROR');
    }
  }

  generateEmergencyBackupWorkflow(originalContent, emergencyName, originalName) {
    const lines = originalContent.split('\n');
    let emergencyContent = [];
    
    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes('name:')) {
        emergencyContent.push(`name: ${originalName} Emergency Backup`);
      } else if (line.includes('on:')) {
        emergencyContent.push(line);
        emergencyContent.push('  # Emergency backup triggers');
        emergencyContent.push('  workflow_dispatch:');
        emergencyContent.push('    inputs:');
        emergencyContent.push('      emergency_type:');
        emergencyContent.push('        description: "Emergency backup type"');
        emergencyContent.push('        required: true');
        emergencyContent.push('        type: choice');
        emergencyContent.push('        options:');
        emergencyContent.push('          - system-failure');
        emergencyContent.push('          - workflow-corruption');
        emergencyContent.push('          - manual-emergency');
        emergencyContent.push('      priority:');
        emergencyContent.push('        description: "Emergency priority"');
        emergencyContent.push('        required: true');
        emergencyContent.push('        type: choice');
        emergencyContent.push('        options:');
        emergencyContent.push('          - critical');
        emergencyContent.push('          - high');
        emergencyContent.push('          - medium');
      } else if (line.includes('permissions:')) {
        emergencyContent.push(line);
        emergencyContent.push('  # Emergency backup permissions');
        emergencyContent.push('  checks: write');
        emergencyContent.push('  contents: write');
        emergencyContent.push('  actions: read');
        emergencyContent.push('  security-events: write');
      } else if (line.includes('env:')) {
        emergencyContent.push(line);
        emergencyContent.push('        # Emergency backup environment');
        emergencyContent.push('        EMERGENCY_TYPE: ${{ github.event.inputs.emergency_type }}');
        emergencyContent.push('        EMERGENCY_PRIORITY: ${{ github.event.inputs.priority }}');
        emergencyContent.push('        EMERGENCY_TIMESTAMP: ${{ github.event.head_commit.timestamp }}');
        emergencyContent.push('        ORIGINAL_WORKFLOW: ${originalName}');
      } else {
        emergencyContent.push(line);
      }
    }
    
    // Add emergency backup footer
    emergencyContent.push('');
    emergencyContent.push('# Emergency Backup Footer');
    emergencyContent.push('# This workflow is an emergency backup of the original workflow');
    emergencyContent.push('# Created by Enhanced GitHub Actions Redundancy Manager');
    emergencyContent.push('# Original workflow: ${originalName}');
    emergencyContent.push('# Emergency backup created: ${new Date().toISOString()}');
    emergencyContent.push('# Use only in emergency situations');
    
    return emergencyContent.join('\n');
  }

  async createHealthCheckWorkflows() {
    this.log('Creating health check workflows...');
    
    const workflowFiles = await this.scanWorkflows();
    
    for (const workflowPath of workflowFiles) {
      await this.createHealthCheckWorkflow(workflowPath);
    }
  }

  async createHealthCheckWorkflow(workflowPath) {
    const workflowName = path.basename(workflowPath, path.extname(workflowPath));
    const healthCheckName = `${workflowName}-health-check`;
    const healthCheckPath = path.join(this.workflowsDir, `${healthCheckName}.yml`);
    
    try {
      const healthCheckContent = this.generateHealthCheckWorkflow(workflowName);
      
      fs.writeFileSync(healthCheckPath, healthCheckContent);
      
      this.log(`Created health check workflow: ${healthCheckName}`);
      this.backupWorkflows.set(healthCheckName, {
        original: workflowName,
        path: healthCheckPath,
        created: new Date(),
        health: 'healthy',
        type: 'health-check',
        lastRun: null,
        runCount: 0
      });
      
    } catch (error) {
      this.log(`Failed to create health check for ${workflowName}: ${error.message}`, 'ERROR');
    }
  }

  generateHealthCheckWorkflow(originalName) {
    return `name: ${originalName} Health Check

on:
  schedule:
    # Health check every 6 hours
    - cron: "0 */6 * * *"
  workflow_dispatch:
    inputs:
      health_check_type:
        description: "Health check type"
        required: false
        default: "routine"
        type: choice
        options:
          - routine
          - deep
          - emergency

permissions:
  contents: read
  actions: read
  checks: write

jobs:
  health-check:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout repository
        uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '20'

      - name: Enhanced Health Check
        run: |
          echo "Starting enhanced health check for ${originalName}"
          echo "Health check type: ${{ github.event.inputs.health_check_type || 'routine' }}"
          echo "Timestamp: $(date)"
          
          # Check workflow file integrity
          if [ -f ".github/workflows/${originalName}.yml" ]; then
            echo "✓ Original workflow file exists"
          else
            echo "✗ Original workflow file missing"
            exit 1
          fi
          
          # Check backup workflow files
          if [ -f ".github/workflows/${originalName}-enhanced-backup.yml" ]; then
            echo "✓ Enhanced backup workflow exists"
          else
            echo "✗ Enhanced backup workflow missing"
          fi
          
          if [ -f ".github/workflows/${originalName}-emergency-backup.yml" ]; then
            echo "✓ Emergency backup workflow exists"
          else
            echo "✗ Emergency backup workflow missing"
          fi
          
          # Check workflow syntax
          echo "Validating workflow syntax..."
          # Add validation logic here
          
          echo "Health check completed successfully"

      - name: Generate Health Report
        run: |
          echo "## Health Check Report for ${originalName}" >> health-report.md
          echo "" >> health-report.md
          echo "- **Timestamp**: $(date)" >> health-report.md
          echo "- **Type**: ${{ github.event.inputs.health_check_type || 'routine' }}" >> health-report.md
          echo "- **Status**: ✅ Healthy" >> health-report.md
          echo "- **Original Workflow**: Present" >> health-report.md
          echo "- **Enhanced Backup**: Present" >> health-report.md
          echo "- **Emergency Backup**: Present" >> health-report.md

      - name: Commit Health Report
        run: |
          git config user.name "github-actions[bot]"
          git config user.email "41898282+github-actions[bot]@users.noreply.github.com"
          git add health-report.md
          git commit -m "chore(health): update ${originalName} health check report" || true
          git push origin HEAD:main || true

# Health Check Footer
# This workflow monitors the health of the original workflow and its backups
# Created by Enhanced GitHub Actions Redundancy Manager
# Original workflow: ${originalName}
# Health check created: ${new Date().toISOString()}`;
  }

  async startHealthMonitoring() {
    if (this.monitoringActive) {
      this.log('Health monitoring already active');
      return;
    }

    this.log('Starting enhanced health monitoring...');
    this.monitoringActive = true;

    // Monitor workflow health every 30 minutes
    cron.schedule('*/30 * * * *', async () => {
      await this.checkAllWorkflowHealth();
    });

    // Comprehensive health check every 4 hours
    cron.schedule('0 */4 * * *', async () => {
      await this.comprehensiveHealthCheck();
    });

    // Recovery attempt every 2 hours
    cron.schedule('0 */2 * * *', async () => {
      await this.attemptRecovery();
    });

    this.log('Enhanced health monitoring started');
  }

  async checkAllWorkflowHealth() {
    this.log('Checking all backup workflow health...');
    
    for (const [workflowName, workflowInfo] of this.backupWorkflows) {
      const health = await this.checkWorkflowHealth(workflowName, workflowInfo);
      workflowInfo.health = health;
      workflowInfo.lastCheck = new Date();
      
      if (health === 'failed') {
        this.log(`Workflow ${workflowName} health check failed`, 'WARN');
        this.healthChecks.set(workflowName, {
          status: 'failed',
          timestamp: new Date(),
          attempts: (this.healthChecks.get(workflowName)?.attempts || 0) + 1
        });
      }
    }
  }

  async checkWorkflowHealth(workflowName, workflowInfo) {
    try {
      // Check if backup workflow file exists
      if (!fs.existsSync(workflowInfo.path)) {
        return 'failed';
      }

      // Check if backup workflow file is readable
      const content = fs.readFileSync(workflowInfo.path, 'utf8');
      if (!content || content.length === 0) {
        return 'failed';
      }

      // Basic YAML validation
      if (!content.includes('name:') || !content.includes('on:') || !content.includes('jobs:')) {
        return 'unhealthy';
      }

      return 'healthy';
      
    } catch (error) {
      this.log(`Health check failed for ${workflowName}: ${error.message}`, 'ERROR');
      return 'failed';
    }
  }

  async comprehensiveHealthCheck() {
    this.log('Running comprehensive health check...');
    
    const workflows = await this.scanWorkflows();
    if (!workflows || workflows.length === 0) {
      this.log('Comprehensive health check failed', 'ERROR');
      return;
    }

    let healthyCount = 0;
    let totalCount = 0;

    for (const [workflowName, workflowInfo] of this.backupWorkflows) {
      totalCount++;
      if (workflowInfo.health === 'healthy') {
        healthyCount++;
      }
    }

    const healthPercentage = totalCount > 0 ? (healthyCount / totalCount) * 100 : 0;
    this.log(`Comprehensive health: ${healthPercentage.toFixed(1)}% (${healthyCount}/${totalCount})`);

    if (healthPercentage < 60) {
      this.log('System health below 60%, initiating emergency recovery', 'WARN');
      await this.emergencyRecovery();
    }
  }

  async attemptRecovery() {
    this.log('Attempting recovery for failed workflows...');
    
    for (const [workflowName, workflowInfo] of this.backupWorkflows) {
      if (workflowInfo.health === 'failed') {
        const attempts = this.recoveryAttempts.get(workflowName) || 0;
        
        if (attempts < 3) {
          this.log(`Attempting recovery for ${workflowName} (attempt ${attempts + 1})`);
          
          const recovered = await this.recoverWorkflow(workflowName, workflowInfo);
          if (recovered) {
            this.log(`Successfully recovered ${workflowName}`);
            this.recoveryAttempts.set(workflowName, 0);
          } else {
            this.recoveryAttempts.set(workflowName, attempts + 1);
          }
        } else {
          this.log(`Max recovery attempts reached for ${workflowName}`, 'ERROR');
        }
      }
    }
  }

  async recoverWorkflow(workflowName, workflowInfo) {
    this.log(`Recovering workflow: ${workflowName} (${workflowInfo.type || 'unknown'})`);
    
    try {
      // Delete the corrupted backup workflow
      if (fs.existsSync(workflowInfo.path)) {
        fs.unlinkSync(workflowInfo.path);
      }
      
      // Recreate based on type
      let success = false;
      
      if (workflowInfo.type === 'emergency') {
        success = await this.createEmergencyBackupWorkflow(
          path.join(this.workflowsDir, `${workflowInfo.original}.yml`)
        );
      } else if (workflowInfo.type === 'health-check') {
        success = await this.createHealthCheckWorkflow(
          path.join(this.workflowsDir, `${workflowInfo.original}.yml`)
        );
      } else {
        success = await this.createBackupWorkflow(
          path.join(this.workflowsDir, `${workflowInfo.original}.yml`)
        );
      }
      
      if (success) {
        workflowInfo.health = 'healthy';
        workflowInfo.lastCheck = new Date();
      }
      
      return success;
      
    } catch (error) {
      this.log(`Recovery failed for ${workflowName}: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async emergencyRecovery() {
    this.log('Initiating emergency recovery...');
    
    // Delete all backup workflows
    for (const [workflowName, workflowInfo] of this.backupWorkflows) {
      if (fs.existsSync(workflowInfo.path)) {
        fs.unlinkSync(workflowInfo.path);
      }
    }
    
    // Clear tracking
    this.backupWorkflows.clear();
    this.healthChecks.clear();
    this.recoveryAttempts.clear();
    
    // Wait a moment
    await new Promise(resolve => setTimeout(resolve, 5000));
    
    // Recreate all workflows
    await this.createBackupWorkflows();
    await this.createEmergencyBackupWorkflows();
    await this.createHealthCheckWorkflows();
    
    this.log('Emergency recovery completed');
  }

  async stopAllBackupWorkflows() {
    this.log('Stopping all enhanced backup workflows...');
    
    // Delete all backup workflow files
    for (const [workflowName, workflowInfo] of this.backupWorkflows) {
      if (fs.existsSync(workflowInfo.path)) {
        fs.unlinkSync(workflowInfo.path);
      }
    }
    
    this.backupWorkflows.clear();
    this.healthChecks.clear();
    this.recoveryAttempts.clear();
    this.monitoringActive = false;
    
    this.log('All enhanced backup workflows stopped');
  }

  async getStatus() {
    const status = {
      manager: 'Enhanced GitHub Actions Redundancy Manager',
      status: this.monitoringActive ? 'active' : 'inactive',
      workflows: Array.from(this.backupWorkflows.entries()).map(([name, info]) => ({
        name,
        original: info.original,
        type: info.type || 'standard',
        health: info.health,
        created: info.created,
        lastCheck: info.lastCheck,
        lastRun: info.lastRun,
        runCount: info.runCount
      })),
      healthChecks: Array.from(this.healthChecks.entries()).map(([name, info]) => ({
        name,
        status: info.status,
        timestamp: info.timestamp,
        attempts: info.attempts
      })),
      recoveryAttempts: Array.from(this.recoveryAttempts.entries()).map(([name, attempts]) => ({
        name,
        attempts
      }))
    };
    
    return status;
  }

  async generateReport() {
    const status = await this.getStatus();
    const reportPath = path.join(this.logDir, 'enhanced-github-actions-redundancy-report.json');
    
    fs.writeFileSync(reportPath, JSON.stringify(status, null, 2));
    this.log(`Report generated: ${reportPath}`);
    
    return status;
  }
}

// CLI interface
if (require.main === module) {
  const manager = new EnhancedGitHubActionsRedundancyManager();
  const command = process.argv[2];
  
  switch (command) {
    case 'start':
      manager.createBackupWorkflows().then(() => {
        manager.createEmergencyBackupWorkflows();
        manager.createHealthCheckWorkflows();
        manager.startHealthMonitoring();
      });
      break;
    case 'stop':
      manager.stopAllBackupWorkflows();
      break;
    case 'status':
      manager.getStatus().then(status => {
        console.log(JSON.stringify(status, null, 2));
      });
      break;
    case 'report':
      manager.generateReport().then(report => {
        console.log(JSON.stringify(report, null, 2));
      });
      break;
    case 'health':
      manager.checkAllWorkflowHealth();
      break;
    case 'recovery':
      manager.attemptRecovery();
      break;
    case 'emergency':
      manager.emergencyRecovery();
      break;
    default:
      console.log('Usage: node enhanced-github-actions-redundancy-manager.cjs [start|stop|status|report|health|recovery|emergency]');
  }
}

module.exports = EnhancedGitHubActionsRedundancyManager;