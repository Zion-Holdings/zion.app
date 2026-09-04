import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "AI Property Damage Assessor | Zion Tech Group",
  description: "Assess property damage from photos: damage classification, severity scoring, repair cost estimation.",
  openGraph: {
    title: "AI Property Damage Assessor | Zion Tech Group",
    description: "Assess property damage from photos: damage classification, severity scoring, repair cost estimation.",
    url: "https://ziontechgroup.com/services/w178-ai-property-damage/",
    type: 'website',
  },
  alternates: { canonical: "/services/w178-ai-property-damage/" },
};

export default function W178AiPropertyDamagePage() {
  return (
    <StandardPage
      title="AI Property Damage Assessor"
      subtitle="Assess property damage from photos: damage classification, severity scoring, repair cost estimation."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "AI Property Damage Assessor" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Assess property damage from photos: damage classification, severity scoring, repair cost estimation.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260608112930) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
