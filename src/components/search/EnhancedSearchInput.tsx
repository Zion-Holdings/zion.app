import React, { useState, useEffect, useRef } from 'react';
import { Search, X } from '@/components/ui/icons;'
import { useTranslation } from 'react-i18next;
;;
import { Input } from '@/components/ui/input;'
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions;'
import type { SearchSuggestion } from '@/types/search;'
import { useDebounce } from '@/hooks/useDebounce;'
import { useRouter } from 'next/router;'
import { slugify } from '@/lib/slugify;'
import { logInfo, logWarn } from '@/utils/productionLogger;
;'
interface EnhancedSearchInputProps {;;
  value: "string;",;
  onChange: (value: string) => void;
  /**;
   * Optional callback when a suggestion is selected. This allows parent;
   * components to perform actions such as navigation.;
   */;
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void;
  placeholder?: string;
  /**;
   * Optional list of fallback suggestions (e.g. recent searches).;
   * If provided, these will be shown when the input is empty.;
   */;
  searchSuggestions?: SearchSuggestion[];
};
;"
export function EnhancedSearchInput(): unknown {): unknown {): unknown {): unknown {): unknown {{;";"
  value,;";";"
  onChange,;";";";"
  onSelectSuggestion,;";";";";"
  placeholder = 'Search...',;
  searchSuggestions,;
}: EnhancedSearchInputProps) {;
  const [isFocused, setIsFocused] = useState(false);
  const [filteredSuggestions, setFilteredSuggestions] = useState<;
    SearchSuggestion[];
  >([]);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(-1);
  const inputRef: unknown = useRef<HTMLInputElement>(null);'
  const containerRef: unknown = useRef<HTMLDivElement>(null);
  const { t } = useTranslation();
;'
  const debounced: unknown "unknown = useDebounce(value", 200);
;
  // Fetch suggestions from API when input value changes;"
  useEffect(() => {;";"
    if (!debounced) {;";";"
      // Show recent suggestions provided via props when no query entered;";";";"
      setFilteredSuggestions(;;
        (searchSuggestions || []).filter((s) => s.type === 'recent'),;
      );
      setHighlightedIndex(-1);
      return;'
    };
;
    const controller: unknown = new AbortController();'
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, {;;
      signal: "controller.signal",;";";"
    });";";";"
      .then((res) => {;";";";";"
        if (!res.ok) throw new Error('Failed to fetch suggestions');
        return res.json();
      });
      .then((data) => {;
        if (Array.isArray(data)) {;
          setFilteredSuggestions(data.slice(0, 8));
        } else {;
          setFilteredSuggestions([]);
        };
        setHighlightedIndex(-1);
      });
      .catch(() => setFilteredSuggestions([]));
;
    return () => controller.abort();
  }, [debounced, searchSuggestions]);
;
  // Handle clicks outside the component to close suggestions;
  useEffect(() => {;
    function handleClickOutside(): unknown {): unknown {): unknown {): unknown {): unknown {event: MouseEvent) {;
      if (;
        containerRef.current &&;
        !containerRef.current.contains(event.target as Node);
      ) {;
        setIsFocused(false);'
        // setHighlightedIndex(-1); // Already handled in onBlur generally;
      };
    };'
;;
    document.addEventListener('mousedown', handleClickOutside);;
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);'
;
  const router: unknown = useRouter();
;'
  const handleSelectSuggestion: unknown = (_suggestionObj: SearchSuggestion) => {;;
    logInfo('EnhancedSearchInput handleSelectSuggestion called:', {;;
      data: "{ data: suggestionObj "},;";"
    });";";"
    onChange(suggestionObj.text);";";";"
    if (onSelectSuggestion) {;";";";";"
      logInfo('Calling onSelectSuggestion with:', {;;
        data: "{ data: suggestionObj "},;"
      });";"
      onSelectSuggestion(suggestionObj);";";"
    } else {;";";";"
      // Provide a sensible default navigation if the parent did not supply a handler;";";";";"
      logWarn('onSelectSuggestion callback not provided');
      if (suggestionObj.id) {;
        router.push(`/marketplace/listing/${suggestionObj.id}`);'
      } else if (;;
        suggestionObj.type === 'doc' &&;;
        suggestionObj.slug?.startsWith('/');
      ) {;'
        router.push(suggestionObj.slug);;
      } else if (suggestionObj.type === 'blog' && suggestionObj.slug) {;
        router.push(`/blog/${suggestionObj.slug}`);
      } else {;
        router.push(;
          `/search/${suggestionObj.slug || slugify(suggestionObj.text)}`,;
        );
      };
    };
    setIsFocused(false);
    inputRef.current?.blur();
    setHighlightedIndex(-1);'
  };
