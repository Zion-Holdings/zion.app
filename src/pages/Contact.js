import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, ArrowRight, MessageSquare, Building, Globe, Users, Shield } from 'lucide-react';
export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        serviceInterest: '',
        budget: '',
        timeline: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => (Object.assign(Object.assign({}, prev), { [name]: value })));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 2000));
        setIsSubmitting(false);
        setIsSubmitted(true);
        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                serviceInterest: '',
                budget: '',
                timeline: '',
                message: ''
            });
        }, 3000);
    };
    const contactMethods = [
        {
            icon: Phone,
            title: 'Phone',
            value: '+1 302 464 0950',
            description: 'Available 24/7 for urgent inquiries',
            action: 'Call Now',
            href: 'tel:+13024640950'
        },
        {
            icon: Mail,
            title: 'Email',
            value: 'kleber@ziontechgroup.com',
            description: 'Get a response within 2 hours',
            action: 'Send Email',
            href: 'mailto:kleber@ziontechgroup.com'
        },
        {
            icon: MapPin,
            title: 'Office',
            value: '364 E Main St STE 1008, Middletown DE 19709',
            description: 'Visit us for in-person consultations',
            action: 'Get Directions',
            href: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'
        },
        {
            icon: Clock,
            title: 'Business Hours',
            value: 'Monday - Friday: 9:00 AM - 6:00 PM EST',
            description: 'Weekend appointments available',
            action: 'Schedule Meeting',
            href: '#schedule'
        }
    ];
    const whyChooseUs = [
        {
            icon: Users,
            title: 'Expert Team',
            description: '25+ certified professionals with 10+ years of experience'
        },
        {
            icon: Shield,
            title: 'Trusted Partner',
            description: '500+ successful projects delivered worldwide'
        },
        {
            icon: Globe,
            title: 'Global Reach',
            description: 'Serving clients across 50+ countries'
        },
        {
            icon: Building,
            title: 'Proven Results',
            description: '300% average efficiency improvement for clients'
        }
    ];
    if (isSubmitted) {
        return (_jsx("div", { className: "min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light text-white flex items-center justify-center", children: _jsxs(motion.div, { initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, className: "text-center", children: [_jsx("div", { className: "w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6", children: _jsx(CheckCircle, { className: "w-12 h-12 text-white" }) }), _jsx("h1", { className: "text-4xl font-bold mb-4", children: "Message Sent Successfully!" }), _jsx("p", { className: "text-xl text-zion-slate-light mb-8", children: "Thank you for contacting us. We'll get back to you within 24 hours." }), _jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, onClick: () => setIsSubmitted(false), className: "px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300", children: "Send Another Message" })] }) }));
    }
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light text-white", children: [_jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [_jsx("div", { className: "absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float" }), _jsx("div", { className: "absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float", style: { animationDelay: '2s' } }), _jsx("div", { className: "absolute bottom-20 left-1/3 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-float", style: { animationDelay: '4s' } })] }), _jsxs("div", { className: "relative z-10", children: [_jsx("section", { className: "pt-32 pb-20 px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "max-w-7xl mx-auto text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, children: [_jsx("h1", { className: "text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent", children: "Get in Touch" }), _jsx("p", { className: "text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto", children: "Ready to transform your business with cutting-edge AI and technology solutions? Let's discuss how we can help you achieve your goals." })] }) }) }), _jsx("section", { className: "py-24 px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent", children: "Multiple Ways to Connect" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "Choose the method that works best for you. We're here to help 24/7." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: contactMethods.map((method, index) => {
                                        const IconComponent = method.icon;
                                        return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, whileHover: { y: -10 }, className: "bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 text-center", children: [_jsx("div", { className: "w-16 h-16 bg-zion-blue-dark/50 border border-zion-blue-light/20 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(IconComponent, { className: "w-8 h-8 text-zion-cyan" }) }), _jsx("h3", { className: "text-xl font-semibold mb-3 text-white", children: method.title }), _jsx("p", { className: "text-zion-cyan font-medium mb-2", children: method.value }), _jsx("p", { className: "text-zion-slate-light text-sm mb-4", children: method.description }), _jsxs("a", { href: method.href, className: "inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors text-sm font-medium", children: [method.action, " ", _jsx(ArrowRight, { className: "w-4 h-4 ml-1" })] })] }, method.title));
                                    }) })] }) }), _jsx("section", { className: "py-24 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30", children: _jsxs("div", { className: "max-w-4xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent", children: "Send Us a Message" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-2xl mx-auto", children: "Tell us about your project and we'll get back to you with a customized solution." })] }), _jsxs(motion.form, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.2 }, viewport: { once: true }, onSubmit: handleSubmit, className: "bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-blue-light/20 rounded-2xl p-8", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "name", className: "block text-sm font-medium text-zion-slate-light mb-2", children: "Full Name *" }), _jsx("input", { type: "text", id: "name", name: "name", value: formData.name, onChange: handleChange, required: true, className: "w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-blue-light/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors", placeholder: "Enter your full name" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium text-zion-slate-light mb-2", children: "Email Address *" }), _jsx("input", { type: "email", id: "email", name: "email", value: formData.email, onChange: handleChange, required: true, className: "w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-blue-light/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors", placeholder: "Enter your email address" })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "company", className: "block text-sm font-medium text-zion-slate-light mb-2", children: "Company" }), _jsx("input", { type: "text", id: "company", name: "company", value: formData.company, onChange: handleChange, className: "w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-blue-light/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors", placeholder: "Enter your company name" })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "phone", className: "block text-sm font-medium text-zion-slate-light mb-2", children: "Phone Number" }), _jsx("input", { type: "tel", id: "phone", name: "phone", value: formData.phone, onChange: handleChange, className: "w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-blue-light/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors", placeholder: "Enter your phone number" })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "serviceInterest", className: "block text-sm font-medium text-zion-slate-light mb-2", children: "Service Interest" }), _jsxs("select", { id: "serviceInterest", name: "serviceInterest", value: formData.serviceInterest, onChange: handleChange, className: "w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-blue-light/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors", children: [_jsx("option", { value: "", children: "Select a service" }), _jsx("option", { value: "ai-ml", children: "AI & Machine Learning" }), _jsx("option", { value: "cybersecurity", children: "Cybersecurity" }), _jsx("option", { value: "cloud-computing", children: "Cloud Computing" }), _jsx("option", { value: "web-development", children: "Web Development" }), _jsx("option", { value: "mobile-development", children: "Mobile Development" }), _jsx("option", { value: "data-analytics", children: "Data Analytics" }), _jsx("option", { value: "devops", children: "DevOps & Automation" }), _jsx("option", { value: "blockchain", children: "Blockchain & Web3" }), _jsx("option", { value: "iot", children: "IoT Solutions" }), _jsx("option", { value: "consulting", children: "Technology Consulting" })] })] }), _jsxs("div", { children: [_jsx("label", { htmlFor: "budget", className: "block text-sm font-medium text-zion-slate-light mb-2", children: "Budget Range" }), _jsxs("select", { id: "budget", name: "budget", value: formData.budget, onChange: handleChange, className: "w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-blue-light/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors", children: [_jsx("option", { value: "", children: "Select budget range" }), _jsx("option", { value: "under-10k", children: "Under $10,000" }), _jsx("option", { value: "10k-50k", children: "$10,000 - $50,000" }), _jsx("option", { value: "50k-100k", children: "$50,000 - $100,000" }), _jsx("option", { value: "100k-500k", children: "$100,000 - $500,000" }), _jsx("option", { value: "over-500k", children: "Over $500,000" })] })] })] }), _jsxs("div", { className: "mb-6", children: [_jsx("label", { htmlFor: "timeline", className: "block text-sm font-medium text-zion-slate-light mb-2", children: "Project Timeline" }), _jsxs("select", { id: "timeline", name: "timeline", value: formData.timeline, onChange: handleChange, className: "w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-blue-light/20 rounded-lg text-white focus:border-zion-cyan focus:outline-none transition-colors", children: [_jsx("option", { value: "", children: "Select timeline" }), _jsx("option", { value: "asap", children: "ASAP" }), _jsx("option", { value: "1-3-months", children: "1-3 months" }), _jsx("option", { value: "3-6-months", children: "3-6 months" }), _jsx("option", { value: "6-12-months", children: "6-12 months" }), _jsx("option", { value: "over-12-months", children: "Over 12 months" })] })] }), _jsxs("div", { className: "mb-8", children: [_jsx("label", { htmlFor: "message", className: "block text-sm font-medium text-zion-slate-light mb-2", children: "Project Details *" }), _jsx("textarea", { id: "message", name: "message", value: formData.message, onChange: handleChange, required: true, rows: 6, className: "w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-blue-light/20 rounded-lg text-white placeholder-zion-slate-light focus:border-zion-cyan focus:outline-none transition-colors resize-none", placeholder: "Describe your project requirements, goals, and any specific challenges you're facing..." })] }), _jsx(motion.button, { type: "submit", disabled: isSubmitting, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, className: "w-full px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2", children: isSubmitting ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" }), "Sending Message..."] })) : (_jsxs(_Fragment, { children: [_jsx(Send, { className: "w-5 h-5" }), "Send Message"] })) })] })] }) }), _jsx("section", { className: "py-24 px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent", children: "Why Choose Zion Tech Group?" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "We're not just another tech company - we're your strategic partner in digital transformation." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: whyChooseUs.map((item, index) => {
                                        const IconComponent = item.icon;
                                        return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, whileHover: { y: -10 }, className: "bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 text-center", children: [_jsx("div", { className: "w-16 h-16 bg-zion-blue-dark/50 border border-zion-blue-light/20 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(IconComponent, { className: "w-8 h-8 text-zion-cyan" }) }), _jsx("h3", { className: "text-xl font-semibold mb-3 text-white", children: item.title }), _jsx("p", { className: "text-zion-slate-light", children: item.description })] }, item.title));
                                    }) })] }) }), _jsx("section", { className: "py-24 px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "max-w-4xl mx-auto text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent", children: "Ready to Get Started?" }), _jsx("p", { className: "text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto", children: "Don't wait to transform your business. Contact us today and let's discuss how we can help you achieve your technology goals." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center", children: [_jsx(MessageSquare, { className: "w-5 h-5" }), "Start a Conversation"] }), _jsxs(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center", children: [_jsx(Phone, { className: "w-5 h-5" }), "Call Now"] })] })] }) }) })] })] }));
}
