import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Sec Soc As A Service | Zion Tech Group",
  description: "Sec Soc As A Service from Zion Tech Group.",
  openGraph: {
    title: "Sec Soc As A Service | Zion Tech Group",
    description: "Sec Soc As A Service from Zion Tech Group.",
    url: "https://ziontechgroup.com/services/sec-soc-as-a-service/",
    type: 'website',
  },
  alternates: { canonical: "/services/sec-soc-as-a-service/" },
};

export default function SecSocAsAServicePage() {
  return (
    <StandardPage
      title="Sec Soc As A Service"
      subtitle="Sec Soc As A Service from Zion Tech Group."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Sec Soc As A Service" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Sec Soc As A Service from Zion Tech Group.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614105419) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
