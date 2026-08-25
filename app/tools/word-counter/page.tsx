import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';
import type { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Word Counter — Zion Tech Group',
  description: 'Count words, characters, sentences, and paragraphs. Useful for content, UX microcopy, and SEO checks.',
  keywords: ['word counter', 'character count', 'SEO check', 'microcopy'],
  openGraph: {
    title: 'Word Counter — Zion Tech Group',
    description: 'Count words, characters, sentences, and paragraphs. Useful for content, UX microcopy, and SEO checks.',
    url: 'https://ziontechgroup.com/tools/word-counter/',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Word Counter — Zion Tech Group',
    description: 'Count words, characters, sentences, and paragraphs. Useful for content, UX microcopy, and SEO checks.',
  },
  alternates: { canonical: '/tools/word-counter/' },
  robots: { index: true, follow: true },
};


export default function WordCounterPage() {
  const breadcrumbItems = [
    { label: 'Tools', href: '/tools/' },
    { label: 'Word Counter' },
  ];

  return (
<>
    <StandardPage
      title="Word Counter"
      subtitle="Count words, characters, sentences, and paragraphs."
      breadcrumbItems={breadcrumbItems}
      actions={[
        { label: 'Browse all tools', href: '/tools/', style: 'primary' },
        { label: 'Talk to us', href: '/contact/', style: 'secondary' },
      ]}
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Word counts</h3>
          <p className="text-slate-400 text-sm">Get exact counts for documents, pages, and content blocks.</p>
        </div>
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Readability</h3>
          <p className="text-slate-400 text-sm">Estimate sentence length and paragraph complexity quickly.</p>
        </div>
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">SEO checks</h3>
          <p className="text-slate-400 text-sm">Validate title, meta, and body copy length before publishing.</p>
        </div>
        <div className="glass-card">
          <h3 className="text-white font-semibold mb-2">Use cases</h3>
          <p className="text-slate-400 text-sm">Content planning, UX writing, and publishing QA.</p>
        </div>
      </div>

      <div className="mt-12 rounded-2xl border border-slate-800 bg-slate-900/60 p-8 max-w-5xl mx-auto">
        <h2 className="text-xl font-bold text-white mb-4">Content QA</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>Validate meta descriptions and title tags before publishing.</li>
          <li>Estimate reading time to set user expectations.</li>
          <li>Check paragraph length for readability and accessibility.</li>
        </ul>
        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <a href="/tools/" className="btn-primary text-center">All tools</a>
          <a href="/contact/" className="btn-secondary text-center">Talk to us</a>
        </div>
      </div>
    </StandardPage>
  </>
  );
}