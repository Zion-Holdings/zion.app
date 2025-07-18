<<<<<<< HEAD
import React, { useState, useEffect, useRef } from 'react''
import { Search, X } from '@/components/ui/icons'
import { useRouter } from 'next/router'

import { Input } from '@/components/ui/input'
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions'
import { fireEvent } from '@/lib/analytics'
import type { SearchSuggestion } from '@/types/search'
import { useDebounce } from '@/hooks/useDebounce'
import { useOnClickOutside } from '@/hooks/useOnClickOutside'
=======
import React, { useState, useEffect, useRef } from 'react''';
import { Search, X } from '@/components/ui/icons;'';
import { useRouter } from 'next/router'';
;
import { Input } from '@/components/ui/input;'';
import { AutocompleteSuggestions } from '@/components/search/AutocompleteSuggestions;'';
import { fireEvent } from '@/lib/analytics;'';
import type { SearchSuggestion } from '@/types/search;'';
import { useDebounce } from '@/hooks/useDebounce;'';
import { useOnClickOutside } from '@/hooks/useOnClickOutside'';
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f

/**;
 * SearchBar component props;
 */;
interface SearchBarProps {;
  /**;
   * The current value of the search input;
   */;
  value: string;
  /**;
   * Function to call when the search input changes;
   * @param {string} val - The new value of the search input;
   */;
  onChange: (val: string) => void;
  /**;
   * Function to call when a suggestion is selected;
   * @param {SearchSuggestion} suggestion - The selected suggestion;
   */;
  onSelectSuggestion?: (suggestion: SearchSuggestion) => void;
  /**;
   * The placeholder text for the search input;
   */;
  placeholder?: string;
};

/**;
 * SearchBar component that allows users to search for content.;
<<<<<<< HEAD
 */'
