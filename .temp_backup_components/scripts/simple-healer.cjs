const winston = require('winston');

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json(),
  ),
  defaultMeta: { service: 'automation-script' },
  transports: [
    new winston.transports.File({ filename: 'logs/error.log', level: 'error' }),
    new winston.transports.File({ filename: 'logs/combined.log' }),
  ],
});

if (process.env.NODE_ENV !== 'production') {
  logger.add(
    new winston.transports.Console({
      format: winston.format.simple(),
    }),
  );
}

/**
 * Simple Self-Healing System
 * Focuses on the most common build and code issues
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
class SimpleHealer {
  constructor() {
    this.logFile = 'logs/simple-healer.log';
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
    const timestamp = new Date().toISOString();
    const logMessage = `[${timestamp}] [${level}] ${message}`;
    logger.info(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async run() {
    this.log('Starting simple self-healing system...');

    try {
      // Step 1: Apply common fixes
      await this.applyCommonFixes();

      // Step 2: Run build
      const buildResult = await this.runBuild();

      if (buildResult.success) {
        this.log('Build successful after healing!');
        await this.commitAndDeploy();
      } else {
        this.log('Build still failed, attempting additional fixes...');
        await this.applyAdvancedFixes();

        // Retry build
        const retryResult = await this.runBuild();
        if (retryResult.success) {
          this.log('Build successful after advanced fixes!');
          await this.commitAndDeploy();
        } else {
          this.log('Build still failed after all fixes', 'ERROR');
          this.log('Build output:', retryResult.output);
        }
      }
    } catch (error) {
      this.log(`Self-healing system failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async applyCommonFixes() {
    this.log('Applying common fixes...');
    const fixes = [
      this.fixUnusedVariables(),
      this.fixConsoleLogs(),
      this.fixMissingImports(),
      this.fixSyntaxIssues(),
      this.fixTypeIssues(),
    ];

    for (const fix of fixes) {
      try {
        const result = await fix;
        if (result) {
          this.log('Applied a fix');
          this.fixesApplied.push('Common fix');
        }
      } catch (error) {
        this.log(`Fix failed: ${error.message}`, 'ERROR');
      }
    }
  }

  async fixUnusedVariables() {
    this.log('Fixing unused variables...');
    const tsFiles = this.findTsFiles();
    let fixed = false;

    for (const file of tsFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        const lines = content.split('\n');
        let modified = false;

        for (let i = 0; i < lines.length; i++) {
          const line = lines[i];
          // Remove unused variable declarations (prefixed with _)
          if (line.includes('const _') && line.includes('=')) {
            lines[i] = `// ${line}`;
            modified = true;
          }
        }

        if (modified) {
          fs.writeFileSync(file, lines.join('\n'));
          this.log(`Fixed unused variables in ${file}`);
          fixed = true;
        }
      } catch (error) {
        this.log(`Error fixing ${file}: ${error.message}`, 'ERROR');
      }
    }

    return fixed;
  }

  async fixConsoleLogs() {
    this.log('Fixing console.log statements...');
    const tsFiles = this.findTsFiles();
    let fixed = false;

    for (const file of tsFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
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

    return fixed;
  }

  async fixMissingImports() {
    this.log('Checking for missing imports...');
    try {
      // Try to install common missing dependencies
      const commonDeps = ['@types/node', 'typescript', 'eslint'];
      for (const dep of commonDeps) {
        try {
          execSync(`npm install ${dep}`, { stdio: 'pipe' });
          this.log(`Installed ${dep}`);
        } catch (error) {
          // Ignore if already installed
        }
      }
      return true;
    } catch (error) {
      this.log(`Error fixing imports: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixSyntaxIssues() {
    this.log('Fixing syntax issues...');
    const tsFiles = this.findTsFiles();
    let fixed = false;

    for (const file of tsFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let newContent = content;

        // Fix common syntax issues
        newContent = newContent.replace(/([^;])\n/g, '$1;\n');

        // Fix missing brackets
        const openBraces = (newContent.match(/\{/g) || []).length;
        const closeBraces = (newContent.match(/\}/g) || []).length;
        if (openBraces > closeBraces) {
          newContent += '\n}'.repeat(openBraces - closeBraces);
        }

        if (newContent !== content) {
          fs.writeFileSync(file, newContent);
          this.log(`Fixed syntax in ${file}`);
          fixed = true;
        }
      } catch (error) {
        this.log(`Error fixing syntax in ${file}: ${error.message}`, 'ERROR');
      }
    }

    return fixed;
  }

  async fixTypeIssues() {
    this.log('Fixing type issues...');
    const tsFiles = this.findTsFiles();
    let fixed = false;

    for (const file of tsFiles) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        let newContent = content;

        // Fix common type issues
        newContent = newContent.replace(/: any/g, ': unknown');
        newContent = newContent.replace(
          /const (\w+) =/g,
          'const $1: unknown =',
        );

        if (newContent !== content) {
          fs.writeFileSync(file, newContent);
          this.log(`Fixed types in ${file}`);
          fixed = true;
        }
      } catch (error) {
        this.log(`Error fixing types in ${file}: ${error.message}`, 'ERROR');
      }
    }

    return fixed;
  }

  async applyAdvancedFixes() {
    this.log('Applying advanced fixes...');
    const fixes = [
      this.fixBuildConfig(),
      this.fixPackageJson(),
      this.fixTsConfig(),
    ];

    for (const fix of fixes) {
      try {
        const result = await fix;
        if (result) {
          this.log('Applied advanced fix');
          this.fixesApplied.push('Advanced fix');
        }
      } catch (error) {
        this.log(`Advanced fix failed: ${error.message}`, 'ERROR');
      }
    }
  }

  async fixBuildConfig() {
    this.log('Fixing build configuration...');

    if (fs.existsSync('next.config.js')) {
      try {
        const content = fs.readFileSync('next.config.js', 'utf8');
        let newContent = content;

        if (!newContent.includes('experimental')) {
          newContent = newContent.replace(
            /module\.exports\s*=\s*{/,
            `module.exports = {
  experimental: {
    optimizeCss: true,
  },`,
          );
        }

        if (newContent !== content) {
          fs.writeFileSync('next.config.js', newContent);
          this.log('Fixed Next.js configuration');
          return true;
        }
      } catch (error) {
        this.log(`Error fixing build config: ${error.message}`, 'ERROR');
      }
    }

    return false;
  }

  async fixPackageJson() {
    this.log('Fixing package.json...');

    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      let modified = false;

      if (!packageJson.scripts) {
        packageJson.scripts = {};
        modified = true;
      }

      if (!packageJson.scripts.build) {
        packageJson.scripts.build = 'next build';
        modified = true;
      }

      if (modified) {
        fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
        this.log('Fixed package.json');
        return true;
      }
    } catch (error) {
      this.log(`Error fixing package.json: ${error.message}`, 'ERROR');
    }

    return false;
  }

  async fixTsConfig() {
    this.log('Fixing tsconfig.json...');

    if (fs.existsSync('tsconfig.json')) {
      try {
        const tsConfig = JSON.parse(fs.readFileSync('tsconfig.json', 'utf8'));
        let modified = false;

        if (!tsConfig.compilerOptions) {
          tsConfig.compilerOptions = {};
          modified = true;
        }

        if (!tsConfig.compilerOptions.strict) {
          tsConfig.compilerOptions.strict = true;
          modified = true;
        }

        if (modified) {
          fs.writeFileSync('tsconfig.json', JSON.stringify(tsConfig, null, 2));
          this.log('Fixed tsconfig.json');
          return true;
        }
      } catch (error) {
        this.log(`Error fixing tsconfig.json: ${error.message}`, 'ERROR');
      }
    }

    return false;
  }

  findTsFiles() {
    const files = [];
    const srcDir = 'src';
    const pagesDir = 'pages';

    if (fs.existsSync(srcDir)) {
      this.findFilesRecursive(srcDir, '.ts', files);
      this.findFilesRecursive(srcDir, '.tsx', files);
    }

    if (fs.existsSync(pagesDir)) {
      this.findFilesRecursive(pagesDir, '.ts', files);
      this.findFilesRecursive(pagesDir, '.tsx', files);
    }

    return files;
  }

  findFilesRecursive(dir, ext, files) {
    const items = fs.readdirSync(dir);

    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        this.findFilesRecursive(fullPath, ext, files);
      } else if (item.endsWith(ext)) {
        files.push(fullPath);
      }
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
        const commitMessage = `Self-heal: Applied ${this.fixesApplied.length} fixes`;

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

// Run the simple healer
if (require.main === module) {
  const healer = new SimpleHealer();

  healer.run().catch((error) => {
    logger.error('Simple healer failed:', error);
    process.exit(1);
  });
}

module.exports = SimpleHealer;

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
