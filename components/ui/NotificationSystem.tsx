import React from 'react';

const NotificationSystem: React.FC = () => {
  return (
    <div className="fixed top-4 right-4 z-50">
      <div className="bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg">
        <div className="flex items-center">
          <span className="mr-2">✓</span>
          <span>Success notification</span>
        </div>
      </div>
    </div>
  );
};

export default NotificationSystem;