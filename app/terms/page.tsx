import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Terms of Service | Zion Tech Group',
  description: 'Terms of service governing the use of ziontechgroup.com and Zion Tech Group services.',
  openGraph: { title: 'Terms of Service | Zion Tech Group', description: 'Service terms and usage rules.', url: 'https://ziontechgroup.com/terms/', type: 'website' },
  alternates: { canonical: '/terms/' },
};

export default function TermsPage() {
  return (
    <StandardPage title="Terms of Service" subtitle="Rules and terms for using Zion Tech Group services and website." breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]}>
      <div className="max-w-3xl mx-auto space-y-4 text-slate-300">
        <p>By using this site or engaging Zion Tech Group, you agree to these terms. Services are provided subject to scope, timeline, and payment terms agreed in writing.</p>
        <p>Unauthorized use or copying of site materials is prohibited.</p>
        <Link href="/contact/" className="text-purple-300 hover:text-purple-200">Contact legal/contracts →</Link>
      </div>
    </StandardPage>
  );
}
