import PageWrapper from '@/components/PageWrapper';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Success Stories',
  description:
    'Real outcomes from Zion Tech Group AI, IT, and automation projects across healthcare, finance, manufacturing, and logistics.',
  alternates: { canonical: 'https://ziontechgroup.com/success-stories/' },
};

const stories = [
  {
    title: 'Reducing Hospital Readmissions with Predictive AI',
    excerpt:
      'A 450-bed hospital cut 30-day readmissions by 34% using our patient-risk scoring platform, saving $2.8M annually.',
    category: 'Healthcare',
    href: '/case-studies/healthcare-readmission-prediction',
  },
  {
    title: 'Automating Financial Compliance at Scale',
    excerpt:
      'A fintech processed 2.1M transactions daily with 99.97% accuracy using our autonomous compliance engine.',
    category: 'Finance',
    href: '/case-studies/financial-compliance-automation',
  },
  {
    title: 'Supply Chain Visibility for Manufacturing',
    excerpt:
      'A global manufacturer reduced inventory carrying costs by 22% with our real-time supply chain AI platform.',
    category: 'Manufacturing',
    href: '/case-studies/manufacturing-supply-chain',
  },
  {
    title: 'Zero-Trust Security for a Retail Chain',
    excerpt:
      'Deployed zero-trust microsegmentation across 340 stores, reducing lateral-movement risk by 92%.',
    category: 'Retail',
    href: '/case-studies/retail-zero-trust-security',
  },
];

export default function SuccessStoriesPage() {
  return (
    <PageWrapper>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
            Real Results
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            Success Stories
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Case studies from enterprise teams that shipped AI and automation projects
            with measurable ROI — from healthcare to logistics, finance to retail.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {stories.map((story) => (
            <Link
              key={story.title}
              href={story.href}
              className="group block bg-slate-900/60 border border-slate-800 rounded-xl p-6 hover:border-purple-500/40 hover:bg-slate-800/60 transition-all"
            >
              <span className="text-xs font-bold text-purple-400 uppercase">{story.category}</span>
              <h2 className="text-xl font-semibold text-white group-hover:text-purple-200 transition-colors mb-2">
                {story.title}
              </h2>
              <p className="text-sm text-slate-300 leading-relaxed">{story.excerpt}</p>
              <span className="mt-3 text-sm font-medium text-purple-400 group-hover:text-purple-300">
                Read case study →
              </span>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/contact/"
            className="inline-flex items-center rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-base font-semibold text-white hover:opacity-90 transition-opacity"
          >
            Start Your Success Story →
          </Link>
        </div>
      </PageWrapper>
  );
}
