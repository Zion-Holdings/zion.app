import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud Cost Optimization — Case Study',
  description: 'How Zion Tech Group reduced cloud spend by 40% in 90 days with rightsizing, reserved planning, and FinOps guardrails.',
  alternates: { canonical: '/case-studies/cloud-cost-optimization/' },
};

export default function CaseStudyCloudCost() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <div className="mb-8 text-sm text-slate-400">
          <Link href="/" className="hover:text-purple-400 transition">Home</Link>
          <span className="mx-2">/</span>
          <Link href="/case-studies/" className="hover:text-purple-400 transition">Case Studies</Link>
          <span className="mx-2">/</span>
          <span className="text-slate-300">Cloud Cost Optimization</span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Reducing Cloud Spend by 40% in 90 Days</h1>
        <p className="text-slate-300 mb-8 max-w-3xl">
          A mid-market technology company faced unpredictable AWS bills and limited visibility into waste. Zion Tech Group deployed a FinOps program combining automation, governance, and continuous cost review.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {[
            { label: 'Bill reduction', value: '40%' },
            { label: 'Time to first savings', value: '14 days' },
            { label: 'Reserved coverage', value: '78%' },
          ].map((s) => (
            <div key={s.label} className="glass-card text-center">
              <div className="text-3xl font-bold text-purple-400">{s.value}</div>
              <div className="text-slate-400 text-sm mt-1">{s.label}</div>
            </div>
          ))}
        </div>

        <div className="space-y-6 text-slate-300">
          <p>
            We started with a full-stack cost audit: compute, storage, networking, and SaaS spend. Using usage data and tagging hygiene reviews, we identified idle resources, oversized instances, and orphaned volumes.
          </p>
          <p>
            Next, we implemented automated rightsizing recommendations, budget guardrails, and anomaly alerts. The finance and engineering teams received a single dashboard with actionable savings opportunities.
          </p>
          <p>
            Finally, we established a weekly FinOps rhythm: cost review, exception handling, and roadmap updates. Within one quarter, the program became self-sustaining.
          </p>
        </div>

        <div className="mt-10">
          <Link href="/case-studies/" className="btn-secondary">All Case Studies</Link>
        </div>
      </div>
    </main>
  );
}
