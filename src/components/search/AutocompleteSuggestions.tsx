import React, { useEffect, useRef } from "react";
import { SearchSuggestion, SearchHighlight } from "@/types/search";
import { logInfo } from '@/utils/productionLogger';


interface AutocompleteSuggestionsProps {
  suggestions: SearchSuggestion[];
  searchTerm: string;
  onSelectSuggestion: (suggestion: SearchSuggestion) => void;
  visible: boolean;
  highlightedIndex: number;
  listId: string;
}

// Helper function to highlight matching text
const highlightMatch = (text: string, searchTerm: string): SearchHighlight => {
  if (!searchTerm || searchTerm.length === 0) {
    return { before: '', match: text, after: '' };
  }
  
  const lowerText = text.toLowerCase();
  const lowerSearchTerm = searchTerm.toLowerCase();
  const index = lowerText.indexOf(lowerSearchTerm);
  
  if (index === -1) {
    return { before: '', match: text, after: '' };
  }
  
  return {
    before: text.substring(0, index),
    match: text.substring(index, index + searchTerm.length),
    after: text.substring(index + searchTerm.length)
  };
};

export function AutocompleteSuggestions({
  suggestions,
  searchTerm,
  onSelectSuggestion,
  visible,
  highlightedIndex,
  listId
}: AutocompleteSuggestionsProps) {
  if (!visible || suggestions.length === 0) return null;
  
  const listRef = useRef<HTMLUListElement>(null);
  const highlightedItemRef = useRef<HTMLLIElement>(null);

  useEffect(() => {
    if (highlightedIndex !== -1 && highlightedItemRef.current) {
      highlightedItemRef.current.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    }
  }, [highlightedIndex]);

  return (
    <div
      className="absolute z-50 top-full left-0 right-0 w-full mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg max-h-64 overflow-y-auto search-dropdown"
      data-testid="search-suggestions"
    >
      <ul
        ref={listRef}
        id={listId}
        role="listbox"
        className="py-2"
      >
        {suggestions.map((suggestion, index) => {
          const highlight = highlightMatch(suggestion.text, searchTerm);
          const isHighlighted = index === highlightedIndex;

          return (
            <li
              key={`${suggestion.type}-${index}`}
              id={`suggestion-item-${index}`}
              ref={isHighlighted ? highlightedItemRef : null}
              role="option"
              aria-selected={isHighlighted}
              className={`px-4 py-2 cursor-pointer ${isHighlighted ? 'bg-zion-blue-light highlighted' : 'hover:bg-zion-blue-light/20'}`}
              data-testid="suggestion-item"
              onClick={(e) => {
                e.preventDefault();
                logInfo('Search suggestion clicked:', { data: suggestion });
                onSelectSuggestion(suggestion);
              }}
              onMouseDown={(e) => {
                // Prevent input blur when clicking suggestions
                e.preventDefault();
              }}
            >
              <div className="flex items-center justify-between">
                <div>
                  <span>{highlight.before}</span>
                  <span className="font-bold text-zion-purple">{highlight.match}</span>
                  <span>{highlight.after}</span>
                </div>
                <span className="text-xs text-zion-slate-light capitalize">
                  {suggestion.type}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
