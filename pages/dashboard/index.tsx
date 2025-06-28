import dynamic from 'next/dynamic';

// Add proper loading component and error handling
const DashboardComponent = dynamic(() => import('@/pages/Dashboard'), {
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
        <p className="text-gray-600">Loading dashboard...</p>
      </div>
    </div>
  ),
  ssr: false, // Disable SSR to prevent router conflicts
});

export default DashboardComponent;
