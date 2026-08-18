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
      ]}
    >
      <p>Create version 4 UUIDs and optional ULIDs, copy them instantly, and use them safely in development and production tooling.</p>
    </StandardPage>
  );
}
