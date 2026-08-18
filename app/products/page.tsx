import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Products | Zion Tech Group',
  description: 'Zion AI products and platforms built for managed AI, automation, analytics, and enterprise delivery.',
  openGraph: {
    title: 'Products | Zion Tech Group',
    description: 'Explore Zion AI products and platforms for enterprise automation, analytics, and managed AI.',
    url: 'https://ziontechgroup.com/products/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products | Zion Tech Group',
    description: 'Explore Zion AI products and platforms for enterprise automation, analytics, and managed AI.',
  },
  alternates: { canonical: '/products/' },
};

const PRODUCTS = [
  { name: 'Zion AI Workflow Automator', category: 'Automation' },
  { name: 'Zion AI Customer Support Pro', category: 'Support' },
  { name: 'Zion AI Revenue Forecaster', category: 'Analytics' },
  { name: 'Zion AI Marketing Automation', category: 'Growth' },
  { name: 'Zion AI Cyber Threat Intel', category: 'Security' },
  { name: 'Zion AI Data Governance', category: 'Data' },
];


export default function ProductsPage() {
  return (
    <StandardPage
      title="Products"
      subtitle="Purpose-built AI platforms and tools designed to run in production, with clear setup paths and measurable outcomes."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Products' },
      ]}
      actions={[
        { label: 'Browse services', href: '/services/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((product) => (
          <Link key={product.name} href="/services/" className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 hover:border-purple-500/40 transition-colors">
            <span className="text-xs text-purple-300 mb-2 block">{product.category}</span>
            <h3 className="text-white font-semibold mb-2">{product.name}</h3>
            <p className="text-slate-400 text-sm">Available through services engagements and tailored delivery.</p>
            <span className="text-purple-300 text-xs font-semibold mt-3 inline-block">View in services →</span>
          </Link>
        ))}
      </div>
    </StandardPage>
  );
}