import type { ReactNode } from "react";

export default function AdminLayout({ children }: { children: ReactNode }) {
  return (
    <section className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="rounded border border-white/10 p-4">
          <div className="font-semibold mb-2">Instance Tree</div>
          <div className="text-sm opacity-80">Zion Global → Submarketplaces</div>
          <div className="mt-3 h-24 bg-zinc-900/50 rounded" />
        </div>
        <div className="rounded border border-white/10 p-4 md:col-span-2">
          <div className="flex gap-3 text-sm">
            <a className="underline" href="/admin/os-deploy">Deploy</a>
            <a className="underline" href="/admin/instances">Instances</a>
          </div>
        </div>
      </div>
      {children}
    </section>
  );
}