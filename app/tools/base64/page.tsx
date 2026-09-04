import Link from 'next/link';

export const metadata = {
  title: 'Base64 Encoder/Decoder | Zion Tech Group',
  description: 'Encode and decode Base64 strings and files.',
};

export default function Base64Page() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-3xl font-bold text-white mb-4">Base64 Encoder/Decoder</h1>
        <p className="text-slate-400 mb-6">Encode and decode Base64 strings and files.</p>
        <div className="glass-card p-6">
          <textarea className="w-full h-64 p-4 rounded-lg bg-slate-900 border border-slate-700 text-slate-100 font-mono text-sm" placeholder="Paste text or Base64 here..." />
          <div className="mt-4 flex gap-3">
            <Link href="/tools/" className="btn-secondary">Back to Tools</Link>
            <Link href="/contact/" className="btn-primary">Request Integration</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
