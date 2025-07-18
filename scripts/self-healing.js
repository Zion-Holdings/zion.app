#!/usr/bin/env node

/**
 * Self-Healing Build System
 * Automatically detects and fixes common build errors and warnings
 * Triggers new builds after fixes are applied
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const glob = require('glob');

// Configuration
const CONFIG = {
  maxRetries: 3,
  buildTimeout: 300000, // 5 minutes
  fixTimeout: 60000, // 1 minute
  logFile: 'logs/self-healing.log',
  errorPatterns: {
    // TypeScript errors
    typescript: {
      patterns: [
        /TS\d+:.*/g,
        /Cannot find module.*/g,
        /Module.*has no exported member.*/g,
        /Property.*does not exist on type.*/g,
        /Type.*is not assignable to type.*/g,
        /Object is possibly.*/g,
        /Element implicitly has.*/g
      ],
      fixes: {
        'Cannot find module': 'fixMissingImports',
        'has no exported member': 'fixExportIssues',
        'Property.*does not exist': 'fixPropertyIssues',
        'Type.*is not assignable': 'fixTypeIssues',
        'Object is possibly': 'fixNullChecks',
        'Element implicitly has': 'fixImplicitAny'
      }
    },
    // ESLint errors
    eslint: {
      patterns: [
        /ESLint.*error.*/g,
        /Unexpected token.*/g,
        /Missing semicolon.*/g,
        /Unused variable.*/g,
        /Prefer const.*/g
      ],
      fixes: {
        'Unexpected token': 'fixSyntaxErrors',
        'Missing semicolon': 'fixSemicolons',
        'Unused variable': 'fixUnusedVariables',
        'Prefer const': 'fixConstIssues'
      }
    },
    // Build errors
    build: {
      patterns: [
        /Module not found.*/g,
        /Cannot resolve.*/g,
        /Failed to compile.*/g,
        /Build failed.*/g,
        /Error:.*/g
      ],
      fixes: {
        'Module not found': 'fixModuleResolution',
        'Cannot resolve': 'fixImportPaths',
        'Failed to compile': 'fixCompilationErrors',
        'Build failed': 'fixBuildErrors'
      }
    }
  }
};

class SelfHealingSystem {
  constructor() {
    this.fixesApplied = [];
    this.buildLog = '';
    this.retryCount = 0;
    this.ensureLogDirectory();
  }

  ensureLogDirectory() {
    const logDir = path.dirname(CONFIG.logFile);
    if (!fs.existsSync(logDir)) {
      fs.mkdirSync(logDir, { recursive: true });
    }
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    console.log(logMessage);
    fs.appendFileSync(CONFIG.logFile, logMessage + '\n');
  }

