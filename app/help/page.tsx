'use client';

import PageWrapper from '@/components/PageWrapper';
import Link from 'next/link';
import { useState } from 'react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Help Center — Zion Tech Group',
  description: 'Frequently asked questions, AI readiness audit, ROI calculator, service comparison, and contact information for Zion Tech Group.',
  alternates: { canonical: '/help/' },
};

const FAQ_ITEMS = [
  {
    q: 'How fast can we go from contact to a proposal?',
    a: 'Most inquiries convert to a discovery or roadmap proposal within business days. Managed engagements can often start within one to two weeks after scoping.',
  },
  {
    q: 'Do I need AI to benefit from your services?',
    a: 'No. Many clients begin with audits, managed services, or direct support. AI is used when you want faster analysis, better visibility, or more repeatable delivery—not as a prerequisite.',
  },
  {
    q: 'Do you integrate with AWS, Azure, GCP, GitHub, ITSM, and CRMs?',
    a: 'Yes. We commonly integrate with major clouds, Kubernetes, SIEM/EDR, GitHub/HashiCorp, and common ITSM/ERP/CRM platforms. Exact compatibility is confirmed during scoping.',
  },
  {
    q: 'Which industries do you support?',
    a: 'Healthcare/life sciences, financial services, SaaS, logistics/supply chain, media, energy, education, legal/compliance, manufacturing, and enterprise IT.',
  },
  {
    q: 'What languages and support hours?',
    a: 'Service delivery supports English and Portuguese. Support coverage is built per engagement; many comms can be handled via email, Calendly, or Google Meet.',
  },
  {
    q: 'Can I see verified results before buying?',
    a: 'Yes. Review public case studies for outcome-level evidence, or use the free audit/ROI tools to estimate value before engagement.',
  },
];

const QUICK_TOPICS = [
  { title: 'AI Readiness Audit', href: '/free-ai-readiness-audit/', desc: 'Get an automated or guided AI assessment for startup, mid-market, or enterprise.' },
  { title: 'ROI Calculator', href: '/tools/roi-calculator/', desc: 'Estimate cost savings and ROI before buying AI or IT services.' },
  { title: 'Service Comparison', href: '/tools/service-comparison/', desc: 'Compare approaches: audit, managed service, or custom build.' },
  { title: 'All Free Tools', href: '/tools/', desc: 'Developer utilities, security scanners, and formatter tools at no cost.' },
];

const CONTACTS = [
  { label: 'Call', value: '+1 302 464 0950', href: 'tel:+13024640950', icon: '📞' },
  { label: 'Email', value: 'kleber@ziontechgroup.com', href: 'mailto:kleber@ziontechgroup.com?subject=Zion%20Help%20Inquiry', icon: '✉️' },
  { label: 'Calendly', value: 'Book 30 min', href: 'https://calendly.com/kleber-ziontechgroup', icon: '📅' },
  { label: 'Meet', value: 'Join meeting', href: 'https://meet.google.com/ouu-khao-kuy', icon: '🗓️' },
];

export default function HelpPage() {
  const [open, setOpen] = useState<string | null>(null);
  const [q, setQ] = useState('');

  const filtered = FAQ_ITEMS.filter((item) => {
    if (!q.trim()) return true;
    const s = q.toLowerCase();
    return item.q.toLowerCase().includes(s) || item.a.toLowerCase().includes(s);
  });

  return (
    <PageWrapper>
      <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 md:py-20">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">Help Center</h1>
          <p className="text-slate-300 text-base max-w-2xl mb-8">
            Start here for common support questions before booking a consultation. Phone: <a className="text-purple-300 hover:text-purple-200" href="tel:+13024640950">+1 302 464 0950</a>.
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {CONTACTS.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noreferrer" className="flex items-start gap-3 p-4 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-purple-500/40 transition-all">
                <span className="text-xl leading-none">{c.icon}</span>
                <div className="min-w-0">
                  <div className="text-xs text-slate-400">{c.label}</div>
                  <div className="text-sm font-medium text-white truncate">{c.value}</div>
                </div>
              </a>
            ))}
          </div>

          <div className="mb-8">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search help topics..."
              className="w-full rounded-2xl border border-slate-700 bg-slate-900/60 px-4 py-3 text-sm text-white placeholder-slate-400 outline-none focus:border-purple-500/60"
            />
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-16">
            {filtered.map((item, idx) => {
              const key = String(idx);
              const isOpen = open === key;
              return (
                <div key={key} className="rounded-xl border border-slate-800 bg-slate-900/60 p-4">
                  <button
                    onClick={() => setOpen(isOpen ? null : key)}
                    className="w-full text-left flex items-center justify-between gap-2"
                    aria-expanded={isOpen}
                  >
                    <span className="text-white font-semibold">{item.q}</span>
                    <span className={"text-slate-400 transition-transform " + (isOpen ? "rotate-180" : "")} aria-hidden>▾</span>
                  </button>
                  <div className={"transition-all " + (isOpen ? "opacity-100 mt-3" : "opacity-0 h-0 overflow-hidden")}>
                    <p className="text-slate-300 text-sm leading-relaxed">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <section className="border-t border-slate-800 pt-12">
            <h2 className="text-2xl font-bold text-white text-center mb-2">Popular next steps</h2>
            <p className="text-slate-300 text-center max-w-2xl mx-auto mb-8">
              These routes usually reflect the fastest path to engagement.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {QUICK_TOPICS.map((item) => (
                <Link key={item.title} href={item.href} className="block p-5 rounded-xl border border-slate-800 bg-slate-900/60 hover:border-purple-500/40 transition-all">
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-slate-300 text-sm">{item.desc}</p>
                </Link>
              ))}
            </div>
          </section>

          <section className="border-t border-slate-800 mt-12 pt-10">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-white font-semibold text-lg mb-2">Still need human support?</h3>
              <p className="text-slate-300 text-sm mb-4">
                We respond to onboarding, pre-sales, and support requests quickly.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-3">
                <Link href="/contact/" className="inline-flex items-center justify-center px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/20">
                  Contact support →
                </Link>
                <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center px-5 py-3 rounded-xl border border-slate-700 text-white font-semibold hover:border-purple-500/60 transition-all">
                  Schedule a call
                </a>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
    </PageWrapper>
  );
}
