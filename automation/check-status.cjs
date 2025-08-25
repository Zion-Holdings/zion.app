#!/usr/bin/env node
"use strict";

const fs = require('fs');
const path = require('path');

function checkServiceStatus() {
  console.log('🔍 Checking Zion Automation Systems Status...\n');
  
  const services = [
    'autonomous-system-manager',
    'ml-link-intelligence', 
    'link-health-scheduler',
    'real-time-performance-monitor'
  ];
  
  let allHealthy = true;
  
  services.forEach(service => {
    const logFile = path.join(__dirname, 'logs', `${service}.runtime.log`);
    const dataFile = path.join(__dirname, 'data', `${service.replace(/-/g, '-')}.json`);
    
    let status = '🔴 Offline';
    let lastActivity = 'Never';
    let details = '';
    
    try {
      if (fs.existsSync(logFile)) {
        const logContent = fs.readFileSync(logFile, 'utf8');
        const lines = logContent.split('\n').filter(line => line.trim());
        
        if (lines.length > 0) {
          const lastLine = lines[lines.length - 1];
          const timestampMatch = lastLine.match(/\[([^\]]+)\]/);
          
          if (timestampMatch) {
            const lastTimestamp = new Date(timestampMatch[1]);
            const now = new Date();
            const timeDiff = now - lastTimestamp;
            
            if (timeDiff < 60000) { // Less than 1 minute
              status = '🟢 Online';
            } else if (timeDiff < 300000) { // Less than 5 minutes
              status = '🟡 Warning';
            } else {
              status = '🔴 Offline';
            }
            
            lastActivity = `${Math.floor(timeDiff / 1000)}s ago`;
          }
        }
      }
      
      // Check for data files
      if (fs.existsSync(dataFile)) {
        try {
          const data = JSON.parse(fs.readFileSync(dataFile, 'utf8'));
          if (data.lastUpdated) {
            details = `Last updated: ${new Date(data.lastUpdated).toLocaleString()}`;
          }
        } catch (e) {
          details = 'Data file corrupted';
        }
      }
      
    } catch (error) {
      status = '🔴 Error';
      details = error.message;
    }
    
    if (status !== '🟢 Online') {
      allHealthy = false;
    }
    
    console.log(`${status} ${service}`);
    console.log(`   Last Activity: ${lastActivity}`);
    if (details) {
      console.log(`   ${details}`);
    }
    console.log('');
  });
  
  // Check log directory
  const logDir = path.join(__dirname, 'logs');
  if (fs.existsSync(logDir)) {
    const logFiles = fs.readdirSync(logDir).filter(file => file.endsWith('.log'));
    console.log(`📊 Log Files: ${logFiles.length} found`);
    
    logFiles.forEach(file => {
      const filePath = path.join(logDir, file);
      const stats = fs.statSync(filePath);
      const size = (stats.size / 1024).toFixed(2);
      console.log(`   ${file}: ${size} KB`);
    });
  }
  
  // Check data directory
  const dataDir = path.join(__dirname, 'data');
  if (fs.existsSync(dataDir)) {
    const dataFiles = fs.readdirSync(dataDir).filter(file => file.endsWith('.json'));
    console.log(`\n💾 Data Files: ${dataFiles.length} found`);
    
    dataFiles.forEach(file => {
      const filePath = path.join(dataDir, file);
      const stats = fs.statSync(filePath);
      const size = (stats.size / 1024).toFixed(2);
      console.log(`   ${file}: ${size} KB`);
    });
  }
  
  console.log('\n' + '='.repeat(50));
  if (allHealthy) {
    console.log('✅ All automation systems are healthy and running!');
  } else {
    console.log('⚠️  Some automation systems need attention');
  }
  console.log('='.repeat(50));
}

// Run status check
checkServiceStatus();
