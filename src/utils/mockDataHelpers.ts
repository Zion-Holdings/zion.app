import { useMemo } from 'react';

/**
 * Hook to create stable mock data that doesn't cause re-renders
 * @param factory Function that creates the mock data
 * @param deps Dependencies for the factory function
 * @returns Stable mock data
 */
export function useMockData<T>(factory: () => T, deps: any[] = []): T {
  return useMemo(factory, deps);
}

/**
 * Hook to create stable mock analytics data
 * @param analyticsData The analytics data object
 * @returns Stable analytics data
 */
export function useMockAnalytics(analyticsData: any) {
  return useMemo(() => analyticsData, []);
}

/**
 * Hook to create stable mock arrays
 * @param arrayFactory Function that creates the array
 * @param deps Dependencies for the factory function
 * @returns Stable array
 */
export function useMockArray<T>(arrayFactory: () => T[], deps: any[] = []): T[] {
  return useMemo(arrayFactory, deps);
}

/**
 * Hook to create stable mock objects
 * @param objectFactory Function that creates the object
 * @param deps Dependencies for the factory function
 * @returns Stable object
 */
export function useMockObject<T>(objectFactory: () => T, deps: any[] = []): T {
  return useMemo(objectFactory, deps);
} 