const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Files to process - complete list from grep results
const filesToFix = [
  'src/mobile/MobileApp.tsx',
  'src/mobile/components/dashboard/TalentDashboard.tsx',
  'src/mobile/components/dashboard/ClientDashboard.tsx',
  'src/routes/TalentRoutes.tsx',
  'src/routes/ErrorRoutes.tsx',
  'src/routes/MarketplaceRoutes.tsx',
  'src/routes/DeveloperRoutes.tsx',
  'src/routes/MobileAppRoutes.tsx',
  'src/routes/EnterpriseRoutes.tsx',
  'src/routes/AdminRoutes.tsx',
  'src/routes/DashboardRoutes.tsx',
  'src/routes/ContentRoutes.tsx',
  'src/routes/PublicRoutes.tsx',
  'src/routes/CommunityRoutes.tsx',
  'src/routes/AuthRoutes.tsx',
  'src/pages/GreenIT.tsx',
  'src/pages/TalentOnboarding.tsx',
  'src/pages/LandingPage.tsx',
  'src/pages/ServicesPage.tsx',
  'src/pages/PublicTalentProfilePage.tsx',
  'src/pages/ListingDetail.tsx',
  'src/pages/CommunityProfilePage.tsx',
  'src/pages/ServiceOnboarding.tsx',
  'src/pages/HiringTracker.tsx',
  'src/pages/PostJob.tsx',
  'src/pages/ForumPostPage.tsx',
  'src/pages/ProfileDetail.tsx',
  'src/pages/ClientDashboard.tsx',
  'src/pages/CompanyWorkspace.tsx',
  'src/pages/Blog.tsx',
  'src/pages/Sitemap.tsx',
  'src/pages/EnterpriseAdmin.tsx',
  'src/pages/CaseStudies.tsx',
  'src/pages/TalentDashboard.tsx',
  'src/pages/CaseStudy.tsx',
  'src/pages/EnterpriseBilling.tsx',
  'src/pages/admin/WhitelabelManager.tsx',
  'src/pages/admin/QuoteManager.tsx',
  'src/pages/admin/TenantOnboarding.tsx',
  'src/pages/ForumCategoryPage.tsx',
  'src/pages/Projects.tsx',
  'src/pages/ServiceDescriptionGenerator.tsx',
  'src/components/mobile-app/MobileAppHero.tsx',
  'src/components/hiring-tracker/CandidateCard.tsx',
  'src/components/BlogSection.tsx',
  'src/components/TestimonialCarousel.tsx',
  'src/components/jobs/applications/ApplicationCard.tsx',
  'src/components/jobs/applications/EmptyState.tsx',
  'src/components/FloatingCTA.tsx',
  'src/components/profile/ProfileErrorState.tsx',
  'src/components/profile/BackToDirectoryButton.tsx',
  'src/components/profile/TalentCard.tsx',
  'src/components/mobile-app/SmartAppBanner.tsx',
  'src/components/disputes/DisputesList.tsx',
  'src/components/FeaturesGuideSection.tsx'
];

// Conversion patterns
const patterns = [
  // Import conversions
  {
    from: /import\s+{\s*Link\s*}\s+from\s+"react-router-dom";?/g,
    to: 'import Link from "next/link";'
  },
  {
    from: /import\s+{\s*useParams\s*}\s+from\s+"react-router-dom";?/g,
    to: 'import { useRouter } from "next/router";'
  },
  {
    from: /import\s+{\s*Navigate\s*}\s+from\s+"react-router-dom";?/g,
    to: 'import { useRouter } from "next/router";'
  },
  {
    from: /import\s+{\s*useParams,\s*Link\s*}\s+from\s+"react-router-dom";?/g,
    to: 'import Link from "next/link";\nimport { useRouter } from "next/router";'
  },
  {
    from: /import\s+{\s*Link,\s*useParams\s*}\s+from\s+"react-router-dom";?/g,
    to: 'import Link from "next/link";\nimport { useRouter } from "next/router";'
  },
  {
    from: /import\s+{\s*Navigate,\s*useParams\s*}\s+from\s+"react-router-dom";?/g,
    to: 'import { useRouter } from "next/router";'
  },
  {
    from: /import\s+{\s*useParams,\s*Navigate\s*}\s+from\s+"react-router-dom";?/g,
    to: 'import { useRouter } from "next/router";'
  },
  {
    from: /import\s+Navigate,\s*{\s*Routes,\s*Route\s*}\s+from\s+"react-router-dom";?/g,
    to: '// Router components removed - convert to Next.js pages structure'
  },
  {
    from: /import\s+{\s*Route,\s*Routes\s*}\s+from\s+"react-router-dom";?/g,
    to: '// Router components removed - convert to Next.js pages structure'
  },
  {
    from: /import\s+{\s*Navigate,\s*Route,\s*Routes\s*}\s+from\s+"react-router-dom";?/g,
    to: '// Router components removed - convert to Next.js pages structure'
  },
  {
    from: /import\s+{\s*Route,\s*Routes,\s*Navigate\s*}\s+from\s+"react-router-dom";?/g,
    to: '// Router components removed - convert to Next.js pages structure'
  },
  
  // Usage conversions
  {
    from: /const\s+{\s*([^}]+)\s*}\s*=\s*useParams\(\);?/g,
    to: (match, params) => {
      const router = 'const router = useRouter();';
      const paramAccess = params.split(',').map(p => {
        const param = p.trim();
        return `const ${param} = router.query.${param} as string;`;
      }).join('\n  ');
      return `${router}\n  ${paramAccess}`;
    }
  },
  {
    from: /const\s+params\s*=\s*useParams\(\);?/g,
    to: 'const router = useRouter();\n  const params = router.query;'
  },
  {
    from: /<Navigate\s+to=["']([^"']+)["']\s*\/>/g,
    to: (match, path) => {
      return `// Use router.push('${path}') or redirect in getServerSideProps`;
    }
  },
  {
    from: /to=["']([^"']+)["']/g,
    to: 'href="$1"'
  }
];

function fixFile(filePath) {
  try {
    console.log(`Processing: ${filePath}`);
    let content = fs.readFileSync(filePath, 'utf8');
    let modified = false;
    
    patterns.forEach(pattern => {
      const oldContent = content;
      if (typeof pattern.to === 'function') {
        content = content.replace(pattern.from, pattern.to);
      } else {
        content = content.replace(pattern.from, pattern.to);
      }
      if (content !== oldContent) {
        modified = true;
      }
    });
    
    if (modified) {
      fs.writeFileSync(filePath, content);
      console.log(`✓ Fixed: ${filePath}`);
    } else {
      console.log(`- No changes needed: ${filePath}`);
    }
    
  } catch (error) {
    console.error(`Error processing ${filePath}:`, error.message);
  }
}

// Process all files
console.log('Starting React Router to Next.js conversion...\n');

filesToFix.forEach(filePath => {
  if (fs.existsSync(filePath)) {
    fixFile(filePath);
  } else {
    console.log(`- File not found: ${filePath}`);
  }
});

console.log('\n✓ Conversion complete!');
console.log('\nNote: Route component files in src/routes/ need manual conversion to Next.js pages structure.'); 