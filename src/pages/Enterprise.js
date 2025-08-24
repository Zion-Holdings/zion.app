import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, Building, Users, Shield, Zap, Globe, BarChart3 } from "lucide-react";
import { Link } from "react-router-dom";
export default function Enterprise() {
    const features = [
        {
            icon: _jsx(Building, { className: "h-8 w-8 text-zion-cyan" }),
            title: "Enterprise Dashboard",
            description: "Centralized management console for all your marketplace activities and team members."
        },
        {
            icon: _jsx(Users, { className: "h-8 w-8 text-zion-purple" }),
            title: "Team Management",
            description: "Manage user roles, permissions, and access controls for your organization."
        },
        {
            icon: _jsx(Shield, { className: "h-8 w-8 text-zion-purple-light" }),
            title: "Advanced Security",
            description: "Enterprise-grade security with SSO, 2FA, and compliance certifications."
        },
        {
            icon: _jsx(Zap, { className: "h-8 w-8 text-zion-cyan" }),
            title: "API Access",
            description: "Full API access for custom integrations and automated workflows."
        },
        {
            icon: _jsx(Globe, { className: "h-8 w-8 text-zion-purple" }),
            title: "Global Reach",
            description: "Access to talent and services from around the world with localized support."
        },
        {
            icon: _jsx(BarChart3, { className: "h-8 w-8 text-zion-purple-light" }),
            title: "Analytics & Reporting",
            description: "Comprehensive insights into your marketplace usage and ROI metrics."
        }
    ];
    const plans = [
        {
            name: "Starter",
            price: "$999",
            period: "/month",
            description: "Perfect for small teams getting started with AI and tech services.",
            features: [
                "Up to 10 team members",
                "Basic analytics dashboard",
                "Email support",
                "Standard API access",
                "Basic reporting"
            ],
            cta: "Get Started",
            popular: false
        },
        {
            name: "Professional",
            price: "$2,499",
            period: "/month",
            description: "Ideal for growing organizations with advanced needs.",
            features: [
                "Up to 50 team members",
                "Advanced analytics",
                "Priority support",
                "Full API access",
                "Custom reporting",
                "SSO integration",
                "Advanced security features"
            ],
            cta: "Start Free Trial",
            popular: true
        },
        {
            name: "Enterprise",
            price: "Custom",
            period: "",
            description: "Tailored solutions for large organizations with specific requirements.",
            features: [
                "Unlimited team members",
                "Custom integrations",
                "Dedicated account manager",
                "24/7 phone support",
                "Custom SLA",
                "On-premise options",
                "Compliance certifications"
            ],
            cta: "Contact Sales",
            popular: false
        }
    ];
    const benefits = [
        {
            title: "Cost Savings",
            description: "Reduce hiring costs by up to 60% with our marketplace model.",
            icon: _jsx(Check, { className: "h-6 w-6 text-green-400" })
        },
        {
            title: "Faster Hiring",
            description: "Find and hire qualified talent in days, not months.",
            icon: _jsx(Check, { className: "h-6 w-6 text-green-400" })
        },
        {
            title: "Quality Assurance",
            description: "Vetted professionals with proven track records.",
            icon: _jsx(Check, { className: "h-6 w-6 text-green-400" })
        },
        {
            title: "Scalability",
            description: "Scale your team up or down based on project needs.",
            icon: _jsx(Check, { className: "h-6 w-6 text-green-400" })
        }
    ];
    return (_jsxs("div", { className: "min-h-screen bg-zion-blue", children: [_jsx(SEO, { title: "Enterprise Solutions - Zion Tech Group", description: "Enterprise-grade solutions for organizations seeking AI talent, tech services, and marketplace management tools.", keywords: "enterprise, business solutions, team management, AI talent, tech services, marketplace", canonical: "https://ziontechgroup.com/enterprise" }), _jsx("main", { className: "pt-24 pb-20", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx(GradientHeading, { className: "text-4xl md:text-6xl mb-6", children: "Enterprise Solutions" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto mb-8", children: "Scale your organization with Zion's enterprise-grade marketplace platform. Access global AI talent, tech services, and powerful management tools." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { asChild: true, size: "lg", className: "bg-zion-purple hover:bg-zion-purple-light", children: _jsx(Link, { to: "/enterprise/plans", children: "View Plans" }) }), _jsx(Button, { asChild: true, variant: "outline", size: "lg", className: "border-zion-purple text-zion-purple hover:bg-zion-purple/10", children: _jsx(Link, { to: "/contact", children: "Contact Sales" }) })] })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16", children: features.map((feature, index) => (_jsxs(Card, { className: "bg-zion-blue-dark border-zion-purple/20 hover:border-zion-purple/40 transition-colors", children: [_jsx(CardHeader, { className: "pb-3", children: feature.icon }), _jsxs(CardContent, { children: [_jsx("h3", { className: "font-semibold text-white mb-2", children: feature.title }), _jsx("p", { className: "text-zion-slate-light text-sm", children: feature.description })] })] }, index))) }), _jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-3xl font-bold text-white text-center mb-12", children: "Why Choose Zion Enterprise?" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: benefits.map((benefit, index) => (_jsxs("div", { className: "flex items-start gap-4", children: [benefit.icon, _jsxs("div", { children: [_jsx("h3", { className: "font-semibold text-white mb-2", children: benefit.title }), _jsx("p", { className: "text-zion-slate-light", children: benefit.description })] })] }, index))) })] }), _jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-3xl font-bold text-white text-center mb-12", children: "Enterprise Plans" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: plans.map((plan, index) => (_jsxs(Card, { className: `bg-zion-blue-dark border-zion-purple/20 ${plan.popular ? 'border-zion-purple/60 ring-2 ring-zion-purple/20' : ''}`, children: [_jsxs(CardHeader, { className: "text-center", children: [plan.popular && (_jsx(Badge, { className: "bg-zion-purple text-white mb-2 mx-auto", children: "Most Popular" })), _jsx(CardTitle, { className: "text-white text-2xl", children: plan.name }), _jsxs("div", { className: "flex items-baseline justify-center gap-1", children: [_jsx("span", { className: "text-3xl font-bold text-zion-cyan", children: plan.price }), _jsx("span", { className: "text-zion-slate-light", children: plan.period })] }), _jsx(CardDescription, { className: "text-zion-slate-light", children: plan.description })] }), _jsxs(CardContent, { children: [_jsx("ul", { className: "space-y-3 mb-6", children: plan.features.map((feature, featureIndex) => (_jsxs("li", { className: "flex items-center gap-2", children: [_jsx(Check, { className: "h-4 w-4 text-zion-cyan flex-shrink-0" }), _jsx("span", { className: "text-zion-slate-light text-sm", children: feature })] }, featureIndex))) }), _jsx(Button, { asChild: true, className: `w-full ${plan.popular
                                                            ? 'bg-zion-purple hover:bg-zion-purple-light'
                                                            : 'bg-zion-blue-light hover:bg-zion-blue text-white'}`, children: _jsx(Link, { to: plan.name === 'Enterprise' ? '/contact' : '/enterprise/plans', children: plan.cta }) })] })] }, index))) })] }), _jsx("div", { className: "text-center", children: _jsx(Card, { className: "bg-gradient-to-r from-zion-purple/20 to-zion-cyan/20 border-zion-purple/40", children: _jsxs(CardContent, { className: "pt-8 pb-8", children: [_jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "Ready to Scale Your Organization?" }), _jsx("p", { className: "text-zion-slate-light mb-6 max-w-2xl mx-auto", children: "Join leading enterprises that trust Zion for their AI talent and tech service needs. Our team is ready to help you get started." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx(Button, { asChild: true, size: "lg", className: "bg-zion-purple hover:bg-zion-purple-light", children: _jsx(Link, { to: "/contact", children: "Schedule a Demo" }) }), _jsx(Button, { asChild: true, variant: "outline", size: "lg", className: "border-zion-purple text-zion-purple hover:bg-zion-purple/10", children: _jsx(Link, { to: "/enterprise/plans", children: "View All Plans" }) })] })] }) }) })] }) })] }));
}
