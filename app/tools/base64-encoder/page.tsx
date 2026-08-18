import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Base64 Encoder | Zion Tech Group',
  description: 'Encode and decode Base64 text, files, and binary data safely.',
  openGraph: {
    title: 'Base64 Encoder | Zion Tech Group',
    description: 'Encode and decode Base64 text, files, and binary data safely.',
    url: 'https://ziontechgroup.com/tools/base64-encoder/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Base64 Encoder | Zion Tech Group',
    description: 'Encode and decode Base64 text, files, and binary data safely.',
  },
  alternates: { canonical: '/tools/base64-encoder/' },
};

export default function Base64EncoderPage() {
  return (
    <StandardPage
      title="Base64 Encoder"
      subtitle="Encode and decode Base64 text, files, and binary data safely."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'Base64 Encoder' },
      ]}
      actions={[
        { label: 'Browse all tools', href: '/tools/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto space-y-6">
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">When to use</h2>
          <p className="text-slate-300">
            Use this tool when embedding binary data in JSON, email, or HTML. Base64 is common for images, fonts, certificates, and simple payload encoding in APIs and config files.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">How to use</h2>
          <ol className="list-decimal list-inside text-slate-300 space-y-2">
            <li>Paste raw text or file content.</li>
            <li>Choose encode or decode.</li>
            <li>Review output and copy the result.</li>
          </ol>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Notes</h2>
          <p className="text-slate-300">
            Base64 expands data by about 33%. Use it for transport, not long-term storage. Validate padding and charset when decoding to avoid malformed payload errors.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Related tools</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <a href="/tools/url-encoder/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">URL Encoder</h3>
              <p className="text-slate-400 text-xs">Encode and decode URLs and query parameters safely.</p>
            </a>
            <a href="/tools/hash-generator/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">Hash Generator</h3>
              <p className="text-slate-400 text-xs">Generate hash digests for verification workflows.</p>
            </a>
            <a href="/tools/json-formatter/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">JSON Formatter</h3>
              <p className="text-slate-400 text-xs">Beautify and validate JSON structure.</p>
            </a>
          </div>
        </section>
      </div>
    </StandardPage>
  );
}
