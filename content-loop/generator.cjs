#!/usr/bin/env node
/**
 * content-loop/generator.cjs - site-growing content loop
 * Generates actual Next.js pages and markdown assets.
 */
const fs = require('fs');
const path = require('path');

const POSTS_DIR = path.join(process.cwd(), 'app', 'blog');
const SERVICES_DIR = path.join(process.cwd(), 'app', 'services');
const ASSETS_DIR = path.join(process.cwd(), 'content', 'assets');
const QUEUE_FILE = path.join(process.cwd(), 'content', 'queue.md');
const TOPICS_FILE = path.join(process.cwd(), 'content-loop', 'topics.json');

function ensureDir(dir) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

function loadQueue() {
  try {
    const txt = fs.readFileSync(QUEUE_FILE, 'utf8');
    const m = txt.match(/Last cycle:\s*(\d+)/i);
    return m ? parseInt(m[1], 10) : 0;
  } catch {
    return 0;
  }
}

function saveQueue(cycle) {
  ensureDir(path.dirname(QUEUE_FILE));
  fs.writeFileSync(QUEUE_FILE, `# Content Queue\n\nLast cycle: ${cycle}\nNext slug prefix: ${cycle + 1}\nSeeds ready: ${topics.length}\n`);
}

function loadTopics() {
  try {
    return JSON.parse(fs.readFileSync(TOPICS_FILE, 'utf8'));
  } catch {
    return [
      { title: 'AI IT Operations', slug: 'ai-it-operations-automation-2026' },
      { title: 'Cloud Cost Optimization', slug: 'cloud-cost-optimization-checklist-2026' },
      { title: 'Cybersecurity for MSPs', slug: 'cybersecurity-platform-msp-2026' },
      { title: 'Managed IT Services', slug: 'managed-it-services-small-business-2026' },
      { title: 'Data Analytics Platform', slug: 'data-analytics-platform-modern-enterprise-2026' },
      { title: 'Automation Orchestration', slug: 'automation-orchestration-enterprise-2026' }
    ];
  }
}

const topics = loadTopics();
let cycle = loadQueue();

function blogPostPage(topic, n) {
  const slug = `${topic.slug}-${n}`;
  const title = topic.title;
  return `import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import PageShell from '@/components/PageShell';

export const metadata = {
  title: '${title} | Zion Tech Group',
  description: 'Practical guide to ${title.toLowerCase()}: frameworks, metrics, and rollout playbook.',
  alternates: { canonical: '/blog/${slug}/' },
  openGraph: { title: '${title}', description: 'Practical guide to ${title.toLowerCase()}.', url: 'https://ziontechgroup.com/blog/${slug}/', type: 'article' },
  twitter: { card: 'summary_large_image', title: '${title}', description: 'Practical guide to ${title.toLowerCase()}.' }
};

export default function Page() {
  return (
    <PageShell title="${title}" description="Practical guide to ${title.toLowerCase()}: frameworks, metrics, and rollout playbook." canonical="https://ziontechgroup.com/blog/${slug}/" jsonLd={{
      '@context':'https://schema.org',
      '@type':'BlogPosting',
      headline: '${title}',
      description: 'Practical guide to ${title.toLowerCase()}: frameworks, metrics, and rollout playbook.',
      author: { '@type':'Organization', name: 'Zion Tech Group' },
      publisher: { '@type':'Organization', name: 'Zion Tech Group', url: 'https://ziontechgroup.com' },
      mainEntityOfPage: 'https://ziontechgroup.com/blog/${slug}/'
    }}>
      <article className="max-w-3xl mx-auto space-y-6 text-slate-300">
        <p>${title} is moving from experiment to operating layer. Most programs fail because they optimize for demos instead of outcomes.</p>
        <h2>What works</h2>
        <ul>
          <li>Start with low-risk, high-value workflows</li>
          <li>Use production data, not synthetic demos</li>
          <li>Create operator runbooks and escalation paths</li>
          <li>Review model behavior weekly</li>
        </ul>
        <h2>Outcome</h2>
        <p>With strong governance, ${title.toLowerCase()} becomes reliable infrastructure.</p>
        <p><Link href="/contact" className="text-purple-400 hover:underline">Talk to Zion Tech Group →</Link></p>
      </article>
    </PageShell>
  );
}
`;
}

