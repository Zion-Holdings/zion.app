'use client';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'What is an AI voice agent and when to use one | Zion Tech Group',
  description: 'Voice agents for support, scheduling, and sales qualification with real examples.',
  alternates: { canonical: 'https://ziontechgroup.com/blog/what-is-an-ai-voice-agent-and-when-to-use-one/' },
  openGraph: { title: 'What is an AI voice agent and when to use one', description: 'Voice agents for support, scheduling, and sales qualification with real examples.', url: 'https://ziontechgroup.com/blog/what-is-an-ai-voice-agent-and-when-to-use-one/', type: 'website' },
  twitter: { card: 'summary_large_image', title: 'What is an AI voice agent and when to use one', description: 'Voice agents for support, scheduling, and sales qualification with real examples.' }
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container-page py-20">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">What is an AI voice agent and when to use one</h1>
        <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto text-center">Voice agents for support, scheduling, and sales qualification with real examples.</p>
        
        <article className="max-w-3xl mx-auto space-y-6 text-slate-300">
          <p>Voice agents for support, scheduling, and sales qualification with real examples.</p>
          <h2 className="text-2xl font-semibold text-white">Key points</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Practical, implementation-first approach</li>
            <li>Aligned to measurable business outcomes</li>
            <li>Built for operators, not just prototypes</li>
          </ul>
          <h2 className="text-2xl font-semibold text-white">Recommended next step</h2>
          <p>Start with a scoped pilot, validate ROI in 30 days, and scale what works.</p>
        </article>
      <JsonLd data={{
        '@context':'https://schema.org',
        '@type':'BlogPosting',
        headline: 'What is an AI voice agent and when to use one',
        description: 'Voice agents for support, scheduling, and sales qualification with real examples.',
        author: { '@type':'Organization', name: 'Zion Tech Group' },
        publisher: { '@type':'Organization', name: 'Zion Tech Group', url: 'https://ziontechgroup.com' },
        keywords: 'voice AI, IVR, AI phone agent',
        mainEntityOfPage: 'https://ziontechgroup.com/blog/what-is-an-ai-voice-agent-and-when-to-use-one/'
      }} />

        <div className="mt-16 text-center space-y-3">
          <Link href="/contact/" className="btn-primary text-lg px-8 py-4">Get Your Custom Proposal →</Link>
          <p className="text-slate-400 text-sm">📞 <a href="tel:13024640950" className="text-purple-300 hover:underline">+1 302 464 0950</a> · ✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-purple-300 hover:underline">kleber@ziontechgroup.com</a></p>
        </div>
      </div>
    </main>
  );
}
