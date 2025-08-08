import React from 'react';

export type GeoMode = 'local' | 'global' | 'country';

export type GeoFilterProps = {
  mode: GeoMode;
  countryCode?: string;
  onChange: (update: { mode: GeoMode; countryCode?: string }) => void;
  countries?: { code: string; name: string }[];
};

export default function GeoFilter({ mode, countryCode, onChange, countries = [] }: GeoFilterProps) {
  return (
    <div className="flex items-center gap-3 text-sm">
      <label className="flex items-center gap-1">
        <input type="radio" name="geoMode" value="local" checked={mode === 'local'} onChange={() => onChange({ mode: 'local' })} />
        Show local only
      </label>
      <label className="flex items-center gap-1">
        <input type="radio" name="geoMode" value="global" checked={mode === 'global'} onChange={() => onChange({ mode: 'global' })} />
        Global
      </label>
      <label className="flex items-center gap-1">
        <input type="radio" name="geoMode" value="country" checked={mode === 'country'} onChange={() => onChange({ mode: 'country', countryCode })} />
        By Country
      </label>
      {mode === 'country' ? (
        <select className="border rounded p-1" value={countryCode || ''} onChange={(e) => onChange({ mode: 'country', countryCode: e.target.value })}>
          <option value="">Select country</option>
          {countries.map((c) => (
            <option key={c.code} value={c.code}>{c.name}</option>
          ))}
        </select>
      ) : null}
    </div>
  );
}