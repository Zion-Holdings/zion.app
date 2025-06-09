import React from 'react';
import { render, screen, fireEvent, waitFor, within } from '@testing-library/react';
import { CategoryListingPage } from './CategoryListingPage';
import { Listing } from '@/components/CategoryListingPage';

// Mock child components and dependencies
jest.mock('@/components/Header', () => ({
  Header: jest.fn(() => <header data-testid="header">Mocked Header</header>),
}));
jest.mock('@/components/Footer', () => ({
  Footer: jest.fn(() => <footer data-testid="footer">Mocked Footer</footer>),
}));
jest.mock('@/components/GradientHeading', () => ({
  GradientHeading: jest.fn(({ children }) => <h1 data-testid="gradient-heading">{children}</h1>),
}));
jest.mock('@/components/ListingScoreCard', () => ({
  ListingScoreCard: jest.fn((props: any) => (
    <div data-testid="listing-score-card">
      <h3 data-testid={`listing-title-${props.title}`}>{props.title}</h3>
      <p>{props.description}</p>
      {props.aiScore && <span>AI: {props.aiScore}</span>}
      {props.rating && <span>Rating: {props.rating}</span>}
    </div>
  )),
}));

jest.mock('@/components/ui/button', () => ({
  Button: jest.fn(({ children, onClick, variant, ...props }: any) => (
    <button onClick={onClick} data-variant={variant} {...props}>{children}</button>
  )),
}));
jest.mock('@/components/ui/input', () => ({
  Input: jest.fn((props: any) => <input data-testid="input-search" {...props} />),
}));

// Revised Select components mock with prop drilling for onValueChange
jest.mock('@/components/ui/select', () => {
  const SelectMock = jest.fn(({ children, value, onValueChange }) => (
    <div data-testid="select-container" data-currentvalue={value}>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          // Pass onValueChange to direct children (expecting SelectTrigger and SelectContent)
          return React.cloneElement(child, { __onValueChangeFromSelect: onValueChange } as any);
        }
        return child;
      })}
    </div>
  ));

  const SelectTriggerMock = jest.fn(({ children, __onValueChangeFromSelect, ...props }) => (
    // __onValueChangeFromSelect is not used by Trigger directly but passed for consistency if needed
    <button data-testid="select-trigger" {...props}>{children}</button>
  ));

  const SelectContentMock = jest.fn(({ children, __onValueChangeFromSelect, ...props }) => (
    <div>
      {React.Children.map(children, child => {
        if (React.isValidElement(child)) {
          // Pass onValueChange to SelectItem
          return React.cloneElement(child, { __onValueChangeFromSelect } as any);
        }
        return child;
      })}
    </div>
  ));

  const SelectItemMock = jest.fn(({ children, value, __onValueChangeFromSelect, ...props }) => (
    <div data-testid={`select-item-${value}`} onClick={() => __onValueChangeFromSelect && __onValueChangeFromSelect(value)} {...props}>
      {children}
    </div>
  ));

  return {
    Select: SelectMock,
    SelectTrigger: SelectTriggerMock,
    SelectContent: SelectContentMock,
    SelectItem: SelectItemMock,
  };
});


jest.mock('lucide-react', () => ({
  Search: () => <svg data-testid="search-icon" />,
  Filter: () => <svg data-testid="filter-icon" />,
  ArrowDownAZ: () => <svg data-testid="arrow-down-az-icon" />,
  ArrowUpZA: () => <svg data-testid="arrow-up-za-icon" />,
  Loader2: () => <svg data-testid="loader-icon" className="animate-spin" />,
}));

const mockSafeStorageGetItem = jest.fn();
const mockSafeStorageSetItem = jest.fn();
jest.mock('@/utils/safeStorage', () => ({
  safeStorage: {
    getItem: (key: string) => mockSafeStorageGetItem(key),
    setItem: (key: string, value: string) => mockSafeStorageSetItem(key, value),
  },
}));

const sampleListings: Listing[] = [
  { id: '1', title: 'Alpha Listing', description: 'High AI score', category: 'Tech', createdAt: '2023-01-01T00:00:00Z', aiScore: 90, rating: 5 },
  { id: '2', title: 'Bravo Listing', description: 'High rating', category: 'Tech', createdAt: '2023-01-02T00:00:00Z', aiScore: 80, rating: 4.5 },
  { id: '3', title: 'Charlie Listing', description: 'Low everything', category: 'Business', createdAt: '2023-01-03T00:00:00Z', aiScore: 70, rating: 3 },
  { id: '4', title: 'Delta Listing', description: 'Another high AI', category: 'Tech', createdAt: '2023-01-04T00:00:00Z', aiScore: 88, rating: 4 },
];

