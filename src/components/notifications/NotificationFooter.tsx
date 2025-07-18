import React from 'react';
import { Button } from '@/components/ui/button';
import { useRouter } from 'next/router';

interface NotificationFooterProps {
  onClose: () => void;
}

<<<<<<< HEAD
export const NotificationFooter: React.FC<NotificationFooterProps> = ({
  onClose,
}) => {
=======
export const NotificationFooter: React.FC<NotificationFooterProps> = (props) => {
>>>>>>> 710519fe6cbd4de91be8a635123762393fdf873b
  const router = useRouter(); // Changed from useNavigate to useRouter

  const handleViewAll = () => {
    props.onClose();
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
