import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { PageLoader } from "./components/ui/LoadingSpinner";
import { FloatingCTA } from "./components/FloatingCTA";

// Lazy load pages with better error handling
const Home = React.lazy(() => import('./pages/Home'));
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = React.lazy(() => import('./pages/TalentsPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ServicesShowcase = React.lazy(() => import('./pages/ServicesShowcase'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));
const ServicesComparison = React.lazy(() => import('./pages/ServicesComparison'));
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
const MicroSaasServices = React.lazy(() => import('./pages/MicroSaasServices'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/green-it', element: <GreenIT /> },
  { path: '/careers', element: <Careers /> },
  { path: '/sitemap', element: <Sitemap /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/terms', element: <Terms /> },
  { path: '/help', element: <HelpCenter /> },
  { path: '/api-docs', element: <ApiDocs /> },
  { path: '/developers', element: <DeveloperPortal /> },
  { path: '/ai-matcher', element: <AIMatcherPage /> },
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/services-showcase', element: <ServicesShowcase /> },
  { path: '/pricing', element: <PricingPage /> },
  { path: '/services-comparison', element: <ServicesComparison /> },
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },
  { path: '/categories', element: <Categories /> },
  { path: '/equipment', element: <EquipmentPage /> },
  { path: '/equipment/:id', element: <EquipmentDetail /> },
  { path: '/analytics', element: <Analytics /> },
  { path: '/mobile-launch', element: <MobileLaunchPage /> },
  { path: '/open-app', element: <OpenAppRedirect /> },
  { path: '/community', element: <CommunityPage /> },
  { path: '/contact', element: <ContactPage /> },
  { path: '/micro-saas-services', element: <MicroSaasServices /> },
];

// Enhanced loading component with better UX
function EnhancedSuspenseFallback() {
  return (
    <PageLoader 
      text="Loading Zion Tech Group..." 
      className="bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark"
    />
  );
}

// Simple error boundary using functional component
function ErrorBoundary({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

const App = () => {
  // Ensure each navigation starts at the top of the page
  useScrollToTop();
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="dark">
        <Routes>
          {baseRoutes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
        
        {/* Global Components */}
        <FloatingCTA />
        <Toaster />
        <SonnerToaster />
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;