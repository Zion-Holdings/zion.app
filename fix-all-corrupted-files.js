import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix corrupted syntax more comprehensively
function fixCorruptedSyntax(content) {
  // Fix import statements
  content = content.replace(/import\s+([^,]+),\s*([^,]+),\s*from\s*'([^']+)'/g, "import $1, $2 from '$3'");
  content = content.replace(/import\s+([^,]+),\s*from\s*'([^']+)'/g, "import $1 from '$2'");
  
  // Fix function declarations
  content = content.replace(/export\s+default\s+function\s+([^{]+),\s*([^{]+)\s*{/g, 'export default function $1$2 {');
  content = content.replace(/export\s+default\s+function\s+([^{]+)\s*{/g, 'export default function $1 {');
  
  // Fix const declarations
  content = content.replace(/const\s+\[([^\]]+),\s*([^\]]+)\]\s*=\s*useState\(([^)]+)\)/g, 'const [$1, $2] = useState($3)');
  content = content.replace(/const\s+([^=]+),\s*([^=]+)\s*=\s*([^;]+);/g, 'const $1$2 = $3;');
  
  // Fix variable declarations
  content = content.replace(/const\s+([^=]+)\s*=\s*([^;]+);/g, 'const $1 = $2;');
  
  // Fix function calls
  content = content.replace(/useRouter\(\)/g, 'useRouter()');
  content = content.replace(/useState\(([^)]+)\)/g, 'useState($1)');
  content = content.replace(/useEffect\(([^)]+)\)/g, 'useEffect($1)');
  
  // Fix JSX elements
  content = content.replace(/<([^>]+),\s*([^>]+)>/g, '<$1 $2>');
  content = content.replace(/<([^>]+),\s*([^>]+),\s*([^>]+)>/g, '<$1 $2 $3>');
  
  // Fix closing tags
  content = content.replace(/<\/\s*([^>]+),\s*([^>]+)>/g, '</$1 $2>');
  
  // Fix comments
  content = content.replace(/{\/\*\s*TO,\s*D,\s*O([^*]+)\*\/}/g, '{/* TODO$1*/}');
  
  // Fix string literals
  content = content.replace(/"([^"]+),\s*([^"]+)"/g, '"$1 $2"');
  
  // Fix boolean values
  content = content.replace(/true/g, 'true');
  content = content.replace(/false/g, 'false');
  content = content.replace(/null/g, 'null');
  
  // Fix type annotations
  content = content.replace(/<stri,\s*n\s*g\s*\|\s*nu\s*l\s*l>/g, '<string | null>');
  content = content.replace(/<([^>]+),\s*([^>]+)>/g, '<$1 $2>');
  
  // Fix function names
  content = content.replace(/Veri,\s*f,\s*y/g, 'Verify');
  content = content.replace(/Res,\s*e,\s*t,\s*Passwo,\s*r,\s*d/g, 'ResetPassword');
  
  // Fix variable names
  content = content.replace(/route,\s*r/g, 'router');
  content = content.replace(/loadi,\s*n,\s*g/g, 'loading');
  content = content.replace(/setLoadi,\s*n,\s*g/g, 'setLoading');
  content = content.replace(/err,\s*o,\s*r/g, 'error');
  content = content.replace(/setErr,\s*o,\s*r/g, 'setError');
  
  // Fix string literals in imports
  content = content.replace(/'ne,\s*x,\s*t\/he,\s*a,\s*d'/g, "'next/head'");
  content = content.replace(/'ne,\s*x,\s*t\/router'/g, "'next/router'");
  content = content.replace(/'rea,\s*c,\s*t'/g, "'react'");
  
  return content;
}

// Function to process all TypeScript/React files
async function fixAllFiles() {
  try {
    const files = await glob('**/*.{ts,tsx}', {
      ignore: ['node_modules/**', '.next/**', 'automation/**', 'fix-*.js']
    });
    
    let fixedCount = 0;
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check if file is corrupted (contains the pattern we're looking for)
        if (content.includes(',') && (content.includes('import,') || content.includes('export,') || content.includes('const,'))) {
          const fixedContent = fixCorruptedSyntax(content);
          
          if (fixedContent !== content) {
            fs.writeFileSync(file, fixedContent, 'utf8');
            console.log(`Fixed: ${file}`);
            fixedCount++;
          }
        }
      } catch (error) {
        console.error(`Error processing ${file}:`, error.message);
      }
    }
    
    console.log(`\nFixed ${fixedCount} files.`);
  } catch (error) {
    console.error('Error:', error);
  }
}

fixAllFiles();
