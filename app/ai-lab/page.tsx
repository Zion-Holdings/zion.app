import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'AI Lab | Zion Tech Group',
  description: 'Explore emerging AI capabilities, experimental services, and sandbox engagements from Zion Tech Group.',
  openGraph: { title: 'AI Lab | Zion Tech Group',
    description: 'Emerging AI capabilities and experiments.',
    url: 'https://ziontechgroup.com/ai-lab/',
  type: 'website' },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Lab | Zion Tech Group',
    description: 'Emerging AI capabilities and experiments.',
  },
  alternates: { canonical: '/ai-lab/' },
};


export default function AiLabPage() {
  return (
<>
    <StandardPage
      title="AI Lab"
      subtitle="Emerging capabilities, experimental services, and sandbox engagements."
      breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'AI Lab' }]}
      actions={[{ label: 'Talk to us', href: '/contact/', style: 'primary' }]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">
        The AI Lab is where we test new models, evaluation methods, and deployment patterns before moving them into production. Engagement outcomes are validated with clear success criteria and rollback plans.
      </p>

      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto mb-12">
        <Link href="/services?category=ai" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">AI Services</h3>
          <p className="text-slate-400 text-sm">Production assistants, RAG, and agentic workflows.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
        </Link>
        <Link href="/ai/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">AI Hub</h3>
          <p className="text-slate-400 text-sm">Strategy, governance, and delivery patterns.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Open hub →</span>
        </Link>
        <Link href="/contact/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40">
          <h3 className="text-white font-semibold mb-2">Start a project</h3>
          <p className="text-slate-400 text-sm">Kick off a scoped engagement with measurable outcomes.</p>
          <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Contact us →</span>
        </Link>
      </div>

      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">Sandbox engagements</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Time-boxed experiments to validate AI capabilities before commitment.</li>
          <li>Access to emerging models, tooling, and evaluation frameworks.</li>
          <li>Risk-mitigated environments with clear success criteria and rollback.</li>
          <li>Deliverables that transfer knowledge to your internal teams.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link href="/services/" className="btn-primary text-center">Explore services</Link>
          <Link href="/contact/" className="btn-secondary text-center">Contact us</Link>
        </div>
      </div>
    </StandardPage>
  </>
  );
}