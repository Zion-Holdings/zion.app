import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Phishing Analyzer | Zion Tech Group',
  description: 'Free phishing analysis tool by Zion Tech Group to inspect emails, links, and sender risk indicators.',
  alternates: { canonical: '/tools/phishing-analyzer/' },
};

export default function PhishingAnalyzerPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Phishing Analyzer</h1>
          <p className="text-xl text-slate-300 leading-relaxed">
            Inspect suspicious emails, links, headers, and sender signals before clicking or replying.
          </p>
        </div>
        <section className="max-w-3xl mx-auto glass-card p-8">
          <h2 className="text-2xl font-bold text-white mb-4">What this tool checks</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2 mb-8">
            <li>Sender domain age and SPF/DKIM/DMARC posture</li>
            <li>URL reputation and redirect chains</li>
            <li>Language urgency and manipulation cues</li>
            <li>Attachment risk indicators</li>
          </ul>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/tools/" className="btn-primary text-lg px-10 py-4 inline-block">
              Back to Tools →
            </Link>
            <Link href="/contact/" className="btn-secondary text-lg px-10 py-4 inline-block">
              Request Advanced Review
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
