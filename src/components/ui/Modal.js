import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';
const sizeClasses = {
    sm: 'max-w-md',
    md: 'max-w-lg',
    lg: 'max-w-2xl',
    xl: 'max-w-4xl',
    full: 'max-w-full mx-4'
};
export const Modal = ({ isOpen, onClose, title, children, size = 'md', showCloseButton = true, closeOnOverlayClick = true, closeOnEscape = true }) => {
    const modalRef = useRef(null);
    useEffect(() => {
        if (!isOpen)
            return;
        const handleEscape = (e) => {
            if (e.key === 'Escape' && closeOnEscape) {
                onClose();
            }
        };
        const handleClickOutside = (e) => {
            if (closeOnOverlayClick && modalRef.current && !modalRef.current.contains(e.target)) {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEscape);
        document.addEventListener('mousedown', handleClickOutside);
        document.body.style.overflow = 'hidden';
        return () => {
            document.removeEventListener('keydown', handleEscape);
            document.removeEventListener('mousedown', handleClickOutside);
            document.body.style.overflow = 'unset';
        };
    }, [isOpen, onClose, closeOnEscape, closeOnOverlayClick]);
    if (!isOpen)
        return null;
    return (_jsx("div", { className: "fixed inset-0 z-50 overflow-y-auto", children: _jsxs("div", { className: "flex min-h-full items-center justify-center p-4", children: [_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 transition-opacity", onClick: closeOnOverlayClick ? onClose : undefined }), _jsxs("div", { ref: modalRef, className: `
            relative w-full ${sizeClasses[size]}
            bg-white rounded-lg shadow-xl
            transform transition-all duration-300 ease-out
            ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}
          `, children: [(title || showCloseButton) && (_jsxs("div", { className: "flex items-center justify-between p-6 border-b border-gray-200", children: [title && (_jsx("h2", { className: "text-lg font-semibold text-gray-900", children: title })), showCloseButton && (_jsx("button", { onClick: onClose, className: "p-1 rounded-full hover:bg-gray-100 transition-colors", "aria-label": "Close modal", children: _jsx(X, { className: "w-5 h-5 text-gray-500" }) }))] })), _jsx("div", { className: "p-6", children: children })] })] }) }));
};
