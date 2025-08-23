#!/usr/bin/env node

/**
 * Deployment Readiness Checker
 * Validates if the application is ready for production deployment
 */

const fs = require('fs');
const path = require('path');

// Load environment variables from .env.local if it exists
function loadEnvFile(envPath) {
  if (fs.existsSync(envPath)) {
    const envContent = fs.readFileSync(envPath, 'utf8');
    const lines = envContent.split('\n');
    
    for (const line of lines) {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const [key, ...valueParts] = trimmed.split('=');
        if (key && valueParts.length > 0) {
          const value = valueParts.join('=');
          process.env[key] = value;
        }
      }
    }
  }
}

// Load from .env.local for development
loadEnvFile('.env.local');

class DeploymentChecker {
  constructor() {
    this.results = {
      overall: 'unknown',
      readiness: 0,
      checks: [],
      blockers: [],
      warnings: [],
      recommendations: []
    };
  }

  checkProductionBuild() {
    console.log('🔍 Checking production build capability...');
    
    const packageJsonExists = fs.existsSync('package.json');
    const nextConfigExists = fs.existsSync('next.config.js');
    
    if (packageJsonExists && nextConfigExists) {
      this.results.checks.push({
        name: 'Build Configuration',
        status: 'pass',
        details: 'Required build files present'
      });
    } else {
      this.results.checks.push({
        name: 'Build Configuration', 
        status: 'fail',
        details: 'Missing build configuration files'
      });
      this.results.blockers.push('Ensure package.json and next.config.js exist');
    }
  }

  checkEnvironmentVariables() {
    console.log('🔍 Checking environment variables...');
    
    const required = ['NEXT_PUBLIC_SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_ANON_KEY'];
    const missing = required.filter(v => !process.env[v]);
    
    if (missing.length === 0) {
      this.results.checks.push({
        name: 'Environment Variables',
        status: 'pass', 
        details: 'All required variables configured'
      });
    } else {
      this.results.checks.push({
        name: 'Environment Variables',
        status: 'fail',
        details: `Missing ${missing.length} required variables`
      });
      this.results.blockers.push(`Configure: ${missing.join(', ')}`);
    }
  }

  checkSecurity() {
    console.log('🔍 Checking security configuration...');
    
    try {
      let hasSecurityHeaders = false;
      let securityLocation = '';
      
      // Check next.config.js
      if (fs.existsSync('next.config.js')) {
        const nextConfigContent = fs.readFileSync('next.config.js', 'utf8');
        if (nextConfigContent.includes('X-Frame-Options')) {
          hasSecurityHeaders = true;
          securityLocation = 'next.config.js';
        }
      }
      
      // Check netlify.toml
      if (!hasSecurityHeaders && fs.existsSync('netlify.toml')) {
        const netlifyContent = fs.readFileSync('netlify.toml', 'utf8');
        if (netlifyContent.includes('X-Frame-Options')) {
          hasSecurityHeaders = true;
          securityLocation = 'netlify.toml';
        }
      }
      
      this.results.checks.push({
        name: 'Security Configuration',
        status: hasSecurityHeaders ? 'pass' : 'warn',
        details: hasSecurityHeaders ? `Enterprise security headers configured in ${securityLocation}` : 'Basic security headers missing'
      });
      
      if (!hasSecurityHeaders) {
        this.results.recommendations.push('Add security headers to next.config.js or netlify.toml');
      }
    } catch (error) {
      this.results.checks.push({
        name: 'Security Configuration',
        status: 'warn',
        details: 'Unable to verify security configuration'
      });
    }
  }

  calculateReadiness() {
    const totalChecks = this.results.checks.length;
    const passedChecks = this.results.checks.filter(check => check.status === 'pass').length;
    const warnChecks = this.results.checks.filter(check => check.status === 'warn').length;
    
    const score = (passedChecks * 100 + warnChecks * 50) / totalChecks;
    this.results.readiness = Math.round(score);
    
    if (this.results.blockers.length > 0) {
      this.results.overall = 'blocked';
    } else if (this.results.readiness >= 90) {
      this.results.overall = 'ready';
    } else if (this.results.readiness >= 70) {
      this.results.overall = 'mostly-ready';
    } else {
      this.results.overall = 'not-ready';
    }
  }

  printResults() {
    console.log('\n🚀 Deployment Readiness Report');
    console.log('================================');
    
    const statusEmojis = {
      ready: '🟢',
      'mostly-ready': '🟡', 
      'not-ready': '🟠',
      blocked: '🔴'
    };

    console.log(`Overall Status: ${statusEmojis[this.results.overall]} ${this.results.overall.toUpperCase()}`);
    console.log(`Readiness Score: ${this.results.readiness}%\n`);
    
    console.log('Check Results:');
    this.results.checks.forEach(check => {
      const emoji = check.status === 'pass' ? '✅' : check.status === 'warn' ? '⚠️' : '❌';
      console.log(`  ${emoji} ${check.name}: ${check.details}`);
    });

    if (this.results.blockers.length > 0) {
      console.log('\n🚫 Deployment Blockers:');
      this.results.blockers.forEach(blocker => console.log(`  ❌ ${blocker}`));
    }

    if (this.results.recommendations.length > 0) {
      console.log('\n💡 Recommendations:');
      this.results.recommendations.forEach(rec => console.log(`  💡 ${rec}`));
    }

    console.log('\n📋 Deployment Checklist:');
    const checklist = [
      '☐ Run npm run build successfully',
      '☐ Configure production environment variables',
      '☐ Set up domain and SSL certificate',
      '☐ Test application in production mode',
      '☐ Set up monitoring and error tracking'
    ];
    checklist.forEach(item => console.log(`  ${item}`));
  }

  async run() {
    console.log('🔍 Starting Deployment Readiness Check\n');

    this.checkProductionBuild();
    this.checkEnvironmentVariables(); 
    this.checkSecurity();
    this.calculateReadiness();
    this.printResults();

    return this.results;
  }
}

if (require.main === module) {
  const checker = new DeploymentChecker();
  checker.run().catch(console.error);
}

module.exports = DeploymentChecker; 