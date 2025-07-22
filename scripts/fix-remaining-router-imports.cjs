#!/usr/bin/env node

const fs = require('fs')
const _path = require('path');

// Files to fix
const filesToFix = [
  'src/components/community/ForumCategories.tsx',
  'src/components/community/PostCard.tsx',
  'src/components/enterprise/billing/BillingHeader.tsx',
  'src/components/interviews/UpcomingInterviewsCard.tsx',
  'src/components/jobs/JobsList.tsx'
]
function fixReactRouterImports() {
  filesToFix.forEach(filePath => {
    try {
      if (!fs.existsSync(filePath)) {
        console.warn(`⚠️  File not found: ${filePath}`);
        return;
      }

      let content = fs.readFileSync(filePath, 'utf8');
      let hasChanges = false;

      // Replace React Router imports
      if (content.includes('import { Link } from "react-router-dom"')) {
        content = content.replace('import { Link } from 'react-router-dom';, 'import Link from 'next/link';);
        hasChanges = true;
      }

      if (content.includes("import { Link } from 'react-router-dom'")) {
        content = content.replace("import { Link } from 'react-router-dom';", "import Link from 'next/link';");
        hasChanges = true;
      }

      // Replace to= with href=
      if (content.includes('to=')) {
        content = content.replace(/to="/g, 'href="');
        content = content.replace(/to='/g, "href='");
        hasChanges = true;
      }

      if (hasChanges) {
        fs.writeFileSync(filePath, content);
        console.warn(`✅ Fixed: ${filePath}`);
      } else {
        console.warn(`ℹ️  No changes needed: ${filePath}`);
      }
    } catch (_error) {
      console.error(`❌ Error fixing ${filePath}:`, error.message);
    }
  });
}

if (require.main === module) {
  console.warn('🔧 Fixing remaining React Router imports...\n');
  fixReactRouterImports();
  console.warn('\n✨ Done!');
}

module.exports = { fixReactRouterImports }; 