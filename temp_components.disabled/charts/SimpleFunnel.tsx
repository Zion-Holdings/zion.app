import React, { useMemo } from 'react';

export type FunnelStage = { label: string; value: number };
export type SimpleFunnelProps = {
  stages: FunnelStage[];
  onExportCsv?: (rows: Array<Record<string, string | number>>) => void;
};

export default function SimpleFunnel({ stages, onExportCsv }: SimpleFunnelProps) {
  const max = Math.max(...stages.map(s => s.value), 1);
  const csvRows = useMemo(() => stages.map(s => ({ stage: s.label, value: s.value })), [stages]);

  return (
    <div>
      <div className="flex justify-end mb-2">
        {onExportCsv && <button className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-gray-800" onClick={() => onExportCsv(csvRows)}>Export CSV</button>}
      </div>
      <div className="space-y-2">
        {stages.map((s, idx) => (
          <div key={s.label} className="rounded bg-gradient-to-r from-indigo-500/70 to-indigo-400/60 text-white px-3 py-2" style={{ width: `${(s.value / max) * 100}%` }}>
            <div className="flex justify-between text-xs">
              <span>{s.label}</span>
              <span>{s.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}