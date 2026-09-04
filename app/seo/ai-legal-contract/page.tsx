import type { Metadata } from "next";

export const metadata = {
  title: "AI Legal and Contract Intelligence | Zion Tech Group",
  description:
    "Automate legal and contract workflows with AI extraction, clause review, and obligation tracking.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Legal and Contract Intelligence</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Reduce contract review time and improve compliance with AI-assisted legal workflows.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Clause extraction and summarization</li>
          <li>Obligation and renewal tracking</li>
          <li>Risk scoring and redlining</li>
          <li>Negotiation playbook support</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Review legal AI</a>
        </p>
      </div>
    </main>
  );
}
