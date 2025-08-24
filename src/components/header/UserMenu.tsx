import React from 'react';

export function UserMenu() {
  return (
    <div className="flex items-center space-x-4">
      <button className="text-white hover:text-blue-300 transition-colors">
        Login
      </button>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
        Sign Up
      </button>
    </div>
  );
}