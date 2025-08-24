import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, Users, Shield, Zap, Globe, Smartphone, TrendingUp, Award, Phone, Mail, Globe as GlobeIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
export function FeatureCTAs() {
    const { t } = useTranslation();
    const features = [
        {
            icon: _jsx(Users, { className: "h-8 w-8" }),
            title: t('home.feature_talent') || "AI Talent Matching",
            description: t('home.feature_talent_desc') || "Connect with verified AI and tech professionals",
            link: "/talent",
            color: "from-zion-cyan to-zion-cyan-light",
            cta: t('home.feature_talent_cta') || "Find Talent"
        },
        {
            icon: _jsx(Shield, { className: "h-8 w-8" }),
            title: t('home.feature_services') || "Professional Services",
            description: t('home.feature_services_desc') || "Expert IT and technology consulting",
            link: "/services",
            color: "from-zion-purple to-zion-purple-light",
            cta: t('home.feature_services_cta') || "Browse Services"
        },
        {
            icon: _jsx(Zap, { className: "h-8 w-8" }),
            title: t('home.feature_equipment') || "Tech Equipment",
            description: t('home.feature_equipment_desc') || "Cutting-edge hardware and software",
            link: "/equipment",
            color: "from-zion-blue to-zion-blue-light",
            cta: t('home.feature_equipment_cta') || "Shop Equipment"
        },
        {
            icon: _jsx(Globe, { className: "h-8 w-8" }),
            title: t('home.feature_global') || "Global Network",
            description: t('home.feature_global_desc') || "Access worldwide talent and resources",
            link: "/marketplace",
            color: "from-zion-cyan to-zion-purple",
            cta: t('home.feature_global_cta') || "Explore"
        },
        {
            icon: _jsx(Smartphone, { className: "h-8 w-8" }),
            title: t('home.feature_mobile') || "Mobile App",
            description: t('home.feature_mobile_desc') || "Zion on the go with native mobile app",
            link: "/mobile-launch",
            color: "from-zion-purple to-zion-purple-dark",
            cta: t('home.feature_mobile_cta') || "Download"
        },
        {
            icon: _jsx(TrendingUp, { className: "h-8 w-8" }),
            title: t('home.feature_analytics') || "Analytics Dashboard",
            description: t('home.feature_analytics_desc') || "Track performance and insights",
            link: "/analytics",
            color: "from-zion-blue to-zion-cyan",
            cta: t('home.feature_analytics_cta') || "View Analytics"
        },
        {
            icon: _jsx(Award, { className: "h-8 w-8" }),
            title: t('home.feature_quality') || "Quality Assurance",
            description: t('home.feature_quality_desc') || "Verified professionals and services",
            link: "/about",
            color: "from-zion-purple to-zion-cyan",
            cta: t('home.feature_quality_cta') || "Learn More"
        },
        {
            icon: _jsx(Shield, { className: "h-8 w-8" }),
            title: t('home.feature_security') || "Enterprise Security",
            description: t('home.feature_security_desc') || "Bank-level security and compliance",
            link: "/enterprise",
            color: "from-zion-blue to-zion-blue-dark",
            cta: t('home.feature_security_cta') || "Enterprise"
        }
    ];
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
    const itemVariants = {
        hidden: { y: 20, opacity: 0, scale: 0.9 },
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
    const hoverVariants = {
        hover: {
            y: -8,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };
    return (_jsx("section", { className: "py-20 bg-gradient-to-b from-zion-blue-dark via-zion-blue to-zion-blue-light", role: "region", "aria-labelledby": "features-title", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: [_jsxs("h2", { id: "features-title", className: "text-4xl md:text-5xl font-bold text-white mb-6", children: ["Professional ", _jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple", children: "Technology Services" })] }), _jsx("p", { className: "text-zion-slate-light text-lg max-w-3xl mx-auto", children: "Discover our comprehensive suite of professional technology services designed to accelerate your business growth, enhance security, and drive innovation across all aspects of your organization." })] }), _jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: features.map((feature, index) => (_jsx(motion.div, { className: "group", variants: itemVariants, whileHover: "hover", children: _jsx(Link, { to: feature.link, className: "block", children: _jsxs(motion.div, { className: "rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 hover:border-zion-purple/50", variants: hoverVariants, children: [_jsx("div", { className: `rounded-full w-16 h-16 bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`, children: _jsx("div", { className: "text-white", children: feature.icon }) }), _jsx("h3", { className: "text-white text-xl font-bold mb-3", children: feature.title }), _jsx("p", { className: "text-zion-slate-light text-sm mb-4 leading-relaxed", children: feature.description }), _jsxs(Button, { variant: "outline", className: "w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10 group-hover:border-zion-cyan group-hover:text-zion-cyan-light transition-all duration-300", children: [feature.cta, _jsx(ArrowRight, { className: "h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" })] })] }) }) }, index))) }), _jsx(motion.div, { className: "text-center", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.4 }, children: _jsx(Link, { to: "/comprehensive-services", children: _jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg px-8 py-6", children: ["View All Services", _jsx(ArrowRight, { className: "h-5 w-5 ml-2" })] }) }) }), _jsx(motion.div, { className: "mt-16 text-center", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.6 }, children: _jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 max-w-4xl mx-auto", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "Ready to Transform Your Business?" }), _jsx("p", { className: "text-zion-slate-light mb-6", children: "Our expert team is ready to help you implement the perfect technology solutions. Get in touch today for a personalized consultation and quote." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white", children: [_jsx(Phone, { className: "h-4 w-4 mr-2" }), "Call +1 302 464 0950"] }), _jsxs(Button, { variant: "outline", className: "border-zion-purple text-zion-cyan hover:bg-zion-purple/10", children: [_jsx(Mail, { className: "h-4 w-4 mr-2" }), "Email kleber@ziontechgroup.com"] }), _jsxs(Button, { variant: "outline", className: "border-zion-purple text-zion-cyan hover:bg-zion-purple/10", children: [_jsx(GlobeIcon, { className: "h-4 w-4 mr-2" }), "Visit ziontechgroup.com"] })] }), _jsx("div", { className: "mt-6 text-zion-slate-light text-sm", children: _jsx("p", { children: "Address: 364 E Main St STE 1008, Middletown DE 19709" }) })] }) })] }) }));
}
