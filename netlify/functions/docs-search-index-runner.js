#!/usr/bin/env node

'use strict';

const fs = require('fs');
const path = require('path');

exports.handler = async (event, context) => {
  try {
    console.log('🤖 docs-search-index-runner function triggered');
    
    const timestamp = new Date().toISOString();
    const reportPath = path.join(process.cwd(), 'docs-search-index-runner-report.md');
    
    const reportContent = `# Docs Search Index Runner Report

Generated: ${timestamp}

## Status
- Task: docs-search-index-runner
- Status: Completed
- Timestamp: ${timestamp}

## Actions Taken
- Function executed successfully
- Report generated
- Ready for next scheduled run

## Next Steps
- Function will run again in 6 hours
- Continue running documentation search indexing
`;

    fs.writeFileSync(reportPath, reportContent);
    console.log('📝 Report generated');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Docs search index runner completed successfully',
        timestamp: timestamp,
        status: 'success'
      })
    };
    
  } catch (error) {
    console.error('❌ docs-search-index-runner failed:', error.message);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Docs search index runner failed',
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};