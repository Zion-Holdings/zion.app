const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

exports.handler = async function(event, context) {
  try {
    console.log('🚀 Starting continuous content generation via Netlify function...');
    
    // Set environment variables
    process.env.CANONICAL_URL = 'https://ziontechgroup.com';
    process.env.PROCESS_TYPE = 'netlify-function';
    process.env.MAX_PAGES_PER_RUN = '3';
    
    // Get the repository path
    const repoPath = process.cwd();
    console.log(`Repository path: ${repoPath}`);
    
    // Ensure we're in the right directory
    if (!fs.existsSync(path.join(repoPath, 'package.json'))) {
      throw new Error('Not in a valid Node.js project directory');
    }
    
    // Install dependencies if needed
    if (!fs.existsSync(path.join(repoPath, 'node_modules'))) {
      console.log('Installing dependencies...');
      execSync('npm install', { cwd: repoPath, stdio: 'inherit' });
    }
    
    // Run content generation scripts
    const scripts = [
      'automation/ultra-content-creator.cjs',
      'automation/rapid-content-generator.cjs',
      'automation/ai-content-factory.cjs',
      'automation/cloud-content-factory.cjs'
    ];
    
    const results = [];
    
    for (const script of scripts) {
      try {
        if (fs.existsSync(path.join(repoPath, script))) {
          console.log(`Running ${script}...`);
          execSync(`node ${script}`, { cwd: repoPath, stdio: 'inherit' });
          results.push({ script, status: 'success' });
        } else {
          console.log(`Script not found: ${script}`);
          results.push({ script, status: 'not_found' });
        }
      } catch (error) {
        console.error(`Error running ${script}:`, error.message);
        results.push({ script, status: 'error', error: error.message });
      }
    }
    
    // Generate status report
    const statusReport = {
      timestamp: new Date().toISOString(),
      function: 'continuous-content-generation',
      environment: 'netlify',
      results,
      summary: {
        total: scripts.length,
        successful: results.filter(r => r.status === 'success').length,
        failed: results.filter(r => r.status === 'error').length,
        notFound: results.filter(r => r.status === 'not_found').length
      }
    };
    
    // Save status report
    const logsDir = path.join(repoPath, 'automation', 'logs');
    if (!fs.existsSync(logsDir)) {
      fs.mkdirSync(logsDir, { recursive: true });
    }
    
    const reportPath = path.join(logsDir, `netlify-content-generation-${Date.now()}.json`);
    fs.writeFileSync(reportPath, JSON.stringify(statusReport, null, 2));
    
    console.log('✅ Continuous content generation completed successfully!');
    console.log('Status Report:', JSON.stringify(statusReport, null, 2));
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'Continuous content generation completed successfully',
        status: statusReport
      })
    };
    
  } catch (error) {
    console.error('❌ Continuous content generation failed:', error.message);
    
    const errorReport = {
      timestamp: new Date().toISOString(),
      function: 'continuous-content-generation',
      environment: 'netlify',
      status: 'error',
      error: error.message,
      stack: error.stack
    };
    
    // Save error report
    try {
      const repoPath = process.cwd();
      const logsDir = path.join(repoPath, 'automation', 'logs');
      if (!fs.existsSync(logsDir)) {
        fs.mkdirSync(logsDir, { recursive: true });
      }
      
      const errorPath = path.join(logsDir, `netlify-content-generation-error-${Date.now()}.json`);
      fs.writeFileSync(errorPath, JSON.stringify(errorReport, null, 2));
    } catch (saveError) {
      console.error('Failed to save error report:', saveError.message);
    }
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        message: 'Continuous content generation failed',
        error: error.message
      })
    };
  }
};
