import type { Metadata } from 'next';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import StandardPage from '@/components/StandardPage';

export const metadata: Metadata = {
  title: 'Search | Zion Tech Group',
  description:
  'Search AI and IT services, solutions, blog posts, and resources from Zion Tech Group.',
  openGraph: {
    title: 'Search | Zion Tech Group',
    description: 'Search AI and IT services, solutions, blog posts, and resources.',
    url: 'https://ziontechgroup.com/search/',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Search | Zion Tech Group',
    description: 'Search AI and IT services, solutions, blog posts, and resources.',
  },
  alternates: { canonical: '/search/' },
};

const websiteLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Zion Tech Group',
  url: 'https://ziontechgroup.com',
  potentialAction: {
    '@type': 'SearchAction',
    target: 'https://ziontechgroup.com/search/?q={query}',
    'query-input': 'required name=query',
  },
};

function SearchContent() {
  return (
    <div className="max-w-4xl mx-auto w-full">
      <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <h2 className="text-2xl font-bold text-white mb-2">Search the site</h2>
        <p className="text-slate-400 mb-6">
          Find services, solutions, blog posts, and resources.
        </p>

        <form
          action="/search/"
          method="GET"
          className="flex flex-col sm:flex-row gap-3"
        >
          <label htmlFor="search-query" className="sr-only">
            Search query
          </label>
          <input
            id="search-query"
            name="q"
            type="search"
            placeholder="Search services, solutions, topics..."
            className="flex-1 rounded-xl border border-slate-700 bg-slate-950 px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
            defaultValue=""
          />
          <button
            type="submit"
            className="btn-primary whitespace-nowrap"
          >
            Search
          </button>
        </form>

        <div className="mt-8">
          <h3 className="text-lg font-semibold text-white mb-3">Popular topics</h3>
          <div className="flex flex-wrap gap-2">
            {[
              'AI automation',
              'Cloud migration',
              'Security',
              'Managed AI',
              'DevOps',
              'Data analytics',
              'Enterprise AI',
              'Compliance',
            ].map((topic) => (
              <Link
                key={topic}
                href={`/search/?q=${encodeURIComponent(topic)}`}
                className="rounded-full border border-slate-700 bg-slate-950 px-4 py-2 text-sm text-slate-300 hover:border-purple-500/40 hover:text-white"
              >
                {topic}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 md:p-8">
        <h3 className="text-lg font-semibold text-white mb-2">Integration points</h3>
        <ul className="list-disc list-inside text-slate-300 space-y-2 text-sm">
          <li>
            Wire <code className="font-mono text-purple-300">/api/search</code> to a
            search backend or index.
          </li>
          <li>
            Use the <code className="font-mono text-purple-300">q</code> query
            parameter to read the user query server-side.
          </li>
          <li>
            Add type-safe result components under{' '}
            <code className="font-mono text-purple-300">app/search/</code> or a shared{' '}
            <code className="font-mono text-purple-300">components/Search*</code>{' '}
            module.
          </li>
          <li>
            Consider adding Algolia, Meilisearch, or a custom site index for ranked
            results.
          </li>
        </ul>
      </div>
    </div>
  );
}

export default function SearchPage() {
  return (
    <>
    <StandardPage
        title="Search"
        subtitle="Find AI and IT services, solutions, blog posts, and resources from Zion Tech Group."
        breadcrumbItems={[
          { label: 'Home', href: '/' },
          { label: 'Search' },
        ]}
        actions={[
          { label: 'Browse services', href: '/services/', style: 'secondary' },
        ]}
      >
        <SearchContent />
    </StandardPage>
    </>
  );
}