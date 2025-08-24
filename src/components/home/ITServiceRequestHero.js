import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Wrench, Server, Shield, Zap, ArrowRight, CheckCircle } from 'lucide-react';
export function ITServiceRequestHero() {
    const { t } = useTranslation();
    const services = [
        { icon: _jsx(Wrench, { className: "h-5 w-5" }), text: "Hardware Setup" },
        { icon: _jsx(Server, { className: "h-5 w-5" }), text: "Network Configuration" },
        { icon: _jsx(Shield, { className: "h-5 w-5" }), text: "Security Audits" },
        { icon: _jsx(Zap, { className: "h-5 w-5" }), text: "Performance Optimization" }
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
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };
    return (_jsxs("section", { className: "relative overflow-hidden py-16 bg-gradient-to-r from-zion-slate-dark via-zion-slate to-zion-blue-dark", children: [_jsx("div", { className: "absolute inset-0 opacity-10", children: _jsx("div", { className: "absolute inset-0", style: {
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    } }) }), _jsx("div", { className: "container relative z-10 px-4 mx-auto", children: _jsxs(motion.div, { className: "max-w-4xl mx-auto text-center", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: [_jsx(motion.div, { variants: itemVariants, children: _jsxs("div", { className: "inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zion-cyan/20 border border-zion-cyan/30 text-zion-cyan text-sm font-medium mb-6", children: [_jsx(CheckCircle, { className: "h-4 w-4" }), t('home.it_services_badge') || "Professional IT Services"] }) }), _jsx(motion.h1, { className: "text-4xl md:text-6xl font-bold mb-6 text-white", variants: itemVariants, children: t('home.it_services_title') || "Need Expert IT Support?" }), _jsx(motion.p, { className: "text-xl md:text-2xl text-zion-slate-light mb-8 max-w-3xl mx-auto leading-relaxed", variants: itemVariants, children: t('home.it_services_subtitle') || "Get professional IT services delivered to your location. From setup to maintenance, our certified technicians have you covered." }), _jsx(motion.div, { className: "flex flex-wrap justify-center gap-4 mb-8", variants: itemVariants, children: services.map((service, index) => (_jsxs("div", { className: "flex items-center gap-2 px-4 py-2 rounded-lg bg-white/10 border border-white/20 text-white", children: [service.icon, _jsx("span", { className: "text-sm font-medium", children: service.text })] }, index))) }), _jsxs(motion.div, { className: "flex flex-col sm:flex-row justify-center gap-4 mb-8", variants: itemVariants, children: [_jsxs(Link, { to: "/request-quote", className: "inline-flex items-center gap-2 bg-gradient-to-r from-zion-cyan to-zion-cyan-light hover:from-zion-cyan-light hover:to-zion-cyan text-zion-slate-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 hover:shadow-lg transform hover:scale-105", children: [t('home.it_services_cta_primary') || "Request IT Service Quote", _jsx(ArrowRight, { className: "h-5 w-5" })] }), _jsx(Link, { to: "/it-onsite-services", className: "inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white hover:text-zion-slate-dark px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300", children: t('home.it_services_cta_secondary') || "Learn More" })] }), _jsxs(motion.div, { className: "flex flex-wrap justify-center items-center gap-6 text-zion-slate-light/70 text-sm", variants: itemVariants, children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-2 h-2 bg-zion-cyan rounded-full" }), _jsx("span", { children: "Same-day response" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-2 h-2 bg-zion-purple rounded-full" }), _jsx("span", { children: "Certified technicians" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx("div", { className: "w-2 h-2 bg-zion-blue rounded-full" }), _jsx("span", { children: "Warranty included" })] })] })] }) }), _jsx(motion.div, { className: "absolute top-20 right-20 w-32 h-32 border border-zion-cyan/30 rounded-lg rotate-45", animate: { rotate: [45, 405], opacity: [0.3, 0.6, 0.3] }, transition: { duration: 20, repeat: Infinity, ease: "linear" } }), _jsx(motion.div, { className: "absolute bottom-20 left-20 w-24 h-24 border border-zion-purple/30 rounded-full", animate: { scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }, transition: { duration: 15, repeat: Infinity, ease: "easeInOut" } })] }));
}
