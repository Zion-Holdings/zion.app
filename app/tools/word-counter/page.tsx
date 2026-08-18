import StandardPage from '@/components/StandardPage';

export const metadata = {
  title: 'Word Counter — Zion Tech Group',
  description: 'Count words, characters, sentences, and paragraphs. Useful for content, UX microcopy, and SEO checks.',
  alternates: { canonical: '/tools/word-counter/' },
  robots: { index: true, follow: true },
};

export default function WordCounterPage() {
  const breadcrumbItems = [
    { label: 'Tools', href: '/tools/' },
    { label: 'Word Counter' },
  ];

  return (
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
    </StandardPage>
  );
}
