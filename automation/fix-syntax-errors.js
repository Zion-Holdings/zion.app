#!/usr/bin/env node

/**
 * Comprehensive Syntax Error Fixer
 * 
 * This script fixes common syntax errors in the project:
 * - Extra semicolons
 * - Unterminated string literals
 * - Missing quotes
 * - Import/export syntax errors
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class SyntaxErrorFixer {
    constructor() {
        this.projectRoot = process.cwd();
        this.fixedFiles = [];
        this.errors = [];
    }

    log(message, level = 'info') {
        const timestamp = new Date().toISOString();
        const prefix = level === 'error' ? '❌' : level === 'success' ? '✅' : level === 'warn' ? '⚠️' : 'ℹ️';
        console.log(`${prefix} [${timestamp}] ${message}`);
    }

    async fixFile(filePath) {
        try {
            if (!fs.existsSync(filePath)) {
                return false;
            }

            let content = fs.readFileSync(filePath, 'utf8');
            let originalContent = content;
            let fixed = false;

            // Fix extra semicolons after imports
            content = content.replace(/import\s+([^;]+);;/g, 'import $1;');
            content = content.replace(/from\s+([^;]+);;/g, 'from $1;');

            // Fix unterminated string literals (remove extra quotes)
            content = content.replace(/"""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""/g, '');
            content = content.replace(/""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""""/g, '');

            // Fix extra semicolons in JSX
            content = content.replace(/<([^>]+);;/g, '<$1');
            content = content.replace(/>;;/g, '>;');
            content = content.replace(/;;/g, ';');

            // Fix missing quotes in imports
            content = content.replace(/import\s+React\s+from\s+react';/g, "import React from 'react';");
            content = content.replace(/import\s+Head\s+from\s+next\/head';/g, "import Head from 'next/head';");

            // Fix export syntax
            content = content.replace(/default\s+function/g, 'export default function');

            // Fix missing closing braces
            content = content.replace(/function\s+([^{]+)\s*{/g, 'function $1 {');

            // Fix module specifier issues
            content = content.replace(/import\s+([^;]+)\s+from\s+([^;]+);/g, (match, importName, modulePath) => {
                if (!modulePath.includes("'") && !modulePath.includes('"')) {
                    return `import ${importName} from '${modulePath}';`;
                }
                return match;
            });

            // Fix API route exports
            if (filePath.includes('/api/') && filePath.endsWith('.ts')) {
                if (!content.includes('export default') && !content.includes('export {')) {
                    content = content.replace(/export\s+default\s+function\s+([^{]+)\s*{/g, 'export default function $1 {');
                }
            }

            // Fix React component syntax
            content = content.replace(/default\s+function\s+([^{]+)\s*{/g, 'export default function $1 {');

            // Remove extra semicolons at the end of lines
            content = content.replace(/;;+/g, ';');

            // Fix JSX syntax
            content = content.replace(/<([^>]+);/g, '<$1');
            content = content.replace(/>;;/g, '>;');

            if (content !== originalContent) {
                fs.writeFileSync(filePath, content, 'utf8');
                this.fixedFiles.push(filePath);
                this.log(`Fixed: ${filePath}`, 'success');
                fixed = true;
            }

            return fixed;
        } catch (error) {
            this.log(`Error fixing ${filePath}: ${error.message}`, 'error');
            this.errors.push({ file: filePath, error: error.message });
            return false;
        }
    }

    async fixDirectory(dirPath) {
        try {
            const files = fs.readdirSync(dirPath);
            
            for (const file of files) {
                const fullPath = path.join(dirPath, file);
                const stat = fs.statSync(fullPath);
                
                if (stat.isDirectory()) {
                    // Skip node_modules and other build directories
                    if (!['node_modules', '.next', 'dist', 'build', '.git'].includes(file)) {
                        await this.fixDirectory(fullPath);
                    }
                } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
                    await this.fixFile(fullPath);
                }
            }
        } catch (error) {
            this.log(`Error processing directory ${dirPath}: ${error.message}`, 'error');
        }
    }

    async fixAll() {
        this.log('🔧 Starting comprehensive syntax error fix...');
        
        const directories = [
            'pages',
            'components',
            'src',
            'automation'
        ];

        for (const dir of directories) {
            const dirPath = path.join(this.projectRoot, dir);
            if (fs.existsSync(dirPath)) {
                this.log(`Processing directory: ${dir}`);
                await this.fixDirectory(dirPath);
            }
        }

        this.log(`✅ Syntax fix completed. Fixed ${this.fixedFiles.length} files.`);
        
        if (this.errors.length > 0) {
            this.log(`⚠️ ${this.errors.length} errors encountered:`, 'warn');
            this.errors.forEach(error => {
                this.log(`  ${error.file}: ${error.error}`, 'warn');
            });
        }

        return this.fixedFiles.length;
    }

    async runLint() {
        this.log('🔍 Running lint check after fixes...');
        
        try {
            const result = execSync('npm run lint', { 
                cwd: this.projectRoot, 
                encoding: 'utf8',
                stdio: 'pipe'
            });
            this.log('✅ Lint check passed', 'success');
            return true;
        } catch (error) {
            this.log(`❌ Lint check failed: ${error.message}`, 'error');
            return false;
        }
    }

    async runTypeCheck() {
        this.log('🔍 Running TypeScript check...');
        
        try {
            const result = execSync('npm run type-check', { 
                cwd: this.projectRoot, 
                encoding: 'utf8',
                stdio: 'pipe'
            });
            this.log('✅ TypeScript check passed', 'success');
            return true;
        } catch (error) {
            this.log(`❌ TypeScript check failed: ${error.message}`, 'error');
            return false;
        }
    }
}

// Main execution
const fixer = new SyntaxErrorFixer();
const command = process.argv[2] || 'fix';

switch (command) {
    case 'fix':
        fixer.fixAll().then(() => {
            console.log('\n🎉 Syntax error fix completed!');
        }).catch(error => {
            console.error('❌ Fix failed:', error.message);
            process.exit(1);
        });
        break;
    case 'lint':
        fixer.runLint().then(success => {
            process.exit(success ? 0 : 1);
        });
        break;
    case 'type-check':
        fixer.runTypeCheck().then(success => {
            process.exit(success ? 0 : 1);
        });
        break;
    case 'all':
        fixer.fixAll().then(() => {
            return fixer.runLint();
        }).then(() => {
            return fixer.runTypeCheck();
        }).then(() => {
            console.log('\n🎉 All checks completed successfully!');
        }).catch(error => {
            console.error('❌ Check failed:', error.message);
            process.exit(1);
        });
        break;
    default:
        console.log(`
🔧 Syntax Error Fixer

Usage:
  node automation/fix-syntax-errors.js [command]

Commands:
  fix         - Fix all syntax errors
  lint        - Run lint check
  type-check  - Run TypeScript check
  all         - Fix errors and run all checks

Examples:
  node automation/fix-syntax-errors.js fix
  node automation/fix-syntax-errors.js all
        `);
        break;
}

module.exports = SyntaxErrorFixer; 