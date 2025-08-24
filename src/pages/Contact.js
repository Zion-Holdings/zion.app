import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";
import z from "zod";
import { ChatAssistant } from "@/components/ChatAssistant";
import { Mail, MessageSquare, MapPin, Phone } from "lucide-react";
export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: ""
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState({});
    const [isChatOpen, setIsChatOpen] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
        setErrors(prev => ({ ...prev, [name]: undefined }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const schema = z.object({
            name: z.string().min(2, "Name must be at least 2 characters"),
            email: z.string().email("Invalid email address"),
            subject: z.string().min(2, "Subject must be at least 2 characters"),
            message: z.string().min(10, "Message must be at least 10 characters"),
        });
        const result = schema.safeParse(formData);
        if (!result.success) {
            const fieldErrors = {};
            for (const err of result.error.errors) {
                if (err.path[0]) {
                    fieldErrors[err.path[0]] = err.message;
                }
            }
            setErrors(fieldErrors);
            toast({
                title: "Form Validation Error",
                description: result.error.errors[0].message,
                variant: "destructive",
            });
            return;
        }
        setErrors({});
        // Simulate form submission
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            toast({
                title: "Message Sent",
                description: "We've received your message and will get back to you soon.",
            });
            // Reset form
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
            });
        }, 1500);
    };
    // Handle sending messages to the AI chat assistant
    const handleSendMessage = async (message) => {
        try {
            const response = await fetch("https://ziontechgroup.functions.supabase.co/functions/v1/ai-chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages: [{ role: "user", content: message }]
                }),
            });
            if (!response.ok) {
                throw new Error("Failed to get response from AI assistant");
            }
            return Promise.resolve();
        }
        catch (error) {
            console.error("Error in AI chat:", error);
            toast({
                title: "Chat Error",
                description: "There was an error communicating with our AI assistant. Please try again.",
                variant: "destructive"
            });
            return Promise.resolve();
        }
    };
    const offices = [
        {
            name: "Headquarters",
            address: "123 Tech Avenue, San Francisco, CA 94105",
            phone: "+1 302 464 0950",
            email: "commercial@ziontechgroup.com"
        },
        {
            name: "East Coast Office",
            address: "456 Innovation Street, New York, NY 10001",
            phone: "+1 302 464 0950",
            email: "commercial@ziontechgroup.com"
        }
    ];
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Contact Zion - Get in Touch", description: "Have questions or want to learn more? Contact the Zion team about our AI and tech marketplace platform.", keywords: "contact Zion, AI marketplace support, tech platform contact", canonical: "https://ziontechgroup.com/contact" }), _jsx("main", { className: "min-h-screen bg-zion-blue pt-24 pb-20", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx(GradientHeading, { children: "Contact Us" }), _jsx("p", { className: "mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto", children: "Have questions or want to learn more? We'd love to hear from you." })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-6", children: "Get in Touch" }), _jsx("p", { className: "text-zion-slate-light text-lg mb-8", children: "Whether you have a question about our platform, pricing, or anything else, our team is ready to answer all your questions." }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 sm:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "block text-white mb-2", children: "Your Name" }), _jsx(Input, { id: "name", name: "name", value: formData.name, onChange: handleChange, className: `bg-zion-blue-dark border-zion-blue-light text-white ${errors.name ? 'border-red-500 focus-visible:ring-red-500' : ''}`, placeholder: "John Doe", required: true }), errors.name && (_jsx("p", { className: "mt-1 text-sm text-red-500", children: errors.name }))] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-white mb-2", children: "Email Address" }), _jsx(Input, { id: "email", name: "email", type: "email", value: formData.email, onChange: handleChange, className: `bg-zion-blue-dark border-zion-blue-light text-white ${errors.email ? 'border-red-500 focus-visible:ring-red-500' : ''}`, placeholder: "john@example.com", required: true }), errors.email && (_jsx("p", { className: "mt-1 text-sm text-red-500", children: errors.email }))] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "subject", className: "block text-white mb-2", children: "Subject" }), _jsx(Input, { id: "subject", name: "subject", value: formData.subject, onChange: handleChange, className: `bg-zion-blue-dark border-zion-blue-light text-white ${errors.subject ? 'border-red-500 focus-visible:ring-red-500' : ''}`, placeholder: "How can we help you?", required: true }), errors.subject && (_jsx("p", { className: "mt-1 text-sm text-red-500", children: errors.subject }))] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "message", className: "block text-white mb-2", children: "Message" }), _jsx(Textarea, { id: "message", name: "message", value: formData.message, onChange: handleChange, className: `bg-zion-blue-dark border-zion-blue-light text-white min-h-[150px] ${errors.message ? 'border-red-500 focus-visible:ring-red-500' : ''}`, placeholder: "Tell us what you'd like to know...", required: true }), errors.message && (_jsx("p", { className: "mt-1 text-sm text-red-500", children: errors.message }))] }), _jsx(Button, { type: "submit", className: "w-full bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple", disabled: isSubmitting, children: isSubmitting ? "Sending..." : "Send Message" })] })] }), _jsxs("div", { children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-6", children: "Our Offices" }), _jsx("div", { className: "grid grid-cols-1 gap-6", children: offices.map((office, index) => (_jsxs(Card, { className: "bg-zion-blue-dark border border-zion-blue-light p-6", children: [_jsx("h3", { className: "text-xl font-bold text-white mb-3", children: office.name }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-start", children: [_jsx(MapPin, { className: "w-5 h-5 text-zion-cyan mr-3 mt-1 flex-shrink-0" }), _jsx("span", { className: "text-zion-slate-light", children: office.address })] }), _jsxs("div", { className: "flex items-center", children: [_jsx(Phone, { className: "w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" }), _jsx("span", { className: "text-zion-slate-light", children: office.phone })] }), _jsxs("div", { className: "flex items-center", children: [_jsx(Mail, { className: "w-5 h-5 text-zion-cyan mr-3 flex-shrink-0" }), _jsx("a", { href: `mailto:${office.email}`, className: "text-zion-cyan hover:underline", children: office.email })] })] })] }, index))) }), _jsx("div", { className: "mt-8 bg-zion-blue-dark border border-zion-blue-light rounded-lg overflow-hidden", children: _jsx("iframe", { src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12615.297199052566!2d-122.41941455!3d37.7749295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858080b9b0a169%3A0x1ac94fe0532d9e81!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2suk!4v1651234567890!5m2!1sen!2suk", width: "100%", height: "300", style: { border: 0 }, allowFullScreen: true, loading: "lazy", referrerPolicy: "no-referrer-when-downgrade", title: "Zion Office Locations" }) }), _jsx("div", { className: "mt-8", children: _jsxs(Card, { className: "bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 p-6", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "bg-zion-purple/20 p-3 rounded-full mr-4", children: _jsx(MessageSquare, { className: "h-6 w-6 text-zion-purple" }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-white text-lg font-bold", children: "Live AI Support" }), _jsx("p", { className: "text-zion-slate-light", children: "Get instant answers to your questions" })] })] }), _jsx(Button, { onClick: () => setIsChatOpen(true), className: "w-full mt-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple", children: "Chat With Our AI Assistant" })] }) })] })] }), _jsxs("div", { className: "bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-6", children: "Need immediate assistance?" }), _jsx("p", { className: "text-zion-slate-light text-lg mb-8 max-w-3xl mx-auto", children: "Our customer support team is available 24/7 to help you with any questions." }), _jsxs("div", { className: "flex flex-col sm:flex-row justify-center gap-4", children: [_jsxs(Button, { onClick: () => setIsChatOpen(true), className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple", children: [_jsx(MessageSquare, { className: "mr-2 h-5 w-5" }), "Chat With AI"] }), _jsx(Button, { variant: "outline", className: "border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10", asChild: true, children: _jsxs("a", { href: "mailto:support@ziontechgroup.com", children: [_jsx(Mail, { className: "mr-2 h-5 w-5" }), "Email Support"] }) })] })] })] }) }), isChatOpen && (_jsx(ChatAssistant, { isOpen: isChatOpen, onClose: () => setIsChatOpen(false), recipient: {
                    id: 'ai-assistant',
                    name: 'AI Assistant',
                    avatarUrl: 'https://placehold.co/64x64?text=AI',
                    role: 'Support Bot'
                }, onSendMessage: handleSendMessage }))] }));
}
