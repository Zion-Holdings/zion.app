import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata = {
  title: 'About Zion Tech Group | AI & IT Company',
  description: 'Zion Tech Group is an AI-native IT services company building autonomous operations, managed AI, and enterprise-ready delivery.',
  keywords: ['AI company', 'IT services', 'managed AI', 'enterprise automation', 'Zion Tech Group'],
  openGraph: {
    title: 'About Zion Tech Group',
    description: 'AI-native IT services company focused on autonomous operations, managed AI, and enterprise-ready delivery.',
    url: 'https://ziontechgroup.com/about/',
    type: 'website',
  },
  alternates: { canonical: '/about/' },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'About', href: '/about' },
          ]}
          className="mb-8"
        />
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-white mb-4">About Zion Tech Group</h1>
          <p className="text-slate-300 text-lg leading-relaxed mb-6">
            Zion Tech Group designs and builds AI-driven systems for enterprises that need reliable automation,
            secure infrastructure, and measurable ROI. We operate across AI services, IT delivery, cloud,
            security, data, and automation — turning complex requirements into production-ready platforms.
          </p>
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold text-white">Mission</h3>
              <p className="mt-2 text-sm text-slate-400">Make enterprise AI reliable, measurable, and easy to run.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold text-white">Approach</h3>
              <p className="mt-2 text-sm text-slate-400">Outcome-first delivery, accountable milestones, and real production systems.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibold text-white">Clients</h3>
              <p className="mt-2 text-sm text-slate-400">Business-to-business engagements across mid-market and enterprise.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-lg font-semibert text-white">Capability</h3>
              <p className="mt-2 text-sm text-slate-400">AI, cloud, security, data, automation, DevOps, and IT operations.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/contact/" className="btn-primary text-center">Talk to an engineer</a>
            <a href="/case-studies/" className="btn-secondary text-center">See results</a>
          </div>
        </div>
      </div>
    </main>
  );
}
