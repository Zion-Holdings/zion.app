#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

console.log('🔧 Fixing logErrorToProduction function signatures...');

// Files with known signature issues
const filesToFix = [
  'src/components/PageErrorBoundary.tsx',
  'src/components/RootErrorBoundary.tsx',
  'src/layout/AppLayout.tsx',
  'src/mobile/MobileApp.tsx',
  'src/pages/admin/FraudDetection.tsx',
  'src/pages/admin/PartnerManager.tsx',
  'src/pages/admin/ReviewsModeration.tsx',
  'src/pages/admin/TenantOnboarding.tsx',
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

filesToFix.forEach(file => {
  const fullPath = path.join(process.cwd(), file);
  
  if (!fs.existsSync(fullPath)) {
    return;
  }
  
  let content = fs.readFileSync(fullPath, 'utf8');
  const originalContent = content;
  
  // Fix common patterns where Error objects are passed directly as first parameter
  
  // Pattern: logErrorToProduction(error, {...})
  content = content.replace(
    /logErrorToProduction\s*\(\s*([a-zA-Z_$][a-zA-Z0-9_$]*),\s*(\{[^}]*\})\s*\)/g,
    (match, errorVar, context) => {
      // Skip if already converted or is a string literal
      if (errorVar.includes('.message') || errorVar.includes('String(') || errorVar.match(/^['"`]/)) {
        return match;
      }
      return `logErrorToProduction(${errorVar} instanceof Error ? ${errorVar}.message : String(${errorVar}), ${errorVar} instanceof Error ? ${errorVar} : undefined, ${context})`;
    }
  );
  
  // Pattern: logErrorToProduction(error)
  content = content.replace(
    /logErrorToProduction\s*\(\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\)(?!.*instanceof)/g,
    (match, errorVar) => {
      // Skip if already converted or is a string literal  
      if (errorVar.includes('.message') || errorVar.includes('String(') || errorVar.match(/^['"`]/)) {
        return match;
      }
      return `logErrorToProduction(${errorVar} instanceof Error ? ${errorVar}.message : String(${errorVar}), ${errorVar} instanceof Error ? ${errorVar} : undefined)`;
    }
  );
  
  // Fix specific patterns like setTraceId(logErrorToProduction(...))
  content = content.replace(
    /setTraceId\s*\(\s*logErrorToProduction\s*\([^)]+\)\s*\)/g,
    (match) => {
      // Replace with a proper trace ID generation since logErrorToProduction returns void
      return 'setTraceId(\'trace-\' + Date.now() + \'-\' + Math.random().toString(36).substr(2, 9))';
    }
  );
  
  if (content !== originalContent) {
    fs.writeFileSync(fullPath, content, 'utf8');
    fixedFiles++;
    console.log(`✅ Fixed: ${file}`);
  }
});

console.log(`\n🎉 Fixed ${fixedFiles} files with function signature issues`); 