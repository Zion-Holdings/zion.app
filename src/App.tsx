import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import InstallPrompt from "./components/InstallPrompt";
import { Header } from './components/header/Header';
import { Footer } from './components/Footer';
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
  DeveloperRoutes,
  SellerRoutes
} from './routes';

const Home = React.lazy(() => import('./pages/Home'));
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = React.lazy(() => import('./pages/TalentsPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage'));
const CommunityPage = React.lazy(() => import('./pages/CommunityPage'));
const Categories = React.lazy(() => import('./pages/Categories'));
const Login = React.lazy(() => import('./pages/Login'));
const Signup = React.lazy(() => import('./pages/Signup'));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage'));
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect'));
const ContactPage = React.lazy(() => import('./pages/Contact'));

// New pages for missing content
const AboutPage = React.lazy(() => import('./pages/About'));
const CaseStudiesPage = React.lazy(() => import('./pages/CaseStudies'));
const NewsPage = React.lazy(() => import('./pages/News'));
const EventsPage = React.lazy(() => import('./pages/Events'));
const CareersPage = React.lazy(() => import('./pages/Careers'));
const PartnersPage = React.lazy(() => import('./pages/Partners'));
const PrivacyPage = React.lazy(() => import('./pages/Privacy'));
const TermsPage = React.lazy(() => import('./pages/Terms'));
const CookiesPage = React.lazy(() => import('./pages/Cookies'));
const AccessibilityPage = React.lazy(() => import('./pages/Accessibility'));
const DocsPage = React.lazy(() => import('./pages/Docs'));
const AIAutomationServicesPage = React.lazy(() => import('./pages/AIAutomationServices'));
const QuantumServicesPage = React.lazy(() => import('./pages/QuantumServices'));
const EnterpriseITPage = React.lazy(() => import('./pages/EnterpriseIT'));
const ResearchDevelopmentPage = React.lazy(() => import('./pages/ResearchDevelopment'));
const SpaceTechPage = React.lazy(() => import('./pages/SpaceTech'));
const AIAutonomousBusinessPage = React.lazy(() => import('./pages/AIAutonomousBusiness'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
  { path: '/services', element: <ServicesPage /> },
  { path: '/it-onsite-services', element: <ITOnsiteServicesPage /> },
  { path: '/categories', element: <Categories /> },
  { path: '/equipment', element: <EquipmentPage /> },
  { path: '/analytics', element: <Analytics /> },
  { path: '/mobile-launch', element: <MobileLaunchPage /> },
  { path: '/open-app', element: <OpenAppRedirect /> },
  { path: '/community', element: <CommunityPage /> },
  { path: '/contact', element: <ContactPage /> },
  
  // New routes for missing pages
  { path: '/about', element: <AboutPage /> },
  { path: '/case-studies', element: <CaseStudiesPage /> },
  { path: '/news', element: <NewsPage /> },
  { path: '/events', element: <EventsPage /> },
  { path: '/careers', element: <CareersPage /> },
  { path: '/partners', element: <PartnersPage /> },
  { path: '/privacy', element: <PrivacyPage /> },
  { path: '/terms', element: <TermsPage /> },
  { path: '/cookies', element: <CookiesPage /> },
  { path: '/accessibility', element: <AccessibilityPage /> },
  { path: '/docs', element: <DocsPage /> },
  { path: '/ai-automation-services', element: <AIAutomationServicesPage /> },
  { path: '/quantum-services', element: <QuantumServicesPage /> },
  { path: '/enterprise-it', element: <EnterpriseITPage /> },
  { path: '/research-development', element: <ResearchDevelopmentPage /> },
  { path: '/space-tech', element: <SpaceTechPage /> },
  { path: '/ai-autonomous-business-operations', element: <AIAutonomousBusinessPage /> },
];

const App = () => {
  return (
    <WhitelabelProvider>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col">
          <Header />
          <main className="flex-grow">
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
                <Route path="/seller/*" element={<SellerRoutes />} />
                <Route path="*" element={<ErrorRoutes />} />
              </Routes>
            </Suspense>
          </main>
          <Footer />
        </div>
        <Toaster />
        <SonnerToaster position="top-right" />
        <InstallPrompt />
      </ThemeProvider>
    </WhitelabelProvider>
  );
};

export default App;
