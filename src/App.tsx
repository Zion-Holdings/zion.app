import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Sidebar } from './components/Sidebar';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import {
  AuthRoutes,
  DashboardRoutes,
  MarketplaceRoutes,
  TalentRoutes,
  AdminRoutes,
  MobileAppRoutes,
  ContentRoutes,
  ErrorRoutes,
  EnterpriseRoutes,
  CommunityRoutes,
  DeveloperRoutes
} from './routes';

const Home = React.lazy(() => import('./pages/Home'));
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = React.lazy(() => import('./pages/TalentsPage'));
const ServicesShowcase = React.lazy(() => import('./pages/ServicesShowcase'));

// Loading Component
const LoadingSpinner = () => (
  <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
    <div className="text-center">
      <div className="relative">
        <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
        <div className="absolute inset-0 w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin mx-auto" style={{ animationDelay: '-0.5s' }}></div>
      </div>
      <p className="text-cyan-400 text-lg font-medium">Loading Zion Tech Group...</p>
      <p className="text-gray-400 text-sm mt-2">Preparing your experience</p>
    </div>
  </div>
);

const App = () => {
  return (
    <ThemeProvider>
      <WhitelabelProvider>
        <Router>
          <div className="App min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
            <Header />
            <Sidebar />
            
            {/* Main Content with enhanced Suspense */}
            <main className="ml-64 pt-20 min-h-screen">
              <Suspense fallback={<LoadingSpinner />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/services-showcase" element={<ServicesShowcase />} />
                  <Route path="/match" element={<AIMatcherPage />} />
                  <Route path="/talent" element={<TalentDirectory />} />
                  <Route path="/talents" element={<TalentsPage />} />
                  
                  {/* Include all route groups */}
                  <AuthRoutes />
                  <DashboardRoutes />
                  <MarketplaceRoutes />
                  <TalentRoutes />
                  <AdminRoutes />
                  <MobileAppRoutes />
                  <ContentRoutes />
                  <ErrorRoutes />
                  <EnterpriseRoutes />
                  <CommunityRoutes />
                  <DeveloperRoutes />
                </Routes>
              </Suspense>
            </main>
            
            <Footer />
            
            {/* Toasters */}
            <Toaster />
            <SonnerToaster />
          </div>
        </Router>
      </WhitelabelProvider>
    </ThemeProvider>
  );
}

export default App;