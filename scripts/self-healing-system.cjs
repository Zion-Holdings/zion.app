#!/usr/bin/env node

/**
 * Comprehensive Self-Healing System
 * Automatically detects, fixes, and resolves build errors and warnings
 * Triggers new builds after fixes are applied
 */

const fs = require('fs');
const path = require('path');
const { execSync, spawn } = require('child_process');
const glob = require('glob');

class SelfHealingSystem {
  constructor() {
    this.logFile = 'logs/self-healing.log';
    this.ensureLogDirectory();
    this.fixesApplied = [];
    this.maxRetries = 3;
    this.currentRetry = 0;
    this.buildHistory = [];
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
    console.log(logMessage);
    fs.appendFileSync(this.logFile, logMessage + '\n');
  }

  async run() {
    this.log('Starting comprehensive self-healing system...');
    
    try {
      // Step 1: Pre-healing analysis
      await this.analyzeCodebase();
      
      // Step 2: Apply fixes
      await this.applyFixes();
      
      // Step 3: Run build
      const buildResult = await this.runBuild();
      
      if (buildResult.success) {
        this.log('Build successful after self-healing!');
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
          await this.generateErrorReport(retryResult.output);
        }
      }
      
    } catch (error) {
      this.log(`Self-healing system failed: ${error.message}`, 'ERROR');
      throw error;
    }
  }

  async analyzeCodebase() {
    this.log('Analyzing codebase for potential issues...');
    
    const analysis = {
      syntaxErrors: await this.findSyntaxErrors(),
      typeErrors: await this.findTypeErrors(),
      lintErrors: await this.findLintErrors(),
      missingImports: await this.findMissingImports(),
      unusedVariables: await this.findUnusedVariables(),
      consoleLogs: await this.findConsoleLogs(),
      missingDependencies: await this.findMissingDependencies()
    };

    this.log('Codebase analysis completed:', analysis);
    return analysis;
  }

  async findSyntaxErrors() {
    try {
      execSync('npx tsc --noEmit', { stdio: 'pipe' });
      return [];
    } catch (error) {
      const output = (error.stdout || error.stderr || '').toString();
      return this.parseTypeScriptErrors(output);
    }
  }

  async findTypeErrors() {
    try {
      execSync('npx tsc --noEmit --strict', { stdio: 'pipe' });
      return [];
    } catch (error) {
      const output = (error.stdout || error.stderr || '').toString();
      return this.parseTypeScriptErrors(output);
    }
  }

  async findLintErrors() {
    try {
      execSync('npm run lint', { stdio: 'pipe' });
      return [];
    } catch (error) {
      const output = error.stdout || error.stderr || '';
      return this.parseLintErrors(output);
    }
  }

  async findMissingImports() {
    const tsFiles = glob.sync('src/**/*.{ts,tsx}', { cwd: process.cwd() });
    const missingImports = [];

    for (const file of tsFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const importMatches = content.match(/import.*from ['"]([^'"]+)['"]/g);
      
      if (importMatches) {
        for (const match of importMatches) {
          const moduleMatch = match.match(/from ['"]([^'"]+)['"]/);
          if (moduleMatch) {
            const moduleName = moduleMatch[1];
            if (!moduleName.startsWith('.') && !moduleName.startsWith('@/')) {
              // Check if module exists
              try {
                require.resolve(moduleName);
              } catch {
                missingImports.push({ file, module: moduleName });
              }
            }
          }
        }
      }
    }

    return missingImports;
  }

  async findUnusedVariables() {
    const tsFiles = glob.sync('src/**/*.{ts,tsx}', { cwd: process.cwd() });
    const unusedVars = [];

    for (const file of tsFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n');
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes('const ') && line.includes('=') && line.includes('_')) {
          // Check for unused variables (prefixed with _)
          const varMatch = line.match(/const\s+_(\w+)/);
          if (varMatch) {
            const varName = varMatch[1];
            const restOfFile = content.substring(content.indexOf(line) + line.length);
            if (!restOfFile.includes(varName)) {
              unusedVars.push({ file, line: i + 1, variable: varName });
            }
          }
        }
      }
    }

    return unusedVars;
  }

  async findConsoleLogs() {
    const tsFiles = glob.sync('src/**/*.{ts,tsx}', { cwd: process.cwd() });
    const consoleLogs = [];

    for (const file of tsFiles) {
      const content = fs.readFileSync(file, 'utf8');
      const lines = content.split('\n');
      
      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        if (line.includes('console.log(') && !file.includes('.test.') && !file.includes('.spec.')) {
          consoleLogs.push({ file, line: i + 1, content: line.trim() });
        }
      }
    }

    return consoleLogs;
  }

  async findMissingDependencies() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      const allDeps = { ...packageJson.dependencies, ...packageJson.devDependencies };
      
      const tsFiles = glob.sync('src/**/*.{ts,tsx}', { cwd: process.cwd() });
      const missingDeps = new Set();
      
      for (const file of tsFiles) {
        const content = fs.readFileSync(file, 'utf8');
        const importMatches = content.match(/import.*from ['"]([^'"]+)['"]/g);
        
        if (importMatches) {
          for (const match of importMatches) {
            const moduleMatch = match.match(/from ['"]([^'"]+)['"]/);
            if (moduleMatch) {
              const moduleName = moduleMatch[1];
              if (!moduleName.startsWith('.') && !moduleName.startsWith('@/') && !allDeps[moduleName]) {
                missingDeps.add(moduleName);
              }
            }
          }
        }
      }
      
      return Array.from(missingDeps);
    } catch (error) {
      this.log(`Error finding missing dependencies: ${error.message}`, 'ERROR');
      return [];
    }
  }

  parseTypeScriptErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      const match = line.match(/([^(]+)\((\d+),(\d+)\): error TS\d+: (.+)/);
      if (match) {
        errors.push({
          file: match[1].trim(),
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          message: match[4],
          fullLine: line
        });
      }
    }
    
    return errors;
  }

  parseLintErrors(output) {
    const errors = [];
    const lines = output.split('\n');
    
    for (const line of lines) {
      const match = line.match(/([^(]+)\((\d+),(\d+)\): (.+)/);
      if (match) {
        errors.push({
          file: match[1].trim(),
          line: parseInt(match[2]),
          column: parseInt(match[3]),
          message: match[4],
          fullLine: line
        });
      }
    }
    
    return errors;
  }

  async applyFixes() {
    this.log('Applying automatic fixes...');
    
    const fixes = [
      this.fixSyntaxErrors(),
      this.fixTypeErrors(),
      this.fixLintErrors(),
      this.fixMissingImports(),
      this.fixUnusedVariables(),
      this.fixConsoleLogs(),
      this.fixMissingDependencies(),
      this.fixImportIssues(),
      this.fixNullChecks(),
      this.fixTypeAssignments()
    ];

    const results = await Promise.allSettled(fixes);
    
    results.forEach((result, index) => {
      if (result.status === 'fulfilled' && result.value) {
        this.log(`Applied fix ${index + 1}`);
        this.fixesApplied.push(`Fix ${index + 1}`);
      }
    });
  }

  async fixSyntaxErrors() {
    // Fix common syntax errors
    const tsFiles = glob.sync('src/**/*.{ts,tsx}', { cwd: process.cwd() });
    
    for (const file of tsFiles) {
      const content = fs.readFileSync(file, 'utf8');
      let modified = false;
      let newContent = content;

      // Fix missing semicolons
      newContent = newContent.replace(/([^;])\n/g, '$1;\n');
      
      // Fix missing brackets
      const openBraces = (newContent.match(/\{/g) || []).length;
      const closeBraces = (newContent.match(/\}/g) || []).length;
      if (openBraces > closeBraces) {
        newContent += '\n}'.repeat(openBraces - closeBraces);
        modified = true;
      }

      if (newContent !== content) {
        fs.writeFileSync(file, newContent);
        this.log(`Fixed syntax errors in ${file}`);
        return true;
      }
    }
    
    return false;
  }

  async fixTypeErrors() {
    const tsFiles = glob.sync('src/**/*.{ts,tsx}', { cwd: process.cwd() });
    
    for (const file of tsFiles) {
      const content = fs.readFileSync(file, 'utf8');
      let modified = false;
      let newContent = content;

      // Fix any types
      newContent = newContent.replace(/: any/g, ': unknown');
      
      // Fix missing type annotations
      newContent = newContent.replace(/const (\w+) =/g, 'const $1: unknown =');
      
      // Fix function return types
      newContent = newContent.replace(/function (\w+)\(/g, 'function $1(): unknown {');

      if (newContent !== content) {
        fs.writeFileSync(file, newContent);
        this.log(`Fixed type errors in ${file}`);
        return true;
      }
    }
    
    return false;
  }

  async fixLintErrors() {
    try {
      execSync('npm run lint:fix', { stdio: 'inherit' });
      this.log('Applied ESLint auto-fixes');
      return true;
    } catch (error) {
      this.log(`ESLint fix failed: ${error.message}`, 'ERROR');
      return false;
    }
  }

  async fixMissingImports() {
    const missingImports = await this.findMissingImports();
    
    for (const missing of missingImports) {
      try {
        execSync(`npm install ${missing.module}`, { stdio: 'pipe' });
        this.log(`Installed missing dependency: ${missing.module}`);
      } catch (error) {
        this.log(`Failed to install ${missing.module}: ${error.message}`, 'ERROR');
      }
    }
    
    return missingImports.length > 0;
  }

  async fixUnusedVariables() {
    const unusedVars = await this.findUnusedVariables();
    
    for (const unused of unusedVars) {
      const content = fs.readFileSync(unused.file, 'utf8');
      const lines = content.split('\n');
      
      // Remove unused variable declaration
      const line = lines[unused.line - 1];
      const newLine = line.replace(/const\s+_\w+\s*=\s*[^;]+;?/, '');
      lines[unused.line - 1] = newLine;
      
      fs.writeFileSync(unused.file, lines.join('\n'));
      this.log(`Removed unused variable ${unused.variable} from ${unused.file}`);
    }
    
    return unusedVars.length > 0;
  }

  async fixConsoleLogs() {
    const consoleLogs = await this.findConsoleLogs();
    
    for (const log of consoleLogs) {
      const content = fs.readFileSync(log.file, 'utf8');
      const lines = content.split('\n');
      
      // Comment out console.log statements
      const line = lines[log.line - 1];
      lines[log.line - 1] = `// ${line}`;
      
      fs.writeFileSync(log.file, lines.join('\n'));
      this.log(`Commented out console.log in ${log.file}:${log.line}`);
    }
    
    return consoleLogs.length > 0;
  }

  async fixMissingDependencies() {
    const missingDeps = await this.findMissingDependencies();
    
    if (missingDeps.length > 0) {
      try {
        execSync(`npm install ${missingDeps.join(' ')}`, { stdio: 'inherit' });
        this.log(`Installed missing dependencies: ${missingDeps.join(', ')}`);
        return true;
      } catch (error) {
        this.log(`Failed to install dependencies: ${error.message}`, 'ERROR');
        return false;
      }
    }
    
    return false;
  }

  async fixImportIssues() {
    const tsFiles = glob.sync('src/**/*.{ts,tsx}', { cwd: process.cwd() });
    
    for (const file of tsFiles) {
      const content = fs.readFileSync(file, 'utf8');
      let modified = false;
      let newContent = content;

      // Fix relative imports
      newContent = newContent.replace(/from ['"]\.\.?\/[^'"]*['"]/g, (match) => {
        const importPath = match.match(/from ['"]([^'"]+)['"]/)[1];
        const resolvedPath = this.resolveImportPath(file, importPath);
        return `from '${resolvedPath}'`;
      });

      if (newContent !== content) {
        fs.writeFileSync(file, newContent);
        this.log(`Fixed import issues in ${file}`);
        modified = true;
      }
    }
    
    return false;
  }

  async fixNullChecks() {
    const tsFiles = glob.sync('src/**/*.{ts,tsx}', { cwd: process.cwd() });
    
    for (const file of tsFiles) {
      const content = fs.readFileSync(file, 'utf8');
      let modified = false;
      let newContent = content;

      // Add optional chaining
      newContent = newContent.replace(/\.(\w+)/g, '?.$1');
      
      // Add null checks
      newContent = newContent.replace(/(\w+)\.(\w+)/g, '$1?.$2');

      if (newContent !== content) {
        fs.writeFileSync(file, newContent);
        this.log(`Added null checks in ${file}`);
        modified = true;
      }
    }
    
    return false;
  }

  async fixTypeAssignments() {
    const tsFiles = glob.sync('src/**/*.{ts,tsx}', { cwd: process.cwd() });
    
    for (const file of tsFiles) {
      const content = fs.readFileSync(file, 'utf8');
      let modified = false;
      let newContent = content;

      // Fix type assignments
      newContent = newContent.replace(/: (\w+)/g, ': unknown');

      if (newContent !== content) {
        fs.writeFileSync(file, newContent);
        this.log(`Fixed type assignments in ${file}`);
        modified = true;
      }
    }
    
    return false;
  }

  resolveImportPath(file, importPath) {
    // Simple import path resolution
    const dir = path.dirname(file);
    const extensions = ['.ts', '.tsx', '.js', '.jsx'];
    
    for (const ext of extensions) {
      const fullPath = path.resolve(dir, importPath + ext);
      if (fs.existsSync(fullPath)) {
        return importPath + ext;
      }
    }
    
    return importPath;
  }

  async applyAdvancedFixes() {
    this.log('Applying advanced fixes...');
    
    const advancedFixes = [
      this.fixBuildConfiguration(),
      this.fixEnvironmentIssues(),
      this.fixPackageJsonIssues(),
      this.fixTsConfigIssues()
    ];

    const results = await Promise.allSettled(advancedFixes);
    
    results.forEach((result, index) => {
      if (result.status === 'fulfilled' && result.value) {
        this.log(`Applied advanced fix ${index + 1}`);
        this.fixesApplied.push(`Advanced fix ${index + 1}`);
      }
    });
  }

  async fixBuildConfiguration() {
    // Fix Next.js configuration
    if (fs.existsSync('next.config.js')) {
      const content = fs.readFileSync('next.config.js', 'utf8');
      let modified = false;
      let newContent = content;

      // Add common Next.js optimizations
      if (!newContent.includes('experimental')) {
        newContent = newContent.replace(/module\.exports\s*=\s*{/, `module.exports = {
  experimental: {
    optimizeCss: true,
    optimizePackageImports: ['@radix-ui/react-icons', 'lucide-react'],
  },`);
        modified = true;
      }

      if (modified) {
        fs.writeFileSync('next.config.js', newContent);
        this.log('Fixed Next.js configuration');
        return true;
      }
    }
    
    return false;
  }

  async fixEnvironmentIssues() {
    // Create or update environment files
    const envFiles = ['.env.local', '.env.example'];
    
    for (const envFile of envFiles) {
      if (!fs.existsSync(envFile)) {
        const envContent = `# Auto-generated environment file
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url_here
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key_here
NEXT_PUBLIC_REOWN_PROJECT_ID=your_reown_project_id_here
`;
        fs.writeFileSync(envFile, envContent);
        this.log(`Created ${envFile}`);
        return true;
      }
    }
    
    return false;
  }

  async fixPackageJsonIssues() {
    try {
      const packageJson = JSON.parse(fs.readFileSync('package.json', 'utf8'));
      let modified = false;

      // Ensure required scripts exist
      if (!packageJson.scripts) {
        packageJson.scripts = {};
        modified = true;
      }

      if (!packageJson.scripts.build) {
        packageJson.scripts.build = 'next build';
        modified = true;
      }

      if (!packageJson.scripts.dev) {
        packageJson.scripts.dev = 'next dev';
        modified = true;
      }

      if (modified) {
        fs.writeFileSync('package.json', JSON.stringify(packageJson, null, 2));
        this.log('Fixed package.json');
        return true;
      }
    } catch (error) {
      this.log(`Failed to fix package.json: ${error.message}`, 'ERROR');
    }
    
    return false;
  }

  async fixTsConfigIssues() {
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

        if (!tsConfig.compilerOptions.esModuleInterop) {
          tsConfig.compilerOptions.esModuleInterop = true;
          modified = true;
        }

        if (modified) {
          fs.writeFileSync('tsconfig.json', JSON.stringify(tsConfig, null, 2));
          this.log('Fixed tsconfig.json');
          return true;
        }
      } catch (error) {
        this.log(`Failed to fix tsconfig.json: ${error.message}`, 'ERROR');
      }
    }
    
    return false;
  }

  async runBuild() {
    this.log('Running build...');
    
    return new Promise((resolve) => {
      const buildProcess = spawn('npm', ['run', 'build'], {
        stdio: ['pipe', 'pipe', 'pipe'],
        timeout: 300000 // 5 minutes
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
        
        this.buildHistory.push({
          timestamp: new Date().toISOString(),
          success: code === 0,
          output: fullOutput,
          code
        });
        
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
        const commitMessage = `Self-heal: Applied ${this.fixesApplied.length} fixes\n\n${this.fixesApplied.map(fix => `- ${fix}`).join('\n')}`;
        
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

  async generateErrorReport(buildOutput) {
    this.log('Generating error report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      fixesApplied: this.fixesApplied,
      buildHistory: this.buildHistory,
      buildOutput: buildOutput,
      recommendations: this.generateRecommendations(buildOutput)
    };
    
    fs.writeFileSync('logs/error-report.json', JSON.stringify(report, null, 2));
    this.log('Error report generated: logs/error-report.json');
  }

  generateRecommendations(buildOutput) {
    const recommendations = [];
    
    if (buildOutput.includes('Cannot find module')) {
      recommendations.push('Check for missing dependencies and install them');
    }
    
    if (buildOutput.includes('Type')) {
      recommendations.push('Review TypeScript type definitions');
    }
    
    if (buildOutput.includes('SyntaxError')) {
      recommendations.push('Check for syntax errors in source files');
    }
    
    if (buildOutput.includes('ESLint')) {
      recommendations.push('Run ESLint to identify and fix code style issues');
    }
    
    return recommendations;
  }
}

// Run the self-healing system
if (require.main === module) {
  const healer = new SelfHealingSystem();
  
  healer.run().catch(error => {
    console.error('Self-healing system failed:', error);
    process.exit(1);
  });
}

module.exports = SelfHealingSystem; 