import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { setupRouterErrorHandlers } from '@/utils/routerErrorHandler';
import {logErrorToProduction} from '@/utils/productionLogger';


// Add proper loading component and error handling
const DashboardComponent = dynamic(
  () => import('@/pages/Dashboard').catch((error) => {
    logErrorToProduction('Failed to load Dashboard component:', error);
    // Return a fallback component
    return {
      default: () => (
        <div className="min-h-screen flex items-center justify-center bg-zion-blue">
          <div className="bg-zion-blue-dark rounded-xl p-8 max-w-md text-center">
            <h2 className="text-xl font-bold text-white mb-4">
              Dashboard Temporarily Unavailable
            </h2>
            <p className="text-zion-slate-light mb-6">
              We're having trouble loading the dashboard. Please try refreshing the page.
            </p>
            <button
              className="bg-zion-purple hover:bg-zion-purple-light text-white px-6 py-2 rounded-lg"
              onClick={() => window.location.reload()}
            >
              Refresh Page
            </button>
          </div>
        </div>
      ),
    };
  }),
  {
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    ),
    ssr: false, // Disable SSR to prevent router conflicts
  }
);

function DashboardPage() {
  const router = useRouter();

  useEffect(() => {
    // Set up router error handlers specifically for dashboard
    const cleanup = setupRouterErrorHandlers(router);
    return cleanup;
  }, [router]);

  return (
    <ErrorBoundary>
      <DashboardComponent />
    </ErrorBoundary>
  );
}

export default DashboardPage;
