import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';
import Link from 'next/link';

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
    twitter: {
    card: 'summary_large_image',
    title: 'About Zion Tech Group',
    description: 'AI-native IT services company focused on autonomous operations, managed AI, and enterprise-ready delivery.',
  },
    alternates: { canonical: '/about/' },
};

export default function AboutPage() {
  return (
    <StandardPage
      title="About Zion Tech Group"
      subtitle="AI-native delivery across AI services, IT, cloud, security, data, and automation."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'About' },
      ]}
      actions={[
        { label: 'Start a project', href: '/start-project/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-3xl">
        <p className="text-slate-300 text-lg leading-relaxed mb-6">
          Zion Tech Group designs and builds AI-driven systems for enterprises that need reliable automation,
          secure infrastructure, and measurable ROI. We turn complex requirements into production-ready platforms.
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
            <h3 className="text-lg font-semibold text-white">Capability</h3>
            <p className="mt-2 text-sm text-slate-400">AI, cloud, security, data, automation, DevOps, and IT operations.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 mb-10">
          <h2 className="text-2xl font-bold text-white mb-3">Why Zion Tech Group</h2>
          <p className="text-slate-300 text-sm leading-relaxed mb-4">
            We combine product thinking with operational rigor. Every engagement is planned, measurable, and built to scale.
          </p>
          <div className="grid gap-4 sm:grid-cols-3">
            <div>
              <h3 className="text-white font-semibold mb-1">Outcome-first</h3>
              <p className="text-slate-400 text-xs">Scope, success metrics, and rollback criteria before implementation.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Operational readiness</h3>
              <p className="text-slate-400 text-xs">Monitoring, on-call coverage, and incident response built in from day one.</p>
            </div>
            <div>
              <h3 className="text-white font-semibold mb-1">Evidence-based expansion</h3>
              <p className="text-slate-400 text-xs">Scale only after validated adoption, stable operations, and clear ownership.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/start-project/" className="btn-primary text-center">Start a project</Link>
          <Link href="/services/" className="btn-secondary text-center">Explore services</Link>
        </div>
      </div>
    </StandardPage>
  );
}
