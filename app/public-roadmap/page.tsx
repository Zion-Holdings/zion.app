import PageWrapper from '@/components/PageWrapper';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Product Roadmap | Zion Tech Group',
  description:
    'Public roadmap for Zion Tech Group AI products and platform improvements. See what we are building next and submit feature ideas.',
  alternates: { canonical: 'https://ziontechgroup.com/public-roadmap/' },
};

const roadmapItems = [
  {
    quarter: 'Q3 2026',
    status: 'in-progress',
    title: 'AI Agent Orchestration Platform',
    desc: 'Multi-agent workflow builder with RAG, tool-use, and human-in-the-loop checkpoints.',
  },
  {
    quarter: 'Q3 2026',
    status: 'planned',
    title: 'Autonomous Incident Commander v2',
    desc: 'Enhanced ML-based root-cause analysis and automated rollback for production incidents.',
  },
  {
    quarter: 'Q4 2026',
    status: 'planned',
    title: 'Data Governance Toolkit',
    desc: 'Automated PII detection, retention policies, and compliance reporting across 12 frameworks.',
  },
  {
    quarter: 'Q4 2026',
    status: 'planned',
    title: 'Multi-Tenant AI Service Marketplace',
    desc: 'Self-serve portal for customers to deploy, monitor, and scale AI micro-services.',
  },
];

export default function PublicRoadmapPage() {
  return (
    <PageWrapper>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-purple-400">
            Public Roadmap
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-5">
            What We&apos;re Building Next
          </h1>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Our roadmap is driven by customer feedback and market opportunity. See what
            we&apos;re working on now, what&apos;s coming next, and how to influence our priorities.
          </p>
        </div>

        <div className="space-y-6 mb-16">
          {roadmapItems.map((item) => (
            <div key={item.title} className="bg-slate-900/60 border border-slate-800 rounded-xl p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-bold text-purple-400 uppercase">{item.quarter}</span>
                  <span className={`ml-2 text-xs px-2 py-0.5 rounded text-xs font-medium ${
                    item.status === 'in-progress'
                      ? 'bg-green-900/30 text-green-400'
                      : 'bg-slate-700/50 text-slate-400'
                  }`}>
                    {item.status === 'in-progress' ? 'In Progress' : 'Planned'}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">{item.title}</h3>
              </div>
              <p className="text-slate-400 text-sm mt-2">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-white mb-4">Have a Feature Idea?</h2>
          <p className="text-slate-300 text-sm mb-4">
            We read every request. Email us at kleber@ziontechgroup.com with your suggestion.
          </p>
        </div>
      </PageWrapper>
  );
}
