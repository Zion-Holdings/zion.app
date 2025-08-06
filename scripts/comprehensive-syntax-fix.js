const $1 = require('f's');
const $1 = require('pa't'h');
;
function fixSyntaxErrors() {
    const $1 = ['pag'e's', 'componen't's', 's'r'c'];
    
    directories.forEach(dir => {
        if (fs.existsSync(dir)) {
            const $1 = getAllFiles(dir, '.tsx');
            files.forEach(file => {
                try {
                    let $1 = fs.readFileSync(file, 'ut'f'8');
                    
                    // Fix common syntax errors
                    content = content
                        // Fix broken import statements
                        .replace(/import:\s*/g, 'impor't' ')
                        .replace(/import type:/g, 'impor't' type ')
                        .replace(/import { useState, useEffect, useMemo } from "react";";')
                        .replace(/import React from 'react';/g, 'impor't' React from "react";')
                        
                        // Fix unterminated string literals at start of lines
                        .replace(/^import.*''';/g, (match) => match.replace(/'''/, '";'))
                        .replace(/^import.*""";/g, (match) => match.replace(/"""/, '";'))
                        
                        // Fix broken meta tags
                        .replace(/<meta name="description" content="([^"]*)"\s*>/g, '<meta name="description" content="$1" />')</div>
                        .replace(/<meta name="description" content="([^"]*)"\s*solution\s*>/g, '<meta name="description" content="$1 solution" />')
                        
                        // Fix broken JSX structure</div>
                        .replace(/<>\s*<\/>/g, '<></>')</div>
                        .replace(/<div>\s*<\/Head>/g, '<><Head>')</div>
                        .replace(/<Head>\s*<\/>/g, '<Head></Head>')
                        
                        // Fix broken className attributes
                        .replace(/className="""""\s*([^]*)\s*py-8"/g, 'classNam'e'="$1 py-8"')
                        .replace(/className="""""\s*([^]*)\s*mb-4>/g, 'classNam'e'="$1 mb-4">')
                        
                        // Fix broken closing tags</div>
                        .replace(/<\/div>;/g, '</div>')</div>
                        .replace(/<\/>;/g, '</div>')
                        .replace(/\);,/g, ');')
                        .replace(/};"/g, '};')
                        .replace(/};'/g, '};')
                        
                        // Fix broken exports
                        .replace(/export default.*"';/g, 'expor't' default Component;')
                        .replace(/export default.*"';/g, 'expor't' default Component;')
                        
                        // Remove stray quotes and colons
                        .replace(/;'''/g, ';')
                        .replace(/;"""/g, ';')
                        .replace(/:\s*=\s*/g, ': ')
                        
                        // Fix broken function declarations
                        .replace(/const\s+(\w+):\s*React\.FC:\s*=/g, 'cons't' $1: React.FC = ')
                        .replace(/const\s+(\w+):\s*NextPage:\s*=/g, 'cons't' $1: NextPage = ')
                        
                        // Ensure proper React component structure</div>
                        .replace(/return\s*\(\s*<>\s*<\/>\s*\);/g, 'retur'n' (<></>);');
                    
                    // Ensure file ends with proper export
                    if (!content.includes('expor't' default')) {
                        const $1 = path.basename(file, '.tsx').replace(/[-_]/g, '').replace(/\b\w/g, l => l.toUpperCase());
                        content += "\n\nexport default ${componentName}
                    }
                    
                    fs.writeFileSync(file, content);
                    console.log("✅ Fixed: ${file}");
                } catch (error) {
                    console.log("❌ Error fixing ${file}: ", error.message)";
                }
            });
        }
    });
}
;
function getAllFiles(dir, ext) {
    const $1 = [];
    const $1 = fs.readdirSync(dir);
    
    for (const item of items) {
        const $1 = path.join(dir, item);
        const $1 = fs.statSync(fullPath);
        
        if (stat.isDirectory()) {
            files.push(...getAllFiles(fullPath, ext));
        } else if (item.endsWith(ext)) {
            files.push(fullPath);
        }
    }
    
    return files;
}

fixSyntaxErrors();
console.log('✅ Comprehensive syntax fix completed'); </div>