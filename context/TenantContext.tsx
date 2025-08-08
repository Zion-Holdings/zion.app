import React, { createContext, useContext } from "react";
import type { Tenant } from "../utils/tenant";

export type TenantContextValue = {
  tenant: Tenant;
};

const TenantContext = createContext<TenantContextValue | undefined>(undefined);

export function TenantProvider({ tenant, children }: { tenant: Tenant; children: React.ReactNode }) {
  return (
    <TenantContext.Provider value={{ tenant }}>
      <div style={{
        // Expose brand color as CSS variable for ad-hoc usage
        ["--brand-color" as any]: tenant.primaryColor,
      }}>
        {children}
      </div>
    </TenantContext.Provider>
  );
}

export function useTenant(): TenantContextValue {
  const ctx = useContext(TenantContext);
  if (!ctx) throw new Error("useTenant must be used within a TenantProvider");
  return ctx;
}