import PageTemplate from '@/components/PageTemplate';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cloud AI Services | Zion Tech Group',
  description: 'Managed cloud AI services for inference, pipelines, and cost governance.',
  alternates: { canonical: '/cloud-ai-services/' },
};

export default function Page() {
  return (
    <PageTemplate
      title="Cloud AI Services"
      description="Managed cloud AI services for inference, pipelines, and cost governance."
      category="Cloud & DevOps"
      heroIcon="☁️"
      actions={[
        { label: 'Contact us', href: '/contact/', style: 'primary' },
        { label: 'Services', href: '/services/', style: 'secondary' },
      ]}
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Cloud AI Services', href: '/cloud-ai-services' },
      ]}
      layout="hero"
    />
  );
}
