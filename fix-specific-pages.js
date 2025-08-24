#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// List of specific pages that were identified as corrupted
const corruptedPages = [
  'pages/403.tsx',
  'pages/ProductsList.tsx',
  'pages/faq.tsx',
  'pages/order-success.tsx',
  'pages/thank-you.tsx',
  'pages/gpt-library.tsx',
  'pages/order-confirmation/[orderId].tsx',
  'pages/governance/zgp-library.tsx',
  'pages/governance/create.tsx',
  'pages/governance/my-votes.tsx',
  'pages/governance/[proposalId].tsx'
];

// Function to find the best backup file for a given page
function findBestBackup(pagePath) {
  const dir = path.dirname(pagePath);
  const baseName = path.basename(pagePath, path.extname(pagePath));
  const ext = path.extname(pagePath);
  
  // Look for backup files
  const backupPattern = new RegExp(`^${baseName}\\.tsx\\.backup\\.\\d+$`);
  const files = fs.readdirSync(dir).filter(file => backupPattern.test(file));
  
  if (files.length === 0) return null;
  
  // Sort by timestamp (newest first) and find the first valid one
  files.sort((a, b) => {
    const timestampA = parseInt(a.match(/\.backup\.(\d+)$/)[1]);
    const timestampB = parseInt(b.match(/\.backup\.(\d+)$/)[1]);
    return timestampB - timestampA;
  });
  
  for (const backupFile of files) {
    const backupPath = path.join(dir, backupFile);
    try {
      const content = fs.readFileSync(backupPath, 'utf8');
      
      // Check if this backup has proper content
      if (content.includes('export default') && 
          (content.includes('function') || content.includes('const') || content.includes('class')) &&
          content.includes('return') &&
          content.length > 100) {
        return backupPath;
      }
    } catch (error) {
      console.log(`Error reading backup ${backupPath}:`, error.message);
    }
  }
  
  return null;
}

// Function to restore a corrupted page
function restorePage(pagePath) {
  try {
    const currentContent = fs.readFileSync(pagePath, 'utf8');
    
    // Check if the page is corrupted
    const isCorrupted = !currentContent.includes('export default') || 
                        currentContent.length < 100 ||
                        !currentContent.includes('return');
    
    if (!isCorrupted) {
      return { restored: false, reason: 'Page is not corrupted' };
    }
    
    // Find backup
    const backupPath = findBestBackup(pagePath);
    if (!backupPath) {
      return { restored: false, reason: 'No valid backup found' };
    }
    
    // Read backup content
    let backupContent = fs.readFileSync(backupPath, 'utf8');
    
    // Handle merge conflicts by taking the content after the conflict markers
    if (backupContent.includes('<<<<<<< HEAD')) {
      const parts = backupContent.split('=======');
      if (parts.length > 1) {
        // Take the content after the conflict resolution
        backupContent = parts[1].split('>>>>>>>')[0];
      }
    }
    
    // Clean up the content
    backupContent = backupContent.trim();
    
    // Ensure it has proper structure
    if (!backupContent.includes('export default')) {
      return { restored: false, reason: 'Backup content is also corrupted' };
    }
    
    // Create a backup of the current corrupted file
    const timestamp = Date.now();
    const corruptedBackupPath = `${pagePath}.corrupted.${timestamp}`;
    fs.writeFileSync(corruptedBackupPath, currentContent);
    
    // Restore the page
    fs.writeFileSync(pagePath, backupContent);
    
    return { 
      restored: true, 
      backupUsed: backupPath,
      corruptedBackup: corruptedBackupPath
    };
    
  } catch (error) {
    return { restored: false, reason: `Error: ${error.message}` };
  }
}

// Function to fix specific corrupted pages
function fixSpecificPages() {
  const results = {
    total: corruptedPages.length,
    restored: 0,
    failed: 0,
    details: []
  };
  
  console.log('🚀 Starting targeted page restoration...');
  console.log(`📋 Targeting ${corruptedPages.length} specific corrupted pages`);
  
  for (const pagePath of corruptedPages) {
    if (!fs.existsSync(pagePath)) {
      console.log(`⚠️  Page not found: ${pagePath}`);
      results.failed++;
      results.details.push({
        file: pagePath,
        restored: false,
        reason: 'Page not found'
      });
      continue;
    }
    
    console.log(`\n🔍 Checking: ${pagePath}`);
    const result = restorePage(pagePath);
    
    if (result.restored) {
      results.restored++;
      console.log(`✅ Restored: ${pagePath}`);
      console.log(`   Used backup: ${result.backupUsed}`);
      console.log(`   Corrupted backup: ${result.corruptedBackup}`);
    } else {
      results.failed++;
      console.log(`❌ Failed: ${pagePath}`);
      console.log(`   Reason: ${result.reason}`);
    }
    
    results.details.push({
      file: pagePath,
      ...result
    });
  }
  
  // Generate summary
  console.log('\n📊 Restoration Summary:');
  console.log(`   Total pages: ${results.total}`);
  console.log(`   Restored: ${results.restored}`);
  console.log(`   Failed: ${results.failed}`);
  console.log(`   Success rate: ${((results.restored / results.total) * 100).toFixed(1)}%`);
  
  // Save detailed report
  const reportPath = path.join(process.cwd(), 'targeted-page-restoration-report.json');
  fs.writeFileSync(reportPath, JSON.stringify(results, null, 2));
  console.log(`\n📄 Detailed report saved to: ${reportPath}`);
  
  return results;
}

// Run the restoration if this script is executed directly
if (require.main === module) {
  fixSpecificPages();
}

module.exports = {
  restorePage,
  fixSpecificPages,
  findBestBackup
};