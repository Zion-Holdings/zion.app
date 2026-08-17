import { notFound, redirect } from 'next/navigation';
import StandardPage from '@/components/StandardPage';
import type { Metadata } from 'next';

type Params = { slug: string[] };

const SERVICE_CATEGORY_MAP: Record<string, { category: string; label: string }> = {
  'ai-agents-autonomous': { category: 'ai', label: 'AI Agents' },
  'cloud-cost-optimization-service': { category: 'cloud', label: 'Cloud Cost Optimization' },
};

function normalizeSlug(slug: string[]): string {
  return (Array.isArray(slug) ? slug : [slug]).join('/');
}

export function generateStaticParams() {
  return Object.keys(SERVICE_CATEGORY_MAP).map((slug) => ({ slug }));
}

export const metadata: Metadata = {
  title: 'Service | Zion Tech Group',
  description: 'Service details and delivery guidance.',
  openGraph: {
    title: 'Service | Zion Tech Group',
    description: 'Service details and delivery guidance.',
    url: 'https://ziontechgroup.com/services/',
    type: 'website',
    siteName: 'Zion Tech Group',
  },
  alternates: { canonical: '/services/' },
};

export default function ServiceSlugPage({ params }: { params: Params }) {
  const slug = normalizeSlug(params.slug);
  const mapping = SERVICE_CATEGORY_MAP[slug];

  if (!mapping) {
    redirect('/services/');
  }

  return (
    <StandardPage
      title={mapping.label}
      subtitle={`${mapping.label} delivery, patterns, and compliance guidance.`}
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services' },
        { label: mapping.label },
      ]}
    >
      <div className="max-w-5xl mx-auto px-6 py-16">
        <p className="text-slate-300 text-lg leading-relaxed mb-8">
          {mapping.label} delivery, patterns, and compliance guidance from Zion Tech Group.
        </p>
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Delivery</h3>
            <p className="text-slate-400 text-sm">Proven patterns for productionizing {mapping.label.toLowerCase()} capabilities.</p>
          </div>
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
            <h3 className="text-white font-semibold mb-2">Compliance</h3>
            <p className="text-slate-400 text-sm">Governance, controls, and review cycles aligned to common enterprise requirements.</p>
          </div>
        </div>
      </div>
    </StandardPage>
  );
}
