import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Automated Penetration Testing Platform | Zion Tech Group",
  description: "Continuous automated penetration testing platform that simulates real-world attacks on web applications, APIs, and networks. AI-driven vulnerability discovery with prioritized remediation guidance.",
  openGraph: {
    title: "Automated Penetration Testing Platform | Zion Tech Group",
    description: "Continuous automated penetration testing platform that simulates real-world attacks on web applications, APIs, and networks. AI-driven vulnerability discovery with prioritized remediation guidance.",
    url: "https://ziontechgroup.com/services/penetration-testing-platform/",
    type: 'website',
  },
  alternates: { canonical: "/services/penetration-testing-platform/" },
};

export default function PenetrationTestingPlatformPage() {
  return (
    <StandardPage
      title="Automated Penetration Testing Platform"
      subtitle="Continuous automated penetration testing platform that simulates real-world attacks on web applications, APIs, and networks. AI-driven vulnerability discovery with prioritized remediation guidance."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Automated Penetration Testing Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Continuous automated penetration testing platform that simulates real-world attacks on web applications, APIs, and networks. AI-driven vulnerability discovery with prioritized remediation guidance.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607194256) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
