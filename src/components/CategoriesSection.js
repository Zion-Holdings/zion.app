import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GradientHeading } from "./GradientHeading";
import { Link } from "react-router-dom";
import { Briefcase, HardDrive, Lightbulb, Users, Zap, Shield, Cloud, Database, TrendingUp, ArrowRight } from "lucide-react";
import Cpu from "lucide-react/dist/esm/icons/cpu";
import { Link as LinkIcon } from "lucide-react";
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
        link: "/it-onsite-services"
    },
    {
        title: "AI & Automation",
        link: "/expanded-services?category=ai-automation"
    },
    {
        title: "Cybersecurity",
        link: "/expanded-services?category=cybersecurity"
    },
    {
        title: "Cloud & DevOps",
        link: "/expanded-services?category=cloud-devops"
    },
    {
        title: "Data & Analytics",
        link: "/expanded-services?category=data-analytics"
    },
    {
        title: "Digital Transformation",
        link: "/expanded-services?category=digital-transformation"
    },
    {
        title: "IoT & Edge Computing",
        link: "/expanded-services?category=iot-edge"
    },
    {
        title: "Blockchain & Web3",
        link: "/expanded-services?category=blockchain-web3"
    },
    {
        title: "AI Services",
        link: "/ai-services"
    },
    {
        title: "Micro SAAS",
        link: "/micro-saas"
    },
    {
        title: "All Services",
        link: "/comprehensive-services"
    },
    {
        title: "Comprehensive Services",
        link: "/comprehensive-services"
    },
    {
        title: "Pricing & Plans",
        link: "/pricing"
    }
];
const serviceCategories = [
    {
        title: "AI & Automation",
        description: "Intelligent automation and AI solutions",
        icon: _jsx(Zap, { className: "w-8 h-8" }),
        color: "from-purple-500 to-indigo-600",
        link: "/expanded-services?category=ai-automation"
    },
    {
        title: "Cybersecurity",
        description: "Advanced security and compliance",
        icon: _jsx(Shield, { className: "w-8 h-8" }),
        color: "from-red-500 to-pink-600",
        link: "/expanded-services?category=cybersecurity"
    },
    {
        title: "Cloud & DevOps",
        description: "Cloud migration and automation",
        icon: _jsx(Cloud, { className: "w-8 h-8" }),
        color: "from-blue-500 to-cyan-600",
        link: "/expanded-services?category=cloud-devops"
    },
    {
        title: "Data & Analytics",
        description: "Business intelligence and governance",
        icon: _jsx(Database, { className: "w-8 h-8" }),
        color: "from-green-500 to-emerald-600",
        link: "/expanded-services?category=data-analytics"
    },
    {
        title: "Digital Transformation",
        description: "Strategy and modernization",
        icon: _jsx(TrendingUp, { className: "w-8 h-8" }),
        color: "from-orange-500 to-yellow-600",
        link: "/expanded-services?category=digital-transformation"
    },
    {
        title: "IoT & Edge",
        description: "Connected solutions and edge computing",
        icon: _jsx(Cpu, { className: "w-8 h-8" }),
        color: "from-indigo-500 to-purple-600",
        link: "/expanded-services?category=iot-edge"
    },
    {
        title: "Blockchain & Web3",
        description: "Decentralized solutions and smart contracts",
        icon: _jsx(LinkIcon, { className: "w-8 h-8" }),
        color: "from-teal-500 to-blue-600",
        link: "/expanded-services?category=blockchain-web3"
    }
];
;
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
                    } }) }), _jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [showTitle && (_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: [_jsx(GradientHeading, { children: "Explore Categories" }), _jsx("p", { className: "text-zion-slate-light text-lg mt-4 max-w-2xl mx-auto", children: "Discover our comprehensive ecosystem of tech services, talent, equipment, and innovation" })] })), _jsx(motion.div, { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: categories.map((category, index) => (_jsx(motion.div, { variants: itemVariants, children: _jsx(Link, { to: category.link, className: "group block", children: _jsxs("div", { className: "rounded-xl overflow-hidden h-full border border-zion-blue-light/30 bg-gradient-to-br from-zion-blue-dark/80 to-zion-blue-dark/40 backdrop-blur-sm p-6 transition-all duration-500 hover:border-zion-purple/50 hover:translate-y-[-8px] hover:shadow-2xl hover:shadow-zion-purple/20 group-hover:scale-[1.02]", children: [_jsx("div", { className: `rounded-full w-16 h-16 bg-gradient-to-br ${category.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`, children: _jsx("div", { className: "text-white", children: category.icon }) }), _jsx("h3", { className: "text-white text-xl font-bold mb-3 group-hover:text-zion-cyan transition-colors duration-300", children: category.title }), _jsx("p", { className: "text-zion-slate-light mb-4 leading-relaxed", children: category.description }), _jsx("ul", { className: "space-y-2 mb-4", children: category.features.map((feature, idx) => (_jsxs("li", { className: "flex items-center gap-2 text-sm text-zion-cyan/70", children: [_jsx("div", { className: "w-3 h-3 bg-zion-cyan rounded-full" }), _jsx("span", { children: feature })] }, idx))) }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-zion-cyan text-sm font-medium", children: "Learn More" }), _jsx(ArrowRight, { className: "w-4 h-4 text-zion-cyan group-hover:translate-x-1 transition-transform duration-300" })] })] }) }) }, category.title))) }), _jsxs("div", { className: "mb-12", children: [_jsx("h3", { className: "text-center text-2xl font-bold text-white mb-8", children: "Professional Service Categories" }), _jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4", children: serviceCategories.map((category) => (_jsx(Link, { to: category.link, className: "group block", children: _jsxs("div", { className: "rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-4 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-2px]", children: [_jsx("div", { className: `rounded-full w-12 h-12 bg-gradient-to-br ${category.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`, children: _jsx("div", { className: "text-white", children: category.icon }) }), _jsx("h4", { className: "text-white text-sm font-bold mb-1", children: category.title }), _jsx("p", { className: "text-zion-slate-light text-xs", children: category.description })] }) }, category.title))) })] }), _jsxs(motion.div, { className: "mt-12", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.4 }, children: [_jsx("h3", { className: "text-center text-xl font-bold text-white mb-6", children: "Featured Services" }), _jsx("div", { className: "flex flex-wrap justify-center gap-4", children: specialServices.map((service) => (_jsx(Link, { to: service.link, className: "group relative px-6 py-3 bg-gradient-to-r from-zion-blue-light to-zion-purple/30 hover:from-zion-purple/40 hover:to-zion-purple/60 border border-zion-purple/20 hover:border-zion-purple/50 rounded-full text-zion-cyan transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-zion-purple/25", children: service.title }, service.title))) })] }), _jsx(motion.div, { className: "mt-12 flex justify-center", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.6 }, children: _jsxs(Link, { to: "/expanded-services", className: "group inline-flex items-center gap-2 text-zion-cyan border-b-2 border-zion-cyan hover:border-zion-cyan-dark transition-colors duration-300 text-lg font-medium", children: ["View All Services", _jsx(ArrowRight, { className: "w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" })] }) })] })] }));
}