function servicePage(topic, n) {
  const slug = `${topic.slug}-${n}`;
  const title = topic.title;
  return `import Link from 'next/link';

export const metadata = {
  title: '${title} | Zion Tech Group',
  description: 'End-to-end ${title.toLowerCase()} services: assessment, deployment, and managed operations.',
  alternates: { canonical: '/services/${slug}/' },
};

export default function ServicePage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-4xl font-bold text-white mb-4">${title}</h1>
        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl mb-10">
          End-to-end ${title.toLowerCase()} services: assessment, deployment, and managed operations.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { title: 'Implementation', href: '/contact', desc: 'Production-ready deployment with governance.' },
            { title: 'Managed Support', href: '/contact', desc: '24/7 monitoring and incident response.' },
            { title: 'Automation', href: '/contact', desc: 'Workflow automation with measurable outcomes.' }
          ].map((item) => (
            <Link key={item.href} href={item.href} className="glass-card p-6 block hover:border-purple-500/40 transition-colors">
              <h2 className="text-white font-semibold mb-2">{item.title}</h2>
              <p className="text-slate-300 text-sm leading-relaxed">{item.desc}</p>
              <span className="text-purple-400 text-sm mt-4 inline-block">Contact us →</span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
`;
}

function assetBundle(topic, n) {
  const slug = `${topic.slug}-${n}`;
  const title = topic.title;
  return `# ${title} - assets cycle ${n}

## Social carousel
1) Hook: "Most ${title} programs stall after pilot."
2) Problem: unclear ownership, weak guardrails
3) Framework: low-risk first, production data first
4) Metric: map automation to revenue/cost/time
5) CTA: "Get the Zion Tech Group checklist"

## Email/WhatsApp copy
Subject: ${title} - a practical path from pilot to production
Body:
- Pain opener
- 3-step framework
- Expected outcome
- Clear next step

## Hashtags
#AI #IT #Cloud #Security #Automation #MSP #DevOps #SaaS #DigitalTransformation #EnterpriseIT #${title.replace(/[^a-zA-Z0-9]+/g, '')}

## Image prompts
1) Photorealistic hero image for ${title}: modern data center with purple/fuchsia accent lighting, clean, high contrast
2) Abstract icon set for ${title}: 4 minimalist icons on dark background, purple/pink gradient accents
3) Executive summary infographic for ${title}: 3-step framework, professional, dark theme
`;
}

function runCycle() {
  const topic = topics[cycle % topics.length];
  const n = cycle + 1;
  const blogSlug = `${topic.slug}-${n}`;
  const svcSlug = `${topic.slug}-${n}`;

  ensureDir(path.join(POSTS_DIR, blogSlug));
  ensureDir(path.join(SERVICES_DIR, svcSlug));
  ensureDir(ASSETS_DIR);

  fs.writeFileSync(path.join(POSTS_DIR, blogSlug, 'page.tsx'), blogPostPage(topic, n));
  fs.writeFileSync(path.join(SERVICES_DIR, svcSlug, 'page.tsx'), servicePage(topic, n));
  fs.writeFileSync(path.join(ASSETS_DIR, `cycle-${n}-${blogSlug}.md`), assetBundle(topic, n));

  saveQueue(n);
  cycle = n;
  console.log(`content loop: cycle ${n} -> blog/${blogSlug}, services/${svcSlug}`);
}

const CYCLES_PER_RUN = 50;
for (let i = 0; i < CYCLES_PER_RUN; i++) {
  runCycle();
}
