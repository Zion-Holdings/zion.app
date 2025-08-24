import React from 'react';

const EquipmentPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Equipment</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Equipment listing placeholder */}
        <div className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-semibold mb-2">Coming Soon</h2>
          <p className="text-gray-600">
            Our equipment listing section is currently under development. Check back soon for available equipment.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EquipmentPage;