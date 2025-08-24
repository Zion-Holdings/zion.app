import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { motion } from 'framer-motion';
import { Users, Award, Globe, Target, Brain, Rocket, Star, CheckCircle, ArrowRight } from 'lucide-react';
export function About() {
    const stats = [
        { label: 'Years of Experience', value: '10+', icon: Award },
        { label: 'Projects Completed', value: '500+', icon: CheckCircle },
        { label: 'Global Clients', value: '50+', icon: Globe },
        { label: 'Team Members', value: '25+', icon: Users },
    ];
    const values = [
        {
            title: 'Innovation First',
            description: 'We push the boundaries of what\'s possible, constantly exploring emerging technologies and creative solutions.',
            icon: Rocket,
            color: 'from-zion-cyan to-zion-cyan-dark'
        },
        {
            title: 'Excellence in Execution',
            description: 'Every project is delivered with precision, quality, and attention to detail that exceeds expectations.',
            icon: Star,
            color: 'from-zion-purple to-zion-purple-dark'
        },
        {
            title: 'Client Success',
            description: 'Your success is our success. We partner with you to achieve measurable, transformative results.',
            icon: Target,
            color: 'from-zion-cyan to-zion-purple'
        },
        {
            title: 'Continuous Learning',
            description: 'We stay ahead of the curve through continuous research, training, and adoption of cutting-edge technologies.',
            icon: Brain,
            color: 'from-zion-purple to-zion-cyan'
        }
    ];
    const team = [
        {
            name: 'Kleber Silva',
            role: 'CEO & Founder',
            bio: 'Visionary leader with 15+ years in technology innovation and business transformation.',
            expertise: ['AI Strategy', 'Digital Transformation', 'Business Development'],
            avatar: '/avatars/kleber.jpg'
        },
        {
            name: 'Dr. Sarah Chen',
            role: 'CTO & AI Research Lead',
            bio: 'PhD in Machine Learning with expertise in neural networks and quantum computing.',
            expertise: ['Machine Learning', 'Quantum Computing', 'Research & Development'],
            avatar: '/avatars/sarah.jpg'
        },
        {
            name: 'Marcus Rodriguez',
            role: 'Head of Cybersecurity',
            bio: 'Former government cybersecurity expert with deep knowledge of threat intelligence.',
            expertise: ['Cybersecurity', 'Threat Intelligence', 'Compliance'],
            avatar: '/avatars/marcus.jpg'
        },
        {
            name: 'Dr. Emily Watson',
            role: 'VP of Engineering',
            bio: 'Software architect with experience building scalable systems for Fortune 500 companies.',
            expertise: ['Software Architecture', 'Cloud Computing', 'DevOps'],
            avatar: '/avatars/emily.jpg'
        }
    ];
    const achievements = [
        {
            year: '2024',
            title: 'AI Innovation Award',
            description: 'Recognized for breakthrough AI solutions in healthcare and finance',
            category: 'Industry Recognition'
        },
        {
            year: '2023',
            title: '500+ Projects Milestone',
            description: 'Successfully delivered over 500 technology solutions worldwide',
            category: 'Business Growth'
        },
        {
            year: '2022',
            title: 'Global Expansion',
            description: 'Expanded operations to 15+ countries across 3 continents',
            category: 'Market Expansion'
        },
        {
            year: '2021',
            title: 'Patent Portfolio',
            description: 'Filed 25+ patents in AI, cybersecurity, and quantum computing',
            category: 'Innovation'
        }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-blue-light text-white", children: [_jsxs("div", { className: "fixed inset-0 overflow-hidden pointer-events-none", children: [_jsx("div", { className: "absolute top-20 left-20 w-72 h-72 bg-zion-cyan/10 rounded-full blur-3xl animate-float" }), _jsx("div", { className: "absolute top-40 right-20 w-96 h-96 bg-zion-purple/10 rounded-full blur-3xl animate-float", style: { animationDelay: '2s' } }), _jsx("div", { className: "absolute bottom-20 left-1/3 w-80 h-80 bg-zion-cyan/5 rounded-full blur-3xl animate-float", style: { animationDelay: '4s' } })] }), _jsxs("div", { className: "relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24", children: [_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8 }, className: "text-center mb-20", children: [_jsx("h1", { className: "text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-cyan bg-clip-text text-transparent animate-neon-pulse", children: "About Zion Tech Group" }), _jsx("p", { className: "text-xl md:text-2xl text-zion-slate-light mb-8 max-w-4xl mx-auto", children: "Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4 text-sm", children: [_jsx("span", { className: "px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-cyan", children: "Founded 2014" }), _jsx("span", { className: "px-4 py-2 bg-zion-cyan/20 border border-zion-cyan/30 rounded-full text-zion-cyan", children: "Global Presence" }), _jsx("span", { className: "px-4 py-2 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-zion-cyan", children: "Innovation Leader" })] })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.2 }, className: "mb-20", children: _jsx("div", { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((stat, index) => {
                                const IconComponent = stat.icon;
                                return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.3 + index * 0.1 }, className: "text-center", children: _jsxs("div", { className: "bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300", children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx("div", { className: "p-3 bg-zion-purple/20 rounded-lg text-zion-cyan", children: _jsx(IconComponent, { className: "w-8 h-8" }) }) }), _jsx("div", { className: "text-3xl font-bold text-zion-cyan mb-2", children: stat.value }), _jsx("div", { className: "text-zion-slate-light text-sm", children: stat.label })] }) }, stat.label));
                            }) }) }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.4 }, className: "mb-20", children: _jsxs("div", { className: "grid md:grid-cols-2 gap-12", children: [_jsxs("div", { className: "bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8", children: [_jsxs("div", { className: "flex items-center gap-3 mb-6", children: [_jsx("div", { className: "p-3 bg-zion-cyan/20 rounded-lg text-zion-cyan", children: _jsx(Target, { className: "w-8 h-8" }) }), _jsx("h2", { className: "text-2xl font-bold text-white", children: "Our Mission" })] }), _jsx("p", { className: "text-zion-slate-light text-lg leading-relaxed mb-6", children: "To democratize access to cutting-edge technology solutions, enabling businesses of all sizes to harness the power of AI, quantum computing, and advanced automation for sustainable growth and competitive advantage." }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center gap-3 text-zion-slate-light", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-zion-cyan flex-shrink-0" }), _jsx("span", { children: "Accelerate digital transformation" })] }), _jsxs("div", { className: "flex items-center gap-3 text-zion-slate-light", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-zion-cyan flex-shrink-0" }), _jsx("span", { children: "Bridge the technology gap" })] }), _jsxs("div", { className: "flex items-center gap-3 text-zion-slate-light", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-zion-cyan flex-shrink-0" }), _jsx("span", { children: "Foster innovation ecosystems" })] })] })] }), _jsxs("div", { className: "bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-8", children: [_jsxs("div", { className: "flex items-center gap-3 mb-6", children: [_jsx("div", { className: "p-3 bg-zion-purple/20 rounded-lg text-zion-purple", children: _jsx(Rocket, { className: "w-8 h-8" }) }), _jsx("h2", { className: "text-2xl font-bold text-white", children: "Our Vision" })] }), _jsx("p", { className: "text-zion-slate-light text-lg leading-relaxed mb-6", children: "To be the global leader in AI-powered technology solutions, creating a future where every organization can leverage intelligent automation, predictive analytics, and quantum computing to solve humanity's greatest challenges." }), _jsxs("div", { className: "space-y-3", children: [_jsxs("div", { className: "flex items-center gap-3 text-zion-slate-light", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-zion-purple flex-shrink-0" }), _jsx("span", { children: "AI-first world" })] }), _jsxs("div", { className: "flex items-center gap-3 text-zion-slate-light", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-zion-purple flex-shrink-0" }), _jsx("span", { children: "Sustainable technology" })] }), _jsxs("div", { className: "flex items-center gap-3 text-zion-slate-light", children: [_jsx(CheckCircle, { className: "w-5 h-5 text-zion-purple flex-shrink-0" }), _jsx("span", { children: "Human-AI collaboration" })] })] })] })] }) }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.6 }, className: "mb-20", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-center mb-12 text-white", children: "Our Core Values" }), _jsx("div", { className: "grid md:grid-cols-2 gap-8", children: values.map((value, index) => {
                                    const IconComponent = value.icon;
                                    return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.7 + index * 0.1 }, className: "bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300", children: _jsxs("div", { className: "flex items-start gap-4", children: [_jsx("div", { className: `p-3 bg-gradient-to-br ${value.color} rounded-lg text-white`, children: _jsx(IconComponent, { className: "w-8 h-8" }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: value.title }), _jsx("p", { className: "text-zion-slate-light leading-relaxed", children: value.description })] })] }) }, value.title));
                                }) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 0.8 }, className: "mb-20", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-center mb-12 text-white", children: "Leadership Team" }), _jsx("div", { className: "grid md:grid-cols-2 lg:grid-cols-4 gap-8", children: team.map((member, index) => (_jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.6, delay: 0.9 + index * 0.1 }, className: "bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 text-center hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300", children: [_jsx("div", { className: "w-20 h-20 bg-gradient-to-br from-zion-cyan to-zion-purple rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold", children: member.name.split(' ').map(n => n[0]).join('') }), _jsx("h3", { className: "text-lg font-semibold text-white mb-1", children: member.name }), _jsx("p", { className: "text-zion-cyan text-sm mb-3", children: member.role }), _jsx("p", { className: "text-zion-slate-light text-sm mb-4", children: member.bio }), _jsx("div", { className: "space-y-1", children: member.expertise.map((skill, idx) => (_jsx("span", { className: "inline-block px-2 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-xs text-zion-cyan mr-1 mb-1", children: skill }, idx))) })] }, member.name))) })] }), _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1.0 }, className: "mb-20", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-center mb-12 text-white", children: "Our Journey" }), _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-zion-cyan via-zion-purple to-zion-cyan" }), _jsx("div", { className: "space-y-12", children: achievements.map((achievement, index) => (_jsxs(motion.div, { initial: { opacity: 0, x: index % 2 === 0 ? -20 : 20 }, animate: { opacity: 1, x: 0 }, transition: { duration: 0.6, delay: 1.1 + index * 0.1 }, className: `relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`, children: [_jsx("div", { className: "absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-zion-cyan rounded-full border-4 border-zion-blue-dark" }), _jsx("div", { className: `w-5/12 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`, children: _jsxs("div", { className: "bg-zion-blue-light/10 backdrop-blur-md border border-zion-purple/20 rounded-2xl p-6 hover:border-zion-cyan/50 hover:bg-zion-blue-light/20 transition-all duration-300", children: [_jsx("div", { className: "text-2xl font-bold text-zion-cyan mb-2", children: achievement.year }), _jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: achievement.title }), _jsx("p", { className: "text-zion-slate-light text-sm mb-2", children: achievement.description }), _jsx("span", { className: "inline-block px-2 py-1 bg-zion-purple/20 border border-zion-purple/30 rounded-full text-xs text-zion-cyan", children: achievement.category })] }) })] }, achievement.year))) })] })] }), _jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.8, delay: 1.2 }, className: "text-center", children: _jsxs("div", { className: "bg-gradient-to-r from-zion-cyan/20 via-zion-purple/20 to-zion-cyan/20 border border-zion-cyan/30 rounded-2xl p-12 backdrop-blur-md", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4 text-white", children: "Join Us in Shaping the Future" }), _jsx("p", { className: "text-xl text-zion-slate-light mb-8 max-w-2xl mx-auto", children: "Whether you're looking to partner with us, join our team, or learn more about our solutions, we'd love to hear from you." }), _jsx("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: _jsxs(motion.button, { whileHover: { scale: 1.05 }, whileTap: { scale: 0.95 }, className: "px-8 py-4 bg-gradient-to-r from-zion-cyan to-zion-purple text-white rounded-lg text-lg font-semibold hover:shadow-xl hover:shadow-zion-cyan/25 transition-all duration-300 flex items-center gap-2 mx-auto", children: ["Get in Touch", _jsx(ArrowRight, { className: "w-5 h-5" })] }) })] }) })] })] }));
}
