
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

interface NotificationFooterProps {
  onClose: () => void;
}

export const NotificationFooter: React.FC<NotificationFooterProps> = ({ onClose }) => {
  const navigate = useNavigate();
  
  const handleViewAll = () => {
    onClose();
    navigate('/notifications');
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
