// app/free-ai-it-tools/page.tsx
import Link from 'next/link';
import PageTemplate from '@/components/PageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Free AI IT Tools | Zion Tech Group',
  description: 'AI-powered tools for developers, sysadmins, and IT teams. Monitor, debug, and optimize your infrastructure with our suite of free tools.',
  alternates: { canonical: 'https://ziontechgroup.com/free-ai-it-tools/' },
};

export default function FreeAIToolsPage() {
  const tools = [
    { name: 'AI Service Router', path: '/tools/ai-service-router/', emoji: '🧭', desc: 'Type your need in plain language — AI matches you to the best-fit services.' },
    { name: 'ROI Calculator', path: '/tools/roi-calculator/', emoji: '📈', desc: 'Estimate return on investment across AI, Automation, Cloud, Data, IT, or Security.' },
    { name: 'Service Comparison', path: '/tools/service-comparison/', emoji: '⚖️', desc: 'Pick up to 3 services side-by-side on Overview, Features, Pricing, Benefits, and Timeline.' },
    { name: 'Service Recommender', path: '/tools/service-recommender/', emoji: '🎯', desc: 'Answer 4 quick questions and get a personalised ranked shortlist of services.' },
    { name: 'Port Scanner', path: '/tools/port-scanner/', emoji: '🔍', desc: 'Free online port scanner — check open ports and security posture.' },
    { name: 'SSL Certificate Checker', path: '/tools/ssl-checker/', emoji: '🔒', desc: 'Check TLS certificate validity, issuer, expiry date, and chain depth.' },
    { name: 'Platform Health Check', path: '/tools/health-check/', emoji: '🔋', desc: 'Check the health of your Zion Tech Group services and APIs.' },
  ];

  return (
    <PageTemplate
      title="Free AI IT Tools"
      description="All tools are 100% free — no sign-up required. Your data never leaves your browser."
      canonical="https://ziontechgroup.com/free-ai-it-tools/"
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {tools.map((tool) => (
          <Link
            key={tool.path}
            href={tool.path}
            className="glass-card card-hover block"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="text-3xl">{tool.emoji}</span>
              <h2 className="text-xl font-semibold text-white">{tool.name}</h2>
            </div>
            <p className="text-slate-400 text-sm">{tool.desc}</p>
          </Link>
        ))}
      </div>

      <div className="mt-12 text-center">
        <Link href="/free-ai-tools/" className="btn-primary text-lg px-8 py-3">
          Explore All Free Tools →
        </Link>
      </div>
    </PageTemplate>
  );
}
