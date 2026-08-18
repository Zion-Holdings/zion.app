import type { Metadata } from 'next';
import Link from 'next/link';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Terms of Service | Zion Tech Group',
  description: 'Terms of service governing the use of ziontechgroup.com and Zion Tech Group services.',
  openGraph: { title: 'Terms of Service | Zion Tech Group',
    description: 'Service terms and usage rules.',
    url: 'https://ziontechgroup.com/terms/',
  type: 'website' },
  twitter: {
    card: 'summary_large_image',
    title: 'Terms of Service | Zion Tech Group',
    description: 'Service terms and usage rules.',
  },
  alternates: { canonical: '/terms/' },
};

export default function TermsPage() {
  return (
    <StandardPage title="Terms of Service" subtitle="Rules and terms for using Zion Tech Group services and website." breadcrumbItems={[{ label: 'Home', href: '/' }, { label: 'Terms of Service' }]}>
      <div className="max-w-3xl mx-auto space-y-6 text-slate-300">
        <p>By using this site or engaging Zion Tech Group, you agree to these terms. Services are provided subject to scope, timeline, and payment terms agreed in writing.</p>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Acceptable use</h3>
          <p className="text-slate-400 text-sm">Use the site and services lawfully. Do not interfere with security, access controls, or delivery operations.</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Service scope</h3>
          <p className="text-slate-400 text-sm">Statements on this site describe capabilities and typical engagements. Final scope is defined in a signed agreement or statement of work.</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Intellectual property</h3>
          <p className="text-slate-400 text-sm">Unauthorized use or copying of site materials is prohibited unless permitted in writing.</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Limitation of liability</h3>
          <p className="text-slate-400 text-sm">We are not liable for indirect or consequential damages. Our total liability is limited to fees paid for the direct service giving rise to the claim.</p>
        </div>

        <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
          <h3 className="text-white font-semibold mb-2">Changes</h3>
          <p className="text-slate-400 text-sm">We may update terms from time to time. Continued use after changes implies acceptance of updated terms.</p>
        </div>

        <Link href="/contact/" className="text-purple-300 hover:text-purple-200">Contact legal/contracts →</Link>
      </div>
    </StandardPage>
  );
}
