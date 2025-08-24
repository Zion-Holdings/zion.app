import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { useAuth } from '@/hooks/useAuth';
import { Mail, Lock, Eye, EyeOff } from 'lucide-react';
export default function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');
    const { login } = useAuth();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!email.trim() || !password.trim())
            return;
        setIsLoading(true);
        setError('');
        try {
            await login(email, password);
            navigate('/dashboard');
        }
        catch (error) {
            setError('Invalid email or password. Please try again.');
        }
        finally {
            setIsLoading(false);
        }
    };
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Login - Zion Tech Group", description: "Sign in to your Zion Tech Group account to access the marketplace.", canonical: "https://ziontechgroup.com/login" }), _jsx("div", { className: "min-h-screen bg-zion-blue flex items-center justify-center", children: _jsxs("div", { className: "max-w-md w-full mx-auto p-6", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx(GradientHeading, { children: "Welcome Back" }), _jsx("p", { className: "text-zion-slate-light mt-4", children: "Sign in to your account to continue" })] }), error && (_jsx("div", { className: "mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-lg", children: _jsx("p", { className: "text-red-400 text-sm", children: error }) })), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-white mb-2", children: "Email Address" }), _jsxs("div", { className: "relative", children: [_jsx(Mail, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" }), _jsx(Input, { id: "email", type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Enter your email", className: "pl-10 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan", required: true })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "password", className: "block text-sm font-medium text-white mb-2", children: "Password" }), _jsxs("div", { className: "relative", children: [_jsx(Lock, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" }), _jsx(Input, { id: "password", type: showPassword ? 'text' : 'password', value: password, onChange: (e) => setPassword(e.target.value), placeholder: "Enter your password", className: "pl-10 pr-10 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan", required: true }), _jsx("button", { type: "button", onClick: () => setShowPassword(!showPassword), className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-white transition-colors", "aria-label": showPassword ? 'Hide password' : 'Show password', children: showPassword ? _jsx(EyeOff, { className: "h-4 w-4" }) : _jsx(Eye, { className: "h-4 w-4" }) })] })] }), _jsx("div", { className: "flex items-center justify-between", children: _jsx(Link, { to: "/forgot-password", className: "text-sm text-zion-cyan hover:underline", children: "Forgot password?" }) }), _jsx(Button, { type: "submit", disabled: isLoading || !email.trim() || !password.trim(), className: "w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple disabled:opacity-50 disabled:cursor-not-allowed", children: isLoading ? 'Signing In...' : 'Sign In' })] }), _jsx("div", { className: "mt-8 text-center", children: _jsxs("p", { className: "text-zion-slate-light text-sm", children: ["Don't have an account?", ' ', _jsx(Link, { to: "/signup", className: "text-zion-cyan hover:underline", children: "Sign up" })] }) })] }) })] }));
}
