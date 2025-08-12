import { renderHook, act } from '@testing-library/react';
import { useDelayedError } from '../useDelayedError';

describe('useDelayedError', () => {
  beforeEach(() => {
    jest.useFakeTimers();
  });

  afterEach(() => {
    jest.runOnlyPendingTimers();
    jest.useRealTimers();
  });

  test('returns error only after the specified delay', () => {
    const { result, rerender } = renderHook(
      ({ err }) => useDelayedError(err, 1000),
      { initialProps: { err: null } }
    );

    expect(result.current).toBeNull();

    rerender({ err: new Error('fail') });

    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(result.current).toBeNull();

    act(() => {
      jest.advanceTimersByTime(500);
    });
    expect(result.current).toEqual(expect.any(Error));
    expect(result.current?.message).toBe('fail');
  });

  test('resets timer if error changes before delay elapses', () => {
    const { result, rerender } = renderHook(
      ({ err }) => useDelayedError(err, 1000),
      { initialProps: { err: new Error('first') } }
    );

    act(() => {
      jest.advanceTimersByTime(500);
    });

    rerender({ err: new Error('second') });

    act(() => {
      jest.advanceTimersByTime(999);
    });
    expect(result.current).toBeNull();

    act(() => {
      jest.advanceTimersByTime(1);
    });
    expect(result.current?.message).toBe('second');
  });
});
