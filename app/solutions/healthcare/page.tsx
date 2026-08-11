import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare Solutions | Zion Tech Group',
  description: 'HIPAA-ready AI, patient data automation, and secure cloud infrastructure for healthcare organizations.',
  alternates: { canonical: '/solutions/healthcare/' },
};

export default function HealthcarePage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Healthcare Solutions</h1>
        <p className="text-slate-400 text-lg max-w-2xl mb-10">
          Secure, compliant AI and IT infrastructure built for healthcare operations.
        </p>
        <div className="glass-card p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">What we deliver</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>HIPAA-aligned data automation</li>
            <li>Patient data security and access control</li>
            <li>AI-assisted diagnostics workflows</li>
            <li>Cloud infrastructure for healthcare systems</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
