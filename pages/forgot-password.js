import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Link from 'next/link';
import * as Sentry from '@sentry/nextjs';
import { Alert, AlertDescription, AlertIcon } from '@chakra-ui/react';
import { toast } from '@/hooks/use-toast';
async function resetPassword(email) {
    try {
        const res = await fetch('/api/auth/forgot', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
        });
        const data = await res.json().catch(() => ({}));
        if (!res.ok) {
            return { ok: false, error: data.error || data.message };
        }
        return { ok: true };
    }
    catch (err) {
        return { ok: false, error: err.message };
    }
}
const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState(null); // Added error state
    const [loading, setLoading] = useState(false); // Added loading state
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setMessage('');
        setError(null);
        try {
            const { ok, error } = await resetPassword(email);
            if (!ok)
                throw new Error(error || 'Reset failed');
            setMessage('If your email address is registered, you will receive a password reset link shortly.');
        }
        catch (err) {
            Sentry.captureException(err);
            const errorMessage = err.message || 'Failed to send reset link. Please try again.';
            setError(errorMessage);
            toast.error(errorMessage);
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsxs("div", { children: [_jsx("h2", { children: "Forgot Password" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "email", children: "Email Address" }), _jsx("input", { type: "email", id: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true, disabled: loading })] }), _jsx("button", { type: "submit", disabled: loading, children: loading ? 'Sending...' : 'Send Reset Link' })] }), message && _jsx("p", { style: { color: 'green' }, children: message }), error && (_jsxs(Alert, { status: "error", mt: 4, children: [_jsx(AlertIcon, {}), _jsx(AlertDescription, { children: error })] })), _jsxs("p", { children: ["Remember your password? ", _jsx(Link, { href: "/login", children: "Login" })] })] }));
};
export default ForgotPassword;
