import type { Metadata } from "next";

export const metadata = {
  title: "AI Fleet and Logistics Optimization | Zion Tech Group",
  description:
    "Optimize fleet operations and logistics with AI routing, utilization tracking, and predictive maintenance.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Fleet and Logistics Optimization</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Reduce fleet costs and improve delivery reliability with AI-driven route and maintenance planning.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Dynamic route optimization</li>
          <li>Vehicle utilization analytics</li>
          <li>Predictive maintenance scheduling</li>
          <li>Driver safety and exception monitoring</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Discuss fleet AI</a>
        </p>
      </div>
    </main>
  );
}
