import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { comprehensiveServices } from '@/data/comprehensiveServices';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Building, Users, Shield, Database, Cloud, Globe, Star, CheckCircle, TrendingUp, ArrowRight, Phone, Mail, Circle, Zap, Monitor, Lock, BarChart3, Zap as Rocket, Volume2, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
const enterpriseServices = comprehensiveServices.filter(service => service.category === 'IT Consulting & Strategy' ||
    service.category === 'Cloud & DevOps' ||
    service.category === 'Cybersecurity');
const enterpriseSolutions = [
    {
        icon: _jsx(Building, { className: "w-8 h-8" }),
        title: "Digital Transformation",
        description: "Complete business transformation with modern technology infrastructure",
        features: ["Process Optimization", "Technology Modernization", "Change Management", "ROI Analysis"],
        benefits: ["Increased Efficiency", "Cost Reduction", "Competitive Advantage", "Future-Proof Operations"]
    },
    {
        icon: _jsx(Cloud, { className: "w-8 h-8" }),
        title: "Enterprise Cloud Solutions",
        description: "Scalable cloud infrastructure for enterprise workloads and applications",
        features: ["Multi-cloud Strategy", "Hybrid Cloud", "Cloud Security", "Cost Optimization"],
        benefits: ["Scalability", "Cost Efficiency", "Global Reach", "Disaster Recovery"]
    },
    {
        icon: _jsx(Shield, { className: "w-8 h-8" }),
        title: "Enterprise Security",
        description: "Comprehensive security solutions for enterprise environments",
        features: ["Zero Trust Architecture", "Threat Intelligence", "Compliance Management", "Incident Response"],
        benefits: ["Risk Mitigation", "Regulatory Compliance", "Business Continuity", "Customer Trust"]
    },
    {
        icon: _jsx(Database, { className: "w-8 h-8" }),
        title: "Data & Analytics Platform",
        description: "Enterprise-grade data infrastructure and analytics capabilities",
        features: ["Data Warehouse", "Real-time Analytics", "Business Intelligence", "Data Governance"],
        benefits: ["Data-Driven Decisions", "Operational Insights", "Customer Intelligence", "Performance Optimization"]
    },
    {
        icon: _jsx(Users, { className: "w-8 h-8" }),
        title: "Enterprise Integration",
        description: "Seamless integration of legacy and modern systems",
        features: ["API Management", "Data Integration", "System Migration", "Legacy Modernization"],
        benefits: ["Operational Efficiency", "Data Consistency", "Reduced Complexity", "Improved User Experience"]
    },
    {
        icon: _jsx(Globe, { className: "w-8 h-8" }),
        title: "Global IT Support",
        description: "24/7 global IT support and managed services",
        features: ["Global Coverage", "24/7 Support", "Proactive Monitoring", "Rapid Response"],
        benefits: ["Business Continuity", "Reduced Downtime", "Global Operations", "Cost Predictability"]
    }
];
const enterpriseIndustries = [
    {
        name: "Financial Services",
        description: "Banking, insurance, and fintech solutions",
        icon: "🏦",
        challenges: ["Regulatory Compliance", "Security Threats", "Legacy Systems", "Digital Innovation"],
        solutions: ["Compliance Automation", "Advanced Security", "Cloud Migration", "API Banking"]
    },
    {
        name: "Healthcare",
        description: "Digital health and medical technology solutions",
        icon: "🏥",
        challenges: ["Data Privacy", "Interoperability", "Patient Experience", "Operational Efficiency"],
        solutions: ["HIPAA Compliance", "System Integration", "Patient Portals", "Process Automation"]
    },
    {
        name: "Manufacturing",
        description: "Industry 4.0 and smart manufacturing",
        icon: "🏭",
        challenges: ["Supply Chain", "Quality Control", "Predictive Maintenance", "Digital Twins"],
        solutions: ["IoT Integration", "AI Analytics", "Predictive Maintenance", "Digital Transformation"]
    },
    {
        name: "Retail & E-commerce",
        description: "Omnichannel retail and digital commerce",
        icon: "🛍️",
        challenges: ["Customer Experience", "Inventory Management", "Omnichannel Integration", "Data Analytics"],
        solutions: ["Personalization", "Real-time Inventory", "Unified Commerce", "Customer Insights"]
    },
    {
        name: "Energy & Utilities",
        description: "Smart grid and energy management",
        icon: "⚡",
        challenges: ["Grid Modernization", "Renewable Integration", "Customer Engagement", "Operational Efficiency"],
        solutions: ["Smart Grid", "Energy Analytics", "Customer Portals", "Process Optimization"]
    },
    {
        name: "Transportation & Logistics",
        description: "Supply chain and mobility solutions",
        icon: "🚚",
        challenges: ["Route Optimization", "Real-time Tracking", "Supply Chain Visibility", "Sustainability"],
        solutions: ["AI Routing", "IoT Tracking", "Blockchain", "Green Logistics"]
    }
];
const enterpriseFeatures = [
    {
        icon: _jsx(Lock, { className: "w-6 h-6" }),
        title: "Enterprise Security",
        description: "Bank-level security with SOC 2, ISO 27001, and GDPR compliance"
    },
    {
        icon: _jsx(Monitor, { className: "w-6 h-6" }),
        title: "Scalable Architecture",
        description: "Built to handle enterprise workloads and scale with your business"
    },
    {
        icon: _jsx(Volume2, { className: "w-6 h-6" }),
        title: "24/7 Support",
        description: "Round-the-clock technical support and monitoring"
    },
    {
        icon: _jsx(BarChart3, { className: "w-6 h-6" }),
        title: "Performance Analytics",
        description: "Comprehensive monitoring and performance optimization"
    },
    {
        icon: _jsx(Globe, { className: "w-6 h-6" }),
        title: "Global Deployment",
        description: "Deploy anywhere with multi-region and multi-cloud support"
    },
    {
        icon: _jsx(Rocket, { className: "w-6 h-6" }),
        title: "Rapid Implementation",
        description: "Quick deployment with minimal business disruption"
    }
];
export default function EnterpriseSolutionsPage() {
    const [selectedTab, setSelectedTab] = useState('solutions');
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx("section", { className: "bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple py-20", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsxs("div", { className: "flex items-center justify-center mb-6", children: [_jsx(Building, { className: "w-8 h-8 text-zion-cyan mr-3" }), _jsx("h1", { className: "text-4xl md:text-6xl font-bold text-white", children: "Enterprise Solutions" })] }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto mb-8", children: "Transform your enterprise with scalable, secure, and innovative technology solutions. From digital transformation to global IT support, we deliver enterprise-grade results." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsx(Link, { to: "/comprehensive-services", children: _jsxs(Button, { size: "lg", className: "bg-zion-purple hover:bg-zion-purple-dark text-white", children: [_jsx(Circle, { className: "w-5 h-5 mr-2" }), "Explore Solutions"] }) }), _jsx(Link, { to: "/request-quote", children: _jsxs(Button, { size: "lg", variant: "outline", className: "border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10", children: [_jsx(Phone, { className: "w-5 h-5 mr-2" }), "Schedule Consultation"] }) })] })] }) }), _jsx("section", { className: "py-16 bg-zion-blue-light", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold text-zion-blue mb-4", children: "Enterprise-Grade Solutions" }), _jsx("p", { className: "text-zion-slate-light text-lg max-w-2xl mx-auto", children: "Comprehensive technology solutions designed for enterprise-scale operations and growth" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: enterpriseSolutions.map((solution, index) => (_jsxs(Card, { className: "border-zion-blue-light hover:border-zion-purple transition-all duration-300 hover:shadow-lg", children: [_jsxs(CardHeader, { className: "text-center pb-4", children: [_jsx("div", { className: "mx-auto w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-blue rounded-full flex items-center justify-center text-zion-cyan mb-4", children: solution.icon }), _jsx(CardTitle, { className: "text-lg text-zion-blue", children: solution.title }), _jsx(CardDescription, { className: "text-zion-slate-light", children: solution.description })] }), _jsxs(CardContent, { children: [_jsxs("div", { className: "mb-4", children: [_jsx("h4", { className: "text-sm font-semibold text-zion-blue mb-2", children: "Key Features:" }), _jsx("div", { className: "space-y-1", children: solution.features.map((feature, featureIndex) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(CheckCircle, { className: "w-3 h-3 text-green-500" }), _jsx("span", { className: "text-xs text-zion-slate", children: feature })] }, featureIndex))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-sm font-semibold text-zion-blue mb-2", children: "Business Benefits:" }), _jsx("div", { className: "space-y-1", children: solution.benefits.map((benefit, benefitIndex) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(TrendingUp, { className: "w-3 h-3 text-blue-500" }), _jsx("span", { className: "text-xs text-zion-slate", children: benefit })] }, benefitIndex))) })] })] })] }, index))) })] }) }), _jsx("section", { className: "py-16", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs(Tabs, { value: selectedTab, onValueChange: setSelectedTab, className: "w-full", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold text-zion-blue mb-4", children: "Enterprise Services Portfolio" }), _jsx("p", { className: "text-zion-slate-light text-lg max-w-2xl mx-auto", children: "Comprehensive services designed for enterprise-scale operations and digital transformation" })] }), _jsxs(TabsList, { className: "grid w-full grid-cols-3 mb-8", children: [_jsx(TabsTrigger, { value: "solutions", className: "text-zion-blue", children: "Solutions" }), _jsx(TabsTrigger, { value: "industries", className: "text-zion-blue", children: "Industries" }), _jsx(TabsTrigger, { value: "features", className: "text-zion-blue", children: "Features" })] }), _jsx(TabsContent, { value: "solutions", className: "space-y-6", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: enterpriseServices.map((service) => (_jsxs(Card, { className: "h-full border-zion-blue-light hover:border-zion-purple transition-all duration-300 hover:shadow-lg", children: [_jsxs(CardHeader, { className: "pb-3", children: [_jsxs("div", { className: "flex items-start justify-between mb-2", children: [_jsx(Badge, { variant: "secondary", className: "text-xs", children: service.subcategory }), service.featured && (_jsxs(Badge, { className: "bg-zion-purple text-white text-xs", children: [_jsx(Star, { className: "w-3 h-3 mr-1" }), "Featured"] }))] }), _jsx(CardTitle, { className: "text-lg text-zion-blue line-clamp-2", children: service.title }), _jsx(CardDescription, { className: "text-sm text-zion-slate-light line-clamp-3", children: service.description })] }), _jsxs(CardContent, { className: "pb-3", children: [_jsxs("div", { className: "mb-4", children: [_jsx("h4", { className: "text-sm font-semibold text-zion-blue mb-2", children: "Key Features:" }), _jsx("div", { className: "flex flex-wrap gap-1", children: service.features.slice(0, 3).map((feature, index) => (_jsx(Badge, { variant: "outline", className: "text-xs border-zion-blue-light text-zion-slate", children: feature }, index))) })] }), _jsxs("div", { className: "flex items-center justify-between mb-3", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsxs("span", { className: "text-lg font-bold text-zion-blue", children: [service.currency, service.price.toLocaleString()] }), _jsx(Badge, { variant: "outline", className: "text-xs", children: service.pricingModel })] }), _jsxs("div", { className: "text-right", children: [_jsxs("div", { className: "flex items-center gap-1 text-sm text-zion-slate-light", children: [_jsx(Star, { className: "w-3 h-3 text-yellow-500" }), _jsx("span", { children: service.rating })] }), _jsxs("div", { className: "text-xs text-zion-slate-light", children: ["AI Score: ", service.aiScore] })] })] })] }), _jsx(CardFooter, { className: "pt-0", children: _jsx("div", { className: "w-full space-y-3", children: _jsxs("div", { className: "flex gap-2", children: [_jsxs(Button, { size: "sm", className: "flex-1 bg-zion-purple hover:bg-zion-purple-dark text-white", onClick: () => window.open(`tel:${service.contactInfo.phone}`), children: [_jsx(Phone, { className: "w-3 h-3 mr-1" }), "Call Now"] }), _jsxs(Button, { size: "sm", variant: "outline", className: "flex-1 border-zion-blue-light text-zion-blue hover:bg-zion-blue/10", onClick: () => window.open(`mailto:${service.contactInfo.email}`), children: [_jsx(Mail, { className: "w-3 h-3 mr-1" }), "Email"] })] }) }) })] }, service.id))) }) }), _jsx(TabsContent, { value: "industries", className: "space-y-6", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: enterpriseIndustries.map((industry, index) => (_jsxs(Card, { className: "border-zion-blue-light hover:border-zion-purple transition-all duration-300 hover:shadow-lg", children: [_jsxs(CardHeader, { className: "text-center pb-4", children: [_jsx("div", { className: "text-4xl mb-4", children: industry.icon }), _jsx(CardTitle, { className: "text-lg text-zion-blue", children: industry.name }), _jsx(CardDescription, { className: "text-zion-slate-light", children: industry.description })] }), _jsxs(CardContent, { children: [_jsxs("div", { className: "mb-4", children: [_jsx("h4", { className: "text-sm font-semibold text-zion-blue mb-2", children: "Key Challenges:" }), _jsx("div", { className: "space-y-1", children: industry.challenges.map((challenge, challengeIndex) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Circle, { className: "w-3 h-3 text-red-500" }), _jsx("span", { className: "text-xs text-zion-slate", children: challenge })] }, challengeIndex))) })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-sm font-semibold text-zion-blue mb-2", children: "Our Solutions:" }), _jsx("div", { className: "space-y-1", children: industry.solutions.map((solution, solutionIndex) => (_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Zap, { className: "w-3 h-3 text-green-500" }), _jsx("span", { className: "text-xs text-zion-slate", children: solution })] }, solutionIndex))) })] })] })] }, index))) }) }), _jsx(TabsContent, { value: "features", className: "space-y-6", children: _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: enterpriseFeatures.map((feature, index) => (_jsxs(Card, { className: "border-zion-blue-light hover:border-zion-purple transition-all duration-300 hover:shadow-lg", children: [_jsxs(CardHeader, { className: "text-center pb-4", children: [_jsx("div", { className: "mx-auto w-16 h-16 bg-gradient-to-br from-zion-purple to-zion-blue rounded-full flex items-center justify-center text-zion-cyan mb-4", children: feature.icon }), _jsx(CardTitle, { className: "text-lg text-zion-blue", children: feature.title })] }), _jsx(CardContent, { children: _jsx("p", { className: "text-zion-slate-light text-sm text-center", children: feature.description }) })] }, index))) }) })] }) }) }), _jsx("section", { className: "py-16 bg-zion-blue-light", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold text-zion-blue mb-4", children: "Enterprise Implementation Process" }), _jsx("p", { className: "text-zion-slate-light text-lg max-w-2xl mx-auto", children: "Our proven methodology ensures successful enterprise transformation with minimal disruption" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [
                                {
                                    step: "01",
                                    title: "Discovery & Assessment",
                                    description: "Comprehensive analysis of current systems and business requirements",
                                    icon: "🔍",
                                    duration: "1-2 weeks"
                                },
                                {
                                    step: "02",
                                    title: "Strategy & Planning",
                                    description: "Detailed roadmap and implementation strategy aligned with business goals",
                                    icon: "📋",
                                    duration: "2-3 weeks"
                                },
                                {
                                    step: "03",
                                    title: "Implementation",
                                    description: "Phased deployment with continuous testing and validation",
                                    icon: "⚡",
                                    duration: "4-12 weeks"
                                },
                                {
                                    step: "04",
                                    title: "Optimization & Support",
                                    description: "Ongoing optimization, monitoring, and support services",
                                    icon: "🚀",
                                    duration: "Ongoing"
                                }
                            ].map((phase, index) => (_jsxs(Card, { className: "text-center border-zion-blue-light", children: [_jsxs(CardHeader, { children: [_jsx("div", { className: "text-4xl mb-4", children: phase.icon }), _jsx("div", { className: "text-sm text-zion-purple font-bold mb-2", children: phase.step }), _jsx(CardTitle, { className: "text-lg text-zion-blue", children: phase.title })] }), _jsxs(CardContent, { children: [_jsx("p", { className: "text-zion-slate-light text-sm mb-3", children: phase.description }), _jsxs("div", { className: "flex items-center justify-center gap-1 text-xs text-zion-slate", children: [_jsx(Clock, { className: "w-3 h-3" }), _jsx("span", { children: phase.duration })] })] })] }, index))) })] }) }), _jsx("section", { className: "py-16 bg-zion-blue", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-4", children: "Ready to Transform Your Enterprise?" }), _jsx("p", { className: "text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto", children: "Let our enterprise experts help you navigate digital transformation and achieve your business objectives. Schedule a consultation to discuss your specific needs." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center mb-8", children: [_jsxs("div", { className: "flex items-center justify-center gap-2 text-zion-cyan", children: [_jsx(Phone, { className: "w-5 h-5" }), _jsx("span", { className: "text-lg font-semibold", children: "+1 302 464 0950" })] }), _jsxs("div", { className: "flex items-center justify-center gap-2 text-zion-cyan", children: [_jsx(Mail, { className: "w-5 h-5" }), _jsx("span", { className: "text-lg font-semibold", children: "kleber@ziontechgroup.com" })] })] }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsx(Link, { to: "/request-quote", children: _jsxs(Button, { size: "lg", className: "bg-zion-purple hover:bg-zion-purple-dark text-white", children: [_jsx(Circle, { className: "w-5 h-5 mr-2" }), "Schedule Consultation", _jsx(ArrowRight, { className: "w-5 h-5 ml-2" })] }) }), _jsx(Link, { to: "/comprehensive-services", children: _jsxs(Button, { size: "lg", variant: "outline", className: "border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10", children: [_jsx(Building, { className: "w-5 h-5 mr-2" }), "Explore Solutions"] }) })] })] }) })] }));
}
