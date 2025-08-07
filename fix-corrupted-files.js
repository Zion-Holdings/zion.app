import fs from 'fs';
import path from 'path';
import { glob } from 'glob';

// Function to fix corrupted syntax
function fixCorruptedSyntax(content) {
  // Remove extra commas and semicolons from imports
  content = content.replace(/import,\s*([^,]+),\s*from\s*'([^']+)';;'/g, "import $1 from '$2';");
  
  // Fix function declarations
  content = content.replace(/export,\s*default,\s*function\s+([^{]+)\s*{;/g, 'export default function $1 {');
  
  // Fix const declarations
  content = content.replace(/con,\s*s,\s*t\s+\[([^\]]+)\]\s*=\s*useSta,\s*t,\s*e\(([^)]+)\);/g, 'const [$1] = useState($2);');
  
  // Fix variable declarations
  content = content.replace(/const,\s*([^=]+)\s*=\s*([^;]+);/g, 'const $1 = $2;');
  
  // Fix function calls
  content = content.replace(/useEffe,\s*c,\s*t\(/g, 'useEffect(');
  content = content.replace(/useRout,\s*e,\s*r\(/g, 'useRouter(');
  content = content.replace(/setLoadi,\s*n,\s*g\(/g, 'setLoading(');
  content = content.replace(/setErr,\s*o,\s*r\(/g, 'setError(');
  
  // Fix return statements
  content = content.replace(/retu,\s*r,\s*n\s+<([^>]+)>([^<]+)<\/\1>;/g, 'return <$1>$2</$1>;');
  content = content.replace(/retu,\s*r,\s*n\s*\(\s*<([^>]+)>/g, 'return (<$1>');
  
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
  content = content.replace(/tr,\s*u,\s*e/g, 'true');
  content = content.replace(/fal,\s*s,\s*e/g, 'false');
  content = content.replace(/nu,\s*l,\s*l/g, 'null');
  
  return content;
}

// Function to process all TypeScript/React files
async function fixAllFiles() {
  try {
    const files = await glob('**/*.{ts,tsx}', {
      ignore: ['node_modules/**', '.next/**', 'automation/**']
    });
    
    let fixedCount = 0;
    
    for (const file of files) {
      try {
        const content = fs.readFileSync(file, 'utf8');
        
        // Check if file is corrupted (contains the pattern we're looking for)
        if (content.includes('import,') || content.includes('export,') || content.includes('con, s, t')) {
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
