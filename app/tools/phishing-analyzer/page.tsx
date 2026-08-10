import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Phishing Analyzer | Zion Tech Group',
  description: 'Review suspicious emails and links with Zion Tech Group phishing analysis guidance.',
  alternates: { canonical: '/tools/phishing-analyzer/' },
};

export default function PhishingAnalyzerPage() {
  return (
    <main className="min-h-screen bg-slate-950 py-20">
      <div className="container-page">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Phishing Analyzer</h1>
        <p className="text-slate-400 text-lg max-w-2xl mb-10">
          Learn how to identify suspicious messages, links, and sender behavior before engaging.
        </p>
        <div className="glass-card p-6">
          <h2 className="text-2xl font-semibold text-white mb-4">Checklist</h2>
          <ul className="list-disc list-inside text-slate-300 space-y-2">
            <li>Verify sender domain and headers</li>
            <li>Hover links before clicking</li>
            <li>Avoid attachments from unknown senders</li>
            <li>Report suspected phishing to your IT team</li>
          </ul>
        </div>
      </div>
    </main>
  );
}
