import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Timestamp Converter | Zion Tech Group',
  description: 'Convert Unix timestamps and ISO dates for logging, debugging, and event timelines.',
  openGraph: {
    title: 'Timestamp Converter | Zion Tech Group',
    description: 'Convert Unix timestamps and ISO dates for logging, debugging, and event timelines.',
    url: 'https://ziontechgroup.com/tools/timestamp-converter/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Timestamp Converter | Zion Tech Group',
    description: 'Convert Unix timestamps and ISO dates for logging, debugging, and event timelines.',
  },
  alternates: { canonical: '/tools/timestamp-converter/' },
};

export default function TimestampConverterPage() {
  return (
    <StandardPage
      title="Timestamp Converter"
      subtitle="Convert Unix timestamps and ISO dates for logging, debugging, and event timelines."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'Timestamp Converter' },
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
            Use this tool when translating logs, audit trails, or event streams across timezones. It helps inspect Unix epoch seconds, milliseconds, and ISO-8601 strings in one place.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">How to use</h2>
          <ol className="list-decimal list-inside text-slate-300 space-y-2">
            <li>Paste a Unix timestamp or ISO date string.</li>
            <li>Choose target format and timezone.</li>
            <li>Copy the converted result for debugging or reports.</li>
          </ol>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Notes</h2>
          <p className="text-slate-300">
            Confirm seconds versus milliseconds before comparing logs. Some systems use epoch seconds, others milliseconds.
          </p>
        </section>
        <section className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-bold text-white mb-3">Related tools</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <a href="/tools/word-counter/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">Word Counter</h3>
              <p className="text-slate-400 text-xs">Count words and characters quickly.</p>
            </a>
            <a href="/tools/url-encoder/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">URL Encoder</h3>
              <p className="text-slate-400 text-xs">Encode and decode URLs safely.</p>
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
