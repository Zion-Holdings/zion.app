import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Managed SOC Pricing | Zion Tech Group',
  description:
    'Transparent managed SOC pricing: per-device, per-user, and outcome-based tiers with 24/7 monitoring and AI-enhanced detection.',
  alternates: { canonical: '/managed-soc-pricing/' },
};

const tiers = [
  { title: 'Starter', body: 'Up to 50 devices, basic alerting, email support.', price: '$3,000/mo' },
  { title: 'Growth', body: 'Up to 250 devices, 24/7 monitoring, incident response.', price: '$8,500/mo' },
  { title: 'Enterprise', body: 'Unlimited coverage, dedicated analysts, custom SLAs.', price: 'Talk to us' },
];

export default function ManagedSocPricingPage() {
  return (
    <StandardPage
      title="Managed SOC Pricing"
      subtitle="Transparent managed SOC pricing with 24/7 monitoring, incident response, and AI-enhanced detection."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Managed SOC Pricing' },
      ]}
      actions={[
        { label: 'Get started', href: '/pricing/', style: 'primary' },
        { label: 'Talk to security', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-3 max-w-6xl mx-auto">
        {tiers.map((tier) => (
          <div key={tier.title} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h2 className="text-white font-semibold mb-2">{tier.title}</h2>
            <p className="text-slate-400 text-sm mb-4">{tier.body}</p>
            <p className="text-white text-xl font-bold">{tier.price}</p>
          </div>
        ))}
      </div>
    </StandardPage>
  );
}
