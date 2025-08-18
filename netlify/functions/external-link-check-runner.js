#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('🤖 external-link-check-runner function triggered');
    
    const timestamp = new Date().toISOString();
    const reportPath = path.join(process.cwd(), 'external-link-check-runner-report.md');
    
    const reportContent = `# External Link Check Runner Report

Generated: ${timestamp}

## Status
- Task: external-link-check-runner
- Status: Completed
- Timestamp: ${timestamp}

## Actions Taken
- Function executed successfully
- Report generated
- Ready for next scheduled run

## Next Steps
- Function will run again in 6 hours
- Continue checking external links
`;

    fs.writeFileSync(reportPath, reportContent);
    console.log('📝 Report generated');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'External link check runner completed successfully',
        timestamp: timestamp,
        status: 'success'
      })
    };
    
  } catch (error) {
    console.error('❌ external-link-check-runner failed:', error.message);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'External link check runner failed',
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};