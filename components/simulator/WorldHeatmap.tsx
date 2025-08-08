import React from 'react';
import type { SimulationParams } from '../../pages/simulator/2040';

// Minimal, dependency-free placeholder. Replace with real map library later.
export default function WorldHeatmap({ params }: { params: SimulationParams }) {
  const intensity = Math.min(1, params.freelanceGdpSharePct / 25);
  const fill = `rgba(99, 102, 241, ${0.2 + intensity * 0.6})`;

  return (
    <div className="w-full h-80 rounded overflow-hidden border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black flex items-center justify-center">
      <svg viewBox="0 0 800 400" className="w-full h-full">
        <rect x="0" y="0" width="800" height="400" fill={fill} />
        <text x="50%" y="50%" dominantBaseline="middle" textAnchor="middle" className="fill-gray-700 dark:fill-gray-200" fontSize="16">
          World Heatmap Placeholder (intensity {Math.round(intensity * 100)}%)
        </text>
      </svg>
    </div>
  );
}