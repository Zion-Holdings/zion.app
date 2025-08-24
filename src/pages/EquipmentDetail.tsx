import React from 'react';
import { useParams } from 'react-router-dom';
import { SEO } from '@/components/SEO';

const EquipmentDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();

  return (
    <>
      <SEO 
        title="Equipment Details - Zion Tech Group"
        description="View detailed information about our equipment"
        canonical={`https://ziontechgroup.com/equipment/${id}`}
      />
      <div className="min-h-screen bg-gradient-to-br from-zion-blue-dark via-zion-blue to-zion-slate-dark">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Equipment Details
            </h1>
            <p className="text-xl text-zion-slate-light mb-8">
              View detailed information about our equipment
            </p>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-8 max-w-2xl mx-auto">
              <p className="text-white">
                Equipment ID: {id}
              </p>
              <p className="text-white mt-4">
                Our equipment detail page is coming soon. You'll be able to view comprehensive information about each piece of equipment.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EquipmentDetail;