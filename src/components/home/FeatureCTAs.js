import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Brain, Shield, Cloud, Database, Zap, Code, Settings, Link as LinkIcon, Phone, Mail, Globe, Star, Users, Clock } from "lucide-react";
const features = [
    {
        title: "AI & Machine Learning",
        description: "Transform your business with intelligent automation and data-driven insights",
        icon: _jsx(Brain, { className: "w-8 h-8" }),
        link: "/comprehensive-services#ai-ml",
        color: "from-purple-500 to-indigo-600",
        cta: "Explore AI Services",
        badge: "Popular"
    },
    {
        title: "Cybersecurity",
        description: "Protect your organization with comprehensive security solutions and monitoring",
        icon: _jsx(Shield, { className: "w-8 h-8" }),
        link: "/comprehensive-services#cybersecurity",
        color: "from-red-500 to-pink-600",
        cta: "Secure Your Business",
        badge: "Critical"
    },
    {
        title: "Cloud & Infrastructure",
        description: "Modernize your infrastructure with cloud solutions and DevOps automation",
        icon: _jsx(Cloud, { className: "w-8 h-8" }),
        link: "/comprehensive-services#cloud-infrastructure",
        color: "from-blue-500 to-cyan-600",
        cta: "Cloud Solutions",
        badge: "Trending"
    },
    {
        title: "Data & Analytics",
        description: "Unlock business insights with advanced analytics and data engineering",
        icon: _jsx(Database, { className: "w-8 h-8" }),
        link: "/comprehensive-services#data-analytics",
        color: "from-green-500 to-emerald-600",
        cta: "Data Insights",
        badge: "Essential"
    },
    {
        title: "Digital Transformation",
        description: "Accelerate your digital journey with strategic transformation services",
        icon: _jsx(Zap, { className: "w-8 h-8" }),
        link: "/comprehensive-services#digital-transformation",
        color: "from-orange-500 to-red-600",
        cta: "Transform Now",
        badge: "Strategic"
    },
    {
        title: "Web & Mobile",
        description: "Build custom applications and digital experiences for your business",
        icon: _jsx(Code, { className: "w-8 h-8" }),
        link: "/comprehensive-services#web-mobile",
        color: "from-indigo-500 to-purple-600",
        cta: "Build Apps",
        badge: "Custom"
    },
    {
        title: "IT Support & Management",
        description: "Ensure smooth IT operations with managed services and support",
        icon: _jsx(Settings, { className: "w-8 h-8" }),
        link: "/comprehensive-services#it-support",
        color: "from-gray-500 to-slate-600",
        cta: "Get Support",
        badge: "24/7"
    },
    {
        title: "Blockchain & Web3",
        description: "Leverage decentralized technologies for innovation and transparency",
        icon: _jsx(LinkIcon, { className: "w-8 h-8" }),
        link: "/comprehensive-services#blockchain-web3",
        color: "from-yellow-500 to-amber-600",
        cta: "Web3 Solutions",
        badge: "Innovation"
    }
];
const stats = [
    { number: "500+", label: "Projects Completed", icon: _jsx(Star, { className: "w-5 h-5" }) },
    { number: "50+", label: "Expert Consultants", icon: _jsx(Users, { className: "w-5 h-5" }) },
    { number: "24/7", label: "Support Available", icon: _jsx(Clock, { className: "w-5 h-5" }) },
    { number: "99.9%", label: "Client Satisfaction", icon: _jsx(Star, { className: "w-5 h-5" }) }
];
export function FeatureCTAs() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    };
    const cardVariants = {
        hidden: { y: 20, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };
    const statsVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    return (_jsxs("section", { className: "py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark relative overflow-hidden", role: "region", "aria-labelledby": "features-title", children: [_jsxs("div", { className: "absolute inset-0 opacity-10", children: [_jsx("div", { className: "absolute top-20 left-20 w-32 h-32 bg-zion-purple rounded-full blur-3xl" }), _jsx("div", { className: "absolute bottom-20 right-20 w-40 h-40 bg-zion-cyan rounded-full blur-3xl" }), _jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-blue rounded-full blur-3xl" })] }), _jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, children: [_jsxs("h2", { id: "features-title", className: "text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6", children: ["Professional ", _jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple", children: "Technology Services" })] }), _jsx("p", { className: "text-zion-slate-light text-lg md:text-xl max-w-4xl mx-auto leading-relaxed", children: "Discover our comprehensive suite of professional technology services designed to accelerate your business growth, enhance security, and drive innovation across all aspects of your organization." })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-6 mb-16", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: stats.map((stat, index) => (_jsx(motion.div, { variants: statsVariants, className: "text-center", children: _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20", children: [_jsx("div", { className: "text-zion-cyan mb-2 flex justify-center", children: stat.icon }), _jsx("div", { className: "text-2xl md:text-3xl font-bold text-white mb-1", children: stat.number }), _jsx("div", { className: "text-zion-slate-light text-sm", children: stat.label })] }) }, stat.label))) }), _jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: features.map((feature, index) => (_jsx(motion.div, { variants: cardVariants, whileHover: {
                                y: -8,
                                transition: { duration: 0.2 }
                            }, className: "group", children: _jsx(Link, { to: feature.link, className: "block h-full", children: _jsxs("div", { className: "rounded-xl overflow-hidden h-full border border-zion-blue-light/30 bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm p-6 transition-all duration-500 hover:border-zion-purple/50 hover:shadow-2xl hover:shadow-zion-purple/20 group-hover:scale-[1.02]", children: [_jsx("div", { className: "flex justify-between items-start mb-4", children: _jsx("div", { className: `px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${feature.color} text-white`, children: feature.badge }) }), _jsx("div", { className: `rounded-full w-16 h-16 bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`, children: _jsx("div", { className: "text-white", children: feature.icon }) }), _jsx("h3", { className: "text-white text-xl font-bold mb-3 group-hover:text-zion-cyan transition-colors duration-300", children: feature.title }), _jsx("p", { className: "text-zion-slate-light text-sm mb-6 leading-relaxed", children: feature.description }), _jsxs(Button, { variant: "outline", className: "w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10 group-hover:border-zion-cyan group-hover:text-zion-cyan-light transition-all duration-300 group-hover:scale-105", children: [feature.cta, _jsx(ArrowRight, { className: "h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" })] })] }) }) }, index))) }), _jsx(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8, delay: 0.4 }, children: _jsx(Link, { to: "/comprehensive-services", children: _jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg px-8 py-6 group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-zion-purple/25", children: ["View All Services", _jsx(ArrowRight, { className: "h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" })] }) }) }), _jsx(motion.div, { className: "text-center", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8, delay: 0.6 }, children: _jsxs("div", { className: "bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 max-w-5xl mx-auto shadow-2xl", children: [_jsx("h3", { className: "text-3xl font-bold text-white mb-4", children: "Ready to Transform Your Business?" }), _jsx("p", { className: "text-zion-slate-light text-lg mb-8 leading-relaxed", children: "Our expert team is ready to help you implement the perfect technology solutions. Get in touch today for a personalized consultation and quote." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-6", children: [_jsxs(Button, { className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white group transition-all duration-300 hover:scale-105", children: [_jsx(Phone, { className: "h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" }), "Call +1 302 464 0950"] }), _jsxs(Button, { variant: "outline", className: "border-zion-purple text-zion-cyan hover:bg-zion-purple/10 group transition-all duration-300 hover:scale-105", children: [_jsx(Mail, { className: "h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" }), "Email kleber@ziontechgroup.com"] }), _jsxs(Button, { variant: "outline", className: "border-zion-purple text-zion-cyan hover:bg-zion-purple/10 group transition-all duration-300 hover:scale-105", children: [_jsx(Globe, { className: "h-4 w-4 mr-2 group-hover:scale-110 transition-transform duration-300" }), "Visit ziontechgroup.com"] })] }), _jsxs("div", { className: "text-zion-slate-light text-sm bg-zion-blue-dark/50 rounded-lg p-4", children: [_jsx("p", { className: "font-medium", children: "Address: 364 E Main St STE 1008, Middletown DE 19709" }), _jsx("p", { className: "text-zion-slate-light/80 mt-1", children: "Serving clients worldwide with 24/7 support" })] })] }) })] })] }));
}
