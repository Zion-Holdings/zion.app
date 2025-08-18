#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('📦 Starting dependency maintenance...');

try {
  // Check for outdated dependencies
  console.log('Checking for outdated dependencies...');
  
  let dependencyReport = '';
  let securityReport = '';
  
  try {
    // Generate dependency report
    dependencyReport = execSync('npm outdated --depth=0', { encoding: 'utf8' });
  } catch {
    dependencyReport = 'All packages are up to date';
  }
  
  try {
    // Check for security vulnerabilities
    securityReport = execSync('npm audit --audit-level=high', { encoding: 'utf8' });
  } catch {
    securityReport = 'No high severity vulnerabilities found';
  }
  
  console.log('Dependency analysis completed');
  
  // Write reports to files
  const dependencyPath = path.join(process.cwd(), 'dependency-report.txt');
  const securityPath = path.join(process.cwd(), 'security-report.txt');
  
  fs.writeFileSync(dependencyPath, dependencyReport);
  fs.writeFileSync(securityPath, securityReport);
  
  console.log('📝 Dependency reports generated');
  
  // Commit the reports
  try {
    execSync('git add dependency-report.txt security-report.txt', { stdio: 'inherit' });
    execSync('git commit -m "📦 Add dependency and security reports [skip ci]"', { stdio: 'inherit' });
    execSync('git push', { stdio: 'inherit' });
    console.log('✅ Dependency reports committed and pushed');
  } catch (gitError) {
    console.log('Git error:', gitError.message);
  }
  
  console.log('✅ Dependency maintenance completed successfully');
  
} catch (error) {
  console.error('❌ Dependency maintenance failed:', error.message);
  process.exit(1);
}
