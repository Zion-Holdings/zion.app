import StandardPage from '@/components/StandardPage';

export const metadata = {
  title: 'JSON Formatter — Zion Tech Group',
  description: 'Format, minify, and validate JSON quickly. Paste raw JSON and get clean, structured output with error detection.',
  alternates: { canonical: '/tools/json-formatter/' },
  robots: { index: true, follow: true },
};

export default function JsonFormatterPage() {
  const breadcrumbItems = [
    { label: 'Tools', href: '/tools/' },
    { label: 'JSON Formatter' },
  ];

  return (
    <StandardPage
      title="JSON Formatter"
      subtitle="Format, minify, and validate JSON quickly."
      breadcrumbItems={breadcrumbItems}
      actions={[
        { label: 'Browse all tools', href: '/tools/', style: 'primary' },
      ]}
    >
      <p>Use this tool to clean up JSON output, catch syntax errors, and prepare payloads for APIs and integrations.</p>
    </StandardPage>
  );
}
