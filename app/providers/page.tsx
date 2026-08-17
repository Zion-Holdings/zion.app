import StandardPage from '@/components/StandardPage';

export default function ProvidersPage() {
  return (
    <StandardPage
      title="Technology Providers"
      subtitle="Connect with validated technology providers across AI, cloud, security, data, and automation."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Providers' },
      ]}
    />
  );
}