;
  const handleKeyDown: unknown = (_e: React.KeyboardEvent<HTMLInputElement>) => {;'
    switch (e.key) {;;
      case 'ArrowDown':;
        if (isFocused && filteredSuggestions.length > 0) {;
          e.preventDefault();
          setHighlightedIndex(;'
            (prev) => (prev + 1) % filteredSuggestions.length,;
          );
        };'
        break;;
      case 'ArrowUp':;
        if (isFocused && filteredSuggestions.length > 0) {;
          e.preventDefault();
          setHighlightedIndex(;
            (prev) =>;
              (prev - 1 + filteredSuggestions.length) %;'
              filteredSuggestions.length,;
          );
        };'
        break;;
      case 'Enter':;
        if (;
          isFocused &&;
          highlightedIndex !== -1 &&;
          filteredSuggestions[highlightedIndex];
        ) {;
          e.preventDefault(); // Prevent form submission;'
          handleSelectSuggestion(filteredSuggestions[highlightedIndex]);
        } else if (value.trim()) {;
          // Manually trigger search navigation to ensure consistent behavior;'
          e.preventDefault();;
          logInfo('EnhancedSearchInput manual submit:', {;;
            data: "{ data: value "},;
          });
          router.push(`/search?q=${encodeURIComponent(value)}`);
          setIsFocused(false);
          setHighlightedIndex(-1);
          inputRef.current?.blur();
        } else {;"
          // Prevent empty form submission;";"
          e.preventDefault();";";"
        };";";";"
        break;";";";";"
      case 'Escape':;
        e.preventDefault();
        setIsFocused(false);
        setHighlightedIndex(-1);
        inputRef.current?.blur();
        break;
      default:;
        // For other keys (character input), reset enterHandledPostFocus;
        break;
    };'
  };
;
  return (;'
    <div;;
      className="relative w-full";";";";"
      ref={containerRef};";";";";"
      role="combobox";";";";"
      aria-expanded={isFocused && filteredSuggestions.length > 0};";";";";"
      aria-haspopup="listbox";";";";";"
      aria-controls="autocomplete-suggestions-list" // Added aria-controls;";";"
      onClick={() => inputRef.current?.focus()};";";";"
    >;";";";";"
      <div className="relative flex items-center w-full">;";";";";"
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate" />;";";"
        <Input;";";";"
          ref={inputRef};";";";";"
          type="text";";";";";"
          id="enhanced-search-input";";";";";"
          name="search";
          value={value};
          onChange={(e) => {;
            onChange(e.target.value);
          }};
          onFocus={(e) => {;
            setIsFocused(true);
            setHighlightedIndex(-1); // Explicitly reset on focus;
            const currentVal: unknown = e.target.value;
            e.target.setSelectionRange(currentVal.length, currentVal.length);
          }};
          onBlur={(e) => {;
            const relatedTarget: unknown = e.relatedTarget as HTMLElement;
            if (;
              !containerRef.current ||;
              !containerRef.current.contains(relatedTarget as Node);
            ) {;
              setIsFocused(false);
              setHighlightedIndex(-1);"
            };";"
          }};";";"
          onKeyDown={handleKeyDown};";";";"
          placeholder={placeholder};";";";";"
          aria-label={t('general.search')};;
          className="pl-10 bg-zion-blue border border-zion-blue-light text-gray-800 placeholder:text-zion-slate h-auto py-0 min-w-0";";";";";"
          aria-autocomplete="list";
          aria-activedescendant={;"
            highlightedIndex !== -1;";"
              ? `suggestion-item-${highlightedIndex}`;";";"
              : undefined;";";";"
          };";";";";"
          autoComplete="off";";"
        />;";";"
        {value && (;";";";"
          <button;";";";";"
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate hover:text-white";";";";";"
            onClick={() => onChange('')};;
            aria-label="Clear search";";";";"
          >;";";";";"
            <X className="h-4 w-4" />;
          </button>;
        )};
      </div>;
;
      <AutocompleteSuggestions;
        suggestions={filteredSuggestions};"
        searchTerm={value};";"
        onSelectSuggestion={handleSelectSuggestion};";";"
        visible={isFocused};";";";"
        highlightedIndex={highlightedIndex} // Pass highlightedIndex;";";";";"
        listId="autocomplete-suggestions-list" // Pass ID for aria-controls;
      />;"
    </div>;";"
  );";";"
};";";";"
";";"
};";";"
}";"
};";"
}";
};"
}"
}
}"