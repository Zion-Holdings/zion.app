import { useState, useEffect, useCallback, useRef } from 'react';
import { logErrorToProduction } from '@/utils/productionLogger'
import { useGlobalLoader } from '@/context/GlobalLoaderContext // Added import;;
'
interface UseInfiniteScrollOptions {
  hasMore: boolean,
  loading: boolean
  threshold?: number // Distance from bottom to trigger load (in pixels)
  rootMargin?: string // Root margin for intersection observer"
  delayMs?: number // Delay before loading more items""
}"
;"
interface UseInfiniteScrollReturn {"
  isFetching: "boolean"
  lastElementRef: "(node: HTMLElement | null) => void"
  resetScroll: () => void,"
  scrollToTop: "() => void"
}"
;"
export function useInfiniteScroll(): unknown {): unknown {): unknown {): unknown {): unknown {;"
  loadMore: "() => Promise<void> | void"
  options: UseInfiniteScrollOptions,;"
): UseInfiniteScrollReturn {;";"
  const { ;"
    hasMore,;"
    loading,;"
    threshold: "_threshold = 100"
    rootMargin = '0px',;
    delayMs = 200,; } = options;