import { useState, useEffect, useCallback, useRef } from 'react';

interface UseInfiniteScrollOptions {
  hasMore: boolean;
  loading: boolean;
  threshold?: number; // Distance from bottom to trigger load (in pixels)
  rootMargin?: string; // Root margin for intersection observer
  delayMs?: number; // Delay before loading more items
}

interface UseInfiniteScrollReturn {
  isFetching: boolean;
  lastElementRef: (node: HTMLElement | null) => void;
  resetScroll: () => void;
  scrollToTop: () => void;
}

export function useInfiniteScroll(
  loadMore: () => Promise<void> | void,
  options: UseInfiniteScrollOptions
): UseInfiniteScrollReturn {
  const {
    hasMore,
    loading,
    threshold = 100,
    rootMargin = '0px',
    delayMs = 200
  } = options;

  const [isFetching, setIsFetching] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const lastElementRef = useCallback((node: HTMLElement | null) => {
    if (loading || !hasMore) return;
    
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting && hasMore && !loading && !isFetching) {
          setIsFetching(true);
          
          // Add delay to prevent rapid successive calls
          timeoutRef.current = setTimeout(async () => {
            try {
              await loadMore();
            } catch (error) {
              console.error('Error loading more items:', error);
            } finally {
              setIsFetching(false);
            }
          }, delayMs);
        }
      },
      {
        root: null,
        rootMargin,
        threshold: 0.1
      }
    );
    
    if (node) observer.current.observe(node);
  }, [loading, hasMore, loadMore, isFetching, delayMs, rootMargin]);

  const resetScroll = useCallback(() => {
    setIsFetching(false);
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }, []);

  // Cleanup observer on unmount
  useEffect(() => {
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return {
    isFetching,
    lastElementRef,
    resetScroll,
    scrollToTop
  };
}

// Alternative hook for pagination-based infinite scroll
export function useInfiniteScrollPagination<T>(
  fetchFunction: (page: number, limit: number) => Promise<{ items: T[]; hasMore: boolean; total?: number }>,
  initialLimit: number = 20
) {
  const [items, setItems] = useState<T[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [total, setTotal] = useState<number | undefined>();

  const loadMore = useCallback(async () => {
    if (loading || !hasMore) return;

    setLoading(true);
    setError(null);

    try {
      const result = await fetchFunction(page, initialLimit);
      
      setItems(prevItems => [...prevItems, ...result.items]);
      setHasMore(result.hasMore);
      setPage(prevPage => prevPage + 1);
      
      if (result.total !== undefined) {
        setTotal(result.total);
      }
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load more items');
    } finally {
      setLoading(false);
    }
  }, [fetchFunction, page, initialLimit, loading, hasMore]);

  const reset = useCallback(() => {
    setItems([]);
    setPage(1);
    setHasMore(true);
    setLoading(false);
    setError(null);
    setTotal(undefined);
  }, []);

  const refresh = useCallback(async () => {
    reset();
    await loadMore();
  }, [reset, loadMore]);

  // Load initial page
  useEffect(() => {
    if (items.length === 0 && !loading) {
      loadMore();
    }
  }, []);

  const infiniteScrollProps = useInfiniteScroll(loadMore, {
    hasMore,
    loading,
    threshold: 200,
    delayMs: 300
  });

  return {
    items,
    loading,
    error,
    hasMore,
    total,
    loadMore,
    reset,
    refresh,
    ...infiniteScrollProps
  };
} 