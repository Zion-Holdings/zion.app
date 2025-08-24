import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users } from "lucide-react";
import { motion } from "framer-motion";
const categories = [
    {
        title: "Services",
        description: "On-demand IT support, consulting, development, and more",
        icon: _jsx(Briefcase, { className: "w-10 h-10" }),
        link: "/services",
        color: "from-purple-500 to-indigo-600",
        delay: 0.1,
    },
    {
        title: "Talents",
        description: "Connect with AI experts, developers, and tech specialists",
        icon: _jsx(Users, { className: "w-10 h-10" }),
        link: "/talent",
        color: "from-cyan-500 to-blue-600",
        delay: 0.2,
    },
    {
        title: "Equipment",
        description: "Rent or buy specialized hardware, servers, and devices",
        icon: _jsx(HardDrive, { className: "w-10 h-10" }),
        link: "/equipment",
        color: "from-amber-500 to-orange-600",
        delay: 0.3,
    },
    {
        title: "Innovation",
        description: "Discover cutting-edge solutions and tech breakthroughs",
        icon: _jsx(Lightbulb, { className: "w-10 h-10" }),
        link: "/category/innovation",
        color: "from-emerald-500 to-green-600",
        delay: 0.4,
    },
];
const specialServices = [
    {
        title: "IT Onsite Services",
        link: "/it-onsite-services"
    },
    {
        title: "Micro SAAS Services",
        link: "/micro-saas-services"
    }
];
export function CategoriesSection({ showTitle = true }) {
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
        hidden: { y: 30, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };
    return (_jsxs("section", { className: "py-20 bg-zion-blue relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 opacity-5", children: _jsx("div", { className: "absolute inset-0", style: {
                        backgroundImage: `radial-gradient(circle at 25% 25%, rgba(34, 221, 210, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(140, 21, 233, 0.1) 0%, transparent 50%)`
                    } }) }), _jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [showTitle && (_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6 }, viewport: { once: true }, children: [_jsx(GradientHeading, { children: "Explore Categories" }), _jsx("p", { className: "text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto", children: "Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation" })] })), _jsx(motion.div, { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: categories.map((category, index) => (_jsx(motion.div, { variants: itemVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, transition: { delay: category.delay }, children: _jsx(Link, { to: category.link, className: "group block", children: _jsxs(motion.div, { className: "rounded-xl overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 hover:border-zion-purple/50 hover:shadow-2xl hover:shadow-zion-purple/20", whileHover: {
                                        y: -8,
                                        scale: 1.02,
                                        transition: { duration: 0.3 }
                                    }, whileTap: { scale: 0.98 }, children: [_jsx(motion.div, { className: `rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`, whileHover: { rotate: 5 }, children: _jsx("div", { className: "text-white", children: category.icon }) }), _jsx("h3", { className: "text-white text-xl font-bold mb-2 group-hover:text-zion-cyan transition-colors duration-300", children: category.title }), _jsx("p", { className: "text-zion-slate-light group-hover:text-zion-slate-light/80 transition-colors duration-300", children: category.description }), _jsx("div", { className: "mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300", children: _jsx("div", { className: "w-8 h-0.5 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-full" }) })] }) }) }, category.title))) }), _jsxs(motion.div, { className: "mt-12", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.5 }, viewport: { once: true }, children: [_jsx("h3", { className: "text-center text-xl font-bold text-white mb-6", children: "Featured Services" }), _jsx("div", { className: "flex flex-wrap justify-center gap-4", children: specialServices.map((service) => (_jsx(motion.div, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: _jsx(Link, { to: service.link, className: "px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300 hover:shadow-lg hover:shadow-zion-purple/25", children: service.title }) }, service.title))) })] }), _jsx(motion.div, { className: "mt-12 flex justify-center", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.6 }, viewport: { once: true }, children: _jsxs(Link, { to: "/categories", className: "text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors duration-300 hover:text-zion-cyan-light group", children: [_jsx("span", { className: "group-hover:mr-2 transition-all duration-300", children: "View All Categories" }), _jsx("span", { className: "opacity-0 group-hover:opacity-100 transition-all duration-300", children: " \u2192" })] }) })] })] }));
}
