#!/usr/bin/env node
// Dependency Update Automation Script (Frontend)
const { execSync } = require('child_process');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''

try {
  console.log('Checking for outdated npm packages...');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  execSync('npm outdated', { stdio: 'inherit' });'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  console.log('Updating npm packages...');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  execSync('npm update', { stdio: 'inherit' });'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
  console.log('Dependency update complete.');'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
} catch (err) {
  console.error('Error updating dependencies:', err);'''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''''
}
