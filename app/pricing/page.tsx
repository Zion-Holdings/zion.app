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
    href: 'https://calendly.com/kleber-ziontechgroup',
  },
  {
    name: 'Delivery',
    priceLabel: 'Project',
    bullets: [
      'Implementation sprints',
      'Automation or platform rollout',
      'Testing and knowledge transfer',
    ],
    href: 'https://calendly.com/kleber-ziontechgroup',
  },
  {
    name: 'Operations',
    priceLabel: 'Managed',
    bullets: [
      '24/7 monitoring and SRE support',
      'Cost optimization and security updates',
      'Monthly executive reporting',
    ],
    href: 'https://calendly.com/kleber-ziontechgroup',
  },
];

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <Breadcrumb items={[{ label: 'Home', href: '/' }, { label: 'Pricing', href: '/pricing' }]} className="mb-8" />
        <h1 className="text-4xl font-bold text-white mb-4">Pricing & Engagement Models</h1>
        <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">
          We align pricing to outcomes, not just hours. Choose an engagement model that fits your maturity, timeline, and risk profile.
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
              <a href={tier.href} className="mt-6 rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950 text-center">Book a scoping call</a>
              <p className="mt-3 text-xs text-slate-500 text-center">Prefer email? <a href="mailto:contact@ziontechgroup.com" className="text-cyan-300 hover:underline">contact@ziontechgroup.com</a></p>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-xl font-semibold text-white">Need something custom?</h2>
          <p className="mt-2 text-slate-300">
            Many engagements start with a short scoping call, then move into fixed-scope delivery.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <a href="https://calendly.com/kleber-ziontechgroup" className="rounded-lg bg-cyan-500 px-4 py-2 font-semibold text-slate-950">Schedule via Calendly</a>
            <a href="https://meet.google.com/ouu-khao-kuy" className="rounded-lg border border-slate-700 px-4 py-2 font-semibold text-slate-200">Google Meet</a>
            <a href="/services/" className="rounded-lg border border-slate-700 px-4 py-2 font-semibold text-slate-200">View services</a>
            <a href="https://ziontechgroup.com" className="rounded-lg border border-slate-700 px-4 py-2 font-semibold text-slate-200">Zion Tech Group home</a>
          </div>
          <p className="mt-4 text-slate-400 text-sm">Free AI tools and resources are available at <a href="https://ziontechgroup.com" className="text-cyan-300 hover:underline">ziontechgroup.com</a>.</p>
        </div>
      </div>
    </main>
  );
}
