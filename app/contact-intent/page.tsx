import Link from 'next/link';
import PageTemplate from '@/components/PageTemplate';

export const metadata = {
  title: 'Contact Intent | Zion Tech Group',
  description: 'Contact page for partnership and project inquiries.',
};

export default function ContactIntentPage() {
  return (
    <PageTemplate
      title="Contact Intent"
      subtitle="We route inquiries to the right team."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Contact Intent', href: '/contact-intent/' },
      ]}
      actions={[
        { label: 'Go to contact', href: '/contact/', style: 'primary' },
        { label: 'Partnerships', href: '/partners/', style: 'secondary' },
      ]}
    >
      <p>
        This page clarifies inquiry types before submission.
      </p>
      <ul>
        <li>New project inquiry</li>
        <li>Partnership or reseller discussion</li>
        <li>Support escalation</li>
      </ul>
      <p>
        Continue at <Link href="/contact/">/contact/</Link>.
      </p>
    </PageTemplate>
  );
}
