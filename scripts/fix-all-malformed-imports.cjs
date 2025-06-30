#!/usr/bin/env node

const fs = require('fs');

console.log('🔧 Fixing ALL malformed import statements...');

const filesToFix = [
  'src/components/cart/GuestCheckoutModal.tsx',
  'src/components/creator/CreatorSidebar.tsx',
  'src/components/disputes/DisputeDetail.tsx',
  'src/components/disputes/DisputeForm.tsx',
  'src/components/disputes/DisputesList.tsx',
  'src/components/DynamicListingPage.tsx',
  'src/components/enterprise/admin/RoleManagement.tsx',
  'src/components/enterprise/admin/TeamActivity.tsx',
  'src/components/enterprise/admin/TeamManagement.tsx',
  'src/components/enterprise/admin/UsageStats.tsx',
  'src/components/enterprise/billing/InvoiceHistory.tsx',
  'src/components/enterprise/EnterprisePricingTable.tsx',
  'src/components/enterprise/EnterpriseTestimonials.tsx',
  'src/components/FaqSection.tsx',
  'src/components/header/AvatarMenu.tsx',
  'src/components/ProductSubmissionForm.tsx',
  'src/components/profile/ContactPublisherModal.tsx',
  'src/components/profile/ServiceProviderRegistrationForm.tsx',
  'src/components/profile/TalentOnboardingForm.tsx',
  'src/components/profile/TalentRegistrationForm.tsx',
  'src/components/projects/milestones/AIMilestoneGenerator.tsx',
  'src/components/resume-builder/forms/WorkExperienceForm.tsx',
  'src/components/resume-builder/portfolio/ProjectForm.tsx',
  'src/components/talent/filters/SortFilter.tsx',
  'src/components/talent/SortDropdown.tsx',
  'src/components/TestimonialCarousel.tsx',
  'src/components/wallet/OnChainExport.tsx',
  'src/components/wallet/RedeemTokensCard.tsx',
  'src/mobile/components/resume/MobileResumeBuilder.tsx',
  'src/pages/Cart.tsx',
  'src/pages/CaseStudy.tsx',
  'src/pages/Contact.tsx',
  'src/pages/Notifications.tsx',
  'src/pages/Orders.tsx',
  'src/pages/ProjectDetails.tsx',
  'src/pages/SearchPage.tsx'
];

function fixImportsInFile(filePath) {
  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${filePath}`);
      return false;
    }

    const content = fs.readFileSync(filePath, 'utf8');
    let fixed = content;
    let hasChanges = false;

    // Pattern 1: import { \n import { icons } from 'lucide-react'; \n other imports } from "module";
    const pattern1 = /import\s*\{\s*\n\s*import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]lucide-react['"];\s*\n\s*([^}]*)\s*\}\s*from\s*['"]([^'"]+)['"];?/g;
    
    fixed = fixed.replace(pattern1, (match, lucideIcons, otherImports, modulePath) => {
      hasChanges = true;
      const cleanLucideIcons = lucideIcons.trim().replace(/,\s*$/, '');
      const cleanOtherImports = otherImports.trim().replace(/,\s*$/, '');
      return `import { ${cleanLucideIcons} } from 'lucide-react';\nimport {\n  ${cleanOtherImports}\n} from "${modulePath}";`;
    });

    // Pattern 2: simpler case - import { \n import { icons } from 'lucide-react';
    const pattern2 = /import\s*\{\s*\n\s*import\s*\{\s*([^}]+)\s*\}\s*from\s*['"]lucide-react['"];\s*\n\s*([^}]*)/g;
    
    fixed = fixed.replace(pattern2, (match, lucideIcons, remainder) => {
      hasChanges = true;
      const cleanLucideIcons = lucideIcons.trim().replace(/,\s*$/, '');
      const cleanRemainder = remainder.trim();
      return `import { ${cleanLucideIcons} } from 'lucide-react';\nimport {\n  ${cleanRemainder}`;
    });

    if (hasChanges) {
      fs.writeFileSync(filePath, fixed, 'utf8');
      console.log(`✅ Fixed: ${filePath}`);
      return true;
    } else {
      console.log(`✓ Already clean: ${filePath}`);
      return false;
    }
  } catch (error) {
    console.error(`❌ Error fixing ${filePath}:`, error.message);
    return false;
  }
}

let totalFixed = 0;
let totalChecked = 0;

filesToFix.forEach((filePath, index) => {
  console.log(`\n[${index + 1}/${filesToFix.length}] Processing: ${filePath}`);
  totalChecked++;
  
  if (fixImportsInFile(filePath)) {
    totalFixed++;
  }
});

console.log(`\n🎉 Complete! Checked ${totalChecked} files, fixed ${totalFixed} files with malformed imports.`);

if (totalFixed > 0) {
  console.log('\n📝 Summary of fixes:');
  console.log('- Extracted lucide-react imports from malformed import blocks');
  console.log('- Created proper separate import statements');
  console.log('- Maintained correct TypeScript syntax');
}