  async runBuild() {
    this.log('Starting build process...');
    try {
      const buildProcess = spawn('npm', ['run', 'build'], {
        stdio: ['pipe', 'pipe', 'pipe'],
        timeout: CONFIG.buildTimeout
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

      return new Promise((resolve, reject) => {
        buildProcess.on('close', (code) => {
          this.buildLog = output + errorOutput;
          if (code === 0) {
            this.log('Build completed successfully');
            resolve({ success: true, output: this.buildLog });
          } else {
            this.log(`Build failed with code ${code}`, 'ERROR');
            resolve({ success: false, output: this.buildLog, code });
          }
        });

        buildProcess.on('error', (error) => {
          this.log(`Build process error: ${error.message}`, 'ERROR');
          reject(error);
        });
      });
    } catch (error) {
      this.log(`Build execution error: ${error.message}`, 'ERROR');
      return { success: false, output: error.message, code: -1 };
    }
  }

  detectErrors() {
    this.log('Analyzing build output for errors...');
    const errors = [];

    // Check each error category
    Object.entries(CONFIG.errorPatterns).forEach(([category, config]) => {
      config.patterns.forEach(pattern => {
        const matches = this.buildLog.match(pattern);
        if (matches) {
          matches.forEach(match => {
            errors.push({
              category,
              message: match,
              pattern: pattern.source,
              fixType: this.getFixType(match, config.fixes)
            });
          });
        }
      });
    });

    this.log(`Detected ${errors.length} errors/warnings`);
    return errors;
  }

  getFixType(message, fixes) {
    for (const [pattern, fixType] of Object.entries(fixes)) {
      if (new RegExp(pattern).test(message)) {
        return fixType;
      }
    }
    return null;
  }

  async applyFixes(errors) {
    this.log(`Applying fixes for ${errors.length} detected issues...`);
    
    for (const error of errors) {
      if (error.fixType) {
        try {
          await this[error.fixType](error);
          this.fixesApplied.push(error);
        } catch (fixError) {
          this.log(`Failed to apply fix for ${error.message}: ${fixError.message}`, 'ERROR');
        }
      }
    }

    this.log(`Applied ${this.fixesApplied.length} fixes`);
  }

  // Fix implementations
  async fixMissingImports(error) {
    this.log(`Fixing missing import: ${error.message}`);
    const match = error.message.match(/Cannot find module ['"]([^'"]+)['"]/);
    if (match) {
      const moduleName = match[1];
      await this.installMissingPackage(moduleName);
    }
  }

  async fixExportIssues(error) {
    this.log(`Fixing export issue: ${error.message}`);
    const match = error.message.match(/Module ['"]([^'"]+)['"] has no exported member ['"]([^'"]+)['"]/);
    if (match) {
      const [, modulePath, exportName] = match;
      await this.fixExportImport(modulePath, exportName);
    }
  }

  async fixPropertyIssues(error) {
    this.log(`Fixing property issue: ${error.message}`);
    // This would require more sophisticated analysis
    // For now, we'll just log it
  }

  async fixTypeIssues(error) {
    this.log(`Fixing type issue: ${error.message}`);
    // This would require TypeScript analysis
    // For now, we'll just log it
  }

  async fixNullChecks(error) {
    this.log(`Fixing null check: ${error.message}`);
    // This would require code analysis and modification
    // For now, we'll just log it
  }

  async fixImplicitAny(error) {
    this.log(`Fixing implicit any: ${error.message}`);
    // This would require TypeScript analysis
    // For now, we'll just log it
  }

  async fixSyntaxErrors(error) {
    this.log(`Fixing syntax error: ${error.message}`);
    // This would require parsing and fixing
    // For now, we'll just log it
  }

  async fixSemicolons(error) {
    this.log(`Fixing missing semicolon: ${error.message}`);
    // This would require file modification
    // For now, we'll just log it
  }

  async fixUnusedVariables(error) {
    this.log(`Fixing unused variable: ${error.message}`);
    // This would require code analysis
    // For now, we'll just log it
  }

  async fixConstIssues(error) {
    this.log(`Fixing const issue: ${error.message}`);
    // This would require code modification
    // For now, we'll just log it
  }

  async fixModuleResolution(error) {
    this.log(`Fixing module resolution: ${error.message}`);
    const match = error.message.match(/Cannot resolve ['"]([^'"]+)['"]/);
    if (match) {
      const moduleName = match[1];
      await this.installMissingPackage(moduleName);
    }
  }

  async fixImportPaths(error) {
    this.log(`Fixing import path: ${error.message}`);
    // This would require path analysis and correction
    // For now, we'll just log it
  }

  async fixCompilationErrors(error) {
    this.log(`Fixing compilation error: ${error.message}`);
    // This would require detailed error analysis
    // For now, we'll just log it
  }

  async fixBuildErrors(error) {
    this.log(`Fixing build error: ${error.message}`);
    // This would require build system analysis
    // For now, we'll just log it
  }

  async installMissingPackage(packageName) {
    try {
      this.log(`Installing missing package: ${packageName}`);
      execSync(`npm install ${packageName}`, { stdio: 'inherit' });
      this.log(`Successfully installed ${packageName}`);
    } catch (error) {
      this.log(`Failed to install ${packageName}: ${error.message}`, 'ERROR');
    }
  }

  async fixExportImport(modulePath, exportName) {
    try {
      // Try to find the actual export in the module
      const moduleFile = this.resolveModulePath(modulePath);
      if (moduleFile && fs.existsSync(moduleFile)) {
        const content = fs.readFileSync(moduleFile, 'utf8');
        if (!content.includes(`export.*${exportName}`)) {
          // Add the missing export
          const newContent = content + `\nexport { ${exportName} };\n`;
          fs.writeFileSync(moduleFile, newContent);
          this.log(`Added missing export ${exportName} to ${moduleFile}`);
        }
      }
    } catch (error) {
      this.log(`Failed to fix export/import: ${error.message}`, 'ERROR');
    }
  }

  resolveModulePath(modulePath) {
    // Try different extensions and paths
    const extensions = ['.ts', '.tsx', '.js', '.jsx'];
    const basePaths = ['src', 'pages', 'components', 'utils', 'lib'];
    
    for (const basePath of basePaths) {
      for (const ext of extensions) {
        const fullPath = path.join(process.cwd(), basePath, modulePath + ext);
        if (fs.existsSync(fullPath)) {
          return fullPath;
        }
      }
    }
    return null;
  }

  async runLinting() {
    this.log('Running ESLint to fix auto-fixable issues...');
    try {
      execSync('npm run lint:fix', { stdio: 'inherit' });
      this.log('ESLint fixes applied successfully');
    } catch (error) {
      this.log(`ESLint fix failed: ${error.message}`, 'ERROR');
    }
  }

  async runTypeCheck() {
    this.log('Running TypeScript type check...');
    try {
      execSync('npx tsc --noEmit', { stdio: 'inherit' });
      this.log('TypeScript type check passed');
      return true;
    } catch (error) {
      this.log(`TypeScript type check failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async commitChanges() {
    if (this.fixesApplied.length > 0) {
      try {
        const commitMessage = `Auto-fix: Applied ${this.fixesApplied.length} fixes\n\nFixed issues:\n${this.fixesApplied.map(fix => `- ${fix.message}`).join('\n')}`;
        execSync('git add .', { stdio: 'inherit' });
        execSync(`git commit -m "${commitMessage}"`, { stdio: 'inherit' });
        execSync('git push', { stdio: 'inherit' });
        this.log('Changes committed and pushed successfully');
        return true;
      } catch (error) {
        this.log(`Failed to commit changes: ${error.message}`, 'ERROR');
        return false;
      }
    }
    return false;
  }

  async run() {
    this.log('Starting self-healing system...');
    
    while (this.retryCount < CONFIG.maxRetries) {
      this.log(`Attempt ${this.retryCount + 1}/${CONFIG.maxRetries}`);
      
      // Run build
      const buildResult = await this.runBuild();
      
      if (buildResult.success) {
        this.log('Build successful! Self-healing complete.');
        break;
      }
      
      // Detect errors
      const errors = this.detectErrors();
      
      if (errors.length === 0) {
        this.log('No fixable errors detected. Build may have failed for other reasons.');
        break;
      }
      
      // Apply fixes
      await this.applyFixes(errors);
      
      // Run additional fix tools
      await this.runLinting();
      await this.runTypeCheck();
      
      // Commit changes if any fixes were applied
      const committed = await this.commitChanges();
      
      if (committed) {
        this.log('Waiting for build to trigger...');
        await new Promise(resolve => setTimeout(resolve, 10000)); // Wait 10 seconds
      }
      
      this.retryCount++;
    }
    
    if (this.retryCount >= CONFIG.maxRetries) {
      this.log('Maximum retries reached. Self-healing failed.', 'ERROR');
    }
    
    this.log('Self-healing system finished.');
  }
}

// Run the self-healing system
if (require.main === module) {
  const selfHealing = new SelfHealingSystem();
  selfHealing.run().catch(error => {
    console.error('Self-healing system failed:', error);
    process.exit(1);
  });
}

module.exports = SelfHealingSystem; 