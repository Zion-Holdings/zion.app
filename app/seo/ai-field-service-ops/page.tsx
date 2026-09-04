import type { Metadata } from "next";

export const metadata = {
  title: "AI Field Service Operations | Zion Tech Group",
  description:
    "Improve dispatch and first-time fix rates with AI field service operations support.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Field Service Operations</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Reduce truck rolls and improve outcomes with AI-guided field service operations.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Skill and parts-aware dispatch</li>
          <li>Remote diagnosis and triage</li>
          <li>SLA-aware scheduling</li>
          <li>Technician experience insights</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Discuss field service AI</a>
        </p>
      </div>
    </main>
  );
}
