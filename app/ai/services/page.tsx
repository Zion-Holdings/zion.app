import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Services | Zion Tech Group",
  description: "Services — Zion Tech Group.",
  openGraph: {
    title: "Services | Zion Tech Group",
    description: "Services — Zion Tech Group.",
    url: "https://ziontechgroup.com/ai/services/",
    type: 'website',
  },
  alternates: { canonical: "/ai/services/" },
};

export default function AiServicesPage() {
  return (
    <StandardPage
      title="Services"
      subtitle="Services — Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Ai", href: "/ai/" },
        { label: "Services" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Services — Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
