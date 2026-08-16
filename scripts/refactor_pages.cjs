#!/usr/bin/env node
/**
 * Refactor pages to use PageTemplate.
 * 
 * This script handles pages with simple, unambiguous patterns:
 * - <main className="min-h-screen bg-slate-950 py-20"> wrapped in <div className="container-page">
 * - <div className="container-page py-16"> (no main wrapper)
 * 
 * It uses a tag-matching approach to find the outermost return element.
 */

const fs = require('fs');
const path = require('path');

const ROOT = process.cwd();
const APP_DIR = path.join(ROOT, 'app');
const SKIP_DIRS = new Set(['node_modules', 'components', 'data', 'lib', 'constants', 'configurator', 'public', '.next']);

function findPageFiles(dir) {
  let results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.isDirectory()) {
      if (entry.name.startsWith('.') || SKIP_DIRS.has(entry.name)) continue;
      const pageFile = path.join(dir, entry.name, 'page.tsx');
      if (fs.existsSync(pageFile)) results.push(pageFile);
      results.push(...findPageFiles(path.join(dir, entry.name)));
    }
  }
  return results.sort();
}

function categorize(filepath) {
  const rel = filepath.replace(APP_DIR + path.sep, '');
  if (rel.includes('/blog/')) return 'blog';
  if (rel.includes('/tools/')) return 'tool';
  if (rel.includes('/case-studies/')) return 'case-study';
  if (rel.includes('/portal/')) return 'portal';
  if (rel.includes('/ai/')) return 'ai';
  return 'other';
}

function hasTemplate(content) {
  return content.includes('PageTemplate') || content.includes('PageShell') || content.includes('ProductPageLayout');
}

function extractMeta(content) {
  let title = '', description = '', canonical = '';
  const metaMatch = content.match(/export const metadata\b.*?\{([\s\S]*?)\}/);
  if (metaMatch) {
    const body = metaMatch[1];
    const tm = body.match(/title\s*:\s*["']([^"']*)["']/);
    if (tm) title = tm[1];

    // Description - try template literal first
    let dm = body.match(/description\s*:\s*`([\s\S]*?)`/);
    if (!dm) dm = body.match(/description\s*:\s*"([^"]*)"/);
    if (!dm) dm = body.match(/description\s*:\s*'([^']*)'/);
    if (dm) {
      description = (dm[1] || '').replace(/\n/g, ' ').trim();
    }

    // Canonical
    const cm = body.match(/alternates\s*:\s*\{\s*canonical\s*:\s*["']([^"']*)["']/);
    if (cm) canonical = cm[1];
  }

  if (!title) {
    const h1 = content.match(/<h1[^>]*>\s*([^<\n]+)/);
    if (h1) title = h1[1].trim();
  }
  if (!title) {
    // Try function name
    const fn = content.match(/export default function\s+(\w+)/);
    if (fn) title = fn[1].replace(/([A-Z])/g, ' $1').replace(/^./, s => s.toUpperCase()).trim();
  }

  return { title, description, canonical };
}

function findMatchingCloseTag(content, openTagEnd, tagName) {
  /**
   * Find the matching closing tag for an opening tag.
   * openTagEnd is the position right after the opening tag's >
   * Returns the position of the closing </tagName>
   */
  let depth = 1;
  let pos = openTagEnd;
  const openPattern = new RegExp('<' + tagName + '(?:[\\s/>])', 'g');
  const closePattern = new RegExp('</' + tagName + '>', 'g');

  while (depth > 0) {
    const nextOpen = content.substring(pos).match(openPattern);
    const nextClose = content.substring(pos).match(closePattern);

    if (!nextClose) return -1;

    const openPos = nextOpen ? pos + nextOpen.index : Infinity;
    const closePos = pos + nextClose.index + nextClose[0].length;

    if (openPos < closePos) {
      depth++;
      pos = openPos + nextOpen[0].length;
    } else {
      depth--;
      if (depth === 0) return closePos;
      pos = closePos;
    }
  }
  return -1;
}

function findReturnElement(content) {
  /**
   * Find the outermost element in the return statement.
   * Returns { start, end, tagName, innerStart, innerEnd } or null
   */
  // Find "return (" or "return ("
  const returnMatch = content.match(/\breturn\s*\(\s*\n?\s*(<)/);
  if (!returnMatch) return null;

  const tagStart = returnMatch.index + returnMatch[0].length - 1; // Position of <
  
  // Find the tag name
  const tagMatch = content.substring(tagStart).match(/<(\w+)[\s>]/);
  if (!tagMatch) return null;

  const tagName = tagMatch[1];
  const openTagEnd = tagStart + content.substring(tagStart).indexOf('>') + 1;

  // Find matching close tag
  const closeEnd = findMatchingCloseTag(content, openTagEnd, tagName);
  if (closeEnd === -1) return null;

  // Find the start of the close tag
  const closeStart = content.lastIndexOf('</' + tagName + '>', closeEnd - 1);
  if (closeStart === -1) return null;

  // Verify this is the end of the return statement
  const afterClose = content.substring(closeEnd).trim();
  if (!afterClose.startsWith(')') && !afterClose.startsWith(');')) return null;

  return {
    returnStart: returnMatch.index,
    tagStart: tagStart,
    tagName,
    openTagEnd: openTagEnd,
    innerStart: openTagEnd,
    closeStart: closeStart,
    closeEnd: closeEnd,
    returnEnd: closeEnd + (afterClose.match(/^\)\s*;?/) ? afterClose.indexOf(')') + 1 : afterClose.length)
  };
}

