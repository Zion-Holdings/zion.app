import React from 'react';

interface TrustScoreBadgeProps {
  score: number | null | undefined;
  tooltipText?: string;
}

const TrustScoreBadge: React.FC<TrustScoreBadgeProps> = ({ score, tooltipText }) => {
  const displayScore = score !== null && score !== undefined ? score : 'N/A';
  const defaultTooltip = score !== null && score !== undefined ? `Detailed analysis: ${tooltipText || 'No analysis available'}` : 'Trust score not yet calculated.';

  const getScoreColor = () => {
    if (score === null || score === undefined) return 'text-gray-500';
    if (score > 85) return 'text-green-600';
    if (score > 70) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div
      className="trust-score-badge p-2 border rounded-md shadow-sm bg-white inline-block"
      title={tooltipText || defaultTooltip} // Simple title attribute for tooltip
    >
      <span className={`font-semibold ${getScoreColor()}`}>
        Zion Trust Score: {displayScore}/100
      </span>
      {/* Basic CSS Tooltip (optional, if title attribute is not enough) */}
      {/* <span className="tooltip-text">{tooltipText}</span> */}
      <style jsx>{`
        .trust-score-badge {
          position: relative;
          cursor: help;
        }
        // Example for a more styled tooltip - can be expanded
        // .tooltip-text {
        //   visibility: hidden;
        //   width: 200px;
        //   background-color: black;
        //   color: #fff;
        //   text-align: center;
        //   border-radius: 6px;
        //   padding: 5px 0;
        //   position: absolute;
        //   z-index: 1;
        //   bottom: 125%; // Position above the badge
        //   left: 50%;
        //   margin-left: -100px; // Use half of the width to center
        //   opacity: 0;
        //   transition: opacity 0.3s;
        // }
        // .trust-score-badge:hover .tooltip-text {
        //   visibility: visible;
        //   opacity: 1;
        // }
      `}</style>
    </div>
  );
};

export default TrustScoreBadge;
