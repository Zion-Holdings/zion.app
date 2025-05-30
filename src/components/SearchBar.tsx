import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions';
import { SearchSuggestion } from '@/types/search';
import { useDebounce } from '@/hooks/useDebounce';
import { useOnClickOutside } from '@/hooks/useOnClickOutside';

interface SearchBarProps {
  value: string;
  onChange: (val: string) => void;
  onSelectSuggestion?: (val: string) => void;
  placeholder?: string;
}

export function SearchBar({ value, onChange, onSelectSuggestion, placeholder = 'Search...' }: SearchBarProps) {
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [focused, setFocused] = useState(false);
  const debounced = useDebounce(value, 150);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!debounced) {
      setSuggestions([]);
      return;
    }
    const controller = new AbortController();
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, { signal: controller.signal })
      .then(res => res.json())
      .then(data => setSuggestions(data || []))
      .catch(() => setSuggestions([]));
    return () => controller.abort();
  }, [debounced]);

  useOnClickOutside(containerRef, () => setFocused(false));

  const handleSelect = (text: string) => {
    onChange(text);
    if (onSelectSuggestion) onSelectSuggestion(text);
    setFocused(false);
    inputRef.current?.blur();
  };

  return (
    <div className="relative w-full" ref={containerRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zion-slate" />
        <Input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onFocus={() => setFocused(true)}
          placeholder={placeholder}
          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate"
        />
        {value && (
          <button
            className="absolute right-3 top-1/2 -translate-y-1/2 text-zion-slate hover:text-white"
            onClick={() => onChange('')}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      <AutocompleteSuggestions
        suggestions={suggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelect}
        visible={focused}
      />
    </div>
  );
}
