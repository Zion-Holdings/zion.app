import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Input } from '@/components/ui/Input';
import { Textarea } from '@/components/ui/Textarea';
import { DollarSign, MessageSquare } from 'lucide-react';
export function HireNowCTA({ talentName, hourlyRate, onHire }) {
    const [isFormOpen, setIsFormOpen] = useState(false);
    const [formData, setFormData] = useState({
        projectDescription: '',
        budget: '',
        startDate: '',
        message: ''
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        if (onHire) {
            onHire(formData);
        }
        // Reset form and close
        setFormData({
            projectDescription: '',
            budget: '',
            startDate: '',
            message: ''
        });
        setIsFormOpen(false);
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => (Object.assign(Object.assign({}, prev), { [name]: value })));
    };
    return (_jsxs(Card, { className: "bg-zion-blue-light border-zion-blue-lighter", children: [_jsx(CardHeader, { children: _jsxs(CardTitle, { className: "text-white flex items-center gap-2", children: [_jsx(MessageSquare, { className: "h-5 w-5 text-zion-cyan" }), "Hire ", talentName] }) }), _jsx(CardContent, { children: !isFormOpen ? (_jsxs("div", { className: "space-y-4", children: [hourlyRate && (_jsxs("div", { className: "flex items-center gap-2 text-zion-slate-light", children: [_jsx(DollarSign, { className: "h-4 w-4" }), _jsxs("span", { children: ["Starting at $", hourlyRate, "/hour"] })] })), _jsx("p", { className: "text-zion-slate-light text-sm", children: "Ready to start your project? Send a message to discuss details and get started." }), _jsx(Button, { onClick: () => setIsFormOpen(true), className: "w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple", children: "Start Project Discussion" })] })) : (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "projectDescription", className: "block text-sm font-medium text-white mb-2", children: "Project Description" }), _jsx(Textarea, { id: "projectDescription", name: "projectDescription", value: formData.projectDescription, onChange: handleChange, placeholder: "Describe your project requirements...", className: "bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan", required: true })] }), _jsxs("div", { className: "grid grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "budget", className: "block text-sm font-medium text-white mb-2", children: "Budget Range" }), _jsx(Input, { id: "budget", name: "budget", value: formData.budget, onChange: handleChange, placeholder: "e.g., $1000-5000", className: "bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan", required: true })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "startDate", className: "block text-sm font-medium text-white mb-2", children: "Start Date" }), _jsx(Input, { id: "startDate", name: "startDate", type: "date", value: formData.startDate, onChange: handleChange, className: "bg-zion-blue border-zion-blue-light text-white focus:border-zion-cyan", required: true })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-white mb-2", children: "Additional Message" }), _jsx(Textarea, { id: "message", name: "message", value: formData.message, onChange: handleChange, placeholder: "Any additional details or questions...", className: "bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan", rows: 3 })] }), _jsxs("div", { className: "flex gap-3", children: [_jsx(Button, { type: "submit", className: "flex-1 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple", children: "Send Message" }), _jsx(Button, { type: "button", variant: "outline", onClick: () => setIsFormOpen(false), className: "border-zion-blue-light text-zion-slate-light hover:bg-zion-blue-light hover:text-white", children: "Cancel" })] })] })) })] }));
}
