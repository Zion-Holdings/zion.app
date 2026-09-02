import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'AI & Automation Solutions | Zion Tech Group',
  description: 'AI strategy, automation, and agentic operations solutions from Zion Tech Group.',
  openGraph: {
    title: 'AI & Automation Solutions | Zion Tech Group',
    description: 'AI and automation solutions with measurable outcomes.',
    url: 'https://ziontechgroup.com/solutions/ai-automation/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI & Automation Solutions | Zion Tech Group',
    description: 'AI and automation solutions with measurable outcomes.',
  },
  alternates: { canonical: '/solutions/ai-automation/' },
};


export default function AiAutomationSolutionsPage() {
  return (
<>
    <StandardPage
      title="AI & Automation"
      subtitle="End-to-end AI delivery: strategy, assistants, autonomous operations, and evaluation."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Solutions', href: '/solutions/' },
        { label: 'AI & Automation' },
      ]}
      actions={[
        { label: 'Start a project', href: '/contact/', style: 'primary' },
        { label: 'Browse AI services', href: '/services/?category=ai', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        <Link href="/services/?category=ai" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">AI Strategy</h3>
          <p className="text-slate-400 text-sm">Use-case selection, roadmap, and governance for production AI.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services/?category=automation" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Automation</h3>
          <p className="text-slate-400 text-sm">Workflow automation, ticket routing, and knowledge-base assistants.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/agents-monitoring/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">AI Agents</h3>
          <p className="text-slate-400 text-sm">Monitoring, observability, and reliability for agentic systems.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <h2 className="text-xl font-bold text-white mb-4">What you can expect</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Scoped pilots with measurable KPIs and timeline.</li>
          <li>Data-grounded assistants with retrieval, routing, and escalation logic.</li>
          <li>Evaluation suites for prompt quality, safety, and consistency.</li>
          <li>Governance policies, audit trails, and production rollback plans.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link href="/contact/" className="btn-primary text-center">Talk to an engineer</Link>
          <Link href="/services/?category=ai" className="btn-secondary text-center">Browse AI services</Link>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <h2 className="text-xl font-bold text-white mb-4">Related offerings</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/tools/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Developer Tools</h3>
            <p className="text-slate-400 text-xs mb-3">Free utilities for JSON, JWT, regex, QR, and text processing.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Use tools →</span>
          </Link>
          <Link href="/blog/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Insights & Guides</h3>
            <p className="text-slate-400 text-xs mb-3">Practical guidance on AI, IT, automation, and enterprise delivery.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Read blog →</span>
          </Link>
        </div>
      </div>
    </StandardPage>
  </>
  );
}