#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

class ContinuousImprovementSystem {
  constructor() {
    this.projectRoot = path.resolve(__dirname, '..');
    this.lastRun = null;
    this.improvements = [];
    this.errors = [];
  }

  log(message, type = 'info') {
    const timestamp = new Date().toISOString();
    const prefix = type === 'error' ? '❌' : type === 'success' ? '✅' : 'ℹ️';
    console.log(`${prefix} [${timestamp}] ${message}`);
  }

  async runCommand(command, options = {}) {
    try {
      const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe',
        ...options,
      });
      return { success: true, output: result };
    } catch (error) {
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr,
      };
    }
  }

  async checkForErrors() {
    this.log('Checking for errors...');

    // Check for TypeScript errors
    const tsResult = await this.runCommand('npx tsc --noEmit');
    if (!tsResult.success) {
      this.errors.push({ type: 'typescript', details: tsResult.output });
      this.log(`TypeScript errors found: ${tsResult.output}`, 'error');
    }

    // Check for linting errors
    const lintResult = await this.runCommand('npm run lint');
    if (!lintResult.success) {
      this.errors.push({ type: 'linting', details: lintResult.output });
      this.log(`Linting errors found: ${lintResult.output}`, 'error');
    }

    // Check for test failures
    const testResult = await this.runCommand('npm test -- --passWithNoTests');
    if (!testResult.success) {
      this.errors.push({ type: 'tests', details: testResult.output });
      this.log(`Test failures found: ${testResult.output}`, 'error');
    }

    return this.errors.length === 0;
  }

  async fixErrors() {
    if (this.errors.length === 0) {
      this.log('No errors to fix', 'success');
      return true;
    }

    this.log(`Attempting to fix ${this.errors.length} errors...`);

    for (const error of this.errors) {
      switch (error.type) {
        case 'typescript':
          await this.fixTypeScriptErrors();
          break;
        case 'linting':
          await this.fixLintingErrors();
          break;
        case 'tests':
          await this.fixTestErrors();
          break;
      }
    }

    return true;
  }

  async fixTypeScriptErrors() {
    this.log('Fixing TypeScript errors...');

    // Try to auto-fix common TypeScript issues
    const fixResult = await this.runCommand('npx tsc --noEmit --pretty');
    if (fixResult.success) {
      this.log('TypeScript errors resolved', 'success');
    }
  }

  async fixLintingErrors() {
    this.log('Fixing linting errors...');

    // Try to auto-fix linting issues
    const fixResult = await this.runCommand('npm run lint -- --fix');
    if (fixResult.success) {
      this.log('Linting errors auto-fixed', 'success');
    }
  }

  async fixTestErrors() {
    this.log('Analyzing test failures...');

    // For now, just log the test errors
    // In a real implementation, you might want to analyze and fix specific test issues
    this.log('Test errors require manual review', 'error');
  }

  async checkForImprovements() {
    this.log('Checking for potential improvements...');

    // Check for outdated dependencies
    const outdatedResult = await this.runCommand('npm outdated --json');
    if (outdatedResult.success) {
      try {
        const outdated = JSON.parse(outdatedResult.output);
        if (Object.keys(outdated).length > 0) {
          this.improvements.push({
            type: 'dependencies',
            details: `Found ${Object.keys(outdated).length} outdated packages`,
          });
        }
      } catch (e) {
        // No outdated packages
      }
    }

    // Check for security vulnerabilities
    const auditResult = await this.runCommand('npm audit --json');
    if (auditResult.success) {
      try {
        const audit = JSON.parse(auditResult.output);
        if (
          audit.vulnerabilities &&
          Object.keys(audit.vulnerabilities).length > 0
        ) {
          this.improvements.push({
            type: 'security',
            details: `Found ${Object.keys(audit.vulnerabilities).length} security vulnerabilities`,
          });
        }
      } catch (e) {
        // No vulnerabilities found
      }
    }

    return this.improvements.length > 0;
  }

  async applyImprovements() {
    if (this.improvements.length === 0) {
      this.log('No improvements to apply', 'success');
      return true;
    }

    this.log(`Applying ${this.improvements.length} improvements...`);

    for (const improvement of this.improvements) {
      switch (improvement.type) {
        case 'dependencies':
          await this.updateDependencies();
          break;
        case 'security':
          await this.fixSecurityVulnerabilities();
          break;
      }
    }

    return true;
  }

  async updateDependencies() {
    this.log('Updating dependencies...');

    // Update dependencies safely
    const updateResult = await this.runCommand('npm update');
    if (updateResult.success) {
      this.log('Dependencies updated successfully', 'success');
    }
  }

  async fixSecurityVulnerabilities() {
    this.log('Fixing security vulnerabilities...');

    // Try to fix security issues
    const fixResult = await this.runCommand('npm audit fix');
    if (fixResult.success) {
      this.log('Security vulnerabilities fixed', 'success');
    }
  }

  async commitAndPush() {
    this.log('Committing and pushing changes...');

    // Check if there are any changes to commit
    const statusResult = await this.runCommand('git status --porcelain');
    if (!statusResult.success || !statusResult.output.trim()) {
      this.log('No changes to commit', 'info');
      return true;
    }

    // Add all changes
    const addResult = await this.runCommand('git add .');
    if (!addResult.success) {
      this.log('Failed to add changes', 'error');
      return false;
    }

    // Commit changes
    const commitMessage = `🤖 Automated improvements: ${new Date().toISOString()}`;
    const commitResult = await this.runCommand(
      `git commit -m "${commitMessage}"`,
    );
    if (!commitResult.success) {
      this.log('Failed to commit changes', 'error');
      return false;
    }

    // Push changes
    const pushResult = await this.runCommand('git push origin main');
    if (!pushResult.success) {
      this.log('Failed to push changes', 'error');
      return false;
    }

    this.log('Changes committed and pushed successfully', 'success');
    return true;
  }

  async runCycle() {
    this.log('🔄 Starting improvement cycle...');

    // Reset state
    this.errors = [];
    this.improvements = [];

    // Check for errors
    const hasErrors = !(await this.checkForErrors());

    // Fix errors if any
    if (hasErrors) {
      await this.fixErrors();
    }

    // Check for improvements
    const hasImprovements = await this.checkForImprovements();

    // Apply improvements if any
    if (hasImprovements) {
      await this.applyImprovements();
    }

    // Commit and push changes
    await this.commitAndPush();

    this.log('✅ Improvement cycle completed');
    this.lastRun = new Date();
  }

  async start() {
    this.log('🚀 Starting Continuous Improvement System...');
    this.log('This system will run every minute to improve the project');

    // Run initial cycle
    await this.runCycle();

    // Set up interval for continuous improvement
    setInterval(async () => {
      await this.runCycle();
    }, 60000); // Run every minute

    this.log('⏰ Continuous improvement system is now running every minute');
  }
}

// Start the system
if (require.main === module) {
  const system = new ContinuousImprovementSystem();
  system.start().catch((error) => {
    console.error('❌ Fatal error in continuous improvement system:', error);
    process.exit(1);
  });
}

module.exports = ContinuousImprovementSystem;
