import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'AI Agents Monitoring | Zion Tech Group',
  description: 'Monitoring, observability, and reliability dashboard for AI agents.',
  openGraph: {
    title: 'AI Agents Monitoring | Zion Tech Group',
    description: 'Operational visibility for AI agents and automated workflows.',
    url: 'https://ziontechgroup.com/agents-monitoring/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Agents Monitoring | Zion Tech Group',
    description: 'Operational visibility for AI agents and automated workflows.',
  },
  alternates: { canonical: '/agents-monitoring/' },
};


export default function AgentsMonitoringPage() {
  return (
<>
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
        <Link href="/services/?category=ai" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Observability</h3>
          <p className="text-slate-400 text-sm">Traces, metrics, and logs for agentic systems.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services/?category=automation" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Automation</h3>
          <p className="text-slate-400 text-sm">Runbooks, auto-remediation, and alert routing.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services/?category=security" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Security</h3>
          <p className="text-slate-400 text-sm">Identity, policy, and incident-response controls.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">Monitoring essentials</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Real-time health dashboards for agent throughput, latency, and error rates.</li>
          <li>Structured logging with trace correlation across tool calls and data sources.</li>
          <li>Automated alerting routed to the right team with severity-aware escalation.</li>
          <li>Cost and usage visibility to prevent runaway token or compute spend.</li>
          <li>Periodic reliability reviews and failure-mode post-mortems.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="/services/" className="btn-primary text-center">Explore AI services</a>
          <a href="/contact/" className="btn-secondary text-center">Contact us</a>
        </div>
      </div>
    
      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">Explore related</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Link href="/services/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Services</h3>
            <p className="text-slate-400 text-xs mb-2">AI, IT, and automation services with measurable outcomes.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">View services →</span>
          </Link>
          <Link href="/blog/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Insights</h3>
            <p className="text-slate-400 text-xs mb-2">Guides on AI delivery, security, data, and DevOps.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Read blog →</span>
          </Link>
          <Link href="/contact/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Contact</h3>
            <p className="text-slate-400 text-xs mb-2">Talk with Zion about your environment and timeline.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Contact us →</span>
          </Link>
        </div>
      </div>

    </StandardPage>
  </>
  );
}