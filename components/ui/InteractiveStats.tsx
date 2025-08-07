import React from 'react';

const InteractiveStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      <div className="text-center">
        <div className="text-3xl font-bold text-blue-600">1,234</div>
        <div className="text-gray-600">Users</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-green-600">567</div>
        <div className="text-gray-600">Projects</div>
      </div>
      <div className="text-center">
        <div className="text-3xl font-bold text-purple-600">89</div>
        <div className="text-gray-600">Partners</div>
      </div>
    </div>
  );
};

export default InteractiveStats;