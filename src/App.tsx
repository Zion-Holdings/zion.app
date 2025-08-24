import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
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

// Lazy load all pages
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
const AboutPage = React.lazy(() => import('./pages/About'));

// New service pages
const QuantumEdgeComputingPlatform = React.lazy(() => import('./pages/QuantumEdgeComputingPlatform'));
const AIAutonomousLegalResearchAssistant = React.lazy(() => import('./pages/AIAutonomousLegalResearchAssistant'));
const ZeroTrustNetworkArchitecture = React.lazy(() => import('./pages/ZeroTrustNetworkArchitecture'));

// Additional missing pages
const CareersPage = React.lazy(() => import('./pages/Careers'));
const PrivacyPage = React.lazy(() => import('./pages/Privacy'));
const TermsPage = React.lazy(() => import('./pages/Terms'));
const SupportPage = React.lazy(() => import('./pages/Support'));
const GetStartedPage = React.lazy(() => import('./pages/GetStarted'));

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
  
  // New pages
  { path: '/about', element: <AboutPage /> },
  { path: '/careers', element: <CareersPage /> },
  { path: '/privacy', element: <PrivacyPage /> },
  { path: '/terms', element: <TermsPage /> },
  { path: '/support', element: <SupportPage /> },
  { path: '/get-started', element: <GetStartedPage /> },
  
  // Service detail pages
  { path: '/quantum-edge-computing-platform', element: <QuantumEdgeComputingPlatform /> },
  { path: '/ai-autonomous-legal-research-assistant', element: <AIAutonomousLegalResearchAssistant /> },
  { path: '/zero-trust-network-architecture', element: <ZeroTrustNetworkArchitecture /> },
  
  // Additional service pages (placeholder routes)
  { path: '/ai-autonomous-financial-risk-manager', element: <ServicesPage /> },
  { path: '/ai-autonomous-healthcare-diagnostics-pro', element: <ServicesPage /> },
  { path: '/ai-autonomous-supply-chain-optimizer', element: <ServicesPage /> },
  { path: '/ai-autonomous-cybersecurity-sentinel', element: <ServicesPage /> },
  { path: '/neuromorphic-computing-infrastructure', element: <ServicesPage /> },
  { path: '/holographic-data-center-platform', element: <ServicesPage /> },
  { path: '/bio-computing-infrastructure', element: <ServicesPage /> },
  { path: '/quantum-internet-backbone', element: <ServicesPage /> },
  { path: '/cloud-migration', element: <ServicesPage /> },
  { path: '/devops-automation', element: <ServicesPage /> },
  { path: '/edge-computing', element: <ServicesPage /> },
  { path: '/data-center-optimization', element: <ServicesPage /> },
  { path: '/5g-private-network-solutions', element: <ServicesPage /> },
  { path: '/ai-autonomous-content-factory-pro', element: <ServicesPage /> },
  { path: '/quantum-crm-intelligence-suite', element: <ServicesPage /> },
  { path: '/ai-autonomous-hr-platform', element: <ServicesPage /> },
  { path: '/quantum-financial-intelligence-platform', element: <ServicesPage /> },
  { path: '/ai-autonomous-education-platform', element: <ServicesPage /> },
  { path: '/threat-intelligence-platform', element: <ServicesPage /> },
  { path: '/compliance-automation', element: <ServicesPage /> },
  { path: '/soc2-compliance-automation', element: <ServicesPage /> },
  { path: '/vulnerability-assessment-penetration-testing', element: <ServicesPage /> },
  { path: '/healthcare-ai-solutions', element: <ServicesPage /> },
  { path: '/financial-solutions', element: <ServicesPage /> },
  { path: '/manufacturing-ai-solutions', element: <ServicesPage /> },
  { path: '/retail-technology-solutions', element: <ServicesPage /> },
  { path: '/energy-utilities-solutions', element: <ServicesPage /> },
  { path: '/ai-services', element: <ServicesPage /> },
  { path: '/quantum-services', element: <ServicesPage /> },
  { path: '/it-services', element: <ServicesPage /> },
  { path: '/cybersecurity', element: <ServicesPage /> },
  { path: '/data-analytics', element: <ServicesPage /> },
  { path: '/space-tech', element: <ServicesPage /> },
  { path: '/solutions/enterprise', element: <ServicesPage /> },
  { path: '/solutions/healthcare', element: <ServicesPage /> },
  { path: '/solutions/financial', element: <ServicesPage /> },
  { path: '/solutions/manufacturing', element: <ServicesPage /> },
  { path: '/government-technology-solutions', element: <ServicesPage /> },
  { path: '/mission', element: <AboutPage /> },
  { path: '/team', element: <AboutPage /> },
  { path: '/leadership', element: <AboutPage /> },
  { path: '/culture', element: <AboutPage /> },
  { path: '/values', element: <AboutPage /> },
  { path: '/press', element: <Blog /> },
  { path: '/news', element: <Blog /> },
  { path: '/case-studies', element: <Blog /> },
  { path: '/webinars', element: <Blog /> },
  { path: '/white-papers', element: <Blog /> },
  { path: '/docs', element: <Blog /> },
  { path: '/training', element: <Blog /> },
  { path: '/events-webinars', element: <Blog /> },
  { path: '/developer-resources', element: <Blog /> },
  { path: '/status', element: <SupportPage /> },
  { path: '/cookies', element: <PrivacyPage /> },
  { path: '/accessibility', element: <SupportPage /> },
];

const App = () => {
  // Ensure each navigation starts at the top of the page
  useScrollToTop();
  return (
    <WhitelabelProvider>
      <ThemeProvider defaultTheme="dark">
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
        <Toaster />
        <SonnerToaster position="top-right" />
      </ThemeProvider>
    </WhitelabelProvider>
  );
};

export default App;