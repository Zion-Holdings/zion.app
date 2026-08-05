import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Case Studies | Zion Tech Group',
  description:
    'Real-world AI, cloud, and IT outcomes from Zion Tech Group engagements.',
  alternates: { canonical: '/case-studies/' },
};

export default function CaseStudiesIndexPage() {
  const CASES = [
    { slug: 'ai-support-automation', title: 'AI Support Automation for Enterprise Help Desk' },
    { slug: 'cloud-cost-optimization', title: 'Cloud Cost Optimization: 40% Reduction in 90 Days' },
    { slug: 'cybersecurity-soc', title: 'Cybersecurity SOC Modernization' },
    { slug: 'devops-cicd-transformation', title: 'DevOps CI/CD Transformation' },
    { slug: 'managed-it-expansion', title: 'Managed IT Expansion for Multi-Site Teams' },
  ];

  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Case Studies</h1>
          <p className="text-slate-400 text-lg max-w-2xl">
            Real outcomes from AI implementation, cloud optimization, and infrastructure modernization.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASES.map((item) => (
            <Link
              key={item.slug}
              href={`/case-studies/${item.slug}/`}
              className="glass-card group hover:border-purple-500/40 transition-colors block"
            >
              <h3 className="text-white font-semibold mb-2 group-hover:text-purple-300 transition-colors leading-snug">
                {item.title}
              </h3>
              <span className="text-purple-400 text-sm inline-flex items-center gap-1">
                Read case study <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
