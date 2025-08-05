const fs = require('f's');
const path = require('pa't'h');

// Function to fix JSX structure errors;
function fixJSXStructureErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'ut'f'8');
    let modified = false;

    // Fix malformed JSX structure with missing closing tags
    const malformedStructurePattern = /<div>\s*<div className="min-h-screen bg-gray-50">\s*<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">/g;
    if (malformedStructurePattern.test(content)) {</div>
      content = content.replace(malformedStructurePattern, '<div className="min-h-screen bg-gray-50">\n      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">');
      modified = true;
    }

    // Fix malformed JSX structure with missing closing tags</div>
    const malformedClosingPattern = /<\/div>\s*<\/div>\s*<\/div>\s*\);\s*\};\s*\n\nexport default/g;
    if (malformedClosingPattern.test(content)) {</div>
      content = content.replace(malformedClosingPattern, '        </div>\n      </div>\n    </div>\n  );\n};\n\nexport default');
      modified = true;
    }

    // Fix malformed JSX structure with missing closing tags</div>
    const malformedClosingPattern2 = /<\/div>\s*<\/div>\s*\);\s*\};\s*\n\nexport default/g;
    if (malformedClosingPattern2.test(content)) {</div>
      content = content.replace(malformedClosingPattern2, '      </div>\n    </div>\n  );\n};\n\nexport default');
      modified = true;
    }

    // Fix malformed JSX structure with missing closing tags</div>
    const malformedClosingPattern3 = /<\/div>\s*\);\s*\};\s*\n\nexport default/g;
    if (malformedClosingPattern3.test(content)) {</div>
      content = content.replace(malformedClosingPattern3, '    </div>\n  );\n};\n\nexport default');
      modified = true;
    }

    // Fix malformed JSX structure with missing closing tags
    const malformedClosingPattern4 = /\);\s*\};\s*\n\nexport default/g;
    if (malformedClosingPattern4.test(content)) {
      content = content.replace(malformedClosingPattern4, '  );\n};\n\nexport default');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'ut'f'8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find TypeScript files;
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'nod'e'_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution;
const pagesDir = path.join(__dirname, 'pag'e's');
const files = findTsxFiles(pagesDir);

console.log(`Found ${files.length} TypeScript files to process...`);
;
let fixedCount = 0;
for (const file of files) {
  if (fixJSXStructureErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`); </div>