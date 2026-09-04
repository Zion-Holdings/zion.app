import type { Metadata } from "next";

export const metadata = {
  title: "AI Smart City Solutions | Zion Tech Group",
  description:
    "Explore AI smart city solutions for traffic, utilities, public safety, and citizen services.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Smart City Solutions</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Improve urban operations with AI-assisted traffic, safety, and utility optimization.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Traffic flow optimization</li>
          <li>Public safety analytics</li>
          <li>Utility demand forecasting</li>
          <li>Citizen request triage</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Discuss smart city AI</a>
        </p>
      </div>
    </main>
  );
}
