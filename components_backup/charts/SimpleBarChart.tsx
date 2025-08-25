import React, { useMemo } from 'react';

export type BarDatum = { label: string; value: number; color?: string };
export type SimpleBarChartProps = {
  data: BarDatum[];
  max?: number;
  onExportCsv?: (rows: Array<Record<string, string | number>>) => void;
};

export default function SimpleBarChart({ data, max, onExportCsv }: SimpleBarChartProps) {
  const maxValue = max ?? Math.max(...data.map(d => d.value), 1);
  const csvRows = useMemo(() => data.map(d => ({ label: d.label, value: d.value })), [data]);

  return (
    <div>
      <div className="flex justify-end mb-2">
        {onExportCsv && (
          <button className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800" onClick={() => onExportCsv(csvRows)}>Export CSV</button>
        )}
      </div>
      <div className="space-y-2">
        {data.map((d, idx) => (
          <div key={d.label} className="grid grid-cols-12 items-center gap-2">
            <div className="col-span-3 text-xs md:text-sm truncate" title={d.label}>{d.label}</div>
            <div className="col-span-9">
              <div className="h-3 rounded bg-gray-200 dark:bg-gray-800 overflow-hidden">
                <div
                  className="h-3 rounded"
                  style={{ width: `${(d.value / maxValue) * 100}%`, backgroundColor: d.color || ['#2563eb', '#16a34a', '#f59e0b', '#ef4444'][idx % 4] }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}