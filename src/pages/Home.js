import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Users, Award, Globe, Zap, Brain, Shield, Cloud, Code, Rocket, Play } from 'lucide-react';
export function Home() {
    const featuredServices = [
        {
            title: 'AI & Machine Learning',
            description: 'Revolutionary AI solutions that transform business operations and drive innovation.',
            icon: Brain,
            color: 'from-zion-cyan to-zion-purple',
            link: '/services'
        },
        {
            title: 'Cybersecurity',
            description: 'Advanced security solutions protecting your digital assets and infrastructure.',
            icon: Shield,
            color: 'from-zion-purple to-zion-cyan',
            link: '/services'
        },
        {
            title: 'Cloud Computing',
            description: 'Scalable cloud solutions that optimize performance and reduce costs.',
            icon: Cloud,
            color: 'from-zion-cyan to-zion-purple',
            link: '/services'
        },
        {
            title: 'Web Development',
            description: 'Modern, responsive web applications built with cutting-edge technologies.',
            icon: Code,
            color: 'from-zion-purple to-zion-cyan',
            link: '/services'
        }
    ];
    const stats = [
        { label: 'Years of Experience', value: '10+', icon: Award },
        { label: 'Projects Completed', value: '500+', icon: Star },
        { label: 'Global Clients', value: '50+', icon: Globe },
        { label: 'Team Members', value: '25+', icon: Users },
    ];
    const features = [
        {
            title: 'AI-Powered Solutions',
            description: 'Cutting-edge artificial intelligence that learns and adapts to your business needs.',
            icon: Brain,
            color: 'text-zion-cyan'
        },
        {
            title: '24/7 Support',
            description: 'Round-the-clock technical support and maintenance for all our solutions.',
            icon: Zap,
            color: 'text-zion-purple'
        },
        {
            title: 'Global Reach',
            description: 'Serving clients worldwide with localized solutions and support.',
            icon: Globe,
            color: 'text-zion-cyan'
        },
        {
            title: 'Innovation First',
            description: 'Constantly pushing boundaries with emerging technologies and creative solutions.',
            icon: Rocket,
            color: 'text-zion-purple'
        }
    ];
    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'CTO, TechCorp',
            content: 'Zion Tech Group transformed our entire IT infrastructure. Their AI solutions increased our efficiency by 300%.',
            rating: 5
        },
        {
            name: 'Michael Chen',
            role: 'CEO, InnovateLab',
            content: 'The cybersecurity implementation was flawless. We feel completely protected and confident in our digital operations.',
            rating: 5
        },
        {
            name: 'Emily Rodriguez',
            role: 'VP Engineering, DataFlow',
            content: 'Outstanding cloud migration service. Zero downtime and significant cost savings achieved.',
            rating: 5
        }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light text-white", children: [_jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [_jsx("div", { className: "absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float" }), _jsx("div", { className: "absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float", style: { animationDelay: '2s' } }), _jsx("div", { className: "absolute bottom-20 left-1/3 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-float", style: { animationDelay: '4s' } })] }), _jsxs("div", { className: "relative z-10", children: [_jsx("section", { className: "min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "max-w-7xl mx-auto text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, children: [_jsx("h1", { className: "text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent animate-neon-pulse", children: "Zion Tech Group" }), _jsx("p", { className: "text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto", children: "Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-12", children: [_jsxs(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center", children: ["Get Started", _jsx(ArrowRight, { className: "w-5 h-5" })] }), _jsxs(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center", children: [_jsx(Play, { className: "w-5 h-5" }), "Watch Demo"] })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto", children: stats.map((stat, index) => {
                                            const IconComponent = stat.icon;
                                            return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.3 + index * 0.1 }, className: "text-center", children: [_jsx("div", { className: "text-2xl md:text-3xl font-bold text-zion-cyan mb-2", children: stat.value }), _jsx("div", { className: "text-zion-slate-light text-sm", children: stat.label })] }, stat.label));
                                        }) })] }) }) }), _jsx("section", { className: "py-24 px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent", children: "Featured Services" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "Discover our cutting-edge solutions that are revolutionizing industries worldwide" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: featuredServices.map((service, index) => {
                                        const IconComponent = service.icon;
                                        return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, whileHover: { y: -10 }, className: "bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300 group", children: [_jsx("div", { className: `w-16 h-16 bg-gradient-to-r ${service.color} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`, children: _jsx(IconComponent, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: "text-xl font-semibold mb-3 text-white", children: service.title }), _jsx("p", { className: "text-zion-slate-light mb-4", children: service.description }), _jsxs(Link, { to: service.link, className: "inline-flex items-center text-zion-cyan hover:text-zion-cyan-light transition-colors group-hover:translate-x-1 transition-transform duration-300", children: ["Learn More ", _jsx(ArrowRight, { className: "w-4 h-4 ml-2" })] })] }, service.title));
                                    }) })] }) }), _jsx("section", { className: "py-24 px-4 sm:px-6 lg:px-8 bg-zion-blue-dark/30", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent", children: "Why Choose Zion Tech Group?" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "We combine cutting-edge technology with proven expertise to deliver exceptional results" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: features.map((feature, index) => {
                                        const IconComponent = feature.icon;
                                        return (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, className: "text-center", children: [_jsx("div", { className: `w-20 h-20 bg-zion-blue-dark/50 border border-zion-blue-light/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:border-zion-cyan/40 transition-all duration-300`, children: _jsx(IconComponent, { className: `w-10 h-10 ${feature.color}` }) }), _jsx("h3", { className: "text-xl font-semibold mb-3 text-white", children: feature.title }), _jsx("p", { className: "text-zion-slate-light", children: feature.description })] }, feature.title));
                                    }) })] }) }), _jsx("section", { className: "py-24 px-4 sm:px-6 lg:px-8", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent", children: "What Our Clients Say" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "Don't just take our word for it - hear from the businesses we've transformed" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: testimonials.map((testimonial, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, className: "bg-zion-blue-dark/50 backdrop-blur-sm border border-zion-blue-light/20 rounded-xl p-6 hover:border-zion-cyan/40 transition-all duration-300", children: [_jsx("div", { className: "flex items-center mb-4", children: [...Array(testimonial.rating)].map((_, i) => (_jsx(Star, { className: "w-5 h-5 text-yellow-400 fill-current" }, i))) }), _jsxs("p", { className: "text-zion-slate-light mb-4 italic", children: ["\"", testimonial.content, "\""] }), _jsxs("div", { children: [_jsx("div", { className: "font-semibold text-white", children: testimonial.name }), _jsx("div", { className: "text-zion-slate-light text-sm", children: testimonial.role })] })] }, testimonial.name))) })] }) }), _jsx("section", { className: "py-24 px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "max-w-4xl mx-auto text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-cyan to-zion-purple bg-clip-text text-transparent", children: "Ready to Transform Your Business?" }), _jsx("p", { className: "text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto", children: "Join the future of technology with Zion Tech Group. Let's build something extraordinary together." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 justify-center", children: ["Start Your Project", _jsx(ArrowRight, { className: "w-5 h-5" })] }), _jsx(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "px-8 py-4 border border-zion-cyan text-zion-cyan rounded-lg text-lg font-semibold hover:bg-zion-cyan hover:text-white transition-all duration-300 flex items-center gap-2 justify-center", children: "Schedule Consultation" })] })] }) }) })] })] }));
}
