#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

// Function to fix a single page file
function fixPageFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    let fixedContent = content;
    let wasFixed = false;

    // Check if file has proper structure
    const hasExportDefault = content.includes('export default');
    const hasFunctionDeclaration = content.includes('function') || content.includes('const') || content.includes('class');
    const hasJSX = content.includes('<') && content.includes('>');
    const hasProperReturn = content.includes('return (') || content.includes('return(');

    // If file is missing proper structure, fix it
    if (!hasExportDefault || !hasFunctionDeclaration || !hasProperReturn) {
      // Extract the page name from the file path
      const fileName = path.basename(filePath, path.extname(filePath));
      const dirName = path.dirname(filePath).split(path.sep).pop();
      
      // Generate a proper component name
      let componentName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
      if (componentName === 'Index') componentName = 'HomePage';
      if (componentName === '403') componentName = 'ForbiddenPage';
      if (componentName === '404') componentName = 'NotFoundPage';
      if (componentName === '500') componentName = 'ServerErrorPage';
      
      // Add Page suffix if not already present
      if (!componentName.endsWith('Page')) {
        componentName += 'Page';
      }

      // Check if Head import is missing
      if (!content.includes('import Head') && content.includes('<Head>')) {
        fixedContent = content.replace(
          'import React from \'react\';',
          'import React from \'react\';\nimport Head from \'next/head\';'
        );
        wasFixed = true;
      }

      // Find the JSX content (look for opening tag)
      const jsxStart = fixedContent.indexOf('<');
      if (jsxStart !== -1) {
        const beforeJSX = fixedContent.substring(0, jsxStart);
        const jsxContent = fixedContent.substring(jsxStart);
        
        // Remove any existing malformed structure
        let cleanBeforeJSX = beforeJSX;
        if (cleanBeforeJSX.includes('return (')) {
          cleanBeforeJSX = cleanBeforeJSX.replace(/return\s*\([^)]*\)\s*\{?/g, '');
        }
        if (cleanBeforeJSX.includes('return(')) {
          cleanBeforeJSX = cleanBeforeJSX.replace(/return\s*\([^)]*\)\s*\{?/g, '');
        }
        
        // Clean up any trailing characters
        cleanBeforeJSX = cleanBeforeJSX.trim();
        
        // Wrap the JSX content in a proper function and return statement
        fixedContent = cleanBeforeJSX + 
          `\n\nexport default function ${componentName}() {\n  return (\n    ` + 
          jsxContent + 
          '\n  );\n}';
        wasFixed = true;
      }

      // Clean up malformed JSX
      if (fixedContent.includes('</>;')) {
        fixedContent = fixedContent.replace('</>;', '</>');
        wasFixed = true;
      }

      // Fix broken HTML attributes
      if (fixedContent.includes('href="/" className="text-blue-600 hover:underline">;')) {
        fixedContent = fixedContent.replace(
          'href="/" className="text-blue-600 hover:underline">;',
          'href="/" className="text-blue-600 hover:underline">'
        );
        wasFixed = true;
      }

      // Fix broken closing tags
      if (fixedContent.includes('</div></>;')) {
        fixedContent = fixedContent.replace('</div></>;', '</div></>');
        wasFixed = true;
      }

      // Ensure proper spacing and formatting
      fixedContent = fixedContent
        .replace(/>\s*</g, '>\n        <')
        .replace(/<Head>/g, '      <Head>')
        .replace(/<\/Head>/g, '      </Head>')
        .replace(/<div className="container mx-auto px-4 py-8">/g, '      <div className="container mx-auto px-4 py-8">')
        .replace(/<\/div>/g, '      </div>');

      if (wasFixed) {
        fs.writeFileSync(filePath, fixedContent);
        console.log(`✅ Fixed: ${filePath}`);
        return true;
      }
    }

    return false;
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to walk through all page files
function walkPages(dir, callback) {
  const files = fs.readdirSync(dir);
  
  for (const file of files) {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.next' && file !== 'out') {
        walkPages(filePath, callback);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.jsx') || file.endsWith('.js')) {
      callback(filePath);
    }
  }
}

// Main function
function main() {
  const pagesDir = path.join(process.cwd(), 'pages');
  
  if (!fs.existsSync(pagesDir)) {
    console.error('❌ Pages directory not found');
    process.exit(1);
  }

  console.log('🔧 Starting page fixes...');
  
  let totalFiles = 0;
  let fixedFiles = 0;

  walkPages(pagesDir, (filePath) => {
    totalFiles++;
    if (fixPageFile(filePath)) {
      fixedFiles++;
    }
  });

  console.log(`\n📊 Summary:`);
  console.log(`   Total files processed: ${totalFiles}`);
  console.log(`   Files fixed: ${fixedFiles}`);
  console.log(`   Files unchanged: ${totalFiles - fixedFiles}`);
  
  if (fixedFiles > 0) {
    console.log(`\n✅ Successfully fixed ${fixedFiles} page files!`);
  } else {
    console.log(`\n✨ No files needed fixing.`);
  }
}

if (require.main === module) {
  main();
}

module.exports = { fixPageFile, walkPages };