import type { Metadata } from "next";

export const metadata = {
  title: "AI Data Warehousing Modernization | Zion Tech Group",
  description:
    "Modernize legacy warehouses with AI data warehousing modernization, ETL automation, and analytics.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Data Warehousing Modernization</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Accelerate analytics by modernizing warehouse pipelines with AI-assisted ingestion and modeling.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Schema and lineage automation</li>
          <li>ETL and ingestion optimization</li>
          <li>Cost-aware storage tiering</li>
          <li>Self-service analytics enablement</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Discuss warehousing modernization</a>
        </p>
      </div>
    </main>
  );
}
