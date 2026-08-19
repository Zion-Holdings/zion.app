import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'AI Data Pipeline | Zion Tech Group',
  description: 'Build real-time ETL pipelines with AI-powered data quality and automated schema detection.',
  keywords: ["data pipeline", "ETL", "data engineering", "real-time data", "data quality"],
  openGraph: {
    title: 'AI Data Pipeline | Zion Tech Group',
    description: 'Build real-time ETL pipelines with AI-powered data quality and automated schema detection.',
    url: 'https://ziontechgroup.com/services/ai-data-pipeline/',
    type: 'website',
  },
  alternates: { canonical: '/services/ai-data-pipeline/' },
};

export default function Page() {
  return (
    <StandardPage
      title="AI Data Pipeline"
      subtitle="Build real-time ETL pipelines with AI-powered data quality and automated schema detection."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'AI Data Pipeline' },
      ]}
      actions={[
        { label: 'Book a call', href: 'https://calendly.com/kleber-ziontechgroup', style: 'primary' },
        { label: 'Explore tools', href: '/tools/', style: 'secondary' },
      ]}
    >
      <div class="grid gap-8 max-w-5xl mx-auto">
        <section class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 class="text-2xl font-bold text-white mb-4">Why AI Data Pipeline?</h2>
            <p class="text-slate-300 leading-relaxed">
              Build real-time ETL pipelines with AI-powered data quality and automated schema detection. Our proven methodology delivers measurable ROI
              within 90 days, with full transparency and enterprise-grade security.
            </p>
          </div>
          <div class="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <h3 class="text-lg font-semibold text-white mb-3">Key Features</h3>
            <ul class="space-y-2">
              <li class="flex items-center gap-2 text-slate-300"><span class="text-purple-400">✓</span>Real-Time ETL</li><li class="flex items-center gap-2 text-slate-300"><span class="text-purple-400">✓</span>Data Quality AI</li><li class="flex items-center gap-2 text-slate-300"><span class="text-purple-400">✓</span>Schema Detection</li><li class="flex items-center gap-2 text-slate-300"><span class="text-purple-400">✓</span>Multi-Source</li>
            </ul>
          </div>
        </section>

        <section class="bg-gradient-to-r from-purple-900/20 to-pink-900/20 border border-purple-700/30 rounded-2xl p-8">
          <h2 class="text-2xl font-bold text-white mb-4">Ready to transform your business?</h2>
          <p class="text-slate-300 mb-6">
            Get a free 30-minute scoping call with our AI specialists.
          </p>
          <div class="flex flex-col sm:flex-row gap-3">
            <a href="https://calendly.com/kleber-ziontechgroup" target="_blank" rel="noopener noreferrer" class="btn-primary text-lg px-8 py-3 text-center">
              Book Your Free Call
            </a>
            <Link href="/contact/" class="btn-secondary text-lg px-8 py-3 text-center">
              Contact Sales
            </Link>
          </div>
        </section>
      </div>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "AI Data Pipeline", "description": "Real-time ETL pipelines with AI-powered data quality."}) }}
      />
    </StandardPage>
  );
}
