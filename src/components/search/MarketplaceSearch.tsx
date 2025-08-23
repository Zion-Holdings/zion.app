import React, { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';
import { useAutocomplete } from '@/hooks/useAutocomplete';
import { ProductListing } from '@/types/listings';
import { safeStorage } from '@/utils/safeStorage';
import { fireEvent } from '@/lib/analytics';
import debounce from 'lodash.debounce';

interface MarketplaceSearchProps {
  products: ProductListing[];
  onSelect?: (item: ProductListing) => void;
}

export function MarketplaceSearch({ products, onSelect }: MarketplaceSearchProps) {
  const [query, setQuery] = useState(() => safeStorage.getItem('marketplace_search_query') || '');
  const { suggestions, getSuggestions, clearSuggestions } = useAutocomplete(products);
  const [highlight, setHighlight] = useState(-1);

  useEffect(() => {
    safeStorage.setItem('marketplace_search_query', query);
  }, [query]);

  // Debounce fetching suggestions to reduce expensive computations/API calls
  const debouncedSuggest = React.useMemo(
    () => debounce((value: string) => getSuggestions(value), 300),
    [getSuggestions]
  );

  useEffect(() => {
    debouncedSuggest(query);
    return () => {
      debouncedSuggest.cancel();
    };
  }, [query, debouncedSuggest]);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    setHighlight(-1);
  };

  const select = (item: ProductListing) => {
    setQuery(item.title);
    clearSuggestions();
    if (onSelect) onSelect(item);
    fireEvent('search', { search_term: item.title });
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setHighlight(h => Math.min(h + 1, suggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setHighlight(h => Math.max(h - 1, 0));
    } else if (e.key === 'Enter' && highlight >= 0) {
      e.preventDefault();
      const selectedSuggestion = suggestions[highlight];
      if (selectedSuggestion) {
        select(selectedSuggestion);
      }
    }
  };

  return (
    <div className="relative">
      <Input
        id="marketplace-search-input"
        name="marketplace-search"
        value={query}
        onChange={handleInput}
        onKeyDown={handleKeyDown}
        placeholder="Search products..."
        aria-label="Marketplace search"
        autoComplete="search"
      />
      {suggestions.length > 0 && (
        <ul className="absolute left-0 right-0 mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-md z-10 max-h-60 overflow-auto">
          {suggestions.map((s, i) => (
            <li
              key={s.id}
              className={`p-2 cursor-pointer ${i === highlight ? 'bg-zion-blue-light/20' : ''}`}
              onMouseDown={() => select(s)}
            >
              {s.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default MarketplaceSearch;
