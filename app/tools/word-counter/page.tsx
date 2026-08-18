import StandardPage from '@/components/StandardPage';

export const metadata = {
  title: 'Word Counter — Zion Tech Group',
  description: 'Count words, characters, sentences, and paragraphs. Useful for content, UX microcopy, and SEO checks.',
  alternates: { canonical: '/tools/word-counter/' },
  robots: { index: true, follow: true },
};

export default function WordCounterPage() {
  const breadcrumbs = [
    { name: 'Tools', href: '/tools/' },
    { name: 'Word Counter', href: '/tools/word-counter/' },
  ];

  return (
    <StandardPage
      title="Word Counter"
      description="Count words, characters, sentences, and paragraphs."
      breadcrumbs={breadcrumbs}
      cta={{ label: 'Browse all tools', href: '/tools/' }}
    >
      <p>Paste text to get word count, character count, readability estimates, and paragraph structure for content planning.</p>
    </StandardPage>
  );
}
