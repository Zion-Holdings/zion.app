import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { SEO } from '@/components/SEO';
const ZionHireAI = () => {
    const aiCategories = [
        {
            title: "AI Engineers",
            description: "Machine learning engineers, data scientists, and AI researchers",
            skills: ["Python", "TensorFlow", "PyTorch", "MLOps", "NLP"],
            icon: "🤖"
        },
        {
            title: "Data Scientists",
            description: "Experts in data analysis, statistics, and predictive modeling",
            skills: ["R", "Python", "SQL", "Statistics", "Data Visualization"],
            icon: "📊"
        },
        {
            title: "ML Ops Engineers",
            description: "Specialists in deploying and maintaining ML models",
            skills: ["Docker", "Kubernetes", "AWS", "Azure", "CI/CD"],
            icon: "⚙️"
        },
        {
            title: "AI Product Managers",
            description: "Leaders who bridge business and AI technology",
            skills: ["Product Strategy", "AI Ethics", "Stakeholder Management", "Agile"],
            icon: "🎯"
        }
    ];
    const aiServices = [
        {
            title: "AI Talent Assessment",
            description: "Advanced algorithms evaluate technical skills, experience, and cultural fit",
            features: ["Skill verification", "Portfolio analysis", "Cultural alignment", "Performance prediction"]
        },
        {
            title: "Smart Matching",
            description: "AI-powered algorithms match the best candidates to your specific requirements",
            features: ["Requirement analysis", "Candidate ranking", "Skill gap analysis", "Success prediction"]
        },
        {
            title: "Continuous Learning",
            description: "Our AI system continuously improves based on hiring outcomes and feedback",
            features: ["Performance tracking", "Feedback integration", "Algorithm optimization", "Success metrics"]
        }
    ];
    const successMetrics = [
        {
            metric: "95%",
            label: "Hiring Success Rate",
            description: "Candidates placed successfully in their roles"
        },
        {
            metric: "60%",
            label: "Faster Hiring",
            description: "Reduced time-to-hire compared to traditional methods"
        },
        {
            metric: "40%",
            label: "Cost Reduction",
            description: "Lower hiring costs through better matching"
        },
        {
            metric: "90%",
            label: "Retention Rate",
            description: "Higher employee retention after 12 months"
        }
    ];
    const howItWorks = [
        {
            step: "1",
            title: "Define Requirements",
            description: "Tell us about your project needs, team culture, and technical requirements"
        },
        {
            step: "2",
            title: "AI Analysis",
            description: "Our AI analyzes your requirements and searches our talent database"
        },
        {
            step: "3",
            title: "Smart Matching",
            description: "Get a curated list of top candidates ranked by fit and availability"
        },
        {
            step: "4",
            title: "Connect & Hire",
            description: "Interview matched candidates and hire the perfect fit for your team"
        }
    ];
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "ZionHireAI - AI-Powered Talent Matching", description: "Revolutionize your hiring with ZionHireAI. Our AI-powered platform matches you with the perfect tech talent using advanced algorithms and machine learning.", canonical: "/zion-hire-ai" }), _jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800", children: _jsx("main", { className: "pt-12", children: _jsxs("div", { className: "container mx-auto px-4 py-16", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "ZionHireAI" }), _jsx("p", { className: "text-2xl text-blue-200 mb-4", children: "AI-Powered Talent Matching" }), _jsx("p", { className: "text-xl text-blue-100 max-w-4xl mx-auto", children: "Revolutionize your hiring process with our advanced AI algorithms that match you with the perfect tech talent. Faster, smarter, and more accurate than traditional hiring methods." })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "AI Talent Categories" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto", children: aiCategories.map((category, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200", children: [_jsx("div", { className: "text-4xl mb-4 text-center", children: category.icon }), _jsx("h3", { className: "text-xl font-semibold text-white mb-3 text-center", children: category.title }), _jsx("p", { className: "text-blue-100 mb-4 text-sm text-center", children: category.description }), _jsx("div", { className: "flex flex-wrap gap-2 justify-center", children: category.skills.map((skill, skillIndex) => (_jsx("span", { className: "bg-blue-600/30 text-blue-200 px-2 py-1 rounded-full text-xs", children: skill }, skillIndex))) })] }, index))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "How Our AI Works" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto", children: aiServices.map((service, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center", children: [_jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: service.title }), _jsx("p", { className: "text-blue-100 mb-4 text-sm", children: service.description }), _jsx("ul", { className: "space-y-2 text-left", children: service.features.map((feature, featureIndex) => (_jsxs("li", { className: "text-blue-200 text-sm flex items-center", children: [_jsx("span", { className: "text-green-400 mr-2", children: "\u2713" }), feature] }, featureIndex))) })] }, index))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Proven Results" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto", children: successMetrics.map((metric, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center", children: [_jsx("div", { className: "text-4xl font-bold text-blue-400 mb-2", children: metric.metric }), _jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: metric.label }), _jsx("p", { className: "text-blue-100 text-sm", children: metric.description })] }, index))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "How It Works" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto", children: howItWorks.map((step, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center relative", children: [_jsx("div", { className: "absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm", children: step.step }), _jsx("h3", { className: "text-xl font-semibold text-white mb-3 mt-4", children: step.title }), _jsx("p", { className: "text-blue-100 text-sm", children: step.description })] }, index))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Key Features" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto", children: [_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6", children: [_jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: "\uD83C\uDFAF Precision Matching" }), _jsx("p", { className: "text-blue-100 text-sm", children: "Our AI analyzes hundreds of data points to find the perfect match for your specific needs." })] }), _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6", children: [_jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: "\u26A1 Speed & Efficiency" }), _jsx("p", { className: "text-blue-100 text-sm", children: "Get qualified candidates in hours, not weeks. Reduce your time-to-hire significantly." })] }), _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6", children: [_jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: "\uD83D\uDD12 Quality Assurance" }), _jsx("p", { className: "text-blue-100 text-sm", children: "Every candidate is pre-vetted and verified. Maintain high hiring standards with confidence." })] }), _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6", children: [_jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: "\uD83D\uDCCA Data-Driven Insights" }), _jsx("p", { className: "text-blue-100 text-sm", children: "Get detailed analytics and insights to optimize your hiring process continuously." })] }), _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6", children: [_jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: "\uD83C\uDF0D Global Talent Pool" }), _jsx("p", { className: "text-blue-100 text-sm", children: "Access top tech talent from around the world. No geographical limitations." })] }), _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6", children: [_jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: "\uD83D\uDD04 Continuous Learning" }), _jsx("p", { className: "text-blue-100 text-sm", children: "Our AI system improves with every hire, getting smarter and more accurate over time." })] })] })] }), _jsx("div", { className: "max-w-4xl mx-auto", children: _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 text-center", children: [_jsx("h2", { className: "text-3xl font-semibold text-white mb-4", children: "Ready to Transform Your Hiring?" }), _jsx("p", { className: "text-blue-100 mb-6 text-lg", children: "Experience the future of talent acquisition with ZionHireAI. Get started today and see the difference AI-powered hiring can make." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "/contact", className: "bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg", children: "Get Started with ZionHireAI" }), _jsx("a", { href: "/request-quote", className: "border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg", children: "Request Demo" })] })] }) })] }) }) })] }));
};
export default ZionHireAI;
