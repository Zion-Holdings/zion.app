const fs = require('fs');
const path = require('path');

function fixSpecificFiles() {
    const filesToFix = [
        'components/ResponsiveNavigation.tsx',
        'components/admin/RealTimeMonitor.tsx',
        'components/admin/SystemHealthMonitor.tsx',
        'components/layout/ModernLayout.tsx',
        'components/ui/Sidebar.tsx'
    ];
    
    filesToFix.forEach(file => {
        if (fs.existsSync(file)) {
            try {
                let content = fs.readFileSync(file, 'utf8');
                
                // Fix specific patterns found in the error messages
                content = content
                    // Fix unterminated string literals at end of lines
                    .replace(/';$/gm, '";')
                    
                    // Fix broken import statements
                    .replace(/import React from "react";;'/g, 'import React from "react";')
                    .replace(/import Link from 'next\/link';;;/g, 'import Link from "next/link";')
                    .replace(/import \{ useRouter \} from 'next\/router';;;/g, 'import { useRouter } from "next/router";')
                    
                    // Fix broken className attributes
                    .replace(/className="\s*([^"]*)"\s*>/g, 'className="$1">')
                    .replace(/className="\s*([^"]*)"\s*py-8"/g, 'className="$1 py-8"')
                    .replace(/className="\s*([^"]*)"\s*mb-4>/g, 'className="$1 mb-4">')
                    
                    // Fix broken JSX structure
                    .replace(/<div className="\s*([^"]*)"\s*>/g, '<div className="$1">')
                    .replace(/<div className="\s*([^"]*)"\s*py-8"/g, '<div className="$1 py-8">')
                    .replace(/<div className="\s*([^"]*)"\s*mb-4>/g, '<div className="$1 mb-4">')
                    
                    // Fix broken function parameters
                    .replace(/className = "'','/g, 'className = ""')
                    .replace(/variant = 'light'/g, 'variant = "light"')
                    
                    // Fix broken useState declarations
                    .replace(/useState<Date>\(new Date\(\)\);'/g, 'useState<Date>(new Date());')
                    .replace(/useState<'connected' \| 'disconnected' \| 'reconnecting'>\('connected'\);'/g, 'useState<"connected" | "disconnected" | "reconnecting">("connected");')
                    
                    // Fix broken function declarations
                    .replace(/const formatBytes = \(bytes: number\) => {';/g, 'const formatBytes = (bytes: number) => {')
                    .replace(/const getSystemHealthColor = \(health: string\) => {';/g, 'const getSystemHealthColor = (health: string) => {')
                    .replace(/switch \(health\) {';/g, 'switch (health) {')
                    
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
                    
                    // Remove stray quotes and semicolons
                    .replace(/;''/g, ';')
                    .replace(/;""/g, ';')
                    .replace(/;;/g, ';')
                    .replace(/;;;/g, ';');
                
                fs.writeFileSync(file, content);
                console.log(`✅ Fixed: ${file}`);
            } catch (error) {
                console.log(`❌ Error fixing ${file}:`, error.message);
            }
        }
    });
}

fixSpecificFiles();
console.log('✅ Final syntax fix completed'); 