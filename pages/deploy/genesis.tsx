import React, { useState } from "react";

interface ResultPayload {
  success: boolean;
  instanceSlug: string;
  configPath: string;
  assets: { path: string; kind: string; description?: string }[];
  summary: string;
  version: string;
}

export default function GenesisDeployPage() {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<ResultPayload | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    const formData = new FormData(event.currentTarget);
    const modules = {
      marketplace: !!formData.get("marketplace"),
      gpt: !!formData.get("gpt"),
      academy: !!formData.get("academy"),
      token: !!formData.get("token"),
      dao: !!formData.get("dao"),
      nationBuilder: !!formData.get("nationBuilder"),
      launchKit: !!formData.get("launchKit"),
      bookBuilder: !!formData.get("bookBuilder"),
      roadmapWhitepaper: !!formData.get("roadmapWhitepaper"),
      apiDocsWiki: !!formData.get("apiDocsWiki"),
      zionBrain: !!formData.get("zionBrain"),
      globalMap: !!formData.get("globalMap"),
      franchiseOnboarding: !!formData.get("franchiseOnboarding"),
      referralAmbassadors: !!formData.get("referralAmbassadors"),
      grantPortal: !!formData.get("grantPortal"),
      trailer: !!formData.get("trailer"),
      bookStore: !!formData.get("bookStore"),
    };

    const payload = {
      instanceName: String(formData.get("instanceName") || ""),
      defaultLanguage: String(formData.get("defaultLanguage") || "en"),
      deploymentRegion: String(formData.get("deploymentRegion") || "us-east-1"),
      tokenActivation: formData.get("tokenActivation") === "on",
      governanceMode: String(formData.get("governanceMode") || "Admin"),
      branding: {
        logoUrl: String(formData.get("logoUrl") || ""),
        primaryColor: String(formData.get("primaryColor") || ""),
        secondaryColor: String(formData.get("secondaryColor") || ""),
        subdomain: String(formData.get("subdomain") || ""),
      },
      modules,
    };

    try {
      const res = await fetch("/api/deploy/genesis", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const err = await res.json().catch(() => ({}));
        throw new Error(err.error || res.statusText);
      }
      const json = await res.json();
      setResult(json);
    } catch (e: any) {
      setError(e.message || "Failed to deploy");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 980, margin: "40px auto", padding: 24 }}>
      <h1 style={{ fontSize: 28, fontWeight: 700 }}>Zion OS Genesis Deploy</h1>
      <p>Route: /deploy/genesis or /zion/init</p>

      <form onSubmit={onSubmit} style={{ marginTop: 16 }}>
        <fieldset style={{ border: "1px solid #333", padding: 16, marginBottom: 16 }}>
          <legend>Deployment Input</legend>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
            <label>
              Instance Name
              <input name="instanceName" required placeholder="My Zion" style={{ width: "100%" }} />
            </label>
            <label>
              Default Language
              <input name="defaultLanguage" defaultValue="en" style={{ width: "100%" }} />
            </label>
            <label>
              Deployment Region
              <input name="deploymentRegion" defaultValue="us-east-1" style={{ width: "100%" }} />
            </label>
            <label>
              Token Activation
              <input name="tokenActivation" type="checkbox" />
            </label>
            <label>
              Governance Mode
              <select name="governanceMode" defaultValue="Admin" style={{ width: "100%" }}>
                <option>Admin</option>
                <option>DAO</option>
                <option>Hybrid</option>
              </select>
            </label>
          </div>
          <div style={{ marginTop: 12, display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 12 }}>
            <label>
              Logo URL
              <input name="logoUrl" placeholder="https://..." style={{ width: "100%" }} />
            </label>
            <label>
              Primary Color
              <input name="primaryColor" placeholder="#000000" style={{ width: "100%" }} />
            </label>
            <label>
              Secondary Color
              <input name="secondaryColor" placeholder="#FFFFFF" style={{ width: "100%" }} />
            </label>
            <label>
              Subdomain
              <input name="subdomain" placeholder="my-zion" style={{ width: "100%" }} />
            </label>
          </div>
        </fieldset>

        <fieldset style={{ border: "1px solid #333", padding: 16, marginBottom: 16 }}>
          <legend>Auto-Deploy Modules</legend>
          <div style={{ columns: 2 }}>
            {[
              ["marketplace", "Marketplace (Jobs, Talent, Quotes)"],
              ["gpt", "ZionGPT Core + Prompt Router"],
              ["academy", "Academy (Courses, AI Tutors, Certification)"],
              ["token", "ZION$ economy, escrow, staking"],
              ["dao", "Voting, Proposals, Governance Constitution"],
              ["nationBuilder", "Multiverse + Digital Country Creator"],
              ["launchKit", "Media, Press, Legal"],
              ["bookBuilder", "Founder Story + System Manifesto"],
              ["roadmapWhitepaper", "Roadmap + Whitepaper (Public docs)"],
              ["apiDocsWiki", "API Docs + Wiki"],
              ["zionBrain", "Auto-agent monitor + reflex logic"],
            ].map(([key, label]) => (
              <label key={String(key)} style={{ display: "block", marginBottom: 8 }}>
                <input type="checkbox" name={String(key)} defaultChecked /> {label}
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset style={{ border: "1px solid #333", padding: 16, marginBottom: 16 }}>
          <legend>Bonus Modules</legend>
          <div style={{ columns: 2 }}>
            {[
              ["globalMap", "Global Map (Multiverse visualizer)"],
              ["franchiseOnboarding", "Franchise Onboarding (white-label)"],
              ["referralAmbassadors", "Referral & Ambassadors"],
              ["grantPortal", "Grant Portal (Incubator)"],
              ["trailer", "Trailer (Auto-script + AI voice prompt)"],
              ["bookStore", "Book Store (hardcover print + chapters)"],
            ].map(([key, label]) => (
              <label key={String(key)} style={{ display: "block", marginBottom: 8 }}>
                <input type="checkbox" name={String(key)} /> {label}
              </label>
            ))}
          </div>
        </fieldset>

        <button type="submit" disabled={loading} style={{ padding: "10px 16px", fontWeight: 600 }}>
          {loading ? "Deploying…" : "Initialize Zion OS"}
        </button>
      </form>

      {error && (
        <div style={{ marginTop: 16, color: "#c00" }}>Error: {error}</div>
      )}

      {result && (
        <div style={{ marginTop: 24 }}>
          <h2 style={{ fontSize: 22, fontWeight: 700 }}>Deployment Complete</h2>
          <p>
            <strong>{result.summary}</strong>
          </p>
          <p>Version: {result.version}</p>
          <details>
            <summary>Generated Assets</summary>
            <ul>
              {result.assets.map((a) => (
                <li key={a.path}>
                  <code>{a.kind}</code> — {a.description || ""} — <code>{a.path}</code>
                </li>
              ))}
            </ul>
          </details>
        </div>
      )}
    </div>
  );
}