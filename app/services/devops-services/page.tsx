import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "devops services | Zion Tech Group",
  description: "devops services — Zion Tech Group.",
  openGraph: {
    title: "devops services | Zion Tech Group",
    description: "devops services — Zion Tech Group.",
    url: "https://ziontechgroup.com/services/devops-services/",
    type: 'website',
  },
  alternates: { canonical: "/services/devops-services/" },
};

export default function ServicesDevopsServicesPage() {
  return (
    <StandardPage
      title="devops services"
      subtitle="devops services — Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Devops Services" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">devops services — Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
