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
        },
        {
            title: "Micro SAAS Services",
            description: "Comprehensive suite of micro SAAS solutions for AI, IT, Development, Business, Security, Analytics, Automation, and Integration.",
            icon: _jsx(Zap, { className: "h-10 w-10 p-2 rounded-md bg-emerald-100 text-emerald-700" }),
            link: "/micro-saas-services",
            badge: "New",
            details: "Transform your business with our cutting-edge micro SAAS solutions including AI content generation, cybersecurity monitoring, and enterprise integration platforms."
        }
    ];
    return (_jsx("section", { className: "py-16 bg-gradient-to-b from-background to-background/90", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "mb-12 text-center", children: [_jsx("h2", { className: "text-3xl font-bold tracking-tight mb-3", children: "Discover Zion's Powerful Features" }), _jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto", children: "Explore our comprehensive suite of tools designed to transform how you connect, collaborate, and create in the tech ecosystem." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: features.map((feature, index) => (_jsxs(Card, { className: "overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50", children: [_jsxs(CardHeader, { className: "pb-2", children: [_jsxs("div", { className: "flex justify-between items-start", children: [feature.icon, feature.badge && (_jsx(Badge, { variant: "secondary", className: "bg-primary/20 text-primary", children: feature.badge }))] }), _jsx(CardTitle, { className: "mt-4", children: feature.title }), _jsx(CardDescription, { className: "line-clamp-2", children: feature.description })] }), _jsx(CardContent, { children: _jsx("p", { className: "text-sm text-muted-foreground", children: feature.details }) }), _jsx(CardFooter, { children: _jsx(Button, { asChild: true, className: "w-full gap-1", children: _jsxs(Link, { to: feature.link, children: [_jsxs("span", { children: ["Explore ", feature.title] }), _jsx(ArrowRight, { className: "h-4 w-4" })] }) }) })] }, index))) })] }) }));
}
