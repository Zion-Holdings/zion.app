import React, { createContext, useContext, useEffect, useState } from 'react';
import { UnleashClient } from 'unleash-proxy-client';

// The upstream types are not available in this environment. Define a minimal
// Variant interface that mirrors the shape returned by `getVariant`.
export interface Variant {
  name: string;
  enabled?: boolean;
  payload?: { type: string; value: string };
}

interface FeatureFlagContextValue {
  isEnabled: (name: string) => boolean;
  getVariant: (name: string) => Variant;
  track: (event: string) => void;
}

const FeatureFlagContext = createContext<FeatureFlagContextValue | undefined>(undefined);

export function FeatureFlagProvider({ children }: { children: React.ReactNode }) {
  const url = (import.meta as any)?.env?.VITE_UNLEASH_URL || process.env.UNLEASH_URL || '';
  const [client] = useState(() => new UnleashClient({ url, clientKey: 'frontend', appName: 'zion-app' }));
  const [ready, setReady] = useState(false);

  useEffect(() => {
    // `unleash-proxy-client` exposes a start method that returns a Promise. We
    // mark the provider as ready once the client has started.
    const startClient = async () => {
      try {
        await (client as any).start();
      } finally {
        setReady(true);
      }
    };

    startClient();
  }, [client]);

  const isEnabled = (name: string) => (ready ? client.isEnabled(name) : false);
  const getVariant = (name: string) => (ready ? client.getVariant(name) : { name: 'disabled' } as Variant);
  const track = (event: string) => {
    const anyClient = client as any;
    if (typeof anyClient.track === 'function') {
      anyClient.track(event);
    }
  };

  return (
    <FeatureFlagContext.Provider value={{ isEnabled, getVariant, track }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}

export function useFeatureFlags() {
  const ctx = useContext(FeatureFlagContext);
  if (!ctx) throw new Error('useFeatureFlags must be used within a FeatureFlagProvider');
  return ctx;
}
