import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Press | Zion Tech Group',
  description: 'Press releases, media mentions, and company announcements from Zion Tech Group.',
  openGraph: { title: 'Press | Zion Tech Group',
    description: 'News and announcements.',
    url: 'https://ziontechgroup.com/press/',
  type: 'website' },
  twitter: {
    card: 'summary_large_image',
    title: 'Press | Zion Tech Group',
    description: 'News and announcements.',
  },
  alternates: { canonical: '/press/' },
};


export default function PressPage() {
  return (
<>
    <StandardPage title="Press" subtitle="Press releases, media mentions, and announcements." breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Press' }]} actions={[{ label: 'Media contact', href: '/contact/', style: 'primary' }]}>
      <div className="max-w-4xl mx-auto space-y-6 text-slate-300">
        <p>For media inquiries, contact our communications team. We share updates on product releases, client outcomes, and industry perspectives.</p>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Topics we cover</h3>
          <p className="text-slate-400 text-sm">AI delivery, managed services, security operations, cloud modernization, and enterprise automation.</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Recent updates</h3>
          <p className="text-slate-400 text-sm">New service releases, customer case studies, and industry commentary.</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Media kit</h3>
          <p className="text-slate-400 text-sm">Company overview, executive bios, high-resolution logos, and approved messaging for reporters.</p>
        </div>

        <Link href="/contact/" className="text-purple-300 hover:text-purple-200">Contact communications →</Link>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">For journalists</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Customer case studies with measurable outcomes and quotes.</li>
          <li>Product release notes and technical white papers.</li>
          <li>Executive interviews and speaking availability.</li>
          <li>Direct line to communications for fastest response.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Link href="/services/" className="btn-primary text-center">Browse services</Link>
          <Link href="/contact/" className="btn-secondary text-center">Media contact</Link>
        </div>
      </div>
    </StandardPage>
  </>
  );
}