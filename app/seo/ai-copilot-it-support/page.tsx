import type { Metadata } from "next";

export const metadata = {
  title: "AI Copilot for IT Support | Zion Tech Group",
  description:
    "Deploy an AI copilot for IT support that answers tickets, automates documentation, and enforces policy.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Copilot for IT Support</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Reduce ticket volume and improve resolution quality with an AI copilot integrated into your support workflow.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Ticket classification and routing</li>
          <li>Auto-generated runbooks and KB articles</li>
          <li>Policy-aware answers with citations</li>
          <li>Always-on Tier-1 coverage</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Talk to our team</a>
        </p>
      </div>
    </main>
  );
}
