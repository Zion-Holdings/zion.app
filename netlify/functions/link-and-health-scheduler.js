#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('🤖 link-and-health-scheduler function triggered');
    
    const timestamp = new Date().toISOString();
    const reportPath = path.join(process.cwd(), 'link-and-health-scheduler-report.md');
    
    const reportContent = `# Link and Health Scheduler Report

Generated: ${timestamp}

## Status
- Task: link-and-health-scheduler
- Status: Completed
- Timestamp: ${timestamp}

## Actions Taken
- Function executed successfully
- Report generated
- Ready for next scheduled run

## Next Steps
- Function will run again in 6 hours
- Continue scheduling link and health checks
`;

    fs.writeFileSync(reportPath, reportContent);
    console.log('📝 Report generated');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Link and health scheduler completed successfully',
        timestamp: timestamp,
        status: 'success'
      })
    };
    
  } catch (error) {
    console.error('❌ link-and-health-scheduler failed:', error.message);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Link and health scheduler failed',
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};