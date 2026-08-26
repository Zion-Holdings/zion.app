import type { Metadata } from "next";

export const metadata = {
  title: "AI Aviation and Aerospace Operations | Zion Tech Group",
  description:
    "Deploy AI aviation and aerospace solutions for maintenance, logistics, and operational decision support.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Aviation and Aerospace Operations</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Improve safety and utilization with AI-assisted maintenance, logistics, and operational planning.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Predictive maintenance</li>
          <li>Logistics and parts optimization</li>
          <li>Operational risk monitoring</li>
          <li>Training and procedure support</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Discuss aviation AI</a>
        </p>
      </div>
    </main>
  );
}
