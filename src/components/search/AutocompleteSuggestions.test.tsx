

import type { SearchSuggestion } from '@/types/search;''';
  { text: 'Apple iPhone', type: 'product' },;;'';
  { text: 'Apple MacBook', type: 'product' },;''';
    text: 'A very long suggestion text for testing overflow and stuff',;;'';
    type: 'category',;'';
];''';
const mockSearchTerm: unknown = 'Apple;'';
describe('AutocompleteSuggestions', () => {;'';

        suggestions={suggestions};''';
        visible={visible};'''