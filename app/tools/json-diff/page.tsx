import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'JSON Diff | Zion Tech Group',
  description: 'Compare JSON documents side by side and spot differences fast.',
  openGraph: {
    title: 'JSON Diff | Zion Tech Group',
    description: 'Compare JSON documents side by side and spot differences fast.',
    url: 'https://ziontechgroup.com/tools/json-diff/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Diff | Zion Tech Group',
    description: 'Compare JSON documents side by side and spot differences fast.',
  },
  alternates: { canonical: '/tools/json-diff/' },
};

export default function Page() {
  return (
    <StandardPage
      title="JSON Diff"
      subtitle="Compare JSON documents side by side and spot differences fast."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'JSON Diff' },
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
            Use this tool when you need to compare API responses, config versions, or payload snapshots. It highlights added, removed, and changed fields so you can review impact quickly.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">How to use</h2>
          <ol className="list-decimal list-inside text-slate-300 space-y-2">
            <li>Paste the original JSON into the left pane.</li>
            <li>Paste the updated JSON into the right pane.</li>
            <li>Review highlighted differences and copy the summary.</li>
          </ol>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Related tools</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <a href="/tools/markdown-previewer/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">Markdown Previewer</h3>
              <p className="text-slate-400 text-xs">Render Markdown to live HTML preview.</p>
            </a>
            <a href="/tools/json-formatter/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">JSON Formatter</h3>
              <p className="text-slate-400 text-xs">Beautify and validate JSON structure.</p>
            </a>
            <a href="/tools/url-encoder/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">URL Encoder</h3>
              <p className="text-slate-400 text-xs">Encode and decode query parameters safely.</p>
            </a>
          </div>
        </section>
      </div>
    </StandardPage>
  );
}
