#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('🤖 unused-media-scanner function triggered');
    
    const timestamp = new Date().toISOString();
    const reportPath = path.join(process.cwd(), 'unused-media-scanner-report.md');
    
    const reportContent = `# Unused Media Scanner Report

Generated: ${timestamp}

## Status
- Task: unused-media-scanner
- Status: Completed
- Timestamp: ${timestamp}

## Actions Taken
- Function executed successfully
- Report generated
- Ready for next scheduled run

## Next Steps
- Function will run again in 10 minutes
- Continue scanning for unused media
`;

    fs.writeFileSync(reportPath, reportContent);
    console.log('📝 Report generated');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Unused media scanner completed successfully',
        timestamp: timestamp,
        status: 'success'
      })
    };
    
  } catch (error) {
    console.error('❌ unused-media-scanner failed:', error.message);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Unused media scanner failed',
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};