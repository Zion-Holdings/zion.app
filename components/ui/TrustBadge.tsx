import React from 'react';

export type TrustBadgeProps = {
  score: number;
  reason?: string;
  communityVerified?: boolean;
};

export default function TrustBadge({ score, reason, communityVerified }: TrustBadgeProps) {
  const color = score >= 85 ? 'bg-green-600' : score >= 60 ? 'bg-yellow-500' : 'bg-red-600';
  const title = reason || (score >= 85 ? 'Excellent track record and responsiveness.' : score >= 60 ? 'Solid record with some areas to improve.' : 'Multiple risk factors detected.');
  return (
    <div className="inline-flex items-center gap-2" title={title}>
      <span className={`text-xs px-2 py-1 rounded ${color} text-white`}>Zion Trust Score: {score}/100</span>
      {communityVerified && (
        <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-600 text-white" title="Community Verified by trusted peers">Community Verified</span>
      )}
    </div>
  );
}