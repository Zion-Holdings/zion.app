import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'URL Encoder | Zion Tech Group',
  description: 'Encode and decode URLs and query parameters safely for links and API requests.',
  openGraph: {
    title: 'URL Encoder | Zion Tech Group',
    description: 'Encode and decode URLs and query parameters safely for links and API requests.',
    url: 'https://ziontechgroup.com/tools/url-encoder/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'URL Encoder | Zion Tech Group',
    description: 'Encode and decode URLs and query parameters safely for links and API requests.',
  },
  alternates: { canonical: '/tools/url-encoder/' },
};

export default function Page() {
  return (
    <StandardPage
      title="URL Encoder"
      subtitle="Encode and decode URLs and query parameters safely for links and API requests."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'URL Encoder' },
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
            Use this tool when building links, debugging query strings, or preparing parameters for API requests. It prevents broken URLs caused by unescaped characters.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Common use cases</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>Encoding search query parameters</li>
            <li>Preparing URLs for emails or social posts</li>
            <li>Debugging malformed query strings</li>
            <li>Encoding path segments with spaces or special characters</li>
          </ul>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Examples</h2>
          <p className="text-slate-300">
            Spaces become <code className="text-purple-300">%20</code>. Ampersands in values become <code className="text-purple-300">%26</code>. Non-ASCII characters are converted to percent-encoded UTF-8 bytes.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Related tools</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <a href="/tools/json-formatter/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">JSON Formatter</h3>
              <p className="text-slate-400 text-xs">Beautify and validate JSON structure.</p>
            </a>
            <a href="/tools/json-diff/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">JSON Diff</h3>
              <p className="text-slate-400 text-xs">Compare JSON documents side by side.</p>
            </a>
            <a href="/tools/regex-tester/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">Regex Tester</h3>
              <p className="text-slate-400 text-xs">Test regular expressions with match previews.</p>
            </a>
          </div>
        </section>
      </div>
    </StandardPage>
  );
}
