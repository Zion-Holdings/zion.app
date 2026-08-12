import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
  description:
    'Zion Tech Group products and Micro-SaaS platforms for AI, automation, analytics, and IT operations.',
  alternates: { canonical: '/products/' },
};

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <section className="py-20 px-4 text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Products</h1>
          <p className="text-lg text-slate-300 max-w-3xl mx-auto mb-10">
            Purpose-built platforms that turn enterprise complexity into repeatable, measurable
            workflows.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { href: '/tools/roi-calculator', title: 'ROI Calculator', desc: 'Estimate the financial impact of AI, cloud, and automation investments.' },
              { href: '/tools/ai-service-router', title: 'AI Service Router', desc: 'Match a business problem to the right AI service in seconds.' },
              { href: '/tools/service-recommender', title: 'Service Recommender', desc: 'Get a ranked shortlist of services across all practice areas.' },
              { href: '/service-comparison', title: 'Service Comparison', desc: 'Compare features, pricing, and timelines across AI, IT, cloud, and automation services.' },
              { href: '/tools/health-check', title: 'Platform Status', desc: 'Autonomous health checks and infrastructure diagnostics.' },
              { href: '/tools/analytics', title: 'Usage Analytics', desc: 'Understand adoption and usage patterns across the platform.' },
            ].map((product) => (
              <Link
                key={product.href}
                href={product.href}
                className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6 hover:border-purple-500/40 hover:bg-slate-800/60 transition-all duration-200 flex flex-col text-left"
              >
                <h2 className="text-lg font-semibold text-white mb-2">{product.title}</h2>
                <p className="text-sm text-slate-400 leading-relaxed flex-1">{product.desc}</p>
                <span className="mt-4 text-sm font-medium text-purple-400">Open →</span>
              </Link>
            ))}
          </div>

          <div className="mt-16">
            <Link href="/configurator/" className="inline-flex items-center rounded-2xl bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-base font-semibold text-white hover:opacity-90 transition-opacity">
              Get Your Custom Proposal →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
