import React from 'react';
import Head from 'next/head';
import Link from 'next/link';

const docs = [
  { slug: 'README', title: 'Project Overview' },
  { slug: 'ARCHITECTURE', title: 'Architecture' },
  { slug: 'API', title: 'API Documentation' },
  { slug: 'CONTRIBUTING', title: 'Contributing Guide' },
  { slug: 'DEPLOYMENT', title: 'Deployment Guide' },
  { slug: 'SECURITY', title: 'Security Guide' },
  { slug: 'TESTING', title: 'Testing Guide' },
  { slug: 'README_GITHUB_ACTIONS', title: 'GitHub Actions' },
  { slug: 'SERVICE_GENERATION_README', title: 'Service Generation' },
  { slug: 'README_COMPREHENSIVE_REDUNDANCY', title: 'Comprehensive Redundancy' },
  { slug: 'README_ULTIMATE_REDUNDANCY', title: 'Ultimate Redundancy' },
  { slug: 'README_PM2_REDUNDANCY_COMPLETE', title: 'PM2 Orchestration' },
  { slug: 'performance-weekly-report', title: 'Performance Weekly Report' },
  { slug: 'content-generation-report', title: 'Content Generation Report' }
];

export default function DocsIndex() {
  return (
    <>
      <Head>
        <title>Docs | Zion Tech Group</title>
        <meta name="description" content="Documentation and guides for Zion Tech Group platform." />
      </Head>
      <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-950 text-white">
        <main className="container mx-auto px-6 py-12">
          <nav className="mb-8">
            <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition-colors">← Back to Home</Link>
          </nav>
          <header className="text-center mb-12">
            <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">Documentation</h1>
            <p className="text-white/80 max-w-2xl mx-auto">Explore our technical documentation, architecture, APIs, deployment and security guides.</p>
          </header>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {docs.map((d) => (
              <Link key={d.slug} href={`/docs/${d.slug}`} className="group bg-white/10 backdrop-blur-xl rounded-xl p-6 border border-white/20 hover:border-cyan-400/30 transition-all duration-300">
                <h3 className="text-lg font-semibold text-cyan-400 mb-2 group-hover:translate-x-0.5 transition-transform">{d.title}</h3>
                <div className="text-sm text-white/70">Open →</div>
              </Link>
            ))}
          </div>
        </main>
      </div>
    </>
  );
}

