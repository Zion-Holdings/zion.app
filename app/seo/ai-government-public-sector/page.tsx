import type { Metadata } from "next";

export const metadata = {
  title: "AI for Government and Public Sector | Zion Tech Group",
  description:
    "Explore AI for government and public sector services: automation, citizen experience, and secure operations.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI for Government and Public Sector</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Improve public services with AI-assisted workflows, secure data handling, and citizen-centric automation.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Citizen request triage and routing</li>
          <li>Compliance and audit automation</li>
          <li>Predictive resource planning</li>
          <li>Secure document processing</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Request public sector briefing</a>
        </p>
      </div>
    </main>
  );
}
