import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, Heart, Zap, Globe, Award, Clock, MapPin, DollarSign, Send, TrendingUp } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import FuturisticNeonButton from '../components/ui/FuturisticNeonButton';
import FuturisticAnimatedBackground from '../components/ui/FuturisticAnimatedBackground';
import SEO from '../components/SEO';
import { AnimatePresence } from 'framer-motion';
const Careers = () => {
    var _a;
    const [selectedDepartment, setSelectedDepartment] = useState('all');
    const [isApplying, setIsApplying] = useState(null);
    const departments = [
        { id: 'all', name: 'All Departments', color: 'from-zion-cyan to-zion-blue' },
        { id: 'engineering', name: 'Engineering', color: 'from-purple-500 to-pink-500' },
        { id: 'ai', name: 'AI & ML', color: 'from-blue-500 to-cyan-500' },
        { id: 'design', name: 'Design', color: 'from-green-500 to-emerald-500' },
        { id: 'sales', name: 'Sales & Marketing', color: 'from-yellow-500 to-orange-500' },
        { id: 'operations', name: 'Operations', color: 'from-red-500 to-pink-500' }
    ];
    const jobOpenings = [
        {
            id: 'senior-ai-engineer',
            title: 'Senior AI Engineer',
            department: 'ai',
            location: 'Remote / Middletown, DE',
            type: 'Full-time',
            experience: '5+ years',
            salary: '$120,000 - $180,000',
            description: 'Lead the development of cutting-edge AI solutions and machine learning platforms.',
            requirements: [
                'Advanced degree in Computer Science, AI, or related field',
                'Expertise in Python, TensorFlow, PyTorch',
                'Experience with large language models and NLP',
                'Strong background in machine learning algorithms',
                'Experience with cloud platforms (AWS, Azure, GCP)'
            ],
            benefits: [
                'Competitive salary with equity options',
                'Flexible remote work policy',
                'Professional development budget',
                'Health, dental, and vision insurance',
                '401(k) with company match'
            ]
        },
        {
            id: 'full-stack-developer',
            title: 'Full Stack Developer',
            department: 'engineering',
            location: 'Remote / Middletown, DE',
            type: 'Full-time',
            experience: '3+ years',
            salary: '$90,000 - $140,000',
            description: 'Build scalable web applications and contribute to our technology platform.',
            requirements: [
                'Strong proficiency in React, Node.js, and TypeScript',
                'Experience with modern web technologies and APIs',
                'Knowledge of database design and optimization',
                'Understanding of DevOps and CI/CD practices',
                'Experience with cloud services and microservices'
            ],
            benefits: [
                'Competitive salary with growth opportunities',
                'Remote-first work environment',
                'Latest tools and technology',
                'Collaborative team culture',
                'Career advancement paths'
            ]
        },
        {
            id: 'ui-ux-designer',
            title: 'Senior UI/UX Designer',
            department: 'design',
            location: 'Remote / Middletown, DE',
            type: 'Full-time',
            experience: '4+ years',
            salary: '$85,000 - $130,000',
            description: 'Create exceptional user experiences and beautiful interfaces for our products.',
            requirements: [
                'Strong portfolio showcasing web and mobile design',
                'Expertise in Figma, Sketch, or similar tools',
                'Understanding of user research and testing',
                'Experience with design systems and component libraries',
                'Knowledge of accessibility and responsive design'
            ],
            benefits: [
                'Creative freedom and ownership',
                'Latest design tools and resources',
                'Collaboration with cross-functional teams',
                'Professional development opportunities',
                'Competitive compensation package'
            ]
        },
        {
            id: 'sales-director',
            title: 'Sales Director',
            department: 'sales',
            location: 'Remote / Middletown, DE',
            type: 'Full-time',
            experience: '7+ years',
            salary: '$100,000 - $150,000 + Commission',
            description: 'Lead our sales strategy and drive revenue growth for enterprise clients.',
            requirements: [
                'Proven track record in B2B technology sales',
                'Experience with enterprise software solutions',
                'Strong leadership and team management skills',
                'Understanding of complex sales cycles',
                'Excellent communication and presentation skills'
            ],
            benefits: [
                'Uncapped commission structure',
                'Leadership development opportunities',
                'High-growth company environment',
                'Competitive base salary',
                'Performance-based bonuses'
            ]
        }
    ];
    const filteredJobs = selectedDepartment === 'all'
        ? jobOpenings
        : jobOpenings.filter(job => job.department === selectedDepartment);
    const companyValues = [
        {
            icon: Heart,
            title: 'People First',
            description: 'We believe our team is our greatest asset and invest in their growth and well-being.',
            color: 'from-red-500 to-pink-500'
        },
        {
            icon: Zap,
            title: 'Innovation Driven',
            description: 'We constantly push boundaries and embrace new technologies to solve complex problems.',
            color: 'from-yellow-500 to-orange-500'
        },
        {
            icon: Globe,
            title: 'Global Impact',
            description: 'Our solutions help businesses worldwide transform and succeed in the digital age.',
            color: 'from-blue-500 to-cyan-500'
        },
        {
            icon: Award,
            title: 'Excellence',
            description: 'We maintain the highest standards of quality and professionalism in everything we do.',
            color: 'from-purple-500 to-pink-500'
        }
    ];
    const perks = [
        '🏠 Remote-first work environment',
        '💰 Competitive salary with equity options',
        '🏥 Comprehensive health insurance',
        '📚 Professional development budget',
        '🎯 Performance-based bonuses',
        '🌍 Flexible working hours',
        '🎉 Team events and celebrations',
        '🚀 Fast-paced, innovative culture'
    ];
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark relative overflow-hidden", children: [_jsx(SEO, { title: "Careers - Join Our Team | Zion Tech Group", description: "Join Zion Tech Group and be part of a team that's transforming businesses through innovative technology solutions. Explore career opportunities in AI, engineering, design, and more.", canonical: "/careers" }), _jsx(FuturisticAnimatedBackground, { intensity: "medium" }), _jsx("section", { className: "relative z-10 pt-32 pb-20 px-4", children: _jsx("div", { className: "max-w-7xl mx-auto text-center", children: _jsxs(motion.div, { initial: { opacity: 0, y: 30 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, children: [_jsx(Badge, { className: "mb-6 bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30", children: "\uD83D\uDE80 Join Our Team" }), _jsxs(motion.h1, { className: "text-5xl md:text-7xl font-bold text-white mb-8 leading-tight", initial: { opacity: 0, scale: 0.8 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 1, delay: 0.2 }, children: ["Build the Future", _jsx("br", {}), _jsx("span", { className: "bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-pink bg-clip-text text-transparent", children: "With Us" })] }), _jsx(motion.p, { className: "text-xl md:text-2xl text-zion-slate-light mb-12 max-w-4xl mx-auto leading-relaxed", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, children: "Join a team of innovators, problem-solvers, and technology enthusiasts who are shaping the future of business technology. Your next career adventure starts here." }), _jsxs(motion.div, { className: "flex flex-wrap justify-center gap-6 text-zion-cyan", initial: { opacity: 0 }, animate: { opacity: 1 }, transition: { duration: 0.8, delay: 0.6 }, children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Users, { className: "w-6 h-6" }), _jsx("span", { children: "50+ Team Members" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Globe, { className: "w-6 h-6" }), _jsx("span", { children: "Remote-First Culture" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(TrendingUp, { className: "w-6 h-6" }), _jsx("span", { children: "Rapid Growth" })] })] })] }) }) }), _jsx("section", { className: "relative z-10 py-20 px-4", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: ["Our ", _jsx("span", { className: "text-zion-cyan", children: "Values" })] }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "These core principles guide how we work, collaborate, and grow together as a team." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: companyValues.map((value, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, whileHover: { y: -10 }, className: "group", children: _jsxs(Card, { className: "bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 h-full p-6 text-center", children: [_jsx("div", { className: `w-16 h-16 mx-auto mb-4 rounded-xl bg-gradient-to-br ${value.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`, children: _jsx(value.icon, { className: "w-8 h-8 text-white" }) }), _jsx("h3", { className: "text-xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors", children: value.title }), _jsx("p", { className: "text-zion-slate-light leading-relaxed", children: value.description })] }) }, value.title))) })] }) }), _jsx("section", { className: "relative z-10 py-20 px-4 bg-zion-blue-dark/30", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: ["Why Work at ", _jsx("span", { className: "text-zion-cyan", children: "Zion Tech Group" }), "?"] }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "We offer more than just a job \u2013 we provide an environment where you can thrive, grow, and make a real impact." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: perks.map((perk, index) => (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, whileHover: { scale: 1.05 }, className: "group", children: _jsx(Card, { className: "bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 p-4 text-center", children: _jsx("p", { className: "text-zion-slate-light group-hover:text-zion-cyan transition-colors font-medium", children: perk }) }) }, perk))) })] }) }), _jsx("section", { className: "relative z-10 py-20 px-4", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, children: [_jsxs("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: ["Open ", _jsx("span", { className: "text-zion-cyan", children: "Positions" })] }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "Find the perfect role that matches your skills, passion, and career goals. We're always looking for talented individuals to join our team." })] }), _jsx("div", { className: "flex flex-wrap justify-center gap-4 mb-12", children: departments.map((dept) => {
                                const isActive = selectedDepartment === dept.id;
                                return (_jsx(motion.button, { onClick: () => setSelectedDepartment(dept.id), className: `px-6 py-3 rounded-xl font-medium transition-all duration-300 ${isActive
                                        ? 'bg-gradient-to-r ' + dept.color + ' text-white shadow-lg shadow-zion-cyan/25'
                                        : 'bg-zion-blue-dark/30 text-zion-slate-light hover:text-white hover:bg-zion-blue-light/20 border border-zion-blue-light/20'}`, whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, children: dept.name }, dept.id));
                            }) }), _jsx("div", { className: "space-y-6", children: filteredJobs.map((job, index) => {
                                var _a;
                                return (_jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: index * 0.1 }, viewport: { once: true }, whileHover: { y: -5 }, className: "group", children: _jsx(Card, { className: "bg-zion-blue-dark/30 backdrop-blur-lg border-zion-blue-light/20 hover:border-zion-cyan/50 transition-all duration-300 overflow-hidden", children: _jsx("div", { className: "p-8", children: _jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6", children: [_jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center gap-3 mb-4", children: [_jsx(Badge, { className: "bg-zion-cyan/20 text-zion-cyan border-zion-cyan/30", children: (_a = departments.find(d => d.id === job.department)) === null || _a === void 0 ? void 0 : _a.name }), _jsx(Badge, { variant: "outline", className: "border-zion-blue-light/30 text-zion-slate-light", children: job.type })] }), _jsx("h3", { className: "text-2xl font-bold text-white mb-3 group-hover:text-zion-cyan transition-colors", children: job.title }), _jsx("p", { className: "text-zion-slate-light mb-4", children: job.description }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-zion-slate-light", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(MapPin, { className: "w-4 h-4 text-zion-cyan" }), _jsx("span", { children: job.location })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Clock, { className: "w-4 h-4 text-zion-cyan" }), _jsx("span", { children: job.experience })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(DollarSign, { className: "w-4 h-4 text-zion-cyan" }), _jsx("span", { children: job.salary })] })] })] }), _jsxs("div", { className: "flex flex-col gap-3", children: [_jsx(FuturisticNeonButton, { onClick: () => setIsApplying(job.id), size: "sm", className: "px-6", children: "Apply Now" }), _jsx(Button, { variant: "outline", size: "sm", onClick: () => setIsApplying(job.id), className: "border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan/10", children: "View Details" })] })] }) }) }) }, job.id));
                            }) })] }) }), _jsx(AnimatePresence, { children: isApplying && (_jsx(motion.div, { className: "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4", initial: { opacity: 0 }, animate: { opacity: 1 }, exit: { opacity: 0 }, children: _jsx(motion.div, { className: "bg-zion-blue-dark/95 backdrop-blur-lg border border-zion-blue-light/30 rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto", initial: { scale: 0.8, y: 50 }, animate: { scale: 1, y: 0 }, exit: { scale: 0.8, y: 50 }, transition: { type: "spring", stiffness: 300, damping: 30 }, children: _jsxs("div", { className: "p-8", children: [_jsxs("div", { className: "flex items-center justify-between mb-6", children: [_jsxs("h3", { className: "text-2xl font-bold text-white", children: ["Apply for ", (_a = jobOpenings.find(j => j.id === isApplying)) === null || _a === void 0 ? void 0 : _a.title] }), _jsx(Button, { variant: "ghost", size: "sm", onClick: () => setIsApplying(null), className: "text-zion-slate-light hover:text-white", children: "\u2715" })] }), _jsxs("form", { className: "space-y-6", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-white font-medium mb-2", children: "Full Name *" }), _jsx(Input, { type: "text", required: true, className: "bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan", placeholder: "Enter your full name" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-white font-medium mb-2", children: "Email *" }), _jsx(Input, { type: "email", required: true, className: "bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan", placeholder: "Enter your email" })] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { children: [_jsx("label", { className: "block text-white font-medium mb-2", children: "Phone" }), _jsx(Input, { type: "tel", className: "bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan", placeholder: "Enter your phone number" })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-white font-medium mb-2", children: "LinkedIn Profile" }), _jsx(Input, { type: "url", className: "bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan", placeholder: "https://linkedin.com/in/yourprofile" })] })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-white font-medium mb-2", children: "Cover Letter *" }), _jsx(Textarea, { required: true, rows: 4, className: "bg-zion-slate-dark/50 border-zion-blue-light/30 text-white placeholder-zion-slate-light focus:border-zion-cyan resize-none", placeholder: "Tell us why you're interested in this position and what makes you a great fit..." })] }), _jsxs("div", { children: [_jsx("label", { className: "block text-white font-medium mb-2", children: "Resume/CV *" }), _jsx(Input, { type: "file", accept: ".pdf,.doc,.docx", required: true, className: "bg-zion-slate-dark/50 border-zion-blue-light/30 text-white file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-medium file:bg-zion-cyan file:text-white hover:file:bg-zion-cyan-light" })] }), _jsxs("div", { className: "flex gap-4 pt-4", children: [_jsxs(FuturisticNeonButton, { type: "submit", className: "flex-1", children: [_jsx(Send, { className: "w-4 h-4 mr-2" }), "Submit Application"] }), _jsx(Button, { variant: "outline", onClick: () => setIsApplying(null), className: "border-zion-blue-light/30 text-zion-slate-light hover:bg-zion-blue-light/20", children: "Cancel" })] })] })] }) }) })) }), _jsx("section", { className: "relative z-10 py-20 px-4", children: _jsx("div", { className: "max-w-4xl mx-auto text-center", children: _jsx(motion.div, { initial: { opacity: 0, y: 30 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, viewport: { once: true }, children: _jsxs(Card, { className: "bg-gradient-to-r from-zion-blue-dark/50 to-zion-purple-dark/50 backdrop-blur-lg border-zion-cyan/30 p-12", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Don't See the Right Role?" }), _jsx("p", { className: "text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto", children: "We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(FuturisticNeonButton, { onClick: () => window.location.href = 'mailto:kleber@ziontechgroup.com?subject=General Career Inquiry', size: "lg", className: "text-lg px-8 py-4", children: "Send Resume" }), _jsx(Button, { variant: "outline", size: "lg", onClick: () => window.location.href = '/contact', className: "border-zion-cyan/50 text-zion-cyan hover:bg-zion-cyan/10 hover:border-zion-cyan text-lg px-8 py-4", children: "Get in Touch" })] })] }) }) }) })] }));
};
export default Careers;
