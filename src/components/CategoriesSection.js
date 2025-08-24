import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users, ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";
const categories = [
    {
        title: "Services",
        description: "On-demand IT support, consulting, development, and more",
        icon: _jsx(Briefcase, { className: "w-10 h-10" }),
        link: "/services",
        color: "from-purple-500 to-indigo-600",
        gradient: "from-zion-purple to-zion-purple-dark",
        features: ["24/7 Support", "Expert Teams", "Custom Solutions"]
    },
    {
        title: "Talents",
        description: "Connect with AI experts, developers, and tech specialists",
        icon: _jsx(Users, { className: "w-10 h-10" }),
        link: "/talent",
        color: "from-cyan-500 to-blue-600",
        gradient: "from-zion-cyan to-zion-cyan-dark",
        features: ["AI Experts", "Global Network", "Verified Profiles"]
    },
    {
        title: "Equipment",
        description: "Rent or buy specialized hardware, servers, and devices",
        icon: _jsx(HardDrive, { className: "w-10 h-10" }),
        link: "/equipment",
        color: "from-amber-500 to-orange-600",
        gradient: "from-amber-400 to-orange-500",
        features: ["High-End Hardware", "Flexible Rental", "Quick Delivery"]
    },
    {
        title: "Innovation",
        description: "Discover cutting-edge solutions and tech breakthroughs",
        icon: _jsx(Lightbulb, { className: "w-10 h-10" }),
        link: "/category/innovation",
        color: "from-emerald-500 to-green-600",
        gradient: "from-emerald-400 to-green-500",
        features: ["Latest Tech", "Research Labs", "Startup Solutions"]
    },
];
const specialServices = [
    {
        title: "IT Onsite Services",
        link: "/it-onsite-services",
        badge: "Popular"
    },
    {
        title: "All Services",
        link: "/all-services"
    },
    {
        title: "Expanded Services",
        link: "/expanded-services"
    },
    {
        title: "Service Comparison",
        link: "/service-comparison"
    },
    {
        title: "Cost Calculator",
        link: "/service-calculator"
    },
    {
        title: "Service Analytics",
        link: "/service-analytics"
    },
    {
        title: "Service Marketplace",
        link: "/service-marketplace"
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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                ease: "easeOut"
            }
        }
    };
    return (_jsxs("section", { className: "py-20 bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 opacity-5", children: _jsx("div", { className: "absolute inset-0", style: {
                        backgroundImage: `radial-gradient(circle at 25% 25%, currentColor 1px, transparent 1px)`,
                        backgroundSize: '50px 50px'
                    } }) }), _jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [showTitle && (_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: [_jsx(GradientHeading, { children: "Explore Categories" }), _jsx("p", { className: "text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto", children: "Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation" })] })), _jsx(motion.div, { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: categories.map((category, index) => (_jsx(motion.div, { variants: itemVariants, children: _jsx(Link, { to: category.link, className: "group block", children: _jsxs("div", { className: "rounded-xl overflow-hidden h-full border border-zion-blue-light/30 bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm p-6 transition-all duration-500 hover:border-zion-purple/50 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-purple/20 group-hover:scale-[1.02]", children: [_jsx("div", { className: `rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`, children: _jsx("div", { className: "text-white", children: category.icon }) }), _jsx("h3", { className: "text-white text-xl font-bold mb-3 group-hover:text-zion-cyan transition-colors duration-300", children: category.title }), _jsx("p", { className: "text-zion-slate-light mb-4 leading-relaxed", children: category.description }), _jsx("ul", { className: "space-y-2 mb-4", children: category.features.map((feature, idx) => (_jsxs("li", { className: "flex items-center gap-2 text-sm text-zion-cyan/70", children: [_jsx(Star, { className: "w-3 h-3 fill-current" }), _jsx("span", { children: feature })] }, idx))) }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-zion-cyan text-sm font-medium", children: "Learn More" }), _jsx(ArrowRight, { className: "w-4 h-4 text-zion-cyan group-hover:translate-x-1 transition-transform duration-300" })] })] }) }) }, category.title))) }), _jsxs(motion.div, { className: "mt-12", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.4 }, children: [_jsx("h3", { className: "text-center text-xl font-bold text-white mb-6", children: "Featured Services" }), _jsx("div", { className: "flex flex-wrap justify-center gap-4", children: specialServices.map((service) => (_jsxs(Link, { to: service.link, className: "group relative px-6 py-3 bg-gradient-to-r from-zion-blue-light to-zion-purple/30 hover:from-zion-purple/40 hover:to-zion-purple/60 border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-purple/25", children: [service.title, service.badge && (_jsx("span", { className: "absolute -top-2 -right-2 bg-zion-cyan text-zion-blue-dark text-xs px-2 py-1 rounded-full font-bold", children: service.badge }))] }, service.title))) })] }), _jsx(motion.div, { className: "mt-12 flex justify-center", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.6 }, children: _jsxs(Link, { to: "/categories", className: "group inline-flex items-center gap-2 text-zion-cyan border-b-2 border-zion-cyan hover:border-zion-cyan-dark transition-colors duration-300 text-lg font-medium", children: ["View All Categories", _jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" })] }) })] })] }));
}
