import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useEffect, useRef } from 'react';
import { Bell, X, Check, AlertTriangle, Info, Clock, Settings, Trash2, Archive } from 'lucide-react';
const notificationTypeConfig = {
    info: { icon: Info, color: 'text-blue-500', bgColor: 'bg-blue-50', borderColor: 'border-blue-200' },
    success: { icon: Check, color: 'text-green-500', bgColor: 'bg-green-50', borderColor: 'border-green-200' },
    warning: { icon: AlertTriangle, color: 'text-yellow-500', bgColor: 'bg-yellow-50', borderColor: 'border-yellow-200' },
    error: { icon: X, color: 'text-red-500', bgColor: 'bg-red-50', borderColor: 'border-red-200' },
    system: { icon: Settings, color: 'text-gray-500', bgColor: 'bg-gray-50', borderColor: 'border-gray-200' }
};
const priorityConfig = {
    low: { color: 'text-gray-500', bgColor: 'bg-gray-100' },
    medium: { color: 'text-blue-500', bgColor: 'bg-blue-100' },
    high: { color: 'text-orange-500', bgColor: 'bg-orange-100' },
    urgent: { color: 'text-red-500', bgColor: 'bg-red-100' }
};
const categoryConfig = {
    general: { color: 'bg-gray-100 text-gray-700' },
    project: { color: 'bg-blue-100 text-blue-700' },
    security: { color: 'bg-red-100 text-red-700' },
    billing: { color: 'bg-green-100 text-green-700' },
    system: { color: 'bg-purple-100 text-purple-700' },
    user: { color: 'bg-orange-100 text-orange-700' }
};
export const NotificationCenter = ({ notifications, onNotificationRead, onNotificationArchive, onNotificationDelete, onMarkAllRead, onClearAll, maxNotifications = 50, showUnreadCount = true, showCategories = true, showPriority = true, showActions = true, showSender = true, showExpiry = true, className = '' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [filterType, setFilterType] = useState('all');
    const [filterCategory, setFilterCategory] = useState('all');
    const [filterPriority, setFilterPriority] = useState('all');
    const [showRead, setShowRead] = useState(true);
    const [showArchived, setShowArchived] = useState(false);
    const [sortBy, setSortBy] = useState('date');
    const notificationRef = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (notificationRef.current && !notificationRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);
    const filteredNotifications = notifications
        .filter(notification => {
        if (filterType !== 'all' && notification.type !== filterType)
            return false;
        if (filterCategory !== 'all' && notification.category !== filterCategory)
            return false;
        if (filterPriority !== 'all' && notification.priority !== filterPriority)
            return false;
        if (!showRead && notification.isRead)
            return false;
        if (!showArchived && notification.isArchived)
            return false;
        return true;
    })
        .sort((a, b) => {
        switch (sortBy) {
            case 'priority':
                const priorityOrder = { urgent: 4, high: 3, medium: 2, low: 1 };
                return priorityOrder[b.priority] - priorityOrder[a.priority];
            case 'type':
                return a.type.localeCompare(b.type);
            default:
                return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
        }
    })
        .slice(0, maxNotifications);
    const unreadCount = notifications.filter(n => !n.isRead).length;
    const unreadUrgentCount = notifications.filter(n => !n.isRead && n.priority === 'urgent').length;
    const handleNotificationClick = (notification) => {
        if (!notification.isRead) {
            onNotificationRead === null || onNotificationRead === void 0 ? void 0 : onNotificationRead(notification.id);
        }
    };
    const formatTimeAgo = (dateString) => {
        const now = new Date();
        const date = new Date(dateString);
        const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
        if (diffInMinutes < 1)
            return 'Just now';
        if (diffInMinutes < 60)
            return `${diffInMinutes}m ago`;
        if (diffInMinutes < 1440)
            return `${Math.floor(diffInMinutes / 60)}h ago`;
        return `${Math.floor(diffInMinutes / 1440)}d ago`;
    };
    const isExpired = (notification) => {
        if (!notification.expiresAt)
            return false;
        return new Date() > new Date(notification.expiresAt);
    };
    const renderNotification = (notification) => {
        const typeConfig = notificationTypeConfig[notification.type];
        const priorityConfig = priorityConfig[notification.priority];
        const categoryConfig = categoryConfig[notification.category];
        const Icon = typeConfig.icon;
        const isExpiredNotification = isExpired(notification);
        return (_jsxs("div", { className: `border rounded-lg p-4 transition-all duration-200 ${notification.isRead
                ? 'bg-white border-gray-200'
                : `${typeConfig.bgColor} ${typeConfig.borderColor} border-l-4 border-l-${typeConfig.color.split('-')[1]}-500`} ${isExpiredNotification ? 'opacity-60' : ''}`, onClick: () => handleNotificationClick(notification), children: [_jsxs("div", { className: "flex items-start justify-between mb-2", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsx(Icon, { className: `w-5 h-5 ${typeConfig.color}` }), _jsx("h4", { className: `font-medium text-sm ${notification.isRead ? 'text-gray-700' : 'text-gray-900'}`, children: notification.title })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [showPriority && (_jsx("span", { className: `inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${priorityConfig.bgColor} ${priorityConfig.color}`, children: notification.priority })), _jsx("button", { onClick: (e) => {
                                        e.stopPropagation();
                                        onNotificationArchive === null || onNotificationArchive === void 0 ? void 0 : onNotificationArchive(notification.id);
                                    }, className: "p-1 hover:bg-gray-100 rounded transition-colors text-gray-400 hover:text-gray-600", children: _jsx(Archive, { className: "w-4 h-4" }) }), _jsx("button", { onClick: (e) => {
                                        e.stopPropagation();
                                        onNotificationDelete === null || onNotificationDelete === void 0 ? void 0 : onNotificationDelete(notification.id);
                                    }, className: "p-1 hover:bg-red-100 rounded transition-colors text-gray-400 hover:text-red-600", children: _jsx(Trash2, { className: "w-4 h-4" }) })] })] }), _jsx("p", { className: `text-sm mb-3 ${notification.isRead ? 'text-gray-600' : 'text-gray-700'}`, children: notification.message }), _jsxs("div", { className: "space-y-2", children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [showCategories && (_jsx("span", { className: `inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${categoryConfig.color}`, children: notification.category })), showSender && notification.sender && (_jsxs("div", { className: "flex items-center space-x-2 text-xs text-gray-500", children: [notification.sender.avatar ? (_jsx("img", { src: notification.sender.avatar, alt: notification.sender.name, className: "w-4 h-4 rounded-full" })) : (_jsx("div", { className: "w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center", children: _jsx("span", { className: "text-xs text-gray-600", children: notification.sender.name.charAt(0).toUpperCase() }) })), _jsx("span", { children: notification.sender.name })] }))] }), _jsxs("div", { className: "flex items-center space-x-2 text-xs text-gray-500", children: [_jsx(Clock, { className: "w-3 h-3" }), _jsx("span", { children: formatTimeAgo(notification.createdAt) }), showExpiry && notification.expiresAt && (_jsxs(_Fragment, { children: [_jsx("span", { children: "\u2022" }), _jsx("span", { className: isExpiredNotification ? 'text-red-500' : '', children: isExpiredNotification ? 'Expired' : `Expires ${formatTimeAgo(notification.expiresAt)}` })] }))] })] }), showActions && notification.actions && notification.actions.length > 0 && (_jsx("div", { className: "flex space-x-2 pt-2 border-t border-gray-100", children: notification.actions.map((action, index) => (_jsx("button", { onClick: (e) => {
                                    e.stopPropagation();
                                    action.onClick();
                                }, className: `px-3 py-1 text-xs rounded-md transition-colors ${action.variant === 'danger'
                                    ? 'bg-red-100 text-red-700 hover:bg-red-200'
                                    : action.variant === 'primary'
                                        ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`, children: action.label }, index))) }))] })] }, notification.id));
    };
    return (_jsxs("div", { className: `relative ${className}`, ref: notificationRef, children: [_jsxs("button", { onClick: () => setIsOpen(!isOpen), className: "relative p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-colors", children: [_jsx(Bell, { className: "w-6 h-6" }), showUnreadCount && unreadCount > 0 && (_jsx("span", { className: "absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center", children: unreadUrgentCount > 0 ? '!' : unreadCount > 99 ? '99+' : unreadCount }))] }), isOpen && (_jsxs("div", { className: "absolute right-0 top-full mt-2 w-96 bg-white border border-gray-200 rounded-lg shadow-xl z-50", children: [_jsxs("div", { className: "flex items-center justify-between p-4 border-b border-gray-200", children: [_jsx("h3", { className: "text-lg font-semibold text-gray-900", children: "Notifications" }), _jsxs("div", { className: "flex items-center space-x-2", children: [unreadCount > 0 && (_jsx("button", { onClick: onMarkAllRead, className: "text-sm text-blue-600 hover:text-blue-800 transition-colors", children: "Mark all read" })), _jsx("button", { onClick: onClearAll, className: "text-sm text-gray-500 hover:text-gray-700 transition-colors", children: "Clear all" })] })] }), _jsxs("div", { className: "p-4 border-b border-gray-200 space-y-3", children: [_jsxs("div", { className: "flex items-center space-x-2", children: [_jsxs("select", { value: filterType, onChange: (e) => setFilterType(e.target.value), className: "px-3 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500", children: [_jsx("option", { value: "all", children: "All Types" }), _jsx("option", { value: "info", children: "Info" }), _jsx("option", { value: "success", children: "Success" }), _jsx("option", { value: "warning", children: "Warning" }), _jsx("option", { value: "error", children: "Error" }), _jsx("option", { value: "system", children: "System" })] }), _jsxs("select", { value: filterCategory, onChange: (e) => setFilterCategory(e.target.value), className: "px-3 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500", children: [_jsx("option", { value: "all", children: "All Categories" }), _jsx("option", { value: "general", children: "General" }), _jsx("option", { value: "project", children: "Project" }), _jsx("option", { value: "security", children: "Security" }), _jsx("option", { value: "billing", children: "Billing" }), _jsx("option", { value: "system", children: "System" }), _jsx("option", { value: "user", children: "User" })] }), _jsxs("select", { value: sortBy, onChange: (e) => setSortBy(e.target.value), className: "px-3 py-1 text-sm border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500", children: [_jsx("option", { value: "date", children: "Sort by Date" }), _jsx("option", { value: "priority", children: "Sort by Priority" }), _jsx("option", { value: "type", children: "Sort by Type" })] })] }), _jsxs("div", { className: "flex items-center space-x-4 text-sm", children: [_jsxs("label", { className: "flex items-center space-x-2", children: [_jsx("input", { type: "checkbox", checked: showRead, onChange: (e) => setShowRead(e.target.checked), className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500" }), _jsx("span", { children: "Show read" })] }), _jsxs("label", { className: "flex items-center space-x-2", children: [_jsx("input", { type: "checkbox", checked: showArchived, onChange: (e) => setShowArchived(e.target.checked), className: "rounded border-gray-300 text-blue-600 focus:ring-blue-500" }), _jsx("span", { children: "Show archived" })] })] })] }), _jsx("div", { className: "max-h-96 overflow-y-auto p-4 space-y-3", children: filteredNotifications.length > 0 ? (filteredNotifications.map(renderNotification)) : (_jsxs("div", { className: "text-center py-8 text-gray-500", children: [_jsx(Bell, { className: "w-12 h-12 mx-auto mb-4 text-gray-300" }), _jsx("p", { children: "No notifications to display" })] })) })] }))] }));
};
