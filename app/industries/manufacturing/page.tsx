import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Factory, BarChart3, Shield, Workflow, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'AI-Powered Manufacturing Solutions | Zion Tech Group',
  description:
    'Transform your manufacturing operations with AI-driven predictive maintenance, quality control, supply chain optimization, and autonomous production scheduling. Increase efficiency by 40%, reduce downtime by 60%, and cut costs with Zion\'s intelligent manufacturing AI.',
  alternates: {
    canonical: 'https://ziontechgroup.com/industries/manufacturing/',
  },
};

const solutions = [
  {
    title: 'Predictive Maintenance AI',
    description:
      'Detect equipment failures 72 hours in advance using machine learning algorithms that analyze vibration, temperature, and performance data patterns.',
    metrics: '60% reduction in unplanned downtime',
    icon: Shield,
    href: '/services/predictive-maintenance-ai',
  },
  {
    title: 'AI Quality Control System',
    description:
      'Automated visual inspection with computer vision that identifies defects with 99.8% accuracy, replacing manual quality checks and reducing waste.',
    metrics: '99.8% defect detection accuracy',
    icon: BarChart3,
    href: '/services/ai-quality-control-system',
  },
  {
    title: 'Supply Chain Optimization',
    description:
      'Real-time demand forecasting and inventory optimization that reduces stockouts by 45% and lowers inventory costs by 30% through AI-powered predictions.',
    metrics: '30% inventory cost reduction',
    icon: Factory,
    href: '/services/supply-chain-optimization-ai',
  },
  {
    title: 'Autonomous Production Scheduling',
    description:
      'AI-driven production planning that dynamically adjusts schedules based on real-time factory conditions, order priorities, and machine availability.',
    metrics: '40% faster production throughput',
    icon: Workflow,
    href: '/services/autonomous-production-scheduling',
  },
];

const benefits = [
  'Reduce unplanned downtime by up to 60%',
  'Increase production efficiency by 40%',
  'Cut quality inspection costs by 50%',
  'Improve on-time delivery rates to 98%',
  'Reduce energy consumption by 25%',
  'Minimize waste through precision automation',
];

export default function ManufacturingPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 left-1/4 h-[28rem] w-[28rem] rounded-full bg-orange-500/15 blur-3xl" />
        <div className="absolute bottom-[-12rem] right-[-8rem] h-[24rem] w-[24rem] rounded-full bg-amber-500/10 blur-3xl" />
      </div>

      {/* Hero Section */}
      <section className="relative mx-auto w-full max-w-5xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-orange-300">
            Manufacturing AI
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            AI-Powered Manufacturing Solutions
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Transform your manufacturing operations with intelligent automation that predicts
            failures, optimizes production, and ensures quality - all driven by Zion&apos;s
            autonomous AI systems.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-orange-700/20 transition hover:-translate-y-0.5"
            >
              Get AI Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/services/"
              className="inline-flex items-center justify-center rounded-xl border border-slate-500/80 bg-slate-900/60 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-orange-300/70 hover:text-white"
            >
              View Manufacturing Services
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Grid */}
      <section className="relative mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          AI Solutions for Manufacturing
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <Link
              key={solution.href}
              href={solution.href}
              className="group flex flex-col rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 transition hover:border-orange-400/70 hover:bg-slate-900"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/15">
                <solution.icon className="h-6 w-6 text-orange-400" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-orange-200">
                {solution.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-300">{solution.description}</p>
              <p className="mt-3 text-xs font-medium text-orange-300">{solution.metrics}</p>
              <div className="mt-4 inline-flex items-center text-xs font-medium text-orange-300">
                Learn More
                <ArrowRight className="ml-1 h-3 w-3 transition group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="relative mx-auto w-full max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Measurable Results
        </h2>
        <ul className="grid gap-4 md:grid-cols-2 lg:max-w-3xl lg:mx-auto">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3 rounded-xl bg-slate-900/65 p-4">
              <TrendingUp className="mt-1 h-5 w-5 flex-shrink-0 text-orange-400" />
              <span className="text-slate-300">{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* CTA Section */}
      <section className="relative mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-orange-500/30 bg-gradient-to-r from-orange-900/40 via-amber-900/30 to-yellow-900/40 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to automate your factory?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-200">
            Schedule a free AI readiness assessment to discover how Zion&apos;s autonomous
            systems can transform your manufacturing operations.
          </p>
          <Link
            href="/contact/"
            className="mt-6 inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Start Your Transformation
          </Link>
        </div>
      </section>
    </div>
  );
}