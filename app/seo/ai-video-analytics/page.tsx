import type { Metadata } from "next";

export const metadata = {
  title: "AI Video Analytics for Business | Zion Tech Group",
  description:
    "Extract insights from live and recorded video with AI video analytics, monitoring, and safety workflows.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Video Analytics</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Use video streams for operational safety and analytics with AI video understanding.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Object, event, and anomaly detection</li>
          <li>Real-time alerting and dashboards</li>
          <li>Incident clip extraction and review</li>
          <li>Privacy-preserving pipeline options</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Discuss video analytics AI</a>
        </p>
      </div>
    </main>
  );
}
