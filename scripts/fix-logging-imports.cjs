#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

console.log('🔧 Fixing logErrorToProduction imports...');

// Fix remaining import statements manually
const importReplacements = [
  'src/pages/admin/FraudDetection.tsx',
  'src/pages/admin/PartnerManager.tsx', 
  'src/pages/admin/ReviewsModeration.tsx',
  'src/pages/admin/TenantOnboarding.tsx',
  'src/pages/AICoreDashboard.tsx',
  'src/pages/auth/verify-email.tsx',
  'src/pages/CommunityPage.tsx',
  'src/pages/FounderBot.tsx',
  'src/pages/PublicTalentProfilePage.tsx',
  'src/pages/SavedTalentsPage.tsx',
  'src/pages/TokenSimulator.tsx',
  'src/pages/UpdatePassword.tsx',
  'src/pages/WhitepaperGeneratorPage.tsx',
  'src/pages/WorkFuturesSimulator.tsx',
  'src/utils/withAsyncErrorGuard.ts',
  'src/utils/withErrorLogging.ts',
  'src/utils/zion-gpt.ts'
];

let fixedFiles = 0;

importReplacements.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  
  if (!fs.existsSync(fullPath)) {
    console.log(`⚠️  File not found: ${file}`);
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  const originalContent = content;
  
  // Fix imports from wrong module
  content = content.replace(
    /import\s*\{\s*logErrorToProduction\s*\}\s*from\s*['"]@\/utils\/logError['"];?/g,
    "import { logErrorToProduction } from '@/utils/productionLogger';"
  );
  
  content = content.replace(
    /import\s*\{\s*logErrorToProduction\s*\}\s*from\s*['"]\.\/logError['"];?/g,
    "import { logErrorToProduction } from '@/utils/productionLogger';"
  );
  
  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf8');
    fixedFiles++;
    console.log(`✅ Fixed: ${file}`);
  }
});

console.log(`\n🎉 Fixed ${fixedFiles} files`); 