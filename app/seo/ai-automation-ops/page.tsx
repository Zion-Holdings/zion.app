import type { Metadata } from "next";

export const metadata = {
  title: "AI Automation Ops for IT Leaders | Zion Tech Group",
  description:
    "Improve reliability with AI automation ops, change intelligence, and runbook automation.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Automation Ops</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Reduce repeat incidents and improve change success with AI automation ops.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Runbook and playbook generation</li>
          <li>Change risk and blast-radius review</li>
          <li>Incident pattern prevention</li>
          <li>Automation health monitoring</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Review automation ops AI</a>
        </p>
      </div>
    </main>
  );
}
