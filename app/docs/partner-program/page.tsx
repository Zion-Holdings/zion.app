import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Partner & Reseller Program | Zion Tech Group",
  description: "Join the Zion partner program: resell AI/IT services, earn 20-40% margin, access white-label offerings, and grow with Zion",
  openGraph: {
    title: "Partner & Reseller Program | Zion Tech Group",
    description: "Join the Zion partner program: resell AI/IT services, earn 20-40% margin, access white-label offerings, and grow with Zion",
    url: "https://ziontechgroup.com/docs/partner-program/",
    type: 'website',
  },
  alternates: { canonical: "/docs/partner-program/" },
};

export default function DocsPartnerProgramPage() {
  return (
    <StandardPage
      title="Partner & Reseller Program"
      subtitle="Join the Zion partner program: resell AI/IT services, earn 20-40% margin, access white-label offerings, and grow with Zion"
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Docs", href: "/docs/" },
        { label: "Partner Program" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-5xl mx-auto">Join the Zion partner program: resell AI/IT services, earn 20-40% margin, access white-label offerings, and grow with Zion</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main /docs HTML so this published route is not lost.</p>
    </StandardPage>
  );
}
