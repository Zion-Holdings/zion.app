import React, { useState, useEffect, useRef, useCallback } from "react";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import { AutocompleteSuggestions } from "@/components/search/AutocompleteSuggestions"; 
import { SearchSuggestion } from "@/types/search";
import debounce from 'lodash.debounce';

interface EnhancedSearchInputProps {
  value: string;
  onChange: (value: string) => void;
  /**
   * Optional callback when a suggestion is selected. This allows parent
   * components to perform actions such as navigation.
   */
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void;
  placeholder?: string;
  searchSuggestions: SearchSuggestion[];
}

export function EnhancedSearchInput({
  value,
  onChange,
  onSelectSuggestion,
  placeholder = "Search...",
  searchSuggestions
}: EnhancedSearchInputProps) {
  const [isFocused, setIsFocused] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<SearchSuggestion[]>([]);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [valueOnFocus, setValueOnFocus] = useState<string | null>(null);
  const [enterHandledPostFocus, setEnterHandledPostFocus] = useState(false);

  const debouncedFilterSuggestions = useCallback(
    debounce((currentValue: string, suggestions: SearchSuggestion[]) => {
      if (!currentValue) {
        // Show recent searches when input is empty
        setFilteredSuggestions(suggestions.filter(s => s.type === 'recent'));
        return;
      }

      const filtered = suggestions.filter(suggestion =>
        suggestion.text.toLowerCase().includes(currentValue.toLowerCase())
      );

      // Sort suggestions to prioritize those that start with the search term
      filtered.sort((a, b) => {
        const aStartsWith = a.text.toLowerCase().startsWith(currentValue.toLowerCase()) ? -1 : 0;
        const bStartsWith = b.text.toLowerCase().startsWith(currentValue.toLowerCase()) ? -1 : 0;
        return aStartsWith - bStartsWith;
      });

      setFilteredSuggestions(filtered.slice(0, 8)); // Limit to 8 suggestions
    }, 300),
    [] // setFilteredSuggestions is stable
  );

  // Filter suggestions based on input value
  useEffect(() => {
    debouncedFilterSuggestions(value, searchSuggestions);
    setHighlightedIndex(-1); // Reset highlighted index when value changes
    return () => {
      debouncedFilterSuggestions.cancel();
    };
  }, [value, searchSuggestions, debouncedFilterSuggestions]);

  // Handle clicks outside the component to close suggestions
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsFocused(false);
        // setHighlightedIndex(-1); // Already handled in onBlur generally
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSelectSuggestion = (suggestionObj: SearchSuggestion) => {
    console.log('EnhancedSearchInput handleSelectSuggestion called:', suggestionObj);
    onChange(suggestionObj.text);
    if (onSelectSuggestion) {
      console.log('Calling onSelectSuggestion with:', suggestionObj);
      onSelectSuggestion(suggestionObj);
    } else {
      console.warn('onSelectSuggestion callback not provided');
    }
    setIsFocused(false);
    inputRef.current?.blur();
    setHighlightedIndex(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    switch (e.key) {
      case 'ArrowDown':
        if (isFocused && filteredSuggestions.length > 0) {
          e.preventDefault();
          setHighlightedIndex(prev => (prev + 1) % filteredSuggestions.length);
        }
        break;
      case 'ArrowUp':
        if (isFocused && filteredSuggestions.length > 0) {
          e.preventDefault();
          setHighlightedIndex(prev => (prev - 1 + filteredSuggestions.length) % filteredSuggestions.length);
        }
        break;
      case 'Enter':
        if (isFocused && highlightedIndex !== -1 && filteredSuggestions[highlightedIndex]) {
          e.preventDefault(); // Prevent form submission
          handleSelectSuggestion(filteredSuggestions[highlightedIndex]);
        } else if (value.trim()) {
          // Allow form submission when there's a value and no suggestion is selected
          // Don't prevent default - let the form handle submission
          console.log('EnhancedSearchInput: Allowing form submission for query:', value);
          setIsFocused(false);
          setHighlightedIndex(-1);
          inputRef.current?.blur();
        } else {
          // Prevent empty form submission
          e.preventDefault();
        }
        break;
      case 'Escape':
        e.preventDefault();
        setIsFocused(false);
        setHighlightedIndex(-1);
        setValueOnFocus(null);
        inputRef.current?.blur();
        break;
      default:
        // For other keys (character input), reset enterHandledPostFocus
        setEnterHandledPostFocus(false);
        break;
    }
  };
  
  return (
    <div
      className="relative w-full"
      ref={containerRef}
      role="combobox"
      aria-expanded={isFocused && filteredSuggestions.length > 0}
      aria-haspopup="listbox"
      aria-controls="autocomplete-suggestions-list" // Added aria-controls
    >
      <div className="relative flex items-center w-full">
        <Search 
          className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" 
        />
        <Input
          ref={inputRef}
          type="text"
          value={value}
          onChange={(e) => {
            onChange(e.target.value);
            setEnterHandledPostFocus(false);
          }}
          onFocus={(e) => {
            setIsFocused(true);
            setHighlightedIndex(-1); // Explicitly reset on focus
            const currentVal = e.target.value;
            setValueOnFocus(currentVal);
            setEnterHandledPostFocus(false);
            e.target.setSelectionRange(currentVal.length, currentVal.length);
          }}
          onBlur={(e) => {
            const relatedTarget = e.relatedTarget as HTMLElement;
            if (!containerRef.current || !containerRef.current.contains(relatedTarget as Node)) {
              setIsFocused(false);
              setHighlightedIndex(-1);
            }
            setValueOnFocus(null);
          }}
          onKeyDown={handleKeyDown}
          placeholder={placeholder}
          className="pl-10 bg-zion-blue border border-zion-blue-light text-white placeholder:text-zion-slate h-auto py-0 min-w-0"
          aria-autocomplete="list"
          aria-activedescendant={highlightedIndex !== -1 ? `suggestion-item-${highlightedIndex}` : undefined}
        />
        {value && (
          <button
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white"
            onClick={() => onChange('')}
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>
      
      <AutocompleteSuggestions
        suggestions={filteredSuggestions}
        searchTerm={value}
        onSelectSuggestion={handleSelectSuggestion}
        visible={isFocused}
        highlightedIndex={highlightedIndex} // Pass highlightedIndex
        listId="autocomplete-suggestions-list" // Pass ID for aria-controls
      />
    </div>
  );
}
