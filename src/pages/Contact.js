import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, CheckCircle, MessageSquare, Globe, Building } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Card } from '../components/ui/card';
import { Badge } from '../components/ui/badge';
import FuturisticNeonButton from '../components/ui/FuturisticNeonButton';
import FuturisticAnimatedBackground from '../components/ui/FuturisticAnimatedBackground';
import SEO from '../components/SEO';
const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);
    const handleInputChange = (e) => {
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
                service: '',
                message: ''
            });
        }, 3000);
    };
    const contactMethods = [
        {
            icon: Phone,
            title: 'Phone',
            value: '+1 (302) 464-0950',
            description: 'Call us directly for immediate assistance',
            action: () => window.location.href = 'tel:+13024640950',
            color: 'from-green-500 to-emerald-500'
        },
        {
            icon: Mail,
            title: 'Email',
            value: 'kleber@ziontechgroup.com',
            description: 'Send us a detailed message',
            action: () => window.location.href = 'mailto:kleber@ziontechgroup.com',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: MapPin,
            title: 'Address',
            value: '364 E Main St STE 1008, Middletown DE 19709',
            description: 'Visit our office for in-person meetings',
            action: () => window.open('https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709'),
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Clock,
            title: 'Business Hours',
            value: 'Mon-Fri: 9:00 AM - 6:00 PM EST',
            description: 'We\'re available during business hours',
            action: null,
            color: 'from-orange-500 to-red-500'
        }
    ];
    const services = [
        'AI & Machine Learning',
        'Cloud Migration',
        'Cybersecurity',
        'Digital Transformation',
        'Web Development',
        'Mobile Development',
        'IT Consulting',
        'Data Analytics',
        'Business Process Automation',
        'Custom Software Development'
    ];
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark relative overflow-hidden", children: [_jsx(SEO, { title: "Contact Us - Get Expert Technology Consultation | Zion Tech Group", description: "Ready to transform your business? Contact Zion Tech Group for expert technology consultation, AI solutions, and digital transformation services. Call +1 (302) 464-0950.", canonical: "/contact" }), _jsx(FuturisticAnimatedBackground, { intensity: "medium" }), _jsx("section", { className: "relative z-10 pt-32 pb-20 px-4", children: _jsx("div", { className: "max-w-7xl mx-auto text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, children: [_jsx(Badge, { className: "mb-6 bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30", children: "\uD83D\uDCDE Get In Touch" }), _jsxs(motion.h1, { className: "text-5xl md:text-7xl font-bold text-white mb-8 leading-tight", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 1, delay: 0.2 }, children: ["Let's Transform Your", _jsx("br", {}), _jsx("span", { className: "bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-pink bg-clip-text text-transparent", children: "Business Together" })] }), _jsx(motion.p, { className: "text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: "Ready to take your business to the next level? Our team of technology experts is here to help you implement innovative solutions that drive growth and competitive advantage." })] }) }) }), _jsx("section", { className: "relative z-10 py-20 px-4", children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: contactMethods.map((method, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, whileHover: { y: -10, scale: 1.02 }, className: "group", children: _jsxs(Card, { className: `bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 h-full p-6 text-center cursor-pointer ${method.action ? 'hover:shadow-2xl hover:shadow-zion-cyan/20' : ''}`, onClick: method.action || undefined, children: [_jsx("div", { className: `w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${method.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`, children: _jsx(method.icon, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: "text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors", children: method.title }), _jsx("p", { className: "text-zion-cyan font-medium mb-2", children: method.value }), _jsx("p", { className: "text-zion-slate-light text-sm leading-relaxed", children: method.description })] }) }, method.title))) }) }) }), _jsx("section", { className: "relative z-10 py-20 px-4", children: _jsx("div", { className: "max-w-4xl mx-auto", children: _jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, children: _jsxs(Card, { className: "bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/30 p-8 md:p-12", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-4", children: "Send Us a Message" }), _jsx("p", { className: "text-zion-slate-light text-lg", children: "Tell us about your project and we'll get back to you within 2 hours" })] }), isSubmitted ? (_jsxs(motion.div, { className: "text-center py-12", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.5 }, children: [_jsx("div", { className: "w-20 h-20 mx-auto mb-6 bg-green-500/20 rounded-full flex items-center justify-center", children: _jsx(CheckCircle, { className: "w-10 h-10 text-green-400" }) }), _jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "Message Sent Successfully!" }), _jsx("p", { className: "text-zion-slate-light", children: "Thank you for contacting us. We'll get back to you within 2 hours." })] })) : (_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-white font-medium mb-2", children: "Full Name *" }), _jsx(Input, { type: "text", name: "name", value: formData.name, onChange: handleInputChange, required: true, className: "bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan", placeholder: "Enter your full name" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-white font-medium mb-2", children: "Email Address *" }), _jsx(Input, { type: "email", name: "email", value: formData.email, onChange: handleInputChange, required: true, className: "bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan", placeholder: "Enter your email" })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-white font-medium mb-2", children: "Company Name" }), _jsx(Input, { type: "text", name: "company", value: formData.company, onChange: handleInputChange, className: "bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan", placeholder: "Enter your company name" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-white font-medium mb-2", children: "Phone Number" }), _jsx(Input, { type: "tel", name: "phone", value: formData.phone, onChange: handleInputChange, className: "bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan", placeholder: "Enter your phone number" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-white font-medium mb-2", children: "Service of Interest" }), _jsxs("select", { name: "service", value: formData.service, onChange: handleInputChange, className: "w-full bg-zion-slate-dark/50 border border-zion-blue-light/30 text-white rounded-md px-3 py-2 focus:border-zion-cyan focus:outline-none", children: [_jsx("option", { value: "", children: "Select a service" }), services.map(service => (_jsx("option", { value: service, children: service }, service)))] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-white font-medium mb-2", children: "Project Details *" }), _jsx(Textarea, { name: "message", value: formData.message, onChange: handleInputChange, required: true, rows: 6, className: "bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan resize-none", placeholder: "Tell us about your project, goals, and how we can help..." })] }), _jsx("div", { className: "text-center", children: _jsx(FuturisticNeonButton, { type: "submit", disabled: isSubmitting, size: "lg", className: "text-lg px-8 py-4", children: isSubmitting ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "w-5 h-5 border-2 border-current border-t-transparent rounded-full animate-spin mr-2" }), "Sending Message..."] })) : (_jsxs(_Fragment, { children: [_jsx(Send, { className: "w-5 h-5 mr-2" }), "Send Message"] })) }) })] }))] }) }) }) }), _jsx("section", { className: "relative z-10 py-20 px-4 bg-zion-blue-dark/30", children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, children: [_jsxs("div", { className: "text-center mb-16", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: ["Why Choose ", _jsx("span", { className: "text-zion-cyan", children: "Zion Tech Group" }), "?"] }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "We're not just another technology company. We're your strategic partner in digital transformation and business innovation." })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.1 }, viewport: { once: true }, className: "text-center", children: [_jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-zion-cyan/20 rounded-full flex items-center justify-center", children: _jsx(Building, { className: "w-8 h-8 text-zion-cyan" }) }), _jsx("h3", { className: "text-xl font-bold text-white mb-3", children: "Enterprise Experience" }), _jsx("p", { className: "text-zion-slate-light", children: "Over 10 years of experience working with Fortune 500 companies and startups alike, delivering scalable solutions that grow with your business." })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.2 }, viewport: { once: true }, className: "text-center", children: [_jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-zion-cyan/20 rounded-full flex items-center justify-center", children: _jsx(Globe, { className: "w-8 h-8 text-zion-cyan" }) }), _jsx("h3", { className: "text-xl font-bold text-white mb-3", children: "Global Reach" }), _jsx("p", { className: "text-zion-slate-light", children: "Serving clients worldwide with remote-first approach, ensuring quality delivery regardless of your location or timezone." })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.3 }, viewport: { once: true }, className: "text-center", children: [_jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-zion-cyan/20 rounded-full flex items-center justify-center", children: _jsx(MessageSquare, { className: "w-8 h-8 text-zion-cyan" }) }), _jsx("h3", { className: "text-xl font-bold text-white mb-3", children: "24/7 Support" }), _jsx("p", { className: "text-zion-slate-light", children: "Round-the-clock support and maintenance, ensuring your systems run smoothly and your business never stops growing." })] })] })] }) }) }), _jsx("section", { className: "relative z-10 py-20 px-4", children: _jsx("div", { className: "max-w-4xl mx-auto text-center", children: _jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, children: _jsxs(Card, { className: "bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple-dark/50 backdrop-blur-lg border-zion-cyan/30 p-12", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Ready to Get Started?" }), _jsx("p", { className: "text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto", children: "Don't wait to transform your business. Contact us today and let's discuss how we can help you achieve your technology goals." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(FuturisticNeonButton, { onClick: () => window.location.href = 'tel:+13024640950', size: "lg", className: "text-lg px-8 py-4", children: "Call Now" }), _jsx(Button, { variant: "outline", size: "lg", onClick: () => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=Business Consultation Request', className: "border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan/10 hover:border-zion-cyan text-lg px-8 py-4", children: "Schedule Consultation" })] })] }) }) }) })] }));
};
export default Contact;
