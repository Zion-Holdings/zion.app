import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
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
// Filter FAQ data based on search term and active category
const filteredFAQData = faqData.filter(category => {
    if (activeCategory !== 'all' && category.category !== activeCategory) {
        return false;
    }
    if (searchTerm) {
        const hasMatchingQuestion = category.questions.some(q => q.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
            q.answer.toLowerCase().includes(searchTerm.toLowerCase()));
        return hasMatchingQuestion;
    }
    return true;
});
const categories = [
    { id: 'all', label: 'All Categories', icon: '📚' },
    ...faqData.map(cat => ({ id: cat.category, label: cat.category, icon: cat.icon }))
];
return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "FAQ | Zion Tech Group", description: "Frequently asked questions about Zion Tech Group - the world's first free marketplace for high-tech and AI services.", keywords: "FAQ, help, support, Zion Tech Group, tech marketplace, AI services", canonical: "https://ziontechgroup.com/faq" }), _jsx(Header, {}), _jsx("main", { className: "min-h-screen bg-zion-blue pt-24 pb-20", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Frequently Asked Questions" }), _jsx("p", { className: "text-xl text-zion-slate-light max-w-3xl mx-auto", children: "Find answers to common questions about Zion Tech Group, our marketplace, and how to get the most out of our platform." })] }), _jsx("div", { className: "space-y-12", children: faqData.map((category, categoryIndex) => (_jsxs(Card, { className: "bg-zion-blue-dark border-zion-purple/20", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-2xl text-zion-cyan", children: category.category }), _jsxs(CardDescription, { className: "text-zion-slate-light", children: ["Common questions about ", category.category.toLowerCase()] })] }), _jsx(CardContent, { children: _jsx(Accordion, { type: "single", collapsible: true, className: "w-full", children: category.questions.map((item, questionIndex) => (_jsxs(AccordionItem, { value: `item-${categoryIndex}-${questionIndex}`, className: "border-zion-purple/20", children: [_jsx(AccordionTrigger, { className: "text-left text-white hover:text-zion-cyan hover:no-underline", children: item.question }), _jsx(AccordionContent, { className: "text-zion-slate-light", children: item.answer })] }, questionIndex))) }) })] }, categoryIndex))) }), _jsxs("div", { className: "mt-16 text-center", children: [_jsxs(Card, { className: "bg-zion-blue-dark border-zion-purple/20 max-w-2xl mx-auto", children: [_jsxs(CardHeader, { children: [_jsx(CardTitle, { className: "text-2xl text-zion-cyan", children: "Still have questions?" }), _jsx(CardDescription, { className: "text-zion-slate-light", children: "Can't find what you're looking for? Our support team is here to help." })] }), _jsx(CardContent, { children: _jsxs("div", { className: "space-y-4", children: [_jsx("p", { className: "text-zion-slate-light", children: "Contact us directly and we'll get back to you within 2 hours." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "/contact", className: "inline-flex items-center justify-center px-6 py-3 bg-zion-purple text-white font-medium rounded-lg hover:bg-zion-purple-light transition-colors", children: "Contact Support" }), _jsx("a", { href: "/help-center", className: "inline-flex items-center justify-center px-6 py-3 border border-zion-purple text-zion-cyan font-medium rounded-lg hover:bg-zion-purple/10 transition-colors", children: "Help Center" })] })] }) })] }), "=======", _jsxs("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800", children: [_jsx(SEO, { title: "Frequently Asked Questions - Zion Tech Group", description: "Find answers to common questions about Zion Tech Group's services, processes, and how we can help your business succeed with technology solutions.", keywords: "FAQ, frequently asked questions, Zion Tech Group, technology services, AI solutions, IT consulting" }), _jsxs("section", { className: "relative py-20 px-4 overflow-hidden", children: [_jsxs("div", { className: "absolute inset-0", children: [_jsx("div", { className: "absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" }), _jsx("div", { className: "absolute top-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse animation-delay-1000" }), _jsx("div", { className: "absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse animation-delay-2000" })] }), _jsx("div", { className: "relative z-10 max-w-7xl mx-auto text-center", children: _jsxs("div", { className: `transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, children: [_jsx("h1", { className: "text-5xl md:text-7xl font-bold mb-6", children: _jsx("span", { className: "bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient", children: "Frequently Asked Questions" }) }), _jsx("p", { className: "text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed", children: "Find answers to common questions about our services, processes, and how we can help your business succeed with cutting-edge technology solutions." }), _jsxs("div", { className: "max-w-4xl mx-auto space-y-6", children: [_jsxs("div", { className: "relative", children: [_jsx("input", { type: "text", placeholder: "Search questions and answers...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full px-6 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent text-lg" }), _jsx("div", { className: "absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400", children: "\uD83D\uDD0D" })] }), _jsx("div", { className: "flex flex-wrap justify-center gap-3", children: categories.map((category) => (_jsxs("button", { onClick: () => setActiveCategory(category.id), className: `px-4 py-2 rounded-lg font-medium transition-all duration-200 flex items-center gap-2 ${activeCategory === category.id
                                                                            ? 'bg-cyan-500 text-white shadow-lg shadow-cyan-500/30'
                                                                            : 'bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20'}`, children: [_jsx("span", { children: category.icon }), category.label] }, category.id))) })] }), ">>>>>>> e338169a4e366a68d7d32ebaabd769477f9baeac"] }) })] }), _jsx("section", { className: "py-20 px-4", children: _jsx("div", { className: "max-w-6xl mx-auto", children: filteredFAQData.length === 0 ? (_jsxs("div", { className: "text-center py-20", children: [_jsx("div", { className: "text-6xl mb-6", children: "\uD83E\uDD14" }), _jsx("h3", { className: "text-2xl font-bold text-white mb-4", children: "No questions found" }), _jsx("p", { className: "text-gray-300 mb-8", children: "Try adjusting your search terms or browse all categories." }), _jsx("button", { onClick: () => {
                                                            setSearchTerm('');
                                                            setActiveCategory('all');
                                                        }, className: "bg-cyan-500 text-white px-6 py-3 rounded-lg font-medium hover:bg-cyan-400 transition-colors", children: "View All Questions" })] })) : (_jsx("div", { className: "space-y-8", children: filteredFAQData.map((category, categoryIndex) => (_jsxs("div", { className: `bg-gradient-to-br ${category.color} rounded-2xl border border-white/20 overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`, style: { transitionDelay: `${categoryIndex * 0.1}s` }, children: [_jsx("div", { className: "p-6 border-b border-white/20", children: _jsxs("h2", { className: "text-2xl font-bold text-white flex items-center", children: [_jsx("span", { className: "mr-3 text-3xl", children: category.icon }), category.category] }) }), _jsx(Accordion.Root, { type: "single", collapsible: true, className: "divide-y divide-white/10", children: category.questions.map((item, questionIndex) => (_jsxs(Accordion.Item, { value: `${categoryIndex}-${questionIndex}`, className: "transition-all duration-200 hover:bg-white/5", children: [_jsx(Accordion.Header, { children: _jsx(Accordion.Trigger, { className: "w-full px-6 py-4 text-left hover:bg-white/5 transition-colors duration-200 group", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h3", { className: "text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors", children: item.question }), _jsx("svg", { className: "w-5 h-5 text-gray-400 group-hover:text-cyan-300 transition-all duration-200 group-data-[state=open]:rotate-180", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M19 9l-7 7-7-7" }) })] }) }) }), _jsx(Accordion.Content, { className: "overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down", children: _jsx("div", { className: "px-6 pb-4", children: _jsx("p", { className: "text-gray-300 leading-relaxed", children: item.answer }) }) })] }, questionIndex))) })] }, categoryIndex))) })) }) }), _jsx("section", { className: "py-20 px-4", children: _jsx("div", { className: "max-w-4xl mx-auto text-center", children: _jsxs("div", { className: "bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl p-12 text-white", children: [_jsx("h3", { className: "text-4xl font-bold mb-4", children: "Still Have Questions?" }), _jsx("p", { className: "text-xl mb-8 opacity-90", children: "Can't find what you're looking for? Our team is here to help!" }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "/contact", className: "bg-white text-cyan-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors", children: "Contact Us" }), _jsx("a", { href: "/request-quote", className: "border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-cyan-600 transition-colors", children: "Get Free Quote" })] })] }) }) })] }), "); }; export default FAQ;"] })] }) })] }));
