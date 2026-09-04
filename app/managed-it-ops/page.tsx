import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Managed It Ops | Zion Tech Group",
  description: "Professional managed it ops services from Zion Tech Group. Improve security, reduce costs, and scale IT operations with our expert team.",
  openGraph: {
    title: "Managed It Ops | Zion Tech Group",
    description: "Professional managed it ops services from Zion Tech Group. Improve security, reduce costs, and scale IT operations with our expert team.",
    url: "https://ziontechgroup.com/managed-it-ops/",
    type: 'website',
  },
  alternates: { canonical: "/managed-it-ops/" },
};

export default function ManagedItOpsPage() {
  return (
    <StandardPage
      title="Managed It Ops"
      subtitle="Professional managed it ops services from Zion Tech Group. Improve security, reduce costs, and scale IT operations with our expert team."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Managed It Ops" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Professional managed it ops services from Zion Tech Group. Improve security, reduce costs, and scale IT operations with our expert team.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from current main / live Pages HTML so this route is not lost in the source recovery merge.</p>
    </StandardPage>
  );
}
