import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata = {
  title: 'Products | Zion Tech Group',
  description: 'Zion AI products and platforms built for managed AI, automation, analytics, and enterprise delivery.',
  openGraph: {
    title: 'Products | Zion Tech Group',
    description: 'Explore Zion AI products and platforms for enterprise automation, analytics, and managed AI.',
    url: 'https://ziontechgroup.com/products/',
    type: 'website',
  },
  alternates: { canonical: '/products/' },
};

const PRODUCTS = [
  { name: 'Zion AI Workflow Automator', slug: 'zion-ai-workflow-automator', category: 'Automation' },
  { name: 'Zion AI Customer Support Pro', slug: 'zion-ai-customer-support-pro', category: 'Support' },
  { name: 'Zion AI Revenue Forecaster', slug: 'zion-ai-revenue-forecaster', category: 'Analytics' },
  { name: 'Zion AI Marketing Automation', slug: 'zion-ai-marketing-automation', category: 'Growth' },
  { name: 'Zion AI Cyber Threat Intel', slug: 'zion-ai-cyber-threat-intel', category: 'Security' },
  { name: 'Zion AI Data Governance', slug: 'zion-ai-data-governance', category: 'Data' },
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
          <Link key={product.slug} href={`/${product.slug}/`} className="glass-card">
            <h3 className="font-semibold text-white mb-2">{product.name}</h3>
            <span className="text-xs text-purple-300">{product.category}</span>
          </Link>
        ))}
      </div>
    </StandardPage>
  );
}
