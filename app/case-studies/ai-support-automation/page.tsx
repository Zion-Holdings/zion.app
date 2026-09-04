import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Support Automation — Case Study',
  description: 'How Zion Tech Group reduced ticket volume by 32% with an AI triage and deflection pilot.',
  alternates: { canonical: '/case-studies/ai-support-automation/' },
};

export default function CaseStudyAISupport() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <div className="mb-8 text-sm text-slate-400">
          <Link href="/" className="hover:text-purple-400 transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/case-studies/" className="hover:text-purple-400 transition">Case Studies</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">AI Support Automation</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">AI Support Deflection Pilot</h1>
        <p className="text-slate-300 mb-8 max-w-3xl">
          A high-growth SaaS company faced rising support ticket volume without proportional staffing increases. Zion Tech Group deployed an AI triage layer that resolved common requests automatically.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Ticket volume reduction', value: '32%' },
            { label: 'First-response time', value: '< 60s' },
            { label: 'Customer satisfaction', value: '+18%' },
          ].map((s) => (
            <div key={s.label} className="glass-card text-center">
              <div className="text-3xl font-bold text-purple-400">{s.value}</div>
              <div className="text-slate-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-6 text-slate-300">
          <p>
            We integrated the AI layer with existing knowledge bases and ticketing workflows. Tickets were classified, routed, and answered automatically when confidence was high.
          </p>
          <p>
            Agents received richer context for complex cases, reducing handle time and improving resolution quality. Weekly feedback loops tightened accuracy over time.
          </p>
          <p>
            The result was a scalable support operation that improved customer experience while containing operational cost.
          </p>
        </div>

        <div className="mt-10">
          <Link href="/case-studies/" className="btn-secondary">All Case Studies</Link>
        </div>
      </div>
    </main>
  );
}
