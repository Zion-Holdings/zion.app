import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { ArrowRight, Search, Users, Briefcase, Settings, MessageSquare, Smartphone } from "lucide-react";
export function QuickAccess() {
    const { t } = useTranslation();
    const quickLinks = [
        {
            title: t('home.tool_ai_matcher'),
            description: t('home.tool_ai_matcher_desc'),
            icon: _jsx(Search, { className: "h-6 w-6 text-zion-cyan" }),
            link: "/match",
            color: "from-zion-cyan/20 to-zion-cyan/5",
            borderColor: "border-zion-cyan/30",
            iconBg: "bg-zion-cyan/20"
        },
        {
            title: t('home.tool_talent'),
            description: t('home.tool_talent_desc'),
            icon: _jsx(Users, { className: "h-6 w-6 text-zion-purple" }),
            link: "/talent",
            color: "from-zion-purple/20 to-zion-purple/5",
            borderColor: "border-zion-purple/30",
            iconBg: "bg-zion-purple/20"
        },
        {
            title: t('home.tool_services'),
            description: t('home.tool_services_desc'),
            icon: _jsx(Briefcase, { className: "h-6 w-6 text-zion-cyan" }),
            link: "/services",
            color: "from-zion-cyan/20 to-zion-cyan/5",
            borderColor: "border-zion-cyan/30",
            iconBg: "bg-zion-cyan/20"
        },
        {
            title: t('home.tool_equipment'),
            description: t('home.tool_equipment_desc'),
            icon: _jsx(Settings, { className: "h-6 w-6 text-zion-purple" }),
            link: "/equipment",
            color: "from-zion-purple/20 to-zion-purple/5",
            borderColor: "border-zion-purple/30",
            iconBg: "bg-zion-purple/20"
        },
        {
            title: t('nav.community'),
            description: t('home.tool_chat_desc'),
            icon: _jsx(MessageSquare, { className: "h-6 w-6 text-zion-cyan" }),
            link: "/community",
            color: "from-zion-cyan/20 to-zion-cyan/5",
            borderColor: "border-zion-cyan/30",
            iconBg: "bg-zion-cyan/20"
        },
        {
            title: "Mobile App",
            description: "Zion on the go",
            icon: _jsx(Smartphone, { className: "h-6 w-6 text-zion-purple" }),
            link: "/mobile-launch",
            color: "from-zion-purple/20 to-zion-purple/5",
            borderColor: "border-zion-purple/30",
            iconBg: "bg-zion-purple/20"
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
        },
        hover: {
            y: -8,
            scale: 1.02,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    };
    return (_jsx("section", { className: "py-16 bg-gradient-to-b from-zion-blue-dark to-zion-blue", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs(motion.div, { className: "text-center mb-12", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-4", children: "Quick Access" }), _jsx("p", { className: "text-zion-slate-light text-lg md:text-xl max-w-2xl mx-auto", children: "Jump directly to our most popular features and start exploring the future of tech talent" })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 max-w-7xl mx-auto", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: quickLinks.map((link, index) => (_jsx(motion.div, { variants: cardVariants, whileHover: "hover", className: "group", children: _jsx(Link, { to: link.link, className: "block h-full", children: _jsxs("div", { className: `
                  bg-gradient-to-br ${link.color} 
                  border ${link.borderColor} 
                  hover:border-zion-purple/50 
                  rounded-xl p-6 
                  transition-all duration-300 
                  flex flex-col items-center text-center
                  h-full
                  backdrop-blur-sm
                  hover:shadow-2xl hover:shadow-zion-purple/20
                  group-hover:bg-gradient-to-br group-hover:from-zion-purple/10 group-hover:to-zion-blue/20
                `, children: [_jsx("div", { className: `
                    ${link.iconBg} 
                    rounded-full w-16 h-16 
                    flex items-center justify-center mb-4
                    group-hover:scale-110 transition-transform duration-300
                    group-hover:shadow-lg
                  `, children: _jsx("div", { className: "group-hover:rotate-12 transition-transform duration-300", children: link.icon }) }), _jsx("h3", { className: "text-white font-semibold mb-2 text-sm md:text-base group-hover:text-zion-cyan transition-colors", children: link.title }), _jsx("p", { className: "text-zion-slate-light text-xs mb-4 flex-grow leading-relaxed", children: link.description }), _jsxs("div", { className: "flex items-center text-zion-cyan text-xs mt-auto group-hover:text-zion-purple transition-colors", children: [_jsx("span", { className: "font-medium", children: t('general.explore') }), _jsx(ArrowRight, { className: "ml-1 h-3 w-3 group-hover:translate-x-1 transition-transform" })] })] }) }) }, index))) })] }) }));
}
