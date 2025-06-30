import { render, screen } from '@testing-library/react';
import ProductCard from '@/components/ProductCard';
import { ProductListing } from '@/types/listings';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { FavoritesProvider } from '@/context/FavoritesContext';
import { GlobalSnackbarProvider } from '@/context/SnackbarContext';
import { captureException } from '@/utils/sentry';
import { vi, describe, it, expect, beforeEach, type MockInstance } from 'vitest';
import * as usehooksTs from 'usehooks-ts';

// Mock next/router
const mockPush = vi.fn();
vi.mock('next/router', () => ({
  useRouter: () => ({
    push: mockPush,
  }),
}));

// Mock Sentry's captureException
vi.mock('@/utils/sentry', () => ({
  captureException: vi.fn(),
}));

// Mock useMediaQuery for consistent image size testing
vi.mock('usehooks-ts', async () => {
  const actual = await vi.importActual('usehooks-ts') as any;
  return {
    ...actual,
    useMediaQuery: vi.fn().mockReturnValue(false),
  };
});


const mockProductBase: ProductListing = {
  id: 'prod123',
  title: 'Valid Test Product',
  description: 'This is a fully valid test product.',
  price: 99.99,
  currency: 'USD',
  images: ['/test-image.jpg'],
  category: 'Test Category',
  tags: ['tag1', 'tag2'],
  author: { name: 'Test Author', id: 'author1' },
  createdAt: new Date().toISOString(),
};

const TestProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Provider store={store}>
    <AuthProvider>
      <FavoritesProvider>
        <GlobalSnackbarProvider>
          {children}
        </GlobalSnackbarProvider>
      </FavoritesProvider>
    </AuthProvider>
  </Provider>
);


describe('ProductCard', () => {
  beforeEach(() => {
    mockPush.mockClear();
    (captureException as MockInstance<any,any>).mockClear();
    (usehooksTs.useMediaQuery as MockInstance<any,any>).mockReturnValue(false);
  });

  it('renders correctly with valid product data', () => {
    render(<ProductCard product={mockProductBase} />, { wrapper: TestProviders });

    expect(screen.getByText('Valid Test Product')).toBeInTheDocument();
    expect(screen.getByText(/USD99.99/)).toBeInTheDocument();
    const linkElement = screen.getByRole('link', { name: /Valid Test Product/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/marketplace/listing/prod123');
    const imageElement = screen.getByAltText('Valid Test Product');
    expect(linkElement).toContainElement(imageElement);

    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
    expect(screen.getByTestId('buy-now-button')).toBeInTheDocument();
    expect(screen.queryByTestId('product-card-error')).not.toBeInTheDocument();
  });

  it('renders error state if product is null', () => {
    render(<ProductCard product={null as any} />, { wrapper: TestProviders });
    expect(screen.getByTestId('product-card-error')).toBeInTheDocument();
    expect(screen.getByText(/Product information unavailable/i)).toBeInTheDocument();
    expect(captureException).toHaveBeenCalled();
  });

  it('renders error state if product.id is missing', () => {
    const productWithoutId = { ...mockProductBase, id: undefined as any };
    render(<ProductCard product={productWithoutId} />, { wrapper: TestProviders });
    expect(screen.getByTestId('product-card-error')).toBeInTheDocument();
    expect(screen.getByText(/Product information unavailable/i)).toBeInTheDocument();
    expect(captureException).toHaveBeenCalled();
  });

  it('renders error state if product.title is missing', () => {
    const productWithoutTitle = { ...mockProductBase, title: undefined as any };
    render(<ProductCard product={productWithoutTitle} />, { wrapper: TestProviders });
    expect(screen.getByTestId('product-card-error')).toBeInTheDocument();
    expect(screen.getByText(/Product information unavailable/i)).toBeInTheDocument();
    expect(captureException).toHaveBeenCalled();
  });

  it('renders error state if product.title is an empty string', () => {
    const productWithEmptyTitle = { ...mockProductBase, title: '   ' };
    render(<ProductCard product={productWithEmptyTitle} />, { wrapper: TestProviders });
    expect(screen.getByTestId('product-card-error')).toBeInTheDocument();
    expect(screen.getByText(/Product information unavailable/i)).toBeInTheDocument();
    expect(captureException).toHaveBeenCalled();
  });

  it('renders "No Image" if product.images is null or empty', () => {
    const productWithoutImages = { ...mockProductBase, images: [] };
    render(<ProductCard product={productWithoutImages} />, { wrapper: TestProviders });
    expect(screen.getByText(/No Image/i)).toBeInTheDocument();
  });

  it('handles null price gracefully', () => {
    const productWithNullPrice = { ...mockProductBase, price: null };
    render(<ProductCard product={productWithNullPrice} />, { wrapper: TestProviders });
    expect(screen.getByText('Valid Test Product')).toBeInTheDocument();
    expect(screen.queryByText(/USD/)).not.toBeInTheDocument();
  });

});
