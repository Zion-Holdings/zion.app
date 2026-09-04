import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Cookie Policy | Zion Tech Group',
  description: 'How Zion Tech Group uses cookies and similar technologies on ziontechgroup.com.',
  openGraph: { title: 'Cookie Policy | Zion Tech Group',
    description: 'Cookie usage and preferences.',
    url: 'https://ziontechgroup.com/cookies/',
  type: 'website' },
  twitter: {
    card: 'summary_large_image',
    title: 'Cookie Policy | Zion Tech Group',
    description: 'Cookie usage and preferences.',
  },
  alternates: { canonical: '/cookies/' },
};


export default function CookiesPage() {
  return (
<>
    <StandardPage title="Cookie Policy" subtitle="How we use cookies and similar technologies." breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Cookie Policy' }]}>
      <div className="max-w-3xl mx-auto space-y-6 text-slate-300">
        <p>We use essential cookies to keep the site secure and operational. Optional cookies are used for analytics and may be controlled in your browser settings.</p>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Essential cookies</h3>
          <p className="text-slate-400 text-sm">Required for security, session behavior, and basic site operation. These cannot be disabled.</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Analytics cookies</h3>
          <p className="text-slate-400 text-sm">Used to understand page performance and visitor patterns. They are optional and can be cleared or blocked.</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Functional cookies</h3>
          <p className="text-slate-400 text-sm">Remember preferences such as language or accessibility settings across visits.</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Your controls</h3>
          <p className="text-slate-400 text-sm">You can clear cookies, use private browsing, or disable optional analytics in your browser settings at any time.</p>
        </div>

        <Link href="/privacy/" className="text-purple-300 hover:text-purple-200">Privacy Policy →</Link>
      </div>
    </StandardPage>
  </>
  );
}