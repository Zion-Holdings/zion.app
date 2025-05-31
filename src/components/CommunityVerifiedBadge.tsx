import React from 'react';

interface CommunityVerifiedBadgeProps {
  endorsementCount: number;
  threshold?: number;
  className?: string;
}

const CommunityVerifiedBadge: React.FC<CommunityVerifiedBadgeProps> = ({
  endorsementCount,
  threshold = 3,
  className = ''
}) => {
  if (endorsementCount < threshold) {
    return null; // Don't render if below threshold
  }

  return (
    <div
      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800 shadow-sm ${className}`}
      title={`Verified by the community with ${endorsementCount} endorsements.`}
    >
      {/* Example: Using an SVG icon (Heroicons check-circle) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-1.5"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>
      Community Verified
    </div>
  );
};

export default CommunityVerifiedBadge;
