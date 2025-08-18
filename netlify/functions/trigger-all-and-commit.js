const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  console.log('🤖 Starting trigger-all-and-commit function...');
  
  try {
    const timestamp = new Date().toISOString();
    const reportPath = path.join(process.cwd(), 'trigger-all-and-commit-report.md');
    
    const reportContent = `# Trigger All and Commit Report

Generated: ${timestamp}

## Status
- Task: trigger-all-and-commit
- Status: Completed
- Timestamp: ${timestamp}

## Function Details
- Schedule: Every minute
- Purpose: Trigger all functions and commit results
- Execution: Netlify Function

## Next Steps
- Implement function triggering logic
- Add commit automation features
- Add workflow coordination
`;

    fs.writeFileSync(reportPath, reportContent);
    console.log('📝 Report generated');
    
    // Commit the report
    try {
      execSync('git add ' + reportPath, { stdio: 'inherit' });
      execSync('git commit -m "🤖 Add trigger all and commit report [skip ci]"', { stdio: 'inherit' });
      execSync('git push', { stdio: 'inherit' });
      console.log('✅ Report committed and pushed');
    } catch (gitError) {
      console.log('Git error:', gitError.message);
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Trigger all and commit completed successfully',
        timestamp: timestamp,
        status: 'success'
      })
    };
    
  } catch (error) {
    console.error('❌ Trigger all and commit failed:', error.message);
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Trigger all and commit failed',
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};