import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useRef, useEffect } from 'react';
import { ChevronDown, Search, Check, X } from 'lucide-react';
export const Dropdown = ({ options, value, onChange, placeholder = 'Select an option...', searchable = false, multiSelect = false, disabled = false, className = '', maxHeight = 'max-h-60' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const dropdownRef = useRef(null);
    const selectedValues = multiSelect ? (Array.isArray(value) ? value : []) : [value].filter(Boolean);
    const selectedOptions = options.filter(option => selectedValues.includes(option.value));
    const filteredOptions = options.filter(option => searchable && searchTerm
        ? option.label.toLowerCase().includes(searchTerm.toLowerCase())
        : true);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
                setSearchTerm('');
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const handleOptionClick = (optionValue) => {
        if (multiSelect) {
            const newValues = selectedValues.includes(optionValue)
                ? selectedValues.filter(v => v !== optionValue)
                : [...selectedValues, optionValue];
            onChange(newValues);
        }
        else {
            onChange(optionValue);
            setIsOpen(false);
            setSearchTerm('');
        }
    };
    const removeSelected = (optionValue) => {
        if (multiSelect) {
            const newValues = selectedValues.filter(v => v !== optionValue);
            onChange(newValues);
        }
    };
    const isSelected = (optionValue) => selectedValues.includes(optionValue);
    return (_jsxs("div", { className: `relative ${className}`, ref: dropdownRef, children: [_jsx("button", { type: "button", onClick: () => !disabled && setIsOpen(!isOpen), disabled: disabled, className: `
          w-full px-3 py-2 text-left border rounded-md shadow-sm
          focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
          disabled:bg-gray-100 disabled:cursor-not-allowed
          ${isOpen ? 'ring-2 ring-blue-500 border-blue-500' : 'border-gray-300'}
        `, children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsx("div", { className: "flex items-center space-x-2 min-w-0", children: selectedOptions.length > 0 ? (_jsx("div", { className: "flex flex-wrap gap-1", children: selectedOptions.map(option => (_jsxs("span", { className: "inline-flex items-center px-2 py-1 rounded-full text-xs bg-blue-100 text-blue-800", children: [option.label, multiSelect && (_jsx("button", { type: "button", onClick: (e) => {
                                                e.stopPropagation();
                                                removeSelected(option.value);
                                            }, className: "ml-1 hover:bg-blue-200 rounded-full", children: _jsx(X, { className: "w-3 h-3" }) }))] }, option.value))) })) : (_jsx("span", { className: "text-gray-500", children: placeholder })) }), _jsx(ChevronDown, { className: `w-4 h-4 text-gray-400 transition-transform ${isOpen ? 'rotate-180' : ''}` })] }) }), isOpen && (_jsxs("div", { className: "absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg", children: [searchable && (_jsx("div", { className: "p-2 border-b border-gray-200", children: _jsxs("div", { className: "relative", children: [_jsx(Search, { className: "absolute left-2 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" }), _jsx("input", { type: "text", placeholder: "Search options...", value: searchTerm, onChange: (e) => setSearchTerm(e.target.value), className: "w-full pl-8 pr-3 py-1 text-sm border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500", autoFocus: true })] }) })), _jsx("div", { className: `overflow-y-auto ${maxHeight}`, children: filteredOptions.length > 0 ? (filteredOptions.map((option) => (_jsx("button", { type: "button", onClick: () => !option.disabled && handleOptionClick(option.value), disabled: option.disabled, className: `
                    w-full px-3 py-2 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none
                    disabled:opacity-50 disabled:cursor-not-allowed
                    ${isSelected(option.value) ? 'bg-blue-50 text-blue-900' : 'text-gray-900'}
                  `, children: _jsxs("div", { className: "flex items-center space-x-2", children: [multiSelect && (_jsx("div", { className: `w-4 h-4 border rounded ${isSelected(option.value) ? 'bg-blue-500 border-blue-500' : 'border-gray-300'}`, children: isSelected(option.value) && _jsx(Check, { className: "w-3 h-3 text-white" }) })), option.icon && _jsx("span", { className: "flex-shrink-0", children: option.icon }), _jsx("span", { className: "truncate", children: option.label })] }) }, option.value)))) : (_jsx("div", { className: "px-3 py-2 text-sm text-gray-500 text-center", children: "No options found" })) })] }))] }));
};
