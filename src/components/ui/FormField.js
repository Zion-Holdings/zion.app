import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { AlertCircle, CheckCircle } from 'lucide-react';
export const FormField = ({ label, name, type = 'text', placeholder, value, onChange, onBlur, error, success, required = false, disabled = false, className = '', rows = 4, min, max, step }) => {
    const inputId = `form-${name}`;
    const hasError = !!error;
    const hasSuccess = !!success;
    const baseInputClasses = `
    w-full px-3 py-2 border rounded-md transition-colors duration-200
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500
    disabled:bg-gray-100 disabled:cursor-not-allowed
    ${hasError ? 'border-red-300 focus:ring-red-500 focus:border-red-500' : ''}
    ${hasSuccess ? 'border-green-300 focus:ring-green-500 focus:border-green-500' : ''}
    ${!hasError && !hasSuccess ? 'border-gray-300' : ''}
  `;
    const renderInput = () => {
        if (type === 'textarea') {
            return (_jsx("textarea", { id: inputId, name: name, value: value, onChange: onChange, onBlur: onBlur, placeholder: placeholder, required: required, disabled: disabled, rows: rows, className: `${baseInputClasses} resize-vertical` }));
        }
        return (_jsx("input", { id: inputId, type: type, name: name, value: value, onChange: onChange, onBlur: onBlur, placeholder: placeholder, required: required, disabled: disabled, min: min, max: max, step: step, className: baseInputClasses }));
    };
    return (_jsxs("div", { className: `space-y-2 ${className}`, children: [_jsxs("label", { htmlFor: inputId, className: "block text-sm font-medium text-gray-700", children: [label, required && _jsx("span", { className: "text-red-500 ml-1", children: "*" })] }), renderInput(), hasError && (_jsxs("div", { className: "flex items-center space-x-2 text-sm text-red-600", children: [_jsx(AlertCircle, { className: "w-4 h-4 flex-shrink-0" }), _jsx("span", { children: error })] })), hasSuccess && (_jsxs("div", { className: "flex items-center space-x-2 text-sm text-green-600", children: [_jsx(CheckCircle, { className: "w-4 h-4 flex-shrink-0" }), _jsx("span", { children: success })] }))] }));
};
