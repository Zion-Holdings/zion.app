const fs = require('fs');
const path = require('path');

function fixAllStringLiterals() {
    const directories = ['pages', 'components', 'src'];
    
    directories.forEach(dir => {
        if (fs.existsSync(dir)) {
            const files = getAllFiles(dir, '.tsx');
            files.forEach(file => {
                try {
                    let content = fs.readFileSync(file, 'utf8');
                    
                    // Fix all unterminated string literals
                    content = content
                        // Fix unterminated string literals in import statements
                        .replace(/from "react";/g, 'from "react";')
                        .replace(/from 'react";/g, 'from "react";')
                        .replace(/from "next\/app";/g, 'from "next/app";')
                        .replace(/from 'next\/app";/g, 'from "next/app";')
                        .replace(/from "next\/document";/g, 'from "next/document";')
                        .replace(/from 'next\/document";/g, 'from "next/document";')
                        .replace(/from "next\/head";/g, 'from "next/head";')
                        .replace(/from 'next\/head";/g, 'from "next/head";')
                        .replace(/from "next\/link";/g, 'from "next/link";')
                        .replace(/from 'next\/link";/g, 'from "next/link";')
                        .replace(/from "next\/router";/g, 'from "next/router";')
                        .replace(/from 'next\/router";/g, 'from "next/router";')
                        .replace(/from "framer-motion";/g, 'from "framer-motion";')
                        .replace(/from 'framer-motion";/g, 'from "framer-motion";')
                        .replace(/from "lucide-react";/g, 'from "lucide-react";')
                        .replace(/from 'lucide-react";/g, 'from "lucide-react";')
                        
                        // Fix type imports
                        .replace(/import type \{ NextPage \} from 'next";/g, 'import type { NextPage } from "next";')
                        .replace(/import type \{ AppProps \} from 'next\/app";/g, 'import type { AppProps } from "next/app";')
                        
                        // Fix interface and type definitions
                        .replace(/systemHealth: 'healthy' \| 'warning' \| 'error";/g, 'systemHealth: "healthy" | "warning" | "error";')
                        .replace(/type: 'user' \| 'agent";/g, 'type: "user" | "agent";')
                        .replace(/type: 'service' \| 'talent' \| 'equipment' \| 'product";/g, 'type: "service" | "talent" | "equipment" | "product";')
                        .replace(/status: 'active' \| 'maintenance' \| 'offline' \| 'charging' \| 'in-transit";/g, 'status: "active" | "maintenance" | "offline" | "charging" | "in-transit";')
                        .replace(/variant\?: 'light' \| 'dark";/g, 'variant?: "light" | "dark";')
                        
                        // Fix string literals in return statements
                        .replace(/return '0 Bytes";/g, 'return "0 Bytes";')
                        .replace(/return 'bg-green-100 text-green-800 border-green-200";/g, 'return "bg-green-100 text-green-800 border-green-200";')
                        .replace(/return 'bg-yellow-100 text-yellow-800 border-yellow-200";/g, 'return "bg-yellow-100 text-yellow-800 border-yellow-200";')
                        .replace(/return 'bg-red-100 text-red-800 border-red-200";/g, 'return "bg-red-100 text-red-800 border-red-200";')
                        .replace(/return 'bg-gray-100 text-gray-800 border-gray-200";/g, 'return "bg-gray-100 text-gray-800 border-gray-200";')
                        
                        // Fix object property endings
                        .replace(/isOnline: true}/g, 'isOnline: true')
                        .replace(/tags: \[\]}/g, 'tags: []')
                        .replace(/timestamp: Date}/g, 'timestamp: Date')
                        
                        // Fix function declarations
                        .replace(/const \w+: NextPage = \(\) => {';/g, 'const $1: NextPage = () => {')
                        .replace(/const \w+: NextPage = \(\) => {";/g, 'const $1: NextPage = () => {')
                        
                        // Fix array and object declarations
                        .replace(/const \w+ = \[/g, 'const $1 = [')
                        .replace(/const \w+ = \{/g, 'const $1 = {')
                        
                        // Remove stray quotes and semicolons
                        .replace(/;""/g, ';')
                        .replace(/;''/g, ';')
                        .replace(/;;/g, ';')
                        .replace(/;;;/g, ';')
                        .replace(/;'/g, ';')
                        .replace(/;"/g, ';')
                        
                        // Fix specific patterns
                        .replace(/';'/g, ';')
                        .replace(/";'/g, ';')
                        .replace(/';"/g, ';')
                        .replace(/";"/g, ';')
                        
                        // Fix broken object endings
                        .replace(/},'/g, '},')
                        .replace(/},'/g, '},')
                        .replace(/},'/g, '},')
                        .replace(/},'/g, '},')
                        
                        // Fix broken array endings
                        .replace(/\]'/g, ']')
                        .replace(/\]'/g, ']')
                        .replace(/\]'/g, ']')
                        .replace(/\]'/g, ']')
                        
                        // Fix broken function endings
                        .replace(/\)'/g, ')')
                        .replace(/\)'/g, ')')
                        .replace(/\)'/g, ')')
                        .replace(/\)'/g, ')')
                        
                        // Fix broken interface endings
                        .replace(/\}'/g, '}')
                        .replace(/\}'/g, '}')
                        .replace(/\}'/g, '}')
                        .replace(/\}'/g, '}')
                        
                        // Remove empty statements
                        .replace(/;\s*;/g, ';')
                        .replace(/;\s*;\s*;/g, ';');
                    
                    fs.writeFileSync(file, content);
                    console.log(`✅ Fixed string literals: ${file}`);
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

fixAllStringLiterals();
console.log('✅ All string literals fix completed'); 