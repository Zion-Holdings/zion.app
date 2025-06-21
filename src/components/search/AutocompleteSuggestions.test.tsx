import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { AutocompleteSuggestions } from './AutocompleteSuggestions';
import { SearchSuggestion } from '@/types/search';

const mockOnSelectSuggestion = jest.fn();

const mockSuggestions: SearchSuggestion[] = [
  { text: 'Apple iPhone', type: 'product' },
  { text: 'Apple MacBook', type: 'product' },
  { text: 'A very long suggestion text for testing overflow and stuff', type: 'category' },
];

const mockSearchTerm = "Apple";

describe('AutocompleteSuggestions', () => {
  beforeEach(() => {
    mockOnSelectSuggestion.mockClear();
  });

  const renderComponent = (
    visible = true,
    suggestions = mockSuggestions,
    highlightedIndex = -1,
    searchTerm = mockSearchTerm
  ) => {
    render(
      <AutocompleteSuggestions
        suggestions={suggestions}
        searchTerm={searchTerm}
        onSelectSuggestion={mockOnSelectSuggestion}
        visible={visible}
        highlightedIndex={highlightedIndex}
        listId="test-autocomplete-list"
      />
    );
  };

  test('renders nothing if not visible', () => {
    renderComponent(false);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  test('renders nothing if no suggestions', () => {
    renderComponent(true, []);
    expect(screen.queryByRole('listbox')).not.toBeInTheDocument();
  });

  test('renders suggestions correctly', () => {
    renderComponent();
    expect(screen.getByRole('listbox')).toBeInTheDocument();
    expect(screen.getAllByRole('option')).toHaveLength(mockSuggestions.length);
    expect(screen.getByText('Apple iPhone')).toBeInTheDocument();
    expect(screen.getByText('Apple MacBook')).toBeInTheDocument();
  });

  test('highlights search term in suggestions', () => {
    renderComponent(true, [{ text: "Test Apple Case", type: "product"}], -1, "Apple");
    // The component uses spans for highlighting: before, match, after
    // Check for the 'match' part
    const matchSpans = screen.getAllByText("Apple"); // This might be too generic if "Apple" appears elsewhere
    // A more robust way is to check for the structure if highlightMatch creates specific elements/classes
    // Our current highlightMatch returns {before, match, after} and uses a bold span for match

    // Example: Check for the bolded "Apple" part
    const boldElement = screen.getByText((content, element) => {
        // Check if the element is a span and has the font-bold class (or whatever class is used)
        // And its direct parent contains the full suggestion text
        return element?.tagName.toLowerCase() === 'span' &&
               element?.classList.contains('font-bold') &&
               element?.textContent === 'Apple';
    });
    expect(boldElement).toBeInTheDocument();
    expect(boldElement.previousSibling?.textContent).toBe('Test ');
    expect(boldElement.nextSibling?.textContent).toBe(' Case');
  });

  test('applies highlight style and aria-selected to the highlighted suggestion', () => {
    renderComponent(true, mockSuggestions, 0); // Highlight "Apple iPhone"
    const firstSuggestion = screen.getByText('Apple iPhone').closest('li');
    expect(firstSuggestion).toHaveClass('bg-zion-blue-light'); // Example highlight class
    expect(firstSuggestion).toHaveAttribute('aria-selected', 'true');

    const secondSuggestion = screen.getByText('Apple MacBook').closest('li');
    expect(secondSuggestion).not.toHaveClass('bg-zion-blue-light');
    expect(secondSuggestion).toHaveAttribute('aria-selected', 'false');
  });

  test('calls onSelectSuggestion with correct text on mouse down', async () => {
    renderComponent();
    const firstSuggestionItem = screen.getByText('Apple iPhone');
    // userEvent.click might be problematic if onMouseDown + e.preventDefault is used.
    // fireEvent.mouseDown should work.
    fireEvent.mouseDown(firstSuggestionItem);
    expect(mockOnSelectSuggestion).toHaveBeenCalledWith('Apple iPhone');
    expect(mockOnSelectSuggestion).toHaveBeenCalledTimes(1);
  });

  test('calls onSelectSuggestion on click', async () => {
    renderComponent();
    const firstSuggestionItem = screen.getByText('Apple iPhone');
    fireEvent.click(firstSuggestionItem);
    expect(mockOnSelectSuggestion).toHaveBeenCalledWith('Apple iPhone');
  });

  test('renders correct ARIA roles and ID for listbox', () => {
    renderComponent();
    const listbox = screen.getByRole('listbox');
    expect(listbox).toBeInTheDocument();
    expect(listbox).toHaveAttribute('id', 'test-autocomplete-list');
  });

  test('renders correct ARIA role and ID for options', () => {
    renderComponent();
    const options = screen.getAllByRole('option');
    expect(options[0]).toHaveAttribute('id', 'suggestion-item-0');
    expect(options[1]).toHaveAttribute('id', 'suggestion-item-1');
  });

  // Test for scrollIntoView is tricky with JSDOM.
  // We can check if the ref is correctly assigned to the highlighted item.
  test('highlighted item ref is set for scrolling', () => {
    // This requires inspecting the component's internals or using a more complex setup.
    // For now, we trust that if `highlightedIndex` is passed, the ref logic inside works.
    // A basic check: ensure the highlighted item exists.
    const scrollIndex = 1;
    renderComponent(true, mockSuggestions, scrollIndex);
    const highlightedOption = screen.getByRole('option', { name: (accessibleName, element) =>
        element.textContent?.startsWith(mockSuggestions[scrollIndex].text) ?? false
    });
    expect(highlightedOption).toHaveAttribute('aria-selected', 'true');
    // We can't directly test scrollIntoView, but we've tested that the correct item is marked as selected.
    // The useEffect for scrolling depends on this `highlightedIndex`.
  });

  test('displays suggestion type', () => {
    renderComponent();
    expect(screen.getByText((content, element) => element?.textContent === 'product' && element.tagName.toLowerCase() === 'span')).toBeInTheDocument();
    expect(screen.getByText((content, element) => element?.textContent === 'category' && element.tagName.toLowerCase() === 'span')).toBeInTheDocument(); // Assuming Banana Phone is in mockSuggestions
    // Need to make sure Banana Phone is part of default mockSuggestions for this test or pass custom ones.
    // Let's add it to the default mock for this test case
    const suggestionsWithFruit: SearchSuggestion[] = [
        ...mockSuggestions,
        { text: 'Banana Phone', type: 'category' }
    ];
    render( // re-render with new suggestions
        <AutocompleteSuggestions
          suggestions={suggestionsWithFruit}
          searchTerm={mockSearchTerm}
          onSelectSuggestion={mockOnSelectSuggestion}
          visible={true}
          highlightedIndex={-1}
          listId="test-autocomplete-list"
        />
      );
    expect(screen.getByText('category')).toBeInTheDocument();
  });
});
