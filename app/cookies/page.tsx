import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Cookie Policy | Zion Tech Group',
  description: 'How Zion Tech Group uses cookies and similar technologies on ziontechgroup.com.',
  openGraph: { title: 'Cookie Policy | Zion Tech Group', description: 'Cookie usage and preferences.', url: 'https://ziontechgroup.com/cookies/', type: 'website' },
  alternates: { canonical: '/cookies/' },
};

export default function CookiesPage() {
  return (
    <StandardPage title="Cookie Policy" subtitle="How we use cookies and similar technologies." breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Cookie Policy' }]}>
      <div className="max-w-3xl mx-auto space-y-4 text-slate-300">
        <p>We use essential cookies to keep the site secure and operational. Optional cookies are used for analytics and may be controlled in your browser settings.</p>
        <p>By continuing to use ziontechgroup.com, you agree to essential cookie usage. You can opt out of optional analytics cookies at any time.</p>
        <Link href="/privacy/" className="text-purple-300 hover:text-purple-200">Privacy Policy →</Link>
      </div>
    </StandardPage>
  );
}
