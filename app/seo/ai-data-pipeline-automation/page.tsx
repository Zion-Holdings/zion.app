import type { Metadata } from "next";

export const metadata = {
  title: "AI Data Pipeline Automation | Zion Tech Group",
  description:
    "Automate data pipelines with AI-assisted ingestion, validation, and monitoring built for IT and analytics teams.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Data Pipeline Automation</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Reduce pipeline toil with AI-assisted ingestion, transformation, and observability.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Schema and lineage inference</li>
          <li> anomaly detection in ETL/ELT flows</li>
          <li>Automated retry and fallback logic</li>
          <li>Cost-aware execution tuning</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Book data engineering review</a>
        </p>
      </div>
    </main>
  );
}
