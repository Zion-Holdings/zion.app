import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import * as Sentry from '@sentry/nextjs';
import { toast } from 'react-hot-toast';
export default function Login() {
    const [error, setError] = useState(null);
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const email = formData.get('email');
        const password = formData.get('password');
        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });
            if (!res.ok) {
                const text = await res.text();
                throw new Error(text || `HTTP ${res.status}`);
            }
            window.location.href = '/';
        }
        catch (err) {
            Sentry.captureException(err);
            toast.error(err.message);
            setError(err.message);
        }
    };
    return (_jsxs("div", { children: [_jsx("h1", { children: "Welcome back" }), error && _jsx("div", { role: "alert", children: error }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsx("label", { htmlFor: "email", children: "Email" }), _jsx("input", { id: "email", name: "email", type: "email" }), _jsx("label", { htmlFor: "password", children: "Password" }), _jsx("input", { id: "password", name: "password", type: "password" }), _jsx("button", { type: "submit", children: "Login" })] })] }));
}
