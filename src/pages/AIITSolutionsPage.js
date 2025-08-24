import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Shield, Zap, Globe, Phone, Mail, MapPin, CheckCircle, Star, TrendingUp, Users } from "lucide-react";
const AI_SOLUTIONS = [
    {
        id: "ai-automation",
        title: "AI Process Automation",
        description: "Transform your business operations with intelligent automation",
        features: [
            "Document processing automation",
            "Customer service chatbots",
            "Workflow optimization",
            "RPA integration",
            "Custom model training"
        ],
        benefits: [
            "Reduce operational costs by 40-60%",
            "Improve accuracy by 95%+",
            "24/7 automated operations",
            "Scalable business processes"
        ],
        price: "From $2,499",
        delivery: "2-3 weeks",
        category: "AI & Automation"
    },
    {
        id: "ai-content",
        title: "AI Content Intelligence",
        description: "Advanced content analysis and optimization platform",
        features: [
            "NLP-powered content analysis",
            "SEO optimization recommendations",
            "Content performance prediction",
            "Automated content generation",
            "Sentiment analysis"
        ],
        benefits: [
            "Increase content engagement by 35%",
            "Improve SEO rankings",
            "Reduce content creation time by 50%",
            "Data-driven content strategy"
        ],
        price: "From $899",
        delivery: "Immediate",
        category: "AI & Content"
    },
    {
        id: "ai-analytics",
        title: "AI-Powered Predictive Analytics",
        description: "Enterprise-grade predictive analytics with machine learning",
        features: [
            "Sales forecasting models",
            "Customer behavior prediction",
            "Risk assessment algorithms",
            "Market trend analysis",
            "Real-time insights dashboard"
        ],
        benefits: [
            "Improve decision accuracy by 80%",
            "Reduce forecasting errors by 60%",
            "Identify new business opportunities",
            "Optimize resource allocation"
        ],
        price: "From $3,999",
        delivery: "3-4 weeks",
        category: "AI & Analytics"
    }
];
const IT_SOLUTIONS = [
    {
        id: "cybersecurity",
        title: "Zero Trust Security Implementation",
        description: "Complete zero trust security framework implementation",
        features: [
            "Identity verification systems",
            "Device trust scoring",
            "Network segmentation",
            "Continuous monitoring",
            "NIST & ISO compliance"
        ],
        benefits: [
            "Reduce security breaches by 90%",
            "Meet regulatory compliance",
            "Real-time threat detection",
            "Simplified security management"
        ],
        price: "From $12,999",
        delivery: "4-6 weeks",
        category: "Cybersecurity"
    },
    {
        id: "cloud-devops",
        title: "Multi-Cloud Orchestration",
        description: "Unified platform for managing workloads across clouds",
        features: [
            "AWS, Azure, Google Cloud support",
            "Cost optimization",
            "Performance monitoring",
            "Automated scaling",
            "Unified management console"
        ],
        benefits: [
            "Reduce cloud costs by 25-40%",
            "Improve performance by 30%",
            "Single pane of glass management",
            "Avoid vendor lock-in"
        ],
        price: "From $4,999",
        delivery: "2-3 weeks",
        category: "Cloud & DevOps"
    },
    {
        id: "data-analytics",
        title: "Real-Time Data Pipeline",
        description: "High-performance real-time data processing platform",
        features: [
            "Apache Kafka integration",
            "Real-time streaming analytics",
            "Event processing capabilities",
            "Data transformation tools",
            "Scalable architecture"
        ],
        benefits: [
            "Process data 10x faster",
            "Real-time business insights",
            "Scalable data infrastructure",
            "Reduced data latency"
        ],
        price: "From $8,999",
        delivery: "4-5 weeks",
        category: "Data & Analytics"
    }
];
const SPECIALIZED_SERVICES = [
    {
        id: "iot-edge",
        title: "IoT Platform & Edge Computing",
        description: "Complete IoT platform with edge computing capabilities",
        features: [
            "Device management",
            "Real-time data collection",
            "Edge AI processing",
            "Cloud integration",
            "Industrial IoT support"
        ],
        benefits: [
            "Reduce bandwidth costs by 60%",
            "Improve response time by 90%",
            "Enhanced data privacy",
            "Scalable IoT deployment"
        ],
        price: "From $15,999",
        delivery: "6-8 weeks",
        category: "IoT & Edge"
    },
    {
        id: "blockchain",
        title: "Enterprise Blockchain Platform",
        description: "Enterprise-grade blockchain with Web3 capabilities",
        features: [
            "Smart contract development",
            "DeFi integration",
            "NFT marketplace",
            "Cross-chain interoperability",
            "Regulatory compliance"
        ],
        benefits: [
            "Increase transparency",
            "Reduce transaction costs",
            "Enhanced security",
            "New revenue streams"
        ],
        price: "From $19,999",
        delivery: "8-10 weeks",
        category: "Blockchain & Web3"
    }
];
export default function AIITSolutionsPage() {
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800", children: [_jsx("div", { className: "bg-gradient-to-r from-zion-blue-dark via-zion-purple to-zion-blue-dark text-white py-20", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h1", { className: "text-4xl md:text-6xl font-bold mb-6", children: "AI & IT Solutions" }), _jsx("p", { className: "text-xl md:text-2xl mb-8 text-zion-cyan max-w-4xl mx-auto", children: "Cutting-edge artificial intelligence and information technology solutions designed to accelerate your business transformation" }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsxs(Button, { size: "lg", className: "bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan/90", children: [_jsx(Phone, { className: "h-5 w-5 mr-2" }), "Get Free Consultation"] }), _jsxs(Button, { size: "lg", variant: "outline", className: "border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10", children: [_jsx(Mail, { className: "h-5 w-5 mr-2" }), "Request Proposal"] })] })] }) }), _jsx("div", { className: "bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700 py-4", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-600 dark:text-zinc-400", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(MapPin, { className: "h-4 w-4" }), _jsx("span", { children: "364 E Main St STE 1008, Middletown DE 19709" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Phone, { className: "h-4 w-4" }), _jsx("span", { children: "+1 302 464 0950" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Mail, { className: "h-4 w-4" }), _jsx("span", { children: "kleber@ziontechgroup.com" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Globe, { className: "h-4 w-4" }), _jsx("a", { href: "https://ziontechgroup.com", target: "_blank", rel: "noopener noreferrer", className: "text-zion-cyan hover:underline", children: "ziontechgroup.com" })] })] }) }) }), _jsxs("div", { className: "container mx-auto px-4 py-12", children: [_jsxs(Tabs, { defaultValue: "ai-solutions", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-3 mb-8", children: [_jsxs(TabsTrigger, { value: "ai-solutions", className: "flex items-center gap-2", children: [_jsx(Brain, { className: "h-5 w-5" }), "AI Solutions"] }), _jsxs(TabsTrigger, { value: "it-solutions", className: "flex items-center gap-2", children: [_jsx(Shield, { className: "h-5 w-5" }), "IT Solutions"] }), _jsxs(TabsTrigger, { value: "specialized", className: "flex items-center gap-2", children: [_jsx(Zap, { className: "h-5 w-5" }), "Specialized Services"] })] }), _jsxs(TabsContent, { value: "ai-solutions", className: "space-y-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Artificial Intelligence Solutions" }), _jsx("p", { className: "text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto", children: "Leverage the power of AI to automate processes, gain insights, and transform your business operations" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: AI_SOLUTIONS.map((solution) => (_jsxs(Card, { className: "hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg", children: [_jsxs(CardHeader, { className: "pb-4", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(Brain, { className: "h-6 w-6 text-zion-purple" }), _jsx(Badge, { variant: "secondary", children: solution.category })] }), _jsx(CardTitle, { className: "text-xl", children: solution.title }), _jsx(CardDescription, { children: solution.description })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-semibold text-sm text-zinc-700 dark:text-zinc-300", children: "Key Features:" }), _jsx("ul", { className: "space-y-1", children: solution.features.map((feature, index) => (_jsxs("li", { className: "flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400", children: [_jsx(CheckCircle, { className: "h-4 w-4 text-green-500" }), feature] }, index))) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-semibold text-sm text-zinc-700 dark:text-zinc-300", children: "Business Benefits:" }), _jsx("ul", { className: "space-y-1", children: solution.benefits.map((benefit, index) => (_jsxs("li", { className: "flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400", children: [_jsx(TrendingUp, { className: "h-4 w-4 text-blue-500" }), benefit] }, index))) })] }), _jsxs("div", { className: "pt-4 border-t border-zinc-200 dark:border-zinc-700", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("span", { className: "text-2xl font-bold text-zion-purple", children: solution.price }), _jsx(Badge, { variant: "outline", children: solution.delivery })] }), _jsx(Button, { className: "w-full bg-zion-purple hover:bg-zion-purple-dark", children: "Get Started" })] })] })] }, solution.id))) })] }), _jsxs(TabsContent, { value: "it-solutions", className: "space-y-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Information Technology Solutions" }), _jsx("p", { className: "text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto", children: "Robust IT infrastructure and security solutions to protect, optimize, and scale your business" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: IT_SOLUTIONS.map((solution) => (_jsxs(Card, { className: "hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg", children: [_jsxs(CardHeader, { className: "pb-4", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(Shield, { className: "h-6 w-6 text-zion-purple" }), _jsx(Badge, { variant: "secondary", children: solution.category })] }), _jsx(CardTitle, { className: "text-xl", children: solution.title }), _jsx(CardDescription, { children: solution.description })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-semibold text-sm text-zinc-700 dark:text-zinc-300", children: "Key Features:" }), _jsx("ul", { className: "space-y-1", children: solution.features.map((feature, index) => (_jsxs("li", { className: "flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400", children: [_jsx(CheckCircle, { className: "h-4 w-4 text-green-500" }), feature] }, index))) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-semibold text-sm text-zinc-700 dark:text-zinc-300", children: "Business Benefits:" }), _jsx("ul", { className: "space-y-1", children: solution.benefits.map((benefit, index) => (_jsxs("li", { className: "flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400", children: [_jsx(TrendingUp, { className: "h-4 w-4 text-blue-500" }), benefit] }, index))) })] }), _jsxs("div", { className: "pt-4 border-t border-zinc-200 dark:border-zinc-700", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("span", { className: "text-2xl font-bold text-zion-purple", children: solution.price }), _jsx(Badge, { variant: "outline", children: solution.delivery })] }), _jsx(Button, { className: "w-full bg-zion-purple hover:bg-zion-purple-dark", children: "Get Started" })] })] })] }, solution.id))) })] }), _jsxs(TabsContent, { value: "specialized", className: "space-y-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Specialized Technology Services" }), _jsx("p", { className: "text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto", children: "Cutting-edge solutions in emerging technologies to give you a competitive advantage" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: SPECIALIZED_SERVICES.map((solution) => (_jsxs(Card, { className: "hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg", children: [_jsxs(CardHeader, { className: "pb-4", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(Zap, { className: "h-6 w-6 text-zion-purple" }), _jsx(Badge, { variant: "secondary", children: solution.category })] }), _jsx(CardTitle, { className: "text-xl", children: solution.title }), _jsx(CardDescription, { children: solution.description })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-semibold text-sm text-zinc-700 dark:text-zinc-300", children: "Key Features:" }), _jsx("ul", { className: "space-y-1", children: solution.features.map((feature, index) => (_jsxs("li", { className: "flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400", children: [_jsx(CheckCircle, { className: "h-4 w-4 text-green-500" }), feature] }, index))) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-semibold text-sm text-zinc-700 dark:text-zinc-300", children: "Business Benefits:" }), _jsx("ul", { className: "space-y-1", children: solution.benefits.map((benefit, index) => (_jsxs("li", { className: "flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400", children: [_jsx(TrendingUp, { className: "h-4 w-4 text-blue-500" }), benefit] }, index))) })] }), _jsxs("div", { className: "pt-4 border-t border-zinc-200 dark:border-zinc-700", children: [_jsxs("div", { className: "flex items-center justify-between mb-2", children: [_jsx("span", { className: "text-2xl font-bold text-zion-purple", children: solution.price }), _jsx(Badge, { variant: "outline", children: solution.delivery })] }), _jsx(Button, { className: "w-full bg-zion-purple hover:bg-zion-purple-dark", children: "Get Started" })] })] })] }, solution.id))) })] })] }), _jsxs("div", { className: "mt-20 bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Why Choose Zion Tech Group?" }), _jsx("p", { className: "text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto", children: "We combine cutting-edge technology with proven business expertise to deliver exceptional results" })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "bg-zion-cyan/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Users, { className: "h-8 w-8 text-zion-cyan" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Expert Team" }), _jsx("p", { className: "text-sm text-zinc-600 dark:text-zinc-400", children: "Certified professionals with 10+ years of experience" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "bg-zion-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Zap, { className: "h-8 w-8 text-zion-purple" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Custom Solutions" }), _jsx("p", { className: "text-sm text-zinc-600 dark:text-zinc-400", children: "Tailored to your specific business needs" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "bg-zion-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Star, { className: "h-8 w-8 text-zion-blue" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Proven Results" }), _jsx("p", { className: "text-sm text-zinc-600 dark:text-zinc-400", children: "95%+ client satisfaction rate" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Zap, { className: "h-8 w-8 text-green-500" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Fast Delivery" }), _jsx("p", { className: "text-sm text-zinc-600 dark:text-zinc-400", children: "Rapid implementation and deployment" })] })] })] })] }), _jsx("div", { className: "bg-gradient-to-r from-zion-blue-dark to-zion-purple text-white py-16", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: "Ready to Transform Your Business?" }), _jsx("p", { className: "text-xl mb-8 text-zion-cyan max-w-2xl mx-auto", children: "Let's discuss how our AI and IT solutions can drive your business forward. Get a free consultation and customized proposal today." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsxs(Button, { size: "lg", className: "bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan/90", children: [_jsx(Phone, { className: "h-5 w-5 mr-2" }), "Call: +1 302 464 0950"] }), _jsxs(Button, { size: "lg", variant: "outline", className: "border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10", children: [_jsx(Mail, { className: "h-5 w-5 mr-2" }), "Email: kleber@ziontechgroup.com"] })] }), _jsxs("div", { className: "mt-8 text-zion-cyan", children: [_jsxs("p", { className: "text-lg", children: ["Visit: ", _jsx("a", { href: "https://ziontechgroup.com", target: "_blank", rel: "noopener noreferrer", className: "underline hover:text-white", children: "ziontechgroup.com" })] }), _jsx("p", { className: "text-sm mt-2", children: "364 E Main St STE 1008, Middletown DE 19709" })] })] }) })] }));
}
