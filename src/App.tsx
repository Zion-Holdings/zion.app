import React, { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { EnhancedLoading } from "./components/ui/enhanced-loading";
import { MainNavigation } from "./layout/MainNavigation";
import { Footer } from "./components/Footer";
import { FuturisticAnimatedBackground } from "./components/FuturisticAnimatedBackground";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { motion } from "framer-motion";
import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Header } from './components/Header';
import { Sidebar } from './components/Sidebar';
import { AccessibilityControls } from './components/AccessibilityControls';
import { EnhancedAccessibility } from './components/EnhancedAccessibility';
import { PerformanceDashboard } from './components/PerformanceDashboard';
import { AnalyticsDashboard } from './components/AnalyticsDashboard';
import { AIChatbot } from './components/AIChatbot';
import { CollaborativeTextEditor } from './components/CollaborativeTextEditor';
import { AICodeGenerator } from './components/AICodeGenerator';
import { EnterpriseDashboard } from './components/EnterpriseDashboard';
import { SecurityComplianceDashboard } from './components/SecurityComplianceDashboard';
import { MachineLearningDashboard } from './components/MachineLearningDashboard';
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

// Lazy load pages
const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Services = React.lazy(() => import('./pages/Services'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = React.lazy(() => import('./pages/TalentsPage'));
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
const ITServicesPage = React.lazy(() => import('./pages/ITServicesPage'));
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
const MicroSaasServices = React.lazy(() => import('./pages/MicroSaasServices'));
const ITServices = React.lazy(() => import('./pages/ITServices'));
const AIServices = React.lazy(() => import('./pages/AIServices'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));
const InnovativeServicesShowcase = React.lazy(() => import('./pages/InnovativeServicesShowcase'));
const ServicesOverview = React.lazy(() => import('./pages/ServicesOverview'));
const ServicesPage = React.lazy(() => import('./pages/Services'));
const ExpandedServicesPage = React.lazy(() => import('./pages/ServicesShowcase'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const CybersecurityServicesPage = React.lazy(() => import('./pages/CybersecurityServicesPage'));
const ServicesComparisonPage = React.lazy(() => import('./pages/ServicesComparison'));
const Contact = React.lazy(() => import('./pages/Contact'));
const About = React.lazy(() => import('./pages/About'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/services', element: <Services /> },
  { path: '/marketplace', element: <Marketplace /> },
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
  { path: '/micro-saas-services', element: <MicroSaasServices /> },
  { path: '/it-services', element: <ITServices /> },
  { path: '/it-services-comprehensive', element: <ITServicesPage /> },
  { path: '/ai-services', element: <AIServices /> },
  { path: '/pricing', element: <PricingPage /> },
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
  { path: '/innovative-services', element: <InnovativeServicesShowcase /> },
  { path: '/services-overview', element: <ServicesOverview /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/services-showcase', element: <ExpandedServicesPage /> },
  { path: '/cybersecurity', element: <CybersecurityServicesPage /> },
  { path: '/services-comparison', element: <ServicesComparisonPage /> },
  { path: '/about', element: <About /> },
];

// Enhanced loading fallback
const EnhancedLoadingFallback = () => (
  <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center">
    <div className="text-center">
      <EnhancedLoading size="xl" text="Loading Zion Tech Group..." variant="pulse" className="mb-8"/>
      <motion.div
        className="mt-8 text-zion-slate-light text-sm"
        animate={{ opacity: [0.5, 1, 0.5] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        Please wait while we prepare your experience...
      </motion.div>
    </div>
  </div>
);

const App = () => {
  return (
    <WhitelabelProvider>
      <ThemeProvider defaultTheme="dark">
        <FuturisticAnimatedBackground />
        <Router>
          <div className="App min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
            <MainNavigation />
            
            {/* Main Content with enhanced Suspense */}
            <main className="pt-20 min-h-screen relative z-10">
              <Suspense fallback={<EnhancedLoadingFallback />}>
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
            
            <Footer />
            <Toaster />
            <SonnerToaster position="top-right" />
          </div>
        </Router>
      </ThemeProvider>
    </WhitelabelProvider>
  );
};

export default App;