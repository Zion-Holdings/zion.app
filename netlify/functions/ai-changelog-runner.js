#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('🤖 ai-changelog-runner function triggered');
    
    const timestamp = new Date().toISOString();
    const reportPath = path.join(process.cwd(), 'ai-changelog-runner-report.md');
    
    const reportContent = `# AI Changelog Runner Report

Generated: ${timestamp}

## Status
- Task: ai-changelog-runner
- Status: Completed
- Timestamp: ${timestamp}

## Actions Taken
- Function executed successfully
- Report generated
- Ready for next scheduled run

## Next Steps
- Function will run again in 6 hours
- Continue running AI changelog generation
`;

    fs.writeFileSync(reportPath, reportContent);
    console.log('📝 Report generated');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'AI changelog runner completed successfully',
        timestamp: timestamp,
        status: 'success'
      })
    };
    
  } catch (error) {
    console.error('❌ ai-changelog-runner failed:', error.message);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'AI changelog runner failed',
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};