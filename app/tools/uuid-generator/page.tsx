import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'UUID Generator — Zion Tech Group',
  description: 'Generate UUIDs and ULIDs for database keys, event IDs, and distributed system identifiers.',
  keywords: ['UUID generator', 'ULID generator', 'database keys', 'developer tools'],
  openGraph: {
    title: 'UUID Generator — Zion Tech Group',
    description: 'Generate UUIDs and ULIDs for database keys, event IDs, and distributed system identifiers.',
    url: 'https://ziontechgroup.com/tools/uuid-generator/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'UUID Generator — Zion Tech Group',
    description: 'Generate UUIDs and ULIDs for database keys, event IDs, and distributed system identifiers.',
  },
  alternates: { canonical: '/tools/uuid-generator/' },
  robots: { index: true, follow: true },
};


export default function UuidGeneratorPage() {
  const breadcrumbItems = [
    { label: 'Tools', href: '/tools/' },
    { label: 'UUID Generator' },
  ];

  return (
<>
    <StandardPage
      title="UUID Generator"
      subtitle="Generate UUIDs and ULIDs for keys, events, and distributed systems."
      breadcrumbItems={breadcrumbItems}
      actions={[
        { label: 'Browse all tools', href: '/tools/', style: 'primary' },
        { label: 'Talk to us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">UUIDs</h3>
          <p className="text-slate-400 text-sm">Generate v4 UUIDs for database keys and API identifiers.</p>
        </div>
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">ULIDs</h3>
          <p className="text-slate-400 text-sm">Create sortable IDs for event sourcing and distributed systems.</p>
        </div>
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Bulk output</h3>
          <p className="text-slate-400 text-sm">Batch-generate identifiers for migrations, seeds, and tests.</p>
        </div>
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Use cases</h3>
          <p className="text-slate-400 text-sm">Database setup, event pipelines, and integration testing.</p>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">ID generation guidance</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Use UUID v4 for opaque keys where ordering is not required.</li>
          <li>Use ULIDs when you need sortable IDs without a central sequence.</li>
          <li>Avoid exposing raw database IDs in public APIs.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="/tools/" className="btn-primary text-center">All tools</a>
          <a href="/contact/" className="btn-secondary text-center">Talk to us</a>
        </div>
      </div>
    </StandardPage>
  </>
  );
}