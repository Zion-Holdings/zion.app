import StandardPage from '@/components/StandardPage';

export default function GovernmentsPage() {
  return (
    <StandardPage
      title="Government"
      subtitle="Secure, compliant, and scalable digital transformation for public sector organizations."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Government' },
      ]}
    />
  );
}
