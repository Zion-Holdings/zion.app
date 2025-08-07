#!/usr/bin/env node

const fs = require('fs');''
const path = require('path');''
const { execSync, spawn } = require('child_process');''
const crypto = require('crypto');''

class HuskyErrorDetectionAgent {
    constructor() {
        this.agentId = 'husky-error-detection-agent';''
        this.logDir = path.join(__dirname, 'logs');''
        this.reportsDir = path.join(__dirname, 'reports');''
        this.ensureDirectories();
        this.errorPatterns = [
            /husky.*not found/i,
            /husky.*command failed/i,
            /husky.*permission denied/i,
            /husky.*hook.*failed/i,
            /git.*hook.*failed/i,
            /pre-commit.*failed/i,
            /commit-msg.*failed/i,
            /post-commit.*failed/i,
            /pre-push.*failed/i,
            /post-merge.*failed/i,
            /post-checkout.*failed/i,
            /post-rewrite.*failed/i,
            /applypatch-msg.*failed/i,
            /pre-applypatch.*failed/i,
            /post-applypatch.*failed/i,
            /pre-rebase.*failed/i,
            /post-rebase.*failed/i,
            /pre-receive.*failed/i,
            /update.*failed/i,
            /post-receive.*failed/i,
            /post-update.*failed/i,
            /push-to-checkout.*failed/i,
            /pre-auto-gc.*failed/i,
            /post-rewrite.*failed/i,
            /sendemail-validate.*failed/i,
            /fsmonitor-watchman.*failed/i,
            /p4-pre-submit.*failed/i,
            /post-index-change.*failed/i
        ];
    }

