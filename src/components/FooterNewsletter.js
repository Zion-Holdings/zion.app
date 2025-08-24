import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
export const FooterNewsletter = () => {
    const [email, setEmail] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle newsletter subscription
        console.log('Newsletter subscription:', email);
        setEmail('');
    };
    return (_jsxs("div", { className: "bg-gray-800 text-white p-6 rounded-lg", children: [_jsx("h3", { className: "text-lg font-semibold mb-2", children: "Subscribe to our Newsletter" }), _jsx("p", { className: "text-gray-300 mb-4", children: "Stay updated with the latest tech news and updates from Zion Tech Group." }), _jsxs("form", { onSubmit: handleSubmit, className: "flex gap-2", children: [_jsx("input", { type: "email", value: email, onChange: (e) => setEmail(e.target.value), placeholder: "Enter your email", className: "flex-1 px-3 py-2 rounded text-gray-900", required: true }), _jsx("button", { type: "submit", className: "px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded transition-colors", children: "Subscribe" })] })] }));
};
