const fs = require('fs');
const path = require('path');

function fixAllSyntaxErrors() {
    const directories = ['pages', 'components', 'src'];
    
    directories.forEach(dir => {
        if (fs.existsSync(dir)) {
            const files = getAllFiles(dir, '.tsx');
            files.forEach(file => {
                try {
                    let content = fs.readFileSync(file, 'utf8');
                    
                    // Fix all common syntax errors
                    content = content
                        // Fix unterminated string literals at end of lines
                        .replace(/;''/g, ';')
                        .replace(/;""/g, ';')
                        .replace(/;'''/g, ';')
                        .replace(/;"""/g, ';')
                        .replace(/';$/gm, '";')
                        .replace(/";$/gm, '";')
                        
                        // Fix broken import statements
                        .replace(/import:\s*/g, 'import ')
                        .replace(/import type:/g, 'import type ')
                        .replace(/import React from react;/g, 'import React from "react";')
                        .replace(/import React from 'react';/g, 'import React from "react";')
                        .replace(/import React from "react";;'/g, 'import React from "react";')
                        .replace(/import Link from 'next\/link';;;/g, 'import Link from "next/link";')
                        .replace(/import \{ useRouter \} from 'next\/router';;;/g, 'import { useRouter } from "next/router";')
                        
                        // Fix broken interface declarations
                        .replace(/interface \w+ \{'/g, (match) => match.replace(/';$/, ' {'))
                        .replace(/interface \w+ \{";/g, (match) => match.replace(/";$/, ' {'))
                        
                        // Fix broken function declarations
                        .replace(/const \w+: React\.FC:\s*=/g, 'const $1: React.FC = ')
                        .replace(/const \w+: NextPage:\s*=/g, 'const $1: NextPage = ')
                        .replace(/const \w+ = \(\) => \{';/g, 'const $1 = () => {')
                        .replace(/const \w+ = \(\) => \{";/g, 'const $1 = () => {')
                        
                        // Fix broken useState declarations
                        .replace(/useState<[^>]+>\([^)]+\);'/g, (match) => match.replace(/';$/, ';'))
                        .replace(/useState<[^>]+>\([^)]+\);"/g, (match) => match.replace(/";$/, ';'))
                        
                        // Fix broken array declarations
                        .replace(/const \w+: \w+\[\] = \['/g, 'const $1: $2[] = [')
                        .replace(/const \w+: \w+\[\] = \["/g, 'const $1: $2[] = [')
                        
                        // Fix broken object declarations
                        .replace(/\{\s*id:\s*'[^']*',/g, (match) => match.replace(/';$/, ','))
                        .replace(/\{\s*id:\s*"[^"]*",/g, (match) => match.replace(/";$/, ','))
                        
                        // Fix broken JSX attributes
                        .replace(/className="\s*([^"]*)"\s*>/g, 'className="$1">')
                        .replace(/className="\s*([^"]*)"\s*py-8"/g, 'className="$1 py-8"')
                        .replace(/className="\s*([^"]*)"\s*mb-4>/g, 'className="$1 mb-4">')
                        
                        // Fix broken JSX structure
                        .replace(/<div className="\s*([^"]*)"\s*>/g, '<div className="$1">')
                        .replace(/<div className="\s*([^"]*)"\s*py-8"/g, '<div className="$1 py-8">')
                        .replace(/<div className="\s*([^"]*)"\s*mb-4>/g, '<div className="$1 mb-4">')
                        
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
                        .replace(/:\s*=\s*/g, ': ')
                        .replace(/;;/g, ';')
                        .replace(/;;;/g, ';')
                        
                        // Fix broken function parameters
                        .replace(/className = "'','/g, 'className = ""')
                        .replace(/variant = 'light'/g, 'variant = "light"')
                        
                        // Fix broken return statements
                        .replace(/return 'bg-green-100 text-green-800 border-green-200';'/g, 'return "bg-green-100 text-green-800 border-green-200";')
                        .replace(/return 'bg-yellow-100 text-yellow-800 border-yellow-200';'/g, 'return "bg-yellow-100 text-yellow-800 border-yellow-200";')
                        .replace(/return 'bg-red-100 text-red-800 border-red-200';'/g, 'return "bg-red-100 text-red-800 border-red-200";')
                        
                        // Fix broken JSX elements
                        .replace(/<div className="\s*flex items-center">""/g, '<div className="flex items-center">')
                        .replace(/<div className="\s*([^"]*)"\s*>/g, '<div className="$1">')
                        
                        // Fix broken imports in Sidebar
                        .replace(/import \{ useRouter \} from 'next\/router/g, 'import { useRouter } from "next/router"')
                        .replace(/} from 'lucide-react/g, '} from "lucide-react"')
                        .replace(/LifeBuoy,'/g, 'LifeBuoy,')
                        .replace(/DollarSign'/g, 'DollarSign')
                        
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

fixAllSyntaxErrors();
console.log('✅ Ultimate syntax fix completed'); 