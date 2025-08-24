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
import { ScrollToTop } from "./components/ui/ScrollToTop";
import { PerformanceMonitor } from "./components/PerformanceMonitor";
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
const GreenIT = React.lazy(() => import('./pages/GreenIT'));
const FAQ = React.lazy(() => import('./pages/FAQ'));
const HelpCenter = React.lazy(() => import('./pages/HelpCenter'));
const OpenAppRedirect = React.lazy(() => import('./pages/OpenAppRedirect'));
const ContactPage = React.lazy(() => import('./pages/Contact'));
const ZionHireAI = React.lazy(() => import('./pages/ZionHireAI'));
const RequestQuotePage = React.lazy(() => import('./pages/RequestQuote'));
const AboutPage = React.lazy(() => import('./pages/About'));
const CareersPage = React.lazy(() => import('./pages/Careers'));
const SitemapPage = React.lazy(() => import('./pages/Sitemap'));
const PrivacyPage = React.lazy(() => import('./pages/Privacy'));
const TermsPage = React.lazy(() => import('./pages/Terms'));
const PricingPage = React.lazy(() => import('./pages/Pricing'));
const baseRoutes = [
    { path: '/', element: _jsx(Home, {}) },
    { path: '/match', element: _jsx(AIMatcherPage, {}) },
    { path: '/login', element: _jsx(Login, {}) },
    { path: '/signup', element: _jsx(Signup, {}) },
    { path: '/talent', element: _jsx(TalentDirectory, {}) },
    { path: '/talents', element: _jsx(TalentsPage, {}) },
    { path: '/services', element: _jsx(ServicesPage, {}) },
    { path: '/it-onsite-services', element: _jsx(ITOnsiteServicesPage, {}) },
    { path: '/green-it', element: _jsx(GreenIT, {}) },
    { path: '/faq', element: _jsx(FAQ, {}) },
    { path: '/help', element: _jsx(HelpCenter, {}) },
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
    { path: '/about', element: _jsx(AboutPage, {}) },
    { path: '/careers', element: _jsx(CareersPage, {}) },
    { path: '/sitemap', element: _jsx(SitemapPage, {}) },
    { path: '/privacy', element: _jsx(PrivacyPage, {}) },
    { path: '/terms', element: _jsx(TermsPage, {}) },
    { path: '/pricing', element: _jsx(PricingPage, {}) },
];
const App = () => {
    // Ensure each navigation starts at the top of the page
    useScrollToTop();
    return (_jsx(WhitelabelProvider, { children: _jsxs(ThemeProvider, { defaultTheme: "dark", children: [_jsx(PerformanceMonitor, { logToConsole: true }), _jsx(Suspense, { fallback: _jsx("div", { className: "p-4 text-center", children: "Loading..." }), children: _jsx(Routes, { children: baseRoutes.map(({ path, element }) => (_jsx(Route, { path: path, element: element }, path))) }) }), _jsx(ScrollToTop, {}), _jsx(Toaster, {}), _jsx(SonnerToaster, {})] }) }));
};
export default App;
