import React from 'react';

export const TrustedBySection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          Trusted by Leading Companies
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
          <div className="text-gray-600 font-semibold">Microsoft</div>
          <div className="text-gray-600 font-semibold">Google</div>
          <div className="text-gray-600 font-semibold">Amazon</div>
          <div className="text-gray-600 font-semibold">Apple</div>
          <div className="text-gray-600 font-semibold">Meta</div>
        </div>
      </div>
    </section>
  );
};