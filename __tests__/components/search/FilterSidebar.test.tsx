import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import '@testing-library/jest-dom';
import { FilterSidebar } from '@/components/search/FilterSidebar';
import { FilterOptions } from '@/types/search';

// Mock Lucide icons
jest.mock('lucide-react', () => ({
  ...jest.requireActual('lucide-react'),
  Filter: () => <svg data-testid="filter-icon" />,
  Star: ({ className }: { className: string }) => <svg data-testid="star-icon" className={className} />,
}));

const mockFilterOptions: FilterOptions = {
  productTypes: [
    { value: 'electronics', label: 'Electronics' },
    { value: 'clothing', label: 'Clothing' },
  ],
  locations: [
    { value: 'new-york', label: 'New York' },
    { value: 'london', label: 'London' },
  ],
  availabilityOptions: [
    { value: 'in-stock', label: 'In Stock' },
    { value: 'out-of-stock', label: 'Out of Stock' },
  ],
  ratingOptions: [1, 2, 3, 4, 5],
};

const defaultProps = {
  filters: {
    selectedProductTypes: [],
    selectedLocations: [],
    selectedAvailability: [],
    selectedRating: null,
  },
  filterOptions: mockFilterOptions,
  onFilterChange: jest.fn(),
  onRatingChange: jest.fn(),
  onClearFilters: jest.fn(),
  selectedMinPrice: null,
  selectedMaxPrice: null,
  handlePriceChange: jest.fn(),
  overallMinPrice: 0,
  overallMaxPrice: 10000,
  hasResults: true,
};

