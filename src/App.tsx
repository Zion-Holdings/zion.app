import React from 'react';
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

// Simplified imports - only what's needed for expanded services
const Suspense = React.Suspense;
const Home = React.lazy(() => import('./pages/Home'));
const EnhancedServicesPage = React.lazy(() => import('./pages/EnhancedServicesPage'));
const ExpandedServicesPage = React.lazy(() => import('./pages/ExpandedServicesPage'));
const ServicesOverviewPage = React.lazy(() => import('./pages/ServicesOverviewPage'));

// Additional routes from the remote branch
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
const CareersPage = React.lazy(() => import('./pages/Careers'));
const GreenITPage = React.lazy(() => import('./pages/GreenIT'));
const PrivacyPage = React.lazy(() => import('./pages/Privacy'));
const TermsPage = React.lazy(() => import('./pages/Terms'));
const SitemapPage = React.lazy(() => import('./pages/Sitemap'));
const HelpCenterPage = React.lazy(() => import('./pages/HelpCenterPage'));
const MarketplacePage = React.lazy(() => import('./pages/Marketplace'));
const SearchPage = React.lazy(() => import('./pages/SearchPage'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/home', element: <Home /> },
  // Expanded services routes
  { path: '/services', element: <EnhancedServicesPage /> },
  { path: '/expanded-services', element: <ExpandedServicesPage /> },
  { path: '/services-overview', element: <ServicesOverviewPage /> },
  // Additional routes
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
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
  { path: '/about', element: <AboutPage /> },
  { path: '/careers', element: <CareersPage /> },
  { path: '/green-it', element: <GreenITPage /> },
  { path: '/privacy', element: <PrivacyPage /> },
  { path: '/terms', element: <TermsPage /> },
  { path: '/sitemap', element: <SitemapPage /> },
  { path: '/help', element: <HelpCenterPage /> },
  { path: '/support', element: <HelpCenterPage /> },
  { path: '/marketplace', element: <MarketplacePage /> },
  { path: '/search', element: <SearchPage /> },
];

const App = () => {
  // Ensure each navigation starts at the top of the page
  useScrollToTop();
  
  return (
    <div className="App">
      <ThemeProvider>
        <WhitelabelProvider>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {baseRoutes.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
            </Routes>
          </Suspense>
          <Toaster />
          <SonnerToaster />
        </WhitelabelProvider>
      </ThemeProvider>
    </div>
  );
};

export default App;