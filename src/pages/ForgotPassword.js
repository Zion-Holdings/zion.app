import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Mail, ArrowLeft, CheckCircle } from 'lucide-react';
export default function ForgotPassword() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim())
            return;
        setIsLoading(true);
        // Simulate API call
        setTimeout(() => {
            setIsSubmitted(true);
            setIsLoading(false);
        }, 2000);
    };
    if (isSubmitted) {
        return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Password Reset Sent - Zion Tech Group", description: "Check your email for password reset instructions.", canonical: "https://ziontechgroup.com/forgot-password" }), _jsx("div", { className: "min-h-screen bg-zion-blue flex items-center justify-center", children: _jsx("div", { className: "max-w-md w-full mx-auto p-6", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100 mb-4", children: _jsx(CheckCircle, { className: "h-6 w-6 text-green-600" }) }), _jsx("h1", { className: "text-2xl font-bold text-white mb-4", children: "Check Your Email" }), _jsxs("p", { className: "text-zion-slate-light mb-6", children: ["We've sent password reset instructions to ", _jsx("strong", { children: email })] }), _jsxs("p", { className: "text-zion-slate-light text-sm mb-8", children: ["If you don't see the email, check your spam folder or", ' ', _jsx("button", { onClick: () => setIsSubmitted(false), className: "text-zion-cyan hover:underline", children: "try again" })] }), _jsx(Link, { to: "/login", className: "inline-block bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-6 py-3 rounded-lg font-medium transition-all duration-300", children: "Back to Login" })] }) }) })] }));
    }
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Forgot Password - Zion Tech Group", description: "Reset your password to access your Zion Tech Group account.", canonical: "https://ziontechgroup.com/forgot-password" }), _jsx("div", { className: "min-h-screen bg-zion-blue flex items-center justify-center", children: _jsxs("div", { className: "max-w-md w-full mx-auto p-6", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsxs(Link, { to: "/login", className: "inline-flex items-center text-zion-cyan hover:text-white transition-colors mb-4", children: [_jsx(ArrowLeft, { className: "h-4 w-4 mr-2" }), "Back to Login"] }), _jsx(GradientHeading, { children: "Forgot Password?" }), _jsx("p", { className: "text-zion-slate-light mt-4", children: "Enter your email address and we'll send you a link to reset your password." })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-white mb-2", children: "Email Address" }), _jsxs("div", { className: "relative", children: [_jsx(Mail, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" }), _jsx(Input, { id: "email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Enter your email", className: "pl-10 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan", required: true })] })] }), _jsx(Button, { type: "submit", disabled: isLoading || !email.trim(), className: "w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple disabled:opacity-50 disabled:cursor-not-allowed", children: isLoading ? 'Sending...' : 'Send Reset Link' })] }), _jsx("div", { className: "mt-8 text-center", children: _jsxs("p", { className: "text-zion-slate-light text-sm", children: ["Remember your password?", ' ', _jsx(Link, { to: "/login", className: "text-zion-cyan hover:underline", children: "Sign in" })] }) })] }) })] }));
}
