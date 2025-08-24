import React from 'react';
import { Routes, Route } from 'react-router-dom';
<<<<<<< HEAD
import { Layout } from './layout/Layout';
import { Home } from './pages/Home';

function App() {
=======
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
>>>>>>> origin/cursor/website-audit-and-enhancement-1786
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<div className="min-h-screen bg-zion-blue-dark text-white flex items-center justify-center"><h1 className="text-4xl">Services Page</h1></div>} />
        <Route path="/about" element={<div className="min-h-screen bg-zion-blue-dark text-white flex items-center justify-center"><h1 className="text-4xl">About Page</h1></div>} />
        <Route path="/contact" element={<div className="min-h-screen bg-zion-blue-dark text-white flex items-center justify-center"><h1 className="text-4xl">Contact Page</h1></div>} />
      </Routes>
    </Layout>
  );
}

export default App;