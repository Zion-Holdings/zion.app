import { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { GradientHeading } from '@/components/GradientHeading';
import { Input } from '@/components/ui/input';
import { Markdown } from '@/components/ui/markdown';
import { SEO } from '@/components/SEO';
import { SupportChatbot } from '@/components/SupportChatbot';
import {logErrorToProduction} from '@/utils/productionLogger';


interface Article { slug: string; title: string; content: string; }

export default function Help() {
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState<Article[]>([]);
  const [selected, setSelected] = useState<Article | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    const fetchArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch(`/api/help/articles?q=${encodeURIComponent(query)}`);
        if (!res.ok) {
          throw new Error(`Request failed: ${res.status}`);
        }
        const data = await res.json().catch(() => []);
        if (active) {
          setArticles(Array.isArray(data) ? data : []);
        }
      } catch (err) {
        logErrorToProduction('Help article fetch error:', { data: err });
        if (active) {
          setArticles([]);
          setError('Failed to load articles');
        }
      } finally {
        if (active) setLoading(false);
      }
    };

    fetchArticles();
    return () => {
      active = false;
    };
  }, [query]);

  return (
    <>
      <SEO title="Help Center" description="Search our knowledge base" />
      <Header />
      <main className="min-h-screen bg-zion-blue pt-24 pb-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <GradientHeading>Help Center</GradientHeading>
            <p className="mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto">Find answers to common questions.</p>
          </div>
          <div className="max-w-2xl mx-auto mb-8">
            <Input
              placeholder="Search articles..."
              value={query}
              onChange={e => setQuery(e.target.value)}
              className="bg-zion-blue-light text-white"
            />
          </div>
          {loading && (
            <p className="text-center text-white my-4">Loading...</p>
          )}
          {error && !loading && (
            <div className="text-center text-red-500 my-4">
              {error}{' '}
              <button onClick={() => setQuery(q => q)} className="underline">
                Try Again
              </button>
            </div>
          )}
          <div className="grid gap-4 max-w-3xl mx-auto">
            {articles.map(a => (
              <button key={a.slug} onClick={() => setSelected(a)} className="text-left p-4 border border-zion-blue-light rounded text-white bg-zion-blue-dark hover:bg-zion-blue-light">
                {a.title}
              </button>
            ))}
          </div>
          {selected && (
            <div className="max-w-3xl mx-auto mt-8">
              <h2 className="text-2xl font-bold text-white mb-4">{selected.title}</h2>
              <Markdown content={selected.content} />
            </div>
          )}
        </div>
      </main>
      <SupportChatbot />
    </>
  );
}
