import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Data Master Data Management Platform | Zion Tech Group",
  description: "Master data management for consistent, governed golden records across enterprise systems.",
  openGraph: {
    title: "Data Master Data Management Platform | Zion Tech Group",
    description: "Master data management for consistent, governed golden records across enterprise systems.",
    url: "https://ziontechgroup.com/services/data-mdm-platform/",
    type: 'website',
  },
  alternates: { canonical: "/services/data-mdm-platform/" },
};

export default function DataMdmPlatformPage() {
  return (
    <StandardPage
      title="Data Master Data Management Platform"
      subtitle="Master data management for consistent, governed golden records across enterprise systems."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Data Master Data Management Platform" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Master data management for consistent, governed golden records across enterprise systems.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607114414) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
