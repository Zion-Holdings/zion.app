#!/usr/bin/env node
/**
 * Build Deploy Health Check - Wrapper for ci_health_dashboard.py
 * Validates CI/CD pipeline health
 */
const { execSync } = require('child_process');
const path = require('path');

const scriptPath = path.resolve(__dirname, '../../commands/ci_health_dashboard.py');
console.log('🏗️ Checking build/deploy health via ci_health_dashboard.py...');
try {
    const output = execSync(`python3 "${scriptPath}"`, { encoding: 'utf8', stdio: 'pipe' });
    console.log(output);
} catch (err) {
    console.error('❌ CI health check failed:', err.message);
    process.exit(1);
}
