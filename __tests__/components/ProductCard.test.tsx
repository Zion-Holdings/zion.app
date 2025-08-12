import { render, screen } from '@testing-library/react';
import ProductCard from '@/components/ProductCard';
// Use ProductListing from '@/types/listings' as that's what Marketplace.tsx provides
import { ProductListing } from '@/types/listings';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { Provider } from 'react-redux';
import { store } from '@/store'; // Assuming store is correctly set up for tests
import { FavoritesProvider } from '@/context/FavoritesContext';
import { GlobalSnackbarProvider } from '@/context/SnackbarContext'; // Assuming this is the correct Snackbar provider
import { captureException } from '@/utils/sentry';

// Mock next/router
const mockPush = jest.fn();
jest.mock('next/router', () => ({
  useRouter: () => ({
    push: mockPush,
    // Add any other router properties your component might use
  }),
}));

// Mock Sentry's captureException
jest.mock('@/utils/sentry', () => ({
  captureException: jest.fn(),
}));

// Mock useMediaQuery for consistent image size testing if needed, or ensure it defaults safely
jest.mock('usehooks-ts', () => ({
  ...jest.requireActual('usehooks-ts'), // Import and retain default behavior
  useMediaQuery: jest.fn().mockReturnValue(false), // Default to not mobile/tablet
}));


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
  // Optional fields can be added here if specific tests need them
};

const TestProviders: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Provider store={store}>
    <AuthProvider> {/* Assuming AuthProvider is setup for tests or mocked */}
      <FavoritesProvider> {/* Assuming FavoritesProvider is setup or mocked */}
        <GlobalSnackbarProvider> {/* Assuming SnackbarProvider is setup or mocked */}
          {children}
        </GlobalSnackbarProvider>
      </FavoritesProvider>
    </AuthProvider>
  </Provider>
);


describe('ProductCard', () => {
  beforeEach(() => {
    // Clear mocks before each test
    mockPush.mockClear();
    (captureException as jest.Mock).mockClear();
    (jest.requireMock('usehooks-ts').useMediaQuery as jest.Mock).mockReturnValue(false);
  });

  it('renders correctly with valid product data', () => {
    render(<ProductCard product={mockProductBase} />, { wrapper: TestProviders });

    expect(screen.getByText('Valid Test Product')).toBeInTheDocument();
    expect(screen.getByText(/USD99.99/)).toBeInTheDocument(); // Price and currency
    // Check that the link wraps both the title and implicitly the image
    const linkElement = screen.getByRole('link', { name: /Valid Test Product/i });
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute('href', '/marketplace/listing/prod123');
    // Check that the image is within the link
    const imageElement = screen.getByAltText('Valid Test Product');
    expect(linkElement).toContainElement(imageElement);

    expect(screen.getByRole('button', { name: /add to cart/i })).toBeInTheDocument();
    expect(screen.getByTestId('buy-now-button')).toBeInTheDocument(); // Buy Now button
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
    const productWithEmptyTitle = { ...mockProductBase, title: '   ' }; // Empty or whitespace
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
    expect(screen.getByText('Valid Test Product')).toBeInTheDocument(); // Still renders title
    expect(screen.queryByText(/USD/)).not.toBeInTheDocument(); // Price should not be rendered
  });

  // Add more tests for interactions like "Add to Cart", "Buy Now" (checking disabled state based on auth), wishlist toggle
  // For example:
  // it('calls onBuy when Buy Now is clicked and user is authenticated', () => { ... });
  // it('disables Buy Now button if user is not authenticated', () => { ... });
  // it('adds item to cart when Add to Cart is clicked', () => { ... });
});