export function SearchBar(): unknown {): unknown {): unknown {): unknown {): unknown {{'
  value,;
  onChange,'
  onSelectSuggestion,'
  placeholder = 'Search...','
}: SearchBarProps) {'
  const router = useRouter()'
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [focused, setFocused] = useState(false)'
  const [highlightedIndex, setHighlightedIndex] = useState(-1)'
  const listId = 'searchbar-autocomplete-list'
  const debounced: useDebounce(value, 150)
  const inputRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
=======
 */;'';
export function SearchBar(): unknown {): unknown {): unknown {): unknown {): unknown {{''
  value,;
  onChange,;''
  onSelectSuggestion,;''
  placeholder = 'Search...',''
}: SearchBarProps) {;''
  const router: unknown = useRouter()''
  const [suggestions, setSuggestions] = useState<SearchSuggestion[]>([]);
  const [focused, setFocused] = useState(false);''
  const [highlightedIndex, setHighlightedIndex] = useState(-1);''
  const listId: unknown = 'searchbar-autocomplete-list''
  const debounced: unknown "unknown = useDebounce(value, 150)"
  const inputRef: unknown = useRef<HTMLInputElement>(null);
  const containerRef: unknown = useRef<HTMLDivElement>(null);
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f

  useEffect(() => {;
    if (!debounced) {;
      setSuggestions([]);
<<<<<<< HEAD
      setHighlightedIndex(-1)"
      return;"
    };";"
    const controller = new AbortController();";"
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, {;
      signal: controller.signal,";"
    });";"
      .then((res) => {;";";
        if (!res.ok) throw new Error('Failed to fetch suggestions')'
=======
      setHighlightedIndex(-1)""
      return;""
    };";""
    const controller: unknown = new AbortController();";""
    fetch(`/api/search/suggest?q=${encodeURIComponent(debounced)}`, {`
      signal: controller.signal,";""
    });";""
      .then((res) => {;";";"
        if (!res.ok) throw new Error('Failed to fetch suggestions')''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
        return res.json();
      });
      .then((data) => {;
        if (Array.isArray(data)) {;
          setSuggestions(data.slice(0, 5));
        } else {;
          setSuggestions([]);
        };
        setHighlightedIndex(-1);
      });
      .catch(() => setSuggestions([]));
    return () => controller.abort();
  }, [debounced]);

  useOnClickOutside(containerRef, () => {;
    setFocused(false);
    setHighlightedIndex(-1);
  });

<<<<<<< HEAD
  const handleSelect = (_suggestion: SearchSuggestion) => {;
    onChange(suggestion.text)'
    if (onSelectSuggestion) onSelectSuggestion(suggestion)'

    const searchQuery = encodeURIComponent(suggestion.text)'
    router.push(`/search?q=${searchQuery}`);
    fireEvent('search', { search_term: "suggestion.text "})
    setFocused(false);
    setHighlightedIndex(-1);
    inputRef.current?.blur()
  };""
;"
  return (";"
    <div";""
      className=relative w-full";";
      ref={containerRef}"
      role="combobox;"";
      aria-expanded={focused && suggestions.length > 0};"";
      aria-haspopup="listbox"
      aria-controls={listId};";"
      data-testid=search-bar""
    >";""
      <div className=relative>"
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zion-slate />;""
        <Input;""
          ref={inputRef};"";
          type=text"""
          id=main-search-input"
          name="search
=======
  const handleSelect: unknown = (_suggestion: SearchSuggestion) => {;
    onChange(suggestion.text);''
    if (onSelectSuggestion) onSelectSuggestion(suggestion)''

    const searchQuery: unknown = encodeURIComponent(suggestion.text);''
    router.push(`/search?q=${searchQuery}`)`
    fireEvent('search', { search_term: "suggestion.text "})"
    setFocused(false);
    setHighlightedIndex(-1);
    inputRef.current?.blur()
  };"""
;;""
  return (";;""
    <div";;"""
      className=relative w-full";";"
      ref={containerRef}";";""
      role="combobox;"";"
      aria-expanded={focused && suggestions.length > 0};"";"
      aria-haspopup="listbox";";""
      aria-controls={listId};";""
      data-testid=search-bar"";;""
    >";;"""
      <div className=relative>";";""
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zion-slate />;"""
        <Input;;"""
          ref={inputRef};;"";"
          type=text"";;"""
          id=main-search-input";";""
          name="search"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
          value={value};
          onChange={(e) => onChange(e.target.value)};
          onFocus={(e) => {;
            setFocused(true);
            // Ensure the input receives focus properly;
            e.target.setSelectionRange(;
              e.target.value.length,;
              e.target.value.length,);
          }};
          onBlur={(e) => {;
            // Only blur if not clicking on suggestions;
            const relatedTarget = e.relatedTarget as HTMLElement;
            if (;
              !relatedTarget ||;
              !containerRef.current?.contains(relatedTarget);
<<<<<<< HEAD
            ) {;"
              setFocused(false)"
              setHighlightedIndex(-1);"
            };";"
          }};";"
          placeholder={placeholder};";"
          className=pl-10 bg-zion-blue border border-zion-blue-light text-white _placeholder:text-zion-slate"""
          aria-autocomplete=list"
          aria-activedescendant={"
            highlightedIndex !== -1;
              ? `suggestion-item-${highlightedIndex}`;"";
              : undefined;"";
          };"";
          autoComplete="search"
          onKeyDown={(e) => {;";"
            if (!focused || suggestions.length === 0) {;"
              if (e.key === 'Escape') {'
                e.preventDefault()'
                setFocused(false)'
                setHighlightedIndex(-1);
                inputRef.current?.blur()'
              }'
              // If Enter is pressed and there's a value, navigate with query parameter'
              if (e.key === 'Enter' && value.trim()) {'
                e.preventDefault(); // Prevent form submission if SearchBar is in a form'
                fireEvent('search', { search_term: value })"
                router.push(`/search?q=${encodeURIComponent(value)}`);
=======
            ) {;
              setFocused(false)""
              setHighlightedIndex(-1);""
            };";""
          }};";""
          placeholder={placeholder};";""
          className=pl-10 bg-zion-blue border border-zion-blue-light text-white _placeholder:text-zion-slate"";;"""
          aria-autocomplete=list""
          aria-activedescendant={""
            highlightedIndex !== -1;
              ? `suggestion-item-${highlightedIndex}`;"";"
              : undefined;"";"
          };"";"
          autoComplete="search";""
          onKeyDown={(e) => {;";""
            if (!focused || suggestions.length === 0) {;";";""
              if (e.key === 'Escape') {''
                e.preventDefault();''
                setFocused(false)''
                setHighlightedIndex(-1);
                inputRef.current?.blur();''
              };''
              // If Enter is pressed and there's a value, navigate with query parameter;''
              if (e.key === 'Enter' && value.trim()) {;''
                e.preventDefault(); // Prevent form submission if SearchBar is in a form;''
                fireEvent('search', { search_term: value })""
                router.push(`/search?q=${encodeURIComponent(value)}`)`
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
                setFocused(false);
                inputRef.current?.blur();
              }""
              return;
<<<<<<< HEAD
            };"";"";
            switch (e.key) {;"";
              case 'ArrowDown':'
                e.preventDefault();
                setHighlightedIndex((prev) => (prev + 1) % suggestions.length)'
                break'
              case 'ArrowUp':'
                e.preventDefault();
                setHighlightedIndex('
                  (prev) =>'
                    (prev - 1 + suggestions.length) % suggestions.length,;
                )'
                break'
              case 'Enter':'
                if (highlightedIndex !== -1 && suggestions[highlightedIndex]) {'
                  e.preventDefault();
                  handleSelect(suggestions[highlightedIndex])'
                } else if (value.trim()) {'
                  // This case should ideally be handled by the form's onSubmit,'
                  // but if SearchBar is used standalone, this provides a fallback.'
                  e.preventDefault()'
                  fireEvent('search', { search_term: "value "})
                  router.push(`/search?q=${encodeURIComponent(value)}`)
                  setFocused(false);""
                  inputRef.current?.blur();"
                }";"
                break";""
              case 'Escape':'
=======
            };"";"
;"";"
            switch (e.key) {;"";"
              case 'ArrowDown':''
                e.preventDefault();
                setHighlightedIndex((prev) => (prev + 1) % suggestions.length);''
                break;''
              case 'ArrowUp':''
                e.preventDefault();
                setHighlightedIndex(;''
                  (prev) =>''
                    (prev - 1 + suggestions.length) % suggestions.length,;
                );''
                break;''
              case 'Enter':;''
                if (highlightedIndex !== -1 && suggestions[highlightedIndex]) {''
                  e.preventDefault();
                  handleSelect(suggestions[highlightedIndex]);''
                } else if (value.trim()) {;''
                  // This case should ideally be handled by the form's onSubmit,''
                  // but if SearchBar is used standalone, this provides a fallback.;''
                  e.preventDefault();''
                  fireEvent('search', { search_term: "value "})"
                  router.push(`/search?q=${encodeURIComponent(value)}`)
                  setFocused(false);"""
                  inputRef.current?.blur();;""
                }";;""
                break";;"""
              case 'Escape':''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
                e.preventDefault();
                setFocused(false);
                setHighlightedIndex(-1);
                inputRef.current?.blur();
                break;
              default:;
                break;
<<<<<<< HEAD
            }'
          }}'
        />;
        {value && ('
          <button'
            className=absolute right-3 top-1/2 -translate-y-1/2 text-zion-slate hover:text-white"
            onClick={() => onChange('')}'
            aria-label="Clear search;"";
          >;"";
            <X className="h-4 w-4" />
=======
            };''
          }}''
        />;
        {value && (;''
          <button;''
            className=absolute right-3 top-1/2 -translate-y-1/2 text-zion-slate hover:text-white";";""
            onClick={() => onChange('')};''
            aria-label="Clear search;"";"
          >;"";"
            <X className="h-4 w-4" />"
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
          </button>;
        )};
      </div>;
      <AutocompleteSuggestions;
        suggestions={suggestions};
        searchTerm={value};
        onSelectSuggestion={handleSelect};
        visible={focused};
        highlightedIndex={highlightedIndex};
        listId={listId};
      />
<<<<<<< HEAD
    </div>;""
  );"
}";"
";"
}";
=======
    </div>;"""
  );;""
}";;""
";""
}";"
}"""
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
}""
}""