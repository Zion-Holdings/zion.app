import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { Header } from '@/components/header/Header';
import { Footer } from '@/components/Footer';
import { SEO } from '@/components/SEO';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { Check, Star, Zap, Shield, Users } from 'lucide-react';
export default function Pricing() {
    const [billingCycle, setBillingCycle] = useState('monthly');
    const [selectedPlan, setSelectedPlan] = useState(null);
    const plans = [
        {
            name: 'Starter',
            description: 'Perfect for small businesses and startups',
            price: { monthly: 99, yearly: 990 },
            features: [
                'Basic IT Support',
                'Email & Phone Support',
                'Security Monitoring',
                'Monthly Reports',
                '5 User Licenses',
                'Basic Analytics'
            ],
            popular: false,
            icon: Users,
            color: 'bg-blue-500'
        },
        {
            name: 'Professional',
            description: 'Ideal for growing businesses with advanced needs',
            price: { monthly: 299, yearly: 2990 },
            features: [
                'Everything in Starter',
                'AI-Powered Solutions',
                '24/7 Support',
                'Advanced Security',
                'Custom Integrations',
                '25 User Licenses',
                'Advanced Analytics',
                'Priority Support'
            ],
            popular: true,
            icon: Zap,
            color: 'bg-zion-blue'
        },
        {
            name: 'Enterprise',
            description: 'Comprehensive solutions for large organizations',
            price: { monthly: 799, yearly: 7990 },
            features: [
                'Everything in Professional',
                'Custom AI Development',
                'Dedicated Account Manager',
                'On-Site Support',
                'Unlimited User Licenses',
                'Custom Reporting',
                'SLA Guarantees',
                'White-label Solutions'
            ],
            popular: false,
            icon: Shield,
            color: 'bg-purple-500'
        }
    ];
    const addOns = [
        {
            name: 'AI Services Package',
            description: 'Advanced AI and machine learning solutions',
            price: { monthly: 199, yearly: 1990 },
            features: ['Custom AI Models', 'Data Analytics', 'Process Automation']
        },
        {
            name: 'Cybersecurity Suite',
            description: 'Comprehensive security and compliance solutions',
            price: { monthly: 149, yearly: 1490 },
            features: ['Threat Detection', 'Vulnerability Assessment', 'Compliance Reporting']
        },
        {
            name: 'Green IT Solutions',
            description: 'Sustainable technology and energy optimization',
            price: { monthly: 99, yearly: 990 },
            features: ['Energy Audits', 'Sustainable Hardware', 'Carbon Footprint Tracking']
        }
    ];
    const savings = billingCycle === 'yearly' ? 20 : 0;
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Pricing - Zion Tech Group", description: "Transparent pricing for our comprehensive IT solutions, AI services, and tech talent services. Choose the plan that fits your business needs.", keywords: "pricing, IT services, AI solutions, cybersecurity, enterprise pricing, business solutions" }), _jsx(Header, {}), _jsxs("main", { className: "pt-32 pb-20", children: [_jsx("section", { className: "bg-gradient-to-br from-zion-blue via-zion-blue-dark to-zion-purple text-white py-20", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-6", children: "Transparent Pricing" }), _jsx("p", { className: "text-xl md:text-2xl text-zion-slate-light max-w-3xl mx-auto leading-relaxed", children: "Choose the perfect plan for your business. All plans include our core features with transparent pricing and no hidden fees." })] }) }), _jsx("section", { className: "py-16", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsx("div", { className: "flex justify-center mb-12", children: _jsxs("div", { className: "bg-gray-100 rounded-lg p-1", children: [_jsx("button", { onClick: () => setBillingCycle('monthly'), className: `px-6 py-3 rounded-lg font-medium transition-colors ${billingCycle === 'monthly'
                                                    ? 'bg-white text-zion-blue shadow-sm'
                                                    : 'text-gray-600 hover:text-gray-900'}`, children: "Monthly Billing" }), _jsxs("button", { onClick: () => setBillingCycle('yearly'), className: `px-6 py-3 rounded-lg font-medium transition-colors ${billingCycle === 'yearly'
                                                    ? 'bg-white text-zion-blue shadow-sm'
                                                    : 'text-gray-600 hover:text-gray-900'}`, children: ["Yearly Billing", billingCycle === 'yearly' && (_jsxs(Badge, { className: "ml-2 bg-green-100 text-green-700 text-xs", children: ["Save ", savings, "%"] }))] })] }) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8 mb-16", children: plans.map((plan, index) => (_jsxs(Card, { className: `relative hover:shadow-xl transition-all duration-300 ${plan.popular ? 'ring-2 ring-zion-blue scale-105' : ''}`, children: [plan.popular && (_jsx("div", { className: "absolute -top-4 left-1/2 transform -translate-x-1/2", children: _jsxs(Badge, { className: "bg-zion-blue text-white px-4 py-2", children: [_jsx(Star, { className: "h-4 w-4 mr-1" }), "Most Popular"] }) })), _jsxs(CardHeader, { className: "text-center pb-8", children: [_jsx("div", { className: `w-16 h-16 ${plan.color} rounded-full flex items-center justify-center mx-auto mb-4`, children: _jsx(plan.icon, { className: "h-8 w-8 text-white" }) }), _jsx(CardTitle, { className: "text-2xl font-bold", children: plan.name }), _jsx("p", { className: "text-gray-600", children: plan.description })] }), _jsxs(CardContent, { className: "text-center", children: [_jsxs("div", { className: "mb-8", children: [_jsxs("div", { className: "flex items-baseline justify-center", children: [_jsxs("span", { className: "text-4xl font-bold text-gray-900", children: ["$", billingCycle === 'yearly' ? plan.price.yearly / 12 : plan.price.monthly] }), _jsx("span", { className: "text-gray-600 ml-2", children: "/month" })] }), billingCycle === 'yearly' && (_jsxs("p", { className: "text-sm text-gray-500 mt-1", children: ["Billed annually ($", plan.price.yearly, ")"] }))] }), _jsx("ul", { className: "space-y-3 mb-8 text-left", children: plan.features.map((feature, featureIndex) => (_jsxs("li", { className: "flex items-center space-x-3", children: [_jsx(Check, { className: "h-5 w-5 text-green-500 flex-shrink-0" }), _jsx("span", { className: "text-gray-700", children: feature })] }, featureIndex))) }), _jsx(Button, { className: `w-full ${plan.popular
                                                            ? 'bg-zion-blue hover:bg-zion-blue/90'
                                                            : 'bg-gray-900 hover:bg-gray-800'}`, onClick: () => setSelectedPlan(plan.name), children: "Get Started" })] })] }, index))) }), _jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Additional Services" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Enhance your plan with specialized services tailored to your specific needs." })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6", children: addOns.map((addon, index) => (_jsxs(Card, { className: "hover:shadow-lg transition-shadow", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-xl", children: addon.name }), _jsx("p", { className: "text-gray-600", children: addon.description })] }), _jsxs(CardContent, { children: [_jsxs("div", { className: "mb-4", children: [_jsxs("div", { className: "flex items-baseline", children: [_jsxs("span", { className: "text-2xl font-bold text-gray-900", children: ["$", billingCycle === 'yearly' ? addon.price.yearly / 12 : addon.price.monthly] }), _jsx("span", { className: "text-gray-600 ml-2", children: "/month" })] }), billingCycle === 'yearly' && (_jsxs("p", { className: "text-sm text-gray-500 mt-1", children: ["Billed annually ($", addon.price.yearly, ")"] }))] }), _jsx("ul", { className: "space-y-2 mb-6", children: addon.features.map((feature, featureIndex) => (_jsxs("li", { className: "flex items-center space-x-2 text-sm", children: [_jsx(Check, { className: "h-4 w-4 text-green-500 flex-shrink-0" }), _jsx("span", { className: "text-gray-700", children: feature })] }, featureIndex))) }), _jsx(Button, { variant: "outline", className: "w-full", children: "Add to Plan" })] })] }, index))) })] }) }), _jsx("section", { className: "py-16 bg-gray-50", children: _jsxs("div", { className: "container mx-auto px-4", children: [_jsxs("div", { className: "text-center mb-12", children: [_jsx("h2", { className: "text-3xl font-bold text-gray-900 mb-4", children: "Frequently Asked Questions" }), _jsx("p", { className: "text-xl text-gray-600 max-w-3xl mx-auto", children: "Get answers to common questions about our pricing and services." })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto", children: [_jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Can I change my plan at any time?" }), _jsx("p", { className: "text-gray-600", children: "Yes, you can upgrade or downgrade your plan at any time. Changes take effect at the start of your next billing cycle." })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Is there a setup fee?" }), _jsx("p", { className: "text-gray-600", children: "No setup fees for any of our plans. You only pay the monthly or yearly subscription cost." })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "What payment methods do you accept?" }), _jsx("p", { className: "text-gray-600", children: "We accept all major credit cards, PayPal, and bank transfers for annual plans." })] })] }), _jsxs("div", { className: "space-y-6", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Do you offer custom pricing?" }), _jsx("p", { className: "text-gray-600", children: "Yes, we offer custom pricing for enterprise clients with specific requirements. Contact our sales team for details." })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Is there a money-back guarantee?" }), _jsx("p", { className: "text-gray-600", children: "We offer a 30-day money-back guarantee for all new subscriptions." })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: "Can I cancel anytime?" }), _jsx("p", { className: "text-gray-600", children: "Yes, you can cancel your subscription at any time with no cancellation fees." })] })] })] })] }) }), _jsx("section", { className: "py-20 bg-zion-blue text-white", children: _jsxs("div", { className: "container mx-auto px-4 text-center", children: [_jsx("h2", { className: "text-3xl font-bold mb-4", children: "Ready to Get Started?" }), _jsx("p", { className: "text-xl text-zion-slate-light mb-8 max-w-3xl mx-auto", children: "Choose the plan that best fits your business needs and start transforming your technology infrastructure today." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center items-center", children: [_jsx(Button, { size: "lg", className: "bg-zion-cyan hover:bg-zion-cyan/90 text-white px-8 py-4 text-lg", children: "Start Free Trial" }), _jsx(Button, { variant: "outline", size: "lg", className: "border-white/30 text-white hover:bg-white/10 px-8 py-4 text-lg", children: "Contact Sales" })] })] }) })] }), _jsx(Footer, {})] }));
}
