import Link from 'next/link';
import { readJson } from '../../utils/fsDb';
import type { HelpArticle } from '../../utils/support';

export async function getStaticProps() {
  const articles = readJson<HelpArticle[]>('help/articles.json', []);
  return { props: { articles } };
}

export default function HelpIndex({ articles }: { articles: HelpArticle[] }) {
  const categories = Array.from(new Set(articles.map((a) => a.category)));
  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Help Center</h1>
      {categories.map((cat) => (
        <div key={cat} className="space-y-3">
          <h2 className="text-xl font-medium">{cat}</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {articles
              .filter((a) => a.category === (cat as any))
              .map((a) => (
                <Link key={a.id} href={`/help/${a.slug}`}>
                  <a className="enhanced-card hover:shadow-md">
                    <div className="font-medium">{a.title}</div>
                    <div className="text-xs opacity-70 mt-1">Last updated {new Date(a.updatedAt).toLocaleDateString()}</div>
                  </a>
                </Link>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}