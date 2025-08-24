import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Zap, Shield, Cloud, Database, TrendingUp, Mail, Phone, MapPin, Globe, Award, ArrowRight, CheckCircle, DollarSign } from "lucide-react";
import Cpu from "lucide-react/dist/esm/icons/cpu";
import { Link as LinkIcon } from "lucide-react";
import Target from "lucide-react/dist/esm/icons/target";
import Rocket from "lucide-react/dist/esm/icons/rocket";
const SERVICE_PRICING_DATA = [
    // AI & Automation Services
    {
        name: "AI Process Automation Suite",
        description: "End-to-end automation solution for business processes using AI",
        price: "$8,999",
        duration: "2-4 weeks",
        features: [
            "RPA integration and custom AI model training",
            "Document processing automation",
            "Customer service automation",
            "Workflow management",
            "24/7 monitoring and support",
            "Custom integrations"
        ],
        bestFor: "Medium to large enterprises looking to automate complex business processes",
        category: "AI & Automation",
        icon: _jsx(Zap, { className: "h-6 w-6" }),
        color: "from-purple-500 to-indigo-600"
    },
    {
        name: "Enterprise AI Chatbot Platform",
        description: "Multi-language AI chatbot platform with advanced NLP capabilities",
        price: "$5,999",
        duration: "1-2 weeks",
        features: [
            "Multi-language support",
            "Sentiment analysis",
            "CRM integration",
            "Voice, text, and video interactions",
            "99.9% uptime guarantee",
            "Custom training and deployment"
        ],
        bestFor: "Businesses requiring intelligent customer support automation",
        category: "AI & Automation",
        icon: _jsx(Zap, { className: "h-6 w-6" }),
        color: "from-purple-500 to-indigo-600"
    },
    {
        name: "Predictive Analytics & Forecasting",
        description: "Advanced ML platform for sales forecasting and market analysis",
        price: "$7,499",
        duration: "3-5 weeks",
        features: [
            "Sales forecasting and demand planning",
            "Risk assessment and market trend analysis",
            "Real-time data processing",
            "Automated reporting",
            "Custom ML model development",
            "API access and integrations"
        ],
        bestFor: "Companies needing data-driven decision making and forecasting",
        category: "AI & Automation",
        icon: _jsx(Zap, { className: "h-6 w-6" }),
        color: "from-purple-500 to-indigo-600"
    },
    // Cybersecurity Services
    {
        name: "Advanced Threat Detection & Response",
        description: "24/7 cybersecurity monitoring with AI-powered threat detection",
        price: "$12,999",
        duration: "Immediate",
        features: [
            "AI-powered threat detection",
            "Automated incident response",
            "Real-time security analytics",
            "Penetration testing",
            "Vulnerability assessment",
            "Compliance reporting"
        ],
        bestFor: "Organizations requiring enterprise-grade security protection",
        category: "Cybersecurity",
        icon: _jsx(Shield, { className: "h-6 w-6" }),
        color: "from-red-500 to-pink-600"
    },
    {
        name: "GDPR & Compliance Management",
        description: "Comprehensive compliance management for multiple regulations",
        price: "$8,999",
        duration: "2-3 weeks",
        features: [
            "GDPR, HIPAA, SOC2, ISO27001 compliance",
            "Automated compliance monitoring",
            "Audit trails and reporting",
            "Data protection impact assessments",
            "Regulatory updates",
            "Training and documentation"
        ],
        bestFor: "Companies needing comprehensive compliance management",
        category: "Cybersecurity",
        icon: _jsx(Shield, { className: "h-6 w-6" }),
        color: "from-red-500 to-pink-600"
    },
    {
        name: "Zero Trust Security Architecture",
        description: "Implementation of zero trust security model with identity verification",
        price: "$15,999",
        duration: "4-6 weeks",
        features: [
            "Identity verification and management",
            "Micro-segmentation",
            "Continuous monitoring",
            "Multi-factor authentication",
            "Privileged access management",
            "Security policy automation"
        ],
        bestFor: "Enterprises implementing modern security architectures",
        category: "Cybersecurity",
        icon: _jsx(Shield, { className: "h-6 w-6" }),
        color: "from-red-500 to-pink-600"
    },
    // Cloud & DevOps Services
    {
        name: "Enterprise Cloud Migration",
        description: "End-to-end cloud migration for AWS, Azure, and Google Cloud",
        price: "$24,999",
        duration: "6-8 weeks",
        features: [
            "Multi-cloud migration support",
            "Cost optimization and performance tuning",
            "Security hardening",
            "Disaster recovery planning",
            "99.99% uptime guarantee",
            "Ongoing support and optimization"
        ],
        bestFor: "Large enterprises migrating to cloud infrastructure",
        category: "Cloud & DevOps",
        icon: _jsx(Cloud, { className: "h-6 w-6" }),
        color: "from-blue-500 to-cyan-600"
    },
    {
        name: "DevOps Automation & CI/CD",
        description: "Complete DevOps automation with GitOps and infrastructure as code",
        price: "$15,999",
        duration: "3-5 weeks",
        features: [
            "GitOps implementation",
            "Infrastructure as code (Terraform)",
            "Automated testing and deployment",
            "Kubernetes and Docker support",
            "Multi-cloud provider support",
            "Monitoring and alerting"
        ],
        bestFor: "Development teams implementing DevOps practices",
        category: "Cloud & DevOps",
        icon: _jsx(Cloud, { className: "h-6 w-6" }),
        color: "from-blue-500 to-cyan-600"
    },
    {
        name: "Kubernetes Management",
        description: "Enterprise-grade Kubernetes management with monitoring and scaling",
        price: "$11,999",
        duration: "2-4 weeks",
        features: [
            "Automated scaling and load balancing",
            "Monitoring and troubleshooting",
            "Grafana dashboards",
            "Prometheus metrics",
            "Automated backup solutions",
            "Performance optimization"
        ],
        bestFor: "Organizations using Kubernetes in production",
        category: "Cloud & DevOps",
        icon: _jsx(Cloud, { className: "h-6 w-6" }),
        color: "from-blue-500 to-cyan-600"
    },
    // Data & Analytics Services
    {
        name: "Data Engineering & ETL Pipeline",
        description: "Scalable data engineering with Apache Kafka, Spark, and Airflow",
        price: "$18,999",
        duration: "4-6 weeks",
        features: [
            "Real-time data pipelines",
            "Data lakes and warehouses",
            "Data quality monitoring",
            "Governance and compliance",
            "Custom ETL development",
            "Performance optimization"
        ],
        bestFor: "Companies building data infrastructure and analytics platforms",
        category: "Data & Analytics",
        icon: _jsx(Database, { className: "h-6 w-6" }),
        color: "from-green-500 to-emerald-600"
    },
    {
        name: "Business Intelligence & Visualization",
        description: "Interactive dashboards and reports with real-time data visualization",
        price: "$12,999",
        duration: "3-4 weeks",
        features: [
            "Interactive dashboards",
            "Real-time data visualization",
            "KPI tracking and reporting",
            "Tableau and Power BI integration",
            "Custom report development",
            "Automated reporting"
        ],
        bestFor: "Businesses needing executive dashboards and reporting",
        category: "Data & Analytics",
        icon: _jsx(Database, { className: "h-6 w-6" }),
        color: "from-green-500 to-emerald-600"
    },
    {
        name: "Data Governance & Privacy",
        description: "Comprehensive data governance framework with compliance monitoring",
        price: "$16,999",
        duration: "5-7 weeks",
        features: [
            "Data cataloging and lineage",
            "Privacy controls and monitoring",
            "GDPR and CCPA compliance",
            "Data quality management",
            "Audit and reporting",
            "Training and documentation"
        ],
        bestFor: "Organizations requiring data governance and privacy management",
        category: "Data & Analytics",
        icon: _jsx(Database, { className: "h-6 w-6" }),
        color: "from-green-500 to-emerald-600"
    },
    // Digital Transformation Services
    {
        name: "Digital Transformation Strategy",
        description: "End-to-end digital transformation consulting and implementation",
        price: "$34,999",
        duration: "8-12 weeks",
        features: [
            "Strategy development and planning",
            "Change management",
            "Process optimization",
            "Technology selection",
            "ROI measurement",
            "Ongoing support and guidance"
        ],
        bestFor: "Large enterprises undergoing digital transformation",
        category: "Digital Transformation",
        icon: _jsx(TrendingUp, { className: "h-6 w-6" }),
        color: "from-orange-500 to-yellow-600"
    },
    {
        name: "Legacy System Modernization",
        description: "Modernize legacy applications with microservices and cloud migration",
        price: "$28,999",
        duration: "6-10 weeks",
        features: [
            "Microservices architecture",
            "Cloud migration",
            "API integration",
            "Performance optimization",
            "Security updates",
            "User experience improvements"
        ],
        bestFor: "Companies with legacy systems requiring modernization",
        category: "Digital Transformation",
        icon: _jsx(TrendingUp, { className: "h-6 w-6" }),
        color: "from-orange-500 to-yellow-600"
    },
    {
        name: "Change Management & Training",
        description: "Comprehensive change management program for digital transformation",
        price: "$19,999",
        duration: "4-6 weeks",
        features: [
            "Stakeholder engagement",
            "Training programs",
            "Communication strategies",
            "Resistance management",
            "Success measurement",
            "Ongoing support"
        ],
        bestFor: "Organizations implementing change management programs",
        category: "Digital Transformation",
        icon: _jsx(TrendingUp, { className: "h-6 w-6" }),
        color: "from-orange-500 to-yellow-600"
    },
    // IoT & Edge Computing Services
    {
        name: "IoT Platform & Device Management",
        description: "Enterprise IoT platform with device provisioning and monitoring",
        price: "$24,999",
        duration: "6-8 weeks",
        features: [
            "Device provisioning and management",
            "Real-time data collection",
            "Edge computing capabilities",
            "Scalable architecture",
            "Security and compliance",
            "Analytics and reporting"
        ],
        bestFor: "Companies building IoT solutions and connected products",
        category: "IoT & Edge Computing",
        icon: _jsx(Cpu, { className: "h-6 w-6" }),
        color: "from-indigo-500 to-purple-600"
    },
    {
        name: "Edge Computing & Analytics",
        description: "Edge computing solutions for real-time data processing",
        price: "$18,999",
        duration: "4-6 weeks",
        features: [
            "Edge AI models",
            "Local data storage",
            "Cloud integration",
            "Real-time analytics",
            "Distributed computing",
            "Performance optimization"
        ],
        bestFor: "Organizations requiring edge computing and real-time analytics",
        category: "IoT & Edge Computing",
        icon: _jsx(Cpu, { className: "h-6 w-6" }),
        color: "from-indigo-500 to-purple-600"
    },
    // Blockchain & Web3 Services
    {
        name: "Blockchain Development & Smart Contracts",
        description: "Custom blockchain development with DeFi protocols and NFT marketplaces",
        price: "$29,999",
        duration: "8-12 weeks",
        features: [
            "Custom blockchain development",
            "Smart contract creation",
            "DeFi protocol development",
            "NFT marketplace development",
            "Multi-blockchain support",
            "Security auditing"
        ],
        bestFor: "Companies building blockchain applications and DeFi solutions",
        category: "Blockchain & Web3",
        icon: _jsx(LinkIcon, { className: "h-6 w-6" }),
        color: "from-teal-500 to-blue-600"
    },
    {
        name: "Web3 Integration & Wallet Solutions",
        description: "Web3 integration services with wallet connectivity and decentralized identity",
        price: "$19,999",
        duration: "5-7 weeks",
        features: [
            "Wallet connectivity",
            "Decentralized identity",
            "Blockchain data integration",
            "MetaMask integration",
            "WalletConnect support",
            "Custom wallet development"
        ],
        bestFor: "Applications requiring Web3 integration and wallet connectivity",
        category: "Blockchain & Web3",
        icon: _jsx(LinkIcon, { className: "h-6 w-6" }),
        color: "from-teal-500 to-blue-600"
    }
];
const categories = [
    { value: "all", label: "All Services" },
    { value: "ai-automation", label: "AI & Automation" },
    { value: "cybersecurity", label: "Cybersecurity" },
    { value: "cloud-devops", label: "Cloud & DevOps" },
    { value: "data-analytics", label: "Data & Analytics" },
    { value: "digital-transformation", label: "Digital Transformation" },
    { value: "iot-edge", label: "IoT & Edge Computing" },
    { value: "blockchain-web3", label: "Blockchain & Web3" }
];
export default function ServicesPricingGuide() {
    const [selectedCategory, setSelectedCategory] = useState("all");
    const filteredServices = SERVICE_PRICING_DATA.filter(service => selectedCategory === "all" ||
        service.category.toLowerCase().includes(selectedCategory.toLowerCase()));
    const getCategoryIcon = (category) => {
        const icons = {
            'AI & Automation': _jsx(Zap, { className: "h-5 w-5" }),
            'Cybersecurity': _jsx(Shield, { className: "h-5 w-5" }),
            'Cloud & DevOps': _jsx(Cloud, { className: "h-5 w-5" }),
            'Data & Analytics': _jsx(Database, { className: "h-5 w-5" }),
            'Digital Transformation': _jsx(TrendingUp, { className: "h-5 w-5" }),
            'IoT & Edge Computing': _jsx(Cpu, { className: "h-5 w-5" }),
            'Blockchain & Web3': _jsx(LinkIcon, { className: "h-5 w-5" })
        };
        return icons[category] || _jsx(Zap, { className: "h-5 w-5" });
    };
    return (_jsxs("div", { className: "min-h-screen bg-background", children: [_jsx("div", { className: "bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h1", { className: "text-4xl md:text-6xl font-bold mb-6", children: "Services Pricing Guide" }), _jsx("p", { className: "text-xl md:text-2xl text-zion-cyan mb-8 max-w-4xl mx-auto", children: "Transparent pricing for all our professional technology services. Find the perfect solution for your business needs with our comprehensive pricing guide." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsxs(Button, { size: "lg", className: "bg-white text-zion-blue hover:bg-zion-cyan hover:text-white", children: [_jsx(DollarSign, { className: "h-5 w-5 mr-2" }), "View Pricing"] }), _jsxs(Button, { size: "lg", variant: "outline", className: "border-white text-white hover:bg-white hover:text-zion-blue", children: [_jsx(Target, { className: "h-5 w-5 mr-2" }), "Get Custom Quote"] })] })] }) }), _jsx("div", { className: "bg-zion-blue-dark py-6 border-b border-zion-blue-light", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "flex flex-wrap items-center justify-center gap-8 text-zion-cyan", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Phone, { className: "h-5 w-5" }), _jsx("span", { className: "font-medium", children: "+1 302 464 0950" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Mail, { className: "h-5 w-5" }), _jsx("span", { className: "font-medium", children: "kleber@ziontechgroup.com" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(MapPin, { className: "h-5 w-5" }), _jsx("span", { className: "font-medium", children: "364 E Main St STE 1008, Middletown DE 19709" })] })] }) }) }), _jsx("section", { className: "py-16 bg-gradient-to-b from-background to-zion-blue/5", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Service Pricing Overview" }), _jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto", children: "Our services are priced competitively based on complexity, scope, and value delivered. All prices include comprehensive support and ongoing maintenance." })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 mb-12", children: [_jsxs(Card, { className: "text-center border-zion-blue-light", children: [_jsxs(CardHeader, { children: [_jsx("div", { className: "bg-zion-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4", children: _jsx(DollarSign, { className: "h-8 w-8 text-white" }) }), _jsx(CardTitle, { className: "text-zion-blue", children: "Competitive Pricing" })] }), _jsx(CardContent, { children: _jsx("p", { className: "text-muted-foreground", children: "Market-competitive rates with transparent pricing and no hidden fees" }) })] }), _jsxs(Card, { className: "text-center border-zion-purple", children: [_jsxs(CardHeader, { children: [_jsx("div", { className: "bg-zion-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4", children: _jsx(CheckCircle, { className: "h-8 w-8 text-white" }) }), _jsx(CardTitle, { className: "text-zion-purple", children: "Value Guaranteed" })] }), _jsx(CardContent, { children: _jsx("p", { className: "text-muted-foreground", children: "All services include comprehensive support and satisfaction guarantees" }) })] }), _jsxs(Card, { className: "text-center border-zion-cyan", children: [_jsxs(CardHeader, { children: [_jsx("div", { className: "bg-zion-cyan rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4", children: _jsx(Rocket, { className: "h-8 w-8 text-white" }) }), _jsx(CardTitle, { className: "text-zion-cyan", children: "ROI Focused" })] }), _jsx(CardContent, { children: _jsx("p", { className: "text-muted-foreground", children: "Services designed to deliver measurable business value and ROI" }) })] })] })] }) }), _jsx("section", { className: "py-16", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Detailed Service Pricing" }), _jsx("p", { className: "text-lg text-muted-foreground max-w-3xl mx-auto", children: "Explore our comprehensive service offerings with detailed pricing, features, and benefits" })] }), _jsx("div", { className: "flex flex-wrap justify-center gap-2 mb-8", children: categories.map((category) => (_jsx(Button, { variant: selectedCategory === category.value ? "default" : "outline", onClick: () => setSelectedCategory(category.value), className: "mb-2", children: category.label }, category.value))) }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: filteredServices.map((service) => (_jsxs(Card, { className: "overflow-hidden hover:shadow-lg transition-all duration-300 border-zion-blue-light hover:border-zion-purple", children: [_jsxs(CardHeader, { className: "pb-4", children: [_jsxs("div", { className: "flex items-start justify-between mb-3", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx("div", { className: `rounded-full w-12 h-12 bg-gradient-to-br ${service.color} flex items-center justify-center`, children: _jsx("div", { className: "text-white", children: service.icon }) }), _jsxs("div", { children: [_jsx(Badge, { variant: "secondary", className: "mb-2", children: service.category }), _jsx(CardTitle, { className: "text-lg", children: service.name })] })] }), _jsxs("div", { className: "text-right", children: [_jsx("div", { className: "text-2xl font-bold text-zion-purple", children: service.price }), _jsx("div", { className: "text-sm text-muted-foreground", children: service.duration })] })] }), _jsx(CardDescription, { className: "text-base", children: service.description })] }), _jsxs(CardContent, { children: [_jsxs("div", { className: "mb-6", children: [_jsx("h4", { className: "font-semibold mb-2 text-zion-blue", children: "Key Features:" }), _jsx("ul", { className: "space-y-2", children: service.features.map((feature, index) => (_jsxs("li", { className: "flex items-start gap-2 text-sm", children: [_jsx(Check, { className: "h-4 w-4 text-green-500 mt-0.5 flex-shrink-0" }), _jsx("span", { children: feature })] }, index))) })] }), _jsxs("div", { className: "mb-6", children: [_jsx("h4", { className: "font-semibold mb-2 text-zion-blue", children: "Best For:" }), _jsx("p", { className: "text-sm text-muted-foreground", children: service.bestFor })] }), _jsxs("div", { className: "flex gap-2", children: [_jsxs(Button, { className: "flex-1 bg-zion-purple hover:bg-zion-purple-dark", children: [_jsx(Mail, { className: "h-4 w-4 mr-2" }), "Get Quote"] }), _jsx(Button, { variant: "outline", className: "border-zion-purple text-zion-purple hover:bg-zion-purple hover:text-white", children: _jsx(ArrowRight, { className: "h-4 w-4" }) })] })] })] }, service.name))) }), filteredServices.length === 0 && (_jsxs("div", { className: "text-center py-12", children: [_jsx(Target, { className: "h-16 w-16 text-muted-foreground mx-auto mb-4" }), _jsx("h3", { className: "text-xl font-semibold mb-2", children: "No services found" }), _jsx("p", { className: "text-muted-foreground", children: "Try selecting a different category or contact us for custom solutions" })] }))] }) }), _jsx("div", { className: "bg-zion-blue py-20", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-12", children: "Why Choose Zion Technology Group?" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "bg-zion-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4", children: _jsx(Award, { className: "h-8 w-8 text-white" }) }), _jsx("h3", { className: "text-xl font-semibold text-white mb-2", children: "Expert Providers" }), _jsx("p", { className: "text-zion-slate-light", children: "All service providers are vetted experts with proven track records and industry certifications" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "bg-zion-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4", children: _jsx(Globe, { className: "h-8 w-8 text-white" }) }), _jsx("h3", { className: "text-xl font-semibold text-white mb-2", children: "Global Reach" }), _jsx("p", { className: "text-zion-slate-light", children: "Services available worldwide with local expertise and 24/7 support across all time zones" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "bg-zion-purple rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4", children: _jsx(CheckCircle, { className: "h-8 w-8 text-white" }) }), _jsx("h3", { className: "text-xl font-semibold text-white mb-2", children: "Quality Guaranteed" }), _jsx("p", { className: "text-zion-slate-light", children: "Comprehensive quality assurance with satisfaction guarantees and ongoing support" })] })] })] }) }), _jsx("div", { className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark py-16", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold text-white mb-6", children: "Ready to Get Started?" }), _jsx("p", { className: "text-xl text-zion-cyan mb-8 max-w-2xl mx-auto", children: "Contact our team to discuss your specific needs and get a customized quote for your project" }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsxs(Button, { size: "lg", className: "bg-white text-zion-purple hover:bg-zion-cyan hover:text-white", children: [_jsx(Phone, { className: "h-5 w-5 mr-2" }), "Call +1 302 464 0950"] }), _jsxs(Button, { size: "lg", variant: "outline", className: "border-white text-white hover:bg-white hover:text-zion-purple", children: [_jsx(Mail, { className: "h-5 w-5 mr-2" }), "Email kleber@ziontechgroup.com"] })] })] }) })] }));
}
