const fs = require('fs');

// Function to fix ultimate syntax errors
function fixUltimateSyntaxErrors(filePath) {
  try {
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;

    // Fix specific syntax errors
    const fixes = [
      // Fix unterminated string constants with single quotes
      { pattern: /'([^']*)$/gm, replacement: "'$1'" },
      // Fix unterminated string constants with double quotes
      { pattern: /"([^"]*)$/gm, replacement: '"$1"' },
      // Fix malformed imports
      { pattern: /import React from 'react'/g, replacement: "import React from 'react';" },
      { pattern: /import Link from 'next\/link'/g, replacement: "import Link from 'next/link';" },
      { pattern: /import \{ useRouter \} from 'next\/router'/g, replacement: "import { useRouter } from 'next/router';" },
      // Fix malformed JSX attributes
      { pattern: /className="([^"]*)\s+([^"]*)"/g, replacement: 'className="$1 $2"' },
      // Fix malformed JSX closing tags
      { pattern: /<([^>]+)\s*\/>\s*([^<]+)/g, replacement: '<$1>$2</$1>' },
      // Fix malformed quotes in attributes
      { pattern: /(\w+)="([^"]*)"\s*"([^"]*)"/g, replacement: '$1="$2 $3"' },
      // Fix malformed className with missing spaces
      { pattern: /className\s*=\s*([^"]*)\s*"([^"]*)"/g, replacement: 'className="$1 $2"' },
      // Fix missing semicolons
      { pattern: /(\w+)\s*=\s*([^;]+)$/gm, replacement: '$1 = $2;' },
      // Fix malformed function declarations
      { pattern: /(\w+)\s*\(\s*([^)]+)\s*\)\s*=>\s*\{/g, replacement: '$1($2) => {' },
      // Fix malformed interface declarations
      { pattern: /interface\s+(\w+)\s*\{([^}]*)\}/g, replacement: 'interface $1 {\n$2\n}' },
      // Fix malformed JSX elements
      { pattern: /<(\w+)\s*([^>]*)\s*>\s*<\/\1>/g, replacement: '<$1 $2 />' },
      // Fix specific syntax errors in ParticleEffect
      { pattern: /if \(!canvas\) return;'/g, replacement: 'if (!canvas) return;' },
      { pattern: /resizeCanvas\(\);'/g, replacement: 'resizeCanvas();' },
      { pattern: /size: Math\.random\(\) \* 2 \+ 1,'/g, replacement: 'size: Math.random() * 2 + 1,' },
      // Fix specific syntax errors in RealTimeMonitor
      { pattern: /RealTimeMonitorProps\) \{'/g, replacement: 'RealTimeMonitorProps) {' },
      { pattern: /useState<Date>\(new Date\(\)\);'/g, replacement: 'useState<Date>(new Date());' },
      { pattern: /switch \(status\) \{'/g, replacement: 'switch (status) {' },
      // Fix specific syntax errors in SystemHealthMonitor
      { pattern: /totalAgents: number;'/g, replacement: 'totalAgents: number;' },
      { pattern: /SystemHealthMonitorProps\) \{''/g, replacement: 'SystemHealthMonitorProps) {' },
      { pattern: /formatBytes \(bytes: number\) => \{'';''/g, replacement: 'formatBytes = (bytes: number) => {' },
      { pattern: /if \(bytes === 0\) return '0 Bytes';'/g, replacement: "if (bytes === 0) return '0 Bytes';" },
      // Fix specific syntax errors in ModernLayout
      { pattern: /import React from 'react'/g, replacement: "import React from 'react';" },
      { pattern: /import Sidebar from '\.\.\/ui\/Sidebar'/g, replacement: "import Sidebar from '../ui/Sidebar';" },
      { pattern: /import \{ useRouter \} from 'next\/router'/g, replacement: "import { useRouter } from 'next/router';" },
      // Fix specific syntax errors in Sidebar
      { pattern: /import React, \{ useState, useEffect , useCallback \} from 'react'/g, replacement: "import React, { useState, useEffect, useCallback } from 'react';" },
      { pattern: /import Link from 'next\/link'/g, replacement: "import Link from 'next/link';" },
      { pattern: /import \{ useRouter \} from 'next\/router'/g, replacement: "import { useRouter } from 'next/router';" },
      { pattern: /Signal,'/g, replacement: 'Signal,' },
      { pattern: /} from 'lucide-react'/g, replacement: "} from 'lucide-react';" },
      // Fix malformed JSX structure
      { pattern: /<div className="  flex h-screen bg-gray-50>"/g, replacement: '<div className="flex h-screen bg-gray-50">' },
      { pattern: /<Sidebar > <\/Sidebar ><main className="  flex-1" overflow-auto">"/g, replacement: '<Sidebar /><main className="flex-1 overflow-auto">' },
      { pattern: /<div className=" min-h-screen>"/g, replacement: '<div className="min-h-screen">' },
      // Fix malformed className attributes
      { pattern: /className=" flex items-center">"/g, replacement: 'className="flex items-center">' },
      { pattern: /className="w-2" h-2 bg-green-500 rounded-full mr-2>/g, replacement: 'className="w-2 h-2 bg-green-500 rounded-full mr-2">' },
      { pattern: /className="text-sm" text-green-600>Connected<\/span>/g, replacement: 'className="text-sm text-green-600">Connected</span>' },
    ];

    fixes.forEach(fix => {
      const newContent = content.replace(fix.pattern, fix.replacement);
      if (newContent !== content) {
        content = newContent;
        modified = true;
      }
    });

    if (modified) {
      fs.writeFileSync(filePath, content, 'utf8');
      console.log(`Fixed ultimate syntax errors in: ${filePath}`);
    }
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Files to fix
const filesToFix = [
  'components/ParticleEffect.tsx',
  'components/ResponsiveNavigation.tsx',
  'components/admin/RealTimeMonitor.tsx',
  'components/admin/SystemHealthMonitor.tsx',
  'components/layout/ModernLayout.tsx',
  'components/ui/Sidebar.tsx'
];

filesToFix.forEach(fixUltimateSyntaxErrors);
console.log('Ultimate syntax error fixing completed!'); 