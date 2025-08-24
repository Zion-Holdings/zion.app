import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { SEO } from "@/components/SEO";
import { GradientHeading } from "@/components/GradientHeading";
import { Button } from "@/components/ui/Button";
import { Card, CardContent } from "@/components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
export default function Careers() {
    // Sample job listings
    const jobs = {
        engineering: [
            {
                title: "Senior Frontend Engineer",
                location: "Remote",
                type: "Full-time",
                department: "Engineering",
                description: "Join our frontend team to build beautiful, responsive, and accessible user interfaces for our AI-powered marketplace."
            },
            {
                title: "AI Research Engineer",
                location: "San Francisco, CA",
                type: "Full-time",
                department: "Engineering",
                description: "Work on cutting-edge AI technologies to power our matching algorithms and recommendation systems."
            },
            {
                title: "Full Stack Developer",
                location: "Remote",
                type: "Full-time",
                department: "Engineering",
                description: "Develop end-to-end features across our platform, working with modern technologies like React, Node.js, and PostgreSQL."
            }
        ],
        product: [
            {
                title: "Product Manager",
                location: "New York, NY",
                type: "Full-time",
                department: "Product",
                description: "Lead product development initiatives to enhance our marketplace experience for both talent and clients."
            },
            {
                title: "UX/UI Designer",
                location: "Remote",
                type: "Full-time",
                department: "Product",
                description: "Create intuitive and engaging user experiences that make complex technology accessible to all users."
            }
        ],
        marketing: [
            {
                title: "Growth Marketing Manager",
                location: "Remote",
                type: "Full-time",
                department: "Marketing",
                description: "Drive user acquisition and engagement strategies across multiple channels to grow our marketplace."
            },
            {
                title: "Content Strategist",
                location: "London, UK",
                type: "Full-time",
                department: "Marketing",
                description: "Develop compelling content that educates and inspires our audience about the future of AI and technology."
            }
        ],
        operations: [
            {
                title: "Community Manager",
                location: "Remote",
                type: "Full-time",
                department: "Operations",
                description: "Build and nurture our growing community of AI specialists, developers, and tech enthusiasts."
            },
            {
                title: "Talent Acquisition Specialist",
                location: "Remote",
                type: "Full-time",
                department: "Operations",
                description: "Help connect the right talent with the right opportunities on our platform through personalized matching."
            }
        ]
    };
    // Benefits list
    const benefits = [
        {
            title: "Flexible Work",
            description: "Remote-first culture with flexible hours to support your productivity and work-life balance.",
            icon: (_jsx("svg", { className: "w-10 h-10 text-zion-cyan", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" }) }))
        },
        {
            title: "Health & Wellness",
            description: "Comprehensive health insurance and wellness programs to keep you at your best.",
            icon: (_jsx("svg", { className: "w-10 h-10 text-zion-purple", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" }) }))
        },
        {
            title: "Continuous Learning",
            description: "Education stipends and dedicated learning time to help you grow professionally.",
            icon: (_jsx("svg", { className: "w-10 h-10 text-zion-cyan", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" }) }))
        },
        {
            title: "Competitive Compensation",
            description: "Salary packages that recognize your value, plus equity options to share in our success.",
            icon: (_jsx("svg", { className: "w-10 h-10 text-zion-purple", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" }) }))
        }
    ];
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Careers at Zion - Join Our Team", description: "Join the team building the future of AI and technology. Explore career opportunities at Zion's innovative marketplace platform.", keywords: "Zion careers, AI jobs, tech careers, remote work, startup jobs", canonical: "https://ziontechgroup.com/careers" }), _jsx("main", { className: "min-h-screen bg-zion-blue pt-24 pb-20", children: _jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx(GradientHeading, { children: "Join Our Team" }), _jsx("p", { className: "mt-4 text-zion-slate-light text-xl max-w-3xl mx-auto", children: "Help us build the future of AI and technology" })] }), _jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24", children: [_jsxs("div", { children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-6", children: "Why Work at Zion?" }), _jsx("p", { className: "text-zion-slate-light text-lg mb-6", children: "At Zion, we're not just building a marketplace; we're creating a new paradigm for how AI and technology are accessed, shared, and implemented globally." }), _jsx("p", { className: "text-zion-slate-light text-lg mb-6", children: "Our team is passionate about democratizing access to cutting-edge technology and connecting talented individuals with meaningful opportunities. We value innovation, collaboration, and impact in everything we do." }), _jsx("p", { className: "text-zion-slate-light text-lg", children: "If you're excited about shaping the future of AI and technology while working in a dynamic, remote-first environment with a mission-driven team, we'd love to meet you." })] }), _jsx("div", { className: "rounded-lg overflow-hidden", children: _jsx("img", { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=600", alt: "Team collaboration", className: "object-cover w-full h-full" }) })] }), _jsxs("div", { className: "mb-24", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-12 text-center", children: "Our Benefits" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", children: benefits.map((benefit, index) => (_jsxs("div", { className: "bg-zion-blue-dark p-8 rounded-lg border border-zion-blue-light", children: [_jsx("div", { className: "bg-zion-blue inline-flex p-4 rounded-full mb-4", children: benefit.icon }), _jsx("h3", { className: "text-xl font-bold text-white mb-3", children: benefit.title }), _jsx("p", { className: "text-zion-slate-light", children: benefit.description })] }, index))) })] }), _jsxs("div", { className: "mb-24", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-12 text-center", children: "Open Positions" }), _jsxs(Tabs, { defaultValue: "engineering", className: "w-full", children: [_jsxs(TabsList, { className: "bg-zion-blue-dark border border-zion-blue-light mb-8 w-full flex flex-wrap justify-center", children: [_jsx(TabsTrigger, { value: "engineering", className: "data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple", children: "Engineering" }), _jsx(TabsTrigger, { value: "product", className: "data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple", children: "Product" }), _jsx(TabsTrigger, { value: "marketing", className: "data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple", children: "Marketing" }), _jsx(TabsTrigger, { value: "operations", className: "data-[state=active]:bg-zion-purple/20 data-[state=active]:text-zion-purple", children: "Operations" })] }), Object.entries(jobs).map(([department, jobList]) => (_jsx(TabsContent, { value: department, className: "space-y-6", children: jobList.map((job, index) => (_jsx(Card, { className: "bg-zion-blue-dark border border-zion-blue-light hover:border-zion-purple transition-colors", children: _jsx(CardContent, { className: "p-6", children: _jsxs("div", { className: "flex flex-col md:flex-row md:items-center md:justify-between", children: [_jsxs("div", { children: [_jsx("h3", { className: "text-xl font-bold text-white mb-2", children: job.title }), _jsxs("div", { className: "flex flex-wrap gap-2 mb-4", children: [_jsx("span", { className: "text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full", children: job.location }), _jsx("span", { className: "text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full", children: job.type }), _jsx("span", { className: "text-xs text-zion-slate-light bg-zion-blue px-2 py-1 rounded-full", children: job.department })] }), _jsx("p", { className: "text-zion-slate-light mb-4", children: job.description })] }), _jsx(Button, { className: "w-full md:w-auto mt-4 md:mt-0 bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple", children: "Apply Now" })] }) }) }, index))) }, department)))] })] }), _jsxs("div", { className: "bg-gradient-to-r from-zion-blue-dark to-zion-blue-light border border-zion-purple/30 rounded-xl p-8 md:p-12 text-center", children: [_jsx("h2", { className: "text-3xl font-bold text-white mb-6", children: "Don't see the right position?" }), _jsx("p", { className: "text-zion-slate-light text-lg mb-8 max-w-2xl mx-auto", children: "We're always looking for talented individuals who are passionate about AI and technology. Send us your resume and let's start a conversation." }), _jsx(Button, { className: "bg-gradient-to-r from-zion-purple to-zion-purple-dark hover:from-zion-purple-light hover:to-zion-purple", children: "Send General Application" })] })] }) })] }));
}
