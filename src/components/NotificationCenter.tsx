
import React, { useState, useEffect } from 'react';
// Use the shared icon wrapper
import { Bell } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { useNotifications } from '@/context/notifications/NotificationContext';
import { toast } from 'sonner';
import { 
  NotificationFilter, 
  NotificationHeader, 
  NotificationList, 
  NotificationFooter 
} from '@/components/notifications';
import { FilterType } from '@/components/notifications/NotificationFilter';

export const NotificationCenter: React.FC = () => {
  const { 
    filteredNotifications, 
    unreadCount, 
    markAsRead, 
    markAllAsRead,
    dismissNotification, 
    loading,
    filter,
    setFilter,
    fetchNotifications
  } = useNotifications();
  
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Refresh notifications when popover opens
  useEffect(() => {
    if (open) {
      const loadNotifications = async () => {
        try {
          await fetchNotifications();
          setError(null);
        } catch (err) {
          console.error("Failed to fetch notifications:", err);
          setError("Couldn't load notifications");
          toast.error("Failed to load notifications");
        }
      };
      
      loadNotifications();
    }
  }, [open, fetchNotifications]);

  const handleMarkAllAsRead = async () => {
    try {
      await markAllAsRead();
      toast.success("All notifications marked as read");
    } catch (err) {
      console.error("Failed to mark notifications as read:", err);
      toast.error("Failed to update notifications");
    }
  };

  const handleFilterChange = (newFilter: FilterType) => {
    setFilter(newFilter as any);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="ghost" size="icon" className="relative">
          <Bell className="h-5 w-5 text-zion-slate-light" />
          {unreadCount > 0 && (
            <span className="absolute -top-0.5 -right-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-zion-cyan text-[10px] text-white font-medium">
              {unreadCount > 9 ? '9+' : unreadCount}
            </span>
          )}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[350px] p-0 bg-zion-blue border-zion-blue-light max-h-[500px] flex flex-col">
        <NotificationHeader 
          unreadCount={unreadCount} 
          onMarkAllAsRead={handleMarkAllAsRead} 
        />
        
        <NotificationFilter 
          filter={filter as FilterType} 
          onFilterChange={handleFilterChange} 
        />
        
        <NotificationList 
          loading={loading}
          error={error}
          notifications={filteredNotifications}
          onMarkAsRead={markAsRead}
          onDismiss={dismissNotification}
          onRetry={fetchNotifications}
        />
        
        <NotificationFooter onClose={() => setOpen(false)} />
      </PopoverContent>
    </Popover>
  );
};
