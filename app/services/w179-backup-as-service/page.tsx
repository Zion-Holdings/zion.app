import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: "Backup as a Service (BaaS) | Zion Tech Group",
  description: "Automated cloud backup: deduplication, compression, encryption, compliance retention.",
  openGraph: {
    title: "Backup as a Service (BaaS) | Zion Tech Group",
    description: "Automated cloud backup: deduplication, compression, encryption, compliance retention.",
    url: "https://ziontechgroup.com/services/w179-backup-as-service/",
    type: 'website',
  },
  alternates: { canonical: "/services/w179-backup-as-service/" },
};

export default function W179BackupAsServicePage() {
  return (
    <StandardPage
      title="Backup as a Service (BaaS)"
      subtitle="Automated cloud backup: deduplication, compression, encryption, compliance retention."
      breadcrumbItems={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services/" },
        { label: "Backup as a Service (BaaS)" }
      ]}
      actions={[
        { label: 'Talk to us', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-5xl mx-auto">Automated cloud backup: deduplication, compression, encryption, compliance retention.</p>
      <p className="text-slate-500 text-sm max-w-5xl mx-auto">Restored from a Wayback Machine snapshot (20260608114403) of ziontechgroup.com.</p>
    </StandardPage>
  );
}
