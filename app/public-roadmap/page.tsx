import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Public Roadmap | Zion Tech Group',
  description: 'Zion Tech Group public roadmap, planned releases, and platform direction.',
  openGraph: {
    title: 'Public Roadmap | Zion Tech Group',
    description: 'See what we’re building next and share feedback.',
    url: 'https://ziontechgroup.com/public-roadmap/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Public Roadmap | Zion Tech Group',
    description: 'See what we’re building next and share feedback.',
  },
  alternates: { canonical: '/public-roadmap/' },
};


export default function PublicRoadmapPage() {
  return (
<>
    <StandardPage
      title="Public Roadmap"
      subtitle="See what we’re building next and share feedback so we can prioritize the right improvements."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Public Roadmap' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Platform</h3>
          <p className="text-slate-400 text-sm">Core reliability, observability, and developer experience improvements.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">AI services</h3>
          <p className="text-slate-400 text-sm">New assistants, evaluation tooling, and governed rollout patterns.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Customer experience</h3>
          <p className="text-slate-400 text-sm">Faster onboarding, clearer reporting, and easier procurement flows.</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mt-10">
        <a href="/contact/" className="btn-primary text-center">Share feedback</a>
        <a href="/services/" className="btn-secondary text-center">Explore services</a>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">Roadmap inputs</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Customer feedback from support tickets and business reviews.</li>
          <li>Internal R&D priorities from engineering and architecture teams.</li>
          <li>Security, compliance, and reliability investments.</li>
          <li>Public voting and comments to shape upcoming releases.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="/services/" className="btn-primary text-center">Explore services</a>
          <a href="/contact/" className="btn-secondary text-center">Share feedback</a>
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