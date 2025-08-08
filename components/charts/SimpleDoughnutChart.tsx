import React, { useMemo, useRef } from 'react';

export type DoughnutSlice = { label: string; value: number; color?: string };
export type SimpleDoughnutChartProps = {
  data: DoughnutSlice[];
  radius?: number;
  thickness?: number;
  onExportCsv?: (rows: Array<Record<string, string | number>>) => void;
  onExportPng?: (svgElement: SVGSVGElement) => void;
};

export default function SimpleDoughnutChart({ data, radius = 80, thickness = 20, onExportCsv, onExportPng }: SimpleDoughnutChartProps) {
  const svgRef = useRef<SVGSVGElement | null>(null);
  const total = Math.max(data.reduce((acc, d) => acc + d.value, 0), 1);
  const circumference = 2 * Math.PI * radius;

  const csvRows = useMemo(() => data.map(d => ({ label: d.label, value: d.value })), [data]);

  let offset = 0;
  const slices = data.map((d, idx) => {
    const frac = d.value / total;
    const length = frac * circumference;
    const dasharray = `${length} ${circumference - length}`;
    const stroke = d.color || ['#2563eb', '#16a34a', '#f59e0b', '#ef4444', '#22d3ee'][idx % 5];
    const circle = (
      <circle
        key={d.label}
        r={radius}
        cx={radius + 10}
        cy={radius + 10}
        fill="transparent"
        stroke={stroke}
        strokeWidth={thickness}
        strokeDasharray={dasharray}
        strokeDashoffset={-offset}
      />
    );
    offset += length;
    return circle;
  });

  return (
    <div className="w-full">
      <div className="flex justify-end gap-2 mb-2">
        {onExportCsv && <button className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800" onClick={() => onExportCsv(csvRows)}>Export CSV</button>}
        {onExportPng && <button className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800" onClick={() => svgRef.current && onExportPng(svgRef.current)}>Export PNG</button>}
      </div>
      <svg ref={svgRef} width={radius * 2 + 20} height={radius * 2 + 20} className="mx-auto block">
        <circle r={radius} cx={radius + 10} cy={radius + 10} fill="transparent" stroke="#e5e7eb" strokeWidth={thickness} />
        {slices}
      </svg>
      <div className="flex flex-wrap justify-center gap-3 mt-3">
        {data.map((d, idx) => (
          <div key={d.label} className="flex items-center gap-2 text-xs">
            <span className="inline-block w-3 h-3 rounded" style={{ backgroundColor: d.color || ['#2563eb', '#16a34a', '#f59e0b', '#ef4444', '#22d3ee'][idx % 5] }} />
            <span>{d.label} ({((d.value / total) * 100).toFixed(0)}%)</span>
          </div>
        ))}
      </div>
    </div>
  );
}