import React from 'react';
import { ChainConfig } from '../../utils/chains';

export default function ChainBadge({ chain, selected = false }: { chain: ChainConfig; selected?: boolean }) {
  const initials = chain.name.split(' ').map((w) => w[0]).join('').slice(0, 3).toUpperCase();
  return (
    <div className={`flex items-center gap-2 px-3 py-2 rounded border ${selected ? 'border-blue-500 bg-blue-50 dark:bg-blue-900/20' : 'border-gray-300 dark:border-gray-700'}`}>
      <div className="w-6 h-6 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-xs font-semibold">
        {initials}
      </div>
      <span className="text-sm">{chain.name}</span>
    </div>
  );
}