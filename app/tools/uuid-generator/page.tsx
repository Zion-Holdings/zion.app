import StandardPage from '@/components/StandardPage';

export const metadata = {
  title: 'UUID Generator — Zion Tech Group',
  description: 'Generate UUIDs and ULIDs for database keys, event IDs, and distributed system identifiers.',
  alternates: { canonical: '/tools/uuid-generator/' },
  robots: { index: true, follow: true },
};

export default function UuidGeneratorPage() {
  const breadcrumbs = [
    { name: 'Tools', href: '/tools/' },
    { name: 'UUID Generator', href: '/tools/uuid-generator/' },
  ];

  return (
    <StandardPage
      title="UUID Generator"
      description="Generate UUIDs and ULIDs for keys, events, and distributed systems."
      breadcrumbs={breadcrumbs}
      cta={{ label: 'Browse all tools', href: '/tools/' }}
    >
      <p>Create version 4 UUIDs and optional ULIDs, copy them instantly, and use them safely in development and production tooling.</p>
    </StandardPage>
  );
}
