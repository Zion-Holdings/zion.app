import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';
import AgentsMonitoring from '@/components/AgentsMonitoring';

export const metadata: Metadata = {
  title: 'Zion Tech Group | AI & IT Company',
  description: 'Zion Tech Group is an AI-native IT services company building autonomous operations, managed AI, and enterprise-ready delivery.',
  openGraph: {
    title: 'Zion Tech Group | AI & IT Company',
    description: 'AI-native IT services: autonomous operations, managed AI, cloud, security, and data.',
    url: 'https://ziontechgroup.com/',
    type: 'website',
  },
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <StandardPage
      title="AI & IT Services for Your Business"
      subtitle="Autonomous operations, managed AI, and enterprise-ready delivery for teams that want to move fast without breaking trust."
      breadcrumbItems={[
        { label: 'Home' },
      ]}
      actions={[
        { label: 'Explore services', href: '/services', style: 'primary' },
        { label: 'Contact us', href: '/contact', style: 'secondary' },
      ]}
    >
      <AgentsMonitoring />

      {/* Hermes Agent Hero Banner */}
      <section className="mt-12 max-w-6xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl border border-purple-500/30 bg-gradient-to-br from-purple-950/60 via-slate-950 to-pink-950/60">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,rgba(120,50,200,0.3),transparent_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_50%,rgba(200,50,150,0.2),transparent_60%)]" />
          <div className="relative p-8 md:p-12">
            <div className="flex items-center gap-2 mb-4">
              <span className="inline-block w-2 h-2 bg-purple-400 rounded-full animate-pulse" />
              <span className="text-xs text-purple-300 font-mono uppercase tracking-wider">Powered by Nous Research</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-violet-400 bg-clip-text text-transparent">
                Hermes Agent Platform
              </span>
            </h2>
            <p className="text-lg text-slate-300 max-w-3xl mb-6">
              Deploy autonomous AI agents with self-improving skills, persistent memory, and a 20+ platform
              gateway. Run 24/7 agent fleets that automate CI/CD, SEO content generation, security audits,
              and growth pipelines — all built on the open-source Hermes platform.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/hermes-agents/"
                className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:from-purple-500 hover:to-pink-500 transition-all shadow-lg shadow-purple-500/25"
              >
                🚀 Explore Hermes Agent
              </Link>
              <Link
                href="/agents-monitoring/"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-200 font-semibold rounded-xl hover:border-purple-500/40 hover:bg-slate-900/60 transition-all"
              >
                📊 Live Agent Dashboard
              </Link>
              <Link
                href="/hermes-docs/"
                className="inline-flex items-center gap-2 px-6 py-3 border border-slate-700 text-slate-300 font-medium rounded-xl hover:border-purple-500/40 hover:bg-slate-900/60 transition-all"
              >
                📚 Documentation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto mt-12">
        <Link href="/services?category=ai" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">AI & Automation</h3>
          <p className="text-slate-400 text-sm">Strategy, assistants, and autonomous operations.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services?category=cloud" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Cloud & DevOps</h3>
          <p className="text-slate-400 text-sm">Migration, CI/CD, and reliability at scale.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services?category=security" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Security & Compliance</h3>
          <p className="text-slate-400 text-sm">Hardened defenses and audit-ready controls.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
      </div>
    </StandardPage>
  );
}
