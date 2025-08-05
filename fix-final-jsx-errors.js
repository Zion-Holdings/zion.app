const fs = require('fs');
const path = require('path');

// Function to fix final JSX structure errors
function fixFinalJSXErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix malformed JSX structure with missing closing tags
    const malformedStructurePattern = /<\/div>\s*<\/div>\s*\);\s*\};\s*\n\nexport default/g;
    if (malformedStructurePattern.test(content)) {
      content = content.replace(malformedStructurePattern, '      </div>\n    </div>\n  );\n};\n\nexport default');
      modified = true;
    }

    // Fix malformed JSX structure with missing closing tags
    const malformedStructurePattern2 = /<\/div>\s*\);\s*\};\s*\n\nexport default/g;
    if (malformedStructurePattern2.test(content)) {
      content = content.replace(malformedStructurePattern2, '    </div>\n  );\n};\n\nexport default');
      modified = true;
    }

    // Fix malformed JSX structure with missing closing tags
    const malformedStructurePattern3 = /\);\s*\};\s*\n\nexport default/g;
    if (malformedStructurePattern3.test(content)) {
      content = content.replace(malformedStructurePattern3, '  );\n};\n\nexport default');
      modified = true;
    }

    // Fix malformed JSX structure with missing closing tags
    const malformedStructurePattern4 = /<\/div>\s*<\/div>\s*<\/div>\s*\);\s*\};\s*\n\nexport default/g;
    if (malformedStructurePattern4.test(content)) {
      content = content.replace(malformedStructurePattern4, '        </div>\n      </div>\n    </div>\n  );\n};\n\nexport default');
      modified = true;
    }

    // Fix malformed JSX structure with missing closing tags
    const malformedStructurePattern5 = /<\/div>\s*<\/div>\s*<\/div>\s*<\/div>\s*\);\s*\};\s*\n\nexport default/g;
    if (malformedStructurePattern5.test(content)) {
      content = content.replace(malformedStructurePattern5, '          </div>\n        </div>\n      </div>\n    </div>\n  );\n};\n\nexport default');
      modified = true;
    }

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find TypeScript files
function findTsxFiles(dir) {
  const files = [];
  const items = fs.readdirSync(dir);
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory() && !item.startsWith('.') && item !== 'node_modules') {
      files.push(...findTsxFiles(fullPath));
    } else if (item.endsWith('.tsx')) {
      files.push(fullPath);
    }
  }
  
  return files;
}

// Main execution
const pagesDir = path.join(__dirname, 'pages');
const files = findTsxFiles(pagesDir);

console.log(`Found ${files.length} TypeScript files to process...`);

let fixedCount = 0;
for (const file of files) {
  if (fixFinalJSXErrors(file)) {
    fixedCount++;
  }
}

console.log(`Fixed ${fixedCount} files.`); 