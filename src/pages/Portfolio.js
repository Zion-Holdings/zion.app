import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Search, Filter, Star, Eye, Heart, Share2 } from "lucide-react";
import { Link } from "react-router-dom";
export default function Portfolio() {
    // Sample portfolio data
    const portfolios = [
        {
            id: 1,
            title: "AI-Powered E-commerce Platform",
            creator: "Sarah Chen",
            avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
            category: "AI Development",
            skills: ["Python", "TensorFlow", "React", "Node.js"],
            description: "A comprehensive e-commerce solution powered by machine learning for personalized recommendations and dynamic pricing.",
            rating: 4.9,
            views: 1247,
            likes: 89,
            image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
            tags: ["Machine Learning", "E-commerce", "Full-stack"]
        },
        {
            id: 2,
            title: "Sustainable Energy Dashboard",
            creator: "Marcus Rodriguez",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
            category: "Data Visualization",
            skills: ["D3.js", "Python", "PostgreSQL", "AWS"],
            description: "Real-time monitoring and analytics dashboard for renewable energy systems with predictive maintenance capabilities.",
            rating: 4.8,
            views: 892,
            likes: 67,
            image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=600&h=400&fit=crop",
            tags: ["Data Science", "Sustainability", "IoT"]
        },
        {
            id: 3,
            title: "Blockchain Supply Chain Solution",
            creator: "Aisha Patel",
            avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
            category: "Blockchain",
            skills: ["Solidity", "Web3.js", "React", "Ethereum"],
            description: "Transparent and secure supply chain management system using blockchain technology for traceability and compliance.",
            rating: 4.7,
            views: 756,
            likes: 54,
            image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop",
            tags: ["Blockchain", "Supply Chain", "Smart Contracts"]
        },
        {
            id: 4,
            title: "Cybersecurity Threat Detection",
            creator: "David Kim",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
            category: "Cybersecurity",
            skills: ["Python", "Machine Learning", "Docker", "Kubernetes"],
            description: "Advanced threat detection system using AI to identify and respond to cybersecurity threats in real-time.",
            rating: 4.9,
            views: 1103,
            likes: 78,
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop",
            tags: ["Cybersecurity", "AI", "DevOps"]
        },
        {
            id: 5,
            title: "Mobile Health Monitoring App",
            creator: "Emily Watson",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
            category: "Mobile Development",
            skills: ["React Native", "TypeScript", "Firebase", "HealthKit"],
            description: "Comprehensive health monitoring application with real-time data tracking and AI-powered health insights.",
            rating: 4.6,
            views: 634,
            likes: 45,
            image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
            tags: ["Mobile", "Healthcare", "AI"]
        },
        {
            id: 6,
            title: "Quantum Computing Simulator",
            creator: "Alex Thompson",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
            category: "Quantum Computing",
            skills: ["Qiskit", "Python", "NumPy", "Matplotlib"],
            description: "Educational quantum computing simulator with interactive visualizations and algorithm demonstrations.",
            rating: 4.8,
            views: 445,
            likes: 32,
            image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600&h=400&fit=crop",
            tags: ["Quantum Computing", "Education", "Visualization"]
        }
    ];
    const categories = [
        "All Categories",
        "AI Development",
        "Data Visualization",
        "Blockchain",
        "Cybersecurity",
        "Mobile Development",
        "Quantum Computing",
        "Web Development",
        "IoT",
        "Cloud Computing"
    ];
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Portfolio Showcase | Zion Tech Group", description: "Explore amazing portfolios and projects from talented developers, designers, and tech professionals on Zion Tech Group.", keywords: "portfolio, projects, showcase, tech talent, developers, designers, Zion Tech Group", canonical: "https://ziontechgroup.com/portfolio" }), _jsx(Header, {}), _jsx("main", { className: "min-h-screen bg-zion-blue pt-24 pb-20", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Portfolio Showcase" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "Discover amazing projects and innovative solutions from our talented community of tech professionals" })] }), _jsx("div", { className: "mb-12", children: _jsx("div", { className: "bg-zion-blue-dark border border-zion-purple/20 rounded-lg p-6", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4", children: [_jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-zion-slate h-4 w-4" }), _jsx(Input, { placeholder: "Search portfolios...", className: "pl-10 bg-zion-blue border-zion-purple/20 text-white placeholder:text-zion-slate-light focus:border-zion-purple" })] }), _jsxs(Select, { defaultValue: "all", children: [_jsx(SelectTrigger, { className: "bg-zion-blue border-zion-purple/20 text-white", children: _jsx(SelectValue, { placeholder: "Select category" }) }), _jsx(SelectContent, { className: "bg-zion-blue-dark border-zion-purple/20", children: categories.map((category) => (_jsx(SelectItem, { value: category.toLowerCase().replace(' ', '-'), children: category }, category))) })] }), _jsxs(Button, { className: "bg-zion-purple hover:bg-zion-purple-light", children: [_jsx(Filter, { className: "w-4 h-4 mr-2" }), "Advanced Filters"] })] }) }) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8", children: portfolios.map((portfolio) => (_jsxs(Card, { className: "bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors group", children: [_jsxs("div", { className: "relative overflow-hidden rounded-t-lg", children: [_jsx("img", { src: portfolio.image, alt: portfolio.title, className: "w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300" }), _jsxs("div", { className: "absolute top-4 right-4 flex space-x-2", children: [_jsx(Button, { size: "sm", variant: "ghost", className: "bg-black/50 hover:bg-black/70 text-white", children: _jsx(Heart, { className: "w-4 h-4" }) }), _jsx(Button, { size: "sm", variant: "ghost", className: "bg-black/50 hover:bg-black/70 text-white", children: _jsx(Share2, { className: "w-4 h-4" }) })] })] }), _jsxs(CardHeader, { className: "pb-4", children: [_jsxs("div", { className: "flex items-start justify-between mb-3", children: [_jsxs("div", { className: "flex items-center space-x-3", children: [_jsx("img", { src: portfolio.avatar, alt: portfolio.creator, className: "w-10 h-10 rounded-full object-cover" }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold text-white group-hover:text-zion-cyan transition-colors", children: portfolio.title }), _jsx("p", { className: "text-sm text-zion-slate-light", children: portfolio.creator })] })] }), _jsxs("div", { className: "flex items-center space-x-1 text-zion-cyan", children: [_jsx(Star, { className: "w-4 h-4 fill-current" }), _jsx("span", { className: "text-sm font-medium", children: portfolio.rating })] })] }), _jsxs("div", { className: "flex items-center justify-between text-sm text-zion-slate-light mb-3", children: [_jsx("span", { className: "bg-zion-purple/20 text-zion-purple px-2 py-1 rounded-full text-xs", children: portfolio.category }), _jsxs("div", { className: "flex items-center space-x-4", children: [_jsxs("span", { className: "flex items-center space-x-1", children: [_jsx(Eye, { className: "w-4 h-4" }), _jsx("span", { children: portfolio.views })] }), _jsxs("span", { className: "flex items-center space-x-1", children: [_jsx(Heart, { className: "w-4 h-4" }), _jsx("span", { children: portfolio.likes })] })] })] })] }), _jsxs(CardContent, { children: [_jsx("p", { className: "text-zion-slate-light text-sm mb-4 line-clamp-2", children: portfolio.description }), _jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [portfolio.skills.slice(0, 3).map((skill, index) => (_jsx(Badge, { variant: "secondary", className: "bg-zion-blue text-zion-cyan border-zion-cyan/20", children: skill }, index))), portfolio.skills.length > 3 && (_jsxs(Badge, { variant: "secondary", className: "bg-zion-blue text-zion-slate-light border-zion-slate-light/20", children: ["+", portfolio.skills.length - 3, " more"] }))] }), _jsxs("div", { className: "flex items-center justify-between", children: [_jsx(Link, { to: `/portfolio/${portfolio.id}`, className: "text-zion-cyan hover:text-zion-cyan-light text-sm font-medium", children: "View Details \u2192" }), _jsx(Button, { size: "sm", className: "bg-zion-purple hover:bg-zion-purple-light", children: "Contact Creator" })] })] })] }, portfolio.id))) }), _jsx("div", { className: "mt-16 text-center", children: _jsxs(Card, { className: "bg-zion-blue-dark border-zion-purple/20 max-w-2xl mx-auto", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-2xl text-zion-cyan", children: "Showcase Your Work" }), _jsx(CardDescription, { className: "text-zion-slate-light", children: "Have an amazing project to share? Join our community and showcase your portfolio." })] }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsx("p", { className: "text-zion-slate-light", children: "Connect with potential clients and collaborators by sharing your best work." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Link, { to: "/signup", className: "inline-flex items-center justify-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple-light transition-colors", children: "Get Started" }), _jsx(Link, { to: "/portfolio-builder", className: "inline-flex items-center justify-center px-6 py-3 border border-zion-purple text-zion-cyan font-medium rounded-lg hover:bg-zion-purple/10 transition-colors", children: "Build Portfolio" })] })] }) })] }) })] }) }), _jsx(Footer, {})] }));
}
