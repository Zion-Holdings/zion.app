import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Industry Solutions | Zion Tech Group',
  description: 'Industry-specific AI and IT solutions from Zion Tech Group.',
  openGraph: {
    title: 'Industry Solutions | Zion Tech Group',
    description: 'Purpose-built AI and IT solutions by industry.',
    url: 'https://ziontechgroup.com/industry-solutions/',  siteName: 'Zion Tech Group',

    type: 'website',
  },  twitter: {
    card: 'summary_large_image',
    title: 'Industry Solutions | Zion Tech Group',
    description: 'Purpose-built AI and IT solutions by industry.',
    siteName: 'Zion Tech Group',
  },alternates: { canonical: '/industry-solutions/' },
};

export default function IndustrySolutionsPage() {
  return (
    <StandardPage
      title="Industry Solutions"
      subtitle="Purpose-built AI and IT solutions by industry."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Industry Solutions' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Healthcare</h3>
          <p className="text-slate-400 text-sm">HIPAA-compliant AI diagnostics, patient engagement, and clinical automation.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Financial Services</h3>
          <p className="text-slate-400 text-sm">RegTech, fraud detection, trading bots, and KYC automation.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Manufacturing</h3>
          <p className="text-slate-400 text-sm">Predictive maintenance, supply chain, quality inspection AI.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Government</h3>
          <p className="text-slate-400 text-sm">Citizen services, compliance automation, and civic AI.</p>
        </div>
      </div>
    </StandardPage>
  );
}
