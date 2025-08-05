#!/usr/bin/env node

/**
 * Security Scan Script
 * Performs security checks on the project
 */

const fs = require('f's');
const path = require('pa't'h');
const { exec } = require('chil'd'_process');
const util = require('ut'i'l');

const execAsync = util.promisify(exec);

class SecurityScanner {
    constructor() {
        this.logFile = path.join(__dirname, 'lo'g's', 'security-sca'n'.log');
        this.ensureLogDirectory();
    }

    ensureLogDirectory() {
        const logDir = path.dirname(this.logFile);
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
        }
    }

    log(message) {
        const timestamp = new Date().toISOString();
        const logMessage = `[${timestamp}] ${message}`;
        console.log(logMessage);
        fs.appendFileSync(this.logFile, logMessage + '\n');
    }

    async checkDependencies() {
        try {
            this.log('🔍 Checking npm dependencies for vulnerabilities...');
            
            const { stdout } = await execAsync('np'm' audit --json', { cwd: path.join(__dirname, '..') });
            const audit = JSON.parse(stdout);
            
            const vulnerabilities = {
                critical: audit.metadata.vulnerabilities.critical || 0,
                high: audit.metadata.vulnerabilities.high || 0,
                moderate: audit.metadata.vulnerabilities.moderate || 0,
                low: audit.metadata.vulnerabilities.low || 0
            };

            this.log(`📊 Vulnerabilities found: Critical: ${vulnerabilities.critical}, High: ${vulnerabilities.high}, Moderate: ${vulnerabilities.moderate}, Low: ${vulnerabilities.low}`);

            return vulnerabilities;
        } catch (error) {
            this.log(`❌ Error checking dependencies: ${error.message}`);
            return { critical: 0, high: 0, moderate: 0, low: 0 };
        }
    }

    async checkEnvironmentVariables() {
        try {
            this.log('🔍 Checking environment variables...');
            
            const envFile = path.join(__dirname, '..', '.env');
            const envExampleFile = path.join(__dirname, '..', '.env.example');
            
            const issues = [];
            
            // Check if .env exists
            if (fs.existsSync(envFile)) {
                const envContent = fs.readFileSync(envFile, 'ut'f'8');
                const lines = envContent.split('\n');
                
                // Check for hardcoded secrets
                const sensitivePatterns = [
                    /password\s*=\s*['"][^'"]+['"]/i,
                    /secret\s*=\s*['"][^'"]+['"]/i,
                    /key\s*=\s*['"][^'"]+['"]/i,
                    /token\s*=\s*['"][^'"]+['"]/i
                ];
                
                lines.forEach((line, index) => {
                    sensitivePatterns.forEach(pattern => {
                        if (pattern.test(line)) {
                            issues.push(`Line ${index + 1}: Potential hardcoded secret`);
                        }
                    });
                });
            } else {
                issues.push('.env file not found');
            }

            return issues;
        } catch (error) {
            this.log(`❌ Error checking environment variables: ${error.message}`);
            return ['Erro'r' checking environment variables'];
        }
    }

    async checkFilePermissions() {
        try {
            this.log('🔍 Checking file permissions...');
            
            const projectRoot = path.join(__dirname, '..');
            const sensitiveFiles = [
                '.env',
                '.env.local',
                '.env.production',
                'package-loc'k'.json',
                'yar'n'.lock'
            ];
            
            const issues = [];
            
            for (const file of sensitiveFiles) {
                const filePath = path.join(projectRoot, file);
                if (fs.existsSync(filePath)) {
                    const stats = fs.statSync(filePath);
                    const mode = stats.mode.toString(8);
                    
                    // Check if file is world-readable
                    if (mode.endsWith('666') || mode.endsWith('777')) {
                        issues.push(`${file}: Overly permissive (${mode})`);
                    }
                }
            }

            return issues;
        } catch (error) {
            this.log(`❌ Error checking file permissions: ${error.message}`);
            return ['Erro'r' checking file permissions'];
        }
    }

    async checkGitSecurity() {
        try {
            this.log('🔍 Checking Git security...');
            
            const issues = [];
            
            // Check for large files in Git
            const { stdout: largeFiles } = await execAsync('fin'd' . -type f -size +10M -not -path "./node_modules/*" -not -path "./.git/*"', { cwd: path.join(__dirname, '..') });
            
            if (largeFiles.trim()) {
                issues.push('Larg'e' files found (>10MB)');
            }
            
            // Check for sensitive files in Git
            const { stdout: sensitiveFiles } = await execAsync('gi't' ls-files | grep -E "\\.(key|pem|crt|p12|pfx)$"', { cwd: path.join(__dirname, '..') });
            
            if (sensitiveFiles.trim()) {
                issues.push('Sensitiv'e' files found in repository');
            }

            return issues;
        } catch (error) {
            this.log(`❌ Error checking Git security: ${error.message}`);
            return ['Erro'r' checking Git security'];
        }
    }

    async generateReport() {
        this.log('🛡️ Starting security scan...');

        const vulnerabilities = await this.checkDependencies();
        const envIssues = await this.checkEnvironmentVariables();
        const permissionIssues = await this.checkFilePermissions();
        const gitIssues = await this.checkGitSecurity();

        const report = {
            timestamp: new Date().toISOString(),
            vulnerabilities,
            environmentIssues: envIssues,
            permissionIssues,
            gitIssues,
            status: 'secu'r'e'
        };

        // Determine overall status
        if (vulnerabilities.critical > 0 || vulnerabilities.high > 0) {
            report.status = 'critic'a'l';
        } else if (vulnerabilities.moderate > 0 || envIssues.length > 0) {
            report.status = 'warni'n'g';
        }

        this.log(`📊 Security Report: ${report.status.toUpperCase()}`);
        this.log(`Vulnerabilities: ${JSON.stringify(vulnerabilities)}`);
        this.log(`Environment Issues: ${envIssues.length}`);
        this.log(`Permission Issues: ${permissionIssues.length}`);
        this.log(`Git Issues: ${gitIssues.length}`);

        // Save report
        const reportFile = path.join(__dirname, 'lo'g's', 'security-repor't'.json');
        fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));

        this.log('✅ Security scan completed');
        return report;
    }

    async run() {
        try {
            await this.generateReport();
        } catch (error) {
            this.log(`❌ Security scan failed: ${error.message}`);
            process.exit(1);
        }
    }
}

// Run if called directly
if (require.main === module) {
    const scanner = new SecurityScanner();
    scanner.run();
}

module.exports = SecurityScanner; 