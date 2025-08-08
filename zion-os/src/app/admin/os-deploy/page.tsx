"use client";

import { useState } from "react";
import { FeatureKeys } from "@/lib/zod";

export default function AdminDeployPage() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage(null);
    const formData = new FormData(event.currentTarget);
    const features: Record<string, boolean> = {};
    FeatureKeys.forEach((k) => (features[k] = formData.get(k) === "on"));

    const payload = {
      instanceName: String(formData.get("instanceName") || ""),
      domain: String(formData.get("domain") || "" ) || undefined,
      subdomain: String(formData.get("subdomain") || "" ) || undefined,
      vertical: String(formData.get("vertical") || "GENERAL"),
      defaultLanguage: String(formData.get("defaultLanguage") || "en"),
      tokenSystem: String(formData.get("tokenSystem") || "SHARED"),
      governanceType: String(formData.get("governanceType") || "ADMIN"),
      region: String(formData.get("region") || "") || undefined,
      country: String(formData.get("country") || "") || undefined,
      features,
      addons: {
        paymentGateway: String(formData.get("paymentGateway") || "") || undefined,
        sovereignTreasury: formData.get("sovereignTreasury") === "on",
        dualGovernance: formData.get("dualGovernance") === "on",
        aiModeration: formData.get("aiModeration") === "on",
        affiliatePanel: formData.get("affiliatePanel") === "on",
      },
    };

    const res = await fetch("/api/deploy", { method: "POST", body: JSON.stringify(payload) });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) {
      setMessage(data.error || "Deployment failed");
      return;
    }
    setMessage(`Deployment queued: ${data.deploymentId}`);
    (event.target as HTMLFormElement).reset();
  }

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold">Unified Deployment</h1>
      <form onSubmit={onSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-3">
          <label className="block">Instance Name<input name="instanceName" required className="mt-1 w-full bg-zinc-900 border border-white/10 rounded p-2" /></label>
          <div className="grid grid-cols-2 gap-3">
            <label className="block">Domain<input name="domain" placeholder="zion.example.com" className="mt-1 w-full bg-zinc-900 border border-white/10 rounded p-2" /></label>
            <label className="block">Subdomain<input name="subdomain" placeholder="latam" className="mt-1 w-full bg-zinc-900 border border-white/10 rounded p-2" /></label>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <label className="block">Vertical<select name="vertical" className="mt-1 w-full bg-zinc-900 border border-white/10 rounded p-2">
              <option>GENERAL</option>
              <option>HEALTH</option>
              <option>EDUCATION</option>
              <option>LAW</option>
              <option>GOV</option>
            </select></label>
            <label className="block">Default Language<input name="defaultLanguage" defaultValue="en" className="mt-1 w-full bg-zinc-900 border border-white/10 rounded p-2" /></label>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <label className="block">Token System<select name="tokenSystem" className="mt-1 w-full bg-zinc-900 border border-white/10 rounded p-2">
              <option value="SHARED">ZION$ Shared</option>
              <option value="LOCAL">Local</option>
            </select></label>
            <label className="block">Governance<select name="governanceType" className="mt-1 w-full bg-zinc-900 border border-white/10 rounded p-2">
              <option value="ADMIN">Admin</option>
              <option value="DAO_LITE">DAO-lite</option>
              <option value="DAO_FULL">Full DAO</option>
            </select></label>
          </div>
          <div className="grid grid-cols-2 gap-3">
            <label className="block">Region<input name="region" className="mt-1 w-full bg-zinc-900 border border-white/10 rounded p-2" /></label>
            <label className="block">Country<input name="country" className="mt-1 w-full bg-zinc-900 border border-white/10 rounded p-2" /></label>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <div className="font-semibold mb-2">Feature Toggles</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {FeatureKeys.map((k) => (
                <label key={k} className="flex items-center gap-2 text-sm">
                  <input type="checkbox" name={k} />
                  <span>{labelFor(k)}</span>
                </label>
              ))}
            </div>
          </div>
          <div>
            <div className="font-semibold mb-2">Optional Add-ons</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm">
              <label className="flex items-center gap-2"><input type="checkbox" name="sovereignTreasury" /> Sovereign DAO treasury</label>
              <label className="flex items-center gap-2"><input type="checkbox" name="dualGovernance" /> Dual governance (local + global)</label>
              <label className="flex items-center gap-2"><input type="checkbox" name="aiModeration" /> AI moderation system</label>
              <label className="flex items-center gap-2"><input type="checkbox" name="affiliatePanel" /> Gov/institution affiliate panel</label>
              <label className="block col-span-2">Payment Gateway<select name="paymentGateway" className="mt-1 w-full bg-zinc-900 border border-white/10 rounded p-2">
                <option value="">None</option>
                <option value="stripe">Stripe</option>
                <option value="coinbase-commerce">Coinbase Commerce</option>
              </select></label>
            </div>
          </div>
        </div>

        <div className="md:col-span-2 flex items-center gap-3">
          <button disabled={loading} className="px-4 py-2 rounded bg-zion-blue text-white disabled:opacity-50">{loading ? "Deploying..." : "Deploy Instance"}</button>
          {message && <div className="text-sm opacity-80">{message}</div>}
        </div>
      </form>
    </div>
  );
}

function labelFor(key: string) {
  switch (key) {
    case "marketplace": return "Marketplace (Jobs, Talent, Projects)";
    case "zion_gpt": return "ZionGPT Core";
    case "resume_ai": return "Resume Builder + Proposal AI";
    case "token_rewards": return "Token system + rewards";
    case "onchain_contracts": return "On-chain contract builder";
    case "kyc_aml": return "KYC/AML + ID verification";
    case "dao_voting": return "DAO proposal voting";
    case "incubator_grants": return "Incubator + Grants";
    case "academy": return "Zion Academy";
    case "partner_api": return "API access for partners";
    case "regional_dashboards": return "Regional/institutional dashboards";
    case "vendor_plugin": return "White-label vendor plugin";
    case "web3_login": return "Web3 login + DID";
    case "multi_currency": return "Multi-currency support";
    default: return key;
  }
}