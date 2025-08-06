#!/usr/bin/env node

/**
 * Environment Variables Validator
 * Validates environment variables for security and completeness
 */

const fs = require('fs');
const path = require('path');

class EnvVarValidator {
    constructor() {
        this.baseDir = process.cwd();
        this.requiredVars = ['NEXT_PUBLIC_SUPABASE_URL', 'NEXT_PUBLIC_SUPABASE_ANON_KEY'];
    }

    checkEnvFile() {
        const envFile = path.join(this.baseDir, '.env.local');
        if (fs.existsSync(envFile)) {
            console.log('✓ .env.local exists');
            return { exists: true, path: envFile };
        } else {
            console.log('✗ .env.local not found');
            return { exists: false, path: null };
        }
    }

    validateRequiredVars(envContent) {
        const missingVars = [];
        const presentVars = [];
        
        this.requiredVars.forEach(varName => {
            if (envContent.includes(varName)) {
                presentVars.push(varName);
                console.log(`✓ ${varName} found`);
            } else {
                missingVars.push(varName);
                console.log(`✗ ${varName} missing`);
            }
        });
        
        return { missingVars, presentVars };
    }

    generateReport() {
        const envFile = this.checkEnvFile();
        
        if (!envFile.exists) {
            const report = {
                timestamp: new Date().toISOString(),
                status: 'error',
                message: '.env.local file not found'
            };
            
            const reportFile = path.join(this.baseDir, 'automation', 'env-validation-report.json');
            fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
            return report;
        }
        
        const envContent = fs.readFileSync(envFile.path, 'utf8');
        const requiredVars = this.validateRequiredVars(envContent);
        
        const report = {
            timestamp: new Date().toISOString(),
            envFile: envFile.path,
            requiredVariables: requiredVars,
            summary: {
                totalRequired: this.requiredVars.length,
                present: requiredVars.presentVars.length,
                missing: requiredVars.missingVars.length,
                status: requiredVars.missingVars.length === 0 ? 'passed' : 'failed'
            }
        };
        
        const reportFile = path.join(this.baseDir, 'automation', 'env-validation-report.json');
        fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
        
        console.log(`Environment validation report generated: ${reportFile}`);
        return report;
    }
}

if (require.main === module) {
    const validator = new EnvVarValidator();
    validator.generateReport();
}

module.exports = EnvVarValidator;
