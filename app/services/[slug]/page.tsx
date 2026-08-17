import { notFound, redirect } from 'next/navigation';
import StandardPage from '@/components/StandardPage';

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
    />
  );
}

export const metadata = {
  title: 'Service | Zion Tech Group',
  description: 'Service details and delivery guidance.',
};
