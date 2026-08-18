import type { Metadata } from 'next';
import PageWrapper from '@/components/PageWrapper';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Service Router | Zion Tech Group',
  description: 'Get an instant AI service recommendation based on your goal, timeline, and operating model.',
  openGraph: {
    title: 'AI Service Router',
    description: 'Get a best-match AI service recommendation from your goal.',
    url: 'https://ziontechgroup.com/tools/ai-service-router/',
    type: 'website',
  },
  alternates: { canonical: '/tools/ai-service-router/' },
};

export default function AIServiceRouterPage() {
  return (
    <PageWrapper>
      <div className="container-page">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">AI Service Router</h1>
        <p className="text-slate-400 text-lg mb-8 max-w-2xl">
          Tell us your goal, timeline, and operating model. We’ll return a short list of best-fit services with estimated ROI and a suggested first engagement.
        </p>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass-card">
            <h3 className="text-white font-semibold mb-2">Goal</h3>
            <p className="text-slate-400 text-sm">Pick the primary outcome you want in the next 30 to 90 days.</p>
          </div>
          <div className="glass-card">
            <h3 className="text-white font-semibold mb-2">Timeline</h3>
            <p className="text-slate-400 text-sm">Choose a pilot, program, or managed-service cadence.</p>
          </div>
          <div className="glass-card">
            <h3 className="text-white font-semibold mb-2">Model</h3>
            <p className="text-slate-400 text-sm">Select advisory, co-development, or fully managed delivery.</p>
          </div>
        </div>
        <div className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="/contact/" className="btn-primary text-center">Start intake</Link>
          <Link href="/services/" className="btn-secondary text-center">Browse services</Link>
        </div>
      </div>
    </PageWrapper>
  );
}
