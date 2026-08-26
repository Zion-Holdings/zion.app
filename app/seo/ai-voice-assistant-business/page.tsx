import type { Metadata } from "next";

export const metadata = {
  title: "AI Voice Assistant for Business | Zion Tech Group",
  description:
    "Improve support and operations with AI voice assistants for call handling, routing, and escalation.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Voice Assistant for Business</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Automate voice interactions while preserving human escalation paths.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Inbound triage and routing</li>
          <li>After-hours coverage</li>
          <li>Escalation and handoff rules</li>
          <li>CRM and ticketing integration</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Explore voice assistant AI</a>
        </p>
      </div>
    </main>
  );
}