function refactorPage(filepath, content) {
  if (hasTemplate(content)) return content, 'Already uses template', false;
  
  const cat = categorize(filepath);
  const meta = extractMeta(content);
  const relPath = filepath.replace(APP_DIR + path.sep, '').replace(/\\/g, '/');
  const relNoPage = relPath.replace('/page.tsx', '');

  if (!meta.canonical) meta.canonical = '/' + relNoPage + '/';
  if (!meta.title) meta.title = filepath.parent.name.replace(/-/g, ' ');
  if (!meta.description) meta.description = meta.title;

  // Clean up title (remove " | Zion Tech Group" suffix)
  let displayTitle = meta.title.replace(/\s*\|\s*Zion Tech Group\s*$/, '');

  const heroVariant = cat === 'tool' || cat === 'case-study' || cat === 'blog' ? 'none' : 'gradient';

  const element = findReturnElement(content);
  if (!element) return content, 'Could not find return element', false;

  // Extract inner content
  let innerContent = content.substring(element.innerStart, element.closeStart).trim();

  // Strip outer container-page div if it's the only child
  if (innerContent.startsWith('<div') && innerContent.endsWith('</div>')) {
    const divMatch = innerContent.match(/^<div\s[^>]*className="container-page[^"]*"[^>]*>\s*([\s\S]*)\s*<\/div>$/);
    if (divMatch) {
      innerContent = divMatch[1].trim();
    }
  }

  // Get the tag attributes from the original wrapper
  const tagAttrs = content.substring(element.tagStart, element.openTagEnd);

  // Build new content
  // 1. Content before return
  let before = content.substring(0, element.returnStart);

  // 2. Add import
  if (!before.includes('import PageTemplate')) {
    if (before.includes('"use client"') || before.includes("'use client'")) {
      before = before.replace(/(['"])use client\1;?\s*\n/, "$&\nimport PageTemplate from '@/components/PageTemplate';\n");
    } else {
      // Add after last import
      const lines = before.split('\n');
      for (let i = lines.length - 1; i >= 0; i--) {
        if (lines[i].trim().startsWith('import ')) {
          lines.splice(i + 1, 0, "import PageTemplate from '@/components/PageTemplate';");
          break;
        }
      }
      before = lines.join('\n');
    }
  }

  // 3. Content after return (should be just closing })
  let after = content.substring(element.returnEnd).trim();

  // 4. Build new return with PageTemplate
  const titleJson = JSON.stringify(displayTitle);
  const descJson = JSON.stringify(meta.description);
  const canonJson = JSON.stringify(meta.canonical);

  const breadcrumbItems = `[{ label: 'Home', href: '/' }, { label: ${titleJson} }]`;

  const newReturn = `return (
    <PageTemplate
      title=${titleJson}
      description=${descJson}
      canonical=${canonJson}
      hero={{ variant: '${heroVariant}' }}
      breadcrumbItems={${breadcrumbItems}}
    >
      ${innerContent}
    </PageTemplate>
  );`;

  const newContent = before + '\n\n' + newReturn + '\n' + after;

  return newContent, `Refactored (${cat}, hero: ${heroVariant})`, true;
}

function main() {
  const args = process.argv.slice(2);
  const dryRun = args.includes('--dry-run');
  let catFilter = 'all';
  for (let i = 0; i < args.length; i++) {
    if (args[i].startsWith('--category=')) catFilter = args[i].split('=')[1];
    else if (args[i] === '--all') catFilter = 'all';
  }

  const files = findPageFiles(APP_DIR);
  const toProcess = [];
  for (const f of files) {
    const content = fs.readFileSync(f, 'utf8');
    if (hasTemplate(content)) continue;
    const cat = categorize(f);
    if (catFilter !== 'all' && cat !== catFilter) continue;
    
    // Only process pages with specific patterns
    if (/return\s*\(\s*\n?\s*<main\s+className="min-h-screen[^"]*>/g.test(content) ||
        /return\s*\(\s*\n?\s*<div\s+className="container-page/g.test(content)) {
      toProcess.push(f);
    }
  }

  console.log(`Found ${toProcess.length} pages to refactor (category: ${catFilter}, dry_run: ${dryRun})`);

  let success = 0;
  for (const f of toProcess) {
    const content = fs.readFileSync(f, 'utf8');
    const [newContent, msg, changed] = refactorPage(f, content);
    if (changed) {
      success++;
      if (!dryRun) fs.writeFileSync(f, newContent);
      console.log(`  ✓ ${path.relative(ROOT, f)} - ${msg}`);
    } else {
      console.log(`  ✗ ${path.relative(ROOT, f)} - ${msg}`);
    }
  }

  const suffix = dryRun ? ' would be' : '';
  console.log(`\nDone: ${success}/${toProcess.length} files${suffix} refactored`);
}

main();
