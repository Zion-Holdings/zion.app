import { Metadata } from 'next';
import PageWrapper from '@/components/PageWrapper';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'URL Audit Assistant | Zion Tech Group',
  description: 'Audit your website URLs for broken links, redirect chains, and SEO issues.',
  openGraph: {
    title: 'URL Audit Assistant',
    description: 'Find broken links and URL issues quickly.',
    url: 'https://ziontechgroup.com/ai/url-audit-assistant/',
    type: 'website',
  },
  alternates: { canonical: '/ai/url-audit-assistant/' },
};

export default function UrlAuditAssistantPage() {
  return (
    <PageWrapper>
      <div className="container-page">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">URL Audit Assistant</h1>
          <p className="text-slate-400 text-lg mb-8">
            Audit your website URLs for broken links, redirect chains, and SEO issues.
          </p>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-white font-semibold mb-2">Crawl</h3>
              <p className="text-slate-400 text-sm">Discover internal and external URLs from a starting point.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-white font-semibold mb-2">Validate</h3>
              <p className="text-slate-400 text-sm">Check HTTP status, redirects, and canonical consistency.</p>
            </div>
            <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
              <h3 className="text-white font-semibold mb-2">Report</h3>
              <p className="text-slate-400 text-sm">Get a prioritized list of broken links and recommended fixes.</p>
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row gap-3">
            <Link href="/contact/" className="btn-primary text-center">Request an audit</Link>
            <Link href="/services/" className="btn-secondary text-center">Browse services</Link>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
