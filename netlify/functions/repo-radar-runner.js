#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('🤖 repo-radar-runner function triggered');
    
    const timestamp = new Date().toISOString();
    const reportPath = path.join(process.cwd(), 'repo-radar-runner-report.md');
    
    const reportContent = `# Repo Radar Runner Report

Generated: ${timestamp}

## Status
- Task: repo-radar-runner
- Status: Completed
- Timestamp: ${timestamp}

## Actions Taken
- Function executed successfully
- Report generated
- Ready for next scheduled run

## Next Steps
- Function will run again in 6 hours
- Continue running repository radar operations
`;

    fs.writeFileSync(reportPath, reportContent);
    console.log('📝 Report generated');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Repo radar runner completed successfully',
        timestamp: timestamp,
        status: 'success'
      })
    };
    
  } catch (error) {
    console.error('❌ repo-radar-runner failed:', error.message);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Repo radar runner failed',
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};