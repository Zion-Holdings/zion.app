import type { Metadata } from 'next';
import Link from 'next/link';
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
  alternates: { canonical: '/solutions/ai-automation/' },
};

export default function AiAutomationSolutionsPage() {
  return (
    <StandardPage
      title="AI & Automation"
      subtitle="End-to-end AI delivery: strategy, assistants, autonomous operations, and evaluation."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Solutions', href: '/solutions' },
        { label: 'AI & Automation' },
      ]}
      actions={[
        { label: 'Start a project', href: '/contact/', style: 'primary' },
        { label: 'Browse AI services', href: '/services?category=ai', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        <Link href="/services?category=ai" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">AI Strategy</h3>
          <p className="text-slate-400 text-sm">Use-case selection, roadmap, and governance for production AI.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/services?category=automation" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
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
    </StandardPage>
  );
}
