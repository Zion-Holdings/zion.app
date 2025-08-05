const fs = require('fs');
const path = require('path');

function fixImports(directory) {
  const files = fs.readdirSync(directory, { withFileTypes: true });
  
  files.forEach(file => {
    const filePath = path.join(directory, file.name);
    
    if (file.isDirectory()) {
      fixImports(filePath);
    } else if (file.name.endsWith('.tsx') || file.name.endsWith('.ts') || file.name.endsWith('.js')) {
      try {
        let content = fs.readFileSync(filePath, 'utf8');
        let modified = false;
        
        // Fix broken import statements with extra quotes
        const importFixes = [
          // Fix React imports
          [/import React from 'rea'c't';/g, "import React from 'react';"],
          [/import React, \{ ([^}]+) \} from 'rea'c't';/g, "import React, { $1 } from 'react';"],
          
          // Fix Next.js imports
          [/import type \{ AppProps \} from 'nex't'\/app';/g, "import type { AppProps } from 'next/app';"],
          [/import \{ Html, Head, Main, NextScript \} from 'nex't'\/document';/g, "import { Html, Head, Main, NextScript } from 'next/document';"],
          [/import \{ NextPage \} from 'ne'x't';/g, "import { NextPage } from 'next';"],
          [/import Head from 'nex't'\/head';/g, "import Head from 'next/head';"],
          [/import Link from 'nex't'\/link';/g, "import Link from 'next/link';"],
          [/import \{ useRouter \} from 'nex't'\/router';/g, "import { useRouter } from 'next/router';"],
          [/import Image from 'nex't'\/image';/g, "import Image from 'next/image';"],
          
          // Fix other common imports
          [/import \{ motion \} from 'fra'me'r-motion';/g, "import { motion } from 'framer-motion';"],
          [/import \{ useState, useEffect \} from 'rea'c't';/g, "import { useState, useEffect } from 'react';"],
          [/import \{ useState, useEffect, useCallback \} from 'rea'c't';/g, "import { useState, useEffect, useCallback } from 'react';"],
          
          // Fix any remaining broken quotes in imports
          [/'([^']*)'([^']*)'([^']*)'/g, (match, p1, p2, p3) => {
            return `'${p1}${p2}${p3}'`;
          }],
          
          // Fix double quotes in imports
          [/"([^"]*)"([^"]*)"([^"]*)"/g, (match, p1, p2, p3) => {
            return `"${p1}${p2}${p3}"`;
          }]
        ];
        
        importFixes.forEach(([pattern, replacement]) => {
          if (pattern.test(content)) {
            content = content.replace(pattern, replacement);
            modified = true;
          }
        });
        
        if (modified) {
          fs.writeFileSync(filePath, content);
          console.log(`Fixed imports: ${filePath}`);
        }
      } catch (error) {
        console.error(`Error processing ${filePath}:`, error.message);
      }
    }
  });
}

// Fix imports in all relevant directories
const directories = ['pages', 'components', 'src'];
directories.forEach(dir => {
  if (fs.existsSync(dir)) {
    console.log(`Processing directory: ${dir}`);
    fixImports(dir);
  }
});

console.log('Import fixes completed!'); 