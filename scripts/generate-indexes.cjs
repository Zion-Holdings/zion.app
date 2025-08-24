#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const glob = require('glob');

function pascalToWords(str) {
  return str
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/[-_]+/g, ' ')
    .replace(/\s+/g, ' ')
    .trim()
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function kebabToTitle(slug) {
  const cleaned = slug.replace(/\.(t|j)sx?$/, '').replace(/index$/, '').replace(/^\//, '');
  return cleaned
    .split('/')
    .pop()
    .replace(/-/g, ' ')
    .replace(/\b\w/g, (m) => m.toUpperCase());
}

function extractTitleFromFile(filePath) {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    const titleMatch = content.match(/<title>([^<]+)<\/title>/i);
    if (titleMatch && titleMatch[1]) return titleMatch[1].replace(/\s*-\s*Zion Tech Solutions\s*$/i, '').trim();
    const compMatch = content.match(/const\s+([A-Z][A-Za-z0-9_]*)\s*:/);
    if (compMatch && compMatch[1]) return pascalToWords(compMatch[1]);
  } catch {}
  return null;
}

function writeFileIfChanged(targetPath, newContent) {
  const prev = fs.existsSync(targetPath) ? fs.readFileSync(targetPath, 'utf8') : '';
  if (prev.trim() !== newContent.trim()) {
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });
    fs.writeFileSync(targetPath, newContent);
    console.log(`Updated ${path.relative(process.cwd(), targetPath)}`);
  } else {
    console.log(`No changes for ${path.relative(process.cwd(), targetPath)}`);
  }
}

function generateIndexPage({ title, description, items, baseHref, extraIntro }) {
  const listItems = items
    .map(({ href, text }) => `          <li><Link href="${href}"><a>${text}</a></Link></li>`) // Next 11 Link with <a>
    .join('\n');

  return `import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';

const Index: NextPage = () => {
  return (
    <div>
      <Head>
        <title>${title} - Zion Tech Solutions</title>
        <meta name="description" content="${description}" />
      </Head>
      <main>
        <h1>${title}</h1>
        ${extraIntro ? `<p>${extraIntro}</p>` : ''}
        <ul>
${listItems}
        </ul>
      </main>
    </div>
  );
};

export default Index;
`;}

function buildBlogIndex() {
  const blogDir = path.join(process.cwd(), 'pages', 'blog');
  const files = glob.sync('pages/blog/*.tsx', { ignore: ['pages/blog/index.tsx'] });
  const items = files
    .map((fp) => {
      const slug = '/' + path.relative(path.join(process.cwd(), 'pages'), fp).replace(/\\/g, '/').replace(/\.(t|j)sx?$/, '');
      const href = slug.replace(/^\/pages/, '');
      const title = extractTitleFromFile(fp) || kebabToTitle(fp);
      return { href: href.replace(/^\/pages/, ''), text: title };
    })
    .sort((a, b) => a.text.localeCompare(b.text));

  const content = generateIndexPage({
    title: 'Blog',
    description: 'Latest articles and insights from Zion Tech Solutions',
    items,
    baseHref: '/blog',
    extraIntro: 'Browse our latest posts:'
  });
  writeFileIfChanged(path.join(blogDir, 'index.tsx'), content);
}

function buildServicesIndex() {
  const servicesDir = path.join(process.cwd(), 'pages', 'services');
  const files = glob.sync('pages/services/*.tsx', { ignore: ['pages/services/index.tsx'] });
  const items = files
    .map((fp) => {
      const slug = '/' + path.relative(path.join(process.cwd(), 'pages'), fp).replace(/\\/g, '/').replace(/\.(t|j)sx?$/, '');
      const href = slug.replace(/^\/pages/, '');
      const title = extractTitleFromFile(fp) || kebabToTitle(fp);
      return { href, text: title };
    })
    .sort((a, b) => a.text.localeCompare(b.text));

  const content = generateIndexPage({
    title: 'Services',
    description: 'Explore the services we offer',
    items,
    baseHref: '/services',
    extraIntro: 'Our service offerings:'
  });
  writeFileIfChanged(path.join(servicesDir, 'index.tsx'), content);
}

function main() {
  buildBlogIndex();
  buildServicesIndex();
}

main();