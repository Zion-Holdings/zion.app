import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Data API Platform | Zion Tech Group",
  description: "Turn any data source into a REST or GraphQL API: auto-generated, documented, secured, monitored.",
  openGraph: {
    title: "Data API Platform | Zion Tech Group",
    description: "Turn any data source into a REST or GraphQL API: auto-generated, documented, secured, monitored.",
    url: "https://ziontechgroup.com/services/w178-data-api-platform/",
    type: 'website',
  },
  alternates: { canonical: "/services/w178-data-api-platform/" },
};

export default function W178DataApiPlatformPage() {
  return (
    <StandardPage
      title="Data API Platform"
      subtitle="Turn any data source into a REST or GraphQL API: auto-generated, documented, secured, monitored."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Data API Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Turn any data source into a REST or GraphQL API: auto-generated, documented, secured, monitored.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607105712) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
