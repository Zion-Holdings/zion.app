
import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';

interface NotificationFooterProps {
  onClose: () => void;
}

export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {
  const router = useRouter(); // Changed from useNavigate to useRouter
  
  const handleViewAll = () => {
    onClose();
    router.push('/notifications'); // Changed to router.push
  };
  
  return (
    <div className="p-3 text-center border-t border-zion-blue-light">
      <Button
        variant="link"
        size="sm"
        className="text-zion-slate-light text-xs"
        onClick={handleViewAll}
      >
        View all notifications
      </Button>
    </div>
  );
};
