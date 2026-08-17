import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Status | Zion Tech Group',
  description: 'Service status page for Zion Tech Group platforms and client environments.',
  openGraph: { title: 'Status | Zion Tech Group', description: 'Platform and service status.', url: 'https://ziontechgroup.com/status-page/', type: 'website' },
  alternates: { canonical: '/status/' },
};

export default function StatusPage() {
  return (
    <StandardPage title="Status" subtitle="Platform and service status." breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Status' }]} actions={[{ label: 'Contact support', href: '/contact/', style: 'primary' }]}>
      <div className="max-w-3xl mx-auto space-y-4 text-slate-300">
        <p>This status page shows operational health for public services and major client environments. For incident history and maintenance windows, contact support.</p>
        <Link href="/contact/" className="text-purple-300 hover:text-purple-200">Contact support →</Link>
      </div>
    </StandardPage>
  );
}
