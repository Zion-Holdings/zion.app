const fs = require('fs');
const path = require('path');

// Additional patterns to fix remaining issues
const additionalFixes = [
  // Fix unterminated string literals in import statements
  {
    pattern: /import React from 'react';/g,
    replacement: "import React from 'react';"
  },
  {
    pattern: /import Head from next\/head'";/g,
    replacement: "import Head from 'next/head';"
  },
  {
    pattern: /import Layout from ';\.\.\/components\/Layout";/g,
    replacement: "import Layout from '../components/Layout';"
  },
  {
    pattern: /import \{ motion \} from framer-motion/g,
    replacement: "import { motion } from 'framer-motion';"
  },
  
  // Fix malformed function declarations
  {
    pattern: /const \$1 = \(\) => \{/g,
    replacement: "const Component = () => {"
  },
  {
    pattern: /return \(/g,
    replacement: "return ("
  },
  
  // Fix malformed JSX
  {
    pattern: /<div><\/div>/g,
    replacement: "<div>"
  },
  {
    pattern: /<\/div>/g,
    replacement: "</div>"
  },
  {
    pattern: //g,
    replacement: ""
  },
  {
    pattern: //g,
    replacement: ""
  },
  {
    pattern: //g,
    replacement: ""
  },
  {
    pattern: //g,
    replacement: ""
  },
  {
    pattern: //g,
    replacement: ""
  },
  {
    pattern: //g,
    replacement: ""
  },
  
  // Fix malformed className attributes
  {
    pattern: /className="fixed inset-0 z-0"/g,
    replacement: 'className="fixed inset-0 z-0"'
  },
  {
    pattern: /className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"/g,
    replacement: 'className="absolute inset-0 bg-gradient-to-br from-cyber-dark via-cyber-darker to-cyber-dark-blue opacity-90"'
  },
  {
    pattern: /className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"/g,
    replacement: 'className="text-4xl md:text-6xl font-bold text-gray-900 mb-6"'
  },
  {
    pattern: /className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"/g,
    replacement: 'className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"'
  },
  {
    pattern: /className="flex flex-col sm:flex-row gap-4 justify-center"/g,
    replacement: 'className="flex flex-col sm:flex-row gap-4 justify-center"'
  },
  {
    pattern: /className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"/g,
    replacement: 'className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"'
  },
  {
    pattern: /className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors"/g,
    replacement: 'className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors"'
  },
  
  // Fix malformed meta tags
  {
    pattern: /<meta name=description content=Smart AI recommendation engines that personalize experiences and drive engagement\.\s*\/>/g,
    replacement: '<meta name="description" content="Smart AI recommendation engines that personalize experiences and drive engagement." />'
  },
  {
    pattern: /<meta name="keywords" content=ai-powered-recommendation, AI, automation, technology, solutions\s*\/>/g,
    replacement: '<meta name="keywords" content="ai-powered-recommendation, AI, automation, technology, solutions" />'
  },
  {
    pattern: /<meta name=viewport content=width=device-width, initial-scale=1\.0, maximum-scale=1\.0, user-scalable=no\s*\/>/g,
    replacement: '<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />'
  },
  
  // Fix malformed motion props
  {
    pattern: /initial=\{\{ opacity: 0, y: 20 \}\};/g,
    replacement: 'initial={{ opacity: 0, y: 20 }}'
  },
  {
    pattern: /animate=\{\{ opacity: 1, y: 0 \}\};/g,
    replacement: 'animate={{ opacity: 1, y: 0 }}'
  },
  {
    pattern: /transition=\{\{ duration: 0\.8 \}\};/g,
    replacement: 'transition={{ duration: 0.8 }}'
  },
  
  // Fix malformed SVG attributes
  {
    pattern: /fill="none" stroke="currentColor" viewBox="0 0 24 24"/g,
    replacement: 'fill="none" stroke="currentColor" viewBox="0 0 24 24"'
  },
  {
    pattern: /strokeLinecap="round" strokeLinejoin=round strokeWidth=\{2\}/g,
    replacement: 'strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}'
  },
  
  // Fix malformed text content
  {
    pattern: /AI Powered Recommendation<\/div>"/g,
    replacement: 'AI Powered Recommendation'
  },
  {
    pattern: /Smart AI recommendation engines that personalize experiences and drive engagement\.<\/div>"/g,
    replacement: 'Smart AI recommendation engines that personalize experiences and drive engagement.'
  },
  {
    pattern: /Get Started<\/div>;/g,
    replacement: 'Get Started'
  },
  {
    pattern: /Learn More<\/div>;/g,
    replacement: 'Learn More'
  },
  
  // Fix malformed export
  {
    pattern: /export default \$1;<\/div>/g,
    replacement: 'export default Component;'
  },
  
  // Fix malformed closing tags
  {
    pattern: /<\/div>/g,
    replacement: '</div>'
  },
  {
    pattern: /<\/div>/g,
    replacement: '</div>'
  },
  {
    pattern: /<\/div>/g,
    replacement: '</div>'
  },
  {
    pattern: /<\/div>/g,
    replacement: '</div>'
  },
  {
    pattern: /<\/div>/g,
    replacement: '</div>'
  },
  {
    pattern: /<\/div>/g,
    replacement: '</div>'
  },
  
  // Fix malformed opening tags
  {
    pattern: /<div><\/div>/g,
    replacement: '<div>'
  },
  {
    pattern: /<div><\/div>";/g,
    replacement: '<div>'
  },
  {
    pattern: /<div><\/div>/g,
    replacement: '<div>'
  },
  {
    pattern: /<div><\/div>/g,
    replacement: '<div>'
  },
  {
    pattern: /<div><\/div>/g,
    replacement: '<div>'
  },
  {
    pattern: /<div><\/div>/g,
    replacement: '<div>'
  },
  
  // Fix malformed section tags
  {
    pattern: /<section className=relative py-40 px-4 sm:px-6 lg:px-8><\/div>;/g,
    replacement: '<section className="relative py-40 px-4 sm:px-6 lg:px-8">'
  },
  {
    pattern: /<section className=py-40 px-4 sm:px-6 lg:px-8 bg-white><\/div>/g,
    replacement: '<section className="py-40 px-4 sm:px-6 lg:px-8 bg-white">'
  },
  
  // Fix malformed div tags
  {
    pattern: /<div className=max-w-7xl mx-auto><\/div>;/g,
    replacement: '<div className="max-w-7xl mx-auto">'
  },
  {
    pattern: /<div className=grid grid-cols-1 md: "grid-cols-2 lg:grid-cols-3 gap-8 mt-12><\/div>"/g,
    replacement: '<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">'
  },
  
  // Fix malformed motion.div
  {
    pattern: /<motion\.div;/g,
    replacement: '<motion.div'
  },
  {
    pattern: /<\/motion\.div><\/div>/g,
    replacement: '</motion.div>'
  },
  {
    pattern: /<\/motion\.div><\/div>/g,
    replacement: '</motion.div>'
  },
  
  // Fix malformed h1, h2, h3 tags
  {
    pattern: /<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6";/g,
    replacement: '<h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">'
  },
  {
    pattern: /<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">/g,
    replacement: '<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">'
  },
  {
    pattern: /<h3 className='text-xl font-semibold text-gray-900 mb-2>Advanced AI Capabilities<\/h3><\/div>/g,
    replacement: '<h3 className="text-xl font-semibold text-gray-900 mb-2">Advanced AI Capabilities</h3>'
  },
  
  // Fix malformed p tags
  {
    pattern: /<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto""/g,
    replacement: '<p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">'
  },
  {
    pattern: /<p className=text-lg text-gray-600 max-w-2xl mx-auto>"/g,
    replacement: '<p className="text-lg text-gray-600 max-w-2xl mx-auto">'
  },
  
  // Fix malformed button tags
  {
    pattern: /<button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors";/g,
    replacement: '<button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors">'
  },
  {
    pattern: /<button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors";/g,
    replacement: '<button className="border border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition-colors">'
  },
  
  // Fix malformed svg tags
  {
    pattern: /<svg className=w-6 h-6 text-blue-600 fill="none" stroke="currentColor" viewBox="0 0 24 24"><\/div>/g,
    replacement: '<svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">'
  },
  
  // Fix malformed path tags
  {
    pattern: /<path strokeLinecap="round" strokeLinejoin=round strokeWidth=\{2\} d=M13 10V3L4 14h7v7l9-11h-7z\s*\/><\/div>";/g,
    replacement: '<path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />'
  },
  
  // Fix malformed closing tags
  {
    pattern: /<\/svg><\/div>/g,
    replacement: '</svg>'
  },
  {
    pattern: /<\/svg><\/div>";/g,
    replacement: '</svg>'
  },
  {
    pattern: /<\/svg><\/div>/g,
    replacement: '</svg>'
  },
  
  // Fix malformed closing sections
  {
    pattern: /<\/section><\/div>/g,
    replacement: '</section>'
  },
  {
    pattern: /<\/section><\/div>/g,
    replacement: '</section>'
  },
  
  // Fix malformed closing Layout
  {
    pattern: /<\/Layout><\/div>/g,
    replacement: '</Layout>'
  },
  
  // Fix malformed closing div
  {
    pattern: /<\/div>/g,
    replacement: '</div>'
  },
  {
    pattern: /<\/div>/g,
    replacement: '</div>'
  },
  
  // Fix malformed closing parenthesis
  {
    pattern: /\)/g,
    replacement: ');'
  },
  {
    pattern: /\)/g,
    replacement: ');'
  },
  
  // Fix malformed closing brace
  {
    pattern: /\}/g,
    replacement: '};'
  },
  {
    pattern: /\}/g,
    replacement: '};'
  }
];

// Function to fix a single file
function fixFile(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let originalContent = content;
    
    // Apply all fixes
    additionalFixes.forEach(fix => {
      content = content.replace(fix.pattern, fix.replacement);
    });
    
    // Only write if content changed
    if (content !== originalContent) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed: ${filePath}`);
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error fixing ${filePath}:`, error.message);
    return false;
  }
}

// Function to recursively find and fix files
function fixDirectory(dirPath) {
  const files = fs.readdirSync(dirPath);
  let fixedCount = 0;
  
  files.forEach(file => {
    const filePath = path.join(dirPath, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Skip node_modules and .git
      if (file !== 'node_modules' && file !== '.git' && !file.startsWith('.')) {
        fixedCount += fixDirectory(filePath);
      }
    } else if (file.endsWith('.tsx') || file.endsWith('.ts') || file.endsWith('.js')) {
      if (fixFile(filePath)) {
        fixedCount++;
      }
    }
  });
  
  return fixedCount;
}

// Main execution
console.log('Starting additional syntax error fixes...');
const startDir = process.cwd();
const fixedCount = fixDirectory(startDir);
console.log(`Fixed ${fixedCount} files.`); 