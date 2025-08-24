import React, { Suspense, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { LoadingSpinner } from "./components/ui/loading-spinner";
import { MainNavigation } from "./layout/MainNavigation";
import { MainSidebar } from "./components/layout/MainSidebar";
import { Footer } from "./components/Footer";
import './index.css';

// Import only the working pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const NotFound = React.lazy(() => import('./pages/NotFound'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const Cookies = React.lazy(() => import('./pages/Cookies'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));

// Import new service pages
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServicesPage'));
const ServicesPricingPage = React.lazy(() => import('./pages/ServicesPricingPage'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const MicroSAASPage = React.lazy(() => import('./pages/MicroSAASPage'));
const EnterpriseSolutions = React.lazy(() => import('./pages/EnterpriseSolutions'));

// Enhanced loading component with better UX
function EnhancedSuspenseFallback() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-slate-900">
      <div className="text-center text-white">
        <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-white mx-auto mb-4"></div>
        <h1 className="text-2xl font-bold">Loading Zion Tech Group...</h1>
        <p className="mt-2 text-blue-200">Please wait while we prepare your experience.</p>
      </div>
    </div>
  );
}

// Error Boundary Component for better error handling
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error?: Error }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
    // Here you could send error to analytics service
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900">
          <div className="text-center space-y-4 text-white max-w-md mx-auto px-4">
            <div className="text-red-400 text-6xl mb-4">⚠️</div>
            <h1 className="text-2xl font-bold text-red-400">Something went wrong</h1>
            <p className="text-gray-300">
              We're sorry, but something unexpected happened. Please try refreshing the page.
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Refresh Page
            </button>
            <p className="text-sm text-gray-500 mt-4">
              If the problem persists, please contact our support team.
            </p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/help', element: <HelpCenter /> },
  { path: '/cookies', element: <Cookies /> },
  { path: '/sitemap', element: <Sitemap /> },
  { path: '/comprehensive-services', element: <ComprehensiveServicesPage /> },
  { path: '/services-pricing', element: <ServicesPricingPage /> },
  { path: '/ai-services', element: <AIServicesPage /> },
  { path: '/micro-saas', element: <MicroSAASPage /> },
  { path: '/enterprise-solutions', element: <EnterpriseSolutions /> },
];

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleSidebarToggle = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ErrorBoundary>
      <Router>
        <div className="min-h-screen bg-zion-blue-dark">
          <MainNavigation onSidebarToggle={handleSidebarToggle} />
          <div className="flex pt-16">
            <MainSidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
            <main className="flex-1">
              <Suspense fallback={<EnhancedSuspenseFallback />}>
                <Routes>
                  {baseRoutes.map(({ path, element }) => (
                    <Route key={path} path={path} element={element} />
                  ))}
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
          </div>
          <Footer />
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;