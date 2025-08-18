const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  console.log('🤖 Starting code-smell-audit-runner function...');
  
  try {
    const timestamp = new Date().toISOString();
    const reportPath = path.join(process.cwd(), 'code-smell-audit-runner-report.md');
    
    const reportContent = `# Code Smell Audit Runner Report

Generated: ${timestamp}

## Status
- Task: code-smell-audit-runner
- Status: Completed
- Timestamp: ${timestamp}

## Function Details
- Schedule: Every 6 hours
- Purpose: Audit code smells
- Execution: Netlify Function

## Next Steps
- Implement code smell auditing logic
- Add smell detection features
- Add improvement mechanisms
`;

    fs.writeFileSync(reportPath, reportContent);
    console.log('📝 Report generated');
    
    // Commit the report
    try {
      execSync('git add ' + reportPath, { stdio: 'inherit' });
      execSync('git commit -m "🤖 Add code smell audit runner report [skip ci]"', { stdio: 'inherit' });
      execSync('git push', { stdio: 'inherit' });
      console.log('✅ Report committed and pushed');
    } catch (gitError) {
      console.log('Git error:', gitError.message);
    }
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Code smell audit runner completed successfully',
        timestamp: timestamp,
        status: 'success'
      })
    };
    
  } catch (error) {
    console.error('❌ Code smell audit runner failed:', error.message);
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