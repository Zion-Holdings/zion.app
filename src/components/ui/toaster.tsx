import * as React from "react";
import { Toaster as SonnerToaster } from "sonner";

export function Toaster() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-atomic="true"
    >
      <div id="toast-announcer" className="sr-only" aria-live="polite" aria-atomic="true" />
      <SonnerToaster
        position="top-right"
        closeButton
        visibleToasts={3}
        toastOptions={{
          className: "bg-zion-blue-dark text-white border border-zion-blue-light shadow-lg shadow-zion-purple/10",
          style: {
            background: '#0a1429',
            color: '#fff',
            border: '1px solid #1e3a6f',
            zIndex: 40,
            marginTop: '80px',
          },
          duration: 4000,
          descriptionClassName: "text-zion-slate-light"
        }}
        expand={false}
        richColors={false}
        gap={8}
        offset="80px"
      />
    </div>
  );
}
