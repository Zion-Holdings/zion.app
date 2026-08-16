#!/usr/bin/env node
/**
 * fix_broken_canonicals.cjs — Fix broken canonical URLs in service page templates.
 * The templates have a bug: canonical: `https://ziontechgroup.com/services/${service.id}/\n
 * (missing closing backtick). Also adds alternates.canonical to metadata.
 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const SVC_DIR = path.join(ROOT, 'app', 'services');

function fixFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8');
  let changed = false;

  // Fix broken canonical: missing closing backtick
  // Pattern: canonical: `https://ziontechgroup.com/services/${service.id}/\n  }
  content = content.replace(
    /canonical: `https:\/\/ziontechgroup\.com\/services\/\$\{service\.id\}\/\\\n/g,
    'canonical: `https://ziontechgroup.com/services/${service.id}/`\n'
  );
  changed = true;

  // Also fix if the canonical has a literal backslash-n at the end
  content = content.replace(
    /canonical: `https:\/\/ziontechgroup\.com\/services\/\$\{service\.id\}\/\\\n/g,
    'canonical: `https://ziontechgroup.com/services/${service.id}/`\n'
  );
  changed = true;

  // Fix breadcrumb item URL (missing trailing slash)
  content = content.replace(
    /item: `https:\/\/ziontechgroup\.com\/services\/\$\{service\.id\}`,/g,
    'item: `https://ziontechgroup.com/services/${service.id}/`,'
  );
  changed = true;

  // Add alternates.canonical to metadata if missing
  if (content.includes("description: service.description") && !content.includes("alternates:")) {
    content = content.replace(
      /description: service\.description \|\| `Explore \$\{service\.title\} at Zion Tech Group — enterprise-grade solutions\.`,\n  };/,
      'description: service.description || `Explore ${service.title} at Zion Tech Group — enterprise-grade solutions.`,\n    alternates: { canonical: `https://ziontechgroup.com/services/${service.id}/` },\n  };'
    );
    changed = true;
  }

  if (changed) {
    fs.writeFileSync(filePath, content);
    return true;
  }
  return false;
}

function main() {
  // Only process .tsx files in app/services/ (the old template files)
  const files = fs.readdirSync(SVC_DIR).filter(f => f.endsWith('.tsx'));
  console.log(`Found ${files.length} .tsx files in app/services/`);

  let fixed = 0;
  for (const file of files) {
    const fullPath = path.join(SVC_DIR, file);
    if (fixFile(fullPath)) {
      fixed++;
    }
  }
  console.log(`Fixed ${fixed} .tsx files`);
}

main();
