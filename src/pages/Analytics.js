import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { SEO } from '@/components/SEO';
const Analytics = () => {
    const analyticsServices = [
        {
            title: "Business Intelligence",
            description: "Transform raw data into actionable insights with powerful BI dashboards",
            icon: "📊",
            features: [
                "Interactive dashboards",
                "Real-time reporting",
                "KPI tracking",
                "Custom metrics"
            ]
        },
        {
            title: "Data Engineering",
            description: "Build robust data pipelines and infrastructure for scalable analytics",
            icon: "⚙️",
            features: [
                "ETL/ELT pipelines",
                "Data warehousing",
                "Data lake solutions",
                "API integrations"
            ]
        },
        {
            title: "Predictive Analytics",
            description: "Forecast future trends and behaviors using advanced ML algorithms",
            icon: "🔮",
            features: [
                "Trend forecasting",
                "Customer behavior analysis",
                "Risk assessment",
                "Demand planning"
            ]
        },
        {
            title: "Data Visualization",
            description: "Create compelling visual representations of complex data",
            icon: "🎨",
            features: [
                "Interactive charts",
                "Custom visualizations",
                "Storytelling dashboards",
                "Mobile-responsive views"
            ]
        },
        {
            title: "Real-time Analytics",
            description: "Monitor and analyze data as it happens for immediate insights",
            icon: "⚡",
            features: [
                "Live data streaming",
                "Real-time alerts",
                "Instant reporting",
                "Performance monitoring"
            ]
        },
        {
            title: "Advanced Analytics",
            description: "Leverage machine learning and AI for deeper data insights",
            icon: "🧠",
            features: [
                "Machine learning models",
                "Natural language processing",
                "Anomaly detection",
                "Pattern recognition"
            ]
        }
    ];
    const industrySolutions = [
        {
            industry: "Healthcare",
            description: "Patient analytics, clinical insights, and operational efficiency",
            icon: "🏥",
            useCases: ["Patient outcomes", "Resource optimization", "Clinical research"]
        },
        {
            industry: "Finance",
            description: "Risk assessment, fraud detection, and customer insights",
            icon: "🏦",
            useCases: ["Credit scoring", "Fraud prevention", "Investment analysis"]
        },
        {
            industry: "Retail",
            description: "Customer behavior, inventory optimization, and sales forecasting",
            icon: "🛍️",
            useCases: ["Customer segmentation", "Demand forecasting", "Price optimization"]
        },
        {
            industry: "Manufacturing",
            description: "Predictive maintenance, quality control, and supply chain optimization",
            icon: "🏭",
            useCases: ["Predictive maintenance", "Quality assurance", "Supply chain analytics"]
        },
        {
            industry: "Education",
            description: "Student performance, learning analytics, and institutional insights",
            icon: "🎓",
            useCases: ["Student success", "Curriculum optimization", "Resource planning"]
        },
        {
            industry: "Technology",
            description: "Product analytics, user behavior, and performance optimization",
            icon: "💻",
            useCases: ["User experience", "Product performance", "Technical metrics"]
        }
    ];
    const tools = [
        {
            name: "Tableau",
            description: "Interactive data visualization and business intelligence",
            icon: "📈"
        },
        {
            name: "Power BI",
            description: "Microsoft's business analytics and reporting platform",
            icon: "🔍"
        },
        {
            name: "Python",
            description: "Data analysis, machine learning, and statistical modeling",
            icon: "🐍"
        },
        {
            name: "R",
            description: "Statistical computing and graphics for data analysis",
            icon: "📊"
        },
        {
            name: "Apache Spark",
            description: "Big data processing and analytics engine",
            icon: "⚡"
        },
        {
            name: "Snowflake",
            description: "Cloud-native data warehouse for analytics",
            icon: "❄️"
        }
    ];
    const benefits = [
        {
            title: "Data-Driven Decisions",
            description: "Make informed decisions based on real data and insights",
            icon: "🎯"
        },
        {
            title: "Operational Efficiency",
            description: "Identify bottlenecks and optimize business processes",
            icon: "⚡"
        },
        {
            title: "Competitive Advantage",
            description: "Gain insights that give you an edge over competitors",
            icon: "🏆"
        },
        {
            title: "Cost Reduction",
            description: "Identify cost-saving opportunities and optimize resources",
            icon: "💰"
        },
        {
            title: "Customer Insights",
            description: "Understand customer behavior and improve satisfaction",
            icon: "👥"
        },
        {
            title: "Risk Mitigation",
            description: "Identify and address potential risks proactively",
            icon: "🛡️"
        }
    ];
    const process = [
        {
            step: "1",
            title: "Data Assessment",
            description: "Evaluate your current data infrastructure and identify opportunities"
        },
        {
            step: "2",
            title: "Strategy Development",
            description: "Create a comprehensive analytics strategy aligned with business goals"
        },
        {
            step: "3",
            title: "Implementation",
            description: "Build and deploy analytics solutions with best practices"
        },
        {
            step: "4",
            title: "Training & Adoption",
            description: "Train your team and ensure successful adoption of analytics tools"
        },
        {
            step: "5",
            title: "Ongoing Support",
            description: "Provide continuous support and optimization for long-term success"
        }
    ];
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Data Analytics & Business Intelligence - Zion Tech Group", description: "Transform your data into actionable insights with our comprehensive analytics and BI solutions. From data engineering to predictive analytics, we help you make data-driven decisions.", canonical: "/analytics" }), _jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800", children: _jsx("main", { className: "pt-12", children: _jsxs("div", { className: "container mx-auto px-4 py-16", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Data Analytics & Business Intelligence" }), _jsx("p", { className: "text-xl text-blue-100 max-w-4xl mx-auto", children: "Transform your raw data into actionable insights that drive business growth. Our comprehensive analytics solutions help you make data-driven decisions and stay ahead of the competition." })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Our Analytics Services" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto", children: analyticsServices.map((service, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200", children: [_jsx("div", { className: "text-4xl mb-4 text-center", children: service.icon }), _jsx("h3", { className: "text-xl font-semibold text-white mb-3 text-center", children: service.title }), _jsx("p", { className: "text-blue-100 mb-4 text-sm text-center", children: service.description }), _jsx("ul", { className: "space-y-2", children: service.features.map((feature, featureIndex) => (_jsxs("li", { className: "text-blue-200 text-sm flex items-center", children: [_jsx("span", { className: "text-green-400 mr-2", children: "\u2713" }), feature] }, featureIndex))) })] }, index))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Industry-Specific Solutions" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto", children: industrySolutions.map((solution, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200", children: [_jsx("div", { className: "text-4xl mb-4 text-center", children: solution.icon }), _jsx("h3", { className: "text-xl font-semibold text-white mb-3 text-center", children: solution.industry }), _jsx("p", { className: "text-blue-100 mb-4 text-sm text-center", children: solution.description }), _jsx("div", { className: "space-y-2", children: solution.useCases.map((useCase, useCaseIndex) => (_jsxs("div", { className: "text-blue-200 text-sm flex items-center", children: [_jsx("span", { className: "text-blue-400 mr-2", children: "\u2022" }), useCase] }, useCaseIndex))) })] }, index))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Tools & Technologies" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto", children: tools.map((tool, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center hover:bg-white/20 transition-colors duration-200", children: [_jsx("div", { className: "text-4xl mb-4", children: tool.icon }), _jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: tool.name }), _jsx("p", { className: "text-blue-100 text-sm", children: tool.description })] }, index))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Why Choose Our Analytics Solutions?" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto", children: benefits.map((benefit, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center hover:bg-white/20 transition-colors duration-200", children: [_jsx("div", { className: "text-4xl mb-4", children: benefit.icon }), _jsx("h3", { className: "text-lg font-semibold text-white mb-3", children: benefit.title }), _jsx("p", { className: "text-blue-100 text-sm", children: benefit.description })] }, index))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Our Analytics Process" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto", children: process.map((step, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center relative", children: [_jsx("div", { className: "absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm", children: step.step }), _jsx("h3", { className: "text-xl font-semibold text-white mb-3 mt-4", children: step.title }), _jsx("p", { className: "text-blue-100 text-sm", children: step.description })] }, index))) })] }), _jsx("div", { className: "max-w-4xl mx-auto", children: _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 text-center", children: [_jsx("h2", { className: "text-3xl font-semibold text-white mb-4", children: "Ready to Transform Your Data?" }), _jsx("p", { className: "text-blue-100 mb-6 text-lg", children: "Let's discuss how our analytics solutions can help you unlock the full potential of your data and drive business growth through data-driven insights." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "/contact", className: "bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg", children: "Start Analytics Discussion" }), _jsx("a", { href: "/request-quote", className: "border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg", children: "Get Analytics Quote" })] })] }) })] }) }) })] }));
};
export default Analytics;
