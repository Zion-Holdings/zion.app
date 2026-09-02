import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Free Tools & Calculators | Zion Tech Group',
  description: 'Free online tools for network diagnostics, security checks, and planning.',
  openGraph: {
    title: 'Free Tools & Calculators | Zion Tech Group',
    description: 'Free online tools for network diagnostics, security checks, and planning.',
    url: 'https://ziontechgroup.com/free-tools/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free Tools & Calculators | Zion Tech Group',
    description: 'Free online tools for network diagnostics, security checks, and planning.',
  },
  alternates: { canonical: '/free-tools/' },
};


export default function FreeToolsPage() {
  return (
<>
    <StandardPage
      title="Free Tools & Calculators"
      subtitle="Practical self-service tools for network diagnostics, security checks, and planning."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Free Tools & Calculators' },
      ]}
      actions={[
        { label: 'Browse all tools', href: '/tools/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-slate-300 mb-6">
          Use these free utilities to assess infrastructure health, compare services, and estimate ROI before talking to sales.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: 'ROI Calculator', href: '/tools/roi-calculator/', desc: 'Estimate return on automation investments.' },
            { name: 'Service Comparison', href: '/tools/service-comparison/', desc: 'Compare service tiers by capability and cost.' },
            { name: 'Port Scanner', href: '/tools/port-scanner/', desc: 'Check open ports and exposure risk.' },
            { name: 'SSL Checker', href: '/tools/ssl-checker/', desc: 'Validate certificate setup and expiry.' },
            { name: 'Platform Status', href: '/tools/health-check/', desc: 'Verify connectivity and endpoint health.' },
            { name: 'AI Service Router', href: '/tools/ai-service-router/', desc: 'Get a recommended AI service stack.' },
          ].map((item) => (
            <a key={item.href} href={item.href} className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-all">
              <h3 className="text-white font-semibold mb-2">{item.name}</h3>
              <p className="text-slate-400 text-sm">{item.desc}</p>
              <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">Open tool →</span>
            </a>
          ))}
        </div>
      </div>
    </StandardPage>
  </>
  );
}