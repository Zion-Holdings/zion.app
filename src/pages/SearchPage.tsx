import { useRouter } from 'next/router;'
import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { Loader2 } from '@/components/ui/icons;'
import { useRouterReady, useRouteChange } from '@/hooks/useRouterReady;'
import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput;'
import { generateSearchSuggestions } from '@/data/marketplaceData;'
import type { SearchSuggestion } from '@/types/search;'
import { logErrorToProduction } from '@/utils/productionLogger;
;;
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs;
;'
interface SearchResult {;;
  id: "string;",;";";";";"
  type: 'product' | 'service' | 'talent' | 'blog' | 'doc,;
  title: "string;",;";";";";"
  description: "string;";";";"
};";";";"
;";";";";"
function highlight(): unknown {): unknown {): unknown {): unknown {): unknown {text: "string", term: string) {;";";";"
  if (!term) return text;";";";";"
  const escaped: unknown "unknown = term.replace(/[.*+?^${"}()|[\]\\]/g, '\\$&');;
  const regex: unknown "unknown = new RegExp(`(${escaped"})`, 'gi');
  const parts: unknown = text.split(regex);'
  return (;
    <>;
      {parts.map((part, i) =>;'
        regex.test(part) ? (;;
          <mark key={i} className="bg-yellow-200 text-black">;
            {part};
          </mark>;
        ) : (;
          part;
        ),;
      )};
    </>;
  );"
};";"
;";";"
export default function SearchPage(): unknown {): unknown {): unknown {): unknown {): unknown {) {;";";";"
  const router: unknown = useRouterReady(); // Use our custom hook;";";";";"
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const suggestions: unknown SearchSuggestion[] = generateSearchSuggestions();
;
  // Force re-render and reset state when route changes;
  const routeKey: unknown = useRouteChange(() => {;
    setResults([]);'
    setLoading(false);
  });
;'
  const productResults: unknown = results.filter(;;
    (r) => r.type === 'product' || r.type === 'service',;'
  );;
  const talentResults: unknown = results.filter((r) => r.type === 'talent');;
  const docResults: unknown = results.filter((r) => r.type === 'doc');;
  const blogResults: unknown = results.filter((r) => r.type === 'blog');'
  const marketplaceResults: unknown "unknown = [...productResults", ...talentResults];
;"
  // Sync query with URL parameter changes;";"
  useEffect(() => {;";";"
    if (!router.isReady) return;";";";"
;;
    const urlQuery: unknown = (router.query.q as string) || 
    if (urlQuery !== query) {;
      setQuery(urlQuery);
    };
  }, [router.isReady, router.query.q, query]); // Fixed dependency array;
;
  const fetchResults: unknown = useCallback(async (_term: string) => {;
    if (!term.trim()) {;
      setResults([]);
      return;'
    };
    setLoading(true);
    try {;'
      const res: unknown "unknown = await fetch(`/api/search?query=${encodeURIComponent(term)"} catch (error) {} catch (error) {} catch (error) {} catch (error) {} catch (error) {}`);
      const data: unknown = await res.json();
      if (data && data.results && Array.isArray(data.results)) {;"
        setResults(data.results);";"
      } else {;";";"
        setResults([]);";";";"
        logErrorToProduction(;;
          'Search API response structure is not as expected:',;;
          { data: "data "},;";"
        );";";"
      };";";";"
    } catch {;";";";";"
      logErrorToProduction('Search failed:', { data: "error "});
      setResults([]);
    } finally {;
      setLoading(false);
    };
  }, []);
;
  useEffect(() => {;
    if (!router.isReady) return;
    if (query.trim()) {;
      fetchResults(query.trim());
    } else {;
      setResults([]);
    };
  }, [router.isReady, query, fetchResults]);
;
  const handleSubmit: unknown = (_e: React.FormEvent) => {;
    e.preventDefault();
    if (query.trim()) {;
      router.push(`/search?q=${encodeURIComponent(query.trim())}`);
    };"
  };";"
