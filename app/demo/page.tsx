'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';
import PageWrapper from '@/components/PageWrapper';
import Section from '@/components/Section';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Interactive Demos | Zion Tech Group',
  description: 'Preview lightweight versions of Zion capabilities.',
  alternates: { canonical: '/demo/' },
};


export default function DemoHub() {
  useEffect(() => {
    const btn = document.getElementById('summarize');
    const out = document.getElementById('summary');
    if (!btn || !out) return;
    btn.addEventListener('click', () => {
      const textInput: HTMLTextAreaElement | null = document.getElementById('text') as HTMLTextAreaElement | null;
      const text = textInput?.value || '';
      const sentences = text.split(/(?<=[.!?])\s+/).filter(Boolean);
      const picked = sentences.slice(0, 3);
      out.textContent = picked.join(' ') || 'Paste text to generate an extractive summary.';
    });
  }, []);

  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <PageWrapper>
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Demos', href: '/demo' }]} />

        <h1 className="text-3xl font-bold mb-2">Interactive Demos</h1>
        <p className="mt-2 text-slate-400 mb-8">Preview lightweight versions of Zion capabilities.</p>

        <Section>
          <div className="grid gap-6 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <label className="block text-sm font-medium mb-2">Input text</label>
              <textarea id="text" className="mt-2 w-full min-h-[220px] rounded-lg border border-slate-700 bg-slate-900 p-3 font-mono text-sm text-white focus:border-emerald-500 focus:outline-none" placeholder="Paste a paragraph or article..." />
              <button id="summarize" className="mt-4 rounded-xl bg-emerald-600 px-6 py-3 font-semibold text-white hover:bg-emerald-500 transition-colors">Run Demo</button>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Output</label>
              <div id="summary" className="mt-2 rounded-lg border border-slate-800 bg-slate-900 p-4 font-mono text-sm text-slate-200 min-h-[220px] whitespace-pre-wrap">
                Output appears here.
              </div>
            </div>
          </div>
        </Section>

        <Section variant="accent">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white mb-4">Need Something Custom?</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              We can build custom AI tools and interactive demos for your specific use cases. Start with a free consultation.
            </p>
            <Link href="/contact" className="btn-primary text-lg px-8 py-4 inline-block">
              Contact Us
            </Link>
          </div>
        </Section>
      </PageWrapper>
    </main>
  );
}