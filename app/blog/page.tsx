import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog | Zion Tech Group',
  description: 'Insights on AI, automation, enterprise IT, and digital transformation from the Zion Tech Group team.',
  alternates: { canonical: '/blog/' },
};

export default function BlogPage() {
  const posts = [
    { slug: 'ai-soc-automation-2026-playbook', title: 'AI SOC Automation 2026 Playbook' },
    { slug: 'ai-secret-rotation-in-ci-cd-best-practices', title: 'AI Secret Rotation in CI/CD Best Practices' },
    { slug: 'ai-incident-remediation-from-alert-to-fix', title: 'AI Incident Remediation from Alert to Fix' },
    { slug: 'ai-edge-cloud-cost-optimization', title: 'AI Edge and Cloud Cost Optimization' },
    { slug: 'ai-observability-for-security-operations', title: 'AI Observability for Security Operations' },
    { slug: 'ai-recovery-testing-automation', title: 'AI Recovery Testing Automation' },
    { slug: 'how-manufacturing-leaders-cut-costs-with-ai', title: 'How Manufacturing Leaders Cut Costs with AI' },
    { slug: 'scaling-ai-across-manufacturing-operations', title: 'Scaling AI Across Manufacturing Operations' },
    { slug: 'ai-first-legalcompliance-playbook-2026', title: 'AI First Legal Compliance Playbook 2026' },
    { slug: 'how-energyutilities-leaders-cut-costs-with-ai', title: 'How Energy and Utilities Leaders Cut Costs with AI' },
  ];
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <main className="mx-auto max-w-6xl px-6 py-16">
        <h1 className="text-4xl font-bold">Blog</h1>
        <p className="mt-4 text-slate-400">Latest insights from Zion Tech Group.</p>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map(({ slug, title }) => (
            <Link key={slug} href={`/blog/${slug}/`} className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-purple-500/40 transition-colors">
              <span className="text-sm font-medium text-purple-400">Read article →</span>
              <h2 className="mt-2 text-base font-semibold text-white">{title}</h2>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
