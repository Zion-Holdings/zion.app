import React from 'react';

export default function RiskIndicator({ status }: { status: 'High Trust' | 'Moderate Trust' | 'Risk Alert' }) {
  const map = {
    'High Trust': 'bg-green-100 text-green-800 border-green-300',
    'Moderate Trust': 'bg-yellow-100 text-yellow-800 border-yellow-300',
    'Risk Alert': 'bg-red-100 text-red-800 border-red-300',
  } as const;

  return (
    <span className={`text-xs px-2 py-1 rounded border ${map[status]}`}>
      {status}
    </span>
  );
}