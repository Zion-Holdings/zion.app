import StandardPage from '@/components/StandardPage';

export default function IntegratorsPage() {
  return (
    <StandardPage
      title="System Integrators"
      subtitle="Find vetted integrators who implement and operate production-grade technology stacks."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Integrators' },
      ]}
    />
  );
}
