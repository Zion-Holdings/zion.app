import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Free Consultation | Zion Tech Group',
  description: 'Book a free AI and infrastructure consultation with Zion Tech Group.',
  openGraph: {
    title: 'Free Consultation | Zion Tech Group',
    description: 'Book a free consultation and get a short list of best-fit services.',
    url: 'https://ziontechgroup.com/free-consultation/',
    type: 'website',
  },
  alternates: { canonical: '/free-consultation/' },
};

export default function FreeConsultationPage() {
  return (
    <StandardPage
      title="Free Consultation"
      subtitle="Tell us your goal and we’ll return a short list of best-fit services with estimated ROI and timeline."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Free Consultation' },
      ]}
    >
      <div className="max-w-3xl mx-auto">
        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          This is a no-obligation discovery call. We’ll review your current environment, identify quick wins, and outline a practical first engagement.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <a href="/contact/" className="btn-primary text-center">Book a call</a>
          <a href="/services/" className="btn-secondary text-center">Browse services</a>
        </div>
      </div>
    </StandardPage>
  );
}
