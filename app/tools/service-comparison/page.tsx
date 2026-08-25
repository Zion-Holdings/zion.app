import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Service Comparison | Zion Tech Group',
  description: 'Side-by-side comparison of AI and IT services across cost, complexity, and expected impact.',
  openGraph: {
    title: 'Service Comparison | Zion Tech Group',
    description: 'Compare Zion AI/IT services side by side.',
    url: 'https://ziontechgroup.com/tools/service-comparison',
    type: 'website',
  },
  alternates: { canonical: '/tools/service-comparison' },
};

export default function ServiceComparisonPage() {
  return (
    <StandardPage
      title="Service Comparison"
      subtitle="Compare AI and IT services across cost, complexity, and expected impact."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'Service Comparison' },
      ]}
    >
      <div className="prose prose-invert max-w-3xl">
        <p>The service comparison tool will let you compare Zion services side by side. Stay tuned.</p>
      </div>
    </StandardPage>
  );
}
