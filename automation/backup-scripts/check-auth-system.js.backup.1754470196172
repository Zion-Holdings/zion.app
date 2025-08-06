#!/usr/bin/env node

/**
 * Authentication System Checker
 * Validates the Supabase authentication system
 */

const fs = require('fs');
const path = require('path');

class AuthSystemChecker {
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
        console.log('Checking authentication system files...');
        
        const missingFiles = [];
        const existingFiles = [];
        
        this.authFiles.forEach(file => {
            const filePath = path.join(this.baseDir, file);
            if (fs.existsSync(filePath)) {
                existingFiles.push(file);
                console.log(`✓ ${file} exists`);
            } else {
                missingFiles.push(file);
                console.log(`✗ ${file} missing`);
            }
        });
        
        return { existingFiles, missingFiles };
    }

    checkEnvironmentVariables() {
        console.log('Checking environment variables...');
        
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
                console.log('✓ All required environment variables found');
                return { success: true, missingVars: [] };
            } else {
                console.log(`✗ Missing environment variables: ${missingVars.join(', ')}`);
                return { success: false, missingVars };
            }
        } else {
            console.log('✗ .env.local file not found');
            return { success: false, missingVars: requiredVars };
        }
    }

    checkAuthPages() {
        console.log('Checking authentication pages...');
        
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
                console.log(`✓ ${page} exists`);
            } else {
                missingPages.push(page);
                console.log(`✗ ${page} missing`);
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
        
        console.log(`\nAuth system report generated: ${reportFile}`);
        return report;
    }
}

if (require.main === module) {
    const checker = new AuthSystemChecker();
    checker.generateReport();
}

module.exports = AuthSystemChecker;
