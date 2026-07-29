import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ | Zion Tech Group',
  description:
    'Common questions about AI and IT services, engagement models, pricing, security, and support from Zion Tech Group.',
  alternates: { canonical: '/faq/' },
};

const items = [
  {
    q: 'What industries does Zion Tech Group serve?',
    a: 'We serve 10+ industries with AI and IT services, matching solutions to business outcomes and compliance requirements.',
  },
  {
    q: 'How fast can engagement start?',
    a: 'Many engagements start within 7 days after scoping, resource alignment, and security steps.',
  },
  {
    q: 'What engagement models are available?',
    a: 'Time and materials, fixed-price, retainer, and milestone-based options with clear acceptance criteria.',
  },
  {
    q: 'Do you offer HIPAA/security-ready delivery?',
    a: 'Yes. We use access controls, audit logging, data minimization, and contract terms aligned to common compliance needs.',
  },
  {
    q: 'What does support look like?',
    a: '24/7 coverage, US-based support team, on-call escalation paths, and response SLAs by service tier.',
  },
];

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page max-w-4xl">
        <div className="text-center mb-10">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">FAQ</h1>
          <p className="text-slate-300 text-lg">
            Common questions about AI and IT services, engagement models, pricing, and support.
          </p>
          <div className="mt-6">
            <Link href="/contact/" className="btn-primary text-lg px-10 py-4">
              Ask a question
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          {items.map((item) => (
            <div key={item.q} className="glass-card p-6">
              <h3 className="text-white font-semibold mb-2">{item.q}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex flex-col items-center gap-4 rounded-2xl border border-purple-500/30 bg-purple-900/20 px-8 py-10">
            <h2 className="text-3xl font-bold text-white">Need clarification?</h2>
            <p className="text-slate-300 max-w-2xl">
              If you don’t see your answer here, contact us. We’ll reply with fit guidance, a proposed model, and next steps.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/contact/" className="btn-primary text-lg px-10 py-4">
                Contact us
              </Link>
              <a href="mailto:kleber@ziontechgroup.com" className="btn-secondary text-lg px-10 py-4">
                Email us
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
