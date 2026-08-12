import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'URL Audit Assistant',
  description: 'Audit your website URLs for broken links, redirects, and SEO issues. Validate crawl health and get prioritized fixes.',
  alternates: { canonical: '/ai/url-audit-assistant/' },
};

export default function UrlAuditAssistantPage() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container-page py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold text-white mb-4">URL Audit Assistant</h1>
          <p className="text-slate-300 text-lg mb-6">
            Inspect any URL set for broken links, redirect chains, trailing-slash mismatches, and SEO gaps. Built for fast triage before a crawl or migration.
          </p>
          <div className="rounded-2xl border border-violet-500/30 bg-slate-900/60 p-6">
            <p className="text-slate-400 mb-4">Start with our site audit or extend to your own property.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/contact/" className="btn-primary">Request an Audit</Link>
              <Link href="/services/" className="btn-secondary">Browse All Services</Link>
            </div>
          </div>
          <div className="mt-10 grid md:grid-cols-3 gap-4">
            {['Broken link detection','Redirect chain mapping','Trailing-slash & canonical checks'].map((item) => (
              <div key={item} className="glass-card p-4">
                <div className="text-sm font-semibold text-white">{item}</div>
                <p className="text-xs text-slate-400 mt-1">Included in every audit package.</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
