import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
export const ProfileSetup = ({ onComplete }) => {
    const [formData, setFormData] = useState({
        displayName: '',
        bio: '',
        headline: ''
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => (Object.assign(Object.assign({}, prev), { [name]: value })));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.displayName && formData.bio && formData.headline) {
            onComplete(formData);
        }
    };
    return (_jsx("div", { className: "max-w-2xl mx-auto p-6", children: _jsxs(Card, { children: [_jsx(CardHeader, { children: _jsx(CardTitle, { className: "text-2xl text-center", children: "Complete Your Profile" }) }), _jsx(CardContent, { children: _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "displayName", className: "block text-sm font-medium text-gray-700 mb-2", children: "Display Name" }), _jsx(Input, { id: "displayName", name: "displayName", type: "text", value: formData.displayName, onChange: handleChange, placeholder: "Enter your display name", required: true })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "headline", className: "block text-sm font-medium text-gray-700 mb-2", children: "Professional Headline" }), _jsx(Input, { id: "headline", name: "headline", type: "text", value: formData.headline, onChange: handleChange, placeholder: "e.g., Senior Software Engineer, AI Specialist", required: true })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "bio", className: "block text-sm font-medium text-gray-700 mb-2", children: "Bio" }), _jsx(Textarea, { id: "bio", name: "bio", value: formData.bio, onChange: handleChange, placeholder: "Tell us about yourself, your experience, and what you're looking for...", rows: 4, required: true })] }), _jsx(Button, { type: "submit", className: "w-full bg-gradient-to-r from-zion-blue to-zion-blue-dark hover:from-zion-blue-dark hover:to-zion-blue text-white", disabled: !formData.displayName || !formData.bio || !formData.headline, children: "Complete Profile" })] }) })] }) }));
};
