import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Smartphone, Download, Zap, Shield, Globe, Users, Star, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
export default function Mobile() {
    const features = [
        {
            icon: _jsx(Smartphone, { className: "h-8 w-8 text-zion-cyan" }),
            title: "Mobile-First Design",
            description: "Optimized for mobile devices with intuitive touch controls and responsive layouts."
        },
        {
            icon: _jsx(Zap, { className: "h-8 w-8 text-zion-purple" }),
            title: "Lightning Fast",
            description: "Optimized performance with offline capabilities and instant loading times."
        },
        {
            icon: _jsx(Shield, { className: "h-8 w-8 text-zion-purple-light" }),
            title: "Secure & Private",
            description: "End-to-end encryption and secure authentication to protect your data."
        },
        {
            icon: _jsx(Globe, { className: "h-8 w-8 text-zion-cyan" }),
            title: "Global Access",
            description: "Access the marketplace from anywhere in the world with localized content."
        },
        {
            icon: _jsx(Users, { className: "h-8 w-8 text-zion-purple" }),
            title: "Real-time Chat",
            description: "Instant messaging with clients, talent, and team members on the go."
        },
        {
            icon: _jsx(Star, { className: "h-8 w-8 text-zion-purple-light" }),
            title: "Smart Notifications",
            description: "Intelligent alerts for important updates, messages, and opportunities."
        }
    ];
    const appHighlights = [
        {
            title: "Browse Marketplace",
            description: "Discover AI talent, services, and equipment with advanced search and filtering."
        },
        {
            title: "Manage Projects",
            description: "Track project progress, manage timelines, and collaborate with team members."
        },
        {
            title: "Secure Payments",
            description: "Handle transactions securely with multiple payment options and escrow protection."
        },
        {
            title: "AI-Powered Matching",
            description: "Get intelligent recommendations for talent and services based on your needs."
        }
    ];
    const testimonials = [
        {
            name: "Sarah Chen",
            role: "CTO, TechFlow Inc.",
            content: "The Zion mobile app has revolutionized how we hire AI talent. It's like having the entire marketplace in my pocket.",
            rating: 5
        },
        {
            name: "Marcus Rodriguez",
            role: "Freelance AI Developer",
            content: "I can respond to job opportunities instantly and manage my projects on the go. The mobile experience is seamless.",
            rating: 5
        },
        {
            name: "Dr. Emily Watson",
            role: "AI Research Lead",
            content: "The mobile app makes it easy to stay connected with clients and manage multiple service requests efficiently.",
            rating: 5
        }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-zion-blue", children: [_jsx(SEO, { title: "Mobile App - Zion Tech Group", description: "Download the Zion mobile app for iOS and Android. Access the AI and tech marketplace on the go with our powerful mobile application.", keywords: "mobile app, iOS app, Android app, marketplace app, AI marketplace mobile", canonical: "https://ziontechgroup.com/mobile" }), _jsx("main", { className: "pt-24 pb-20", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx(GradientHeading, { className: "text-4xl md:text-6xl mb-6", children: "Zion Mobile App" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto mb-8", children: "Take the Zion marketplace with you everywhere. Access AI talent, tech services, and manage projects on the go with our powerful mobile application." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-8", children: [_jsx(Button, { asChild: true, size: "lg", className: "bg-zion-purple hover:bg-zion-purple-light", children: _jsx(Link, { to: "/mobile-launch", children: "Download Now" }) }), _jsx(Button, { asChild: true, variant: "outline", size: "lg", className: "border-zion-purple text-zion-purple hover:bg-zion-purple/10", children: _jsx(Link, { to: "/mobile-launch", children: "Learn More" }) })] }), _jsx("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: _jsxs("div", { className: "flex items-center gap-2 bg-black/20 rounded-lg px-4 py-2", children: [_jsx(Download, { className: "h-5 w-5 text-zion-cyan" }), _jsx("span", { className: "text-white text-sm", children: "Available on iOS & Android" })] }) })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16", children: features.map((feature, index) => (_jsxs(Card, { className: "bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors", children: [_jsx(CardHeader, { className: "pb-3", children: feature.icon }), _jsxs(CardContent, { children: [_jsx("h3", { className: "font-semibold text-white mb-2", children: feature.title }), _jsx("p", { className: "text-zion-slate-light text-sm", children: feature.description })] })] }, index))) }), _jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-3xl font-bold text-white text-center mb-12", children: "What You Can Do" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: appHighlights.map((highlight, index) => (_jsx(Card, { className: "bg-zion-blue-dark border-zion-purple/20", children: _jsxs(CardContent, { className: "pt-6", children: [_jsx("h3", { className: "font-semibold text-white mb-2", children: highlight.title }), _jsx("p", { className: "text-zion-slate-light", children: highlight.description })] }) }, index))) })] }), _jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-3xl font-bold text-white text-center mb-12", children: "What Users Say" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: testimonials.map((testimonial, index) => (_jsx(Card, { className: "bg-zion-blue-dark border-zion-purple/20", children: _jsxs(CardContent, { className: "pt-6", children: [_jsx("div", { className: "flex items-center gap-1 mb-3", children: [...Array(testimonial.rating)].map((_, i) => (_jsx(Star, { className: "h-4 w-4 text-yellow-400 fill-current" }, i))) }), _jsxs("p", { className: "text-zion-slate-light mb-4 italic", children: ["\"", testimonial.content, "\""] }), _jsxs("div", { children: [_jsx("p", { className: "text-white font-semibold", children: testimonial.name }), _jsx("p", { className: "text-zion-slate-light text-sm", children: testimonial.role })] })] }) }, index))) })] }), _jsx("div", { className: "text-center", children: _jsx(Card, { className: "bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border-zion-purple/40", children: _jsxs(CardContent, { className: "pt-8 pb-8", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "Ready to Go Mobile?" }), _jsx("p", { className: "text-zion-slate-light mb-6 max-w-2xl mx-auto", children: "Download the Zion mobile app today and take the AI marketplace with you everywhere. Available for iOS and Android devices." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { asChild: true, size: "lg", className: "bg-zion-purple hover:bg-zion-purple-light", children: _jsxs(Link, { to: "/mobile-launch", children: ["Download App", _jsx(ArrowRight, { className: "ml-2 h-4 w-4" })] }) }), _jsx(Button, { asChild: true, variant: "outline", size: "lg", className: "border-zion-purple text-zion-purple hover:bg-zion-purple/10", children: _jsx(Link, { to: "/mobile-launch", children: "View Features" }) })] })] }) }) })] }) })] }));
}
