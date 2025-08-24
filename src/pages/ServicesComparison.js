import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { X, Phone, Mail, MapPin, ExternalLink, Brain, Cloud, Shield, Zap, BarChart3, Monitor, Eye, Star, TrendingUp, DollarSign, CheckCircle } from "lucide-react";
const SERVICE_COMPARISONS = [
    {
        category: "AI & Machine Learning",
        icon: _jsx(Brain, { className: "h-6 w-6 text-blue-500" }),
        description: "Cutting-edge artificial intelligence and machine learning solutions",
        bestFor: ["Data-driven businesses", "Process automation", "Customer insights", "Predictive analytics"],
        startingPrice: 5000,
        timeToDeploy: "4-8 weeks",
        complexity: "High",
        scalability: "Excellent",
        security: "High",
        support: "24/7",
        features: [
            "Custom ML model development",
            "AI integration",
            "Real-time processing",
            "Model optimization",
            "Advanced analytics"
        ],
        limitations: [
            "Requires quality data",
            "Initial setup complexity",
            "Ongoing maintenance needed"
        ]
    },
    {
        category: "Cloud & Infrastructure",
        icon: _jsx(Cloud, { className: "h-6 w-6 text-green-500" }),
        description: "Scalable cloud solutions and modern infrastructure management",
        bestFor: ["Growing businesses", "Remote teams", "High availability needs", "Cost optimization"],
        startingPrice: 3000,
        timeToDeploy: "2-4 weeks",
        complexity: "Medium",
        scalability: "Excellent",
        security: "High",
        support: "24/7",
        features: [
            "Infrastructure monitoring",
            "Cost optimization",
            "Security management",
            "Disaster recovery",
            "Performance tuning"
        ],
        limitations: [
            "Monthly recurring costs",
            "Vendor lock-in risks",
            "Internet dependency"
        ]
    },
    {
        category: "Cybersecurity & Compliance",
        icon: _jsx(Shield, { className: "h-6 w-6 text-red-500" }),
        description: "Comprehensive security solutions and regulatory compliance",
        bestFor: ["Financial services", "Healthcare", "E-commerce", "Government agencies"],
        startingPrice: 6000,
        timeToDeploy: "3-6 weeks",
        complexity: "High",
        scalability: "Good",
        security: "Excellent",
        support: "24/7",
        features: [
            "Security assessment",
            "Penetration testing",
            "Compliance preparation",
            "Incident response",
            "Security training"
        ],
        limitations: [
            "One-time setup cost",
            "Ongoing maintenance",
            "Staff training required"
        ]
    },
    {
        category: "Business Automation & RPA",
        icon: _jsx(Zap, { className: "h-6 w-6 text-yellow-500" }),
        description: "Intelligent automation solutions to streamline operations",
        bestFor: ["Repetitive tasks", "Process optimization", "Cost reduction", "Efficiency improvement"],
        startingPrice: 299,
        timeToDeploy: "1-2 weeks",
        complexity: "Low",
        scalability: "Good",
        security: "Medium",
        support: "Business hours",
        features: [
            "Workflow automation",
            "No-code platform",
            "App integrations",
            "Real-time monitoring",
            "Analytics dashboard"
        ],
        limitations: [
            "Limited custom development",
            "Standard integrations only",
            "Basic support tier"
        ]
    },
    {
        category: "Data Analytics & Business Intelligence",
        icon: _jsx(BarChart3, { className: "h-6 w-6 text-purple-500" }),
        description: "Transform raw data into actionable insights",
        bestFor: ["Data-rich businesses", "Decision making", "Performance tracking", "Market analysis"],
        startingPrice: 199,
        timeToDeploy: "1-3 weeks",
        complexity: "Medium",
        scalability: "Good",
        security: "Medium",
        support: "Business hours",
        features: [
            "Data visualization",
            "Custom dashboards",
            "Predictive modeling",
            "Real-time insights",
            "Data integration"
        ],
        limitations: [
            "Data quality dependent",
            "Limited custom development",
            "Standard reporting only"
        ]
    },
    {
        category: "Blockchain Development",
        icon: _jsx(Monitor, { className: "h-6 w-6 text-indigo-500" }),
        description: "Custom blockchain solutions and smart contract development",
        bestFor: ["Decentralized applications", "Smart contracts", "Token systems", "Supply chain"],
        startingPrice: 12000,
        timeToDeploy: "8-16 weeks",
        complexity: "Very High",
        scalability: "Excellent",
        security: "Very High",
        support: "24/7",
        features: [
            "Custom blockchain",
            "Smart contracts",
            "DeFi applications",
            "Token development",
            "Security auditing"
        ],
        limitations: [
            "High development cost",
            "Long development time",
            "Regulatory uncertainty"
        ]
    },
    {
        category: "IoT Solutions",
        icon: _jsx(Eye, { className: "h-6 w-6 text-green-500" }),
        description: "End-to-end IoT development and smart city integration",
        bestFor: ["Smart cities", "Industrial IoT", "Connected devices", "Real-time monitoring"],
        startingPrice: 18000,
        timeToDeploy: "12-24 weeks",
        complexity: "Very High",
        scalability: "Excellent",
        security: "High",
        support: "24/7",
        features: [
            "Sensor networks",
            "Data collection",
            "Real-time processing",
            "Smart city integration",
            "Edge computing"
        ],
        limitations: [
            "High infrastructure cost",
            "Complex deployment",
            "Ongoing maintenance"
        ]
    },
    {
        category: "AR/VR Development",
        icon: _jsx(Eye, { className: "h-6 w-6 text-purple-500" }),
        description: "Immersive technology solutions for training and marketing",
        bestFor: ["Training & education", "Marketing campaigns", "Product visualization", "Entertainment"],
        startingPrice: 22000,
        timeToDeploy: "10-20 weeks",
        complexity: "High",
        scalability: "Good",
        security: "Medium",
        support: "24/7",
        features: [
            "3D modeling",
            "Interactive experiences",
            "Multi-platform support",
            "Content creation",
            "User experience design"
        ],
        limitations: [
            "High development cost",
            "Hardware requirements",
            "Content creation needed"
        ]
    }
];
export default function ServicesComparison() {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o;
    const [selectedCategory, setSelectedCategory] = useState(null);
    const getComplexityColor = (complexity) => {
        switch (complexity.toLowerCase()) {
            case 'low': return 'text-green-600 bg-green-100';
            case 'medium': return 'text-yellow-600 bg-yellow-100';
            case 'high': return 'text-orange-600 bg-orange-100';
            case 'very high': return 'text-red-600 bg-red-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    };
    const getScalabilityColor = (scalability) => {
        switch (scalability.toLowerCase()) {
            case 'excellent': return 'text-green-600 bg-green-100';
            case 'good': return 'text-blue-600 bg-blue-100';
            case 'fair': return 'text-yellow-600 bg-yellow-100';
            case 'poor': return 'text-red-600 bg-red-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    };
    const getSecurityColor = (security) => {
        switch (security.toLowerCase()) {
            case 'excellent': return 'text-green-600 bg-green-100';
            case 'very high': return 'text-green-600 bg-green-100';
            case 'high': return 'text-blue-600 bg-blue-100';
            case 'medium': return 'text-yellow-600 bg-yellow-100';
            case 'low': return 'text-red-600 bg-red-100';
            default: return 'text-gray-600 bg-gray-100';
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800", children: [_jsx("div", { className: "bg-gradient-to-r from-zion-blue to-zion-purple text-white py-20", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h1", { className: "text-4xl md:text-6xl font-bold mb-6", children: "Services Comparison" }), _jsx("p", { className: "text-xl md:text-2xl mb-8 max-w-3xl mx-auto", children: "Compare our comprehensive range of IT and AI services to find the perfect solution for your business needs." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsxs(Button, { size: "lg", className: "bg-white text-zion-blue hover:bg-gray-100", children: [_jsx(Phone, { className: "h-5 w-5 mr-2" }), "Get Free Consultation"] }), _jsxs(Button, { size: "lg", variant: "outline", className: "border-white text-white hover:bg-white hover:text-zion-blue", children: [_jsx(ExternalLink, { className: "h-5 w-5 mr-2" }), "View All Services"] })] })] }) }), _jsx("div", { className: "bg-white dark:bg-zinc-800 py-8 border-b", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 text-center", children: [_jsxs("div", { className: "flex flex-col items-center", children: [_jsx(Phone, { className: "h-6 w-6 text-zion-blue mb-2" }), _jsx("h3", { className: "font-semibold", children: "Phone" }), _jsx("p", { className: "text-zinc-600 dark:text-zinc-400", children: "+1 302 464 0950" })] }), _jsxs("div", { className: "flex flex-col items-center", children: [_jsx(Mail, { className: "h-6 w-6 text-zion-blue mb-2" }), _jsx("h3", { className: "font-semibold", children: "Email" }), _jsx("p", { className: "text-zinc-600 dark:text-zinc-400", children: "kleber@ziontechgroup.com" })] }), _jsxs("div", { className: "flex flex-col items-center", children: [_jsx(MapPin, { className: "h-6 w-6 text-zion-blue mb-2" }), _jsx("h3", { className: "font-semibold", children: "Address" }), _jsxs("p", { className: "text-zinc-600 dark:text-zinc-400", children: ["364 E Main St STE 1008", _jsx("br", {}), "Middletown DE 19709"] })] })] }) }) }), _jsxs("div", { className: "container mx-auto px-4 py-16", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-4", children: "Choose Your Service Category" }), _jsx("p", { className: "text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto", children: "Click on any service category to see detailed comparison and make an informed decision." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16", children: SERVICE_COMPARISONS.map((service) => (_jsxs(Card, { className: `cursor-pointer hover:shadow-lg transition-all ${selectedCategory === service.category
                                ? 'ring-2 ring-zion-blue shadow-lg'
                                : ''}`, onClick: () => setSelectedCategory(selectedCategory === service.category ? null : service.category), children: [_jsxs(CardHeader, { className: "text-center", children: [_jsx("div", { className: "flex justify-center mb-4", children: service.icon }), _jsx(CardTitle, { className: "text-lg", children: service.category }), _jsx(CardDescription, { className: "text-sm", children: service.description })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { children: [_jsx("h4", { className: "font-semibold mb-2 text-zinc-800 dark:text-zinc-200", children: "Best For" }), _jsxs("div", { className: "flex flex-wrap gap-2", children: [service.bestFor.slice(0, 2).map((item, index) => (_jsx(Badge, { variant: "secondary", className: "text-xs", children: item }, index))), service.bestFor.length > 2 && (_jsxs(Badge, { variant: "outline", className: "text-xs", children: ["+", service.bestFor.length - 2, " more"] }))] })] }), _jsxs("div", { className: "flex justify-between items-center", children: [_jsxs("div", { children: [_jsx("p", { className: "text-sm text-zinc-600 dark:text-zinc-400", children: "Starting Price" }), _jsxs("p", { className: "text-xl font-bold text-zion-blue", children: ["$", service.startingPrice.toLocaleString()] })] }), _jsxs("div", { children: [_jsx("p", { className: "text-sm text-zinc-600 dark:text-zinc-400", children: "Deploy Time" }), _jsx("p", { className: "text-sm font-medium", children: service.timeToDeploy })] })] }), _jsxs("div", { className: "flex gap-2", children: [_jsxs(Badge, { className: `text-xs ${getComplexityColor(service.complexity)}`, children: [service.complexity, " Complexity"] }), _jsxs(Badge, { className: `text-xs ${getScalabilityColor(service.scalability)}`, children: [service.scalability, " Scalability"] })] })] })] }, service.category))) }), selectedCategory && (_jsxs("div", { className: "mb-16", children: [_jsxs("h3", { className: "text-2xl font-bold mb-6 text-center", children: ["Detailed Comparison: ", selectedCategory] }), _jsx(Card, { children: _jsx(CardContent, { className: "p-6", children: _jsxs(Table, { children: [_jsx(TableHeader, { children: _jsxs(TableRow, { children: [_jsx(TableHead, { children: "Feature" }), _jsx(TableHead, { children: "Details" })] }) }), _jsxs(TableBody, { children: [_jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-semibold", children: "Description" }), _jsx(TableCell, { children: (_a = SERVICE_COMPARISONS.find(s => s.category === selectedCategory)) === null || _a === void 0 ? void 0 : _a.description })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-semibold", children: "Best For" }), _jsx(TableCell, { children: _jsx("div", { className: "flex flex-wrap gap-2", children: (_b = SERVICE_COMPARISONS.find(s => s.category === selectedCategory)) === null || _b === void 0 ? void 0 : _b.bestFor.map((item, index) => (_jsx(Badge, { variant: "secondary", children: item }, index))) }) })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-semibold", children: "Starting Price" }), _jsxs(TableCell, { className: "text-xl font-bold text-zion-blue", children: ["$", (_c = SERVICE_COMPARISONS.find(s => s.category === selectedCategory)) === null || _c === void 0 ? void 0 : _c.startingPrice.toLocaleString()] })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-semibold", children: "Time to Deploy" }), _jsx(TableCell, { children: (_d = SERVICE_COMPARISONS.find(s => s.category === selectedCategory)) === null || _d === void 0 ? void 0 : _d.timeToDeploy })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-semibold", children: "Complexity" }), _jsx(TableCell, { children: _jsx(Badge, { className: getComplexityColor(((_e = SERVICE_COMPARISONS.find(s => s.category === selectedCategory)) === null || _e === void 0 ? void 0 : _e.complexity) || ''), children: (_f = SERVICE_COMPARISONS.find(s => s.category === selectedCategory)) === null || _f === void 0 ? void 0 : _f.complexity }) })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-semibold", children: "Scalability" }), _jsx(TableCell, { children: _jsx(Badge, { className: getScalabilityColor(((_g = SERVICE_COMPARISONS.find(s => s.category === selectedCategory)) === null || _g === void 0 ? void 0 : _g.scalability) || ''), children: (_h = SERVICE_COMPARISONS.find(s => s.category === selectedCategory)) === null || _h === void 0 ? void 0 : _h.scalability }) })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-semibold", children: "Security" }), _jsx(TableCell, { children: _jsx(Badge, { className: getSecurityColor(((_j = SERVICE_COMPARISONS.find(s => s.category === selectedCategory)) === null || _j === void 0 ? void 0 : _j.security) || ''), children: (_k = SERVICE_COMPARISONS.find(s => s.category === selectedCategory)) === null || _k === void 0 ? void 0 : _k.security }) })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-semibold", children: "Support" }), _jsx(TableCell, { children: (_l = SERVICE_COMPARISONS.find(s => s.category === selectedCategory)) === null || _l === void 0 ? void 0 : _l.support })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-semibold", children: "Key Features" }), _jsx(TableCell, { children: _jsx("ul", { className: "space-y-1", children: (_m = SERVICE_COMPARISONS.find(s => s.category === selectedCategory)) === null || _m === void 0 ? void 0 : _m.features.map((feature, index) => (_jsxs("li", { className: "flex items-center", children: [_jsx(CheckCircle, { className: "h-4 w-4 text-green-500 mr-2 flex-shrink-0" }), feature] }, index))) }) })] }), _jsxs(TableRow, { children: [_jsx(TableCell, { className: "font-semibold", children: "Limitations" }), _jsx(TableCell, { children: _jsx("ul", { className: "space-y-1", children: (_o = SERVICE_COMPARISONS.find(s => s.category === selectedCategory)) === null || _o === void 0 ? void 0 : _o.limitations.map((limitation, index) => (_jsxs("li", { className: "flex items-center", children: [_jsx(X, { className: "h-4 w-4 text-red-500 mr-2 flex-shrink-0" }), limitation] }, index))) }) })] })] })] }) }) })] })), _jsxs("div", { className: "bg-white dark:bg-zinc-800 rounded-lg p-8", children: [_jsx("h3", { className: "text-2xl font-bold mb-6 text-center", children: "Quick Decision Guide" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "bg-blue-100 dark:bg-blue-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4", children: _jsx(DollarSign, { className: "h-8 w-8 text-blue-600" }) }), _jsx("h4", { className: "font-semibold mb-2", children: "Budget Conscious?" }), _jsx("p", { className: "text-sm text-zinc-600 dark:text-zinc-400", children: "Start with Business Automation ($299/month) or Data Analytics ($199/month)" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "bg-green-100 dark:bg-green-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4", children: _jsx(TrendingUp, { className: "h-8 w-8 text-green-600" }) }), _jsx("h4", { className: "font-semibold mb-2", children: "Need Fast Results?" }), _jsx("p", { className: "text-sm text-zinc-600 dark:text-zinc-400", children: "Choose Business Automation (1-2 weeks) or Data Analytics (1-3 weeks)" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "bg-purple-100 dark:bg-purple-900 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4", children: _jsx(Star, { className: "h-8 w-8 text-purple-600" }) }), _jsx("h4", { className: "font-semibold mb-2", children: "Want Innovation?" }), _jsx("p", { className: "text-sm text-zinc-600 dark:text-zinc-400", children: "Consider AI/ML ($5,000+) or Blockchain ($12,000+) for cutting-edge solutions" })] })] })] })] }), _jsx("div", { className: "bg-gradient-to-r from-zion-purple to-zion-blue text-white py-16", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: "Ready to Get Started?" }), _jsx("p", { className: "text-xl mb-8 max-w-2xl mx-auto", children: "Our expert team is ready to help you choose the right services and implement them successfully." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsxs(Button, { size: "lg", className: "bg-white text-zion-blue hover:bg-gray-100", children: [_jsx(Phone, { className: "h-5 w-5 mr-2" }), "Schedule Free Consultation"] }), _jsxs(Button, { size: "lg", variant: "outline", className: "border-white text-white hover:bg-white hover:text-zion-blue", children: [_jsx(Mail, { className: "h-5 w-5 mr-2" }), "Request Custom Quote"] })] })] }) })] }));
}
