import type { Metadata } from 'next';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'SSL Checker | Zion Tech Group',
  description: 'Real-time SSL/TLS certificate health and expiry check for any domain.',
  openGraph: {
    title: 'SSL Checker | Zion Tech Group',
    description: 'Check SSL/TLS certificate health and expiry for any domain.',
    url: 'https://ziontechgroup.com/tools/ssl-checker',
    type: 'website',
  },
  alternates: { canonical: '/tools/ssl-checker' },
};

export default function SslCheckerPage() {
  return (
    <StandardPage
      title="SSL Checker"
      subtitle="Real-time SSL/TLS certificate health and expiry check for any domain."
      breadcrumbItems={[
        { label: 'Home', href: '/' },
        { label: 'Tools', href: '/tools/' },
        { label: 'SSL Checker' },
      ]}
    >
      <div className="prose prose-invert max-w-3xl">
        <p>Enter a domain to verify its SSL/TLS certificate health and expiry date.</p>
      </div>
    </StandardPage>
  );
}
