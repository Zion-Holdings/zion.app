import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Managed Database Administration | Zion Tech Group",
  description: "Expert DBA: PostgreSQL, MySQL, SQL Server, Oracle, MongoDB. Performance tuning, HA/DR.",
  openGraph: {
    title: "Managed Database Administration | Zion Tech Group",
    description: "Expert DBA: PostgreSQL, MySQL, SQL Server, Oracle, MongoDB. Performance tuning, HA/DR.",
    url: "https://ziontechgroup.com/services/w179-dba-managed/",
    type: 'website',
  },
  alternates: { canonical: "/services/w179-dba-managed/" },
};

export default function W179DbaManagedPage() {
  return (
    <StandardPage
      title="Managed Database Administration"
      subtitle="Expert DBA: PostgreSQL, MySQL, SQL Server, Oracle, MongoDB. Performance tuning, HA/DR."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Managed Database Administration" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Expert DBA: PostgreSQL, MySQL, SQL Server, Oracle, MongoDB. Performance tuning, HA/DR.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260607112609) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
