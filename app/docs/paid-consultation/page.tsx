import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Paid Consultation & API Monetization | Zion Tech Group",
  description: "Paid consultation offers and API monetization models from Zion Tech Group.",
  openGraph: {
    title: "Paid Consultation & API Monetization | Zion Tech Group",
    description: "Paid consultation offers and API monetization models from Zion Tech Group.",
    url: "https://ziontechgroup.com/docs/paid-consultation/",
    type: 'website',
  },
  alternates: { canonical: "/docs/paid-consultation/" },
};

export default function DocsPaidConsultationPage() {
  return (
    <StandardPage
      title="Paid Consultation & API Monetization"
      subtitle="Paid consultation offers and API monetization models from Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Paid Consultation" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Paid consultation offers and API monetization models from Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
