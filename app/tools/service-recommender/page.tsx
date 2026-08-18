import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Service Recommender | Zion Tech Group',
  description: 'Find best-fit services from goals and constraints.',
  openGraph: {
    title: 'Service Recommender',
    description: 'Quick service recommendation helper.',
    url: 'https://ziontechgroup.com/tools/service-recommender/',
    type: 'website',
  },
  alternates: { canonical: '/tools/service-recommender/' },
};

const QUESTIONS = [
  {
    label: 'Primary goal',
    options: ['Automation', 'Analytics', 'Security', 'AI', 'Infrastructure'],
    note: 'Choose the outcome that matters most in the next 90 days.',
  },
  {
    label: 'Timeline',
    options: ['4 weeks', '8 weeks', '12 weeks', '6 months'],
    note: 'Use this to distinguish pilots from governed programs.',
  },
  {
    label: 'Operating model',
    options: ['Internal delivery', 'Co-development', 'Managed service', 'Advisory only'],
    note: 'This affects staffing, knowledge transfer, and success metrics.',
  },
];

export default function ServiceRecommenderPage() {
  return (
    <StandardPage
      title="Service Recommender"
      subtitle="Answer a few questions and get a short list of recommended services."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools' },
        { label: 'Service Recommender' },
      ]}
      actions={[
        { label: 'Browse all tools', href: '/tools/', style: 'primary' },
        { label: 'Start a project', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto grid gap-4">
        {QUESTIONS.map((q) => (
          <div key={q.label} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">{q.label}</h3>
            <p className="text-slate-400 text-sm mb-3">{q.note}</p>
            <div className="flex flex-wrap gap-2">
              {q.options.map((opt) => (
                <span key={opt} className="rounded-xl border border-slate-700 bg-slate-950 px-3 py-2 text-xs text-slate-300">
                  {opt}
                </span>
              ))}
            </div>
          </div>
        ))}

        <div className="rounded-2xl border border-purple-500/30 bg-purple-900/20 p-6">
          <h2 className="text-xl font-bold text-white mb-2">Want a tailored recommendation?</h2>
          <p className="text-slate-300 text-sm mb-4">
            Share your goals and constraints and we will return a short list of best-fit services with estimated ROI and timeline.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Link href="/contact/" className="btn-primary text-center">Contact us</Link>
            <Link href="/services/" className="btn-secondary text-center">Browse services</Link>
          </div>
        </div>
      </div>
    </StandardPage>
  );
}
