import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { Routes, Route } from 'react-router-dom';
import './App.css';
import { ThemeProvider } from "./components/ThemeProvider";
import { useScrollToTop } from "./hooks";
import { Toaster } from "./components/ui/toaster";
import { Toaster as SonnerToaster } from "./components/ui/sonner";
import { PageLoader } from "./components/ui/LoadingSpinner";
import { FloatingCTA } from "./components/FloatingCTA";
// Import pages directly instead of using lazy loading for now
import Home from './pages/Home';
import About from './pages/About';
import GreenIT from './pages/GreenIT';
import Careers from './pages/Careers';
import Sitemap from './pages/Sitemap';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import HelpCenter from './pages/HelpCenter';
import ContactPage from './pages/Contact';
import MicroSaasServices from './pages/MicroSaasServices';
const baseRoutes = [
    { path: '/', element: _jsx(Home, {}) },
    { path: '/about', element: _jsx(About, {}) },
    { path: '/green-it', element: _jsx(GreenIT, {}) },
    { path: '/careers', element: _jsx(Careers, {}) },
    { path: '/sitemap', element: _jsx(Sitemap, {}) },
    { path: '/privacy', element: _jsx(Privacy, {}) },
    { path: '/terms', element: _jsx(Terms, {}) },
    { path: '/help', element: _jsx(HelpCenter, {}) },
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
