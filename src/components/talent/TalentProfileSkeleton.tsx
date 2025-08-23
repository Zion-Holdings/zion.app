import React from 'react';

const TalentProfileSkeleton: React.FC = () => (
  <main className="min-h-screen bg-zion-blue py-8 text-white animate-pulse" data-testid="talent-profile-skeleton">
    <div className="container mx-auto px-4 space-y-6">
      {/* Name Placeholder */}
      <div className="h-8 bg-gray-700 rounded w-3/4 mb-2"></div>
      {/* Title Placeholder */}
      <div className="h-4 bg-gray-700 rounded w-1/2 mb-6"></div>

      {/* Bio Placeholder */}
      <div className="space-y-2 mb-6">
        <div className="h-4 bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-700 rounded w-full"></div>
        <div className="h-4 bg-gray-700 rounded w-5/6"></div>
      </div>

      {/* Skills Placeholder */}
      <section className="mb-6">
        <div className="h-6 bg-gray-700 rounded w-1/4 mb-3"></div> {/* "Skills" heading */}
        <div className="flex flex-wrap gap-2">
          <div className="h-6 bg-gray-700 rounded-md w-20"></div>
          <div className="h-6 bg-gray-700 rounded-md w-24"></div>
          <div className="h-6 bg-gray-700 rounded-md w-16"></div>
          <div className="h-6 bg-gray-700 rounded-md w-28"></div>
        </div>
      </section>

      {/* Hourly Rate Placeholder (Example) */}
      <div className="h-4 bg-gray-700 rounded w-1/3 mb-6"></div>

      {/* Contact Placeholder (Example) */}
      <section className="mb-6">
        <div className="h-6 bg-gray-700 rounded w-1/4 mb-3"></div> {/* "Contact" heading */}
        <div className="space-y-2">
            <div className="h-4 bg-gray-700 rounded w-1/2"></div>
            <div className="h-4 bg-gray-700 rounded w-1/2"></div>
        </div>
      </section>

      {/* Portfolio Placeholder (Example) */}
      <section className="mb-6">
        <div className="h-6 bg-gray-700 rounded w-1/4 mb-3"></div> {/* "Portfolio" heading */}
        <div className="space-y-3">
            <div className="border-b border-gray-800 pb-3">
                <div className="h-5 bg-gray-700 rounded w-1/2 mb-1"></div>
                <div className="h-3 bg-gray-700 rounded w-full"></div>
            </div>
            <div className="border-b border-gray-800 pb-3">
                <div className="h-5 bg-gray-700 rounded w-3/4 mb-1"></div>
                <div className="h-3 bg-gray-700 rounded w-full"></div>
            </div>
        </div>
      </section>

      {/* Button Placeholder */}
      <div className="h-10 bg-gray-700 rounded w-24"></div>
    </div>
  </main>
);

export default TalentProfileSkeleton;
