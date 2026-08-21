import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Pricing & Engagement Models | Zion Tech Group',
  description: 'Flexible engagement models: project-based, retainer, and managed services. Predictable pricing for AI and infrastructure projects.',
  keywords: ['pricing', 'engagement models', 'managed services', 'retainer', 'project-based', 'AI pricing', 'IT services cost'],
  openGraph: {
    title: 'Pricing & Engagement Models | Zion Tech Group',
    description: 'Flexible engagement models designed for predictable delivery.',
    url: 'https://ziontechgroup.com/pricing/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing & Engagement Models | Zion Tech Group',
    description: 'Flexible engagement models designed for predictable delivery.',
  },
  alternates: { canonical: '/pricing/' },
};


export default function PricingPage() {
  return (
<>
    <StandardPage
      title="Pricing & Engagement Models"
      subtitle="Predictable pricing for AI, cloud, security, and automation work."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Pricing' },
      ]}
      actions={[
        { label: 'Start a project', href: '/start-project/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Project-based</h3>
          <p className="text-slate-400 text-sm">Fixed-scope delivery with milestones and acceptance criteria.</p>
          <ul className="mt-3 text-slate-400 text-xs space-y-1">
            <li>Clear scope and timeline</li>
            <li>Milestone-based payments</li>
            <li>Ideal for defined deliverables</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Retainer</h3>
          <p className="text-slate-400 text-sm">Ongoing support with predictable response times and backlog triage.</p>
          <ul className="mt-3 text-slate-400 text-xs space-y-1">
            <li>Consistent monthly capacity</li>
            <li>Priority response times</li>
            <li>Continuous improvement</li>
          </ul>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Managed services</h3>
          <p className="text-slate-400 text-sm">Outcome-based operations with SLAs and embedded delivery teams.</p>
          <ul className="mt-3 text-slate-400 text-xs space-y-1">
            <li>Full operational ownership</li>
            <li>SLA-backed commitments</li>
            <li>Embedded expertise</li>
          </ul>
        </div>
      </div>

      <div className="mt-16 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 max-w-5xl mx-auto">
        <h2 className="text-2xl font-bold text-white mb-3">What’s included</h2>
        <p className="text-slate-300 text-sm leading-relaxed mb-4">
          Every engagement includes planning, execution, monitoring, and knowledge transfer. We align on success metrics before work starts and report progress in plain language.
        </p>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <h3 className="text-white font-semibold mb-1">Planning</h3>
            <p className="text-slate-400 text-xs">Scope, risk assessment, and prioritized roadmap.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Execution</h3>
            <p className="text-slate-400 text-xs">Delivery with review gates and change control.</p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-1">Operations</h3>
            <p className="text-slate-400 text-xs">Monitoring, runbooks, and incident response.</p>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
        <Link href="/start-project/" className="btn-primary text-center">Request quote</Link>
        <Link href="/services/" className="btn-secondary text-center">Browse services</Link>
      </div>
    </StandardPage>
  </>
  );
}