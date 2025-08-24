import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowRight, Users, Zap, Settings, Search, MessageSquare, Smartphone, Calendar, BookOpen, Code, Building, Clock } from "lucide-react";
export function FeatureCTAs() {
    const features = [
        {
            title: "AI Talent Matching",
            description: "Our AI-powered matching algorithm connects you with the perfect talent or job based on skills, experience, and preferences.",
            icon: _jsx(Search, { className: "h-10 w-10 p-2 rounded-md bg-blue-100 text-blue-700" }),
            link: "/marketplace",
            badge: "Popular",
            details: "Leveraging advanced machine learning, our matching system analyzes over 100+ data points to create perfect connections between talents and opportunities."
        },
        {
            title: "Talent Directory",
            description: "Browse our extensive database of verified AI and tech specialists, filtered by expertise and availability.",
            icon: _jsx(Users, { className: "h-10 w-10 p-2 rounded-md bg-purple-100 text-purple-700" }),
            link: "/talent",
            details: "Every talent in our directory undergoes a rigorous verification process to ensure quality, authenticity, and reliability."
        },
        {
            title: "Services Marketplace",
            description: "Discover professional tech and AI services for your business needs, from development to consulting.",
            icon: _jsx(Zap, { className: "h-10 w-10 p-2 rounded-md bg-cyan-100 text-cyan-700" }),
            link: "/services",
            badge: "New",
            details: "From on-demand IT support to specialized AI development, our marketplace offers verified services with transparent pricing and reviews."
        },
        {
            title: "Micro SAAS Solutions",
            description: "Access innovative micro SAAS services including AI chatbots, content generation, and business automation tools.",
            icon: _jsx(Code, { className: "h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" }),
            link: "/micro-saas-services",
            badge: "Featured",
            details: "Scalable software solutions starting from $29/month. Transform your business with AI-powered tools and automation."
        },
        {
            title: "Equipment Catalog",
            description: "Find specialized hardware and tech equipment for AI development and research.",
            icon: _jsx(Settings, { className: "h-10 w-10 p-2 rounded-md bg-amber-100 text-amber-700" }),
            link: "/equipment",
            details: "Access cutting-edge technology with flexible options to buy, rent, or lease specialized equipment for your tech projects."
        },
        {
            title: "Community Hub",
            description: "Connect with like-minded professionals, share insights, and stay updated with industry trends.",
            icon: _jsx(MessageSquare, { className: "h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" }),
            link: "/community",
            details: "Join thousands of tech professionals in discussions, AMAs with industry leaders, and exclusive community events."
        },
        {
            title: "Mobile Experience",
            description: "Take Zion with you on the go with our mobile app for iOS and Android devices.",
            icon: _jsx(Smartphone, { className: "h-10 w-10 p-2 rounded-md bg-indigo-100 text-indigo-700" }),
            link: "/mobile-launch",
            badge: "Featured",
            details: "Manage your projects, communicate with clients or talents, and receive real-time updates wherever you are."
        },
        {
            title: "Enterprise Solutions",
            description: "Custom-branded hiring portal, dedicated talent pool, and powerful admin controls for your organization.",
            icon: _jsx(Building, { className: "h-10 w-10 p-2 rounded-md bg-pink-100 text-pink-700" }),
            link: "/enterprise",
            details: "Scale your talent acquisition with white-labeled solutions, analytics dashboards, and dedicated account managers."
        },
        {
            title: "Developer Tools",
            description: "Access our API documentation, SDKs, and integration guides to build on top of the Zion platform.",
            icon: _jsx(Code, { className: "h-10 w-10 p-2 rounded-md bg-gray-100 text-gray-700" }),
            link: "/developers",
            details: "Leverage our robust API with comprehensive documentation, code examples, and developer support."
        },
        {
            title: "Learning Resources",
            description: "Access tutorials, courses, and documentation to enhance your skills in AI and tech.",
            icon: _jsx(BookOpen, { className: "h-10 w-10 p-2 rounded-md bg-teal-100 text-teal-700" }),
            link: "/blog",
            details: "From beginner guides to advanced technical content, our learning resources help you stay at the cutting edge of technology."
        },
        {
            title: "Project Management",
            description: "Streamlined tools to manage projects, track milestones, and ensure successful delivery.",
            icon: _jsx(Calendar, { className: "h-10 w-10 p-2 rounded-md bg-red-100 text-red-700" }),
            link: "/dashboard/projects",
            details: "Our intuitive project management tools help you track progress, manage deliverables, and ensure timely completion."
        },
        {
            title: "Zion Hire AI",
            description: "AI-powered recruiting assistant to streamline your hiring process and find better matches.",
            icon: _jsx(Clock, { className: "h-10 w-10 p-2 rounded-md bg-violet-100 text-violet-700" }),
            link: "/zion-hire-ai",
            badge: "Premium",
            details: "Automate screening, improve candidate matching, and enhance the hiring experience with our AI recruiting solution."
        }
    ];
    const serviceCategories = [
        {
            title: "AI Services",
            description: "Cutting-edge AI solutions",
            icon: _jsx(Zap, { className: "h-8 w-8" }),
            link: "/micro-saas-services?category=AI Services",
            color: "from-purple-500 to-pink-500",
            count: "15+ Services"
        },
        {
            title: "IT Services",
            description: "Professional IT solutions",
            icon: _jsx(Settings, { className: "h-8 w-8" }),
            link: "/micro-saas-services?category=IT Services",
            color: "from-blue-500 to-cyan-500",
            count: "12+ Services"
        },
        {
            title: "Micro SAAS",
            description: "Scalable software solutions",
            icon: _jsx(Users, { className: "h-8 w-8" }),
            link: "/micro-saas-services?category=Micro SAAS",
            color: "from-green-500 to-emerald-500",
            count: "8+ Services"
        },
        {
            title: "Development",
            description: "Custom development services",
            icon: _jsx(Code, { className: "h-8 w-8" }),
            link: "/micro-saas-services?category=Development",
            color: "from-orange-500 to-red-500",
            count: "10+ Services"
        }
    ];
    return (_jsxs("section", { className: "py-20 bg-gradient-to-b from-background to-background/90 relative overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute top-20 left-20 w-32 h-32 bg-zion-cyan/5 rounded-full animate-pulse" }), _jsx("div", { className: "absolute top-40 right-32 w-24 h-24 bg-zion-purple/5 rounded-full animate-pulse delay-1000" }), _jsx("div", { className: "absolute bottom-20 left-1/3 w-28 h-28 bg-zion-blue/5 rounded-full animate-pulse delay-2000" })] }), _jsxs("div", { className: "relative container mx-auto px-4", children: [_jsxs("div", { className: "mb-16 text-center", children: [_jsx("h2", { className: "text-4xl md:text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-zion-cyan via-zion-purple to-zion-blue bg-clip-text text-transparent", children: "Discover Zion's Powerful Features" }), _jsx("p", { className: "text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed", children: "Explore our comprehensive suite of tools designed to transform how you connect, collaborate, and create in the tech ecosystem." })] }), _jsxs("div", { className: "mb-16", children: [_jsx("h3", { className: "text-2xl font-semibold text-center mb-8 text-white", children: "Popular Service Categories" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: serviceCategories.map((category, index) => (_jsx(Link, { to: category.link, className: "group block", children: _jsxs("div", { className: "bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-zion-cyan/30 hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-zion-cyan/10", children: [_jsx("div", { className: `w-16 h-16 rounded-xl bg-gradient-to-r ${category.color} p-4 text-white mb-4 group-hover:scale-110 transition-transform duration-300`, children: category.icon }), _jsx("h4", { className: "text-lg font-semibold text-white mb-2 group-hover:text-zion-cyan transition-colors", children: category.title }), _jsx("p", { className: "text-white/70 text-sm mb-3", children: category.description }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("span", { className: "text-zion-cyan text-sm font-medium", children: category.count }), _jsx(ArrowRight, { className: "h-4 w-4 text-zion-cyan group-hover:translate-x-1 transition-transform duration-300" })] })] }) }, index))) })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: features.map((feature, index) => (_jsxs(Card, { className: "overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-primary/50 bg-white/5 backdrop-blur-sm border-white/10 hover:border-zion-cyan/30 group", children: [_jsxs(CardHeader, { className: "pb-2", children: [_jsxs("div", { className: "flex justify-between items-start", children: [_jsx("div", { className: "group-hover:scale-110 transition-transform duration-300", children: feature.icon }), feature.badge && (_jsx(Badge, { variant: "secondary", className: "bg-primary/20 text-primary border border-primary/30", children: feature.badge }))] }), _jsx(CardTitle, { className: "mt-4 text-white group-hover:text-zion-cyan transition-colors", children: feature.title }), _jsx(CardDescription, { className: "line-clamp-2 text-white/70", children: feature.description })] }), _jsx(CardContent, { children: _jsx("p", { className: "text-sm text-white/60", children: feature.details }) }), _jsx(CardFooter, { children: _jsx(Button, { asChild: true, className: "w-full gap-1 bg-gradient-to-r from-zion-purple to-zion-blue hover:from-zion-purple-light hover:to-zion-blue-light text-white border-0", children: _jsxs(Link, { to: feature.link, children: [_jsxs("span", { children: ["Explore ", feature.title] }), _jsx(ArrowRight, { className: "h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" })] }) }) })] }, index))) }), _jsx("div", { className: "mt-16 text-center", children: _jsxs("div", { className: "bg-gradient-to-r from-zion-purple/20 via-zion-blue/20 to-zion-cyan/20 rounded-3xl p-12 border border-white/20", children: [_jsx("h3", { className: "text-3xl font-bold text-white mb-4", children: "Ready to Get Started?" }), _jsx("p", { className: "text-xl text-white/80 mb-8 max-w-3xl mx-auto", children: "Join thousands of businesses already using Zion to transform their technology operations and find the perfect solutions." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { size: "lg", className: "bg-gradient-to-r from-zion-cyan to-zion-blue text-white hover:from-zion-cyan-light hover:to-zion-blue-light", asChild: true, children: _jsx(Link, { to: "/micro-saas-services", children: "Browse All Services" }) }), _jsx(Button, { size: "lg", variant: "outline", className: "border-zion-cyan text-zion-cyan hover:bg-zion-cyan hover:text-white", asChild: true, children: _jsx(Link, { to: "/contact", children: "Get in Touch" }) })] })] }) })] })] }));
}
