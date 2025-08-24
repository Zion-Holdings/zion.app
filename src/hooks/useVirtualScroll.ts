import { useState, useEffect, useRef, useCallback, useMemo } from 'react';

interface VirtualScrollOptions {
  itemHeight: number;
  overscan?: number;
  containerHeight?: number;
  enableSmoothScrolling?: boolean;
  enableInfiniteScroll?: boolean;
  threshold?: number;
}

interface VirtualScrollState<T> {
  startIndex: number;
  endIndex: number;
  visibleItems: T[];
  scrollTop: number;
  containerHeight: number;
  totalHeight: number;
  isScrolling: boolean;
}

interface VirtualScrollReturn<T> {
  virtualItems: T[];
  containerProps: {
    ref: React.RefObject<HTMLDivElement>;
    style: React.CSSProperties;
    onScroll: (event: React.UIEvent<HTMLDivElement>) => void;
  };
  listProps: {
    style: React.CSSProperties;
  };
  scrollToIndex: (index: number, align?: 'start' | 'center' | 'end') => void;
  scrollToTop: () => void;
  scrollToBottom: () => void;
  getScrollTop: () => number;
  getVisibleRange: () => { start: number; end: number };
  isItemVisible: (index: number) => boolean;
  state: VirtualScrollState<T>;
}

export const useVirtualScroll = <T>(
  items: T[],
  options: VirtualScrollOptions
): VirtualScrollReturn<T> => {
  const {
    itemHeight,
    overscan = 5,
    containerHeight = 400,
    enableSmoothScrolling = true,
    enableInfiniteScroll = false,
    threshold = 100
  } = options;

  const containerRef = useRef<HTMLDivElement>(null);
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const rafRef = useRef<number | null>(null);

  const [state, setState] = useState<VirtualScrollState<T>>({
    startIndex: 0,
    endIndex: 0,
    visibleItems: [],
    scrollTop: 0,
    containerHeight,
    totalHeight: items.length * itemHeight,
    isScrolling: false
  });

  // Calculate virtual scroll parameters
  const virtualScrollParams = useMemo(() => {
    const visibleCount = Math.ceil(containerHeight / itemHeight);
    const startIndex = Math.max(0, Math.floor(state.scrollTop / itemHeight) - overscan);
    const endIndex = Math.min(
      items.length - 1,
      Math.floor(state.scrollTop / containerHeight) + visibleCount + overscan
    );

    return {
      startIndex,
      endIndex,
      visibleCount,
      offsetY: startIndex * itemHeight
    };
  }, [state.scrollTop, containerHeight, itemHeight, overscan, items.length]);

  // Update virtual items when parameters change
  useEffect(() => {
    const { startIndex, endIndex } = virtualScrollParams;
    
    setState(prev => ({
      ...prev,
      startIndex,
      endIndex,
      visibleItems: items.slice(startIndex, endIndex + 1),
      totalHeight: items.length * itemHeight
    }));
  }, [virtualScrollParams, items, itemHeight]);

  // Handle scroll events
  const handleScroll = useCallback((event: React.UIEvent<HTMLDivElement>) => {
    const target = event.target as HTMLDivElement;
    const scrollTop = target.scrollTop;

    // Cancel previous RAF
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
    }

    // Use RAF for smooth scrolling
    rafRef.current = requestAnimationFrame(() => {
      setState(prev => ({
        ...prev,
        scrollTop,
        isScrolling: true
      }));

      // Clear scrolling state after delay
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      scrollTimeoutRef.current = setTimeout(() => {
        setState(prev => ({ ...prev, isScrolling: false }));
      }, 150);
    });
  }, []);

  // Scroll to specific index
  const scrollToIndex = useCallback((
    index: number, 
    align: 'start' | 'center' | 'end' = 'start'
  ) => {
    if (!containerRef.current || index < 0 || index >= items.length) return;

    let scrollTop: number;

    switch (align) {
      case 'start':
        scrollTop = index * itemHeight;
        break;
      case 'center':
        scrollTop = (index * itemHeight) - (containerHeight / 2) + (itemHeight / 2);
        break;
      case 'end':
        scrollTop = (index * itemHeight) - containerHeight + itemHeight;
        break;
      default:
        scrollTop = index * itemHeight;
    }

    scrollTop = Math.max(0, Math.min(scrollTop, state.totalHeight - containerHeight));

    if (enableSmoothScrolling) {
      containerRef.current.scrollTo({
        top: scrollTop,
        behavior: 'smooth'
      });
    } else {
      containerRef.current.scrollTop = scrollTop;
    }

    setState(prev => ({ ...prev, scrollTop }));
  }, [itemHeight, containerHeight, items.length, state.totalHeight, enableSmoothScrolling]);

  // Scroll to top
  const scrollToTop = useCallback(() => {
    scrollToIndex(0, 'start');
  }, [scrollToIndex]);

  // Scroll to bottom
  const scrollToBottom = useCallback(() => {
    scrollToIndex(items.length - 1, 'end');
  }, [scrollToIndex, items.length]);

  // Get current scroll position
  const getScrollTop = useCallback(() => {
    return containerRef.current?.scrollTop || 0;
  }, []);

  // Get visible range
  const getVisibleRange = useCallback(() => {
    return {
      start: state.startIndex,
      end: state.endIndex
    };
  }, [state.startIndex, state.endIndex]);

  // Check if item is visible
  const isItemVisible = useCallback((index: number) => {
    return index >= state.startIndex && index <= state.endIndex;
  }, [state.startIndex, state.endIndex]);

  // Infinite scroll detection
  useEffect(() => {
    if (!enableInfiniteScroll || !containerRef.current) return;

    const handleScrollEnd = () => {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current!;
      
      if (scrollHeight - scrollTop - clientHeight < threshold) {
        // Trigger infinite scroll event
        const event = new CustomEvent('virtualScrollEnd', {
          detail: { scrollTop, scrollHeight, clientHeight }
        });
        window.dispatchEvent(event);
      }
    };

    const container = containerRef.current;
    container.addEventListener('scroll', handleScrollEnd);
    
    return () => {
      container.removeEventListener('scroll', handleScrollEnd);
    };
  }, [enableInfiniteScroll, threshold]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, []);

  // Container props
  const containerProps = {
    ref: containerRef,
    style: {
      height: containerHeight,
      overflow: 'auto',
      position: 'relative' as const,
      willChange: state.isScrolling ? 'scroll-position' : 'auto'
    },
    onScroll: handleScroll
  };

  // List props
  const listProps = {
    style: {
      height: state.totalHeight,
      position: 'relative' as const,
      transform: `translateY(${virtualScrollParams.offsetY}px)`
    }
  };

  return {
    virtualItems: state.visibleItems,
    containerProps,
    listProps,
    scrollToIndex,
    scrollToTop,
    scrollToBottom,
    getScrollTop,
    getVisibleRange,
    isItemVisible,
    state
  };
};

