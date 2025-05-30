import React, { createContext, useContext, useEffect, useState } from 'react';
import { UnleashClient, type Variant } from 'unleash-proxy-client';

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
    client.on('ready', () => setReady(true));
    client.start();
  }, [client]);

  const isEnabled = (name: string) => (ready ? client.isEnabled(name) : false);
  const getVariant = (name: string) => (ready ? client.getVariant(name) : { name: 'disabled' } as Variant);
  const track = (event: string) => client.track(event);

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
