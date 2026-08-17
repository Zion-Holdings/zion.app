import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Privacy Policy | Zion Tech Group',
  description: 'Privacy policy for Zion Tech Group: data collection, use, retention, and your rights.',
  openGraph: { title: 'Privacy Policy | Zion Tech Group', description: 'Data practices and privacy rights.', url: 'https://ziontechgroup.com/privacy/', type: 'website' },
  alternates: { canonical: '/privacy/' },
};

export default function PrivacyPage() {
  return (
    <StandardPage title="Privacy Policy" subtitle="How we collect, use, and protect your data." breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Privacy Policy' }]}>
      <div className="max-w-3xl mx-auto space-y-4 text-slate-300">
        <p>We collect information needed to deliver services, improve site performance, and communicate updates. We do not sell personal data.</p>
        <p>You can request access, correction, or deletion of personal data by contacting our team.</p>
        <Link href="/contact/" className="text-purple-300 hover:text-purple-200">Contact privacy team →</Link>
      </div>
    </StandardPage>
  );
}
