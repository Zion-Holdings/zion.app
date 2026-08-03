'use client';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';

export const metadata = {
  title: 'AI readiness assessment checklist for IT managers | Zion Tech Group',
  description: 'Evaluate data readiness, workflow fit, and governance before launching AI programs.',
  alternates: { canonical: 'https://ziontechgroup.com/blog/ai-readiness-assessment-checklist-for-it-managers/' },
  openGraph: { title: 'AI readiness assessment checklist for IT managers', description: 'Evaluate data readiness, workflow fit, and governance before launching AI programs.', url: 'https://ziontechgroup.com/blog/ai-readiness-assessment-checklist-for-it-managers/', type: 'article' },
  twitter: { card: 'summary_large_image', title: 'AI readiness assessment checklist for IT managers', description: 'Evaluate data readiness, workflow fit, and governance before launching AI programs.' }
};

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950">
      <div className="container-page py-20">
        <h1 className="text-4xl font-bold text-white mb-4 text-center">AI readiness assessment checklist for IT managers</h1>
        <p className="text-xl text-slate-300 mb-10 max-w-3xl mx-auto text-center">Evaluate data readiness, workflow fit, and governance before launching AI programs.</p>
        <article className="max-w-3xl mx-auto space-y-6 text-slate-300">
          <p>AI adoption is accelerating across enterprises, but most programs stall without clear ownership, guardrails, and measurable outcomes.</p>
      <h2>What works</h2><ul><li>Start with low-risk, high-value workflows</li><li>Use production data, not demos</li><li>Create operator runbooks and escalation paths</li><li>Review model behavior weekly</li></ul>
      <h2>Outcome</h2><p>With strong governance, AI moves from experiment to reliable operating layer.</p>
        </article>
      <JsonLd data={{
        '@context':'https://schema.org',
        '@type':'BlogPosting',
        headline: 'AI readiness assessment checklist for IT managers',
        description: 'Evaluate data readiness, workflow fit, and governance before launching AI programs.',
        author: { '@type':'Organization', name: 'Zion Tech Group' },
        publisher: { '@type':'Organization', name: 'Zion Tech Group', url: 'https://ziontechgroup.com' },
        keywords: 'AI readiness, IT strategy, AI assessment',
        mainEntityOfPage: 'https://ziontechgroup.com/blog/ai-readiness-assessment-checklist-for-it-managers/'
      }} />
        <div className="mt-16 text-center space-y-3">
          <Link href="/contact/" className="btn-primary text-lg px-8 py-4">Get Your Custom Proposal →</Link>
          <p className="text-slate-400 text-sm">📞 <a href="tel:13024640950" className="text-purple-300 hover:underline">+1 302 464 0950</a> · ✉️ <a href="mailto:kleber@ziontechgroup.com" className="text-purple-300 hover:underline">kleber@ziontechgroup.com</a></p>
        </div>
      </div>
    </main>
  );
}
