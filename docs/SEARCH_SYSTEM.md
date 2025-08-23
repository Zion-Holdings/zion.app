# Advanced Search System Documentation

## Overview

The Zion AI marketplace features a comprehensive search system that allows users to quickly find products, talent, services, blog posts, and documentation. The search system includes advanced filtering, sorting, highlighting, and intelligent suggestions.

## Features

### 🔍 **Core Search Functionality**
- **Multi-content search**: Search across products, talent, services, blog posts, and documentation
- **Real-time search**: Instant results as you type
- **Search suggestions**: Intelligent autocomplete with recent searches and category suggestions
- **Advanced filtering**: Filter by content type, category, price range, and rating
- **Multiple sort options**: Sort by relevance, price, rating, or date

### 🎯 **Advanced Filtering**
- **Content Type Filter**: Products, Talent, Services, Blog Posts, Documentation
- **Category Filter**: Dynamic categories based on available content
- **Price Range Filter**: Slider-based price filtering from $0-$10,000
- **Rating Filter**: Minimum rating filter (1-5 stars)
- **Active Filter Display**: Visual badges showing active filters with easy removal

### 📱 **User Experience**
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile
- **Grid/List View Toggle**: Switch between card grid and list layouts
- **Search Highlighting**: Visual highlighting of search terms in results
- **No Results State**: Helpful suggestions and search tips when no results found
- **Loading States**: Smooth loading indicators during search

### 🔧 **Developer Features**
- **Server-side Rendering**: Initial search results rendered on server for SEO
- **Caching**: Smart caching of search results for performance
- **Analytics**: Built-in search metrics and performance tracking
- **Modular Architecture**: Easy to extend with new content types and filters

## Implementation

### Main Components

#### 1. **Search Page** (`pages/search.tsx`)
The main search interface that users interact with.

```tsx
// Basic usage - navigates to /search?q=term
router.push(`/search?q=${encodeURIComponent(searchTerm)}`);
```

**Features:**
- Server-side rendering of initial results
- URL-based search state management
- Responsive layout with mobile filters

#### 2. **Search Components**
Located in `src/components/search/`:

- **`EnhancedSearchInput`**: Advanced search input with suggestions
- **`ActiveFiltersBar`**: Display and manage active filters
- **`SearchTabs`**: Legacy tab-based search (still available)

#### 3. **Search API** (`pages/api/search.ts`)
RESTful API endpoint for search functionality.

```typescript
// API Request
GET /api/search?query=AI&type=product,talent&minPrice=100&sort=rating

// Response
{
  "results": [...],
  "totalCount": 42,
  "page": 1,
  "limit": 20,
  "query": "AI",
  "hasMore": false
}
```

**Supported Parameters:**
- `query` or `q`: Search term
- `page`: Page number (default: 1)
- `limit`: Results per page (max: 100, default: 20)
- `type`: Comma-separated content types
- `category`: Category filter
- `minPrice`, `maxPrice`: Price range
- `minRating`: Minimum rating
- `sort`: Sort option (relevance, price_asc, price_desc, rating)

#### 4. **Search Utilities** (`src/utils/searchUtils.ts`)
Helper functions for search functionality:

```typescript
import { 
  highlightSearchTerms,
  sortSearchResults,
  filterSearchResults,
  calculateRelevanceScore 
} from '@/utils/searchUtils';

// Highlight search terms
const highlighted = highlightSearchTerms("AI Development", "AI");

// Sort results
const sorted = sortSearchResults(results, 'relevance', searchTerm);

// Filter results
const filtered = filterSearchResults(results, filters);
```

## Usage Examples

### Basic Search Integration

```tsx
import { useRouter } from 'next/router';
import { EnhancedSearchInput } from '@/components/search/EnhancedSearchInput';

function MyComponent() {
  const router = useRouter();
  const [query, setQuery] = useState('');

  const handleSearch = (term: string) => {
    router.push(`/search?q=${encodeURIComponent(term)}`);
  };

  return (
    <EnhancedSearchInput
      value={query}
      onChange={setQuery}
      onSelectSuggestion={(suggestion) => handleSearch(suggestion.text)}
      placeholder="Search anything..."
    />
  );
}
```

