import Link from 'next/link';
import PageTemplate from '@/components/PageTemplate';

export const metadata = {
  title: 'Start a Project | Zion Tech Group',
  description: 'Start your AI or IT project with Zion Tech Group.',
};

export default function StartProjectPage() {
  return (
    <PageTemplate
      title="Start a Project"
      subtitle="Tell us about your goals and constraints."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Start a Project', href: '/start-project/' },
      ]}
      actions={[
        { label: 'Contact us', href: '/contact/', variant: 'primary' },
        { label: 'See services', href: '/services/', variant: 'secondary' },
      ]}
    >
      <p>
        We usually start with outcomes, timelines, and integration constraints.
      </p>
      <ul>
        <li>Primary goal and success metrics</li>
        <li>Systems and data sources involved</li>
        <li>Timeline and internal stakeholders</li>
      </ul>
      <p>
        Ready to continue? Use the <Link href="/contact/">contact form</Link>.
      </p>
    </PageTemplate>
  );
}
