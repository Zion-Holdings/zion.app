import StandardPage from '@/components/StandardPage';

export default function BusinessCustomersPage() {
  return (
    <StandardPage
      title="Enterprise Clients"
      subtitle="Enterprise engagement models, onboarding paths, and success programs."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Enterprise Clients' },
      ]}
    />
  );
}
