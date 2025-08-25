import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { SEO } from '@/components/SEO';
const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const categories = [
        {
            id: 'ai',
            name: 'AI & Machine Learning',
            icon: '🤖',
            description: 'Cutting-edge artificial intelligence and machine learning solutions',
            subcategories: [
                'Natural Language Processing',
                'Computer Vision',
                'Predictive Analytics',
                'Chatbots & Virtual Assistants',
                'Machine Learning Models',
                'AI Consulting'
            ],
            featured: 'Custom AI Solutions'
        },
        {
            id: 'web',
            name: 'Web Development',
            icon: '🌐',
            description: 'Modern, responsive web applications and websites',
            subcategories: [
                'Frontend Development',
                'Backend Development',
                'Full-Stack Solutions',
                'E-commerce Platforms',
                'Progressive Web Apps',
                'Web Maintenance'
            ],
            featured: 'Full-Stack Web Solutions'
        },
        {
            id: 'mobile',
            name: 'Mobile Development',
            icon: '📱',
            description: 'Native and cross-platform mobile applications',
            subcategories: [
                'iOS Development',
                'Android Development',
                'React Native',
                'Flutter Apps',
                'Mobile UI/UX',
                'App Maintenance'
            ],
            featured: 'Cross-Platform Mobile Apps'
        },
        {
            id: 'ui-ux',
            name: 'UI/UX Design',
            icon: '🎨',
            description: 'User-centered design solutions for digital products',
            subcategories: [
                'User Interface Design',
                'User Experience Design',
                'Wireframing & Prototyping',
                'Design Systems',
                'Usability Testing',
                'Design Consulting'
            ],
            featured: 'User-Centered Design'
        },
        {
            id: 'cloud',
            name: 'Cloud Solutions',
            icon: '☁️',
            description: 'Scalable cloud infrastructure and services',
            subcategories: [
                'AWS Solutions',
                'Azure Services',
                'Google Cloud',
                'Cloud Migration',
                'DevOps & CI/CD',
                'Cloud Security'
            ],
            featured: 'Multi-Cloud Solutions'
        },
        {
            id: 'cybersecurity',
            name: 'Cybersecurity',
            icon: '🔒',
            description: 'Comprehensive security solutions and consulting',
            subcategories: [
                'Security Audits',
                'Penetration Testing',
                'Security Training',
                'Incident Response',
                'Compliance & Governance',
                'Security Monitoring'
            ],
            featured: '360° Security Solutions'
        },
        {
            id: 'data',
            name: 'Data & Analytics',
            icon: '📊',
            description: 'Data-driven insights and business intelligence',
            subcategories: [
                'Data Engineering',
                'Business Intelligence',
                'Data Visualization',
                'Big Data Solutions',
                'Data Migration',
                'Analytics Consulting'
            ],
            featured: 'Data-Driven Decisions'
        },
        {
            id: 'blockchain',
            name: 'Blockchain',
            icon: '⛓️',
            description: 'Distributed ledger technology solutions',
            subcategories: [
                'Smart Contracts',
                'DeFi Applications',
                'NFT Platforms',
                'Blockchain Consulting',
                'DApp Development',
                'Web3 Solutions'
            ],
            featured: 'Web3 Innovation'
        },
        {
            id: 'it',
            name: 'IT Services',
            icon: '💻',
            description: 'Comprehensive IT support and infrastructure',
            subcategories: [
                'IT Consulting',
                'Infrastructure Setup',
                'System Administration',
                'Network Management',
                'IT Support',
                'Onsite Services'
            ],
            featured: 'End-to-End IT Solutions'
        },
        {
            id: 'marketing',
            name: 'Digital Marketing',
            icon: '📈',
            description: 'Digital marketing and growth strategies',
            subcategories: [
                'SEO Optimization',
                'Content Marketing',
                'Social Media Management',
                'PPC Campaigns',
                'Email Marketing',
                'Analytics & Reporting'
            ],
            featured: 'Growth-Focused Marketing'
        },
        {
            id: 'business',
            name: 'Business Solutions',
            icon: '💼',
            description: 'Technology solutions for business growth',
            subcategories: [
                'Process Automation',
                'CRM Implementation',
                'ERP Solutions',
                'Business Intelligence',
                'Digital Transformation',
                'Strategy Consulting'
            ],
            featured: 'Business Process Optimization'
        },
        {
            id: 'consulting',
            name: 'Technology Consulting',
            icon: '🎯',
            description: 'Strategic technology guidance and planning',
            subcategories: [
                'Technology Strategy',
                'Digital Transformation',
                'Vendor Selection',
                'Project Management',
                'Technology Audits',
                'Innovation Consulting'
            ],
            featured: 'Strategic Tech Guidance'
        }
    ];
    const filteredCategories = selectedCategory === 'all'
        ? categories
        : categories.filter(cat => cat.id === selectedCategory);
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Service Categories - Complete Technology Solutions", description: "Explore our comprehensive range of technology services. From AI and web development to cybersecurity and consulting, find the perfect solution for your business needs.", canonical: "/categories" }), _jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800", children: _jsx("main", { className: "pt-12", children: _jsxs("div", { className: "container mx-auto px-4 py-16", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Service Categories" }), _jsx("p", { className: "text-xl text-blue-100 max-w-4xl mx-auto", children: "Discover our comprehensive range of technology services designed to meet every business need. From cutting-edge AI solutions to essential IT support, we've got you covered." })] }), _jsx("div", { className: "mb-12", children: _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsx("button", { onClick: () => setSelectedCategory('all'), className: `px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${selectedCategory === 'all'
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-white/10 text-blue-100 hover:bg-white/20'}`, children: "All Services" }), categories.map((category) => (_jsxs("button", { onClick: () => setSelectedCategory(category.id), className: `px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${selectedCategory === category.id
                                                ? 'bg-blue-600 text-white'
                                                : 'bg-white/10 text-blue-100 hover:bg-white/20'}`, children: [category.icon, " ", category.name] }, category.id)))] }) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto", children: filteredCategories.map((category) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200", children: [_jsx("div", { className: "text-4xl mb-4 text-center", children: category.icon }), _jsx("h3", { className: "text-xl font-semibold text-white mb-3 text-center", children: category.name }), _jsx("p", { className: "text-blue-100 mb-4 text-sm text-center", children: category.description }), _jsx("div", { className: "mb-4", children: _jsx("span", { className: "inline-block bg-blue-600/30 text-blue-200 px-3 py-1 rounded-full text-sm font-medium", children: category.featured }) }), _jsxs("div", { className: "mb-6", children: [_jsx("h4", { className: "text-white font-medium mb-3 text-sm", children: "Services Include:" }), _jsx("ul", { className: "space-y-2", children: category.subcategories.map((subcategory, index) => (_jsxs("li", { className: "text-blue-200 text-sm flex items-center", children: [_jsx("span", { className: "text-green-400 mr-2", children: "\u2022" }), subcategory] }, index))) })] }), _jsx("div", { className: "text-center", children: _jsx("a", { href: `/contact?service=${category.id}`, className: "inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 text-sm", children: "Learn More" }) })] }, category.id))) }), _jsx("div", { className: "mt-20 max-w-4xl mx-auto", children: _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 text-center", children: [_jsx("h2", { className: "text-3xl font-semibold text-white mb-4", children: "Can't Find What You're Looking For?" }), _jsx("p", { className: "text-blue-100 mb-6 text-lg", children: "We offer custom solutions tailored to your specific needs. Let's discuss how we can help transform your business with technology." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "/contact", className: "bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg", children: "Contact Us" }), _jsx("a", { href: "/request-quote", className: "border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg", children: "Get Custom Quote" })] })] }) })] }) }) })] }));
};
export default Categories;
