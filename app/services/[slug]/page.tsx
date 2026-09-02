import { notFound, redirect } from 'next/navigation';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import type { Metadata } from 'next';

type Params = { slug: string[] };

const SERVICE_CATEGORY_MAP: Record<string, { category: string; label: string }> = {
  'ai-agents-autonomous': { category: 'ai', label: 'AI Agents' },
  'cloud-cost-optimization-service': { category: 'cloud', label: 'Cloud Cost Optimization' },
  'managed-ai-operations': { category: 'ai', label: 'Managed AI' },
  'ai-strategy-roadmap': { category: 'ai', label: 'AI Strategy' },
  'cloud-migration': { category: 'cloud', label: 'Cloud Migration' },
  'security-compliance-audit': { category: 'security', label: 'Security & Compliance' },
  'data-analytics-platform': { category: 'data', label: 'Data Analytics' },
  'automation-orchestration': { category: 'automation', label: 'Automation' },
  'micro-saas-launch': { category: 'micro-saas', label: 'Micro-SaaS Launch' },
  'incident-response-retainer': { category: 'it', label: 'Incident Response' },
};

function normalizeSlug(slug: string[]): string {
  return (Array.isArray(slug) ? slug : [slug]).join('/');
}

export function generateStaticParams() {
  return Object.keys(SERVICE_CATEGORY_MAP).map((slug) => ({ slug }));
}

export const metadata = {
  title: 'Service | Zion Tech Group',
  description: 'Service details and delivery guidance.',
  openGraph: {
    title: 'Service | Zion Tech Group',
    description: 'Service details and delivery guidance.',
    url: 'https://ziontechgroup.com/services/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Service | Zion Tech Group',
    description: 'Service details and delivery guidance.',
  },
  alternates: { canonical: `https://ziontechgroup.com/services/${slug}/` },
};

const jsonLd = {"@context": "https://schema.org", "@type": "WebPage", "name": "", "description": "", "url": "https://ziontechgroup.com/services/[slug]/"};

export default function ServiceSlugPage({ params }: { params: Params }) {
  const slug = normalizeSlug(params.slug);
  const mapping = SERVICE_CATEGORY_MAP[slug];

  if (!mapping) {
    redirect('/services/');
  }

  return (
<>
    <StandardPage
      title={mapping.label}
      subtitle={`${mapping.label} delivery, patterns, and compliance guidance.`}
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Services', href: '/services/' },
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
        <div className="max-w-3xl mx-auto mt-10 rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h2 className="text-lg font-bold text-white mb-3">Related offerings</h2>
          <div className="grid gap-3 sm:grid-cols-3">
            <Link href="/solutions/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">Industry Solutions</h3>
              <p className="text-slate-400 text-xs mb-2">Purpose-built AI and IT solutions by industry.</p>
              <span className="text-purple-300 text-xs font-semibold inline-block">View solutions →</span>
            </Link>
            <Link href="/tools/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">Developer Tools</h3>
              <p className="text-slate-400 text-xs mb-2">Free utilities for JSON, JWT, regex, QR, and text processing.</p>
              <span className="text-purple-300 text-xs font-semibold inline-block">Use tools →</span>
            </Link>
            <Link href="/blog/" className="rounded-xl border border-slate-700 bg-slate-950 p-4 hover:border-purple-500/40">
              <h3 className="text-white font-semibold text-sm mb-1">Insights & Guides</h3>
              <p className="text-slate-400 text-xs mb-2">Practical guidance on AI, IT, automation, and enterprise delivery.</p>
              <span className="text-purple-300 text-xs font-semibold inline-block">Read blog →</span>
            </Link>
          </div>
        </div>
      </div>
    </StandardPage>
  </>
  );
}