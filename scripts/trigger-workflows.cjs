#!/usr/bin/env node

/**
 * Trigger GitHub Workflows
 * Manually triggers GitHub Actions workflows
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const WORKFLOWS_DIR = path.join(__dirname, '..', '.github', 'workflows');

function listWorkflows() {
  if (!fs.existsSync(WORKFLOWS_DIR)) {
    console.log('❌ .github/workflows directory not found');
    return [];
  }

  const workflows = fs.readdirSync(WORKFLOWS_DIR)
    .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'))
    .map(file => ({
      name: file,
      path: path.join(WORKFLOWS_DIR, file)
    }));

  return workflows;
}

function triggerWorkflow(workflowName, ref = 'main') {
  try {
    console.log(`🚀 Triggering workflow: ${workflowName}`);
    
    const command = `gh workflow run ${workflowName} --ref ${ref}`;
    const output = execSync(command, { encoding: 'utf8' });
    
    console.log(`✅ Workflow triggered successfully`);
    console.log(output);
    
    return true;
  } catch (error) {
    console.error(`❌ Failed to trigger workflow: ${error.message}`);
    return false;
  }
}

function showWorkflowStatus(workflowName) {
  try {
    const command = `gh run list --workflow=${workflowName} --limit 5`;
    const output = execSync(command, { encoding: 'utf8' });
    
    console.log(`📊 Recent runs for ${workflowName}:`);
    console.log(output);
    
    return true;
  } catch (error) {
    console.error(`❌ Failed to get workflow status: ${error.message}`);
    return false;
  }
}

function main() {
  const command = process.argv[2];
  const workflowName = process.argv[3];
  const ref = process.argv[4] || 'main';

  switch (command) {
    case 'list':
      const workflows = listWorkflows();
      console.log('📋 Available workflows:');
      workflows.forEach(wf => console.log(`  - ${wf.name}`));
      break;
      
    case 'trigger':
      if (!workflowName) {
        console.log('❌ Please specify a workflow name');
        console.log('Usage: node trigger-workflows.cjs trigger <workflow-name> [ref]');
        return;
      }
      triggerWorkflow(workflowName, ref);
      break;
      
    case 'status':
      if (!workflowName) {
        console.log('❌ Please specify a workflow name');
        console.log('Usage: node trigger-workflows.cjs status <workflow-name>');
        return;
      }
      showWorkflowStatus(workflowName);
      break;
      
    default:
      console.log('GitHub Workflows Trigger Tool');
      console.log('=============================');
      console.log('');
      console.log('Usage:');
      console.log('  node trigger-workflows.cjs list                    - List available workflows');
      console.log('  node trigger-workflows.cjs trigger <name> [ref]    - Trigger a workflow');
      console.log('  node trigger-workflows.cjs status <name>           - Show workflow status');
      console.log('');
      console.log('Examples:');
      console.log('  node trigger-workflows.cjs list');
      console.log('  node trigger-workflows.cjs trigger ci.yml');
      console.log('  node trigger-workflows.cjs trigger deploy.yml develop');
      console.log('  node trigger-workflows.cjs status ci.yml');
  }
}

if (require.main === module) {
  main();
}

module.exports = {
  listWorkflows,
  triggerWorkflow,
  showWorkflowStatus
};