import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { SEO } from '@/components/SEO';
const Mobile = () => {
    const mobileFeatures = [
        {
            title: "Mobile-First Design",
            description: "We design with mobile users in mind first, ensuring optimal experience across all devices",
            icon: "📱",
            benefits: [
                "Responsive design principles",
                "Touch-friendly interfaces",
                "Mobile performance optimization",
                "Cross-platform compatibility"
            ]
        },
        {
            title: "Zion Mobile App",
            description: "Access our services and manage your projects on the go with our mobile application",
            icon: "🚀",
            benefits: [
                "Project management",
                "Real-time updates",
                "Client communication",
                "Service booking"
            ]
        },
        {
            title: "Progressive Web Apps",
            description: "Web applications that work like native apps with offline functionality",
            icon: "🌐",
            benefits: [
                "No app store required",
                "Offline capabilities",
                "Push notifications",
                "App-like experience"
            ]
        }
    ];
    const mobileServices = [
        {
            title: "iOS Development",
            description: "Native iPhone and iPad applications using Swift and SwiftUI",
            icon: "🍎",
            features: ["Swift & SwiftUI", "App Store optimization", "iOS-specific features", "Performance tuning"]
        },
        {
            title: "Android Development",
            description: "Native Android applications using Kotlin and Jetpack Compose",
            icon: "🤖",
            features: ["Kotlin & Jetpack Compose", "Google Play optimization", "Material Design 3", "Android features"]
        },
        {
            title: "Cross-Platform",
            description: "Single codebase for iOS and Android using React Native or Flutter",
            icon: "📱",
            features: ["React Native", "Flutter", "Shared codebase", "Native performance"]
        },
        {
            title: "Mobile Web",
            description: "Responsive web applications optimized for mobile devices",
            icon: "🌐",
            features: ["Mobile-first design", "Progressive Web Apps", "Responsive layouts", "Touch optimization"]
        }
    ];
    const mobileBenefits = [
        {
            title: "Increased Engagement",
            description: "Mobile users are more engaged and likely to interact with your content",
            icon: "📈"
        },
        {
            title: "Better User Experience",
            description: "Optimized mobile experiences lead to higher satisfaction and retention",
            icon: "⭐"
        },
        {
            title: "Wider Reach",
            description: "Mobile-first approach ensures accessibility across all devices",
            icon: "🌍"
        },
        {
            title: "Competitive Advantage",
            description: "Stay ahead with modern mobile solutions and user expectations",
            icon: "🏆"
        }
    ];
    const mobileStats = [
        {
            stat: "73%",
            label: "Mobile Internet Usage",
            description: "Of all internet traffic comes from mobile devices"
        },
        {
            stat: "85%",
            label: "User Preference",
            description: "Of users prefer mobile-friendly websites"
        },
        {
            stat: "60%",
            label: "Mobile Search",
            description: "Of searches are performed on mobile devices"
        },
        {
            stat: "40%",
            label: "Mobile Conversion",
            description: "Higher conversion rates on mobile-optimized sites"
        }
    ];
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Mobile-First Solutions - Zion Tech Group", description: "Experience mobile-first design and development with Zion Tech Group. From responsive websites to native mobile apps, we ensure optimal mobile experiences.", canonical: "/mobile" }), _jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800", children: _jsx("main", { className: "pt-12", children: _jsxs("div", { className: "container mx-auto px-4 py-16", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Mobile-First Solutions" }), _jsx("p", { className: "text-xl text-blue-100 max-w-4xl mx-auto", children: "In today's mobile-first world, we ensure your digital presence is optimized for mobile devices. From responsive websites to native mobile applications, we deliver exceptional mobile experiences that drive engagement and results." })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Our Mobile Approach" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto", children: mobileFeatures.map((feature, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200", children: [_jsx("div", { className: "text-4xl mb-4 text-center", children: feature.icon }), _jsx("h3", { className: "text-xl font-semibold text-white mb-3 text-center", children: feature.title }), _jsx("p", { className: "text-blue-100 mb-4 text-sm text-center", children: feature.description }), _jsx("ul", { className: "space-y-2", children: feature.benefits.map((benefit, benefitIndex) => (_jsxs("li", { className: "text-blue-200 text-sm flex items-center", children: [_jsx("span", { className: "text-green-400 mr-2", children: "\u2713" }), benefit] }, benefitIndex))) })] }, index))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Mobile Development Services" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto", children: mobileServices.map((service, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200", children: [_jsx("div", { className: "text-4xl mb-4 text-center", children: service.icon }), _jsx("h3", { className: "text-xl font-semibold text-white mb-3 text-center", children: service.title }), _jsx("p", { className: "text-blue-100 mb-4 text-sm text-center", children: service.description }), _jsx("ul", { className: "space-y-2", children: service.features.map((feature, featureIndex) => (_jsxs("li", { className: "text-blue-200 text-sm flex items-center", children: [_jsx("span", { className: "text-green-400 mr-2", children: "\u2713" }), feature] }, featureIndex))) })] }, index))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Why Mobile Matters" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto", children: mobileStats.map((stat, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center hover:bg-white/20 transition-colors duration-200", children: [_jsx("div", { className: "text-4xl font-bold text-blue-400 mb-2", children: stat.stat }), _jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: stat.label }), _jsx("p", { className: "text-blue-100 text-sm", children: stat.description })] }, index))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Benefits of Mobile-First Design" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto", children: mobileBenefits.map((benefit, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center hover:bg-white/20 transition-colors duration-200", children: [_jsx("div", { className: "text-4xl mb-4", children: benefit.icon }), _jsx("h3", { className: "text-lg font-semibold text-white mb-3", children: benefit.title }), _jsx("p", { className: "text-blue-100 text-sm", children: benefit.description })] }, index))) })] }), _jsx("div", { className: "mb-20", children: _jsx("div", { className: "max-w-4xl mx-auto", children: _jsxs("div", { className: "bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-lg border border-blue-500/30 p-8 text-center", children: [_jsx("h2", { className: "text-3xl font-semibold text-white mb-4", children: "Zion Mobile App" }), _jsx("p", { className: "text-blue-100 mb-6 text-lg", children: "Access our services and manage your projects on the go with our mobile application. Available for iOS and Android devices." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "#", className: "bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg", children: "Download for iOS" }), _jsx("a", { href: "#", className: "bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg", children: "Download for Android" })] })] }) }) }), _jsx("div", { className: "max-w-4xl mx-auto", children: _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 text-center", children: [_jsx("h2", { className: "text-3xl font-semibold text-white mb-4", children: "Ready to Go Mobile?" }), _jsx("p", { className: "text-blue-100 mb-6 text-lg", children: "Let's discuss your mobile strategy and create solutions that deliver exceptional experiences across all devices." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "/mobile-launch", className: "bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg", children: "Start Mobile Development" }), _jsx("a", { href: "/contact", className: "border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg", children: "Discuss Mobile Strategy" })] })] }) })] }) }) })] }));
};
export default Mobile;
