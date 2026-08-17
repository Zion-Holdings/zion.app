import StandardPage from '@/components/StandardPage';

export default function ITVendorsPage() {
  return (
    <StandardPage
      title="IT Vendors"
      subtitle="Explore IT vendor partners for procurement, support, and managed delivery."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'IT Vendors' },
      ]}
    />
  );
}
