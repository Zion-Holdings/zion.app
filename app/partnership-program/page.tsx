import Link from 'next/link';
import PageTemplate from '@/components/PageTemplate';

export const metadata = {
  title: 'Partnership Program | Zion Tech Group',
  description: 'Partnership program details and application pathway.',
};

export default function PartnershipProgramPage() {
  return (
    <PageTemplate
      title="Partnership Program"
      subtitle="Collaborate on delivery, co-sell, or integration."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Partnership Program', href: '/partnership-program/' },
      ]}
      actions={[
        { label: 'Partners overview', href: '/partners/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <p>
        Partnerships work best when roles and incentives are clear.
      </p>
      <ul>
        <li>Integration and implementation partners</li>
        <li>Co-sell and referral arrangements</li>
        <li>Reseller and marketplace pathways</li>
      </ul>
      <p>
        Start with <Link href="/partners/">partners overview</Link> or <Link href="/contact/">contact</Link>.
      </p>
    </PageTemplate>
  );
}
