import React, { useState, useMemo } from 'react';
import { ChevronLeft, ChevronRight, Calendar as CalendarIcon, Plus } from 'lucide-react';

export interface CalendarEvent {
  id: string;
  title: string;
  description?: string;
  date: Date;
  startTime?: string;
  endTime?: string;
  color?: string;
  allDay?: boolean;
}

export interface CalendarProps {
  events?: CalendarEvent[];
  onEventClick?: (event: CalendarEvent) => void;
  onDateClick?: (date: Date) => void;
  onAddEvent?: (date: Date) => void;
  view?: 'month' | 'week' | 'day';
  className?: string;
}

const defaultColors = [
  '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6',
  '#06B6D4', '#84CC16', '#F97316', '#EC4899', '#6366F1'
];

export const Calendar: React.FC<CalendarProps> = ({
  events = [],
  onEventClick,
  onDateClick,
  onAddEvent,
  view = 'month',
  className = ''
}) => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

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

  const getEventsForDate = (date: Date) => {
    return events.filter(event => 
      event.date.toDateString() === date.toDateString()
    );
  };

  const navigateMonth = (direction: 'prev' | 'next') => {
    setCurrentDate(new Date(currentYear, currentMonth + (direction === 'next' ? 1 : -1), 1));
  };

  const goToToday = () => {
    setCurrentDate(new Date());
    setSelectedDate(new Date());
  };

  const isToday = (date: Date) => {
    const today = new Date();
    return date.toDateString() === today.toDateString();
  };

  const isCurrentMonth = (date: Date) => {
    return date.getMonth() === currentMonth && date.getFullYear() === currentYear;
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    onDateClick?.(date);
  };

  const handleAddEvent = (date: Date, e: React.MouseEvent) => {
    e.stopPropagation();
    onAddEvent?.(date);
  };

  const renderMonthView = () => (
    <div className="grid grid-cols-7 gap-px bg-gray-200 rounded-lg overflow-hidden">
      {/* Day headers */}
      {dayNames.map(day => (
        <div key={day} className="bg-gray-50 p-2 text-center text-sm font-medium text-gray-700">
          {day}
        </div>
      ))}
      
      {/* Calendar days */}
      {calendarDays.map((date, index) => (
        <div
          key={index}
          className={`
            min-h-[100px] p-2 bg-white relative cursor-pointer hover:bg-gray-50 transition-colors
            ${date && isToday(date) ? 'bg-blue-50' : ''}
            ${date && !isCurrentMonth(date) ? 'text-gray-400' : ''}
            ${date && selectedDate && date.toDateString() === selectedDate.toDateString() ? 'ring-2 ring-blue-500' : ''}
          `}
          onClick={() => date && handleDateClick(date)}
        >
          {date && (
            <>
              <div className="flex items-center justify-between mb-1">
                <span className={`text-sm font-medium ${
                  isToday(date) ? 'text-blue-600' : 'text-gray-900'
                }`}>
                  {date.getDate()}
                </span>
                {onAddEvent && (
                  <button
                    onClick={(e) => handleAddEvent(date, e)}
                    className="opacity-0 group-hover:opacity-100 hover:bg-blue-100 p-1 rounded transition-all"
                  >
                    <Plus className="w-3 h-3 text-blue-600" />
                  </button>
                )}
              </div>
              
              {/* Events */}
              <div className="space-y-1">
                {getEventsForDate(date).slice(0, 3).map(event => (
                  <div
                    key={event.id}
                    className="text-xs p-1 rounded cursor-pointer truncate"
                    style={{
                      backgroundColor: event.color || defaultColors[0],
                      color: 'white'
                    }}
                    onClick={(e) => {
                      e.stopPropagation();
                      onEventClick?.(event);
                    }}
                    title={event.title}
                  >
                    {event.title}
                  </div>
                ))}
                {getEventsForDate(date).length > 3 && (
                  <div className="text-xs text-gray-500 text-center">
                    +{getEventsForDate(date).length - 3} more
                  </div>
                )}
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );

  const renderWeekView = () => {
    const startOfWeek = new Date(currentDate);
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay());
    
    const weekDays = [];
    for (let i = 0; i < 7; i++) {
      weekDays.push(new Date(startOfWeek));
      startOfWeek.setDate(startOfWeek.getDate() + 1);
    }

    return (
      <div className="space-y-4">
        {weekDays.map((date, index) => (
          <div key={index} className="border rounded-lg p-4">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-medium text-gray-900">
                {date.toLocaleDateString('en-US', { weekday: 'long', month: 'short', day: 'numeric' })}
              </h3>
              {onAddEvent && (
                <button
                  onClick={() => onAddEvent(date)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <Plus className="w-4 h-4 text-gray-600" />
                </button>
              )}
            </div>
            
            <div className="space-y-2">
              {getEventsForDate(date).map(event => (
                <div
                  key={event.id}
                  className="p-3 rounded-lg border cursor-pointer hover:shadow-sm transition-shadow"
                  onClick={() => onEventClick?.(event)}
                >
                  <div className="flex items-center justify-between">
                    <h4 className="font-medium text-gray-900">{event.title}</h4>
                    {event.startTime && (
                      <span className="text-sm text-gray-500">{event.startTime}</span>
                    )}
                  </div>
                  {event.description && (
                    <p className="text-sm text-gray-600 mt-1">{event.description}</p>
                  )}
                </div>
              ))}
              
              {getEventsForDate(date).length === 0 && (
                <p className="text-sm text-gray-500 text-center py-4">No events scheduled</p>
              )}
            </div>
          </div>
        ))}
      </div>
    );
  };

  const renderDayView = () => {
    const hours = Array.from({ length: 24 }, (_, i) => i);
    const dayEvents = getEventsForDate(currentDate);

    return (
      <div className="space-y-1">
        {hours.map(hour => {
          const hourEvents = dayEvents.filter(event => {
            if (event.allDay) return false;
            const eventHour = event.startTime ? parseInt(event.startTime.split(':')[0]) : 0;
            return eventHour === hour;
          });

          return (
            <div key={hour} className="flex border-b border-gray-100 min-h-[60px]">
              <div className="w-20 p-2 text-sm text-gray-500 border-r border-gray-100">
                {hour === 0 ? '12 AM' : hour === 12 ? '12 PM' : hour > 12 ? `${hour - 12} PM` : `${hour} AM`}
              </div>
              <div className="flex-1 p-2 relative">
                {hourEvents.map(event => (
                  <div
                    key={event.id}
                    className="absolute left-0 right-0 mx-2 p-2 rounded bg-blue-100 border border-blue-200 cursor-pointer hover:bg-blue-200 transition-colors"
                    onClick={() => onEventClick?.(event)}
                  >
                    <div className="font-medium text-blue-900">{event.title}</div>
                    {event.startTime && event.endTime && (
                      <div className="text-xs text-blue-700">
                        {event.startTime} - {event.endTime}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    );
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

  return (
    <div className={`bg-white rounded-lg shadow-sm border ${className}`}>
      {/* Header */}
      <div className="px-6 py-4 border-b border-gray-200">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <CalendarIcon className="w-5 h-5 text-gray-600" />
            <h2 className="text-xl font-semibold text-gray-900">
              {monthNames[currentMonth]} {currentYear}
            </h2>
          </div>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={() => navigateMonth('prev')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            
            <button
              onClick={goToToday}
              className="px-3 py-1 text-sm bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
            >
              Today
            </button>
            
            <button
              onClick={() => navigateMonth('next')}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Calendar Body */}
      <div className="p-6">
        {renderView()}
      </div>
    </div>
  );
};