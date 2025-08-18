#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const yaml = require('js-yaml');

// Test workflow files for basic syntax and structure
function testWorkflowFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const workflow = yaml.load(content);
    
    // Basic validation
    const errors = [];
    
    if (!workflow.name) {
      errors.push('Missing workflow name');
    }
    
    if (!workflow.on) {
      errors.push('Missing trigger configuration');
    }
    
    if (!workflow.jobs) {
      errors.push('Missing jobs configuration');
    }
    
    // Check each job
    if (workflow.jobs) {
      Object.keys(workflow.jobs).forEach(jobName => {
        const job = workflow.jobs[jobName];
        
        if (!job.runs_on && !job.runs_on === 'self-hosted') {
          errors.push(`Job ${jobName}: Missing runs_on configuration`);
        }
        
        if (!job.steps || !Array.isArray(job.steps)) {
          errors.push(`Job ${jobName}: Missing or invalid steps configuration`);
        }
        
        if (job.steps) {
          job.steps.forEach((step, index) => {
            if (!step.name && !step.uses && !step.run) {
              errors.push(`Job ${jobName}, Step ${index + 1}: Missing name, uses, or run`);
            }
          });
        }
      });
    }
    
    return {
      file: path.basename(filePath),
      valid: errors.length === 0,
      errors
    };
  } catch (error) {
    return {
      file: path.basename(filePath),
      valid: false,
      errors: [`YAML parsing error: ${error.message}`]
    };
  }
}

// Test all workflow files
function testAllWorkflows() {
  const workflowsDir = path.join(__dirname, '.github', 'workflows');
  const workflowFiles = fs.readdirSync(workflowsDir)
    .filter(f => f.endsWith('.yml') || f.endsWith('.yaml'));
  
  console.log(`Testing ${workflowFiles.length} workflow files...\n`);
  
  const results = [];
  let totalValid = 0;
  let totalInvalid = 0;
  
  workflowFiles.forEach(file => {
    const result = testWorkflowFile(path.join(workflowsDir, file));
    results.push(result);
    
    if (result.valid) {
      totalValid++;
      console.log(`✅ ${result.file}`);
    } else {
      totalInvalid++;
      console.log(`❌ ${result.file}`);
      result.errors.forEach(error => {
        console.log(`   - ${error}`);
      });
    }
  });
  
  console.log(`\n=== Summary ===`);
  console.log(`Total workflows: ${workflowFiles.length}`);
  console.log(`Valid: ${totalValid}`);
  console.log(`Invalid: ${totalInvalid}`);
  
  return results;
}

// Run the tests
if (require.main === module) {
  testAllWorkflows();
}

module.exports = { testWorkflowFile, testAllWorkflows };