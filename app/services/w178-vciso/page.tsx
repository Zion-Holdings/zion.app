import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Virtual CISO (vCISO) Service | Zion Tech Group",
  description: "Fractional CISO: security strategy, compliance roadmap, incident response planning, board reporting.",
  openGraph: {
    title: "Virtual CISO (vCISO) Service | Zion Tech Group",
    description: "Fractional CISO: security strategy, compliance roadmap, incident response planning, board reporting.",
    url: "https://ziontechgroup.com/services/w178-vciso/",
    type: 'website',
  },
  alternates: { canonical: "/services/w178-vciso/" },
};

export default function W178VcisoPage() {
  return (
    <StandardPage
      title="Virtual CISO (vCISO) Service"
      subtitle="Fractional CISO: security strategy, compliance roadmap, incident response planning, board reporting."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Virtual CISO (vCISO) Service" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Fractional CISO: security strategy, compliance roadmap, incident response planning, board reporting.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607113828) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
