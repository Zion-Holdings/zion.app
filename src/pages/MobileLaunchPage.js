import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { SEO } from '@/components/SEO';
const MobileLaunchPage = () => {
    const mobileServices = [
        {
            title: "iOS Development",
            description: "Native iPhone and iPad applications using Swift and SwiftUI",
            icon: "🍎",
            features: [
                "Swift & SwiftUI development",
                "App Store optimization",
                "iOS-specific features",
                "Performance optimization"
            ]
        },
        {
            title: "Android Development",
            description: "Native Android applications using Kotlin and Jetpack Compose",
            icon: "🤖",
            features: [
                "Kotlin & Jetpack Compose",
                "Google Play optimization",
                "Material Design 3",
                "Android-specific features"
            ]
        },
        {
            title: "Cross-Platform Development",
            description: "Single codebase for iOS and Android using React Native or Flutter",
            icon: "📱",
            features: [
                "React Native development",
                "Flutter applications",
                "Shared codebase",
                "Native performance"
            ]
        },
        {
            title: "Progressive Web Apps",
            description: "Web applications that work like native apps",
            icon: "🌐",
            features: [
                "PWA development",
                "Offline functionality",
                "App-like experience",
                "Cross-platform compatibility"
            ]
        }
    ];
    const developmentPhases = [
        {
            phase: "1",
            title: "Discovery & Planning",
            description: "Requirements gathering, market research, and project planning",
            deliverables: ["Project roadmap", "Technical specifications", "Timeline & budget"]
        },
        {
            phase: "2",
            title: "Design & Prototyping",
            description: "UI/UX design, wireframes, and interactive prototypes",
            deliverables: ["Wireframes", "UI designs", "Interactive prototype"]
        },
        {
            phase: "3",
            title: "Development",
            description: "Agile development with regular testing and iterations",
            deliverables: ["Working app", "Regular updates", "Quality assurance"]
        },
        {
            phase: "4",
            title: "Testing & QA",
            description: "Comprehensive testing across devices and platforms",
            deliverables: ["Tested app", "Bug fixes", "Performance optimization"]
        },
        {
            phase: "5",
            title: "Launch & Deployment",
            description: "App store submission and launch strategy execution",
            deliverables: ["Published app", "Launch marketing", "User acquisition"]
        },
        {
            phase: "6",
            title: "Post-Launch Support",
            description: "Ongoing maintenance, updates, and user support",
            deliverables: ["Regular updates", "Bug fixes", "Feature enhancements"]
        }
    ];
    const appCategories = [
        {
            category: "Business & Productivity",
            description: "Apps that streamline business operations and improve productivity",
            examples: ["CRM systems", "Project management", "Communication tools", "Analytics dashboards"]
        },
        {
            category: "E-commerce & Retail",
            description: "Mobile shopping experiences and retail solutions",
            examples: ["Online stores", "Inventory management", "Customer loyalty", "Payment processing"]
        },
        {
            category: "Healthcare & Wellness",
            description: "Health monitoring and wellness applications",
            examples: ["Fitness tracking", "Health monitoring", "Telemedicine", "Wellness coaching"]
        },
        {
            category: "Education & Learning",
            description: "Educational apps and learning management systems",
            examples: ["Learning platforms", "Skill development", "Educational games", "Student management"]
        },
        {
            category: "Entertainment & Media",
            description: "Content consumption and entertainment applications",
            examples: ["Streaming services", "Social media", "Gaming", "Content creation"]
        },
        {
            category: "Finance & Banking",
            description: "Financial services and banking applications",
            examples: ["Mobile banking", "Investment tracking", "Budget management", "Payment apps"]
        }
    ];
    const successMetrics = [
        {
            metric: "User Engagement",
            description: "Daily active users, session duration, and retention rates",
            icon: "📈"
        },
        {
            metric: "Performance",
            description: "App load times, crash rates, and overall stability",
            icon: "⚡"
        },
        {
            metric: "User Experience",
            description: "User satisfaction scores and app store ratings",
            icon: "⭐"
        },
        {
            metric: "Business Impact",
            description: "Revenue generation, cost savings, and efficiency gains",
            icon: "💰"
        }
    ];
    const launchSupport = [
        {
            title: "App Store Optimization",
            description: "Optimize your app for better discoverability and downloads",
            services: ["Keyword optimization", "Screenshots & videos", "App descriptions", "Rating management"]
        },
        {
            title: "Marketing Strategy",
            description: "Comprehensive marketing plan for successful app launch",
            services: ["PR campaigns", "Social media marketing", "Influencer partnerships", "Content marketing"]
        },
        {
            title: "User Acquisition",
            description: "Strategies to attract and retain users",
            services: ["Paid advertising", "Organic growth", "Referral programs", "User onboarding"]
        },
        {
            title: "Analytics & Insights",
            description: "Track performance and user behavior for continuous improvement",
            services: ["User analytics", "Performance monitoring", "A/B testing", "User feedback"]
        }
    ];
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Mobile App Development & Launch - Zion Tech Group", description: "Transform your ideas into successful mobile applications. From iOS and Android development to app store launch and marketing, we provide end-to-end mobile solutions.", canonical: "/mobile-launch" }), _jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800", children: _jsx("main", { className: "pt-12", children: _jsxs("div", { className: "container mx-auto px-4 py-16", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Mobile App Development & Launch" }), _jsx("p", { className: "text-xl text-blue-100 max-w-4xl mx-auto", children: "Transform your ideas into successful mobile applications that users love. From concept to launch, we provide comprehensive mobile development services that drive engagement and business growth." })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Our Mobile Development Services" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto", children: mobileServices.map((service, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200", children: [_jsx("div", { className: "text-4xl mb-4 text-center", children: service.icon }), _jsx("h3", { className: "text-xl font-semibold text-white mb-3 text-center", children: service.title }), _jsx("p", { className: "text-blue-100 mb-4 text-sm text-center", children: service.description }), _jsx("ul", { className: "space-y-2", children: service.features.map((feature, featureIndex) => (_jsxs("li", { className: "text-blue-200 text-sm flex items-center", children: [_jsx("span", { className: "text-green-400 mr-2", children: "\u2713" }), feature] }, featureIndex))) })] }, index))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Our Development Process" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto", children: developmentPhases.map((phase, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center relative", children: [_jsx("div", { className: "absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm", children: phase.phase }), _jsx("h3", { className: "text-xl font-semibold text-white mb-3 mt-4", children: phase.title }), _jsx("p", { className: "text-blue-100 mb-4 text-sm", children: phase.description }), _jsx("div", { className: "space-y-2", children: phase.deliverables.map((deliverable, deliverableIndex) => (_jsxs("div", { className: "text-blue-200 text-sm flex items-center", children: [_jsx("span", { className: "text-blue-400 mr-2", children: "\u2022" }), deliverable] }, deliverableIndex))) })] }, index))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "App Categories We Specialize In" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto", children: appCategories.map((category, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200", children: [_jsx("h3", { className: "text-xl font-semibold text-white mb-3 text-center", children: category.category }), _jsx("p", { className: "text-blue-100 mb-4 text-sm text-center", children: category.description }), _jsx("div", { className: "space-y-2", children: category.examples.map((example, exampleIndex) => (_jsxs("div", { className: "text-blue-200 text-sm flex items-center", children: [_jsx("span", { className: "text-green-400 mr-2", children: "\u2022" }), example] }, exampleIndex))) })] }, index))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Measuring Success" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto", children: successMetrics.map((metric, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center hover:bg-white/20 transition-colors duration-200", children: [_jsx("div", { className: "text-4xl mb-4", children: metric.icon }), _jsx("h3", { className: "text-lg font-semibold text-white mb-3", children: metric.metric }), _jsx("p", { className: "text-blue-100 text-sm", children: metric.description })] }, index))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Launch Support & Marketing" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto", children: launchSupport.map((support, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200", children: [_jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: support.title }), _jsx("p", { className: "text-blue-100 mb-4 text-sm", children: support.description }), _jsx("ul", { className: "space-y-2", children: support.services.map((service, serviceIndex) => (_jsxs("li", { className: "text-blue-200 text-sm flex items-center", children: [_jsx("span", { className: "text-green-400 mr-2", children: "\u2713" }), service] }, serviceIndex))) })] }, index))) })] }), _jsx("div", { className: "max-w-4xl mx-auto", children: _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 text-center", children: [_jsx("h2", { className: "text-3xl font-semibold text-white mb-4", children: "Ready to Launch Your Mobile App?" }), _jsx("p", { className: "text-blue-100 mb-6 text-lg", children: "Let's discuss your mobile app idea and create a development plan that ensures success from concept to launch and beyond." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "/contact", className: "bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg", children: "Start Mobile Development" }), _jsx("a", { href: "/request-quote", className: "border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg", children: "Get Mobile App Quote" })] })] }) })] }) }) })] }));
};
export default MobileLaunchPage;
