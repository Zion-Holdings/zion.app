import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
export default function FAQ() {
    const faqData = [
        {
            category: "General",
            questions: [
                {
                    question: "What is Zion Tech Group?",
                    answer: "Zion Tech Group is the world's first free marketplace dedicated to high-tech and artificial intelligence. We connect talented professionals, innovative services, and cutting-edge equipment in the tech industry."
                },
                {
                    question: "Is Zion Tech Group really free to use?",
                    answer: "Yes! Our core marketplace platform is completely free to use. We believe in democratizing access to technology and talent. Some premium features may have associated costs, but the basic marketplace functionality is free."
                },
                {
                    question: "How do I get started on Zion Tech Group?",
                    answer: "Getting started is easy! Simply create an account, choose your role (talent, client, or both), and start exploring. You can browse services, post jobs, or showcase your skills immediately."
                }
            ]
        },
        {
            category: "For Talent & Creators",
            questions: [
                {
                    question: "How do I create a talent profile?",
                    answer: "After signing up, go to your dashboard and select 'Create Profile'. Fill in your skills, experience, portfolio items, and set your rates. A complete profile increases your visibility to potential clients."
                },
                {
                    question: "What types of projects can I find?",
                    answer: "Our platform hosts a wide range of tech projects including AI development, software engineering, IT consulting, hardware projects, and more. Projects vary from short-term gigs to long-term contracts."
                },
                {
                    question: "How do payments work?",
                    answer: "We use secure payment processing with escrow protection. Clients pay upfront, and funds are released upon project completion. We support multiple payment methods including credit cards and digital wallets."
                }
            ]
        },
        {
            category: "For Clients & Employers",
            questions: [
                {
                    question: "How do I post a job or project?",
                    answer: "Navigate to 'Post Job' in your dashboard, fill out the project requirements, budget, and timeline. Our AI matcher will help connect you with the best talent for your project."
                },
                {
                    question: "How do I ensure quality work?",
                    answer: "All talent on our platform is vetted and rated. You can review portfolios, check ratings, and communicate directly before hiring. We also offer dispute resolution if issues arise."
                },
                {
                    question: "What if I'm not satisfied with the work?",
                    answer: "We have a comprehensive dispute resolution process. If you're not satisfied, contact our support team within the specified timeframe, and we'll work to resolve the issue fairly."
                }
            ]
        },
        {
            category: "Services & Equipment",
            questions: [
                {
                    question: "What types of services are available?",
                    answer: "We offer a comprehensive range of tech services including AI development, software engineering, IT consulting, cybersecurity, data analysis, cloud services, and specialized hardware solutions."
                },
                {
                    question: "Can I rent or buy equipment through Zion?",
                    answer: "Yes! Our equipment marketplace allows you to browse, rent, or purchase specialized tech equipment. We verify all equipment listings to ensure quality and reliability."
                },
                {
                    question: "Do you offer onsite IT services?",
                    answer: "Absolutely! We provide onsite IT services for businesses and organizations. Our certified technicians can handle everything from network setup to emergency repairs."
                }
            ]
        },
        {
            category: "Technical & Support",
            questions: [
                {
                    question: "What if I encounter technical issues?",
                    answer: "Our support team is available 24/7. You can reach us through the contact form, live chat, or email. We typically respond within 2 hours for urgent issues."
                },
                {
                    question: "Is my data secure?",
                    answer: "Yes, we take security seriously. We use enterprise-grade encryption, secure hosting, and follow industry best practices for data protection. Your information is never shared without permission."
                },
                {
                    question: "Do you offer API access?",
                    answer: "Yes! We provide comprehensive API access for developers and businesses who want to integrate with our platform. Check out our developer portal for documentation and examples."
                }
            ]
        }
    ];
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "FAQ | Zion Tech Group", description: "Frequently asked questions about Zion Tech Group - the world's first free marketplace for high-tech and AI services.", keywords: "FAQ, help, support, Zion Tech Group, tech marketplace, AI services", canonical: "https://ziontechgroup.com/faq" }), _jsx(Header, {}), _jsx("main", { className: "min-h-screen bg-zion-blue pt-24 pb-20", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Frequently Asked Questions" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "Find answers to common questions about Zion Tech Group, our marketplace, and how to get the most out of our platform." })] }), _jsx("div", { className: "space-y-12", children: faqData.map((category, categoryIndex) => (_jsxs(Card, { className: "bg-zion-blue-dark border-zion-purple/20", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-2xl text-zion-cyan", children: category.category }), _jsxs(CardDescription, { className: "text-zion-slate-light", children: ["Common questions about ", category.category.toLowerCase()] })] }), _jsx(CardContent, { children: _jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: category.questions.map((item, questionIndex) => (_jsxs(AccordionItem, { value: `item-${categoryIndex}-${questionIndex}`, className: "border-zion-purple/20", children: [_jsx(AccordionTrigger, { className: "text-left text-white hover:text-zion-cyan hover:no-underline", children: item.question }), _jsx(AccordionContent, { className: "text-zion-slate-light", children: item.answer })] }, questionIndex))) }) })] }, categoryIndex))) }), _jsx("div", { className: "mt-16 text-center", children: _jsxs(Card, { className: "bg-zion-blue-dark border-zion-purple/20 max-w-2xl mx-auto", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-2xl text-zion-cyan", children: "Still have questions?" }), _jsx(CardDescription, { className: "text-zion-slate-light", children: "Can't find what you're looking for? Our support team is here to help." })] }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsx("p", { className: "text-zion-slate-light", children: "Contact us directly and we'll get back to you within 2 hours." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "/contact", className: "inline-flex items-center justify-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple-light transition-colors", children: "Contact Support" }), _jsx("a", { href: "/help-center", className: "inline-flex items-center justify-center px-6 py-3 border border-zion-purple text-zion-cyan font-medium rounded-lg hover:bg-zion-purple/10 transition-colors", children: "Help Center" })] })] }) })] }) })] }) }), _jsx(Footer, {})] }));
}
