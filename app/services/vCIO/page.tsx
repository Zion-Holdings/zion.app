import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Virtual CIO & Fractional CTO | Zion Tech Group",
  description: "Fractional technology leadership for businesses that need strategic IT direction without the full-time C-suite cost. Technology roadmap, vendor evaluation, budgeting, security posture, and engineering team management.",
  openGraph: {
    title: "Virtual CIO & Fractional CTO | Zion Tech Group",
    description: "Fractional technology leadership for businesses that need strategic IT direction without the full-time C-suite cost. Technology roadmap, vendor evaluation, budgeting, security posture, and engineering team management.",
    url: "https://ziontechgroup.com/services/vCIO/",
    type: 'website',
  },
  alternates: { canonical: "/services/vCIO/" },
};

export default function VCIOPage() {
  return (
    <StandardPage
      title="Virtual CIO & Fractional CTO"
      subtitle="Fractional technology leadership for businesses that need strategic IT direction without the full-time C-suite cost. Technology roadmap, vendor evaluation, budgeting, security posture, and engineering team management."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Virtual CIO & Fractional CTO" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Fractional technology leadership for businesses that need strategic IT direction without the full-time C-suite cost. Technology roadmap, vendor evaluation, budgeting, security posture, and engineering team management.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260614124325) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
