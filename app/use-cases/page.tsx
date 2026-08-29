import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Use Cases | Zion Tech Group',
  description: 'Explore Zion Tech Group use cases across industries: AI, cloud, security, automation, data, IoT, and beyond.',
  openGraph: {
    title: 'Use Cases | Zion Tech Group',
    description: 'High-signal use cases for AI, IT, and automation engagements.',
    url: 'https://ziontechgroup.com/use-cases/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Use Cases | Zion Tech Group',
    description: 'High-signal use cases for AI, IT, and automation engagements.',
  },
  alternates: { canonical: '/use-cases/' },
};

const USE_CASES = [
  { title: 'Reduce support workload', emoji: '🤖', category: 'Automation', path: '/services/?category=automation', desc: 'Deploy AI triage, ticket routing, and knowledge-base assistants that lower ticket volume and speed resolution.' },
  { title: 'Modernize cloud infrastructure', emoji: '☁️', category: 'Cloud', path: '/services/?category=cloud', desc: 'Migrate workloads, tighten observability, and reduce cloud spend without introducing reliability risk.' },
  { title: 'Strengthen security posture', emoji: '🔐', category: 'Security', path: '/services/?category=security', desc: 'Run penetration testing, secure identity flows, and prepare incident-response playbooks before breaches happen.' },
  { title: 'Turn data into decisions', emoji: '📊', category: 'Data', path: '/services/?category=data', desc: 'Build governed analytics pipelines, dashboards, and forecasting models that turn raw data into action.' },
  { title: 'Ship AI products faster', emoji: '🧠', category: 'AI', path: '/services/?category=ai', desc: 'Use pretrained models, RAG systems, and evaluation pipelines to ship production AI experiences in weeks.' },
  { title: 'Expand revenue with Micro-SaaS', emoji: '🚀', category: 'Micro-SaaS', path: '/services/?category=micro-saas', desc: 'Launch repeatable, monetizable tools and self-service experiences on proven infrastructure.' },
  { title: 'Scale IoT operations', emoji: '📡', category: 'IoT', path: '/services/?category=iot', desc: 'Connect edge devices, normalize telemetry, and run anomaly detection at scale.' },
  { title: 'Protect business records', emoji: '💾', category: 'Database', path: '/services/?category=database', desc: 'Improve query performance, automate backups, and simplify data governance with managed database services.' },
];

const INDUSTRIES = [
  { key: 'technology-&-saas', label: 'Technology & SaaS', emoji: '🏭', focus: 'AI analytics, observability, and platform automation' },
  { key: 'financial-services-&-fintech', label: 'Financial Services', emoji: '💳', focus: 'Fraud defense, compliance, and payment intelligence' },
  { key: 'healthcare-&-life-sciences', label: 'Healthcare', emoji: '🏥', focus: 'Clinical operations, diagnostics, and patient pathways' },
  { key: 'retail-&-e-commerce', label: 'Retail & E-Commerce', emoji: '🛒', focus: 'Personalization, demand forecasting, and checkout optimization' },
  { key: 'logistics-&-supply-chain', label: 'Logistics', emoji: '🚚', focus: 'Routing, tracking, and warehouse automation' },
  { key: 'education-&-research', label: 'Education & Research', emoji: '🎓', focus: 'Learning intelligence, assessment automation, and research ops' },
];


export default function UseCasesPage() {
  return (
<>
    <StandardPage
      title="Use Cases"
      subtitle="From customer experience to infrastructure reliability, these are the patterns where Zion clients see fast, measurable results."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Use Cases' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {USE_CASES.map((item) => (
          <Link key={item.title} href={item.path} className="group relative rounded-2xl border border-slate-800 bg-slate-900/60 p-5 transition-all hover:border-purple-500/40">
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

      <section className="mt-20 border-t border-slate-800/60 pt-16">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-white mb-3">By industry</h2>
          <p className="text-slate-300 max-w-2xl mx-auto">Pick your context and we’ll map the highest-signal first engagement.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {INDUSTRIES.map((ind) => (
            <div key={ind.key} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 hover:border-purple-500/40 transition-all">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-2xl">{ind.emoji}</span>
                <div>
                  <div className="text-white font-semibold">{ind.label}</div>
                  <div className="text-slate-400 text-xs">{ind.focus}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 mt-3">
                <Link href="/services/?category=ai" className="text-xs text-purple-300 hover:text-purple-200">AI services →</Link>
                <Link href="/use-cases/" className="text-xs text-slate-300 hover:text-white">Use cases →</Link>
                <Link href="/contact/" className="text-xs text-slate-300 hover:text-white">Talk to us →</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    
      <div className="mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">Explore related</h2>
        <div className="grid gap-4 sm:grid-cols-3">
          <Link href="/services/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Services</h3>
            <p className="text-slate-400 text-xs mb-2">AI, IT, and automation services with measurable outcomes.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">View services →</span>
          </Link>
          <Link href="/blog/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Insights</h3>
            <p className="text-slate-400 text-xs mb-2">Guides on AI delivery, security, data, and DevOps.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Read blog →</span>
          </Link>
          <Link href="/contact/" className="rounded-xl border border-slate-700 bg-slate-950 p-5 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Contact</h3>
            <p className="text-slate-400 text-xs mb-2">Talk with Zion about your environment and timeline.</p>
            <span className="text-purple-300 text-xs font-semibold inline-block">Contact us →</span>
          </Link>
        </div>
      </div>

    </StandardPage>
  </>
  );
}