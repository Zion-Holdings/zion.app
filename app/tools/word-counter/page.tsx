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
      ]}
    >
      <p>Paste text to get word count, character count, readability estimates, and paragraph structure for content planning.</p>
    </StandardPage>
  );
}
