import { useState, useEffect, useCallback, useRef } from 'react';
import {logErrorToProduction} from '@/utils/productionLogger';
import { useGlobalLoader } from '@/context/GlobalLoaderContext'; // Added import

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
        timeoutRef.current = null;
      }
    };
  }, []);

  const lastElementRef = useCallback((node: HTMLElement | null) => {
    if (loading || !hasMore) return;
    
    if (observer.current) observer.current.disconnect();
    
    observer.current = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry && entry.isIntersecting && hasMore && !loading && !isFetching) {
          setIsFetching(true);
          
          // Clear any existing timeout
          if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
          }
          
          // Add delay to prevent rapid successive calls
          timeoutRef.current = setTimeout(async () => {
            try {
              await loadMore();
            } catch (error) {
              logErrorToProduction('Error loading more items:', { data: error });
            } finally {
              setIsFetching(false);
              timeoutRef.current = null;
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
  const [isInitialized, setIsInitialized] = useState(false);
  const isResetting = useRef(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { showLoader, hideLoader } = useGlobalLoader(); // Get loader controls

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
    };
  }, []);

  const loadMore = useCallback(async () => {
    if (loading || !hasMore || isResetting.current) return;

    setLoading(true);
    setError(null);

    try {
      const result = await fetchFunction(page, initialLimit);
      
      if (page === 1) {
        // First page - replace items
        setItems(result.items);
      } else {
        // Subsequent pages - append items
        setItems((prevItems: T[]) => [...prevItems, ...result.items]);
      }
      
      setHasMore(result.hasMore);
      setPage((prevPage: number) => prevPage + 1);
      
      if (result.total !== undefined) {
        setTotal(result.total);
      }
    } catch (err) {
      logErrorToProduction('Error loading items:', { data: err });
      setError(err instanceof Error ? err.message : 'Failed to load more items');
    } finally {
      setLoading(false);
    }
  }, [fetchFunction, page, initialLimit, loading, hasMore]);

  const reset = useCallback(() => {
    isResetting.current = true;
    setItems([]);
    setPage(1);
    setHasMore(true);
    setLoading(false);
    setError(null);
    setTotal(undefined);
    setIsInitialized(false);
    
    // Clear any pending timeouts
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    
    // Small delay to prevent race conditions
    timeoutRef.current = setTimeout(() => {
      isResetting.current = false;
      timeoutRef.current = null;
    }, 100);
  }, []);

  const refresh = useCallback(async () => {
    reset();
    // Wait for reset to complete
    await new Promise(resolve => setTimeout(resolve, 150));
    try {
      showLoader(); // Show global loader for initial fetch
      setLoading(true);
      const result = await fetchFunction(1, initialLimit);
      setItems(result.items);
      setHasMore(result.hasMore);
      setPage(2); // Next page will be 2
      if (result.total !== undefined) {
        setTotal(result.total);
      }
      setIsInitialized(true);
    } catch (err) {
      logErrorToProduction('Error refreshing items:', { data: err });
      setError(err instanceof Error ? err.message : 'Failed to refresh items');
    } finally {
      setLoading(false);
      hideLoader(); // Hide global loader after initial fetch attempt
    }
  }, [fetchFunction, initialLimit, reset, showLoader, hideLoader]); // Added showLoader and hideLoader to dependencies

  // Load initial page only once
  useEffect(() => {
    if (!isInitialized && !loading && !isResetting.current) {
      refresh();
    }
  }, [isInitialized, loading, refresh]);

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