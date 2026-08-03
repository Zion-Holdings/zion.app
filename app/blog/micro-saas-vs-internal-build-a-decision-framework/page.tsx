'use client';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'Micro-SaaS vs internal build: a decision framework | Zion Tech Group',
  description: 'When to buy versus build internal tools, with a practical scorecard.',
  alternates: { canonical: 'https://ziontechgroup.com/blog/micro-saas-vs-internal-build-a-decision-framework/' },
  openGraph: { title: 'Micro-SaaS vs internal build: a decision framework', description: 'When to buy versus build internal tools, with a practical scorecard.', url: 'https://ziontechgroup.com/blog/micro-saas-vs-internal-build-a-decision-framework/', type: 'article' },
  twitter: { card: 'summary_large_image', title: 'Micro-SaaS vs internal build: a decision framework', description: 'When to buy versus build internal tools, with a practical scorecard.' }
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container-page py-20">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">Micro-SaaS vs internal build: a decision framework</h1>
        <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto text-center">When to buy versus build internal tools, with a practical scorecard.</p>
        <article className="max-w-3xl mx-auto space-y-6 text-slate-300">
          
      <p>Micro-SaaS products can solve narrow problems fast, but only if the buying journey is clear and the integration cost stays low.</p>
      <h2>Decision framework</h2>
      <ul>
        <li>Map build, buy, and integrate options</li>
        <li>Score on time-to-value, control, and cost</li>
        <li>Run a 30-day evaluation with real workflows</li>
        <li>Choose the option that preserves optionality</li>
      </ul>
  
        </article>
      <JsonLd data={{
        '@context':'https://schema.org',
        '@type':'BlogPosting',
        headline: 'Micro-SaaS vs internal build: a decision framework',
        description: 'When to buy versus build internal tools, with a practical scorecard.',
        author: { '@type':'Organization', name: 'Zion Tech Group' },
        publisher: { '@type':'Organization', name: 'Zion Tech Group', url: 'https://ziontechgroup.com' },
        keywords: 'Micro-SaaS, build vs buy, internal tools',
        mainEntityOfPage: 'https://ziontechgroup.com/blog/micro-saas-vs-internal-build-a-decision-framework/'
      }} />
        <div className="mt-16 text-center space-y-3">
          <Link href="/contact/" className="btn-primary text-lg px-8 py-4">Get Your Custom Proposal →</Link>
          <p className="text-slate-400 text-sm">📞 <a href="tel:13024640950" className="text-purple-300 hover:underline">+1 302 464 0950</a> · ✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-purple-300 hover:underline">kleber@ziontechgroup.com</a></p>
        </div>
      </div>
    </main>
  );
}
