import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { SearchResultCard } from '@/components/search/SearchResultCard';
import { SearchBar } from '@/components/SearchBar';
import { SearchEmptyState } from '@/components/marketplace/EmptyState';
import { generateSearchSuggestions } from '@/data/marketplaceData';

interface SearchResult {
  id: string;
  type: 'product' | 'service' | 'talent';
  title: string;
  description: string;
}

const LIMIT = 20;

export default function SearchResultsPage() {
  const router = useRouter();
  const [query, setQuery] = useState("");

  // Sync query state with the URL once the router is ready
  useEffect(() => {
    if (!router.isReady) return;
    const urlQuery = (router.query.q as string) || "";
    setQuery(urlQuery);
  }, [router.isReady, router.query.q]);

  const [results, setResults] = useState<SearchResult[]>([]);
  const [totalCount, setTotalCount] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [typeFilter, setTypeFilter] = useState<'all' | 'product' | 'service' | 'talent'>('all');
  const [sortBy, setSortBy] = useState<'relevance' | 'titleAsc' | 'titleDesc'>('relevance');

  const fetchResults = async () => {
    if (!router.isReady || !query) return;
    setLoading(true);
    const res = await fetch(
      `/api/search?query=${encodeURIComponent(query)}&page=${page}&limit=${LIMIT}`
    );
    if (res.ok) {
      const data = await res.json();
      let items: SearchResult[] = data.results || [];
      if (typeFilter !== 'all') {
        items = items.filter((r) => r.type === typeFilter);
      }
      if (sortBy === 'titleAsc') {
        items.sort((a, b) => a.title.localeCompare(b.title));
      } else if (sortBy === 'titleDesc') {
        items.sort((a, b) => b.title.localeCompare(a.title));
      }
      setResults(items);
      setTotalCount(data.totalCount || items.length);
    } else {
      setResults([]);
      setTotalCount(0);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchResults();
     
  }, [router.isReady, query, page, typeFilter, sortBy]);

  const totalPages = Math.max(1, Math.ceil(totalCount / LIMIT));

  const suggestions = generateSearchSuggestions().slice(0, 5);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="mb-6">
        <SearchBar value={query} onChange={(val) => {
          setQuery(val);
          setPage(1);
        }} />
      </div>

      <div className="flex flex-wrap gap-4 mb-4">
        <select
          value={typeFilter}
          onChange={(e) => {
            setTypeFilter(e.target.value as any);
            setPage(1);
          }}
          className="border border-gray-300 rounded px-3 py-1"
        >
          <option value="all">All Types</option>
          <option value="product">Products</option>
          <option value="service">Services</option>
          <option value="talent">Talent</option>
        </select>

        <select
          value={sortBy}
          onChange={(e) => {
            setSortBy(e.target.value as any);
            setPage(1);
          }}
          className="border border-gray-300 rounded px-3 py-1"
        >
          <option value="relevance">Relevance</option>
          <option value="titleAsc">Title A-Z</option>
          <option value="titleDesc">Title Z-A</option>
        </select>
      </div>

      {loading && <p>Loading...</p>}

      {!loading && results.length === 0 && (
        <div className="text-center py-8 space-y-4">
          <SearchEmptyState onRetry={() => setQuery('')} />
          <div>
            <p className="text-zion-slate-light">Try searching for:</p>
            <ul className="flex flex-wrap justify-center gap-2 mt-2">
              {suggestions.map((s) => (
                <li key={s.text} className="bg-zion-blue-light px-2 py-1 rounded">
                  {s.text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {results.length > 0 && (
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
          {results.map((r) => (
            <SearchResultCard key={`${r.type}-${r.id}`} result={r} />
          ))}
        </div>
      )}

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 mt-6">
          <button
            onClick={() => setPage((p) => Math.max(1, p - 1))}
            disabled={page === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span>
            Page {page} of {totalPages}
          </span>
          <button
            onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
            disabled={page === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </main>
  );
}

