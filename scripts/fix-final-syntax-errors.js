const fs = require('fs');
const path = require('path');

// Function to fix common syntax errors;
function fixSyntaxErrors(content) {
  // Fix unterminated string literals
  content = content.replace(/className="([^"]*)$/gm, 'className="$1"');
  content = content.replace(/title="([^"]*)$/gm, 'title="$1"');
  content = content.replace(/alt="([^"]*)$/gm, 'alt="$1"');
  content = content.replace(/src="([^"]*)$/gm, 'src="$1"');
  content = content.replace(/href="([^"]*)$/gm, 'href="$1"');
  
  // Fix missing closing quotes
  content = content.replace(/className="([^"]*?)"/g, 'className="$1"');
  content = content.replace(/title="([^"]*?)"/g, 'title="$1"');
  content = content.replace(/alt="([^"]*?)"/g, 'alt="$1"');
  content = content.replace(/src="([^"]*?)"/g, 'src="$1"');
  content = content.replace(/href="([^"]*?)"/g, 'href="$1"');
  
  // Fix missing closing tags
  content = content.replace(/(<[^>]*>)([^<]*)$/gm, '$1$2</div>');
  
  // Fix missing semicolons
  content = content.replace(/([^;])\n(import|export|const|let|var|function)/g, '$1;\n$2');
  
  // Fix missing closing braces
  content = content.replace(/([^}])\n(export|import)/g, '$1}\n$2');
  
  return content;
}

// Function to process a file;
function processFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    const originalContent = content;
    
    content = fixSyntaxErrors(content);
    
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
  return false;
}

// Function to recursively find and process files;
function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory() && !file.startsWith('.') && file !== 'node_modules') {
      processDirectory(filePath);
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      processFile(filePath);
    }
  }
}

// Main execution
console.log('Starting comprehensive syntax fix...');
processDirectory('.');
console.log('Syntax fix completed!'); </div>