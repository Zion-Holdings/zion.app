import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { SEO } from '@/components/SEO';
const Partners = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [activeCategory, setActiveCategory] = useState('all');
    useEffect(() => {
        setIsVisible(true);
    }, []);
    const partnershipTypes = [
        {
            title: "Technology Partners",
            description: "Collaborate on cutting-edge technology solutions and innovative products",
            icon: "🔬",
            color: "from-blue-500/20 to-cyan-500/20",
            benefits: [
                "Joint R&D initiatives and innovation labs",
                "Technology licensing and IP sharing",
                "Co-innovation projects and product development",
                "Market expansion and go-to-market support",
                "Technical expertise and knowledge sharing"
            ]
        },
        {
            title: "Academic Partners",
            description: "Partner with leading universities and research institutions worldwide",
            icon: "🎓",
            color: "from-green-500/20 to-emerald-500/20",
            benefits: [
                "Research collaboration and joint publications",
                "Talent pipeline development and recruitment",
                "Innovation workshops and hackathons",
                "Academic conferences and symposiums",
                "Student internship and mentorship programs"
            ]
        },
        {
            title: "Enterprise Partners",
            description: "Strategic partnerships with Fortune 500 companies and large corporations",
            icon: "🏢",
            color: "from-purple-500/20 to-pink-500/20",
            benefits: [
                "Enterprise solutions and digital transformation",
                "Global market access and distribution channels",
                "Resource sharing and infrastructure support",
                "Joint ventures and strategic investments",
                "Executive networking and thought leadership"
            ]
        },
        {
            title: "Startup Partners",
            description: "Support and collaborate with innovative startups and emerging companies",
            icon: "🚀",
            color: "from-orange-500/20 to-red-500/20",
            benefits: [
                "Incubation support and mentorship programs",
                "Technology integration and API partnerships",
                "Market validation and customer acquisition",
                "Investment opportunities and funding support",
                "Co-marketing and brand collaboration"
            ]
        }
    ];
    const currentPartners = [
        {
            name: "Microsoft",
            logo: "💻",
            description: "Global technology leader in cloud computing and AI solutions",
            partnership: "Strategic Technology Partner",
            category: "Technology",
            since: "2020",
            projects: "Cloud Migration, AI Integration, Office 365",
            color: "from-blue-500/20 to-cyan-500/20"
        },
        {
            name: "Amazon Web Services",
            logo: "☁️",
            description: "Leading cloud infrastructure and platform services provider",
            partnership: "Cloud Infrastructure Partner",
            category: "Technology",
            since: "2019",
            projects: "Cloud Architecture, Serverless Solutions, ML Services",
            color: "from-orange-500/20 to-yellow-500/20"
        },
        {
            name: "Stanford University",
            logo: "🎓",
            description: "Premier technology research institution and innovation hub",
            partnership: "Academic Research Partner",
            category: "Academic",
            since: "2021",
            projects: "AI Research, Student Programs, Innovation Labs",
            color: "from-red-500/20 to-pink-500/20"
        },
        {
            name: "MIT Technology Review",
            logo: "📰",
            description: "Leading technology media and insights platform",
            partnership: "Media and Insights Partner",
            category: "Media",
            since: "2022",
            projects: "Content Collaboration, Industry Reports, Events",
            color: "from-gray-500/20 to-slate-500/20"
        },
        {
            name: "Y Combinator",
            logo: "🚀",
            description: "Premier startup accelerator and innovation ecosystem",
            partnership: "Startup Ecosystem Partner",
            category: "Startup",
            since: "2021",
            projects: "Startup Mentorship, Investment Support, Network Access",
            color: "from-green-500/20 to-emerald-500/20"
        },
        {
            name: "Salesforce",
            logo: "☁️",
            description: "Leading customer relationship management and business solutions",
            partnership: "Business Solutions Partner",
            category: "Technology",
            since: "2020",
            projects: "CRM Integration, Business Automation, Analytics",
            color: "from-blue-500/20 to-indigo-500/20"
        }
    ];
    const partnershipBenefits = [
        {
            title: "Access to Cutting-Edge Technology",
            description: "Gain early access to innovative technologies, APIs, and development tools",
            icon: "⚡",
            color: "from-yellow-500/20 to-orange-500/20"
        },
        {
            title: "Expanded Market Reach",
            description: "Tap into new markets, customer segments, and distribution channels",
            icon: "🌍",
            color: "from-blue-500/20 to-cyan-500/20"
        },
        {
            title: "Shared Resources & Expertise",
            description: "Leverage combined resources, knowledge, and technical expertise",
            icon: "🤝",
            color: "from-green-500/20 to-emerald-500/20"
        },
        {
            title: "Innovation Acceleration",
            description: "Speed up product development and innovation cycles",
            icon: "🚀",
            color: "from-purple-500/20 to-pink-500/20"
        },
        {
            title: "Risk Mitigation",
            description: "Share risks and costs in joint ventures and projects",
            icon: "🛡️",
            color: "from-indigo-500/20 to-blue-500/20"
        },
        {
            title: "Brand Enhancement",
            description: "Strengthen brand reputation through strategic partnerships",
            icon: "⭐",
            color: "from-amber-500/20 to-yellow-500/20"
        }
    ];
    const partnershipProcess = [
        {
            step: "1",
            title: "Initial Discussion",
            description: "Explore mutual interests and partnership opportunities",
            icon: "💬",
            color: "from-blue-500/20 to-cyan-500/20"
        },
        {
            step: "2",
            title: "Partnership Assessment",
            description: "Evaluate strategic fit and potential synergies",
            icon: "🔍",
            color: "from-green-500/20 to-emerald-500/20"
        },
        {
            step: "3",
            title: "Agreement Development",
            description: "Define partnership terms and collaboration framework",
            icon: "📋",
            color: "from-purple-500/20 to-pink-500/20"
        },
        {
            step: "4",
            title: "Implementation",
            description: "Launch joint initiatives and collaborative projects",
            icon: "🚀",
            color: "from-orange-500/20 to-red-500/20"
        },
        {
            step: "5",
            title: "Growth & Expansion",
            description: "Scale successful partnerships and explore new opportunities",
            icon: "📈",
            color: "from-indigo-500/20 to-blue-500/20"
        }
    ];
    const categories = [
        { id: 'all', label: 'All Partners', icon: '🤝' },
        { id: 'Technology', label: 'Technology', icon: '💻' },
        { id: 'Academic', label: 'Academic', icon: '🎓' },
        { id: 'Media', label: 'Media', icon: '📰' },
        { id: 'Startup', label: 'Startup', icon: '🚀' }
    ];
    // Filter partners based on active category
    const filteredPartners = currentPartners.filter(partner => activeCategory === 'all' || partner.category === activeCategory);
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800", children: [_jsx(SEO, { title: "Partnerships - Zion Tech Group", description: "Join our network of strategic partners and collaborate on innovative technology solutions. Explore partnership opportunities with Zion Tech Group.", keywords: "partnerships, strategic partners, technology collaboration, business partnerships, Zion Tech Group" }), _jsxs("section", { className: "relative py-20 px-4 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" }), _jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000" }), _jsx("div", { className: "absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto text-center", children: _jsxs("div", { className: `transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, children: [_jsx("h1", { className: "text-5xl md:text-7xl font-bold mb-6", children: _jsx("span", { className: "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient", children: "Strategic Partnerships" }) }), _jsx("p", { className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed", children: "Join our network of innovative partners and collaborate on cutting-edge technology solutions. Together, we can achieve more and create greater impact in the digital world." }), _jsx("div", { className: "flex flex-wrap justify-center gap-3", children: categories.map((category) => (_jsxs("button", { onClick: () => setActiveCategory(category.id), className: `px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${activeCategory === category.id
                                            ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                                            : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'}`, children: [_jsx("span", { children: category.icon }), category.label] }, category.id))) })] }) })] }), _jsx("section", { className: "py-20 px-4", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Partnership Opportunities" }), _jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto", children: "We offer various types of partnerships to meet different business needs and objectives." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8", children: partnershipTypes.map((type, index) => (_jsx("div", { className: `bg-gradient-to-br ${type.color} rounded-2xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, style: { transitionDelay: `${index * 0.1}s` }, children: _jsxs("div", { className: "p-8", children: [_jsxs("div", { className: "flex items-center mb-6", children: [_jsx("div", { className: "text-4xl mr-4 group-hover:scale-110 transition-transform duration-300", children: type.icon }), _jsx("h3", { className: "text-2xl font-bold text-white", children: type.title })] }), _jsx("p", { className: "text-gray-300 mb-6 leading-relaxed", children: type.description }), _jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Key Benefits:" }), _jsx("ul", { className: "space-y-2", children: type.benefits.map((benefit, benefitIndex) => (_jsxs("li", { className: "flex items-start text-gray-300 text-sm", children: [_jsx("span", { className: "text-cyan-400 mr-2 mt-1", children: "\u2713" }), benefit] }, benefitIndex))) })] }) }, index))) })] }) }), _jsx("section", { className: "py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Our Partners" }), _jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto", children: "We're proud to collaborate with industry leaders and innovative organizations worldwide." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: filteredPartners.map((partner, index) => (_jsx("div", { className: `bg-gradient-to-br ${partner.color} rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, style: { transitionDelay: `${index * 0.1}s` }, children: _jsxs("div", { className: "p-6", children: [_jsxs("div", { className: "text-center mb-4", children: [_jsx("div", { className: "text-5xl mb-3 group-hover:scale-110 transition-transform duration-300", children: partner.logo }), _jsx("h3", { className: "text-xl font-bold text-white mb-2", children: partner.name }), _jsx("p", { className: "text-cyan-400 font-semibold text-sm mb-2", children: partner.partnership }), _jsxs("span", { className: "px-2 py-1 bg-white/20 rounded-full text-xs text-white", children: ["Since ", partner.since] })] }), _jsx("p", { className: "text-gray-300 text-sm mb-4 text-center", children: partner.description }), _jsxs("div", { className: "border-t border-white/20 pt-4", children: [_jsx("h4", { className: "text-sm font-semibold text-white mb-2", children: "Key Projects:" }), _jsx("p", { className: "text-gray-300 text-xs", children: partner.projects })] })] }) }, index))) })] }) }), _jsx("section", { className: "py-20 px-4", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Why Partner With Us?" }), _jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto", children: "Discover the advantages of partnering with Zion Tech Group and how we can help you succeed." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: partnershipBenefits.map((benefit, index) => (_jsx("div", { className: `bg-gradient-to-br ${benefit.color} rounded-xl border border-white/20 hover:border-cyan-500/50 transition-all duration-300 group hover:transform hover:scale-105 card-hover ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, style: { transitionDelay: `${index * 0.1}s` }, children: _jsxs("div", { className: "p-6 text-center", children: [_jsx("div", { className: "text-4xl mb-4 group-hover:scale-110 transition-transform duration-300", children: benefit.icon }), _jsx("h3", { className: "text-xl font-bold text-white mb-3", children: benefit.title }), _jsx("p", { className: "text-gray-300 text-sm", children: benefit.description })] }) }, index))) })] }) }), _jsx("section", { className: "py-20 px-4 bg-gradient-to-r from-gray-900/50 to-black/50", children: _jsxs("div", { className: "max-w-7xl mx-auto", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Partnership Process" }), _jsx("p", { className: "text-xl text-gray-300 max-w-3xl mx-auto", children: "Our streamlined process makes it easy to establish and grow successful partnerships." })] }), _jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute left-1/2 transform -translate-x-px w-0.5 h-full bg-gradient-to-b from-cyan-500 to-blue-500 hidden lg:block" }), _jsx("div", { className: "space-y-8", children: partnershipProcess.map((step, index) => (_jsxs("div", { className: `relative flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, style: { transitionDelay: `${index * 0.2}s` }, children: [_jsx("div", { className: "absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-cyan-500 rounded-full border-4 border-slate-900 hidden lg:block" }), _jsx("div", { className: `w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-8 lg:text-right' : 'lg:pl-8 lg:text-left'}`, children: _jsxs("div", { className: `bg-gradient-to-br ${step.color} rounded-xl p-6 border border-white/20 hover:border-cyan-500/50 transition-all duration-300`, children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx("div", { className: "text-3xl mr-3", children: step.icon }), _jsxs("div", { children: [_jsx("div", { className: "text-2xl font-bold text-cyan-400 mb-1", children: step.step }), _jsx("h3", { className: "text-xl font-bold text-white", children: step.title })] })] }), _jsx("p", { className: "text-gray-300 text-sm", children: step.description })] }) })] }, index))) })] })] }) }), _jsx("section", { className: "py-20 px-4", children: _jsx("div", { className: "max-w-7xl mx-auto", children: _jsxs("div", { className: "bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-white text-center", children: [_jsx("h3", { className: "text-4xl font-bold mb-4", children: "Ready to Partner With Us?" }), _jsx("p", { className: "text-xl mb-8 opacity-90 max-w-3xl mx-auto", children: "Let's explore how we can work together to create innovative solutions and drive mutual success." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "/contact", className: "bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors", children: "Discuss Partnership" }), _jsx("a", { href: "mailto:partnerships@ziontechgroup.com", className: "border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors", children: "Send Proposal" })] })] }) }) })] }));
};
export default Partners;