// Enhanced virtual scroll with search and filtering
export const useVirtualScrollWithSearch = <T>(
  items: T[],
  searchQuery: string,
  searchFields: (keyof T)[],
  options: VirtualScrollOptions
) => {
  const [filteredItems, setFilteredItems] = useState<T[]>(items);
  const [searchResults, setSearchResults] = useState<{
    indices: number[];
    highlights: Map<number, string[]>;
  }>({ indices: [], highlights: new Map() });

  // Filter items based on search query
  useEffect(() => {
    if (!searchQuery.trim()) {
      setFilteredItems(items);
      setSearchResults({ indices: [], highlights: new Map() });
      return;
    }

    const query = searchQuery.toLowerCase();
    const results: T[] = [];
    const indices: number[] = [];
    const highlights = new Map<number, string[]>();

    items.forEach((item, index) => {
      let isMatch = false;
      const itemHighlights: string[] = [];

      searchFields.forEach(field => {
        const value = String(item[field]).toLowerCase();
        if (value.includes(query)) {
          isMatch = true;
          // Find highlight positions
          const highlightPositions = [];
          let pos = value.indexOf(query);
          while (pos !== -1) {
            highlightPositions.push(pos);
            pos = value.indexOf(query, pos + 1);
          }
          itemHighlights.push(...highlightPositions.map(p => `${String(field)}:${p}`));
        }
      });

      if (isMatch) {
        results.push(item);
        indices.push(index);
        highlights.set(index, itemHighlights);
      }
    });

    setFilteredItems(results);
    setSearchResults({ indices, highlights });
  }, [items, searchQuery, searchFields]);

  // Use virtual scroll with filtered items
  const virtualScroll = useVirtualScroll(filteredItems, options);

  return {
    ...virtualScroll,
    filteredItems,
    searchResults,
    originalItems: items
  };
};

// Virtual scroll with dynamic item heights
export const useDynamicVirtualScroll = <T>(
  items: T[],
  getItemHeight: (item: T, index: number) => number,
  options: Omit<VirtualScrollOptions, 'itemHeight'>
) => {
  const [itemHeights, setItemHeights] = useState<Map<number, number>>(new Map());
  const [totalHeight, setTotalHeight] = useState(0);

  // Calculate item heights
  useEffect(() => {
    const heights = new Map<number, number>();
    let total = 0;

    items.forEach((item, index) => {
      const height = getItemHeight(item, index);
      heights.set(index, height);
      total += height;
    });

    setItemHeights(heights);
    setTotalHeight(total);
  }, [items, getItemHeight]);

  // Get cumulative height up to index
  const getCumulativeHeight = useCallback((index: number) => {
    let cumulative = 0;
    for (let i = 0; i < index; i++) {
      cumulative += itemHeights.get(i) || 0;
    }
    return cumulative;
  }, [itemHeights]);

  // Find index from scroll position
  const findIndexFromScrollTop = useCallback((scrollTop: number) => {
    let cumulative = 0;
    for (let i = 0; i < items.length; i++) {
      const height = itemHeights.get(i) || 0;
      if (cumulative + height > scrollTop) {
        return i;
      }
      cumulative += height;
    }
    return items.length - 1;
  }, [items.length, itemHeights]);

  // Enhanced virtual scroll state
  const [state, setState] = useState({
    startIndex: 0,
    endIndex: 0,
    visibleItems: [] as T[],
    scrollTop: 0,
    containerHeight: options.containerHeight || 400,
    totalHeight: 0,
    isScrolling: false
  });

  // Update virtual items based on scroll position
  useEffect(() => {
    const startIndex = Math.max(0, findIndexFromScrollTop(state.scrollTop) - (options.overscan || 5));
    const endIndex = Math.min(
      items.length - 1,
      findIndexFromScrollTop(state.scrollTop + state.containerHeight) + (options.overscan || 5)
    );

    setState(prev => ({
      ...prev,
      startIndex,
      endIndex,
      visibleItems: items.slice(startIndex, endIndex + 1),
      totalHeight
    }));
  }, [state.scrollTop, state.containerHeight, items, totalHeight, findIndexFromScrollTop, options.overscan]);

  return {
    virtualItems: state.visibleItems,
    itemHeights,
    totalHeight,
    getCumulativeHeight,
    findIndexFromScrollTop,
    state
  };
};