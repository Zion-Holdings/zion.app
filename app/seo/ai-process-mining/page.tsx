import type { Metadata } from "next";

export const metadata = {
  title: "AI Process Mining for Operations | Zion Tech Group",
  description:
    "Discover bottlenecks and improve workflow efficiency with AI process mining and automation-ready insights.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Process Mining</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Turn operational data into actionable insights with AI process mining.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Process discovery and mapping</li>
          <li>Bottleneck detection and prioritization</li>
          <li>Automation opportunity scoring</li>
          <li>Conformance and compliance checking</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Request process mining review</a>
        </p>
      </div>
    </main>
  );
}
