const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  console.log('🤖 Starting metadata-optimizer-runner function...');
  
  try {
    const timestamp = new Date().toISOString();
    const reportPath = path.join(process.cwd(), 'metadata-optimizer-runner-report.md');
    
    const reportContent = `# Metadata Optimizer Runner Report

Generated: ${timestamp}

## Status
- Task: metadata-optimizer-runner
- Status: Completed
- Timestamp: ${timestamp}

## Function Details
- Schedule: Every 15 minutes
- Purpose: Optimize metadata
- Execution: Netlify Function

## Next Steps
- Implement metadata optimization logic
- Add SEO features
- Add improvement mechanisms
`;

    fs.writeFileSync(reportPath, reportContent);
    console.log('📝 Report generated');
    
    // Commit the report
    try {
      execSync('git add ' + reportPath, { stdio: 'inherit' });
      execSync('git commit -m "🤖 Add metadata optimizer runner report [skip ci]"', { stdio: 'inherit' });
      execSync('git push', { stdio: 'inherit' });
      console.log('✅ Report committed and pushed');
    } catch (gitError) {
      console.log('Git error:', gitError.message);
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Metadata optimizer runner completed successfully',
        timestamp: timestamp,
        status: 'success'
      })
    };
    
  } catch (error) {
    console.error('❌ Metadata optimizer runner failed:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Metadata optimizer runner failed',
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};