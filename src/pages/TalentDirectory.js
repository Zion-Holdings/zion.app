import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { SEO } from '@/components/SEO';
const TalentDirectory = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');
    const talentCategories = [
        {
            id: 'all',
            name: 'All Talent',
            icon: '👥'
        },
        {
            id: 'developers',
            name: 'Developers',
            icon: '💻'
        },
        {
            id: 'designers',
            name: 'Designers',
            icon: '🎨'
        },
        {
            id: 'data-scientists',
            name: 'Data Scientists',
            icon: '📊'
        },
        {
            id: 'devops',
            name: 'DevOps Engineers',
            icon: '⚙️'
        },
        {
            id: 'product-managers',
            name: 'Product Managers',
            icon: '🎯'
        }
    ];
    const talent = [
        {
            id: 1,
            name: 'Sarah Chen',
            title: 'Senior Full-Stack Developer',
            category: 'developers',
            skills: ['React', 'Node.js', 'Python', 'AWS', 'MongoDB'],
            experience: '8 years',
            location: 'San Francisco, CA',
            rating: 4.9,
            hourlyRate: 85,
            availability: 'Available',
            image: '👩‍💻',
            description: 'Experienced full-stack developer specializing in modern web applications and cloud solutions.'
        },
        {
            id: 2,
            name: 'Michael Rodriguez',
            title: 'UI/UX Designer',
            category: 'designers',
            skills: ['Figma', 'Sketch', 'Adobe Creative Suite', 'Prototyping', 'User Research'],
            experience: '6 years',
            location: 'New York, NY',
            rating: 4.8,
            hourlyRate: 75,
            availability: 'Available',
            image: '👨‍🎨',
            description: 'Creative designer focused on user-centered design and creating intuitive digital experiences.'
        },
        {
            id: 3,
            name: 'Emily Watson',
            title: 'Data Scientist',
            category: 'data-scientists',
            skills: ['Python', 'R', 'Machine Learning', 'SQL', 'Tableau'],
            experience: '5 years',
            location: 'Austin, TX',
            rating: 4.9,
            hourlyRate: 90,
            availability: 'Available',
            image: '👩‍🔬',
            description: 'Data scientist with expertise in predictive analytics and business intelligence solutions.'
        },
        {
            id: 4,
            name: 'David Kim',
            title: 'DevOps Engineer',
            category: 'devops',
            skills: ['Docker', 'Kubernetes', 'AWS', 'CI/CD', 'Terraform'],
            experience: '7 years',
            location: 'Seattle, WA',
            rating: 4.7,
            hourlyRate: 80,
            availability: 'Available',
            image: '👨‍💻',
            description: 'DevOps specialist focused on infrastructure automation and cloud-native solutions.'
        },
        {
            id: 5,
            name: 'Lisa Thompson',
            title: 'Product Manager',
            category: 'product-managers',
            skills: ['Agile', 'Product Strategy', 'User Research', 'Analytics', 'Stakeholder Management'],
            experience: '9 years',
            location: 'Boston, MA',
            rating: 4.8,
            hourlyRate: 95,
            availability: 'Available',
            image: '👩‍💼',
            description: 'Strategic product manager with a track record of successful product launches and growth.'
        },
        {
            id: 6,
            name: 'James Wilson',
            title: 'Mobile Developer',
            category: 'developers',
            skills: ['React Native', 'iOS', 'Android', 'Flutter', 'Firebase'],
            experience: '6 years',
            location: 'Miami, FL',
            rating: 4.6,
            hourlyRate: 70,
            availability: 'Available',
            image: '👨‍💻',
            description: 'Mobile app developer specializing in cross-platform solutions and native development.'
        },
        {
            id: 7,
            name: 'Amanda Foster',
            title: 'Frontend Developer',
            category: 'developers',
            skills: ['React', 'Vue.js', 'TypeScript', 'CSS3', 'Webpack'],
            experience: '4 years',
            location: 'Denver, CO',
            rating: 4.7,
            hourlyRate: 65,
            availability: 'Available',
            image: '👩‍💻',
            description: 'Frontend developer passionate about creating responsive and accessible web applications.'
        },
        {
            id: 8,
            name: 'Robert Chen',
            title: 'Backend Developer',
            category: 'developers',
            skills: ['Java', 'Spring Boot', 'PostgreSQL', 'Redis', 'Microservices'],
            experience: '7 years',
            location: 'Chicago, IL',
            rating: 4.8,
            hourlyRate: 75,
            availability: 'Available',
            image: '👨‍💻',
            description: 'Backend developer with expertise in scalable architecture and database design.'
        }
    ];
    const filteredTalent = talent.filter(person => {
        const matchesSearch = person.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            person.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            person.skills.some(skill => skill.toLowerCase().includes(searchQuery.toLowerCase()));
        const matchesCategory = selectedCategory === 'all' || person.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });
    return (_jsxs(_Fragment, { children: [_jsx(SEO, { title: "Talent Directory - Find Tech Professionals - Zion Tech Group", description: "Browse our curated directory of top tech talent. Find developers, designers, data scientists, and other professionals for your projects.", canonical: "/talent-directory" }), _jsx("div", { className: "min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800", children: _jsx("main", { className: "pt-12", children: _jsxs("div", { className: "container mx-auto px-4 py-16", children: [_jsxs("div", { className: "text-center mb-16", children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold text-white mb-6", children: "Talent Directory" }), _jsx("p", { className: "text-xl text-blue-100 max-w-4xl mx-auto", children: "Connect with top tech professionals from around the world. Our curated directory features experienced developers, designers, data scientists, and other technology experts ready to help with your projects." })] }), _jsx("div", { className: "mb-12", children: _jsx("div", { className: "max-w-4xl mx-auto", children: _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "relative", children: [_jsx("input", { type: "text", placeholder: "Search by name, skills, or title...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-400" }), _jsx("svg", { className: "absolute right-3 top-3 w-5 h-5 text-blue-200", fill: "none", stroke: "currentColor", viewBox: "0 0 24 24", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) })] }), _jsx("select", { value: selectedCategory, onChange: (e) => setSelectedCategory(e.target.value), className: "px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-blue-400", children: talentCategories.map((category) => (_jsxs("option", { value: category.id, children: [category.icon, " ", category.name] }, category.id))) })] }) }) }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto", children: filteredTalent.map((person) => (_jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-6 hover:bg-white/20 transition-colors duration-200", children: [_jsxs("div", { className: "flex items-center mb-4", children: [_jsx("div", { className: "text-4xl mr-4", children: person.image }), _jsxs("div", { className: "flex-1", children: [_jsx("h3", { className: "text-xl font-semibold text-white", children: person.name }), _jsx("p", { className: "text-blue-200 text-sm", children: person.title })] })] }), _jsx("p", { className: "text-blue-100 mb-4 text-sm", children: person.description }), _jsx("div", { className: "mb-4", children: _jsx("span", { className: `inline-block px-3 py-1 rounded-full text-xs font-medium ${person.availability === 'Available'
                                                    ? 'bg-green-600/30 text-green-200'
                                                    : 'bg-red-600/30 text-red-200'}`, children: person.availability }) }), _jsxs("div", { className: "mb-4", children: [_jsx("h4", { className: "text-white font-medium mb-2 text-sm", children: "Skills:" }), _jsx("div", { className: "flex flex-wrap gap-2", children: person.skills.map((skill, skillIndex) => (_jsx("span", { className: "bg-blue-600/30 text-blue-200 px-2 py-1 rounded-full text-xs", children: skill }, skillIndex))) })] }), _jsxs("div", { className: "mb-4 space-y-2", children: [_jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "text-blue-200", children: "Experience:" }), _jsx("span", { className: "text-white", children: person.experience })] }), _jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "text-blue-200", children: "Location:" }), _jsx("span", { className: "text-white", children: person.location })] }), _jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "text-blue-200", children: "Rating:" }), _jsxs("span", { className: "text-white", children: ["\u2B50 ", person.rating] })] }), _jsxs("div", { className: "flex justify-between text-sm", children: [_jsx("span", { className: "text-blue-200", children: "Rate:" }), _jsxs("span", { className: "text-white", children: ["$", person.hourlyRate, "/hr"] })] })] }), _jsxs("div", { className: "flex gap-2", children: [_jsx("button", { className: "flex-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm", children: "View Profile" }), _jsx("button", { className: "flex-1 border border-white/30 hover:bg-white/10 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 text-sm", children: "Contact" })] })] }, person.id))) }), filteredTalent.length === 0 && (_jsxs("div", { className: "text-center py-16", children: [_jsx("div", { className: "text-6xl mb-4", children: "\uD83D\uDD0D" }), _jsx("h3", { className: "text-xl font-semibold text-white mb-2", children: "No talent found" }), _jsx("p", { className: "text-blue-100", children: "Try adjusting your search criteria or contact us for custom talent sourcing." })] })), _jsx("div", { className: "mt-20 max-w-4xl mx-auto", children: _jsxs("div", { className: "bg-white/10 backdrop-blur-sm rounded-lg border border-white/20 p-8 text-center", children: [_jsx("h2", { className: "text-3xl font-semibold text-white mb-4", children: "Need Custom Talent Solutions?" }), _jsx("p", { className: "text-blue-100 mb-6 text-lg", children: "Can't find the right talent? We can help source and vet professionals specifically for your project requirements." }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-4 justify-center", children: [_jsx("a", { href: "/contact", className: "bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg", children: "Contact Us" }), _jsx("a", { href: "/zion-hire-ai", className: "border border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg font-medium transition-colors duration-200 text-lg", children: "Try ZionHireAI" })] })] }) })] }) }) })] }));
};
export default TalentDirectory;
