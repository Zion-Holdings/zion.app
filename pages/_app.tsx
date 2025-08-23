import type { AppProps } from 'next/app';
import '../styles/globals.css';
import SmartHeader from '../components/SmartHeader';
import SmartFooter from '../components/SmartFooter';
import FuturisticLayout from '../components/FuturisticLayout';
import DefaultSEO from '../components/DefaultSEO';

export default function ZionApp({ Component, pageProps }: AppProps) {
  return (
    <FuturisticLayout>
      <div className="min-h-screen flex flex-col">
        <DefaultSEO />
        <SmartHeader />
        <main className="flex-1">
          <Component {...pageProps} />
        </main>
        <SmartFooter />
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
