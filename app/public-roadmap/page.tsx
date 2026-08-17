import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Public Roadmap | Zion Tech Group',
  description: 'Public roadmap for Zion Tech Group platform and service improvements.',
  openGraph: { title: 'Public Roadmap | Zion Tech Group', description: 'Upcoming improvements and releases.', url: 'https://ziontechgroup.com/public-roadmap/', type: 'website' },
  alternates: { canonical: '/public-roadmap/' },
};

export default function PublicRoadmapPage() {
  return (
    <StandardPage title="Public Roadmap" subtitle="Upcoming improvements and release themes." breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Public Roadmap' }]} actions={[{ label: 'Contact us', href: '/contact/', style: 'primary' }]}>
      <div className="max-w-4xl mx-auto grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Platform</h3>
          <p className="text-slate-400 text-sm">Navigation, search, and service-discovery improvements.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Services</h3>
          <p className="text-slate-400 text-sm">New engagement models, documentation, and client reporting.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">AI</h3>
          <p className="text-slate-400 text-sm">Assistants, evaluation tooling, and governance templates.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Operations</h3>
          <p className="text-slate-400 text-sm">Status-page enhancements, SLA transparency, and support workflows.</p>
        </div>
      </div>
    </StandardPage>
  );
}
