import React from 'react';

const NotFound: React.FC = () => (
  <div className="flex flex-1 items-center justify-center bg-gray-100">
    <div className="text-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">404</h1>
      <p className="text-xl text-gray-700 mb-4">Oops! Page not found</p>
      <a
        href="/"
        className="text-blue-600 hover:text-blue-800 underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
      >
        Return to Home
      </a>
    </div>
  </div>
);

export default NotFound;
