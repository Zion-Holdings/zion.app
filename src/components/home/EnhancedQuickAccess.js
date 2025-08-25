import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Search, Users, Briefcase, Settings, MessageSquare, Smartphone, Sparkles, Zap } from "lucide-react";
export function EnhancedQuickAccess() {
    const { t } = useTranslation();
    const quickLinks = [
        {
            title: t('home.tool_ai_matcher') || "AI Matcher",
            description: t('home.tool_ai_matcher_desc') || "Find perfect matches",
            icon: _jsx(Search, { className: "h-7 w-7" }),
            link: "/match",
            color: "from-zion-cyan to-zion-cyan-light",
            bgColor: "bg-zion-cyan/10",
            borderColor: "border-zion-cyan/20",
            hoverColor: "hover:border-zion-cyan/40"
        },
        {
            title: t('home.tool_talent') || "Talent Directory",
            description: t('home.tool_talent_desc') || "Browse verified experts",
            icon: _jsx(Users, { className: "h-7 w-7" }),
            link: "/talent",
            color: "from-zion-purple to-zion-purple-light",
            bgColor: "bg-zion-purple/10",
            borderColor: "border-zion-purple/20",
            hoverColor: "hover:border-zion-purple/40"
        },
        {
            title: t('home.tool_services') || "Services",
            description: t('home.tool_services_desc') || "Professional solutions",
            icon: _jsx(Briefcase, { className: "h-7 w-7" }),
            link: "/services",
            color: "from-zion-cyan to-zion-cyan-light",
            bgColor: "bg-zion-cyan/10",
            borderColor: "border-zion-cyan/20",
            hoverColor: "hover:border-zion-cyan/40"
        },
        {
            title: t('home.tool_equipment') || "Equipment",
            description: t('home.tool_equipment_desc') || "Cutting-edge tech",
            icon: _jsx(Settings, { className: "h-7 w-7" }),
            link: "/equipment",
            color: "from-zion-purple to-zion-purple-light",
            bgColor: "bg-zion-purple/10",
            borderColor: "border-zion-purple/20",
            hoverColor: "hover:border-zion-purple/40"
        },
        {
            title: t('nav.community') || "Community",
            description: t('home.tool_chat_desc') || "Connect & collaborate",
            icon: _jsx(MessageSquare, { className: "h-7 w-7" }),
            link: "/community",
            color: "from-zion-cyan to-zion-cyan-light",
            bgColor: "bg-zion-cyan/10",
            borderColor: "border-zion-cyan/20",
            hoverColor: "hover:border-zion-cyan/40"
        },
        {
            title: "Mobile App",
            description: "Zion on the go",
            icon: _jsx(Smartphone, { className: "h-7 w-7" }),
            link: "/mobile-launch",
            color: "from-zion-purple to-zion-purple-light",
            bgColor: "bg-zion-purple/10",
            borderColor: "border-zion-purple/20",
            hoverColor: "hover:border-zion-purple/40"
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
    return (_jsxs("section", { className: "relative py-20 bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute top-10 left-10 w-32 h-32 bg-zion-purple/5 rounded-full blur-3xl" }), _jsx("div", { className: "absolute bottom-10 right-10 w-40 h-40 bg-zion-cyan/5 rounded-full blur-3xl" }), _jsx("div", { className: "absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-zion-blue/5 rounded-full blur-3xl" })] }), _jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, children: [_jsxs("div", { className: "inline-flex items-center gap-2 mb-4 px-4 py-2 bg-zion-blue/20 border border-zion-blue/30 rounded-full backdrop-blur-sm", children: [_jsx(Sparkles, { className: "h-4 w-4 text-zion-cyan" }), _jsx("span", { className: "text-zion-cyan text-sm font-medium", children: "Quick Access" })] }), _jsx("h2", { className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4", children: "Everything You Need" }), _jsx("p", { className: "text-zion-slate-light text-lg md:text-xl max-w-2xl mx-auto", children: "Jump directly to our most popular features and discover the power of Zion" })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: quickLinks.map((link, index) => (_jsx(motion.div, { variants: itemVariants, whileHover: {
                                y: -8,
                                transition: { duration: 0.2 }
                            }, children: _jsxs(Link, { to: link.link, className: `group relative block h-full ${link.bgColor} ${link.borderColor} ${link.hoverColor} border rounded-2xl p-6 transition-all duration-300 backdrop-blur-sm hover:shadow-2xl hover:shadow-zion-purple/10`, children: [_jsx("div", { className: `absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300` }), _jsxs("div", { className: `relative mb-4 bg-gradient-to-br ${link.color} rounded-2xl w-16 h-16 flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-all duration-300`, children: [link.icon, _jsx("div", { className: "absolute inset-0 bg-white/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" })] }), _jsxs("div", { className: "relative", children: [_jsx("h3", { className: "text-white font-semibold mb-2 text-lg group-hover:text-zion-cyan transition-colors duration-300", children: link.title }), _jsx("p", { className: "text-zion-slate-light text-sm mb-4 leading-relaxed group-hover:text-zion-slate-light/80 transition-colors duration-300", children: link.description }), _jsxs("div", { className: "flex items-center text-zion-cyan text-sm font-medium group-hover:text-zion-cyan-light transition-colors duration-300", children: [_jsx("span", { children: "Explore" }), _jsx(ArrowRight, { className: "ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" })] })] }), _jsx("div", { className: "absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-zion-cyan/20 transition-all duration-300" })] }) }, index))) }), _jsx(motion.div, { className: "text-center mt-16", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8, delay: 0.4 }, children: _jsxs(Link, { to: "/marketplace", className: "inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-zion-purple/25", children: [_jsx(Zap, { className: "h-5 w-5" }), "Explore All Features", _jsx(ArrowRight, { className: "h-5 w-5" })] }) })] })] }));
}
