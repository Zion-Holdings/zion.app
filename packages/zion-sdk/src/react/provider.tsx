import React, { createContext, useContext, useMemo } from 'react';
import { ZionClient, ZionClientOptions } from '../zion-client';

const ZionContext = createContext<ZionClient | null>(null);

export function ZionProvider({ options, children }: { options: ZionClientOptions; children: React.ReactNode }) {
  const client = useMemo(() => new ZionClient(options), [options.baseUrl, options.apiKey]);
  return <ZionContext.Provider value={client}>{children}</ZionContext.Provider>;
}

export function useZion() {
  const ctx = useContext(ZionContext);
  if (!ctx) throw new Error('useZion must be used within a ZionProvider');
  return ctx;
}