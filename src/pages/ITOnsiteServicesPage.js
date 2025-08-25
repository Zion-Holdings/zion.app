import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { SEO } from '@/components/SEO';
const ITOnsiteServicesPage = () => {
    const services = [
        {
            title: "Hardware Installation & Setup",
            description: "Professional installation and configuration of computers, servers, and networking equipment",
            icon: "💻",
            features: [
                "Computer & server installation",
                "Network equipment setup",
                "Peripheral device configuration",
                "Hardware troubleshooting"
            ]
        },
        {
            title: "Network Infrastructure",
            description: "Complete network design, implementation, and maintenance services",
            icon: "🌐",
            features: [
                "Network design & planning",
                "Cable installation & management",
                "WiFi setup & optimization",
                "Network security implementation"
            ]
        },
        {
            title: "Server Management",
            description: "Comprehensive server administration and maintenance services",
            icon: "🖥️",
            features: [
                "Server installation & configuration",
                "Performance optimization",
                "Backup & disaster recovery",
                "24/7 monitoring & support"
            ]
        },
        {
            title: "Cybersecurity Services",
            description: "On-site security assessments and implementation",
            icon: "🔒",
            features: [
                "Security audits & assessments",
                "Firewall configuration",
                "Access control implementation",
                "Security training for staff"
            ]
        },
        {
            title: "System Monitoring",
            description: "Proactive monitoring and maintenance of IT systems",
            icon: "📊",
            features: [
                "Real-time system monitoring",
                "Performance tracking",
                "Predictive maintenance",
                "Automated alerting"
            ]
        },
        {
            title: "IT Consulting",
            description: "Strategic IT planning and technology roadmapping",
            icon: "💡",
            features: [
                "Technology assessment",
                "Strategic planning",
                "Vendor selection",
                "Project management"
            ]
        }
    ];
    const serviceAreas = [
        {
            area: "Office Buildings",
            description: "Complete IT infrastructure for modern office environments",
            icon: "🏢"
        },
        {
            area: "Data Centers",
            description: "Enterprise-grade server and network management",
            icon: "🏭"
        },
        {
            area: "Retail Locations",
            description: "Point-of-sale and inventory management systems",
            icon: "🛍️"
        },
        {
            area: "Healthcare Facilities",
            description: "HIPAA-compliant IT solutions for medical environments",
            icon: "🏥"
        },
        {
            area: "Educational Institutions",
            description: "Technology solutions for schools and universities",
            icon: "🎓"
        },
        {
            area: "Manufacturing Plants",
            description: "Industrial IT systems and automation support",
            icon: "🏭"
        }
    ];
    const benefits = [
        {
            title: "Immediate Response",
            description: "On-site technicians available for urgent issues",
            icon: "⚡"
        },
        {
            title: "Expert Knowledge",
            description: "Certified professionals with years of experience",
            icon: "🎯"
        },
        {
            title: "Cost Effective",
            description: "Prevent costly downtime with proactive maintenance",
            icon: "💰"
        },
        {
            title: "Customized Solutions",
            description: "Tailored IT solutions for your specific needs",
            icon: "🔧"
        },
        {
            title: "24/7 Support",
            description: "Round-the-clock monitoring and emergency response",
            icon: "🕐"
        },
        {
            title: "Compliance Ready",
            description: "Ensure regulatory compliance with expert guidance",
            icon: "✅"
        }
    ];
    const process = [
        {
            step: "1",
            title: "Assessment",
            description: "Comprehensive evaluation of your current IT infrastructure"
        },
        {
            step: "2",
            title: "Planning",
            description: "Develop customized solution and implementation timeline"
        },
        {
            step: "3",
            title: "Implementation",
            description: "Professional installation and configuration of all systems"
        },
        {
            step: "4",
            title: "Testing",
            description: "Thorough testing and validation of all implemented solutions"
        },
        {
            step: "5",
            title: "Training",
            description: "Staff training and documentation for ongoing success"
        },
        {
            step: "6",
            title: "Support",
            description: "Ongoing maintenance and 24/7 technical support"
        }
    ];
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "IT Onsite Services - Professional IT Support at Your Location", description: "Get professional IT support and services delivered directly to your location. Hardware installation, network setup, server management, and more from Zion Tech Group.", canonical: "/it-onsite-services" }), _jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800", children: _jsx("main", { className: "pt-12", children: _jsxs("div", { className: "container mx-auto px-4 py-16", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "IT Onsite Services" }), _jsx("p", { className: "text-xl text-blue-100 max-w-4xl mx-auto", children: "Professional IT support and services delivered directly to your location. From hardware installation to complete network infrastructure, our certified technicians bring expertise and solutions right to your doorstep." })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Our Onsite Services" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto", children: services.map((service, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200", children: [_jsx("div", { className: "text-4xl mb-4 text-center", children: service.icon }), _jsx("h3", { className: "text-xl font-semibold text-white mb-3 text-center", children: service.title }), _jsx("p", { className: "text-blue-100 mb-4 text-sm text-center", children: service.description }), _jsx("ul", { className: "space-y-2", children: service.features.map((feature, featureIndex) => (_jsxs("li", { className: "text-blue-200 text-sm flex items-center", children: [_jsx("span", { className: "text-green-400 mr-2", children: "\u2713" }), feature] }, featureIndex))) })] }, index))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Industries We Serve" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto", children: serviceAreas.map((area, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center hover:bg-white/20 transition-colors duration-200", children: [_jsx("div", { className: "text-4xl mb-4", children: area.icon }), _jsx("h3", { className: "text-xl font-semibold text-white mb-3", children: area.area }), _jsx("p", { className: "text-blue-100 text-sm", children: area.description })] }, index))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Why Choose Onsite Services?" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto", children: benefits.map((benefit, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center hover:bg-white/20 transition-colors duration-200", children: [_jsx("div", { className: "text-4xl mb-4", children: benefit.icon }), _jsx("h3", { className: "text-lg font-semibold text-white mb-3", children: benefit.title }), _jsx("p", { className: "text-blue-100 text-sm", children: benefit.description })] }, index))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Our Process" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto", children: process.map((step, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center relative", children: [_jsx("div", { className: "absolute -top-4 left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-sm", children: step.step }), _jsx("h3", { className: "text-xl font-semibold text-white mb-3 mt-4", children: step.title }), _jsx("p", { className: "text-blue-100 text-sm", children: step.description })] }, index))) })] }), _jsx("div", { className: "mb-20", children: _jsx("div", { className: "max-w-4xl mx-auto", children: _jsxs("div", { className: "bg-gradient-to-r from-red-600/20 to-orange-600/20 backdrop-blur-sm rounded-lg border border-red-500/30 p-8 text-center", children: [_jsx("h2", { className: "text-3xl font-semibold text-white mb-4", children: "Emergency IT Support" }), _jsx("p", { className: "text-blue-100 mb-6 text-lg", children: "Experiencing critical IT issues? Our emergency response team is available 24/7 to resolve urgent problems and minimize downtime." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "/contact", className: "bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg", children: "Emergency Support" }), _jsx("a", { href: "tel:+1-555-ZION-TECH", className: "border border-red-500/50 hover:bg-red-500/20 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg", children: "Call Now" })] })] }) }) }), _jsx("div", { className: "max-w-4xl mx-auto", children: _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 text-center", children: [_jsx("h2", { className: "text-3xl font-semibold text-white mb-4", children: "Ready for Professional Onsite IT Support?" }), _jsx("p", { className: "text-blue-100 mb-6 text-lg", children: "Let our certified technicians bring professional IT solutions directly to your location. Get a free consultation and quote today." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "/request-quote", className: "bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg", children: "Get Free Quote" }), _jsx("a", { href: "/contact", className: "border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg", children: "Schedule Consultation" })] })] }) })] }) }) })] }));
};
export default ITOnsiteServicesPage;
