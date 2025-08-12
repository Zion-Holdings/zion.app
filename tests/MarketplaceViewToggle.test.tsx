import { render, fireEvent, act } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Marketplace from '@/pages/Marketplace';

jest.mock('@/components/search/EnhancedSearchInput', () => ({
  EnhancedSearchInput: () => <div />,
}));

jest.mock('@/components/search/FilterSidebar', () => ({
  FilterSidebar: () => <div />,
}));

jest.mock('@/components/search/ActiveFiltersBar', () => ({
  ActiveFiltersBar: () => <div />,
}));

jest.mock('@/components/ProductListingCard', () => ({
  ProductListingCard: () => <div />,
}));

jest.mock('@/components/ui/pagination', () => ({
  Pagination: ({ children }: any) => <div>{children}</div>,
  PaginationContent: ({ children }: any) => <div>{children}</div>,
  PaginationItem: ({ children }: any) => <div>{children}</div>,
  PaginationLink: ({ children }: any) => <div>{children}</div>,
  PaginationNext: () => <div />,
  PaginationPrevious: () => <div />,
}));

jest.mock('@/utils/generateRandomListing', () => ({
  generateRandomListing: jest.fn(),
}));

test('toggling view updates container class', () => {
  jest.useFakeTimers();
  const { getByTestId } = render(
    <MemoryRouter>
      <Marketplace />
    </MemoryRouter>
  );
  act(() => {
    jest.runAllTimers();
  });

  const gridIcon = getByTestId('grid-icon');
  const listIcon = getByTestId('list-icon');
  const container = getByTestId('product-container');

  expect(container.className).toContain('grid');
  fireEvent.click(listIcon);
  expect(container.className).toContain('flex-col');
  fireEvent.click(gridIcon);
  expect(container.className).toContain('grid-cols-2');
});
