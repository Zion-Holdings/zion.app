
import React from 'react';
import { Button } from '@/components/ui/button';

interface NotificationHeaderProps {
  unreadCount: number;
  onMarkAllAsRead: () => Promise<void>;
}

export const NotificationHeader: React.FC<NotificationHeaderProps> = ({
  unreadCount,
  onMarkAllAsRead
}) => {
  return (
    <div className="flex justify-between items-center p-4 border-b border-zion-blue-light">
      <h3 className="font-medium text-white">Notifications</h3>
      {unreadCount > 0 && (
        <Button 
          variant="ghost" 
          size="sm" 
          onClick={onMarkAllAsRead}
          className="text-xs text-zion-cyan hover:text-white hover:bg-zion-blue-dark"
        >
          Mark all as read
        </Button>
      )}
    </div>
  );
};
