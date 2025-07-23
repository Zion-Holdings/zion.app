
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

const fs = require('fs')
const path = require('path')
const { execSync, spawn } = require('child_process')
const crypto = require('crypto')
class AppAutomation {
  constructor() {
    this.projectRoot = process.cwd();
    this.logFile = path.join(this.projectRoot, 'logs', 'automation.log');
    this.ensureLogsDirectory();
    this.startTime = Date.now();
  }

  log(message, level = 'INFO') {
    const timestamp = new Date().toISOString()
const logMessage = `[${timestamp}] [${level}] ${message}`;
    logger.info(logMessage);

    // Ensure logs directory exists
    const logsDir = path.dirname(this.logFile);
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }

    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  ensureLogsDirectory() {
    const logsDir = path.join(this.projectRoot, 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
  }

  async runCommand(command, options = {}) {
    try {
      this.log(`Running command: ${command}`)
const result = execSync(command, {
        cwd: this.projectRoot,
        encoding: 'utf8',
        stdio: 'pipe',
        ...options,
      });
      this.log(`Command completed successfully: ${command}`);
      return { success: true, output: result };
    } catch (error) {
      this.log(`Command failed: ${command} - ${error.message}`, 'ERROR');
      return {
        success: false,
        error: error.message,
        output: error.stdout || error.stderr,
      };
    }
  }

  fixCorruptedApiFiles() {
    this.log('Starting API file corruption fix...')
const apiDir = path.join(this.projectRoot, 'pages', 'api');
    if (!fs.existsSync(apiDir)) {
      this.log('API directory not found, skipping...');
      return;
    }

    const fixFile = (filePath) => {
      try {
        let content = fs.readFileSync(filePath, 'utf8')
const originalContent = content;

        // Fix common corruption patterns
        content = content
          // Remove extra semicolons and quotes
          .replace(/;';';';';'/g, '')
          .replace(/;';';';'/g, '')
          .replace(/;';';'/g, '')
          .replace(/;';'/g, '')
          .replace(/;';';';';/g, '')
          .replace(/;';';';/g, '')
          .replace(/;';';/g, '')
          .replace(/;';/g, '')
          // Fix function declarations
          .replace(
            /function\s+\w+\(\):\s*unknown\s*\{\):\s*unknown\s*\{\):\s*unknown\s*\{\):\s*unknown\s*\{\):\s*unknown\s*\{/g,
            'function handler(',
          )
          .replace(
            /\):\s*unknown\s*\{\):\s*unknown\s*\{\):\s*unknown\s*\{\):\s*unknown\s*\{\):\s*unknown\s*\{/g,
            ') {',
          )
          // Fix type annotations
          .replace(
            /:\s*unknown\s+unknown\s+unknown\s+unknown\s+unknown\s+unknown/g,
            '',
          )
          .replace(/:\s*unknown\s+unknown\s+unknown\s+unknown\s+unknown/g, '')
          .replace(/:\s*unknown\s+unknown\s+unknown\s+unknown/g, '')
          .replace(/:\s*unknown\s+unknown\s+unknown/g, '')
          .replace(/:\s*unknown\s+unknown/g, '')
          .replace(/:\s*unknown/g, '')
          // Fix string literals
          .replace(/"NextApiRequest"/g, 'NextApiRequest')
          .replace(/"NextApiResponse"/g, 'NextApiResponse')
          // Remove extra quotes and semicolons
          .replace(/;";";";";"/g, '')
          .replace(/;";";";"/g, '')
          .replace(/;";";"/g, '')
          .replace(/;";"/g, '')
          .replace(/;";";";";/g, '')
          .replace(/;";";";/g, '')
          .replace(/;";";/g, '')
          .replace(/;";/g, '')
          // Fix object literals
          .replace(/":\s*"\{;",\s*";";";";"/g, '": {')
          .replace(/":\s*"\{;",\s*";";";"/g, '": {')
          .replace(/":\s*"\{;",\s*";";"/g, '": {')
          .replace(/":\s*"\{;",\s*";"/g, '": {')
          .replace(/":\s*"\{;",/g, '": {')
          // Clean up extra whitespace
          .replace(/\s+/g, ' ')
          .replace(/\n\s*\n\s*\n/g, '\n\n');

        if (content !== originalContent) {
          fs.writeFileSync(filePath, content);
          this.log(`Fixed corrupted file: ${filePath}`);
          return true;
        }
        return false;
      } catch (error) {
        this.log(`Error fixing file ${filePath}: ${error.message}`, 'ERROR');
        return false;
      }
    }
const processDirectory = (dir) => {
      const items = fs.readdirSync(dir);
      let fixedCount = 0;

      for (const item of items) {
        const fullPath = path.join(dir, item)
const stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
          fixedCount += processDirectory(fullPath);
        } else if (item.endsWith('.ts') || item.endsWith('.js')) {
          if (fixFile(fullPath)) {
            fixedCount++;
          }
        }
      }

      return fixedCount;
    }
const fixedCount = processDirectory(apiDir);
    this.log(`Fixed ${fixedCount} corrupted API files`);
    return fixedCount;
  }

  fixPackageJson() {
    this.log('Checking and fixing package.json...')
const packageJsonPath = path.join(this.projectRoot, 'package.json');
    if (!fs.existsSync(packageJsonPath)) {
      this.log('package.json not found', 'ERROR');
      return false;
    }

    try {
      let content = fs.readFileSync(packageJsonPath, 'utf8')
const originalContent = content;

      // Remove Git merge conflict markers
      content = content
        .replace(/<<<<<<< HEAD\n/g, '')
        .replace(/=======\n/g, '')
        .replace(/>>>>>>> [a-f0-9]+\n/g, '')
        .replace(/>>>>>>> [a-f0-9]+/g, '');

      if (content !== originalContent) {
        fs.writeFileSync(packageJsonPath, content);
        this.log('Fixed package.json merge conflicts');
        return true;
      }

      return false;
    } catch (error) {
      this.log(`Error fixing package.json: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async installDependencies() {
    this.log('Installing dependencies...')
const result = await this.runCommand('npm install --legacy-peer-deps');
    if (!result.success) {
      this.log('Failed to install dependencies, trying npm install...', 'WARN')
const fallbackResult = await this.runCommand('npm install');
      return fallbackResult.success;
    }
    return result.success;
  }

  async runLinting() {
    this.log('Running linting...')
const result = await this.runCommand('npm run lint -- --fix');
    if (!result.success) {
      this.log('Linting failed, but continuing...', 'WARN');
    }
    return result.success;
  }

  async runTypeCheck() {
    this.log('Running type check...')
const result = await this.runCommand('npm run typecheck');
    if (!result.success) {
      this.log('Type check failed, but continuing...', 'WARN');
    }
    return result.success;
  }

  async runTests() {
    this.log('Running tests...')
const result = await this.runCommand('npm test -- --passWithNoTests');
    if (!result.success) {
      this.log('Tests failed, but continuing...', 'WARN');
    }
    return result.success;
  }

  async buildProject() {
    this.log('Building project...')
const result = await this.runCommand('npm run build');
    return result.success;
  }

  async startDevServer() {
    this.log('Starting development server...');

    return new Promise((resolve) => {
      const server = spawn('npm', ['run', 'dev', '--', '--port', '3001'], {
        cwd: this.projectRoot,
        stdio: 'pipe',
      });

      let output = '';
      let resolved = false;

      server.stdout.on('data', (data) => {
        output += data.toString();
        this.log(`Server output: ${data.toString().trim()}`);

        if (output.includes('Ready') && !resolved) {
          resolved = true;
          this.log('Development server started successfully');
          resolve({ success: true, server });
        }
      });

      server.stderr.on('data', (data) => {
        const error = data.toString();
        this.log(`Server error: ${error}`, 'ERROR');

        if (
          error.includes(
            'TypeError: The "to" argument must be of type string',
          ) &&
          !resolved
        ) {
          resolved = true;
          this.log('Node.js 22 compatibility issue detected', 'ERROR');
          resolve({ success: false, error: 'Node.js 22 compatibility issue' });
        }
      });

      server.on('error', (error) => {
        if (!resolved) {
          resolved = true;
          this.log(`Server error: ${error.message}`, 'ERROR');
          resolve({ success: false, error: error.message });
        }
      });

      // Timeout after 30 seconds
      
const timeoutId = setTimeout(() => {
        if (!resolved) {
          resolved = true;
          this.log('Server startup timeout',  'WARN');
// Store timeoutId for cleanup if needed
;
          resolve({ success: false, error: 'Timeout' });
        }
      }, 30000);
    });
  }

  async healthCheck() {
    this.log('Performing health check...');

    try {
      const response = await fetch('http://localhost:3006/api/health');
      if (response.ok) {
        const data = await response.json();
        this.log(`Health check passed: ${JSON.stringify(data)}`);
        return true;
      } else {
        this.log(`Health check failed: ${response.status}`, 'ERROR');
        return false;
      }
    } catch (error) {
      this.log(`Health check error: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async optimizePerformance() {
    this.log('Running performance optimizations...')
const optimizations = [
      'npm run optimize',
      'npm run bundle:analyze',
      'npm run perf:audit',
    ];

    for (const optimization of optimizations) {
      const result = await this.runCommand(optimization);
      if (!result.success) {
        this.log(`Optimization failed: ${optimization}`, 'WARN');
      }
    }
  }

  async generateReport() {
    const endTime = Date.now()
const duration = (endTime - this.startTime) / 1000
const report = {
      timestamp: new Date().toISOString(),
      duration: `${duration}s`,
      status: 'completed',
      fixes: {
        apiFiles: this.fixedApiFiles || 0,
        packageJson: this.fixedPackageJson || false,
        dependencies: this.dependenciesInstalled || false,
        linting: this.lintingPassed || false,
        typeCheck: this.typeCheckPassed || false,
        tests: this.testsPassed || false,
        build: this.buildPassed || false,
        server: this.serverStarted || false,
        healthCheck: this.healthCheckPassed || false,
      },
    }
const reportPath = path.join(
      this.projectRoot,
      'logs',
      'automation-report.json',
    );
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));

    this.log(`Automation completed in ${duration}s`);
    this.log(`Report saved to: ${reportPath}`);

    return report;
  }

  async runFullAutomation() {
    this.log('Starting comprehensive app automation...');

    try {
      // Step 1: Fix corrupted files
      this.fixedApiFiles = this.fixCorruptedApiFiles();
      this.fixedPackageJson = this.fixPackageJson();

      // Step 2: Install dependencies
      this.dependenciesInstalled = await this.installDependencies();

      // Step 3: Run quality checks
      this.lintingPassed = await this.runLinting();
      this.typeCheckPassed = await this.runTypeCheck();
      this.testsPassed = await this.runTests();

      // Step 4: Build project
      this.buildPassed = await this.buildProject();

      // Step 5: Start server
      const serverResult = await this.startDevServer();
      this.serverStarted = serverResult.success;

      // Step 6: Health check
      if (this.serverStarted) {
        await new Promise((resolve) => 
const timeoutId = setTimeout(resolve,  5000);
// Store timeoutId for cleanup if needed
); // Wait for server to be ready
        this.healthCheckPassed = await this.healthCheck();
      }

      // Step 7: Performance optimization
      await this.optimizePerformance();

      // Step 8: Generate report
      const report = await this.generateReport();

      this.log('Automation completed successfully!');
      return report;
    } catch (error) {
      this.log(`Automation failed: ${error.message}`, 'ERROR')
const report = await this.generateReport();
      return report;
    }
  }
}

// Run automation if this script is executed directly
if (require.main === module) {
  const automation = new AppAutomation();
  automation
    .runFullAutomation()
    .then((report) => {
      logger.info('Final report:', JSON.stringify(report, null, 2));
      process.exit(report.fixes.server && report.fixes.healthCheck ? 0 : 1);
    })
    .catch((error) => {
      logger.error('Automation failed:', error);
      process.exit(1);
    });
}

module.exports = AppAutomation;


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

