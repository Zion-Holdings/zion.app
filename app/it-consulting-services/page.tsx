import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'IT Consulting Services | Zion Tech Group',
    description: 'Hands-on consulting for cloud, security, data, automation, and AI delivery.',
    openGraph: {
    title: 'IT Consulting Services | Zion Tech Group',
    description: 'Hands-on consulting for cloud, security, data, automation, and AI delivery.',
    url: 'https://ziontechgroup.com/it-consulting-services/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'IT Consulting Services | Zion Tech Group',
    description: 'Hands-on consulting for cloud, security, data, automation, and AI delivery.',
  },
    alternates: { canonical: '/it-consulting-services/' },
};

export default function ItConsultingServicesPage() {
  return (
    <StandardPage
      title="IT Consulting Services"
      subtitle="Hands-on consulting for cloud, security, data, automation, and AI delivery."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'IT Consulting Services' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Architecture review</h3>
          <p className="text-slate-400 text-sm">Current-state assessment with prioritized improvements and migration paths.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Delivery coaching</h3>
          <p className="text-slate-400 text-sm">Team enablement for reliable releases, observability, and incident response.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Vendor and tool selection</h3>
          <p className="text-slate-400 text-sm">Objective evaluation of platforms, clouds, and SaaS tools for your workload.</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mt-10">
        <a href="/contact/" className="btn-primary text-center">Talk to an Engineer</a>
        <a href="/services/" className="btn-secondary text-center">All Services</a>
      </div>
    </StandardPage>
  );
}