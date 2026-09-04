import type { Metadata } from "next";

export const metadata = {
  title: "AI Observability Free Trial | Zion Tech Group",
  description:
    "Start an AI observability free trial with Zion Tech Group for IT operations, MLOps, and automated incident response.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Observability Free Trial</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Improve reliability with AI-assisted observability, anomaly detection, and incident response.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Automated anomaly detection</li>
          <li>MLOps monitoring and alerting</li>
          <li>Incident runbook automation</li>
          <li>Free 14-day guided trial</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Start observability trial</a>
        </p>
      </div>
    </main>
  );
}
