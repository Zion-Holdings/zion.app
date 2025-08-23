import React from 'react';
import LegalTemplates from '@/components/dashboard/LegalTemplates'; // Import the component

const StartupOSPage: React.FC = () => {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6 shadow-md">
        <h2 className="text-xl font-semibold mb-6 text-gray-700">Startup OS</h2>
        <nav>
          <ul>
            <li className="mb-3">
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Dashboard Home</a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">My Profile</a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-blue-600 font-semibold">Legal Templates</a> {/* Active link example */}
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Cap Table</a>
            </li>
            <li className="mb-3">
              <a href="#" className="text-gray-600 hover:text-blue-600 font-medium">Investor Relations</a>
            </li>
          </ul>
        </nav>
      </div>

      {/* Main Content Area */}
      <div className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-800">Founder Dashboard</h1>
        <LegalTemplates /> {/* Render the LegalTemplates component */}
      </div>
    </div>
  );
};

export default StartupOSPage;
