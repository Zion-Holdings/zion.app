import React from 'react';

const UserEngagementSystem: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold mb-4">User Engagement</h3>
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <span>Active Users</span>
          <span className="font-semibold">1,234</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Session Duration</span>
          <span className="font-semibold">5m 32s</span>
        </div>
        <div className="flex items-center justify-between">
          <span>Bounce Rate</span>
          <span className="font-semibold">23%</span>
        </div>
      </div>
    </div>
  );
};

export default UserEngagementSystem;
