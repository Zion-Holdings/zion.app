import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { GradientHeading } from '@/components/GradientHeading';
import { FeatureCard } from '@/components/FeatureCard';
import { FeaturedListingsSection } from '@/components/FeaturedListingsSection';
import { NewsletterSection } from '@/components/NewsletterSection';
import { TrustedBySection } from '@/components/TrustedBySection';
import { EnhancedQuickAccess } from '@/components/home/EnhancedQuickAccess';
import { ComprehensiveServicesShowcase } from '@/components/ComprehensiveServicesShowcase';
import { EnhancedSearchSection } from '@/components/home/EnhancedSearchSection';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Zap, Shield, Users, Globe, ArrowRight, Star, CheckCircle, Award, MapPin, Phone, Mail, Brain, Cloud, BarChart3, Bot, Mic, Eye, Network, Fingerprint, Atom } from 'lucide-react';
export default function Home() {
    const [scrollProgress, setScrollProgress] = useState(0);
    useEffect(() => {
        const handleScroll = () => {
            const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
            const currentProgress = (window.scrollY / totalHeight) * 100;
            setScrollProgress(Math.min(currentProgress, 100));
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);
    const features = [
        {
            icon: Zap,
            title: 'AI-Powered Solutions',
            description: 'Cutting-edge artificial intelligence services that transform your business operations and drive innovation.'
        },
        {
            icon: Shield,
            title: 'Enterprise Security',
            description: 'Comprehensive cybersecurity solutions protecting your digital assets with industry-leading protocols.'
        },
        {
            icon: Users,
            title: 'Top Tech Talent',
            description: 'Access to a curated network of skilled professionals ready to tackle your most complex challenges.'
        },
        {
            icon: Globe,
            title: 'Global Reach',
            description: 'Worldwide service delivery with local expertise and 24/7 support across all time zones.'
        }
    ];
    const stats = [
        { label: 'Happy Clients', value: '500+', icon: Users },
        { label: 'Projects Completed', value: '1000+', icon: CheckCircle },
        { label: 'Years Experience', value: '15+', icon: Award },
        { label: 'Global Locations', value: '25+', icon: MapPin }
    ];
    const services = [
        {
            title: 'IT Infrastructure',
            description: 'Complete IT infrastructure solutions including cloud migration, network optimization, and system integration.',
            features: ['Cloud Migration', 'Network Security', 'System Integration', '24/7 Monitoring'],
            price: 'Starting at $2,500',
            badge: 'Popular'
        },
        {
            title: 'AI & Machine Learning',
            description: 'Custom AI solutions that automate processes, provide insights, and create competitive advantages.',
            features: ['Custom AI Models', 'Process Automation', 'Data Analytics', 'Predictive Insights'],
            price: 'Starting at $5,000',
            badge: 'Trending'
        },
        {
            title: 'Cybersecurity',
            description: 'Comprehensive security services protecting your organization from evolving cyber threats.',
            features: ['Threat Detection', 'Vulnerability Assessment', 'Incident Response', 'Security Training'],
            price: 'Starting at $3,500',
            badge: 'Essential'
        }
    ];
    // Enhanced AI services with pricing
    const aiServices = [
        {
            title: "AI Content Generator",
            description: "Generate high-quality content with advanced AI models",
            icon: _jsx(Bot, { className: "w-8 h-8" }),
            price: "$199/month",
            features: ["Multiple formats", "SEO optimized", "Brand voice"]
        },
        {
            title: "AI Model Training",
            description: "Custom AI model development and training services",
            icon: _jsx(Brain, { className: "w-8 h-8" }),
            price: "$5,999",
            features: ["Custom models", "Training data", "Deployment support"]
        },
        {
            title: "Voice AI Assistant",
            description: "Intelligent voice recognition and response systems",
            icon: _jsx(Mic, { className: "w-8 h-8" }),
            price: "$399/month",
            features: ["Multi-language", "Custom responses", "Integration API"]
        },
        {
            title: "Visual Recognition API",
            description: "Advanced computer vision and image analysis",
            icon: _jsx(Eye, { className: "w-8 h-8" }),
            price: "$299/month",
            features: ["Object detection", "Face recognition", "Custom models"]
        }
    ];
    // Enhanced IT services with pricing
    const itServices = [
        {
            title: "API Gateway",
            description: "Enterprise-grade API management and security",
            icon: _jsx(Network, { className: "w-8 h-8" }),
            price: "$799/month",
            features: ["Rate limiting", "Authentication", "Analytics"]
        },
        {
            title: "IoT Device Management",
            description: "Comprehensive IoT infrastructure and monitoring",
            icon: _jsx(Globe, { className: "w-8 h-8" }),
            price: "$1,299/month",
            features: ["Device monitoring", "Remote management", "Security"]
        },
        {
            title: "Blockchain Integration",
            description: "Secure blockchain implementation and smart contracts",
            icon: _jsx(Atom, { className: "w-8 h-8" }),
            price: "$3,999",
            features: ["Smart contracts", "Security audit", "Integration support"]
        },
        {
            title: "Biometric Authentication",
            description: "Advanced biometric security solutions",
            icon: _jsx(Fingerprint, { className: "w-8 h-8" }),
            price: "$599/month",
            features: ["Multi-factor", "Hardware support", "Compliance"]
        }
    ];
    // Enhanced Micro SAAS services with pricing
    const microSaasServices = [
        {
            title: "AI Talent Matching",
            description: "Advanced AI-powered talent matching for tech companies",
            icon: _jsx(Brain, { className: "w-8 h-8" }),
            price: "$299/month",
            features: ["Smart matching", "24/7 support", "Analytics dashboard"]
        },
        {
            title: "Cybersecurity Assessment",
            description: "Comprehensive security audit and vulnerability assessment",
            icon: _jsx(Shield, { className: "w-8 h-8" }),
            price: "$1,499",
            features: ["Full audit", "Penetration testing", "Compliance report"]
        },
        {
            title: "Cloud Migration",
            description: "Seamless cloud infrastructure migration and optimization",
            icon: _jsx(Cloud, { className: "w-8 h-8" }),
            price: "$2,999",
            features: ["Migration planning", "Zero downtime", "Performance optimization"]
        },
        {
            title: "Data Analytics Dashboard",
            description: "Custom business intelligence and analytics solutions",
            icon: _jsx(BarChart3, { className: "w-8 h-8" }),
            price: "$899/month",
            features: ["Real-time data", "Custom reports", "API integration"]
        }
    ];
    const testimonials = [
        {
            name: 'Sarah Johnson',
            role: 'CTO, TechCorp',
            content: 'Zion Tech Group transformed our IT infrastructure completely. Their AI solutions increased our efficiency by 40%.',
            rating: 5,
            company: 'TechCorp'
        },
        {
            name: 'Michael Chen',
            role: 'CEO, InnovateLab',
            content: 'The cybersecurity implementation was seamless and comprehensive. We feel much more secure now.',
            rating: 5,
            company: 'InnovateLab'
        }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx("div", { className: "fixed top-0 left-0 w-full h-1 bg-zion-blue-dark z-50", children: _jsx("div", { className: "h-full bg-gradient-to-r from-zion-cyan to-zion-purple transition-all duration-300", style: { width: `${scrollProgress}%` } }) }), _jsx("section", { className: "bg-gradient-to-r from-zion-cyan/20 to-zion-purple/20 border-b border-zion-cyan/30", children: _jsx("div", { className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4", children: _jsxs("div", { className: "flex flex-col sm:flex-row justify-between items-center space-y-2 sm:space-y-0", children: [_jsxs("div", { className: "flex items-center space-x-6 text-sm", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Phone, { className: "w-4 h-4 text-zion-cyan" }), _jsx("span", { className: "text-zion-slate-light", children: "+1 302 464 0950" })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Mail, { className: "w-4 h-4 text-zion-cyan" }), _jsx("span", { className: "text-zion-slate-light", children: "kleber@ziontechgroup.com" })] }), _jsx("div", { className: "flex items-center space-x-2", children: _jsx("span", { className: "text-zion-slate-light", children: "364 E Main St STE 1008, Middletown DE 19709" }) })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("span", { className: "text-xs text-zion-slate-light", children: "Visit us at:" }), _jsx("a", { href: "https://ziontechgroup.com", target: "_blank", rel: "noopener noreferrer", className: "text-zion-cyan hover:text-zion-purple transition-colors duration-300 font-medium", children: "ziontechgroup.com" })] })] }) }) }), _jsx(SEO, { title: "Zion - The Tech & AI Marketplace", description: "Discover top AI and tech talent, services, and equipment in one place.", keywords: "AI, technology, marketplace, services, talent", canonical: "https://ziontechgroup.com/" }), _jsx(Header, {}), _jsxs("section", { className: "relative py-20 md:py-32 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.1)_1px,transparent_1px)] bg-[size:50px_50px] animate-pulse" }), _jsxs("div", { className: "container relative z-10 mx-auto px-4 text-center", children: [_jsx(GradientHeading, { className: "text-5xl md:text-7xl font-bold leading-tight mb-6", children: "The Future of Tech & AI" }), _jsx("p", { className: "text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed", children: "Discover cutting-edge AI solutions, top tech talent, and innovative services that transform businesses and drive digital innovation." }), _jsxs("div", { className: "flex flex-col sm:flex-row justify-center gap-6 mb-16", children: [_jsx(Button, { asChild: true, size: "lg", className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-lg py-6 px-8", children: _jsxs(Link, { to: "/services", children: ["Explore Services", _jsx(ArrowRight, { className: "w-5 h-5 ml-2" })] }) }), _jsx(Button, { asChild: true, variant: "outline", size: "lg", className: "border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark text-lg py-6 px-8", children: _jsxs(Link, { to: "/contact", children: ["Get Started", _jsx(ArrowRight, { className: "w-5 h-5 ml-2" })] }) })] }), _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((stat, index) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl md:text-4xl font-bold text-white mb-2", children: stat.value }), _jsx("div", { className: "text-zion-slate-light", children: stat.label })] }, index))) })] })] }), _jsx(EnhancedQuickAccess, {}), _jsx(EnhancedSearchSection, {}), _jsx("section", { className: "py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Comprehensive Tech Solutions" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "From AI-powered services to enterprise IT solutions, we provide cutting-edge technology services to help your business thrive in the digital age." }), _jsx("div", { className: "mt-8", children: _jsxs("a", { href: "/services", className: "inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105", children: ["View All Services", _jsx(ArrowRight, { className: "w-5 h-5 ml-2" })] }) })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20", children: microSaasServices.map((service, index) => (_jsxs("div", { className: "group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105", children: [_jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300", children: _jsx("div", { className: "text-white", children: service.icon }) }), _jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: service.title }), _jsx("p", { className: "text-zion-slate-light text-sm mb-4", children: service.description }), _jsx("div", { className: "text-zion-cyan font-bold mb-4", children: service.price }), _jsx("div", { className: "space-y-2 mb-4", children: service.features.map((feature, idx) => (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-zion-cyan" }), _jsx("span", { className: "text-zion-slate-light text-sm", children: feature })] }, idx))) }), _jsxs("a", { href: `/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`, className: "inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors duration-300 font-medium text-sm", children: ["Learn More ", _jsx(ArrowRight, { className: "w-4 h-4 ml-1" })] })] }, index))) })] }) }), _jsx("section", { className: "py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue to-zion-purple-dark", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "AI-Powered Solutions" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "Leverage the power of artificial intelligence to transform your business operations and gain competitive advantages in the market." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: aiServices.map((service, index) => (_jsxs("div", { className: "group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105", children: [_jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300", children: _jsx("div", { className: "text-white", children: service.icon }) }), _jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: service.title }), _jsx("p", { className: "text-zion-slate-light text-sm mb-4", children: service.description }), _jsx("div", { className: "text-zion-cyan font-bold mb-4", children: service.price }), _jsx("div", { className: "space-y-2 mb-4", children: service.features.map((feature, idx) => (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-zion-cyan" }), _jsx("span", { className: "text-zion-slate-light text-sm", children: feature })] }, idx))) }), _jsxs("a", { href: `/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`, className: "inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors duration-300 font-medium text-sm", children: ["Learn More ", _jsx(ArrowRight, { className: "w-4 h-4 ml-1" })] })] }, index))) })] }) }), _jsx("section", { className: "py-20 bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Enterprise IT Solutions" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "Robust, scalable, and secure IT infrastructure solutions designed for modern enterprises and growing businesses." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: itServices.map((service, index) => (_jsxs("div", { className: "group bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105", children: [_jsx("div", { className: "w-16 h-16 bg-gradient-to-r from-zion-cyan to-zion-blue rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300", children: _jsx("div", { className: "text-white", children: service.icon }) }), _jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: service.title }), _jsx("p", { className: "text-zion-slate-light text-sm mb-4", children: service.description }), _jsx("div", { className: "text-zion-cyan font-bold mb-4", children: service.price }), _jsx("div", { className: "space-y-2 mb-4", children: service.features.map((feature, idx) => (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-zion-cyan" }), _jsx("span", { className: "text-zion-slate-light text-sm", children: feature })] }, idx))) }), _jsxs("a", { href: `/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`, className: "inline-flex items-center text-zion-cyan hover:text-zion-purple transition-colors duration-300 font-medium text-sm", children: ["Learn More ", _jsx(ArrowRight, { className: "w-4 h-4 ml-1" })] })] }, index))) })] }) }), _jsx(ComprehensiveServicesShowcase, {}), _jsx("section", { className: "py-20 bg-gradient-to-br from-zion-slate-dark via-zion-blue to-zion-purple-dark", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx(GradientHeading, { className: "text-4xl md:text-5xl font-bold mb-6", children: "Why Choose Zion Tech Group?" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "We combine cutting-edge technology with proven expertise to deliver solutions that drive real business value." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: features.map((feature, index) => (_jsx(FeatureCard, Object.assign({}, feature), index))) })] }) }), _jsx("section", { className: "py-20 bg-gradient-to-br from-zion-blue-dark via-zion-slate to-zion-blue", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx(GradientHeading, { className: "text-4xl md:text-5xl font-bold mb-6", children: "Our Core Services" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "Comprehensive solutions designed to meet the diverse needs of modern businesses." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: services.map((service, index) => (_jsxs(Card, { className: "bg-white/5 backdrop-blur-sm border-white/10 hover:border-zion-cyan/50 transition-all duration-300 hover:scale-105", children: [_jsx(CardHeader, { children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx(CardTitle, { className: "text-white", children: service.title }), _jsx(Badge, { variant: "secondary", className: "bg-zion-purple/20 text-zion-purple border-zion-purple/30", children: service.badge })] }) }), _jsxs(CardContent, { children: [_jsx("p", { className: "text-zion-slate-light mb-6", children: service.description }), _jsx("div", { className: "space-y-3 mb-6", children: service.features.map((feature, idx) => (_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-zion-cyan" }), _jsx("span", { className: "text-zion-slate-light text-sm", children: feature })] }, idx))) }), _jsx("div", { className: "text-zion-cyan font-bold mb-4", children: service.price }), _jsx(Button, { asChild: true, className: "w-full bg-gradient-to-r from-zion-cyan to-zion-purple hover:from-zion-cyan-light hover:to-zion-purple-light", children: _jsxs(Link, { to: `/services/${service.title.toLowerCase().replace(/\s+/g, '-')}`, children: ["Learn More", _jsx(ArrowRight, { className: "w-4 h-4 ml-2" })] }) })] })] }, index))) })] }) }), _jsx("section", { className: "py-20 bg-gradient-to-br from-zion-purple-dark via-zion-blue-dark to-zion-slate-dark", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx(GradientHeading, { className: "text-4xl md:text-5xl font-bold mb-6", children: "What Our Clients Say" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "Don't just take our word for it. Here's what our clients have to say about their experience with Zion Tech Group." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: testimonials.map((testimonial, index) => (_jsx(Card, { className: "bg-white/5 backdrop-blur-sm border-white/10", children: _jsxs(CardContent, { className: "p-6", children: [_jsx("div", { className: "flex items-center space-x-1 mb-4", children: Array.from({ length: testimonial.rating }).map((_, i) => (_jsx(Star, { className: "w-5 h-5 text-yellow-400 fill-current" }, i))) }), _jsxs("p", { className: "text-zion-slate-light mb-4 italic", children: ["\"", testimonial.content, "\""] }), _jsxs("div", { children: [_jsx("div", { className: "font-semibold text-white", children: testimonial.name }), _jsx("div", { className: "text-zion-slate-light text-sm", children: testimonial.role }), _jsx("div", { className: "text-zion-cyan text-sm", children: testimonial.company })] })] }) }, index))) })] }) }), _jsx(TrustedBySection, {}), _jsx(FeaturedListingsSection, {}), _jsx(NewsletterSection, {}), _jsx("section", { className: "py-20 bg-gradient-to-r from-zion-purple-dark via-zion-blue-dark to-zion-slate-dark", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 text-center", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Ready to Transform Your Business?" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto mb-8", children: "Join thousands of companies already leveraging our cutting-edge technology solutions. Get started today and experience the future of business technology." }), _jsxs("div", { className: "flex flex-col sm:flex-row justify-center gap-6", children: [_jsxs("a", { href: "/contact", className: "inline-flex items-center px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-105", children: ["Get Started Today", _jsx(ArrowRight, { className: "w-5 h-5 ml-2" })] }), _jsxs("a", { href: "/services", className: "inline-flex items-center px-8 py-4 border-2 border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-zion-blue-dark font-semibold rounded-xl transition-all duration-300 hover:scale-105", children: ["Explore Services", _jsx(ArrowRight, { className: "w-5 h-5 ml-2" })] })] })] }) }), _jsx("div", { className: "fixed bottom-8 right-8 z-50", children: _jsxs("div", { className: "flex flex-col space-y-4", children: [_jsx("button", { onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }), className: "w-12 h-12 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-2xl hover:shadow-zion-cyan/25 transition-all duration-300 hover:scale-110", children: _jsx(ArrowRight, { className: "w-5 h-5 transform rotate-[-90deg]" }) }), _jsx("a", { href: "mailto:kleber@ziontechgroup.com?subject=Inquiry from Zion Tech Group Website", className: "w-12 h-12 bg-gradient-to-r from-zion-purple to-zion-cyan rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-2xl hover:shadow-zion-purple/25 transition-all duration-300 hover:scale-110", children: _jsx(Mail, { className: "w-5 h-5" }) })] }) }), _jsx(Footer, {})] }));
}
