import { renderHook, act } from '@testing-library/react';
import { useUndoRedo } from '@/hooks/useUndoRedo';

describe('useUndoRedo', () => {
  it('tracks history and performs undo/redo', () => {
    const { result } = renderHook(() => useUndoRedo('a'));

    act(() => {
      result.current.set('b');
      result.current.set('c');
    });

    expect(result.current.value).toBe('c');
    expect(result.current.canUndo).toBe(true);
    expect(result.current.canRedo).toBe(false);

    act(() => {
      result.current.undo();
    });
    expect(result.current.value).toBe('b');

    act(() => {
      result.current.undo();
    });
    expect(result.current.value).toBe('a');
    expect(result.current.canUndo).toBe(false);

    act(() => {
      result.current.redo();
    });
    expect(result.current.value).toBe('b');
    expect(result.current.canRedo).toBe(true);
  });
});
