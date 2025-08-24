#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const ACTIONS_PATH = path.join(__dirname, '..', 'data', 'reports', 'spec-dev', 'spec-dev-actions.json');
const CHAT_CONTENT_DIR = path.join(__dirname, '..', 'pages', 'chat-content');

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

function slugify(text, fallbackPrefix = 'item', maxLen = 64) {
  const base = (text || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-');
  let slug = base.slice(0, maxLen).replace(/^-+|-+$/g, '');
  if (!slug) slug = `${fallbackPrefix}-${Date.now()}`;
  return slug;
}

function pickActionablePrompts(data) {
  const prompts = Array.isArray(data?.prompts) ? data.prompts : [];
  const actions = Array.isArray(data?.actions) ? data.actions : [];
  const fromActions = actions
    .filter(a => a && a.type === 'dev_task' && typeof a.prompt === 'string')
    .map(a => a.prompt);
  const all = [...prompts, ...fromActions]
    .filter(Boolean)
    .map(s => String(s).trim())
    .filter(s => s.length >= 24 && s.length <= 400)
    .filter(s => /(create|build|add|implement|update|improve|page|feature|component)/i.test(s));
  // Deduplicate while preserving order
  const seen = new Set();
  const unique = [];
  for (const s of all) {
    const key = s.toLowerCase();
    if (!seen.has(key)) { seen.add(key); unique.push(s); }
  }
  return unique.slice(0, 12);
}

function makePageSource(title, body) {
  // A minimal Next.js page with nice layout
  return `import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

interface Props { }

const Page: NextPage<Props> = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
      <Head>
        <title>${title.replace(/[`$]/g, '')} — Chat Content</title>
        <meta name="description" content="Auto-generated content page from spec-dev actions." />
      </Head>
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-3xl mx-auto space-y-6">
          <h1 className="text-3xl font-bold">${title.replace(/[`$]/g, '')}</h1>
          <div className="prose prose-invert">
            <p>${body.replace(/[`$]/g, '').replace(/\n/g, ' ')}</p>
          </div>
          <Link href="/chat-content"><a className="inline-block mt-4 text-cyan-300 hover:text-cyan-200">← Back to Chat Content</a></Link>
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  return { props: {} };
};

export default Page;
`;
}

function makeIndexSource(entries) {
  // entries: Array<{ slug, title }>
  const items = entries.map(e => ({ slug: e.slug, title: e.title })).slice(0, 200);
  const itemsLiteral = JSON.stringify(items);
  return `import type { NextPage, GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';

interface Entry { slug: string; title: string; }
interface Props { entries: Entry[] }

const ChatContentIndex: NextPage<Props> = ({ entries }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
      <Head>
        <title>Chat Content — Generated</title>
        <meta name="description" content="Auto-generated content pages from spec-dev prompts." />
      </Head>
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold mb-6">Chat Content</h1>
          <p className="text-white/80 mb-8">Pages generated from the shared discussion to capture requested features and ideas.</p>
          <ul className="grid md:grid-cols-2 gap-4">
            {entries.map(e => (
              <li key={e.slug} className="bg-white/10 rounded-xl p-4 border border-white/10 hover:border-cyan-400/30 transition">
                <Link href={'/chat-content/' + e.slug}>
                  <a className="text-cyan-300 hover:text-cyan-200 font-medium">{e.title}</a>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </main>
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  // Inline manifest baked at build time by executor
  const entries: Entry[] = ${itemsLiteral};
  return { props: { entries } };
};

export default ChatContentIndex;
`;
}

function main() {
  if (!fs.existsSync(ACTIONS_PATH)) {
    console.error('No spec-dev actions found at', ACTIONS_PATH);
    process.exit(1);
  }
  const raw = fs.readFileSync(ACTIONS_PATH, 'utf8');
  let data;
  try {
    data = JSON.parse(raw);
  } catch (e) {
    console.error('Failed to parse spec-dev actions JSON:', e.message);
    process.exit(1);
  }

  const prompts = pickActionablePrompts(data);
  if (prompts.length === 0) {
    console.log('No actionable prompts found. Exiting.');
    return;
  }

  ensureDir(CHAT_CONTENT_DIR);

  const created = [];
  for (const prompt of prompts) {
    const title = prompt.length > 80 ? prompt.slice(0, 77) + '…' : prompt;
    const slug = slugify(title, 'content');
    const fp = path.join(CHAT_CONTENT_DIR, `${slug}.tsx`);
    if (!fs.existsSync(fp)) {
      fs.writeFileSync(fp, makePageSource(title, prompt), 'utf8');
      created.push({ slug, title, file: fp });
    }
  }

  // Build an index that lists both existing and newly created pages
  const allSlugs = new Set();
  const entries = [];

  for (const file of fs.readdirSync(CHAT_CONTENT_DIR)) {
    if (!file.endsWith('.tsx')) continue;
    if (file === 'index.tsx') continue;
    const slug = file.replace(/\.tsx$/, '');
    if (allSlugs.has(slug)) continue;
    allSlugs.add(slug);
    // Try to infer title from file content first line <title>
    const fp = path.join(CHAT_CONTENT_DIR, file);
    let title = slug.replace(/-/g, ' ');
    try {
      const src = fs.readFileSync(fp, 'utf8');
      const m = src.match(/<title>([^<]+)<\/title>/);
      if (m) title = m[1].replace(/ — Chat Content$/, '');
    } catch {}
    entries.push({ slug, title });
  }

  const indexPath = path.join(CHAT_CONTENT_DIR, 'index.tsx');
  fs.writeFileSync(indexPath, makeIndexSource(entries), 'utf8');

  console.log(`Spec-dev executor: created ${created.length} page(s). Index updated with ${entries.length} entries.`);
}

main();