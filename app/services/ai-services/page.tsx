import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "ai services | Zion Tech Group",
  description: "ai services — Zion Tech Group.",
  openGraph: {
    title: "ai services | Zion Tech Group",
    description: "ai services — Zion Tech Group.",
    url: "https://ziontechgroup.com/services/ai-services/",
    type: 'website',
  },
  alternates: { canonical: "/services/ai-services/" },
};

export default function ServicesAiServicesPage() {
  return (
    <StandardPage
      title="ai services"
      subtitle="ai services — Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Ai Services" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">ai services — Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
