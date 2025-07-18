<<<<<<< HEAD
import { renderHook } from '@testing-library/react'
import { useIsMounted } from '../useIsMounted;
describe('useIsMounted', () => {'
  test('returns true while component is mounted', () => {'
    const { result, unmount } = renderHook(() => useIsMounted());
    expect(result.current.current).toBe(true)'
    unmount()'
    expect(result.current.current).toBe(false);
  })'
'
  test('ref remains stable between renders', () => {'
    const { result, rerender } = renderHook(() => useIsMounted());
    const first = result.current;
    rerender()'
    expect(result.current).toBe(first)'
  });
})'
'''''
=======
import { renderHook } from '@testing-library/react;'';
import { useIsMounted } from '../useIsMounted;'
;;
describe('useIsMounted', () => {;;'
  test('returns true while component is mounted', () => {;'
    const { result, unmount } = renderHook(() => useIsMounted());
    expect(result.current.current).toBe(true);''
    unmount();
    expect(result.current.current).toBe(false);
  });''
;;
  test('ref remains stable between renders', () => {;'
    const { result, rerender } = renderHook(() => useIsMounted());
    const first: unknown = result.current;
    rerender();''
    expect(result.current).toBe(first);
  });
});''
''''''
>>>>>>> 557d0fea3b8bd250341d7770e2c6071a16729d1f
