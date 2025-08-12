import React from 'react';
import { render, screen, waitFor, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import fetchMock from 'jest-fetch-mock';

// Mock next/router
const mockRouterPush = jest.fn();
const mockRouterQuery = { slug: '' };
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockRouterPush,
    query: mockRouterQuery,
    pathname: '',
    asPath: '',
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
  }),
}));

// Mock next/link to simplify testing navigation behavior without actual page reloads
jest.mock('next/link', () => {
  const MockLink = ({ children, href }: { children: React.ReactNode; href: string }) => {
    return React.createElement('a', { href, onClick: (e: any) => {
      e.preventDefault(); // Prevent actual navigation
      // Simulate router push behavior for testing purposes
      const url = new URL(href, 'http://localhost'); // Base URL needed for URL constructor
      mockRouterQuery.slug = url.pathname.split('/').pop() || ''; // Update slug for CategoryPage
      mockRouterPush(href); // Call the mocked push
    }}, children);
  };
  MockLink.displayName = 'MockLink';
  return MockLink;
});


// The component being tested on initial load (lists all category cards)
// Assuming pages/categories.tsx is the entry point that uses src/pages/Categories
import CategoriesPage from '@/pages/Categories'; // This is src/pages/Categories.tsx
// The component that displays individual category items
import CategoryPage from '@/pages/CategoryPage'; // This is src/pages/CategoryPage.tsx

fetchMock.enableMocks();

describe('Integration: Category Navigation and Display', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
    mockRouterPush.mockClear();
    mockRouterQuery.slug = ''; // Reset slug
  });

  const sampleCategories = [
    { id: '1', name: 'Services', slug: 'services', icon: 'icon-services.svg' },
    { id: '2', name: 'Talent', slug: 'talent', icon: 'icon-talent.svg' },
  ];

  const servicesCategoryDetails = {
    category: {
      name: 'Services',
      slug: 'services',
      description: 'Various services offered',
    },
    items: [
      { id: 'item1', name: 'Web Development', description: 'Custom web solutions', price: 1000, currency: 'USD' },
      { id: 'item2', name: 'Graphic Design', description: 'Logos and branding', price: 500, currency: 'USD' },
    ],
  };

  test('should navigate to category page and display items when a category card is clicked', async () => {
    // --- Part 1: Render Categories Page and click a card ---

    // Mock fetch for /api/categories (used by CategoriesPage via getStaticProps or client-side fetch)
    // For this test, we'll assume client-side fetch or simplify how CategoriesPage gets its data
    // If CategoriesPage from '@/pages/Categories' directly takes categories as props, that's simpler.
    // Let's assume CategoriesPage (src/pages/Categories) takes categories as a prop.

    render(<CategoriesPage categories={sampleCategories} />);

    // Verify category cards are rendered
    expect(screen.getByText('Services')).toBeInTheDocument();
    expect(screen.getByText('Talent')).toBeInTheDocument();

    // Find the "Services" category card link. data-testid="category-card" was added to CategoryCard.
    // We need to ensure the link within or the card itself is clickable.
    // CategoryCard itself is a Link.
    const servicesCard = screen.getByText('Services').closest('a'); // Find the anchor tag
    expect(servicesCard).toBeInTheDocument();
    expect(servicesCard).toHaveAttribute('href', '/category/services');

    // Mock fetch for the category items API endpoint BEFORE the click that triggers navigation
    fetchMock.mockResponseOnce(JSON.stringify(servicesCategoryDetails));

    // Click the "Services" card
    if (servicesCard) {
      await act(async () => {
        userEvent.click(servicesCard);
      });
    }

    // --- Part 2: Verify navigation and render CategoryPage ---

    // Check if router.push was called with the correct path
    // Our Link mock updates mockRouterQuery.slug and calls mockRouterPush.
    expect(mockRouterPush).toHaveBeenCalledWith('/category/services');
    expect(mockRouterQuery.slug).toBe('services'); // Slug should be updated for CategoryPage

    // Now, render the CategoryPage component. In a real app, Next.js would do this.
    // We simulate this by rendering it directly after the "navigation".
    // It will use the mocked router.query.slug.
    render(<CategoryPage />);

    // Wait for CategoryPage to fetch and display data
    await waitFor(() => {
      // Check that the API for items was called
      expect(fetchMock).toHaveBeenCalledWith(`/api/categories/services/items`);
    });

    // Verify category details and items are displayed
    await waitFor(() => {
      expect(screen.getByText(servicesCategoryDetails.category.name)).toBeInTheDocument();
      // If CategoryListingPage displays description:
      // expect(screen.getByText(servicesCategoryDetails.category.description)).toBeInTheDocument();
    });

    expect(screen.getByText('Web Development')).toBeInTheDocument();
    expect(screen.getByText('Custom web solutions')).toBeInTheDocument();
    expect(screen.getByText('Graphic Design')).toBeInTheDocument();
    expect(screen.getByText('Logos and branding')).toBeInTheDocument();
  });
});
