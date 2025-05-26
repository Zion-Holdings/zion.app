import { useState, useMemo, useCallback, useEffect } from 'react';
import Fuse from 'fuse.js';
import debounce from 'lodash.debounce';
import { ProductListing } from '@/types/listings';

export function useAutocomplete(products: ProductListing[]) {
  const [suggestions, setSuggestions] = useState<ProductListing[]>([]);

  const fuse = useMemo(() => new Fuse(products, {
    keys: ['title', 'tags'],
    threshold: 0.3,
  }), [products]);

  const getSuggestions = useMemo(() =>
    debounce((query: string) => {
      if (!query) {
        setSuggestions([]);
        return;
      }
      const results = fuse.search(query).slice(0, 8).map(r => r.item);
      setSuggestions(results);
    }, 300)
  , [fuse]);

  const clearSuggestions = useCallback(() => setSuggestions([]), []);

  useEffect(() => {
    return () => {
      // cancel pending debounced calls on unmount
      (getSuggestions as any).cancel?.();
    };
  }, [getSuggestions]);

  return { suggestions, getSuggestions, clearSuggestions };
}
