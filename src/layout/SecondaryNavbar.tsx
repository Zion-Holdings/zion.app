import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EnhancedSearchInput } from "@/components/search/EnhancedSearchInput";
import { generateSearchSuggestions } from "@/data/marketplaceData";
import { MainNavigation } from "./MainNavigation";

export function SecondaryNavbar() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("");
  const suggestions = generateSearchSuggestions();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${encodeURIComponent(query)}`);
      setQuery("");
    }
  };

  return (
    <div className="sticky top-16 z-40 w-full border-b border-border bg-card/90 backdrop-blur-md">
      <div className="container flex items-center gap-4 px-4 py-2">
        <MainNavigation className="flex-1" />
        <form onSubmit={handleSubmit} className="hidden md:block w-64">
          <EnhancedSearchInput
            value={query}
            onChange={setQuery}
            onSelectSuggestion={(text) => {
              navigate(`/search?q=${encodeURIComponent(text)}`);
              setQuery("");
            }}
            searchSuggestions={suggestions}
          />
        </form>
      </div>
    </div>
  );
}