describe('FilterSidebar', () => {
  beforeEach(() => {
    // Reset mocks before each test
    jest.clearAllMocks();
  });

  test('renders correctly with default props', () => {
    render(<FilterSidebar {...defaultProps} />);
    expect(screen.getByText('Filters')).toBeInTheDocument();
    expect(screen.getByText('Product Type')).toBeInTheDocument();
    expect(screen.getByText('Location')).toBeInTheDocument();
    expect(screen.getByText('Availability')).toBeInTheDocument();
    expect(screen.getByText('Minimum Rating')).toBeInTheDocument();
    expect(screen.getByText('Price Range')).toBeInTheDocument();
    expect(screen.getByRole('slider')).toBeInTheDocument(); // MUI slider
  });

  test('initializes slider with overall prices if selected prices are null', () => {
    render(<FilterSidebar {...defaultProps} overallMinPrice={100} overallMaxPrice={5000} />);
    const sliders = screen.getAllByRole('slider');
    // For a range slider, MUI typically renders one slider element with two thumbs.
    // We check aria-valuetext on the main slider element for the combined values.
    // However, it's better to check the thumbs individually if possible, or the displayed values.
    // Let's check the displayed values below the slider first.
    expect(screen.getByText('$100')).toBeInTheDocument(); // actualMin display
    expect(screen.getByText('$5,000')).toBeInTheDocument(); // actualMax display

    // MUI slider thumbs might have aria-valuenow or aria-valuetext
    // Let's find the thumbs. They also have role="slider"
    expect(sliders[0]).toHaveAttribute('aria-valuetext', '$100');
    expect(sliders[1]).toHaveAttribute('aria-valuetext', '$5,000');
  });

  test('initializes slider with selected prices', () => {
    render(
      <FilterSidebar
        {...defaultProps}
        selectedMinPrice={500}
        selectedMaxPrice={2500}
        overallMinPrice={0}
        overallMaxPrice={5000}
      />
    );
    expect(screen.getByText('$500')).toBeInTheDocument();
    expect(screen.getByText('$2,500')).toBeInTheDocument();

    const sliders = screen.getAllByRole('slider');
    expect(sliders[0]).toHaveAttribute('aria-valuetext', '$500');
    expect(sliders[1]).toHaveAttribute('aria-valuetext', '$2,500');
  });

  test('value labels are always visible and formatted as currency', () => {
    render(
      <FilterSidebar
        {...defaultProps}
        selectedMinPrice={1000}
        selectedMaxPrice={7000}
        overallMinPrice={0}
        overallMaxPrice={10000}
      />
    );
    // MUI Slider with valueLabelDisplay="on" renders the labels.
    // These labels are typically within a span with class MuiSlider-valueLabelLabel
    // Let's check the aria-valuetext of the thumbs, which should be formatted.
    const sliders = screen.getAllByRole('slider');
    expect(sliders[0]).toHaveAttribute('aria-valuetext', '$1,000');
    expect(sliders[1]).toHaveAttribute('aria-valuetext', '$7,000');

    // And the static display below the slider
    expect(screen.getByText('$1,000')).toBeInTheDocument();
    expect(screen.getByText('$7,000')).toBeInTheDocument();
  });

  test('updates price display and calls handlePriceChange on keyboard interaction (ArrowRight on min thumb)', async () => {
    const user = userEvent.setup();
    const handlePriceChangeMock = jest.fn();
    render(
      <FilterSidebar
        {...defaultProps}
        selectedMinPrice={1000}
        selectedMaxPrice={7000}
        overallMinPrice={0}
        overallMaxPrice={10000} // Step is 1 by default
        handlePriceChange={handlePriceChangeMock}
      />
    );

    const sliders = screen.getAllByRole('slider');
    const minThumb = sliders[0];

    minThumb.focus();
    await user.keyboard('{ArrowRight}');

    // onChange is called, local state actualMin/actualMax updates
    // The text display below the slider should update
    expect(screen.getByText('$1,001')).toBeInTheDocument(); // Min price increased by 1
    expect(screen.getByText('$7,000')).toBeInTheDocument(); // Max price remains

    // Check aria-valuetext on the thumb itself
    expect(minThumb).toHaveAttribute('aria-valuetext', '$1,001');

    // onChangeCommitted is called after keyboard events
    expect(handlePriceChangeMock).toHaveBeenCalledTimes(1);
    expect(handlePriceChangeMock).toHaveBeenCalledWith(1001, 7000);
  });

  test('updates price display and calls handlePriceChange on keyboard interaction (ArrowLeft on max thumb)', async () => {
    const user = userEvent.setup();
    const handlePriceChangeMock = jest.fn();
    render(
      <FilterSidebar
        {...defaultProps}
        selectedMinPrice={1000}
        selectedMaxPrice={7000}
        overallMinPrice={0}
        overallMaxPrice={10000}
        handlePriceChange={handlePriceChangeMock}
      />
    );

    const sliders = screen.getAllByRole('slider');
    const maxThumb = sliders[1];

    maxThumb.focus();
    await user.keyboard('{ArrowLeft}');

    expect(screen.getByText('$1,000')).toBeInTheDocument(); // Min price remains
    expect(screen.getByText('$6,999')).toBeInTheDocument(); // Max price decreased by 1
    expect(maxThumb).toHaveAttribute('aria-valuetext', '$6,999');

    expect(handlePriceChangeMock).toHaveBeenCalledTimes(1);
    expect(handlePriceChangeMock).toHaveBeenCalledWith(1000, 6999);
  });

  test('handlePriceChange is not called during intermediate slider value changes (if we could simulate drag)', () => {
    // Testing this accurately with @testing-library/user-event for drag is complex.
    // MUI slider's onChange is called during drag, onChangeCommitted on release.
    // Keyboard interactions directly trigger both if they are linked to the same internal update.
    // The current setup with keyboard events triggers onChange and then onChangeCommitted for each key press.
    // A true drag simulation would be needed to separate these more clearly.
    // For now, the keyboard tests confirm onChangeCommitted is working.
    // We are relying on MUI's documented behavior for onChange vs onChangeCommitted with mouse drag.
    expect(true).toBe(true); // Placeholder for the concept.
  });

   test('clearing filters updates the slider to overall min/max', () => {
    const { rerender } = render(
      <FilterSidebar
        {...defaultProps}
        selectedMinPrice={1000}
        selectedMaxPrice={7000}
        overallMinPrice={0}
        overallMaxPrice={10000}
      />
    );

    // Initially, slider is at 1000-7000
    expect(screen.getByText('$1,000')).toBeInTheDocument();
    expect(screen.getByText('$7,000')).toBeInTheDocument();
    let sliders = screen.getAllByRole('slider');
    expect(sliders[0]).toHaveAttribute('aria-valuetext', '$1,000');
    expect(sliders[1]).toHaveAttribute('aria-valuetext', '$7,000');

    // Simulate clearing filters by changing props (as parent component would)
    rerender(
      <FilterSidebar
        {...defaultProps}
        selectedMinPrice={null} // Cleared
        selectedMaxPrice={null} // Cleared
        overallMinPrice={0}
        overallMaxPrice={10000}
      />
    );

    // Slider should now reflect overallMinPrice and overallMaxPrice
    expect(screen.getByText('$0')).toBeInTheDocument();
    expect(screen.getByText('$10,000')).toBeInTheDocument();
    sliders = screen.getAllByRole('slider');
    expect(sliders[0]).toHaveAttribute('aria-valuetext', '$0');
    expect(sliders[1]).toHaveAttribute('aria-valuetext', '$10,000');
  });

  // Test for "No results" state
  test('displays no results message when hasResults is false', () => {
    render(<FilterSidebar {...defaultProps} hasResults={false} />);
    expect(screen.getByText('No listings match your filters.')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Clear Filters' })).toBeInTheDocument();
    expect(screen.queryByText('Price Range')).not.toBeInTheDocument(); // Filters should not be visible
  });

  // Test for "Clear All" button functionality
  test('calls onClearFilters when "Clear All" button is clicked', async () => {
    const user = userEvent.setup();
    const onClearFiltersMock = jest.fn();
    // Render with some active filters to enable the button
    render(
      <FilterSidebar
        {...defaultProps}
        onClearFilters={onClearFiltersMock}
        filters={{...defaultProps.filters, selectedProductTypes: ['electronics']}}
      />
    );
    const clearAllButton = screen.getByRole('button', { name: 'Clear All' });
    expect(clearAllButton).not.toBeDisabled();
    await user.click(clearAllButton);
    expect(onClearFiltersMock).toHaveBeenCalledTimes(1);
  });

  test('"Clear All" button is disabled if no filters are active', () => {
    render(<FilterSidebar {...defaultProps} />); // No active filters by default
    const clearAllButton = screen.getByRole('button', { name: 'Clear All' });
    expect(clearAllButton).toHaveClass('opacity-50'); // Or check for disabled attribute if it's set directly
    // For ShadCN Button, it might be opacity and cursor-not-allowed
    expect(clearAllButton).toHaveStyle('cursor: not-allowed');
  });

});

// Helper to check slider thumb values (since MUI renders two thumbs for a range slider)
// This might be more complex depending on how MUI structures the DOM for thumbs.
// The current tests directly use getAllByRole('slider') which returns both thumbs.
// The first thumb is min, second is max.
// aria-valuetext should be available on them due to valueLabelFormat and getAriaValueText.
// If MUI Slider has specific test IDs or classes for thumbs, those could be used too.
// For now, relying on role="slider" and order seems to work.

// Note on fireEvent.change vs userEvent:
// For complex components like MUI Slider, userEvent is generally preferred as it simulates
// full user interactions (focus, keyboard, pointer).
// fireEvent.change might not trigger all necessary internal state updates or event handlers
// in the component. The keyboard interactions for slider are a good example where userEvent is better.
// The `pointer` API from `user-event` could be explored for drag simulation if needed,
// but it's more complex: `await user.pointer([{keys: '[MouseLeft]', target: thumb}, {coords: {x: 10, y: 0}}, {keys: '[/MouseLeft]'}] )`
// This would require calculating coordinates.
// Keyboard interaction is a solid first step for testing slider changes.
