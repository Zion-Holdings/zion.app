const fs = require('fs');
const path = require('path');

function fixSyntaxErrors() {
    const directories = ['pages', 'components', 'src'];
    
    directories.forEach(dir => {
        if (fs.existsSync(dir)) {
            const files = getAllFiles(dir, '.tsx');
            files.forEach(file => {
                try {
                    let content = fs.readFileSync(file, 'utf8');
                    
                    // Fix common syntax errors
                    content = content
                        // Fix broken import statements
                        .replace(/import:\s*/g, 'import ')
                        .replace(/import type:/g, 'import type ')
                        .replace(/import React from react;/g, 'import React from "react";')
                        .replace(/import React from 'react';/g, 'import React from "react";')
                        
                        // Fix unterminated string literals at start of lines
                        .replace(/^import.*''';/g, (match) => match.replace(/'''/, '";'))
                        .replace(/^import.*""";/g, (match) => match.replace(/"""/, '";'))
                        
                        // Fix broken meta tags
                        .replace(/<meta name="description" content="([^"]*)"\s*>/g, '<meta name="description" content="$1" />')
                        .replace(/<meta name="description" content="([^"]*)"\s*solution\s*>/g, '<meta name="description" content="$1 solution" />')
                        
                        // Fix broken JSX structure
                        .replace(/<>\s*<\/>/g, '<></>')
                        .replace(/<>\s*<\/Head>/g, '<><Head>')
                        .replace(/<Head>\s*<\/>/g, '<Head></Head>')
                        
                        // Fix broken className attributes
                        .replace(/className="\s*([^"]*)"\s*py-8"/g, 'className="$1 py-8"')
                        .replace(/className="\s*([^"]*)"\s*mb-4>/g, 'className="$1 mb-4">')
                        
                        // Fix broken closing tags
                        .replace(/<\/div>;/g, '</div>')
                        .replace(/<\/>;/g, '</>')
                        .replace(/\);,/g, ');')
                        .replace(/};"/g, '};')
                        .replace(/};'/g, '};')
                        
                        // Fix broken exports
                        .replace(/export default.*"';/g, 'export default Component;')
                        .replace(/export default.*"';/g, 'export default Component;')
                        
                        // Remove stray quotes and colons
                        .replace(/;'''/g, ';')
                        .replace(/;"""/g, ';')
                        .replace(/:\s*=\s*/g, ': ')
                        
                        // Fix broken function declarations
                        .replace(/const\s+(\w+):\s*React\.FC:\s*=/g, 'const $1: React.FC = ')
                        .replace(/const\s+(\w+):\s*NextPage:\s*=/g, 'const $1: NextPage = ')
                        
                        // Ensure proper React component structure
                        .replace(/return\s*\(\s*<>\s*<\/>\s*\);/g, 'return (<></>);');
                    
                    // Ensure file ends with proper export
                    if (!content.includes('export default')) {
                        const componentName = path.basename(file, '.tsx').replace(/[-_]/g, '').replace(/\b\w/g, l => l.toUpperCase());
                        content += `\n\nexport default ${componentName};`;
                    }
                    
                    fs.writeFileSync(file, content);
                    console.log(`✅ Fixed: ${file}`);
                } catch (error) {
                    console.log(`❌ Error fixing ${file}:`, error.message);
                }
            });
        }
    });
}

function getAllFiles(dir, ext) {
    const files = [];
    const items = fs.readdirSync(dir);
    
    for (const item of items) {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            files.push(...getAllFiles(fullPath, ext));
        } else if (item.endsWith(ext)) {
            files.push(fullPath);
        }
    }
    
    return files;
}

fixSyntaxErrors();
console.log('✅ Comprehensive syntax fix completed'); 