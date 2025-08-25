import React from 'react';

export type LineChartPoint = { label: string; value: number };
export type BarChartDatum = { label: string; value: number };
export type DonutChartSlice = { label: string; value: number; color?: string };

export function LineChart({ points, height = 160 }: { points: LineChartPoint[]; height?: number }) {
  const width = Math.max(320, points.length * 40);
  const padding = 24;
  const values = points.map((p) => p.value);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min || 1;
  const xStep = (width - padding * 2) / Math.max(1, points.length - 1);
  const toX = (i: number) => padding + i * xStep;
  const toY = (v: number) => padding + (height - padding * 2) * (1 - (v - min) / range);
  const pathD = points
    .map((p, i) => `${i === 0 ? 'M' : 'L'} ${toX(i)} ${toY(p.value)}`)
    .join(' ');

  return (
    <div className="w-full overflow-x-auto">
      <svg width={width} height={height} className="text-blue-500">
        <defs>
          <linearGradient id="lineGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#60a5fa" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#60a5fa" stopOpacity="0" />
          </linearGradient>
        </defs>
        <path d={pathD} fill="none" stroke="currentColor" strokeWidth={2} />
        {/* Area fill */}
        <path
          d={`${pathD} L ${toX(points.length - 1)} ${height - padding} L ${toX(0)} ${height - padding} Z`}
          fill="url(#lineGradient)"
          stroke="none"
        />
        {/* Dots */}
        {points.map((p, i) => (
          <circle key={p.label} cx={toX(i)} cy={toY(p.value)} r={3} fill="#3b82f6" />
        ))}
        {/* X labels */}
        {points.map((p, i) => (
          <text key={`x-${p.label}`} x={toX(i)} y={height - 4} textAnchor="middle" className="fill-gray-500 text-[10px]">
            {p.label}
          </text>
        ))}
      </svg>
    </div>
  );
}

export function BarChart({ data, height = 180 }: { data: BarChartDatum[]; height?: number }) {
  const width = Math.max(320, data.length * 60);
  const padding = 24;
  const values = data.map((d) => d.value);
  const max = Math.max(...values, 1);
  const barWidth = (width - padding * 2) / Math.max(1, data.length);

  return (
    <div className="w-full overflow-x-auto">
      <svg width={width} height={height}>
        {data.map((d, i) => {
          const barHeight = ((height - padding * 2) * d.value) / max;
          const x = padding + i * barWidth + 8;
          const y = height - padding - barHeight;
          return (
            <g key={d.label}>
              <rect x={x} y={y} width={barWidth - 16} height={barHeight} rx={6} className="fill-emerald-500/80" />
              <text x={x + (barWidth - 16) / 2} y={height - 6} textAnchor="middle" className="fill-gray-500 text-[10px]">
                {d.label}
              </text>
            </g>
          );
        })}
      </svg>
    </div>
  );
}

export function DonutChart({ slices, size = 160 }: { slices: DonutChartSlice[]; size?: number }) {
  const total = slices.reduce((sum, s) => sum + s.value, 0) || 1;
  const radius = size / 2;
  const thickness = 18;
  let cumulative = 0;

  const colors = ['#6366f1', '#22c55e', '#f59e0b', '#ef4444', '#06b6d4', '#a78bfa'];

  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="mx-auto">
      {slices.map((s, i) => {
        const startAngle = (cumulative / total) * 2 * Math.PI;
        cumulative += s.value;
        const endAngle = (cumulative / total) * 2 * Math.PI;
        const largeArc = endAngle - startAngle > Math.PI ? 1 : 0;
        const sx = radius + radius * Math.cos(startAngle);
        const sy = radius + radius * Math.sin(startAngle);
        const ex = radius + radius * Math.cos(endAngle);
        const ey = radius + radius * Math.sin(endAngle);
        const pathData = `M ${sx} ${sy} A ${radius} ${radius} 0 ${largeArc} 1 ${ex} ${ey} L ${radius} ${radius} Z`;
        return <path key={s.label} d={pathData} fill={s.color || colors[i % colors.length]} opacity={0.85} />;
      })}
      <circle cx={radius} cy={radius} r={radius - thickness} fill="white" />
      <text x={radius} y={radius} textAnchor="middle" dominantBaseline="middle" className="fill-gray-700 text-xs">
        Distribution
      </text>
    </svg>
  );
}