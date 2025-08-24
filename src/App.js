import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { WhitelabelProvider } from "./context/WhitelabelContext";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { ErrorBoundary } from "./components/ErrorBoundary";
import { PageLoader } from "./components/ui/loading-spinner";
import { PreloadCriticalResources, ServiceWorkerRegistration } from "./components/PerformanceOptimizer";
import { AuthRoutes, DashboardRoutes, MarketplaceRoutes, TalentRoutes, AdminRoutes, MobileAppRoutes, ContentRoutes, ErrorRoutes, EnterpriseRoutes, CommunityRoutes, DeveloperRoutes } from './routes';
// Lazy load pages with better error handling
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
const About = React.lazy(() => import('./pages/About'));
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const Careers = React.lazy(() => import('./pages/Careers'));
const Sitemap = React.lazy(() => import('./pages/Sitemap'));
const Privacy = React.lazy(() => import('./pages/Privacy'));
const Terms = React.lazy(() => import('./pages/Terms'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenterPage'));
const ApiDocs = React.lazy(() => import('./pages/ApiDocsHub'));
const DeveloperPortal = React.lazy(() => import('./pages/DeveloperPortal'));
const baseRoutes = [
    { path: '/', element: _jsx(Home, {}) },
    { path: '/about', element: _jsx(About, {}) },
    { path: '/green-it', element: _jsx(GreenIT, {}) },
    { path: '/careers', element: _jsx(Careers, {}) },
    { path: '/sitemap', element: _jsx(Sitemap, {}) },
    { path: '/privacy', element: _jsx(Privacy, {}) },
    { path: '/terms', element: _jsx(Terms, {}) },
    { path: '/help', element: _jsx(HelpCenter, {}) },
    { path: '/api-docs', element: _jsx(ApiDocs, {}) },
    { path: '/developers', element: _jsx(DeveloperPortal, {}) },
    { path: '/ai-matcher', element: _jsx(AIMatcherPage, {}) },
    { path: '/match', element: _jsx(AIMatcherPage, {}) },
    { path: '/login', element: _jsx(Login, {}) },
    { path: '/signup', element: _jsx(Signup, {}) },
    { path: '/talent', element: _jsx(TalentDirectory, {}) },
    { path: '/talents', element: _jsx(TalentsPage, {}) },
    { path: '/services', element: _jsx(ServicesPage, {}) },
    { path: '/it-onsite-services', element: _jsx(ITOnsiteServicesPage, {}) },
    { path: '/categories', element: _jsx(Categories, {}) },
    { path: '/equipment', element: _jsx(EquipmentPage, {}) },
    { path: '/equipment/:id', element: _jsx(EquipmentDetail, {}) },
    { path: '/analytics', element: _jsx(Analytics, {}) },
    { path: '/mobile-launch', element: _jsx(MobileLaunchPage, {}) },
    { path: '/open-app', element: _jsx(OpenAppRedirect, {}) },
    { path: '/community', element: _jsx(CommunityPage, {}) },
    { path: '/contact', element: _jsx(ContactPage, {}) },
    { path: '/partners', element: _jsx(PartnersPage, {}) },
    { path: '/zion-hire-ai', element: _jsx(ZionHireAI, {}) },
    { path: '/hire-ai', element: _jsx(ZionHireAI, {}) },
    { path: '/request-quote', element: _jsx(RequestQuotePage, {}) },
    { path: '/blog', element: _jsx(Blog, {}) },
    { path: '/blog/:slug', element: _jsx(BlogPost, {}) },
];
// Enhanced loading component with better UX
function EnhancedSuspenseFallback() {
    return (_jsx(PageLoader, { text: "Loading Zion Tech Group...", className: "bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark" }));
}
const App = () => {
    // Ensure each navigation starts at the top of the page
    useScrollToTop();
    return (_jsx(ErrorBoundary, { children: _jsx(WhitelabelProvider, { children: _jsxs(ThemeProvider, { defaultTheme: "dark", children: [_jsx(PreloadCriticalResources, {}), _jsx(ServiceWorkerRegistration, {}), _jsx(Suspense, { fallback: _jsx(EnhancedSuspenseFallback, {}), children: _jsxs(Routes, { children: [baseRoutes.map(({ path, element }) => (_jsx(Route, { path: path, element: element }, path))), _jsx(Route, { path: "/auth/*", element: _jsx(AuthRoutes, {}) }), _jsx(Route, { path: "/dashboard/*", element: _jsx(DashboardRoutes, {}) }), _jsx(Route, { path: "/marketplace/*", element: _jsx(MarketplaceRoutes, {}) }), _jsx(Route, { path: "/talent/*", element: _jsx(TalentRoutes, {}) }), _jsx(Route, { path: "/admin/*", element: _jsx(AdminRoutes, {}) }), _jsx(Route, { path: "/mobile/*", element: _jsx(MobileAppRoutes, {}) }), _jsx(Route, { path: "/content/*", element: _jsx(ContentRoutes, {}) }), _jsx(Route, { path: "/enterprise/*", element: _jsx(EnterpriseRoutes, {}) }), _jsx(Route, { path: "/community/*", element: _jsx(CommunityRoutes, {}) }), _jsx(Route, { path: "/developers/*", element: _jsx(DeveloperRoutes, {}) }), _jsx(Route, { path: "*", element: _jsx(ErrorRoutes, {}) })] }) }), _jsx(Toaster, {}), _jsx(SonnerToaster, { position: "top-right" })] }) }) }));
};
export default App;
