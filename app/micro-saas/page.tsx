import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Micro SaaS | Zion Tech Group',
  description: 'Repeatable tools, automation products, and Micro SaaS offerings from Zion Tech Group.',
  openGraph: {
    title: 'Micro SaaS | Zion Tech Group',
    description: 'Repeatable tools, automation products, and Micro SaaS offerings from Zion Tech Group.',
    url: 'https://ziontechgroup.com/micro-saas/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Micro SaaS | Zion Tech Group',
    description: 'Repeatable tools, automation products, and Micro SaaS offerings from Zion Tech Group.',
  },
  alternates: { canonical: '/micro-saas/' },
};


export default function MicroSaaSPage() {
  return (
<>
    <StandardPage
      title="Micro SaaS"
      subtitle="Repeatable, monetizable tools built on proven infrastructure and real customer feedback."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: 'Micro SaaS' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Developer tools</h3>
          <p className="text-slate-400 text-sm">Utilities, validators, and helpers that save time in daily workflows.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Automation products</h3>
          <p className="text-slate-400 text-sm">Self-service automations that reduce manual work without custom builds.</p>
        </div>
        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Go-to-market</h3>
          <p className="text-slate-400 text-sm">Pricing, onboarding, and support patterns for repeatable SaaS delivery.</p>
        </div>
      </div>
      <div className="flex flex-col sm:flex-row gap-3 mt-10">
        <a href="/contact/" className="btn-primary text-center">Talk to an Engineer</a>
        <a href="/ai-services/" className="btn-secondary text-center">AI Services</a>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">SaaS delivery pattern</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Shared infrastructure to reduce build and hosting costs.</li>
          <li>Usage-based pricing with transparent metrics and billing.</li>
          <li>Self-service onboarding with optional managed support tiers.</li>
          <li>Continuous deployment with feature flags and rollback readiness.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="/services/" className="btn-primary text-center">Browse services</a>
          <a href="/contact/" className="btn-secondary text-center">Contact us</a>
        </div>
      </div>
    </StandardPage>
  </>
  );
}