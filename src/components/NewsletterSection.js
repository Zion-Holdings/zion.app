import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Mail } from 'lucide-react';
export function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [isSubscribed, setIsSubscribed] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim())
            return;
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubscribed(true);
            setIsLoading(false);
            setEmail('');
        }, 1000);
    };
    if (isSubscribed) {
        return (_jsx("section", { className: "py-16 bg-zion-blue-light", children: _jsx("div", { className: "container mx-auto px-4 text-center", children: _jsxs("div", { className: "max-w-md mx-auto", children: [_jsx(Mail, { className: "h-12 w-12 text-green-400 mx-auto mb-4" }), _jsx("h3", { className: "text-2xl font-bold text-white mb-2", children: "Thank You!" }), _jsx("p", { className: "text-zion-slate-light", children: "You've been successfully subscribed to our newsletter." })] }) }) }));
    }
    return (_jsx("section", { className: "py-16 bg-zion-blue-light", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-4", children: "Stay Updated" }), _jsx("p", { className: "text-zion-slate-light mb-8", children: "Get the latest updates on tech trends, new features, and exclusive opportunities delivered to your inbox." }), _jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col sm:flex-row gap-4 max-w-md mx-auto", children: [_jsx(Input, { type: "email", placeholder: "Enter your email", value: email, onChange: (e) => setEmail(e.target.value), className: "flex-1 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan", required: true }), _jsx(Button, { type: "submit", disabled: isLoading || !email.trim(), className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple disabled:opacity-50", children: isLoading ? 'Subscribing...' : 'Subscribe' })] })] }) }) }));
}
