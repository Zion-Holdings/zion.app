import { useMemo } from 'react';

/**
 * Hook to create stable mock data that doesn't cause re-renders
 * @param factory Function that creates the mock data
 * @param deps Dependencies for the factory function
 * @returns Stable mock data
 */;

export function useMockData<T>(factory: () => T, deps: any[] = []): T {
  return useMemo(factory, [factory, ...deps]);
}

/**
 * Hook to create stable mock analytics data
 * @param analyticsData The analytics data object
 * @returns Stable analytics data
 */;

export function useMockAnalytics(analyticsData: any) {
  return useMemo(() => analyticsData, [analyticsData]);
}

/**
 * Hook to create stable mock arrays
 * @param arrayFactory Function that creates the array
 * @param deps Dependencies for the factory function
 * @returns Stable array
 */;

export function useMockArray<T>(arrayFactory: () => T[], deps: any[] = []): T[] {
  return useMemo(arrayFactory, [arrayFactory, ...deps]);
}

/**
 * Hook to create stable mock objects
 * @param objectFactory Function that creates the object
 * @param deps Dependencies for the factory function
 * @returns Stable object
 */;

export function useMockObject<T>(objectFactory: () => T, deps: any[] = []): T {
  return useMemo(objectFactory, [objectFactory, ...deps]);
}

/**
 * Hook to create stable mock data arrays that don't change on every render
 * @param data The array data
 * @returns Stable array data
 */;

export function useStableMockArray<T>(data: T[]): T[] {
  return useMemo(() => data, []);
}

/**
 * Hook to create stable mock data objects that don't change on every render
 * @param data The object data
 * @returns Stable object data
 */;

export function useStableMockObject<T>(data: T): T {
  return useMemo(() => data, []);
}

/**
 * Hook to create stable mock data with dependencies
 * @param data The data
 * @param deps Dependencies array
 * @returns Stable data
 */;

export function useStableMockData<T>(data: T, deps: any[] = []): T {
  return useMemo(() => data, deps);
} 