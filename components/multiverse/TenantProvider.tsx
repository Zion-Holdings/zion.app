import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { resolveTenantFromHost, Tenant } from '../../utils/tenant';

export type TenantContextValue = {
  tenant: Tenant | null;
  setTenant: (tenant: Tenant | null) => void;
  loading: boolean;
};

const TenantContext = createContext<TenantContextValue | undefined>(undefined);

export function TenantProvider({ children, initialTenant = null }: { children: React.ReactNode; initialTenant?: Tenant | null }) {
  const [tenant, setTenant] = useState<Tenant | null>(initialTenant);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    if (tenant) return;
    const host = typeof window !== 'undefined' ? window.location.host : '';
    if (!host) return;
    setLoading(true);
    resolveTenantFromHost(host)
      .then((t) => setTenant(t))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    if (!tenant) return;
    const root = document.documentElement;
    if (tenant.accentColorHex) root.style.setProperty('--accent', tenant.accentColorHex);
    if (tenant.brandColorHex) root.style.setProperty('--brand', tenant.brandColorHex);
  }, [tenant]);

  const value = useMemo(() => ({ tenant, setTenant, loading }), [tenant, loading]);
  return <TenantContext.Provider value={value}>{children}</TenantContext.Provider>;
}

export function useTenant(): TenantContextValue {
  const ctx = useContext(TenantContext);
  if (!ctx) throw new Error('useTenant must be used within TenantProvider');
  return ctx;
}