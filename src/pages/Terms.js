import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { SEO } from "@/components/SEO";
import { AppHeader } from "@/layout/AppHeader";
import { Footer } from "@/components/Footer";
import TermsOfService from "@/legal/TermsOfService";
export default function Terms() {
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Terms of Service", description: "The terms and conditions for using the Zion platform.", canonical: "https://ziontechgroup.com/terms" }), _jsx(AppHeader, {}), _jsx("main", { className: "min-h-screen bg-zion-blue pt-24 pb-20", children: _jsx("div", { className: "container mx-auto px-4", children: _jsx(TermsOfService, {}) }) }), _jsx(Footer, {})] }));
}
