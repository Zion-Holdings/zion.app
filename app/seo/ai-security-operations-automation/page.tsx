import type { Metadata } from "next";

export const metadata = {
  title: "AI Security Operations Automation | Zion Tech Group",
  description:
    "Automate security operations with AI-driven triage, enrichment, and response playbooks from Zion Tech Group.",

};

export default function Page() {
  return (
    <main style={{ minHeight: "100vh", background: "#020617", color: "#e2e8f0", padding: "2rem" }}>
      <div style={{ maxWidth: "900px", margin: "0 auto" }}>
        <h1 style={{ fontSize: "2.2rem", fontWeight: 700, marginBottom: "1rem" }}>AI Security Operations Automation</h1>
        <p style={{ color: "#cbd5e1", marginBottom: "0.75rem" }}>
          Improve SOC efficiency with AI-driven triage, enrichment, and repeatable response workflows.
        </p>
        <ul style={{ paddingLeft: "1.25rem", marginBottom: "1rem", display: "grid", gap: "0.4rem" }}>
          <li>Alert triage and prioritization</li>
          <li>Threat enrichment and context assembly</li>
          <li>Playbook execution and tracking</li>
          <li>Retention and compliance reporting</li>
        </ul>
        <p style={{ marginBottom: "1rem" }}>
          <a href="https://ziontechgroup.com" style={{ color: "#a78bfa", textDecoration: "underline" }}>Visit ziontechgroup.com</a>
        </p>
        <p>
          <a href="https://calendly.com/kleber-ziontechgroup" style={{ color: "#34d399", textDecoration: "underline" }}>Request security review</a>
        </p>
      </div>
    </main>
  );
}
