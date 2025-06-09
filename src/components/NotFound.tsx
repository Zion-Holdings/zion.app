import React from 'react';
import Link from 'next/link'; // Import Link from next/link

const NotFound: React.FC = () => (
  <div className="flex flex-1 items-center justify-center bg-gray-100">
    <div className="text-center p-6">
      <h1 className="text-4xl font-bold mb-4 text-gray-800">404</h1>
      <p className="text-xl text-gray-700 mb-4">Oops! Page not found</p>
      <p className="text-lg text-gray-600 mb-4">
        Did you forget your password? You can reset it here:
      </p>
      <Link
        href="/forgot-password" // Changed to href
        className="text-blue-600 hover:text-blue-800 underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 rounded"
      >
        Reset Password
      </Link>
      <p className="mt-4">
        <Link
          href="/" // Changed to href
          className="text-sm text-gray-500 hover:text-gray-700 underline"
        >
          Or return to Home
        </Link>
      </p>
    </div>
  </div>
);

export default NotFound;
