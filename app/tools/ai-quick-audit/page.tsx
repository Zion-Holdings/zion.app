import Link from 'next/link';

export const metadata = {
  title: 'AI Quick Audit | Zion Tech Group',
  description: '8-question AI readiness check with maturity score and next steps.',
};

export default function AiQuickAuditPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-3xl font-bold text-white mb-4">AI Quick Audit</h1>
        <p className="text-slate-400 mb-6">8-question readiness check with maturity score and next steps.</p>
        <div className="glass-card p-6">
          <p className="text-slate-300">This tool is coming soon. Contact us for a full AI readiness assessment.</p>
          <div className="mt-4 flex gap-3">
            <Link href="/tools/" className="btn-secondary">Back to Tools</Link>
            <Link href="/contact/" className="btn-primary">Request Assessment</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
