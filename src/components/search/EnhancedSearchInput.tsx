import React, { useState, useEffect, useRef } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search, X, TrendingUp, Clock } from 'lucide-react';

interface SearchSuggestion {
  id: string;
  text: string;
  type: 'recent' | 'trending' | 'suggestion';
  category?: string;
}

interface EnhancedSearchInputProps {
  placeholder?: string;
  onSearch?: (query: string) => void;
  suggestions?: SearchSuggestion[];
}

export const EnhancedSearchInput: React.FC<EnhancedSearchInputProps> = ({
  placeholder = "Search for services, solutions, or help...",
  onSearch,
  suggestions = [],
}) => {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const suggestionsRef = useRef<HTMLDivElement>(null);

  // Mock suggestions
  const mockSuggestions: SearchSuggestion[] = [
    { id: '1', text: 'AI CRM System', type: 'trending', category: 'AI Solutions' },
    { id: '2', text: 'Cloud Infrastructure', type: 'trending', category: 'Cloud Services' },
    { id: '3', text: 'Web Development', type: 'trending', category: 'Development' },
    { id: '4', text: 'AI CRM System', type: 'recent' },
    { id: '5', text: 'Cloud setup help', type: 'recent' },
    { id: '6', text: 'Pricing information', type: 'recent' },
  ];

  const allSuggestions = [...mockSuggestions, ...suggestions];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        suggestionsRef.current &&
        !suggestionsRef.current.contains(event.target as Node) &&
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setShowSuggestions(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = () => {
    if (query.trim()) {
      onSearch?.(query.trim());
      setShowSuggestions(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleSuggestionClick = (suggestion: SearchSuggestion) => {
    setQuery(suggestion.text);
    onSearch?.(suggestion.text);
    setShowSuggestions(false);
  };

  const clearSearch = () => {
    setQuery('');
    inputRef.current?.focus();
  };

  const getSuggestionIcon = (type: string) => {
    switch (type) {
      case 'trending':
        return <TrendingUp className="w-4 h-4 text-orange-500" />;
      case 'recent':
        return <Clock className="w-4 h-4 text-blue-500" />;
      default:
        return <Search className="w-4 h-4 text-gray-400" />;
    }
  };

  return (
    <div className="relative w-full max-w-2xl">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
            setShowSuggestions(e.target.value.length > 0);
          }}
          onFocus={() => {
            setIsFocused(true);
            if (query.length > 0) {
              setShowSuggestions(true);
            }
          }}
          onBlur={() => setIsFocused(false)}
          onKeyPress={handleKeyPress}
          placeholder={placeholder}
          className="pl-10 pr-20 py-3 text-base border-2 focus:border-blue-500 focus:ring-blue-500"
        />
        
        {query && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearSearch}
            className="absolute right-16 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 hover:bg-gray-100"
          >
            <X className="w-4 h-4" />
          </Button>
        )}
        
        <Button
          onClick={handleSearch}
          disabled={!query.trim()}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 h-8 px-4 bg-blue-600 hover:bg-blue-700 text-white"
        >
          Search
        </Button>
      </div>

      {showSuggestions && allSuggestions.length > 0 && (
        <div
          ref={suggestionsRef}
          className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 max-h-96 overflow-y-auto"
        >
          <div className="p-2">
            {allSuggestions.map((suggestion) => (
              <button
                key={suggestion.id}
                onClick={() => handleSuggestionClick(suggestion)}
                className="w-full text-left p-3 hover:bg-gray-50 rounded-md flex items-center space-x-3 group"
              >
                {getSuggestionIcon(suggestion.type)}
                <div className="flex-1">
                  <div className="font-medium text-gray-900 group-hover:text-blue-600">
                    {suggestion.text}
                  </div>
                  {suggestion.category && (
                    <div className="text-sm text-gray-500">{suggestion.category}</div>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};