import React from 'react';
import { Suspense } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// Navigation component
const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-white/10 backdrop-blur-sm border-b border-white/20 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="text-2xl font-bold text-white">
            Zion Tech Group
          </Link>
          
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-blue-400 bg-white/20' 
                  : 'text-blue-100 hover:text-white hover:bg-white/10'
              }`}
            >
              Home
            </Link>
            <Link
              to="/services"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/services') 
                  ? 'text-blue-400 bg-white/20' 
                  : 'text-blue-100 hover:text-white hover:bg-white/10'
              }`}
            >
              Services
            </Link>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/contact') 
                  ? 'text-blue-400 bg-white/20' 
                  : 'text-blue-100 hover:text-white hover:bg-white/10'
              }`}
            >
              Contact
            </Link>
            <Link
              to="/request-quote"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                isActive('/request-quote') 
                  ? 'text-blue-400 bg-white/20' 
                  : 'text-blue-100 hover:text-white hover:bg-white/10'
              }`}
            >
              Get Quote
            </Link>
          </div>
          
          <div className="md:hidden">
            <button className="text-blue-100 hover:text-white p-2">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Only import components that exist
const Home = React.lazy(() => import('./pages/Home'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const FAQPage = React.lazy(() => import('./pages/FAQ'));
const HelpCenterPage = React.lazy(() => import('./pages/HelpCenter'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
const ZionHireAIPage = React.lazy(() => import('./pages/ZionHireAI'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const CategoriesPage = React.lazy(() => import('./pages/Categories'));
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage'));
const AnalyticsPage = React.lazy(() => import('./pages/Analytics'));
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage'));
const TalentDirectoryPage = React.lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = React.lazy(() => import('./pages/TalentsPage'));
const MobilePage = React.lazy(() => import('./pages/Mobile'));
const SitemapPage = React.lazy(() => import('./pages/Sitemap'));
const PrivacyPage = React.lazy(() => import('./pages/Privacy'));
const TermsPage = React.lazy(() => import('./pages/Terms'));
const CareersPage = React.lazy(() => import('./pages/Careers'));
const ServicesPage = React.lazy(() => import('./pages/Services'));
const GreenITPage = React.lazy(() => import('./pages/GreenIT'));
const NotFoundPage = React.lazy(() => import('./pages/NotFound'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/faq', element: <FAQPage /> },
  { path: '/help-center', element: <HelpCenterPage /> },
  { path: '/partners', element: <PartnersPage /> },
  { path: '/request-quote', element: <RequestQuotePage /> },
  { path: '/zion-hire-ai', element: <ZionHireAIPage /> },
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },
  { path: '/categories', element: <CategoriesPage /> },
  { path: '/equipment', element: <EquipmentPage /> },
  { path: '/analytics', element: <AnalyticsPage /> },
  { path: '/mobile-launch', element: <MobileLaunchPage /> },
  { path: '/talent-directory', element: <TalentDirectoryPage /> },
  { path: '/talents', element: <TalentsPage /> },
  { path: '/mobile', element: <MobilePage /> },
  { path: '/sitemap', element: <SitemapPage /> },
  { path: '/privacy', element: <PrivacyPage /> },
  { path: '/terms', element: <TermsPage /> },
  { path: '/careers', element: <CareersPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/green-it', element: <GreenITPage /> },
  { path: '*', element: <NotFoundPage /> },
];

const App = () => {
  return (
    <div className="App">
      <Navigation />
      <Suspense fallback={
        <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-400 mx-auto mb-4"></div>
            <p className="text-blue-100 text-lg">Loading amazing content...</p>
          </div>
        </div>
      }>
        <Routes>
          {baseRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;