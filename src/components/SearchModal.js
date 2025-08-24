import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { Search, X, Clock, MapPin, Star, Users, Briefcase, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Badge } from '@/components/ui/Badge';
import { Card, CardContent } from '@/components/ui/Card';
export function SearchModal({ isOpen, onClose }) {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [activeFilter, setActiveFilter] = useState('all');
    const [recentSearches, setRecentSearches] = useState([]);
    const searchInputRef = useRef(null);
    const mockSearchResults = [
        {
            id: '1',
            type: 'service',
            title: 'AI-Powered IT Solutions',
            description: 'Comprehensive AI-driven IT infrastructure and consulting services',
            url: '/services/ai-it-solutions',
            category: 'IT Services',
            tags: ['AI', 'IT', 'Infrastructure', 'Consulting'],
            rating: 4.8,
            price: 'Starting at $5,000'
        },
        {
            id: '2',
            type: 'talent',
            title: 'Senior AI Engineer',
            description: 'Experienced AI engineer with 8+ years in machine learning and deep learning',
            url: '/talent/ai-engineer-001',
            category: 'Engineering',
            tags: ['AI', 'Machine Learning', 'Python', 'TensorFlow'],
            rating: 4.9,
            location: 'San Francisco, CA'
        },
        {
            id: '3',
            type: 'equipment',
            title: 'High-Performance GPU Server',
            description: 'Enterprise-grade GPU server for AI/ML workloads',
            url: '/equipment/gpu-server-001',
            category: 'Hardware',
            tags: ['GPU', 'Server', 'AI', 'ML'],
            price: '$15,000'
        },
        {
            id: '4',
            type: 'page',
            title: 'Cybersecurity Services',
            description: 'Comprehensive cybersecurity solutions for enterprise protection',
            url: '/services/cybersecurity',
            category: 'Security',
            tags: ['Security', 'Cybersecurity', 'Enterprise', 'Protection']
        }
    ];
    useEffect(() => {
        if (isOpen && searchInputRef.current) {
            searchInputRef.current.focus();
        }
    }, [isOpen]);
    useEffect(() => {
        if (query.trim()) {
            performSearch();
        }
        else {
            setResults([]);
        }
    }, [query, activeFilter]);
    const performSearch = async () => {
        setIsLoading(true);
        // Simulate API call delay
        await new Promise(resolve => setTimeout(resolve, 300));
        // Filter results based on query and active filter
        const filteredResults = mockSearchResults.filter(result => {
            const matchesQuery = result.title.toLowerCase().includes(query.toLowerCase()) ||
                result.description.toLowerCase().includes(query.toLowerCase()) ||
                result.tags.some(tag => tag.toLowerCase().includes(query.toLowerCase()));
            const matchesFilter = activeFilter === 'all' || result.type === activeFilter;
            return matchesQuery && matchesFilter;
        });
        setResults(filteredResults);
        setIsLoading(false);
    };
    const handleSearch = (searchQuery) => {
        if (searchQuery.trim()) {
            setQuery(searchQuery);
            addToRecentSearches(searchQuery);
        }
    };
    const addToRecentSearches = (searchQuery) => {
        setRecentSearches(prev => {
            const filtered = prev.filter(s => s !== searchQuery);
            return [searchQuery, ...filtered].slice(0, 5);
        });
    };
    const getTypeIcon = (type) => {
        switch (type) {
            case 'service':
                return _jsx(Briefcase, { className: "h-4 w-4" });
            case 'talent':
                return _jsx(Users, { className: "h-4 w-4" });
            case 'equipment':
                return _jsx(ShoppingCart, { className: "h-4 w-4" });
            case 'page':
                return _jsx(Search, { className: "h-4 w-4" });
            default:
                return _jsx(Search, { className: "h-4 w-4" });
        }
    };
    const getTypeColor = (type) => {
        switch (type) {
            case 'service':
                return 'bg-blue-100 text-blue-700';
            case 'talent':
                return 'bg-green-100 text-green-700';
            case 'equipment':
                return 'bg-purple-100 text-purple-700';
            case 'page':
                return 'bg-gray-100 text-gray-700';
            default:
                return 'bg-gray-100 text-gray-700';
        }
    };
    if (!isOpen)
        return null;
    return (_jsx("div", { className: "fixed inset-0 z-50 bg-black/50 backdrop-blur-sm", children: _jsx("div", { className: "flex items-start justify-center pt-20 px-4", children: _jsxs("div", { className: "bg-white rounded-lg shadow-2xl w-full max-w-4xl max-h-[80vh] overflow-hidden", children: [_jsxs("div", { className: "flex items-center justify-between p-6 border-b border-gray-200", children: [_jsx("div", { className: "flex-1 max-w-2xl", children: _jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" }), _jsx(Input, { ref: searchInputRef, type: "text", placeholder: "Search for services, talent, equipment, or pages...", value: query, onChange: (e) => setQuery(e.target.value), className: "pl-10 pr-4 py-3 text-lg border-0 focus:ring-2 focus:ring-zion-blue" })] }) }), _jsx(Button, { variant: "ghost", size: "sm", onClick: onClose, className: "ml-4 p-2 hover:bg-gray-100", children: _jsx(X, { className: "h-6 w-6" }) })] }), _jsx("div", { className: "px-6 py-4 border-b border-gray-200", children: _jsxs("div", { className: "flex items-center space-x-4", children: [_jsx("span", { className: "text-sm font-medium text-gray-700", children: "Filter by:" }), [
                                    { key: 'all', label: 'All' },
                                    { key: 'service', label: 'Services' },
                                    { key: 'talent', label: 'Talent' },
                                    { key: 'equipment', label: 'Equipment' },
                                    { key: 'page', label: 'Pages' }
                                ].map(filter => (_jsx("button", { onClick: () => setActiveFilter(filter.key), className: `px-3 py-1 rounded-full text-sm font-medium transition-colors ${activeFilter === filter.key
                                        ? 'bg-zion-blue text-white'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`, children: filter.label }, filter.key)))] }) }), _jsx("div", { className: "overflow-y-auto max-h-[60vh]", children: query.trim() ? (_jsx("div", { className: "p-6", children: isLoading ? (_jsxs("div", { className: "text-center py-8", children: [_jsx("div", { className: "animate-spin rounded-full h-8 w-8 border-b-2 border-zion-blue mx-auto" }), _jsx("p", { className: "mt-2 text-gray-600", children: "Searching..." })] })) : results.length > 0 ? (_jsx("div", { className: "space-y-4", children: results.map(result => (_jsx(Card, { className: "hover:shadow-md transition-shadow cursor-pointer", children: _jsx(CardContent, { className: "p-4", children: _jsxs("div", { className: "flex items-start space-x-4", children: [_jsx("div", { className: `p-2 rounded-lg ${getTypeColor(result.type)}`, children: getTypeIcon(result.type) }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "flex items-center space-x-2 mb-2", children: [_jsx("h3", { className: "font-semibold text-gray-900", children: result.title }), _jsx(Badge, { variant: "secondary", className: "text-xs", children: result.category })] }), _jsx("p", { className: "text-gray-600 text-sm mb-3", children: result.description }), _jsxs("div", { className: "flex items-center space-x-4 text-sm text-gray-500", children: [result.rating && (_jsxs("div", { className: "flex items-center space-x-1", children: [_jsx(Star, { className: "h-4 w-4 text-yellow-400 fill-current" }), _jsx("span", { children: result.rating })] })), result.location && (_jsxs("div", { className: "flex items-center space-x-1", children: [_jsx(MapPin, { className: "h-4 w-4" }), _jsx("span", { children: result.location })] })), result.price && (_jsx("div", { className: "flex items-center space-x-1", children: _jsx("span", { className: "font-medium text-green-600", children: result.price }) }))] }), _jsx("div", { className: "flex flex-wrap gap-2 mt-3", children: result.tags.slice(0, 3).map(tag => (_jsx("span", { className: "px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded", children: tag }, tag))) })] })] }) }) }, result.id))) })) : (_jsxs("div", { className: "text-center py-8", children: [_jsx(Search, { className: "h-12 w-12 text-gray-400 mx-auto mb-4" }), _jsx("h3", { className: "text-lg font-medium text-gray-900 mb-2", children: "No results found" }), _jsx("p", { className: "text-gray-600", children: "Try adjusting your search terms or filters" })] })) })) : (_jsxs("div", { className: "p-6", children: [recentSearches.length > 0 && (_jsxs("div", { className: "mb-6", children: [_jsx("h3", { className: "text-sm font-medium text-gray-700 mb-3", children: "Recent Searches" }), _jsx("div", { className: "flex flex-wrap gap-2", children: recentSearches.map((search, index) => (_jsxs("button", { onClick: () => handleSearch(search), className: "px-3 py-2 bg-gray-100 text-gray-700 rounded-lg text-sm hover:bg-gray-200 transition-colors flex items-center space-x-2", children: [_jsx(Clock, { className: "h-4 w-4" }), _jsx("span", { children: search })] }, index))) })] })), _jsxs("div", { children: [_jsx("h3", { className: "text-sm font-medium text-gray-700 mb-3", children: "Popular Searches" }), _jsx("div", { className: "grid grid-cols-2 gap-3", children: [
                                                'AI Services',
                                                'Cybersecurity',
                                                'Tech Talent',
                                                'Cloud Solutions',
                                                'Data Analytics',
                                                'IT Consulting'
                                            ].map((search, index) => (_jsx("button", { onClick: () => handleSearch(search), className: "p-3 bg-gray-50 text-gray-700 rounded-lg text-sm hover:bg-gray-100 transition-colors text-left", children: search }, index))) })] })] })) }), _jsx("div", { className: "px-6 py-4 border-t border-gray-200 bg-gray-50", children: _jsxs("div", { className: "flex items-center justify-between text-sm text-gray-500", children: [_jsx("span", { children: "Press Esc to close" }), _jsx("span", { children: "Use \u2191\u2193 to navigate, Enter to select" })] }) })] }) }) }));
}
