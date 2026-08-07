#!/usr/bin/env node
/**
 * Smoke Routes Check - Wrapper for website_monitor.py
 * Checks live routes on ziontechgroup.com
 */
const { execSync } = require('child_process');
const path = require('path');

const scriptPath = path.join(__dirname, '../../commands/website_monitor.py');
console.log('🔍 Running route smoke test via website_monitor.py...');
try {
    const output = execSync(`python3 "${scriptPath}"`, { encoding: 'utf8', stdio: 'pipe' });
    console.log(output);
} catch (err) {
    console.error('❌ Smoke test failed:', err.message);
    process.exit(1);
}
