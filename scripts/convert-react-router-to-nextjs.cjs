#!/usr/bin/env node

const fs = require('fs')
const path = require('path')
const { _execSync } = require('child_process');

console.warn('🔄 Converting React Router to Next.js routing...\n');

// Get all files that still use React Router
const files = execSync(
  'grep -r "useNavigate\\|react-router-dom" src --include="*.tsx" --include="*.ts" -l',
  { encoding: 'utf8' },
)
  .split('\n')
  .filter((f) => f.trim());

console.warn(`📁 Found ${files.length} files to convert:\n`);

let converted = 0;
let skipped = 0;

files.forEach((file) => {
  if (!file.trim()) return;

  console.warn(`🔧 Processing: ${file}`);

  try {
    let content = fs.readFileSync(file, 'utf8');
    let hasChanges = false;

    // Track what we're replacing
    const changes = [];

    // 1. Replace React Router imports with Next.js imports
    if (content.includes('useNavigate') && !content.includes('useRouter')) {
      content = content.replace(
        /import.*{[^}]*useNavigate[^}]*}.*from.*["']react-router-dom["'];?\n?/g,
        "import { useRouter } from 'next/router';\n",
      );
      changes.push('✓ Added Next.js useRouter import');
      hasChanges = true;
    }

    // 2. Replace useNavigate with useRouter
    if (content.includes('const navigate = useNavigate()')) {
      content = content.replace(
        /const\s+navigate\s*=\s*useNavigate\(\);?/g,
        'const router = useRouter();',
      );
      changes.push('✓ Replaced useNavigate with useRouter');
      hasChanges = true;
    }

    // 3. Replace navigate() calls with router.push()
    if (content.includes('navigate(')) {
      content = content.replace(/navigate\(/g, 'router.push(');
      changes.push('✓ Replaced navigate() calls with router.push()');
      hasChanges = true;
    }

    // 4. Remove unused React Router imports
    content = content.replace(
      /import.*{[^}]*useLocation[^}]*}.*from.*["']react-router-dom["'];?\n?/g,
      '',
    );
    content = content.replace(
      /import.*{[^}]*useParams[^}]*}.*from.*["']react-router-dom["'];?\n?/g,
      '',
    );
    content = content.replace(
      /import.*{[^}]*useSearchParams[^}]*}.*from.*["']react-router-dom["'];?\n?/g,
      '',
    );
    content = content.replace(
      /import.*{[^}]*Link[^}]*}.*from.*["']react-router-dom["'];?\n?/g,
      '',
    );

    // 5. Clean up empty imports
    content = content.replace(
      /import\s*{\s*}\s*from\s*["']react-router-dom["'];?\n?/g,
      '',
    );
    content = content.replace(/import\s*["']react-router-dom["'];?\n?/g, '');

    if (hasChanges) {
      fs.writeFileSync(file, content);
      console.warn(`   ${changes.join('\n   ')}`);
      converted++;
    } else {
      console.warn('   ⚠️  No changes needed');
      skipped++;
    }
  } catch (_error) {
    console.warn(`   ❌ Error: ${error.message}`);
    skipped++;
  }

  console.warn('');
});

console.warn(`\n📊 Conversion Summary:`);
console.warn(`✅ Converted: ${converted} files`);
console.warn(`⚠️  Skipped: ${skipped} files`);
console.warn(`\n🎉 Conversion complete! Running build test...\n`);

// Test the build
try {
  console.warn('🧪 Testing build...');
  execSync('npm run build > build-test.log 2>&1');
  console.warn('✅ Build test passed!');
} catch (_error) {
  console.warn('❌ Build test failed. Check build-test.log for details.');
}

console.warn('\n🚀 Next.js routing conversion complete!');
