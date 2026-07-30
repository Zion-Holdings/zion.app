import Link from 'next/link';
import type { Metadata } from 'next';
import { ArrowRight, Network, Signal, Shield, BarChart3, TrendingUp } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Telecommunications AI Solutions | Zion Tech Group',
  description:
    'Revolutionize your telecom operations with AI-powered network optimization, predictive maintenance, customer churn prediction, and 5G infrastructure management. Increase network efficiency by 45% and reduce churn by 35% with Zion\'s intelligent telecom solutions.',
  alternates: {
    canonical: 'https://ziontechgroup.com/industries/telecommunications/',
  },
};

const solutions = [
  {
    title: '5G Network Optimization AI',
    description:
      'AI-driven network management that dynamically allocates bandwidth, predicts congestion, and optimizes 5G infrastructure performance in real-time.',
    metrics: '45% network efficiency increase',
    icon: Network,
    href: '/services/5g-network-optimization-ai',
  },
  {
    title: 'Customer Churn Prediction',
    description:
      'Machine learning models that identify at-risk customers 30 days in advance with 92% accuracy, enabling proactive retention strategies.',
    metrics: '35% churn reduction',
    icon: Signal,
    href: '/services/customer-churn-prediction-telecom',
  },
  {
    title: 'Predictive Network Maintenance',
    description:
      'AI-powered infrastructure monitoring that predicts cell tower and equipment failures, reducing downtime by 60%.',
    metrics: '60% infrastructure downtime reduction',
    icon: Shield,
    href: '/services/predictive-network-maintenance',
  },
  {
    title: 'Network Traffic Analytics',
    description:
      'Real-time analysis of traffic patterns to optimize routing, reduce latency, and improve user experience across your network.',
    metrics: '50% latency reduction',
    icon: BarChart3,
    href: '/services/network-traffic-analytics',
  },
];

const benefits = [
  'Reduce network congestion by 55%',
  'Increase customer retention by 35%',
  'Cut infrastructure maintenance costs by 40%',
  'Improve network uptime to 99.99%',
  'Optimize bandwidth allocation in real-time',
  'Enhance customer experience with faster speeds',
];

export default function TelecommunicationsPage() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-20 left-1/4 h-[28rem] w-[28rem] rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute bottom-[-12rem] right-[-8rem] h-[24rem] w-[24rem] rounded-full bg-cyan-500/10 blur-3xl" />
      </div>

      <section className="relative mx-auto w-full max-w-5xl px-4 pb-16 pt-16 sm:px-6 lg:px-8 lg:pt-24">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-300">
            Telecom AI
          </p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">
            AI Solutions for Telecommunications
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            Revolutionize your telecom operations with intelligent automation that optimizes
            networks, predicts customer behavior, and manages 5G infrastructure - all driven
            by Zion's autonomous AI systems.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center rounded-xl bg-gradient-to-r from-blue-600 via-cyan-600 to-teal-600 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:-translate-y-0.5"
            >
              Get Telecom Assessment
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/services/"
              className="inline-flex items-center justify-center rounded-xl border border-slate-500/80 bg-slate-900/60 px-6 py-3 text-base font-semibold text-slate-100 transition hover:border-blue-300/70 hover:text-white"
            >
              View Telecom Services
            </Link>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          AI Solutions for Telecom
        </h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {solutions.map((solution) => (
            <Link
              key={solution.href}
              href={solution.href}
              className="group flex flex-col rounded-2xl border border-slate-700/70 bg-slate-900/65 p-6 transition hover:border-blue-400/70 hover:bg-slate-900"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/15">
                <solution.icon className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="mt-4 text-xl font-semibold text-white group-hover:text-blue-200">
                {solution.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-slate-300">{solution.description}</p>
              <p className="mt-3 text-xs font-medium text-blue-300">{solution.metrics}</p>
              <div className="mt-4 inline-flex items-center text-xs font-medium text-blue-300">
                Learn More
                <ArrowRight className="ml-1 h-3 w-3 transition group-hover:translate-x-0.5" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-5xl px-4 pb-24 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">
          Transform Your Network
        </h2>
        <ul className="grid gap-4 md:grid-cols-2 lg:max-w-3xl lg:mx-auto">
          {benefits.map((benefit) => (
            <li key={benefit} className="flex items-start gap-3 rounded-xl bg-slate-900/65 p-4">
              <TrendingUp className="mt-1 h-5 w-5 flex-shrink-0 text-blue-400" />
              <span className="text-slate-300">{benefit}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="relative mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-blue-500/30 bg-gradient-to-r from-blue-900/40 via-cyan-900/30 to-teal-900/40 p-8 text-center sm:p-12">
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Transform your telecom with AI
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-slate-200">
            Schedule a free telecom optimization assessment to discover how Zion's
            autonomous systems can improve your network performance and customer satisfaction.
          </p>
          <Link
            href="/contact/"
            className="mt-6 inline-block rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Start Your Assessment
          </Link>
        </div>
      </section>
    </div>
  );
}