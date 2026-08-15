import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'SOC and Incident Response — Case Study',
  description: 'How Zion Tech Group improved uptime and incident response maturity to achieve 99.99% availability.',
  alternates: { canonical: '/case-studies/soc-and-incident-response/' },
};

export default function CaseStudySOC() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <div className="mb-8 text-sm text-slate-400">
          <Link href="/" className="hover:text-purple-400 transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/case-studies/" className="hover:text-purple-400 transition">Case Studies</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">SOC and Incident Response</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">From Incident Chaos to 99.99% Uptime</h1>
        <p className="text-slate-300 mb-8 max-w-3xl">
          A SaaS operator experienced repeated outages and slow incident response. Zion Tech Group implemented a SOC-as-a-service model with automated runbooks and on-call escalation.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Uptime achieved', value: '99.99%' },
            { label: 'MTTR reduction', value: '62%' },
            { label: 'Alerts automated', value: '84%' },
          ].map((s) => (
            <div key={s.label} className="glass-card text-center">
              <div className="text-3xl font-bold text-purple-400">{s.value}</div>
              <div className="text-slate-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-6 text-slate-300">
          <p>
            We redesigned monitoring coverage, standardized alert severity, and built incident response runbooks for every major failure mode. The team moved from reactive firefighting to predictable response.
          </p>
          <p>
            Automation handled triage, enrichment, and initial remediation where safe. Human responders focused on exception handling and customer communication.
          </p>
          <p>
            Post-incident reviews became structured and repeatable, turning outages into long-term reliability improvements.
          </p>
        </div>

        <div className="mt-10">
          <Link href="/case-studies/" className="btn-secondary">All Case Studies</Link>
        </div>
      </div>
    </main>
  );
}
