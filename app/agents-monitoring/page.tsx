import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'AI Agents Monitoring | Zion Tech Group',
  description: 'Monitoring, observability, and reliability dashboard for AI agents.',
  openGraph: {
    title: 'AI Agents Monitoring | Zion Tech Group',
    description: 'Operational visibility for AI agents and automated workflows.',
    url: 'https://ziontechgroup.com/agents-monitoring/',  siteName: 'Zion Tech Group',

    type: 'website',
  },  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents Monitoring | Zion Tech Group',
    description: 'Operational visibility for AI agents and automated workflows.',
    siteName: 'Zion Tech Group',
  },alternates: { canonical: '/agents-monitoring/' },
};

export default function AgentsMonitoringPage() {
  return (
    <StandardPage
      title="AI Agents Monitoring"
      subtitle="Track agent health, task throughput, latency, and failure modes in one place."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'AI Agents Monitoring' },
      ]}
      actions={[
        { label: 'Start a project', href: '/contact/', style: 'primary' },
        { label: 'Browse AI services', href: '/services?category=ai', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        <Link href="/services?category=ai" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Observability</h3>
          <p className="text-slate-400 text-sm">Traces, metrics, and logs for agentic systems.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services?category=automation" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Automation</h3>
          <p className="text-slate-400 text-sm">Runbooks, auto-remediation, and alert routing.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services?category=security" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Security</h3>
          <p className="text-slate-400 text-sm">Identity, policy, and incident-response controls.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
      </div>
    </StandardPage>
  );
}
