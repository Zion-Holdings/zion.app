import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';
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
    <JsonLd data={{
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": "SSL Checker",
  "description": "Real-time SSL/TLS certificate health and expiry check for any domain.",
  "applicationCategory": "BusinessApplication",
  "applicationSuite": "Zion Tech Group Tools",
  "operatingSystem": "Any",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "USD"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Zion Tech Group",
    "url": "https://ziontechgroup.com"
  },
  "url": "https://ziontechgroup.com/tools/ssl-checker/",
  "@id": "https://ziontechgroup.com/tools/ssl-checker/",
  "featureList": [
    "Free to use",
    "No installation required",
    "Browser-based"
  ],
  "softwareVersion": "1.0"
}} />
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
      </div></StandardPage>
  );
}
