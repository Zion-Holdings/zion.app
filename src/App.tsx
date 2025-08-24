import React, { Suspense, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'sonner';
import { useAuth } from '@/hooks/useAuth';
import { useWhitelabel } from '@/context/WhitelabelContext';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { LoadingSpinner } from '@/components/ui/loading-spinner';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServicesPage'));

// Create a client
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // 5 minutes
      retry: 1,
    },
  },
});

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function AppContent() {
  const { user, isLoading } = useAuth();
  const { isWhitelabel } = useWhitelabel();

  if (isLoading) {
    return (
      <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center">
        <LoadingSpinner size="lg" />
      </div>
    );
  }

  const baseRoutes = [
    { path: '/', element: <Home /> },
    { path: '/about', element: <About /> },
    { path: '/contact', element: <Contact /> },
    { path: '/micro-saas-services', element: <MicroSaasServicesPage /> },
    { path: '*', element: <NotFound /> }
  ];

  const allRoutes = baseRoutes;

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      <Header />
      <main>
        <Suspense fallback={
          <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center">
            <LoadingSpinner size="lg" />
          </div>
        }>
          <Routes>
            {allRoutes.map(({ path, element }) => (
              <Route key={path} path={path} element={element} />
            ))}
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <Router>
          <ScrollToTop />
          <AppContent />
          <Toaster 
            position="top-right"
            toastOptions={{
              style: {
                background: '#1e293b',
                color: '#e2e8f0',
                border: '1px solid #475569'
              }
            }}
          />
        </Router>
      </QueryClientProvider>
    </ErrorBoundary>
  );
}