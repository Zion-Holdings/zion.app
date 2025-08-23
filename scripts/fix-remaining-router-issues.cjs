#!/usr/bin/env node

const fs = require('fs');
const { execSync } = require('child_process');

console.log('🔧 Fixing remaining React Router issues...\n');

const fixes = [
  // Fix files with useLocation
  {
    file: 'src/pages/SavedTalentsPage.tsx',
    replacements: [
      {
        from: 'const location = useLocation();',
        to: '// Using router.asPath instead of useLocation'
      },
      {
        from: 'location.pathname + location.search',
        to: 'router.asPath'
      }
    ]
  },
  {
    file: 'src/pages/NotFound.tsx',
    replacements: [
      {
        from: 'import { useLocation, Link } from "react-router-dom";',
        to: 'import { useRouter } from "next/router";\nimport Link from "next/link";'
      },
      {
        from: 'const location = useLocation();',
        to: 'const router = useRouter();'
      },
      {
        from: 'location.pathname',
        to: 'router.asPath'
      },
      {
        from: 'to="/"',
        to: 'href="/"'
      }
    ]
  },
  {
    file: 'src/components/developers/ApiDocsLayout.tsx',
    replacements: [
      {
        from: 'const location = useLocation();',
        to: '// Using router.pathname instead of useLocation'
      },
      {
        from: 'location.pathname',
        to: 'router.pathname'
      }
    ]
  },
  {
    file: 'src/mobile/components/common/BottomNavigation.tsx',
    replacements: [
      {
        from: 'import { Link, useLocation } from "react-router-dom";',
        to: 'import { useRouter } from "next/router";\nimport Link from "next/link";'
      },
      {
        from: 'const location = useLocation();',
        to: 'const router = useRouter();'
      },
      {
        from: 'location.pathname',
        to: 'router.pathname'
      },
      {
        from: 'to="',
        to: 'href="'
      }
    ]
  },
  {
    file: 'src/components/header/MobileBottomNav.tsx',
    replacements: [
      {
        from: 'import { Link, useLocation } from "react-router-dom";',
        to: 'import { useRouter } from "next/router";\nimport Link from "next/link";'
      },
      {
        from: 'const location = useLocation();',
        to: 'const router = useRouter();'
      },
      {
        from: 'location.pathname',
        to: 'router.pathname'
      },
      {
        from: 'to="',
        to: 'href="'
      }
    ]
  },
  {
    file: 'src/components/profile/talent-card/TalentCardSaveButton.tsx',
    replacements: [
      {
        from: 'const location = useLocation();',
        to: '// Using router.asPath for current path'
      },
      {
        from: 'location.pathname + location.search',
        to: 'router.asPath'
      }
    ]
  }
];

let totalFixed = 0;

fixes.forEach(fix => {
  if (!fs.existsSync(fix.file)) {
    console.log(`⚠️  File not found: ${fix.file}`);
    return;
  }

  console.log(`🔧 Fixing: ${fix.file}`);
  
  try {
    let content = fs.readFileSync(fix.file, 'utf8');
    let hasChanges = false;
    
    fix.replacements.forEach(replacement => {
      if (content.includes(replacement.from)) {
        content = content.replace(new RegExp(replacement.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), replacement.to);
        hasChanges = true;
        console.log(`   ✓ Replaced: ${replacement.from.substring(0, 50)}...`);
      }
    });
    
    if (hasChanges) {
      fs.writeFileSync(fix.file, content);
      totalFixed++;
    } else {
      console.log(`   ⚠️  No changes needed`);
    }
    
  } catch (error) {
    console.log(`   ❌ Error: ${error.message}`);
  }
  
  console.log('');
});

console.log(`📊 Fixed ${totalFixed} files\n`);

// Test the build
try {
  console.log('🧪 Testing build...');
  execSync('npm run build > build-test-2.log 2>&1');
  console.log('✅ Build test passed!');
} catch (error) {
  console.log('❌ Build test failed. Checking errors...');
  
  try {
    const buildLog = fs.readFileSync('build-test-2.log', 'utf8');
    const errorLines = buildLog.split('\n').filter(line => 
      line.includes('Type error') || 
      line.includes('Cannot find name') ||
      line.includes('Error:')
    );
    
    if (errorLines.length > 0) {
      console.log('\n🔍 Found errors:');
      errorLines.slice(0, 5).forEach(line => console.log(`   ${line.trim()}`));
    }
  } catch (e) {
    console.log('Could not read build log');
  }
}

console.log('\n🚀 Router fixes complete!'); 