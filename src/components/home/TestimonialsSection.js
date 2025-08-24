import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from "framer-motion";
import { Star, Quote, CheckCircle, Shield, Users, Globe } from "lucide-react";
export function TestimonialsSection() {
    const testimonials = [
        {
            name: "Sarah Chen",
            role: "CTO at TechFlow",
            company: "TechFlow Inc.",
            content: "Zion transformed our hiring process. We found 3 senior AI engineers in just 2 weeks. The AI matching is incredibly accurate!",
            rating: 5,
            avatar: "SC",
            verified: true
        },
        {
            name: "Marcus Rodriguez",
            role: "Head of Engineering",
            company: "InnovateCorp",
            content: "The quality of talent on Zion is unmatched. Every developer we've hired has exceeded our expectations. Highly recommended!",
            rating: 5,
            avatar: "MR",
            verified: true
        },
        {
            name: "Dr. Emily Watson",
            role: "AI Research Lead",
            company: "FutureTech Labs",
            content: "Zion's equipment marketplace saved us months of procurement time. We got cutting-edge AI hardware delivered in days.",
            rating: 5,
            avatar: "EW",
            verified: true
        }
    ];
    const stats = [
        { icon: _jsx(Users, { className: "h-6 w-6" }), value: "50,000+", label: "Active Users" },
        { icon: _jsx(Globe, { className: "h-6 w-6" }), value: "150+", label: "Countries" },
        { icon: _jsx(CheckCircle, { className: "h-6 w-6" }), value: "99.8%", label: "Success Rate" },
        { icon: _jsx(Shield, { className: "h-6 w-6" }), value: "100%", label: "Secure" }
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
    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6, ease: "easeOut" }
        }
    };
    return (_jsxs("section", { className: "relative py-24 bg-gradient-to-br from-zion-slate-dark via-zion-blue-dark to-zion-slate-dark overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute top-20 left-20 w-64 h-64 bg-zion-purple/5 rounded-full blur-3xl" }), _jsx("div", { className: "absolute bottom-20 right-20 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl" })] }), _jsxs("div", { className: "container mx-auto px-4 relative z-10", children: [_jsxs(motion.div, { className: "text-center mb-20", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8 }, children: [_jsxs("div", { className: "inline-flex items-center gap-2 mb-4 px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full backdrop-blur-sm", children: [_jsx(Star, { className: "h-4 w-4 text-zion-purple" }), _jsx("span", { className: "text-zion-purple text-sm font-medium", children: "Trusted by Thousands" })] }), _jsx("h2", { className: "text-4xl md:text-5xl font-bold bg-gradient-to-r from-zion-cyan via-zion-purple-light to-zion-purple bg-clip-text text-transparent mb-6", children: "What Our Users Say" }), _jsx("p", { className: "text-zion-slate-light text-lg md:text-xl max-w-3xl mx-auto", children: "Join thousands of satisfied users who have transformed their businesses with Zion's AI-powered marketplace" })] }), _jsx(motion.div, { className: "grid grid-cols-2 md:grid-cols-4 gap-8 mb-20", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: stats.map((stat, index) => (_jsxs(motion.div, { variants: itemVariants, className: "text-center group", children: [_jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-zion-cyan to-zion-cyan-light rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300", children: _jsx("div", { className: "text-white", children: stat.icon }) }), _jsx("div", { className: "text-3xl md:text-4xl font-bold text-white mb-2 group-hover:text-zion-cyan transition-colors duration-300", children: stat.value }), _jsx("div", { className: "text-zion-slate-light text-sm font-medium", children: stat.label })] }, index))) }), _jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto", variants: containerVariants, initial: "hidden", whileInView: "visible", viewport: { once: true }, children: testimonials.map((testimonial, index) => (_jsx(motion.div, { variants: itemVariants, className: "group relative", children: _jsxs("div", { className: "relative bg-zion-blue/10 border border-zion-blue/20 rounded-2xl p-8 h-full backdrop-blur-sm hover:border-zion-purple/30 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-purple/10", children: [_jsx("div", { className: "absolute top-6 right-6 text-zion-purple/20 group-hover:text-zion-purple/40 transition-colors duration-300", children: _jsx(Quote, { className: "h-8 w-8" }) }), _jsx("div", { className: "flex items-center gap-1 mb-4", children: [...Array(testimonial.rating)].map((_, i) => (_jsx(Star, { className: "h-5 w-5 fill-zion-purple text-zion-purple" }, i))) }), _jsxs("blockquote", { className: "text-zion-slate-light mb-6 leading-relaxed group-hover:text-white transition-colors duration-300", children: ["\"", testimonial.content, "\""] }), _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "w-12 h-12 bg-gradient-to-br from-zion-purple to-zion-purple-light rounded-full flex items-center justify-center text-white font-semibold text-lg", children: testimonial.avatar }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center gap-2 mb-1", children: [_jsx("h4", { className: "font-semibold text-white", children: testimonial.name }), testimonial.verified && (_jsx(CheckCircle, { className: "h-4 w-4 text-zion-cyan" }))] }), _jsx("p", { className: "text-zion-slate-light text-sm", children: testimonial.role }), _jsx("p", { className: "text-zion-purple text-sm font-medium", children: testimonial.company })] })] }), _jsx("div", { className: "absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-zion-purple/20 transition-all duration-300" })] }) }, index))) }), _jsx(motion.div, { className: "text-center mt-20", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true }, transition: { duration: 0.8, delay: 0.4 }, children: _jsxs("div", { className: "inline-flex items-center gap-8 px-8 py-6 bg-zion-blue/10 border border-zion-blue/20 rounded-2xl backdrop-blur-sm", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Shield, { className: "h-6 w-6 text-zion-cyan" }), _jsx("span", { className: "text-zion-slate-light font-medium", children: "SOC 2 Certified" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(CheckCircle, { className: "h-6 w-6 text-zion-purple" }), _jsx("span", { className: "text-zion-slate-light font-medium", children: "GDPR Compliant" })] }), _jsxs("div", { className: "flex items-center gap-3", children: [_jsx(Globe, { className: "h-6 w-6 text-zion-blue" }), _jsx("span", { className: "text-zion-slate-light font-medium", children: "Global Coverage" })] })] }) })] })] }));
}
