import type { Metadata } from "next";

export const metadata = {
  title: "AI Fraud Detection | Zion Tech Group",
  description:
    "Reduce fraud loss with AI detection models, rules, and investigation workflows tailored for business and finance teams.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Fraud Detection</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Catch anomalies earlier and reduce false positives with AI-assisted fraud detection workflows.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Real-time anomaly scoring</li>
          <li>Investigation case routing</li>
          <li>Policy and threshold tuning</li>
          <li>Compliance-ready audit trails</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Request fraud review</a>
        </p>
      </div>
    </main>
  );
}
