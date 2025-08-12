import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import Categories from '@/pages/Categories'; // Corrected import path
import { CATEGORIES } from '@/data/categories';
import useSWR from 'swr';
import { Category } from '@/data/categories'; // Import Category type

// Mock next/router
jest.mock('next/router', () => ({
  useRouter: () => ({
    query: {},
    pathname: '/categories',
    asPath: '/categories',
    push: jest.fn(),
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn().mockResolvedValue(undefined),
    beforePopState: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    basePath: '',
    isPreview: false,
  }),
}));

// Mock SWR
jest.mock('swr');

// Mock CategoryCard to check for icon prop
jest.mock('@/components/ui/CategoryCard', () => {
  const ActualCategoryCard = jest.requireActual('@/components/ui/CategoryCard').default;
  return jest.fn((props) => <ActualCategoryCard {...props} data-testid={`category-card-${props.category.id}`} data-icon-name={props.category.icon} />);
});


describe('Categories Page Component', () => {
  const mockUseSWR = useSWR as jest.Mock;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('renders categories passed via initialCategories and checks for icon', () => {
    const mockInitialCategories: Category[] = [
      { id: 'cat1', name: 'Initial Cat', slug: 'initial-cat', icon: 'Star' },
      { id: 'cat2', name: 'Second Cat', slug: 'second-cat', icon: 'Heart' },
    ];
    mockUseSWR.mockReturnValue({ data: mockInitialCategories, error: null, isLoading: false });

    render(<Categories categories={mockInitialCategories} />);

    expect(screen.getByText('Initial Cat')).toBeInTheDocument();
    expect(screen.getByText('Second Cat')).toBeInTheDocument();
    expect(screen.queryByText('No categories yet.')).not.toBeInTheDocument();

    // Check for icon presence via data attribute on the mocked CategoryCard
    const categoryCard1 = screen.getByTestId('category-card-cat1');
    expect(categoryCard1).toHaveAttribute('data-icon-name', 'Star');
    const categoryCard2 = screen.getByTestId('category-card-cat2');
    expect(categoryCard2).toHaveAttribute('data-icon-name', 'Heart');
  });

  test('displays "No categories yet." when initialCategories is empty and SWR returns empty', () => {
    mockUseSWR.mockReturnValue({ data: [], error: null, isLoading: false });
    render(<Categories categories={[]} />);
    expect(screen.getByText('No categories yet.')).toBeInTheDocument();
  });

  test('SWR returns categories (simulating client-side fetch) and checks icon', async () => {
    const swrCategories: Category[] = [
      { id: 'swr1', name: 'SWR Cat', slug: 'swr-cat', icon: 'Anchor' },
    ];
    // Initial render with empty, SWR will update
    mockUseSWR.mockReturnValueOnce({ data: [], error: null, isLoading: true });
    const { rerender } = render(<Categories categories={[]} />);

    // Simulate SWR update
    mockUseSWR.mockReturnValueOnce({ data: swrCategories, error: null, isLoading: false });
    rerender(<Categories categories={[]} />); // Rerender with SWR now having data

    await waitFor(() => {
      expect(screen.getByText('SWR Cat')).toBeInTheDocument();
    });
    expect(screen.queryByText('No categories yet.')).not.toBeInTheDocument();
    const categoryCard = screen.getByTestId('category-card-swr1');
    expect(categoryCard).toHaveAttribute('data-icon-name', 'Anchor');
  });

  test('uses default icons if categories from SWR match CATEGORIES constant', async () => {
    // Simulate SWR fetcher falling back to local CATEGORIES
    // The key here is that the SWR data will be the CATEGORIES constant
    mockUseSWR.mockImplementation((key) => {
      if (key === '/api/categories') {
        return { data: CATEGORIES, error: null, isLoading: false };
      }
      return { data: [], error: null, isLoading: false };
    });

    render(<Categories categories={[]} />); // Start with empty initial, SWR provides CATEGORIES

    await waitFor(() => {
      expect(screen.getByText('Services')).toBeInTheDocument(); // A category from CATEGORIES
    });
    expect(screen.getByText('Talents')).toBeInTheDocument();

    // Verify "Services" category card is rendered with the "Cog" icon
    const servicesCard = screen.getByTestId('category-card-services');
    expect(servicesCard).toHaveAttribute('data-icon-name', 'Cog');

    // Verify "Talents" category card is rendered with the "Users" icon
    const talentsCard = screen.getByTestId('category-card-talents');
    expect(talentsCard).toHaveAttribute('data-icon-name', 'Users');
  });
});
