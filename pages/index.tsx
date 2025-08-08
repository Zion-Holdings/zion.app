import React from 'react';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import EnhancedLayout from '../components/layout/EnhancedLayout';

export type IndexPageProps = {
  routes: string[];
};

function isPageFile(fileName: string): boolean {
  return fileName.endsWith('.tsx') || fileName.endsWith('.jsx');
}

function toRoutePath(filePath: string): string | null {
  // Normalize path from pages/...
  const rel = filePath.replace(/\\/g, '/');
  if (rel.startsWith('api/')) return null;
  const base = rel.replace(/\.(tsx|jsx)$/i, '');
  if (base === 'index') return '/';
  if (base === '_app' || base === '_document' || base === '404') return null;
  // Skip dynamic routes with brackets for this list
  if (base.includes('[')) return null;
  // Convert directory index like blog/index -> /blog
  return '/' + base.replace(/\/index$/, '');
}

function walkPagesDir(dir: string, acc: string[] = [], root = dir): string[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  for (const entry of entries) {
    if (entry.name.startsWith('.')) continue;
    const full = path.join(dir, entry.name);
    const relFromPages = path.relative(root, full);
    if (entry.isDirectory()) {
      if (entry.name === 'api') continue;
      walkPagesDir(full, acc, root);
    } else if (entry.isFile() && isPageFile(entry.name)) {
      const route = toRoutePath(relFromPages);
      if (route && route !== '/') acc.push(route);
    }
  }
  return acc;
}

export async function getStaticProps() {
  const pagesDir = path.join(process.cwd(), 'pages');
  let routes: string[] = [];
  try {
    routes = walkPagesDir(pagesDir);
  } catch (e) {
    routes = [];
  }
  routes = Array.from(new Set(routes)).sort((a, b) => a.localeCompare(b));
  return { props: { routes } };
}

export default function HomeIndex({ routes }: IndexPageProps) {
  return (
    <EnhancedLayout>
      <div className="space-y-10">
        {/* Hero */}
        <section className="rounded-2xl p-8 bg-gradient-to-r from-neon-blue to-neon-purple text-black dark:text-white">
          <h1 className="text-3xl md:text-4xl font-bold">Zion AI Marketplace</h1>
          <p className="mt-2 text-sm md:text-base opacity-90">Discover expert talent, post jobs, and hire faster with AI-powered matching.</p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link href="/dashboard/client"><a className="px-4 py-2 rounded-lg bg-white/90 text-black text-sm font-medium">Post a job</a></Link>
            <Link href="/dashboard/talent"><a className="px-4 py-2 rounded-lg border border-white/60 text-white text-sm font-medium">Find work</a></Link>
          </div>
        </section>

        {/* Advertisements / Promotions */}
        <section>
          <h2 className="text-xl font-semibold mb-4">Sponsored</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white/70 dark:bg-black/40">
              <div className="text-sm uppercase tracking-wide opacity-70">Ad</div>
              <h3 className="mt-2 font-semibold">Boost your profile</h3>
              <p className="mt-1 text-sm opacity-80">Get featured to clients searching for your skills.</p>
              <Link href="/pricing"><a className="mt-3 inline-block text-sm px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700">Upgrade</a></Link>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white/70 dark:bg-black/40">
              <div className="text-sm uppercase tracking-wide opacity-70">Ad</div>
              <h3 className="mt-2 font-semibold">Instant talent invites</h3>
              <p className="mt-1 text-sm opacity-80">Invite curated experts and receive quotes in hours.</p>
              <Link href="/dashboard/client"><a className="mt-3 inline-block text-sm px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700">Start hiring</a></Link>
            </div>
            <div className="rounded-xl border border-gray-200 dark:border-gray-800 p-5 bg-white/70 dark:bg-black/40">
              <div className="text-sm uppercase tracking-wide opacity-70">Ad</div>
              <h3 className="mt-2 font-semibold">AI skills verification</h3>
              <p className="mt-1 text-sm opacity-80">Stand out with verified skills and badges.</p>
              <Link href="/verification"><a className="mt-3 inline-block text-sm px-3 py-1.5 rounded-md border border-gray-300 dark:border-gray-700">Verify now</a></Link>
            </div>
          </div>
        </section>

        {/* Links to all pages */}
        <section>
          <h2 className="text-xl font-semibold mb-4">All Pages</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            <Link href="/"><a className="text-sm underline">/</a></Link>
            {routes.map((route) => (
              <Link key={route} href={route}>
                <a className="text-sm underline break-all">{route}</a>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </EnhancedLayout>
  );
}