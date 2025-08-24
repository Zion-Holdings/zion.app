import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Star, Shield, Zap } from "lucide-react";
import { motion } from "framer-motion";
export function FeatureHighlights() {
    const highlightsData = [
        {
            title: "For Talent Seekers",
            icon: _jsx(Star, { className: "h-8 w-8 text-zion-cyan" }),
            features: [
                "AI-powered talent matching based on your specific project requirements",
                "Verified profiles with skills validation and credential checking",
                "Transparent pricing and no hidden fees",
                "Direct communication with potential candidates",
                "Secure payment protection and dispute resolution",
                "Post jobs and receive AI-matched applicants"
            ],
            color: "from-zion-cyan/10 to-zion-blue/5",
            borderColor: "border-zion-cyan/30"
        },
        {
            title: "For Talent & Service Providers",
            icon: _jsx(Zap, { className: "h-8 w-8 text-zion-purple" }),
            features: [
                "Create a professional profile showcasing your skills and experience",
                "Get matched with relevant projects that fit your expertise",
                "Secure payment processing with on-time disbursements",
                "Build your reputation through client reviews and ratings",
                "Access to enterprise clients and high-value projects",
                "Professional development resources and community support"
            ],
            color: "from-zion-purple/10 to-zion-blue/5",
            borderColor: "border-zion-purple/30"
        },
        {
            title: "For Enterprise Clients",
            icon: _jsx(Shield, { className: "h-8 w-8 text-zion-cyan" }),
            features: [
                "White-labeled talent portal with your company branding",
                "Dedicated account management and priority support",
                "Custom talent pools and preferred provider networks",
                "Advanced analytics and reporting capabilities",
                "API access for seamless integration with your HR systems",
                "Customizable workflow and approval processes"
            ],
            color: "from-zion-cyan/10 to-zion-blue/5",
            borderColor: "border-zion-cyan/30"
        }
    ];
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.1
            }
        }
    };
    const cardVariants = {
        hidden: { y: 30, opacity: 0, scale: 0.95 },
        visible: {
            y: 0,
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        },
        hover: {
            y: -5,
            scale: 1.02,
            transition: {
                duration: 0.2,
                ease: "easeOut"
            }
        }
    };
    const featureVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.4,
                ease: "easeOut"
            }
        }
    };
    return (_jsx("section", { className: "py-20 bg-gradient-to-b from-zion-blue to-zion-blue-dark", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Tailored Solutions for Everyone" }), _jsx("p", { className: "text-zion-slate-light text-xl max-w-4xl mx-auto leading-relaxed", children: "Whatever your role in the tech ecosystem, Zion offers specialized features to help you succeed and grow" })] }), _jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: highlightsData.map((category, index) => (_jsx(motion.div, { variants: cardVariants, whileHover: "hover", className: "group", children: _jsx(Card, { className: `
                bg-gradient-to-br ${category.color} 
                border ${category.borderColor} 
                hover:border-zion-purple/50 
                transition-all duration-300 
                h-full
                backdrop-blur-sm
                hover:shadow-2xl hover:shadow-zion-purple/20
                group-hover:bg-gradient-to-br group-hover:from-zion-purple/10 group-hover:to-zion-blue/20
              `, children: _jsxs(CardContent, { className: "p-8", children: [_jsxs("div", { className: "flex items-center gap-3 mb-6", children: [_jsx("div", { className: "p-3 rounded-full bg-zion-blue-dark/50 group-hover:scale-110 transition-transform duration-300", children: category.icon }), _jsx("h3", { className: "text-2xl font-bold text-white group-hover:text-zion-cyan transition-colors", children: category.title })] }), _jsx(motion.ul, { className: "space-y-4", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: category.features.map((feature, idx) => (_jsxs(motion.li, { className: "flex items-start", variants: featureVariants, children: [_jsx("div", { className: "flex-shrink-0 mr-3 mt-1", children: _jsx(Check, { className: "h-5 w-5 text-zion-cyan group-hover:text-zion-purple transition-colors" }) }), _jsx("span", { className: "text-zion-slate-light leading-relaxed group-hover:text-white transition-colors", children: feature })] }, idx))) })] }) }) }, index))) })] }) }));
}
