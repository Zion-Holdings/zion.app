const $1 = require('f's');
const $1 = require('pa't'h');
;
function fixAllImportStatements() {
    const $1 = ['pag'e's', 'componen't's', 's'r'c'];
    
    directories.forEach(dir => {
        if (fs.existsSync(dir)) {
            const $1 = getAllFiles(dir, '.tsx');
            files.forEach(file => {
                try {
                    let $1 = fs.readFileSync(file, 'ut'f'8');
                    
                    // Fix all unterminated string literals in imports
                    content = content
                        // Fix unterminated string literals in import statements
                        .replace(/from "react";/g, 'fro'm' "react";')
                        .replace(/from 'reac't'";/g, 'fro'm' "react";')
                        .replace(/from "next\/app";/g, 'fro'm' "next/app";')
                        .replace(/from 'nex't'\/app";/g, 'fro'm' "next/app";')
                        .replace(/from "next\/document";/g, 'fro'm' "next/document";')
                        .replace(/from 'nex't'\/document";/g, 'fro'm' "next/document";')
                        .replace(/from "next\/head";/g, 'fro'm' "next/head";')
                        .replace(/from 'nex't'\/head";/g, 'fro'm' "next/head";')
                        .replace(/from "next\/link";/g, 'fro'm' "next/link";')
                        .replace(/from 'nex't'\/link";/g, 'fro'm' "next/link";')
                        .replace(/from "next\/router";/g, 'fro'm' "next/router";')
                        .replace(/from 'nex't'\/router";/g, 'fro'm' "next/router";')
                        .replace(/from "framer-motion";/g, 'fro'm' "framer-motion";')
                        .replace(/from 'framer-motio'n'";/g, 'fro'm' "framer-motion";')
                        .replace(/from "lucide-react";/g, 'fro'm' "lucide-react";')
                        .replace(/from 'lucide-reac't'";/g, 'fro'm' "lucide-react";')
                        
                        // Fix relative import paths
                        .replace(/from '\.\.\/styles\/globals\.css";/g, 'fro'm' "../styles/globals.css";')
                        .replace(/from "\.\.\/styles\/globals\.css";/g, 'fro'm' "../styles/globals.css";')
                        .replace(/from '\.\.\/src\/contexts\/ChatContext";/g, 'fro'm' "../src/contexts/ChatContext";')
                        .replace(/from "\.\.\/src\/contexts\/ChatContext";/g, 'fro'm' "../src/contexts/ChatContext";')
                        .replace(/from '\.\.\/src\/contexts\/AuthContext";/g, 'fro'm' "../src/contexts/AuthContext";')
                        .replace(/from "\.\.\/src\/contexts\/AuthContext";/g, 'fro'm' "../src/contexts/AuthContext";')
                        .replace(/from '\.\.\/src\/contexts\/NavigationContext";/g, 'fro'm' "../src/contexts/NavigationContext";')
                        .replace(/from "\.\.\/src\/contexts\/NavigationContext";/g, 'fro'm' "../src/contexts/NavigationContext";')
                        .replace(/from '\.\.\/src\/components\/ChatAssistant";/g, 'fro'm' "../src/components/ChatAssistant";')
                        .replace(/from "\.\.\/src\/components\/ChatAssistant";/g, 'fro'm' "../src/components/ChatAssistant";')
                        .replace(/from '\.\.\/components\/MessageChannelDebugger";/g, 'fro'm' "../components/MessageChannelDebugger";')
                        .replace(/from "\.\.\/components\/MessageChannelDebugger";/g, 'fro'm' "../components/MessageChannelDebugger";')
                        .replace(/from '\.\.\/components\/MessageChannelErrorBoundary";/g, 'fro'm' "../components/MessageChannelErrorBoundary";')
                        .replace(/from "\.\.\/components\/MessageChannelErrorBoundary";/g, 'fro'm' "../components/MessageChannelErrorBoundary";')
                        .replace(/from '\.\.\/components\/ui\/Sidebar";/g, 'fro'm' "../components/ui/Sidebar";')
                        .replace(/from "\.\.\/components\/ui\/Sidebar";/g, 'fro'm' "../components/ui/Sidebar";')
                        .replace(/from '\.\.\/components\/ParticleEffect";/g, 'fro'm' "../components/ParticleEffect";')
                        .replace(/from "\.\.\/components\/ParticleEffect";/g, 'fro'm' "../components/ParticleEffect";')
                        .replace(/from '\.\.\/utils\/messageChannelHandler";/g, 'fro'm' "../utils/messageChannelHandler";')
                        .replace(/from "\.\.\/utils\/messageChannelHandler";/g, 'fro'm' "../utils/messageChannelHandler";')
                        
                        // Fix other common import patterns
                        .replace(/from '\.\.\/ui\/Sidebar";/g, 'fro'm' "../ui/Sidebar";')
                        .replace(/from "\.\.\/ui\/Sidebar";/g, 'fro'm' "../ui/Sidebar";')
                        .replace(/from '\.\.\/layout\/ModernLayout";/g, 'fro'm' "../layout/ModernLayout";')
                        .replace(/from "\.\.\/layout\/ModernLayout";/g, 'fro'm' "../layout/ModernLayout";')
                        .replace(/from '\.\.\/ResponsiveNavigation";/g, 'fro'm' "../ResponsiveNavigation";')
                        .replace(/from "\.\.\/ResponsiveNavigation";/g, 'fro'm' "../ResponsiveNavigation";')
                        
                        // Fix interface and type definitions
                        .replace(/variant\?: 'lig'h't' \| 'dar'k'";/g, 'varian't'?: "light" | "dark";')
                        .replace(/variant\?: "light" \| "dark";/g, 'varian't'?: "light" | "dark";')
                        
                        // Remove stray quotes and semicolons
                        .replace(/;""/g, ';')
                        .replace(/;''/g, ';')
                        .replace(/;;/g, ';')
                        .replace(/;;;/g, ';');
                    
                    fs.writeFileSync(file, content);
                    console.log("✅ Fixed imports: ${file}");
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

fixAllImportStatements();
console.log('✅ All import statements fix completed'); 