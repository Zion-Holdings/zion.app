#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');
const { execSync, spawnSync } = require('child_process');
const https = require('https');
const { URL } = require('url');

const LOG_DIR = path.join(__dirname, 'logs');
const LOG_FILE = path.join(LOG_DIR, 'netlify-build-optimizer.log');
if (!fs.existsSync(LOG_DIR)) fs.mkdirSync(LOG_DIR, { recursive: true });

function log(message) {
  const line = `[${new Date().toISOString()}] ${message}`;
  console.log(line);
  fs.appendFileSync(LOG_FILE, line + '\n');
}

function loadEnvFromFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) return {};
    const content = fs.readFileSync(filePath, 'utf8');
    return content.split(/\r?\n/).reduce((acc, line) => {
      const trimmed = line.trim();
      if (!trimmed || trimmed.startsWith('#')) return acc;
      const eqIdx = trimmed.indexOf('=');
      if (eqIdx === -1) return acc;
      const key = trimmed.slice(0, eqIdx).trim();
      const value = trimmed.slice(eqIdx + 1).trim().replace(/^"|"$/g, '');
      if (key) acc[key] = value;
      return acc;
    }, {});
  } catch {
    return {};
  }
}

function runCommand(command, options = {}) {
  try {
    const result = execSync(command, { 
      encoding: 'utf8', 
      stdio: 'pipe',
      ...options 
    });
    return { success: true, output: result, error: null };
  } catch (error) {
    return { 
      success: false, 
      output: error.stdout || '', 
      error: error.stderr || error.message 
    };
  }
}

function runNodeScript(scriptPath, args = []) {
  const fullPath = path.resolve(__dirname, '..', scriptPath);
  const result = spawnSync('node', [fullPath, ...args], { 
    stdio: 'pipe', 
    encoding: 'utf8' 
  });
  return { 
    success: result.status === 0, 
    output: result.stdout || '', 
    error: result.stderr || '' 
  };
}

class NetlifyBuildOptimizer {
  constructor() {
    this.localEnv = loadEnvFromFile(path.join(__dirname, '..', '.env.netlify'));
    this.env = { ...this.localEnv, ...process.env };
    this.issues = [];
    this.fixes = [];
    this.optimizations = [];
  }

  async analyzeBuildEnvironment() {
    log('🔍 Analyzing build environment...');
    
    const analysis = {
      nodeVersion: process.version,
      npmVersion: '',
      nextVersion: '',
      buildDependencies: {},
      fileSystem: {},
      environment: {}
    };

    // Check npm version
    const npmResult = runCommand('npm --version');
    if (npmResult.success) {
      analysis.npmVersion = npmResult.output.trim();
    }

    // Check Next.js version
    try {
      const packageJson = JSON.parse(fs.readFileSync(path.join(__dirname, '..', 'package.json'), 'utf8'));
      analysis.nextVersion = packageJson.dependencies?.next || 'not found';
      analysis.buildDependencies = {
        next: packageJson.dependencies?.next,
        react: packageJson.dependencies?.react,
        typescript: packageJson.devDependencies?.typescript
      };
    } catch (error) {
      log(`Warning: Could not read package.json: ${error.message}`);
    }

    // Check file system
    analysis.fileSystem = {
      hasNextConfig: fs.existsSync(path.join(__dirname, '..', 'next.config.js')),
      hasNetlifyToml: fs.existsSync(path.join(__dirname, '..', 'netlify.toml')),
      hasOutDir: fs.existsSync(path.join(__dirname, '..', 'out')),
      hasNextDir: fs.existsSync(path.join(__dirname, '..', '.next')),
      hasTempDir: fs.existsSync(path.join(__dirname, '..', '.temp'))
    };

    // Check environment variables
    analysis.environment = {
      hasNodeOptions: !!this.env.NODE_OPTIONS,
      hasNextTelemetry: !!this.env.NEXT_TELEMETRY_DISABLED,
      hasCi: !!this.env.CI,
      nodeOptions: this.env.NODE_OPTIONS || 'not set'
    };

    return analysis;
  }

  async detectBuildIssues() {
    log('🔍 Detecting build issues...');
    
    const issues = [];

    // Check for common export issues
    if (fs.existsSync(path.join(__dirname, '..', '.next', 'export', 'reports'))) {
      issues.push({
        type: 'export_conflict',
        severity: 'high',
        description: 'Reports directory exists in .next/export, causing build conflicts',
        solution: 'Clean export directory and fix export script'
      });
    }

    // Check for memory issues
    if (!this.env.NODE_OPTIONS || !this.env.NODE_OPTIONS.includes('--max-old-space-size')) {
      issues.push({
        type: 'memory_config',
        severity: 'medium',
        description: 'NODE_OPTIONS not configured for memory optimization',
        solution: 'Set NODE_OPTIONS with --max-old-space-size'
      });
    }

    // Check for TypeScript issues
    if (fs.existsSync(path.join(__dirname, '..', 'tsconfig.tsbuildinfo'))) {
      const stats = fs.statSync(path.join(__dirname, '..', 'tsconfig.tsbuildinfo'));
      if (stats.size > 1024 * 1024) { // > 1MB
        issues.push({
          type: 'typescript_cache',
          severity: 'low',
          description: 'Large TypeScript build info file detected',
          solution: 'Clean TypeScript cache files'
        });
      }
    }

    // Check for stale build artifacts
    if (fs.existsSync(path.join(__dirname, '..', '.next'))) {
      const stats = fs.statSync(path.join(__dirname, '..', '.next'));
      const hoursSinceModified = (Date.now() - stats.mtime.getTime()) / (1000 * 60 * 60);
      if (hoursSinceModified > 24) {
        issues.push({
          type: 'stale_build',
          severity: 'medium',
          description: 'Build directory is older than 24 hours',
          solution: 'Clean and rebuild'
        });
      }
    }

    this.issues = issues;
    return issues;
  }

