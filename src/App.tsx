import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { PageLoader } from "./components/ui/loading-spinner";
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

// Lazy load pages with proper error boundaries
const Home = React.lazy(() => import('./pages/Home').catch(() => ({ default: () => <div>Error loading page</div> })));
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher').catch(() => ({ default: () => <div>Error loading page</div> })));
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory').catch(() => ({ default: () => <div>Error loading page</div> })));
const TalentsPage = React.lazy(() => import('./pages/TalentsPage').catch(() => ({ default: () => <div>Error loading page</div> })));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage').catch(() => ({ default: () => <div>Error loading page</div> })));
const EquipmentPage = React.lazy(() => import('./pages/EquipmentPage').catch(() => ({ default: () => <div>Error loading page</div> })));
const EquipmentDetail = React.lazy(() => import('./pages/EquipmentDetail').catch(() => ({ default: () => <div>Error loading page</div> })));
const Analytics = React.lazy(() => import('./pages/Analytics').catch(() => ({ default: () => <div>Error loading page</div> })));
const MobileLaunchPage = React.lazy(() => import('./pages/MobileLaunchPage').catch(() => ({ default: () => <div>Error loading page</div> })));
const CommunityPage = React.lazy(() => import('./pages/CommunityPage').catch(() => ({ default: () => <div>Error loading page</div> })));
const Categories = React.lazy(() => import('./pages/Categories').catch(() => ({ default: () => <div>Error loading page</div> })));
const Blog = React.lazy(() => import('./pages/Blog').catch(() => ({ default: () => <div>Error loading page</div> })));
const BlogPost = React.lazy(() => import('./pages/BlogPost').catch(() => ({ default: () => <div>Error loading page</div> })));
const PartnersPage = React.lazy(() => import('./pages/Partners').catch(() => ({ default: () => <div>Error loading page</div> })));
const Login = React.lazy(() => import('./pages/Login').catch(() => ({ default: () => <div>Error loading page</div> })));
const Signup = React.lazy(() => import('./pages/Signup').catch(() => ({ default: () => <div>Error loading page</div> })));
const ITOnsiteServicesPage = React.lazy(() => import('./pages/ITOnsiteServicesPage').catch(() => ({ default: () => <div>Error loading page</div> })));
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect').catch(() => ({ default: () => <div>Error loading page</div> })));
const ContactPage = React.lazy(() => import('./pages/Contact').catch(() => ({ default: () => <div>Error loading page</div> })));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI').catch(() => ({ default: () => <div>Error loading page</div> })));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote').catch(() => ({ default: () => <div>Error loading page</div> })));

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
];

const App = () => {
  // Ensure each navigation starts at the top of the page
  useScrollToTop();
  return (
    <WhitelabelProvider>
      <ThemeProvider defaultTheme="dark">
        <Suspense fallback={<PageLoader />}>
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