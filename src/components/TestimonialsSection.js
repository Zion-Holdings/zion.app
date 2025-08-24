import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { GradientHeading } from "./GradientHeading";
import { motion } from "framer-motion";
import { Star, Quote, Users, Building, Globe } from "lucide-react";
const testimonials = [
    {
        name: "Sarah Chen",
        role: "CTO at TechFlow",
        company: "TechFlow Inc.",
        avatar: "SC",
        content: "Zion's AI matching system found us the perfect AI consultant in 24 hours. The quality and speed exceeded our expectations. We've saved 40% on development costs.",
        rating: 5,
        category: "AI Services"
    },
    {
        name: "Marcus Rodriguez",
        role: "Founder & CEO",
        company: "DataVault",
        avatar: "MR",
        content: "The talent pool on Zion is incredible. We hired three senior developers within a week, all perfectly matched to our tech stack and culture.",
        rating: 5,
        category: "Talent"
    },
    {
        name: "Dr. Emily Watson",
        role: "Research Director",
        company: "AI Research Lab",
        avatar: "EW",
        content: "Zion connected us with cutting-edge hardware suppliers and AI specialists. Our research projects are now running 3x faster than before.",
        rating: 5,
        category: "Equipment & Services"
    },
    {
        name: "David Kim",
        role: "VP Engineering",
        company: "CloudScale",
        avatar: "DK",
        content: "The platform's security and verification process gave us confidence to work with international partners. Zion has become our go-to for all tech needs.",
        rating: 5,
        category: "Enterprise"
    },
    {
        name: "Lisa Thompson",
        role: "Product Manager",
        company: "InnovateCorp",
        avatar: "LT",
        content: "Zion's marketplace is incredibly intuitive. We found specialized AI tools and services that we didn't even know existed. Game changer for our product development.",
        rating: 5,
        category: "Innovation"
    },
    {
        name: "Alex Johnson",
        role: "Freelance Developer",
        company: "Independent",
        avatar: "AJ",
        content: "As a freelancer, Zion has opened up incredible opportunities. The AI matching system connects me with projects that perfectly fit my skills and interests.",
        rating: 5,
        category: "Freelance"
    }
];
const stats = [
    { label: "Active Users", value: "10,000+", icon: Users },
    { label: "Countries", value: "150+", icon: Globe },
    { label: "Companies", value: "2,500+", icon: Building },
    { label: "Success Rate", value: "99%", icon: Star }
];
export function TestimonialsSection() {
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
        hidden: { opacity: 0, y: 30, scale: 0.9 },
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
    const cardVariants = {
        hover: {
            y: -8,
            scale: 1.02,
            transition: {
                duration: 0.3,
                ease: "easeOut"
            }
        }
    };
    return (_jsxs("section", { className: "py-20 bg-gradient-to-b from-zion-blue-dark to-zion-slate relative overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 opacity-5", children: _jsx("div", { className: "absolute inset-0", style: {
                        backgroundImage: `radial-gradient(circle at 25% 75%, ${'#22ddd2'} 2px, transparent 2px)`,
                        backgroundSize: '100px 100px'
                    } }) }), _jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [_jsxs(motion.div, { className: "text-center mb-20", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, children: [_jsx(GradientHeading, { className: "text-4xl md:text-5xl mb-6", children: "Trusted by Industry Leaders" }), _jsx("p", { className: "text-zion-slate-light text-lg md:text-xl mt-4 max-w-3xl mx-auto leading-relaxed", children: "See how businesses and professionals worldwide are transforming their operations with Zion's AI-powered marketplace" })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-6 mb-20", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: stats.map((stat, index) => (_jsxs(motion.div, { variants: itemVariants, className: "text-center", children: [_jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-zion-purple/20 border border-zion-purple/30 rounded-xl mb-4", children: _jsx(stat.icon, { className: "w-8 h-8 text-zion-cyan" }) }), _jsx("div", { className: "text-3xl font-bold text-white mb-2", children: stat.value }), _jsx("div", { className: "text-zion-slate-light", children: stat.label })] }, stat.label))) }), _jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: testimonials.map((testimonial, index) => (_jsx(motion.div, { variants: itemVariants, children: _jsxs(motion.div, { className: "group relative h-full bg-zion-blue-dark/60 backdrop-blur-sm border border-zion-blue-light/30 rounded-xl p-6 hover:border-zion-purple/50 transition-all duration-300", variants: cardVariants, whileHover: "hover", children: [_jsx("div", { className: "absolute top-4 right-4 text-zion-purple/30 group-hover:text-zion-purple/50 transition-colors duration-300", children: _jsx(Quote, { className: "w-8 h-8" }) }), _jsx("div", { className: "flex items-center gap-1 mb-4", children: [...Array(testimonial.rating)].map((_, i) => (_jsx(Star, { className: "w-4 h-4 fill-zion-cyan text-zion-cyan" }, i))) }), _jsxs("p", { className: "text-zion-slate-light leading-relaxed mb-6 text-sm", children: ["\"", testimonial.content, "\""] }), _jsx("div", { className: "inline-flex items-center gap-2 px-3 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded-full mb-4", children: _jsx("span", { className: "text-zion-cyan text-xs font-medium", children: testimonial.category }) }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-cyan rounded-full flex items-center justify-center text-white font-bold text-lg", children: testimonial.avatar }), _jsxs("div", { children: [_jsx("div", { className: "text-white font-semibold", children: testimonial.name }), _jsx("div", { className: "text-zion-slate-light text-sm", children: testimonial.role }), _jsx("div", { className: "text-zion-cyan text-sm", children: testimonial.company })] })] })] }) }, index))) }), _jsx(motion.div, { className: "mt-20 text-center", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.4 }, children: _jsxs("div", { className: "inline-flex items-center gap-3 px-8 py-4 bg-zion-purple/20 backdrop-blur-sm border border-zion-purple/30 rounded-full", children: [_jsx(Star, { className: "w-6 h-6 text-zion-cyan" }), _jsx("span", { className: "text-zion-cyan font-semibold text-lg", children: "Join thousands of satisfied users" })] }) })] })] }));
}
