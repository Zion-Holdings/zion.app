import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
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

// New service pages
const ServicesOverview = React.lazy(() => import('./pages/services/ServicesOverview'));
const AIAutonomousSystems = React.lazy(() => import('./pages/services/AIAutonomousSystems'));
const QuantumTechnology = React.lazy(() => import('./pages/services/QuantumTechnology'));
const Cybersecurity = React.lazy(() => import('./pages/services/Cybersecurity'));

// Company pages
const About = React.lazy(() => import('./pages/About'));
const Mission = React.lazy(() => import('./pages/Mission'));

const baseRoutes = [
  { path: '/', element: <Home /> },
  { path: '/match', element: <AIMatcherPage /> },
  { path: '/login', element: <Login /> },
  { path: '/signup', element: <Signup /> },
  { path: '/talent', element: <TalentDirectory /> },
  { path: '/talents', element: <TalentsPage /> },
  { path: '/services', element: <ServicesOverview /> },
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
  
  // Service routes
  { path: '/services/ai-autonomous-systems', element: <AIAutonomousSystems /> },
  { path: '/services/quantum-technology', element: <QuantumTechnology /> },
  { path: '/services/cybersecurity', element: <Cybersecurity /> },
  
  // Company routes
  { path: '/about', element: <About /> },
  { path: '/mission', element: <Mission /> },
];

const App = () => {
  // Ensure each navigation starts at the top of the page
  useScrollToTop();
  
  return (
    <WhitelabelProvider>
      <ThemeProvider>
        <Router>
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              {baseRoutes.map((route) => (
                <Route key={route.path} path={route.path} element={route.element} />
              ))}
              <Route path="*" element={<div>Page not found</div>} />
            </Routes>
          </Suspense>
          <Toaster />
          <SonnerToaster />
        </Router>
      </ThemeProvider>
    </WhitelabelProvider>
  );
}

export default App;