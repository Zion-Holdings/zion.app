import type { Metadata } from "next";

export const metadata = {
  title: "AI Enterprise Copilot Free Resources | Zion Tech Group",
  description:
    "Free resources and starter assets for evaluating an AI enterprise copilot with Zion Tech Group.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>
          AI Enterprise Copilot Free Resources
        </h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Explore free assets for evaluating an AI copilot across enterprise IT support and operations.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Support workflow templates</li>
          <li>Policy and escalation playbooks</li>
          <li>Readiness checklist</li>
          <li>Proof-of-concept guide</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>
            Visit ziontechgroup.com
          </a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>
            Schedule a free consultation
          </a>
        </p>
      </div>
    </main>
  );
}
