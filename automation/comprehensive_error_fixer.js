#!/usr/bin/env node

/**
 * Comprehensive Error Fixer
 * Fixes all types of errors including syntax errors, corrupted files, and linting issues
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

class ComprehensiveErrorFixer {
    constructor() {
        this.fixes = [];
        this.stats = {
            filesProcessed: 0,
            filesFixed: 0,
            errorsFixed: 0
        };
    }

    log(message) {
        const timestamp = new Date().toISOString();
        console.log(`[${timestamp}] ${message}`);
    }

    async fixCorruptedFiles() {
        this.log('Starting comprehensive error fixing...');
        
        // Fix corrupted TypeScript/JavaScript files
        await this.fixCorruptedTSFiles();
        
        // Fix corrupted configuration files
        await this.fixCorruptedConfigFiles();
        
        // Fix corrupted utility files
        await this.fixCorruptedUtilityFiles();
        
        // Run ESLint and Prettier fixes
        await this.runCodeQualityFixes();
        
        this.log(`Comprehensive error fixing completed. Processed: ${this.stats.filesProcessed}, Fixed: ${this.stats.filesFixed}, Errors: ${this.stats.errorsFixed}`);
    }

    async fixCorruptedTSFiles() {
        this.log('Fixing corrupted TypeScript/JavaScript files...');
        
        const corruptedFiles = [
            'pages/index.tsx',
            'pages/contact.tsx',
            'pages/enhanced-home.tsx',
            'pages/iot-platforms.tsx',
            'pages/products/index.tsx',
            'pages/services/index.tsx',
            'pages/talent/index.tsx',
            'pages/blockchain-solutions.tsx',
            'pages/auth/callback.tsx',
            'pages/auth/index.tsx',
            'pages/auth/reset-password.tsx',
            'pages/auth/verify.tsx',
            'components/Layout.tsx',
            'components/layout/EnhancedFooter.tsx',
            'components/layout/EnhancedNavigation.tsx',
            'components/ui/AnimatedBackground.tsx',
            'components/ui/EnhancedCard.tsx',
            'components/ui/EnhancedLoading.tsx',
            'components/ui/EnhancedMarketplaceCard.tsx',
            'components/ui/FuturisticCard.tsx',
            'components/ui/InteractiveNavigation.tsx',
            'components/ui/InteractiveSearch.tsx',
            'components/ui/NotificationSystem.tsx',
            'components/ui/UserEngagementSystem.tsx'
        ];

        for (const file of corruptedFiles) {
            if (fs.existsSync(file)) {
                await this.fixCorruptedFile(file);
            }
        }
    }

    async fixCorruptedFile(filePath) {
        try {
            this.stats.filesProcessed++;
            const content = fs.readFileSync(filePath, 'utf8');
            
            // Fix common corruption patterns
            let fixedContent = content
                // Fix corrupted imports
                .replace(/import,\s*typ,\s*e\s*\{\s*NextPage\s*\}\s*fr,\s*o,\s*m\s*'next';;?/g, "import type { NextPage } from 'next';")
                .replace(/import,\s*Head,\s*from\s*'next\/head';/g, "import Head from 'next/head';")
                .replace(/import,\s*Link,\s*from\s*'next\/link';/g, "import Link from 'next/link';")
                .replace(/import,\s*EnhancedLayout,\s*from\s*'\.\.\/componen,\s*t,\s*s\/layo,\s*u,\s*t\/EnhancedLayo,\s*u,\s*t';/g, "import EnhancedLayout from '../components/layout/EnhancedLayout';")
                .replace(/import,\s*FuturisticHero,\s*from\s*'\.\.\/componen,\s*t,\s*s\/ui\/FuturisticHe,\s*r,\s*o';/g, "import FuturisticHero from '../components/ui/FuturisticHero';")
                .replace(/import,\s*EnhancedButton,\s*from\s*'\.\.\/componen,\s*t,\s*s\/ui\/EnhancedButt,\s*o,\s*n';/g, "import EnhancedButton from '../components/ui/EnhancedButton';")
                .replace(/import,\s*GlassmorphismCard,\s*from\s*'\.\.\/componen,\s*t,\s*s\/ui\/GlassmorphismCa,\s*r,\s*d';/g, "import GlassmorphismCard from '../components/ui/GlassmorphismCard';")
                
                // Fix corrupted component names
                .replace(/const\s+([a-zA-Z-]+):\s*NextPage\s*=\s*\(\)\s*=>\s*\{/g, (match, componentName) => {
                    const fixedName = componentName.replace(/-/g, '');
                    return `const ${fixedName}: NextPage = () => {`;
                })
                
                // Fix corrupted props
                .replace(/props,\s*is\s*defined\s*but\s*never\s*used/g, "_props")
                
                // Fix corrupted strings
                .replace(/rea\s*c\s*t/g, "react")
                .replace(/next\/li\s*n\s*k/g, "next/link")
                .replace(/next\/hea\s*d/g, "next/head")
                
                // Fix corrupted function declarations
                .replace(/export,\s*function\s+([a-zA-Z]+)\(([^)]+)\)\s*\{/g, "export function $1($2) {")
                .replace(/export,\s*const\s+([a-zA-Z]+)\s*=\s*\(\)\s*=>\s*\{/g, "export const $1 = () => {")
                
                // Fix corrupted interfaces
                .replace(/export,\s*interface\s+([a-zA-Z]+)\s*\{/g, "export interface $1 {")
                
                // Fix corrupted type annotations
                .replace(/:\s*stri,\s*n,\s*g/g, ": string")
                .replace(/:\s*a,\s*n,\s*y/g, ": any")
                
                // Fix corrupted return statements
                .replace(/retu,\s*r,\s*n\s+([^;]+);/g, "return $1;")
                
                // Fix corrupted variable declarations
                .replace(/let,\s*([a-zA-Z]+)\s*=\s*([^;]+);/g, "let $1 = $2;")
                .replace(/const\s+([a-zA-Z]+)\s*=\s*([^;]+);/g, "const $1 = $2;")
                
                // Fix corrupted method calls
                .replace(/\.repla,\s*c,\s*e\(/g, ".replace(")
                .replace(/\.spli,\s*t\(/g, ".split(")
                .replace(/\.joi,\s*n\(/g, ".join(")
                
                // Fix corrupted regex patterns
                .replace(/\/<scri\s*pt\b[^<]*\s*(?!<\/scri\s*pt>)<[^<]*\s*)*<\/scri\s*pt>/gi, "/<script\\b[^<]*\\s*(?:(?!<\\/script>)<[^<]*\\s*)*<\\/script>/gi")
                
                // Fix corrupted HTML
                .replace(/<scri\s*pt/g, "<script")
                .replace(/<\/scri\s*pt>/g, "</script>")
                
                // Fix corrupted comments
                .replace(/\/\/\s*([^\n]+)/g, "// $1")
                
                // Fix corrupted template literals
                .replace(/`([^`]+)`/g, (match, content) => {
                    return `\`${content.replace(/,\s*/g, "")}\``;
                })
                
                // Fix corrupted object properties
                .replace(/([a-zA-Z]+),\s*([a-zA-Z]+):\s*([^}]+)/g, "$1$2: $3")
                
                // Fix corrupted array elements
                .replace(/\[\s*([^\]]+)\s*\]/g, (match, content) => {
                    return `[${content.replace(/,\s*/g, ', ')}]`;
                });

            if (fixedContent !== content) {
                fs.writeFileSync(filePath, fixedContent);
                this.stats.filesFixed++;
                this.stats.errorsFixed++;
                this.log(`Fixed corrupted file: ${filePath}`);
            }
        } catch (error) {
            this.log(`Error fixing file ${filePath}: ${error.message}`);
        }
    }

    async fixCorruptedConfigFiles() {
        this.log('Fixing corrupted configuration files...');
        
        // Fix postcss.config.js
        const postcssConfig = `module.exports = {
  plugins: {
    '@tailwindcss/postcss': {},
    autoprefixer: {},
  },
}`;
        
        fs.writeFileSync('postcss.config.js', postcssConfig);
        this.stats.filesFixed++;
        this.log('Fixed postcss.config.js');
        
        // Fix next.config.js
        const nextConfig = `/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
  images: {
    domains: ['localhost'],
  },
};

export default nextConfig;
`;
        
        fs.writeFileSync('next.config.js', nextConfig);
        this.stats.filesFixed++;
        this.log('Fixed next.config.js');
    }

    async fixCorruptedUtilityFiles() {
        this.log('Fixing corrupted utility files...');
        
        const utilityFiles = [
            'utils/api/quoteRequests.ts',
            'utils/browserExtensionDetector.ts',
            'utils/data/services.ts',
            'utils/messageChannelHandler.ts',
            'utils/sanitizeHtml.ts',
            'utils/supabase/client.ts',
            'utils/supabase/middleware.ts',
            'utils/supabase/server.ts',
            'utils/testing-system.ts',
            'utils/testing-system.tsx',
            'utils/types/service.ts'
        ];

        for (const file of utilityFiles) {
            if (fs.existsSync(file)) {
                await this.fixCorruptedFile(file);
            }
        }
    }

    async runCodeQualityFixes() {
        this.log('Running code quality fixes...');
        
        try {
            // Run ESLint fixes
            execSync('npx eslint "**/*.{js,ts,tsx}" --fix', { stdio: 'inherit' });
            this.log('ESLint fixes applied');
        } catch (error) {
            this.log(`ESLint fix error: ${error.message}`);
        }
        
        try {
            // Run Prettier fixes
            execSync('npx prettier --write "**/*.{js,ts,tsx,json,md}"', { stdio: 'inherit' });
            this.log('Prettier fixes applied');
        } catch (error) {
            this.log(`Prettier fix error: ${error.message}`);
        }
        
        try {
            // Run markdown linting fixes
            execSync('npx markdownlint-cli "**/*.md" --fix', { stdio: 'inherit' });
            this.log('Markdown linting fixes applied');
        } catch (error) {
            this.log(`Markdown linting fix error: ${error.message}`);
        }
    }

    async commitFixes() {
        try {
            const status = execSync('git status --porcelain', { encoding: 'utf8' });
            
            if (status.trim()) {
                execSync('git add .', { stdio: 'inherit' });
                execSync('git commit -m "Fix: Comprehensive error fixing and file corruption repair"', { stdio: 'inherit' });
                this.log('Changes committed successfully');
            }
        } catch (error) {
            this.log(`Commit error: ${error.message}`);
        }
    }
}

// CLI interface
if (require.main === module) {
    const fixer = new ComprehensiveErrorFixer();
    
    const command = process.argv[2];
    
    switch (command) {
        case 'fix':
            fixer.fixCorruptedFiles().then(() => {
                fixer.commitFixes();
            });
            break;
        case 'commit':
            fixer.commitFixes();
            break;
        default:
            console.log('Usage: node comprehensive_error_fixer.js [fix|commit]');
            console.log('  fix - Fix all corrupted files and errors');
            console.log('  commit - Commit the fixes');
    }
}

module.exports = ComprehensiveErrorFixer;
