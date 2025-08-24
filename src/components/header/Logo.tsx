import React from 'react';
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-lg">Z</span>
      </div>
      <span className="text-xl font-bold text-gray-900">Zion Tech Group</span>
    </Link>
  );
};