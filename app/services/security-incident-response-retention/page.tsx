import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Security Incident Response Retainer | Zion Tech Group",
  description: "24/7 incident response on retainer. Get a guaranteed response time, dedicated IR team, and predictable costs — before the breach happens.",
  openGraph: {
    title: "Security Incident Response Retainer | Zion Tech Group",
    description: "24/7 incident response on retainer. Get a guaranteed response time, dedicated IR team, and predictable costs — before the breach happens.",
    url: "https://ziontechgroup.com/services/security-incident-response-retention/",
    type: 'website',
  },
  alternates: { canonical: "/services/security-incident-response-retention/" },
};

export default function ServicesSecurityIncidentResponseRetentionPage() {
  return (
    <StandardPage
      title="Security Incident Response Retainer"
      subtitle="24/7 incident response on retainer. Get a guaranteed response time, dedicated IR team, and predictable costs — before the breach happens."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Security Incident Response Retention" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">24/7 incident response on retainer. Get a guaranteed response time, dedicated IR team, and predictable costs — before the breach happens.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
