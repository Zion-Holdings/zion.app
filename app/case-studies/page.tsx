import Link from 'next/link';

const CASE_STUDIES = [
  {
    id: 'ai-manufacturing-quality-inspection',
    title: 'ApexManufacturing cut defects 30% with AI vision',
    description: 'AI computer vision inspection reduced defect escape rate and improved throughput on a high-volume automotive line.',
    category: 'Manufacturing',
    href: '/case-studies/ai-manufacturing-quality-inspection/',
  },
  {
    id: 'fintech-seed-fraud-prevention',
    title: 'Fintech Seed reduced onboarding fraud 48%',
    description: 'AI identity verification and behavioral scoring cut fraudulent account creation without adding onboarding friction.',
    category: 'Financial Services',
    href: '/case-studies/fintech-seed-fraud-prevention/',
  },
  {
    id: 'healthnet-patient-flow-ai-triage',
    title: 'HealthNet cut patient wait times 40% with AI triage',
    description: 'AI intake triage, documentation assistance, and scheduling optimization moved patients faster without sacrificing safety.',
    category: 'Healthcare',
    href: '/case-studies/healthnet-patient-flow-ai-triage/',
  },
  {
    id: 'meridian-ai-mlops-automation',
    title: 'Meridian AI shortened model deployment 55%',
    description: 'MLOps automation, CI/CD validation gates, and model registry hygiene made deployments repeatable and safe.',
    category: 'Technology & SaaS',
    href: '/case-studies/meridian-ai-mlops-automation/',
  },
  {
    id: 'ai-automated-reporting-2-week-to-overnight',
    title: 'AtlasIndustrial collapsed reporting from 2 weeks to overnight',
    description: 'Automated reporting pipeline with anomaly detection and executive-ready narratives saved 120+ hours per month.',
    category: 'Manufacturing & Industrial',
    href: '/case-studies/ai-automated-reporting-2-week-to-overnight/',
  },
  {
    id: 'ai-customer-support-64pct-less-resolution-time',
    title: 'Cloud Systems cut support resolution time 64%',
    description: 'AI intent classification, automated triage, and proactive incident handling reduced mean resolution time.',
    category: 'Cloud & Infrastructure',
    href: '/case-studies/ai-customer-support-64pct-less-resolution-time/',
  },
  {
    id: 'cloud-cost-optimization-35pct-savings',
    title: 'Northgate Finance cut cloud costs 35%',
    description: 'Cloud cost optimization, rightsizing, and automated governance reduced spend with zero downtime.',
    category: 'Cloud & Financial Services',
    href: '/case-studies/cloud-cost-optimization-35pct-savings/',
  },
];

export const metadata = {
  title: 'Case Studies | Zion Tech Group',
  description: 'Proven AI and IT outcomes across manufacturing, healthcare, fintech, SaaS, and cloud.',
  openGraph: {
    title: 'Zion Tech Group Case Studies',
    description: 'Real customer outcomes from AI, IT, cloud, and security engagements.',
    url: 'https://ziontechgroup.com/case-studies/',
    siteName: 'Zion Tech Group',
    type: 'website',
    locale: 'en_US',
  },
  alternates: { canonical: '/case-studies/' },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950">
      <section className="pt-20 pb-16 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-white sm:text-5xl">Customer proof in production</h1>
          <p className="mt-6 text-lg text-slate-300 max-w-2xl">
            These are recent engagements with real outcomes. Use them as templates for what we can build together.
          </p>
        </div>
      </section>
      <section className="py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-6">
            {CASE_STUDIES.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                className="block rounded-2xl border border-slate-800 bg-slate-900/60 hover:border-purple-500/40 transition-all"
              >
                <div className="p-6">
                  <p className="text-xs font-semibold uppercase tracking-widest text-purple-300 mb-2">{item.category}</p>
                  <h2 className="text-xl font-semibold text-white mb-2">{item.title}</h2>
                  <p className="text-sm text-slate-300">{item.description}</p>
                  <span className="mt-4 inline-flex items-center text-sm font-semibold text-purple-300">Read case study →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