  async fixBuildIssues() {
    log('🔧 Fixing build issues...');
    
    const fixes = [];

    for (const issue of this.issues) {
      try {
        switch (issue.type) {
          case 'export_conflict':
            fixes.push(await this.fixExportConflict());
            break;
          case 'memory_config':
            fixes.push(await this.fixMemoryConfig());
            break;
          case 'typescript_cache':
            fixes.push(await this.fixTypeScriptCache());
            break;
          case 'stale_build':
            fixes.push(await this.fixStaleBuild());
            break;
          default:
            log(`⚠️ Unknown issue type: ${issue.type}`);
        }
      } catch (error) {
        log(`❌ Failed to fix issue ${issue.type}: ${error.message}`);
      }
    }

    this.fixes = fixes;
    return fixes;
  }

  async fixExportConflict() {
    log('🔧 Fixing export conflict...');
    
    try {
      // Clean up problematic directories
      const dirsToClean = [
        path.join(__dirname, '..', '.next', 'export'),
        path.join(__dirname, '..', '.temp'),
        path.join(__dirname, '..', 'out')
      ];

      for (const dir of dirsToClean) {
        if (fs.existsSync(dir)) {
          runCommand(`rm -rf "${dir}"`);
          log(`🧹 Cleaned directory: ${dir}`);
        }
      }

      // Fix the export script in package.json
      const packageJsonPath = path.join(__dirname, '..', 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      // Update export script to be more robust
      const newExportScript = 'rm -rf .next out tsconfig.tsbuildinfo .temp 2>/dev/null || true && mkdir -p .temp && mv pages/reports .temp/ 2>/dev/null || true && NODE_OPTIONS="--max-old-space-size=6144 --openssl-legacy-provider" next build --no-lint && mv .temp/reports pages/ 2>/dev/null || true && rm -rf .temp';
      
      if (packageJson.scripts.export !== newExportScript) {
        packageJson.scripts.export = newExportScript;
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
        log('📝 Updated export script in package.json');
      }

      return {
        type: 'export_conflict',
        success: true,
        description: 'Cleaned export directories and updated export script'
      };
    } catch (error) {
      return {
        type: 'export_conflict',
        success: false,
        description: `Failed to fix export conflict: ${error.message}`
      };
    }
  }

  async fixMemoryConfig() {
    log('🔧 Fixing memory configuration...');
    
    try {
      // Check if .env.netlify exists and update it
      const envPath = path.join(__dirname, '..', '.env.netlify');
      let envContent = '';
      
      if (fs.existsSync(envPath)) {
        envContent = fs.readFileSync(envPath, 'utf8');
      }

      if (!envContent.includes('NODE_OPTIONS')) {
        envContent += '\nNODE_OPTIONS="--max-old-space-size=6144 --openssl-legacy-provider"\n';
        fs.writeFileSync(envPath, envContent);
        log('📝 Added NODE_OPTIONS to .env.netlify');
      }

      return {
        type: 'memory_config',
        success: true,
        description: 'Updated memory configuration'
      };
    } catch (error) {
      return {
        type: 'memory_config',
        success: false,
        description: `Failed to fix memory config: ${error.message}`
      };
    }
  }

  async fixTypeScriptCache() {
    log('🔧 Fixing TypeScript cache...');
    
    try {
      const filesToClean = [
        'tsconfig.tsbuildinfo',
        '.next',
        'out'
      ];

      for (const file of filesToClean) {
        const filePath = path.join(__dirname, '..', file);
        if (fs.existsSync(filePath)) {
          runCommand(`rm -rf "${filePath}"`);
          log(`🧹 Cleaned: ${file}`);
        }
      }

      return {
        type: 'typescript_cache',
        success: true,
        description: 'Cleaned TypeScript cache and build artifacts'
      };
    } catch (error) {
      return {
        type: 'typescript_cache',
        success: false,
        description: `Failed to clean TypeScript cache: ${error.message}`
      };
    }
  }

  async fixStaleBuild() {
    log('🔧 Fixing stale build...');
    
    try {
      const dirsToClean = [
        '.next',
        'out',
        'tsconfig.tsbuildinfo'
      ];

      for (const dir of dirsToClean) {
        const dirPath = path.join(__dirname, '..', dir);
        if (fs.existsSync(dirPath)) {
          runCommand(`rm -rf "${dirPath}"`);
          log(`🧹 Cleaned stale directory: ${dir}`);
        }
      }

      return {
        type: 'stale_build',
        success: true,
        description: 'Cleaned stale build artifacts'
      };
    } catch (error) {
      return {
        type: 'stale_build',
        success: false,
        description: `Failed to clean stale build: ${error.message}`
      };
    }
  }

  async optimizeBuildProcess() {
    log('🚀 Optimizing build process...');
    
    const optimizations = [];

    try {
      // Optimize Next.js config
      const nextConfigPath = path.join(__dirname, '..', 'next.config.js');
      if (fs.existsSync(nextConfigPath)) {
        let nextConfig = fs.readFileSync(nextConfigPath, 'utf8');
        
        // Add performance optimizations if not present
        if (!nextConfig.includes('swcMinify')) {
          nextConfig = nextConfig.replace(
            'const nextConfig = {',
            'const nextConfig = {\n  swcMinify: true,'
          );
          fs.writeFileSync(nextConfigPath, nextConfig);
          optimizations.push('Added SWC minification');
        }

        if (!nextConfig.includes('compiler')) {
          nextConfig = nextConfig.replace(
            'const nextConfig = {',
            'const nextConfig = {\n  compiler: {\n    removeConsole: process.env.NODE_ENV === "production",\n  },'
          );
          fs.writeFileSync(nextConfigPath, nextConfig);
          optimizations.push('Added production console removal');
        }
      }

      // Create optimized build script
      const buildScriptPath = path.join(__dirname, 'build-optimized.sh');
      const buildScript = `#!/bin/bash
set -e

echo "🚀 Starting optimized build process..."

# Clean environment
rm -rf .next out tsconfig.tsbuildinfo .temp 2>/dev/null || true

# Set optimal environment variables
export NODE_OPTIONS="--max-old-space-size=6144 --openssl-legacy-provider"
export NEXT_TELEMETRY_DISABLED=1
export CI=true

# Pre-build optimizations
echo "📦 Installing dependencies..."
npm ci --prefer-offline --no-audit

echo "🔍 Running pre-build checks..."
npm run netlify:manifest

echo "🏗️ Building application..."
npm run build

echo "✅ Build completed successfully!"
`;

      fs.writeFileSync(buildScriptPath, buildScript);
      runCommand(`chmod +x "${buildScriptPath}"`);
      optimizations.push('Created optimized build script');

      // Update package.json scripts
      const packageJsonPath = path.join(__dirname, '..', 'package.json');
      const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
      
      if (!packageJson.scripts['build:optimized']) {
        packageJson.scripts['build:optimized'] = './automation/build-optimized.sh';
        fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
        optimizations.push('Added optimized build script to package.json');
      }

    } catch (error) {
      log(`❌ Failed to optimize build process: ${error.message}`);
    }

    this.optimizations = optimizations;
    return optimizations;
  }

  async generateBuildReport() {
    log('📊 Generating build report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      environment: await this.analyzeBuildEnvironment(),
      issues: this.issues,
      fixes: this.fixes,
      optimizations: this.optimizations,
      summary: {
        totalIssues: this.issues.length,
        fixedIssues: this.fixes.filter(f => f.success).length,
        totalOptimizations: this.optimizations.length,
        buildHealth: this.fixes.filter(f => f.success).length === this.issues.length ? 'healthy' : 'needs_attention'
      }
    };

    // Save report
    const reportPath = path.join(LOG_DIR, `build-optimization-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
    log(`📄 Build report saved to: ${reportPath}`);

    return report;
  }

  async runFullOptimization() {
    log('🚀 Starting full build optimization...');
    
    try {
      // Analyze current state
      await this.analyzeBuildEnvironment();
      
      // Detect and fix issues
      await this.detectBuildIssues();
      await this.fixBuildIssues();
      
      // Optimize build process
      await this.optimizeBuildProcess();
      
      // Generate report
      const report = await this.generateBuildReport();
      
      log('✅ Build optimization completed!');
      log(`📊 Summary: ${report.summary.fixedIssues}/${report.summary.totalIssues} issues fixed, ${report.summary.totalOptimizations} optimizations applied`);
      
      return report;
      
    } catch (error) {
      log(`❌ Build optimization failed: ${error.message}`);
      throw error;
    }
  }
}

// CLI interface
if (require.main === module) {
  const optimizer = new NetlifyBuildOptimizer();
  
  const command = process.argv[2] || 'full';
  
  switch (command) {
    case 'analyze':
      optimizer.analyzeBuildEnvironment().then(console.log);
      break;
    case 'detect':
      optimizer.detectBuildIssues().then(console.log);
      break;
    case 'fix':
      optimizer.runFullOptimization().then(console.log);
      break;
    case 'optimize':
      optimizer.optimizeBuildProcess().then(console.log);
      break;
    case 'full':
    default:
      optimizer.runFullOptimization().then(console.log);
      break;
  }
}

module.exports = NetlifyBuildOptimizer;
