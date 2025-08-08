import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import GeoFilter, { GeoMode } from '../../components/ui/GeoFilter';

const BlogIndex: NextPage = () => {
  const [geo, setGeo] = useState<{ countryCode?: string; country?: string } | null>(null);
  const [mode, setMode] = useState<GeoMode>('global');
  const [countryCode, setCountryCode] = useState<string>('');

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/api/geo/resolve');
        const data = await res.json();
        setGeo({ countryCode: data.countryCode, country: data.country });
        if (data.countryCode) setCountryCode(data.countryCode);
      } catch {}
    })();
  }, []);

  const countries = [
    { code: 'US', name: 'United States' },
    { code: 'BR', name: 'Brazil' },
    { code: 'CA', name: 'Canada' },
    { code: 'PT', name: 'Portugal' },
    { code: 'JP', name: 'Japan' },
    { code: 'DE', name: 'Germany' },
  ];

  return (
    <div>
      <Head>
        <title>Blog</title>
      </Head>
      <main className="space-y-4 p-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold">Blog</h1>
          <div className="flex items-center gap-3 text-xs text-gray-600">
            <span>Detected: {geo?.country || geo?.countryCode || 'Unknown'}</span>
            <GeoFilter
              mode={mode}
              countryCode={countryCode}
              onChange={(u) => {
                setMode(u.mode);
                if (u.countryCode !== undefined) setCountryCode(u.countryCode);
              }}
              countries={countries}
            />
          </div>
        </div>
        <p className="text-sm text-gray-700">(Demo) Content could be prioritized by your region.</p>
      </main>
    </div>
  );
};

export default BlogIndex;