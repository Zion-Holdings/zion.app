import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { EnhancedNavigation } from "./components/EnhancedNavigation";
import { EnhancedFooter } from "./components/EnhancedFooter";
import { PerformanceOptimizedLoader } from "./components/PerformanceOptimizedLoader";
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
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage'));
const EquipmentDetail = React.lazy(() => import('./pages/EquipmentDetail'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage'));
const CommunityPage = React.lazy(() => import('./pages/CommunityPage'));
const Categories = React.lazy(() => import('./pages/Categories'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
const About = React.lazy(() => import('./pages/About'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenterPage'));
const ApiDocs = React.lazy(() => import('./pages/ApiDocsHub'));
const DeveloperPortal = React.lazy(() => import('./pages/DeveloperPortal'));
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServicesPage'));
const AIServicesShowcase = React.lazy(() => import('./pages/AIServicesShowcase'));
const MicroSAASShowcase = React.lazy(() => import('./pages/MicroSAASShowcase'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const CybersecurityServicesPage = React.lazy(() => import('./pages/CybersecurityServicesPage'));
const ServicesPricingPage = React.lazy(() => import('./pages/ServicesPricingPage'));
const ComprehensiveServices = React.lazy(() => import('./pages/ComprehensiveServices'));
const EnterpriseSolutions = React.lazy(() => import('./pages/EnterpriseSolutions'));
const MicroSaasServicesPage = React.lazy(() => import('./pages/MicroSaasServices'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/comprehensive-services', element: <ComprehensiveServices /> },
  { path: '/ai-services', element: <AIServicesPage /> },
  { path: '/enterprise-solutions', element: <EnterpriseSolutions /> },
  { path: '/micro-saas-services', element: <MicroSaasServicesPage /> },
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },
  { path: '/categories', element: <Categories /> },
  { path: '/equipment', element: <EquipmentPage /> },
  { path: '/equipment/:id', element: <EquipmentDetail /> },
  { path: '/analytics', element: <Analytics /> },
  { path: '/mobile-launch', element: <MobileLaunchPage /> },
  { path: '/open-app', element: <OpenAppRedirect /> },
  { path: '/community', element: <CommunityPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/partners', element: <PartnersPage /> },
  { path: '/zion-hire-ai', element: <ZionHireAI /> },
  { path: '/hire-ai', element: <ZionHireAI /> },
  { path: '/request-quote', element: <RequestQuotePage /> },
  { path: '/comprehensive-services', element: <ComprehensiveServicesPage /> },
  { path: '/ai-services', element: <AIServicesPage /> },
  { path: '/cybersecurity-services', element: <CybersecurityServicesPage /> },
  { path: '/services-pricing', element: <ServicesPricingPage /> },
  { path: '/ai-services-showcase', element: <AIServicesShowcase /> },
  { path: '/micro-saas', element: <MicroSAASShowcase /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
];

const App = () => {
  // Ensure each navigation starts at the top of the page
  useScrollToTop();
  
  const [isDarkMode, setIsDarkMode] = React.useState(true);
  
  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <WhitelabelProvider>
      <ThemeProvider defaultTheme="dark">
        <div className="min-h-screen bg-background">
          <EnhancedNavigation 
            onThemeToggle={handleThemeToggle}
            isDarkMode={isDarkMode}
          />
          
          <main className="pt-20">
            <Suspense fallback={<PerformanceOptimizedLoader fullScreen text="Loading..." />}>
              <Routes>
                {baseRoutes.map(({ path, element }) => (
                  <Route key={path} path={path} element={element} />
                ))}
                <Route path="/auth/*" element={<AuthRoutes />} />
                <Route path="/dashboard/*" element={<DashboardRoutes />} />
                <Route path="/marketplace/*" element={<MarketplaceRoutes />} />
                <Route path="/talent/*" element={<TalentRoutes />} />
                <Route path="/admin/*" element={<AdminRoutes />} />
                <Route path="/mobile/*" element={<MobileAppRoutes />} />
                <Route path="/content/*" element={<ContentRoutes />} />
                <Route path="/enterprise/*" element={<EnterpriseRoutes />} />
                <Route path="/community/*" element={<CommunityRoutes />} />
                <Route path="/developers/*" element={<DeveloperRoutes />} />
                <Route path="*" element={<ErrorRoutes />} />
              </Routes>
            </Suspense>
          </main>
          
          <EnhancedFooter />
        </div>
        
        <Toaster />
        <SonnerToaster position="top-right" />
      </ThemeProvider>
    </WhitelabelProvider>
  );
};

export default App;