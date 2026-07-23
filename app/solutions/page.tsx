import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Solutions — Zion Tech Group',
  description: 'Industry-specific AI, IT, and Micro-SaaS solutions for Healthcare, Financial Services, Manufacturing, and more.',
};

const pillars = [
  { title: 'Autonomous Infrastructure', body: 'Self-healing environments with policy-based recovery and cost governance.' },
  { title: 'AI Ops', body: 'Anomaly detection, incident acceleration, and runbook automation across clouds and services.' },
  { title: 'Agentic Workflows', body: 'AI agents that triage tickets, qualify leads, schedule meetings, and execute routine delivery tasks.' },
  { title: 'Continuous Delivery', body: 'Pipeline automation, semantic review, release validation, and SLO-aware rollouts.' },
];

const industries = [
  { name: 'Healthcare', desc: 'HIPAA-compliant AI diagnostics, patient engagement, and clinical automation.', href: '/services/ai-claims-automation/' },
  { name: 'Financial Services', desc: 'RegTech, fraud detection, trading bots, and KYC automation.', href: '/services/ai-first-saas-cost-optimization-and-license-management-for-it-in-2026/' },
  { name: 'Manufacturing', desc: 'Predictive maintenance, supply chain, quality inspection AI.', href: '/services/ai-first-digital-twin-and-asset-simulation-for-industry-in-2026/' },
  { name: 'E-Commerce', desc: 'Recommendation engines, inventory AI, dynamic pricing.', href: '/case-studies/ecommerce/' },
  { name: 'Technology & SaaS', desc: 'Developer tools, platform engineering, dev tooling.', href: '/services/ai-first-application-performance-monitoring-and-observability-for-it-in-2026/' },
  { name: 'Logistics', desc: 'Route optimization, warehouse automation, fleet tracking.', href: '/services/ai-supply-chain-optimization/' },
  { name: 'Government', desc: 'Citizen services, compliance automation, civic AI.', href: '/services/ai-first-identity-governance-and-access-management-for-it-in-2026/' },
  { name: 'Insurance', desc: 'Claims automation, underwriting AI, fraud prevention.', href: '/services/ai-insurance-claims-automation/' },
];

export default function SolutionsPage() {
  return (
    <div className="container-page py-16">
      <h1 className="text-4xl font-bold text-white mb-4">Industry Solutions</h1>
      <p className="text-slate-400 mb-12 max-w-2xl">
        Tailored AI, IT, and Micro-SaaS solutions purpose-built for your industry&apos;s unique challenges and compliance requirements.
      </p>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {industries.map((ind) => (
          <Link key={ind.name} href={ind.href} className="glass-card">
            <h3 className="font-semibold text-white mb-2">{ind.name}</h3>
            <p className="text-slate-400 text-sm">{ind.desc}</p>
            <span className="text-purple-400 text-xs mt-3 inline-block">Learn more →</span>
          </Link>
        ))}
      </div>
    </div>
  );
}
