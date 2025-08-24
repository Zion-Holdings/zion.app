import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { COMPREHENSIVE_SERVICES } from '../data/comprehensiveServices';
import { Brain, Zap, Target, Monitor, Circle, ArrowRight, CheckCircle, Clock, Users } from 'lucide-react';
const AIServicesShowcase = () => {
    const [activeTab, setActiveTab] = useState('services');
    const aiServices = COMPREHENSIVE_SERVICES.filter(service => service.category === 'AI & Machine Learning');
    const aiCapabilities = [
        {
            icon: Brain,
            title: 'Natural Language Processing',
            description: 'Advanced text analysis, sentiment detection, and language understanding capabilities.',
            features: ['Text Classification', 'Sentiment Analysis', 'Language Translation', 'Named Entity Recognition']
        },
        {
            icon: Monitor,
            title: 'Computer Vision',
            description: 'Image and video analysis with object detection and pattern recognition.',
            features: ['Object Detection', 'Image Classification', 'Facial Recognition', 'Video Analytics']
        },
        {
            icon: Target,
            title: 'Predictive Analytics',
            description: 'Machine learning models for forecasting and trend prediction.',
            features: ['Sales Forecasting', 'Risk Assessment', 'Customer Behavior Prediction', 'Market Analysis']
        },
        {
            icon: Circle,
            title: 'Automated Decision Making',
            description: 'AI-powered systems for intelligent decision support and automation.',
            features: ['Process Automation', 'Decision Trees', 'Rule-based Systems', 'Intelligent Routing']
        }
    ];
    const industries = [
        {
            name: 'Healthcare',
            description: 'AI-powered diagnostics, patient monitoring, and medical research.',
            icon: '🏥'
        },
        {
            name: 'Finance',
            description: 'Fraud detection, risk assessment, and algorithmic trading.',
            icon: '💳'
        },
        {
            name: 'E-commerce',
            description: 'Personalized recommendations, inventory optimization, and customer insights.',
            icon: '🛒'
        },
        {
            name: 'Manufacturing',
            description: 'Predictive maintenance, quality control, and supply chain optimization.',
            icon: '🏭'
        },
        {
            name: 'Education',
            description: 'Adaptive learning, student assessment, and content personalization.',
            icon: '🎓'
        },
        {
            name: 'Transportation',
            description: 'Route optimization, autonomous vehicles, and traffic management.',
            icon: '🚗'
        }
    ];
    const benefits = [
        {
            title: 'Increased Efficiency',
            description: 'Automate repetitive tasks and streamline operations',
            icon: Zap
        },
        {
            title: 'Better Decision Making',
            description: 'Data-driven insights for improved strategic planning',
            icon: Target
        },
        {
            title: 'Cost Reduction',
            description: 'Optimize processes and reduce operational expenses',
            icon: CheckCircle
        },
        {
            title: 'Enhanced Customer Experience',
            description: 'Personalized interactions and improved satisfaction',
            icon: Users
        }
    ];
    const implementationSteps = [
        {
            step: 1,
            title: 'Assessment & Planning',
            description: 'Evaluate current systems and define AI implementation goals',
            duration: '1-2 weeks'
        },
        {
            step: 2,
            title: 'Data Preparation',
            description: 'Clean, structure, and prepare data for AI model training',
            duration: '2-4 weeks'
        },
        {
            step: 3,
            title: 'Model Development',
            description: 'Build and train AI models using advanced algorithms',
            duration: '4-8 weeks'
        },
        {
            step: 4,
            title: 'Testing & Validation',
            description: 'Thorough testing and validation of AI systems',
            duration: '2-3 weeks'
        },
        {
            step: 5,
            title: 'Deployment & Monitoring',
            description: 'Launch AI solutions and continuous performance monitoring',
            duration: '1-2 weeks'
        }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-slate-dark", children: [_jsx("div", { className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark py-20", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("div", { className: "flex justify-center mb-6", children: _jsx("div", { className: "bg-zion-purple-light/20 p-4 rounded-full", children: _jsx(Brain, { className: "w-16 h-16 text-white" }) }) }), _jsx("h1", { className: "text-5xl font-bold text-white mb-6", children: "AI Services Showcase" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto mb-8", children: "Harness the power of artificial intelligence to transform your business. Our cutting-edge AI solutions deliver intelligent automation, predictive insights, and enhanced decision-making capabilities." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "#services", className: "bg-white text-zion-purple px-8 py-3 rounded-lg font-medium hover:bg-zion-slate-light transition-colors duration-200", children: "Explore AI Services" }), _jsx("a", { href: "mailto:kleber@ziontechgroup.com?subject=AI Services Consultation", className: "border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-zion-purple transition-colors duration-200", children: "Get AI Consultation" })] })] }) }), _jsx("div", { className: "py-16 bg-zion-blue-dark", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-4", children: "AI Capabilities & Technologies" }), _jsx("p", { className: "text-zion-slate-light text-lg max-w-2xl mx-auto", children: "Our AI expertise spans across multiple domains, enabling us to deliver comprehensive solutions tailored to your specific needs." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: aiCapabilities.map((capability, index) => (_jsxs("div", { className: "bg-zion-blue border border-zion-blue-light rounded-xl p-6 text-center hover:border-zion-purple transition-all duration-300", children: [_jsx("div", { className: "bg-zion-purple/20 p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center", children: _jsx(capability.icon, { className: "w-8 h-8 text-zion-purple" }) }), _jsx("h3", { className: "text-xl font-bold text-white mb-3", children: capability.title }), _jsx("p", { className: "text-zion-slate-light mb-4", children: capability.description }), _jsx("ul", { className: "text-left space-y-2", children: capability.features.map((feature, idx) => (_jsxs("li", { className: "text-zion-slate-light text-sm flex items-center gap-2", children: [_jsx(CheckCircle, { className: "w-4 h-4 text-zion-cyan" }), feature] }, idx))) })] }, index))) })] }) }), _jsx("div", { id: "services", className: "py-16", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-4", children: "AI Services Portfolio" }), _jsx("p", { className: "text-zion-slate-light text-lg max-w-2xl mx-auto", children: "Discover our comprehensive range of AI services designed to accelerate your digital transformation journey." })] }), _jsx("div", { className: "flex flex-wrap justify-center gap-2 mb-8", children: ['services', 'industries', 'benefits'].map((tab) => (_jsx("button", { onClick: () => setActiveTab(tab), className: `px-6 py-3 rounded-lg font-medium transition-colors duration-200 ${activeTab === tab
                                    ? 'bg-zion-purple text-white'
                                    : 'bg-zion-blue text-zion-slate-light hover:bg-zion-blue-light'}`, children: tab.charAt(0).toUpperCase() + tab.slice(1) }, tab))) }), _jsxs("div", { className: "min-h-[400px]", children: [activeTab === 'services' && (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: aiServices.map((service) => (_jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-purple transition-all duration-300", children: [_jsxs("div", { className: "flex items-start justify-between mb-4", children: [_jsx("h3", { className: "text-xl font-bold text-white", children: service.title }), service.supportLevel === 'premium' && (_jsx("span", { className: "bg-zion-purple text-white text-xs px-2 py-1 rounded-full font-medium", children: "Premium" }))] }), _jsx("p", { className: "text-zion-slate-light mb-4 line-clamp-3", children: service.description }), _jsxs("div", { className: "space-y-3 mb-4", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-zion-slate-light text-sm", children: "Price:" }), _jsxs("span", { className: "text-white font-bold", children: [service.currency, service.price] })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-zion-slate-light text-sm", children: "Delivery:" }), _jsx("span", { className: "text-zion-slate-light text-sm", children: service.estimatedDelivery })] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-zion-slate-light text-sm", children: "Support:" }), _jsx("span", { className: "text-zion-slate-light text-sm capitalize", children: service.supportLevel })] })] }), _jsx("div", { className: "mb-4", children: _jsx("div", { className: "flex flex-wrap gap-2", children: service.tags.slice(0, 3).map((tag, index) => (_jsx("span", { className: "px-2 py-1 bg-zion-blue/20 text-zion-slate-light text-xs rounded border border-zion-blue/30", children: tag }, index))) }) }), _jsxs("a", { href: `mailto:${service.contactInfo.email}?subject=Inquiry about ${service.title}`, className: "w-full bg-zion-purple hover:bg-zion-purple-dark text-white text-center py-2 px-4 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2", children: ["Get Started", _jsx(ArrowRight, { className: "w-4 h-4" })] })] }, service.id))) })), activeTab === 'industries' && (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: industries.map((industry, index) => (_jsxs("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-purple transition-all duration-300", children: [_jsx("div", { className: "text-4xl mb-4", children: industry.icon }), _jsx("h3", { className: "text-xl font-bold text-white mb-3", children: industry.name }), _jsx("p", { className: "text-zion-slate-light", children: industry.description })] }, index))) })), activeTab === 'benefits' && (_jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: benefits.map((benefit, index) => (_jsx("div", { className: "bg-zion-blue-dark border border-zion-blue-light rounded-xl p-6 hover:border-zion-purple transition-all duration-300", children: _jsxs("div", { className: "flex items-center gap-4", children: [_jsx("div", { className: "bg-zion-purple/20 p-3 rounded-full", children: _jsx(benefit.icon, { className: "w-8 h-8 text-zion-purple" }) }), _jsxs("div", { children: [_jsx("h3", { className: "text-xl font-bold text-white mb-2", children: benefit.title }), _jsx("p", { className: "text-zion-slate-light", children: benefit.description })] })] }) }, index))) }))] })] }) }), _jsx("div", { className: "py-16 bg-zion-blue-dark", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-4", children: "AI Implementation Process" }), _jsx("p", { className: "text-zion-slate-light text-lg max-w-2xl mx-auto", children: "Our proven methodology ensures successful AI implementation with clear milestones and measurable outcomes." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6", children: implementationSteps.map((step) => (_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "bg-zion-purple text-white w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4", children: step.step }), _jsx("h3", { className: "text-lg font-bold text-white mb-2", children: step.title }), _jsx("p", { className: "text-zion-slate-light text-sm mb-2", children: step.description }), _jsxs("div", { className: "flex items-center justify-center gap-1 text-zion-cyan text-xs", children: [_jsx(Clock, { className: "w-3 h-3" }), step.duration] })] }, step.step))) })] }) }), _jsx("div", { className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-4", children: "Ready to Transform Your Business with AI?" }), _jsx("p", { className: "text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto", children: "Let's discuss how our AI solutions can drive innovation, efficiency, and growth for your organization." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "tel:+13024640950", className: "bg-white text-zion-purple px-8 py-3 rounded-lg font-medium hover:bg-zion-slate-light transition-colors duration-200", children: "Call +1 302 464 0950" }), _jsx("a", { href: "mailto:kleber@ziontechgroup.com?subject=AI Services Consultation", className: "border-2 border-white text-white px-8 py-3 rounded-lg font-medium hover:bg-white hover:text-zion-purple transition-colors duration-200", children: "Schedule AI Consultation" })] })] }) }), _jsx("div", { className: "bg-zion-slate-dark py-12 border-t border-zion-blue-light", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-4 gap-8", children: [_jsxs("div", { className: "col-span-1 md:col-span-2", children: [_jsx("h3", { className: "text-xl font-bold text-white mb-4", children: "Zion Tech Group" }), _jsx("p", { className: "text-zion-slate-light mb-4", children: "Pioneering the future of technology with revolutionary AI consciousness, quantum computing, and autonomous solutions that transform businesses worldwide." }), _jsx("div", { className: "flex items-center gap-4 text-zion-slate-light", children: _jsx("a", { href: "https://ziontechgroup.com", className: "hover:text-zion-cyan transition-colors", children: "ziontechgroup.com" }) })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Contact" }), _jsxs("div", { className: "space-y-2 text-zion-slate-light", children: [_jsx("p", { children: "\uD83D\uDCF1 +1 302 464 0950" }), _jsx("p", { children: "\u2709\uFE0F kleber@ziontechgroup.com" }), _jsxs("p", { children: ["\uD83D\uDCCD 364 E Main St STE 1008", _jsx("br", {}), "Middletown DE 19709"] })] })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-lg font-semibold text-white mb-4", children: "Services" }), _jsxs("div", { className: "space-y-2", children: [_jsx("a", { href: "/comprehensive-services", className: "block text-zion-slate-light hover:text-zion-cyan transition-colors", children: "Comprehensive Services" }), _jsx("a", { href: "/ai-services", className: "block text-zion-slate-light hover:text-zion-cyan transition-colors", children: "AI Services" }), _jsx("a", { href: "/enterprise-solutions", className: "block text-zion-slate-light hover:text-zion-cyan transition-colors", children: "Enterprise Solutions" }), _jsx("a", { href: "/micro-saas-services", className: "block text-zion-slate-light hover:text-zion-cyan transition-colors", children: "Micro SAAS Services" })] })] })] }), _jsx("div", { className: "border-t border-zion-blue-light mt-8 pt-8 text-center", children: _jsxs("p", { className: "text-zion-slate-light text-sm", children: ["\u00A9 2024 Zion Tech Group. All rights reserved. |", _jsx("a", { href: "/privacy", className: "ml-2 hover:text-zion-cyan transition-colors", children: "Privacy Policy" }), " |", _jsx("a", { href: "/terms", className: "ml-2 hover:text-zion-cyan transition-colors", children: "Terms of Service" })] }) })] }) })] }));
};
export default AIServicesShowcase;
