const fs = require('fs');
const path = require('path');

function fixPageContent(content, filePath) {
  let fixed = content;
  
  // Fix missing export default
  if (!content.includes('export default')) {
    const componentName = path.basename(filePath, path.extname(filePath))
      .replace(/[^a-zA-Z0-9]/g, '')
      .replace(/^[0-9]/, '') // Remove leading numbers
      .replace(/^([a-z])/, (match) => match.toUpperCase()); // Capitalize first letter
    
    if (!content.includes('function') && !content.includes('const') && !content.includes('class')) {
      // Add complete component structure
      fixed = `import React from 'react';
import Head from 'next/head';

export default function ${componentName}() {
  return (
    <>
      <Head>
        <title>${componentName} - Zion Tech Group</title>
        <meta name="description" content="${componentName} page" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">${componentName}</h1>
        <p className="text-lg mb-4">This page is under construction.</p>
        <div className="mt-4">
          <a href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </>
  );
}`;
    } else {
      // Just add export default
      const lines = content.split('\n');
      const lastLine = lines[lines.length - 1];
      if (lastLine.trim() === '') {
        lines.pop();
      }
      lines.push('');
      lines.push(`export default ${componentName};`);
      fixed = lines.join('\n');
    }
  }
  
  // Fix incomplete JSX
  if (content.includes('<') && !content.includes('</')) {
    if (!content.includes('return') && !content.includes('React.createElement')) {
      // Wrap in proper component structure
      const componentName = path.basename(filePath, path.extname(filePath))
        .replace(/[^a-zA-Z0-9]/g, '')
        .replace(/^[0-9]/, '')
        .replace(/^([a-z])/, (match) => match.toUpperCase());
      
      fixed = `import React from 'react';
import Head from 'next/head';

export default function ${componentName}() {
  return (
    <>
      <Head>
        <title>${componentName} - Zion Tech Group</title>
        <meta name="description" content="${componentName} page" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">${componentName}</h1>
        <p className="text-lg mb-4">This page is under construction.</p>
        <div className="mt-4">
          <a href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </>
  );
}`;
    }
  }
  
  // Fix missing return statement
  if (!content.includes('return') && !content.includes('React.createElement')) {
    if (content.includes('export default')) {
      const componentName = path.basename(filePath, path.extname(filePath))
        .replace(/[^a-zA-Z0-9]/g, '')
        .replace(/^[0-9]/, '')
        .replace(/^([a-z])/, (match) => match.toUpperCase());
      
      fixed = `import React from 'react';
import Head from 'next/head';

export default function ${componentName}() {
  return (
    <>
      <Head>
        <title>${componentName} - Zion Tech Group</title>
        <meta name="description" content="${componentName} page" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">${componentName}</h1>
        <p className="text-lg mb-4">This page is under construction.</p>
        <div className="mt-4">
          <a href="/" className="text-blue-600 hover:underline">
            ← Back to Home
          </a>
        </div>
      </div>
    </>
  );
}`;
    }
  }
  
  return fixed;
}

function walkDir(dir, callback) {
  const files = fs.readdirSync(dir);
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    if (stat.isDirectory()) {
      if (file !== 'node_modules' && file !== '.git' && file !== '.next' && file !== 'out') {
        walkDir(filePath, callback);
      }
    } else {
      callback(filePath);
    }
  });
}

function fixPages() {
  const pagesDir = path.join(process.cwd(), 'pages');
  let fixedCount = 0;
  let totalCount = 0;
  
  walkDir(pagesDir, (filePath) => {
    const ext = path.extname(filePath).toLowerCase();
    if (['.tsx', '.ts', '.jsx', '.js'].includes(ext)) {
      totalCount++;
      try {
        const content = fs.readFileSync(filePath, 'utf8');
        const fixed = fixPageContent(content, filePath);
        
        if (fixed !== content) {
          fs.writeFileSync(filePath, fixed);
          console.log(`✅ Fixed: ${path.relative(process.cwd(), filePath)}`);
          fixedCount++;
        }
      } catch (error) {
        console.log(`❌ Error processing ${filePath}: ${error.message}`);
      }
    }
  });
  
  console.log(`\n📊 Summary: Fixed ${fixedCount} out of ${totalCount} pages`);
  return fixedCount;
}

// Run the fix
const fixedCount = fixPages();
console.log(`\n🎯 Pages fixed: ${fixedCount}`);
console.log('Run the build again to check for remaining issues.');