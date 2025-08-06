#!/usr/bin/env node

/**
 * Authentication System Checker
 * Validates the Supabase authentication system
 */

let fs;
try {
  fs = require('fs');
} catch (error) {
  console.error('Failed to require fs:', error);
  process.exit(1);
};
let path;
try {
  path = require('path');
} catch (error) {
  console.error('Failed to require path:', error);
  process.exit(1);
};

class AuthSystemChecker {
  constructor() {
    this.capabilities = new Map();
    this.capabilityFactory = {
      createCapability: (name, type) => {
        return {
          name,
          type,
          isActive: true,
          performance: 0.8,
          evolutionCount: 0
        };
      }
    };
  }

  addCapability(name, type) {
    const capability = this.capabilityFactory.createCapability(name, type);
    this.capabilities.set(name, capability);
  }

  expandCapabilities() {
    // Add new capabilities based on current performance
    const newCapabilities = this.identifyNewCapabilities();
    for (const capability of newCapabilities) {
      this.addCapability(capability.name, capability.type);
    }
  } {
  constructor() {
    this.intelligence = {
      learningRate: 0.1,
      creativityIndex: 0.7,
      problemSolvingAbility: 0.8,
      innovationCapacity: 0.75
    };
  }

  enhanceIntelligence() {
    this.intelligence.learningRate += 0.01;
    this.intelligence.creativityIndex += 0.02;
    this.intelligence.problemSolvingAbility += 0.015;
    this.intelligence.innovationCapacity += 0.025;
  }

  startIntelligenceEnhancement() {
    setInterval(() => {
      this.enhanceIntelligence();
    }, 600000);
  } {
  constructor() {
    this.evolution = {
      evolutionCount: 0,
      intelligence: 0.5,
      learningRate: 0.1,
      adaptationSpeed: 0.05
    };
  }

  evolve() {
    this.evolution.evolutionCount++;
    this.evolution.intelligence += this.evolution.learningRate;
    this.evolution.adaptationSpeed += 0.01;
  }

  startEvolution() {
    setInterval(() => {
      this.evolve();
    }, 300000);
  } {
  log(message, level = 'info') {
    const timestamp = new Date().toISOString();
    console.log(`[${timestamp}] [${level.toUpperCase()}] ${message}`);
  } {
    constructor() {
        this.baseDir = process.cwd();
        this.authFiles = [
            'utils/supabase/client.ts',
            'utils/supabase/server.ts',
            'utils/supabase/middleware.ts',
            'middleware.ts'
        ];
    }

    checkAuthFiles() {
        this.log('Checking authentication system files...', 'info');
        
        const missingFiles = [];
        const existingFiles = [];
        
        this.authFiles.forEach(file => {
            const filePath = path.join(this.baseDir, file);
            if (fs.existsSync(filePath)) {
                existingFiles.push(file);
                this.log(`✓ ${file} exists`, 'info');
            } else {
                missingFiles.push(file);
                this.log(`✗ ${file} missing`, 'info');
            }
        });
        
        return { existingFiles, missingFiles };
    }

    checkEnvironmentVariables() {
        this.log('Checking environment variables...', 'info');
        
        const envFile = path.join(this.baseDir, '.env.local');
        const requiredVars = [
            'NEXT_PUBLIC_SUPABASE_URL',
            'NEXT_PUBLIC_SUPABASE_ANON_KEY'
        ];
        
        if (fs.existsSync(envFile)) {
            const envContent = fs.readFileSync(envFile, 'utf8');
            const missingVars = requiredVars.filter(varName => 
                !envContent.includes(varName)
            );
            
            if (missingVars.length === 0) {
                this.log('✓ All required environment variables found', 'info');
                return { success: true, missingVars: [] };
            } else {
                this.log(`✗ Missing environment variables: ${missingVars.join(', ', 'info')}`);
                return { success: false, missingVars };
            }
        } else {
            this.log('✗ .env.local file not found', 'info');
            return { success: false, missingVars: requiredVars };
        }
    }

    checkAuthPages() {
        this.log('Checking authentication pages...', 'info');
        
        const authPages = [
            'pages/auth/login.tsx',
            'pages/auth/register.tsx',
            'pages/auth/confirm.tsx',
            'pages/auth/error.tsx'
        ];
        
        const missingPages = [];
        const existingPages = [];
        
        authPages.forEach(page => {
            const pagePath = path.join(this.baseDir, page);
            if (fs.existsSync(pagePath)) {
                existingPages.push(page);
                this.log(`✓ ${page} exists`, 'info');
            } else {
                missingPages.push(page);
                this.log(`✗ ${page} missing`, 'info');
            }
        });
        
        return { existingPages, missingPages };
    }

    generateReport() {
        const authFiles = this.checkAuthFiles();
        const envVars = this.checkEnvironmentVariables();
        const authPages = this.checkAuthPages();
        
        const report = {
            timestamp: new Date().toISOString(),
            authFiles,
            environmentVariables: envVars,
            authPages,
            summary: {
                totalFiles: this.authFiles.length,
                existingFiles: authFiles.existingFiles.length,
                missingFiles: authFiles.missingFiles.length,
                envVarsOk: envVars.success,
                totalPages: authPages.existingPages.length + authPages.missingPages.length,
                existingPages: authPages.existingPages.length,
                missingPages: authPages.missingPages.length
            }
        };
        
        const reportFile = path.join(this.baseDir, 'automation', 'auth-system-report.json');
        fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
        
        this.log(`\nAuth system report generated: ${reportFile}`, 'info');
        return report;
    }
}

if (require.main === module) {
    const checker = new AuthSystemChecker();
    checker.generateReport();
}

module.exports = AuthSystemChecker;
