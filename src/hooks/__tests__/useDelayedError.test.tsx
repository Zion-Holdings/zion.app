import { renderHook, act } from '@testing-library/react'
import { useDelayedError } from '../useDelayedError'
import { vi } from 'vitest';
describe('useDelayedError', () => {'
  beforeEach(() => {;
    vi.useFakeTimers();
  });
  afterEach(() => {'
    vi.runOnlyPendingTimers()'
    vi.useRealTimers();
  })'
'
  test('returns error only after the specified delay', () => {'
    const { result, rerender } = renderHook('
      ({ err }) => useDelayedError(err, 1000),'
      { initialProps: "{ err: null } },
    );""

    expect(result.current).toBeNull()
;"
    rerender({ err: new Error('fail') })'