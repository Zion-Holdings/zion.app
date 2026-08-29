import StandardPage from '@/components/StandardPage';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Healthcare Solutions | Zion Tech Group',
  description: 'AI and IT solutions for healthcare: clinical operations, diagnostics, patient pathways, and compliance.',
  openGraph: {
    title: 'Healthcare Solutions | Zion Tech Group',
    description: 'AI and IT solutions for healthcare: clinical operations, diagnostics, patient pathways, and compliance.',
    url: 'https://ziontechgroup.com/solutions/healthcare',
    type: 'website',
  },
  alternates: { canonical: '/solutions/healthcare/' },
};

export default function HealthcarePage() {
  return (
    <StandardPage
      title="Healthcare Solutions"
      subtitle="Modernize healthcare delivery with governed AI and secure cloud infrastructure."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Solutions', href: '/solutions/' },
        { label: 'Healthcare' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all">
          <h3 className="text-white font-semibold mb-2">AI & Automation</h3>
          <p className="text-slate-400 text-sm">Deploy AI triage, knowledge-base assistants, and workflow automation.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all">
          <h3 className="text-white font-semibold mb-2">Cloud & DevOps</h3>
          <p className="text-slate-400 text-sm">Migrate workloads, tighten observability, and reduce cloud spend.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all">
          <h3 className="text-white font-semibold mb-2">Cybersecurity</h3>
          <p className="text-slate-400 text-sm">Penetration testing, identity flows, and incident-response playbooks.</p>
        </div>
      </div>
          <div className="prose prose-invert max-w-none">
        <h2>Why healthcare</h2><p>Healthcare organizations need secure, compliant, and responsive technology platforms. Zion Tech Group delivers solutions that support clinical operations, patient data governance, and regulatory requirements.</p><h2>Solutions</h2><ul><li>Secure clinical communications and collaboration</li><li>Data interoperability and analytics</li><li>Compliance automation and audit readiness</li><li>Operational resilience and incident response</li></ul>
      </div>
    </StandardPage>
  );
}
