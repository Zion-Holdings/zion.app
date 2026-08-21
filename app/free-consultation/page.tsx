import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Free Consultation | Zion Tech Group',
  description: 'Book a free AI and infrastructure consultation with Zion Tech Group.',
  openGraph: {
    title: 'Free Consultation | Zion Tech Group',
    description: 'Book a free consultation and get a short list of best-fit services.',
    url: 'https://ziontechgroup.com/free-consultation/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Consultation | Zion Tech Group',
    description: 'Book a free consultation and get a short list of best-fit services.',
  },
  alternates: { canonical: '/free-consultation/' },
};


export default function FreeConsultationPage() {
  return (
<>
    <StandardPage
      title="Free Consultation"
      subtitle="Tell us your goal and we’ll return a short list of best-fit services with estimated ROI and timeline."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Free Consultation' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          This is a no-obligation discovery call. We’ll review your current environment, identify quick wins, and outline a practical first engagement.
        </p>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Outcome</h3>
            <p className="text-slate-400 text-sm">The result you want in the next 30 to 90 days.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Environment</h3>
            <p className="text-slate-400 text-sm">Current tools, data sources, and integration constraints.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Decision</h3>
            <p className="text-slate-400 text-sm">Stakeholders, timeline, and success criteria.</p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 mt-6">
          <h3 className="text-white font-semibold mb-2">What you’ll receive</h3>
          <p className="text-slate-400 text-sm">A short recommendation with estimated ROI, timeline, and suggested starting services.</p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 justify-center mt-10">
          <Link href="/contact/" className="btn-primary text-center">Book a call</Link>
          <Link href="/services/" className="btn-secondary text-center">Browse services</Link>
        </div>
      </div>
    </StandardPage>
  </>
  );
}