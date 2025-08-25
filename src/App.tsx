import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
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
const About = React.lazy(() => import('./pages/About'));
const Contact = React.lazy(() => import('./pages/Contact'));
const Services = React.lazy(() => import('./pages/Services'));
const Marketplace = React.lazy(() => import('./pages/Marketplace'));
const Blog = React.lazy(() => import('./pages/Blog'));
const BlogPost = React.lazy(() => import('./pages/BlogPost'));
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = React.lazy(() => import('./pages/TalentsPage'));
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage'));
const EquipmentDetail = React.lazy(() => import('./pages/EquipmentDetail'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage'));
const CommunityPage = React.lazy(() => import('./pages/CommunityPage'));
const Categories = React.lazy(() => import('./pages/Categories'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
const MicroSaasServices = React.lazy(() => import('./pages/MicroSaasServices'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const Careers = React.lazy(() => import('./pages/Careers'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/about', element: <About /> },
  { path: '/contact', element: <Contact /> },
  { path: '/services', element: <Services /> },
  { path: '/marketplace', element: <Marketplace /> },
  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
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
  { path: '/partners', element: <PartnersPage /> },
  { path: '/zion-hire-ai', element: <ZionHireAI /> },
  { path: '/hire-ai', element: <ZionHireAI /> },
  { path: '/request-quote', element: <RequestQuotePage /> },
  { path: '/privacy', element: <Privacy /> },
  { path: '/terms', element: <Terms /> },
  { path: '/careers', element: <Careers /> },
  { path: '/faq', element: <FAQ /> },
  { path: '/sitemap', element: <Sitemap /> },
];

const App = () => {
  return (
    <WhitelabelProvider>
      <ThemeProvider defaultTheme="dark">
        <Header />
        <main className="min-h-screen">
          <Suspense fallback={<div className="p-4 text-center">Loading...</div>}>
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
      </ThemeProvider>
    </WhitelabelProvider>
  );
};

export default App;