import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Edge Computing AI | Zion Tech Group',
  description: 'Deploy AI models on edge devices for real-time inference with sub-10ms latency.',
  keywords: ["edge AI", "edge computing", "IoT AI", "real-time inference", "low latency"],
  openGraph: {
    title: 'Edge Computing AI | Zion Tech Group',
    description: 'Deploy AI models on edge devices for real-time inference with sub-10ms latency.',
    url: 'https://ziontechgroup.com/services/edge-computing-ai/',
    type: 'website',
  },
  alternates: { canonical: '/services/edge-computing-ai/' },
};

export default function Page() {
  return (
    <StandardPage
      title="Edge Computing AI"
      subtitle="Deploy AI models on edge devices for real-time inference with sub-10ms latency."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
        { label: 'Edge Computing AI' },
      ]}
      actions={[
        { label: 'Book a call', href: 'https://calendly.com/kleber-ziontechgroup', style: 'primary' },
        { label: 'Explore tools', href: '/tools/', style: 'secondary' },
      ]}
    >
      <div class="grid gap-8 max-w-5xl mx-auto">
        <section class="grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 class="text-2xl font-bold text-white mb-4">Why Edge Computing AI?</h2>
            <p class="text-slate-300 leading-relaxed">
              Deploy AI models on edge devices for real-time inference with sub-10ms latency. Our proven methodology delivers measurable ROI
              within 90 days, with full transparency and enterprise-grade security.
            </p>
          </div>
          <div class="bg-slate-900/60 border border-slate-800 rounded-2xl p-6">
            <h3 class="text-lg font-semibold text-white mb-3">Key Features</h3>
            <ul class="space-y-2">
              <li class="flex items-center gap-2 text-slate-300"><span class="text-purple-400">✓</span>Sub-10ms Inference</li><li class="flex items-center gap-2 text-slate-300"><span class="text-purple-400">✓</span>IoT Integration</li><li class="flex items-center gap-2 text-slate-300"><span class="text-purple-400">✓</span>On-Device ML</li><li class="flex items-center gap-2 text-slate-300"><span class="text-purple-400">✓</span>5G Ready</li>
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify({"@context": "https://schema.org", "@type": "Service", "name": "Edge Computing AI", "description": "Deploy AI on edge devices with sub-10ms inference."}) }}
      />
    </StandardPage>
  );
}
