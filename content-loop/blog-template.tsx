export const metadata = {
  title: '...',
  description: '...',
  alternates: { canonical: '/blog/.../' },
  openGraph: {
    title: '...',
    description: '...',
    type: 'article',
    url: 'https://ziontechgroup.com/blog/.../',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: '...',
  description: '...',
  url: 'https://ziontechgroup.com/blog/.../',
  publisher: {
    '@type': 'Organization',
    name: 'Zion Tech Group',
    url: 'https://ziontechgroup.com',
  },
};

export default function Page() {
  return (
    <div className="relative min-h-screen bg-slate-950">
      <article className="relative mx-auto max-w-4xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
        ...
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </article>
    </div>
  );
}
