
const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' })
  ]
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple()
  }));
}

#!/usr/bin/env node

/**
 * Targeted Self-Healing System
 * Only fixes specific known issues without breaking the code
 */

const fs = require('fs')
const path = require('path')
const { execSync, spawn } = require('child_process')
class TargetedHealer {
  constructor() {
    this.logFile = 'logs/targeted-healer.log';
    this.ensureLogDirectory();
    this.fixesApplied = [];
  }

  ensureLogDirectory() {
    const logDir = path.dirname(this.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString()
const logMessage = `[${timestamp}] [${level}] ${message}`;
    logger.info(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async run() {
    this.log('Starting targeted self-healing system...');

    try {
      // Step 1: Apply targeted fixes
      await this.applyTargetedFixes();

      // Step 2: Run build
      const buildResult = await this.runBuild();

      if (buildResult.success) {
        this.log('Build successful after targeted healing!');
        await this.commitAndDeploy();
      } else {
        this.log('Build still failed, attempting ESLint fixes...');
        await this.applyESLintFixes();

        // Retry build
        const retryResult = await this.runBuild();
        if (retryResult.success) {
          this.log('Build successful after ESLint fixes!');
          await this.commitAndDeploy();
        } else {
          this.log('Build still failed after all fixes', 'ERROR');
          this.log('Build output:', retryResult.output);
        }
      }
    } catch (error) {
      this.log(`Targeted healing system failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async applyTargetedFixes() {
    this.log('Applying targeted fixes...')
const fixes = [
      this.fixSpecificUnusedVariables(),
      this.fixSpecificConsoleLogs(),
      this.fixSpecificImportIssues(),
    ];

    for (const fix of fixes) {
      try {
        const result = await fix;
        if (result) {
          this.log('Applied a targeted fix');
          this.fixesApplied.push('Targeted fix');
        }
      } catch (error) {
        this.log(`Targeted fix failed: ${error.message}`, 'ERROR');
      }
    }
  }

  async fixSpecificUnusedVariables() {
    this.log('Fixing specific unused variables...');

    // Only fix specific known unused variables
    const specificFiles = [
      'src/pages/JobDetails.tsx',
      'src/pages/SavedTalentsPage.tsx',
    ];

    let fixed = false;

    for (const file of specificFiles) {
      if (fs.existsSync(file)) {
        try {
          const content = fs.readFileSync(file, 'utf8')
const lines = content.split('\n');
          let modified = false;

          for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            // Only fix specific unused variable patterns
            if (
              line.includes('const _budget') ||
              line.includes('const _talentId') ||
              line.includes('const _talent')
            ) {
              const newLine = line.replace(/const _(\w+)/, 'const $1');
              if (newLine !== line) {
                lines[i] = newLine;
                modified = true;
              }
            }
          }

          if (modified) {
            fs.writeFileSync(file, lines.join('\n'));
            this.log(`Fixed specific unused variables in ${file}`);
            fixed = true;
          }
        } catch (error) {
          this.log(`Error fixing ${file}: ${error.message}`, 'ERROR');
        }
      }
    }

    return fixed;
  }

  async fixSpecificConsoleLogs() {
    this.log('Fixing specific console.log statements...');

    // Only fix console.logs in specific files
    const specificFiles = [
      'src/pages/JobDetails.tsx',
      'src/pages/SavedTalentsPage.tsx',
    ];

    let fixed = false;

    for (const file of specificFiles) {
      if (fs.existsSync(file)) {
        try {
          const content = fs.readFileSync(file, 'utf8')
const lines = content.split('\n');
          let modified = false;

          for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            if (
              line.includes('logger.info(') &&
              !file.includes('.test.') &&
              !file.includes('.spec.')
            ) {
              lines[i] = `// ${line}`;
              modified = true;
            }
          }

          if (modified) {
            fs.writeFileSync(file, lines.join('\n'));
            this.log(`Fixed console.log in ${file}`);
            fixed = true;
          }
        } catch (error) {
          this.log(`Error fixing ${file}: ${error.message}`, 'ERROR');
        }
      }
    }

    return fixed;
  }

  async fixSpecificImportIssues() {
    this.log('Checking for specific import issues...');

    // Check if specific missing imports exist
    const missingImports = [
      'src/pages/JobDetails.tsx',
      'src/pages/SavedTalentsPage.tsx',
    ];

    let fixed = false;

    for (const file of missingImports) {
      if (fs.existsSync(file)) {
        try {
          const content = fs.readFileSync(file, 'utf8');

          // Check for missing imports and add them
          if (
            content.includes('useRouter') &&
            !content.includes("import { useRouter } from 'next/router'")
          ) {
            const newContent = content.replace(
              /import React.*from 'react'/,
              `import React from 'react';\nimport { useRouter } from 'next/router'`,
            );

            if (newContent !== content) {
              fs.writeFileSync(file, newContent);
              this.log(`Fixed missing import in ${file}`);
              fixed = true;
            }
          }
        } catch (error) {
          this.log(
            `Error fixing imports in ${file}: ${error.message}`,
            'ERROR',
          );
        }
      }
    }

    return fixed;
  }

  async applyESLintFixes() {
    this.log('Applying ESLint auto-fixes...');

    try {
      execSync('npm run lint:fix', { stdio: 'inherit' });
      this.log('Applied ESLint auto-fixes');
      this.fixesApplied.push('ESLint fix');
      return true;
    } catch (error) {
      this.log(`ESLint fix failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async runBuild() {
    this.log('Running build...');

    return new Promise((resolve) => {
      const buildProcess = spawn('npm', ['run', 'build'], {
        stdio: ['pipe', 'pipe', 'pipe'],
        timeout: 300000, // 5 minutes
      });

      let output = '';
      let errorOutput = '';

      buildProcess.stdout.on('data', (data) => {
        output += data.toString();
        process.stdout.write(data);
      });

      buildProcess.stderr.on('data', (data) => {
        errorOutput += data.toString();
        process.stderr.write(data);
      });

      buildProcess.on('close', (code) => {
        const fullOutput = output + errorOutput;

        if (code === 0) {
          this.log('Build completed successfully');
          resolve({ success: true, output: fullOutput });
        } else {
          this.log(`Build failed with code ${code}`, 'ERROR');
          resolve({ success: false, output: fullOutput, code });
        }
      });

      buildProcess.on('error', (error) => {
        this.log(`Build process error: ${error.message}`, 'ERROR');
        resolve({ success: false, output: error.message, code: -1 });
      });
    });
  }

  async commitAndDeploy() {
    if (this.fixesApplied.length > 0) {
      try {
        const commitMessage = `Targeted heal: Applied ${this.fixesApplied.length} fixes`;

        execSync('git add .', { stdio: 'inherit' });
        execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
        execSync('git push', { stdio: 'inherit' });

        this.log('Changes committed and pushed successfully');
        this.log('Netlify build will be triggered automatically');
        return true;
      } catch (error) {
        this.log(`Failed to commit changes: ${error.message}`, 'ERROR');
        return false;
      }
    }
    return false;
  }
}

// Run the targeted healer
if (require.main === module) {
  const healer = new TargetedHealer();

  healer.run().catch((error) => {
    logger.error('Targeted healer failed:', error);
    process.exit(1);
  });
}

module.exports = TargetedHealer;


// Graceful shutdown handling
process.on('SIGINT', () => {
  console.log('\n🛑 Received SIGINT, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

process.on('SIGTERM', () => {
  console.log('\n🛑 Received SIGTERM, shutting down gracefully...');
  // Add cleanup logic here
  process.exit(0);
});

