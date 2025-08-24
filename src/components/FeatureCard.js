import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
export const FeatureCard = ({ title, description, icon, className = '' }) => {
    return (_jsxs("div", { className: `bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 ${className}`, children: [icon && (_jsx("div", { className: "text-3xl text-blue-600 dark:text-blue-400 mb-4", children: icon })), _jsx("h3", { className: "text-xl font-semibold text-gray-900 dark:text-white mb-2", children: title }), _jsx("p", { className: "text-gray-600 dark:text-gray-300", children: description })] }));
};
