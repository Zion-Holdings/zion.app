import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'JSON Diff | Zion Tech Group',
  description: 'Compare JSON objects side by side and highlight added, removed, and changed fields.',
  openGraph: {
    title: 'JSON Diff | Zion Tech Group',
    description: 'Visual JSON diff with added, removed, and changed values.',
    url: 'https://ziontechgroup.com/tools/json-diff/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'JSON Diff | Zion Tech Group',
    description: 'Visual JSON diff with added, removed, and changed values.',
  },
  alternates: { canonical: '/tools/json-diff/' },
};


export default function JsonDiffPage() {
  return (
<>
    <StandardPage
      title="JSON Diff"
      subtitle="Compare JSON objects side by side and highlight added, removed, and changed fields."
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
            Use JSON Diff when debugging API responses, reviewing config changes, or validating payload transformations. It helps you see exactly what changed between two versions of a document without manual line-by-line comparison.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">How to use</h2>
          <ol className="list-decimal list-inside text-slate-300 space-y-2">
            <li>Paste the original JSON into the left panel.</li>
            <li>Paste the updated JSON into the right panel.</li>
            <li>Review highlighted differences.</li>
            <li>Copy the diff result for documentation or code review.</li>
          </ol>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Best practices</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>Normalize whitespace and key order before comparing.</li>
            <li>Use stable identifiers to reduce noise in repeated comparisons.</li>
            <li>Pair with version control for meaningful change review.</li>
          </ul>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Related tools</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <Link href="/tools/json-formatter/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">JSON Formatter</h3>
              <p className="text-slate-400 text-xs">Beautify and validate JSON.</p>
            </Link>
            <Link href="/tools/jwt-decoder/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">JWT Decoder</h3>
              <p className="text-slate-400 text-xs">Inspect token payloads.</p>
            </Link>
            <Link href="/tools/hash-generator/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">Hash Generator</h3>
              <p className="text-slate-400 text-xs">Generate hashes for integrity checks.</p>
            </Link>
          </div>
        </section>
      </div>
    </StandardPage>
  </>
  );
}