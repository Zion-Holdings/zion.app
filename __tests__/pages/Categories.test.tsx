import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Categories from '@/pages/Categories';

// Mock child components
jest.mock('@/components/CategoriesSection', () => {
  const React = require('react');
  return { CategoriesSection: (props: any) => {
    if (!props.categories || props.categories.length === 0) {
      return <div data-testid="categories-section">No categories to display</div>;
    }
    return (
      <div data-testid="categories-section">
        {props.categories.map((cat: any) => (
          <div key={cat.id}>{cat.name}</div>
        ))}
      </div>
    );
  }}
});
jest.mock('@/components/GlobalErrorBoundary', () => ({ children }: { children: React.ReactNode }) => <>{children}</>);


// Mock fetch API
global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([]),
  })
) as jest.Mock;

describe('Categories Page', () => {
  beforeEach(() => {
    // Clear mock history before each test
    (global.fetch as jest.Mock).mockClear();
    jest.clearAllMocks();

    // Default fetch mock for each test
    (global.fetch as jest.Mock).mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      })
    );
  });

  it('renders without throwing errors and displays a heading', async () => {
    render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/Browse Categories/i)).toBeInTheDocument();
    });
    expect(global.fetch).toHaveBeenCalledWith('/api/categories');
  });

  it('displays category listings when API returns data', async () => {
    const mockCategories = [
      { id: '1', name: 'AI Development', description: 'Develop AI solutions' },
      { id: '2', name: 'Cloud Services', description: 'Manage cloud infrastructure' },
    ];

    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockCategories),
      })
    );

    render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/AI Development/i)).toBeInTheDocument();
      expect(screen.getByText(/Cloud Services/i)).toBeInTheDocument();
    });
  });

  it('renders empty state when API returns no categories', async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve([]),
      })
    );

    render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(screen.getByText(/No categories are currently available. Please check back later./i)).toBeInTheDocument();
    });
  });

  it('handles API error when fetching categories', async () => {
    (global.fetch as jest.Mock).mockImplementationOnce(() =>
      Promise.resolve({
        ok: false,
        statusText: 'Server Error',
        json: () => Promise.resolve({ message: 'Failed to fetch' }), // Ensure json() is a function
      })
    );

    render(
      <MemoryRouter>
        <Categories />
      </MemoryRouter>
    );

    await waitFor(() => {
      // Check for the generic error message part, as the full message includes the statusText
      expect(screen.getByText(/Error loading categories: API error: Server Error/i)).toBeInTheDocument();
    });
  });
});
