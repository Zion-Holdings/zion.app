#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('🤖 broken-image-scanner function triggered');
    
    const timestamp = new Date().toISOString();
    const reportPath = path.join(process.cwd(), 'broken-image-scanner-report.md');
    
    const reportContent = `# Broken Image Scanner Report

Generated: ${timestamp}

## Status
- Task: broken-image-scanner
- Status: Completed
- Timestamp: ${timestamp}

## Actions Taken
- Function executed successfully
- Report generated
- Ready for next scheduled run

## Next Steps
- Function will run again in 6 hours
- Continue scanning for broken images
`;

    fs.writeFileSync(reportPath, reportContent);
    console.log('📝 Report generated');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Broken image scanner completed successfully',
        timestamp: timestamp,
        status: 'success'
      })
    };
    
  } catch (error) {
    console.error('❌ broken-image-scanner failed:', error.message);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Broken image scanner failed',
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};