import type { AppProps } from 'next/app';
import { useRouter } from 'next/router';
import { Provider } from 'react-redux';
import { store } from '@/store';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n';
import { AuthProvider } from '@/context/auth/AuthProvider';
import { CartProvider } from '@/context/CartContext';

import dynamic from 'next/dynamic';
import Head from 'next/head';
import '../src/index.css'; // Restored main CSS import

// Dynamically import the Toaster component from sonner for client-side rendering only
const Toaster = dynamic(
  async () => {
    try {
      const mod = await import('sonner');
      return mod.Toaster;
    } catch (err) {
      console.warn('Toaster dependency missing:', err);
      return () => null;
    }
  },
  { ssr: false }
);

// Simple loading component
const SimpleLoading = () => (
  <div style={{
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    fontFamily: 'sans-serif',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
    color: 'white'
  }}>
    <div style={{ textAlign: 'center' }}>
      <h1>Zion Tech Marketplace</h1>
      <p>Loading...</p>
    </div>
  </div>
);

// Enhanced error boundary with detailed logging
const ErrorBoundary: React.FC<{ children: React.ReactNode; name: string }> = ({ children, name }) => {
  const [hasError, setHasError] = React.useState(false);
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      console.error(`Error in ${name}:`, event.error);
      setError(event.error);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, [name]);

  if (hasError) {
    return (
      <div style={{
        padding: '1rem',
        border: '2px solid #ff4444',
        borderRadius: '8px',
        backgroundColor: '#fff5f5',
        color: '#cc0000',
        margin: '1rem'
      }}>
        <h3>Error in {name}</h3>
        <p>{error?.message || 'Unknown error occurred'}</p>
        <button 
          onClick={() => window.location.reload()}
          style={{
            backgroundColor: '#ff4444',
            color: 'white',
            border: 'none',
            padding: '0.5rem 1rem',
            borderRadius: '4px',
            cursor: 'pointer'
          }}
        >
          Reload Page
        </button>
      </div>
    );
  }

  return <>{children}</>;
};

// Provider wrapper with Redux, React Query, i18n, Auth, and Cart
const ProviderWrapper: React.FC<{ children: React.ReactNode; queryClient: QueryClient }> = ({ children, queryClient }) => {
  return (
    <ErrorBoundary name="BasicWrapper">
      <ErrorBoundary name="QueryClientProvider">
        <QueryClientProvider client={queryClient}>
          <ErrorBoundary name="ReduxProvider">
            <Provider store={store}>
              <ErrorBoundary name="I18nextProvider">
                <I18nextProvider i18n={i18n}>
                  <ErrorBoundary name="AuthProvider">
                    <AuthProvider>
                      <ErrorBoundary name="CartProvider">
                        <CartProvider>
                                                  {children}
                        </CartProvider>
                      </ErrorBoundary>
                    </AuthProvider>
                  </ErrorBoundary>
                </I18nextProvider>
              </ErrorBoundary>
            </Provider>
          </ErrorBoundary>
        </QueryClientProvider>
      </ErrorBoundary>
    </ErrorBoundary>
  );
};

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(() => new QueryClient());
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);

  // Show loading immediately
  useEffect(() => {
    // Set a timeout to hide loading after 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Handle router events for page transitions
  useEffect(() => {
    const handleRouteChangeStart = () => {
      // Could add route change loading if needed
    };

    const handleRouteChangeComplete = () => {
      // Route change completed
    };

    const handleRouteChangeError = () => {
      console.error('Route change error');
    };

    // Only add event listeners if router.events exists
    if (router.events) {
      router.events.on('routeChangeStart', handleRouteChangeStart);
      router.events.on('routeChangeComplete', handleRouteChangeComplete);
      router.events.on('routeChangeError', handleRouteChangeError);

      return () => {
        router.events.off('routeChangeStart', handleRouteChangeStart);
        router.events.off('routeChangeComplete', handleRouteChangeComplete);
        router.events.off('routeChangeError', handleRouteChangeError);
      };
    }

    // Return empty cleanup function if router.events doesn't exist
    return () => {};
  }, [router]); // Keep router in dependencies but add safety check

  // Show loading screen
  if (isLoading) {
    return <SimpleLoading />;
  }

  // Main app render with Redux, React Query, i18n, Auth, and Cart
  return (
    <ProviderWrapper queryClient={queryClient}>
      <Head>
        <link rel="stylesheet" href="/skeleton.css" />
      </Head>
      <Component {...pageProps} />
      <Toaster richColors position="top-right" />
    </ProviderWrapper>
  );
}
