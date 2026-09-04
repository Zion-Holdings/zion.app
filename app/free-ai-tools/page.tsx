import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Free AI Tools | Zion Tech Group',
  description: 'Free online tools for network diagnostics, SSL checks, service comparison, AI recommendations, and ROI planning.',
  openGraph: {
    title: 'Free AI Tools | Zion Tech Group',
    description: 'Free online tools for network diagnostics, SSL checks, service comparison, AI recommendations, and ROI planning.',
    url: 'https://ziontechgroup.com/free-ai-tools/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Free AI Tools | Zion Tech Group',
    description: 'Free online tools for network diagnostics, SSL checks, service comparison, AI recommendations, and ROI planning.',
  },
  alternates: { canonical: '/free-ai-tools/' },
};


export default function FreeAiToolsPage() {
  return (
<>
    <StandardPage
      title="Free AI Tools"
      subtitle="Self-service utilities to evaluate AI capabilities and IT service fit."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Free AI Tools' },
      ]}
      actions={[
        { label: 'Browse all tools', href: '/tools/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto">
        <p className="text-slate-300 mb-6">
          Explore lightweight tools that preview AI-assisted workflows and basic IT diagnostics.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: 'AI Service Router', href: '/tools/ai-service-router/', desc: 'Find the right AI service for your use case.' },
            { name: 'Service Recommender', href: '/tools/service-recommender/', desc: 'Get a curated service shortlist.' },
            { name: 'ROI Calculator', href: '/tools/roi-calculator/', desc: 'Model cost savings from AI automation.' },
            { name: 'SSL Checker', href: '/tools/ssl-checker/', desc: 'Verify TLS configuration quickly.' },
            { name: 'Port Scanner', href: '/tools/port-scanner/', desc: 'Audit exposure and open ports.' },
            { name: 'Platform Status', href: '/tools/health-check/', desc: 'Check endpoint availability.' },
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