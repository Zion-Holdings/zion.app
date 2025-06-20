import { render, screen } from '@testing-library/react';
import ProductCard from '@/components/ProductCard';
import { Product } from '@/types/product';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { FavoritesProvider } from '@/context/FavoritesContext';
import { GlobalSnackbarProvider } from '@/context/SnackbarContext';

// Mock next/router
jest.mock('next/router', () => {
  const mockRouter = {
    route: '/',
    pathname: '',
    query: '',
    asPath: '',
    push: jest.fn(),
    events: {
      on: jest.fn(),
      off: jest.fn(),
      emit: jest.fn(),
    },
    replace: jest.fn(),
    reload: jest.fn(),
    back: jest.fn(),
    prefetch: jest.fn(() => Promise.resolve()),
    beforePopState: jest.fn(),
    isFallback: false,
    isLocaleDomain: false,
    isReady: true,
    isPreview: false,
  };
  return {
    useRouter: () => mockRouter,
    // Exporting the mockRouter object itself if Sentry or other libraries
    // try to import `Router` directly from `next/router`
    default: mockRouter,
  };
});

// Mock next/config
jest.mock('next/config', () => () => ({
  publicRuntimeConfig: {
    NEXT_PUBLIC_SENTRY_DSN: 'test_sentry_dsn',
    // Add other expected publicRuntimeConfig keys here if needed
  },
  serverRuntimeConfig: {
    // Add serverRuntimeConfig keys here if needed
  },
}));

const mockProduct: Product = {
  id: '1',
  title: 'Test Product',
  description: 'This is a test product.',
  price: 99.99,
  currency: '$',
  images: ['/test-image.jpg'],
  category: 'Test Category',
};

describe('ProductCard', () => {
  it('renders the product title as a link with the correct href', () => {
    render(
      <Provider store={store}>
        <AuthProvider>
          <FavoritesProvider>
            <GlobalSnackbarProvider>
              <ProductCard product={mockProduct} />
            </GlobalSnackbarProvider>
          </FavoritesProvider>
        </AuthProvider>
      </Provider>
    );

    const titleLink = screen.getByRole('link', { name: /test product/i });
    expect(titleLink).toBeInTheDocument();
    expect(titleLink).toHaveAttribute('href', '/listing/1');
  });
});
