import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Partners | Zion Tech Group',
  description: 'Technology and delivery partners of Zion Tech Group.',
  openGraph: {
    title: 'Partners | Zion Tech Group',
    description: 'Partner ecosystem for AI, IT, and automation engagements.',
    url: 'https://ziontechgroup.com/partners/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partners | Zion Tech Group',
    description: 'Partner ecosystem for AI, IT, and automation engagements.',
  },
  alternates: { canonical: '/partners/' },
};


export default function PartnersPage() {
  return (
<>
    <StandardPage
      title="Partners"
      subtitle="Technology and delivery partners we work with to ship outcomes faster."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Partners' },
      ]}
      actions={[
        { label: 'Become a partner', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <div className="max-w-3xl mx-auto mb-10">
        <p className="text-slate-300 text-sm leading-relaxed">
          We partner with best-in-class platforms and integrators to reduce risk, shorten implementation, and expand coverage for clients.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 max-w-6xl mx-auto">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Cloud Platforms</h3>
          <p className="text-slate-400 text-sm">Infrastructure, migration, and managed cloud partners.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">AI Vendors</h3>
          <p className="text-slate-400 text-sm">Model providers, tooling, and evaluation platforms.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Security</h3>
          <p className="text-slate-400 text-sm">Identity, SOC, and compliance tooling partners.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Integrators</h3>
          <p className="text-slate-400 text-sm">Implementation and change-management partners.</p>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">Partner benefits</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Co-selling support with qualified leads and joint proposal resources.</li>
          <li>Shared documentation and integration tooling.</li>
          <li>Access to Zion's delivery methodology and client base.</li>
          <li>Clear revenue and margin structures with transparent reporting.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link href="/contact/" className="btn-primary text-center">Become a partner</Link>
          <Link href="/services/" className="btn-secondary text-center">Browse services</Link>
        </div>
      </div>

      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <h2 className="text-xl font-bold text-white mb-4">Related pages</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <Link href="/partnership-program/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Partnership Program</h3>
            <p className="text-slate-400 text-xs mb-3">Program structure, requirements, and onboarding.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">View program →</span>
          </Link>
          <Link href="/blog/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold mb-1">Insights & Guides</h3>
            <p className="text-slate-400 text-xs mb-3">Integration, co-sell, and ecosystem guidance.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Read blog →</span>
          </Link>
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