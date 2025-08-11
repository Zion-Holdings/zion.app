#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const WORKSPACE = path.resolve(__dirname, '..');
const PAGES_DIR = path.join(WORKSPACE, 'pages');
const REPORT_LATEST = path.join(WORKSPACE, 'data', 'reports', 'internal-links', 'latest.json');

function ensureDir(dir) { fs.mkdirSync(dir, { recursive: true }); }
function writeFileIfMissing(filePath, content) {
  try { fs.accessSync(filePath, fs.constants.F_OK); return false; } catch {}
  ensureDir(path.dirname(filePath));
  fs.writeFileSync(filePath, content);
  return true;
}

function createFuturisticPage({ title, description, body, breadcrumbs = [] }) {
  return `import Head from 'next/head';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Head>
        <title>${title}</title>
        <meta name="description" content="${description}" />
      </Head>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />
        <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"><div className="twinkle-field absolute inset-0" /></div>
      </div>
      <header className="relative z-10">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
          <div className="text-2xl font-bold tracking-wide"><span className="bg-gradient-to-r from-fuchsia-400 via-violet-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-neon">Zion</span></div>
          <div className="hidden gap-6 md:flex text-white/80">
            <Link href="/"><a>Home</a></Link>
            <Link href="/automation"><a>Automations</a></Link>
            <Link href="/site-health"><a>Site Health</a></Link>
          </div>
        </nav>
      </header>
      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-6 pt-10 pb-16 md:pt-16 md:pb-20 text-center">
          <h1 className="mt-2 text-5xl font-extrabold leading-[1.05] tracking-tight md:text-6xl"><span className="gradient-text">${title}</span></h1>
          <p className="mx-auto mt-4 max-w-3xl text-lg text-white/80">${description}</p>
        </section>
        ${body}
      </main>
    </div>
  );
}
`;
}

