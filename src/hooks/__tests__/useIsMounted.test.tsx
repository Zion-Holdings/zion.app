import { renderHook } from '@testing-library/react';
import { useIsMounted } from '../useIsMounted';

describe('useIsMounted', () => {
  test('returns true while component is mounted', () => {
    const { result, unmount } = renderHook(() => useIsMounted());
    expect(result.current.current).toBe(true);
    unmount();
    expect(result.current.current).toBe(false);
  });

  test('ref remains stable between renders', () => {
    const { result, rerender } = renderHook(() => useIsMounted());
    const first = result.current;
    rerender();
    expect(result.current).toBe(first);
  });
});
