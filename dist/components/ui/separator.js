import { jsx as _jsx } from "react/jsx-runtime";
export const Separator = ({ orientation = 'horizontal', className = '' }) => {
    const baseClasses = 'shrink-0 bg-border';
    const orientationClasses = orientation === 'horizontal' ? 'h-[1px] w-full' : 'h-full w-[1px]';
    return (_jsx("div", { className: `${baseClasses} ${orientationClasses} ${className}` }));
};
