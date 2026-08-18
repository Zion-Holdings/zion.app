import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Retail & E-Commerce Solutions | Zion Tech Group',
  description: 'Personalization, demand forecasting, checkout optimization, and support automation for retail and e-commerce.',
  openGraph: {
    title: 'Retail & E-Commerce Solutions | Zion Tech Group',
    description: 'Retail and e-commerce delivery patterns and AI implementation guidance.',
    url: 'https://ziontechgroup.com/solutions/retail/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Retail & E-Commerce Solutions | Zion Tech Group',
    description: 'Retail and e-commerce delivery patterns and AI implementation guidance.',
  },
  alternates: { canonical: '/solutions/retail/' },
};


export default function RetailSolutionsPage() {
  return (
<>
    <StandardPage
      title="Retail & E-Commerce"
      subtitle="Personalization, demand forecasting, checkout optimization, and support automation for modern commerce."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Solutions', href: '/solutions/' },
        { label: 'Retail & E-Commerce' },
      ]}
      actions={[
        { label: 'Start a project', href: '/contact/', style: 'primary' },
        { label: 'Browse services', href: '/services/', style: 'secondary' },
      ]}
    >
      <div className="max-w-5xl mx-auto grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Recommendation engine</h3>
          <p className="text-slate-400 text-sm">Increase conversion with behavior-aware product and content recommendations.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Pricing intelligence</h3>
          <p className="text-slate-400 text-sm">Competitive and demand-driven pricing with guardrails for margin protection.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Support automation</h3>
          <p className="text-slate-400 text-sm">Returns, tracking, and post-purchase support workflows that reduce ticket volume.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Checkout optimization</h3>
          <p className="text-slate-400 text-sm">Friction reduction, payment routing, and fraud prevention in the checkout flow.</p>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-10 rounded-2xl border border-purple-500/30 bg-purple-900/20 p-6">
        <h2 className="text-xl font-bold text-white mb-2">Need a commerce roadmap?</h2>
        <p className="text-slate-300 text-sm mb-4">We can map quick wins and longer-term AI investments for your catalog, audience, and operations.</p>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link href="/contact/" className="btn-primary text-center">Contact us</Link>
          <Link href="/services/" className="btn-secondary text-center">Browse services</Link>
        </div>
      </div>
      <div className="max-w-3xl mx-auto mt-6 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
        <h2 className="text-lg font-bold text-white mb-3">Related resources</h2>
        <div className="grid gap-3 sm:grid-cols-2">
          <Link href="/tools/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Developer Tools</h3>
            <p className="text-slate-400 text-xs">Free utilities for JSON, JWT, regex, QR, and text processing.</p>
            <span className="text-purple-300 text-xs font-semibold mt-2 inline-block">Use tools →</span>
          </Link>
          <Link href="/blog/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
            <h3 className="text-white font-semibold text-sm mb-1">Insights & Guides</h3>
            <p className="text-slate-400 text-xs">Practical guidance on AI, IT, automation, and enterprise delivery.</p>
            <span className="text-purple-300 text-xs font-semibold mt-2 inline-block">Read blog →</span>
          </Link>
        </div>
      </div>
    </StandardPage>
  </>
  );
}