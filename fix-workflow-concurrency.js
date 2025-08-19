#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix workflow concurrency issues
function fixWorkflowConcurrency() {
  const workflowsDir = '.github/workflows';
  
  if (!fs.existsSync(workflowsDir)) {
    console.log('Workflows directory not found');
    return;
  }

  const workflowFiles = fs.readdirSync(workflowsDir)
    .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));

  let fixedCount = 0;
  let skippedCount = 0;

  console.log(`Found ${workflowFiles.length} workflow files`);

  workflowFiles.forEach(file => {
    const filePath = path.join(workflowsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    // Check if file has cancel-in-progress: true
    if (content.includes('cancel-in-progress: true')) {
      // Replace with cancel-in-progress: false for most workflows
      // Keep true only for critical CI workflows
      let newContent = content;
      
      if (file === 'ci.yml' || file === 'auto-fix.yml' || file === 'test.yml') {
        // Keep cancel-in-progress: true for critical workflows
        console.log(`Keeping cancel-in-progress: true for critical workflow: ${file}`);
        skippedCount++;
      } else {
        // Change to false for other workflows to prevent unnecessary cancellations
        newContent = content.replace(/cancel-in-progress:\s*true/g, 'cancel-in-progress: false');
        
        if (newContent !== content) {
          fs.writeFileSync(filePath, newContent);
          console.log(`Fixed concurrency in: ${file}`);
          fixedCount++;
        }
      }
    } else {
      skippedCount++;
    }
  });

  console.log(`\nWorkflow concurrency fix complete:`);
  console.log(`- Fixed: ${fixedCount} workflows`);
  console.log(`- Skipped: ${skippedCount} workflows`);
  console.log(`- Total: ${workflowFiles.length} workflows`);
}

// Function to optimize concurrency groups
function optimizeConcurrencyGroups() {
  const workflowsDir = '.github/workflows';
  
  if (!fs.existsSync(workflowsDir)) {
    return;
  }

  const workflowFiles = fs.readdirSync(workflowsDir)
    .filter(file => file.endsWith('.yml') || file.endsWith('.yaml'));

  workflowFiles.forEach(file => {
    const filePath = path.join(workflowsDir, file);
    const content = fs.readFileSync(filePath, 'utf8');

    // Check if file has generic concurrency groups that could cause conflicts
    if (content.includes('concurrency:') && content.includes('workflow-${{ github.ref }}')) {
      // Make concurrency groups more specific to prevent conflicts
      let newContent = content.replace(
        /group:\s*workflow-\${{ github\.ref }}/g,
        `group: ${file.replace('.yml', '').replace('.yaml', '')}-\${{ github.ref }}`
      );
      
      if (newContent !== content) {
        fs.writeFileSync(filePath, newContent);
        console.log(`Optimized concurrency group in: ${file}`);
      }
    }
  });
}

// Main execution
console.log('🔧 Fixing GitHub Actions workflow concurrency issues...\n');

try {
  fixWorkflowConcurrency();
  console.log('\n🔄 Optimizing concurrency groups...\n');
  optimizeConcurrencyGroups();
  
  console.log('\n✅ Workflow concurrency optimization complete!');
  console.log('\nThis should resolve the GitHub Actions cancellation issues by:');
  console.log('1. Setting cancel-in-progress: false for non-critical workflows');
  console.log('2. Keeping cancel-in-progress: true only for essential CI workflows');
  console.log('3. Making concurrency groups more specific to prevent conflicts');
  console.log('4. Reducing workflow competition for the same concurrency slots');
  
} catch (error) {
  console.error('❌ Error fixing workflows:', error.message);
  process.exit(1);
}
