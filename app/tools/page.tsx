import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Tools | Zion Tech Group',
  description: 'Free AI/IT tools for service recommendations, comparisons, SSL checks, and more.',
  openGraph: {
    title: 'Tools | Zion Tech Group',
    description: 'Free AI/IT tools for service recommendations, comparisons, SSL checks.',
    url: 'https://ziontechgroup.com/tools/',
    type: 'website',
  },
  alternates: { canonical: '/tools/' },
};

export default function ToolsPage() {
  return (
    <StandardPage
      title="Tools"
      subtitle="Free utilities built by Zion Tech Group to accelerate your AI and IT initiatives."
      breadcrumbItems={
        [
          { label: 'Home', href: '/' },
          { label: 'Tools' },
        ]
      }
      actions={
        [
          { label: 'Browse services', href: '/services/', style: 'secondary' },
        ]
      }
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        <Link href="/tools/service-recommender" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🤖</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Service Recommender</h3>
          <p className="mt-2 text-sm text-slate-400">Answer a few questions and get a ranked list of best-fit Zion AI/IT services with estimated ROI and timeline.</p>
        </Link>
        <Link href="/tools/service-comparison" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">⚖️</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">Service Comparison</h3>
          <p className="mt-2 text-sm text-slate-400">Side-by-side comparison of AI and IT services across cost, complexity, and expected impact.</p>
        </Link>
        <Link href="/tools/ssl-checker" className="group block rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/30 transition-colors">
          <div className="text-3xl mb-3">🔒</div>
          <h3 className="text-lg font-semibold text-white group-hover:text-purple-300">SSL Checker</h3>
          <p className="mt-2 text-sm text-slate-400">Real-time SSL/TLS certificate health and expiry check for any domain.</p>
        </Link>
      </div>
    </StandardPage>
  );
}
