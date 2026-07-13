import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, CheckCircle2, Shield, Zap, BarChart3 } from 'lucide-react';

export const metadata = {
  title: 'Free AI Readiness Assessment | Zion Tech Group',
  description:
    'Get a free AI readiness assessment from Zion Tech Group. Discover quick wins for automation, security, cloud, and AI delivery in 5 minutes.',

};

const questions = [
  {
    id: 'automation',
    question: 'How much of your operations are currently automated?',
    options: [
      { label: 'Mostly manual', value: 'manual', score: 1 },
      { label: 'Some automation', value: 'some', score: 2 },
      { label: 'Moderate automation', value: 'moderate', score: 4 },
      { label: 'Highly automated', value: 'high', score: 5 },
    ],
  },
  {
    id: 'security',
    question: 'How mature is your security/access posture?',
    options: [
      { label: 'Basic passwords', value: 'basic', score: 1 },
      { label: 'MFA enabled', value: 'mfa', score: 3 },
      { label: 'SSO only', value: 'sso', score: 4 },
      { label: 'Zero Trust', value: 'zero_trust', score: 5 },
    ],
  },
  {
    id: 'cloud',
    question: 'What is your cloud deployment model?',
    options: [
      { label: 'On-prem only', value: 'on_prem', score: 1 },
      { label: 'Single cloud', value: 'single', score: 3 },
      { label: 'Multi-cloud', value: 'multi', score: 4 },
      { label: 'Hybrid + optimization', value: 'hybrid', score: 5 },
    ],
  },
  {
    id: 'ai',
    question: 'How is AI used in your business today?',
    options: [
      { label: 'Not using AI', value: 'none', score: 1 },
      { label: 'Experimental only', value: 'pilot', score: 2 },
      { label: '1-3 AI use cases in production', value: 'production', score: 4 },
      { label: 'Scaled across 4+ use cases', value: 'scaled', score: 5 },
    ],
  },
];

const advice: Record<number, string[]> = {
  4: [
    'Add an AI chatbot or email triage assistant to reduce delays immediately.',
    'Introduce workflow automation for repetitive approvals and handoffs.',
    'Use a lightweight protection stack: EDR + MFA + backup verification.',
  ],
  8: [
    'Expand AI automation with document processing and knowledge-base search.',
    'Add observability and cost controls so cloud spend stays predictable.',
    'Run quarterly AI-focused reviews on use-case impact and latency.',
  ],
  12: [
    'Advance toward governance, responsible AI, and incident-response readiness.',
    'Integrate AI orchestration across tools with secure data pipelines.',
    'Schedule a strategy review to align AI investments with business outcomes.',
  ],
  17: [
    'You have strong foundations—optimize for speed, resilience, and AI scale.',
    'A short conversation can help prioritize MLOps, security ops, and growth levers.',
  ],
};

function getAdvice(score: number) {
  if (score >= 17) return advice[17];
  if (score >= 12) return advice[12];
  if (score >= 8) return advice[8];
  return advice[4];
}

export default function AIReadinessAssessmentPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-24 left-1/4 h-[26rem] w-[26rem] rounded-full bg-purple-500/10 blur-3xl" />
        <div className="absolute bottom-[-10rem] right-[-6rem] h-[22rem] w-[22rem] rounded-full bg-blue-500/10 blur-3xl" />
      </div>

      <section className="relative mx-auto w-full max-w-5xl px-4 pb-18 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-purple-300">
            Free Assessment
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            AI Readiness Assessment
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Answer 4 quick questions to see where you stand in automation, security,
            cloud, and AI—and get clear next steps from Zion Tech Group.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-cyan-700/20 transition hover:-translate-y-0.5"
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/services/"
              className="inline-flex items-center justify-center rounded-xl border border-slate-500/80 bg-slate-900/60 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-purple-300/70 hover:text-white"
            >
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-2">
          {[
            {
              title: 'Automation baseline',
              text: 'Find repetitive processes worth automating first.',
              icon: Zap,
            },
            {
              title: 'Security posture',
              text: 'Identify protection gaps you can close quickly.',
              icon: Shield,
            },
            {
              title: 'Cloud/Data readiness',
              text: 'See whether your platform supports modern AI workloads.',
              icon: BarChart3,
            },
            {
              title: 'AI maturity',
              text: 'Find high-value, low-risk AI pilots to start now.',
              icon: CheckCircle2,
            },
          ].map((item) => (
            <div
              key={item.title}
              className="flex flex-col rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/15">
                <item.icon className="h-6 w-6 text-purple-400" />
              </div>
              <h2 className="mt-4 text-xl font-semibold text-white">{item.title}</h2>
              <p className="mt-2 flex-1 text-sm text-slate-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-purple-500/30 bg-gradient-to-r from-purple-900/40 via-pink-900/30 to-indigo-900/40 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Want a tailored AI roadmap?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-200">
            Use this assessment as a starting point, then book a short consultation
            to turn your results into a concrete implementation plan.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link
              href="https://calendly.com/kleber-ziontechgroup"
              className="inline-flex items-center justify-center rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
            >
              Book a Free Consultation
            </Link>
            <Link
              href="/ai/"
              className="inline-flex items-center justify-center rounded-xl border border-slate-500/80 bg-slate-900/60 px-6 py-3 text-sm font-semibold text-slate-100 transition hover:border-purple-300/70 hover:text-white"
            >
              Back to AI Lab
            </Link>
          </div>
          <p className="mt-4 text-slate-500 text-xs">
            No credit card required. We focus on practical AI and IT services with measurable impact.
          </p>
        </div>
      </section>
    </div>
  );
}
