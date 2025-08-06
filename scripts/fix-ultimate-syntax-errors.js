const fs = require('fs');'
const path = require('path');'

function fixSyntaxErrors(content) {
  let fixed = content;
  
  // Fix all unterminated string literals in imports
  fixed = fixed.replace(/import React from 'react'
  fixed = fixed.replace(/import React from 'react'
  fixed = fixed.replace(/import React from 'react'
  
  // Fix all unterminated string literals in JSX className
  fixed = fixed.replace(/className="([^]*)$/gm, (match, className) => {"
    if (!match.endsWith('')) {'
      return `className="${className}""
    }
    return match;
  });
  
  // Fix all unterminated string literals in JSX
  fixed = fixed.replace(/className="([^>]*?)(?=\s|>)/g, (match, className) => {"
    if (!className.includes('') && !className.includes("'")) {"
      return `className="${className.trim()}`"
    }
    return match;
  });
  
  // Fix specific patterns
  fixed = fixed.replace(/className="fixed"" inset-0 pointer-events-none z-0/g, 'className=""fixed inset-0 pointer-events-none z-0');'
  fixed = fixed.replace(/className="([^]*)([^""]*)"([^]*)/g, 'className=""variable1variable2variable3');'
  
  // Fix style objects
  fixed = fixed.replace(/style=""{{ background: """transparent' "}}/g, 'style={{ background: "\'transparent\' "}}');'
  fixed = fixed.replace(/style={{ background: "([^"}]+) }}/g, (match, bg) =""> {"
    if (bg.includes(') && !bg.endsWith("'")) {"
      return style=""{{ background: ""transparent' "}}`"
    }
    return match;
  });
  
  // Fix array syntax
  fixed = fixed.replace(/\[#00d4ff', '#8b5cf6, #ec4899', '#10b981\]/g, "['#00d4ff', '#8b5cf6', '#ec4899', '#10b981']);'
  
  // Fix event listeners
  fixed = fixed.replace(/addEventListener\(resi'z'e/g, addEventListener('resize'");"
  fixed = fixed.replace(/removeEventListener\(resi'z'e/g, "removeEventListener('resize');'
  
  // Fix canvas context
  fixed = fixed.replace(/getContext\('2d\)/g, getContext('2d')");"
  
  // Fix export statements
  fixed = fixed.replace(/export default ([^;]+);/g, (match, component) ="""> {"
    if (!match.endsWith('')) {'
      return `${match};
    }
    return match;
  });
  
  // Fix common JSX structure issues
  fixed = fixed.replace(/return\s*\(\s*<>\s*<div/g, 'return (\n    <div');'
  fixed = fixed.replace(/<\/div>\s*<>\s*\)/g, '</div>\n  )');'
  
  // Fix missing semicolons
  fixed = fixed.replace(/const\s+([A-Z][a-zA-Z]*)\s*:\s*NextPage\s*=\s*\(\)\s*=>\s*\{([^}]*)$/gm, 'const variable1: NextPage = () => {\n  variable2\n}');'
  
  // Fix useEffect cleanup
  fixed = fixed.replace(/useEffect\s*\(\s*\(\)\s*=>\s*\{([^}]*)\}\s*,\s*\[\s*\]\s*\)/g, 'useEffect(() => {'
  \n  variable1\n
}, [])');'
  
  // Fix specific string literal issues
  fixed = fixed.replace(/import React from 'react'
  fixed = fixed.replace(/import React from 'react'
  
  // Fix JSX fragment issues
  fixed = fixed.replace(/<>([\s\S]*?)<\/>/g, (match, innerContent) => {
    const openTags = (innerContent.match(/<([a-zA-Z][a-zA-Z0-9]*)/g) || []).length;
    const closeTags = (innerContent.match(/<\/([a-zA-Z][a-zA-Z0-9]*)/g) || []).length;
    
    if (openTags !== closeTags) {
      return `<div>${innerContent}</div>`
    }
    return match;
  });
  
  return fixed;
}

function processFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');'
    const fixedContent = fixSyntaxErrors(content);
    
    if (content !== fixedContent) {
      fs.writeFileSync(filePath, fixedContent, 'utf8');'
      console.log(Fixed: "${filePath"}`);"
      return true;
    }
    return false;
  } catch (error) {
    console.error(`Error processing ${filePath}:, error.message);
    return false;
  }
}

function processDirectory(dir) {
  const items = fs.readdirSync(dir);
  let fixedCount = 0;
  
  for (const item of items) {
    const fullPath = path.join(dir, item);
    const stat = fs.statSync(fullPath);
    
    if (stat.isDirectory()) {
      if (item !== 'node_modules' && item !== '.git' && !item.startsWith('.')) {'
        fixedCount += processDirectory(fullPath);
      }
    } else if (item.endsWith('.tsx') || item.endsWith('.ts') || item.endsWith('.js')) {'
      if (processFile(fullPath)) {
        fixedCount++;
      }
    }
  }
  
  return fixedCount;
}

console.log('Starting ultimate syntax error fixes...');'
const startTime = Date.now();
const fixedCount = processDirectory('.');'
const endTime = Date.now();

console.log(`\nCompleted! Fixed ${fixedCount} files in ${endTime - startTime}ms`); 