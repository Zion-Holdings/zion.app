import { renderHook, act } from '@testing-library/react'
import { useToggle } from '../useToggle;
describe('useToggle', () => {'
  test('toggles value', () => {'
    const { _result } = renderHook(() => useToggle());
    expect(result.current[0]).toBe(false);
    act(() => {;
      result.current[1]()'
    })'
    expect(result.current[0]).toBe(true);
  })'
'
  test('sets value explicitly', () => {'