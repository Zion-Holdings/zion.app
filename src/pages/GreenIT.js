import { Fragment as _Fragment, jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SEO } from '@/components/SEO';
const GreenIT = () => {
    const greenSolutions = [
        {
            title: 'Energy-Efficient Infrastructure',
            description: 'Design and implement IT infrastructure that minimizes energy consumption',
            icon: '⚡',
            features: [
                'Server virtualization and consolidation',
                'Energy-efficient hardware selection',
                'Smart power management systems',
                'Renewable energy integration'
            ]
        },
        {
            title: 'Cloud Optimization',
            description: 'Optimize cloud resources to reduce carbon footprint and costs',
            icon: '☁️',
            features: [
                'Green cloud provider selection',
                'Resource optimization and scaling',
                'Carbon-aware workload scheduling',
                'Sustainable data center practices'
            ]
        },
        {
            title: 'Sustainable Software Development',
            description: 'Build applications with environmental impact in mind',
            icon: '💻',
            features: [
                'Code optimization for efficiency',
                'Green hosting and deployment',
                'Sustainable development practices',
                'Environmental impact monitoring'
            ]
        },
        {
            title: 'Digital Transformation',
            description: 'Help businesses go paperless and reduce physical resource consumption',
            icon: '🔄',
            features: [
                'Paperless office solutions',
                'Digital workflow automation',
                'Remote work infrastructure',
                'Sustainable business processes'
            ]
        }
    ];
    const environmentalBenefits = [
        {
            benefit: 'Reduced Carbon Footprint',
            description: 'Lower energy consumption and greenhouse gas emissions',
            icon: '🌱',
            impact: 'Up to 40% reduction in IT carbon emissions'
        },
        {
            benefit: 'Energy Cost Savings',
            description: 'Lower electricity bills and operational costs',
            icon: '💰',
            impact: '20-30% reduction in energy costs'
        },
        {
            benefit: 'Resource Efficiency',
            description: 'Optimized use of computing resources and materials',
            icon: '♻️',
            impact: 'Improved resource utilization by 25-35%'
        },
        {
            benefit: 'Compliance & Certification',
            description: 'Meet environmental standards and regulations',
            icon: '✅',
            impact: 'Achieve green IT certifications and compliance'
        }
    ];
    const greenPractices = [
        {
            category: 'Hardware Management',
            practices: [
                'Energy Star certified equipment',
                'Hardware lifecycle optimization',
                'Responsible e-waste disposal',
                'Equipment refurbishment and reuse'
            ]
        },
        {
            category: 'Data Center Efficiency',
            practices: [
                'Cooling system optimization',
                'Efficient power distribution',
                'Heat recovery systems',
                'Renewable energy integration'
            ]
        },
        {
            category: 'Software Optimization',
            practices: [
                'Efficient algorithms and code',
                'Resource usage monitoring',
                'Automated power management',
                'Green software development practices'
            ]
        },
        {
            category: 'Workplace Sustainability',
            practices: [
                'Remote work infrastructure',
                'Digital collaboration tools',
                'Paperless office solutions',
                'Sustainable procurement policies'
            ]
        }
    ];
    const caseStudies = [
        {
            company: 'TechCorp Solutions',
            industry: 'Software Development',
            challenge: 'High energy costs and carbon footprint from on-premise infrastructure',
            solution: 'Migrated to optimized cloud infrastructure with green hosting',
            results: [
                '40% reduction in energy consumption',
                '30% decrease in operational costs',
                'Improved scalability and performance',
                'Achieved carbon-neutral status'
            ]
        },
        {
            company: 'Green Manufacturing Co.',
            industry: 'Manufacturing',
            challenge: 'Inefficient IT systems and paper-based processes',
            solution: 'Implemented digital transformation with sustainable IT practices',
            results: [
                '60% reduction in paper usage',
                '25% improvement in process efficiency',
                'Reduced carbon footprint by 35%',
                'Enhanced employee productivity'
            ]
        },
        {
            company: 'EcoRetail Inc.',
            industry: 'Retail',
            challenge: 'Multiple data centers with high energy consumption',
            solution: 'Consolidated infrastructure and implemented green IT solutions',
            results: [
                '50% reduction in data center energy use',
                '45% decrease in IT infrastructure costs',
                'Improved system reliability',
                'Enhanced sustainability credentials'
            ]
        }
    ];
    const greenCertifications = [
        {
            name: 'ISO 14001',
            description: 'Environmental Management Systems',
            icon: '🌍'
        },
        {
            name: 'Energy Star',
            description: 'Energy Efficiency Certification',
            icon: '⭐'
        },
        {
            name: 'LEED',
            description: 'Leadership in Energy and Environmental Design',
            icon: '🏗️'
        },
        {
            name: 'Carbon Trust',
            description: 'Carbon Reduction Certification',
            icon: '🌱'
        }
    ];
    return (_jsx(_Fragment, {}));
    _jsx(SEO, { title: "Green IT Solutions - Sustainable Technology", description: "Explore eco-friendly IT solutions and sustainable technology practices that reduce environmental impact while maintaining performance.", keywords: "green IT, sustainable technology, eco-friendly computing, energy efficient hardware", canonical: "https://ziontechgroup.com/green-it" })
        ,
            _jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800", children: _jsx("main", { className: "pt-12", children: _jsxs("div", { className: "container mx-auto px-4 py-16", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Green IT Solutions" }), _jsx("p", { className: "text-xl text-blue-100 max-w-4xl mx-auto", children: "Transform your technology infrastructure with sustainable, energy-efficient solutions. Our Green IT services help you reduce environmental impact, lower costs, and improve performance while contributing to a more sustainable future." })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Our Green IT Solutions" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto", children: greenSolutions.map((solution, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200", children: [_jsx("div", { className: "text-4xl mb-4 text-center", children: solution.icon }), _jsx("h3", { className: "text-xl font-semibold text-white mb-3 text-center", children: solution.title }), _jsx("p", { className: "text-blue-100 mb-4 text-sm text-center", children: solution.description }), _jsx("ul", { className: "space-y-2", children: solution.features.map((feature, featureIndex) => (_jsxs("li", { className: "text-blue-200 text-sm flex items-center", children: [_jsx("span", { className: "text-green-400 mr-2", children: "\u2713" }), feature] }, featureIndex))) })] }, index))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Environmental Impact" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto", children: environmentalBenefits.map((benefit, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center hover:bg-white/20 transition-colors duration-200", children: [_jsx("div", { className: "text-4xl mb-4", children: benefit.icon }), _jsx("h3", { className: "text-lg font-semibold text-white mb-3", children: benefit.benefit }), _jsx("p", { className: "text-blue-100 mb-4 text-sm", children: benefit.description }), _jsx("div", { className: "text-green-400 font-medium text-sm", children: benefit.impact })] }, index))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Sustainable IT Practices" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto", children: greenPractices.map((practice, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6", children: [_jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: practice.category }), _jsx("ul", { className: "space-y-2", children: practice.practices.map((item, itemIndex) => (_jsxs("li", { className: "text-blue-200 text-sm flex items-center", children: [_jsx("span", { className: "text-green-400 mr-2", children: "\u2713" }), item] }, itemIndex))) })] }, index))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Success Stories" }), _jsx("div", { className: "space-y-8 max-w-6xl mx-auto", children: caseStudies.map((study, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 hover:bg-white/20 transition-colors duration-200", children: [_jsxs("div", { className: "flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-2xl font-semibold text-white mb-2", children: study.company }), _jsx("p", { className: "text-blue-200 text-sm", children: study.industry })] }), _jsx("div", { className: "mt-4 lg:mt-0", children: _jsx("span", { className: "inline-block bg-green-600/30 text-green-200 px-3 py-1 rounded-full text-sm font-medium", children: "Green IT Success" }) })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: [_jsxs("div", { children: [_jsx("h4", { className: "text-white font-semibold mb-3", children: "Challenge:" }), _jsx("p", { className: "text-blue-100 text-sm mb-4", children: study.challenge }), _jsx("h4", { className: "text-white font-semibold mb-3", children: "Solution:" }), _jsx("p", { className: "text-blue-100 text-sm", children: study.solution })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-white font-semibold mb-3", children: "Results:" }), _jsx("ul", { className: "space-y-2", children: study.results.map((result, resultIndex) => (_jsxs("li", { className: "text-blue-200 text-sm flex items-start", children: [_jsx("span", { className: "text-green-400 mr-2 mt-1", children: "\u2022" }), result] }, resultIndex))) })] })] })] }, index))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Green IT Certifications" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto", children: greenCertifications.map((cert, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center hover:bg-white/20 transition-colors duration-200", children: [_jsx("div", { className: "text-4xl mb-4", children: cert.icon }), _jsx("h3", { className: "text-lg font-semibold text-white mb-3", children: cert.name }), _jsx("p", { className: "text-blue-100 text-sm", children: cert.description })] }, index))) })] }), _jsx("div", { className: "max-w-4xl mx-auto", children: _jsxs("div", { className: "bg-gradient-to-r from-green-600/20 to-blue-600/20 backdrop-blur-sm rounded-lg border border-green-500/30 p-8 text-center", children: [_jsx("h2", { className: "text-3xl font-semibold text-white mb-4", children: "Ready to Go Green with Your IT?" }), _jsx("p", { className: "text-blue-100 mb-6 text-lg", children: "Let's discuss how our Green IT solutions can help you reduce environmental impact, lower costs, and improve your technology infrastructure's sustainability." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "/contact", className: "bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg", children: "Start Green IT Journey" }), _jsx("a", { href: "/request-quote", className: "border border-green-500/50 hover:bg-green-500/20 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg", children: "Get Green IT Quote" })] })] }) })] }) }) });
};
 >
;
;
;
export default GreenIT;
