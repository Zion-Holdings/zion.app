import type { Metadata } from "next";

export const metadata = {
  title: "AI Supply Chain Optimization | Zion Tech Group",
  description:
    "Improve logistics and inventory decisions with AI supply chain optimization and predictive planning.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Supply Chain Optimization</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Reduce disruption and improve planning accuracy with AI-assisted supply chain control.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Predictive demand and inventory planning</li>
          <li>Supplier risk monitoring</li>
          <li>Route and logistics optimization</li>
          <li>Exception management</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Request supply chain review</a>
        </p>
      </div>
    </main>
  );
}
