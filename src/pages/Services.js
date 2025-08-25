import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain, Cloud, Shield, Code, BarChart3, Settings, Globe, Zap, Rocket, CheckCircle, Star, TrendingUp } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import FuturisticNeonButton from '../components/ui/FuturisticNeonButton';
import FuturisticAnimatedBackground from '../components/ui/FuturisticAnimatedBackground';
import SEO from '../components/SEO';
const Services = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const serviceCategories = [
        {
            id: 'all',
            name: 'All Services',
            icon: Rocket,
            color: 'from-zion-cyan to-zion-blue'
        },
        {
            id: 'ai',
            name: 'AI & Machine Learning',
            icon: Brain,
            color: 'from-purple-500 to-pink-500'
        },
        {
            id: 'cloud',
            name: 'Cloud Solutions',
            icon: Cloud,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            id: 'security',
            name: 'Cybersecurity',
            icon: Shield,
            color: 'from-red-500 to-orange-500'
        },
        {
            id: 'development',
            name: 'Development',
            icon: Code,
            color: 'from-green-500 to-emerald-500'
        },
        {
            id: 'analytics',
            name: 'Data Analytics',
            icon: BarChart3,
            color: 'from-yellow-500 to-orange-500'
        }
    ];
    const services = [
        {
            id: 'ai-platform',
            title: 'AI-Powered Business Intelligence Platform',
            category: 'ai',
            description: 'Transform your business data into actionable insights with our advanced AI analytics platform.',
            features: [
                'Predictive analytics and forecasting',
                'Natural language processing',
                'Automated reporting and dashboards',
                'Real-time data processing',
                'Custom ML model development'
            ],
            benefits: [
                'Increase decision-making speed by 300%',
                'Reduce operational costs by 25%',
                'Improve customer satisfaction by 40%',
                'Identify new revenue opportunities',
                'Automate routine business processes'
            ],
            pricing: {
                starter: '$2,500/month',
                professional: '$5,000/month',
                enterprise: 'Custom pricing'
            },
            icon: Brain,
            color: 'from-purple-500 to-pink-500'
        },
        {
            id: 'cloud-migration',
            title: 'Cloud Infrastructure Migration',
            category: 'cloud',
            description: 'Seamlessly migrate your infrastructure to the cloud with zero downtime and maximum efficiency.',
            features: [
                'Multi-cloud strategy planning',
                'Automated migration tools',
                'Performance optimization',
                'Cost optimization analysis',
                '24/7 monitoring and support'
            ],
            benefits: [
                'Reduce infrastructure costs by 40%',
                'Improve scalability and flexibility',
                'Enhanced disaster recovery',
                'Better security and compliance',
                'Faster deployment times'
            ],
            pricing: {
                starter: '$15,000',
                professional: '$35,000',
                enterprise: 'Custom pricing'
            },
            icon: Cloud,
            color: 'from-blue-500 to-cyan-500'
        },
        {
            id: 'cybersecurity-suite',
            title: 'Comprehensive Cybersecurity Suite',
            category: 'security',
            description: 'Protect your business with enterprise-grade security solutions and threat intelligence.',
            features: [
                'Advanced threat detection',
                'Vulnerability assessment',
                'Incident response planning',
                'Security awareness training',
                'Compliance management'
            ],
            benefits: [
                'Prevent 99.9% of cyber threats',
                'Meet industry compliance standards',
                'Reduce security incident response time',
                'Protect customer data and trust',
                'Lower insurance premiums'
            ],
            pricing: {
                starter: '$3,000/month',
                professional: '$7,500/month',
                enterprise: 'Custom pricing'
            },
            icon: Shield,
            color: 'from-red-500 to-orange-500'
        },
        {
            id: 'custom-software',
            title: 'Custom Software Development',
            category: 'development',
            description: 'Build scalable, secure, and innovative software solutions tailored to your business needs.',
            features: [
                'Full-stack development',
                'Mobile app development',
                'API development and integration',
                'DevOps and CI/CD setup',
                'Quality assurance and testing'
            ],
            benefits: [
                'Streamline business operations',
                'Improve customer experience',
                'Increase operational efficiency',
                'Competitive advantage',
                'Scalable and maintainable code'
            ],
            pricing: {
                starter: '$25,000',
                professional: '$75,000',
                enterprise: 'Custom pricing'
            },
            icon: Code,
            color: 'from-green-500 to-emerald-500'
        },
        {
            id: 'data-analytics',
            title: 'Advanced Data Analytics & BI',
            category: 'analytics',
            description: 'Unlock the power of your data with comprehensive analytics and business intelligence solutions.',
            features: [
                'Data warehousing and ETL',
                'Interactive dashboards',
                'Advanced reporting tools',
                'Data visualization',
                'Performance metrics tracking'
            ],
            benefits: [
                'Make data-driven decisions',
                'Identify business trends and patterns',
                'Optimize business processes',
                'Improve customer insights',
                'Increase operational efficiency'
            ],
            pricing: {
                starter: '$2,000/month',
                professional: '$4,500/month',
                enterprise: 'Custom pricing'
            },
            icon: BarChart3,
            color: 'from-yellow-500 to-orange-500'
        },
        {
            id: 'digital-transformation',
            title: 'Digital Transformation Consulting',
            category: 'ai',
            description: 'Guide your organization through digital transformation with strategic consulting and implementation.',
            features: [
                'Digital strategy development',
                'Process optimization',
                'Change management',
                'Technology roadmap planning',
                'Implementation support'
            ],
            benefits: [
                'Modernize business operations',
                'Improve customer experience',
                'Increase operational efficiency',
                'Stay competitive in digital age',
                'Reduce operational costs'
            ],
            pricing: {
                starter: '$5,000/month',
                professional: '$12,000/month',
                enterprise: 'Custom pricing'
            },
            icon: Rocket,
            color: 'from-zion-cyan to-zion-purple'
        }
    ];
    const filteredServices = selectedCategory === 'all'
        ? services
        : services.filter(service => service.category === selectedCategory);
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark relative overflow-hidden", children: [_jsx(SEO, { title: "Our Services - AI, Cloud, & Technology Solutions | Zion Tech Group", description: "Explore our comprehensive range of technology services including AI solutions, cloud migration, cybersecurity, and digital transformation. Expert consulting and implementation.", canonical: "/services" }), _jsx(FuturisticAnimatedBackground, { intensity: "medium" }), _jsx("section", { className: "relative z-10 pt-32 pb-20 px-4", children: _jsx("div", { className: "max-w-7xl mx-auto text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, children: [_jsx(Badge, { className: "mb-6 bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30", children: "\uD83D\uDE80 Our Services" }), _jsxs(motion.h1, { className: "text-5xl md:text-7xl font-bold text-white mb-8 leading-tight", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 1, delay: 0.2 }, children: ["Comprehensive", _jsx("br", {}), _jsx("span", { className: "bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-pink bg-clip-text text-transparent", children: "Technology Solutions" })] }), _jsx(motion.p, { className: "text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: "From AI-powered analytics to cloud infrastructure, we provide end-to-end technology solutions that drive business growth and digital transformation." }), _jsxs(motion.div, { className: "flex flex-wrap justify-center gap-6 text-zion-cyan", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.8, delay: 0.6 }, children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Star, { className: "w-6 h-6" }), _jsx("span", { children: "500+ Successful Projects" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(TrendingUp, { className: "w-6 h-6" }), _jsx("span", { children: "99% Client Satisfaction" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(CheckCircle, { className: "w-6 h-6" }), _jsx("span", { children: "24/7 Expert Support" })] })] })] }) }) }), _jsx("section", { className: "relative z-10 py-12 px-4", children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsx("div", { className: "flex flex-wrap justify-center gap-4", children: serviceCategories.map((category) => {
                            const Icon = category.icon;
                            const isActive = selectedCategory === category.id;
                            return (_jsxs(motion.button, { onClick: () => setSelectedCategory(category.id), className: `flex items-center gap-3 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${isActive
                                    ? 'bg-gradient-to-r ' + category.color + ' text-white shadow-lg shadow-zion-cyan/25'
                                    : 'bg-zion-blue-dark/30 text-zion-slate-light hover:text-white hover:bg-zion-blue-light/20 border border-zion-blue-light/20'}`, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: [_jsx(Icon, { className: "w-5 h-5" }), category.name] }, category.id));
                        }) }) }) }), _jsx("section", { className: "relative z-10 py-20 px-4", children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: filteredServices.map((service, index) => {
                            var _a;
                            const Icon = service.icon;
                            return (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, whileHover: { y: -10, scale: 1.02 }, className: "group", children: _jsxs(Card, { className: "bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 h-full overflow-hidden", children: [_jsxs("div", { className: `bg-gradient-to-r ${service.color} p-6 text-white`, children: [_jsxs("div", { className: "flex items-center gap-4 mb-4", children: [_jsx("div", { className: "w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center", children: _jsx(Icon, { className: "w-7 h-7" }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-bold", children: service.title }), _jsx(Badge, { className: "bg-white/20 text-white border-white/30 mt-2", children: (_a = serviceCategories.find(c => c.id === service.category)) === null || _a === void 0 ? void 0 : _a.name })] })] }), _jsx("p", { className: "text-white/90 leading-relaxed", children: service.description })] }), _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "mb-6", children: [_jsx("h4", { className: "text-lg font-semibold text-white mb-3", children: "Key Features" }), _jsx("ul", { className: "space-y-2", children: service.features.map((feature, idx) => (_jsxs("li", { className: "flex items-center gap-3 text-zion-slate-light", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-zion-cyan flex-shrink-0" }), _jsx("span", { className: "text-sm", children: feature })] }, idx))) })] }), _jsxs("div", { className: "mb-6", children: [_jsx("h4", { className: "text-lg font-semibold text-white mb-3", children: "Business Benefits" }), _jsx("ul", { className: "space-y-2", children: service.benefits.map((benefit, idx) => (_jsxs("li", { className: "flex items-center gap-3 text-zion-slate-light", children: [_jsx(TrendingUp, { className: "w-4 h-4 text-zion-cyan flex-shrink-0" }), _jsx("span", { className: "text-sm", children: benefit })] }, idx))) })] }), _jsxs("div", { className: "mb-6", children: [_jsx("h4", { className: "text-lg font-semibold text-white mb-3", children: "Pricing Plans" }), _jsx("div", { className: "grid grid-cols-1 gap-2", children: Object.entries(service.pricing).map(([plan, price]) => (_jsxs("div", { className: "flex justify-between items-center text-sm", children: [_jsx("span", { className: "text-zion-slate-light capitalize", children: plan }), _jsx("span", { className: "text-zion-cyan font-semibold", children: price })] }, plan))) })] }), _jsxs("div", { className: "flex gap-3", children: [_jsx(FuturisticNeonButton, { onClick: () => window.location.href = '/contact', size: "sm", className: "flex-1", children: "Get Started" }), _jsx(Button, { variant: "outline", size: "sm", onClick: () => window.location.href = `mailto:kleber@ziontechgroup.com?subject=Inquiry about ${service.title}`, className: "border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan/10", children: "Learn More" })] })] })] }) }, service.id));
                        }) }) }) }), _jsx("section", { className: "relative z-10 py-20 px-4 bg-zion-blue-dark/30", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: ["Why Choose ", _jsx("span", { className: "text-zion-cyan", children: "Zion Tech Group" }), "?"] }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "We don't just deliver technology solutions \u2013 we deliver business transformation and measurable results that drive your success." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: [
                                {
                                    icon: Zap,
                                    title: 'Lightning Fast Delivery',
                                    description: 'Get your solutions up and running in weeks, not months, with our agile development approach.'
                                },
                                {
                                    icon: Shield,
                                    title: 'Enterprise Security',
                                    description: 'Bank-level security standards ensure your data and systems are always protected.'
                                },
                                {
                                    icon: Globe,
                                    title: 'Global Expertise',
                                    description: 'Access to world-class talent and cutting-edge technology from our global network.'
                                },
                                {
                                    icon: CheckCircle,
                                    title: 'Proven Results',
                                    description: 'Track record of delivering measurable business outcomes and ROI for our clients.'
                                },
                                {
                                    icon: Settings,
                                    title: '24/7 Support',
                                    description: 'Round-the-clock support and maintenance to keep your systems running smoothly.'
                                },
                                {
                                    icon: Rocket,
                                    title: 'Future-Ready Solutions',
                                    description: 'Built with scalability and future growth in mind, ensuring long-term success.'
                                }
                            ].map((item, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, whileHover: { y: -5 }, className: "group", children: _jsxs(Card, { className: "bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 h-full p-6 text-center", children: [_jsx("div", { className: "w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300", children: _jsx(item.icon, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: "text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors", children: item.title }), _jsx("p", { className: "text-zion-slate-light leading-relaxed", children: item.description })] }) }, item.title))) })] }) }), _jsx("section", { className: "relative z-10 py-20 px-4", children: _jsx("div", { className: "max-w-4xl mx-auto text-center", children: _jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, children: _jsxs(Card, { className: "bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple-dark/50 backdrop-blur-lg border-zion-cyan/30 p-12", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Ready to Transform Your Business?" }), _jsx("p", { className: "text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto", children: "Let's discuss how our technology solutions can drive growth, efficiency, and competitive advantage for your organization." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(FuturisticNeonButton, { onClick: () => window.location.href = 'tel:+13024640950', size: "lg", className: "text-lg px-8 py-4", children: "Call Now" }), _jsx(FuturisticNeonButton, { onClick: () => window.location.href = '/contact', size: "lg", variant: "secondary", className: "text-lg px-8 py-4", children: "Schedule Consultation" })] })] }) }) }) })] }));
};
export default Services;
