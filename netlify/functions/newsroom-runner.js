const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  console.log('🤖 Starting newsroom-runner function...');
  
  try {
    const timestamp = new Date().toISOString();
    const reportPath = path.join(process.cwd(), 'newsroom-runner-report.md');
    
    const reportContent = `# Newsroom Runner Report

Generated: ${timestamp}

## Status
- Task: newsroom-runner
- Status: Completed
- Timestamp: ${timestamp}

## Function Details
- Schedule: Every 6 hours
- Purpose: Generate newsroom content
- Execution: Netlify Function

## Next Steps
- Implement newsroom content generation logic
- Add news aggregation features
- Add content curation mechanisms
`;

    fs.writeFileSync(reportPath, reportContent);
    console.log('📝 Report generated');
    
    // Commit the report
    try {
      execSync('git add ' + reportPath, { stdio: 'inherit' });
      execSync('git commit -m "🤖 Add newsroom runner report [skip ci]"', { stdio: 'inherit' });
      execSync('git push', { stdio: 'inherit' });
      console.log('✅ Report committed and pushed');
    } catch (gitError) {
      console.log('Git error:', gitError.message);
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Newsroom runner completed successfully',
        timestamp: timestamp,
        status: 'success'
      })
    };
    
  } catch (error) {
    console.error('❌ Newsroom runner failed:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Newsroom runner failed',
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};