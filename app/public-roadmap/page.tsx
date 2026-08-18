import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Public Roadmap | Zion Tech Group',
  description: 'Zion Tech Group public roadmap, planned releases, and platform direction.',
  openGraph: {
    title: 'Public Roadmap | Zion Tech Group',
    description: 'See what we’re building next and share feedback.',
    url: 'https://ziontechgroup.com/public-roadmap/',  siteName: 'Zion Tech Group',

    type: 'website',
  },  twitter: {
    card: 'summary_large_image',
    title: 'Public Roadmap | Zion Tech Group',
    description: 'See what we’re building next and share feedback.',
    siteName: 'Zion Tech Group',
  },alternates: { canonical: '/public-roadmap/' },
};

export default function PublicRoadmapPage() {
  return (
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
    </StandardPage>
  );
}
