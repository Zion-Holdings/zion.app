import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Enterprise Data Strategy | Zion Tech Group',
  description: 'Build a scalable data foundation with modern lakehouse architecture, governance, and real-time analytics.',
  keywords: ["data strategy", "data lakehouse", "data governance", "analytics"],
  openGraph: {
    title: 'Enterprise Data Strategy | Zion Tech Group',
    description: 'Build a scalable data foundation with modern lakehouse architecture, governance, and real-time analytics.',
    url: 'https://ziontechgroup.com/services/enterprise-data-strategy/',
    type: 'website',
  },
  alternates: { canonical: '/services/enterprise-data-strategy/' },
};

export default function Page() {
  return (
    <StandardPage
      title="Enterprise Data Strategy"
      subtitle="Build a scalable data foundation with modern lakehouse architecture, governance, and real-time analytics."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Enterprise Data Strategy' },
      ]}
      actions={[
        { label: 'Book a call', href: 'https://calendly.com/kleber-ziontechgroup', style: 'primary' },
        { label: 'Explore tools', href: '/tools/', style: 'secondary' },
      ]}
    >
      <div class="grid gap-8 max-w-5xl mx-auto">
        <section class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 class="text-2xl font-bold text-white mb-4">Why Enterprise Data Strategy?</h2>
            <p class="text-slate-300 leading-relaxed">
              Build a scalable data foundation with modern lakehouse architecture, governance, and real-time analytics. Our proven methodology delivers measurable ROI
              within 90 days, with full transparency and enterprise-grade security.
            </p>
          </div>
          <div class="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <h3 class="text-lg font-semibold text-white mb-3">Key Features</h3>
            <ul class="space-y-2">
              <li class="flex items-center gap-2 text-slate-300"><span class="text-purple-400">✓</span>Data Architecture</li><li class="flex items-center gap-2 text-slate-300"><span class="text-purple-400">✓</span>Lakehouse Setup</li><li class="flex items-center gap-2 text-slate-300"><span class="text-purple-400">✓</span>Governance Framework</li><li class="flex items-center gap-2 text-slate-300"><span class="text-purple-400">✓</span>Real-Time Analytics</li>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Enterprise Data Strategy", "description": "Build a scalable data foundation with modern architecture."}) }}
      />
    </StandardPage>
  );
}
