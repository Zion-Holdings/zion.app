import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import { Search, X } from 'lucide-react';
import { Input } from '@/components/ui/Input';
export function EnhancedSearchInput({ value, onChange, onSelectSuggestion, searchSuggestions, placeholder = "Search...", className = "" }) {
    const [isOpen, setIsOpen] = useState(false);
    const [filteredSuggestions, setFilteredSuggestions] = useState([]);
    const wrapperRef = useRef(null);
    useEffect(() => {
        if (value.trim()) {
            const filtered = searchSuggestions.filter(suggestion => suggestion.text.toLowerCase().includes(value.toLowerCase())).slice(0, 5);
            setFilteredSuggestions(filtered);
            setIsOpen(filtered.length > 0);
        }
        else {
            setFilteredSuggestions([]);
            setIsOpen(false);
        }
    }, [value, searchSuggestions]);
    useEffect(() => {
        function handleClickOutside(event) {
            if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const handleSuggestionClick = (suggestion) => {
        onSelectSuggestion(suggestion.text);
        setIsOpen(false);
    };
    const handleClear = () => {
        onChange('');
        setIsOpen(false);
    };
    const getTypeIcon = (type) => {
        switch (type) {
            case 'talent':
                return '👤';
            case 'service':
                return '🔧';
            case 'equipment':
                return '💻';
            case 'category':
                return '📁';
            default:
                return '🔍';
        }
    };
    return (_jsxs("div", { ref: wrapperRef, className: `relative ${className}`, children: [_jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-zion-slate-light" }), _jsx(Input, { type: "text", value: value, onChange: (e) => onChange(e.target.value), placeholder: placeholder, className: "pl-10 pr-10 bg-zion-blue border-zion-blue-light text-white placeholder:text-zion-slate-light focus:border-zion-cyan", onFocus: () => value.trim() && filteredSuggestions.length > 0 && setIsOpen(true) }), value && (_jsx("button", { onClick: handleClear, className: "absolute right-3 top-1/2 transform -translate-y-1/2 text-zion-slate-light hover:text-white transition-colors", "aria-label": "Clear search", children: _jsx(X, { className: "h-4 w-4" }) }))] }), isOpen && filteredSuggestions.length > 0 && (_jsx("div", { className: "absolute top-full left-0 right-0 mt-1 bg-zion-blue-dark border border-zion-blue-light rounded-lg shadow-lg z-50 max-h-64 overflow-y-auto", children: filteredSuggestions.map((suggestion) => (_jsxs("button", { onClick: () => handleSuggestionClick(suggestion), className: "flex items-center w-full px-4 py-3 text-left hover:bg-zion-blue transition-colors", children: [_jsx("span", { className: "mr-3 text-lg", children: getTypeIcon(suggestion.type) }), _jsxs("div", { className: "flex-1", children: [_jsx("div", { className: "text-white font-medium", children: suggestion.text }), _jsx("div", { className: "text-zion-slate-light text-sm capitalize", children: suggestion.type })] })] }, suggestion.id))) }))] }));
}
