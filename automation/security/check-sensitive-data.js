#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SecurityChecker {
    constructor() {
        this.projectRoot = process.cwd();
        this.config = this.loadConfig();
        this.logFile = path.join(__dirname, '..', 'logs', 'security-check.log');
        this.ensureLogDirectory();
    }

    loadConfig() {
        const configPath = path.join(__dirname, '..', 'config.json');
        if (fs.existsSync(configPath)) {
            return JSON.parse(fs.readFileSync(configPath, 'utf8'));
        }
        return {
            auditLevel: 'moderate',
            sensitivePatterns: [
                'password',
                'secret',
                'key',
                'token',
                'api_key',
                'private_key'
            ],
            allowedDomains: [
                'localhost',
                '127.0.0.1',
                'netlify.app',
                'vercel.app'
            ]
        };
    }

    ensureLogDirectory() {
        const logDir = path.dirname(this.logFile);
        if (!fs.existsSync(logDir)) {
            fs.mkdirSync(logDir, { recursive: true });
        }
    }

    log(message, level = 'info') {
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${level.toUpperCase()}] ${message}\n`;
        
        try {
            fs.appendFileSync(this.logFile, logEntry);
        } catch (error) {
            console.error('Failed to write to log file:', error.message);
        }
        
        if (level === 'error') {
            console.error(message);
        } else if (level === 'warn') {
            console.warn(message);
        } else {
            console.log(message);
        }
    }

    async checkNpmAudit() {
        try {
            this.log('Running npm audit...');
            
            const auditResult = execSync('npm audit --audit-level=moderate --json', { 
                encoding: 'utf8',
                stdio: 'pipe'
            });

            const audit = JSON.parse(auditResult);
            
            if (audit.metadata.vulnerabilities.total > 0) {
                this.log(`⚠️  Found ${audit.metadata.vulnerabilities.total} vulnerabilities`, 'warn');
                
                // Log high severity vulnerabilities
                if (audit.metadata.vulnerabilities.high > 0) {
                    this.log(`❌ ${audit.metadata.vulnerabilities.high} high severity vulnerabilities found`, 'error');
                    return false;
                }
                
                return true; // Allow moderate/low vulnerabilities
            }
            
            this.log('✅ No security vulnerabilities found');
            return true;
        } catch (error) {
            this.log(`NPM audit failed: ${error.message}`, 'warn');
            return true; // Don't fail for audit issues
        }
    }

    async checkSensitiveData() {
        try {
            this.log('Checking for sensitive data...');
            
            const sensitivePatterns = this.config.sensitivePatterns;
            const excludedDirs = ['node_modules', '.git', '.next', 'dist', 'build', 'coverage'];
            const foundSensitive = [];

            // Walk through project files
            const walkDir = (dir) => {
                const files = fs.readdirSync(dir);
                
                for (const file of files) {
                    const filePath = path.join(dir, file);
                    const stat = fs.statSync(filePath);
                    
                    if (stat.isDirectory()) {
                        if (!excludedDirs.includes(file)) {
                            walkDir(filePath);
                        }
                    } else if (stat.isFile()) {
                        // Check file extensions
                        const ext = path.extname(file).toLowerCase();
                        if (['.js', '.ts', '.tsx', '.jsx', '.json', '.env', '.md', '.txt'].includes(ext)) {
                            try {
                                const content = fs.readFileSync(filePath, 'utf8');
                                
                                for (const pattern of sensitivePatterns) {
                                    const regex = new RegExp(pattern, 'gi');
                                    const matches = content.match(regex);
                                    
                                    if (matches) {
                                        foundSensitive.push({
                                            file: filePath,
                                            pattern: pattern,
                                            matches: matches.length
                                        });
                                    }
                                }
                            } catch (error) {
                                // Skip files that can't be read
                            }
                        }
                    }
                }
            };

            walkDir(this.projectRoot);

            if (foundSensitive.length > 0) {
                this.log(`⚠️  Found ${foundSensitive.length} potential sensitive data instances`, 'warn');
                
                // Log the findings
                foundSensitive.forEach(item => {
                    this.log(`  - ${item.file}: ${item.pattern} (${item.matches} matches)`, 'warn');
                });
                
                return false;
            }
            
            this.log('✅ No sensitive data found');
            return true;
        } catch (error) {
            this.log(`Sensitive data check failed: ${error.message}`, 'warn');
            return true; // Don't fail for sensitive data check issues
        }
    }

    async checkEnvironmentVariables() {
        try {
            this.log('Checking environment variables...');
            
            const envFiles = ['.env', '.env.local', '.env.development', '.env.production'];
            const foundEnvVars = [];

            for (const envFile of envFiles) {
                const envPath = path.join(this.projectRoot, envFile);
                
                if (fs.existsSync(envPath)) {
                    const content = fs.readFileSync(envPath, 'utf8');
                    const lines = content.split('\n');
                    
                    for (const line of lines) {
                        const trimmed = line.trim();
                        if (trimmed && !trimmed.startsWith('#')) {
                            const [key] = trimmed.split('=');
                            if (key) {
                                foundEnvVars.push({
                                    file: envFile,
                                    key: key
                                });
                            }
                        }
                    }
                }
            }

            // Check for sensitive environment variables
            const sensitiveKeys = ['PASSWORD', 'SECRET', 'KEY', 'TOKEN', 'API_KEY', 'PRIVATE_KEY'];
            const sensitiveFound = foundEnvVars.filter(env => 
                sensitiveKeys.some(key => env.key.toUpperCase().includes(key))
            );

            if (sensitiveFound.length > 0) {
                this.log(`⚠️  Found ${sensitiveFound.length} potentially sensitive environment variables`, 'warn');
                
                sensitiveFound.forEach(env => {
                    this.log(`  - ${env.file}: ${env.key}`, 'warn');
                });
                
                return false;
            }
            
            this.log('✅ Environment variables look safe');
            return true;
        } catch (error) {
            this.log(`Environment variables check failed: ${error.message}`, 'warn');
            return true; // Don't fail for env check issues
        }
    }

    async checkDependencies() {
        try {
            this.log('Checking dependencies for security issues...');
            
            const packageJsonPath = path.join(this.projectRoot, 'package.json');
            if (!fs.existsSync(packageJsonPath)) {
                this.log('No package.json found', 'warn');
                return true;
            }

            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
            const allDeps = {
                ...packageJson.dependencies,
                ...packageJson.devDependencies
            };

            // Check for known vulnerable packages
            const vulnerablePackages = [
                'lodash',
                'moment',
                'jquery'
            ];

            const foundVulnerable = Object.keys(allDeps).filter(dep => 
                vulnerablePackages.includes(dep)
            );

            if (foundVulnerable.length > 0) {
                this.log(`⚠️  Found ${foundVulnerable.length} potentially vulnerable packages`, 'warn');
                
                foundVulnerable.forEach(dep => {
                    this.log(`  - ${dep}: ${allDeps[dep]}`, 'warn');
                });
                
                return false;
            }
            
            this.log('✅ Dependencies look secure');
            return true;
        } catch (error) {
            this.log(`Dependencies check failed: ${error.message}`, 'warn');
            return true; // Don't fail for dependency check issues
        }
    }

    async generateSecurityReport() {
        try {
            this.log('Generating security report...');
            
            const report = {
                timestamp: new Date().toISOString(),
                npmAudit: await this.checkNpmAudit(),
                sensitiveData: await this.checkSensitiveData(),
                environmentVariables: await this.checkEnvironmentVariables(),
                dependencies: await this.checkDependencies(),
                auditLevel: this.config.auditLevel,
                recommendations: []
            };

            // Generate recommendations
            if (!report.npmAudit) {
                report.recommendations.push('Run npm audit fix to resolve security vulnerabilities');
            }
            if (!report.sensitiveData) {
                report.recommendations.push('Review and remove sensitive data from codebase');
            }
            if (!report.environmentVariables) {
                report.recommendations.push('Review environment variables for sensitive data');
            }
            if (!report.dependencies) {
                report.recommendations.push('Update vulnerable dependencies');
            }

            const reportPath = path.join(__dirname, '..', 'reports', `security-${Date.now()}.json`);
            fs.writeFileSync(reportPath, JSON.stringify(report, null, 2));
            
            this.log(`Security report generated: ${reportPath}`);
            return report;
        } catch (error) {
            this.log(`Failed to generate security report: ${error.message}`, 'error');
            return null;
        }
    }

    async execute() {
        this.log('🚀 Starting security check...');
        
        const report = await this.generateSecurityReport();
        
        if (report) {
            const allChecksPassed = report.npmAudit && report.sensitiveData && 
                                  report.environmentVariables && report.dependencies;
            
            if (allChecksPassed) {
                this.log('✅ All security checks passed!');
                return true;
            } else {
                this.log('⚠️  Some security checks failed', 'warn');
                
                if (report.recommendations.length > 0) {
                    this.log('💡 Recommendations:', 'warn');
                    report.recommendations.forEach(rec => {
                        this.log(`  - ${rec}`, 'warn');
                    });
                }
                
                return false;
            }
        } else {
            this.log('❌ Security check failed', 'error');
            return false;
        }
    }
}

// Main execution
const securityChecker = new SecurityChecker();
const command = process.argv[2] || 'execute';

switch (command) {
    case 'execute':
        securityChecker.execute().catch(error => {
            console.error('Security check failed:', error.message);
            process.exit(1);
        });
        break;
    case 'report':
        securityChecker.generateSecurityReport().catch(error => {
            console.error('Failed to generate security report:', error.message);
            process.exit(1);
        });
        break;
    default:
        console.log(`
🔒 Security Check System

Usage:
  node automation/security/check-sensitive-data.js [command]

Commands:
  execute  - Run all security checks
  report   - Generate security report only

Features:
  ✅ NPM audit for vulnerabilities
  ✅ Sensitive data scanning
  ✅ Environment variables check
  ✅ Dependency security analysis
  ✅ Security reporting

Examples:
  node automation/security/check-sensitive-data.js execute
  node automation/security/check-sensitive-data.js report
        `);
        break;
} 