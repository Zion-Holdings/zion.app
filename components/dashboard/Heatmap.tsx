import React from 'react';

export type HeatmapCell = { value: number };

export type HeatmapProps = {
  rows: number;
  cols: number;
  data: HeatmapCell[]; // length rows*cols
  title?: string;
};

export default function Heatmap({ rows, cols, data, title }: HeatmapProps) {
  const max = Math.max(1, ...data.map((d) => d.value));
  return (
    <div>
      {title ? <div className="mb-2 text-sm text-gray-600 dark:text-gray-400">{title}</div> : null}
      <div
        className="grid gap-1"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {data.map((cell, idx) => {
          const intensity = cell.value / max;
          const bg = `rgba(59,130,246,${0.1 + intensity * 0.9})`;
          return <div key={idx} className="h-4 rounded" style={{ backgroundColor: bg }} />;
        })}
      </div>
    </div>
  );
}