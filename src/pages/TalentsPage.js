import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { SEO } from '@/components/SEO';
const TalentsPage = () => {
    const featuredTalents = [
        {
            id: 1,
            name: 'Sarah Chen',
            title: 'Senior Full-Stack Developer',
            image: '👩‍💻',
            location: 'San Francisco, CA',
            experience: '8 years',
            hourlyRate: 85,
            rating: 4.9,
            availability: 'Available',
            description: 'Experienced full-stack developer with expertise in modern web technologies and cloud solutions. Passionate about creating scalable, user-friendly applications.',
            skills: ['React', 'Node.js', 'Python', 'AWS', 'MongoDB', 'TypeScript', 'Docker', 'Kubernetes'],
            specialties: ['Web Applications', 'API Development', 'Cloud Architecture', 'Performance Optimization'],
            education: 'BS Computer Science, Stanford University',
            certifications: ['AWS Certified Developer', 'MongoDB Certified Developer', 'Google Cloud Professional'],
            languages: ['English', 'Mandarin'],
            portfolio: 'https://sarahchen.dev',
            linkedin: 'https://linkedin.com/in/sarahchen',
            github: 'https://github.com/sarahchen'
        },
        {
            id: 2,
            name: 'Michael Rodriguez',
            title: 'UI/UX Designer',
            image: '👨‍🎨',
            location: 'New York, NY',
            experience: '6 years',
            hourlyRate: 75,
            rating: 4.8,
            availability: 'Available',
            description: 'Creative designer focused on user-centered design and creating intuitive digital experiences. Expert in design systems and user research.',
            skills: ['Figma', 'Sketch', 'Adobe Creative Suite', 'Prototyping', 'User Research', 'Design Systems', 'Accessibility', 'Motion Design'],
            specialties: ['Mobile App Design', 'Web Design', 'Brand Identity', 'User Experience'],
            education: 'BFA Graphic Design, Parsons School of Design',
            certifications: ['Google UX Design Certificate', 'Accessibility Certification'],
            languages: ['English', 'Spanish'],
            portfolio: 'https://michaelrodriguez.design',
            linkedin: 'https://linkedin.com/in/michaelrodriguez',
            behance: 'https://behance.net/michaelrodriguez'
        },
        {
            id: 3,
            name: 'Emily Watson',
            title: 'Data Scientist',
            image: '👩‍🔬',
            location: 'Austin, TX',
            experience: '5 years',
            hourlyRate: 90,
            rating: 4.9,
            availability: 'Available',
            description: 'Data scientist with expertise in predictive analytics and business intelligence solutions. Passionate about turning data into actionable insights.',
            skills: ['Python', 'R', 'Machine Learning', 'SQL', 'Tableau', 'TensorFlow', 'PyTorch', 'Apache Spark'],
            specialties: ['Predictive Analytics', 'Business Intelligence', 'Machine Learning Models', 'Data Visualization'],
            education: 'MS Data Science, University of Texas',
            certifications: ['Google Data Analytics Certificate', 'AWS Machine Learning Specialty'],
            languages: ['English'],
            portfolio: 'https://emilywatson.tech',
            linkedin: 'https://linkedin.com/in/emilywatson',
            github: 'https://github.com/emilywatson'
        }
    ];
    const talentCategories = [
        {
            name: 'Frontend Developers',
            count: 24,
            icon: '💻',
            description: 'Experts in creating responsive and interactive user interfaces'
        },
        {
            name: 'Backend Developers',
            count: 18,
            icon: '⚙️',
            description: 'Specialists in server-side logic and database management'
        },
        {
            name: 'Full-Stack Developers',
            count: 32,
            icon: '🔄',
            description: 'Versatile developers handling both frontend and backend'
        },
        {
            name: 'Mobile Developers',
            count: 15,
            icon: '📱',
            description: 'iOS and Android app development specialists'
        },
        {
            name: 'UI/UX Designers',
            count: 12,
            icon: '🎨',
            description: 'Creative professionals focused on user experience'
        },
        {
            name: 'Data Scientists',
            count: 8,
            icon: '📊',
            description: 'Experts in data analysis and machine learning'
        },
        {
            name: 'DevOps Engineers',
            count: 14,
            icon: '🚀',
            description: 'Infrastructure and deployment specialists'
        },
        {
            name: 'Product Managers',
            count: 9,
            icon: '🎯',
            description: 'Strategic leaders driving product development'
        }
    ];
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Tech Talents - Professional Profiles - Zion Tech Group", description: "Explore detailed profiles of our curated tech talents. Find developers, designers, data scientists, and other professionals with verified skills and experience.", canonical: "/talents" }), _jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800", children: _jsx("main", { className: "pt-12", children: _jsxs("div", { className: "container mx-auto px-4 py-16", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Tech Talents" }), _jsx("p", { className: "text-xl text-blue-100 max-w-4xl mx-auto", children: "Discover our curated network of verified tech professionals. Each talent has been carefully vetted and brings proven expertise to help your projects succeed." })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Browse by Category" }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto", children: talentCategories.map((category, index) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 text-center hover:bg-white/20 transition-colors duration-200", children: [_jsx("div", { className: "text-4xl mb-3", children: category.icon }), _jsx("h3", { className: "text-lg font-semibold text-white mb-2", children: category.name }), _jsx("div", { className: "text-2xl font-bold text-blue-400 mb-2", children: category.count }), _jsx("p", { className: "text-blue-100 text-sm", children: category.description })] }, index))) })] }), _jsxs("div", { className: "mb-20", children: [_jsx("h2", { className: "text-3xl font-semibold text-white text-center mb-12", children: "Featured Talents" }), _jsx("div", { className: "space-y-8 max-w-4xl mx-auto", children: featuredTalents.map((talent) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 hover:bg-white/20 transition-colors duration-200", children: [_jsxs("div", { className: "flex items-start mb-6", children: [_jsx("div", { className: "text-6xl mr-6", children: talent.image }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "text-2xl font-semibold text-white mb-2", children: talent.name }), _jsx("p", { className: "text-xl text-blue-200 mb-2", children: talent.title }), _jsxs("div", { className: "flex items-center space-x-4 text-blue-100 text-sm", children: [_jsxs("span", { children: ["\uD83D\uDCCD ", talent.location] }), _jsxs("span", { children: ["\u23F1\uFE0F ", talent.experience] }), _jsxs("span", { children: ["\u2B50 ", talent.rating] }), _jsx("span", { className: `px-2 py-1 rounded-full text-xs font-medium ${talent.availability === 'Available'
                                                                                ? 'bg-green-600/30 text-green-200'
                                                                                : 'bg-red-600/30 text-red-200'}`, children: talent.availability })] })] }), _jsxs("div", { className: "text-right", children: [_jsxs("div", { className: "text-3xl font-bold text-blue-400", children: ["$", talent.hourlyRate] }), _jsx("div", { className: "text-blue-200 text-sm", children: "per hour" })] })] }), _jsx("p", { className: "text-blue-100 mb-6 text-lg", children: talent.description }), _jsxs("div", { className: "mb-6", children: [_jsx("h4", { className: "text-white font-semibold mb-3", children: "Key Skills:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: talent.skills.map((skill, skillIndex) => (_jsx("span", { className: "bg-blue-600/30 text-blue-200 px-3 py-1 rounded-full text-sm", children: skill }, skillIndex))) })] }), _jsxs("div", { className: "mb-6", children: [_jsx("h4", { className: "text-white font-semibold mb-3", children: "Specialties:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: talent.specialties.map((specialty, specialtyIndex) => (_jsx("span", { className: "bg-green-600/30 text-green-200 px-3 py-1 rounded-full text-sm", children: specialty }, specialtyIndex))) })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6 mb-6", children: [_jsxs("div", { children: [_jsx("h4", { className: "text-white font-semibold mb-2", children: "Education:" }), _jsx("p", { className: "text-blue-100 text-sm", children: talent.education })] }), _jsxs("div", { children: [_jsx("h4", { className: "text-white font-semibold mb-2", children: "Languages:" }), _jsx("p", { className: "text-blue-100 text-sm", children: talent.languages.join(', ') })] })] }), talent.certifications && (_jsxs("div", { className: "mb-6", children: [_jsx("h4", { className: "text-white font-semibold mb-3", children: "Certifications:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: talent.certifications.map((cert, certIndex) => (_jsx("span", { className: "bg-purple-600/30 text-purple-200 px-3 py-1 rounded-full text-sm", children: cert }, certIndex))) })] })), _jsxs("div", { className: "flex flex-wrap gap-4 mb-6", children: [talent.portfolio && (_jsx("a", { href: talent.portfolio, target: "_blank", rel: "noopener noreferrer", className: "text-blue-300 hover:text-blue-200 text-sm", children: "\uD83C\uDF10 Portfolio" })), talent.linkedin && (_jsx("a", { href: talent.linkedin, target: "_blank", rel: "noopener noreferrer", className: "text-blue-300 hover:text-blue-200 text-sm", children: "\uD83D\uDCBC LinkedIn" })), talent.github && (_jsx("a", { href: talent.github, target: "_blank", rel: "noopener noreferrer", className: "text-blue-300 hover:text-blue-200 text-sm", children: "\uD83D\uDCDA GitHub" })), talent.behance && (_jsx("a", { href: talent.behance, target: "_blank", rel: "noopener noreferrer", className: "text-blue-300 hover:text-blue-200 text-sm", children: "\uD83C\uDFA8 Behance" }))] }), _jsxs("div", { className: "flex gap-4", children: [_jsx("button", { className: "bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200", children: "View Full Profile" }), _jsx("button", { className: "border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200", children: "Contact Talent" }), _jsx("button", { className: "border border-white/30 hover:bg-white/10 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-200", children: "Request Quote" })] })] }, talent.id))) })] }), _jsx("div", { className: "max-w-4xl mx-auto", children: _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 text-center", children: [_jsx("h2", { className: "text-3xl font-semibold text-white mb-4", children: "Ready to Work with Our Talents?" }), _jsx("p", { className: "text-blue-100 mb-6 text-lg", children: "Browse our complete directory, get personalized recommendations, or let us help you find the perfect talent for your project." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "/talent-directory", className: "bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg", children: "Browse All Talents" }), _jsx("a", { href: "/zion-hire-ai", className: "border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg", children: "Try ZionHireAI" }), _jsx("a", { href: "/contact", className: "border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg", children: "Get Personalized Help" })] })] }) })] }) }) })] }));
};
export default TalentsPage;
