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
const ComprehensiveServices = React.lazy(() => import('./pages/ComprehensiveServices'));
const AIServicesPage = React.lazy(() => import('./pages/AIServicesPage'));
const EnterpriseSolutions = React.lazy(() => import('./pages/EnterpriseSolutionsPage'));
const AdvancedServicesPage = React.lazy(() => import('./pages/AdvancedServicesPage'));
const ServiceDetailPage = React.lazy(() => import('./pages/ServiceDetailPage'));
const EmergingTechServices = React.lazy(() => import('./pages/EmergingTechServices'));
const IndustrySolutions = React.lazy(() => import('./pages/IndustrySolutions'));
const MicroSaasServices = React.lazy(() => import('./pages/MicroSaasServices'));
const AIBusinessSolutions = React.lazy(() => import('./pages/AIBusinessSolutions'));
const CloudDevOpsSolutions = React.lazy(() => import('./pages/CloudDevOpsSolutions'));
const DigitalTransformation = React.lazy(() => import('./pages/DigitalTransformation'));


const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
  { path: '/micro-saas-services', element: <ComprehensiveServices /> },
  { path: '/comprehensive-services', element: <ComprehensiveServices /> },
  { path: '/ai-services', element: <AIServicesPage /> },
  { path: '/enterprise-solutions', element: <EnterpriseSolutions /> },
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
  { path: '/advanced-services', element: <AdvancedServicesPage /> },
  { path: '/services/:serviceId', element: <ServiceDetailPage /> },
                { path: '/emerging-tech-services', element: <EmergingTechServices /> },
              { path: '/industry-solutions', element: <IndustrySolutions /> },
              { path: '/micro-saas', element: <MicroSaasServices /> },
              { path: '/ai-business-solutions', element: <AIBusinessSolutions /> },
              { path: '/cloud-devops-solutions', element: <CloudDevOpsSolutions /> },
              { path: '/digital-transformation', element: <DigitalTransformation /> },

  { path: '/blog', element: <Blog /> },
  { path: '/blog/:slug', element: <BlogPost /> },
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