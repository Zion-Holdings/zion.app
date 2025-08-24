import { useState, useEffect } from 'react';

export function useUnreadNotificationsCount() {
  const [unreadCount, setUnreadCount] = useState(0);

  useEffect(() => {
    // Simulate fetching unread notifications count
    // In a real app, this would fetch from an API
    const fetchUnreadCount = () => {
      // Simulate random unread count for demo purposes
      const randomCount = Math.floor(Math.random() * 5);
      setUnreadCount(randomCount);
    };

    fetchUnreadCount();
    
    // Set up interval to simulate real-time updates
    const interval = setInterval(fetchUnreadCount, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return unreadCount;
}