import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Shield, Brain, Cloud, Globe, Users, Award, Clock, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import FuturisticNeonButton from '../components/ui/FuturisticNeonButton';
import FuturisticAnimatedBackground from '../components/ui/FuturisticAnimatedBackground';
import SEO from '../components/SEO';
const Home = () => {
    const features = [
        {
            icon: Brain,
            title: 'AI-Powered Solutions',
            description: 'Cutting-edge artificial intelligence and machine learning platforms',
            color: 'from-purple-500 to-pink-500'
        },
        {
            icon: Cloud,
            title: 'Cloud Infrastructure',
            description: 'Scalable cloud solutions with AWS, Azure, and Google Cloud',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Shield,
            title: 'Cybersecurity',
            description: 'Enterprise-grade security and threat protection',
            color: 'from-red-500 to-orange-500'
        },
        {
            icon: Zap,
            title: 'Digital Transformation',
            description: 'Modernize your business with innovative technology',
            color: 'from-yellow-500 to-green-500'
        }
    ];
    const stats = [
        { label: 'Happy Clients', value: '500+', icon: Users },
        { label: 'Projects Completed', value: '1000+', icon: CheckCircle },
        { label: 'Years Experience', value: '10+', icon: Award },
        { label: 'Response Time', value: '<2hrs', icon: Clock }
    ];
    const services = [
        {
            title: 'Micro SAAS Solutions',
            description: 'Innovative software-as-a-service solutions for modern businesses',
            link: '/micro-saas-services',
            icon: Globe,
            color: 'from-zion-cyan to-zion-purple'
        },
        {
            title: 'AI & Machine Learning',
            description: 'Transform your business with intelligent automation and insights',
            link: '/ai-services',
            icon: Brain,
            color: 'from-zion-purple to-zion-pink'
        },
        {
            title: 'Cloud Migration',
            description: 'Seamless cloud infrastructure migration and optimization',
            link: '/cloud-services',
            icon: Cloud,
            color: 'from-zion-blue to-zion-cyan'
        }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark relative overflow-hidden", children: [_jsx(SEO, { title: "Zion Tech Group - Innovative Technology Solutions", description: "Discover cutting-edge technology solutions, AI services, and innovative business tools from Zion Tech Group. Transform your business with our expert services.", canonical: "/" }), _jsx(FuturisticAnimatedBackground, { intensity: "high" }), _jsx("section", { className: "relative z-10 pt-32 pb-20 px-4", children: _jsx("div", { className: "max-w-7xl mx-auto text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, children: [_jsx(Badge, { className: "mb-6 bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30", children: "\uD83D\uDE80 Leading Technology Innovation" }), _jsxs(motion.h1, { className: "text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 1, delay: 0.2 }, children: ["Transform Your Business", _jsx("br", {}), _jsx("span", { className: "bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-pink bg-clip-text text-transparent", children: "With Technology" })] }), _jsx(motion.p, { className: "text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: "Zion Tech Group delivers cutting-edge AI solutions, cloud infrastructure, and digital transformation services to accelerate your business growth and competitive advantage." }), _jsxs(motion.div, { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, children: [_jsxs(FuturisticNeonButton, { onClick: () => window.location.href = 'tel:+13024640950', size: "xl", className: "text-lg px-8 py-4", children: ["Get Started Today", _jsx(ArrowRight, { className: "w-5 h-5 ml-2" })] }), _jsx(Button, { variant: "outline", size: "lg", asChild: true, className: "border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan/10 hover:border-zion-cyan text-lg px-8 py-4", children: _jsx(Link, { to: "/contact", children: "Schedule Consultation" }) })] }), _jsxs(motion.div, { className: "mt-12 flex flex-wrap justify-center gap-6 text-zion-slate-light", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.8, delay: 0.8 }, children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-zion-cyan", children: "\uD83D\uDCDE" }), _jsx("span", { children: "+1 (302) 464-0950" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-zion-cyan", children: "\uD83D\uDCE7" }), _jsx("span", { children: "kleber@ziontechgroup.com" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("span", { className: "text-zion-cyan", children: "\uD83D\uDCCD" }), _jsx("span", { children: "Middletown, DE 19709" })] })] })] }) }) }), _jsx("section", { className: "relative z-10 py-20 px-4", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: ["Why Choose ", _jsx("span", { className: "text-zion-cyan", children: "Zion Tech Group" }), "?"] }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "We combine innovation, expertise, and cutting-edge technology to deliver solutions that drive real business results." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: features.map((feature, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, whileHover: { y: -10 }, className: "group", children: _jsxs(Card, { className: "bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 h-full p-6 text-center", children: [_jsx("div", { className: `w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`, children: _jsx(feature.icon, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: "text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors", children: feature.title }), _jsx("p", { className: "text-zion-slate-light leading-relaxed", children: feature.description })] }) }, feature.title))) })] }) }), _jsx("section", { className: "relative z-10 py-20 px-4 bg-zion-blue-dark/30", children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((stat, index) => (_jsxs(motion.div, { initial: { opacity: 0, scale: 0.8 }, whileInView: { opacity: 1, scale: 1 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, className: "text-center", children: [_jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-zion-cyan/20 rounded-full flex items-center justify-center", children: _jsx(stat.icon, { className: "w-8 h-8 text-zion-cyan" }) }), _jsx("div", { className: "text-3xl md:text-4xl font-bold text-white mb-2", children: stat.value }), _jsx("div", { className: "text-zion-slate-light", children: stat.label })] }, stat.label))) }) }) }), _jsx("section", { className: "relative z-10 py-20 px-4", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: ["Our ", _jsx("span", { className: "text-zion-cyan", children: "Services" })] }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "From AI-powered solutions to cloud infrastructure, we provide comprehensive technology services to transform your business." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: services.map((service, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, whileHover: { y: -10, scale: 1.02 }, className: "group", children: _jsxs(Card, { className: "bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 h-full overflow-hidden", children: [_jsx("div", { className: `h-32 bg-gradient-to-br ${service.color} flex items-center justify-center`, children: _jsx(service.icon, { className: "w-16 h-16 text-white" }) }), _jsxs("div", { className: "p-6", children: [_jsx("h3", { className: "text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors", children: service.title }), _jsx("p", { className: "text-zion-slate-light mb-6 leading-relaxed", children: service.description }), _jsxs(Link, { to: service.link, className: "inline-flex items-center gap-2 text-zion-cyan hover:text-zion-cyan-light transition-colors font-medium", children: ["Learn More", _jsx(ArrowRight, { className: "w-4 h-4" })] })] })] }) }, service.title))) }), _jsx(motion.div, { className: "text-center mt-12", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.3 }, viewport: { once: true }, children: _jsxs(FuturisticNeonButton, { onClick: () => window.location.href = '/micro-saas-services', size: "lg", className: "text-lg px-8 py-4", children: ["View All Services", _jsx(ArrowRight, { className: "w-5 h-5 ml-2" })] }) })] }) }), _jsx("section", { className: "relative z-10 py-20 px-4", children: _jsx("div", { className: "max-w-4xl mx-auto text-center", children: _jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, children: _jsxs(Card, { className: "bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple-dark/50 backdrop-blur-lg border-zion-cyan/30 p-12", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Ready to Transform Your Business?" }), _jsx("p", { className: "text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto", children: "Our team of experts is ready to help you implement the perfect solution for your business needs. Get in touch today for a personalized consultation." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(FuturisticNeonButton, { onClick: () => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=Business Consultation Request', size: "lg", className: "text-lg px-8 py-4", children: "Schedule Consultation" }), _jsx(Button, { variant: "outline", size: "lg", onClick: () => window.location.href = 'tel:+13024640950', className: "border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan/10 hover:border-zion-cyan text-lg px-8 py-4", children: "Call +1 (302) 464-0950" })] }), _jsxs("div", { className: "mt-8 text-zion-slate-light", children: [_jsx("p", { children: "\uD83D\uDCCD 364 E Main St STE 1008, Middletown DE 19709" }), _jsx("p", { children: "\uD83D\uDCE7 kleber@ziontechgroup.com" })] })] }) }) }) })] }));
};
export default Home;
