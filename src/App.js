import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { PageLoader } from "./components/ui/LoadingSpinner";
import { FloatingCTA } from "./components/FloatingCTA";
// Lazy load pages with better error handling
const Home = React.lazy(() => import('./pages/Home'));
const AIMatcherPage = React.lazy(() => import('./pages/AIMatcher'));
const TalentDirectory = React.lazy(() => import('./pages/TalentDirectory'));
const TalentsPage = React.lazy(() => import('./pages/TalentsPage'));
const ServicesPage = React.lazy(() => import('./pages/ServicesPage'));
const ServicesShowcase = React.lazy(() => import('./pages/ServicesShowcase'));
const PricingPage = React.lazy(() => import('./pages/PricingPage'));
const ServicesComparison = React.lazy(() => import('./pages/ServicesComparison'));
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
const ComprehensiveServicesPage = React.lazy(() => import('./pages/ComprehensiveServicesPage'));
const AIServicesShowcase = React.lazy(() => import('./pages/AIServicesShowcase'));
const MicroSAASShowcase = React.lazy(() => import('./pages/MicroSAASShowcase'));
const MicroSaasServices = React.lazy(() => import('./pages/MicroSaasServices'));
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
    { path: '/services-showcase', element: _jsx(ServicesShowcase, {}) },
    { path: '/pricing', element: _jsx(PricingPage, {}) },
    { path: '/services-comparison', element: _jsx(ServicesComparison, {}) },
    { path: '/it-onsite-services', element: _jsx(ITOnsiteServicesPage, {}) },
    { path: '/categories', element: _jsx(Categories, {}) },
    { path: '/equipment', element: _jsx(EquipmentPage, {}) },
    { path: '/equipment/:id', element: _jsx(EquipmentDetail, {}) },
    { path: '/analytics', element: _jsx(Analytics, {}) },
    { path: '/mobile-launch', element: _jsx(MobileLaunchPage, {}) },
    { path: '/open-app', element: _jsx(OpenAppRedirect, {}) },
    { path: '/community', element: _jsx(CommunityPage, {}) },
    { path: '/contact', element: _jsx(ContactPage, {}) },
    { path: '/micro-saas-services', element: _jsx(MicroSaasServices, {}) },
];
// Enhanced loading component with better UX
function EnhancedSuspenseFallback() {
    return (_jsx(PageLoader, { text: "Loading Zion Tech Group...", className: "bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark" }));
}
// Simple error boundary using functional component
function ErrorBoundary({ children }) {
    return _jsx(_Fragment, { children: children });
}
const App = () => {
    // Ensure each navigation starts at the top of the page
    useScrollToTop();
    return (_jsx(ErrorBoundary, { children: _jsxs(ThemeProvider, { defaultTheme: "dark", children: [_jsx(Routes, { children: baseRoutes.map(({ path, element }) => (_jsx(Route, { path: path, element: element }, path))) }), _jsx(FloatingCTA, {}), _jsx(Toaster, {}), _jsx(SonnerToaster, {})] }) }));
};
export default App;
