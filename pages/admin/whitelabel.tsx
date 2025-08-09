import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import { getTenantByHost, hostnameFromReqHeaders } from "../../utils/tenant";

type TenantRow = {
  id: string;
  brandName: string;
  subdomain: string | null;
  customDomain: string | null;
  primaryColor: string;
  logoUrl: string | null;
  themePreset: string;
  suspended: boolean;
  accountManager: string | null;
};

export default function WhiteLabelAdmin({ tenant }: any) {
  const [tenants, setTenants] = useState<TenantRow[]>([]);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    brandName: "",
    subdomain: "",
    primaryColor: "#4f46e5",
    customDomain: "",
    themePreset: "light",
  });
  const [logoFile, setLogoFile] = useState<File | null>(null);

  async function fetchTenants() {
    setLoading(true);
    const res = await fetch("/api/admin/tenants");
    const data = await res.json();
    setTenants(data.tenants || []);
    setLoading(false);
  }

  useEffect(() => { fetchTenants(); }, []);

  async function handleCreate(e: React.FormEvent) {
    e.preventDefault();
    const body = new FormData();
    body.append("brandName", form.brandName);
    body.append("subdomain", form.subdomain);
    body.append("primaryColor", form.primaryColor);
    body.append("customDomain", form.customDomain);
    body.append("themePreset", form.themePreset);
    if (logoFile) body.append("logo", logoFile);

    const res = await fetch("/api/admin/tenants", { method: "POST", body });
    const data = await res.json();
    if (res.ok) {
      await fetchTenants();
      setForm({ brandName: "", subdomain: "", primaryColor: "#4f46e5", customDomain: "", themePreset: "light" });
      setLogoFile(null);
      alert("Tenant created");
    } else {
      alert(data.error || "Failed to create tenant");
    }
  }

  async function updateTenant(id: string, payload: any) {
    const res = await fetch(`/api/admin/tenants/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (res.ok) fetchTenants();
  }

  return (
    <div className="space-y-10">
      <div>
        <h1 className="text-2xl font-bold">White‑Label Admin</h1>
        <p className="text-sm text-gray-600 dark:text-gray-300">Manage tenants, branding, subdomains and deployments.</p>
      </div>

      <section className="p-4 border rounded-md">
        <h2 className="font-semibold mb-3">Create / Request White‑Label Instance</h2>
        <form onSubmit={handleCreate} className="grid gap-3 md:grid-cols-2">
          <label className="flex flex-col gap-1">
            <span>Brand name</span>
            <input className="border rounded px-3 py-2" value={form.brandName} onChange={e => setForm({ ...form, brandName: e.target.value })} required />
          </label>
          <label className="flex flex-col gap-1">
            <span>Subdomain preference</span>
            <div className="flex items-center">
              <input className="border rounded-l px-3 py-2 flex-1" value={form.subdomain} onChange={e => setForm({ ...form, subdomain: e.target.value.replace(/\s+/g, '').toLowerCase() })} placeholder="aiagency" />
              <span className="border rounded-r px-3 py-2 bg-gray-50 dark:bg-gray-900">.ziontechmarketplace.com</span>
            </div>
          </label>
          <label className="flex flex-col gap-1">
            <span>Primary color</span>
            <input type="color" className="border rounded px-3 py-2 h-10" value={form.primaryColor} onChange={e => setForm({ ...form, primaryColor: e.target.value })} />
          </label>
          <label className="flex flex-col gap-1">
            <span>Logo upload</span>
            <input type="file" accept="image/*" onChange={e => setLogoFile(e.target.files?.[0] || null)} />
          </label>
          <label className="flex flex-col gap-1 md:col-span-2">
            <span>Optional custom URL</span>
            <input className="border rounded px-3 py-2" value={form.customDomain} onChange={e => setForm({ ...form, customDomain: e.target.value.toLowerCase() })} placeholder="www.yourbrand.com" />
            {form.customDomain && (
              <div className="text-xs text-gray-600 dark:text-gray-300 mt-2">
                Configure DNS: Create CNAME <code>{form.customDomain}</code> &rarr; <code>app.ziontechmarketplace.com</code>. Ensure wildcard SSL covers your domain.
              </div>
            )}
          </label>
          <label className="flex flex-col gap-1">
            <span>Theme preset</span>
            <select className="border rounded px-3 py-2" value={form.themePreset} onChange={e => setForm({ ...form, themePreset: e.target.value })}>
              <option value="light">Light</option>
              <option value="dark">Dark</option>
              <option value="neon">Neon</option>
              <option value="corporate">Corporate</option>
              <option value="startup">Startup</option>
            </select>
          </label>
          <div className="md:col-span-2">
            <button className="px-4 py-2 rounded text-white" style={{ background: tenant.primaryColor }}>Submit</button>
          </div>
        </form>
      </section>

      <section className="p-4 border rounded-md">
        <h2 className="font-semibold mb-3">All Tenants</h2>
        {loading ? <div>Loading...</div> : (
          <div className="overflow-auto">
            <table className="min-w-full text-sm">
              <thead>
                <tr className="text-left border-b">
                  <th className="py-2 pr-4">Brand</th>
                  <th className="py-2 pr-4">Subdomain</th>
                  <th className="py-2 pr-4">Custom Domain</th>
                  <th className="py-2 pr-4">Theme</th>
                  <th className="py-2 pr-4">Status</th>
                  <th className="py-2 pr-4">Actions</th>
                </tr>
              </thead>
              <tbody>
                {tenants.map(t => (
                  <tr key={t.id} className="border-b">
                    <td className="py-2 pr-4">{t.brandName}</td>
                    <td className="py-2 pr-4">{t.subdomain || '-'}</td>
                    <td className="py-2 pr-4">{t.customDomain || '-'}</td>
                    <td className="py-2 pr-4">{t.themePreset}</td>
                    <td className="py-2 pr-4">{t.suspended ? 'Suspended' : 'Active'}</td>
                    <td className="py-2 pr-4 flex gap-2">
                      <button className="px-3 py-1 border rounded" onClick={() => updateTenant(t.id, { action: t.suspended ? 'activate' : 'suspend' })}>
                        {t.suspended ? 'Activate' : 'Suspend'}
                      </button>
                      <button className="px-3 py-1 border rounded" onClick={() => updateTenant(t.id, { action: 'reset' })}>
                        Reset
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </section>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const host = hostnameFromReqHeaders(ctx.req.headers as any);
  const tenant = await getTenantByHost(host);
  return { props: { tenant } };
};