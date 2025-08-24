import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Brain, Shield, Cloud, Database, Zap, Code, Settings, Link as LinkIcon, Phone, Mail, Globe } from "lucide-react";
const features = [
    {
        title: "AI & Machine Learning",
        description: "Transform your business with intelligent automation and data-driven insights",
        icon: _jsx(Brain, { className: "w-8 h-8" }),
        link: "/comprehensive-services#ai-ml",
        color: "from-purple-500 to-indigo-600",
        cta: "Explore AI Services"
    },
    {
        title: "Cybersecurity",
        description: "Protect your organization with comprehensive security solutions and monitoring",
        icon: _jsx(Shield, { className: "w-8 h-8" }),
        link: "/comprehensive-services#cybersecurity",
        color: "from-red-500 to-pink-600",
        cta: "Secure Your Business"
    },
    {
        title: "Cloud & Infrastructure",
        description: "Modernize your infrastructure with cloud solutions and DevOps automation",
        icon: _jsx(Cloud, { className: "w-8 h-8" }),
        link: "/comprehensive-services#cloud-infrastructure",
        color: "from-blue-500 to-cyan-600",
        cta: "Cloud Solutions"
    },
    {
        title: "Data & Analytics",
        description: "Unlock business insights with advanced analytics and data engineering",
        icon: _jsx(Database, { className: "w-8 h-8" }),
        link: "/comprehensive-services#data-analytics",
        color: "from-green-500 to-emerald-600",
        cta: "Data Insights"
    },
    {
        title: "Digital Transformation",
        description: "Accelerate your digital journey with strategic transformation services",
        icon: _jsx(Zap, { className: "w-8 h-8" }),
        link: "/comprehensive-services#digital-transformation",
        color: "from-orange-500 to-red-600",
        cta: "Transform Now"
    },
    {
        title: "Web & Mobile",
        description: "Build custom applications and digital experiences for your business",
        icon: _jsx(Code, { className: "w-8 h-8" }),
        link: "/comprehensive-services#web-mobile",
        color: "from-indigo-500 to-purple-600",
        cta: "Build Apps"
    },
    {
        title: "IT Support & Management",
        description: "Ensure smooth IT operations with managed services and support",
        icon: _jsx(Settings, { className: "w-8 h-8" }),
        link: "/comprehensive-services#it-support",
        color: "from-gray-500 to-slate-600",
        cta: "Get Support"
    },
    {
        title: "Blockchain & Web3",
        description: "Leverage decentralized technologies for innovation and transparency",
        icon: _jsx(LinkIcon, { className: "w-8 h-8" }),
        link: "/comprehensive-services#blockchain-web3",
        color: "from-yellow-500 to-amber-600",
        cta: "Web3 Solutions"
    }
];
export function FeatureCTAs() {
    return (_jsx("section", { className: "py-20 bg-zion-blue", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: ["Professional ", _jsx("span", { className: "text-transparent bg-clip-text bg-gradient-to-r from-zion-cyan to-zion-purple", children: "Technology Services" })] }), _jsx("p", { className: "text-zion-slate-light text-lg max-w-3xl mx-auto", children: "Discover our comprehensive suite of professional technology services designed to accelerate your business growth, enhance security, and drive innovation across all aspects of your organization." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12", children: features.map((feature, index) => (_jsx("div", { className: "group", children: _jsx(Link, { to: feature.link, className: "block", children: _jsxs("div", { className: "rounded-lg overflow-hidden h-full border border-zion-blue-light bg-zion-blue-dark p-6 transition-all duration-300 hover:border-zion-purple/50 hover:translate-y-[-5px]", children: [_jsx("div", { className: `rounded-full w-16 h-16 bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`, children: _jsx("div", { className: "text-white", children: feature.icon }) }), _jsx("h3", { className: "text-white text-xl font-bold mb-3", children: feature.title }), _jsx("p", { className: "text-zion-slate-light text-sm mb-4 leading-relaxed", children: feature.description }), _jsxs(Button, { variant: "outline", className: "w-full border-zion-purple text-zion-cyan hover:bg-zion-purple/10 group-hover:border-zion-cyan group-hover:text-zion-cyan-light transition-all duration-300", children: [feature.cta, _jsx(ArrowRight, { className: "h-4 w-4 ml-2 group-hover:translate-x-1 transition-transform duration-300" })] })] }) }) }, index))) }), _jsx("div", { className: "text-center", children: _jsx(Link, { to: "/comprehensive-services", children: _jsxs(Button, { size: "lg", className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white text-lg px-8 py-6", children: ["View All Services", _jsx(ArrowRight, { className: "h-5 w-5 ml-2" })] }) }) }), _jsx("div", { className: "mt-16 text-center", children: _jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-lg p-8 max-w-4xl mx-auto", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "Ready to Transform Your Business?" }), _jsx("p", { className: "text-zion-slate-light mb-6", children: "Our expert team is ready to help you implement the perfect technology solutions. Get in touch today for a personalized consultation and quote." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white", children: [_jsx(Phone, { className: "h-4 w-4 mr-2" }), "Call +1 302 464 0950"] }), _jsxs(Button, { variant: "outline", className: "border-zion-purple text-zion-cyan hover:bg-zion-purple/10", children: [_jsx(Mail, { className: "h-4 w-4 mr-2" }), "Email kleber@ziontechgroup.com"] }), _jsxs(Button, { variant: "outline", className: "border-zion-purple text-zion-cyan hover:bg-zion-purple/10", children: [_jsx(Globe, { className: "h-4 w-4 mr-2" }), "Visit ziontechgroup.com"] })] }), _jsx("div", { className: "mt-6 text-zion-slate-light text-sm", children: _jsx("p", { children: "Address: 364 E Main St STE 1008, Middletown DE 19709" }) })] }) })] }) }));
}
