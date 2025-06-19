
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
  type: "product" | "service" | "talent";
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
  const [params] = useSearchParams();
  const router = useRouter();
  const initial = params.get("q") || "";
  const [query, setQuery] = useState(initial);
  const [results, setResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState(false);
  const suggestions: SearchSuggestion[] = generateSearchSuggestions();

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
      if (Array.isArray(data)) {
        setResults(data);
      } else {
        setResults([]);
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
        {!loading && results.length === 0 && (
          <p className="text-zion-slate-light">No results found.</p>
        )}
        {!loading && results.length > 0 && (
          <Tabs defaultValue="product" className="space-y-4">
            <TabsList className="mb-4">
              <TabsTrigger value="product">
                Products ({results.filter((r) => r.type === "product").length})
              </TabsTrigger>
              <TabsTrigger value="service">
                Services ({results.filter((r) => r.type === "service").length})
              </TabsTrigger>
              <TabsTrigger value="talent">
                Talent ({results.filter((r) => r.type === "talent").length})
              </TabsTrigger>
            </TabsList>
            <TabsContent value="product" className="space-y-4">
              {results
                .filter((r) => r.type === "product")
                .map((r) => (
                  <div
                    key={`product-${r.id}`}
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
            <TabsContent value="service" className="space-y-4">
              {results
                .filter((r) => r.type === "service")
                .map((r) => (
                  <div
                    key={`service-${r.id}`}
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
          </Tabs>
        )}
      </main>
    </>
  );
}
