'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Press — Zion Tech Group',
  description: 'Latest press releases and media coverage for Zion Tech Group. Enterprise AI, IT, and automation news.',
  alternates: { canonical: '/press/' },
};

const ARTICLES = [
  { date: '2025-05-20', title: 'Zion Tech Group Launches Enterprise AI Compliance Platform', outlet: 'TechCrunch' },
  { date: '2025-04-15', title: 'AI Copilot Framework Open-Sourced Under MIT License', outlet: 'GitHub Blog' },
  { date: '2025-03-01', title: 'Zion Wins IT Excellence Award for Cloud Automation Suite', outlet: 'Silicon Review' },
];

export default function PressPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="py-20">
        <div className="container-page">
          <div className="mb-10">
            <Link href="/about/" className="text-purple-400 hover:text-purple-300 text-sm mb-6 inline-block">← About</Link>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Press & Media</h1>
            <p className="text-slate-400 text-lg">Latest news, press releases, and thought leadership from Zion Tech Group.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ARTICLES.map((a, i) => (
              <div key={i} className="glass-card">
                <p className="text-purple-400 text-sm mb-1">{a.date} · {a.outlet}</p>
                <h3 className="font-semibold text-lg text-white">{a.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
