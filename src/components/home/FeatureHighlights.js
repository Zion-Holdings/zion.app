import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Zap, Shield, Users, Globe, Smartphone, TrendingUp, Award, Lock } from 'lucide-react';
export function FeatureHighlights() {
    const { t } = useTranslation();
    const features = [
        {
            icon: _jsx(Zap, { className: "h-8 w-8" }),
            title: t('home.feature_ai_powered') || "AI-Powered Matching",
            description: t('home.feature_ai_powered_desc') || "Advanced algorithms connect you with the perfect talent and services",
            color: "from-zion-cyan to-zion-cyan-light",
            bgColor: "bg-zion-cyan/10",
            borderColor: "border-zion-cyan/20"
        },
        {
            icon: _jsx(Shield, { className: "h-8 w-8" }),
            title: t('home.feature_verified') || "Verified Professionals",
            description: t('home.feature_verified_desc') || "All talent and services are thoroughly vetted and verified",
            color: "from-zion-purple to-zion-purple-light",
            bgColor: "bg-zion-purple/10",
            borderColor: "border-zion-purple/20"
        },
        {
            icon: _jsx(Users, { className: "h-8 w-8" }),
            title: t('home.feature_global') || "Global Network",
            description: t('home.feature_global_desc') || "Access talent and services from around the world",
            color: "from-zion-blue to-zion-blue-light",
            bgColor: "bg-zion-blue/10",
            borderColor: "border-zion-blue/20"
        },
        {
            icon: _jsx(Globe, { className: "h-8 w-8" }),
            title: t('home.feature_multilingual') || "Multilingual Support",
            description: t('home.feature_multilingual_desc') || "Platform available in multiple languages",
            color: "from-zion-cyan to-zion-cyan-light",
            bgColor: "bg-zion-cyan/10",
            borderColor: "border-zion-cyan/20"
        },
        {
            icon: _jsx(Smartphone, { className: "h-8 w-8" }),
            title: t('home.feature_mobile') || "Mobile First",
            description: t('home.feature_mobile_desc') || "Optimized for mobile devices with native app support",
            color: "from-zion-purple to-zion-purple-light",
            bgColor: "bg-zion-purple/10",
            borderColor: "border-zion-purple/20"
        },
        {
            icon: _jsx(TrendingUp, { className: "h-8 w-8" }),
            title: t('home.feature_analytics') || "Advanced Analytics",
            description: t('home.feature_analytics_desc') || "Comprehensive insights and performance tracking",
            color: "from-zion-blue to-zion-blue-light",
            bgColor: "bg-zion-blue/10",
            borderColor: "border-zion-blue/20"
        },
        {
            icon: _jsx(Award, { className: "h-8 w-8" }),
            title: t('home.feature_quality') || "Quality Guarantee",
            description: t('home.feature_quality_desc') || "Satisfaction guaranteed or your money back",
            color: "from-zion-cyan to-zion-cyan-light",
            bgColor: "bg-zion-cyan/10",
            borderColor: "border-zion-cyan/20"
        },
        {
            icon: _jsx(Lock, { className: "h-8 w-8" }),
            title: t('home.feature_security') || "Enterprise Security",
            description: t('home.feature_security_desc') || "Bank-level security and data protection",
            color: "from-zion-purple to-zion-purple-light",
            bgColor: "bg-zion-purple/10",
            borderColor: "border-zion-purple/20"
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
        hidden: { opacity: 0, y: 20, scale: 0.9 },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };
    return (_jsx("section", { className: "py-20 bg-gradient-to-b from-background to-zion-slate/5", children: _jsxs("div", { className: "container px-4 mx-auto", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-zion-blue via-zion-purple to-zion-cyan bg-clip-text text-transparent", children: t('home.features_title') || "Why Choose Zion?" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: t('home.features_subtitle') || "Discover the cutting-edge features that make Zion the ultimate tech and AI marketplace" })] }), _jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: features.map((feature, index) => (_jsxs(motion.div, { className: `p-6 rounded-xl border ${feature.bgColor} ${feature.borderColor} hover:border-opacity-60 transition-all duration-300 group hover:shadow-lg hover:-translate-y-1`, variants: itemVariants, children: [_jsx("div", { className: `inline-flex p-3 rounded-lg bg-gradient-to-r ${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`, children: _jsx("div", { className: "text-white", children: feature.icon }) }), _jsx("h3", { className: "text-xl font-semibold mb-3 text-zion-slate-dark", children: feature.title }), _jsx("p", { className: "text-zion-slate-light leading-relaxed", children: feature.description })] }, index))) }), _jsxs(motion.div, { className: "text-center mt-16", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.4 }, children: [_jsx("p", { className: "text-lg text-zion-slate-light mb-6", children: t('home.features_cta_text') || "Ready to experience the future of tech services?" }), _jsx("button", { className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105", children: t('home.features_cta_button') || "Get Started Today" })] })] }) }));
}
