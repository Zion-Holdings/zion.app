import { GetServerSideProps } from "next";
import { useState } from "react";
import { getTenantByHost, hostnameFromReqHeaders } from "../../utils/tenant";

export default function PartnerSettings({ tenant }: any) {
  const [heroTitle, setHeroTitle] = useState(tenant.heroTitle || "");
  const [heroSubtitle, setHeroSubtitle] = useState(tenant.heroSubtitle || "");
  const [footerText, setFooterText] = useState(tenant.footerText || "");

  async function save(e: React.FormEvent) {
    e.preventDefault();
    // Placeholder for API call to update tenant branding snippets
    alert("Settings saved (placeholder)");
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Brand Settings</h1>
      <form onSubmit={save} className="grid gap-3">
        <label className="flex flex-col gap-1">
          <span>Hero title</span>
          <input className="border rounded px-3 py-2" value={heroTitle} onChange={e => setHeroTitle(e.target.value)} />
        </label>
        <label className="flex flex-col gap-1">
          <span>Hero subtitle</span>
          <input className="border rounded px-3 py-2" value={heroSubtitle} onChange={e => setHeroSubtitle(e.target.value)} />
        </label>
        <label className="flex flex-col gap-1">
          <span>Footer text</span>
          <input className="border rounded px-3 py-2" value={footerText} onChange={e => setFooterText(e.target.value)} />
        </label>
        <div>
          <button className="px-4 py-2 rounded text-white" style={{ background: tenant.primaryColor }}>Save</button>
        </div>
      </form>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const host = hostnameFromReqHeaders(ctx.req.headers as any);
  const tenant = await getTenantByHost(host);
  return { props: { tenant } };
};