import EnhancedLayout from '../components/layout/EnhancedLayout';
import Link from 'next/link';

export default function HomePage() {
  const cards = [
    { title: 'Community Forum', desc: 'Q&A and discussions with AI-powered moderation', href: '/community' },
    { title: 'AI Moderation Reports', desc: 'Automated tagging and abuse mitigation logs', href: '/reports/moderation' },
    { title: 'i18n SEO & UX Audits', desc: 'Autonomous multilingual audits with actionable fixes', href: '/reports/i18n-ux' },
    { title: 'Link Check Reports', desc: 'Broken links and redirect loops detected periodically', href: '/reports/links' },
    { title: 'Lighthouse CI', desc: 'Performance/SEO/Best Practices audits on production', href: '/reports/lighthouse' },
    { title: 'Community Digest (RSS)', desc: 'Top threads syndicated for subscribers', href: '/community-digest.xml' },
  ];

  return (
    <EnhancedLayout>
      <section className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold">Zion AI Marketplace</h1>
        <p className="mt-2 text-gray-600 dark:text-gray-300">Autonomous cloud systems improving the platform continuously—no humans or hardware required.</p>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {cards.map((c) => (
            <Link key={c.title} href={c.href}>
              <a className="p-4 rounded-lg border border-gray-200 dark:border-gray-800 hover:border-blue-500 transition bg-white dark:bg-gray-950">
                <div className="font-semibold">{c.title}</div>
                <div className="mt-1 text-sm text-gray-600 dark:text-gray-300">{c.desc}</div>
              </a>
            </Link>
          ))}
        </div>
      </section>
    </EnhancedLayout>
  );
}