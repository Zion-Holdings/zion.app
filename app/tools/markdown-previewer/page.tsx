import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Markdown Previewer | Zion Tech Group',
  description: 'Render Markdown to live HTML preview with common extensions.',
  openGraph: {
    title: 'Markdown Previewer | Zion Tech Group',
    description: 'Render Markdown to live HTML preview with common extensions.',
    url: 'https://ziontechgroup.com/tools/markdown-previewer/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Markdown Previewer | Zion Tech Group',
    description: 'Render Markdown to live HTML preview with common extensions.',
  },
  alternates: { canonical: '/tools/markdown-previewer/' },
};

export default function Page() {
  return (
    <StandardPage
      title="Markdown Previewer"
      subtitle="Render Markdown to live HTML preview with common extensions."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'Markdown Previewer' },
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
            Use this tool when you need to preview README content, draft documentation, or validate formatting before publishing. It supports headings, lists, code blocks, and links.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">How to use</h2>
          <ol className="list-decimal list-inside text-slate-300 space-y-2">
            <li>Paste Markdown into the input pane.</li>
            <li>Review the rendered preview in real time.</li>
            <li>Copy the final HTML or download the preview.</li>
          </ol>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Related tools</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <a href="/tools/json-diff/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">JSON Diff</h3>
              <p className="text-slate-400 text-xs">Compare JSON documents side by side.</p>
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
