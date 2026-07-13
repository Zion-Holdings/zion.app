import type { Metadata } from "next";

export const metadata = {
  title: "AI Governance and Trust | Zion Tech Group",
  description:
    "Establish AI governance and trust with policy, auditability, and responsible deployment practices from Zion Tech Group.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Governance and Trust</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Reduce AI risk with governance frameworks, evaluation protocols, and compliance-ready deployment patterns.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Policy and approval workflows</li>
          <li>Bias and safety evaluation</li>
          <li>Audit logging and traceability</li>
          <li>Regulatory alignment checklists</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Request governance review</a>
        </p>
      </div>
    </main>
  );
}
