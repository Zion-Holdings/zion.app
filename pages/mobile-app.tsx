import { useEffect, useMemo, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
// Removed next/image for simplicity
import { v4 as uuidv4 } from 'uuid';
import type { AppMetadata } from '../utils/types/appMetadata';

const loadMetadata = async (): Promise<AppMetadata> => {
  const res = await fetch('/api/app-metadata');
  return res.json();
};

export default function MobileAppPage() {
  const [data, setData] = useState<AppMetadata | null>(null);
  const [isBannerVisible, setBannerVisible] = useState(true);

  useEffect(() => {
    loadMetadata().then(setData).catch(() => setData(null));
  }, []);

  const pageTitle = data?.seo.title || 'Zion AI Marketplace App';
  const pageDescription = data?.seo.description || 'Hire top AI talent or find global IT jobs on the go.';
  const pageKeywords = (data?.seo.keywords || ['AI freelancer app', 'hire tech', 'find IT jobs']).join(', ');

  const iosUrl = data?.store.iosStoreUrl || '#';
  const androidUrl = data?.store.androidStoreUrl || '#';

  const trackClick = async (platform: 'ios' | 'android' | 'unknown') => {
    try {
      await fetch('/api/analytics/install-click', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ id: uuidv4(), platform, sourcePath: '/mobile-app' })
      });
    } catch (_) {}
  };

  const appBannerMeta = useMemo(() => ({
    appId: data?.store.iosAppId || '',
    appArgument: data?.store.webFallbackUrl || 'https://zion.app/mobile-app'
  }), [data]);

  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta name="keywords" content={pageKeywords} />
        <meta name="apple-itunes-app" content={`app-id=${appBannerMeta.appId}${appBannerMeta.appArgument ? `, app-argument=${appBannerMeta.appArgument}` : ''}`} />
        <meta name="format-detection" content="telephone=no" />
        <link rel="canonical" href="https://zion.app/mobile-app" />
      </Head>

      {isBannerVisible && (
        <div className="w-full bg-black text-white px-4 py-3 flex items-center justify-between sticky top-0 z-40">
          <div className="flex items-center gap-3">
            <img src="/favicon.svg" alt="Zion" width={24} height={24} />
            <div className="text-sm">
              <div className="font-semibold">Zion App</div>
              <div className="opacity-80">Get the app for a better experience</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            {iosUrl !== '#' && (
              <a
                href={iosUrl}
                onClick={() => trackClick('ios')}
                className="bg-white text-black px-3 py-1 rounded text-sm"
              >Open</a>
            )}
            <button className="opacity-80" onClick={() => setBannerVisible(false)}>Dismiss</button>
          </div>
        </div>
      )}

      <main className="mx-auto max-w-6xl px-6 py-12">
        <section className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight">{data?.appTitle || 'Zion AI Marketplace App'}</h1>
            <p className="mt-4 text-lg text-gray-700">{data?.shortDescription || 'Hire top AI talent or find global IT jobs on the go.'}</p>
            <div className="mt-6 flex gap-4">
              {iosUrl !== '#' && (
                <a href={iosUrl} onClick={() => trackClick('ios')} aria-label="Download on the App Store">
                  <img src="/badges/app-store-badge.svg" alt="App Store" width={160} height={48} />
                </a>
              )}
              {androidUrl !== '#' && (
                <a href={androidUrl} onClick={() => trackClick('android')} aria-label="Get it on Google Play">
                  <img src="/badges/google-play-badge.svg" alt="Google Play" width={180} height={54} />
                </a>
              )}
            </div>
            <div className="mt-6">
              <Link href="/open-app">
                <a className="text-blue-600 underline">Open in app</a>
              </Link>
            </div>
            <div className="mt-6">
              <p className="font-medium">Scan to download</p>
              <img src="/qr/zion-app-qr.svg" alt="QR to download" width={128} height={128} />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            {(data?.screenshots || []).map((src) => (
              <div key={src} className="rounded-xl overflow-hidden shadow-lg border">
                <img src={src} alt="App screenshot" width={400} height={800} className="w-full h-auto" />
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16">
          <h2 className="text-2xl font-bold">Why Zion</h2>
          <ul className="mt-4 grid md:grid-cols-2 gap-3 list-disc list-inside">
            {(data?.features || []).map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </section>

        <section className="mt-16 grid md:grid-cols-3 gap-6">
          {(data?.testimonials || []).map((t, idx) => (
            <blockquote key={idx} className="p-4 rounded-xl border shadow-sm bg-white">
              <p className="italic">“{t.quote}”</p>
              <footer className="mt-2 text-sm text-gray-600">— {t.author}{t.role ? `, ${t.role}` : ''}</footer>
            </blockquote>
          ))}
        </section>

        {data?.longDescription && (
          <section className="mt-16 prose max-w-none">
            <h2>About the app</h2>
            <p>{data.longDescription}</p>
          </section>
        )}

        {data?.changelog?.length ? (
          <section className="mt-16">
            <h2 className="text-2xl font-bold">Changelog</h2>
            <ul className="mt-4 space-y-3">
              {data.changelog.map((c) => (
                <li key={c.version} className="border rounded p-3">
                  <div className="font-semibold">v{c.version}</div>
                  <div className="text-sm text-gray-600">{c.dateISO}</div>
                  <p className="mt-2 whitespace-pre-line">{c.notes}</p>
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </main>
    </>
  );
}