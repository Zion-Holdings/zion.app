#!/usr/bin/env node

const fs = require('fs-extra');
const path = require('path');
const glob = require('glob');

async function fixAllTypeScriptErrors() {
  console.log('🔧 Fixing all TypeScript syntax errors...');
  
  // Find all TypeScript files
  const files = glob.sync('utils/**/*.{ts,tsx}');
  
  for (const file of files) {
    try {
      console.log(`Processing: ${file}`);
      let content = await fs.readFile(file, 'utf8');
      let modified = false;
      
      // Fix common syntax patterns
      const patterns = [
        // Fix malformed exports
        { from: /export,\s*interface,\s*(\w+)\s*{;/, to: 'export interface $1 {' },
        { from: /export,\s*const\s+(\w+)\s*=/, to: 'export const $1 =' },
        
        // Fix malformed imports
        { from: /import\s+(\w+)\s+from\s+'([^']+)';;/, to: "import $1 from '$2';" },
        
        // Fix malformed variable declarations
        { from: /const\s+(\w+)\s*=\s*([^;]+);;/, to: 'const $1 = $2;' },
        
        // Fix malformed function declarations
        { from: /function\s+(\w+)\s*\(([^)]*)\)\s*{/, to: 'function $1($2) {' },
        
        // Fix malformed object properties
        { from: /(\w+),\s*(\w+):\s*([^;]+);/, to: '$1$2: $3;' },
        
        // Fix malformed string literals
        { from: /'([^']*)';;/, to: "'$1';" },
        { from: /"([^"]*)"';;/, to: '"$1";' },
        
        // Fix malformed type annotations
        { from: /:\s*(\w+),\s*(\w+)/, to: ': $1$2' },
        
        // Fix malformed return statements
        { from: /retu,\s*r,\s*n/, to: 'return' },
        
        // Fix malformed case statements
        { from: /ca,\s*s,\s*e/, to: 'case' },
        
        // Fix malformed if statements
        { from: /if\s*\(([^)]*)\)\s*{/, to: 'if ($1) {' },
        
        // Fix malformed object access
        { from: /(\w+),\s*(\w+)/, to: '$1$2' },
        
        // Fix malformed method calls
        { from: /(\w+)\.(\w+)\s*\(([^)]*)\)/, to: '$1.$2($3)' },
        
        // Fix malformed array access
        { from: /(\w+)\s*\[([^\]]*)\]/, to: '$1[$2]' },
        
        // Fix malformed template literals
        { from: /`([^`]*)`;;/, to: '`$1`;' },
        
        // Fix malformed regex
        { from: /\/([^\/]*)\/;;/, to: '/$1/;' },
        
        // Fix malformed comments
        { from: /\/\/\s*([^;]*);;/, to: '// $1' },
        
        // Fix malformed JSX
        { from: /<(\w+)\s+([^>]*)>/, to: '<$1 $2>' },
        { from: /<\/(\w+)>/, to: '</$1>' }
      ];
      
      for (const pattern of patterns) {
        const newContent = content.replace(pattern.from, pattern.to);
        if (newContent !== content) {
          content = newContent;
          modified = true;
        }
      }
      
      // Fix specific patterns for different file types
      if (file.includes('supabase/client.ts')) {
        content = content
          .replace(/import React from 'rea c t';;'/, "import React from 'react';")
          .replace(/const supabaseUr l = proce s s\.e n v\.NEXT_PUBLIC_SUPABASE_U R L \|\| 'htt p s:\/\/placehold e r\.supaba s e\.co''/, "const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co';")
          .replace(/const supabaseAnonKe y = proce s s\.e n v\.NEXT_PUBLIC_SUPABASE_ANON_K E Y \|\| 'placehold e r-k e y''/, "const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'placeholder-key';");
      }
      
      if (file.includes('testing-system.ts')) {
        content = content
          .replace(/import React from 'rea c t';;'/, "import React from 'react';")
          .replace(/static async testUserInteraction\(eleme n t: HTMLEleme n t acti o n: 'cli c k' \| 'ty p e' \| 'hov e r''\)/, "static async testUserInteraction(element: HTMLElement, action: 'click' | 'type' | 'hover')")
          .replace(/ca s e 'cli c k''/, "case 'click':")
          .replace(/ca s e 'ty p e''/, "case 'type':")
          .replace(/ca s e 'hov e r''/, "case 'hover':")
          .replace(/if \(typeof windo w !== 'undefin e d''\)/, "if (typeof window !== 'undefined')")
          .replace(/Obje c t\.defineProper t y\(wind o w 'innerWid t h''\)/, "Object.defineProperty(window, 'innerWidth',")
          .replace(/Obje c t\.defineProper t y\(wind o w 'innerHeig h t''\)/, "Object.defineProperty(window, 'innerHeight',")
          .replace(/wind o w\.dispatchEve n t\(new Even t\('resi z e''\)/, "window.dispatchEvent(new Event('resize'))");
      }
      
      if (file.includes('service.ts')) {
        content = content
          .replace(/export, interface, Service {;/, "export interface Service {")
          .replace(/tit, l, e: stri, n, g;/, "title: string;")
          .replace(/descripti, o, n: stri, n, g;/, "description: string;")
          .replace(/provid, e, r: {/, "provider: {")
          .replace(/na, m, e: stri, n, g;/, "name: string;")
          .replace(/avat, a, r: stri, n, g;/, "avatar: string;")
          .replace(/rati, n, g: numb, e, r};/, "rating: number;")
          .replace(/prici, n, g: {/, "pricing: {")
          .replace(/fr, o, m: numb, e, r;/, "from: number;")
          .replace(/curren, c, y: stri, n, g;/, "currency: string;")
          .replace(/ty, p, e: 'hour, l, y' \| 'fix, e, d' \| 'month, l, y''/, "type: 'hourly' | 'fixed' | 'monthly';");
      }
      
      if (file.includes('quoteRequests.ts')) {
        content = content
          .replace(/export, interface, QuoteRequest {;/, "export interface QuoteRequest {")
          .replace(/service, I, d: stri, n, g;/, "serviceId: string;")
          .replace(/client, I, d: stri, n, g;/, "clientId: string;")
          .replace(/descripti, o, n: stri, n, g;/, "description: string;")
          .replace(/budg, e, t: numb, e, r;/, "budget: number;")
          .replace(/timeli, n, e: stri, n, g;/, "timeline: string;")
          .replace(/stat, u, s: 'pendi, n, g' \| 'approv, e, d' \| 'reject, e, d' \| 'complet, e, d''/, "status: 'pending' | 'approved' | 'rejected' | 'completed';");
      }
      
      if (file.includes('services.ts')) {
        content = content
          .replace(/export, const serviceCategories\s*=\s*\[{ id: "clo, u d-servic e s", na, m, e: "Cloud Service s" } { id: "ai-servic e s", na, m e: "AI Service s";/, "export const serviceCategories = [{ id: 'cloud-services', name: 'Cloud Services' }, { id: 'ai-services', name: 'AI Services' };");
      }
      
      if (file.includes('sanitizeHtml.ts')) {
        content = content
          .replace(/if \(!ht, m, l\) retu, r, n ''/, "if (!html) return '';")
          .replace(/sanitiz, e, d = sanitiz, e, d\.repla, c, e\(\/\\s\*on\\w\+\\s\*=\\s\*\["'"\]\[^"'"\]\*\["'"\]\/\)/, "sanitized = sanitized.replace(/\\s*on\\w+\\s*=\\s*[\"'][^\"']*[\"']/g, '')");
      }
      
      if (modified) {
        await fs.writeFile(file, content);
        console.log(`✅ Fixed syntax errors in: ${file}`);
      }
      
    } catch (error) {
      console.error(`❌ Error processing ${file}:`, error.message);
    }
  }
  
  console.log('✅ All TypeScript syntax error fixing completed');
}

fixAllTypeScriptErrors().catch(console.error);
