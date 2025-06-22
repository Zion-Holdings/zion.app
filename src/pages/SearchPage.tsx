import { useEffect, useState } from "react";
import { useRouter } from 'next/router';
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { generateSearchSuggestions } from "@/data/marketplaceData";
import { SearchSuggestion } from "@/types/search";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";
import { Loader2 } from "lucide-react";

interface SearchResult {
  id: string;
  type: "product" | "service" | "talent" | "blog" | "doc";
  title: string;
  description: string;
}

function highlight(text: string, term: string) {
  if (!term) return text;
  const escaped = term.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const regex = new RegExp(`(${escaped})`, "gi");
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? (
          <mark key={i} className="bg-yellow-200 text-black">
            {part}
          </mark>
        ) : (
          part
        )
      )}
    </>
  );
}

export default function SearchPage() {
  const router = useRouter();
  const initial = (router.query.q as string) || "";
  const [query, setQuery] = useState(initial);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const suggestions: SearchSuggestion[] = generateSearchSuggestions();

  const productResults = results.filter(
    r => r.type === 'product' || r.type === 'service'
  );
  const talentResults = results.filter(r => r.type === 'talent');
  const docResults = results.filter(r => r.type === 'doc');
  const blogResults = results.filter(r => r.type === 'blog');
  const marketplaceResults = [...productResults, ...talentResults];

  useEffect(() => {
    if (initial) {
      fetchResults(initial);
    }
  }, [initial]);

  const fetchResults = async (term: string) => {
    setLoading(true);
    try {
      const res = await fetch(`/api/search?query=${encodeURIComponent(term)}`);
      const data = await res.json();
      if (data && data.results && Array.isArray(data.results)) {
        setResults(data.results);
      } else {
        setResults([]);
        // Optional: log an error if the structure is unexpected
        console.error("Search API response structure is not as expected:", data);
      }
    } catch {
      setResults([]);
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push(`/search?q=${encodeURIComponent(query)}`);
    fetchResults(query);
  };

  return (
    <>
      <main className="container mx-auto px-4 py-8">
        <form onSubmit={handleSubmit} className="mb-6">
          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            onSelectSuggestion={(suggestion) => {
              router.push(`/search?q=${encodeURIComponent(suggestion.text)}`);
              setQuery(suggestion.text);
              fetchResults(suggestion.text);
            }}
            searchSuggestions={suggestions}
            placeholder="Search talent, jobs, and projects..."
          />
        </form>

        {loading && (
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-zion-purple" />
          </div>
        )}
        {!loading && marketplaceResults.length === 0 && blogResults.length > 0 && (
          <div>
            <p className="text-zion-slate-light mb-2">No marketplace results found. Related blog posts:</p>
            <div className="space-y-4">
              {blogResults.map(r => (
                <div key={`blog-${r.id}`} className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4">
                  <h3 className="text-lg font-bold text-white">{highlight(r.title, query)}</h3>
                  <p className="text-zion-slate-light">{highlight(r.description, query)}</p>
                </div>
              ))}
            </div>
          </div>
        )}
        {!loading && marketplaceResults.length === 0 && blogResults.length === 0 && (
          <p className="text-zion-slate-light">No results found.</p>
        )}
        {!loading && marketplaceResults.length > 0 && (
          <Tabs defaultValue="products" className="space-y-4">
            <TabsList className="mb-4">
              <TabsTrigger value="products">
                Products ({productResults.length})
              </TabsTrigger>
              <TabsTrigger value="talent">
                Talent ({talentResults.length})
              </TabsTrigger>
              <TabsTrigger value="docs">
                Docs ({docResults.length})
              </TabsTrigger>
              <TabsTrigger value="blog">
                Blog ({blogResults.length})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="products" className="space-y-4">
              {results
                .filter((r) => r.type === "product" || r.type === "service")
                .map((r) => (
                  <div
                    key={`${r.type}-${r.id}`}
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4"
                  >
                    <h3 className="text-lg font-bold text-white">
                      {highlight(r.title, query)}
                    </h3>
                    <p className="text-zion-slate-light">
                      {highlight(r.description, query)}
                    </p>
                  </div>
                ))}
            </TabsContent>
            <TabsContent value="talent" className="space-y-4">
              {results
                .filter((r) => r.type === "talent")
                .map((r) => (
                  <div
                    key={`talent-${r.id}`}
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4"
                  >
                    <h3 className="text-lg font-bold text-white">
                      {highlight(r.title, query)}
                    </h3>
                    <p className="text-zion-slate-light">
                      {highlight(r.description, query)}
                    </p>
                  </div>
                ))}
            </TabsContent>
            <TabsContent value="docs" className="space-y-4">
              {results
                .filter((r) => r.type === "doc")
                .map((r) => (
                  <div
                    key={`doc-${r.id}`}
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4"
                  >
                    <h3 className="text-lg font-bold text-white">
                      {highlight(r.title, query)}
                    </h3>
                    <p className="text-zion-slate-light">
                      {highlight(r.description, query)}
                    </p>
                  </div>
                ))}
            </TabsContent>
            <TabsContent value="blog" className="space-y-4">
              {results
                .filter((r) => r.type === "blog")
                .map((r) => (
                  <div
                    key={`blog-${r.id}`}
                    className="bg-zion-blue-dark border border-zion-blue-light rounded-lg p-4"
                  >
                    <h3 className="text-lg font-bold text-white">
                      {highlight(r.title, query)}
                    </h3>
                    <p className="text-zion-slate-light">
                      {highlight(r.description, query)}
                    </p>
                  </div>
                ))}
            </TabsContent>
          </Tabs>
        )}
      </main>
    </>
  );
}