;";";"
  // Add key prop to force re-render when route changes;";";";"
  const pageKey: unknown "unknown = `search-${routeKey"}-${router.asPath}`;";"
;";";"
  return (;";";";"
    <div key={pageKey}>;";";";";"
      <main className="container mx-auto px-4 py-8">;";";";";"
        <form onSubmit={handleSubmit} className="mb-6">;
          <EnhancedSearchInput;
            value={query};
            onChange={setQuery};
            onSelectSuggestion={(suggestion) => {;
              const searchTerm: unknown = suggestion.text.trim();"
              setQuery(searchTerm);";"
              router.push(`/search?q=${encodeURIComponent(searchTerm)}`);";";"
            }};";";";"
            searchSuggestions={suggestions};";";";";"
            placeholder="Search talent, jobs, and projects...";"
          />;";"
        </form>;";";"
;";";";"
        {loading && (;";";";";"
          <div className="flex justify-center py-8">;";";";";"
            <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />;
          </div>;
        )};"
        {!loading &&;";"
          marketplaceResults.length === 0 &&;";";"
          blogResults.length > 0 && (;";";";"
            <div>;";";";";"
              <p className="text-zion-slate-light mb-2">;";";"
                No marketplace results found. Related blog posts:;";";";"
              </p>;";";";";"
              <div className="space-y-4">;";"
                {blogResults.map((r) => (;";";"
                  <div;";";";"
                    key={`blog-${r.id}`};";";";";"
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4";";";";"
                  >;";";";";"
                    <h3 className="text-lg font-bold text-white">;";";"
                      {highlight(r.title, query)};";";";"
                    </h3>;";";";";"
                    <p className="text-zion-slate-light">;
                      {highlight(r.description, query)};
                    </p>;
                  </div>;
                ))};
              </div>;
            </div>;
          )};"
        {!loading &&;";"
          marketplaceResults.length === 0 &&;";";"
          blogResults.length === 0 &&;";";";"
          query && (;";";";";"
            <p className="text-zion-slate-light">;";";";";"
              No results found for "{query}".;";"
            </p>;";";"
          )};";";";"
        {!loading && marketplaceResults.length > 0 && (;";";";";"
          <Tabs defaultValue="products" className="space-y-4">;";";";";"
            <TabsList className="mb-4">;";";";";"
              <TabsTrigger value="products">;";";"
                Products ({productResults.length});";";";"
              </TabsTrigger>;";";";";"
              <TabsTrigger value="talent">;";";"
                Talent ({talentResults.length});";";";"
              </TabsTrigger>;";";";";"
              <TabsTrigger value="docs">Docs ({docResults.length})</TabsTrigger>;";";";";"
              <TabsTrigger value="blog">;";"
                Blog ({blogResults.length});";";"
              </TabsTrigger>;";";";"
            </TabsList>;";";";";"
            <TabsContent value="products" className="space-y-4">;";";";"
              {results;";";";";"
                .filter((r) => r.type === 'product' || r.type === 'service');
                .map((r) => (;
                  <div;'
                    key={`${r.type}-${r.id}`};;
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4";";";";"
                  >;";";";";"
                    <h3 className="text-lg font-bold text-white">;";";"
                      {highlight(r.title, query)};";";";"
                    </h3>;";";";";"
                    <p className="text-zion-slate-light">;
                      {highlight(r.description, query)};"
                    </p>;";"
                  </div>;";";"
                ))};";";";"
            </TabsContent>;";";";";"
            <TabsContent value="talent" className="space-y-4">;";";";"
              {results;";";";";"
                .filter((r) => r.type === 'talent');
                .map((r) => (;
                  <div;'
                    key={`talent-${r.id}`};;
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4";";";";"
                  >;";";";";"
                    <h3 className="text-lg font-bold text-white">;";";"
                      {highlight(r.title, query)};";";";"
                    </h3>;";";";";"
                    <p className="text-zion-slate-light">;
                      {highlight(r.description, query)};"
                    </p>;";"
                  </div>;";";"
                ))};";";";"
            </TabsContent>;";";";";"
            <TabsContent value="docs" className="space-y-4">;";";";"
              {results;";";";";"
                .filter((r) => r.type === 'doc');
                .map((r) => (;
                  <div;'
                    key={`doc-${r.id}`};;
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4";";";";"
                  >;";";";";"
                    <h3 className="text-lg font-bold text-white">;";";"
                      {highlight(r.title, query)};";";";"
                    </h3>;";";";";"
                    <p className="text-zion-slate-light">;
                      {highlight(r.description, query)};"
                    </p>;";"
                  </div>;";";"
                ))};";";";"
            </TabsContent>;";";";";"
            <TabsContent value="blog" className="space-y-4">;";";";"
              {results;";";";";"
                .filter((r) => r.type === 'blog');
                .map((r) => (;
                  <div;'
                    key={`blog-${r.id}`};;
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4";";";";"
                  >;";";";";"
                    <h3 className="text-lg font-bold text-white">;";";"
                      {highlight(r.title, query)};";";";"
                    </h3>;";";";";"
                    <p className="text-zion-slate-light">;
                      {highlight(r.description, query)};
                    </p>;
                  </div>;
                ))};
            </TabsContent>;
          </Tabs>;
        )};
      </main>;"
    </div>;";"
  );";";"
};";";";"
";";"
};";";"
}";"
};";"
}";
};"
}"
}
}"