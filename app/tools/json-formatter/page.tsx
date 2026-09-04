import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'JSON Formatter — Zion Tech Group',
  description: 'Format, minify, and validate JSON quickly. Paste raw JSON and get clean, structured output with error detection.',
  keywords: ['JSON formatter', 'minify JSON', 'validate JSON', 'developer tools'],
  openGraph: {
    title: 'JSON Formatter — Zion Tech Group',
    description: 'Format, minify, and validate JSON quickly. Paste raw JSON and get clean, structured output with error detection.',
    url: 'https://ziontechgroup.com/tools/json-formatter/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Formatter — Zion Tech Group',
    description: 'Format, minify, and validate JSON quickly. Paste raw JSON and get clean, structured output with error detection.',
  },
  alternates: { canonical: '/tools/json-formatter/' },
  robots: { index: true, follow: true },
};


export default function JsonFormatterPage() {
  const breadcrumbItems = [
    { label: 'Tools', href: '/tools/' },
    { label: 'JSON Formatter' },
  ];

  return (
<>
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

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">Integration tips</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Use in API debugging to spot malformed payloads before retry storms.</li>
          <li>Combine with linting rules to enforce consistent JSON structure.</li>
          <li>Useful for config file reviews before deployment.</li>
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