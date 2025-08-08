import type { NextPage } from 'next';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import GeoFilter, { GeoMode } from '../../components/ui/GeoFilter';

const Index: NextPage = () => {
  const [geo, setGeo] = useState<{ countryCode?: string; country?: string } | null>(null);
  const [mode, setMode] = useState<GeoMode>('local');
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
        <title>Services - Zion Tech Solutions</title>
        <meta name="description" content="Services" />
      </Head>

      <main className="space-y-4 p-4">
        <h1 className="text-xl font-semibold">Services</h1>
        <div className="text-sm text-gray-600">Detected: {geo?.country || geo?.countryCode || 'Unknown'}</div>

        <GeoFilter
          mode={mode}
          countryCode={countryCode}
          onChange={(u) => {
            setMode(u.mode);
            if (u.countryCode !== undefined) setCountryCode(u.countryCode);
          }}
          countries={countries}
        />

        <div className="text-sm text-gray-600">Mode: {mode} {mode === 'country' ? `(${countryCode || 'none'})` : ''}</div>

        <p className="text-sm text-gray-700">(Demo) Listings would be prioritized by your region using this filter.</p>
      </main>
    </div>
  );
};

export default Index;