#!/usr/bin/env node

/**
 * Comprehensive Syntax Fixer
 * 
 * This script fixes the remaining syntax errors that the basic fixer couldn't handle:
 * - Expression expected errors
 * - Missing closing braces
 * - Malformed JSX
 * - Import/export issues
 */

const fs = require('fs');
const path = require('path');

class ComprehensiveSyntaxFixer {
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

            // Fix "Expression expected" errors in JSX
            content = this.fixExpressionExpected(content);
            
            // Fix missing closing braces
            content = this.fixMissingBraces(content);
            
            // Fix malformed JSX
            content = this.fixJSX(content);
            
            // Fix import/export issues
            content = this.fixImportsExports(content);
            
            // Fix API route issues
            if (filePath.includes('/api/')) {
                content = this.fixAPIRoutes(content);
            }

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

    fixExpressionExpected(content) {
        // Fix common patterns that cause "Expression expected" errors
        
        // Fix malformed function declarations
        content = content.replace(/export\s+default\s+function\s+([^{]+)\s*{/g, 'export default function $1 {');
        content = content.replace(/function\s+([^{]+)\s*{/g, 'function $1 {');
        
        // Fix malformed JSX components
        content = content.replace(/export\s+default\s+function\s+([^{]+)\s*{/g, 'export default function $1 {');
        content = content.replace(/const\s+([^{]+)\s*=\s*\(\s*\)\s*=>\s*{/g, 'const $1 = () => {');
        
        // Fix malformed return statements
        content = content.replace(/return\s*\(\s*;/g, 'return (');
        content = content.replace(/return\s*\(\s*<;/g, 'return (<');
        
        // Fix malformed JSX elements
        content = content.replace(/<([^>]+);/g, '<$1');
        content = content.replace(/>;;/g, '>;');
        
        return content;
    }

    fixMissingBraces(content) {
        // Count braces and add missing ones
        let openBraces = (content.match(/{/g) || []).length;
        let closeBraces = (content.match(/}/g) || []).length;
        
        if (openBraces > closeBraces) {
            const missingBraces = openBraces - closeBraces;
            content += '\n'.repeat(missingBraces) + '}'.repeat(missingBraces);
        }
        
        return content;
    }

    fixJSX(content) {
        // Fix common JSX issues
        
        // Fix malformed JSX fragments
        content = content.replace(/<>\s*;/g, '<>');
        content = content.replace(/;\s*</g, '<');
        
        // Fix malformed JSX elements
        content = content.replace(/<([^>]+);/g, '<$1');
        content = content.replace(/>;;/g, '>;');
        
        // Fix malformed JSX attributes
        content = content.replace(/=\s*([^>]+);/g, '=$1');
        
        return content;
    }

    fixImportsExports(content) {
        // Fix import statements
        content = content.replace(/import\s+([^;]+);;/g, 'import $1;');
        content = content.replace(/from\s+([^;]+);;/g, 'from $1;');
        
        // Fix export statements
        content = content.replace(/export\s+default\s+([^;]+);;/g, 'export default $1;');
        content = content.replace(/export\s+([^;]+);;/g, 'export $1;');
        
        // Fix missing quotes in imports
        content = content.replace(/import\s+React\s+from\s+react';/g, "import React from 'react';");
        content = content.replace(/import\s+Head\s+from\s+next\/head';/g, "import Head from 'next/head';");
        
        return content;
    }

    fixAPIRoutes(content) {
        // Fix API route specific issues
        
        // Fix malformed handler functions
        content = content.replace(/export\s+default\s+async\s+function\s+([^{]+)\s*{/g, 'export default async function $1 {');
        content = content.replace(/export\s+default\s+function\s+([^{]+)\s*{/g, 'export default function $1 {');
        
        // Fix malformed NextApiRequest/NextApiResponse
        content = content.replace(/req:\s*NextApiRequest;/g, 'req: NextApiRequest');
        content = content.replace(/res:\s*NextApiResponse;/g, 'res: NextApiResponse');
        
        // Fix malformed try-catch blocks
        content = content.replace(/try\s*{/g, 'try {');
        content = content.replace(/}\s*catch\s*\(/g, '} catch (');
        
        return content;
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
        this.log('🔧 Starting comprehensive syntax fix...');
        
        const directories = [
            'pages',
            'src/pages'
        ];

        for (const dir of directories) {
            const dirPath = path.join(this.projectRoot, dir);
            if (fs.existsSync(dirPath)) {
                this.log(`Processing directory: ${dir}`);
                await this.fixDirectory(dirPath);
            }
        }

        this.log(`✅ Comprehensive syntax fix completed. Fixed ${this.fixedFiles.length} files.`);
        
        if (this.errors.length > 0) {
            this.log(`⚠️ ${this.errors.length} errors encountered:`, 'warn');
            this.errors.forEach(error => {
                this.log(`  ${error.file}: ${error.error}`, 'warn');
            });
        }

        return this.fixedFiles.length;
    }
}

// Main execution
const fixer = new ComprehensiveSyntaxFixer();
const command = process.argv[2] || 'fix';

switch (command) {
    case 'fix':
        fixer.fixAll().then(() => {
            console.log('\n🎉 Comprehensive syntax fix completed!');
        }).catch(error => {
            console.error('❌ Fix failed:', error.message);
            process.exit(1);
        });
        break;
    default:
        console.log(`
🔧 Comprehensive Syntax Fixer

Usage:
  node automation/comprehensive-syntax-fixer.js [command]

Commands:
  fix         - Fix all remaining syntax errors

Examples:
  node automation/comprehensive-syntax-fixer.js fix
        `);
        break;
}

module.exports = ComprehensiveSyntaxFixer; 