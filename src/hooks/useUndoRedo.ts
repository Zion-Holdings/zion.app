import { useState, useCallback } from 'react';

interface UndoRedoState<T> {
  past: T[];
  present: T;
  future: T[];
}

export function useUndoRedo<T>(initial: T) {
  const [state, setState] = useState<UndoRedoState<T>>({
    past: [],
    present: initial,
    future: [],
  });

  const set = useCallback((value: T) => {
    setState((prev) => ({
      past: [...prev.past, prev.present],
      present: value,
      future: [],
    }));
  }, []);

  const undo = useCallback(() => {
    setState((prev): UndoRedoState<T> => {
      if (prev.past.length === 0) return prev;
      const previous = prev.past[prev.past.length - 1]!; // Non-null assertion since we checked length
      const newPast = prev.past.slice(0, prev.past.length - 1);
      return {
        past: newPast,
        present: previous,
        future: [prev.present, ...prev.future],
      };
    });
  }, []);

  const redo = useCallback(() => {
    setState((prev) => {
      if (prev.future.length === 0) return prev;
      const next = prev.future[0]!; // Non-null assertion since we checked length
      const newFuture = prev.future.slice(1);
      return {
        past: [...prev.past, prev.present],
        present: next,
        future: newFuture,
      };
    });
  }, []);

  const canUndo = state.past.length > 0;
  const canRedo = state.future.length > 0;

  return {
    value: state.present,
    set,
    undo,
    redo,
    canUndo,
    canRedo,
  };
}
