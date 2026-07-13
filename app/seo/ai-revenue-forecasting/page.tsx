import type { Metadata } from "next";

export const metadata = {
  title: "AI Revenue Forecasting | Zion Tech Group",
  description:
    "Improve forecast accuracy with AI revenue forecasting that blends pipeline signals, history, and operational data.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Revenue Forecasting</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Improve planning reliability with AI-assisted forecasting and pipeline intelligence.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Pipeline-aware revenue models</li>
          <li>Seasonality and trend detection</li>
          <li>Exception and variance analysis</li>
          <li>Executive reporting dashboards</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Book forecasting review</a>
        </p>
      </div>
    </main>
  );
}
