import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { Building, Target, Monitor, ArrowRight, CheckCircle, Clock, Shield, Globe, TrendingUp } from 'lucide-react';
const EnterpriseSolutionsPage = () => {
    const [activeTab, setActiveTab] = useState('solutions');
    const enterpriseServices = COMPREHENSIVE_SERVICES.filter(service => service.category === 'IT Consulting & Strategy' ||
        service.category === 'Cloud & DevOps' ||
        service.category === 'Cybersecurity');
    const enterpriseSolutions = [
        {
            icon: Building,
            title: 'Digital Transformation',
            description: 'End-to-end digital transformation strategies to modernize your business operations.',
            features: ['Process Automation', 'Legacy System Migration', 'Change Management', 'ROI Optimization'],
            price: 'Starting from $50,000'
        },
        {
            icon: Target,
            title: 'Technology Strategy',
            description: 'Comprehensive technology roadmaps aligned with your business objectives.',
            features: ['Technology Assessment', 'Architecture Planning', 'Vendor Selection', 'Implementation Roadmap'],
            price: 'Starting from $25,000'
        },
        {
            icon: Monitor,
            title: 'Cloud Migration',
            description: 'Seamless migration to cloud platforms with minimal business disruption.',
            features: ['Cloud Assessment', 'Migration Planning', 'Data Migration', 'Performance Optimization'],
            price: 'Starting from $75,000'
        },
        {
            icon: Shield,
            title: 'Enterprise Security',
            description: 'Comprehensive security solutions to protect your enterprise assets.',
            features: ['Security Audit', 'Threat Detection', 'Compliance Management', 'Incident Response'],
            price: 'Starting from $100,000'
        }
    ];
    const industries = [
        {
            name: 'Financial Services',
            description: 'Regulatory compliance, risk management, and secure digital banking solutions.',
            icon: '🏦',
            challenges: ['Regulatory Compliance', 'Cybersecurity Threats', 'Legacy System Modernization']
        },
        {
            name: 'Healthcare',
            description: 'HIPAA-compliant systems, patient data security, and telemedicine platforms.',
            icon: '🏥',
            challenges: ['Data Privacy', 'Interoperability', 'Regulatory Compliance']
        },
        {
            name: 'Manufacturing',
            description: 'Industry 4.0 solutions, IoT integration, and supply chain optimization.',
            icon: '🏭',
            challenges: ['Operational Efficiency', 'Supply Chain Visibility', 'Quality Control']
        },
        {
            name: 'Retail & E-commerce',
            description: 'Omnichannel platforms, inventory management, and customer experience optimization.',
            icon: '🛒',
            challenges: ['Customer Experience', 'Inventory Management', 'Digital Transformation']
        },
        {
            name: 'Energy & Utilities',
            description: 'Smart grid solutions, predictive maintenance, and sustainability monitoring.',
            icon: '⚡',
            challenges: ['Infrastructure Modernization', 'Sustainability Goals', 'Operational Efficiency']
        },
        {
            name: 'Government',
            description: 'Digital government services, cybersecurity, and citizen engagement platforms.',
            icon: '🏛️',
            challenges: ['Digital Transformation', 'Cybersecurity', 'Citizen Experience']
        }
    ];
    const features = [
        {
            title: 'Scalable Architecture',
            description: 'Built to grow with your business needs',
            icon: TrendingUp
        },
        {
            title: 'Enterprise Security',
            description: 'Bank-grade security and compliance',
            icon: Shield
        },
        {
            title: '24/7 Support',
            description: 'Round-the-clock technical support',
            icon: Clock
        },
        {
            title: 'Global Deployment',
            description: 'Multi-region and multi-cloud support',
            icon: Globe
        }
    ];
    const implementationProcess = [
        {
            phase: 'Discovery',
            title: 'Requirements Analysis',
            description: 'Deep dive into your business needs and technical requirements',
            duration: '2-3 weeks',
            deliverables: ['Business Requirements Document', 'Technical Specifications', 'Project Timeline']
        },
        {
            phase: 'Planning',
            title: 'Solution Design',
            description: 'Architect the optimal solution architecture and implementation plan',
            duration: '3-4 weeks',
            deliverables: ['Solution Architecture', 'Implementation Plan', 'Risk Assessment']
        },
        {
            phase: 'Development',
            title: 'Solution Build',
            description: 'Develop and configure the enterprise solution',
            duration: '8-16 weeks',
            deliverables: ['Core Solution', 'Integration Components', 'Documentation']
        },
        {
            phase: 'Testing',
            title: 'Quality Assurance',
            description: 'Comprehensive testing and validation',
            duration: '2-4 weeks',
            deliverables: ['Test Results', 'Performance Metrics', 'Security Validation']
        },
        {
            phase: 'Deployment',
            title: 'Go-Live',
            description: 'Production deployment and knowledge transfer',
            duration: '1-2 weeks',
            deliverables: ['Production System', 'Training Materials', 'Support Handover']
        }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark", children: [_jsx("div", { className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark py-20", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("div", { className: "flex justify-center mb-6", children: _jsx("div", { className: "bg-zion-purple-light/20 p-4 rounded-full", children: _jsx(Building, { className: "w-16 h-16 text-white" }) }) }), _jsx("h1", { className: "text-5xl font-bold text-white mb-6", children: "Enterprise Solutions" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto mb-8", children: "Transform your enterprise with our comprehensive technology solutions. From digital transformation to cloud migration, we deliver scalable, secure, and innovative solutions that drive business growth." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "#solutions", className: "bg-white text-zion-purple px-8 py-3 rounded-lg font-medium hover:bg-zion-slate-light transition-colors duration-200", children: "Explore Solutions" }), _jsx("a", { href: "mailto:kleber@ziontechgroup.com?subject=Enterprise Solutions Consultation", className: "border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-zion-purple transition-colors duration-200", children: "Get Enterprise Consultation" })] })] }) }), _jsx("div", { className: "py-16 bg-zion-blue-dark", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-4", children: "Enterprise Solutions Portfolio" }), _jsx("p", { className: "text-zion-slate-light text-lg max-w-2xl mx-auto", children: "Our enterprise solutions are designed to address complex business challenges with scalable, secure, and innovative technology approaches." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: enterpriseSolutions.map((solution, index) => (_jsxs("div", { className: "bg-zion-blue border border-zion-blue-light rounded-xl p-6 text-center hover:border-zion-purple transition-all duration-300", children: [_jsx("div", { className: "bg-zion-purple/20 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center", children: _jsx(solution.icon, { className: "w-8 h-8 text-zion-purple" }) }), _jsx("h3", { className: "text-xl font-bold text-white mb-3", children: solution.title }), _jsx("p", { className: "text-zion-slate-light mb-4", children: solution.description }), _jsx("div", { className: "text-zion-cyan font-medium mb-4", children: solution.price }), _jsx("ul", { className: "text-left space-y-2", children: solution.features.map((feature, idx) => (_jsxs("li", { className: "text-zion-slate-light text-sm flex items-center gap-2", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-zion-cyan" }), feature] }, idx))) })] }, index))) })] }) }), _jsx("div", { id: "solutions", className: "py-16", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-4", children: "Enterprise Services Portfolio" }), _jsx("p", { className: "text-zion-slate-light text-lg max-w-2xl mx-auto", children: "Discover our comprehensive range of enterprise services designed to accelerate your digital transformation journey." })] }), _jsx("div", { className: "flex flex-wrap justify-center gap-2 mb-8", children: ['solutions', 'industries', 'features'].map((tab) => (_jsx("button", { onClick: () => setActiveTab(tab), className: `px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${activeTab === tab
                                    ? 'bg-zion-purple text-white'
                                    : 'bg-zion-blue text-zion-slate-light hover:bg-zion-blue-light'}`, children: tab.charAt(0).toUpperCase() + tab.slice(1) }, tab))) }), _jsxs("div", { className: "min-h-[400px]", children: [activeTab === 'solutions' && (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: enterpriseServices.map((service) => (_jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-purple transition-all duration-300", children: [_jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsx("h3", { className: "text-xl font-bold text-white", children: service.title }), service.supportLevel === 'premium' && (_jsx("span", { className: "bg-zion-purple text-white text-xs px-2 py-1 rounded-full font-medium", children: "Premium" }))] }), _jsx("p", { className: "text-zion-slate-light mb-4 line-clamp-3", children: service.description }), _jsxs("div", { className: "space-y-3 mb-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-zion-slate-light text-sm", children: "Price:" }), _jsxs("span", { className: "text-white font-bold", children: [service.currency, service.price] })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-zion-slate-light text-sm", children: "Delivery:" }), _jsx("span", { className: "text-zion-slate-light text-sm", children: service.estimatedDelivery })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-zion-slate-light text-sm", children: "Support:" }), _jsx("span", { className: "text-zion-slate-light text-sm capitalize", children: service.supportLevel })] })] }), _jsx("div", { className: "mb-4", children: _jsx("div", { className: "flex flex-wrap gap-2", children: service.tags.slice(0, 3).map((tag, index) => (_jsx("span", { className: "px-2 py-1 bg-zion-blue/20 text-zion-slate-light text-xs rounded border border-zion-blue/30", children: tag }, index))) }) }), _jsxs("a", { href: `mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`, className: "w-full bg-zion-purple hover:bg-zion-purple-dark text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2", children: ["Get Started", _jsx(ArrowRight, { className: "w-4 h-4" })] })] }, service.id))) })), activeTab === 'industries' && (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: industries.map((industry, index) => (_jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-purple transition-all duration-300", children: [_jsx("div", { className: "text-4xl mb-4", children: industry.icon }), _jsx("h3", { className: "text-xl font-bold text-white mb-3", children: industry.name }), _jsx("p", { className: "text-zion-slate-light mb-4", children: industry.description }), _jsxs("div", { children: [_jsx("h4", { className: "text-white font-medium mb-2", children: "Key Challenges:" }), _jsx("ul", { className: "space-y-1", children: industry.challenges.map((challenge, idx) => (_jsxs("li", { className: "text-zion-slate-light text-sm flex items-center gap-2", children: [_jsx(Target, { className: "w-3 h-3 text-zion-cyan" }), challenge] }, idx))) })] })] }, index))) })), activeTab === 'features' && (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: features.map((feature, index) => (_jsx("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-purple transition-all duration-300", children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "bg-zion-purple/20 p-3 rounded-full", children: _jsx(feature.icon, { className: "w-8 h-8 text-zion-purple" }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-bold text-white mb-2", children: feature.title }), _jsx("p", { className: "text-zion-slate-light", children: feature.description })] })] }) }, index))) }))] })] }) }), _jsx("div", { className: "py-16 bg-zion-blue-dark", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-4", children: "Enterprise Implementation Process" }), _jsx("p", { className: "text-zion-slate-light text-lg max-w-2xl mx-auto", children: "Our proven enterprise implementation methodology ensures successful delivery with clear milestones and measurable outcomes." })] }), _jsx("div", { className: "space-y-8", children: implementationProcess.map((phase, index) => (_jsx("div", { className: "bg-zion-blue border border-zion-blue-light rounded-xl p-6", children: _jsxs("div", { className: "flex items-start gap-6", children: [_jsx("div", { className: "bg-zion-purple text-white w-16 h-16 rounded-full flex items-center justify-center text-xl font-bold flex-shrink-0", children: index + 1 }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center gap-4 mb-2", children: [_jsx("h3", { className: "text-xl font-bold text-white", children: phase.title }), _jsx("span", { className: "bg-zion-purple/20 text-zion-purple px-3 py-1 rounded-full text-sm font-medium", children: phase.phase })] }), _jsx("p", { className: "text-zion-slate-light mb-4", children: phase.description }), _jsxs("div", { className: "flex items-center gap-1 text-zion-cyan text-sm mb-3", children: [_jsx(Clock, { className: "w-4 h-4" }), "Duration: ", phase.duration] }), _jsxs("div", { children: [_jsx("h4", { className: "text-white font-medium mb-2", children: "Deliverables:" }), _jsx("ul", { className: "space-y-1", children: phase.deliverables.map((deliverable, idx) => (_jsxs("li", { className: "text-zion-slate-light text-sm flex items-center gap-2", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-zion-cyan" }), deliverable] }, idx))) })] })] })] }) }, index))) })] }) }), _jsx("div", { className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-4", children: "Ready to Scale Your Enterprise?" }), _jsx("p", { className: "text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto", children: "Let's discuss how our enterprise solutions can drive transformation, efficiency, and competitive advantage for your organization." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "tel:+13024640950", className: "bg-white text-zion-purple px-8 py-3 rounded-lg font-medium hover:bg-zion-slate-light transition-colors duration-200", children: "Call +1 302 464 0950" }), _jsx("a", { href: "mailto:kleber@ziontechgroup.com?subject=Enterprise Solutions Consultation", className: "border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-zion-purple transition-colors duration-200", children: "Schedule Enterprise Consultation" })] })] }) }), _jsx("div", { className: "bg-zion-slate-dark py-12 border-t border-zion-blue-light", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [_jsxs("div", { className: "col-span-1 md:col-span-2", children: [_jsx("h3", { className: "text-xl font-bold text-white mb-4", children: "Zion Tech Group" }), _jsx("p", { className: "text-zion-slate-light mb-4", children: "Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide." }), _jsx("div", { className: "flex items-center gap-4 text-zion-slate-light", children: _jsx("a", { href: "https://ziontechgroup.com", className: "hover:text-zion-cyan transition-colors", children: "ziontechgroup.com" }) })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Contact" }), _jsxs("div", { className: "space-y-2 text-zion-slate-light", children: [_jsx("p", { children: "\uD83D\uDCF1 +1 302 464 0950" }), _jsx("p", { children: "\u2709\uFE0F kleber@ziontechgroup.com" }), _jsxs("p", { children: ["\uD83D\uDCCD 364 E Main St STE 1008", _jsx("br", {}), "Middletown DE 19709"] })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Services" }), _jsxs("div", { className: "space-y-2", children: [_jsx("a", { href: "/comprehensive-services", className: "block text-zion-slate-light hover:text-zion-cyan transition-colors", children: "Comprehensive Services" }), _jsx("a", { href: "/ai-services", className: "block text-zion-slate-light hover:text-zion-cyan transition-colors", children: "AI Services" }), _jsx("a", { href: "/enterprise-solutions", className: "block text-zion-slate-light hover:text-zion-cyan transition-colors", children: "Enterprise Solutions" }), _jsx("a", { href: "/micro-saas-services", className: "block text-zion-slate-light hover:text-zion-cyan transition-colors", children: "Micro SAAS Services" })] })] })] }), _jsx("div", { className: "border-t border-zion-blue-light mt-8 pt-8 text-center", children: _jsxs("p", { className: "text-zion-slate-light text-sm", children: ["\u00A9 2024 Zion Tech Group. All rights reserved. |", _jsx("a", { href: "/privacy", className: "ml-2 hover:text-zion-cyan transition-colors", children: "Privacy Policy" }), " |", _jsx("a", { href: "/terms", className: "ml-2 hover:text-zion-cyan transition-colors", children: "Terms of Service" })] }) })] }) })] }));
};
export default EnterpriseSolutionsPage;
