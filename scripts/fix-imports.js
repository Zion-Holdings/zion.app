const fs = require('fs');
const path = require('path');

function fixImportStatements() {
    const directories = ['pages', 'components', 'src'];
    
    directories.forEach(dir => {
        if (fs.existsSync(dir)) {
            const files = getAllFiles(dir, '.tsx');
            files.forEach(file => {
                try {
                    let content = fs.readFileSync(file, 'utf8');
                    
                    // Fix broken import statements
                    content = content
                        // Fix unterminated string literals in imports
                        .replace(/from "next\/app";/g, 'from "next/app";')
                        .replace(/from "next\/document";/g, 'from "next/document";')
                        .replace(/from "next\/head";/g, 'from "next/head";')
                        .replace(/from "next\/link";/g, 'from "next/link";')
                        .replace(/from "next\/router";/g, 'from "next/router";')
                        .replace(/from "react";/g, 'from "react";')
                        .replace(/from "framer-motion";/g, 'from "framer-motion";')
                        .replace(/from "lucide-react";/g, 'from "lucide-react";')
                        
                        // Fix single quotes in imports
                        .replace(/from 'next\/app';/g, 'from "next/app";')
                        .replace(/from 'next\/document';/g, 'from "next/document";')
                        .replace(/from 'next\/head';/g, 'from "next/head";')
                        .replace(/from 'next\/link';/g, 'from "next/link";')
                        .replace(/from 'next\/router';/g, 'from "next/router";')
                        .replace(/from 'react';/g, 'from "react";')
                        .replace(/from 'framer-motion';/g, 'from "framer-motion";')
                        .replace(/from 'lucide-react';/g, 'from "lucide-react";')
                        
                        // Fix broken import paths
                        .replace(/from '\.\.\/styles\/globals\.css';/g, 'from "../styles/globals.css";')
                        .replace(/from '\.\.\/src\/contexts\/ChatContext';/g, 'from "../src/contexts/ChatContext";')
                        .replace(/from '\.\.\/src\/contexts\/AuthContext';/g, 'from "../src/contexts/AuthContext";')
                        .replace(/from '\.\.\/src\/contexts\/NavigationContext';/g, 'from "../src/contexts/NavigationContext";')
                        .replace(/from '\.\.\/src\/components\/ChatAssistant';/g, 'from "../src/components/ChatAssistant";')
                        .replace(/from '\.\.\/components\/MessageChannelDebugger';/g, 'from "../components/MessageChannelDebugger";')
                        .replace(/from '\.\.\/components\/MessageChannelErrorBoundary';/g, 'from "../components/MessageChannelErrorBoundary";')
                        .replace(/from '\.\.\/components\/ui\/Sidebar';/g, 'from "../components/ui/Sidebar";')
                        .replace(/from '\.\.\/components\/ParticleEffect';/g, 'from "../components/ParticleEffect";')
                        .replace(/from '\.\.\/utils\/messageChannelHandler';/g, 'from "../utils/messageChannelHandler";')
                        
                        // Fix double quotes in import paths
                        .replace(/from "\.\.\/styles\/globals\.css";/g, 'from "../styles/globals.css";')
                        .replace(/from "\.\.\/src\/contexts\/ChatContext";/g, 'from "../src/contexts/ChatContext";')
                        .replace(/from "\.\.\/src\/contexts\/AuthContext";/g, 'from "../src/contexts/AuthContext";')
                        .replace(/from "\.\.\/src\/contexts\/NavigationContext";/g, 'from "../src/contexts/NavigationContext";')
                        .replace(/from "\.\.\/src\/components\/ChatAssistant";/g, 'from "../src/components/ChatAssistant";')
                        .replace(/from "\.\.\/components\/MessageChannelDebugger";/g, 'from "../components/MessageChannelDebugger";')
                        .replace(/from "\.\.\/components\/MessageChannelErrorBoundary";/g, 'from "../components/MessageChannelErrorBoundary";')
                        .replace(/from "\.\.\/components\/ui\/Sidebar";/g, 'from "../components/ui/Sidebar";')
                        .replace(/from "\.\.\/components\/ParticleEffect";/g, 'from "../components/ParticleEffect";')
                        .replace(/from "\.\.\/utils\/messageChannelHandler";/g, 'from "../utils/messageChannelHandler";')
                        
                        // Remove stray quotes and semicolons
                        .replace(/;""/g, ';')
                        .replace(/;''/g, ';')
                        .replace(/;;/g, ';')
                        .replace(/;;;/g, ';');
                    
                    fs.writeFileSync(file, content);
                    console.log(`✅ Fixed imports: ${file}`);
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

fixImportStatements();
console.log('✅ Import statements fix completed'); 