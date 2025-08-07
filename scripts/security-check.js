#!/usr/bin/env node

/**
 * Security Check Script
 * Validates security aspects of the application
 */

const fs = require('fs'
const path = require('path'
        console.log('Checking for hardcoded secrets...'
            /api_key\s*[:=]\s*['"][^'"
            /secret\s*[:=]\s*['"][^'"
            /password\s*[:=]\s*['"][^'"
            /token\s*[:=]\s*['"][^'"
            /key\s*[:=]\s*['"][^'"