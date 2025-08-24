import React, { useState, useEffect } from 'react';
import { Suspense } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';

// Enhanced Navigation component
const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/20 backdrop-blur-md border-b border-white/30 shadow-lg' 
        : 'bg-white/10 backdrop-blur-sm border-b border-white/20'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-white hover:text-cyan-400 transition-colors duration-200">
            Zion Tech Group
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive('/') 
                  ? 'text-cyan-400 bg-white/20 shadow-lg' 
                  : 'text-blue-100 hover:text-white hover:bg-white/10'
              }`}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive('/about') 
                  ? 'text-cyan-400 bg-white/20 shadow-lg' 
                  : 'text-blue-100 hover:text-white hover:bg-white/10'
              }`}
            >
              About
            </Link>
            
            {/* Services Dropdown */}
            <div className="relative group">
              <button className="px-3 py-2 rounded-md text-sm font-medium text-blue-100 hover:text-white hover:bg-white/10 transition-all duration-200 flex items-center gap-1">
                Services
                <svg className="w-4 h-4 transition-transform duration-200 group-hover:rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-md rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform translate-y-2 group-hover:translate-y-0">
                <div className="py-2">
                  <Link to="/services" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    All Services
                  </Link>
                  <Link to="/ai-services" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    AI Services
                  </Link>
                  <Link to="/micro-saas" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Micro SAAS
                  </Link>
                  <Link to="/it-services" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    IT Services
                  </Link>
                  <Link to="/blockchain" className="block px-4 py-2 text-gray-800 hover:bg-blue-50 hover:text-blue-600 transition-colors">
                    Blockchain & Web3
                  </Link>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                isActive('/contact') 
                  ? 'text-cyan-400 bg-white/20 shadow-lg' 
                  : 'text-blue-100 hover:text-white hover:bg-white/10'
              }`}
            >
              Contact
            </Link>
            
            <Link
              to="/request-quote"
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-200 transform hover:scale-105 shadow-lg"
            >
              Get Quote
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={toggleMobileMenu}
              className="text-blue-100 hover:text-white p-2 transition-colors duration-200"
              aria-label="Toggle mobile menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-300 overflow-hidden ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="py-4 space-y-2 border-t border-white/20">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-cyan-400 bg-white/20' 
                  : 'text-blue-100 hover:text-white hover:bg-white/10'
              }`}
            >
              Home
            </Link>
            
            <Link
              to="/about"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive('/about') 
                  ? 'text-cyan-400 bg-white/20' 
                  : 'text-blue-100 hover:text-white hover:bg-white/10'
              }`}
            >
              About
            </Link>
            
            <Link
              to="/services"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive('/services') 
                  ? 'text-cyan-400 bg-white/20' 
                  : 'text-blue-100 hover:text-white hover:bg-white/10'
              }`}
            >
              Services
            </Link>
            
            <Link
              to="/contact"
              onClick={closeMobileMenu}
              className={`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
                isActive('/contact') 
                  ? 'text-cyan-400 bg-white/20' 
                  : 'text-blue-100 hover:text-white hover:bg-white/10'
              }`}
            >
              Contact
            </Link>
            
            <Link
              to="/request-quote"
              onClick={closeMobileMenu}
              className="block px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-lg font-medium hover:from-cyan-400 hover:to-blue-400 transition-all duration-200"
            >
              Get Quote
            </Link>
            
            {/* Additional Mobile Links */}
            <div className="pt-4 border-t border-white/20">
              <Link
                to="/faq"
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-blue-100 hover:text-white transition-colors duration-200"
              >
                FAQ
              </Link>
              <Link
                to="/help-center"
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-blue-100 hover:text-white transition-colors duration-200"
              >
                Help Center
              </Link>
              <Link
                to="/partners"
                onClick={closeMobileMenu}
                className="block px-3 py-2 text-blue-100 hover:text-white transition-colors duration-200"
              >
                Partners
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Only import components that exist
const Home = React.lazy(() => import('./pages/Home'));
const AboutPage = React.lazy(() => import('./pages/About'));
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
  { path: '/about', element: <AboutPage /> },
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
            <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-cyan-400 mx-auto mb-4"></div>
            <p className="text-cyan-100 text-lg">Loading amazing content...</p>
            <div className="mt-4 flex justify-center space-x-2">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            </div>
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