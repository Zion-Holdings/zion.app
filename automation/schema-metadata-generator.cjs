#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function readFile(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    return null;
  }
}

function writeFile(filePath, content) {
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content, 'utf8');
}

function insertJsonLdIntoIndex(indexContent, schemaObject) {
  const hasJsonLd = /application\/ld\+json/.test(indexContent);
  if (hasJsonLd) return { content: indexContent, changed: false, reason: 'JSON-LD already present' };

  const headOpenIdx = indexContent.indexOf('<Head>');
  const headCloseIdx = indexContent.indexOf('</Head>');
  if (headOpenIdx !== -1 && headCloseIdx !== -1 && headCloseIdx > headOpenIdx) {
    const injection = "\n        <script type=\"application/ld+json\" dangerouslySetInnerHTML={{ __html: JSON.stringify(" + JSON.stringify(schemaObject) + ") }} />\n";
    const updated = indexContent.slice(0, headCloseIdx) + injection + indexContent.slice(headCloseIdx);
    return { content: updated, changed: true, reason: 'Inserted JSON-LD into <Head>' };
  }
  return { content: indexContent, changed: false, reason: 'No <Head> found; skipped code edit' };
}

function main() {
  const repoRoot = '/workspace';
  const indexPath = path.join(repoRoot, 'pages', 'index.tsx');
  const reportDir = path.join(repoRoot, 'public', 'reports');
  const reportPath = path.join(reportDir, 'schema-metadata.txt');
  const schemaDir = path.join(repoRoot, 'public', 'schema');
  const schemaFile = path.join(schemaDir, 'website.json');

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Zion — Autonomous Cloud Automations',
    url: 'https://zion.app',
    potentialAction: {
      '@type': 'SearchAction',
      target: 'https://zion.app/search?q={search_term_string}',
      'query-input': 'required name=search_term_string'
    }
  };

  ensureDir(schemaDir);
  writeFile(schemaFile, JSON.stringify(schema, null, 2));

  let indexContent = readFile(indexPath);
  let message = [];
  if (indexContent) {
    const { content, changed, reason } = insertJsonLdIntoIndex(indexContent, schema);
    if (changed) {
      writeFile(indexPath, content);
      message.push('- Inserted JSON-LD into pages/index.tsx');
    } else {
      message.push(`- Skipped index.tsx edit: ${reason}`);
    }
  } else {
    message.push('- pages/index.tsx not found; skipped code edit');
  }

  ensureDir(reportDir);
  const report = [
    'Schema Metadata Generator Report',
    `Date: ${new Date().toISOString()}`,
    '',
    '- Ensured public/schema/website.json exists',
    ...message,
    ''
  ].join('\n');
  writeFile(reportPath, report);

  console.log('Schema metadata generation complete.');
}

if (require.main === module) {
  main();
}