import Link from 'next/link';
import PageTemplate from '@/components/PageTemplate';

export const metadata = {
  title: 'AI Automation | Zion Tech Group',
  description: 'AI automation services and tooling from Zion Tech Group.',
};

export default function AutomationPage() {
  return (
    <PageTemplate
      title="AI Automation"
      subtitle="Streamline operations with practical AI automation."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Automation', href: '/automation/' },
      ]}
      actions={[
        { label: 'Start a project', href: '/start-project/', style: 'primary' },
        { label: 'Contact us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <p>
        Explore automation opportunities across your workflows.
      </p>
      <ul>
        <li>Support ticket routing and response drafting</li>
        <li>Report generation from structured data</li>
        <li>Lead follow-up sequencing and reminders</li>
      </ul>
      <p>
        For tailored options, visit <Link href="/services/">services</Link> or <Link href="/contact/">contact</Link>.
      </p>
    </PageTemplate>
  );
}
