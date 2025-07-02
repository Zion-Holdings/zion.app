import React from 'react';
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { EnhancedSearchInput } from './EnhancedSearchInput';
import { AutocompleteSuggestions } from './AutocompleteSuggestions';
import { SearchSuggestion } from '@/types/search';
import { vi } from 'vitest';

// Mock AutocompleteSuggestions to check its props and avoid its internal rendering logic
vi.mock('./AutocompleteSuggestions', () => ({
  __esModule: true,
  AutocompleteSuggestions: vi.fn(() => null),
}));

// Mock lodash.debounce
// We want to use fake timers to control the execution of the debounced function.
// The mock will allow us to spy on the cancel method.
const actualLodashDebounce = vi.requireActual('lodash.debounce');
let lastDebouncedFn: { cancel: () => void } | null = null;

vi.mock('lodash.debounce', () => (fn: (...args: any[]) => any, delay: number) => {
  // Use actual debounce logic which works with Jest's fake timers
  const debouncedFn = actualLodashDebounce(fn, delay);
  const mockCancel = vi.fn(debouncedFn.cancel);
  (debouncedFn as any).cancel = mockCancel;
  lastDebouncedFn = { cancel: mockCancel }; // Store the cancel for cleanup assertion
  return debouncedFn;
});


const mockSearchSuggestions: SearchSuggestion[] = [
  { text: 'Apple iPhone', type: 'product' },
  { text: 'Apple MacBook', type: 'product' },
  { text: 'Banana Phone', type: 'category' },
  { text: 'Recent Search 1', type: 'recent' },
];

const mockOnChange = vi.fn();
const mockOnSelectSuggestion = vi.fn();

