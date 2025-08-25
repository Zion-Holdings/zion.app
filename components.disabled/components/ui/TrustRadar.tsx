import React from 'react';

export type RadarMetric = { label: string; value: number }; // value 0..100

export default function TrustRadar({ metrics, size = 180 }: { metrics: RadarMetric[]; size?: number }) {
  const num = metrics.length;
  const radius = size / 2 - 16;
  const center = size / 2;

  const points = metrics.map((m, i) => {
    const angle = (Math.PI * 2 * i) / num - Math.PI / 2; // start at top
    const r = (m.value / 100) * radius;
    const x = center + r * Math.cos(angle);
    const y = center + r * Math.sin(angle);
    return `${x},${y}`;
  }).join(' ');

  const grid = Array.from({ length: 4 }, (_, idx) => (idx + 1) / 4).map((t, ringIdx) => {
    const ring = metrics.map((_, i) => {
      const angle = (Math.PI * 2 * i) / num - Math.PI / 2;
      const r = t * radius;
      const x = center + r * Math.cos(angle);
      const y = center + r * Math.sin(angle);
      return `${x},${y}`;
    }).join(' ');
    return <polygon key={ringIdx} points={ring} fill="none" stroke="#e5e7eb" strokeWidth={1} />;
  });

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="text-gray-700">
      <g>
        {grid}
        <polygon points={points} fill="rgba(59,130,246,0.25)" stroke="#3b82f6" strokeWidth={2} />
        {metrics.map((m, i) => {
          const angle = (Math.PI * 2 * i) / num - Math.PI / 2;
          const x = center + (radius + 10) * Math.cos(angle);
          const y = center + (radius + 10) * Math.sin(angle);
          return (
            <text key={m.label} x={x} y={y} fontSize={10} textAnchor="middle" dominantBaseline="middle">{m.label}</text>
          );
        })}
      </g>
    </svg>
  );
}