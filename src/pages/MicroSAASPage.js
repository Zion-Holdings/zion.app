import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Building, Users, Zap, Globe, Phone, Mail, MapPin, CheckCircle, Star, TrendingUp, Award, CreditCard, Clock } from "lucide-react";
const MICRO_SAAS_SERVICES = [
    {
        id: "business-automation",
        title: "Business Process Automation Suite",
        description: "Complete automation solution for small to medium businesses",
        category: "Business Automation",
        features: [
            "Workflow automation",
            "Document management",
            "Task scheduling",
            "Email automation",
            "Reporting dashboard"
        ],
        benefits: [
            "Save 20+ hours per week",
            "Reduce errors by 80%",
            "Improve team productivity",
            "Scalable as you grow"
        ],
        pricing: {
            starter: { price: 99, period: "month", features: ["5 workflows", "Basic reporting", "Email support"] },
            professional: { price: 299, period: "month", features: ["Unlimited workflows", "Advanced analytics", "Priority support"] },
            enterprise: { price: 599, period: "month", features: ["Custom integrations", "White-label options", "Dedicated support"] }
        },
        delivery: "1-2 weeks",
        rating: 4.8,
        reviewCount: 156
    },
    {
        id: "customer-management",
        title: "Customer Relationship Management",
        description: "All-in-one CRM solution for growing businesses",
        category: "Customer Management",
        features: [
            "Lead management",
            "Sales pipeline",
            "Customer database",
            "Email marketing",
            "Analytics dashboard"
        ],
        benefits: [
            "Increase sales by 30%",
            "Improve customer retention",
            "Better lead conversion",
            "Centralized customer data"
        ],
        pricing: {
            starter: { price: 49, period: "month", features: ["100 contacts", "Basic pipeline", "Email support"] },
            professional: { price: 149, period: "month", features: ["1000 contacts", "Advanced features", "Phone support"] },
            enterprise: { price: 299, period: "month", features: ["Unlimited contacts", "Custom fields", "API access"] }
        },
        delivery: "1 week",
        rating: 4.9,
        reviewCount: 234
    },
    {
        id: "financial-management",
        title: "Financial Management & Accounting",
        description: "Comprehensive financial tools for business management",
        category: "Financial Tools",
        features: [
            "Expense tracking",
            "Invoice management",
            "Financial reporting",
            "Tax preparation",
            "Bank reconciliation"
        ],
        benefits: [
            "Save on accounting costs",
            "Real-time financial insights",
            "Automated tax calculations",
            "Better cash flow management"
        ],
        pricing: {
            starter: { price: 79, period: "month", features: ["Basic accounting", "5 bank accounts", "Email support"] },
            professional: { price: 199, period: "month", features: ["Advanced reporting", "Unlimited accounts", "Priority support"] },
            enterprise: { price: 399, period: "month", features: ["Custom reports", "Multi-entity", "Dedicated accountant"] }
        },
        delivery: "2-3 weeks",
        rating: 4.7,
        reviewCount: 189
    },
    {
        id: "project-management",
        title: "Project Management Platform",
        description: "Collaborative project management for teams",
        category: "Project Management",
        features: [
            "Task management",
            "Team collaboration",
            "Time tracking",
            "File sharing",
            "Progress reporting"
        ],
        benefits: [
            "Improve team efficiency",
            "Better project visibility",
            "Reduce project delays",
            "Enhanced communication"
        ],
        pricing: {
            starter: { price: 39, period: "month", features: ["5 team members", "Basic projects", "Email support"] },
            professional: { price: 129, period: "month", features: ["25 team members", "Advanced features", "Phone support"] },
            enterprise: { price: 249, period: "month", features: ["Unlimited members", "Custom workflows", "API access"] }
        },
        delivery: "1 week",
        rating: 4.8,
        reviewCount: 312
    },
    {
        id: "marketing-automation",
        title: "Marketing Automation Suite",
        description: "Automated marketing tools for business growth",
        category: "Marketing",
        features: [
            "Email marketing",
            "Social media management",
            "Lead nurturing",
            "Campaign analytics",
            "A/B testing"
        ],
        benefits: [
            "Increase conversion rates",
            "Automate repetitive tasks",
            "Better ROI tracking",
            "Personalized customer journeys"
        ],
        pricing: {
            starter: { price: 69, period: "month", features: ["1000 emails/month", "Basic templates", "Email support"] },
            professional: { price: 199, period: "month", features: ["10000 emails/month", "Advanced automation", "Priority support"] },
            enterprise: { price: 399, period: "month", features: ["Unlimited emails", "Custom integrations", "Dedicated manager"] }
        },
        delivery: "1-2 weeks",
        rating: 4.6,
        reviewCount: 178
    },
    {
        id: "inventory-management",
        title: "Inventory & Supply Chain Management",
        description: "Complete inventory control and supply chain optimization",
        category: "Inventory Management",
        features: [
            "Stock tracking",
            "Purchase orders",
            "Supplier management",
            "Demand forecasting",
            "Multi-location support"
        ],
        benefits: [
            "Reduce stockouts by 60%",
            "Lower inventory costs",
            "Better supplier relationships",
            "Improved cash flow"
        ],
        pricing: {
            starter: { price: 89, period: "month", features: ["1000 SKUs", "Basic reporting", "Email support"] },
            professional: { price: 249, period: "month", features: ["10000 SKUs", "Advanced analytics", "Phone support"] },
            enterprise: { price: 499, period: "month", features: ["Unlimited SKUs", "Custom integrations", "Dedicated support"] }
        },
        delivery: "2-3 weeks",
        rating: 4.7,
        reviewCount: 145
    }
];
const INDUSTRY_SOLUTIONS = [
    {
        id: "retail-saas",
        title: "Retail Management Suite",
        description: "Complete retail solution for stores and e-commerce",
        category: "Retail",
        features: ["POS system", "Inventory management", "Customer loyalty", "Multi-channel sales", "Analytics"],
        price: "From $199/month",
        delivery: "2-3 weeks"
    },
    {
        id: "healthcare-saas",
        title: "Healthcare Practice Management",
        description: "HIPAA-compliant practice management solution",
        category: "Healthcare",
        features: ["Patient scheduling", "Electronic records", "Billing management", "Compliance tools", "Reporting"],
        price: "From $299/month",
        delivery: "3-4 weeks"
    },
    {
        id: "real-estate-saas",
        title: "Real Estate CRM",
        description: "Property management and client relationship platform",
        category: "Real Estate",
        features: ["Lead management", "Property listings", "Client database", "Transaction tracking", "Market analysis"],
        price: "From $149/month",
        delivery: "2 weeks"
    },
    {
        id: "restaurant-saas",
        title: "Restaurant Management System",
        description: "Complete restaurant operations platform",
        category: "Restaurant",
        features: ["Order management", "Inventory control", "Staff scheduling", "Customer feedback", "Analytics"],
        price: "From $179/month",
        delivery: "2-3 weeks"
    }
];
export default function MicroSAASPage() {
    const [selectedCategory, setSelectedCategory] = useState('all');
    const filteredServices = selectedCategory === 'all'
        ? MICRO_SAAS_SERVICES
        : MICRO_SAAS_SERVICES.filter(service => service.category.toLowerCase().includes(selectedCategory.toLowerCase()));
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-zinc-50 to-zinc-100 dark:from-zinc-900 dark:to-zinc-800", children: [_jsx("div", { className: "bg-gradient-to-r from-zion-blue-dark via-zion-purple to-zion-blue-dark text-white py-20", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h1", { className: "text-4xl md:text-6xl font-bold mb-6", children: "Micro SAAS Solutions" }), _jsx("p", { className: "text-xl md:text-2xl mb-8 text-zion-cyan max-w-4xl mx-auto", children: "Affordable, scalable software solutions designed specifically for small to medium businesses. Transform your operations without breaking the bank." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsxs(Button, { size: "lg", className: "bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan/90", children: [_jsx(Phone, { className: "h-5 w-5 mr-2" }), "Start Free Trial"] }), _jsxs(Button, { size: "lg", variant: "outline", className: "border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10", children: [_jsx(Mail, { className: "h-5 w-5 mr-2" }), "Schedule Demo"] })] })] }) }), _jsx("div", { className: "bg-white dark:bg-zinc-800 border-b border-zinc-200 dark:border-zinc-700 py-4", children: _jsx("div", { className: "container mx-auto px-4", children: _jsxs("div", { className: "flex flex-wrap items-center justify-center gap-6 text-sm text-zinc-600 dark:text-zinc-400", children: [_jsxs("div", { className: "flex items-center gap-2", children: [_jsx(MapPin, { className: "h-4 w-4" }), _jsx("span", { children: "364 E Main St STE 1008, Middletown DE 19709" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Phone, { className: "h-4 w-4" }), _jsx("span", { children: "+1 302 464 0950" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Mail, { className: "h-4 w-4" }), _jsx("span", { children: "kleber@ziontechgroup.com" })] }), _jsxs("div", { className: "flex items-center gap-2", children: [_jsx(Globe, { className: "h-4 w-4" }), _jsx("a", { href: "https://ziontechgroup.com", target: "_blank", rel: "noopener noreferrer", className: "text-zion-cyan hover:underline", children: "ziontechgroup.com" })] })] }) }) }), _jsxs("div", { className: "container mx-auto px-4 py-12", children: [_jsxs(Tabs, { defaultValue: "saas-services", className: "w-full", children: [_jsxs(TabsList, { className: "grid w-full grid-cols-2 mb-8", children: [_jsxs(TabsTrigger, { value: "saas-services", className: "flex items-center gap-2", children: [_jsx(Building, { className: "h-5 w-5" }), "SAAS Services"] }), _jsxs(TabsTrigger, { value: "industry-solutions", className: "flex items-center gap-2", children: [_jsx(Award, { className: "h-5 w-5" }), "Industry Solutions"] })] }), _jsxs(TabsContent, { value: "saas-services", className: "space-y-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Micro SAAS Services" }), _jsx("p", { className: "text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto", children: "Affordable, feature-rich software solutions that grow with your business. Start small and scale up as you need more features." })] }), _jsxs("div", { className: "flex flex-wrap justify-center gap-2 mb-8", children: [_jsx(Button, { variant: selectedCategory === 'all' ? 'default' : 'outline', onClick: () => setSelectedCategory('all'), className: "bg-zion-purple hover:bg-zion-purple-dark", children: "All Categories" }), Array.from(new Set(MICRO_SAAS_SERVICES.map(s => s.category))).map(category => (_jsx(Button, { variant: selectedCategory === category ? 'default' : 'outline', onClick: () => setSelectedCategory(category), className: selectedCategory === category ? 'bg-zion-purple hover:bg-zion-purple-dark' : '', children: category }, category)))] }), _jsx("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-8", children: filteredServices.map((service) => (_jsxs(Card, { className: "hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg", children: [_jsxs(CardHeader, { className: "pb-4", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(Building, { className: "h-6 w-6 text-zion-purple" }), _jsx(Badge, { variant: "secondary", children: service.category })] }), _jsx(CardTitle, { className: "text-xl", children: service.title }), _jsx(CardDescription, { children: service.description }), _jsxs("div", { className: "flex items-center gap-2 mt-2", children: [_jsx("div", { className: "flex items-center gap-1", children: [...Array(5)].map((_, i) => (_jsx(Star, { className: `h-4 w-4 ${i < Math.floor(service.rating) ? 'text-yellow-400 fill-current' : 'text-zinc-300'}` }, i))) }), _jsxs("span", { className: "text-sm text-zinc-600 dark:text-zinc-400", children: [service.rating, " (", service.reviewCount, " reviews)"] })] })] }), _jsxs(CardContent, { className: "space-y-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-semibold text-sm text-zinc-700 dark:text-zinc-300", children: "Key Features:" }), _jsx("ul", { className: "space-y-1", children: service.features.map((feature, index) => (_jsxs("li", { className: "flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400", children: [_jsx(CheckCircle, { className: "h-4 w-4 text-green-500" }), feature] }, index))) })] }), _jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-semibold text-sm text-zinc-700 dark:text-zinc-300", children: "Business Benefits:" }), _jsx("ul", { className: "space-y-1", children: service.benefits.map((benefit, index) => (_jsxs("li", { className: "flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400", children: [_jsx(TrendingUp, { className: "h-4 w-4 text-blue-500" }), benefit] }, index))) })] }), _jsxs("div", { className: "space-y-3", children: [_jsx("h4", { className: "font-semibold text-sm text-zinc-700 dark:text-zinc-300", children: "Pricing Plans:" }), _jsx("div", { className: "grid grid-cols-1 gap-3", children: Object.entries(service.pricing).map(([tier, plan]) => (_jsxs("div", { className: "flex items-center justify-between p-3 bg-zinc-50 dark:bg-zinc-800 rounded-lg", children: [_jsxs("div", { children: [_jsx("div", { className: "font-semibold capitalize", children: tier }), _jsx("div", { className: "text-sm text-zinc-600 dark:text-zinc-400", children: plan.features.slice(0, 2).join(', ') })] }), _jsxs("div", { className: "text-right", children: [_jsxs("div", { className: "text-xl font-bold text-zion-purple", children: ["$", plan.price] }), _jsxs("div", { className: "text-sm text-zinc-500", children: ["/", plan.period] })] })] }, tier))) })] }), _jsx("div", { className: "pt-4 border-t border-zinc-200 dark:border-zinc-700", children: _jsxs("div", { className: "flex items-center justify-between mb-3", children: [_jsxs(Badge, { variant: "outline", className: "flex items-center gap-1", children: [_jsx(Clock, { className: "h-3 w-3" }), service.delivery] }), _jsx(Button, { className: "bg-zion-purple hover:bg-zion-purple-dark", children: "Start Free Trial" })] }) })] })] }, service.id))) })] }), _jsxs(TabsContent, { value: "industry-solutions", className: "space-y-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Industry-Specific Solutions" }), _jsx("p", { className: "text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto", children: "Tailored solutions designed for specific industries with built-in compliance and best practices" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: INDUSTRY_SOLUTIONS.map((solution) => (_jsxs(Card, { className: "hover:shadow-xl transition-shadow duration-300 border-0 shadow-lg", children: [_jsxs(CardHeader, { className: "pb-4", children: [_jsxs("div", { className: "flex items-center gap-2 mb-2", children: [_jsx(Award, { className: "h-6 w-6 text-zion-purple" }), _jsx(Badge, { variant: "secondary", children: solution.category })] }), _jsx(CardTitle, { className: "text-xl", children: solution.title }), _jsx(CardDescription, { children: solution.description })] }), _jsxs(CardContent, { className: "space-y-4", children: [_jsxs("div", { className: "space-y-2", children: [_jsx("h4", { className: "font-semibold text-sm text-zinc-700 dark:text-zinc-300", children: "Features:" }), _jsx("ul", { className: "space-y-1", children: solution.features.map((feature, index) => (_jsxs("li", { className: "flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400", children: [_jsx(CheckCircle, { className: "h-4 w-4 text-green-500" }), feature] }, index))) })] }), _jsx("div", { className: "pt-4 border-t border-zinc-200 dark:border-zinc-700", children: _jsxs("div", { className: "flex items-center justify-between mb-3", children: [_jsxs("div", { children: [_jsx("div", { className: "text-2xl font-bold text-zion-purple", children: solution.price }), _jsx(Badge, { variant: "outline", children: solution.delivery })] }), _jsx(Button, { className: "bg-zion-purple hover:bg-zion-purple-dark", children: "Learn More" })] }) })] })] }, solution.id))) })] })] }), _jsxs("div", { className: "mt-20 bg-white dark:bg-zinc-800 rounded-lg shadow-lg p-8", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Why Choose Micro SAAS?" }), _jsx("p", { className: "text-xl text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto", children: "Perfect for growing businesses that need powerful tools without enterprise complexity" })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6", children: [_jsxs("div", { className: "text-center", children: [_jsx("div", { className: "bg-zion-cyan/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(CreditCard, { className: "h-8 w-8 text-zion-cyan" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Affordable Pricing" }), _jsx("p", { className: "text-sm text-zinc-600 dark:text-zinc-400", children: "Start with what you need, scale as you grow" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "bg-zion-purple/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Zap, { className: "h-8 w-8 text-zion-purple" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Quick Implementation" }), _jsx("p", { className: "text-sm text-zinc-600 dark:text-zinc-400", children: "Get up and running in days, not months" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "bg-zion-blue/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Award, { className: "h-8 w-8 text-zion-blue" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Proven Solutions" }), _jsx("p", { className: "text-sm text-zinc-600 dark:text-zinc-400", children: "Tested and trusted by thousands of businesses" })] }), _jsxs("div", { className: "text-center", children: [_jsx("div", { className: "bg-green-500/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4", children: _jsx(Users, { className: "h-8 w-8 text-green-500" }) }), _jsx("h3", { className: "font-semibold mb-2", children: "Expert Support" }), _jsx("p", { className: "text-sm text-zinc-600 dark:text-zinc-400", children: "Dedicated support team to help you succeed" })] })] })] })] }), _jsx("div", { className: "bg-gradient-to-r from-zion-blue-dark to-zion-purple text-white py-16", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h2", { className: "text-3xl md:text-4xl font-bold mb-6", children: "Ready to Transform Your Business?" }), _jsx("p", { className: "text-xl mb-8 text-zion-cyan max-w-2xl mx-auto", children: "Start your free trial today and see how our micro SAAS solutions can streamline your operations and drive growth. No credit card required." }), _jsxs("div", { className: "flex flex-wrap justify-center gap-4", children: [_jsxs(Button, { size: "lg", className: "bg-zion-cyan text-zion-blue-dark hover:bg-zion-cyan/90", children: [_jsx(Phone, { className: "h-5 w-5 mr-2" }), "Call: +1 302 464 0950"] }), _jsxs(Button, { size: "lg", variant: "outline", className: "border-zion-cyan text-zion-cyan hover:bg-zion-cyan/10", children: [_jsx(Mail, { className: "h-5 w-5 mr-2" }), "Email: kleber@ziontechgroup.com"] })] }), _jsxs("div", { className: "mt-8 text-zion-cyan", children: [_jsxs("p", { className: "text-lg", children: ["Visit: ", _jsx("a", { href: "https://ziontechgroup.com", target: "_blank", rel: "noopener noreferrer", className: "underline hover:text-white", children: "ziontechgroup.com" })] }), _jsx("p", { className: "text-sm mt-2", children: "364 E Main St STE 1008, Middletown DE 19709" })] })] }) })] }));
}
