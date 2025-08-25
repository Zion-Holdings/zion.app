import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { AccessibilityEnhancer } from "./components/AccessibilityEnhancer";
import { SkipToMainContent } from "./components/AccessibilityEnhancer";
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

// Lazy load pages for better performance
const Home = React.lazy(() => import('./pages/Home'));
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
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect'));
const ContactPage = React.lazy(() => import('./pages/ContactPage'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
const MicroSaasServices = React.lazy(() => import('./pages/MicroSaasServices'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
  { path: '/micro-saas-services', element: <MicroSaasServices /> },
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
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
];

// Loading component with better UX
const LoadingFallback = () => (
  <div className="min-h-screen bg-zion-blue-dark flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-zion-cyan/30 border-t-zion-cyan rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-zion-slate-light text-lg">Loading Zion Tech Group...</p>
      <div className="mt-2 flex space-x-1 justify-center">
        <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce"></div>
        <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
        <div className="w-2 h-2 bg-zion-cyan rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
      </div>
    </div>
  </div>
);

const App = () => {
  return (
    <ErrorBoundary>
      <WhitelabelProvider>
        <ThemeProvider defaultTheme="dark">
          <AccessibilityEnhancer>
            <div className="min-h-screen bg-zion-blue-dark">
              <SkipToMainContent />
              <Header />
              <main id="main-content" className="pt-20">
                <Suspense fallback={<LoadingFallback />}>
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
          </AccessibilityEnhancer>
        </ThemeProvider>
      </WhitelabelProvider>
    </ErrorBoundary>
  );
};

export default App;