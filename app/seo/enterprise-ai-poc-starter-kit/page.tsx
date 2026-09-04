import type { Metadata } from "next";

export const metadata = {
  title: "Enterprise AI PoC Starter Kit | Zion Tech Group",
  description:
    "Start a structured enterprise AI PoC with Zion Tech Group using this starter kit: scope, metrics, and implementation support.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>
          Enterprise AI PoC Starter Kit
        </h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Reduce AI PoC risk with a scoped starter kit, clear metrics, and implementation support.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Use-case selection template</li>
          <li>Success metrics and guardrails</li>
          <li>Integration checklist</li>
          <li>Stakeholder briefing pack</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>
            Visit ziontechgroup.com
          </a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>
            Schedule PoC planning
          </a>
        </p>
      </div>
    </main>
  );
}
