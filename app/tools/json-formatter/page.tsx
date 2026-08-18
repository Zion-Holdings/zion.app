import StandardPage from '@/components/StandardPage';

export const metadata = {
  title: 'JSON Formatter — Zion Tech Group',
  description: 'Format, minify, and validate JSON quickly. Paste raw JSON and get clean, structured output with error detection.',
  alternates: { canonical: '/tools/json-formatter/' },
  robots: { index: true, follow: true },
};

export default function JsonFormatterPage() {
  const breadcrumbs = [
    { name: 'Tools', href: '/tools/' },
    { name: 'JSON Formatter', href: '/tools/json-formatter/' },
  ];

  return (
    <StandardPage
      title="JSON Formatter"
      description="Format, minify, and validate JSON quickly."
      breadcrumbs={breadcrumbs}
      cta={{ label: 'Browse all tools', href: '/tools/' }}
    >
      <p>Use this tool to clean up JSON output, catch syntax errors, and prepare payloads for APIs and integrations.</p>
    </StandardPage>
  );
}
