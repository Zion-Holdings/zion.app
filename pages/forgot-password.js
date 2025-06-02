import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Link from 'next/link';
import { forgotPassword } from '../src/services/auth';
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
            await forgotPassword(email);
            setMessage('If your email address is registered, you will receive a password reset link shortly.');
        }
        catch (err) {
            setError(err.message || 'Failed to send reset link. Please try again.');
        }
        finally {
            setLoading(false);
        }
    };
    return (_jsxs("div", { children: [_jsx("h2", { children: "Forgot Password" }), _jsxs("form", { onSubmit: handleSubmit, children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "email", children: "Email Address" }), _jsx("input", { type: "email", id: "email", value: email, onChange: (e) => setEmail(e.target.value), required: true, disabled: loading })] }), _jsx("button", { type: "submit", disabled: loading, children: loading ? 'Sending...' : 'Send Reset Link' })] }), message && _jsx("p", { style: { color: 'green' }, children: message }), error && _jsx("p", { style: { color: 'red' }, children: error }), _jsxs("p", { children: ["Remember your password? ", _jsx(Link, { href: "/login", children: "Login" })] })] }));
};
export default ForgotPassword;
