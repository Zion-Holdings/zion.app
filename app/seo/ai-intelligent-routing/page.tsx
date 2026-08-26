import type { Metadata } from "next";

export const metadata = {
  title: "AI Intelligent Routing for Support | Zion Tech Group",
  description:
    "Improve response speed with AI intelligent routing, tiering, and escalation control.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Intelligent Routing</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Connect customers and tickets to the right outcome faster with AI routing.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Intent-based triage</li>
          <li>Skill and capacity-aware assignment</li>
          <li>Escalation path control</li>
          <li>Queue balancing and SLA protection</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Discuss intelligent routing AI</a>
        </p>
      </div>
    </main>
  );
}