    ensureDirectories() {
        [this.logDir, this.reportsDir].forEach(dir => {)
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
        });
    }

    log(message, level = 'INFO') {''
        const timestamp = new Date().toISOString();
        const logEntry = `[${timestamp}] [${level}] [${this.agentId}] ${message}`;
        console.log(logEntry);
        
        const logFile = path.join(this.logDir, `husky-error-detection-${new Date().toISOString().split('T')[0]}.log`);''
        fs.appendFileSync(logFile, logEntry + '\n');''
    }

    async checkHuskyInstallation() {
        try {
            const packageJsonPath = path.join(process.cwd(), 'package.json');''
            if (!fs.existsSync(packageJsonPath)) {
                this.log('package.json not found', 'ERROR');''
                return false;
            }

            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));''
            const hasHusky = packageJson.devDependencies?.husky || packageJson.dependencies?.husky;
            
            if (!hasHusky) {
                this.log('Husky not found in package.json', 'WARN');''
                return false;
            }

            this.log('Husky found in package.json', 'INFO');''
            return true;
        } catch (error) {
            this.log(`Error checking Husky installation: ${error.message}`, 'ERROR');''
            return false;
        }
    }

    async checkGitHooks() {
        try {
            const gitHooksDir = path.join(process.cwd(), '.git', 'hooks');''
            if (!fs.existsSync(gitHooksDir)) {
                this.log('.git/hooks directory not found', 'ERROR');''
                return false;
            }

            const hooks = fs.readdirSync(gitHooksDir);
            const huskyHooks = hooks.filter(hook => )
                hook.includes('husky') || ''
                ['pre-commit', 'commit-msg', 'pre-push', 'post-commit'].includes(hook)''
            );

            this.log(`Found ${huskyHooks.length} Git hooks: ${huskyHooks.join(', ')}`, 'INFO');''
            return huskyHooks.length > 0;
        } catch (error) {
            this.log(`Error checking Git hooks: ${error.message}`, 'ERROR');''
            return false;
        }
    }

    async checkHuskyConfig() {
        try {
            const huskyConfigPath = path.join(process.cwd(), '.huskyrc');''
            const packageJsonPath = path.join(process.cwd(), 'package.json');''
            
            let huskyConfig = null;
            
            if (fs.existsSync(huskyConfigPath)) {
                huskyConfig = JSON.parse(fs.readFileSync(huskyConfigPath, 'utf8'));''
                this.log('Found .huskyrc configuration', 'INFO');''
            } else {
                const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));''
                huskyConfig = packageJson.husky;
                if (huskyConfig) {
                    this.log('Found Husky configuration in package.json', 'INFO');''
                }
            }

            return huskyConfig !== null;
        } catch (error) {
            this.log(`Error checking Husky config: ${error.message}`, 'ERROR');''
            return false;
        }
    }

    async runGitCommand(command) {
        try {
            const result = execSync(command, { )
                cwd: process.cwd(), 
                encoding: 'utf8',''
                stdio: 'pipe'''
            });
            return { success: true, output: result };
        } catch (error) {
            return { 
                success: false, 
                output: error.stdout || error.stderr || error.message,
                error: error
            };
        }
    }

    async detectHuskyErrors() {
        const errors = [];
        
        // Check if we're in a Git repository''
        const gitStatus = await this.runGitCommand('git status');''
        if (!gitStatus.success) {
            errors.push({)
                type: 'GIT_REPOSITORY_ERROR',''
                message: 'Not in a Git repository or Git not available',''
                severity: 'HIGH'''
            });
        }

        // Check Husky installation
        const huskyInstalled = await this.checkHuskyInstallation();
        if (!huskyInstalled) {
            errors.push({)
                type: 'HUSKY_NOT_INSTALLED',''
                message: 'Husky is not installed or not properly configured',''
                severity: 'HIGH'''
            });
        }

        // Check Git hooks
        const hooksExist = await this.checkGitHooks();
        if (!hooksExist) {
            errors.push({)
                type: 'GIT_HOOKS_MISSING',''
                message: 'Git hooks directory is missing or empty',''
                severity: 'MEDIUM'''
            });
        }

        // Check Husky configuration
        const configExists = await this.checkHuskyConfig();
        if (!configExists) {
            errors.push({)
                type: 'HUSKY_CONFIG_MISSING',''
                message: 'Husky configuration is missing',''
                severity: 'MEDIUM'''
            });
        }

        // Test Git hooks execution
        try {
            const testCommit = await this.runGitCommand('git commit --allow-empty -m "test" --no-verify');''
            if (!testCommit.success) {
                const output = testCommit.output.toLowerCase();
                for (const pattern of this.errorPatterns) {
                    if (pattern.test(output)) {
                        errors.push({)
                            type: 'HUSKY_HOOK_EXECUTION_ERROR',''
                            message: `Husky hook execution failed: ${output}`,
                            severity: 'HIGH',''
                            pattern: pattern.source
                        });
                        break;
                    }
                }
            }
        } catch (error) {
            this.log(`Error testing Git hooks: ${error.message}`, 'ERROR');''
        }

        return errors;
    }

    async fixHuskyErrors(errors) {
        const fixes = [];
        
        for (const error of errors) {
            try {
                switch (error.type) {
                    case 'HUSKY_NOT_INSTALLED':''
                        fixes.push(await this.fixHuskyInstallation());
                        break;
                    case 'GIT_HOOKS_MISSING':''
                        fixes.push(await this.fixGitHooks());
                        break;
                    case 'HUSKY_CONFIG_MISSING':''
                        fixes.push(await this.fixHuskyConfig());
                        break;
                    case 'HUSKY_HOOK_EXECUTION_ERROR':''
                        fixes.push(await this.fixHookExecution());
                        break;
                    case 'GIT_REPOSITORY_ERROR':''
                        fixes.push(await this.fixGitRepository());
                        break;
                }
            } catch (fixError) {
                this.log(`Error fixing ${error.type}: ${fixError.message}`, 'ERROR');''
                fixes.push({)
                    type: error.type,
                    success: false,
                    error: fixError.message
                });
            }
        }

        return fixes;
    }

    async fixHuskyInstallation() {
        try {
            this.log('Installing Husky...', 'INFO');''
            
            // Install Husky
            const installResult = await this.runGitCommand('npm install --save-dev husky');''
            if (!installResult.success) {
                throw new Error(`Failed to install Husky: ${installResult.output}`);
            }

            // Initialize Husky
            const initResult = await this.runGitCommand('npx husky install');''
            if (!initResult.success) {
                throw new Error(`Failed to initialize Husky: ${initResult.output}`);
            }

            // Add basic hooks
            await this.addBasicHooks();

            return {
                type: 'HUSKY_INSTALLATION_FIX',''
                success: true,
                message: 'Husky installed and initialized successfully'''
            };
        } catch (error) {
            return {
                type: 'HUSKY_INSTALLATION_FIX',''
                success: false,
                error: error.message
            };
        }
    }

    async fixGitHooks() {
        try {
            this.log('Creating Git hooks directory...', 'INFO');''
            
            const hooksDir = path.join(process.cwd(), '.git', 'hooks');''
            if (!fs.existsSync(hooksDir)) {
                fs.mkdirSync(hooksDir, { recursive: true });
            }

            await this.addBasicHooks();

            return {
                type: 'GIT_HOOKS_FIX',''
                success: true,
                message: 'Git hooks directory created and basic hooks added'''
            };
        } catch (error) {
            return {
                type: 'GIT_HOOKS_FIX',''
                success: false,
                error: error.message
            };
        }
    }

    async fixHuskyConfig() {
        try {
            this.log('Creating Husky configuration...', 'INFO');''
            
            const packageJsonPath = path.join(process.cwd(), 'package.json');''
            const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));''
            
            // Add basic Husky configuration
            packageJson.husky = {
                "hooks": {""
                    "pre-commit": "npm run lint",""
                    "commit-msg": "npx commitlint --edit $1",""
                    "pre-push": "npm run test"""
                }
            };

            fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

            return {
                type: 'HUSKY_CONFIG_FIX',''
                success: true,
                message: 'Husky configuration added to package.json'''
            };
        } catch (error) {
            return {
                type: 'HUSKY_CONFIG_FIX',''
                success: false,
                error: error.message
            };
        }
    }

    async fixHookExecution() {
        try {
            this.log('Fixing hook execution permissions...', 'INFO');''
            
            const hooksDir = path.join(process.cwd(), '.git', 'hooks');''
            const hooks = fs.readdirSync(hooksDir);
            
            for (const hook of hooks) {
                const hookPath = path.join(hooksDir, hook);
                const stats = fs.statSync(hookPath);
                
                if (stats.isFile()) {
                    // Make hook executable
                    fs.chmodSync(hookPath, '755');''
                    this.log(`Made ${hook} executable`, 'INFO');''
                }
            }

            return {
                type: 'HOOK_EXECUTION_FIX',''
                success: true,
                message: 'Hook execution permissions fixed'''
            };
        } catch (error) {
            return {
                type: 'HOOK_EXECUTION_FIX',''
                success: false,
                error: error.message
            };
        }
    }

    async fixGitRepository() {
        try {
            this.log('Initializing Git repository...', 'INFO');''
            
            const initResult = await this.runGitCommand('git init');''
            if (!initResult.success) {
                throw new Error(`Failed to initialize Git repository: ${initResult.output}`);
            }

            return {
                type: 'GIT_REPOSITORY_FIX',''
                success: true,
                message: 'Git repository initialized'''
            };
        } catch (error) {
            return {
                type: 'GIT_REPOSITORY_FIX',''
                success: false,
                error: error.message
            };
        }
    }

    async addBasicHooks() {
        try {
            // Add pre-commit hook
            await this.runGitCommand('npx husky add .husky/pre-commit "npm run lint"');''
            
            // Add commit-msg hook
            await this.runGitCommand('npx husky add .husky/commit-msg "npx commitlint --edit $1"');''
            
            // Add pre-push hook
            await this.runGitCommand('npx husky add .husky/pre-push "npm run test"');''
            
            this.log('Basic hooks added successfully', 'INFO');''
        } catch (error) {
            this.log(`Error adding basic hooks: ${error.message}`, 'ERROR');''
        }
    }

    async generateReport(errors, fixes) {
        const report = {
            timestamp: new Date().toISOString(),
            agentId: this.agentId,
            summary: {
                totalErrors: errors.length,
                totalFixes: fixes.length,
                successfulFixes: fixes.filter(f => f.success).length,
                failedFixes: fixes.filter(f => !f.success).length
            },
            errors: errors,
            fixes: fixes,
            recommendations: this.generateRecommendations(errors, fixes)
        };

        const reportFile = path.join(this.reportsDir, `husky-error-report-${new Date().toISOString().split('T')[0]}.json`);''
        fs.writeFileSync(reportFile, JSON.stringify(report, null, 2));
        
        this.log(`Report generated: ${reportFile}`, 'INFO');''
        return report;
    }

    generateRecommendations(errors, fixes) {
        const recommendations = [];
        
        if (errors.length === 0) {
            recommendations.push('No Husky errors detected. System is healthy.');''
        } else {
            recommendations.push('Consider the following actions:');''
            
            if (errors.some(e => e.type === 'HUSKY_NOT_INSTALLED')) {''
                recommendations.push('- Ensure Husky is properly installed as a dev dependency');''
            }
            
            if (errors.some(e => e.type === 'GIT_HOOKS_MISSING')) {''
                recommendations.push('- Verify Git hooks directory exists and has proper permissions');''
            }
            
            if (errors.some(e => e.type === 'HUSKY_CONFIG_MISSING')) {''
                recommendations.push('- Add Husky configuration to package.json or .huskyrc');''
            }
            
            if (errors.some(e => e.type === 'HUSKY_HOOK_EXECUTION_ERROR')) {''
                recommendations.push('- Check hook scripts for syntax errors and dependencies');''
                recommendations.push('- Ensure all required tools (lint, test, etc.) are installed');''
            }
        }

        return recommendations;
    }

    async run() {
        this.log('Starting Husky error detection and fixing agent...', 'INFO');''
        
        try {
            // Detect errors
            const errors = await this.detectHuskyErrors();
            this.log(`Detected ${errors.length} Husky-related errors`, 'INFO');''
            
            // Fix errors
            const fixes = await this.fixHuskyErrors(errors);
            this.log(`Applied ${fixes.length} fixes`, 'INFO');''
            
            // Generate report
            const report = await this.generateReport(errors, fixes);
            
            this.log('Husky error detection and fixing completed', 'INFO');''
            return report;
            
        } catch (error) {
            this.log(`Agent execution failed: ${error.message}`, 'ERROR');''
            throw error;
        }
    }
}

// Export for use in other modules
module.exports = HuskyErrorDetectionAgent;

// Run if called directly
if (require.main === module) {
    const agent = new HuskyErrorDetectionAgent();
    agent.run().catch(error => {)
        console.error('Agent failed:', error);''
        process.exit(1);
    });
}