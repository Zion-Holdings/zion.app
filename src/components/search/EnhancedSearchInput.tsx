import React, { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';

interface SearchSuggestion {
  id: string;
  text: string;
  type: string;
}

interface EnhancedSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  onSelectSuggestion: (text: string) => void;
  searchSuggestions: SearchSuggestion[];
  placeholder?: string;
  className?: string;
}

export function EnhancedSearchInput({
  value,
  onChange,
  onSelectSuggestion,
  searchSuggestions,
  placeholder = "Search services, solutions...",
  className = ""
}: EnhancedSearchInputProps) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (value.trim()) {
      const filtered = searchSuggestions.filter(suggestion =>
        suggestion.text.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredSuggestions(filtered.slice(0, 5));
      setShowSuggestions(true);
    } else {
      setShowSuggestions(false);
    }
  }, [value, searchSuggestions]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (suggestionsRef.current && !suggestionsRef.current.contains(event.target as Node)) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    onSelectSuggestion(suggestion.text);
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    onChange('');
    setShowSuggestions(false);
    inputRef.current?.focus();
  };

  return (
    <div className={`relative ${className}`} ref={suggestionsRef}>
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-zion-slate-light" />
        <input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full pl-10 pr-10 py-2 bg-zion-blue-light/20 border border-zion-blue-light/30 rounded-lg text-white placeholder:text-zion-slate-light focus:outline-none focus:ring-2 focus:ring-zion-cyan focus:border-transparent"
          onFocus={() => value.trim() && setShowSuggestions(true)}
        />
        {value && (
          <button
            onClick={clearSearch}
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>

      {showSuggestions && filteredSuggestions.length > 0 && (
        <div className="absolute top-full left-0 right-0 mt-1 bg-zion-blue-light/95 backdrop-blur-sm border border-zion-blue-light/30 rounded-lg shadow-xl z-50">
          {filteredSuggestions.map((suggestion) => (
            <button
              key={suggestion.id}
              onClick={() => handleSuggestionClick(suggestion)}
              className="w-full px-4 py-3 text-left text-white hover:bg-zion-blue-light/30 transition-colors first:rounded-t-lg last:rounded-b-lg"
            >
              <div className="flex items-center gap-3">
                <Search className="w-4 h-4 text-zion-cyan" />
                <div>
                  <div className="font-medium">{suggestion.text}</div>
                  <div className="text-sm text-zion-slate-light capitalize">{suggestion.type}</div>
                </div>
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}