import Link from 'next/link';

export const metadata = {
  title: 'JSON Formatter & Validator | Zion Tech Group',
  description: 'Format, validate, and prettify JSON with syntax highlighting.',
};

export default function JsonFormatterPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-3xl font-bold text-white mb-4">JSON Formatter & Validator</h1>
        <p className="text-slate-400 mb-6">Format, validate, and beautify JSON payloads.</p>
        <div className="glass-card p-6">
          <textarea className="w-full h-64 p-4 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 font-mono text-sm" placeholder="Paste JSON here..." />
          <div className="mt-4 flex gap-3">
            <Link href="/tools/" className="btn-secondary">Back to Tools</Link>
            <Link href="/contact/" className="btn-primary">Request Integration</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
