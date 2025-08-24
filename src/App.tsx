import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { PageLoading } from "./components/ui/loading";
import { AccessibilityEnhancer } from "./components/AccessibilityEnhancer";
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

const App = () => {
  return (
    <Router>
      <ErrorBoundary>
        <WhitelabelProvider>
          <ThemeProvider defaultTheme="dark">
            <Suspense fallback={<PageLoading />}>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ai-matcher" element={<AIMatcherPage />} />
                <Route path="/talent-directory" element={<TalentDirectory />} />
                <Route path="/talents" element={<TalentsPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/equipment" element={<EquipmentPage />} />
                <Route path="/equipment/:id" element={<EquipmentDetail />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="/mobile/launch" element={<MobileLaunchPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                <Route path="/partners" element={<PartnersPage />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<Signup />} />
                <Route path="/it-onsite-services" element={<ITOnsiteServicesPage />} />
                <Route path="/mobile/open-app" element={<OpenAppRedirect />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/zion-hire-ai" element={<ZionHireAI />} />
                <Route path="/request-quote" element={<RequestQuotePage />} />
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
            <Toaster />
            <SonnerToaster position="top-right" />
            <AccessibilityEnhancer />
          </ThemeProvider>
        </WhitelabelProvider>
      </ErrorBoundary>
    </Router>
  );
};

export default App;