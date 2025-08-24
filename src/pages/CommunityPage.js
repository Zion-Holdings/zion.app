import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
export default function CommunityPage() {
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Community - Zion Tech Group", description: "Join our tech community and connect with fellow professionals.", canonical: "https://ziontechgroup.com/community" }), _jsx(Header, {}), _jsx("main", { className: "min-h-screen bg-zion-blue", children: _jsxs("div", { className: "container mx-auto px-4 py-20", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx(GradientHeading, { children: "Community" }), _jsx("p", { className: "text-xl text-zion-slate-light mt-6 max-w-3xl mx-auto", children: "Connect with fellow tech professionals, share knowledge, and grow your network." })] }), _jsx("div", { className: "max-w-6xl mx-auto", children: _jsxs("div", { className: "bg-zion-blue-light rounded-lg p-8 border border-zion-blue-lighter", children: [_jsx("h2", { className: "text-2xl font-bold text-white mb-6", children: "Coming Soon" }), _jsx("p", { className: "text-zion-slate-light mb-6", children: "Our community platform is currently under development." })] }) })] }) }), _jsx(Footer, {})] }));
}
