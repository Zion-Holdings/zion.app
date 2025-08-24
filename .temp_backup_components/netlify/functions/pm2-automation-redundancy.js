const { execSync } = require('child_process');
const path = require('path');
const fs = require('fs');

// PM2 Automation Redundancy Function
// This function provides redundancy for all PM2 automations by running them as Netlify functions

exports.handler = async (event, context) => {
  try {
    console.log('🤖 Starting PM2 Automation Redundancy function...');
    
    const timestamp = new Date().toISOString();
    const results = [];
    
    // PM2 Process Categories from ecosystem.config.cjs
    const pm2Processes = [
      // Content Creation Processes
      {
        name: 'ultra-content-creator',
        script: 'automation/ultra-content-creator.cjs',
        interval: '30s',
        category: 'content-creation'
      },
      {
        name: 'rapid-content-generator',
        script: 'automation/rapid-content-generator.cjs',
        interval: '2m',
        category: 'content-creation'
      },
      {
        name: 'content-creator',
        script: 'automation/content-creator.cjs',
        interval: '5m',
        category: 'content-creation'
      },
      {
        name: 'ai-content-factory',
        script: 'automation/ai-content-factory.cjs',
        interval: '3m',
        category: 'content-creation'
      },
      {
        name: 'cloud-content-factory',
        script: 'automation/cloud-content-factory.cjs',
        interval: '4m',
        category: 'content-creation'
      },
      {
        name: 'intelligent-content-generator',
        script: 'automation/intelligent-content-generator.cjs',
        interval: '6m',
        category: 'content-creation'
      },
      {
        name: 'autonomous-content-generator',
        script: 'automation/autonomous-content-generator.cjs',
        interval: '7m',
        category: 'content-creation'
      },
      {
        name: 'cursor-autonomous-orchestrator',
        script: 'automation/cursor-autonomous-content-orchestrator.cjs',
        interval: '8m',
        category: 'content-creation'
      },
      
      // Frontend Enhancement Processes
      {
        name: 'continuous-front',
        script: 'automation/continuous-front-runner.cjs',
        interval: '5m',
        category: 'frontend-enhancement'
      },
      {
        name: 'front-enhancer',
        script: 'automation/front-enhancer.cjs',
        interval: '5m',
        category: 'frontend-enhancement'
      },
      
      // Guardian and Monitoring Processes
      {
        name: 'automation-guardian-10m',
        script: 'automation/automation-guardian-10min.cjs',
        interval: '10m',
        category: 'monitoring'
      },
      
      // Link Management Processes
      {
        name: 'links-crawl',
        script: 'automation/site-link-crawler.cjs',
        interval: '6h',
        category: 'link-management'
      },
      {
        name: 'links-fix',
        script: 'automation/site-link-fixer.cjs',
        interval: '6h',
        category: 'link-management'
      },
      
      // Sitemap and SEO Processes
      {
        name: 'sitemap-runner',
        script: 'automation/sitemap-runner.cjs',
        interval: '7m',
        category: 'seo'
      },
      
      // Git Sync Processes
      {
        name: 'git-sync',
        script: 'automation/git-sync.cjs',
        interval: '2m',
        category: 'git-sync'
      },
      {
        name: 'git-autosync-loop',
        script: 'automation/pm2-git-autosync.cjs',
        interval: 'continuous',
        category: 'git-sync'
      },
      
      // Content Completion Processes
      {
        name: 'content-completer',
        script: 'automation/content-completer.cjs',
        interval: '2m',
        category: 'content-completion'
      },
      
      // Chat and Agent Processes
      {
        name: 'chat-to-agents',
        script: 'automation/chat-to-agents-orchestrator.cjs',
        interval: '5m',
        category: 'chat-agents'
      },
      
      // Ultra-Rapid Sync Processes
      {
        name: 'ultra-rapid-sync',
        script: 'automation/ultra-rapid-sync.cjs',
        interval: '1m',
        category: 'sync'
      }
    ];
    
    console.log(`Found ${pm2Processes.length} PM2 processes to provide redundancy for`);
    
    // Process each PM2 automation
    for (const process of pm2Processes) {
      try {
        console.log(`Processing ${process.name} (${process.category})...`);
        
        // Check if the script exists
        const scriptPath = path.join(process.cwd(), process.script);
        if (fs.existsSync(scriptPath)) {
          // Execute the automation script
          const output = execSync(`node ${process.script}`, { 
            cwd: process.cwd(),
            encoding: 'utf8',
            timeout: 30000 // 30 second timeout
          });
          
          results.push({
            name: process.name,
            category: process.category,
            status: 'success',
            interval: process.interval,
            output: output.substring(0, 500), // Limit output length
            timestamp: new Date().toISOString()
          });
          
          console.log(`✅ ${process.name} completed successfully`);
        } else {
          results.push({
            name: process.name,
            category: process.category,
            status: 'script-not-found',
            interval: process.interval,
            error: 'Script file not found',
            timestamp: new Date().toISOString()
          });
          
          console.log(`⚠️ ${process.name} script not found`);
        }
      } catch (processError) {
        results.push({
          name: process.name,
          category: process.category,
          status: 'error',
          interval: process.interval,
          error: processError.message,
          timestamp: new Date().toISOString()
        });
        
        console.log(`❌ ${process.name} failed:`, processError.message);
      }
    }
    
    // Generate comprehensive report
    const reportPath = path.join(process.cwd(), 'pm2-redundancy-report.md');
    const successCount = results.filter(r => r.status === 'success').length;
    const errorCount = results.filter(r => r.status === 'error').length;
    const notFoundCount = results.filter(r => r.status === 'script-not-found').length;
    
    const reportContent = `# PM2 Automation Redundancy Report

Generated: ${timestamp}

## Summary
- Total PM2 Processes: ${pm2Processes.length}
- Successfully Executed: ${successCount}
- Failed: ${errorCount}
- Scripts Not Found: ${notFoundCount}

## Process Categories
${Array.from(new Set(results.map(r => r.category))).map(category => {
  const categoryResults = results.filter(r => r.category === category);
  const categorySuccess = categoryResults.filter(r => r.status === 'success').length;
  return `- **${category}**: ${categorySuccess}/${categoryResults.length} successful`;
}).join('\n')}

## Detailed Results
${results.map(r => `### ${r.name} (${r.category})
- **Status**: ${r.status}
- **Interval**: ${r.interval}
- **Timestamp**: ${r.timestamp}
${r.status === 'success' ? `- **Output**: ${r.output.substring(0, 200)}...` : ''}
${r.status === 'error' ? `- **Error**: ${r.error}` : ''}
${r.status === 'script-not-found' ? `- **Issue**: ${r.error}` : ''}
`).join('\n\n')}

## Next Steps
- Monitor execution logs for any failures
- Review scripts that were not found
- Ensure all automation scripts are properly maintained
- Consider adjusting intervals for better performance
`;

    fs.writeFileSync(reportPath, reportContent);
    console.log('📝 Comprehensive PM2 redundancy report generated');
    
    // Try to commit the report
    try {
      execSync('git add ' + reportPath, { stdio: 'inherit' });
      execSync('git commit -m "🤖 Add PM2 automation redundancy report [skip ci]"', { stdio: 'inherit' });
      console.log('✅ Report committed');
    } catch (gitError) {
      console.log('Git commit error:', gitError.message);
    }
    
    console.log('✅ PM2 Automation Redundancy completed successfully');
    
    return {
      statusCode: 200,
      body: JSON.stringify({
        message: 'PM2 Automation Redundancy completed successfully',
        totalProcesses: pm2Processes.length,
        successCount,
        errorCount,
        notFoundCount,
        results: results.map(r => ({
          name: r.name,
          category: r.category,
          status: r.status,
          interval: r.interval
        })),
        timestamp: new Date().toISOString()
      })
    };
  } catch (error) {
    console.error('❌ PM2 Automation Redundancy failed:', error.message);
    
    return {
      statusCode: 500,
      body: JSON.stringify({
        error: error.message,
        timestamp: new Date().toISOString()
      })
    };
  }
};