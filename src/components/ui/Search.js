import { jsxs as _jsxs, jsx as _jsx } from "react/jsx-runtime";
import { useState, useRef, useEffect, useCallback } from 'react';
import { Search as SearchIcon, Filter, X, ChevronDown, Clock, TrendingUp } from 'lucide-react';
export const Search = ({ placeholder = 'Search...', suggestions = [], filters = [], onSearch, onSuggestionClick, recentSearches = [], trendingSearches = [], className = '', size = 'md', showFilters = true, showSuggestions = true }) => {
    const [query, setQuery] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [showFiltersPanel, setShowFiltersPanel] = useState(false);
    const [activeFilters, setActiveFilters] = useState({});
    const [filterValues, setFilterValues] = useState({});
    const searchRef = useRef(null);
    const sizeClasses = {
        sm: 'h-8 text-sm',
        md: 'h-10 text-base',
        lg: 'h-12 text-lg'
    };
    const iconSizes = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6'
    };
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setIsFocused(false);
                setShowFiltersPanel(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const handleSearch = useCallback(() => {
        if (query.trim()) {
            onSearch(query.trim(), activeFilters);
            setIsFocused(false);
        }
    }, [query, activeFilters, onSearch]);
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            handleSearch();
        }
    };
    const handleSuggestionClick = (suggestion) => {
        setQuery(suggestion.text);
        onSuggestionClick === null || onSuggestionClick === void 0 ? void 0 : onSuggestionClick(suggestion);
        handleSearch();
    };
    const handleFilterChange = (filterId, value) => {
        setFilterValues(prev => (Object.assign(Object.assign({}, prev), { [filterId]: value })));
        if (value !== undefined && value !== '') {
            setActiveFilters(prev => (Object.assign(Object.assign({}, prev), { [filterId]: value })));
        }
        else {
            setActiveFilters(prev => {
                const newFilters = Object.assign({}, prev);
                delete newFilters[filterId];
                return newFilters;
            });
        }
    };
    const clearFilters = () => {
        setActiveFilters({});
        setFilterValues({});
    };
    const getActiveFiltersCount = () => Object.keys(activeFilters).length;
    const renderFilterInput = (filter) => {
        var _a, _b, _c, _d;
        switch (filter.type) {
            case 'select':
                return (_jsxs("select", { value: filterValues[filter.id] || '', onChange: (e) => handleFilterChange(filter.id, e.target.value), className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500", children: [_jsxs("option", { value: "", children: ["Select ", filter.label] }), (_a = filter.options) === null || _a === void 0 ? void 0 : _a.map(option => (_jsx("option", { value: option.value, children: option.label }, option.value)))] }));
            case 'checkbox':
                return (_jsx("div", { className: "space-y-2", children: (_b = filter.options) === null || _b === void 0 ? void 0 : _b.map(option => {
                        var _a;
                        return (_jsxs("label", { className: "flex items-center space-x-2", children: [_jsx("input", { type: "checkbox", checked: ((_a = filterValues[filter.id]) === null || _a === void 0 ? void 0 : _a.includes(option.value)) || false, onChange: (e) => {
                                        const currentValues = filterValues[filter.id] || [];
                                        const newValues = e.target.checked
                                            ? [...currentValues, option.value]
                                            : currentValues.filter(v => v !== option.value);
                                        handleFilterChange(filter.id, newValues);
                                    }, className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500" }), _jsx("span", { className: "text-sm text-gray-700", children: option.label })] }, option.value));
                    }) }));
            case 'range':
                return (_jsx("div", { className: "space-y-2", children: _jsxs("div", { className: "flex space-x-2", children: [_jsx("input", { type: "number", placeholder: "Min", min: filter.min, max: filter.max, value: ((_c = filterValues[filter.id]) === null || _c === void 0 ? void 0 : _c.min) || '', onChange: (e) => {
                                    const currentRange = filterValues[filter.id] || {};
                                    handleFilterChange(filter.id, Object.assign(Object.assign({}, currentRange), { min: e.target.value }));
                                }, className: "flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" }), _jsx("input", { type: "number", placeholder: "Max", min: filter.min, max: filter.max, value: ((_d = filterValues[filter.id]) === null || _d === void 0 ? void 0 : _d.max) || '', onChange: (e) => {
                                    const currentRange = filterValues[filter.id] || {};
                                    handleFilterChange(filter.id, Object.assign(Object.assign({}, currentRange), { max: e.target.value }));
                                }, className: "flex-1 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" })] }) }));
            case 'date':
                return (_jsx("input", { type: "date", value: filterValues[filter.id] || '', onChange: (e) => handleFilterChange(filter.id, e.target.value), className: "w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500" }));
            default:
                return null;
        }
    };
    const renderSuggestions = () => {
        if (!showSuggestions || !isFocused)
            return null;
        const allSuggestions = [
            ...recentSearches.map(search => ({
                id: `recent-${search}`,
                text: search,
                type: 'recent',
                icon: _jsx(Clock, { className: "w-4 h-4 text-gray-400" })
            })),
            ...trendingSearches.map(search => ({
                id: `trending-${search}`,
                text: search,
                type: 'trending',
                icon: _jsx(TrendingUp, { className: "w-4 h-4 text-green-400" })
            })),
            ...suggestions
        ];
        if (allSuggestions.length === 0)
            return null;
        return (_jsx("div", { className: "absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50", children: _jsx("div", { className: "py-2", children: allSuggestions.map((suggestion) => (_jsxs("button", { onClick: () => handleSuggestionClick(suggestion), className: "w-full px-4 py-2 text-left hover:bg-gray-50 flex items-center space-x-3", children: [suggestion.icon, _jsx("span", { className: "flex-1", children: suggestion.text }), suggestion.category && (_jsx("span", { className: "text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded", children: suggestion.category }))] }, suggestion.id))) }) }));
    };
    const renderFiltersPanel = () => {
        if (!showFiltersPanel || filters.length === 0)
            return null;
        return (_jsxs("div", { className: "absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-50 p-4", children: [_jsxs("div", { className: "flex items-center justify-between mb-4", children: [_jsx("h3", { className: "text-lg font-medium text-gray-900", children: "Filters" }), _jsx("button", { onClick: clearFilters, className: "text-sm text-gray-500 hover:text-gray-700", children: "Clear all" })] }), _jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4", children: filters.map(filter => (_jsxs("div", { className: "space-y-2", children: [_jsx("label", { className: "block text-sm font-medium text-gray-700", children: filter.label }), renderFilterInput(filter)] }, filter.id))) }), _jsx("div", { className: "mt-4 pt-4 border-t border-gray-200", children: _jsx("button", { onClick: () => setShowFiltersPanel(false), className: "w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors", children: "Apply Filters" }) })] }));
    };
    return (_jsxs("div", { className: `relative ${className}`, ref: searchRef, children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none", children: _jsx(SearchIcon, { className: `${iconSizes[size]} text-gray-400` }) }), _jsx("input", { type: "text", value: query, onChange: (e) => setQuery(e.target.value), onKeyPress: handleKeyPress, onFocus: () => setIsFocused(true), placeholder: placeholder, className: `
            w-full pl-10 pr-20 border border-gray-300 rounded-lg
            focus:ring-2 focus:ring-blue-500 focus:border-blue-500
            transition-colors ${sizeClasses[size]}
          ` }), showFilters && filters.length > 0 && (_jsxs("button", { onClick: () => setShowFiltersPanel(!showFiltersPanel), className: `
              absolute inset-y-0 right-0 px-3 flex items-center
              ${getActiveFiltersCount() > 0 ? 'text-blue-600' : 'text-gray-400'}
              hover:text-blue-600 transition-colors
            `, children: [_jsx(Filter, { className: `${iconSizes[size]} mr-1` }), getActiveFiltersCount() > 0 && (_jsx("span", { className: "bg-blue-100 text-blue-800 text-xs rounded-full px-2 py-1 min-w-[20px] text-center", children: getActiveFiltersCount() })), _jsx(ChevronDown, { className: `${iconSizes[size]} ml-1 transition-transform ${showFiltersPanel ? 'rotate-180' : ''}` })] })), query && (_jsx("button", { onClick: () => setQuery(''), className: "absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600", children: _jsx(X, { className: `${iconSizes[size]}` }) }))] }), renderSuggestions(), renderFiltersPanel()] }));
};
