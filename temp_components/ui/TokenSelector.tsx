import React from 'react';

export type TokenOption = { symbol: string; label: string; value: string };

export default function TokenSelector({ value, onChange }: { value: string; onChange: (v: string) => void }) {
  const options: TokenOption[] = [{ symbol: 'ZION$', label: 'ZION$', value: 'ZION' }];
  return (
    <div className="flex flex-col gap-1">
      <label className="text-xs text-gray-500">Token</label>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="border border-gray-300 dark:border-gray-700 rounded px-3 py-2 bg-white dark:bg-black"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>{o.label}</option>
        ))}
      </select>
    </div>
  );
}