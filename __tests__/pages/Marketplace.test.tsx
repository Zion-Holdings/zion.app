import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import userEvent from '@testing-library/user-event';
import Marketplace from '@/pages/Marketplace';

jest.mock('@/components/ProductCard', () => {
  const React = require('react');
  return { default: (props: any) => <div data-testid="product-card">{props.product.title}</div> };
});

const navigateMock = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => navigateMock,
}));

global.fetch = jest.fn(() =>
  Promise.resolve({
    ok: true,
    json: () => Promise.resolve([]),
  })
) as jest.Mock;

describe('Marketplace Page', () => {
  beforeEach(() => {
    (global.fetch as jest.Mock).mockClear();
    navigateMock.mockClear();
  });

  it('fetches products on mount', async () => {
    const mockProducts = [
      { id: '1', title: 'Product 1' },
      { id: '2', title: 'Product 2' },
    ];
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockProducts),
    });

    render(
      <MemoryRouter>
        <Marketplace />
      </MemoryRouter>
    );

    expect(global.fetch).toHaveBeenCalledWith('/api/products?limit=20');

    await waitFor(() => {
      expect(screen.getAllByTestId('product-card')).toHaveLength(2);
    });
  });

  it('navigates to checkout when a product is clicked', async () => {
    const mockProducts = [{ id: '3', title: 'Click Me' }];
    (global.fetch as jest.Mock).mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockProducts),
    });

    render(
      <MemoryRouter>
        <Marketplace />
      </MemoryRouter>
    );

    await waitFor(() => screen.getByText('Click Me'));
    userEvent.click(screen.getByText('Click Me'));
    expect(navigateMock).toHaveBeenCalledWith('/checkout/3');
  });
});