### Custom Search Implementation

```tsx
import { useState, useEffect } from 'react';
import { filterSearchResults, sortSearchResults } from '@/utils/searchUtils';

function CustomSearch() {
  const [results, setResults] = useState([]);
  const [filters, setFilters] = useState({
    types: [],
    category: '',
    minPrice: 0,
    maxPrice: 10000,
    minRating: 0,
    sort: 'relevance'
  });

  const fetchResults = async (searchTerm: string) => {
    const response = await fetch(`/api/search?query=${encodeURIComponent(searchTerm)}`);
    const data = await response.json();
    setResults(data.results);
  };

  // Apply client-side filtering and sorting
  const filteredResults = useMemo(() => {
    let filtered = filterSearchResults(results, filters);
    return sortSearchResults(filtered, filters.sort, searchTerm);
  }, [results, filters, searchTerm]);

  return (
    <div>
      {/* Your custom search UI */}
    </div>
  );
}
```

## Extending the Search System

### Adding New Content Types

1. **Update the search API** (`pages/api/search.ts`):
```typescript
// Add new type to SearchResult interface
interface SearchResult {
  // ... existing fields
  type: 'product' | 'talent' | 'blog' | 'service' | 'doc' | 'newtype';
}

// Add search logic for new content type
const newTypeResults = NEW_DATA.filter(item =>
  item.title?.toLowerCase().includes(searchTerm) ||
  item.description?.toLowerCase().includes(searchTerm)
).map(item => ({
  id: item.id,
  title: item.title,
  description: item.description,
  type: 'newtype' as const,
  // ... other fields
}));

allResults.push(...newTypeResults);
```

2. **Update filter components**:
```typescript
// Add to FilterSidebar typeOptions
const typeOptions = [
  // ... existing options
  { id: 'newtype', label: 'New Content Type' }
];
```

3. **Update search utilities**:
```typescript
// Update interfaces in searchUtils.ts to include new type
```

### Adding New Filter Types

1. **Extend SearchFilters interface**:
```typescript
interface SearchFilters {
  // ... existing filters
  newFilter: string;
}
```

2. **Add filter UI component**:
```tsx
// Add to FilterSidebar component
<div>
  <h3 className="font-semibold mb-3">New Filter</h3>
  <Select value={filters.newFilter} onValueChange={(value) => 
    onFiltersChange({ ...filters, newFilter: value })
  }>
    {/* Filter options */}
  </Select>
</div>
```

3. **Update filtering logic**:
```typescript
// Add to filterSearchResults function
if (filters.newFilter) {
  filteredResults = filteredResults.filter(result => 
    result.someProperty === filters.newFilter
  );
}
```

## Performance Optimization

### Caching Strategy
- **Server-side caching**: Search results cached for 5 minutes
- **Client-side caching**: Browser caches search suggestions
- **Database optimization**: Indexed search fields for fast queries

### Search Performance Tips
1. **Use debounced search**: Avoid API calls on every keystroke
2. **Implement pagination**: Load results in chunks
3. **Cache suggestions**: Store recent searches locally
4. **Optimize queries**: Use database indexes for search fields

```typescript
import { debounce } from '@/utils/searchUtils';

// Debounce search API calls
const debouncedSearch = debounce(performSearch, 300);
```

## Accessibility

The search system is built with accessibility in mind:

- **Keyboard Navigation**: Full keyboard support for all interactions
- **Screen Reader Support**: Proper ARIA labels and descriptions
- **High Contrast**: Search highlighting works with high contrast themes
- **Focus Management**: Logical tab order and focus indicators

### Accessibility Features
- `aria-label` attributes on interactive elements
- `role` attributes for complex components
- Semantic HTML structure
- Keyboard shortcuts for power users

