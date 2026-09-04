import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Email Migration Service | Zion Tech Group",
  description: "Seamless email migration: Google Workspace, Microsoft 365, Exchange. Zero-downtime cutover.",
  openGraph: {
    title: "Email Migration Service | Zion Tech Group",
    description: "Seamless email migration: Google Workspace, Microsoft 365, Exchange. Zero-downtime cutover.",
    url: "https://ziontechgroup.com/services/w179-email-migrate/",
    type: 'website',
  },
  alternates: { canonical: "/services/w179-email-migrate/" },
};

export default function W179EmailMigratePage() {
  return (
    <StandardPage
      title="Email Migration Service"
      subtitle="Seamless email migration: Google Workspace, Microsoft 365, Exchange. Zero-downtime cutover."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Email Migration Service" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Seamless email migration: Google Workspace, Microsoft 365, Exchange. Zero-downtime cutover.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607105035) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
