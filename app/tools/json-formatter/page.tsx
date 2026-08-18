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
        { label: 'Talk to us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Format</h3>
          <p className="text-slate-400 text-sm">Convert compact JSON into readable indented output with consistent structure.</p>
        </div>
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Minify</h3>
          <p className="text-slate-400 text-sm">Remove whitespace for faster transmission without changing payloads.</p>
        </div>
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Validate</h3>
          <p className="text-slate-400 text-sm">Surface exact line and character positions for invalid syntax.</p>
        </div>
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Use cases</h3>
          <p className="text-slate-400 text-sm">API debugging, webhook payload review, and config file cleanup.</p>
        </div>
      </div>
    </StandardPage>
  );
}