## Analytics and Monitoring

### Built-in Metrics
The search system tracks several metrics:

```typescript
interface SearchMetrics {
  totalResults: number;
  searchTime: number;
  topCategories: Array<{ category: string; count: number }>;
  averagePrice: number;
  averageRating: number;
}
```

### Usage Analytics
- Search query frequency
- Filter usage patterns
- Result click-through rates
- Search abandonment rates

### Performance Monitoring
- API response times
- Search result relevance scores
- Cache hit rates
- Error rates

## Troubleshooting

### Common Issues

1. **No search results**
   - Check if search term is too specific
   - Verify filters aren't too restrictive
   - Ensure search data is properly indexed

2. **Slow search performance**
   - Check API response times in Network tab
   - Verify database indexes are in place
   - Consider implementing search result caching

3. **Search suggestions not working**
   - Verify search suggestions data is available
   - Check browser console for JavaScript errors
   - Ensure API endpoints are responding correctly

### Debug Tools

```typescript
// Enable search debugging
import { logInfo } from '@/utils/productionLogger';

// Log search metrics
logInfo('Search performed', {
  query: searchTerm,
  resultCount: results.length,
  filters: activeFilters,
  searchTime: Date.now() - startTime
});
```

## API Reference

### Search Endpoint

**GET** `/api/search`

**Parameters:**
| Parameter | Type | Description | Default |
|-----------|------|-------------|---------|
| `query` or `q` | string | Search term | - |
| `page` | number | Page number | 1 |
| `limit` | number | Results per page (max 100) | 20 |
| `type` | string | Comma-separated content types | all |
| `category` | string | Category filter | - |
| `minPrice` | number | Minimum price | 0 |
| `maxPrice` | number | Maximum price | ∞ |
| `minRating` | number | Minimum rating | 0 |
| `sort` | string | Sort order | relevance |

**Response:**
```json
{
  "results": [
    {
      "id": "string",
      "title": "string",
      "description": "string",
      "type": "product|talent|blog|service|doc",
      "category": "string",
      "url": "string",
      "image": "string",
      "price": "number",
      "currency": "string",
      "rating": "number",
      "tags": ["string"],
      "date": "string"
    }
  ],
  "totalCount": "number",
  "page": "number",
  "limit": "number",
  "query": "string",
  "hasMore": "boolean"
}
```

## Testing

### Unit Tests
```bash
# Run search component tests
npm test -- --testPathPattern=search

# Run search API tests
npm test -- pages/api/search.test.ts
```

### Integration Tests
```bash
# Run end-to-end search tests
npm run test:e2e -- --spec=search.spec.ts
```

### Manual Testing Checklist
- [ ] Search returns relevant results
- [ ] Filters work correctly
- [ ] Sorting options function properly
- [ ] Mobile responsiveness
- [ ] Accessibility compliance
- [ ] Performance under load

## Future Enhancements

### Planned Features
1. **Advanced Search Operators**: Support for quotes, AND/OR operators
2. **Search History**: Persistent search history across sessions
3. **Saved Searches**: Ability to save and reuse search queries
4. **Search Analytics Dashboard**: Admin interface for search insights
5. **Machine Learning**: AI-powered search result ranking
6. **Voice Search**: Speech-to-text search capability
7. **Image Search**: Visual search for products
8. **Federated Search**: Search across external data sources

### Technical Improvements
1. **Elasticsearch Integration**: More powerful search capabilities
2. **Search Indexing**: Dedicated search index for better performance
3. **Real-time Updates**: Live search results as content changes
4. **Internationalization**: Multi-language search support
5. **Faceted Search**: Advanced filtering with facet counts

## Support

For questions about the search system:

1. **Documentation**: Check this guide and inline code comments
2. **Code Examples**: See existing implementations in the codebase
3. **API Testing**: Use the built-in API endpoints for testing
4. **Issue Tracking**: Report bugs and feature requests in GitHub issues

---

*Last updated: December 2024*
*Version: 1.0.0* 