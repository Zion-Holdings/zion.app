#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Get all files that still use React Router
const files = execSync('grep -r "useNavigate" src --include="*.tsx" --include="*.ts" -l', { encoding: 'utf8' })
  .split('\n')
  .filter(f => f.trim());

console.log(`Found ${files.length} files to fix`);

files.forEach(file => {
  if (!file.trim()) return;
  
  console.log(`Fixing ${file}...`);
  
  try {
    let content = fs.readFileSync(file, 'utf8');
    
    // Replace React Router imports
    content = content.replace(/import.*useNavigate.*from.*["']react-router-dom["'];?/g, "import { useRouter } from 'next/router';");
    content = content.replace(/import.*useNavigate,([^}]*)}.*from.*["']react-router-dom["'];?/g, "import { useRouter } from 'next/router';\nimport {$1} from 'react-router-dom';");
    content = content.replace(/import.*{([^}]*),\s*useNavigate([^}]*)}.*from.*["']react-router-dom["'];?/g, "import { useRouter } from 'next/router';\nimport {$1$2} from 'react-router-dom';");
    
    // Replace useNavigate with useRouter
    content = content.replace(/const\s+navigate\s*=\s*useNavigate\(\);?/g, 'const router = useRouter();');
    
    // Replace navigate() calls with router.push()
    content = content.replace(/navigate\(/g, 'router.push(');
    
    fs.writeFileSync(file, content);
    console.log(`✅ Fixed ${file}`);
  } catch (error) {
    console.log(`❌ Error fixing ${file}:`, error.message);
  }
});

console.log('Done!');
