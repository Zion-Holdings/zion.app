import React, { useMemo, useRef } from 'react';

export type LineSeries = { label: string; color?: string; points: { x: number; y: number }[] };
export type SimpleLineChartProps = {
  series: LineSeries[];
  width?: number;
  height?: number;
  yLabel?: string;
  xLabel?: string;
  onExportCsv?: (rows: Array<Record<string, number>>) => void;
  onExportPng?: (svgElement: SVGSVGElement) => void;
};

export default function SimpleLineChart({ series, width = 640, height = 260, yLabel, xLabel, onExportCsv, onExportPng }: SimpleLineChartProps) {
  const padding = 36;
  const svgRef = useRef<SVGSVGElement | null>(null);

  const allX = series.flatMap(s => s.points.map(p => p.x));
  const allY = series.flatMap(s => s.points.map(p => p.y));
  const minX = Math.min(...allX, 0);
  const maxX = Math.max(...allX, 1);
  const minY = Math.min(...allY, 0);
  const maxY = Math.max(...allY, 1);

  const xScale = (x: number) => padding + ((x - minX) / (maxX - minX || 1)) * (width - padding * 2);
  const yScale = (y: number) => height - padding - ((y - minY) / (maxY - minY || 1)) * (height - padding * 2);

  const csvRows = useMemo(() => {
    const keys = Array.from(new Set(series.flatMap(s => s.points.map(p => p.x)))).sort((a, b) => a - b);
    return keys.map(x => {
      const row: Record<string, number> = { x } as any;
      series.forEach(s => {
        const found = s.points.find(p => p.x === x);
        row[s.label] = found ? found.y : 0;
      });
      return row;
    });
  }, [series]);

  return (
    <div className="w-full">
      <div className="flex justify-end gap-2 mb-2">
        {onExportCsv && (
          <button className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800" onClick={() => onExportCsv(csvRows)}>Export CSV</button>
        )}
        {onExportPng && (
          <button className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800" onClick={() => svgRef.current && onExportPng(svgRef.current)}>Export PNG</button>
        )}
      </div>
      <svg ref={svgRef} width={width} height={height} className="w-full h-auto">
        <rect x={0} y={0} width={width} height={height} fill="transparent" />
        {/* axes */}
        <line x1={padding} y1={height - padding} x2={width - padding} y2={height - padding} stroke="#e5e7eb" />
        <line x1={padding} y1={padding} x2={padding} y2={height - padding} stroke="#e5e7eb" />
        {yLabel && <text x={8} y={padding - 8} fontSize={10} fill="#6b7280">{yLabel}</text>}
        {xLabel && <text x={width - padding} y={height - 8} fontSize={10} fill="#6b7280" textAnchor="end">{xLabel}</text>}
        {series.map((s, idx) => (
          <polyline
            key={s.label + idx}
            fill="none"
            stroke={s.color || ['#2563eb', '#16a34a', '#f59e0b', '#ef4444'][idx % 4]}
            strokeWidth={2}
            points={s.points.map(p => `${xScale(p.x)},${yScale(p.y)}`).join(' ')}
          />
        ))}
      </svg>
    </div>
  );
}