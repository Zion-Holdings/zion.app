import StandardPage from '@/components/StandardPage';

export const metadata = {
  title: 'UUID Generator — Zion Tech Group',
  description: 'Generate UUIDs and ULIDs for database keys, event IDs, and distributed system identifiers.',
  alternates: { canonical: '/tools/uuid-generator/' },
  robots: { index: true, follow: true },
};

export default function UuidGeneratorPage() {
  const breadcrumbItems = [
    { label: 'Tools', href: '/tools/' },
    { label: 'UUID Generator' },
  ];

  return (
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
    </StandardPage>
  );
}
