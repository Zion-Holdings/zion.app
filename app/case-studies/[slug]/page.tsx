import Link from 'next/link';
import { notFound } from 'next/navigation';

const studies = [
  {
    slug: 'ai-customer-support-64pct-less-resolution-time',
    company: 'NovaStream Inc.',
    headline: 'AI Customer Support Agent cut ticket resolution time by 64%',
    metric: '64% Faster Resolution',
    metricSub: 'in the first 30 days',
    tags: ['AI', 'Support', 'Enterprise'],
    relatedServices: ['/services/ai-customer-support-pro/', '/services/ai-email-intelligence/'],
    body: 'NovaStream’s support team was buried under 1,200 weekly tickets. We deployed an AI customer support agent that triaged, routed, and resolved common issues instantly — while escalating complex cases to the right human engineer.',
    results: [
      'First-contact resolution rose from 28% to 71%',
      'Average handle time dropped from 18 minutes to 6.5 minutes',
      'Agent satisfaction score improved from 3.1 to 4.4/5',
    ],
    quote: {
      text: 'Zion Tech Group understood our stack instantly and had it live in 3 days.',
      author: 'Sarah Chen',
      role: 'VP of Engineering',
    },
  },
  {
    slug: 'ai-automated-reporting-2-week-to-overnight',
    company: 'DataPillar Analytics',
    headline: 'Automated Reporting Engine turned a 2-week process into an overnight job',
    metric: '2 Weeks → Overnight',
    metricSub: 'same output, zero manual steps',
    tags: ['Data', 'Automation', 'Analytics'],
    relatedServices: ['/services/ai-workflow-automation/', '/services/business-intelligence/'],
    body: 'DataPillar’s finance and operations teams spent 2 weeks every month consolidating reports from 14 sources. We built an AI-powered reporting pipeline that normalizes, validates, and publishes dashboards automatically.',
    results: [
      'Report cycle reduced from 14 days to < 8 hours',
      'Data freshness improved from monthly to hourly',
      'Saved ~320 engineering hours per month',
    ],
    quote: {
      text: 'ROI was visible in the first billing cycle.',
      author: 'Marcus Thompson',
      role: 'CTO',
    },
  },
  {
    slug: 'cloud-cost-optimization-35pct-savings',
    company: 'Acme Health Systems',
    headline: 'Cloud Cost Optimization Platform saved $420K/year',
    metric: '$420K Annual Savings',
    metricSub: 'without performance loss',
    tags: ['Cloud', 'FinOps', 'Healthcare'],
    relatedServices: ['/services/cloud-cost-optimization-platform/', '/services/devops-automation/'],
    body: 'Acme’s cloud footprint had grown unchecked across 6 AWS accounts. We implemented rightsizing, reserved-instance optimization, and idle-resource cleanup — with guardrails to prevent drift.',
    results: [
      'Monthly cloud bill dropped 35% within 60 days',
      'Idle resource waste reduced from 28% to 4%',
      'Zero patient-facing performance regressions',
    ],
    quote: {
      text: 'They treated our infrastructure like it was their own.',
      author: 'Diana Reyes',
      role: 'CTO',
    },
  },
  {
    slug: 'cyber-incident-response-retainer-99pct-faster-containment',
    company: 'Fintech Startup Series B',
    headline: 'Incident Response Retainer contained a breach 99% faster',
    metric: '99% Faster Containment',
    metricSub: 'under 12 minutes',
    tags: ['Security', 'Incident Response', 'Compliance'],
    relatedServices: ['/services/cybersecurity/', '/services/ai-incident-response-and-oncall-automation/'],
    body: 'When a credential-exposure alert fired at 2 AM, the on-call engineer was unavailable. Our incident response retainer activated automatically: isolated the blast radius, rotated keys, and opened a postmortem draft within minutes.',
    results: [
      'Containment time: 12 minutes vs. industry average of 8 hours',
      'No customer data exposure confirmed',
      'SOC 2 evidence package delivered within 48 hours',
    ],
    quote: {
      text: 'Having Zion on retainer felt like having a world-class SOC without the hiring cycle.',
      author: 'James Park',
      role: 'CISO',
    },
  },
  {
    slug: 'ai-meeting-notes-action-items-3x-execution-speed',
    company: 'ScaleOps Consulting',
    headline: 'AI Meeting Notes & Action Items tripled execution speed',
    metric: '3× Execution Speed',
    metricSub: 'actionable items within minutes',
    tags: ['AI', 'Productivity', 'Enterprise'],
    relatedServices: ['/services/ai-meeting-intelligence-minutes-and-actions/', '/services/ai-workflow-automation/'],
    body: 'ScaleOps’ leadership team ran 30+ weekly meetings with no standardized follow-up. We deployed an AI meeting assistant that transcribes, summarizes, assigns actions, and syncs them to their project tracker.',
    results: [
      'Meeting follow-up time dropped from 2 days to 15 minutes',
      'Action-item completion rate rose from 42% to 87%',
      'Leadership visibility improved with auto-generated weekly recaps',
    ],
    quote: {
      text: 'It’s like having an executive assistant that never misses a detail.',
      author: 'Priya Nair',
      role: 'COO',
    },
  },
  {
    slug: 'ai-knowledge-base-rag-80pct-faster-onboarding',
    company: 'Global Manufacturing Co.',
    headline: 'AI Knowledge Base & RAG Platform cut onboarding time by 80%',
    metric: '80% Faster Onboarding',
    metricSub: 'new engineers productive in days',
    tags: ['AI', 'RAG', 'Enterprise'],
    relatedServices: ['/services/ai-knowledge-base-rag-platform/', '/services/document-processing/'],
    body: 'New engineers took 3–4 weeks to find answers across scattered Confluence, PDFs, and Slack threads. We deployed a RAG-powered knowledge base that answers technical questions with source citations instantly.',
    results: [
      'New hire time-to-productivity cut from 21 days to 4 days',
      'Support ticket load on senior engineers dropped 60%',
      'Knowledge base coverage expanded to 12 internal systems',
    ],
    quote: {
      text: 'Our senior engineers finally have time to build instead of answering the same questions.',
      author: 'Robert Liu',
      role: 'VP of Engineering',
    },
  },
];

