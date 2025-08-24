import React from 'react';
import { Link } from 'react-router-dom';

export const Logo: React.FC = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gradient-to-r from-zion-cyan to-zion-purple rounded-lg flex items-center justify-center">
        <span className="text-white font-bold text-lg">Z</span>
      </div>
      <span className="text-xl font-bold text-white">Zion Tech Group</span>
    </Link>
  );
};