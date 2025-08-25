import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { SEO } from '@/components/SEO';
const Privacy = () => {
    const privacySections = [
        {
            title: 'Information We Collect',
            content: [
                'Personal information (name, email, phone number, company)',
                'Technical information (IP address, browser type, device information)',
                'Usage data (pages visited, time spent, interactions)',
                'Communication records (emails, support tickets, chat logs)'
            ]
        },
        {
            title: 'How We Use Your Information',
            content: [
                'Provide and improve our services',
                'Communicate with you about projects and updates',
                'Process payments and manage accounts',
                'Send marketing communications (with your consent)',
                'Analyze usage patterns to enhance user experience',
                'Comply with legal obligations'
            ]
        },
        {
            title: 'Information Sharing',
            content: [
                'We do not sell, trade, or rent your personal information',
                'Information may be shared with trusted service providers',
                'Data may be disclosed if required by law',
                'Aggregated, anonymized data may be used for analytics'
            ]
        },
        {
            title: 'Data Security',
            content: [
                'Industry-standard encryption for data transmission',
                'Secure servers with regular security audits',
                'Access controls and authentication measures',
                'Regular backups and disaster recovery procedures',
                'Employee training on data protection'
            ]
        },
        {
            title: 'Your Rights',
            content: [
                'Access and review your personal information',
                'Request corrections to inaccurate data',
                'Request deletion of your personal information',
                'Opt-out of marketing communications',
                'Data portability requests',
                'Lodge complaints with supervisory authorities'
            ]
        },
        {
            title: 'Cookies and Tracking',
            content: [
                'Essential cookies for website functionality',
                'Analytics cookies to understand usage patterns',
                'Marketing cookies for personalized content',
                'You can control cookie preferences in your browser',
                'Third-party services may use their own cookies'
            ]
        }
    ];
    const dataRetention = [
        {
            category: 'Account Information',
            retention: 'Until account deletion or 7 years after last activity'
        },
        {
            category: 'Project Data',
            retention: '7 years after project completion for legal compliance'
        },
        {
            category: 'Communication Records',
            retention: '3 years after last interaction'
        },
        {
            category: 'Analytics Data',
            retention: '2 years in aggregated, anonymized form'
        },
        {
            category: 'Marketing Data',
            retention: 'Until consent withdrawal or 2 years of inactivity'
        }
    ];
    const contactInfo = {
        email: 'privacy@ziontechgroup.com',
        phone: '+1-555-ZION-TECH',
        address: '123 Tech Street, Innovation City, IC 12345',
        dpo: 'Data Protection Officer, Zion Tech Group'
    };
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Privacy Policy - Zion Tech Group", description: "Learn about how Zion Tech Group collects, uses, and protects your personal information. Our comprehensive privacy policy ensures transparency and data protection.", canonical: "/privacy" }), _jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800", children: _jsx("main", { className: "pt-12", children: _jsxs("div", { className: "container mx-auto px-4 py-16", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Privacy Policy" }), _jsx("p", { className: "text-xl text-blue-100 max-w-4xl mx-auto", children: "At Zion Tech Group, we are committed to protecting your privacy and ensuring the security of your personal information. This policy explains how we collect, use, and safeguard your data." }), _jsxs("p", { className: "text-blue-200 mt-4", children: ["Last updated: ", new Date().toLocaleDateString('en-US', {
                                                year: 'numeric',
                                                month: 'long',
                                                day: 'numeric'
                                            })] })] }), _jsx("div", { className: "max-w-4xl mx-auto mb-16", children: _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8", children: [_jsx("h2", { className: "text-2xl font-semibold text-white mb-4", children: "Our Commitment to Privacy" }), _jsx("p", { className: "text-blue-100 mb-4", children: "Zion Tech Group (\"we,\" \"our,\" or \"us\") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our services, or interact with us." }), _jsx("p", { className: "text-blue-100", children: "By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services." })] }) }), _jsx("div", { className: "space-y-8 max-w-6xl mx-auto mb-16", children: privacySections.map((section, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8", children: [_jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: section.title }), _jsx("ul", { className: "space-y-2", children: section.content.map((item, itemIndex) => (_jsxs("li", { className: "text-blue-100 flex items-start", children: [_jsx("span", { className: "text-blue-400 mr-2 mt-1", children: "\u2022" }), item] }, itemIndex))) })] }, index))) }), _jsxs("div", { className: "mb-16", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Data Retention Periods" }), _jsx("div", { className: "max-w-4xl mx-auto", children: _jsx("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8", children: _jsx("div", { className: "space-y-4", children: dataRetention.map((item, index) => (_jsxs("div", { className: "flex justify-between items-center py-3 border-b border-white/10 last:border-b-0", children: [_jsx("span", { className: "text-white font-medium", children: item.category }), _jsx("span", { className: "text-blue-200 text-sm", children: item.retention })] }, index))) }) }) })] }), _jsx("div", { className: "mb-16", children: _jsx("div", { className: "max-w-4xl mx-auto", children: _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8", children: [_jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "International Data Transfers" }), _jsx("p", { className: "text-blue-100 mb-4", children: "Your information may be transferred to and processed in countries other than your own. We ensure that such transfers comply with applicable data protection laws and implement appropriate safeguards to protect your information." }), _jsx("p", { className: "text-blue-100", children: "For transfers to countries outside the European Economic Area (EEA), we rely on adequacy decisions, standard contractual clauses, or other appropriate safeguards as required by applicable law." })] }) }) }), _jsx("div", { className: "mb-16", children: _jsx("div", { className: "max-w-4xl mx-auto", children: _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8", children: [_jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Children's Privacy" }), _jsx("p", { className: "text-blue-100", children: "Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us immediately." })] }) }) }), _jsx("div", { className: "mb-16", children: _jsx("div", { className: "max-w-4xl mx-auto", children: _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8", children: [_jsx("h3", { className: "text-xl font-semibold text-white mb-4", children: "Changes to This Privacy Policy" }), _jsx("p", { className: "text-blue-100 mb-4", children: "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the \"Last updated\" date." }), _jsx("p", { className: "text-blue-100", children: "We encourage you to review this Privacy Policy periodically for any changes. Your continued use of our services after any changes constitutes acceptance of the updated policy." })] }) }) }), _jsx("div", { className: "max-w-4xl mx-auto", children: _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 text-center", children: [_jsx("h2", { className: "text-3xl font-semibold text-white mb-6", children: "Contact Us" }), _jsx("p", { className: "text-blue-100 mb-6", children: "If you have any questions about this Privacy Policy or our data practices, please contact us:" }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 text-left", children: [_jsxs("div", { children: [_jsx("h4", { className: "text-white font-semibold mb-2", children: "Email:" }), _jsx("p", { className: "text-blue-200", children: contactInfo.email })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-white font-semibold mb-2", children: "Phone:" }), _jsx("p", { className: "text-blue-200", children: contactInfo.phone })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-white font-semibold mb-2", children: "Address:" }), _jsx("p", { className: "text-blue-200", children: contactInfo.address })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-white font-semibold mb-2", children: "Data Protection Officer:" }), _jsx("p", { className: "text-blue-200", children: contactInfo.dpo })] })] }), _jsx("div", { className: "mt-8", children: _jsx("a", { href: "/contact", className: "bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg", children: "Contact Us" }) })] }) })] }) }) })] }));
};
export default Privacy;
