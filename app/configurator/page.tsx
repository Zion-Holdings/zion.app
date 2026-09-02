import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Configurator | Zion Tech Group',
  description: 'Start a configurator-style intake for Zion Tech Group services and get a short engagement plan.',
  openGraph: {
    title: 'Configurator | Zion Tech Group',
    description: 'Tell us your constraints and get a short engagement plan.',
    url: 'https://ziontechgroup.com/configurator/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Configurator | Zion Tech Group',
    description: 'Tell us your constraints and get a short engagement plan.',
  },
  alternates: { canonical: '/configurator/' },
};


export default function ConfiguratorPage() {
  return (
<>
    <StandardPage
      title="Configurator"
      subtitle="Pick your priorities and we’ll propose a lightweight engagement plan."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Configurator' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          Use this intake to scope cloud, security, data, automation, or AI work. We’ll return a short plan with recommended services, milestones, and timeline.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Goal</h3>
            <p className="text-slate-400 text-sm">Pick the primary outcome you want in the next 30 to 90 days.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Timeline</h3>
            <p className="text-slate-400 text-sm">Choose a pilot, program, or managed-service cadence.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Model</h3>
            <p className="text-slate-400 text-sm">Select advisory, co-development, or fully managed delivery.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 mt-6">
          <h3 className="text-white font-semibold mb-2">What happens next</h3>
          <p className="text-slate-400 text-sm">After submission, we review constraints, propose a short plan, and schedule a follow-up to align on scope and timeline.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
          <Link href="/contact/" className="btn-primary text-center">Start intake</Link>
          <Link href="/services/" className="btn-secondary text-center">Browse services</Link>
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