import type { Metadata } from "next";

export const metadata = {
  title: "AI Business Intelligence | Zion Tech Group",
  description:
    "Use AI business intelligence to turn operational data into actionable insights, forecasts, and faster decisions.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Business Intelligence</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Turn operational data into decisions with AI-assisted BI, anomaly detection, and forecasting.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>KPIs and metric automation</li>
          <li>Natural language querying</li>
          <li>Anomaly and trend analysis</li>
          <li>Executive dashboards</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Discuss BI goals</a>
        </p>
      </div>
    </main>
  );
}