describe('EnhancedSearchInput', () => {
  beforeEach(() => {
    vi.useFakeTimers();
    mockOnChange.mockClear();
    mockOnSelectSuggestion.mockClear();
    (AutocompleteSuggestions as unknown as vi.Mock).mockClear();
    if (lastDebouncedFn) {
      (lastDebouncedFn.cancel as unknown as vi.Mock).mockClear();
    }
    // Reset any module-level state in mocks if necessary
  });

  afterEach(() => {
    vi.runOnlyPendingTimers(); // Clear any remaining timers
    vi.useRealTimers();
  });

  const renderComponent = (initialValue = "") => {
    render(
      <EnhancedSearchInput
        value={initialValue}
        onChange={mockOnChange}
        onSelectSuggestion={mockOnSelectSuggestion}
        searchSuggestions={mockSearchSuggestions}
        placeholder="Search..."
      />
    );
  };

  test('renders input field', () => {
    renderComponent();
    expect(screen.getByPlaceholderText('Search...')).toBeInTheDocument();
  });

  test('calls onChange when text is entered', async () => {
    renderComponent();
    const input = screen.getByPlaceholderText('Search...');
    await userEvent.type(input, 'test');
    expect(mockOnChange).toHaveBeenCalledWith('t');
    expect(mockOnChange).toHaveBeenCalledWith('te');
    expect(mockOnChange).toHaveBeenCalledWith('tes');
    expect(mockOnChange).toHaveBeenCalledWith('test');
  });

  describe('Debouncing', () => {
    test('filters suggestions only after debounce timeout', async () => {
      renderComponent();
      const input = screen.getByPlaceholderText('Search...');

      // Initial state: recent suggestions
      act(() => {vi.advanceTimersByTime(300);}); // Advance for initial debounce if any
      expect(AutocompleteSuggestions).toHaveBeenLastCalledWith(
        expect.objectContaining({
          suggestions: expect.arrayContaining([
            expect.objectContaining({ text: 'Recent Search 1', type: 'recent' })
          ]),
          visible: false, // Assuming not focused initially
        }),
        {}
      );

      await userEvent.click(input); // Focus the input
      await userEvent.type(input, 'App', { delay: 1 }); // Simulate typing with a small delay

      // onChange is called for each character
      expect(mockOnChange).toHaveBeenCalledWith('A');
      expect(mockOnChange).toHaveBeenCalledWith('Ap');
      expect(mockOnChange).toHaveBeenCalledWith('App');

      // AutocompleteSuggestions should not have updated filtered suggestions immediately
      // It might show recent or no suggestions if value is present but debounce not fired
      // Let's check the last call before advancing timers
      const callsBeforeTimer = (AutocompleteSuggestions as unknown as vi.Mock).mock.calls.length;

      act(() => {
        vi.advanceTimersByTime(299); // Just before debounce timeout
      });
      // Check that no new filtering has happened based on 'App'
      // The number of calls to AutocompleteSuggestions might increase due to focus/value change,
      // but the suggestions list for "App" should not be there yet.
      // This part is tricky as setFilteredSuggestions is internal.
      // The key is that the *debounced function* that calls setFilteredSuggestions has not fired its core logic.

      // We expect the suggestions prop to NOT contain "Apple" items yet
      // It will show recents because value is "" initially, then "App"
      // When "App" is typed, the useEffect [value, searchSuggestions] runs, calls debouncedFilterSuggestions
      // This debounced function, when it *actually* runs, will filter.
      // So, before it runs, suggestions should still be the "recent" ones or empty if value is non-empty.

      // Let's check the props of the last call to AutocompleteSuggestions
      // Before timer fully advances, suggestions for "App" should not be there.
      // Depending on exact timing and state updates, it might show recents or an empty array.
      // For simplicity, let's check that "Apple" is not there.
      const lastCallArgsBeforeAdvance = (AutocompleteSuggestions as unknown as vi.Mock).mock.lastCall[0];
      expect(lastCallArgsBeforeAdvance.suggestions.some((s: SearchSuggestion) => s.text.startsWith('Apple'))).toBe(false);


      act(() => {
        vi.advanceTimersByTime(1); // Total 300ms
      });

      // Now AutocompleteSuggestions should have received the filtered suggestions
      await waitFor(() => {
        expect(AutocompleteSuggestions).toHaveBeenLastCalledWith(
          expect.objectContaining({
            suggestions: expect.arrayContaining([
              expect.objectContaining({ text: 'Apple iPhone' }),
              expect.objectContaining({ text: 'Apple MacBook' }),
            ]),
            visible: true, // Assuming it's focused
          }),
          {}
        );
      });
      expect((AutocompleteSuggestions as unknown as vi.Mock).mock.lastCall[0].suggestions).toHaveLength(2);
    });

    test('cancels debounce on unmount', () => {
      const { unmount } = render(
        <EnhancedSearchInput value="" onChange={vi.fn()} searchSuggestions={[]} />
      );
      unmount();
      expect(lastDebouncedFn?.cancel).toHaveBeenCalledTimes(1);
    });
  });

  describe('Keyboard Navigation', () => {
    test('ArrowDown cycles through suggestions', async () => {
      renderComponent("Apple"); // Initial value to get some suggestions
      act(() => { vi.advanceTimersByTime(300); }); // Fire debounce

      const input = screen.getByPlaceholderText('Search...');
      await userEvent.click(input); // Focus

      // Assuming 'Apple iPhone' (index 0) and 'Apple MacBook' (index 1) are shown
      await waitFor(() => expect((AutocompleteSuggestions as unknown as vi.Mock).mock.lastCall[0].suggestions.length).toBeGreaterThan(0));

      await userEvent.keyboard('{ArrowDown}');
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-activedescendant', 'suggestion-item-0');

      await userEvent.keyboard('{ArrowDown}');
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-activedescendant', 'suggestion-item-1');

      await userEvent.keyboard('{ArrowDown}'); // Wraps around
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-activedescendant', 'suggestion-item-0');
    });

    test('ArrowUp cycles through suggestions', async () => {
      renderComponent("Apple");
      act(() => { vi.advanceTimersByTime(300); });
      const input = screen.getByPlaceholderText('Search...');
      await userEvent.click(input);
      await waitFor(() => expect((AutocompleteSuggestions as unknown as vi.Mock).mock.lastCall[0].suggestions.length).toBeGreaterThan(0));

      await userEvent.keyboard('{ArrowUp}');
      // Wraps around to the last item: 'Apple MacBook' (index 1 of 2)
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-activedescendant', 'suggestion-item-1');

      await userEvent.keyboard('{ArrowUp}');
      expect(screen.getByRole('textbox')).toHaveAttribute('aria-activedescendant', 'suggestion-item-0');
    });

    test('Enter selects highlighted suggestion', async () => {
      renderComponent("Apple");
      act(() => { vi.advanceTimersByTime(300); });
      const input = screen.getByPlaceholderText('Search...');
      await userEvent.click(input);
      await waitFor(() => expect((AutocompleteSuggestions as unknown as vi.Mock).mock.lastCall[0].suggestions.length).toBeGreaterThan(0));

      await userEvent.keyboard('{ArrowDown}'); // Highlight 'Apple iPhone'
      await userEvent.keyboard('{Enter}');

      expect(mockOnSelectSuggestion).toHaveBeenCalledWith('Apple iPhone');
      // Input value should also be updated via onChange
      expect(mockOnChange).toHaveBeenCalledWith('Apple iPhone');
      // Suggestions should hide
      await waitFor(() => expect((AutocompleteSuggestions as unknown as vi.Mock).mock.lastCall[0].visible).toBe(false));
    });

    test('Enter does nothing if no suggestion highlighted and allows form submission', async () => {
      renderComponent("NonExistent");
      act(() => { vi.advanceTimersByTime(300); }); // Ensure filtering (empty) happened
      const input = screen.getByPlaceholderText('Search...');
      await userEvent.click(input); // Focus

      // Make sure no suggestions are available or highlightedIndex is -1
      await waitFor(() => {
        const lastCallArgs = (AutocompleteSuggestions as unknown as vi.Mock).mock.lastCall[0];
        expect(lastCallArgs.suggestions.length).toBe(0); // Or highlightedIndex is -1
        expect(lastCallArgs.highlightedIndex).toBe(-1);
      });

      await userEvent.keyboard('{Enter}');
      expect(mockOnSelectSuggestion).not.toHaveBeenCalled();
      // Form submission is implicit, we just check our handler wasn't called.
    });

    test('Escape hides suggestions and blurs input', async () => {
        renderComponent("Apple");
        act(() => { vi.advanceTimersByTime(300); });
        const input = screen.getByPlaceholderText('Search...') as HTMLInputElement;
        await userEvent.click(input); // Focus
        await waitFor(() => expect((AutocompleteSuggestions as unknown as vi.Mock).mock.lastCall[0].visible).toBe(true));

        await userEvent.keyboard('{Escape}');

        await waitFor(() => expect((AutocompleteSuggestions as unknown as vi.Mock).mock.lastCall[0].visible).toBe(false));
        expect(document.activeElement).not.toBe(input); // Check if blurred
    });
  });

  test('Clear button clears input', async () => {
    renderComponent("TestValue");
    // The clear button only appears if there's a value
    const clearButton = screen.getByLabelText('Clear search');
    expect(clearButton).toBeInTheDocument();

    await userEvent.click(clearButton);
    expect(mockOnChange).toHaveBeenCalledWith('');
  });

  test('Suggestions hide on blur (simulated by click outside)', async () => {
    renderComponent("Apple");
    act(() => { vi.advanceTimersByTime(300); });
    const input = screen.getByPlaceholderText('Search...');
    await userEvent.click(input); // Focus to show suggestions
    await waitFor(() => expect((AutocompleteSuggestions as unknown as vi.Mock).mock.lastCall[0].visible).toBe(true));

    // Simulate click outside
    await userEvent.click(document.body);
    await waitFor(() => expect((AutocompleteSuggestions as unknown as vi.Mock).mock.lastCall[0].visible).toBe(false));
  });

  test('shows recent suggestions when input is empty and focused', async () => {
    renderComponent();
    const input = screen.getByPlaceholderText('Search...');
    await userEvent.click(input); // Focus

    act(() => { vi.advanceTimersByTime(300); }); // Allow debounce to fire

    await waitFor(() => {
      expect(AutocompleteSuggestions).toHaveBeenLastCalledWith(
        expect.objectContaining({
          suggestions: expect.arrayContaining([
            expect.objectContaining({ text: 'Recent Search 1', type: 'recent' })
          ]),
          visible: true,
        }),
        {}
      );
    });
  });
});
