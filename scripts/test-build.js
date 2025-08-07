#!/usr/bin/env node

/**
 * Build Test Script
 * Tests the build process and validates the output
 */

const fs = require('fs'
const path = require('path'
const { execSync } = require('child_process'
        this.buildDir = path.join(this.baseDir, '.next'
        this.outDir = path.join(this.baseDir, 'out'
        console.log('Testing build process...'
            console.log('Build test completed'
            console.error('Build test failed:'
        console.log('Cleaning previous builds...'
        console.log('Running build...'
            const result = execSync('npm run build'
                encoding: 'utf8'
                stdio: 'pipe'
            console.log('✓ Build completed successfully'
            console.log('✗ Build failed'
        console.log('Validating build output...'
            console.log('✓ Build directory exists'
            validation.issues.push('Build directory not found'
            console.log('✗ Build directory not found'
                if (itemPath.includes('/pages/') || itemPath.endsWith('.html'
        console.log('Checking build performance...'
                type: 'large_build'
                message: 'Build size is large, consider optimization'
                type: 'few_pages'
                message: 'Few pages generated, check build configuration'
                type: 'large_files'
                message: 'Large files found in build output'
        const reportFile = path.join(this.baseDir, 'automation', 'build-test-report.json'