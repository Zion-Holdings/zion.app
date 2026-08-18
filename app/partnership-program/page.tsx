import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Partnership Program | Zion Tech Group',
  description: 'Collaborate with Zion Tech Group through delivery, co-sell, and integration partnerships.',
  openGraph: {
    title: 'Partnership Program | Zion Tech Group',
    description: 'Collaborate with Zion Tech Group through delivery, co-sell, and integration partnerships.',
    url: 'https://ziontechgroup.com/partnership-program/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Partnership Program | Zion Tech Group',
    description: 'Collaborate with Zion Tech Group through delivery, co-sell, and integration partnerships.',
  },
  alternates: { canonical: '/partnership-program/' },
};


export default function PartnershipProgramPage() {
  return (
<>
    <StandardPage
      title="Partnership Program"
      subtitle="Collaborate on delivery, co-sell, or integration."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Partnership Program', href: '/partnership-program/' },
      ]}
      actions={[
        { label: 'Partners overview', href: '/partners/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <p className="mb-6">
        Partnerships work best when roles and incentives are clear. This program covers the most common engagement types for technology and services partners.
      </p>
      <div className="grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Integration partner</h3>
          <p className="text-slate-400 text-sm">Joint solutions with shared documentation and support workflows.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Co-sell partner</h3>
          <p className="text-slate-400 text-sm">Qualified referrals with enablement and deal support.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Reseller</h3>
          <p className="text-slate-400 text-sm">Marketplace and packaged offerings with margin structures.</p>
        </div>
      </div>
      <p className="mt-8">
        Start with <Link href="/partners/" className="text-purple-300 font-semibold hover:text-white">partners overview</Link> or <Link href="/contact/" className="text-purple-300 font-semibold hover:text-white">contact us</Link> to begin the conversation.
      </p>

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">Program benefits</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Structured onboarding with clear milestones and success criteria.</li>
          <li>Deal support, technical enablement, and joint marketing funds.</li>
          <li>Marketplace listing opportunities where applicable.</li>
          <li>Quarterly business reviews to align roadmaps and incentives.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="/services/" className="btn-primary text-center">Browse services</a>
          <a href="/contact/" className="btn-secondary text-center">Contact us</a>
        </div>
      </div>
    </StandardPage>
  </>
  );
}