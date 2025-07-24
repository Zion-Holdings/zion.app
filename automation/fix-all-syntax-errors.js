#!/usr/bin/env node

/**
 * Fix all syntax errors in automation files
 * Removes extra quotes and semicolons that cause syntax errors
 */

const fs = require('fs').promises;
const path = require('path');

async function fixSyntaxErrors() {
  console.log('🔧 Fixing syntax errors in automation files...');
  
  const automationDir = __dirname;
  const files = [
    'core/IntelligentAutomationOrchestrator.js',
    'core/AutonomousAutomationManager.js',
    'core/TaskScheduler.js',
    'core/NotificationManager.js',
    'core/AnomalyDetector.js',
    'core/ReportGenerator.js',
    'netlify-monitor.js',
    'netlify-error-fixer.js',
    'netlify-build-automation.js',
    'performance/monitor.js',
    'performance/frontend-fix.js',
    'continuous-improvement/enhanced-automation.js',
    'continuous-improvement/monitor.js',
    'continuous-improvement/improve.js',
    'tasks/DependencyUpdater.js'
  ];

  for (const file of files) {
    const filePath = path.join(automationDir, file);
    try {
      const content = await fs.readFile(filePath, 'utf8');
      
      // Fix common syntax errors
      let fixedContent = content
        // Fix require statements with extra quotes
        .replace(/require'\(/g, "require('")
        .replace(/require'\(/g, "require('")
        // Fix new statements with extra quotes
        .replace(/new' /g, "new ")
        // Fix null assignments with extra quotes
        .replace(/null';;/g, "null;")
        .replace(/null';/g, "null'")
        // Fix false assignments with extra quotes
        .replace(/false';;/g, "false;")
        .replace(/false';/g, "false'")
        // Fix string literals with missing quotes
        .replace(/✅ Intelligent Automation Orchestrator initialized successfully',/g, "'✅ Intelligent Automation Orchestrator initialized successfully'")
        .replace(/healthy';/g, "'healthy'")
        // Fix other common patterns
        .replace(/taskDuration',/g, "'taskDuration'")
        .replace(/scheduler',/g, "'scheduler'")
        .replace(/anomalyDetector',/g, "'anomalyDetector'");

      if (content !== fixedContent) {
        await fs.writeFile(filePath, fixedContent, 'utf8');
        console.log(`✅ Fixed: ${file}`);
      } else {
        console.log(`✅ No changes needed: ${file}`);
      }
    } catch (error) {
      console.log(`⚠️  Skipped ${file}: ${error.message}`);
    }
  }
  
  console.log('🎉 Syntax error fixing completed!');
}

if (require.main === module) {
  fixSyntaxErrors().catch(console.error);
}

module.exports = fixSyntaxErrors; 