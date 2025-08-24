import { jsx as _jsx } from "react/jsx-runtime";
export const Steps = ({ children, className = '' }) => {
    return (_jsx("div", { className: `flex items-center space-x-4 ${className}`, children: children }));
};
export const Step = ({ children, className = '', isActive = false, isCompleted = false }) => {
    const baseClasses = 'flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors duration-200';
    const activeClasses = isActive ? 'bg-zion-blue text-white' : '';
    const completedClasses = isCompleted ? 'bg-green-500 text-white' : '';
    const defaultClasses = !isActive && !isCompleted ? 'bg-gray-100 text-gray-600' : '';
    const combinedClasses = `${baseClasses} ${activeClasses} ${completedClasses} ${defaultClasses} ${className}`.trim();
    return (_jsx("div", { className: combinedClasses, children: children }));
};
