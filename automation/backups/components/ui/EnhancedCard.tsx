import React from "react";

interface EnhancedCardProps {
  className?: string;
  children?: React.ReactNode;
}

export default function EnhancedCard(_props: EnhancedCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
      <div className="space-y-4">
        <h3 className="text-xl font-semibold text-gray-900">Enhanced Card</h3>
        <p className="text-gray-600">
          This is an enhanced card component with modern styling and hover effects.
        </p>
        <div className="flex justify-end">
          <button className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}
