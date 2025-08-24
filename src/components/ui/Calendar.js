import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Plus } from 'lucide-react';
const defaultColors = [
    '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6',
    '#06B6D4', '#84CC16', '#F97316', '#EC4899', '#6366F1'
];
export const Calendar = ({ events = [], onEventClick, onDateClick, onAddEvent, view = 'month', className = '' }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth();
    const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
    const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
    const firstDayOfWeek = firstDayOfMonth.getDay();
    const daysInMonth = lastDayOfMonth.getDate();
    const monthNames = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    const calendarDays = useMemo(() => {
        const days = [];
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < firstDayOfWeek; i++) {
            days.push(null);
        }
        // Add all days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(new Date(currentYear, currentMonth, day));
        }
        // Fill remaining cells to complete the grid
        const remainingCells = 42 - days.length; // 6 rows * 7 days
        for (let i = 0; i < remainingCells; i++) {
            days.push(null);
        }
        return days;
    }, [currentYear, currentMonth, firstDayOfWeek, daysInMonth]);
    const getEventsForDate = (date) => {
        return events.filter(event => event.date.toDateString() === date.toDateString());
    };
    const navigateMonth = (direction) => {
        setCurrentDate(new Date(currentYear, currentMonth + (direction === 'next' ? 1 : -1), 1));
    };
    const goToToday = () => {
        setCurrentDate(new Date());
        setSelectedDate(new Date());
    };
    const isToday = (date) => {
        const today = new Date();
        return date.toDateString() === today.toDateString();
    };
    const isCurrentMonth = (date) => {
        return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
    };
    const handleDateClick = (date) => {
        setSelectedDate(date);
        onDateClick === null || onDateClick === void 0 ? void 0 : onDateClick(date);
    };
    const handleAddEvent = (date, e) => {
        e.stopPropagation();
        onAddEvent === null || onAddEvent === void 0 ? void 0 : onAddEvent(date);
    };
    const renderMonthView = () => (_jsxs("div", { className: "grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden", children: [dayNames.map(day => (_jsx("div", { className: "bg-gray-50 p-2 text-center text-sm font-medium text-gray-700", children: day }, day))), calendarDays.map((date, index) => (_jsx("div", { className: `
            min-h-[100px] p-2 bg-white relative cursor-pointer hover:bg-gray-50 transition-colors
            ${date && isToday(date) ? 'bg-blue-50' : ''}
            ${date && !isCurrentMonth(date) ? 'text-gray-400' : ''}
            ${date && selectedDate && date.toDateString() === selectedDate.toDateString() ? 'ring-2 ring-blue-500' : ''}
          `, onClick: () => date && handleDateClick(date), children: date && (_jsxs(_Fragment, { children: [_jsxs("div", { className: "flex items-center justify-between mb-1", children: [_jsx("span", { className: `text-sm font-medium ${isToday(date) ? 'text-blue-600' : 'text-gray-900'}`, children: date.getDate() }), onAddEvent && (_jsx("button", { onClick: (e) => handleAddEvent(date, e), className: "opacity-0 group-hover:opacity-100 hover:bg-blue-100 p-1 rounded transition-all", children: _jsx(Plus, { className: "w-3 h-3 text-blue-600" }) }))] }), _jsxs("div", { className: "space-y-1", children: [getEventsForDate(date).slice(0, 3).map(event => (_jsx("div", { className: "text-xs p-1 rounded cursor-pointer truncate", style: {
                                        backgroundColor: event.color || defaultColors[0],
                                        color: 'white'
                                    }, onClick: (e) => {
                                        e.stopPropagation();
                                        onEventClick === null || onEventClick === void 0 ? void 0 : onEventClick(event);
                                    }, title: event.title, children: event.title }, event.id))), getEventsForDate(date).length > 3 && (_jsxs("div", { className: "text-xs text-gray-500 text-center", children: ["+", getEventsForDate(date).length - 3, " more"] }))] })] })) }, index)))] }));
    const renderWeekView = () => {
        const startOfWeek = new Date(currentDate);
        startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
        const weekDays = [];
        for (let i = 0; i < 7; i++) {
            weekDays.push(new Date(startOfWeek));
            startOfWeek.setDate(startOfWeek.getDate() + 1);
        }
        return (_jsx("div", { className: "space-y-4", children: weekDays.map((date, index) => (_jsxs("div", { className: "border rounded-lg p-4", children: [_jsxs("div", { className: "flex items-center justify-between mb-3", children: [_jsx("h3", { className: "font-medium text-gray-900", children: date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' }) }), onAddEvent && (_jsx("button", { onClick: () => onAddEvent(date), className: "p-2 hover:bg-gray-100 rounded-full transition-colors", children: _jsx(Plus, { className: "w-4 h-4 text-gray-600" }) }))] }), _jsxs("div", { className: "space-y-2", children: [getEventsForDate(date).map(event => (_jsxs("div", { className: "p-3 rounded-lg border cursor-pointer hover:shadow-sm transition-shadow", onClick: () => onEventClick === null || onEventClick === void 0 ? void 0 : onEventClick(event), children: [_jsxs("div", { className: "flex items-center justify-between", children: [_jsx("h4", { className: "font-medium text-gray-900", children: event.title }), event.startTime && (_jsx("span", { className: "text-sm text-gray-500", children: event.startTime }))] }), event.description && (_jsx("p", { className: "text-sm text-gray-600 mt-1", children: event.description }))] }, event.id))), getEventsForDate(date).length === 0 && (_jsx("p", { className: "text-sm text-gray-500 text-center py-4", children: "No events scheduled" }))] })] }, index))) }));
    };
    const renderDayView = () => {
        const hours = Array.from({ length: 24 }, (_, i) => i);
        const dayEvents = getEventsForDate(currentDate);
        return (_jsx("div", { className: "space-y-1", children: hours.map(hour => {
                const hourEvents = dayEvents.filter(event => {
                    if (event.allDay)
                        return false;
                    const eventHour = event.startTime ? parseInt(event.startTime.split(':')[0]) : 0;
                    return eventHour === hour;
                });
                return (_jsxs("div", { className: "flex border-b border-gray-100 min-h-[60px]", children: [_jsx("div", { className: "w-20 p-2 text-sm text-gray-500 border-r border-gray-100", children: hour === 0 ? '12 AM' : hour === 12 ? '12 PM' : hour > 12 ? `${hour - 12} PM` : `${hour} AM` }), _jsx("div", { className: "flex-1 p-2 relative", children: hourEvents.map(event => (_jsxs("div", { className: "absolute left-0 right-0 mx-2 p-2 rounded bg-blue-100 border border-blue-200 cursor-pointer hover:bg-blue-200 transition-colors", onClick: () => onEventClick === null || onEventClick === void 0 ? void 0 : onEventClick(event), children: [_jsx("div", { className: "font-medium text-blue-900", children: event.title }), event.startTime && event.endTime && (_jsxs("div", { className: "text-xs text-blue-700", children: [event.startTime, " - ", event.endTime] }))] }, event.id))) })] }, hour));
            }) }));
    };
    const renderView = () => {
        switch (view) {
            case 'week':
                return renderWeekView();
            case 'day':
                return renderDayView();
            default:
                return renderMonthView();
        }
    };
    return (_jsxs("div", { className: `bg-white rounded-lg shadow-sm border ${className}`, children: [_jsx("div", { className: "px-6 py-4 border-b border-gray-200", children: _jsxs("div", { className: "flex items-center justify-between", children: [_jsxs("div", { className: "flex items-center space-x-4", children: [_jsx(CalendarIcon, { className: "w-5 h-5 text-gray-600" }), _jsxs("h2", { className: "text-xl font-semibold text-gray-900", children: [monthNames[currentMonth], " ", currentYear] })] }), _jsxs("div", { className: "flex items-center space-x-2", children: [_jsx("button", { onClick: () => navigateMonth('prev'), className: "p-2 hover:bg-gray-100 rounded-full transition-colors", children: _jsx(ChevronLeft, { className: "w-4 h-4" }) }), _jsx("button", { onClick: goToToday, className: "px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors", children: "Today" }), _jsx("button", { onClick: () => navigateMonth('next'), className: "p-2 hover:bg-gray-100 rounded-full transition-colors", children: _jsx(ChevronRight, { className: "w-4 h-4" }) })] })] }) }), _jsx("div", { className: "p-6", children: renderView() })] }));
};
