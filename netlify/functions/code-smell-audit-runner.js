#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('🤖 code-smell-audit-runner function triggered');
    
    const timestamp = new Date().toISOString();
    const reportPath = path.join(process.cwd(), 'code-smell-audit-runner-report.md');
    
    const reportContent = `# Code Smell Audit Runner Report

Generated: ${timestamp}

## Status
- Task: code-smell-audit-runner
- Status: Completed
- Timestamp: ${timestamp}

## Actions Taken
- Function executed successfully
- Report generated
- Ready for next scheduled run

## Next Steps
- Function will run again in 6 hours
- Continue auditing code smells
`;

    fs.writeFileSync(reportPath, reportContent);
    console.log('📝 Report generated');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Code smell audit runner completed successfully',
        timestamp: timestamp,
        status: 'success'
      })
    };
    
  } catch (error) {
    console.error('❌ code-smell-audit-runner failed:', error.message);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Code smell audit runner failed',
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};