describe('CategoryListingPage', () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockSafeStorageGetItem.mockReturnValue(null);
  });

  it('renders header, footer, title, and description', () => {
    render(<CategoryListingPage title="Test Category" description="Category Description" listings={sampleListings} />);
    expect(screen.getByTestId('header')).toBeInTheDocument();
    expect(screen.getByTestId('footer')).toBeInTheDocument();
    expect(screen.getByTestId('gradient-heading')).toHaveTextContent('Test Category');
    expect(screen.getByText('Category Description')).toBeInTheDocument();
  });

  it('renders initial listings after loading', async () => {
    render(<CategoryListingPage title="Cat" description="Desc" listings={sampleListings} />);
    await waitFor(() => expect(screen.queryByTestId('loader-icon')).not.toBeInTheDocument(), { timeout: 500 });
    expect(screen.getAllByTestId('listing-score-card')).toHaveLength(sampleListings.length);
    expect(screen.getByText('Alpha Listing')).toBeInTheDocument();
  });

  it('filters listings based on search query', async () => {
    render(<CategoryListingPage title="Cat" description="Desc" listings={sampleListings} />);
    const searchInput = screen.getByTestId('input-search');
    fireEvent.change(searchInput, { target: { value: 'Alpha' } });

    await waitFor(() => expect(screen.queryByTestId('loader-icon')).not.toBeInTheDocument(), { timeout: 500 });
    expect(screen.getByText('Showing 1 results for "Alpha"')).toBeInTheDocument();
    expect(screen.getAllByTestId('listing-score-card')).toHaveLength(1);
    expect(screen.getByText('Alpha Listing')).toBeInTheDocument();
  });

  it('shows loading indicator during brief client-side processing delay', async () => {
    render(<CategoryListingPage title="Cat" description="Desc" listings={sampleListings} />);
    const searchInput = screen.getByTestId('input-search');
    fireEvent.change(searchInput, { target: { value: 'Alpha' } });
    expect(screen.getByTestId('loader-icon')).toBeInTheDocument();
    await waitFor(() => expect(screen.queryByTestId('loader-icon')).not.toBeInTheDocument(), { timeout: 500 });
  });

  it('displays "No listings found" message and clear filters button when no listings match', async () => {
    render(<CategoryListingPage title="Cat" description="Desc" listings={sampleListings} />);
    const searchInput = screen.getByTestId('input-search');
    fireEvent.change(searchInput, { target: { value: 'NonExistentQuery' } });

    await waitFor(() => expect(screen.queryByTestId('loader-icon')).not.toBeInTheDocument(), { timeout: 500 });
    expect(screen.getByText('No listings found')).toBeInTheDocument();

    const clearButton = screen.getByRole('button', { name: /clear all filters/i });
    expect(clearButton).toBeInTheDocument();
    fireEvent.click(clearButton);

    await waitFor(() => expect(screen.queryByTestId('loader-icon')).not.toBeInTheDocument(), { timeout: 500 });
    expect(screen.getAllByTestId('listing-score-card')).toHaveLength(sampleListings.length);
    expect(searchInput).toHaveValue("");
  });

  it('sorts listings: A-Z', async () => {
    render(<CategoryListingPage title="Cat" description="Desc" listings={sampleListings} />);
    // The Select mock passes onValueChange down to SelectItem via __onValueChangeFromSelect
    // The SelectItem mock calls this __onValueChangeFromSelect on click.
    const sortAzItem = screen.getByTestId('select-item-a-z');
    fireEvent.click(sortAzItem); // This should trigger setSelectedSort('a-z') in the component

    await waitFor(() => {
      // Wait for the DOM to update after sort and loading
      expect(screen.queryByTestId('loader-icon')).not.toBeInTheDocument();
      const cards = screen.getAllByTestId('listing-score-card');
      expect(cards.length).toBe(sampleListings.length);
      expect(within(cards[0]).getByText('Alpha Listing')).toBeInTheDocument();
    }, { timeout: 2000 });

    const cards = screen.getAllByTestId('listing-score-card');
    expect(within(cards[0]).getByText('Alpha Listing')).toBeInTheDocument();
    expect(within(cards[1]).getByText('Bravo Listing')).toBeInTheDocument();
    expect(within(cards[2]).getByText('Charlie Listing')).toBeInTheDocument();
    expect(within(cards[3]).getByText('Delta Listing')).toBeInTheDocument();
    expect(mockSafeStorageSetItem).toHaveBeenCalledWith('category_selected_sort', 'a-z');
  });

  it('filters listings: Highly Rated (rating >= 4)', async () => {
    render(<CategoryListingPage title="Cat" description="Desc" listings={sampleListings} />);
    const highRatingItem = screen.getByTestId('select-item-high-rating');
    fireEvent.click(highRatingItem);

    await waitFor(() => {
      expect(screen.queryByTestId('loader-icon')).not.toBeInTheDocument();
      const cards = screen.getAllByTestId('listing-score-card');
      expect(cards.length).toBe(3);
      expect(screen.getByText('Alpha Listing')).toBeInTheDocument();
    }, { timeout: 2000 });

    const cards = screen.getAllByTestId('listing-score-card');
    expect(cards).toHaveLength(3);
    const titles = cards.map(card => within(card).getByRole('heading', { level: 3 }).textContent);
    expect(titles).toContain('Alpha Listing');
    expect(titles).toContain('Bravo Listing');
    expect(titles).toContain('Delta Listing');
    expect(screen.queryByText('Charlie Listing')).not.toBeInTheDocument();
    expect(mockSafeStorageSetItem).toHaveBeenCalledWith('category_selected_filter', 'high-rating');
  });
});
