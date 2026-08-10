import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  title: 'Phishing Analyzer | Zion Tech Group',
  description: 'Learn how to review suspicious emails and links with Zion Tech Group phishing analysis guidance and checklist.',
  alternates: { canonical: '/tools/phishing-analyzer/' },
};

export default function Page() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <Navigation />
      <main className="py-20">
        <div className="container-page">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Phishing Analyzer</h1>
          <p className="text-slate-400 text-lg max-w-2xl mb-10">
            Review suspicious emails and links with practical guidance for safer engagement.
          </p>
          <div className="glass-card p-6 mb-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Checklist</h2>
            <ul className="list-disc list-inside text-slate-300 space-y-2">
              <li>Verify sender domain and headers</li>
              <li>Hover links before clicking</li>
              <li>Avoid attachments from unknown senders</li>
              <li>Report suspected phishing to your IT team</li>
            </ul>
          </div>
          <div className="glass-card p-6">
            <h2 className="text-2xl font-semibold text-white mb-4">When to escalate</h2>
            <p className="text-slate-300">If an email requests credentials, payment changes, or urgent action, treat it as high-risk and verify through a known channel before responding.</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