function main() {
  let report;
  try { report = JSON.parse(fs.readFileSync(REPORT_LATEST, 'utf8')); }
  catch {
    console.error('No internal links report found. Run internal-link-crawler first.');
    process.exit(0);
  }

  let created = 0;

  // Ensure /services index and dynamic pages to avoid 404s for deep links
  created += writeFileIfMissing(
    path.join(PAGES_DIR, 'services', 'index.tsx'),
    createFuturisticPage({
      title: 'Services — Autonomous Solutions',
      description: 'Explore autonomous services and accelerators powered by Zion.',
      body: `<section className="mx-auto max-w-7xl px-6 pb-16">
  <h2 className="text-center text-2xl font-bold tracking-wide text-white/90">Popular Services</h2>
  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
    {[
      { href: '/services/ai-seo-auditor', title: 'AI SEO Auditor' },
      { href: '/services/customer-support-chatbot', title: 'Customer Support Chatbot' },
      { href: '/services/landing-page-generator', title: 'Landing Page Generator' },
      { href: '/services/price-intelligence-service', title: 'Price Intelligence' },
    ].map((s) => (
      <Link key={s.href} href={s.href}><a className="group rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur-md hover:border-cyan-400/30"><div className="text-lg font-semibold">{s.title}</div><div className="mt-1 text-sm text-white/70">Open →</div></a></Link>
    ))}
  </div>
</section>`
    })
  ) ? 1 : 0;

  created += writeFileIfMissing(
    path.join(PAGES_DIR, 'services', '[slug].tsx'),
    `import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ServiceDetail() {
  const { query } = useRouter();
  const slug = String(query.slug || '').replace(/-/g, ' ').replace(/\b\w/g, (m) => m.toUpperCase());
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <Head>
        <title>{slug ? slug + ' — Service' : 'Service'}</title>
        <meta name="description" content="Autonomous service page" />
      </Head>
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -top-24 -left-24 h-[38rem] w-[38rem] rounded-full bg-fuchsia-500/20 blur-3xl animate-float" />
        <div className="absolute top-1/4 -right-32 h-[30rem] w-[30rem] rounded-full bg-cyan-400/20 blur-3xl animate-float-slow" />
        <div className="absolute bottom-0 left-1/4 h-[26rem] w-[26rem] rounded-full bg-violet-400/10 blur-2xl animate-float-fast" />
        <div className="absolute inset-0 opacity-[0.08] [background:radial-gradient(circle_at_center,rgba(255,255,255,0.35)_0,rgba(255,255,255,0)_60%),linear-gradient(90deg,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(0deg,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:100%_100%,3rem_3rem,3rem_3rem] animate-grid" />
      </div>
      <main className="relative z-10">
        <section className="mx-auto max-w-7xl px-6 pt-12 pb-20 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight"><span className="gradient-text">{slug || 'Service'}</span></h1>
          <p className="mx-auto mt-4 max-w-2xl text-white/80">This is a generated, futuristic placeholder. Content will be auto-enriched by our automations.</p>
          <div className="mt-6"><Link href="/services"><a className="rounded-xl border border-white/20 bg-white/5 px-6 py-3 font-semibold backdrop-blur-md hover:bg-white/10">Back to Services</a></Link></div>
        </section>
      </main>
    </div>
  );
}
`
  ) ? 1 : 0;

  // Ensure /products index
  created += writeFileIfMissing(
    path.join(PAGES_DIR, 'products', 'index.tsx'),
    createFuturisticPage({
      title: 'Products — Intelligent Tools',
      description: 'A showcase of intelligent, autonomous products and toolkits.',
      body: `<section className="mx-auto max-w-7xl px-6 pb-20">
  <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
    {[{title:'Automation Dashboard',href:'/automation'},{title:'Site Health',href:'/site-health'},{title:'AI Trends',href:'/reports/ai-trends'}].map((p)=> (
      <Link key={p.title} href={p.href}><a className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl hover:border-cyan-400/30"><div className="text-lg font-semibold">{p.title}</div><div className="mt-1 text-sm text-white/75">Open →</div></a></Link>
    ))}
  </div>
</section>`
    })
  ) ? 1 : 0;

  // Ensure /contact page
  created += writeFileIfMissing(
    path.join(PAGES_DIR, 'contact.tsx'),
    createFuturisticPage({
      title: 'Contact — Let\'s Collaborate',
      description: 'Reach out to discuss your autonomous roadmap and use‑cases.',
      body: `<section className="mx-auto max-w-2xl px-6 pb-24">
  <form className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl space-y-4">
    <input placeholder="Name" className="w-full rounded-lg bg-black/20 border border-white/10 p-3 outline-none focus:border-cyan-400/40"/>
    <input placeholder="Email" type="email" className="w-full rounded-lg bg-black/20 border border-white/10 p-3 outline-none focus:border-cyan-400/40"/>
    <textarea placeholder="How can we help?" rows="5" className="w-full rounded-lg bg-black/20 border border-white/10 p-3 outline-none focus:border-cyan-400/40"/>
    <button type="button" className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-500 px-6 py-3 font-semibold">Send</button>
  </form>
</section>`
    })
  ) ? 1 : 0;

  // Create generic placeholders for any remaining missing internal routes
  if (Array.isArray(report.missing)) {
    for (const route of report.missing) {
      const parts = route.split('/').filter(Boolean);
      const dir = path.join(PAGES_DIR, ...parts);
      const file = path.join(dir, 'index.tsx');
      const title = parts.length ? parts.map(p => p.replace(/-/g,' ')).map(s => s.charAt(0).toUpperCase()+s.slice(1)).join(' / ') : 'Home';
      const description = `Autogenerated placeholder for ${route} — content will be enhanced by automations.`;
      const body = `<section className="mx-auto max-w-3xl px-6 pb-24 text-center"><p className="text-white/75">This page was created automatically to repair a broken internal link.</p></section>`;
      const createdNow = writeFileIfMissing(file, createFuturisticPage({ title: `${title}`, description, body }));
      if (createdNow) created += 1;
    }
  }

  // Normalize previously generated files with escaped JSX quotes
  const pagesToScan = [];
  (function walk(dir){
    try {
      for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
        const full = path.join(dir, e.name);
        if (e.isDirectory()) walk(full);
        else if (e.isFile() && /\.(tsx|jsx)$/.test(e.name)) pagesToScan.push(full);
      }
    } catch {}
  })(PAGES_DIR);
  let normalized = 0;
  for (const f of pagesToScan) {
    try {
      const src = fs.readFileSync(f, 'utf8');
      if (src.includes('className\\"') || src.includes('rows=\\"')) {
        const fixed = src.replace(/className\\\"/g, 'className="').replace(/rows=\\\"/g, 'rows="');
        fs.writeFileSync(f, fixed);
        normalized += 1;
      }
    } catch {}
  }
  if (normalized) console.log(`Normalized ${normalized} page files with escaped JSX quotes.`);

  console.log(`Internal link fixer completed. Files created: ${created}`);
}

main();