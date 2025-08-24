import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Clock, CheckCircle, Info, XCircle, ChevronRight } from 'lucide-react';
const statusConfig = {
    completed: {
        icon: CheckCircle,
        color: 'text-green-500',
        bgColor: 'bg-green-100',
        borderColor: 'border-green-200'
    },
    'in-progress': {
        icon: Clock,
        color: 'text-blue-500',
        bgColor: 'bg-blue-100',
        borderColor: 'border-blue-200'
    },
    pending: {
        icon: Clock,
        color: 'text-yellow-500',
        bgColor: 'bg-yellow-100',
        borderColor: 'border-yellow-200'
    },
    error: {
        icon: XCircle,
        color: 'text-red-500',
        bgColor: 'bg-red-100',
        borderColor: 'border-red-200'
    },
    info: {
        icon: Info,
        color: 'text-gray-500',
        bgColor: 'bg-gray-100',
        borderColor: 'border-gray-200'
    }
};
export const Timeline = ({ items, layout = 'vertical', showConnectors = true, showDates = true, showStatus = true, showActions = true, className = '', onItemClick }) => {
    const [expandedItems, setExpandedItems] = useState(new Set());
    const toggleExpanded = (itemId) => {
        const newExpanded = new Set(expandedItems);
        if (newExpanded.has(itemId)) {
            newExpanded.delete(itemId);
        }
        else {
            newExpanded.add(itemId);
        }
        setExpandedItems(newExpanded);
    };
    const getStatusConfig = (status) => {
        return statusConfig[status] || statusConfig.info;
    };
    const renderVerticalTimeline = () => (_jsx("div", { className: "space-y-6", children: items.map((item, index) => {
            const status = getStatusConfig(item.status);
            const Icon = status.icon;
            const isExpanded = expandedItems.has(item.id);
            const hasMetadata = item.metadata && Object.keys(item.metadata).length > 0;
            const hasActions = item.actions && item.actions.length > 0;
            return (_jsxs("div", { className: "relative", children: [showConnectors && index < items.length - 1 && (_jsx("div", { className: "absolute left-6 top-8 bottom-0 w-0.5 bg-gray-200" })), _jsxs("div", { className: "flex items-start space-x-4", children: [_jsx("div", { className: `flex-shrink-0 w-12 h-12 rounded-full ${status.bgColor} ${status.borderColor} border-2 flex items-center justify-center`, children: item.icon || _jsx(Icon, { className: "w-6 h-6" }) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsxs("div", { className: "flex items-center space-x-3 mb-2", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900", children: item.title }), showStatus && (_jsx("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status.bgColor} ${status.color}`, children: item.status.replace('-', ' ') }))] }), item.description && (_jsx("p", { className: "text-gray-600 mb-3", children: item.description })), showDates && (_jsxs("div", { className: "flex items-center space-x-2 text-sm text-gray-500 mb-3", children: [_jsx(Clock, { className: "w-4 h-4" }), _jsx("span", { children: item.date })] })), hasMetadata && (_jsx("div", { className: "bg-gray-50 rounded-lg p-3 mb-3", children: _jsx("div", { className: "grid grid-cols-2 gap-2 text-sm", children: Object.entries(item.metadata).map(([key, value]) => (_jsxs("div", { children: [_jsxs("span", { className: "font-medium text-gray-700", children: [key, ":"] }), _jsx("span", { className: "text-gray-600 ml-1", children: String(value) })] }, key))) }) })), showActions && hasActions && (_jsx("div", { className: "flex space-x-2", children: item.actions.map((action, actionIndex) => (_jsx("button", { onClick: (e) => {
                                                e.stopPropagation();
                                                action.onClick();
                                            }, className: `px-3 py-1 text-sm rounded-md transition-colors ${action.variant === 'danger'
                                                ? 'bg-red-100 text-red-700 hover:bg-red-200'
                                                : action.variant === 'primary'
                                                    ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`, children: action.label }, actionIndex))) })), (hasMetadata || hasActions) && (_jsxs("button", { onClick: () => toggleExpanded(item.id), className: "flex items-center space-x-1 text-sm text-blue-600 hover:text-blue-800 transition-colors", children: [_jsx("span", { children: isExpanded ? 'Show less' : 'Show more' }), _jsx(ChevronRight, { className: `w-4 h-4 transition-transform ${isExpanded ? 'rotate-90' : ''}` })] }))] })] })] }, item.id));
        }) }));
    const renderHorizontalTimeline = () => (_jsx("div", { className: "overflow-x-auto", children: _jsx("div", { className: "flex space-x-6 min-w-max pb-4", children: items.map((item, index) => {
                const status = getStatusConfig(item.status);
                const Icon = status.icon;
                return (_jsx("div", { className: "flex-shrink-0 w-64", children: _jsxs("div", { className: "text-center", children: [_jsx("div", { className: `inline-flex w-12 h-12 rounded-full ${status.bgColor} ${status.borderColor} border-2 items-center justify-center mb-3`, children: item.icon || _jsx(Icon, { className: "w-6 h-6" }) }), _jsx("h3", { className: "text-lg font-semibold text-gray-900 mb-2", children: item.title }), item.description && (_jsx("p", { className: "text-gray-600 text-sm mb-3 line-clamp-2", children: item.description })), showDates && (_jsx("div", { className: "text-sm text-gray-500", children: item.date })), showStatus && (_jsx("span", { className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${status.bgColor} ${status.color} mt-2`, children: item.status.replace('-', ' ') }))] }) }, item.id));
            }) }) }));
    const renderCompactTimeline = () => (_jsx("div", { className: "space-y-3", children: items.map((item) => {
            const status = getStatusConfig(item.status);
            const Icon = status.icon;
            return (_jsxs("div", { onClick: () => onItemClick === null || onItemClick === void 0 ? void 0 : onItemClick(item), className: `flex items-center space-x-3 p-3 rounded-lg border cursor-pointer hover:bg-gray-50 transition-colors ${onItemClick ? 'hover:shadow-sm' : ''}`, children: [_jsx("div", { className: `flex-shrink-0 w-8 h-8 rounded-full ${status.bgColor} flex items-center justify-center`, children: item.icon || _jsx(Icon, { className: "w-4 h-4" }) }), _jsxs("div", { className: "flex-1 min-w-0", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h3", { className: "text-sm font-medium text-gray-900 truncate", children: item.title }), showDates && (_jsx("span", { className: "text-xs text-gray-500", children: item.date }))] }), item.description && (_jsx("p", { className: "text-xs text-gray-600 truncate", children: item.description }))] }), showStatus && (_jsx("span", { className: `flex-shrink-0 inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${status.bgColor} ${status.color}`, children: item.status.replace('-', ' ') }))] }, item.id));
        }) }));
    const renderTimeline = () => {
        switch (layout) {
            case 'horizontal':
                return renderHorizontalTimeline();
            case 'compact':
                return renderCompactTimeline();
            default:
                return renderVerticalTimeline();
        }
    };
    if (items.length === 0) {
        return (_jsxs("div", { className: `text-center py-8 text-gray-500 ${className}`, children: [_jsx(Clock, { className: "w-12 h-12 mx-auto mb-4 text-gray-300" }), _jsx("p", { children: "No timeline items to display" })] }));
    }
    return (_jsx("div", { className: className, children: renderTimeline() }));
};
