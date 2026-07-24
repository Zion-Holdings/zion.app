import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata = {
  title: 'Use Cases | Zion Tech Group',
  description: 'Explore Zion Tech Group use cases across industries: AI, cloud, security, automation, data, IoT, and beyond.',
  alternates: { canonical: '/use-cases' },
};

const USE_CASES = [
  {
    title: 'Reduce support workload',
    emoji: '🤖',
    category: 'Automation',
    path: '/services?category=automation',
    desc: 'Deploy AI triage, ticket routing, and knowledge-base assistants that lower ticket volume and speed resolution.',
  },
  {
    title: 'Modernize cloud infrastructure',
    emoji: '☁️',
    category: 'Cloud',
    path: '/services?category=cloud',
    desc: 'Migrate workloads, tighten observability, and reduce cloud spend without introducing reliability risk.',
  },
  {
    title: 'Strengthen security posture',
    emoji: '🔐',
    category: 'Security',
    path: '/services?category=security',
    desc: 'Run penetration testing, secure identity flows, and prepare incident-response playbooks before breaches happen.',
  },
  {
    title: 'Turn data into decisions',
    emoji: '📊',
    category: 'Data',
    path: '/services?category=data',
    desc: 'Build governed analytics pipelines, dashboards, and forecasting models that turn raw data into action.',
  },
  {
    title: 'Ship AI products faster',
    emoji: '🧠',
    category: 'AI',
    path: '/services?category=ai',
    desc: 'Use pretrained models, RAG systems, and evaluation pipelines to ship production AI experiences in weeks.',
  },
  {
    title: 'Expand revenue with Micro-SaaS',
    emoji: '🚀',
    category: 'Micro-SaaS',
    path: '/services?category=micro-saas',
    desc: 'Launch repeatable, monetizable tools and self-service experiences on proven infrastructure.',
  },
  {
    title: 'Scale IoT operations',
    emoji: '📡',
    category: 'IoT',
    path: '/services?category=iot',
    desc: 'Connect edge devices, normalize telemetry, and run anomaly detection at scale.',
  },
  {
    title: 'Protect business records',
    emoji: '💾',
    category: 'Database',
    path: '/services?category=database',
    desc: 'Improve query performance, automate backups, and simplify data governance with managed database services.',
  },
];

export default function UseCasesPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Use Cases That <span className="gradient-text">Move the Needle</span>
          </h1>
          <p className="text-slate-300 text-lg max-w-2xl mx-auto">
            From customer experience to infrastructure reliability, these are the patterns where Zion clients see fast, measurable results.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {USE_CASES.map((item) => (
            <Link
              key={item.title}
              href={item.path}
              className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all hover:border-purple-500/40"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{item.emoji}</span>
                <span className="text-[10px] font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/20 px-2 py-0.5 rounded-full">
                  {item.category}
                </span>
              </div>
              <h3 className="text-white font-semibold mt-3 group-hover:text-purple-300 transition-colors">{item.title}</h3>
              <p className="text-slate-400 text-sm mt-2 leading-relaxed">{item.desc}</p>
              <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Explore →</span>
            </Link>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 bg-slate-900/60 border border-slate-800 rounded-2xl px-5 py-3">
            <span className="text-slate-400 text-sm">Want a recommendation based on your business?</span>
            <Link href="/free-contact" className="btn-primary text-sm px-5 py-2.5">Free Consultation</Link>
          </div>
        </div>
      </div>
    </main>
  );
}
