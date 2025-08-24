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
import { Sidebar } from '@/components/Sidebar';

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const Talent = React.lazy(() => import('./pages/Talent'));
const Equipment = React.lazy(() => import('./pages/Equipment'));
const Community = React.l.join(() => import('./pages/Community'));
const Login = React.lazy(() => import('./pages/Login'));
const Register = React.lazy(() => import('./pages/Register'));
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const ClientDashboard = React.lazy(() => import('./pages/ClientDashboard'));
const TalentDashboard = React.lazy(() => import('./pages/TalentDashboard'));
const Profile = React.lazy(() => import('./pages/Profile'));
const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServicesPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const NotFound = React.lazy(() => import('./pages/NotFound'));

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
  const { user, loading } = useAuth();
  const { isWhitelabel, primaryColor } = useWhitelabel();

  if (loading) {
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
    { path: '/marketplace', element: <Marketplace /> },
    { path: '/talent', element: <Talent /> },
    { path: '/equipment', element: <Equipment /> },
    { path: '/community', element: <Community /> },
    { path: '/login', element: <Login /> },
    { path: '/register', element: <Register /> },
    { path: '/profile', element: <Profile /> },
    { path: '/services', element: <ServicesPage /> },
    { path: '/micro-saas-services', element: <MicroSaasServicesPage /> },
    { path: '*', element: <NotFound /> }
  ];

  const authenticatedRoutes = [
    { path: '/dashboard', element: <Dashboard /> },
    { path: '/client-dashboard', element: <ClientDashboard /> },
    { path: '/talent-dashboard', element: <TalentDashboard /> }
  ];

  const allRoutes = [...baseRoutes, ...(user ? authenticatedRoutes : [])];

  return (
    <div className="min-h-screen bg-zion-blue-dark">
      <Header customLogo={isWhitelabel ? 'ZION TECH GROUP' : undefined} />
      <div className="flex">
        {user && <Sidebar />}
        <main className={`flex-1 ${user ? 'ml-64' : ''}`}>
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
      </div>
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