import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
export function NewsletterSection() {
    return (_jsx("section", { className: "py-16 bg-zion-blue-dark", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Stay Updated with Zion Tech" }), _jsx("p", { className: "text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto", children: "Get the latest updates on AI technology, marketplace trends, and exclusive opportunities delivered to your inbox." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto", children: [_jsx(Input, { type: "email", placeholder: "Enter your email", className: "flex-1" }), _jsx(Button, { className: "bg-zion-purple hover:bg-zion-purple-dark", children: "Subscribe" })] }), _jsx("p", { className: "text-sm text-zion-slate-light mt-4", children: "No spam, unsubscribe at any time." })] }) }));
}
