import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Developers — Zion Tech Group | Zion Tech Group",
  description: "Developer resources for Zion APIs: SDKs, sample code, endpoint reference, and sandbox access for AI and IT services.",
  openGraph: {
    title: "Developers — Zion Tech Group | Zion Tech Group",
    description: "Developer resources for Zion APIs: SDKs, sample code, endpoint reference, and sandbox access for AI and IT services.",
    url: "https://ziontechgroup.com/developers/",
    type: 'website',
  },
  alternates: { canonical: "/developers/" },
};

export default function DevelopersPage() {
  return (
    <StandardPage
      title="Developers — Zion Tech Group"
      subtitle="Developer resources for Zion APIs: SDKs, sample code, endpoint reference, and sandbox access for AI and IT services."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Developers" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Developer resources for Zion APIs: SDKs, sample code, endpoint reference, and sandbox access for AI and IT services.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
