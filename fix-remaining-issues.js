const fs = require('fs');
const path = require('path');

function fixRemainingIssues(directory) {
  const files = fs.readdirSync(directory, { withFileTypes: true });
  
  for (const file of files) {
    const fullPath = path.join(directory, file.name);
    
    if (file.isDirectory()) {
      fixRemainingIssues(fullPath);
    } else if (file.isFile() && /\.(tsx?|jsx?)$/.test(file.name)) {
      try {
        let content = fs.readFileSync(fullPath, 'utf8');
        let needsFix = false;
        
        // Fix specific issues
        if (content.includes('function ...slugPage()')) {
          content = content.replace('function ...slugPage()', 'function SlugPage()');
          needsFix = true;
        }
        
        if (content.includes('function private()')) {
          content = content.replace('function private()', 'function PrivatePage()');
          needsFix = true;
        }
        
        if (content.includes('function 404()')) {
          content = content.replace('function 404()', 'function Error404()');
          needsFix = true;
        }
        
        if (content.includes('function 500()')) {
          content = content.replace('function 500()', 'function Error500()');
          needsFix = true;
        }
        
        if (needsFix) {
          console.log(`Fixing remaining issues in: ${fullPath}`);
          fs.writeFileSync(fullPath, content);
        }
      } catch (error) {
        console.error(`Error processing ${fullPath}:`, error.message);
      }
    }
  }
}

// Start fixing from the pages directory
fixRemainingIssues('./pages');
console.log('Remaining issues fixing completed'); 