export async function generateStaticParams() {
  return studies.map((study) => ({ slug: study.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = studies.find((s) => s.slug === slug);
  if (!study) return { title: 'Case Study Not Found | Zion Tech Group' };
  return {
    title: `${study.headline} | Zion Tech Group`,
    description: study.body,
  };
}

export default async function CaseStudyDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const study = studies.find((s) => s.slug === slug);
  if (!study) return notFound();

  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container-page max-w-4xl py-20">
        <div className="flex items-center gap-3 mb-6">
          <Link href="/case-studies/" className="text-purple-300 hover:text-purple-200 text-sm">
            ← Back to Case Studies
          </Link>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {study.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-semibold uppercase tracking-wider bg-slate-800 text-slate-300 border border-slate-700 px-2.5 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">{study.headline}</h1>
        <p className="text-slate-400 text-sm mb-8">Client: {study.company}</p>

        <div className="glass-card p-6 md:p-8 mb-10">
          <p className="text-slate-300 leading-relaxed mb-6">{study.body}</p>

          <div className="grid sm:grid-cols-3 gap-3 mb-6">
            {study.results.map((result) => (
              <div key={result} className="rounded-xl bg-slate-950/60 border border-slate-800 p-4">
                <p className="text-sm text-slate-300">{result}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl bg-slate-950/60 border border-slate-800 p-5">
            <blockquote className="text-slate-300 italic mb-3">“{study.quote.text}”</blockquote>
            <p className="text-sm text-slate-400">
              <span className="text-white font-semibold">{study.quote.author}</span>
              <span className="mx-2 text-slate-600">·</span>
              {study.quote.role}
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-3">
          <Link href="/contact/" className="btn-primary text-center">
            Request Similar Results
          </Link>
          <Link href="/services/" className="btn-secondary text-center">
            Explore Services
          </Link>
        </div>

        <div className="mt-10">
          <h3 className="text-sm font-semibold text-slate-300 mb-2">Related services</h3>
          <div className="flex flex-wrap gap-2">
            {study.relatedServices.map((href) => (
              <Link key={href} href={href} className="text-sm text-purple-300 hover:text-purple-200 underline">
                {href.replace('/services/', '').replace('/', '')}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
