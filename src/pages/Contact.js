import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, MessageSquare, Globe, Send, CheckCircle, AlertCircle } from 'lucide-react';
export function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        phone: '',
        service: '',
        message: '',
        budget: '',
        timeline: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState('idle');
    const handleInputChange = (e) => {
        setFormData(prev => (Object.assign(Object.assign({}, prev), { [e.target.name]: e.target.value })));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitStatus('success');
            setFormData({
                name: '',
                email: '',
                company: '',
                phone: '',
                service: '',
                message: '',
                budget: '',
                timeline: ''
            });
            // Reset success message after 5 seconds
            setTimeout(() => setSubmitStatus('idle'), 5000);
        }, 2000);
    };
    const contactMethods = [
        {
            icon: Phone,
            title: 'Phone',
            value: '+1 302 464 0950',
            description: 'Available 24/7 for urgent inquiries',
            action: 'tel:+13024640950',
            color: 'from-zion-cyan to-zion-cyan-dark'
        },
        {
            icon: Mail,
            title: 'Email',
            value: 'kleber@ziontechgroup.com',
            description: 'Get a response within 2 hours',
            action: 'mailto:kleber@ziontechgroup.com',
            color: 'from-zion-purple to-zion-purple-dark'
        },
        {
            icon: MapPin,
            title: 'Office',
            value: '364 E Main St STE 1008, Middletown DE 19709',
            description: 'Visit us for in-person consultations',
            action: 'https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709',
            color: 'from-zion-cyan to-zion-purple'
        },
        {
            icon: Clock,
            title: 'Business Hours',
            value: 'Mon-Fri: 9AM-6PM EST',
            description: 'Extended hours available by appointment',
            action: null,
            color: 'from-zion-purple to-zion-cyan'
        }
    ];
    const services = [
        'AI & Machine Learning',
        'Cybersecurity',
        'Cloud Computing',
        'Web Development',
        'Mobile Development',
        'Data Analytics',
        'DevOps & Automation',
        'Blockchain',
        'IoT Solutions',
        'Digital Marketing',
        'IT Consulting',
        'Software Testing',
        'Other'
    ];
    const budgets = [
        'Under $10,000',
        '$10,000 - $25,000',
        '$25,000 - $50,000',
        '$50,000 - $100,000',
        '$100,000 - $250,000',
        '$250,000+'
    ];
    const timelines = [
        'Immediate (1-2 weeks)',
        'Quick (1-2 months)',
        'Standard (3-6 months)',
        'Extended (6+ months)',
        'Flexible'
    ];
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light text-white", children: [_jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [_jsx("div", { className: "absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float" }), _jsx("div", { className: "absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float", style: { animationDelay: '2s' } }), _jsx("div", { className: "absolute bottom-20 left-1/3 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-float", style: { animationDelay: '4s' } })] }), _jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "text-center mb-20", children: [_jsx("h1", { className: "text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent animate-neon-pulse", children: "Get in Touch" }), _jsx("p", { className: "text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto", children: "Ready to transform your business with cutting-edge technology? Let's discuss how our solutions can drive innovation and growth for your organization." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4 text-sm", children: [_jsx("span", { className: "px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-cyan", children: "24/7 Support" }), _jsx("span", { className: "px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan", children: "Free Consultation" }), _jsx("span", { className: "px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-cyan", children: "Global Reach" })] })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.2 }, className: "mb-20", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: contactMethods.map((method, index) => {
                                const IconComponent = method.icon;
                                return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.3 + index * 0.1 }, className: "bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300 text-center", children: [_jsx("div", { className: `w-16 h-16 bg-gradient-to-br ${method.color} rounded-2xl mx-auto mb-4 flex items-center justify-center text-white`, children: _jsx(IconComponent, { className: "w-8 h-8" }) }), _jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: method.title }), _jsx("p", { className: "text-zion-cyan font-medium mb-2", children: method.value }), _jsx("p", { className: "text-zion-slate-light text-sm mb-4", children: method.description }), method.action && (_jsx("a", { href: method.action, target: method.action.startsWith('http') ? '_blank' : '_self', rel: method.action.startsWith('http') ? 'noopener noreferrer' : '', className: "inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors", children: method.action.startsWith('tel:') ? 'Call Now' :
                                                method.action.startsWith('mailto:') ? 'Send Email' : 'Get Directions' }))] }, method.title));
                            }) }) }), _jsxs("div", { className: "grid lg:grid-cols-2 gap-12", children: [_jsx(motion.div, { initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8, delay: 0.4 }, className: "order-2 lg:order-1", children: _jsxs("div", { className: "bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8", children: [_jsxs("h2", { className: "text-2xl font-bold text-white mb-6 flex items-center gap-3", children: [_jsx(MessageSquare, { className: "w-6 h-6 text-zion-cyan" }), "Send us a Message"] }), submitStatus === 'success' && (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, className: "mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg flex items-center gap-3", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-green-400" }), _jsx("span", { className: "text-green-400", children: "Thank you! Your message has been sent successfully. We'll get back to you within 2 hours." })] })), submitStatus === 'error' && (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, className: "mb-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg flex items-center gap-3", children: [_jsx(AlertCircle, { className: "w-5 h-5 text-red-400" }), _jsx("span", { className: "text-red-400", children: "Something went wrong. Please try again or contact us directly." })] })), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-zion-slate-light text-sm font-medium mb-2", children: "Full Name *" }), _jsx("input", { type: "text", name: "name", value: formData.name, onChange: handleInputChange, required: true, className: "w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20", placeholder: "Enter your full name" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-zion-slate-light text-sm font-medium mb-2", children: "Email *" }), _jsx("input", { type: "email", name: "email", value: formData.email, onChange: handleInputChange, required: true, className: "w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20", placeholder: "Enter your email" })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-zion-slate-light text-sm font-medium mb-2", children: "Company" }), _jsx("input", { type: "text", name: "company", value: formData.company, onChange: handleInputChange, className: "w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20", placeholder: "Enter company name" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-zion-slate-light text-sm font-medium mb-2", children: "Phone" }), _jsx("input", { type: "tel", name: "phone", value: formData.phone, onChange: handleInputChange, className: "w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20", placeholder: "Enter phone number" })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-zion-slate-light text-sm font-medium mb-2", children: "Service Interest *" }), _jsxs("select", { name: "service", value: formData.service, onChange: handleInputChange, required: true, className: "w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20", children: [_jsx("option", { value: "", children: "Select a service" }), services.map(service => (_jsx("option", { value: service, children: service }, service)))] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-zion-slate-light text-sm font-medium mb-2", children: "Budget Range" }), _jsxs("select", { name: "budget", value: formData.budget, onChange: handleInputChange, className: "w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20", children: [_jsx("option", { value: "", children: "Select budget range" }), budgets.map(budget => (_jsx("option", { value: budget, children: budget }, budget)))] })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-zion-slate-light text-sm font-medium mb-2", children: "Timeline" }), _jsxs("select", { name: "timeline", value: formData.timeline, onChange: handleInputChange, className: "w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20", children: [_jsx("option", { value: "", children: "Select timeline" }), timelines.map(timeline => (_jsx("option", { value: timeline, children: timeline }, timeline)))] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-zion-slate-light text-sm font-medium mb-2", children: "Message *" }), _jsx("textarea", { name: "message", value: formData.message, onChange: handleInputChange, required: true, rows: 5, className: "w-full px-4 py-3 bg-zion-blue-dark/50 border border-zion-purple/30 rounded-lg text-white placeholder-zion-slate-light focus:outline-none focus:border-zion-cyan focus:ring-2 focus:ring-zion-cyan/20 resize-none", placeholder: "Tell us about your project, requirements, or any questions you have..." })] }), _jsx(motion.button, { type: "submit", disabled: isSubmitting, whileHover: { scale: 1.02 }, whileTap: { scale: 0.98 }, className: "w-full px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed", children: isSubmitting ? (_jsxs(_Fragment, { children: [_jsx("div", { className: "w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" }), "Sending Message..."] })) : (_jsxs(_Fragment, { children: [_jsx(Send, { className: "w-5 h-5" }), "Send Message"] })) })] })] }) }), _jsx(motion.div, { initial: { opacity: 0, x: 20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.8, delay: 0.6 }, className: "order-1 lg:order-2", children: _jsxs("div", { className: "space-y-8", children: [_jsxs("div", { className: "bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8", children: [_jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-3", children: [_jsx(MapPin, { className: "w-5 h-5 text-zion-cyan" }), "Our Office"] }), _jsxs("div", { className: "space-y-3 text-zion-slate-light", children: [_jsx("p", { className: "text-lg font-medium text-white", children: "Zion Tech Group" }), _jsx("p", { children: "364 E Main St STE 1008" }), _jsx("p", { children: "Middletown, DE 19709" }), _jsx("p", { children: "United States" })] }), _jsxs("a", { href: "https://maps.google.com/?q=364+E+Main+St+STE+1008+Middletown+DE+19709", target: "_blank", rel: "noopener noreferrer", className: "inline-flex items-center gap-2 text-zion-cyan hover:text-white transition-colors mt-4", children: [_jsx(Globe, { className: "w-4 h-4" }), "View on Google Maps"] })] }), _jsxs("div", { className: "bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8", children: [_jsxs("h3", { className: "text-xl font-semibold text-white mb-4 flex items-center gap-3", children: [_jsx(Clock, { className: "w-5 h-5 text-zion-cyan" }), "Business Hours"] }), _jsxs("div", { className: "space-y-3 text-zion-slate-light", children: [_jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Monday - Friday" }), _jsx("span", { className: "text-white", children: "9:00 AM - 6:00 PM EST" })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Saturday" }), _jsx("span", { className: "text-white", children: "10:00 AM - 4:00 PM EST" })] }), _jsxs("div", { className: "flex justify-between", children: [_jsx("span", { children: "Sunday" }), _jsx("span", { className: "text-white", children: "By Appointment" })] }), _jsx("div", { className: "pt-3 border-t border-zion-purple/20", children: _jsx("p", { className: "text-zion-cyan text-sm", children: "Emergency support available 24/7 for critical issues" }) })] })] }), _jsxs("div", { className: "bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8", children: [_jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Why Choose Zion Tech Group?" }), _jsxs("div", { className: "space-y-3 text-zion-slate-light", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-zion-cyan flex-shrink-0" }), _jsx("span", { children: "10+ years of industry experience" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-zion-cyan flex-shrink-0" }), _jsx("span", { children: "500+ successful projects delivered" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-zion-cyan flex-shrink-0" }), _jsx("span", { children: "Global team of experts" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-zion-cyan flex-shrink-0" }), _jsx("span", { children: "24/7 support and maintenance" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-zion-cyan flex-shrink-0" }), _jsx("span", { children: "Competitive pricing and flexible terms" })] })] })] })] }) })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, className: "mt-20 text-center", children: _jsxs("div", { className: "bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4 text-white", children: "Ready to Start Your Project?" }), _jsx("p", { className: "text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto", children: "Let's discuss your requirements and create a customized solution that drives results." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300", children: "Schedule Free Consultation" }), _jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300", children: "Download Brochure" })] })] }) })] })] }));
}
