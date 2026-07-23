import type { Metadata } from 'next';
import Breadcrumb from '@/components/Breadcrumb';

export const metadata: Metadata = {
  title: 'Pricing & Plans | Zion Tech Group',
  description:
    'Engagement models and starting price indicators for AI, IT, and automation services from Zion Tech Group.',
};

const tiers = [
  {
    name: 'Exploration',
    priceLabel: 'Kickstart',
    bullets: [
      'AI readiness assessment',
      'Architecture review',
      'Prioritized roadmap',
    ],
    href: '/contact/',
  },
  {
    name: 'Delivery',
    priceLabel: 'Project',
    bullets: [
      'Implementation sprints',
      'Automation or platform rollout',
      'Testing and knowledge transfer',
    ],
    href: '/contact/',
  },
  {
    name: 'Operations',
    priceLabel: 'Managed',
    bullets: [
      '24/7 monitoring and SRE support',
      'Cost optimization and security updates',
      'Monthly executive reporting',
    ],
    href: '/contact/',
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing' }]} className="mb-8" />
        <h1 className="text-4xl font-bold text-white mb-4">Pricing & Engagement Models</h1>
        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
          We align pricing to outcomes, not just hours. Choose an engagement model that fits your
          maturity, timeline, and risk profile.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {tiers.map((tier) => (
            <div key={tier.name} className="rounded-xl border border-slate-800 bg-slate-900/60 p-6 flex flex-col">
              <h2 className="text-xl font-semibold text-white">{tier.name}</h2>
              <p className="mt-2 text-cyan-400 font-semibold">{tier.priceLabel}</p>
              <ul className="mt-4 list-disc pl-5 text-slate-300 flex-1">
                {tier.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
              <a href={tier.href} className="mt-6 rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950 text-center">Get a scoping call</a>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold text-white">Need something custom?</h2>
          <p className="mt-2 text-slate-300">
            Many engagements start with a short scoping call, then move into fixed-scope delivery.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="/contact/" className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950">Contact us</a>
            <a href="/services/" className="rounded-lg border border-slate-700 px-4 py-2 font-semibold text-slate-200">View services</a>
          </div>
        </div>
      </div>
    </main>
  );
}
