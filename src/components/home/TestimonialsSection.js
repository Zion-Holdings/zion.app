import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Star, Quote, CheckCircle } from 'lucide-react';
const testimonials = [
    {
        id: 1,
        name: "Sarah Chen",
        role: "CTO at TechFlow Inc.",
        company: "TechFlow Inc.",
        avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
        content: "Zion Tech Group transformed our IT infrastructure. Their 24/7 support and certified technicians saved us countless hours and prevented major downtime.",
        rating: 5,
        category: "IT Services"
    },
    {
        id: 2,
        name: "Marcus Rodriguez",
        role: "Founder & CEO",
        company: "InnovateLab",
        avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
        content: "Finding the right AI talent was a game-changer for our startup. Zion's matching algorithm connected us with experts who perfectly fit our needs.",
        rating: 5,
        category: "AI Talent"
    },
    {
        id: 3,
        name: "Dr. Emily Watson",
        role: "Research Director",
        company: "Quantum Research Institute",
        avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
        content: "The quality of equipment and services we've sourced through Zion has accelerated our research by months. Highly recommended for any tech needs.",
        rating: 5,
        category: "Equipment & Services"
    },
    {
        id: 4,
        name: "David Kim",
        role: "Operations Manager",
        company: "Global Solutions Corp",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
        content: "We operate in 12 countries and Zion's global network has been invaluable. Same quality service everywhere, anytime we need it.",
        rating: 5,
        category: "Global Services"
    },
    {
        id: 5,
        name: "Lisa Thompson",
        role: "VP of Engineering",
        company: "CloudScale Technologies",
        avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop&crop=face",
        content: "The marketplace is incredibly intuitive and the vetting process gives us confidence. We've built long-term partnerships through Zion.",
        rating: 5,
        category: "Marketplace"
    },
    {
        id: 6,
        name: "James Wilson",
        role: "IT Director",
        company: "Healthcare Plus",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
        content: "Critical IT support when we need it most. Zion's emergency response team has been our lifeline during system outages.",
        rating: 5,
        category: "Emergency Support"
    }
];
const stats = [
    { number: "99.2%", label: "Customer Satisfaction" },
    { number: "4.9/5", label: "Average Rating" },
    { number: "50K+", label: "Projects Completed" },
    { number: "150+", label: "Countries Served" }
];
export function TestimonialsSection() {
    return (_jsx("section", { className: "py-20 bg-gradient-to-b from-zion-blue-light to-zion-blue-dark", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6 }, className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Trusted by Industry Leaders" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "Join thousands of satisfied customers who have transformed their businesses with Zion Tech Group" })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.2 }, className: "grid grid-cols-2 md:grid-cols-4 gap-8 mb-16", children: stats.map((stat, index) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "text-3xl md:text-4xl font-bold text-white mb-2", children: stat.number }), _jsx("div", { className: "text-zion-slate-light text-sm md:text-base", children: stat.label })] }, stat.label))) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16", children: testimonials.map((testimonial, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: index * 0.1 }, whileHover: { y: -5, scale: 1.02 }, className: "group", children: _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-xl p-6 h-full border border-white/20 hover:border-white/40 transition-all duration-300", children: [_jsx("div", { className: "mb-4", children: _jsx(Quote, { className: "w-8 h-8 text-zion-purple opacity-60" }) }), _jsxs("p", { className: "text-zion-slate-light mb-6 leading-relaxed", children: ["\"", testimonial.content, "\""] }), _jsx("div", { className: "flex items-center gap-1 mb-4", children: [...Array(testimonial.rating)].map((_, i) => (_jsx(Star, { className: "w-4 h-4 text-yellow-400 fill-current" }, i))) }), _jsx("div", { className: "inline-block bg-zion-purple/20 text-zion-purple text-xs px-3 py-1 rounded-full mb-4", children: testimonial.category }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: "w-12 h-12 rounded-full overflow-hidden bg-zion-blue-light", children: _jsx("img", { src: testimonial.avatar, alt: testimonial.name, className: "w-full h-full object-cover" }) }), _jsxs("div", { children: [_jsx("div", { className: "font-semibold text-white text-sm", children: testimonial.name }), _jsx("div", { className: "text-zion-slate-light text-xs", children: testimonial.role }), _jsx("div", { className: "text-zion-slate-light text-xs", children: testimonial.company })] })] })] }) }, testimonial.id))) }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.6, delay: 0.8 }, className: "text-center", children: _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-6", children: "Why Companies Choose Zion" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(CheckCircle, { className: "w-6 h-6 text-green-400" }), _jsx("span", { className: "text-zion-slate-light", children: "Verified & Background-Checked Providers" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(CheckCircle, { className: "w-6 h-6 text-green-400" }), _jsx("span", { className: "text-zion-slate-light", children: "24/7 Global Support & Emergency Response" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(CheckCircle, { className: "w-6 h-6 text-green-400" }), _jsx("span", { className: "text-zion-slate-light", children: "AI-Powered Matching & Quality Guarantee" })] })] }), _jsx("div", { className: "mt-8", children: _jsx("button", { className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 hover:scale-105", children: "Join Our Success Stories" }) })] }) })] }) }));
}
