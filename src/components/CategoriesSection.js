import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users } from "lucide-react";
const categories = [
    {
        title: "Services",
        description: "On-demand IT support, consulting, development, and more",
        icon: _jsx(Briefcase, { className: "w-10 h-10" }),
        link: "/services",
        color: "from-purple-500 to-indigo-600",
    },
    {
        title: "Talents",
        description: "Connect with AI experts, developers, and tech specialists",
        icon: _jsx(Users, { className: "w-10 h-10" }),
        link: "/talent",
        color: "from-cyan-500 to-blue-600",
    },
    {
        title: "Equipment",
        description: "Rent or buy specialized hardware, servers, and devices",
        icon: _jsx(HardDrive, { className: "w-10 h-10" }),
        link: "/equipment",
        color: "from-amber-500 to-orange-600",
    },
    {
        title: "Innovation",
        description: "Discover cutting-edge solutions and tech breakthroughs",
        icon: _jsx(Lightbulb, { className: "w-10 h-10" }),
        link: "/category/innovation",
        color: "from-emerald-500 to-green-600",
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
    return (_jsx("section", { className: "py-20 bg-zion-blue", children: _jsxs("div", { className: "container mx-auto px-4", children: [showTitle && (_jsxs("div", { className: "text-center mb-16", children: [_jsx(GradientHeading, { children: "Explore Categories" }), _jsx("p", { className: "text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto", children: "Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation" })] })), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6", children: categories.map((category) => (_jsx(Link, { to: category.link, className: "group block", children: _jsxs("div", { className: "rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px]", children: [_jsx("div", { className: `rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`, children: _jsx("div", { className: "text-white", children: category.icon }) }), _jsx("h3", { className: "text-white text-xl font-bold mb-2", children: category.title }), _jsx("p", { className: "text-zion-slate-light", children: category.description })] }) }, category.title))) }), _jsxs("div", { className: "mt-8", children: [_jsx("h3", { className: "text-center text-xl font-bold text-white mb-6", children: "Featured Services" }), _jsx("div", { className: "flex flex-wrap justify-center gap-4", children: specialServices.map((service) => (_jsx(Link, { to: service.link, className: "px-6 py-3 bg-zion-blue-light hover:bg-zion-blue-dark border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300", children: service.title }, service.title))) })] }), _jsxs("div", { className: "mt-12 flex justify-center gap-6", children: [_jsx(Link, { to: "/categories", className: "text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors", children: "View All Categories \u2192" }), _jsx(Link, { to: "/pricing", className: "text-zion-cyan border-b border-zion-cyan hover:border-zion-cyan-dark transition-colors", children: "View Pricing \u2192" })] })] }) }));
}
